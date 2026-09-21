# Life-Years Gained (LYG)

Life-years gained is the additional survival attributable to an intervention, with no quality adjustment: the area between the survival curves with and without it. The equal-value life year gained (evLYG) is a modern variant that credits all life extension equally.

## Why it matters

LYG is the rawest health outcome: how much longer do people live? It matters when quality data is missing, when comparing against QALY-skeptical audiences, and in oncology where survival curves are the primary trial output. The **evLYG** (used by the US ICER institute alongside cost/QALY) exists for an ethical reason: QALYs value a year of extended life by the patient's utility, so extending the life of someone with a disability "counts less" — evLYG values every extended year at a fixed utility, removing that discrimination.

## The math

```
LYG = mean survival_new − mean survival_comparator
    = area between survival curves (restricted to the time horizon)

QALY view of life extension:  extension × patient utility
evLYG view of life extension: extension × fixed utility (ICER uses ~0.851,
                              the average US population utility)
```

Both are [discounted](../discounting-and-time-preference/) in economic models.

## Worked example

A sepsis early-warning algorithm in a hospital: modeling shows earlier antibiotics prevent 12 deaths/year; average age of those patients gives 8 remaining life-years each at utility 0.7.

```
LYG   = 12 × 8            = 96 life-years/year
QALYs = 96 × 0.7          = 67.2
evLYG = 96 × 0.851        = 81.7
```

At £20,000 per QALY, the QALY framing values the survival at £1.34M/year; the evLYG framing at £1.63M. The gap is exactly the ethical judgment about whether a life-year at utility 0.7 is worth 70% of a "full" one. Serious dossiers report both.

## Software engineering connection

- Survival analysis is the shared toolkit: Kaplan-Meier curves for patients and for *services* (time-to-failure, time-to-churn) are the same math. "Service-years gained" from a reliability investment = area between the with/without survival curves of the system — a more honest framing than point MTTF claims.
- The evLYG carries a metric-design warning for engineering too: any productivity metric that weights output by a "quality of team" factor will systematically undervalue improvements for constrained or struggling teams — sometimes you want the equal-value variant on purpose.

## Pitfalls

- **Median vs mean survival**: economic models need mean (area under curve); trials often headline median. They differ a lot in skewed distributions.
- **Extrapolation beyond trial follow-up** dominates modeled LYG in chronic disease — state the extrapolation model and test it in [sensitivity analysis](../sensitivity-analysis/).
- **Claiming deaths prevented from observational before/after data** without adjusting for case mix and secular trends.

## Sources

- York Health Economics Consortium glossary: life-years gained. <https://yhec.co.uk/glossary/life-years-gained/>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
