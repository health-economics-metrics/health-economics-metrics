# Retention and Churn

Retention measures what fraction of a user cohort is still active N days after starting (D1/D7/D30 curves); churn is its complement. The brutal digital-health baseline: **roughly 90% of health-app users abandon within 30 days** — digital health D30 retention runs ~3–4% against an all-app average of ~6%.

## Why it matters

Eysenbach named this in 2005: the **law of attrition** — losing users at high rates is an intrinsic, structural property of eHealth interventions, not an implementation bug, with attrition in eHealth trials routinely exceeding 50%. The economic consequence is total: retention defines the *treatment window* within which any benefit can be delivered, and the [unit economics](../health-app-unit-economics/) — CAC paid per user who stays 12 days delivers neither LTV nor QALYs. Any economic model for a consumer health product that doesn't weight benefits by the retention curve is describing a product that doesn't exist.

## The maths

```
Retention_Dn = users active on day n / cohort size × 100
Churn rate   = users lost in period / users at period start × 100

Benefit weighting (the health-economics move):
  expected benefit per acquired user = Σ_t retention(t) × benefit rate(t)
  ≈ area under the retention curve × per-time benefit
  — NOT trial benefit × 100% of acquired users

Cost per retained-at-D30 user = CAC / D30 retention
  (at 4% D30, a £5 CAC is really £125 per retained user)
```

## Worked example

A mental-health app: trial showed 0.02 QALYs gained per user completing 8 weeks. Deployment cohort of 100,000 downloads, retention D7 25%, D30 8%, week-8 4%:

```
Completers          = 100,000 × 0.04 = 4,000
QALYs delivered     = 4,000 × 0.02 = 80  (not 100,000 × 0.02 = 2,000)
At £20,000/QALY     = £1.6M of health value (not £40M)

Per-download health value = £16 — the number that should set what a
payer will pay per download, and it is 4% of the naive claim.
Retention improvement case: moving week-8 completion 4% → 6% adds
40 QALYs/year ≈ £800k — retention engineering IS health production.
```

## Software engineering connection

Retention is the metric where product engineering most directly manufactures health value, per the arithmetic above. The practices that move it are ordinary: onboarding time-to-first-value, re-engagement design, performance, and crucially **planned dose completion** — a programme with a defined end (8 weeks, then graduation) should measure *completion*, not perpetual DAU, aligning the metric with the clinical model instead of the ad-funded attention model. Survival analysis is the right toolkit (the same Kaplan-Meier maths as [life-years gained](../life-years-gained/)); segment curves by acquisition channel, since channel mix changes retention more than most features do.

## Pitfalls

- **Intention-to-treat laundering in reverse**: trials report completers; deployment economics must count everyone acquired (Eysenbach's core warning).
- **Retention theatre**: notification-driven "active" users who never perform the therapeutic action (see [engagement metrics](../engagement-metrics/)).
- **Comparing curves across definitions**: "active" defined as open vs meaningful action shifts D30 by multiples.
- **Ignoring who churns**: if the sickest churn fastest, per-user benefits fall as retention improves among the healthy — pair curves with case-mix (see [reach and equity](../reach-and-equity/)).

## Sources

- Eysenbach G. "The law of attrition." JMIR 2005;7(1):e11. <https://www.jmir.org/2005/1/e11/>
- Mobile app retention benchmarks. <https://uxcam.com/blog/mobile-app-retention-benchmarks/>
- Healthcare product benchmarks. <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
