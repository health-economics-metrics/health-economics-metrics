# Work Productivity and Activity Impairment (WPAI)

WPAI is a validated self-report questionnaire (Reilly, Zbrozek, Dasbach, 1993) measuring how much a health problem affects paid work and daily activities, usually over the past 7 days. It splits the loss into *absenteeism* — work time literally missed — and *presenteeism* — reduced productivity while physically at work — and the second is usually the larger, more hidden cost component.

## Why it matters

Simple sick-day counts only see absenteeism. A clinician or knowledge worker who never takes a day off but works at 60% capacity through a chronic condition contributes zero to an absence register while still generating a large, real productivity loss — WPAI is designed specifically to surface that invisible cost. Because it is a validated instrument rather than a bespoke survey, its scores are usable in [patient-reported outcome](../patient-reported-outcomes/) evidence packages and cost-of-illness studies without the reviewer needing to re-validate the measure. As a self-report instrument, it is itself a form of PROM, distinguished mainly by its focus on work and activity rather than symptoms or quality of life.

## The maths

```
Absenteeism % = hours_missed_due_to_health / (hours_missed_due_to_health + hours_worked) × 100

Presenteeism %  = self-rated 0–10 impairment while working, × 10
                  (elicited directly via questionnaire, not derived here)

Overall Work Impairment % =
    Absenteeism% + (1 − Absenteeism%/100) × Presenteeism%
    (combines the two so the total can never exceed 100%)

Productivity cost = Overall Work Impairment% / 100 × period_earnings
```

The overall-impairment formula is deliberately not a simple sum: adding the two percentages directly could exceed 100%, so presenteeism is applied only to the *remaining* (non-absent) share of work time.

## Worked example

An employee with migraine reports being scheduled for a 40-hour week but misses 4 hours of it:

```
hours_missed = 4, hours_worked = 36
Absenteeism% = 4 / (4 + 36) × 100 = 10%
```

They separately self-rate their productivity impact while working as 3 out of 10 on the WPAI questionnaire, i.e. `Presenteeism% = 30%` (this step is a raw questionnaire answer, not something derived from other numbers):

```
Overall Work Impairment% = 10 + (1 − 10/100) × 30
                          = 10 + 0.9 × 30
                          = 10 + 27
                          = 37%
```

Over a 5-day week earning £800 (£160/day):

```
Productivity cost = 37/100 × 800 = £296
```

Notice that a naive sick-day count would have recorded only the 4 hours (10%) missed — the presenteeism component nearly triples the true impairment once counted.

## Software engineering connection

This maps directly onto engineering-team health metrics:

- **Absenteeism** is sick leave and PTO — visible, already tracked, and the easy part.
- **Presenteeism** is the burned-out or context-switching-overloaded engineer who is present in every stand-up while operating at reduced capacity — usually the larger and more hidden cost, and invisible to headcount or attendance data. It shows up instead as reduced throughput in [DORA](../dora-metrics/) and [flow metrics](../flow-metrics/), or as slower resolution of the very [technical debt](../technical-debt/) whose "interest" compounds the impairment further.
- The engineering lesson is the same as the clinical one: measuring only absence and calling it "productivity loss" systematically understates the real cost, because it misses everyone who is present but impaired.

## Pitfalls

- **Self-report recall bias.** A 7-day recall window is subject to the same reporting distortions as any retrospective self-report.
- **Treating the 0–10 presenteeism scale as a true physical measurement.** It is ordinal, elicited by self-rating, not a validated physical quantity — treating differences on it as strictly linear or interval is a modelling convenience, not a validated physical fact.
- **Pooling scores across WPAI variants.** WPAI has several condition-specific versions — WPAI:GH (general health), WPAI:SHP (specific health problem), and disease-specific variants — and scores from different variants should not be pooled or compared without first checking they are the same instrument version.

## Sources

- Reilly MC, Zbrozek AS, Dasbach EJ. "The validity and reproducibility of a work productivity and activity impairment instrument." PharmacoEconomics 1993;4(5):353-65.
- WPAI instrument documentation, Reilly Associates — the official scoring reference. <https://www.reillyassociates.net/>
