# National Tariff and Unit Costs

The NHS pays providers for activity under a rules-based national price list — historically the National Tariff / Payment by Results, replaced by the **NHS Payment Scheme (NHSPS)** on 1 April 2023. Behind the prices sits a national unit-costing infrastructure: the **National Cost Collection (NCC)** and the **PSSRU Unit Costs of Health and Social Care** compendium.

## Why it matters

These are the denominators of every credible NHS business case. When a claim says "an outpatient attendance is worth £160" or "a Band 6 nurse-hour costs £31", those numbers come from this infrastructure — and using the official figures rather than invented ones is what makes independent evaluations comparable and finance teams cooperative. For a vendor, the tariff also defines the *revenue* side: activity your software enables (extra clinics, backfilled beds) is valued at scheme prices.

## The math

```
Tariff price per unit of activity (HRG-coded spell, outpatient attendance)
  = national average unit cost (from NCC) × Market Forces Factor (local adjustment)
  under NHSPS: blended fixed + variable ("aligned payment and incentive") elements

NCC unit cost = trust-reported total cost of an activity type / activity volume
                (built on Patient-Level Information and Costing Systems, PLICS)

PSSRU compendium: ~80 standard unit costs (GP consultation, nurse-hour by band,
ED attendance…) — the default source in UK economic evaluations.
```

## Worked example

Your software frees 1 hour/day of a Band 6 nurse's time in a 250-day working year:

```
PSSRU-based Band 6 cost incl. overheads ≈ £31/hour (check current edition)
Capacity value = 250 × £31 = £7,750/nurse/year (non-cash-releasing)
```

Alternatively the nurse runs 2 extra outpatient follow-up appointments/day at ~£160 scheme value: 500 × £160 = **£80,000/year of funded activity** — a tenfold difference in claimed value depending on redeployment, all from official unit costs. Both claims are auditable because the denominators are published; that is the whole point.

## Software engineering connection

This is the **internal price book** pattern. UK health economics works because every evaluation uses the same published unit costs; engineering orgs mostly lack this, so every business case invents its own cost of an engineer-hour, an incident, a deploy. A platform team can publish exactly such a book — loaded cost per engineer-hour by level, per incident by severity, per build-minute — and require its use in all proposals. Chargeback/showback systems replicate the tariff's known failure modes too: average-cost pricing drives volume gaming, fixed payments drive under-provision. The NHSPS's evolution from pure activity payment to blended fixed+variable is twenty years of lessons in incentive design for internal platform pricing.

## Pitfalls

- **Stale figures**: NCC, PSSRU, and NHSPS prices refresh annually — date every number.
- **Tariff price ≠ cost**: prices are national averages with adjustments; your local marginal cost differs (see [marginal vs average cost](../marginal-vs-average-cost/)).
- **Valuing capacity at tariff without a mechanism** to actually deliver and be paid for the extra activity.

## Sources

- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
