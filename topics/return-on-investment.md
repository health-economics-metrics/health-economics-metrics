# Return on Investment (ROI)

ROI is the ratio of net gain to money invested. It is the metric engineering and finance already share — health economics adds the discipline that makes an ROI claim survive scrutiny: declared perspective, comparator, horizon, and benefit categories.

## Why it matters

ROI is the lingua franca of budget holders, and public health uses it too: the landmark Masters et al. review found a **median ROI of 14.3:1** for public health interventions (every £1 returns ~£14 to the wider economy and health system) — a number widely used to argue prevention spending. But that 14:1 is a *societal, long-horizon* figure; a hospital CFO's ROI is payer-perspective and 1–3 years. Most ROI fights are actually undeclared-perspective fights.

## The math

```
ROI = (Benefits − Costs) / Costs      (often × 100%)

Payback period = Costs / annual net benefit
```

An ROI claim is under-specified without four declarations:

1. **Perspective** — whose benefits count? (see [analysis perspective](analysis-perspective.md))
2. **Comparator** — versus what alternative? (see [opportunity cost](opportunity-cost.md))
3. **Horizon** — over how long, and [discounted](discounting-and-time-preference.md)?
4. **Benefit class** — cash-releasing, capacity, or qualitative? (see [cash-releasing vs non-cash-releasing](cash-releasing-vs-non-cash-releasing.md))

## Worked example

E-rostering system, cost £500,000 over 3 years.

```
Cash-releasing:  agency shift reduction        £450,000
Capacity:        ward-manager admin time freed £600,000 (valued, not banked)
Qualitative:     staff satisfaction, safety    not monetized

Strict financial ROI  = (450,000 − 500,000)/500,000 = −10%
Economic ROI          = (1,050,000 − 500,000)/500,000 = +110%
```

Both numbers are true. A vendor quoting "+110% ROI" to a CFO who can only bank £450k will lose trust; presenting both, labeled, wins it. The same split protects an internal champion when finance audits the benefits two years later.

## Software engineering connection

Every tooling proposal has an ROI slide; almost none declare the four parameters. The most common failure is category-blending: capacity gains (developer minutes) presented as financial return. Structure AI/platform ROI as the worked example above — cash line, capacity line, qualitative line — and add [sensitivity analysis](sensitivity-analysis.md) on the soft numbers. For the P&L reality check on AI ROI specifically, see [AI return on investment](ai-return-on-investment.md).

## Pitfalls

- **Perspective laundering**: societal benefits over a decade quoted to a budget holder with a 12-month horizon.
- **Gross instead of net**: "returns £3M" on £2M spend is 50% ROI, not 300%.
- **Ratio maximization**: tiny denominators produce spectacular ROIs on trivial investments; rank portfolios by NPV or [net monetary benefit](net-monetary-benefit.md), use ROI as a screen.
- **No benefits audit**: forecast ROI without [benefits realization](benefits-realization.md) tracking is a promise, not a result.

## Sources

- Masters R, et al. "Return on investment of public health interventions: a systematic review." J Epidemiol Community Health 2017. <https://pmc.ncbi.nlm.nih.gov/articles/PMC5537512/>
- HM Treasury Green Book. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
