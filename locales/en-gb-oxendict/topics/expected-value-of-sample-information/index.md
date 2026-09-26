# Expected Value of Sample Information (EVSI)

EVSI is the value of a *specific proposed study* — a given design, a given sample size — before it is run, as opposed to [EVPI](../expected-value-of-perfect-information/), which prices eliminating all uncertainty outright. EVSI answers the question a research funder actually faces: "is *this* trial, at *this* size, worth its cost?"

## Why it matters

EVPI tells you the ceiling on what any research could be worth; it never tells you whether the trial in front of you clears the bar. A national research funder choosing between a 50-patient pilot and a 500-patient definitive trial needs to know how much *each specific design* is worth, not just the value of omniscience. EVSI supplies that number, and because it scales with sample size, it lets a funder find the sample size that maximises expected net benefit rather than guessing.

This is also why EVSI is always less than or equal to EVPI: a finite sample can only partially resolve uncertainty, and a study that appears to be worth more than perfect information is a sign the calculation is wrong, not a real result.

## The maths

```
General:
EVSI(n) = E_data[ max_d E_θ|data[NB(d,θ)] ]  −  max_d E_θ[NB(d,θ)]
  (nested expectation: outer over possible study results, inner over the
  posterior belief about θ after seeing that result — usually estimated by
  nested Monte Carlo / Bayesian updating over probabilistic sensitivity
  analysis draws)

Closed-form normal approximation (single uncertain parameter, conjugate
normal-normal model — a standard shortcut, not exact for every model):
EVSI(n) = EVPI × n / (n + n0)

n  = proposed study's sample size
n0 = "prior-equivalent sample size" — the size of an imaginary sample that
     would carry the same information as the current prior, derived from
     the ratio of data variance to prior variance
ENBS(n) = EVSI(n) − Cost(n)
Population EVSI = per-decision EVSI × decisions affected
```

The general form is a nested expectation because a study's future result is itself uncertain: you must average over every possible dataset the study could produce, and for each one recompute the best decision given the updated (posterior) belief. The closed-form normal approximation trades that computational cost for a single ratio, valid when the uncertain parameter and the data are (approximately) normally distributed and conjugate — a convenience, not a universal law. Full nested Monte Carlo is the general-purpose method when that assumption does not hold. See [probabilistic sensitivity analysis](../probabilistic-sensitivity-analysis/) for the PSA draws EVSI is usually estimated from.

## Worked example

Building on the [EVPI](../expected-value-of-perfect-information/) worked example — rolling out an AI documentation assistant to 5,000 clinicians, where EVPI was found to be £1.2M — express the same EVPI here in whole pounds: **EVPI = £1,200,000**.

A proposed pilot study of 50 clinicians is on the table. From the ratio of the prior belief's variance to the pilot's measurement precision, the prior-equivalent sample size works out to `n0 = 75`:

```
EVSI(50) = 1,200,000 × 50 / (50 + 75)
         = 1,200,000 × 50 / 125
         = 1,200,000 × 0.4
         = £480,000
```

The pilot costs £120,000:

```
ENBS = EVSI − Cost = 480,000 − 120,000 = £360,000
```

A clearly positive ENBS: fund the pilot. If the same procurement decision recurs across 3 similar regional trusts, the pilot's value scales:

```
Population EVSI = 480,000 × 3 = £1,440,000
```

## Software engineering connection

EVSI is the economics of choosing *how big* a pilot or A/B test should be, not just whether to run one at all:

- **Sample-size-as-investment decision.** A 50-user beta and a 5,000-user staged rollout are different "studies" with different EVSIs and different costs — EVSI lets you compare them on the same basis instead of defaulting to "more data is always better."
- **ENBS, not EVSI alone, is the commissioning test.** A study with high EVSI but a cost that eats most of it is a weak proposal; the decision rule is expected net benefit of sampling, exactly as a business case nets benefit against cost rather than reporting benefit alone.
- **Diminishing returns are explicit.** Because EVSI(n) rises with `n/(n+n0)`, doubling a pilot's size never doubles its value — a formal version of the engineering instinct that a bigger experiment has diminishing marginal information value.

## Pitfalls

- **Applying the normal approximation outside its assumptions.** It only holds for roughly-conjugate, single-parameter uncertainty; a genuinely nonlinear or multi-parameter decision model needs full nested Monte Carlo, not this shortcut.
- **Comparing EVSI to cash cost alone.** EVSI must be weighed against the *full* cost of the study, including its own decision-delay cost — see [cost of delay](../cost-of-delay/) — not just the study's invoice.
- **Treating EVSI > EVPI as a real finding.** EVSI can never exceed EVPI by construction; a calculation that produces this is a modelling bug, not a discovery.

## Sources

- Ades AE, Lu G, Claxton K. "Expected value of sample information calculations in medical decision modeling." Medical Decision Making 2004;24(2):207-27.
- Willan AR, Pinto EM. "The value of information and optimal clinical trial design." Statistics in Medicine 2005;24(12):1791-806.
- Strong M, Oakley JE. "When is a model-based value of information analysis feasible?" Medical Decision Making 2014.
