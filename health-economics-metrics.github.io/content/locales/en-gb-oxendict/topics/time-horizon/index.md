# Time Horizon

The time horizon is the period over which an analysis counts costs and effects. It must be long enough to capture all meaningful differences between the options being compared.

## Why it matters

Choose a short horizon and you miss late benefits (prevention) and late costs (maintenance). Choose an over-long horizon and everything drowns in uncertainty. Health technology assessment often uses a **lifetime** horizon for treatments with mortality effects; [budget impact analysis](../budget-impact-analysis/) deliberately uses a short **1–5 year** horizon because its question is affordability, not value. The horizon is a declared modelling choice, and mismatched horizons are a classic way to game a comparison.

## The maths

The horizon is the upper limit of the summation in any evaluation:

```
Net present value = Σ (t = 0 … T) [ (Benefits_t − Costs_t) / (1 + r)^t ]

T = time horizon (years)
r = discount rate (see discounting-and-time-preference.md)
```

Results should be reported with the horizon stated, and ideally shown at multiple horizons.

## Worked example

An electronic prescribing system costs £2 million to implement and £200,000/year to run. It prevents medication errors worth £600,000/year (treatment cost of avoided harm).

Net benefit by horizon (undiscounted, for clarity):

```
Horizon 1 year:  −2,000,000 − 200,000 + 600,000  = −£1,600,000
Horizon 3 years: −2,000,000 + 3 × 400,000        = −£800,000
Horizon 5 years: −2,000,000 + 5 × 400,000        =  £0
Horizon 10 years:−2,000,000 + 10 × 400,000       = +£2,000,000
```

The system "fails" at any horizon under 5 years and "succeeds" at 10. Neither is the true answer; the honest report states the break-even point and justifies the horizon by system lifetime (how long before replacement?).

## Software engineering connection

- **Tool evaluations measured over one sprint** systematically miss the learning-curve dip (costs front-loaded) and long-run maintenance (costs back-loaded). AI coding-assistant pilots measured in week 2 capture peak novelty, not steady state.
- **Contract length ≠ benefit horizon.** A 1-year SaaS contract can still be appraised over 5 years if you realistically expect renewal — but say so.
- **Legacy replacement cases** should run to the credible end-of-life of the old system, not to an arbitrary round number.

## Pitfalls

- **Horizon shopping**: picking whichever horizon makes your option win. Pre-register the horizon before computing results.
- **Different horizons for different options** in the same comparison.
- **Lifetime horizons without discounting or uncertainty analysis** — year-30 benefits at face value are fiction. Pair long horizons with [sensitivity analysis](../sensitivity-analysis/).

## Sources

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Sullivan SD, et al. "Budget Impact Analysis — Principles of Good Practice: Report of the ISPOR 2012 Budget Impact Analysis Good Practice II Task Force." Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
