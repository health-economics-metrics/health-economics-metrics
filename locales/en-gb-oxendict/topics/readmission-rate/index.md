# Readmission Rate

The 30-day readmission rate is the percentage of discharged patients who return as an emergency within 30 days. It is the health system's canonical *quality-of-discharge* metric — and it carries direct financial penalties.

## Why it matters

A readmission means the first discharge didn't stick: premature discharge, failed medication handoff, no follow-up, or missing social support. Payers penalize it explicitly — the US Hospital Readmissions Reduction Program docks up to 3% of a hospital's Medicare payments; the NHS has historically not paid for avoidable 30-day emergency readmissions. So readmission avoidance is one of the few benefit categories that is *directly* cash-relevant to a provider, not just capacity.

## The maths

```
Readmission rate = emergency readmissions within 30 days / index discharges × 100

Risk-standardized comparisons adjust for case mix; penalty programmes
compare observed vs expected for like hospitals.

Value of avoidance = avoided readmissions × (cost per readmission spell
                     + penalty exposure per readmission)
```

## Worked example

A heart-failure discharge-support app (symptom tracking, weight alerts, medication reminders, nurse escalation): 2,000 discharges/year, baseline readmission rate 18%, trial shows 14% with the app.

```
Avoided readmissions = 2,000 × (0.18 − 0.14) = 80/year
Cost per readmission spell ≈ £3,500 → £280,000/year avoided treatment cost
Plus penalty/non-payment exposure on those spells.
App cost: 2,000 × £60 = £120,000/year

Net ≈ +£160,000/year, before any QALY claim for avoided deterioration.
```

The number to defend is the 4-percentage-point effect: it must come from a controlled comparison, because readmission rates swing with case mix and season.

## Software engineering connection

Readmission is the health system's **change failure rate** (see [DORA metrics](../dora-metrics/)): work that "shipped" and bounced back within 30 days. The analogies run deep — reopened tickets and regression incidents indicate poor "discharge quality" (weak verification, premature closure, missing handoff docs); penalty-style accounting (the fixing team pays, not the receiving team) changes behaviour; and both fields learned the same lesson, that pushing raw throughput (faster discharge, faster shipping) without investing in the handoff simply converts visible queues into invisible rework. A "30-day reopen rate" belongs on any team dashboard that celebrates cycle time.

## Pitfalls

- **Gaming by re-labelling**: readmissions coded as observation stays or new conditions; audit the definition.
- **All-cause vs related-cause**: 30-day all-cause includes genuinely unrelated events; penalties usually use all-cause precisely because "related" is gameable.
- **Case-mix blindness**: a hospital serving sicker, poorer populations readmits more for reasons no app fixes — risk-adjust before comparing.

## Sources

- CMS, Hospital Readmissions Reduction Program. <https://www.cms.gov/medicare/payment/prospective-payment-systems/acute-inpatient-pps/hospital-readmissions-reduction-program-hrrp>
- NHS Digital, emergency readmissions statistics. <https://digital.nhs.uk/data-and-information/publications/statistical/compendium-emergency-readmissions>
