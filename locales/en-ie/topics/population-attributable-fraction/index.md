# Population Attributable Fraction (PAF)

PAF is the proportion of a disease or outcome's burden in a population that is attributable to a specific risk-factor exposure — the share that would disappear if the exposure were removed entirely. It converts "this risk factor doubles your odds" into a population-level number a commissioner can actually plan around: how many cases, and how much cost, a given exposure is really worth chasing.

## Why it matters

Levin introduced PAF in 1953 to answer a narrow, concrete question: if nobody smoked, how much lung cancer would disappear? The same arithmetic now sizes national prevention planning everywhere from tobacco and obesity strategies to the WHO Global Burden of Disease study's risk-factor rankings, because a relative risk on its own says nothing about impact — a risk factor can double your odds of a rare event and barely move population disease burden, or raise a common event's odds only slightly and still account for a huge share of cases. PAF is what turns "risk factor X is dangerous" into "removing risk factor X would prevent this many cases per year," which is the number a prevention programme's business case actually needs. See [prevention economics](../prevention-economics/) for what it costs to act on that number once you have it.

## The maths

```
PAF = prevalence_exposed × (relative_risk − 1) / (1 + prevalence_exposed × (relative_risk − 1))

prevalence_exposed = fraction of the population exposed to the risk factor (0–1)
relative_risk      = risk of the outcome in exposed vs. unexposed people (e.g. 2.5 = 2.5×)

Cases attributable = total_cases × PAF
```

PAF rises with both exposure prevalence and relative risk — a modestly elevated relative risk (say 1.5×) attached to a very common exposure can produce a larger PAF than a dramatic relative risk (say 5×) attached to a rare one. That is the whole reason it exists as a distinct number from relative risk.

## Worked example

A risk factor is present in 30% of a population (`prevalence_exposed = 0.3`) and raises the outcome's risk 2.5-fold (`relative_risk = 2.5`):

```
PAF = 0.3 × (2.5 − 1) / (1 + 0.3 × (2.5 − 1))
    = 0.3 × 1.5 / (1 + 0.3 × 1.5)
    = 0.45 / 1.45
    ≈ 0.3103 (31.0%)

With 1,000 cases/year in the population:
Cases attributable = 1,000 × 0.3103 ≈ 310 cases/year
```

Just under a third of this outcome's annual burden is attributable to the exposure — eliminating it entirely (the theoretical ceiling; no real intervention achieves 100% exposure removal) would prevent roughly 310 of the 1,000 cases each year.

## Software engineering connection

PAF is the epidemiological version of "how much of our incident volume is attributable to this one root cause?" — the same shape of question teams ask when sizing a specific class of deploy or dependency against total production incidents, rather than treating every incident as equally worth fixing the same way. A root-cause category present in a large share of deploys with only a modest relative risk of causing an incident can outrank a rare, high-relative-risk category for where to spend engineering effort first — exactly the PAF insight, translated.

## Pitfalls

- **Summing PAFs across risk factors**: PAFs for multiple factors affecting the same outcome do not add to 100% — they can exceed it in total, because factors interact and share causal pathways. Treat each PAF as "if this factor alone were removed," never as a partition of total risk.
- **Transplanting a relative risk across populations**: a relative risk estimated in one population (different baseline exposure prevalence, different confounders) computes a misleading PAF when applied to a different population's exposure prevalence.
- **Confusing PAF with attributable risk in the exposed**: PAF is population-level and depends on exposure prevalence; attributable risk in the exposed is individual-level and does not. They answer different questions — don't quote one to answer the other.

## Sources

- Levin ML. "The occurrence of lung cancer in man." Acta Unio Int Contra Cancrum. 1953;9(3):531-41.
- Rockhill B, Newman B, Weinberg C. "Use and misuse of population attributable fractions." Am J Public Health. 1998;88(1):15-9.
