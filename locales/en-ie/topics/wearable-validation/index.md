# Wearable Validation

Validation metrics quantify how well a wearable's measurements agree with a clinical gold standard (ECG for heart rate, polysomnography for sleep): **MAPE**, concordance correlation, Bland–Altman agreement — plus the operational metrics that gate real-world data quality: **wear-time compliance** and **data completeness**.

## Why it matters

Validation is the precondition for everything downstream: a device that can't prove agreement with reference measurement cannot anchor [digital endpoints](../digital-endpoints-and-biomarkers/), support [RPM billing](../remote-patient-monitoring-economics/), or carry clinical claims. The field's accepted thresholds for heart rate: **MAPE ≤5%** (strict) or **≤10%** (lenient) against ECG. Reference points from the literature: Oura Gen 3 resting HR MAPE 1.67% (CCC 0.97); Fitbit Charge 6 MAPE ~5.5% — consumer devices now span the clinical-grade boundary, which is exactly why the measurement matters per-device and per-condition.

## The maths

```
MAPE = (1/n) Σ |measured_i − reference_i| / reference_i × 100

CCC (concordance correlation) = agreement including both correlation
      and systematic bias (Pearson r penalised by location/scale shift)

Bland–Altman: mean bias ± 1.96 SD limits of agreement — shows whether
      error depends on the value's magnitude

Operational gates:
Wear-time compliance = time worn / protocol time × 100
Data completeness    = observed data points / expected × 100
```

Validation must be reported **per activity condition** (rest, motion, sleep) and per population — PPG optical sensing degrades with motion artifact, poor contact, and darker skin tones, a documented equity-relevant failure mode.

## Worked example

A virtual-ward programme selects a monitoring wearable. Candidate A: rest MAPE 2.1%, exercise MAPE 11.4%. Candidate B: rest 3.8%, exercise 6.9%.

```
Use case: deteriorating-patient detection at home — alerts trigger on
sustained elevated HR, often during activity.
Candidate A's headline (2.1%) wins the brochure; candidate B wins the
use case: at the alert-relevant condition (motion), A's 11.4% error
at HR 100 = ±11 bpm — spanning the entire alert threshold band,
generating false escalations (each a nurse callout, ~£40) or misses.

False-alert economics: 500 patients × 2 extra false alerts/week × £40
= £2.08M/year of error cost from choosing the wrong validation number.
```

## Software engineering connection

Engineers consume validation data when choosing sensors and *produce* it when building measurement features — both roles need the same discipline: test at the deployment condition, not the demo condition (the software analogue: benchmarking on your production workload, not the vendor's). Wear-time and completeness are product-engineering outcomes — comfort, battery life, charging ritual design, and sync reliability determine whether the 16-days-in-30 RPM billing gate is met ([remote patient monitoring economics](../remote-patient-monitoring-economics/)) and whether trial datasets are analysable. Treat missingness as a designed signal: distinguish "not worn," "worn but no signal," and "sync failed" in the schema from day one — collapsed into null, they poison every downstream analysis.

## Pitfalls

- **Aggregate MAPE hiding condition-specific failure** — the worked example's trap.
- **Validation population ≠ deployment population**: age, skin tone, tremor, obesity all shift optical-sensor error; check the study demographics.
- **Correlation reported where agreement is needed**: high Pearson r with systematic bias still misclassifies against absolute thresholds — insist on CCC/Bland–Altman.
- **Completeness inflated by imputation**: filled gaps reported as observed data.

## Sources

- Consumer wearable HR validation (Oura Gen 3/4). <https://pmc.ncbi.nlm.nih.gov/articles/PMC12367097/>
- Wearable validity thresholds (MAPE standards). <https://formative.jmir.org/2025/1/e70835>
- Multi-device validation studies. <https://pmc.ncbi.nlm.nih.gov/articles/PMC6431828/>
