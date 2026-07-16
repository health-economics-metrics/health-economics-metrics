# DORA Metrics

The DORA (DevOps Research and Assessment) metrics are four measures of software delivery performance — deployment frequency, lead time for changes, change failure rate, and failed-deployment recovery time — plus reliability as a fifth. They are the field's most validated delivery benchmarks, and each has a direct health-economics reading.

## Why it matters

DORA's decade of research links these metrics to organizational performance. The 2024 report's clusters: **elite** teams deploy on demand (multiple times/day), take under a day from commit to production, fail ~5% of changes, and recover in under an hour; **low** performers deploy monthly-or-less, take months, fail ~40% of changes, and recover in weeks. For a health system, these are not IT vanity numbers: they determine how fast clinical value reaches patients and how much risk each change carries.

## The math

```
Deployment frequency    = production deployments / time
Lead time for changes   = t(deploy) − t(commit), median
Change failure rate     = failed changes / total changes × 100
Recovery time (MTTR)    = t(restored) − t(failure), median
Reliability             = SLO attainment (availability, latency, correctness)
```

Health-economics translations:

```
Lead time     → cost-of-delay.md: weeks in the pipeline × CoD (£ or QALYs/week)
Failure rate  → adverse-event rate of software change: CFR × cost per incident
Recovery time → downtime harm: MTTR × (lost clinical activity + safety exposure)/hr
Reliability   → benefit discount: a service at 99% availability delivers ≈ 0.99
                of its modeled benefit — the software analogue of adherence
```

## Worked example

A trust's patient-flow software team, before/after a delivery-engineering investment:

```
                    Before      After
Deploys             monthly     weekly
Lead time           6 weeks     4 days
CFR                 25%         8%
MTTR                2 days      2 hours
```

The team ships ~30 improvements/year with average per-improvement value £4,000/week ([CoD](cost-of-delay.md)). Lead-time cut of ~5.4 weeks pulls each improvement's benefit stream forward: 30 × 5.4 × 4,000 ≈ **£648,000/year** of value delivered sooner. CFR improvement: 30 × (0.25 − 0.08) = ~5 fewer failed changes/year × £15,000 average incident cost (clinical-system downtime, remediation) = **£76,500/year**. The delivery investment is valued in the same currency as any clinical intervention.

## Software engineering connection

This *is* the software side — the connection worth stating is the reverse mapping: DORA metrics are the hospital's operational metrics wearing different clothes. Lead time ↔ [referral to treatment](referral-to-treatment.md); change failure rate ↔ [readmission rate](readmission-rate.md) (work that bounced back); MTTR ↔ emergency response; deployment frequency ↔ clinic throughput. Improvement methods transfer in both directions because both are queueing systems under safety constraints. Note also DORA 2025's AI finding: AI adoption now correlates with higher throughput but *worse* stability — an intervention with efficacy and side effects, demanding exactly the net-benefit analysis this repo teaches (see [AI developer productivity](ai-developer-productivity.md)).

## Pitfalls

- **Metric gaming**: deploy counts inflated by no-op releases; CFR deflated by not counting hotfixes as failures. Define events precisely, as HTA defines endpoints.
- **Cross-team league tables**: DORA clusters compare practices, not teams with different risk profiles; a clinical-systems team at "high" may be optimal where "elite" would be reckless.
- **Optimizing one metric**: speed without CFR/reliability is the throughput-instability trade-off — always report the four together (they are a [cost-consequence table](cost-consequence-analysis.md), not a score).

## Sources

- DORA research and reports. <https://dora.dev/>
- 2024 DORA benchmarks summary. <https://octopus.com/devops/metrics/dora-metrics/>
- DORA 2025 State of AI-assisted Software Development. <https://dora.dev/dora-report-2025/>
