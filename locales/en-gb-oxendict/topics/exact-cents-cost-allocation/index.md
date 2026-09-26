# Exact-Cents Cost Allocation

Splitting a total amount of money — a shared grant, an infrastructure bill, a budget-impact figure — across several recipients by naive percentage arithmetic routinely produces parts that don't sum back to the original total. Exact-cents allocation is the fix: an integer/decimal method, working in minor currency units (cents), that guarantees the parts sum to *exactly* the whole, no matter how unevenly it divides. Any software engineer who has to reconcile a split total to the cent — payroll, grant disbursement, shared-service chargeback — needs this pattern, not floating-point percentages.

## Why it matters

This is a named, foundational pattern in enterprise software engineering: Martin Fowler's *Patterns of Enterprise Application Architecture* (2002) documents `Money` and `Allocate` precisely because "split $100 three ways" is a problem naive code gets wrong constantly, and gets wrong silently — the error surfaces only when someone reconciles the books and finds the parts a cent short (or over) of the total. In health-economics and NHS finance work this is not academic: budget-impact totals get split across sites, years, or directorates; shared infrastructure and licensing costs get apportioned across departments by headcount or activity share. Every one of those splits must reconcile exactly, because a finance director who is handed parts that don't sum to the total stops trusting the whole model.

## The maths

```
Naive (broken) method:
  part_i = round(total × share_i / Σ shares)     — rounds each part independently

Exact method (largest remainder / "largest remainder allocation"):
  1. base_i = floor(total_minor_units × share_i / Σ shares)   — whole minor units (cents) only
  2. remainder = total_minor_units − Σ base_i                  — leftover cents, always < number of recipients
  3. distribute 1 extra minor unit each to the `remainder` recipients with the
     largest fractional remainder from step 1, until the leftover is exhausted

Result: Σ part_i == total, always, by construction.
```

The exact method never rounds a part in isolation — it rounds the *whole allocation* as one operation, which is what makes the sum invariant hold.

## Worked example

Split $100.00 three equal ways (`shares = [1, 1, 1]`).

Naive method: $100.00 ÷ 3 = $33.333…, rounded independently to the nearest cent gives $33.33 for each recipient. Summed: $33.33 × 3 = $99.99 — one cent has vanished, and no single line item is "wrong" enough to spot by inspection.

Exact method: `base` = $33.33 for all three (9,999 minor units total from `floor(10,000 / 3) = 3,333` cents each), leaving a remainder of 1 cent (10,000 − 9,999). That single leftover cent goes to whichever recipient has the largest fractional remainder in the division — the specific recipient is an internal tie-break detail, not something a caller should depend on. Two recipients end up with $33.33 and one with $33.34, and the three parts sum to exactly $100.00.

This is exactly the arithmetic a [budget-impact analysis](../budget-impact-analysis/) needs whenever a total budget-impact figure has to be split across sites, cohorts, or financial years and reconciled back to the published total — see [currency-safe cost rollup](../currency-safe-cost-rollup/) for the companion problem of summing many such line items without drift.

## Software engineering connection

This is literally "the Money pattern" from enterprise software architecture — a foundational, named pattern for exactly this bug class, not a one-off trick. Real financial-reconciliation failures have shipped from exactly this class of bug: percentage splits computed in `f64`, rounded per-recipient, and never checked against the original total. It connects directly to this repo's [total cost of ownership](../total-cost-of-ownership/) module, which currently sums plain floating-point costs across years and options — the same exactness discipline applies whenever a TCO or budget-impact total must be apportioned rather than merely summed.

## Pitfalls

- **Percentage-then-round instead of largest-remainder**: allocating with floating-point percentages and rounding each recipient independently, which compounds rounding error and rarely sums back to the total, especially across many recipients.
- **Ignoring currency minor-unit exponents**: assuming every currency has 2 decimal places — Japanese Yen has 0, some currencies have 3 — a hand-rolled percentage split usually hard-codes 2 and silently breaks for other currencies; an exact-allocation routine reads the exponent from the currency itself (ISO 4217).
- **Re-allocating an already-allocated remainder**: running the allocation routine again on what's left over from a previous allocation, without idempotency checks, which can double-credit the same cent to the same recipient.

## Sources

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — the `Money` and `Allocate` patterns.
- ISO 4217 — currency and funds code standard, which defines each currency's minor-unit exponent.
