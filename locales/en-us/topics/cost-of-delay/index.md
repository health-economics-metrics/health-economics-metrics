# Cost of Delay (CoD)

Cost of Delay is the economic value lost per unit time that a feature, product, or service is *not* delivered. It is the single strongest bridge between software delivery metrics and health economics: it converts "we shipped late" into currency — or into QALYs.

## Why it matters

Reinertsen's rule: "If you only quantify one thing, quantify the Cost of Delay." Most organizations know what a project costs but not what a month of delay costs, so they optimize budgets while hemorrhaging time-value. For healthcare software the stakes are literal: every week a pathway improvement is delayed, patients wait longer in worse health states. CoD is the strongest mathematical framework to present to NHS stakeholders because it prices the *absence* of your software.

## The math

```
CoD = benefit per unit time forgone while undelivered   (£/week or QALYs/week)

Total delay loss = CoD × delay duration

For prioritization, see wsjf-and-cd3.md: CD3 = CoD / duration.
```

For clinical software, denominate in health as well as money:

```
CoD_health = patients affected per week × QALY gain per patient
CoD_money  = CoD_health × λ (willingness-to-pay threshold, £20k–30k/QALY)
             + operational savings per week forgone
```

## Worked example

**Operational**: software saves £200 per patient on a pathway; a trust processes 50 such patients/week.

```
CoD = 200 × 50 = £10,000/week
A 10-week procurement delay costs 200 × 50 × 10 = £100,000 in avoidable waste.
```

**Clinical**: a triage improvement removes 5 weeks of waiting (utility 0.68 → 0.80 sooner) for 100 patients/week:

```
QALY gain per patient = (5/52) × 0.12 ≈ 0.0115
CoD_health = 100 × 0.0115 = 1.15 QALYs/week
CoD_money  = 1.15 × £20,000 ≈ £23,000/week of health value
```

A 6-month deployment delay "costs" ~30 QALYs — the argument that reframes an IT go-live slip as a clinical event. (Benchmark for scale: Black Swan Farming's famous Maersk analysis found single features with CoD ≈ $200k/week that had waited 38 weeks.)

## Software engineering connection

CoD is the metric that makes [DORA lead time](../dora-metrics/) and [flow efficiency](../flow-metrics/) financially legible: lead time × CoD = money (or health) burned in queues. Uses:

- **Prioritization**: rank work by CoD/duration ([WSJF/CD3](../wsjf-and-cd3/)) instead of loudest-stakeholder.
- **Process economics**: a 2-week release cadence has an expected delay cost of ~1 week × CoD per feature versus continuous delivery — price the batch.
- **Procurement**: NHS procurement cycles of 6–18 months have a CoD; showing it changes urgency conversations (see [budget impact analysis](../budget-impact-analysis/) for the affordability counterpart).

## Pitfalls

- **Assuming linear CoD**: some work has deadline-shaped value (regulatory dates — infinite CoD after the date, zero before) or decaying value (first-mover windows). Classify the urgency profile before multiplying.
- **CoD on outputs nobody wants**: delay only costs if the thing has value; garbage delayed is free.
- **Double counting delay and discounting**: [discounting](../discounting-and-time-preference/) already prices time on multi-year horizons; CoD is the within-horizon operational version. Use CoD for weeks/months, NPV shift for years.

## Sources

- Reinertsen DG, *The Principles of Product Development Flow*.
- Black Swan Farming, Cost of Delay. <https://blackswanfarming.com/cost-of-delay/>
- Cost of delay overview. <https://en.wikipedia.org/wiki/Cost_of_delay>
