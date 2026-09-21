# Avoidable Outsourcing Costs

When a trust cannot meet targets with internal capacity, it buys capacity at premium rates: weekend overtime for its own staff, or outsourcing procedures to private providers. The economic value of capacity-releasing software includes the **avoidable cost of that premium-rate work**.

## Why it matters

Under elective-recovery pressure, trusts routinely pay private-sector spot prices (often 1.2–1.5× the NHS scheme price) or premium waiting-list-initiative rates to their own consultants for weekend lists. Unlike ordinary capacity claims, avoided outsourcing is **cash-releasing**: the invoice to the private provider genuinely doesn't get raised. That makes it one of the strongest benefit lines available to software that increases internal throughput — and one of the easiest to evidence, because the outsourcing spend is already a visible budget line.

## The maths

```
Avoidable outsourcing cost = activity moved in-house × (outsourced unit price
                             − internal marginal cost per case)

Internal marginal cost: consumables + variable staffing for the extra activity
— the fixed estate is already paid for (see marginal-vs-average-cost.md).
```

The claim requires released internal capacity to actually absorb the activity: theatre sessions, beds, and staff must all be available (the binding constraint governs — theory of constraints again).

## Worked example

A trust outsources 800 cataract procedures/year at £900 each: £720,000/year of external spend, versus scheme price ~£750.

Theatre-scheduling software (list optimisation, gap backfilling from cancellations, turnover-time tracking) raises internal theatre utilisation enough to repatriate 500 procedures:

```
Internal marginal cost per case ≈ £350 (consumables + sessional staffing)
Saving = 500 × (900 − 350) = £275,000/year — cash-releasing
Remaining outsourcing: 300 × £900 = £270,000 (was £720,000)
```

Software cost £90,000/year → net ≈ **+£185,000/year in bankable cash**, plus internal-quality and training benefits of keeping the work in-house.

## Software engineering connection

The direct analogue is **contractor and consultancy premium**: when internal engineering capacity can't meet commitments, orgs buy external capacity at 1.5–3× loaded internal rates. Platform and productivity investments that raise internal throughput should claim avoided contractor spend exactly as above — external day-rate minus internal marginal cost, times work repatriated — because it is one of the few genuinely cash-releasing lines in a developer-productivity business case. The same caveat applies: the internal capacity must actually exist and be scheduled onto the repatriated work, or the claim is fiction.

## Pitfalls

- **Claiming repatriation without the full capacity chain** — surgeons freed but no theatre slots (or engineers freed but no product-management bandwidth) repatriates nothing.
- **Comparing outsourced price to internal average cost** instead of marginal cost — understates the saving, oddly enough; the fixed costs run either way.
- **Quality/complexity asymmetry**: outsourced cases are often the simple ones; repatriating them changes internal case mix and unit costs.

## Sources

- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
