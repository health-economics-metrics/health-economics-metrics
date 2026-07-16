# Practitioner Time

Practitioner time is the scarcest resource in most health systems. Measuring the value of saving a clinician minutes per day requires shifting from simple wage math to **opportunity cost and system capacity**: within a national health service, a practitioner's time is a rigid operational bottleneck, not a cost line that flexes.

## Why it matters

You cannot quickly make more GPs, consultants, or specialist nurses — training pipelines run 5–15 years, and vacancies are chronic. So an hour of practitioner time saved is not "wages avoided" (the practitioner is still paid); it is *bottleneck capacity released*, and bottleneck capacity is worth what the bottleneck produces. This is why "saves 10 minutes per consultation" claims are simultaneously the most common and the most mispriced line in digital health.

## The math

Three valuation levels, in increasing honesty:

```
1. Wage basis:        hours × loaded salary rate (PSSRU unit costs)
                      — what the time costs, not what it produces
2. Output basis:      hours → appointments/procedures enabled × scheme value
                      (see national-tariff-and-unit-costs.md)
3. Bottleneck basis:  if this role gates a whole pathway, hours × value of
                      pathway throughput released (theory of constraints)
```

Fragmentation discount: time saved in scraps below a usable quantum (e.g., 3 minutes scattered across a clinic) redeploys poorly; apply a stated utilization factor.

## Worked example

Ambient scribing saves a GP 2 minutes per consultation, 30 consultations/day: 60 minutes/day, or **220 hours/year per GP** over 220 working days.

```
Wage basis:   220 × £80 (loaded GP hour, PSSRU-region) ≈ £17,600/GP/year
Output basis: 60 min/day = 5 extra 12-min consultations/day
              = 1,100 extra appointments/GP/year × £42 ≈ £46,200/GP/year
              — or the same appointments absorbed as reduced overtime and
              safer, unhurried consultations (qualitative line)
```

Across a 50-GP federation the output-basis capacity is worth ~£2.3M/year — provided the minutes are real (measured, not vendor-claimed), consolidated (whole consultations, not fragments), and redeployed (see [cash-releasing vs non-cash-releasing](cash-releasing-vs-non-cash-releasing.md)).

## Software engineering connection

Senior engineer time behaves identically: it is the bottleneck through which designs, reviews, and incidents flow, so value it by what the bottleneck gates, not by salary. The same three-level valuation applies to any "AI saves each developer X minutes" claim — wage math flatters small numbers; the honest questions are whether minutes consolidate into usable blocks and what the released capacity actually produces. See [downstream resource optimization](downstream-resource-optimization.md) for the multiplier when the saved hour belongs to the person everyone else waits on.

## Pitfalls

- **Minutes × salary = savings** — the canonical inflation; it's capacity, and only at the stated utilization.
- **Ignoring the quantum problem**: 12 × 5-minute savings ≠ one free hour.
- **Valuing all roles alike**: an hour of the pathway bottleneck is worth many times an hour of a non-gating role.

## Sources

- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
