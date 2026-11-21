# Adherence and Persistence

Adherence is how closely actual use matches prescribed use (intensity); persistence is how long use continues before discontinuation (duration). Pharmacy has standardised measures — **MPR** and **PDC**, with ≥80% the conventional "adherent" bar — and digital therapeutics inherit both the concepts and the problem: adherence is the multiplier between efficacy and realised value.

## Why it matters

Payers already run on these numbers: PDC ≥80% feeds US Medicare Star Ratings, which move real payer revenue — adherence is financially load-bearing infrastructure, not a soft metric. For digital therapeutics the pattern repeats: DiGA data shows strong prescription volumes with weak sustained adherence, and outcomes-based DTx pricing (arriving in Germany from 2026) will pay on adherence-gated results. The conceptual upgrade from digital health research: **effective engagement** — *sufficient* engagement to achieve the intended outcome — and its corollary, the **minimum effective dose**, established empirically per intervention rather than assumed to be "more."

## The maths

```
MPR = Σ days' supply dispensed / days in period × 100   (can exceed 100%;
      overestimates via early refills)
PDC = days covered by supply / days in period × 100     (capped at 100%;
      the conservative, CMS-preferred estimator)
Digital adherence = actual usage events / prescribed usage events × 100
Persistence       = days from initiation to discontinuation
                    (report % persistent at N months; survival methods)

Value gating: realised outcome ≈ efficacy × g(adherence)
  where g is the dose-response function; below the minimum effective
  dose, g ≈ 0 — cost incurred, benefit forfeited
```

## Worked example

A digital CBT-for-insomnia product, prescribed as 6 modules over 6 weeks; trial efficacy 0.025 QALYs among those completing ≥4 modules (the empirically established minimum effective dose):

```
1,000 prescriptions at £250 → £250,000 payer spend
Module completion: ≥4 modules 38%; 1–3 modules 34%; zero modules 28%

QALYs realised = 1,000 × 0.38 × 0.025 = 9.5
Cost per QALY  = 250,000 / 9.5 ≈ £26,300 — marginal at NICE thresholds

Adherence engineering (reminders redesign, session shortening) lifts
≥4-module completion to 50%: 12.5 QALYs → £20,000/QALY. The product
crossed the funding threshold without touching the therapy content.
```

Under 2026-style performance pricing, the same shift moves *revenue* directly — adherence engineering becomes the commercial roadmap.

## Software engineering connection

Two vocabularies converge on one concept: software analytics ([activation](../activation-and-uptake/), [stickiness](../engagement-metrics/), [retention](../retention-and-churn/)) and clinical pharmacy (MPR, PDC, persistence) are both measuring exposure to an intervention — map your product events onto the clinical vocabulary and payers can read your dashboards. Engineering owns the adherence levers: reminder logic (dumb daily pings train dismissal; adaptive timing doesn't), session cost (a 20-minute module completes less than 3×7-minute ones), and friction telemetry that locates *where* in the protocol users fall off. Instrument dose-response from day one — the minimum-effective-dose analysis that gates the whole economic model needs usage-linked-to-outcome data only the product can collect.

## Pitfalls

- **MPR/PDC conflation**: MPR inflates; state which estimator and use PDC for anything payer-facing.
- **Adherence to the metric, not the therapy**: opens counted as doses (see [engagement metrics](../engagement-metrics/)).
- **"More is better" engagement targets** where the intervention has a finite dose — graduation is success, perpetual use is not.
- **Survivor-based efficacy claims**: outcomes among the adherent include selection effects (adherent people differ); the honest causal estimate needs randomisation or careful adjustment.

## Sources

- MPR vs PDC. <https://phslrx.com/medication-adherence-metrics/>
- Yardley L, et al., effective engagement. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
- DiGA adherence findings, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
