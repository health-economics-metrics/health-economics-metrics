# Cost-Benefit Analysis (CBA)

CBA values both costs *and* outcomes in money. It is the only analysis type that can answer "is this worth doing at all?" — not merely "which option is best?" — because monetized benefits can be compared directly against costs.

## Why it matters

CBA is the standard of the UK's HM Treasury **Green Book** for all public spending appraisal, health included when outcomes can be monetized. Where [CEA](../cost-effectiveness-analysis/)/[CUA](../cost-utility-analysis/) stop at "cost per unit of health," CBA prices the health itself (QALY × threshold value) and everything else — time, travel, carbon — and reports one net figure. Every full NHS digital business case contains a CBA-shaped economic case.

## The maths

```
NPV (net present social value) = Σ_t [ (Benefits_t − Costs_t) / (1 + r)^t ]
BCR (benefit-cost ratio)       = PV(benefits) / PV(costs)

Adopt if NPV > 0 (equivalently BCR > 1); rank by NPV, not BCR.
r = 3.5% (Green Book social time preference rate)
```

Health effects can enter monetized as QALYs × λ (see [willingness-to-pay thresholds](../willingness-to-pay-thresholds/)). The Green Book also mandates **optimism-bias adjustments** — uplifting cost estimates and haircutting benefits by evidence-based percentages, because appraisals are systematically rosy.

## Worked example

An e-referral system, 5-year horizon, 3.5% discount:

```
Costs:    build £1.2M (year 0), run £300k/yr (years 1–5)
Benefits: admin savings £250k/yr, avoided duplicate diagnostics £280k/yr,
          patient time saved 40,000 hrs/yr × £15 = £600k/yr → £1,130k/yr

PV costs    = 1,200k + 300k × 4.515 (annuity factor) = £2,555k
PV benefits = 1,130k × 4.515                          = £5,102k

NPV = 5,102 − 2,555 = +£2,547k     BCR = 2.0
```

Apply Green Book optimism bias (say +40% on build cost, −20% on benefits): PV costs ≈ £3,035k, PV benefits ≈ £4,082k, NPV ≈ **+£1,047k** — still positive, which is the point of the adjustment: cases should survive their own optimism.

## Software engineering connection

Engineering business cases are informal CBAs. The Green Book upgrades worth stealing:

- **Optimism bias as a standard uplift** — engineers underestimate migration cost as reliably as ministries underestimate infrastructure cost; apply a stated uplift instead of pretending this time is different.
- **Monetize the dominant benefit honestly or not at all** — patient/user time is monetized at defensible rates; "brand value" is not.
- **NPV ranks, BCR doesn't**: a tiny project with BCR 5 can matter less than a big one with BCR 1.6.

## Pitfalls

- **Monetizing the unmonetizable** to inflate benefits (morale, "strategic alignment") — keep those qualitative, per [cost-consequence analysis](../cost-consequence-analysis/).
- **Counting transfers as benefits**: money moving between public bodies nets to zero at the societal [perspective](../analysis-perspective/).
- **No counterfactual**: benefits are measured against the do-minimum option, not against zero.

## Sources

- HM Treasury, The Green Book. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Green Book discounting guidance. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
