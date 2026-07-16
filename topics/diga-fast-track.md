# Germany's DiGA Fast-Track

DiGA (Digitale Gesundheitsanwendungen) is Germany's statutory "apps on prescription" pathway — the world's first national system where doctors prescribe approved health apps and statutory insurance must reimburse them. It is the leading live experiment in paying for digital therapeutics at national scale.

## Why it matters

DiGA answered the question every digital health company asks — "who will actually pay?" — with legislation (the DVG, 2019). The design is remarkable:

- **Fast decision**: BfArM (the regulator) must decide within 3 months.
- **Provisional listing**: apps can list for 12 months *while still generating evidence* — earning revenue during their pivotal study.
- **Evidence deadline**: prove a "positive healthcare effect" (medical benefit, or patient-relevant structural/procedural improvement) via a comparative study — usually an RCT — or be delisted. Roughly half of provisional entries fail to convert.
- **Pricing**: manufacturer sets year-1 price freely; then negotiated with the insurers' federation. Median initial 3-month prices around €500; performance-based pricing elements arriving from 2026.

Market reality check (research through end-2024): ~68 apps listed, >1M cumulative prescriptions, ~81% of prescriptions activated, ~€234M cumulative insurer spend — a real market, but modest against the hype, and adherence after activation remains the weak point.

## The math

The commercial model every DiGA founder runs:

```
Revenue = prescriptions × activation rate × price per prescription period
Evidence cost = pivotal RCT (typically €1M–3M) within the 12-month window
Expected value = P(evidence succeeds) × steady-state revenue − evidence cost

With ~50% conversion failure, P must be honestly assessed — half the field
spends the RCT money and loses the listing.
```

## Worked example

A depression-management app lists provisionally at €450/quarter:

```
Year 1: 20,000 prescriptions × 81% activation × €450 ≈ €7.3M revenue
RCT cost: €2M, running concurrently
Outcome A (evidence positive): permanent listing, negotiated price ~€380,
  steady state 60,000 scripts/yr ≈ €18.5M/yr
Outcome B (evidence fails): delisted at month 12; revenue stops.
```

The provisional year finances the evidence generation — the pathway's core innovation. Contrast the traditional sequence (evidence first, revenue years later), which starves exactly the products DiGA wants to exist.

## Software engineering connection

DiGA's pattern — **provisional adoption with a pre-registered success metric and an automatic sunset** — is directly copyable for engineering-tool governance: ship the tool to production users for 12 months, pre-register the metric (measured time saved, incident reduction), auto-expire unless the evidence lands. It solves the pilot paradox (tools that need scale to prove value never get scale) without granting permanent tenure to unproven tech. The 81%-activation/low-adherence data also carries a product lesson: prescription (or executive mandate) gets installs; only product quality gets sustained use — see [adherence and persistence](adherence-and-persistence.md).

## Pitfalls

- **Treating listing as the finish line** — prescriptions require prescriber trust; many listed DiGAs see negligible volume.
- **Underpowering the pivotal study** to save money during the revenue year — the false economy that explains much of the 50% failure rate.
- **Porting the model without the payer**: DiGA works because reimbursement is statutory; a copy without mandated payment is just a pilot program.

## Sources

- Analysis of the DiGA market, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
- DiGA pricing trends, npj Digital Medicine 2025. <https://www.nature.com/articles/s41746-025-01879-6>
- BfArM, Digital Health Applications. <https://www.bfarm.de/EN/Medical-devices/Tasks/DiGA-and-DiPA/Digital-Health-Applications/_node.html>
