# Concentration Index

The Concentration Index (Wagstaff, Paci, van Doorslaer, 1991) is the standard statistical measure of socioeconomic-related inequality in a health variable, ranging from -1 to 1. Negative means the health variable is concentrated among the socioeconomically disadvantaged, positive means it is concentrated among the better-off, and zero means no consistent socioeconomic gradient — it turns a suspicion about unequal distribution into a single, comparable number.

## Why it matters

A programme can look effective on aggregate and still deliver its benefit almost entirely to people who were already better off. Distributional concerns like this are exactly what [reach and equity](../reach-and-equity/) tracks descriptively — reach stratified by deprivation quintile, an equity gap between top and bottom groups — but a stratified table doesn't compress to a single trend line, and it can't easily be compared across two completely different interventions measured on different scales. The Concentration Index solves both problems: it is computed the same way for any health variable against any socioeconomic ranking, so a national health service can track whether a specific digital service's inequality is widening or narrowing release over release, and can compare the distributional fairness of an app roll-out against, say, a screening programme, on the same normalized scale.

## The maths

```
CI = (2 / mean(health_values)) × Cov(health_values, socioeconomic_ranks)

Cov(X, Y) = mean(X × Y) − mean(X) × mean(Y)   (population covariance)

socioeconomic_ranks: each person's fractional rank in the socioeconomic
distribution, in [0, 1] (0 = most disadvantaged, 1 = most advantaged;
for grouped/banded data, conventionally the midpoint rank of each group)
```

This is the "convenient covariance formula" (O'Donnell, van Doorslaer, Wagstaff, Lindelow, World Bank 2008) — the standard practitioner shortcut for computing the Concentration Index directly from paired observations, without first drawing and integrating under a concentration curve.

## Worked example

A self-reported good-health score (1 = worst, 4 = best) observed across four equal-sized socioeconomic quartiles, each represented by its quartile midpoint rank:

```
health_values        = [1.0, 2.0, 3.0, 4.0]
socioeconomic_ranks  = [0.125, 0.375, 0.625, 0.875]

mean(health_values)        = 2.5
mean(health × rank)        = mean([0.125, 0.75, 1.875, 3.5]) = 1.5625
mean(socioeconomic_ranks)  = 0.5

Cov = 1.5625 − 2.5 × 0.5 = 0.3125

CI = 2 × 0.3125 / 2.5 = 0.25
```

A positive `0.25` means this health score is concentrated among the socioeconomically advantaged group — the higher-scoring respondents skew toward the better-off end of the ranking.

## Software engineering connection

This is the same covariance-based inequality measurement used in economics generally (the Gini coefficient's cousin), and it maps onto measuring whether a software product's benefits are concentrated among already-advantaged user segments rather than spread equitably — a direct extension of [reach and equity](../reach-and-equity/) (RE-AIM's "reach" dimension) into a formal statistical measure rather than a described gap. Where reach-and-equity reports impact per stratum, the Concentration Index compresses the whole distribution into one signed number, suitable as a single tracked KPI across releases — practical for a dashboard, where a full stratified breakdown isn't.

## Pitfalls

- **Sign convention drift**: the sign depends on how both the health variable and the rank are defined — flipping either flips the sign, so the convention used must always be stated explicitly alongside any reported value.
- **Boundary ranks instead of midpoint ranks**: grouped or banded socioeconomic data (e.g. quintiles) requires using each group's fractional rank at its *midpoint*, not its boundary, or the index is biased.
- **Reading "near zero" as "no inequality"**: a Concentration Index near zero means "no consistent socioeconomic gradient", not "no inequality" in an absolute sense — offsetting inequalities in different directions can cancel out.

## Sources

- Wagstaff A, Paci P, van Doorslaer E. "On the measurement of inequalities in health." Soc Sci Med. 1991;33(5):545-57.
- O'Donnell O, van Doorslaer E, Wagstaff A, Lindelow M. "Analyzing Health Equity Using Household Survey Data." World Bank. 2008 — the standard practitioner handbook, source of the convenient covariance formula used here. <https://openknowledge.worldbank.org/entities/publication/98380884-0d1d-53d2-b95f-ec6be2019414>
