# Health Economics Metrics

A comprehensive introduction to health economics math, examples, and reasoning, written for software engineers building for national health service organizations worldwide. Each file covers one metric or concept: definition, why it matters, the math, a worked example, the software engineering connection, pitfalls, and sources.

New here? Start with [opportunity cost](topics/opportunity-cost.md), [quality-adjusted life year](topics/quality-adjusted-life-year.md), and [cost of delay](topics/cost-of-delay.md) — the three ideas everything else builds on.

## Economic reasoning foundations

- [Opportunity cost](topics/opportunity-cost.md) — the value of the best alternative forgone; why fixed budgets make every choice a displacement
- [Discounting and time preference](topics/discounting-and-time-preference.md) — present values, the 3.5% Green Book/NICE rate
- [Analysis perspective](topics/analysis-perspective.md) — payer vs provider vs societal: whose costs count
- [Time horizon](topics/time-horizon.md) — how long to count costs and effects, and horizon gaming
- [Marginal vs average cost](topics/marginal-vs-average-cost.md) — why freeing a bed doesn't save its average cost
- [Cash-releasing vs non-cash-releasing savings](topics/cash-releasing-vs-non-cash-releasing.md) — the honesty test for every "time saved" claim
- [Sensitivity analysis](topics/sensitivity-analysis.md) — tornado diagrams; which assumption carries your case
- [Probabilistic sensitivity analysis](topics/probabilistic-sensitivity-analysis.md) — Monte Carlo, CEACs, probability of being right
- [Expected value of perfect information](topics/expected-value-of-perfect-information.md) — pricing the pilot before you run it
- [Dominance and the efficiency frontier](topics/dominance-and-efficiency-frontier.md) — eliminating options nobody should pick

## Outcome measures

- [Quality-adjusted life year (QALY)](topics/quality-adjusted-life-year.md) — the common currency of health value
- [Disability-adjusted life year (DALY)](topics/disability-adjusted-life-year.md) — the burden-side mirror; global health's metric
- [EQ-5D](topics/eq-5d.md) — the instrument behind most QALY utility weights
- [Incremental cost-effectiveness ratio (ICER)](topics/incremental-cost-effectiveness-ratio.md) — extra cost per extra unit of health
- [Willingness-to-pay thresholds](topics/willingness-to-pay-thresholds.md) — NICE £20–30k/QALY and the world's other lines
- [Net monetary benefit (NMB)](topics/net-monetary-benefit.md) — value minus cost, done properly
- [Life-years gained](topics/life-years-gained.md) — survival math, and the evLYG equity variant
- [Health-adjusted life expectancy (HALE)](topics/health-adjusted-life-expectancy.md) — population-level healthy-years accounting
- [QALY shortfall and severity modifiers](topics/qaly-shortfall-and-severity-modifiers.md) — why sicker populations' QALYs count more

## Economic analysis types

- [Cost-effectiveness analysis (CEA)](topics/cost-effectiveness-analysis.md) — cost per natural unit of outcome
- [Cost-utility analysis (CUA)](topics/cost-utility-analysis.md) — cost per QALY; comparing unlike interventions
- [Cost-benefit analysis (CBA)](topics/cost-benefit-analysis.md) — everything in money; Green Book NPV
- [Cost-minimization analysis (CMA)](topics/cost-minimization-analysis.md) — cheapest option, after proving equivalence
- [Cost-consequence analysis (CCA)](topics/cost-consequence-analysis.md) — the disaggregated table; NICE's preference for digital health
- [Budget impact analysis (BIA)](topics/budget-impact-analysis.md) — affordability, as distinct from value
- [Return on investment (ROI)](topics/return-on-investment.md) — the shared metric, with declared parameters
- [Social return on investment (SROI)](topics/social-return-on-investment.md) — monetizing what markets don't price

## Health system operational economics

- [Bed days saved](topics/bed-days-saved.md) — the workhorse benefit, and its valuation traps
- [Length of stay](topics/length-of-stay.md) — the hospital's cycle time
- [Readmission rate](topics/readmission-rate.md) — the health system's change failure rate
- [Did-not-attend (DNA) rate](topics/did-not-attend-rate.md) — missed appointments; the purest waste metric
- [Emergency attendance avoidance](topics/emergency-attendance-avoidance.md) — upstream intervention economics
- [National tariff and unit costs](topics/national-tariff-and-unit-costs.md) — the NHS price book and costing infrastructure
- [Referral to treatment (RTT)](topics/referral-to-treatment.md) — the 18-week standard as a lead-time metric
- [Waiting list impact](topics/waiting-list-impact.md) — converting saved hours into patients seen
- [Practitioner time](topics/practitioner-time.md) — valuing bottleneck capacity, not wages
- [Workforce retention](topics/workforce-retention.md) — turnover costs and burnout economics
- [Avoidable outsourcing costs](topics/avoidable-outsourcing-costs.md) — repatriating premium-rate work
- [Downstream resource optimization](topics/downstream-resource-optimization.md) — unblocking the role everyone waits on
- [Earlier intervention](topics/earlier-intervention.md) — the economics of treating before progression
- [Value-generating capacity (operational turnaround)](topics/value-generating-capacity-operational-turnaround.md) — minting capacity without hiring
- [Hard cash-releasing savings (deficit defense)](topics/hard-cash-releasing-savings-deficit-defense.md) — deleting budget lines; the CFO's metric

