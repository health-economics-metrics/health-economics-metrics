# AI Regulatory Evaluation

The regulatory frameworks that govern AI in health care — FDA's Software as a Medical Device (SaMD) regime with **Predetermined Change Control Plans (PCCPs)**, and real-world evaluation programs like the NHS AI in Health and Care Award — and what they cost and enable economically.

## Why it matters

Regulation determines both the **evidence cost of market entry** and the **cost of every subsequent model update** — for AI products, the second often matters more. FDA's traditional mode (lock the model; re-clear for changes) made continuous improvement economically brutal. The **PCCP guidance (finalized December 2024)** changed the economics: a manufacturer can pre-authorize *specified* future model updates — a description of planned modifications, a modification protocol (how each will be validated), and an impact assessment — so sanctioned improvements ship without a new submission. Over 1,000 AI-enabled devices have FDA authorization; the FDA now also probes real-world performance monitoring (pre-specified metrics: baseline FP/FN rates, calibration drift, domain-shift indicators).

## The math

The PCCP is [DORA lead time](../dora-metrics/) economics applied to regulated models:

```
Cost per model update (traditional) = re-submission cost + review delay × CoD
Cost per model update (PCCP-scoped) = protocol-execution cost only

Update economics over a product life:
  N updates × (submission cost + months of review × cost-of-delay per month)
  vs one-time PCCP authoring cost + N × protocol executions
```

For the NHS AI Award pattern, the metric set is broader than accuracy: independent real-world evaluations assess clinical performance, workflow/implementation effects, and economic impact — the full [efficacy → effectiveness → cost-effectiveness](../ai-developer-productivity/) pipeline institutionalized.

## Worked example

A radiology-AI vendor plans quarterly model improvements over 3 years (12 updates):

```
Traditional: 12 × (£80k submission + 4 months × £50k/month delayed-benefit CoD)
           = 12 × £280k = £3.36M
PCCP route:  £250k PCCP authoring + 12 × £30k protocol execution = £610k
Saving ≈ £2.75M — and patients receive each improvement ~4 months sooner:
12 × 4 months × the update's clinical benefit, a QALY line in its own right.
```

The PCCP is regulatory recognition that **deployment frequency has clinical value** — the repo's master causal chain, endorsed by a regulator.

## Software engineering connection

Engineering the PCCP well is a software problem: pre-specified evaluation suites, versioned datasets, automated validation pipelines, drift monitoring — the regulated cousin of continuous deployment, where the "deploy gate" is a validated protocol instead of a code review. Teams with mature eval infrastructure ([AI quality metrics](../ai-quality-metrics/)) get PCCPs cheaply; teams without discover that the regulatory constraint is really an engineering-maturity constraint. For products entering the NHS, the parallel stack is DTAC (clinical safety, data protection, interoperability) plus [NICE ESF](../nice-evidence-standards-framework/) evidence tiers — budget all of them as market-entry [TCO](../total-cost-of-ownership/).

## Pitfalls

- **PCCP scope-creep dreams**: only *specified* modification types are pre-authorized; architecture changes or new intended uses still need full review.
- **Real-world drift unmonitored**: authorization at launch performance + silent population drift = a product performing outside its cleared envelope; monitoring is both a regulatory expectation and self-defense.
- **Confusing clearance with value**: FDA/UKCA clearance ≠ anyone will pay — that's the [HTA](../health-technology-assessment/) hurdle, run separately.

## Sources

- FDA, AI-enabled device software / SaMD. <https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-software-medical-device>
- PCCP implementation guidance analysis. <https://intuitionlabs.ai/articles/fda-pccp-implementation-guide-ai-ml-samd>
- NHS England, lessons from AI in Health and Care Award real-world evaluations. <https://www.england.nhs.uk/long-read/planning-and-implementing-real-world-ai-evaluations-lessons-from-the-ai-in-health-and-care-award/>
