# Waiting List Impact

Waiting list impact converts saved clinical capacity into patients removed from (or moved faster through) the waiting list. Converting saved hours into extra clinic slots directly reduces the size of a trust's waiting list — the most tangible way to show a health system what freed capacity is *for*.

## Why it matters

The elective waiting list is the NHS's defining post-pandemic challenge (its size is a national political metric), and every trust runs an elective-recovery program against it. A business case that says "saves 2,000 nurse-hours" is abstract; one that says "creates 4,000 additional appointment slots, seeing 3,800 waiting patients, cutting the specialty's list by 9%" is a story a Chief Operating Officer can take to their board. Waiting list impact is the natural *unit of account* for [non-cash-releasing capacity](../cash-releasing-vs-non-cash-releasing/).

## The math

```
Extra slots        = hours released / slot duration × utilization
Patients seen      = extra slots × (1 − DNA rate)
List reduction     = patients seen − induced new demand
Waiting-time gain  = queueing improvement from higher service rate
                     (for stable queues, cutting the backlog N by ΔN at
                     service rate μ pulls everyone forward ~ΔN/μ)
```

Health value of shorter waits: patients spend fewer weeks in the lower pre-treatment utility state — the QALY arithmetic in [referral-to-treatment](../referral-to-treatment/).

## Worked example

Ambient documentation software saves each of 20 clinic nurses 45 min/day. Over 250 days: 20 × 0.75 × 250 = 3,750 hours/year.

```
Slots (30 min, 85% usable) = 3,750 / 0.5 × 0.85 = 6,375 slots
Patients seen (7% DNA)     = 6,375 × 0.93       ≈ 5,929/year
```

For a specialty with a 12,000-patient list and 24,000 appointments/year of demand-matched capacity, ~5,900 additional appointments cut average waits by roughly a quarter — moving the trust materially toward the 18-week standard without hiring. At ~£160 scheme value per attendance the activity is worth ~£949,000/year (see [national tariff and unit costs](../national-tariff-and-unit-costs/)) — but present the *waiting-list* framing first; it is the one the system is managed on.

## Software engineering connection

A waiting list is a backlog, and backlog-burndown economics transfer in both directions. From health to software: value backlog reduction by how long *users* wait for value, not by items closed ([cost of delay](../cost-of-delay/) per queued item). From software to health: Little's Law says the list shrinks only if service rate exceeds arrival rate — capacity gains absorbed by rising referrals leave waits unchanged, so model arrivals too. And in both domains, prioritize by severity-weighted value (clinical urgency categories ↔ [severity modifiers](../qaly-shortfall-and-severity-modifiers/)), not first-in-first-out.

## Pitfalls

- **Slots ≠ patients**: forgetting DNA rates and unusable fragments of released time.
- **Induced demand**: visible extra capacity attracts referrals; net list impact is smaller than gross.
- **Claiming cash**: waiting-list impact is capacity value; the cash claim (avoided outsourcing of backlog work) is a different line — see [avoidable outsourcing costs](../avoidable-outsourcing-costs/).

## Sources

- NHS England, RTT waiting times statistics. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
