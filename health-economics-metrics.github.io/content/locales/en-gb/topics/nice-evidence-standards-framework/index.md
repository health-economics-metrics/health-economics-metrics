# NICE Evidence Standards Framework (ESF)

The ESF is NICE's framework specifying **how much evidence a digital health technology needs, proportionate to its risk**. It is the closest thing to an official answer to "what do we have to prove before the NHS buys our app?"

## Why it matters

The ESF (first released 2019, updated 2022 to cover AI and adaptive algorithms) classifies digital health technologies into tiers by clinical function, with **cumulative** evidence standards — 21 standards across 5 groups (design factors, value, performance/effectiveness, economic impact, deployment):

```
Tier A — system services, no direct patient outcome (e.g., e-rostering)
         → basic standards: credibility, data protection, technical assurance
Tier B — inform, simple monitoring, communication (e.g., symptom diary)
         → + evidence of user benefit, appropriate reliability
Tier C — treat, diagnose, or actively guide clinical management
         → + high-quality comparative effectiveness evidence (ideally RCT)
           and economic analysis
```

For economic evidence, [cost-consequence analysis](../cost-consequence-analysis/) is acceptable for most tiers; [cost-utility analysis](../cost-utility-analysis/) is expected at the highest risk. The ESF defines your **evidence cost of market entry** — budget for it like any other build cost.

## The maths

No formulas — a decision table. The operative calculation is commercial:

```
Evidence investment required = f(tier)
  Tier A: documentation + assurance ≈ £10k–50k
  Tier B: observational/comparative user-benefit study ≈ £50k–250k
  Tier C: RCT-grade comparative study + economic model ≈ £250k–£2M+

Position your product's claims deliberately: claiming "supports clinical
decisions" instead of "informs patients" moves you a tier and can 10× the bill.
```

## Worked example

A medication-reminder app maker considers adding a dose-adjustment recommendation feature.

- As a reminder app: **Tier B** — a cohort study showing adherence improvement suffices.
- With dose recommendations: **Tier C** — comparative effectiveness evidence (likely an RCT against usual care) plus economic analysis.

If the RCT costs £600k and the dose feature's incremental revenue is £200k/year, the feature must hold value for 3+ years before evidence costs break even — a product decision that looks entirely different once the ESF tier is priced in. Many teams ship the Tier B product and stage the Tier C claim behind funding.

## Software engineering connection

The ESF is the single most transferable governance pattern in this repo: **risk-tiered evidence requirements for tool adoption**. Internal version: a code formatter needs a demo (Tier A); a productivity tool claiming hours saved needs a measured pilot (Tier B); an AI gate that auto-blocks deploys or auto-writes clinical code needs controlled-trial-grade evidence before org-wide rollout (Tier C). Proportionate evidence stops both failure modes — bureaucracy strangling trivial tools, and vibes shipping consequential ones. See also [DiGA fast-track](../diga-fast-track/) for the "provisional adoption with evidence deadline" complement.

## Pitfalls

- **Tier misclassification by wishful thinking** — regulators and buyers classify by what the product *does*, not what the marketing says.
- **Evidence built after the product**: retrofitting an RCT onto a shipped product without instrumentation or equipoise is slow and often impossible.
- **Meeting the ESF and forgetting the rest**: ESF sits alongside DTAC (clinical safety, data protection, interoperability) and, for AI, regulatory clearance — see [AI regulatory evaluation](../ai-regulatory-evaluation/).

## Sources

- NICE Evidence Standards Framework (ECD7). <https://www.nice.org.uk/corporate/ecd7>
- ESF evidence standards tables. <https://www.nice.org.uk/corporate/ecd7/chapter/section-c-evidence-standards-tables>
