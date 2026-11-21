# Flow Metrics

Flow metrics measure how work moves through a delivery system: cycle time, lead time, throughput, work in progress (WIP), and flow efficiency. They are governed by Little's Law — the same queueing maths that governs hospital beds and waiting lists.

## Why it matters

Most delivery time is not work — it is waiting. Flow-efficiency studies of knowledge work routinely find items actively worked on only **5–15%** of their elapsed time; the rest is queues. That means the cheapest acceleration is queue removal, not hiring — precisely the insight hospital patient-flow programmes discovered about beds. For anything with a [cost of delay](../cost-of-delay/), flow metrics locate where the delay cost accrues.

## The maths

```
Cycle time      = t(finished) − t(started)
Lead time       = t(delivered) − t(requested)     (includes pre-work queue)
Throughput      = items completed / period
WIP             = items started but unfinished
Flow efficiency = active time / (active + wait time) × 100

Little's Law:  average WIP = throughput × average cycle time
               (equivalently: cycle time = WIP / throughput)
```

Little's Law is the lever: at fixed throughput, cutting WIP cuts cycle time proportionally. It also runs hospitals: `beds occupied = admissions/day × length of stay`.

## Worked example

A team has 40 items in progress and completes 10/week: cycle time = 40/10 = 4 weeks. They impose WIP limits, cutting WIP to 15: cycle time = 15/10 = **1.5 weeks** — same people, same throughput, 62% faster delivery, purely from queue discipline.

Priced with CoD: if items average £3,000/week of delay cost, each item now spends 2.5 fewer weeks queued: 10 items/week × 2.5 × 3,000 = **£75,000/week of delay cost eliminated** — from a policy change costing nothing.

Hospital mirror: 40 admissions/day × 6.0 days LOS = 240 beds; cut the non-clinical waiting inside LOS to 5.6 days and 16 beds free up ([length of stay](../length-of-stay/)) — same law, same lever.

## Software engineering connection

Flow metrics are the shared language between delivery engineering and health operations:

- **PR sub-stage benchmarks** (LinearB, ~8M PRs): elite pickup time < 7h, review < 6h, total cycle < ~26h — pickup time is pure queue, the first thing to attack.
- **[Waiting lists](../waiting-list-impact/)** are backlogs; **[RTT](../referral-to-treatment/)** is lead time; **[bed occupancy](../bed-days-saved/)** is WIP. Improvement transfers in both directions: WIP limits ↔ admission smoothing; queue-time instrumentation ↔ pathway-stage tracking.
- Flow efficiency under 15% is normal in both domains, and both hide it because *people* are busy while *work* waits — measure the work's clock, not the workers'.

## Pitfalls

- **Utilisation worship**: driving worker utilisation toward 100% explodes queue times nonlinearly (M/M/1: wait ∝ ρ/(1−ρ)) — the reason 95%-occupied hospitals gridlock and 95%-allocated teams stall.
- **Averages over skewed distributions**: cycle times are heavy-tailed; forecast with percentiles (p85), not means.
- **Cutting WIP by rejecting work upstream** and calling it flow improvement — the demand didn't vanish, it queued outside the measurement boundary (the hospital version: ambulances waiting outside the ED).

## Sources

- Little's Law and flow metrics overviews. <https://agility-at-scale.com/safe/lpm/flow-metrics/> ; <https://getdx.com/blog/flow-metrics/>
- LinearB engineering benchmarks. <https://linearb.io/resources/engineering-benchmarks>
- Reinertsen DG, *The Principles of Product Development Flow*.
