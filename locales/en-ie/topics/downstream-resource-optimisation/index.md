# Downstream Resource Optimisation

Saving an hour for a senior practitioner — a GP, a senior registrar, a consultant — often prevents bottleneck delays for an entire multi-disciplinary team (MDT) of nurses, administrative clerks, and therapists who are waiting on clinical sign-offs. The value of unblocking the bottleneck is the throughput of everyone downstream of it.

## Why it matters

Health care runs on authorisation chains: discharges wait for consultant sign-off, treatment plans wait for MDT review, referrals wait for triage. When the gating role is delayed, the cost is not one person's hour — it is idle or blocked time across every dependent role, plus patient time in limbo (extra [bed days](../bed-days-saved/), longer [RTT waits](../referral-to-treatment/)). This is the theory of constraints applied to clinical pathways: an hour saved *at the constraint* is worth the whole system's marginal throughput; an hour saved elsewhere is worth much less.

## The maths

```
Value of unblocking = Σ over downstream roles (blocked hours released × unit cost)
                    + pathway throughput gain × value per pathway completion

Contrast: value of the same hour saved at a non-gating role ≈ that role's
capacity value alone (see practitioner-time.md).
```

Identify the constraint empirically: where does work queue longest? Whose inbox do delays trace back to?

## Worked example

A ward's discharges require consultant review each morning. The consultant spends 90 min/day assembling information scattered across systems; reviews finish by 14:00, and 6 discharges/day complete too late for that day — each costing an avoidable bed day.

A discharge-summary dashboard (labs, meds, flags in one view) cuts assembly to 20 minutes; reviews finish by 11:30:

```
Bed days avoided     = 4 of the 6 late discharges × 365 ≈ 1,460 bed days/year
Downstream unblocking: 2 discharge coordinators + pharmacy + transport
                       previously idle-then-crunched each afternoon —
                       ~3 staff-hours/day of blocked time released ≈ 1,100 hrs/yr
```

The consultant's own 70 minutes is the *smallest* part of the value — the point of this metric. Value the bed days by mechanism (see [bed days saved](../bed-days-saved/)) and the staff hours as capacity.

## Software engineering connection

This is code review, architecture sign-off, and the staff engineer's inbox. When five engineers wait a day for the one person who can approve a design, the cost is five engineer-days plus a day of [cost of delay](../cost-of-delay/) on the work itself — not one reviewer-hour. Tooling that compresses the gating role's task (better review context, automated pre-checks, dashboards that assemble what the approver needs) buys system throughput, not individual convenience. Measure pickup/wait time at the constraint (see [flow metrics](../flow-metrics/)) — it is the software equivalent of the 14:00 discharge cliff.

## Pitfalls

- **Optimising a non-constraint**: beautiful tooling for a role nothing queues behind produces near-zero system value.
- **Constraint migration**: unblock the consultant and the constraint moves (to pharmacy, to transport) — model the *next* constraint before claiming full throughput gains.
- **Counting downstream hours as cash**: blocked-time release is capacity, subject to the usual [redeployment test](../cash-releasing-vs-non-cash-releasing/).

## Sources

- Goldratt EM, *The Goal* (theory of constraints).
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
