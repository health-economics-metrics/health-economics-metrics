# Emergency Attendance Avoidance

Emergency attendance avoidance counts ED (A&E) visits and emergency admissions prevented by upstream intervention — triage apps, remote monitoring, virtual wards, urgent-care redirection. It converts "we caught it earlier" into a costed claim.

## Why it matters

Emergency care is the most expensive routine setting in the system (ED attendance unit costs in the £250–£400 range per National Cost Collection / PSSRU figures; an emergency admission is thousands), and ED crowding cascades into ambulance delays and cancelled electives. Anything that safely resolves demand upstream — self-care advice, same-day primary care, community response — buys the system capacity at its most stressed point. This is the standard benefit line for symptom checkers, 111-style triage services, and [remote patient monitoring](remote-patient-monitoring-economics.md).

## The math

```
Avoided attendances = population × (baseline rate − intervention rate)
Gross saving        = avoided attendances × unit cost per attendance
                      (+ avoided admissions × admission cost, counted separately)

Net saving          = gross saving − intervention cost − cost of new pathway usage
                      (redirected demand isn't free: a 111 call, a GP slot,
                       a virtual-ward day all have unit costs)
```

The causal claim needs a comparator: attendance rates trend and vary seasonally, so before/after alone proves nothing.

## Worked example

A COPD remote-monitoring service for 3,000 high-risk patients. Matched-control evaluation shows exacerbation-related ED attendance falls from 0.9 to 0.7 per patient-year, and emergency admissions from 0.5 to 0.42.

```
Avoided attendances = 3,000 × 0.2  = 600 × £300   = £180,000
Avoided admissions  = 3,000 × 0.08 = 240 × £3,800 = £912,000
Gross                                              £1,092,000/year

Costs: monitoring service £600,000; extra community-nurse responses £150,000
Net ≈ +£342,000/year — plus the QALY gains of exacerbations treated earlier.
```

Note the admissions line dominates: attendance avoidance alone rarely pays for a monitoring service; *admission* avoidance is where the money is.

## Software engineering connection

This is **incident-avoidance economics**. The value of observability, canary deploys, and early-warning systems is avoided "emergency attendances" — pages, war rooms, sev-1s — each with a loaded cost (engineer-hours × rate + customer impact). The same modeling rules apply: net out the cost of the new upstream pathway (alert triage isn't free), beware substitution (alerts that create work without preventing incidents are health anxiety, not health), and prove the counterfactual with a control (teams' incident rates trend and regress to the mean, exactly like ED attendance).

## Pitfalls

- **Regression to the mean**: high-risk cohorts selected on a bad year improve untreated; matched controls or stepped-wedge designs are essential.
- **Supply-induced demand**: easy digital triage can *increase* total contacts (lower threshold to seek help) while decreasing ED share — count total system cost.
- **Valuing attendances at average cost** when ED fixed costs don't fall — see [marginal vs average cost](marginal-vs-average-cost.md).

## Sources

- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
