# Digital Endpoints and Biomarkers

A digital biomarker is an objective physiological or behavioral measure collected via sensors (gait speed from a phone, sleep from a wearable, tremor from accelerometry). A digital endpoint is such a measure elevated to a **trial outcome** — used to demonstrate treatment effect. The promotion from "data the device emits" to "evidence a regulator accepts" runs through a defined validation ladder.

## Why it matters

Traditional trial endpoints are episodic (clinic visits every 3 months) and expensive; digital endpoints are continuous, ecological (real life, not clinic performance), and cheap per observation — they can shrink trials, detect effects earlier, and enable decentralized studies. The catch is validation: the accepted framework (FDA-aligned, three pillars) requires **verification/analytical validation** (the sensor measures the physical quantity accurately), **clinical validation** (the measure reflects the clinical state it claims to), and a demonstrated **meaningful aspect of health** (patients care about what it captures). An endpoint without all three is telemetry, not evidence.

## The math

```
Analytical validation: agreement with reference (see wearable-validation.md —
                       MAPE, CCC, Bland-Altman)
Clinical validation:   correlation/discrimination against clinical anchors
                       (known-groups validity, responsiveness to change)
Endpoint economics:
  events detected per patient-year (continuous) vs per-visit sampling
  trial power: continuous measures cut sample size when between-visit
  variance dominates — N ∝ σ²/Δ², and σ² falls with dense sampling
```

## Worked example

A Parkinson's trial considers gait speed from a wrist sensor versus quarterly clinic-rated scores:

```
Clinic endpoint:  4 measurements/patient/year, high day-to-day noise
Digital endpoint: ~200 passive measurements/patient/year

Variance of the annual-change estimate falls ~5× with dense sampling →
detectable effect size at fixed power improves ~√5 ≈ 2.2×, or
equivalently sample size shrinks ~40–60% for the same hypothesis.
At £25,000 per enrolled patient, cutting 200 patients ≈ £5M saved
per trial — the commercial case for the validation investment
(itself perhaps £1–2M) across a sponsor's pipeline.
```

## Software engineering connection

Digital endpoints are a data-engineering discipline wearing clinical clothes: **provenance and versioning** (algorithm updates mid-study threaten comparability — the [PCCP](../ai-regulatory-evaluation/) problem in trial form; version-lock and bridge-validate); **missing-data design** (wear-time gaps are informative, not random — see [wearable validation](../wearable-validation/); imputation choices are scientific claims); and **edge/cloud split decisions** that change what raw signal is even recoverable later. Teams that treat the measurement pipeline as regulated software from day one — tested, versioned, documented — buy their endpoints' credibility cheaply; retrofitting validation onto a moved-fast pipeline is where digital-endpoint programs die.

## Pitfalls

- **Correlation-with-clinic as full validation**: matching a flawed clinic measure proves inheritance, not truth; validate against the meaningful health aspect.
- **Novel-endpoint regulatory risk**: an unprecedented endpoint may be scientifically superior and still sink a submission — engage regulators early (qualification programs exist).
- **Sensor-population mismatch**: validation in young healthy wrists, deployment in elderly patients with tremor and pigmentation differences the PPG never saw.
- **Feature drift**: retraining the gait algorithm on new data silently redefines the endpoint mid-study.

## Sources

- Coravos A, Khozin S, Mandl KD. "Developing and adopting safe and effective digital biomarkers to improve patient outcomes." npj Digital Medicine 2019. <https://www.nature.com/articles/s41746-019-0090-4>
- Digital Medicine Society (DiMe), digital endpoints resources. <https://dimesociety.org/>
