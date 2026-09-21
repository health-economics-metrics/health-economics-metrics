# Did-Not-Attend (DNA) Rate

The DNA rate is the percentage of booked appointments where the patient neither attends nor cancels. The clinician, the room, and the slot are paid for; nothing happens. It is the purest waste metric in healthcare — and one of the most software-fixable.

## Why it matters

NHS England's figures (2019): missed GP appointments exceed 15 million/year at ~£30 each — over **£216M/year** — and hospital outpatient DNAs run ~8M/year (~6.4% of appointments) at an average ~**£160** per missed slot. Because the marginal cost of a reminder is pennies and the recovered value is a fully-staffed clinical slot, DNA reduction has some of the best ROI arithmetic in digital health, which is why SMS reminders, easy rebooking, and predictive overbooking were among the first proven digital health wins.

## The math

```
DNA rate = DNAs / booked appointments × 100

Value of reduction = appointments × ΔDNA rate × value per recovered slot

value per recovered slot: the slot is refilled (activity value / waiting-list
reduction) or it is not (staff time partially reusable) — mechanism matters,
as with bed-days-saved.md.
```

## Worked example

An outpatient department: 200,000 appointments/year, DNA rate 8%. A reminder-plus-rebooking service (SMS with one-tap rebook, transport info, accessible formats) cuts DNAs to 5.5%.

```
Recovered slots = 200,000 × 0.025 = 5,000/year
Refilled from the waiting list at ~£160 average outpatient value:
  5,000 × £160 = £800,000/year of recovered activity
Service cost: 200,000 × £0.40 = £80,000/year

Return ≈ 10:1, plus 5,000 waiting-list patients seen sooner
(see waiting-list-impact.md and referral-to-treatment.md).
```

The effect size (2.5 points) is realistic: reminder RCTs consistently show 25–40% relative DNA reduction.

## Software engineering connection

- **This is a scheduling-systems problem**: reminders, self-service rebooking, waiting-list auto-backfill from cancellations, and no-show prediction models that drive targeted double-booking. Each is ordinary software engineering with an unusually crisp economic case.
- **The engineering analog**: no-shows for reserved capacity — booked-but-idle CI slots, reserved cloud capacity, meeting rooms, interview panels. The economics transfer: a cheap automated nudge (or auto-release of unused reservations) recovers expensive committed capacity.
- **Prediction ethics preview**: no-show models trained on attendance data encode deprivation and access barriers; using them to *deprioritize* likely non-attenders amplifies inequity, using them to *support* attendance (transport help, telephone alternatives) reduces it. See [reach and equity](../reach-and-equity/).

## Pitfalls

- **Counting canceled-and-rebooked as recovered value twice.**
- **Valuing recovered slots that aren't refilled** — an empty slot with a reminder sent is still empty.
- **Chasing DNA to zero**: the last points of DNA are patients facing real barriers; punitive approaches (discharge after N DNAs) cut the metric by abandoning the patients.

## Sources

- NHS England, "Missed GP appointments costing NHS millions" (2019). <https://www.england.nhs.uk/2019/01/missed-gp-appointments-costing-nhs-millions/>
- DNA cost summaries. <https://www.deep-medical.ai/cost-of-missed-nhs-appointments/>
