# GDS Service Metrics

The UK Government Digital Service (GDS) Service Manual mandates four KPIs for every government digital service: **cost per transaction, user satisfaction, completion rate, and digital take-up**. Together they are the minimal economics of a public digital service — and the template NHS digital services inherit.

## Why it matters

The GDS metrics encode the channel-shift business case that funded a decade of government digitization: the Digital Efficiency Report found digital transactions ~20× cheaper than phone and ~50× cheaper than face-to-face (local-gov figures: web £0.15, phone £2.83, face-to-face £8.62). But the savings only materialize when people *complete* the digital journey (completion rate) *instead of* the expensive channel (take-up) — the four KPIs are one economic model, not four dashboards.

## The math

```
Cost per transaction = total service cost / completed transactions
Completion rate      = completed / started transactions × 100
Digital take-up      = digital transactions / all-channel transactions × 100
User satisfaction    = % satisfied+very satisfied (5-point, in-service survey)

Channel-shift saving = volume × take-up shift × (cost_old_channel − cost_digital)
… minus failure demand: (1 − completion rate) × fallback channel cost
```

## Worked example

An NHS appointment-management service: 2M transactions/year, currently 70% phone (£3.20/call) / 30% digital (£0.25). A redesign lifts digital take-up to 55% and completion from 84% to 93%:

```
Take-up shift saving = 2M × 0.25 × (3.20 − 0.25) = £1,475,000/year

Failure-demand saving: failed digital journeys fall back to phone
  before: 2M × 0.30 × 0.16 × £3.20 = £307,200
  after:  2M × 0.55 × 0.07 × £3.20 = £246,400
  net £60,800/year — completion improvements protect the take-up gains

Satisfaction is the leading indicator: dissatisfied users revert to phone,
so a satisfaction drop forecasts take-up decay before it appears.
```

## Software engineering connection

These four KPIs are a production-grade example of a [cost-consequence table](cost-consequence-analysis.md): one cost metric, three outcome metrics, never collapsed into a score. For product engineers the operational lessons: **completion rate is a funnel-instrumentation problem** (every abandonment point is findable and fixable); **cost per transaction is [cloud unit economics](cloud-unit-economics.md)** plus staff-assisted-channel costs; **take-up is an equity metric in disguise** — the users who can't or won't shift channels are disproportionately elderly, disabled, and deprived, so aggressive channel closure converts "savings" into access harm (see [reach and equity](reach-and-equity.md)). Publishing the KPIs (GOV.UK does, per service) is itself a mechanism: transparency disciplines forecasts the way [benefits realization](benefits-realization.md) audits do.

## Pitfalls

- **Take-up by coercion**: closing the phone line lifts take-up and dumps failure demand on front-line staff; measure total-system cost.
- **Completion measured from page-2**: starting the funnel after the drop-off point flatters the rate.
- **Per-transaction cost ignoring assisted-digital support** and failure-demand handling.
- **Satisfaction surveys only at successful completion** — the dissatisfied mostly never reach the survey.

## Sources

- GOV.UK Service Manual, measuring success / mandatory KPIs. <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- Digital Efficiency Report. <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
