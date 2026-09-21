# Quality-Adjusted Life Year (QALY)

A QALY is one year of life lived in perfect health. It combines *how long* people live with *how well* they live, so that a year in poor health counts as less than one QALY — making utterly different health interventions comparable on a single scale.

## Why it matters

The QALY is the common currency of health technology assessment. NICE (England) values health gains at **£20,000–£30,000 per QALY**: an intervention that buys QALYs cheaper than that threshold is normally recommended; one that buys them dearer is normally rejected. This one number is how a national health service compares a cancer drug, a hip replacement, and a triage app on the same axis. If your software can credibly claim QALYs — by preventing deterioration, accelerating treatment, or improving safety — you can price its health value in the same currency as medicine itself.

## The math

```
QALYs = Σ_i (duration_i × utility_i)

duration_i = years spent in health state i
utility_i  = quality weight of state i, anchored at 1 = perfect health, 0 = dead
             (negative values allowed for states worse than death)
```

Utility weights come from validated instruments, most commonly [EQ-5D](../eq-5d/). QALY *gain* from an intervention is the difference between the QALY streams with and without it, [discounted](../discounting-and-time-preference/) at 3.5%/year in the NICE reference case.

## Worked example

A patient waits for cardiac treatment in a state with utility 0.6. Treatment restores them to utility 0.85.

- **Treated now**: 1 year at 0.85 = 0.85 QALYs this year.
- **Treated after a 6-month delay**: 0.5 × 0.6 + 0.5 × 0.85 = 0.725 QALYs.
- **QALY loss per patient from the delay**: 0.85 − 0.725 = **0.125 QALYs**.

Monetized at NICE's threshold: 0.125 × £20,000–£30,000 = **£2,500–£3,750 of health value lost per patient per 6-month delay**. If software that accelerates the pathway removes that delay for 400 patients/year, the health value is 50 QALYs ≈ **£1.0–£1.5 million/year** — before counting any operational savings.

## Software engineering connection

- **Faster pathways = earlier QALYs.** Anything that shortens [referral to treatment](../referral-to-treatment/) converts waiting-time disutility into health gain, valued as above.
- **Safety = QALYs preserved.** Prevented medication errors and missed diagnoses are QALY losses avoided.
- **The QALY is also a metric-design template**: a composite of quantity × quality, with quality weights elicited from a standardized instrument. A "quality-adjusted engineer year" (time × DevEx-survey weight) is the same construction — see [SPACE and DevEx](../space-and-devex/).
- To turn QALYs into money for a business case, use [net monetary benefit](../net-monetary-benefit/); to turn them into a decision, use [willingness-to-pay thresholds](../willingness-to-pay-thresholds/).

## Pitfalls

- **Inventing utility weights.** Weights must come from validated instruments (EQ-5D) and published value sets, not intuition.
- **Claiming QALYs without a causal pathway.** "Our app improves wellbeing" is not a QALY claim; "removes X weeks of waiting in state utility 0.6" is.
- **Double counting**: claiming both the QALY gain and the cost savings of the same avoided deterioration requires care that they are genuinely separate.
- **Equity blind spots**: QALYs value a year of life extension by baseline utility, which can disadvantage people with disabilities — the reason ICER (US) also reports the evLYG (see [life-years gained](../life-years-gained/)).

## Sources

- NICE glossary: QALY. <https://www.nice.org.uk/glossary?letter=q>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
