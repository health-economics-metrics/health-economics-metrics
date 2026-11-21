# Hard Cash-Releasing Savings (Deficit Defence)

Hard cash-releasing savings are line items a hospital can actively **delete from next month's budget** because of your software. To a strict financial accountant — and to a trust running a deficit — this is the only benefit class that fully counts.

## Why it matters

Many NHS trusts operate under deficit-recovery plans with intense scrutiny of every expenditure line. In that environment, capacity benefits and quality improvements — however real — do not close the gap; only cash does. A software product that can prove it deletes budget lines is *self-funding from the CFO's perspective*, which transforms procurement: the conversation stops being "can we afford this?" and becomes "can we afford not to?". This doc is the deficit-facing sharp end of [cash-releasing vs non-cash-releasing savings](../cash-releasing-vs-non-cash-releasing/).

## The maths

The NHS's most reliable hard-cash target is **premium-rate temporary staffing**. Trusts cover gaps with internal "Bank" staff (paid standard-ish rates) and external "Agency" staff (often 2–3× Agenda for Change rates, capped but frequently breached for scarce roles).

```
Hard saving = premium shifts avoided × (premium rate − substantive rate)
            + overtime hours avoided × overtime premium
            + external contracts cancelled × contract value

Mechanism requirement: name the specific budget line and the manager who
will confirm its reduction. If no one can point to the line, it isn't hard cash.
```

## Worked example

A Band 6 nurse loses ~1 hour/shift to administrative overhead; documentation regularly spills past shift end into overtime, and wards book extra Bank cover for documentation catch-up.

Software returns that hour to the scheduled shift across 300 nurses:

```
Overtime avoided:   300 nurses × 2.5 paid overtime hrs/week × £8 premium × 46 wks
                    ≈ £276,000/year
Bank/agency shifts: 15 catch-up shifts/week × £180 premium × 52
                    ≈ £140,400/year
Hard cash total     ≈ £416,000/year against a licence cost of ~£150,000
```

Every pound is auditable against the e-rostering and payroll systems — which is exactly how the benefit should be evidenced, monthly, through [benefits realisation](../benefits-realisation/). (Published NHS workforce models have claimed ratios as high as £11+ saved per £1 spent on this mechanism; treat any such ratio as a hypothesis for *your* trust's rostering data, not a portable fact.)

## Software engineering connection

The engineering equivalents of agency premium are the org's own distress purchases: contractor day-rates covering delivery gaps, incident-driven overtime, expedited-support contracts, and cloud spot-price panic. Productivity software claiming hard cash should target those lines with the same discipline — name the budget line, the owner, and the month it shrinks. Everything else it delivers is capacity ([value-generating capacity](../value-generating-capacity-operational-turnaround/)) or quality: real, valuable, and different.

## Pitfalls

- **Calling capacity "savings"** — the instant credibility killer with finance; see the taxonomy in [cash-releasing vs non-cash-releasing](../cash-releasing-vs-non-cash-releasing/).
- **Vendor-model ratios presented as local fact** (the £11:£1 problem) — rebuild the model on the trust's own rostering data.
- **One-off vs recurrent confusion**: a cancelled contract saves its value once per year, not once; a deleted post saves salary only while it stays deleted.

## Sources

- NHS England, reducing agency spend in the NHS. <https://www.england.nhs.uk/long-read/reducing-agency-spend-in-the-nhs/>
- NHS Digital business case guidance, economic case. <https://digital.nhs.uk/services/networks-and-connectivity-transformation-frontline-capabilities/connectivity-hub/advice-and-guidance/making-the-business-case-for-connectivity-infrastructure-investment---guidance/economic-case>
