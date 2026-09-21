# Net Monetary Benefit (NMB)

NMB converts a cost-effectiveness result into a single money value: health gain priced at the willingness-to-pay threshold, minus cost. Its twin, Net Health Benefit (NHB), expresses the same rule in health units.

## Why it matters

Ratios ([ICERs](../incremental-cost-effectiveness-ratio/)) are awkward: they explode near zero effect, can't be averaged across uncertainty draws, and can't rank three or more options cleanly. NMB fixes all of that — it is linear, so you can rank options, average Monte Carlo draws, and decompose contributions. It is also the form of health-economic maths every engineer already knows: *value minus cost*.

## The maths

```
NMB = (ΔE × λ) − ΔC
NHB = ΔE − (ΔC / λ)

ΔE = incremental effect (e.g., QALYs)
ΔC = incremental cost
λ  = willingness-to-pay threshold (see willingness-to-pay-thresholds.md)

Decision rule: adopt if NMB > 0 (equivalently NHB > 0).
Among alternatives: choose the highest NMB.
```

NMB > 0 ⇔ ICER < λ (when ΔE > 0), so the two rules agree — NMB is just better behaved.

## Worked example

Three options for a diabetes service, per 1,000 patients, λ = £20,000/QALY:

```
Option           ΔC          ΔE (QALYs)   NMB = 20,000×ΔE − ΔC
App + coaching   £400,000    30           600,000 − 400,000 = £200,000
App only         £150,000    12           240,000 − 150,000 = £90,000
Extra clinics    £700,000    32           640,000 − 700,000 = −£60,000
```

Extra clinics gain the most QALYs but destroy value at this threshold (NMB < 0). App + coaching wins. Note NMB lets you *rank all three at once* — pairwise ICERs would need the frontier procedure in [dominance and the efficiency frontier](../dominance-and-efficiency-frontier/), and reach the same answer.

NHB view of the winner: 30 − 400,000/20,000 = 30 − 20 = **10 QALYs net** — the health gained beyond what the same money would have produced elsewhere.

## Software engineering connection

`(hours saved × loaded hourly rate) − tool cost` — the everyday tooling business case — is literally an NMB calculation with λ = loaded engineer cost. Two upgrades health economics adds:

- **Make λ a variable, not a constant.** Plot NMB against λ ("value of an engineer-hour") and show where the decision flips; different stakeholders can then apply their own valuation without redoing your maths.
- **NHB thinking**: "this platform saves 5,000 engineer-hours but consumes budget that would have bought 3,000 engineer-hours of contractor capacity — net 2,000 hours" forces the opportunity-cost comparison in capacity units. See [opportunity cost](../opportunity-cost/).

## Pitfalls

- **Hiding the threshold**: an NMB is meaningless without stating λ; report NMB at £20k and £30k, or plot the curve.
- **Using NMB to launder tiny effects**: a huge population times a negligible per-person effect can produce a big NMB — report per-person effects alongside.
- **Forgetting NMB inherits every uncertainty** in ΔC and ΔE — pair with [probabilistic sensitivity analysis](../probabilistic-sensitivity-analysis/).

## Sources

- York Health Economics Consortium glossary: net monetary benefit. <https://yhec.co.uk/glossary/net-monetary-benefit/>
- Stinnett AA, Mullahy J. "Net health benefits: a new framework for the analysis of uncertainty in cost-effectiveness analysis." <https://pmc.ncbi.nlm.nih.gov/articles/PMC2528971/>
