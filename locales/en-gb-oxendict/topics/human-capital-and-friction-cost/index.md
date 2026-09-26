# Human Capital Approach vs Friction Cost Method

These are the two competing methods for valuing lost productivity — from illness, disability, or death — in cost-of-illness and cost-benefit studies. The Human Capital Approach (HCA) values all lost output for the full duration of absence at the wage rate; the Friction Cost Method (FCM) values it only for the shorter period an employer actually needs to restore production. Choosing between them changes an indirect-cost estimate by two times or more.

## Why it matters

Indirect (productivity) costs are one of the most contested line items in health economics precisely because the two standard methods disagree so sharply. HCA treats every day of absence as a day of output the economy genuinely loses, valued at the full wage for the full duration — or, for death or permanent disability, for the remaining working life. FCM argues that in an economy with unemployment and labour-market slack, most of a long absence does not actually reduce national output once an employer has trained a replacement or redistributed work; only the "friction period" — the time to restore production to its prior level — represents a real loss. FCM therefore produces systematically lower, more conservative indirect-cost estimates than HCA, and the two methods are not interchangeable footnotes: they are different economic theories about what "lost productivity" means. This is also why [NICE's reference case](../health-technology-assessment/) excludes productivity costs by default, reporting them, when at all, as a separate societal-perspective sensitivity analysis rather than blending them into the reference-case ICER — see [analysis perspective](../analysis-perspective/).

## The maths

```
Human Capital Approach:
HCA_cost = daily_wage × days_lost

Friction Cost Method (simplified, capped-at-friction-period form):
FCM_cost = daily_wage × min(days_lost, friction_period_days)

friction_period_days = country/sector-specific estimate of time-to-restore
                        production (historically ~85 days in Dutch iMTA
                        costing guidance; varies by country and is
                        periodically re-estimated)
```

The entire disagreement between the two methods lives in the `min()`: HCA never caps `days_lost`, so cost keeps growing for the whole absence, while FCM caps the counted days at the friction period, however long the actual absence runs.

## Worked example

An employee is off work for `days_lost = 180` days, earning `daily_wage = £150`.

**Human Capital Approach**:

```
HCA_cost = 150 × 180 = £27,000
```

**Friction Cost Method**, using a friction period of `friction_period_days = 85` (the historical Dutch iMTA benchmark, as of the guidance's periodic re-estimation):

```
FCM_cost = 150 × min(180, 85) = 150 × 85 = £12,750
```

FCM's £12,750 is under half of HCA's £27,000 for the *same* absence — the choice of method alone materially changes a cost-of-illness case, before any other assumption is touched.

## Software engineering connection

This maps directly onto how a team values an engineer leaving:

- **HCA-style attrition costing**: valuing the loss as the departed engineer's full salary for however long the role stays vacant. This is the naive version of most attrition-cost models, and it overstates the loss for the same reason HCA overstates productivity loss — it assumes the vacant capacity was fully productive the whole time and nothing else absorbed the slack. See [workforce retention](../workforce-retention/), which quantifies the recruitment/onboarding/vacancy-cover chain this method feeds into.
- **FCM-style attrition costing**: valuing the loss only for the actual time-to-backfill-and-ramp a replacement — the engineering "friction period." This is the more defensible number for a business case, exactly as FCM is the more conservative choice in a cost-of-illness study.
- The underlying discipline is the same one in [opportunity cost](../opportunity-cost/): value a displaced resource by what is genuinely lost, not by a headline duration multiplied by a rate.

## Pitfalls

- **Mixing HCA and FCM within one analysis, or reporting only one without disclosing the choice.** The same absence data can produce a 2x+ difference in reported cost depending on method; the choice must be stated, not buried.
- **Using HCA for a societal-perspective case without flagging it as a sensitivity analysis.** NICE's reference case explicitly excludes productivity costs; a societal-perspective HCA estimate belongs in a scenario analysis, not the headline ICER.
- **Applying either method to unpaid or non-market work (e.g. caregiving) without adjustment.** Both methods assume a wage-rate proxy for value, which does not transfer cleanly to work with no market wage.

## Sources

- Koopmanschap MA, Rutten FFH, van Ineveld BM, van Roijen L. "The friction cost method for measuring indirect costs of disease." Journal of Health Economics 1995;14(2):171-89.
- Drummond MF, Sculpher MJ, Claxton K, Stoddart GL, Torrance GW. "Methods for the Economic Evaluation of Health Care Programmes." 4th ed. Oxford University Press — chapter on productivity costs.
- NICE health technology evaluations manual (PMG36) — reference-case perspective and optional societal-perspective guidance. <https://www.nice.org.uk/process/pmg36>
