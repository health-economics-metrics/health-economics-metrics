# Cost-Utility Analysis (CUA)

CUA is cost-effectiveness analysis with a **generic, preference-weighted outcome** — almost always the [QALY](../quality-adjusted-life-year/) (or [DALY](../disability-adjusted-life-year/) averted). Because the outcome unit is universal, CUA can compare interventions across completely different diseases.

## Why it matters

A national health service must choose between a cancer drug, a mental-health app, and a surgical robot from one budget. Natural units can't compare them; QALYs can. CUA is therefore the reference-case method at NICE and most HTA bodies: its output — cost per QALY, judged against a [threshold](../willingness-to-pay-thresholds/) — is the closest thing health policy has to a universal exchange rate. If you want your software funded *instead of something else*, CUA is the arena.

## The maths

```
ICUR = ΔCost / ΔQALYs      (the ICER with QALYs as the effect unit)

ΔQALYs = Σ (duration_i × utility_i)_new − Σ (duration_i × utility_i)_old
```

Utilities from validated instruments ([EQ-5D](../eq-5d/)); costs and QALYs both [discounted](../discounting-and-time-preference/) at 3.5% (NICE reference case); uncertainty via [PSA](../probabilistic-sensitivity-analysis/).

## Worked example

A CBT app for moderate anxiety vs waiting list for face-to-face therapy, per patient:

```
Costs:  app licence + support        £250
        therapy displaced            −£680   (40% of users no longer need it)
        ΔC = 250 − 680 = −£430 (saves money)

QALYs:  6 months at utility 0.76 instead of 0.68 while waiting
        ΔE = 0.5 × (0.76 − 0.68) = +0.04 QALYs
```

ΔC < 0 and ΔE > 0: the app **dominates** — better and cheaper, no ratio needed. Had the therapy-displacement assumption been only 10%, ΔC = 250 − 170 = +£80, and ICUR = 80 / 0.04 = **£2,000/QALY** — still far below £20,000. The case survives even with the key assumption slashed: that is what a robust CUA looks like (and the [tornado diagram](../sensitivity-analysis/) proves it).

## Software engineering connection

CUA's deep idea — *one composite, preference-weighted unit to compare unlike things* — is the pattern for comparing unlike engineering investments (security vs developer experience vs reliability). The honest options are either a defensible composite unit (rare) or an explicit [cost-consequence table](../cost-consequence-analysis/) (usual). What CUA warns against is the fake composite: a weighted "impact score" whose weights were tuned after the fact to make the preferred option win. Health economics spent decades standardizing utility elicitation precisely so weights precede the comparison.

## Pitfalls

- **Utility gains below the instrument's sensitivity** (see minimal clinically important difference in [patient-reported outcomes](../patient-reported-outcomes/)) — tiny ΔE times large populations is a classic laundering trick.
- **Missing comparator care displacement** — the biggest cost term for digital products is often what they replace.
- **Mapping non-preference scores to utilities** with unvalidated crosswalks.

## Sources

- York Health Economics Consortium glossary: cost-utility analysis. <https://yhec.co.uk/glossary/cost-utility-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
