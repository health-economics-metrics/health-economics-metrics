# SPACE and DevEx

SPACE (Satisfaction & well-being, Performance, Activity, Communication & collaboration, Efficiency & flow) and DevEx (feedback loops, cognitive load, flow state) are frameworks for measuring developer productivity **multi-dimensionally** — the field's answer to the discovery that no single metric survives contact with reality.

## Why it matters

Both frameworks encode the same hard-won lesson health outcomes research learned decades earlier: a single number (lines of code; blood pressure) misrepresents a multi-dimensional reality, and optimising it produces gaming, not improvement. SPACE prescribes combining metrics from at least three dimensions, mixing telemetry with self-report — structurally identical to how [EQ-5D](../eq-5d/) profiles five dimensions before any index is computed, and why [PROMs](../patient-reported-outcomes/) exist alongside clinical measures. Satisfaction/well-being isn't soft garnish either: it feeds [workforce retention](../workforce-retention/) economics, where attrition is priced in months of loaded salary.

## The maths

Neither framework is a formula; both are measurement designs:

```
SPACE rule: ≥ 3 dimensions, ≥ 1 perceptual (survey) + ≥ 1 system (telemetry) metric

DevEx dimensions and example pairings:
  feedback loops  → CI duration (telemetry) + "waiting feels slow" (survey)
  cognitive load  → docs findability, onboarding time + perceived effort
  flow state      → meeting/interrupt density + self-reported focus

Derived indices (e.g., DX's DXI) map survey composites to time:
vendor claim ≈ 13 min/dev/week per index point — treat as a vendor
benchmark to validate locally, not a constant of nature.
```

## Worked example

A platform team justifies a DevEx investment (CI speedup + docs overhaul) for 300 developers:

```
Baseline: CI p75 = 28 min; survey "I lose focus waiting for builds": 62% agree
After:    CI p75 = 9 min;  agreement 24%

Time reclaimed (telemetry): 6 builds/day × 19 min × 0.4 usable = ~45 min/day/dev
Capacity value: 300 × 0.75h × 220d × £60/h ≈ £2.97M/year (non-cash-releasing —
see cash-releasing-vs-non-cash-releasing.md; the 0.4 usability factor is the
fragmentation discount from practitioner-time.md)
Perceptual corroboration is what makes the telemetry claim credible — either
alone is gameable; together they triangulate.
```

## Software engineering connection

This doc *is* the software side; the transfer runs toward health economics. A "quality-adjusted engineer year" — time weighted by a standardised experience index — is the [QALY](../quality-adjusted-life-year/)'s construction applied to engineering capacity, and it inherits the QALY's rules: weights from a validated instrument (consistent survey, published scoring), elicited *before* the comparison, never tuned to flatter a favoured tool. The [SF-6D vs EQ-5D](../eq-5d/) lesson also applies: different instruments give systematically different numbers, so never compare DevEx indices across vendors' instruments.

## Pitfalls

- **Single-metric collapse**: dashboards that reduce SPACE to one score recreate the problem the framework exists to prevent.
- **Activity metrics as outcomes**: commits, PRs, and story points are Activity — the dimension SPACE explicitly warns is most gameable (health analogue: counting procedures, not recoveries).
- **Survey fatigue and Hawthorne effects**: quarterly light-touch instruments beat weekly interrogation.
- **Comparing teams**: like hospital league tables without case-mix adjustment — context differences (domain, legacy load, on-call) dominate.

## Sources

- Forsgren N, et al. "The SPACE of Developer Productivity." ACM Queue 2021. <https://queue.acm.org/detail.cfm?id=3454124>
- Noda A, Forsgren N, Storey MA, Greiler M. "DevEx: What Actually Drives Productivity." ACM Queue 2023. <https://queue.acm.org/detail.cfm?id=3595878>
