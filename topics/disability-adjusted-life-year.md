# Disability-Adjusted Life Year (DALY)

A DALY is one lost year of healthy life — the burden-side mirror of the [QALY](quality-adjusted-life-year.md). Where QALYs count health *gained*, DALYs count health *lost* to disease; interventions are valued by DALYs **averted**.

## Why it matters

The DALY is the global-health standard (WHO, the Global Burden of Disease study, and most low- and middle-income-country health ministries plan in DALYs). If your software targets international health systems, donors, or WHO-aligned programs, the value language is DALYs averted, not QALYs gained. WHO-CHOICE's historical benchmark: an intervention averting a DALY for less than 1× GDP per capita is "highly cost-effective," 1–3× GDP per capita "cost-effective" (WHO now discourages rigid use of these bands, but they remain ubiquitous in practice).

## The math

```
DALY = YLL + YLD

YLL (years of life lost)         = deaths × standard life expectancy at age of death
YLD (years lived with disability) = prevalence × disability weight

disability weight ∈ [0, 1], 0 = full health, 1 = equivalent to death
(weights published by the Global Burden of Disease study)
```

## Worked example

A screening-reminder platform in a region raises early detection of a disease. Annually it prevents 10 premature deaths (each losing 20 years against standard life expectancy) and prevents 200 people living a year with a condition whose disability weight is 0.2.

```
YLL averted = 10 × 20        = 200
YLD averted = 200 × 0.2      = 40
DALYs averted               = 240 per year
```

If the platform costs $600,000/year to run, the cost per DALY averted is 600,000 / 240 = **$2,500**. In a country with GDP per capita of $8,000, that is well under the 1× GDP benchmark — "highly cost-effective" in WHO-CHOICE terms.

## Software engineering connection

- Digital health aimed at global health funders (Gavi, Global Fund, national programs) should express impact as **cost per DALY averted** — it is the metric grant reviewers already think in.
- The DALY is also a useful *burden accounting* template for engineering: incidents, flaky builds, and legacy friction are "years lived with disability" for a codebase — a toil-weighted burden inventory tells you where remediation buys the most "healthy engineering years," the same way GBD burden tables direct health spending.

## Pitfalls

- **QALYs gained ≠ DALYs averted numerically** — different weights, different life tables, different conventions (DALYs historically used age-weighting and discounting inside the measure). Don't convert casually.
- **Using GDP-multiple thresholds as a rubber stamp** — WHO itself warns they ignore budgets and opportunity cost; see [willingness-to-pay thresholds](willingness-to-pay-thresholds.md).
- **Claiming population-scale DALYs from per-user efficacy** without multiplying through uptake and adherence — see [reach and equity](reach-and-equity.md).

## Sources

- WHO indicator registry: DALYs. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/158>
- Bertram MY, et al. "Cost-effectiveness thresholds: pros and cons." (WHO) <https://pmc.ncbi.nlm.nih.gov/articles/PMC4339959/>
- Marseille E, et al. on GDP-based thresholds, Health Policy and Planning. <https://academic.oup.com/heapol/article/32/1/141/2555408>
