# Patient-Reported Outcomes (PROMs, PREMs, MCID)

PROMs are standardized instruments where patients report their own health status (symptoms, function, quality of life); PREMs capture the care *experience*. The **MCID** — minimal clinically important difference — is the smallest score change patients actually perceive as beneficial: the bar any claimed improvement must clear.

## Why it matters

PROMs are the primary efficacy currency for digital health: apps rarely move mortality, but they can credibly move validated symptom scores. The instruments that matter are few and standardized — **PHQ-9** (depression, 0–27; severity bands at 5/10/15/20), **GAD-7** (anxiety, 0–21; bands at 5/10/15), **EQ-5D** (utility for [QALYs](../quality-adjusted-life-year/)) — and regulators, HTA bodies, and payers accept them precisely because they are comparable across products and trials. The MCID is the honesty gate: PHQ-9 MCID ≈ 5 points, GAD-7 ≈ 4, EQ-5D index commonly ~0.03–0.08 — a statistically significant 1.5-point PHQ-9 change on a large sample is *real but clinically meaningless*, and an evidence reviewer will say so.

## The maths

```
PROM scoring: instrument-specific sums (e.g., PHQ-9 = Σ 9 items × 0–3)

MCID estimation:
  anchor-based:      score change among patients who report "somewhat better"
  distribution-based: ≈ 0.5 × SD of baseline scores (rough heuristic)

Response rate framing (for trials and dossiers):
  responder = patient improving ≥ MCID (or ≥50% for PHQ-9 convention)
  NNT = 1 / (responder rate_treatment − responder rate_control)
  — see number-needed-to-treat.md
```

## Worked example

A depression-support app, RCT vs waiting list, 12 weeks:

```
PHQ-9 change: app −6.2 points, control −2.1 → adjusted difference −4.1
MCID check: 4.1 < 5 → mean difference below MCID; report responders instead:
  responders (≥5-point drop): app 48%, control 22% → ARR 26%
  NNT = 1/0.26 ≈ 4 — four users treated per additional clinical response

Economic bridge: responders' EQ-5D gain 0.06 sustained 6 months
  = 0.03 QALYs; per 1,000 users: 260 extra responders × 0.03 = 7.8 QALYs
  ≈ £156,000–£234,000 of health value at NICE thresholds
```

The responder/NNT framing survives review where the sub-MCID mean difference would have been dismissed.

## Software engineering connection

PROMs are a data-collection problem software is uniquely placed to solve: in-app instruments get completion rates and longitudinal density paper never achieved, turning routine product telemetry into HTA-grade evidence ([EQ-5D](../eq-5d/) is five screens). Engineering rules: use the validated instrument *verbatim* (rewording invalidates it — licensing applies); schedule measurement by protocol, not engagement convenience (measuring only active users is survivorship bias — see [retention](../retention-and-churn/)); and version-lock instrument data like any schema — a mid-study wording change is data corruption. PREMs map to CSAT/NPS-style instruments, and the same lesson applies: standardized beats homegrown wherever the audience is a payer. For a work-productivity-specific instrument, see [WPAI](../work-productivity-and-activity-impairment/).

## Pitfalls

- **Statistical significance below MCID** presented as clinical benefit — the field's most common inflation.
- **Regression to the mean**: users enrol at symptom peaks; single-arm before/after overstates hugely — comparators are non-negotiable.
- **Instrument shopping**: running PHQ-9, GAD-7, and WHO-5, then reporting whichever moved — pre-register the primary.
- **Digital-consent survey pressure**: nudging users toward favourable responses corrupts the instrument (and the reviewers know the base rates).

## Sources

- MCID estimation review (EQ-5D). <https://pmc.ncbi.nlm.nih.gov/articles/PMC10526144/>
- PROMs vs PREMs primer. <https://www.forcetherapeutics.com/blog/whats-the-difference-between-pros-proms-pro-pms-and-prems>
- Kroenke K, et al. PHQ-9 validation literature. <https://pubmed.ncbi.nlm.nih.gov/11556941/>
