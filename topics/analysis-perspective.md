# Analysis Perspective

Perspective defines *whose* costs and benefits count in an economic analysis: the payer's, the provider's, or society's as a whole. The same intervention can look brilliant from one perspective and terrible from another.

## Why it matters

Every economic evaluation must declare its perspective up front, because the perspective determines which line items exist:

- **Payer perspective** (e.g., NHS commissioner, insurer): only costs the payer reimburses.
- **Provider perspective** (e.g., a hospital trust): internal delivery costs, staffing, estates.
- **Societal perspective**: everything — including patient time, travel, informal care by family, and productivity losses to employers.

NICE's reference case uses the **NHS and Personal Social Services (PSS)** perspective for costs. The US Second Panel on Cost-Effectiveness recommends reporting both a healthcare-sector and a societal analysis with an "impact inventory" listing what's included.

## The math

No formula — a scoping rule applied before any math:

```
Included cost/benefit categories = f(perspective)
```

A useful check: build an impact inventory table with one row per cost/benefit and one column per perspective, and mark which cells count.

## Worked example

A symptom-checker app diverts 10,000 GP visits per year to self-care.

- **Payer (NHS)**: saves 10,000 × £42 per GP consultation = **£420,000/year** — strongly positive.
- **Provider (GP practice)**: if practices are paid by capitation, their income is unchanged but workload falls — mildly positive.
- **Societal**: add patients' saved travel and waiting time, say 10,000 × 2 hours × £15/hour = £300,000 of time value; but subtract harm if 2% are falsely reassured and present later, sicker, at 200 × £3,000 = £600,000 of extra treatment. Societal net: 420,000 + 300,000 − 600,000 = **£120,000/year** — positive, but dominated by the safety assumption.

Same app, three different answers. The declaration of perspective is what makes the numbers comparable and honest.

## Software engineering connection

Tool and platform ROI has perspectives too:

- **Team budget ("payer")**: does the license fee fit my cost center?
- **Platform org ("provider")**: total cost including integration, support, and maintenance.
- **Company ("societal")**: include customer impact, security externalities, and the time of every team affected.

A CI tool that is cheap for the buying team but pushes migration work onto 40 other teams is the software version of cost-shifting — visible only from the wider perspective. State the perspective in every business case; reviewers can't challenge assumptions they can't see.

## Pitfalls

- **Silent perspective switching**: counting societal benefits but only payer costs makes anything look cost-effective.
- **Double counting** when perspectives are merged (e.g., counting a saved GP appointment as both payer savings and patient time savings when the payer figure already includes staff time).
- **Ignoring cost-shifting**: "savings" that just move cost to patients, carers, or another department.

## Sources

- Sanders GD, et al. "Recommendations for Conduct, Methodological Practices, and Reporting of Cost-effectiveness Analyses: Second Panel on Cost-Effectiveness in Health and Medicine." JAMA 2016. <https://jamanetwork.com/journals/jama/fullarticle/2552214>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