## HTA frameworks and prevention economics

- [Health technology assessment (HTA)](topics/health-technology-assessment.md) — NICE, ICER (US), CADTH: who decides what's worth buying
- [NICE Evidence Standards Framework](topics/nice-evidence-standards-framework.md) — risk-tiered evidence requirements for digital health
- [Germany's DiGA fast-track](topics/diga-fast-track.md) — apps on prescription; provisional listing with an evidence deadline
- [Number needed to treat (NNT)](topics/number-needed-to-treat.md) — effort-per-benefit units that keep claims honest
- [Prevention economics](topics/prevention-economics.md) — why prevention is cost-effective but rarely cost-saving
- [Screening economics](topics/screening-economics.md) — Wilson–Jungner, PPV collapse at low prevalence, alert fatigue
- [Avoided downstream costs](topics/avoided-downstream-costs.md) — cost offsets and the rules that make them credible

## Software engineering and digital delivery

- [Cost of delay](topics/cost-of-delay.md) — £/week or QALYs/week of non-delivery; the master bridge metric
- [DORA metrics](topics/dora-metrics.md) — delivery performance, translated into health-economics terms
- [Flow metrics](topics/flow-metrics.md) — Little's Law, WIP, flow efficiency; the shared queueing math of hospitals and pipelines
- [WSJF and CD3](topics/wsjf-and-cd3.md) — value-density prioritization; the backlog as a QALY league table
- [SPACE and DevEx](topics/space-and-devex.md) — multi-dimensional productivity; the EQ-5D lesson for engineering metrics
- [Technical debt](topics/technical-debt.md) — principal, interest, and chronic-disease economics for codebases
- [Total cost of ownership (TCO)](topics/total-cost-of-ownership.md) — maintenance is 50–80%; the naive-drug-price error in software
- [Cloud unit economics (FinOps)](topics/cloud-unit-economics.md) — cost per unit of output; the digital service's reference cost
- [Build vs buy](topics/build-vs-buy.md) — risk-adjusted comparison with the delay term priced
- [Benefits realization](topics/benefits-realization.md) — auditing that forecast benefits actually happened
- [GDS service metrics](topics/gds-service-metrics.md) — cost per transaction, satisfaction, completion, take-up

## AI acceleration

- [AI developer productivity](topics/ai-developer-productivity.md) — Copilot RCT vs METR RCT; efficacy vs effectiveness
- [AI return on investment](topics/ai-return-on-investment.md) — the 95%-no-return finding and what the 5% did differently
- [Inference unit economics](topics/inference-unit-economics.md) — cost per token, and modeling relentless price decline
- [AI quality metrics](topics/ai-quality-metrics.md) — hallucination rates as harm rates with a price
- [Clinical AI evaluation](topics/clinical-ai-evaluation.md) — sensitivity, specificity, AUROC, and why prevalence rules the economics
- [AI regulatory evaluation](topics/ai-regulatory-evaluation.md) — FDA SaMD, PCCPs, and the economics of model updates

## Consumer health apps and devices

- [Engagement metrics](topics/engagement-metrics.md) — engagement as clinical dose
- [Retention and churn](topics/retention-and-churn.md) — the law of attrition; retention curves as treatment windows
- [Activation and uptake](topics/activation-and-uptake.md) — the front gates of the value funnel
- [Adherence and persistence](topics/adherence-and-persistence.md) — MPR, PDC, effective engagement, minimum effective dose
- [Patient-reported outcomes](topics/patient-reported-outcomes.md) — PROMs, PREMs, and the MCID honesty bar
- [Digital endpoints and biomarkers](topics/digital-endpoints-and-biomarkers.md) — from sensor telemetry to regulator-grade evidence
- [Wearable validation](topics/wearable-validation.md) — MAPE, agreement statistics, wear-time, completeness
- [Remote patient monitoring economics](topics/remote-patient-monitoring-economics.md) — CPT code stacks and hospital-at-home substitution
- [Health app unit economics](topics/health-app-unit-economics.md) — CAC, LTV, PMPM, and ROI vs VOI
- [Reach and equity](topics/reach-and-equity.md) — RE-AIM; population impact = reach × effectiveness

## Benchmark freshness

Many quoted figures refresh annually (NHS unit costs, payment scheme prices, DORA clusters, DiGA counts, LLM prices). Each doc dates its benchmarks in-line; re-verify before using in a live business case.

## Claude skills

This repo ships two [Claude Skills](https://code.claude.com/docs/en/skills) — drop either into a project's `.claude/skills/` (or point Claude at this repo's `skills/`) to put this book to work directly inside an agentic coding session:

- [health-economics-metrics-skill](skills/health-economics-metrics-skill/SKILL.md) — for general use: explain a concept, compute a metric from your own numbers, or assemble a multi-metric business case, grounded in this book's formulas, worked examples, and pitfalls rather than generic recall.
- [health-economics-metrics-maintainer-skill](skills/health-economics-metrics-maintainer-skill/SKILL.md) — for maintainers of this repo: the per-topic template, README indexing conventions, and a link/sync validation checklist for adding or editing topics.
