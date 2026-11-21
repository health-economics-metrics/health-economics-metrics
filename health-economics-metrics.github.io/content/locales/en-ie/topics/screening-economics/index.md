# Screening Economics

Screening economics govern the value of testing asymptomatic populations. The core mathematical fact: **at low disease prevalence, even excellent tests generate mostly false positives** — and the downstream cost of chasing them can swamp the benefit of the true finds.

## Why it matters

Since 1968, WHO's Wilson–Jungner criteria have set the bar for population screening: the condition must be important, the test acceptable and accurate, effective treatment must exist, and the economics must balance. The UK National Screening Committee applies formal cost-effectiveness analysis before approving any national programme — and rejects most proposals. Every "AI will screen everyone for everything" pitch runs into this machinery, and usually loses to the arithmetic below.

## The maths

Positive predictive value (PPV) — the probability a positive result is real — collapses at low prevalence:

```
PPV = (sens × prev) / [sens × prev + (1 − spec) × (1 − prev)]

Example: sensitivity 90%, specificity 95%, prevalence 0.5%:
PPV = (0.9 × 0.005) / (0.9 × 0.005 + 0.05 × 0.995)
    = 0.0045 / (0.0045 + 0.04975) ≈ 8.3%
```

Eleven out of twelve positives are false. Full programme economics:

```
Cost per true case found = (screening cost + workup cost × all positives) / true positives
Then: is finding a case worth that? (earlier-intervention value per case,
      minus overdiagnosis harm — cases found that would never have mattered)
```

## Worked example

AI retinal screening for a rare condition, 100,000 people, prevalence 0.5%, sens 90%, spec 95%, scan £15, confirmatory workup £400:

```
True positives:  100,000 × 0.005 × 0.90 = 450
False positives: 100,000 × 0.995 × 0.05 = 4,975
Cost = 100,000 × 15 + (450 + 4,975) × 400 = 1.5M + 2.17M = £3.67M
Cost per true case ≈ £8,156
```

If early treatment saves £20,000 + 1 QALY per case, the programme clears easily. Raise specificity to 99% (fewer false alarms): workup cost falls to (450 + 995) × 400 = £0.58M, total £2.08M, cost per case ≈ **£4,622** — specificity, not sensitivity, is where screening economics are won at low prevalence.

## Software engineering connection

Static analysis, security scanning, and anomaly detection are screening programmes over codebases and telemetry, with true-defect prevalence often well under 1% per alert-opportunity. The identical maths explains alert fatigue: a 95%-specific scanner on low-prevalence code drowns teams in false positives, and every false positive costs attention and erodes trust until real alerts get ignored (the clinical term is *screening harm*; the engineering term is *pager numbness*). The remedies transfer from health: raise specificity before sensitivity, screen higher-prevalence subpopulations (risk-based targeting ↔ changed-code-only scanning), and count triage cost in the tool's economics — see [NNT](../number-needed-to-treat/) and [clinical AI evaluation](../clinical-ai-evaluation/). For sizing a whole screening programme rather than one test, see [number needed to screen](../number-needed-to-screen/) — how many people must go through the entire screen-and-treat pathway to prevent one outcome.

## Pitfalls

- **Quoting sensitivity/specificity without prevalence** — accuracy without PPV is marketing.
- **Ignoring overdiagnosis**: finding indolent "disease" that would never have harmed triggers real treatment costs and harms.
- **Lead-time bias**: earlier detection without changed outcomes inflates apparent survival — see [earlier intervention](../earlier-intervention/).

## Sources

- Wilson JMG, Jungner G. "Principles and practice of screening for disease." WHO 1968. <https://apps.who.int/iris/handle/10665/37650>
- UK National Screening Committee. <https://www.gov.uk/government/groups/uk-national-screening-committee-uk-nsc>
