# Value of a Statistical Life (VSL)

The value of a statistical life (VSL) — called the "value of a prevented fatality" (VPF) in UK usage — is the amount a *population* is collectively willing to pay to reduce the risk of one statistical death, derived from wage-risk trade-off studies (how much extra pay workers demand for riskier jobs) and stated-preference surveys. It is not the price of any identified individual's life; it is a population-risk construct, and a software engineer building risk-reducing systems — triage algorithms, ambulance dispatch, safety monitoring — needs to know it comes from a different theoretical tradition than [willingness-to-pay thresholds](../willingness-to-pay-thresholds/).

## Why it matters

VSL/VPF is the standard tool for monetizing mortality-risk reductions in regulatory cost-benefit analysis: transport safety, environmental regulation, and some public-health interventions all run their business cases through it. HM Treasury's Green Book publishes a VPF figure derived from UK labour-market and survey evidence, and the Department for Transport uses it directly in road-safety appraisal. This is a genuinely different valuation tradition from QALY × willingness-to-pay-threshold methodology: the threshold approach values health gains against what a health *budget* currently produces at the margin, whereas VSL/VPF values risk reduction against what people in a labour market or survey reveal they'd pay for it. The two frameworks are not always reconcilable, and using both in the same case without acknowledging that is a common analytical error.

## The maths

```
Deaths averted = population × risk_reduction_per_person
  (risk_reduction_per_person is a probability, e.g. 0.000001 = 1-in-a-million
   reduction in annual mortality risk)

Monetized mortality benefit = deaths_averted × value_of_prevented_fatality
```

## Worked example

A region of 800,000 people benefits from a road-safety digital dispatch/triage intervention that reduces each person's annual mortality risk by 1 in a million (0.000001):

```
Deaths averted = 800,000 × 0.000001 = 0.8
```

Using the UK's Value of a Prevented Fatality, £2,180,000 (HM Treasury/DfT figure, 2023/24 prices — the Green Book updates this annually, re-verify before citing in a live analysis):

```
Monetized mortality benefit = 0.8 × £2,180,000 = £1,744,000/year
```

Just under £1.75 million per year of monetized mortality benefit, from a risk reduction most of the affected population would never notice individually.

## Software engineering connection

Safety-critical software teams — medical device firmware, autonomous vehicle software, industrial control systems — face exactly this pricing problem when building the cost-benefit case for a safety investment: how do you price "prevent one catastrophic failure" when the failure is rare, severe, and spread across a large population of users? VSL/VPF is a decades-old, publicly documented real-world precedent for putting a number on a rare, severe, population-level risk reduction — the same shape of argument as pricing an SRE investment against a rare catastrophic outage, just with a mortality outcome instead of a downtime outcome.

## Pitfalls

- **Treating VSL as "the price of an identified life"**: it isn't. VSL/VPF is a population statistical construct derived from risk-reduction trade-offs across many people, not a valuation of any specific person's life or death.
- **Double counting against a QALY-based net monetary benefit calculation**: using a VSL/VPF figure and a separate QALY × threshold calculation in the same case, without reconciling them, silently double counts the value of the same averted deaths. Pick one framework for a given case.
- **Transplanting a VSL estimate across contexts without adjustment**: a VSL derived from one country's labour market, or from working-age wage-risk data, applied unadjusted to a different income context or a different population (children, retirees) is a long-standing, genuinely contested methodological issue — not a solved one.

## Sources

- HM Treasury, The Green Book: Central Government Guidance on Appraisal and Evaluation — Value of a Prevented Fatality supplementary guidance (2023/24 prices; Green Book values are updated annually). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- US EPA, "Mortality Risk Valuation" (for the US VSL tradition, cited for contrast with the UK VPF figure above). <https://www.epa.gov/environmental-economics/mortality-risk-valuation>
- Viscusi WK, Aldy JE. "The Value of a Statistical Life: A Critical Review of Market Estimates Throughout the World." J Risk Uncertain. 2003;27(1):5-76.
