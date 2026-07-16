# Value-Generating Capacity (Operational Turnaround)

Value-generating capacity is the "opportunity benefit" of freed time: what the hospital can now *achieve* with the hours your software releases. This is the metric that matters most to Chief Operating Officers and Medical Directors, because it speaks in the currency they are managed on — activity, targets, and turnaround.

## Why it matters

The NHS faces massive referral-to-treatment backlogs, and trusts that miss national waiting-time standards face regulatory scrutiny and intervention (see [referral to treatment](referral-to-treatment.md)). Hiring is slow and constrained; estates are fixed. The only fast lever is getting more value-generating activity out of existing staff and space. Software that reclaims specialist time doesn't just "save money" — it *mints capacity*: clinics that couldn't exist, assessments that couldn't be scheduled, without hiring or building.

## The math

```
Hidden capacity created = time released → activity units enabled × scheme value

Activity units: outpatient attendances, pre-op assessments, monitoring reviews
Scheme value:   national tariff / NHS Payment Scheme prices
                (see national-tariff-and-unit-costs.md)
```

This is the output-basis valuation of [practitioner time](practitioner-time.md), scaled to a service line and expressed in the activity units the operations team already plans in.

## Worked example

Band 6 specialist nurses run pre-operative assessment clinics. Documentation automation reclaims 1 hour/day for each of 25 nurses; each hour fits 2 assessments.

```
Extra assessments = 25 nurses × 2/day × 250 days = 12,500/year
At ~£120 scheme value per pre-op assessment:
  12,500 × £120 = £1.5M/year of care capacity created
```

— without hiring a single nurse or building a single room. (The widely-quoted model this stub originally cited put the figure at £766,920/year for a smaller cohort; the arithmetic pattern is the same — the number scales with nurses × sessions × tariff.) The operational framing for the COO: pre-op assessment stops being the constraint on theatre lists — cancelled-on-the-day operations fall, and theatre utilization rises, which is where the *next* benefit line starts (see [downstream resource optimization](downstream-resource-optimization.md)).

## Software engineering connection

The same reframing rescues developer-productivity claims from wage math: released engineering time, expressed as *shipped capability the org couldn't otherwise afford* — features, migrations, reliability work — valued at what the org pays for such capability at the margin (contractor rates, or deferred-hire equivalents). The COO framing also teaches something about pitching platform work: express the benefit in the units the audience is managed on. Ops leaders think in activity and targets, not in abstract hours; engineering leaders think in roadmap items and headcount, not in minutes saved.

## Pitfalls

- **Capacity claims without demand**: 12,500 extra assessment slots only matter if the surgical pipeline fills them — check the downstream constraint.
- **Tariff value without a payment mechanism**: under blended payment, extra activity may not bring extra income; the value may be waiting-list reduction instead (see [waiting list impact](waiting-list-impact.md)).
- **Presenting capacity as cash** — this is the flagship non-cash-releasing benefit; label it (see [cash-releasing vs non-cash-releasing](cash-releasing-vs-non-cash-releasing.md)).

## Sources

- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
