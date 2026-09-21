# QALY Shortfall and Severity Modifiers

QALY shortfall measures how much future health a disease takes from patients compared to the general population. NICE uses it to apply **severity modifiers**: the sicker the population, the more each QALY gained is worth — up to 1.7× the standard threshold.

## Why it matters

Since NICE's 2022 manual, severity is an explicit multiplier on the value of health gains, replacing the old end-of-life premium. A technology for a severe condition is judged against an effective threshold of up to ~£51,000/QALY instead of £30,000. If your software serves a severely affected population (advanced heart failure, severe mental illness), the severity modifier can be the difference between a fundable and unfundable economic case — and you need shortfall maths to claim it.

## The maths

Two measures, computed over remaining lifetime with current standard of care:

```
Absolute shortfall     = QALYs_general_population − QALYs_with_condition
Proportional shortfall = Absolute shortfall / QALYs_general_population
```

NICE 2022 weights (whichever measure gives the higher weight applies):

```
Weight ×1.0: absolute < 12 and proportional < 0.85
Weight ×1.2: absolute ≥ 12 or proportional ≥ 0.85
Weight ×1.7: absolute ≥ 18 or proportional ≥ 0.95
```

The weight multiplies ΔE (or equivalently the threshold): effective λ becomes £24k–£36k at ×1.2 and £34k–£51k at ×1.7.

## Worked example

Patients with an aggressive condition, average age 60. General population at 60 expects 14.2 discounted QALYs; with the condition under current care, 2.1.

```
Absolute shortfall     = 14.2 − 2.1 = 12.1  (≥ 12 → qualifies for ×1.2)
Proportional shortfall = 12.1 / 14.2 = 0.852 (≥ 0.85 → also ×1.2)
```

Your monitoring platform's ICER is £26,000/QALY — above the standard £20k–£30k midpoint judgment, borderline. With the ×1.2 weight: effective ICER = 26,000 / 1.2 ≈ **£21,700/QALY** — comfortably fundable. The shortfall calculation just moved the decision.

## Software engineering connection

Severity weighting is a formal version of something engineering orgs do by instinct: spend more per unit improvement on the worst-off systems. The transferable pattern — compute each service's "SLO shortfall" (how far below its expected healthy baseline it runs, absolutely and proportionally), and weight remediation value accordingly. This justifies, with arithmetic instead of arguments, why the burning legacy system gets more investment per hour saved than a healthy one. It also carries the same governance lesson: publish the weights *before* the prioritization meeting, or every team claims severity.

## Pitfalls

- **Computing shortfall against the wrong baseline**: it is measured under *current standard of care*, not untreated natural history.
- **Age sensitivity**: shortfall depends heavily on population age (younger patients have more QALYs to lose → higher absolute shortfall); use the actual treated population's age distribution.
- **Assuming the modifier applies elsewhere** — it is a NICE (England) mechanism; other HTA bodies handle severity differently (or not at all).

## Sources

- Analysis of NICE severity modifier decisions, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Mtech Access, NICE HTA decision modifiers explainer. <https://mtechaccess.co.uk/nice-hta-decision-modifier/>
