# Multi-Criteria Decision Analysis (MCDA)

Multi-criteria decision analysis (MCDA) is a weighted-sum scoring model used in health technology assessment when a single ICER/willingness-to-pay threshold doesn't capture everything a decision-maker cares about: equity, unmet need, innovation, budget impact, disease severity. Each criterion gets a weight reflecting its importance (elicited from stakeholders, weights summing to 1), each option gets a normalized score per criterion (typically 0–1), and the overall score is the weighted sum — the same mathematical shape as a software vendor-selection scorecard.

## Why it matters

MCDA is used in frameworks like EVIDEM, and by some HTA bodies for orphan/rare-disease appraisals where a strict cost-per-QALY threshold approach is considered too narrow to capture everything that matters about a decision. The ISPOR MCDA Emerging Good Practices Task Force formalized good-practice guidance for eliciting weights and scores defensibly, precisely because an informally weighted decision is easy to construct and easy to game. When a health technology genuinely has value dimensions a single [willingness-to-pay threshold](../willingness-to-pay-thresholds/) can't represent — severity, innovation, equity — MCDA gives decision-makers an explicit, auditable structure for combining them, rather than an unstated judgment call.

## The maths

```
MCDA score = Σ_i (weight_i × score_i)

weights should sum to 1 (elicited via stakeholder methods such as swing
weighting or the Analytic Hierarchy Process)
```

## Worked example

An HTA committee scores a digital therapeutic on four criteria:

```
Criterion                          Weight   Score   Weight × Score
Clinical benefit                   0.4      0.8     0.32
Cost impact                        0.3      0.5     0.15
Disease severity / unmet need      0.2      0.9     0.18
Innovation                         0.1      0.6     0.06
                                    ─────                ─────
                                    1.0                  0.71
```

Weights sum to 1.0 (0.4 + 0.3 + 0.2 + 0.1), and the MCDA score is 0.71 (0.32 + 0.15 + 0.18 + 0.06). The committee compares 0.71 against a pre-agreed threshold, or ranks it against competing technologies scored the same way.

## Software engineering connection

This is exactly the same math as a weighted vendor-selection scorecard, an RFP evaluation matrix, or a feature-prioritization scoring model — see [build vs buy](../build-vs-buy/), a classic weighted-scorecard use case in software procurement. It's also worth contrasting with [WSJF and CD3](../wsjf-and-cd3/): WSJF/CD3 is a *ratio*-based prioritization method (cost of delay divided by job size or duration), whereas MCDA is a weighted *sum*. MCDA and WSJF/CD3 are two structurally different answers to "how do we rank competing options," and knowing which one a given decision actually calls for — additive value across independent criteria, versus value density per unit of scarce capacity — matters more than which formula looks more rigorous.

## Pitfalls

- **Weight elicitation bias**: whoever sets the weights effectively predetermines the ranking, so a "formula" can launder a political or commercial decision as an objective calculation. Document who set the weights and how.
- **Double counting a criterion already captured elsewhere**: scoring "cost-effectiveness" as one criterion while *also* separately scoring "cost impact" over-weights money relative to the other criteria without anyone intending it.
- **False precision**: a two-decimal weighted score (0.71) implies more rigor than the underlying 0–10 stakeholder ratings actually support, and inter-rater variability in those ratings is often not reported at all.

## Sources

- Thokala P, Devlin N, Marsh K, et al. "Multiple Criteria Decision Analysis for Health Care Decision Making — An Introduction: Report 1 of the ISPOR MCDA Emerging Good Practices Task Force." Value Health. 2016;19(1):1-13.
- Goetghebeur MM, Wagner M, Khoury H, et al. "Evidence and Value: Impact on DEcisionMaking — the EVIDEM framework and potential applications." BMC Health Serv Res. 2008;8:270.
