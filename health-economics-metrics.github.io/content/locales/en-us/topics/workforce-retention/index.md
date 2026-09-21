# Workforce Retention

Workforce retention economics quantify what staff turnover costs a health system — recruitment, onboarding, vacancy cover — and therefore what software that reduces administrative burnout is worth. Burnout from repetitive administrative data tasks is a primary driver of staff turnover and sickness absence in the NHS.

## Why it matters

When a clinician leaves, the trust pays three times: to recruit a replacement (advertising, agency fees, interviews), to onboard them (months of reduced productivity, supervision), and to cover the vacancy meanwhile — typically with agency or locum staff at 2–3× substantive Agenda for Change rates (see [avoidable outsourcing costs](../avoidable-outsourcing-costs/) and [hard cash-releasing savings](../hard-cash-releasing-savings-deficit-defense/)). Because turnover costs are real cash, retention improvements are among the few workforce benefits a finance director can bank. Administrative friction is consistently among the top cited drivers of clinical burnout, which makes it a software-addressable cost.

## The math

```
Cost per leaver = recruitment cost + onboarding/productivity-ramp cost
                + vacancy cover premium × vacancy duration

Annual turnover cost = headcount × turnover rate × cost per leaver

Value of software  = headcount × Δturnover rate × cost per leaver
                   + sickness-absence reduction × cover cost/day
```

The causal chain has two estimated links — software → burnout/friction, and burnout → turnover — so evidence both (staff surveys pre/post; published burnout-attrition associations) and keep the claimed Δ modest.

## Worked example

A trust employs 1,200 nurses; turnover 11%/year. Cost per leaver:

```
Recruitment ≈ £4,500;  onboarding/ramp ≈ £6,000
Vacancy cover: 4 months × 0.6 WTE covered by agency premium ≈ £8,000
Total ≈ £18,500 per leaver
Baseline turnover cost = 1,200 × 0.11 × 18,500 ≈ £2.44M/year
```

Documentation-burden software (auto-populated assessments, single sign-on, dictation) plausibly moves turnover 1 percentage point:

```
Value = 1,200 × 0.01 × 18,500 = £222,000/year cash-relevant
```

A 1-point claim backed by staff-survey friction scores is credible; a 4-point claim is not. Run the [tornado](../sensitivity-analysis/) on Δturnover: it dominates everything else in the model.

## Software engineering connection

Engineering retention math is identical and worse-documented: replacing a senior engineer costs 6–12 months of loaded salary (recruiting, ramp, lost context), so a 200-person org at 15% attrition burns millions annually on churn. Developer-experience investment ([SPACE and DevEx](../space-and-devex/)) is the direct analog of documentation-burden relief for nurses — and should be justified the same way: measured friction scores, a modest claimed effect on attrition, cost per leaver from your own finance data. The health-economics discipline to copy is *costing the leaver honestly* rather than arguing about whether people "really" leave over tooling.

## Pitfalls

- **Attributing all turnover movement to your intervention** — labor markets move turnover far more than software does; use control groups or at least sector trend adjustment.
- **Double counting**: retention savings and agency-spend savings overlap (vacancy cover *is* agency spend); reconcile the lines.
- **Ignoring the lag**: burnout-driven attrition responds to friction changes over 1–2 years, not the next quarter.

## Sources

- NHS England, reducing agency spend. <https://www.england.nhs.uk/long-read/reducing-agency-spend-in-the-nhs/>
- NHS Staff Survey (burnout and intention-to-leave data). <https://www.nhsstaffsurveys.com/>
