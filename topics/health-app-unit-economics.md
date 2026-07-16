# Health App Unit Economics

The commercial arithmetic of consumer health products: customer acquisition cost (CAC), lifetime value (LTV), average revenue per user (ARPU), per-member-per-month (PMPM) pricing, and the employer-market distinction between **ROI and VOI** (value on investment).

## Why it matters

Health apps face a structural squeeze: acquisition is expensive (regulated claims, trust barriers, compliance costs) while retention is the worst of any software vertical (~90% abandonment within 30 days — see [retention and churn](retention-and-churn.md)). The standard viability test — **LTV:CAC ≥ 3:1** — is therefore brutally hard in consumer health, which is why the industry migrates toward B2B2C models: employers, insurers, and health systems paying PMPM for populations, where the buyer is not the churning individual.

## The math

```
CAC   = sales + marketing spend / new paying customers
ARPU  = revenue / active users (per period)
LTV   = ARPU × average lifetime  =  ARPU / churn rate
Viability: LTV : CAC ≥ 3, payback period ≤ 12–18 months

Effective CAC per retained user = CAC / retention(t)
  — at 4% D30 retention, £5 per install = £125 per 30-day-retained user

PMPM revenue = rate × enrolled members × months
  vendor margin = PMPM − cost-to-serve per member per month
  — engagement flips sign: under B2C subscriptions engagement drives
    revenue; under PMPM, engaged members COST more to serve than
    dormant ones, and outcomes contracts flip it back again
```

## Worked example

A B2C sleep app: £6.99/month, monthly churn 18%, blended CAC £38.

```
LTV = 6.99 / 0.18 ≈ £38.8 → LTV:CAC ≈ 1.0 — non-viable

Pivot to employer PMPM: £1.20 PMPM × 40,000 covered lives = £48k/month
Cost-to-serve: infrastructure £0.15 + support £0.10 + content £0.05
  per member ≈ £0.30 → margin ~75%, sales cycle long but churn is
  contract-level (annual), not user-level (daily)

The employer's question shifts the metric: hard-dollar ROI (reduced
claims, absenteeism) is rarely demonstrable for wellness products —
the industry answer is VOI: productivity, recruitment appeal,
engagement — which is honest only when labeled as VOI, not dressed
as ROI (see return-on-investment.md and social-return-on-investment.md).
```

## Software engineering connection

Engineering choices set both sides of the ratio: **cost-to-serve** is architecture ([cloud unit economics](cloud-unit-economics.md) — the PMPM margin lives or dies on per-member infrastructure cost), and **LTV** is retention engineering (each churn-point is arithmetic revenue — the [retention](retention-and-churn.md) doc's QALY math has an exact revenue twin). For health products specifically, the unit-economics dashboard should carry a third line beside LTV and CAC: **health value per acquired user** (retention-weighted QALYs × threshold) — because payer and DiGA-style markets increasingly price on it, and because a product whose commercial and clinical unit economics diverge (profitable but health-inert, or effective but unfundable) needs to know which problem it has.

## Pitfalls

- **LTV from early-cohort churn**: churn stabilizes downward; but also survivorship — early adopters retain better than scaled audiences. Use cohort-matured data.
- **CAC blended over channels**: paid-social CAC and clinician-referral CAC differ 10×, with opposite retention profiles — segment or be misled.
- **PMPM without utilization caps**: outlier-engaged members can invert margins; model the distribution, not the mean.
- **VOI presented as ROI** to a CFO — the credibility failure the employer-wellness industry spent a decade earning.

## Sources

- Healthtech unit economics primers. <https://smart-it.io/blog/how-to-calculate-unit-economics-for-healthcare-startups/>
- PMPM pricing frameworks for digital health. <https://www.quintupleaim.com/blog/strategic-pricing-for-digital-health-startups-in-value-based-care-per-member-per-month-pmpm-frameworks>
