# Discounting and Time Preference

Discounting converts future costs and benefits into present values, because a benefit today is worth more than the same benefit in five years.

## Why it matters

Every health-economics appraisal and every serious public-sector business case discounts multi-year streams. The UK's HM Treasury Green Book mandates a 3.5% annual social time preference rate; NICE's reference case discounts both costs and health effects at 3.5% per year (with a 1.5% non-reference-case rate for near-cure therapies with benefits over 30+ years). If your software business case claims "£5 million savings over 10 years," a finance reviewer will immediately ask for the discounted figure.

## The maths

Present value of a future amount:

```
PV = FV / (1 + r)^t

PV = present value
FV = future value in year t
r  = discount rate (NICE/Green Book: 0.035)
t  = years from now
```

For a constant annual benefit B over n years (an annuity):

```
PV = B × [1 − (1 + r)^(−n)] / r
```

## Worked example

Your software saves an NHS trust £100,000 per year for 5 years, starting one year after go-live.

Undiscounted total: £500,000.

Discounted at 3.5%:

```
Year 1: 100,000 / 1.035^1 = £96,618
Year 2: 100,000 / 1.035^2 = £93,351
Year 3: 100,000 / 1.035^3 = £90,194
Year 4: 100,000 / 1.035^4 = £87,144
Year 5: 100,000 / 1.035^5 = £84,197

Total PV ≈ £451,505
```

The honest headline is about £451,000, roughly 10% less than the naive sum. Now suppose delivery slips by one year: every term shifts one year later, and the PV falls to about £436,000 — the discounting view of [cost of delay](../cost-of-delay/).

## Software engineering connection

- **Tech-debt paydown and platform migrations** promise benefit streams years out; discount them before comparing against work that pays back this quarter.
- **Front-loaded costs, back-loaded benefits** is the standard shape of a migration. Discounting penalizes that shape, correctly: it prices the risk-free time value of committing capacity now for value later.
- **"Savings in year 5" claims** deserve skepticism twice over — they are both heavily discounted and highly uncertain (see [sensitivity analysis](../sensitivity-analysis/)).

## Pitfalls

- **Discounting costs but not benefits** (or vice versa) — the reference case discounts both, at the same rate.
- **Using a commercial rate (8–12%) in a public-sector case**, or 3.5% in a venture-backed one. Match the rate to the decision-maker.
- **Confusing discounting with inflation.** Discounting applies to *real* (inflation-adjusted) values; don't do both implicitly.

## Sources

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- HM Treasury Green Book, discounting supplementary guidance. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
