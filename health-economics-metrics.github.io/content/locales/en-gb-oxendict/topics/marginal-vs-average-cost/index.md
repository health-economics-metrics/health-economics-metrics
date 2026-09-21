# Marginal vs Average Cost

Average cost is total cost divided by units produced. Marginal cost is the cost of producing one *additional* unit. Decisions should be made on marginal cost — but published unit costs are almost always averages.

## Why it matters

The single most common error in digital health business cases is valuing a saved resource at its **average** cost when the real saving is the **marginal** cost. A hospital bed day has an average (fully absorbed) cost of £400+, but freeing one bed day does not save £400 — the building, heating, and most staffing costs continue. The cash actually released may be £50–£150 unless enough beds are freed to close a ward.

## The maths

```
Average cost:  AC = TC / Q
Marginal cost: MC = dTC/dQ   (cost of one more/one fewer unit)

TC = total cost, Q = quantity
```

Fixed costs make MC < AC for capacity reductions, and MC can approach zero when spare capacity exists. Savings claims should use:

```
True saving = ΔQ × MC          (small changes)
True saving = step change in TC (large changes that cross a capacity threshold, e.g. closing a ward)
```

## Worked example

Your software reduces average length of stay, freeing 1,000 bed days/year at a trust.

- **Naive claim**: 1,000 × £400 average cost = **£400,000 saved**. Wrong.
- **Marginal claim**: variable cost per bed day (food, laundry, consumables, some nursing flex) ≈ £120. Saving = 1,000 × £120 = **£120,000**, *plus* the freed capacity's value if beds are refilled with waiting elective patients (income under activity-based payment, or waiting-list reduction).
- **Step-change claim**: if the trust frees 7,300 bed days/year (a 20-bed ward) it can actually close the ward: staffing + running ≈ £1.5 million/year of real cash. Now the average-cost maths is closer to true.

Same intervention, three defensible numbers, depending on whether the change crosses a capacity step.

## Software engineering connection

Cloud economics is native marginal-cost territory:

- The marginal cost of one more CI run on already-reserved capacity is ≈ £0, while the average cost per run (total platform spend ÷ runs) may be pounds. Chargeback systems that bill average cost drive teams to under-use shared capacity that is actually free at the margin.
- Conversely, "we saved 30% of compute" only releases cash if instances are actually terminated or reservations reduced — the software version of the bed-day trap. See [cash-releasing vs non-cash-releasing savings](../cash-releasing-vs-non-cash-releasing/).

## Pitfalls

- **Valuing capacity at average cost** and presenting it as cash (the classic).
- **Assuming marginal cost is constant.** It steps at capacity boundaries (ward closures, licence tiers, reserved-instance commitments).
- **Using marginal cost for expansion decisions but average for contraction** in the same case — pick per the actual decision.

## Sources

- York Health Economics Consortium glossary: marginal cost. <https://yhec.co.uk/glossary/marginal-cost/>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
