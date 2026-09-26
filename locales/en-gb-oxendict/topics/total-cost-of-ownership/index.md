# Total Cost of Ownership (TCO)

TCO is the full cost of a system over its life: acquisition or build, integration, operation, maintenance, support, training, and decommissioning. The uncomfortable baseline: **maintenance is 50–80% of software TCO** — roughly three-quarters of lifetime cost arrives *after* launch.

## Why it matters

Health technology assessment learned long ago that a drug's price is not its cost — administration, monitoring, and managing side effects all belong in the model. Software business cases that count only build/licence cost repeat the naive-drug-price error and systematically understate the cost side of every [ICER](../incremental-cost-effectiveness-ratio/) and [budget impact](../budget-impact-analysis/) they feed. For NHS procurement, TCO discipline is what makes a digital product's cost-effectiveness claim honest — and it is where cheap-looking options lose.

## The maths

```
TCO = initial cost (build/licence + integration + data migration + training)
    + Σ_t [operations + maintenance + support + infrastructure + upgrades
           + compliance/assurance]_t / (1 + r)^t
    + decommissioning cost (exit, data extraction, parallel running)

Horizon: 3–5 years commercial, system-lifetime for clinical infrastructure
r: 3.5% public sector (Green Book), 8–12% commercial
Benchmarks: annual maintenance ≈ 15–20% of build cost; ~78% of lifetime
TCO post-launch; ignore decommissioning and vendor lock-in prices itself.
```

## Worked example

Two options for an e-observations system, 5-year horizon:

```
                        Vendor SaaS     In-house build
Year 0 (licence/build)  £250,000        £900,000
Integration + training  £180,000        £150,000
Annual run (yrs 1–5)    £120,000/yr     £190,000/yr  (hosting + 1.5 FTE maint.)
Exit/decommission       £60,000         £30,000

Undiscounted TCO        £1,090,000      £2,030,000
```

The build option's engineering estimate (£900k) was only 44% of its true TCO — and build estimates themselves typically overrun 30–40% (see [build vs buy](../build-vs-buy/)). Unless the in-house option delivers materially different *outcomes*, [cost-minimization](../cost-minimization-analysis/) logic applies and SaaS wins by ~£940k.

## Software engineering connection

Engineers underweight their own field's maintenance data when advocating builds: the 15–20%-of-build-cost annual maintenance rule means every £1M system quietly commits £150–200k/year of future capacity — a liability that belongs on the same mental balance sheet as [technical debt](../technical-debt/). TCO is also the cost half of every metric in this repo: cost per deployment, [cloud unit economics](../cloud-unit-economics/), and the denominator discipline that HTA enforces on drug sponsors. When your product's price is challenged, a TCO comparison including the incumbent's true running costs is usually the strongest reframe available. A multi-year TCO figure like the one above is a sum of many cost line items over time — see [currency-safe cost rollup](../currency-safe-cost-rollup/) for why that sum should be exact-decimal rather than floating point once a model must reconcile to the penny, and [exact-cents cost allocation](../exact-cents-cost-allocation/) for splitting a TCO total across cost centres without losing pennies.

## Pitfalls

- **Launch-cost anchoring**: comparing options at year-0 cost when the ranking reverses by year 3.
- **Free-internal-labour fallacy**: in-house maintenance costed at zero because "the team's already paid" — see [opportunity cost](../opportunity-cost/).
- **Ignoring exit costs**: data egress, contract termination, and parallel running are where "cheap" SaaS gets expensive.
- **Same-horizon violations**: comparing a 3-year SaaS TCO against a 10-year build amortization (see [time horizon](../time-horizon/)).

## Sources

- IBM, total cost of ownership. <https://www.ibm.com/think/topics/total-cost-of-ownership>
- Software maintenance cost benchmarks. <https://pegotec.net/software-maintenance-cost-percentage-2026-industry-benchmarks/>
