# Health-Adjusted Life Expectancy (HALE)

HALE is a population-level summary: the number of years a person can expect to live *in full health*, discounting years spent in illness or disability. Global HALE at birth was about 61.9 years against a life expectancy of 73.3 (WHO, 2019 data) — humanity lives its last decade, on average, in less-than-full health.

## Why it matters

HALE is the north-star metric of national and global health policy — the numerator of "healthy aging" targets and the gap it exposes (life expectancy minus HALE) is the burden that prevention, early intervention, and chronic-disease management aim to close. Digital health strategies at ministry level are justified in HALE terms; a portfolio of apps, screening services, and monitoring programmes ultimately rolls up here.

## The maths

The standard computation is the **Sullivan method**:

```
HALE_age_x = Σ (life-table person-years at each age ≥ x × proportion in full health)
             / survivors at age x

"proportion in full health" = 1 − Σ (prevalence_condition × disability weight)
```

Inputs: a standard life table plus prevalence and disability weights for health states (from Global Burden of Disease data). HALE relates to [DALYs](../disability-adjusted-life-year/) — population DALY burden and the HALE gap are two views of the same lost health.

## Worked example

A national digital hypertension programme: 500,000 enrolled, average blood-pressure control improves enough to cut stroke incidence by 0.2 percentage points/year. Modelled over the cohort's lifetime, strokes averted save 15,000 disability-weighted years (YLD at weight 0.32 plus YLL from fatal strokes).

```
HALE contribution ≈ 15,000 healthy years / 500,000 people
                  ≈ 0.03 years (≈ 11 days) of HALE per enrolled person
```

Eleven days sounds small — but at population scale it's how national metrics actually move: ministries buy millions of tiny per-person gains. This arithmetic also shows why **reach dominates**: an intervention twice as effective with a tenth the enrolment moves HALE five times less. See [reach and equity](../reach-and-equity/).

## Software engineering connection

HALE is a fleet-health metric pattern: **expected service life × proportion of that life spent healthy**. A platform team can compute "healthy service life expectancy" across its estate — years a service is expected to run, discounted by time spent in degraded, deprecated, or incident states (weights from SLO shortfall). It reframes reliability from point availability to lifetime health, and directs remediation at the systems dragging the estate's HALE down.

## Pitfalls

- **HALE moves slowly and multi-causally** — no single intervention "moves HALE" measurably; claim the modelled contribution, not the national statistic.
- **Prevalence data lags** years behind; recent gains won't show in official HALE.
- **Comparing HALE across countries** with different health-state measurement is treacherous; use it longitudinally within one system.

## Sources

- WHO indicator registry: HALE. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/66>
- Global Burden of Disease study (IHME). <https://www.healthdata.org/research-analysis/gbd>
