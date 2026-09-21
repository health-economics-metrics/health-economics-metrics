# Social Return on Investment (SROI)

SROI extends [ROI](../return-on-investment/) to outcomes that markets don't price — wellbeing, social connection, environmental impact — by monetizing them with financial proxies, for *all* stakeholders affected.

## Why it matters

Much of what health and community interventions produce never touches a budget line: reduced loneliness, carer relief, employment gains, dignity. SROI, governed by Social Value International's seven principles (involve stakeholders, value what matters, don't over-claim, be transparent, verify…), produces statements like "£3.20 of social value per £1 invested." UK public procurement's social-value requirements make SROI-style evidence commercially relevant: bids for public contracts (including NHS) score points for demonstrated social value.

## The math

```
SROI ratio = PV(monetized social outcomes) / PV(investment)

For each outcome:
  value = quantity × financial proxy × attribution × (1 − deadweight) × (1 − displacement)

deadweight   = would have happened anyway
attribution  = share caused by others
displacement = benefit moved from elsewhere rather than created
drop-off     = decay of the outcome over years
```

The adjustment factors are the method's integrity: without them, SROI is fiction with a currency sign.

## Worked example

A befriending app connecting isolated older adults to volunteers; program cost £200,000/year; 1,500 active pairs.

```
Outcome: reduced loneliness for 1,500 people
  proxy: wellbeing valuation of "relief from loneliness" ≈ £1,800/person/yr
  deadweight 25% (some would have found connection anyway)
  attribution 80% (some credit to other services)

Value = 1,500 × 1,800 × 0.80 × 0.75 = £1,620,000

Outcome: reduced GP visits, 1,500 × 1.2 visits × £42 = £75,600 (payer-real)

SROI = (1,620,000 + 75,600) / 200,000 ≈ 8.5 : 1
```

Note the ratio is 96% proxy-valued wellbeing and 4% hard cash. That's legitimate SROI — but it must be presented as social value, never allowed to imply £1.7M is bankable.

## Software engineering connection

SROI is the honest framework for engineering work whose beneficiaries are outside the paying team: open-source maintenance, accessibility improvements, platform work consumed by other teams, developer-community investment. The transferable mechanics: identify all stakeholders, monetize with stated proxies, and apply deadweight/attribution discounts (would that OSS fix have happened anyway? how much of the gain is your work vs the ecosystem's?). The discipline of *discounting your own impact claims* is what separates SROI from a marketing number.

## Pitfalls

- **Proxy shopping**: choosing the most generous wellbeing valuation available.
- **Skipping deadweight/attribution** — the most common inflation, often doubling the ratio.
- **Ratio comparison across studies**: SROI ratios are method-sensitive; compare only within a consistent framework.
- **Presenting social value as cashable savings** to a budget holder.

## Sources

- Social Value International, Guide to SROI. <https://www.socialvalueint.org/guide-to-sroi>
- UK Government guide to SROI. <https://www.gov.uk/government/publications/a-guide-to-social-return-on-investment>
