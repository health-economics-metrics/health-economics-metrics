# Bed Days Saved

A bed day is one patient occupying one hospital bed for one day. "Bed days saved" — through earlier discharge, admission avoidance, or virtual wards — is the workhorse benefit of NHS digital business cases, and the most commonly overvalued.

## Why it matters

Beds are the binding constraint of acute care: when beds fill, elective surgery is cancelled, ambulances queue, and the emergency department backs up. Interventions that free bed days therefore carry real value — but the *kind* of value depends entirely on what happens to the freed bed. Finance directors have learned to discount naive bed-day claims heavily; getting this arithmetic right is a credibility test.

## The maths

```
Bed days saved = patients affected × Δ length of stay (or admissions avoided × avg LOS)

Value depends on the use of the freed capacity:
  refilled with elective activity → value = activity income or waiting-list benefit
  ward closed / flexed down      → value = staffing + running cost released (cash)
  absorbed as slack              → value ≈ marginal (hotel) cost only, £50–£150/day
```

Average fully-absorbed cost of an acute bed day is often quoted at £400+ (National Cost Collection historically ~£350 for excess bed days) — but see [marginal vs average cost](../marginal-vs-average-cost/): the average is almost never the saving.

## Worked example

A remote-monitoring "virtual ward" lets 600 patients/year go home 2 days early: 1,200 bed days saved.

- **Naive claim**: 1,200 × £400 = £480,000. Wrong unless a ward closes.
- **Honest claim**: the trust backfills the beds with elective orthopaedic patients. 1,200 bed days ÷ 3-day average stay = 400 additional elective spells at ~£6,000 income each under activity-based payment = **£2.4M of additional funded activity** (minus the marginal cost of treating those patients), *plus* 400 patients off the waiting list. The virtual ward's running cost (£350,000) nets against this.

Freed capacity that is *reused* is often worth more than the naive cash claim — but it is a different kind of value and must be labelled as such ([cash-releasing vs non-cash-releasing](../cash-releasing-vs-non-cash-releasing/)).

## Software engineering connection

"Server days saved" behaves identically. Decommissioning always-on environments only releases cash when instances are terminated or reservations lapse; capacity absorbed back into the pool is worth its marginal cost (~0 on committed spend). The parallel discipline: for every claimed saving, name the *mechanism* — terminated, refilled with valuable work, or evaporated. Software that reduces hospital length of stay (discharge coordination, remote monitoring, diagnostics turnaround) should model all three scenarios and let the trust pick per ward.

## Pitfalls

- **Average-cost valuation** of marginal capacity — the canonical error.
- **Double counting**: bed days saved *and* admissions avoided *and* waiting list reduction from the same freed bed.
- **Assuming saved days are the expensive days**: the days saved at end of stay are the cheapest (low-acuity) days.

## Sources

- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- Economics by Design, NHS cost calculator. <https://economicsbydesign.com/tools/nhs-cost-calculator/>
