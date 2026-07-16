# Cloud Unit Economics (FinOps)

Cloud unit economics translate raw cloud spend into **cost per unit of output** — per customer, per transaction, per case resolved, per token. It is the FinOps capability that turns "our AWS bill is £400k/month" into "serving one patient costs £0.83."

## Why it matters

Total spend numbers can't answer the questions that matter: is the product getting more or less efficient? Does growth improve or destroy margin? What should we charge? Unit costs answer all three. For digital health specifically, "cost per case resolved" *is* a health-service unit cost — directly comparable to the [National Cost Collection](national-tariff-and-unit-costs.md) figures a commissioner uses for every other service, which makes it the natural language for pricing digital pathways against traditional ones.

## The math

```
Unit cost = total allocated cost (incl. shared/platform costs) / units delivered

Two families:
  resource-efficiency units: cost/GB stored, cost/vCPU-hour, cost/token,
                             cost/build-minute
  business units:            cost/customer, cost/transaction, cost/consultation,
                             cost/case-resolved

Marginal vs average discipline applies (marginal-vs-average-cost.md):
committed/reserved spend makes marginal unit cost ≈ 0 until the next
commitment step — price expansion decisions at marginal, efficiency
trends at average.
```

## Worked example

A digital triage service: cloud spend £62,000/month (compute £30k, data £18k, shared platform allocation £14k), handling 380,000 triage episodes/month:

```
Average cost per episode = 62,000 / 380,000 ≈ £0.163

Commissioner comparison: telephone triage ≈ £8–12/call, GP consultation ≈ £42
→ digital episode runs at ~2% of the cheapest human alternative — the
channel-shift economics of gds-service-metrics.md, from the cost side.

Trend check: last year £0.21/episode at 240k episodes → improving scale
economics (fixed platform costs amortizing), worth a headline in the QBR.
```

## Software engineering connection

Unit economics is where engineering choices become finance-legible: an architecture that halves cost-per-episode is a pricing advantage; one that scales super-linearly is a time bomb visible only in this metric. Practices that transfer from health costing: **publish the allocation rules** (shared costs distorted per-unit figures until PLICS standardized patient-level costing — your platform-cost allocation needs the same rigor); **pick units the buyer thinks in** (commissioners buy episodes, not vCPUs); and feed unit costs into every [ICER](incremental-cost-effectiveness-ratio.md) and [budget impact](budget-impact-analysis.md) model as the authoritative cost denominator. For AI features, the unit is the token — see [inference unit economics](inference-unit-economics.md).

## Pitfalls

- **Ignoring shared costs**: unit costs excluding platform/security/on-call allocations understate by 30–50% and collapse on audit.
- **Vanity denominators**: "cost per API call" flatters; "cost per completed patient episode" informs.
- **Average-cost pricing of marginal decisions**: charging teams average unit cost for usage that is marginally free drives waste-avoidance theater (see [national tariff](national-tariff-and-unit-costs.md) for the NHS version of this incentive bug).

## Sources

- FinOps Foundation, unit economics. <https://www.finops.org/framework/capabilities/unit-economics/>
- FinOps Foundation, introduction to cloud unit economics. <https://www.finops.org/wg/introduction-cloud-unit-economics/>
