# Currency-Safe Cost Rollup

Summing many money line items — monthly invoices, per-site costs, multi-year budget-impact figures — with ordinary binary floating-point (`f64`) numbers accumulates small representation errors, because most decimal fractions ($1,234.56, for instance) aren't exactly representable in binary floating point. Each individual error is tiny, but a large model summing hundreds or thousands of line items over several years can drift by fractions of a cent — and the drift depends on the *order* the additions happen in, which makes it non-reproducible. A currency rollup done in exact decimal (or integer minor-unit) arithmetic sums exactly, matching how accounting systems and double-entry ledgers must reconcile to the cent.

## Why it matters

This is a well-documented, foundational class of software bug: Goldberg's 1991 ACM Computing Surveys paper "What Every Computer Scientist Should Know About Floating-Point Arithmetic" is the standard reference for exactly why binary floating point cannot represent most decimal money values exactly, and why summing many of them compounds the error. Health-economics and NHS finance models routinely sum many years and many cost categories — [total cost of ownership](../total-cost-of-ownership/) and [budget-impact analysis](../budget-impact-analysis/) both aggregate large numbers of `f64` cost line items over multi-year horizons. When a model must reconcile to the cent — an audit recomputing the total by hand must get the *identical* figure — the arithmetic itself has to be exact-decimal, not floating point.

## The maths

```
Naive rollup:              total = Σ f64(line_item_i)         — order-dependent drift
Currency-safe rollup:      total = Σ Decimal(line_item_i)      — exact, reproducible

Applying a percentage adjustment (e.g. a contingency buffer):
  adjusted = total × multiplier                — exact Decimal result, may carry
                                                  more decimal places than the
                                                  currency's minor-unit exponent
  rounded  = round(adjusted, currency_exponent, rounding_rule)  — the rounding rule
                                                  (half-up vs half-even/banker's
                                                  rounding) must be stated explicitly
```

Note the two-step discipline: multiplying an exact `Decimal` amount by a multiplier can produce more decimal places than the currency actually uses (three decimal places from a two-decimal-place amount times a two-decimal-place multiplier, for instance) — that intermediate precision is *not* automatically rounded away; only an explicit rounding step, with a stated rounding rule, takes it down to the currency's real minor-unit exponent.

## Worked example

Twelve identical monthly invoices of $1,234.56 each, summed in exact decimal arithmetic: $1,234.56 × 12 = **$14,814.72**, exactly. Contrast this with summing the `f64` literal `1234.56` twelve times in IEEE-754 double precision, which can drift by fractions of a cent depending on the order of summation — a real, documented class of bug, not a problem for a model built on exact decimal `Money` arithmetic.

Now apply a standard budget-impact contingency buffer of 5% (a 1.05× multiplier) to that $14,814.72 total: $14,814.72 × 1.05 = $15,555.456 — three decimal places, because the multiplication is exact and not automatically rounded to the currency's two decimal places. Rounding that explicitly to 2 decimal places using banker's rounding (half-even) gives exactly **$15,555.46**.

## Software engineering connection

This is the direct, foundational lesson behind "financial software uses `Decimal`, not `float`" — it connects explicitly to this repo's [total cost of ownership](../total-cost-of-ownership/) and [budget-impact analysis](../budget-impact-analysis/) modules, both of which currently sum plain floating-point costs; the correctness argument here doesn't demand migrating those models immediately, but it does state precisely *when* a system must reconcile to the cent and therefore must not use binary floating point for its money arithmetic. See also [exact-cents cost allocation](../exact-cents-cost-allocation/) for the companion problem of splitting (rather than summing) totals without losing cents.

## Pitfalls

- **Converting to `float` mid-chain**: pulling a money value out to a floating-point number partway through a calculation (some `Money` libraries even name this conversion method something like "lossy" as an explicit warning) silently discards the exactness guarantee for every calculation downstream of that point.
- **"Decimal is too slow to bother with"**: dismissing exact-decimal arithmetic as unnecessary overhead when correctness and auditability — not raw throughput — are what matter for financial reporting.
- **Applying a contingency percentage without stating the rounding rule**: rounding half-up versus half-even (banker's rounding) can change the final cent; the rounding convention itself must be a stated, auditable choice — see [cost-benefit analysis](../cost-benefit-analysis/) for the HM Treasury Green Book guidance on contingency and optimism-bias adjustments, which is exactly the kind of figure this rounding step is applied to.

## Sources

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — the `Money` pattern.
- Goldberg D. "What Every Computer Scientist Should Know About Floating-Point Arithmetic." ACM Computing Surveys, 1991.
- HM Treasury, The Green Book — optimism-bias and contingency guidance for budget-impact modelling. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
