# Length of Stay (LOS)

Length of stay is the number of days from hospital admission to discharge — the core flow-efficiency metric of inpatient care. UK acute means run around 4–5 days; every excess day consumes a scarce bed and exposes the patient to hospital-acquired risks.

## Why it matters

LOS drives almost everything in acute-hospital economics: bed capacity, elective throughput, emergency flow, staffing. Reducing average LOS by even fractions of a day at scale releases enormous capacity (see [bed days saved](../bed-days-saved/)). LOS is also a quality signal in both directions — too long suggests process failure (delayed diagnostics, discharge paperwork, social-care waits); too short can mean premature discharge, which shows up later as [readmissions](../readmission-rate/).

## The maths

```
LOS (per spell)  = discharge date − admission date
Average LOS      = occupied bed days / discharges (report mean AND median;
                   LOS is heavily right-skewed by long-stay outliers)

Comparisons require case-mix adjustment (age, diagnosis, acuity),
or you are measuring who the hospital admits, not how it performs.
```

Little's Law connects the flow variables: `beds occupied = admission rate × average LOS` — the same law that governs software queues (see [flow metrics](../flow-metrics/)).

## Worked example

A trust admits 40 emergency medical patients/day at mean LOS 6.0 days: 240 beds permanently occupied (40 × 6). Discharge-coordination software (task tracking, pharmacy-to-take-out automation, transport booking) cuts the non-clinical tail of stays by 0.4 days on average.

```
Beds needed = 40 × 5.6 = 224 → 16 beds freed continuously
            = 16 × 365 = 5,840 bed days/year
```

Value the 5,840 bed days by mechanism (refill/close/slack) per [bed days saved](../bed-days-saved/). Note what moved: not medicine, but *waiting* — the patient was medically fit; the system was still doing paperwork. That's a queueing problem, and software is good at queueing problems.

## Software engineering connection

LOS is the hospital's cycle time, and the improvement playbook is identical to delivery-flow work: instrument the stages (admission → treatment → medically-fit → actually-discharged), find where time pools (it's the handoffs), remove wait states rather than adding capacity. The "medically fit for discharge but still occupying a bed" cohort is the hospital's version of a PR approved but not merged. Direct software opportunities: discharge task orchestration, diagnostic turnaround, e-prescribing of discharge meds, social-care referral integration.

## Pitfalls

- **Mean-only reporting** — outliers dominate; a falling mean can hide a growing long-stay tail.
- **No case-mix adjustment** in before/after claims: admission thresholds change seasonally and secularly.
- **LOS reduction that reappears as readmission** — always pair LOS claims with 30-day readmission data.

## Sources

- OECD, length of hospital stay indicator. <https://www.oecd.org/en/data/indicators/length-of-hospital-stay.html>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
