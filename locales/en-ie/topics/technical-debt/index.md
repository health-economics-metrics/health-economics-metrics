# Technical Debt

Technical debt is the implied future cost of expedient past decisions in a codebase: the remediation work owed (**principal**) and the ongoing drag it exerts on delivery (**interest**). Quantification methods like SQALE turn it from metaphor into a costed liability.

## Why it matters

Unquantified, tech debt is a whine; quantified, it is a business case. Industry baselines (CAST Appmarq, 1,400 apps / 550M LOC): historically ≈ **$3.61 of technical-debt principal per line of code**, with typical codebases carrying a debt ratio of 15–20% of rebuild cost, versus a commonly used health bar of ≤5% (SonarQube's "A" grade). The health-economics frame fits precisely: debt is a *chronic condition* — untreated, it progresses, its "interest" compounds as slower delivery and higher defect rates, and remediation competes for capacity against feature work exactly as prevention competes with treatment.

## The maths

```
SQALE principal   = Σ over violations (remediation time) × developer cost rate
Technical debt ratio (TDR) = remediation cost / redevelopment cost × 100
                    (SonarQube grades: A ≤ 5%, B ≤ 10%, C ≤ 20%, D ≤ 50%)

Interest (the number that justifies paydown):
  interest/year = Δ delivery velocity × value per unit velocity
                + Δ defect rate × cost per defect
Paydown case  = PV(interest avoided over horizon) − remediation cost
                (discounted — see discounting-and-time-preference.md)
```

Principal states the liability; **interest** makes the investment case. Paying £500k principal to avoid £40k/year interest is a bad trade; to avoid £400k/year, excellent.

## Worked example

A 400k-LOC clinical-records integration layer: SQALE principal 3,800 hours × £75 = **£285k**; TDR ≈ 12% (grade C). Measured interest: teams touching this layer show cycle times 40% longer and 2× change-failure rates versus the estate baseline. The layer absorbs 6,000 dev-hours/year:

```
Interest ≈ 6,000 × 0.40 × £75      = £180,000/year (velocity drag)
         + 12 extra failures × £8,000 = £96,000/year (rework/incidents)
         ≈ £276,000/year

Remediate the worst 30% of principal (£85k) targeting hotspots → modelled
interest reduction 60%: saves ~£166k/year. Payback ≈ 6 months.
```

The hotspot targeting matters: debt interest concentrates where change frequency × debt density peaks — remediating rarely-touched debt buys nothing, like treating a condition that would never progress ([prevention economics](../prevention-economics/)).

## Software engineering connection

The health-economics imports that upgrade tech-debt arguments: express the estate as a **burden inventory** ([DALY](../disability-adjusted-life-year/)-style — where are the lost healthy engineering-years?); justify paydown with progression maths, honestly (usually cost-effective, not cost-saving); weight the worst systems' remediation by [severity shortfall](../qaly-shortfall-and-severity-modifiers/); and submit big remediation proposals with an offset analysis that survives the [avoided downstream costs](../avoided-downstream-costs/) rules — probability-weighted, discounted, counted once.

## Pitfalls

- **Principal-only reporting**: a big scary number with no interest estimate justifies nothing.
- **Tool-generated debt figures taken literally**: SQALE counts rule violations; it misses architectural debt (the expensive kind) and counts trivia.
- **Debt-zero utopianism**: the optimal debt level is not zero — debt is leverage; the question is the interest rate.
- **"The rewrite avoids all of it"**: rewrite proposals must clear the same offset rules — counterfactual cost, probability, discounting.

## Sources

- CAST, technical debt estimation. <https://www.castsoftware.com/glossary/technical-debt-estimation>
- Letouzey J-L, "The SQALE method for evaluating Technical Debt." <https://www.researchgate.net/publication/239763591_The_SQALE_method_for_evaluating_Technical_Debt>
