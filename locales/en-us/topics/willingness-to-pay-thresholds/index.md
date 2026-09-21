# Willingness-to-Pay Thresholds

A willingness-to-pay (WTP) threshold is the maximum a decision-maker will pay per unit of health gain — the line that turns an [ICER](../incremental-cost-effectiveness-ratio/) into an adopt/reject decision.

## Why it matters

The threshold is where health economics stops being measurement and becomes policy. Every national system has one, explicit or implicit, and knowing the local number tells you exactly how to price a health-value claim:

| Body | Threshold (as researched, 2024–2025) |
|---|---|
| NICE (England) | £20,000–£30,000 per QALY; empirical average decision threshold ≈ £24,400 (2022–24); severity modifiers raise effective ceiling to ~£36k–£51k; highly specialized technologies up to £100k+ |
| ICER (US, non-governmental) | $100,000–$150,000 per QALY/evLYG price benchmarks; reports $50k–$200k range |
| Canada (CADTH / CDA-AMC) | ≈ CAD$50,000 per QALY working threshold |
| WHO-CHOICE (historical, global) | 1–3× GDP per capita per DALY averted (now discouraged as too blunt) |
| Empirical UK supply side (Claxton et al.) | ≈ £13,000 per QALY actually displaced at the NHS margin |

## The math

The threshold λ enters every decision rule:

```
Adopt if ICER = ΔC/ΔE < λ
Equivalently: adopt if NMB = λ×ΔE − ΔC > 0
```

Two theories of what λ *is*:

- **Demand side**: what society is willing to pay for health (a value judgment).
- **Supply side**: the health the budget currently produces at the margin (an empirical quantity — Claxton's ~£13k/QALY). If λ used for decisions exceeds the supply-side rate, approving new tech displaces more health than it adds.

## Worked example

Your digital therapeutic delivers 0.05 QALYs per treated patient at a net cost (price minus offsets) of £800.

```
ICER = 800 / 0.05 = £16,000 per QALY
```

- England: below £20k → fundable. Maximum defensible price: at λ = £20,000, price_max = 0.05 × 20,000 + offsets = £1,000 + offsets.
- US commercial framing at $150k/QALY: value-based price is far higher.
- A GDP-per-capita country threshold of $4,000: the same product must cost under ~$200 net.

Same product, three markets, three prices — the threshold *is* the pricing model. This is value-based pricing, run in reverse from λ.

## Software engineering connection

Every engineering org has an implicit λ: the hurdle at which it funds tooling per engineer-hour saved. Making it explicit — "we fund anything under £40 per credible engineer-hour saved" — enables league-table comparison of platform investments, exactly as cost-per-QALY league tables rank health spending. The supply-side lesson transfers too: your true internal λ is what your *current* backlog produces at the margin, not what leadership says time is worth.

## Pitfalls

- **Threshold shopping** across jurisdictions or citing the HST ceiling for an ordinary product.
- **Treating λ as a price floor**: clearing the threshold is necessary, not sufficient — [budget impact](../budget-impact-analysis/) can still sink an affordable-per-unit product.
- **Ignoring that thresholds move**: NICE's severity modifiers (2022) and periodic reviews change effective λ; date your claims.

## Sources

- NICE: changes to cost-effectiveness thresholds. <https://www.nice.org.uk/news/articles/changes-to-nice-s-cost-effectiveness-thresholds-confirmed>
- Empirical NICE threshold analysis, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- Claxton K, et al. HTA 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
