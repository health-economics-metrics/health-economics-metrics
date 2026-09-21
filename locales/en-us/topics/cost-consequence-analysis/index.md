# Cost-Consequence Analysis (CCA)

CCA presents costs alongside a **disaggregated table of all outcomes** — clinical, operational, experiential — without collapsing them into a single ratio or score. The decision-maker weighs the trade-offs explicitly.

## Why it matters

CCA is NICE's **preferred economic format for most digital health technologies** under the Evidence Standards Framework. Digital products produce heterogeneous effects (time saved, satisfaction, DNA reduction, small clinical gains) that resist honest aggregation into one QALY number. Rather than force a fragile composite, CCA shows the full ledger. For most software business cases, it is both the most honest format and the most persuasive one, because every stakeholder can find their own decision-relevant row.

## The math

There is deliberately no aggregation formula. The output is a table:

```
                          Intervention   Comparator   Difference
Costs (annual)            £X             £Y           ΔC
Outcome 1 (natural units) …              …            Δ1
Outcome 2                 …              …            Δ2
Qualitative outcomes      described, not scored
```

Each row keeps its own units. Rules: every consequence pre-specified (no cherry-picking after results); same [perspective](../analysis-perspective/) and [horizon](../time-horizon/) throughout; uncertainty per row.

## Worked example

Digital pre-operative assessment platform vs phone-based process, per year, one trust:

```
                              Digital      Phone       Difference
Running cost                  £180,000     £95,000     +£85,000
Nurse hours on assessments    6,200        11,800      −5,600 hrs
On-day surgery cancellations  92           174         −82
Patient satisfaction (CSAT)   4.5/5        3.9/5       +0.6
Assessments lost/incomplete   1.2%         4.8%        −3.6 pp
```

No single score — but the decision is easy to reason about: £85,000 buys 5,600 nurse-hours (≈ £15/hour, far below any staffing cost), 82 avoided cancellations (each wasting a theatre slot worth ~£1,200), and better experience. A committee can also see exactly what it's *not* getting: no claimed QALY or mortality effect.

## Software engineering connection

CCA is the formal version of the balanced scorecard a good platform proposal already uses: cost next to DORA metrics, DevEx scores, incident counts — unaggregated. The health-economics discipline to add: **pre-specify the rows** (decide what counts before the pilot, so you can't quietly drop the metric that got worse), and **show unfavorable rows** — a CCA with only good news is marketing. Use CCA when no defensible composite exists, which for developer tooling is almost always.

## Pitfalls

- **Cherry-picked consequences** — the format's integrity depends on pre-specification.
- **Smuggled aggregation**: color-coding or "overall scores" reintroduce the arbitrary weights CCA exists to avoid.
- **Decision paralysis**: CCA needs a decision-maker willing to weigh trade-offs; pair it with a recommendation and the reasoning.

## Sources

- NICE Evidence Standards Framework for digital health technologies (ECD7). <https://www.nice.org.uk/corporate/ecd7>
- ESF evidence standards tables. <https://www.nice.org.uk/corporate/ecd7/chapter/section-c-evidence-standards-tables>
