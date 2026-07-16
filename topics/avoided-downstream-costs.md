# Avoided Downstream Costs

Avoided downstream costs (cost offsets) are future treatment expenses prevented by earlier or better action, netted against the intervention's own cost. Offsets are the mechanism by which an intervention can become *dominant* — cheaper **and** better — and they are also the most double-counted, over-claimed line in health economics.

## Why it matters

Almost every digital health value proposition contains an offset claim: "our app prevents admissions," "our alerts prevent deterioration," "our platform avoids duplicate tests." When offsets are real, they transform the economics (see the [ICER](incremental-cost-effectiveness-ratio.md) worked example, where a £600k offset makes the case). Payers know this — so offset claims attract the hardest scrutiny in any appraisal. The credibility rules below are what separate a fundable model from marketing.

## The math

```
Net cost = intervention cost − Σ offsets

A valid offset must be:
  Attributable — causally linked to the intervention (comparator evidence)
  Marginal     — the money actually stops being spent, at marginal not
                 average cost (see marginal-vs-average-cost.md)
  Probability- — weighted by P(the downstream event would have occurred)
  weighted
  Discounted   — future avoided costs at present value
  Unique       — counted once, in one benefit line
```

## Worked example

"This migration-risk claim, done right": a wound-monitoring app for 5,000 post-surgical patients claims to avoid infection-related readmissions.

```
Baseline readmission for infection: 4.0% ; with app (RCT): 3.1%
Attributable events avoided = 5,000 × 0.009 = 45/year
Cost per readmission spell (marginal, this trust): £3,200
Offset = 45 × 3,200 = £144,000/year
App cost = 5,000 × £20 = £100,000/year
Net cost = −£44,000 → genuinely cost-saving, with:
  attribution from an RCT ✓  marginal costing ✓  probability from trial data ✓
```

The same claim built on "readmissions cost £5,800 on average, we'll prevent loads" fails all four tests and deserves the rejection it gets.

## Software engineering connection

"This migration avoids the future rewrite" is an offset claim, and the health-economics rules make it honest:

- **Counterfactual cost**: what would the rewrite actually cost, evidenced how?
- **Probability**: how likely is that future? (Not 100% — products get killed, priorities change.)
- **Discounting**: a rewrite avoided in year 4 at 3.5–10% discount is worth much less than face value.
- **Uniqueness**: don't also claim the same avoided rewrite in the tech-debt line and the retention line.

`Offset value = P(future event) × counterfactual cost × discount factor` — write that line in the proposal and watch the estimate become debatable, which is the point.

## Pitfalls

- **Double counting** — the same avoided admission claimed as offset, bed days, and QALYs-with-cost-attached.
- **Average-cost offsets** for events whose fixed costs continue regardless.
- **Silent 100% probability** on downstream events that were merely possible.
- **Offsets to other budgets** presented as savings to the payer being asked to pay — see [analysis perspective](analysis-perspective.md).

## Sources

- York Health Economics Consortium glossary: cost offset. <https://yhec.co.uk/glossary/cost-offset/>
- Cohen JT, Neumann PJ, Weinstein MC. NEJM 2008 (offsets rarely exceed costs). <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
