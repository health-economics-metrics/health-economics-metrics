# Budget Impact Analysis (BIA)

BIA estimates what adopting an intervention does to a specific payer's **budget** over the next 1–5 years. It answers *affordability*; cost-effectiveness answers *value*. A technology can be excellent value and still unaffordable — or affordable and poor value. Serious appraisals require both.

## Why it matters

The finance director's question is never "what's the ICER?" — it's "what does this do to next year's budget?" ISPOR good-practice guidance (the field standard) specifies: the payer's own perspective, a 1–5 year horizon, *undiscounted* annual cash flows, realistic uptake curves, and scenario (not probabilistic) uncertainty. NICE requires budget-impact information alongside cost-effectiveness; a product with national budget impact above ~£20M/year in England triggers commercial negotiation regardless of its ICER.

## The math

```
BI_year_t = Cost_scenario_with_new(t) − Cost_scenario_current(t)

Cost_scenario(t) = Σ over patient groups:
   eligible population(t) × uptake(t) × net cost per patient(t)

net cost per patient = intervention cost − displaced care cost + induced care cost
```

Key modeling choices: eligible-population growth, the uptake curve (adoption is never instant), what the new option displaces, and any demand it *induces* (easier access → more users).

## Worked example

A payer covering 2M people considers a digital therapeutic at £300/patient/year; 1.5% of members eligible (30,000); uptake 20% → 40% → 60% over 3 years; each user displaces £120/year of other care.

```
Net cost per user = 300 − 120 = £180

Year 1: 30,000 × 0.20 × 180 = £1.08M
Year 2: 30,000 × 0.40 × 180 = £2.16M
Year 3: 30,000 × 0.60 × 180 = £3.24M
```

Even if the product's ICER is a stellar £8,000/QALY, the payer must find £3.24M of *new money* by year 3 — the displaced £120 is spread thin across other budget lines and won't be released as cash (see [cash-releasing vs non-cash-releasing](../cash-releasing-vs-non-cash-releasing/)). This is why per-unit value and affordability are separate hurdles.

## Software engineering connection

BIA is exactly the CFO-facing complement to a per-seat ROI claim: "it's cost-effective per developer, but can we afford org-wide rollout this fiscal year?" Model license tiers, an adoption S-curve, displaced tooling spend that only cash-releases when old contracts actually terminate, and induced usage (cheaper CI → more CI). Presenting a 3-year budget-impact table alongside the ROI is what makes an enterprise tooling proposal finance-credible.

## Pitfalls

- **Instant-uptake fantasy**: year-1 impact computed at steady-state adoption.
- **Counting displaced cost as cash** when it's diffuse capacity.
- **Ignoring induced demand** — access improvements grow the eligible population's usage.
- **Confusing BIA and CEA horizons/discounting**: BIA is short-horizon, undiscounted, payer-specific by design.

## Sources

- Sullivan SD, et al. ISPOR BIA Good Practice II Task Force. Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
- ISPOR good practices: budget impact analysis. <https://www.ispor.org/heor-resources/good-practices/article/principles-of-good-practice-for-budget-impact-analysis-ii>
