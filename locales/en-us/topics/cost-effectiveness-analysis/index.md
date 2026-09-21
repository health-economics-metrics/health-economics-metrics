# Cost-Effectiveness Analysis (CEA)

CEA compares the costs of alternative interventions against a single outcome measured in **natural units** — life-years, cases detected, admissions avoided, mmHg of blood pressure reduced. Its output is a cost per unit of outcome.

## Why it matters

CEA is the workhorse comparison when all options target the same outcome. It answers "which of these ways of achieving X is the best use of money?" — but *not* "is X worth achieving at all?" (that needs [cost-benefit analysis](../cost-benefit-analysis/)) and *not* "how does X compare with unrelated priorities?" (that needs [cost-utility analysis](../cost-utility-analysis/) and a generic outcome like the QALY).

## The math

The comparison statistic is the [ICER](../incremental-cost-effectiveness-ratio/) in natural units:

```
ICER = (Cost_A − Cost_B) / (Effect_A − Effect_B)
     = £ per additional case detected / admission avoided / etc.
```

Procedure: define the outcome unit; cost every option from the same [perspective](../analysis-perspective/) over the same [time horizon](../time-horizon/); eliminate dominated options ([efficiency frontier](../dominance-and-efficiency-frontier/)); compute incremental ratios along the frontier.

## Worked example

Three ways to find undiagnosed atrial fibrillation in a population of 100,000:

```
Option                    Cost        Cases found
Opportunistic pulse checks £150,000       300
Pharmacy screening events  £400,000       520
Wearable-based screening   £900,000       610

ICER pharmacy vs pulse:  (400k−150k)/(520−300) = £1,136 per additional case
ICER wearable vs pharmacy:(900k−400k)/(610−520) = £5,556 per additional case
```

Whether £5,556 per additional case is "worth it" depends on the value of a found case (stroke prevention downstream) — CEA ranks the options but the adoption decision needs that external valuation. Note the wearable option's *average* cost per case (900k/610 = £1,475) looks fine; the *incremental* £5,556 is the honest number for the expansion decision.

## Software engineering connection

CEA is the right template whenever options share one outcome: cost per flaky test eliminated across three remediation approaches; cost per incident avoided across observability vendors; cost per successful deployment across CI architectures. The discipline it enforces — one declared outcome unit, incremental (not average) ratios, dominated options eliminated first — kills most bad vendor comparisons before the pricing discussion starts.

## Pitfalls

- **Comparing options with different outcomes** ("cases found" vs "satisfaction") in one CEA — that needs [cost-consequence analysis](../cost-consequence-analysis/) or a generic outcome.
- **Average cost-effectiveness ratios** presented where incremental ones are needed (the wearable example above).
- **Outcome units chosen for flattery**: "alerts generated" is an output, not an outcome; insist on units that carry value.

## Sources

- CDC POLARIS: cost-effectiveness analysis. <https://www.cdc.gov/policy/polaris/economics/cost-effectiveness/index.html>
- York Health Economics Consortium glossary. <https://yhec.co.uk/glossary/cost-effectiveness-analysis/>
