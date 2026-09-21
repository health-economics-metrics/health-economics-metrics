# Reach and Equity

RE-AIM — Reach, Effectiveness, Adoption, Implementation, Maintenance — is the standard framework for judging the *population* impact of an intervention. Its central arithmetic: **public-health impact ≈ reach × effectiveness**. Digital tools add an equity dimension: the digital divide means reach is systematically uneven, and digital-first delivery can widen the health gaps it aims to close.

## Why it matters

Systematic reviews applying RE-AIM to mHealth find a consistent signature: strong Reach and Adoption, **weak Effectiveness and Maintenance** — apps spread easily and fade fast. For a national health service, this means an impressive per-user product can be a poor population investment, and vice versa: a modestly effective tool reaching millions can outproduce a brilliant one reaching thousands (see the [HALE](../health-adjusted-life-expectancy/) arithmetic). Equity is not a side constraint but a value driver: digital exclusion tracks age, deprivation, disability, and language — exactly the populations carrying the most treatable burden — so the marginal excluded user often has *above-average* potential benefit.

## The math

```
Population impact ≈ reach × effectiveness
  reach         = participants / eligible population (see activation-and-uptake.md)
  effectiveness = real-world effect among participants (retention-weighted —
                  see retention-and-churn.md)

Equity-stratified version:
  impact_group_g = reach_g × effectiveness_g, reported per deprivation
  quintile / age band / language group
  equity gap = impact_top quintile − impact_bottom quintile

Distributional cost-effectiveness: apply equity weights to QALYs by
recipient group — a QALY to the worst-off counts more (an increasingly
mainstream HTA extension).
```

## Worked example

A digital diabetes-prevention program, reported two ways:

```
Aggregate: reach 12%, effect 0.02 QALYs/participant → 0.0024 QALYs/eligible person

Stratified (deprivation quintiles):
  Q1 (least deprived): reach 22%, effect 0.02 → 0.0044
  Q5 (most deprived):  reach 4%,  effect 0.025 → 0.0010

The program delivers 4.4× more health to the least deprived —
while Q5's per-participant effect is HIGHER (more headroom). An
assisted-digital arm (phone coaching + community access) costing 20%
more per Q5 participant that lifts Q5 reach to 12% triples Q5 impact
and improves the aggregate — the equity investment IS the efficiency
investment here.
```

## Software engineering connection

Reach is substantially an engineering artifact: device and OS floor requirements, bandwidth assumptions, language support, accessibility conformance (WCAG), identity-verification hurdles, and app-store-only distribution each carve populations out of the denominator — usually invisibly, because excluded users never appear in analytics. Engineering practices that move equity: measure the *denominator* (instrument the eligible population, not just users); budget performance for old devices and poor connectivity; ship assisted-digital paths (phone, SMS, kiosk) as first-class flows rather than shame channels; and stratify every dashboard metric by the equity dimensions — an unstratified average is where inequity hides ([GDS take-up](../gds-service-metrics/) carries the same warning).

## Pitfalls

- **Effectiveness reported on completers, impact claimed on populations** — the reach terms silently dropped.
- **Equity as an afterthought audit** rather than a design input; retrofitting reach is far costlier than designing for it.
- **Maintenance amnesia**: RE-AIM's weakest mHealth dimension — impact claims beyond the evidence's time horizon.
- **Digital-only channel savings** that shift costs onto excluded users and front-line staff (see [GDS service metrics](../gds-service-metrics/)).

## Sources

- RE-AIM framework. <https://re-aim.org/>
- RE-AIM systematic reviews of mHealth. <https://pmc.ncbi.nlm.nih.gov/articles/PMC12358350/>
- CDC, PRISM/RE-AIM for equity planning. <https://www.cdc.gov/pcd/issues/2018/17_0271.htm>
