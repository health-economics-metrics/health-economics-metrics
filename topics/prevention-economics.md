# Prevention Economics

The economics of intervening before disease occurs or progresses. The headline finding is counterintuitive: **most prevention does not save money** — it buys health at a good price. Cohen, Neumann and Weinstein's landmark NEJM analysis found fewer than 20% of preventive interventions are net cost-saving; the rest are cost-effective at best.

## Why it matters

"Prevention saves money" is the most repeated false claim in health policy, and business cases built on it get demolished by health economists. The honest structure: prevention costs money now (screening whole populations, treating risk factors in people who would never have gotten sick) and returns health later — usually at a *good* cost per QALY, occasionally at a saving, sometimes at a terrible price. Knowing which regime you're in is the analysis. The distinction matters commercially: a prevention product sold as "saves the NHS money" invites an audit it will fail; sold as "buys QALYs at £4,000" it can win on the same facts. See [earlier intervention](earlier-intervention.md) for the within-pathway version.

## The math

```
Net cost of prevention (per person) =
    intervention cost × everyone treated
  − downstream costs avoided × the few who would have progressed
  (both discounted — the avoided costs are years away; see
   discounting-and-time-preference.md)

Cost-saving requires: intervention cost < P(progression) × avoided cost × discount factor
Cost-effective requires only: net cost / QALYs gained < threshold
```

The prevention paradox: intervention cost multiplies over the whole population; benefits accrue only to the counterfactual few.

## Worked example

A hypertension-management app offered to 100,000 at-risk adults, £25/person/year. Over 10 years it prevents 400 strokes (each costing £45,000 discounted, and 3 QALYs lost).

```
Cost:    100,000 × £25 × 10 yrs (discounted ≈ ×8.3) ≈ £20.8M
Offsets: 400 × £45,000 = £18.0M
Net cost ≈ £2.8M — NOT cost-saving

QALYs gained = 400 × 3 = 1,200
Cost per QALY = 2.8M / 1,200 ≈ £2,300/QALY — outstandingly cost-effective
```

Same program, both truths: it loses £2.8M in cash and buys health at a tenth of the NICE threshold. Fund it on the second number; never promise the first.

## Software engineering connection

Shift-left quality is prevention economics, caveat included. Reviews, tests, and static analysis apply cost to *every* change to catch issues in the few that would have progressed to production incidents. The defect-cost curve (10–100× by stage) plays the role of stroke costs — and the honest conclusion mirrors health: shift-left is usually cost-*effective*, not automatically cost-*saving*, because most flagged issues would never have become incidents (the counterfactual few problem). Compute it: total gate cost per period vs incidents actually avoided × incident cost — the same worked-example structure, with [NNT](number-needed-to-treat.md) as the per-catch unit.

## Pitfalls

- **Claiming cost savings when the evidence supports cost-effectiveness** — the defining error of prevention advocacy in both domains.
- **Undiscounted future offsets**: benefits 15 years out at face value.
- **Ignoring overdiagnosis/overtreatment costs**: prevention finds pseudo-disease too — see [screening economics](screening-economics.md).

## Sources

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- Masters R, et al. "Return on investment of public health interventions." JECH 2017. <https://pmc.ncbi.nlm.nih.gov/articles/PMC5537512/>
