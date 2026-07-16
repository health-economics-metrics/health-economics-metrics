# Health Technology Assessment (HTA)

HTA is the formal, institutionalized process by which health systems decide whether a technology — drug, device, or software — is worth paying for. It combines clinical-effectiveness evidence with economic evaluation under a published, mandatory methodology.

## Why it matters

If you sell into a national health service, an HTA body may literally decide your market access. Knowing the local process is knowing your real regulator-of-value:

- **NICE (England)**: statutory appraisals under a defined *reference case* — QALYs from [EQ-5D](eq-5d.md), NHS+PSS [perspective](analysis-perspective.md), 3.5% [discounting](discounting-and-time-preference.md), [PSA](probabilistic-sensitivity-analysis.md) required — judged against £20k–£30k/QALY with [severity modifiers](qaly-shortfall-and-severity-modifiers.md); highly specialised technologies up to £100k+ with weighting.
- **ICER (US, non-governmental)**: evidence reports with a *health-benefit price benchmark* — the price at which a product would be cost-effective at $100k–$150k per QALY/evLYG — used as negotiating leverage; plus budget-impact "affordability alerts."
- **Canada (CADTH → CDA-AMC)**: reimbursement reviews at ≈CAD$50k/QALY; historically requested price cuts in ~95% of submissions.

## The math

HTA's power is not a formula but a **mandated method**: every submission computes the same [ICER](incremental-cost-effectiveness-ratio.md) under the same reference-case rules, so results are comparable across products and years. The reference case specifies outcome measure, utility instrument, perspective, comparator selection, discount rate, time horizon, and uncertainty analysis — removing every degree of freedom a sponsor could game.

## Worked example

A digital therapeutic submits to NICE-style evaluation:

```
Model: ΔC = +£450/patient, ΔE = +0.03 QALYs → ICER = £15,000/QALY ✓ under £20k
Reference-case checks:
  utilities from EQ-5D-5L with UK value set              ✓
  comparator = current care pathway (not "no treatment") ✓
  PSA: 71% probability cost-effective at £20k            ✓ (reported)
  severity modifier: shortfall below ×1.2 bounds         — none claimed
Recommendation: routine commissioning, with real-world data collection.
```

The sponsor's own preferred analysis showed £9,000/QALY; the reference case pushed it to £15,000 by forcing the honest comparator. That gap is *why* reference cases exist.

## Software engineering connection

The transferable artifact is the **internal reference case**: one mandated method for all tooling/platform business cases — declared comparator, standard unit costs (see [national tariff and unit costs](national-tariff-and-unit-costs.md) for the pattern), fixed discount rate, required sensitivity analysis, standard template. An "AMCP-dossier for tools" submitted to a platform council makes proposals comparable and gaming visible, exactly as HTA does for medicine. Start smaller than NICE did: a two-page template plus a published price book beats no standard at all.

## Pitfalls

- **Treating HTA as a formality after regulatory clearance** — CE/UKCA/FDA clearance says a product is safe; HTA decides if it's *worth buying*. Different hurdle, different evidence.
- **Building the economic model after the trial** — evidence generation should be designed backwards from the reference case's requirements.
- **Ignoring jurisdiction differences**: an ICER fundable in the US at $120k/QALY fails NICE at £30k; plan evidence and pricing per market.

## Sources

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER 2023 Value Assessment Framework. <https://icer.org/our-approach/methods-process/value-assessment-framework/>
- Canada's Drug Agency (CDA-AMC). <https://www.cda-amc.ca/>
