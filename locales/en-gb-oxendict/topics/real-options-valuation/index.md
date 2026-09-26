# Real Options Valuation

Real options valuation applies financial option-pricing logic to real (non-financial-market) investment decisions — specifically, the *option to expand* a project later if it succeeds, without being obligated to. A simplified one-period binomial model (Cox, Ross, Rubinstein, 1979) values this flexibility directly, turning "let's ship small and see" from a hunch into a priced-in number.

## Why it matters

A static NPV calculation prices a project as an all-or-nothing bet: fund it or don't, at today's scale, forever. Real projects — and especially phased digital health rollouts — are rarely bet that way: a health system can fund a small pilot, watch what happens, and only commit further money if it works. That flexibility has real value, and ignoring it systematically undervalues staged investments relative to one-shot ones, which is exactly backwards for procurement processes that reward the safer-looking phased proposal. Real options valuation prices the flexibility itself, so a phased proposal can be compared fairly against a full-commitment alternative rather than penalised for looking smaller on a naive NPV line.

## The maths

```
Risk-neutral probability of the "up" state:
  p = ((1 + risk_free_rate) − down_factor) / (up_factor − down_factor)

Expansion payoff in each state (floored at zero — expanding is optional):
  payoff_up   = max(project_value × up_factor   − expansion_cost, 0)
  payoff_down = max(project_value × down_factor − expansion_cost, 0)

Option value (discounted expected payoff):
  option_value = (p × payoff_up + (1 − p) × payoff_down) / (1 + risk_free_rate)

Expanded NPV = static_npv + option_value
```

The project's value either rises (`up_factor`) or falls (`down_factor`) by the next decision point. Expanding is only exercised if it's profitable in that state — the payoff floor at zero is what makes this a genuine *option* rather than an obligation. For pricing the option to gather information first, rather than the option to expand later, see [expected value of perfect information](../expected-value-of-perfect-information/). For the cost of waiting to make that decision, see [cost of delay](../cost-of-delay/).

## Worked example

A digital service pilot with `project_value = £1,000,000`, a possible rise to 1.5× or fall to 0.5× by the next decision point, an 8% risk-free rate, and an expansion cost of £600,000:

```
p = (1.08 − 0.5) / (1.5 − 0.5) = 0.58

payoff_up   = max(1,000,000 × 1.5 − 600,000, 0) =  900,000
payoff_down = max(1,000,000 × 0.5 − 600,000, 0) = max(−100,000, 0) = 0

The floor matters: the option would NOT be exercised if the market
disappoints — the £600,000 expansion cost exceeds the £500,000 the
project would be worth in the down state.

option_value = (0.58 × 900,000 + 0.42 × 0) / 1.08
             = 522,000 / 1.08
             ≈ £483,333.33
```

Adding the option's value to a static-NPV baseline of £200,000: expanded NPV = 200,000 + 483,333.33 ≈ **£683,333.33**. Reporting the £200,000 static NPV alone, without this option value, would understate the phased project's true worth by more than double.

## Software engineering connection

This is the formal version of "ship a minimum version now, keep the option to invest further if it takes off" — directly relevant to a phased digital health product rollout, structurally parallel to [cost of delay](../cost-of-delay/) and [WSJF/CD3](../wsjf-and-cd3/)'s sequencing-under-uncertainty framing, and complementary to [expected value of perfect information](../expected-value-of-perfect-information/) and [expected value of sample information](../expected-value-of-sample-information/) — all three price flexibility or information under uncertainty, from different angles.

## Pitfalls

- **Borrowing risk-neutral pricing without the traded-asset assumption it relies on**: real options models borrow risk-neutral probability from financial option pricing, which assumes the underlying value is a *traded* asset — for a genuinely non-traded real project this is a modelling convenience, not a literal market fact.
- **Treating `up_factor`/`down_factor` as free parameters**: the binomial up/down inputs are themselves assumptions requiring justification, not free parameters chosen to produce a desired answer.
- **Reporting the option value alone**: real options value is *additive* to a standalone project's static NPV — a common error is reporting only the option value and dropping the base case, which overstates the case if the static NPV is negative and understates it (as in the worked example above) when the static NPV is left out entirely.

## Sources

- Cox JC, Ross SA, Rubinstein M. "Option pricing: a simplified approach." J Financ Econ. 1979;7(3):229-63.
- Trigeorgis L. *Real Options: Managerial Flexibility and Strategy in Resource Allocation*. MIT Press. 1996.
- Driffield T, Smith PC. "A real options approach to watchful waiting: theory and an illustration." Med Decis Making. 2007;27(2):178-88 — ties real options directly to a health-economics decision context. <https://pubmed.ncbi.nlm.nih.gov/17395932/>
