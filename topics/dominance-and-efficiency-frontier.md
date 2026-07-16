# Dominance and the Efficiency Frontier

An option is **dominated** if another option costs less *and* delivers more. The **efficiency frontier** is what remains after eliminating dominated options: the set of choices where getting more requires paying more.

## Why it matters

Before any debate about thresholds or budgets, health technology assessment first eliminates options nobody should ever pick. Plotting every option on a cost-vs-effect plane and drawing the frontier is a five-minute exercise that routinely kills half a shortlist. Incremental comparisons ([ICERs](incremental-cost-effectiveness-ratio.md)) are then computed only *along the frontier*, each option against the next-cheapest non-dominated one — never against "do nothing" when better intermediate options exist.

## The math

```
Strict dominance:   A dominates B if Cost_A ≤ Cost_B and Effect_A ≥ Effect_B
                    (with at least one strict inequality)

Extended dominance: B is ruled out if a mix of A and C achieves more effect
                    per pound — detected when ICERs decrease as you move up
                    the frontier. Valid frontier ICERs must be increasing.
```

Procedure: sort options by effect; remove strictly dominated ones; compute pairwise ICERs between neighbors; remove any option whose ICER exceeds that of the next more-effective option (extended dominance); repeat until ICERs increase monotonically.

## Worked example

Four options for reducing missed appointments (effect = appointments recovered/year):

```
Option          Cost/yr    Recovered
Do nothing      £0         0
SMS reminders   £20,000    2,000
Phone calls     £120,000   2,200
SMS + AI triage £90,000    3,500
```

Phone calls are **strictly dominated** by SMS + AI triage (costs more, recovers fewer). Frontier: nothing → SMS → SMS + AI.

```
ICER(SMS vs nothing)   = 20,000 / 2,000  = £10 per appointment recovered
ICER(SMS+AI vs SMS)    = (90,000 − 20,000) / (3,500 − 2,000) = £46.67 per appointment
```

Increasing ICERs → valid frontier. At ~£160 saved per recovered hospital appointment (see [did-not-attend rate](did-not-attend-rate.md)), both frontier steps are worth taking; the phone-bank proposal should never reach the committee.

## Software engineering connection

Build the same chart for any tooling decision: cost per year on one axis, measured outcome (hours saved, incidents avoided, deploys enabled) on the other. Points up-and-left of the frontier are eliminated before anyone argues about budget. This reframes vendor selection from feature-checklist debates to "you are dominated; the meeting is over." It also exposes the common enterprise pattern of buying the most expensive option for a marginal gain — legitimate only if the incremental price per incremental unit is one the org would knowingly pay.

## Pitfalls

- **Comparing everything to baseline** instead of to the next option on the frontier — this flatters expensive options by hiding cheaper near-equivalents.
- **Single-dimension effect scores** that hide what matters; if two outcomes count, either combine them defensibly (see [cost-utility analysis](cost-utility-analysis.md)) or show two frontiers.
- **Forgetting uncertainty**: options near the frontier may swap places under [sensitivity analysis](sensitivity-analysis.md).

## Sources

- York Health Economics Consortium glossary: dominance. <https://yhec.co.uk/glossary/dominance/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
