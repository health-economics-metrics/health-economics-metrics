# Activation and Uptake

Activation rate is the share of sign-ups who reach first meaningful value (the "aha" action — first reading logged, first lesson done). Uptake is the population version: the share of the *eligible* population that adopts at all. Together they are the front gates of the value funnel: acquisition → uptake → activation → [retention](retention-and-churn.md) → outcome.

## Why it matters

Non-activated users are pure cost: acquisition spend, provisioning, support surface — zero clinical value. Benchmarks put healthcare software's activation *below* the cross-industry average (≈24% vs ≈37% for new-user activation in one SaaS benchmark set; onboarding-checklist completion ~20%), reflecting heavier onboarding (identity, consent, clinical safety). Uptake carries the population stakes: in the [RE-AIM framing](reach-and-equity.md), public-health impact ≈ reach × effectiveness — a superb app adopted by 3% of the eligible population moves the population needle 3%'s worth. For prescribed digital therapeutics the uptake gate is visible in national data: **~81% of German DiGA prescriptions get activated** — one in five prescribed-and-paid-for treatments never starts (see [DiGA fast-track](diga-fast-track.md)).

## The math

```
Activation rate = users completing key action within window / sign-ups × 100
Uptake rate     = adopters / eligible population × 100
DTx fill rate   = activated prescription codes / issued prescriptions × 100

Funnel value model:
  eligible × uptake × activation × retention-weighted benefit = population value
  — four multiplications; improving the smallest factor usually
  dominates (theory-of-constraints for funnels)
```

## Worked example

A commissioner offers a diabetes-prevention app to 80,000 eligible residents:

```
Invited → registered:  80,000 → 12,000  (uptake 15%)
Registered → activated (first session + goal set, 7 days): 12,000 → 5,400 (45%)
Activated → completed 6-month programme: 5,400 → 1,600 (30%)

Programme effect (trial, completers): 0.03 QALYs + £180 avoided costs
Population value = 1,600 × (0.03 × £20,000 + £180) ≈ £1.25M
Per-eligible-person value = £15.6 — versus £780 if every eligible person completed.

Where to invest? Doubling uptake (15→30%) doubles value; raising
activation 45→65% adds ~44%; both beat further polishing the programme
content the 1,600 already complete.
```

## Software engineering connection

Activation is the most engineering-tractable stage of the funnel: identity-verification friction, consent flows, empty-state design, and time-to-first-value are code, not policy (healthcare median time-to-value ≈ 1 day 7 hours in benchmark data — every hour of it is churn exposure). Uptake is a distribution-systems problem: integration into referral pathways (the prescription moment), GP-endorsed invitations (trust transfers), and accessibility (language, digital skills — see [reach and equity](reach-and-equity.md)). The funnel-value model above is the business case generator for both: multiply the factors, find the constraint, price the fix against the population value it releases.

## Pitfalls

- **Activation defined as convenience** (email verified) rather than clinical meaning (first therapeutic action) — inflates the metric, breaks the value chain.
- **Uptake denominator games**: "of those who visited the site" vs the truly eligible population — commissioners care about the latter.
- **Selection effects**: easy-to-activate users are the least sick and least deprived; funnel improvements can widen equity gaps while improving averages.

## Sources

- Activation benchmarks (healthcare SaaS). <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
- DiGA activation data, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
- RE-AIM framework. <https://re-aim.org/>
