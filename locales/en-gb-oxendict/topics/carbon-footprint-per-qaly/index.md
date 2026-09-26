# Carbon Footprint per QALY

Carbon per QALY is an efficiency ratio — an intervention's carbon emissions (or emissions avoided) divided by the QALYs it delivers — directly analogous to cost per QALY, letting an intervention's carbon efficiency be assessed alongside its cost efficiency. A "carbon-adjusted net monetary benefit" goes a step further, monetizing the carbon impact using the UK Green Book's official non-traded carbon values and netting it against the standard [net monetary benefit](../net-monetary-benefit/).

## Why it matters

NICE and NHS England now expect environmental impact to be considered alongside cost and QALYs. The NHS has a public net-zero commitment: net zero for its direct emissions by 2040, and net zero for its full supply-chain footprint by 2045. NICE's health technology evaluations manual (PMG36) references environmental sustainability as an emerging consideration in technology appraisal. For a digital health product, this means carbon is becoming a fourth pillar of the value case, alongside cost, QALYs, and [dominance on the efficiency frontier](../dominance-and-efficiency-frontier/) — not a replacement for any of them, but a dimension a well-built business case increasingly needs to report.

## The maths

```
Carbon per QALY = total_emissions_tonnes_co2e / total_qalys
  (a negative value means net emissions AVOIDED per QALY gained — a
  double win: better health and lower carbon)

Monetized carbon impact = emissions_tonnes_co2e × carbon_value_per_tonne
  (negative emissions × positive value = a negative cost, i.e. a benefit)

Carbon-adjusted NMB = net_monetary_benefit − monetized_carbon_impact
```

This extends the cost/QALY efficiency-frontier idea with a second axis — carbon per QALY — the same "plot every option and see what's dominated" logic as [dominance and the efficiency frontier](../dominance-and-efficiency-frontier/), applied to carbon instead of cost.

## Worked example

A telehealth service replaces in-person visits, avoiding 5,000 car journeys/year at roughly 8kg CO2e each — 40 tonnes of CO2e avoided, represented as a negative emissions figure (−40.0 tonnes), and it delivers 25 QALYs/year:

```
Carbon per QALY = −40.0 / 25.0 = −1.6 tonnes CO2e avoided per QALY gained
```

Using the Green Book's non-traded carbon value (illustrative figure, 2023 non-traded central value ≈ £269/tonne CO2e — the Green Book updates carbon values annually, re-verify before citing in a live analysis):

```
Monetized carbon impact = −40.0 × £269 = −£10,760
```

A −£10,760 "cost" is a £10,760 benefit. If the intervention's standalone net monetary benefit is £500,000:

```
Carbon-adjusted NMB = £500,000 − (−£10,760) = £510,760
```

The carbon saving adds to the case rather than detracting from it — the double win the negative-emissions framing is meant to surface.

## Software engineering connection

This is a live, current intersection with AI/cloud economics: the compute carbon footprint of training and running an AI model is now a real line item in NHS procurement, since NHS supplier contracts above certain thresholds require a Carbon Reduction Plan. [Cloud unit economics](../cloud-unit-economics/) already tracks cost per unit of compute output; carbon per QALY is the natural template for a future "carbon cost per inference" metric extending that module and inference unit economics into the environmental dimension, though that metric doesn't exist yet.

## Pitfalls

- **Scope-boundary gaming**: counting only direct (Scope 1) emissions and excluding supply-chain (Scope 3) emissions, which are usually the majority for a digital health product's actual footprint.
- **Using a stale carbon value**: the Green Book updates its non-traded carbon values annually, so any cited £/tonne figure must be dated, not quoted as a fixed constant.
- **Treating "carbon efficient" as a substitute for "cost effective"**: a low-carbon, low-value intervention is still a poor use of NHS resources. Carbon is a fourth pillar alongside cost and QALYs, not a replacement for either.

## Sources

- NHS England, "Delivering a Net Zero National Health Service" (2020, updated 2022). <https://www.england.nhs.uk/greenernhs/publication/delivering-a-net-zero-national-health-service/>
- HM Treasury, The Green Book: Carbon Values supplementary guidance (updated annually; non-traded central value ≈ £269/tCO2e, 2023 — date any citation). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
