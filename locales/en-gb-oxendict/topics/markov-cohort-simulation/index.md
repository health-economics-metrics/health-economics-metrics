# Markov Cohort Simulation

A Markov cohort model is the standard HTA modelling technique for interventions whose effects unfold over multiple time periods (cycles), not in a single shot. A hypothetical cohort starts entirely in one health state, and each cycle a fixed set of transition probabilities move fractions of the cohort between states; costs and QALYs accrue each cycle in proportion to how much of the cohort occupies each state, and are discounted back to present value. Any software engineer modelling a multi-year digital-health business case — where users or patients move between states such as "engaged", "lapsed", or "churned" over time — is building the same structure.

## Why it matters

Most real health-technology decisions are not one-shot comparisons of a single period's cost and outcome. A chronic condition progresses, relapses, responds to treatment, or kills, over years — and a single-period [cost-effectiveness analysis](../cost-effectiveness-analysis/) cannot represent that. NICE, ICER, and CADTH submissions for chronic-disease interventions, appraised via [health technology assessment](../health-technology-assessment/), are almost always built as Markov cohort models with a lifetime time horizon, because the alternative — modelling every possible individual patient pathway — is intractable at scale. The cohort-level Markov model trades some individual-level realism (it can't easily represent memory of past states, hence "Markov": the future depends only on the current state) for a model that is transparent, auditable, and fast enough to run thousands of times in a [probabilistic sensitivity analysis](../probabilistic-sensitivity-analysis/).

## The maths

```
One cycle's cohort update (row-vector x transition matrix):
  new_state[j] = sum_i state[i] * transition_matrix[i][j]

One cycle's cost:
  cycle_cost = sum_s state[s] * cost_per_cycle[s]

One cycle's QALYs:
  cycle_qalys = sum_s state[s] * utility[s] * cycle_length_years

Full simulation over `cycles` cycles, discounted at `discount_rate`:
  total_discounted_cost  = sum_{t=0}^{cycles-1} cycle_cost(state_t)  / (1 + discount_rate)^t
  total_discounted_qalys = sum_{t=0}^{cycles-1} cycle_qalys(state_t) / (1 + discount_rate)^t
  where state_0 = initial_distribution, state_{t+1} = advance_cohort(state_t, transition_matrix)
```

Discounting each cycle back to present value uses exactly the [discounting and time preference](../discounting-and-time-preference/) formula, applied cycle-by-cycle instead of year-by-year.

## Worked example

**Clinical**: a 2-state model — `Well` and `Dead` — where 10% of the cohort dies each cycle and `Dead` is absorbing (its self-transition probability is 1.0; omitting that self-loop would make cohort mass vanish after one cycle in `Dead`). The cohort starts entirely `Well`, costs £1,000 per cycle while `Well` (£0 once `Dead`), and gains 0.8 QALYs per year while `Well`. Simulated for 3 annual cycles at NICE's 3.5% discount rate:

```
Cycle 0: state = [1.00, 0.00] (100% Well)
  cost = £1,000.00, qalys = 0.800, discount factor = 1.000000
  discounted: cost = £1,000.00, qalys = 0.8000

Cycle 1: state = [0.90, 0.10] (90% Well, 10% Dead)
  cost = £900.00, qalys = 0.720, discount factor = 0.966184
  discounted: cost = £869.57, qalys = 0.6957

Cycle 2: state = [0.81, 0.19] (81% Well, 19% Dead)
  cost = £810.00, qalys = 0.648, discount factor = 0.933511
  discounted: cost = £756.14, qalys = 0.6049

Total discounted cost  ≈ £2,625.71
Total discounted QALYs ≈ 2.1006
```

Each cycle's state is last cycle's state carried through the transition matrix — 90% of the 90% still `Well` at cycle 1 stays `Well` at cycle 2 (0.9 × 0.9 = 0.81), while the other 19% has now died (0.9 × 0.1 + 0.1 × 1.0 = 0.19). Note that the cohort never fully empties `Well`: with a constant 10% per-cycle mortality and no re-entry, the `Well` fraction decays geometrically rather than hitting zero at any finite cycle count.

## Software engineering connection

For how a multi-cycle HTA model is used inside a real appraisal, see [health technology assessment](../health-technology-assessment/) — the reference case that governs which discount rate, utility source, and time horizon a submitted Markov model must use.

A Markov cohort model is structurally a state machine with probabilistic transitions, run for a fixed number of ticks, discounting each tick's value. The same shape simulates a user cohort's retention/state transitions over time — see [DORA metrics](../dora-metrics/) for the operational-reliability version of "what fraction of the system is in a degraded state this period, and what does that cost". Concretely:

- **Retention/churn modelling** is a Markov cohort model with states like "active", "at risk", "churned": a fixed monthly transition matrix, run for 12 or 24 monthly cycles, tells you the expected active-user count (and revenue) at any future month, the same way `Well`/`Dead` tells you expected survivors.
- **Reliability and incident economics**: a system's states (healthy, degraded, down) can be modelled the same way, with a "cost per cycle" of downtime harm accruing while the system occupies the degraded/down states — turning an incident-frequency argument into a discounted-cost argument comparable against the cost of the reliability work that would change the transition probabilities.
- **Absorbing states as terminal states**: `Dead` in a clinical model is exactly a "cancelled subscription" or "permanently offline" state in a software model — both need an explicit self-transition probability of 1.0, or the simulation silently loses mass.

## Pitfalls

- **Transition probabilities that don't sum to 1 per row.** A row that sums to more or less than 1 silently makes the cohort "leak" or "grow" mass each cycle — always check row sums before trusting a model's output, since nothing about the model structure itself flags the error.
- **Cycle length too coarse for the disease's real dynamics.** An annual cycle for a condition that meaningfully changes state within weeks understates transitions that happen mid-cycle; pick a cycle length short relative to how fast the modelled process actually moves.
- **Forgetting an absorbing state's self-loop.** An absorbing state (death, permanent discontinuation) needs a self-transition probability of exactly 1.0. Omit it and the cohort's mass in that state evaporates after a single cycle, understating cumulative costs or QALY loss.
- **Treating the model as validated because it runs.** A Markov cohort model with plausible-looking transition probabilities can still be structurally wrong (missing states, wrong absorbing behaviour); validate against known epidemiological benchmarks (e.g. does modelled survival at 5 years match published survival curves) before trusting the output.

## Sources

- Sonnenberg FA, Beck JR. "Markov models in medical decision making: a practical guide." Medical Decision Making. 1993;13(4):322-38. <https://pubmed.ncbi.nlm.nih.gov/8246705/>
- Briggs A, Sculpher M. "An introduction to Markov modelling for economic evaluation." PharmacoEconomics. 1998;13(4):397-409. <https://pubmed.ncbi.nlm.nih.gov/10178664/>
