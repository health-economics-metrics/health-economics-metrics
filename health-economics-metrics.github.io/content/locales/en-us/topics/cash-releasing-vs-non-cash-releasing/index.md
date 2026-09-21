# Cash-Releasing vs Non-Cash-Releasing Savings

Cash-releasing savings reduce actual expenditure — a budget line gets smaller. Non-cash-releasing savings free time or capacity that gets *reused* rather than banked. Health-system finance directors treat these as different species, and so should you.

## Why it matters

This is the sharpest honesty test applied to any digital business case in a national health service. NHS benefit frameworks explicitly categorize every claimed benefit as cash-releasing, non-cash-releasing, or qualitative. Most digital health "savings" — clinician minutes saved per patient, faster documentation — are non-cash-releasing: valuable, but they don't reduce the deficit. A trust CFO facing a funding gap can only spend cash. See also [hard cash-releasing savings](../hard-cash-releasing-savings-deficit-defense/).

## The math

```
Cash-releasing saving   = budget line before − budget line after
                          (must be extractable: a canceled contract, closed ward,
                           reduced agency spend, avoided purchase)

Non-cash-releasing value = time released × unit cost of that time
                          (valued at opportunity cost; the money is NOT extractable)
```

The same physical event (an hour saved) lands in one category or the other depending on what happens next:

```
hour saved → overtime/agency shift canceled        → cash-releasing
hour saved → clinician sees one more waiting patient → non-cash-releasing (capacity)
hour saved → absorbed into slack, nothing changes    → no benefit at all
```

## Worked example

Software saves each of 100 nurses 30 minutes per shift. That is 100 × 0.5 × 5 shifts/week × 46 weeks ≈ 11,500 hours/year. At a Band 5 employer cost of ~£25/hour, the tempting headline is £287,500/year.

The honest split:

- 20% of the time lands where wards currently pay bank/agency premium to cover documentation overruns: 2,300 hours × £35 agency rate = **£80,500 cash-releasing** (shifts genuinely not booked).
- 60% is redeployed to direct patient care: 6,900 hours × £25 = **£172,500 non-cash-releasing capacity** — real value, reported separately, never called "savings."
- 20% dissipates into breaks and interruptions: **£0**. Claiming it would be fiction.

A business case that presents £80.5k cash + £172.5k capacity is credible. One that presents £287.5k "savings" gets rejected by the first accountant who reads it.

## Software engineering connection

Identical logic governs AI coding-assistant ROI: "30 minutes per developer per day" is non-cash-releasing capacity unless headcount, contractor spend, or cloud cost actually falls. Report the categories separately:

- Cash-releasing: canceled contractor engagements, decommissioned tooling licenses, reduced cloud spend.
- Capacity: features shipped sooner (value via [cost of delay](../cost-of-delay/)), backlog burned down.
- Nothing: minutes saved that fragment into context-switching.

Also track *where released time actually went* — benefits realization ([benefits-realization.md](../benefits-realization/)) exists because claimed capacity gains frequently evaporate on audit.

## Pitfalls

- **Multiplying minutes by salary and calling it savings** — the canonical sin.
- **Valuing released time at average loaded cost** when the marginal use of that time is low-value — see [marginal vs average cost](../marginal-vs-average-cost/).
- **Counting the same hour twice**: as cash (shift avoided) and as capacity (extra patients seen).

## Sources

- NHS Digital connectivity business case guidance, economic case (benefit categories). <https://digital.nhs.uk/services/networks-and-connectivity-transformation-frontline-capabilities/connectivity-hub/advice-and-guidance/making-the-business-case-for-connectivity-infrastructure-investment---guidance/economic-case>
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
