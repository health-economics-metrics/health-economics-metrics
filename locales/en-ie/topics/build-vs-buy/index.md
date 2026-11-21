# Build vs Buy

Build-vs-buy is a structured comparison of custom development against commercial acquisition, on discounted [TCO](../total-cost-of-ownership/), delivery time, and risk. The empirical priors are one-sided: **actual build costs typically exceed projections by 30–40%**, bought solutions deploy 40–60% faster, and MIT's 2025 GenAI research found purchased AI tools succeeded ~67% of the time while internal builds succeeded about a third as often.

## Why it matters

Health systems face this decision constantly ("make vs commission" in NHS language), and engineering organisations systematically get it wrong in the build direction — because builders estimate the build, not the [TCO](../total-cost-of-ownership/), and because building is more fun. The economic frame forces the honest comparison: both options priced over the same horizon, both risk-adjusted, and the *time difference priced as [cost of delay](../cost-of-delay/)* — the term that most often decides the answer and most often gets omitted.

## The maths

```
Compare over the same 3–5 year horizon, discounted:

NPV_option = PV(benefits, shifted by time-to-value) − PV(TCO)

Risk adjustments (Green Book "optimism bias" pattern):
  build cost × 1.3–1.4        (overrun prior)
  build time-to-value + 40–60% (deployment delay prior)
  buy: add integration reality-check and exit costs instead

Decision drivers, in the order they usually decide:
  1. differentiation — is this capability your product, or plumbing?
  2. time-to-value × CoD
  3. risk-adjusted TCO
```

## Worked example

A trust needs an e-consent system. Buy: £150k/year SaaS, live in 3 months. Build: estimated £600k + £120k/year maintenance, live in 12 months.

```
Risk-adjusted build: 600k × 1.35 = £810k; time-to-value ≈ 18 months
5-yr TCO:  buy = 150k × 5 = £750k
           build = 810k + 120k × 5 = £1,410k
Delay term: consent digitisation saves £25k/month; build arrives 15 months
            later → CoD = 15 × 25k = £375k

Effective comparison: £750k vs £1,785k — buy wins by ~£1M, and the largest
single term after the build itself is the delay cost nobody had priced.
```

Build remains right when the capability is differentiating (your product's core algorithm), when no vendor meets a hard constraint (clinical safety, data residency), or when vendor lock-in risk is severe and priced.

## Software engineering connection

The transferable health-economics discipline is threefold: **prior-based risk adjustment** (the 30–40% overrun uplift is the software Green Book optimism bias — apply it mechanically, argue for exceptions rather than from them); **comparator honesty** (the alternative to building isn't "nothing," it's the best available buy — see [opportunity cost](../opportunity-cost/)); and **equivalence testing before cost comparison** (if buy and build genuinely meet the same spec, this is [cost-minimisation analysis](../cost-minimisation-analysis/) and the cheap one wins; if not, the outcome difference must be valued, not asserted).

## Pitfalls

- **Comparing vendor list price to un-risk-adjusted build estimates** — double flattery toward build.
- **Zero-priced internal labour** ("the team's already here").
- **Unpriced lock-in in both directions**: vendor exit costs, but also the build's bus-factor and maintenance tenure.
- **Identity-driven builds**: "this is core to us" claimed for plumbing — test differentiation against whether customers would notice.

## Sources

- Build-vs-buy TCO analyses. <https://neontri.com/blog/build-vs-buy-software/>
- MIT GenAI divide findings (buy-vs-build success rates). <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- HM Treasury Green Book (optimism bias). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
