# Benefits Realization

Benefits realization management (BRM) is the discipline of identifying, baselining, tracking, and *evidencing* that the benefits promised in a business case actually materialized after delivery. In UK public investment it lives inside HM Treasury's Green Book **Five Case Model**; in medicine, its cousin is post-market surveillance.

## Why it matters

Business cases are promises; benefits realization is the audit. Evaluations of major NHS digital programmes repeatedly found forecast benefits that never materialized — and when benefits weren't cash-releasing, they did nothing for the bottom line of the trust. The Green Book's response: every spending case must pass **five cases** (strategic, economic, commercial, financial, management), with benefits realization planned in the management case *before approval* — owners named, baselines captured, measurement dates set. Without this, "the software saved 30 minutes per nurse" remains vendor fiction forever.

## The math

```
Realization rate = benefits realized / benefits forecast   (per benefit, per period)

Mechanics that make it computable:
  baseline captured BEFORE go-live (else the delta is unmeasurable)
  each benefit: owner, metric, data source, measurement schedule
  forecast adjusted for optimism bias at appraisal (Green Book mandate)
  benefits classed cash / non-cash / qualitative and tracked separately
  (see cash-releasing-vs-non-cash-releasing.md)
```

## Worked example

An e-rostering business case promised, per year: £450k agency-spend reduction (cash), 8,000 ward-manager hours (capacity), improved fill-rate compliance (qualitative). Twelve months post-go-live:

```
Benefit           Forecast    Realized    Rate   Evidence
Agency spend      £450,000    £287,000    64%    ledger vs baseline year
Manager hours     8,000       5,100       64%    time-motion sample
Fill compliance   +10pp       +12pp       120%   rostering system data

Actions from the review (the point of BRM):
agency shortfall traced to two wards never onboarded → onboard them;
forecast model's 30%-optimism error logged → applied to the next case.
```

64% realization is not failure — it is *knowledge*. Unmeasured cases claim 100% forever.

## Software engineering connection

Engineering orgs approve platform investments on forecast benefits and almost never audit them — the exact pathology BRM fixes. The lightweight port: every proposal above a threshold names benefit owners, baseline metrics, and a T+6-month review date; realization rates feed back into how much the org discounts that team's (or vendor's) next forecast. This is also the answer to AI-tooling skepticism: the [MIT finding that ~95% of GenAI pilots showed no measurable P&L return](ai-return-on-investment.md) is a benefits-realization result — the pilots that *did* return had trackable, owned benefit lines. Forecast → measure → recalibrate is the same loop as [EVPI](expected-value-of-perfect-information.md)-priced pilots, run at portfolio scale.

## Pitfalls

- **No pre-go-live baseline** — the fatal, unfixable omission.
- **Benefit orphanhood**: no named owner means no one collects the data and every review says "broadly on track."
- **Double-counted benefits across programmes** claiming the same freed capacity — keep a benefit register across the portfolio.
- **Realization theater**: measuring the easy qualitative wins while the cash lines go quietly unexamined.

## Sources

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Global Digital Exemplar programme evaluation (NHS digital benefits lessons). <https://pmc.ncbi.nlm.nih.gov/articles/PMC8685936/>
