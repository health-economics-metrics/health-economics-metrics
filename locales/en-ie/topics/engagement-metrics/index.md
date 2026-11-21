# Engagement Metrics

Engagement metrics measure how much users actually use a health app: DAU/MAU stickiness, session frequency and duration, feature usage. In digital health, engagement is not vanity — it is **dose**: the exposure through which any clinical effect must flow.

## Why it matters

A drug that stays in the bottle heals nobody; an app that stays uninstalled or unopened is the same failure mode. Every health-economic claim for a consumer health product multiplies through engagement — efficacy shown in trials was measured at some usage level, and real-world value scales with how close deployment usage gets to that level. Standard product benchmarks: DAU/MAU around **20% is considered healthy** for mobile apps generally, >25% exceptional; health apps often run lower.

## The maths

```
Stickiness (DAU/MAU) = daily active users / monthly active users × 100
Session metrics      = sessions/user/period; avg duration = total time / sessions
Feature engagement   = users performing key action / active users

Dose-response framing (the health-economics upgrade):
  realised effect ≈ trial effect × f(actual usage / trial usage)
  where f comes from dose-response analysis — see the "effective
  engagement" concept in adherence-and-persistence.md: enough usage
  to achieve the intended outcome, which may be modest and finite
```

## Worked example

A blood-pressure app's pivotal study showed a 6 mmHg systolic reduction among users logging ≥4 readings/week. In deployment across 50,000 registered users:

```
MAU 20,000 (40%); of those, logging ≥4×/week: 7,000
Effective-dose users = 7,000 / 50,000 = 14% of the registered base

Population-level effect ≈ trial effect delivered to 14%, not 100%:
any economic model quoting "50,000 users × 6 mmHg" overstates ~7×.
Honest model: 7,000 × full effect + partial credit (from dose-response
data, if any) for the 13,000 sub-threshold users.
```

This multiplication — through the engagement funnel to the effective dose — is the single most common place digital-health economics inflate.

## Software engineering connection

Engineers own the engagement funnel, which makes them owners of a *clinical* variable: onboarding friction, notification strategy, load time, and offline resilience all move the dose delivered. Two design implications: instrument the **clinically meaningful action** (readings logged, lessons completed), not opens — DAU built on notification-bounce sessions is dose-fraud; and treat engagement targets as *sufficiency* targets, not maximisation — an app that achieves its outcome in 5 minutes/week and gets out of the way is clinically ideal and metrically "poor" (see effective engagement in [adherence and persistence](../adherence-and-persistence/)). Value the engagement work itself via the population-effect model above: a 2-point gain in effective-dose share is a quantifiable QALY line.

## Pitfalls

- **Engagement as outcome**: usage is a means; the outcome is the [PROM](../patient-reported-outcomes/) or clinical endpoint.
- **Averages over bimodal usage**: health-app populations split into devoted users and ghosts; means describe nobody — cohort it.
- **Dark-pattern dose inflation**: streaks and guilt notifications lift metrics and can harm the anxious populations health apps serve; clinical products carry clinical ethics.
- **Vendor-benchmark provenance**: most published engagement benchmarks come from analytics vendors, not peer review; calibrate against your own trials.

## Sources

- App engagement benchmarks. <https://getstream.io/blog/app-retention-guide/>
- Health app KPI guides. <https://www.darly.solutions/blog/key-metrics-for-health-apps-success-a-guide-to-kpis-and-outcomes>
- Yardley L, et al. on effective engagement. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
