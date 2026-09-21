# WSJF and CD3

CD3 (Cost of Delay Divided by Duration) and WSJF (Weighted Shortest Job First) are prioritization rules that schedule work by **value density**: how much delay cost is removed per unit of scarce capacity consumed. Under a shared, fixed capacity, highest-CD3-first is the mathematically optimal sequence for minimizing total delay cost.

## Why it matters

Every backlog is a rationing problem: many worthy items, one pipeline. Health economics solved the same problem for health budgets with cost-effectiveness league tables — rank interventions by health gained per pound, fund down the list until the budget exhausts. CD3 is the identical logic for delivery capacity: benefit per unit of the *constrained resource*, funded in rank order. Getting sequencing right is free money — same work, same capacity, less total delay cost.

## The math

```
CD3  = Cost of Delay (£/week) / Duration (weeks)      — real units (Black Swan Farming)

WSJF = (user-business value + time criticality + risk reduction/opportunity
        enablement) / job size                         — SAFe's relative-scale proxy,
                                                        modified-Fibonacci scores
```

CD3 with genuine currency ([cost of delay](../cost-of-delay/)) is strictly stronger than WSJF's unitless points — WSJF is to CD3 what multi-criteria scoring is to full [cost-utility analysis](../cost-utility-analysis/): usable when monetization is impractical, gameable when the scores have no anchor.

## Worked example

Three features, one team:

```
Feature   CoD (£/wk)   Duration   CD3
A         30,000       10 wks     3,000
B         12,000       2 wks      6,000
C         5,000        1 wk       5,000
```

CD3 order: B, C, A. Compare total delay cost against "biggest CoD first" (A, B, C):

```
CD3 order  (B,C,A): A waits 3 wks, C waits 2 → 30k×3 + 5k×2  = £100k delay cost
CoD order  (A,B,C): B waits 10, C waits 12   → 12k×10 + 5k×12 = £180k
```

Same features, same team — sequencing alone saves £80,000. The intuition: small, urgent items go first because they release their delay cost cheaply; the big item loses little by waiting briefly.

## Software engineering connection

For healthcare software portfolios, denominate CoD in the units this repo teaches: QALYs/week × threshold + operational £/week, and the backlog becomes directly commensurable with how the health system ranks everything else it buys. Two practice notes: (1) duration means *calendar time occupying the constraint*, not effort — a 2-week elapsed item that needs 2 days of the bottleneck team is cheaper than it looks (see [downstream resource optimization](../downstream-resource-optimization/)); (2) hospitals run the same rule implicitly when they order theatre lists by urgency-weighted throughput — clinical prioritization categories are severity-weighted CD3 (see [QALY shortfall and severity modifiers](../qaly-shortfall-and-severity-modifiers/)).

## Pitfalls

- **WSJF score theater**: unitless Fibonacci debates converge on whoever argues loudest; anchor at least the top-of-backlog items in real CoD.
- **Duration gaming**: splitting items to inflate CD3 rank — fine when splits deliver value independently, fraud when they don't.
- **Ignoring urgency profiles**: deadline-shaped CoD (regulatory dates) breaks the steady-rate assumption; schedule those by date feasibility, then CD3 the rest.
- **Re-ranking churn**: CD3 is for sequencing decisions at commitment time, not for daily reshuffling of in-flight work (see [flow metrics](../flow-metrics/) on WIP).

## Sources

- Black Swan Farming, CD3 and WSJF. <https://blackswanfarming.com/wsjf-weighted-shortest-job-first/>
- SAFe, WSJF. <https://framework.scaledagile.com/wsjf>
- Reinertsen DG, *The Principles of Product Development Flow*.
