# Number Needed to Screen (NNS)

NNS is the number of people who must be screened — not merely treated — to prevent **one** adverse outcome over a defined follow-up period, given the population's baseline risk and the relative risk reduction that early detection and treatment achieve. It is NNT's screening-programme-level analogue: NNT asks how many must be *treated* to prevent one outcome; NNS asks how many must go through the whole *screen-and-then-treat* pathway to get there.

## Why it matters

Rembold introduced NNS in 1998 specifically so screening programmes could be compared on the same footing as treatments, because a screening test's headline relative risk reduction hides two things a treatment's does not: the baseline risk of the population actually invited to screen, and the fact that everyone screened bears the test's cost and false-positive burden, not just the minority who go on to benefit. The UK National Screening Committee's cost-effectiveness gate (see [screening economics](../screening-economics/)) is built on exactly this distinction — a screening programme with an impressive relative risk reduction in a low-baseline-risk population can still have an NNS in the thousands, at which point the programme cost per outcome prevented becomes the real question.

## The maths

```
NNS = 1 / (baseline_risk × relative_risk_reduction)

baseline_risk           = probability of the outcome in the screened
                           population over the follow-up period (0–1)
relative_risk_reduction = proportional risk reduction achieved by
                           screening-enabled early treatment (0–1)

Program cost per outcome prevented = NNS × cost_per_screen
```

Compare directly against [NNT](../number-needed-to-treat/): NNS folds the whole screen → diagnose → treat funnel's effectiveness into one number, where NNT already assumes the patient is diagnosed and starting treatment.

## Worked example

A screening programme's target population has a 2% baseline event risk over the study period (`baseline_risk = 0.02`), and early detection achieves a 25% relative risk reduction (`relative_risk_reduction = 0.25`):

```
NNS = 1 / (0.02 × 0.25) = 1 / 0.005 = 200

200 people must be screened to prevent one outcome.

At £50 per screen:
Programme cost per outcome prevented = 200 × £50 = £10,000
```

That £10,000 figure is what should be weighed against the cost of the outcome itself and the QALYs it would have cost — the same comparison [prevention economics](../prevention-economics/) makes for prevention programmes generally.

## Software engineering connection

NNS is "how many users, events, or requests must run through a detection or triage flow to catch one true positive worth acting on" — directly relevant to alert-based monitoring and triage systems, where a low-prevalence target condition inflates NNS the same way it collapses positive predictive value (see [screening economics](../screening-economics/) and [clinical AI evaluation](../clinical-ai-evaluation/)). A monitoring rule that must process 200 events per real catch is only worth running if the catch is worth at least 200 times the per-event triage cost — the identical arithmetic as the healthcare worked example above.

## Pitfalls

- **Ignoring baseline risk dependence**: the same screening test or programme has a very different NNS — and cost-effectiveness — in a high-risk population versus a low-risk one. Never quote an NNS without stating the population it was computed for.
- **Counting the wrong denominator**: NNS counts people *screened*, not people who test positive or start treatment — it already embeds the whole funnel's effectiveness, so it should never be compared to a metric counted over positives only.
- **Comparing across follow-up periods**: a shorter follow-up period generally inflates NNS, because fewer events are observed in the window. NNS figures are only comparable when computed over the same follow-up duration.

## Sources

- Rembold CM. "Number needed to screen: development of a statistic for disease screening." BMJ. 1998;317(7154):307-12.
