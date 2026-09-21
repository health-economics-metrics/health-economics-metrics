# Health Economics Metrics

A comprehensive introduction to health economics math, examples, and reasoning, written for software engineers building for national health service organizations worldwide. Each file covers one metric or concept: definition, why it matters, the math, a worked example, the software engineering connection, pitfalls, and sources.

New here? Start with [opportunity cost](locales/en-gb-oxendict/topics/opportunity-cost/), [quality-adjusted life year](locales/en-gb-oxendict/topics/quality-adjusted-life-year/), and [cost of delay](locales/en-gb-oxendict/topics/cost-of-delay/) — the three ideas everything else builds on.

## Economic reasoning foundations

- [Opportunity cost](locales/en-gb-oxendict/topics/opportunity-cost/) — the value of the best alternative forgone; why fixed budgets make every choice a displacement
- [Discounting and time preference](locales/en-gb-oxendict/topics/discounting-and-time-preference/) — present values, the 3.5% Green Book/NICE rate
- [Analysis perspective](locales/en-gb-oxendict/topics/analysis-perspective/) — payer vs provider vs societal: whose costs count
- [Time horizon](locales/en-gb-oxendict/topics/time-horizon/) — how long to count costs and effects, and horizon gaming
- [Marginal vs average cost](locales/en-gb-oxendict/topics/marginal-vs-average-cost/) — why freeing a bed doesn't save its average cost
- [Cash-releasing vs non-cash-releasing savings](locales/en-gb-oxendict/topics/cash-releasing-vs-non-cash-releasing/) — the honesty test for every "time saved" claim
- [Sensitivity analysis](locales/en-gb-oxendict/topics/sensitivity-analysis/) — tornado diagrams; which assumption carries your case
- [Probabilistic sensitivity analysis](locales/en-gb-oxendict/topics/probabilistic-sensitivity-analysis/) — Monte Carlo, CEACs, probability of being right
- [Expected value of perfect information](locales/en-gb-oxendict/topics/expected-value-of-perfect-information/) — pricing the pilot before you run it
- [Dominance and the efficiency frontier](locales/en-gb-oxendict/topics/dominance-and-efficiency-frontier/) — eliminating options nobody should pick

## Outcome measures

- [Quality-adjusted life year (QALY)](locales/en-gb-oxendict/topics/quality-adjusted-life-year/) — the common currency of health value
- [Disability-adjusted life year (DALY)](locales/en-gb-oxendict/topics/disability-adjusted-life-year/) — the burden-side mirror; global health's metric
- [EQ-5D](locales/en-gb-oxendict/topics/eq-5d/) — the instrument behind most QALY utility weights
- [Incremental cost-effectiveness ratio (ICER)](locales/en-gb-oxendict/topics/incremental-cost-effectiveness-ratio/) — extra cost per extra unit of health
- [Willingness-to-pay thresholds](locales/en-gb-oxendict/topics/willingness-to-pay-thresholds/) — NICE £20–30k/QALY and the world's other lines
- [Net monetary benefit (NMB)](locales/en-gb-oxendict/topics/net-monetary-benefit/) — value minus cost, done properly
- [Life-years gained](locales/en-gb-oxendict/topics/life-years-gained/) — survival math, and the evLYG equity variant
- [Health-adjusted life expectancy (HALE)](locales/en-gb-oxendict/topics/health-adjusted-life-expectancy/) — population-level healthy-years accounting
- [QALY shortfall and severity modifiers](locales/en-gb-oxendict/topics/qaly-shortfall-and-severity-modifiers/) — why sicker populations' QALYs count more

## Economic analysis types

- [Cost-effectiveness analysis (CEA)](locales/en-gb-oxendict/topics/cost-effectiveness-analysis/) — cost per natural unit of outcome
- [Cost-utility analysis (CUA)](locales/en-gb-oxendict/topics/cost-utility-analysis/) — cost per QALY; comparing unlike interventions
- [Cost-benefit analysis (CBA)](locales/en-gb-oxendict/topics/cost-benefit-analysis/) — everything in money; Green Book NPV
- [Cost-minimization analysis (CMA)](locales/en-gb-oxendict/topics/cost-minimization-analysis/) — cheapest option, after proving equivalence
- [Cost-consequence analysis (CCA)](locales/en-gb-oxendict/topics/cost-consequence-analysis/) — the disaggregated table; NICE's preference for digital health
- [Budget impact analysis (BIA)](locales/en-gb-oxendict/topics/budget-impact-analysis/) — affordability, as distinct from value
- [Return on investment (ROI)](locales/en-gb-oxendict/topics/return-on-investment/) — the shared metric, with declared parameters
- [Social return on investment (SROI)](locales/en-gb-oxendict/topics/social-return-on-investment/) — monetizing what markets don't price

## Health system operational economics

- [Bed days saved](locales/en-gb-oxendict/topics/bed-days-saved/) — the workhorse benefit, and its valuation traps
- [Length of stay](locales/en-gb-oxendict/topics/length-of-stay/) — the hospital's cycle time
- [Readmission rate](locales/en-gb-oxendict/topics/readmission-rate/) — the health system's change failure rate
- [Did-not-attend (DNA) rate](locales/en-gb-oxendict/topics/did-not-attend-rate/) — missed appointments; the purest waste metric
- [Emergency attendance avoidance](locales/en-gb-oxendict/topics/emergency-attendance-avoidance/) — upstream intervention economics
- [National tariff and unit costs](locales/en-gb-oxendict/topics/national-tariff-and-unit-costs/) — the NHS price book and costing infrastructure
- [Referral to treatment (RTT)](locales/en-gb-oxendict/topics/referral-to-treatment/) — the 18-week standard as a lead-time metric
- [Waiting list impact](locales/en-gb-oxendict/topics/waiting-list-impact/) — converting saved hours into patients seen
- [Practitioner time](locales/en-gb-oxendict/topics/practitioner-time/) — valuing bottleneck capacity, not wages
- [Workforce retention](locales/en-gb-oxendict/topics/workforce-retention/) — turnover costs and burnout economics
- [Avoidable outsourcing costs](locales/en-gb-oxendict/topics/avoidable-outsourcing-costs/) — repatriating premium-rate work
- [Downstream resource optimization](locales/en-gb-oxendict/topics/downstream-resource-optimization/) — unblocking the role everyone waits on
- [Earlier intervention](locales/en-gb-oxendict/topics/earlier-intervention/) — the economics of treating before progression
- [Value-generating capacity (operational turnaround)](locales/en-gb-oxendict/topics/value-generating-capacity-operational-turnaround/) — minting capacity without hiring
- [Hard cash-releasing savings (deficit defense)](locales/en-gb-oxendict/topics/hard-cash-releasing-savings-deficit-defence/) — deleting budget lines; the CFO's metric

## HTA frameworks and prevention economics

- [Health technology assessment (HTA)](locales/en-gb-oxendict/topics/health-technology-assessment/) — NICE, ICER (US), CADTH: who decides what's worth buying
- [NICE Evidence Standards Framework](locales/en-gb-oxendict/topics/nice-evidence-standards-framework/) — risk-tiered evidence requirements for digital health
- [Germany's DiGA fast-track](locales/en-gb-oxendict/topics/diga-fast-track/) — apps on prescription; provisional listing with an evidence deadline
- [Number needed to treat (NNT)](locales/en-gb-oxendict/topics/number-needed-to-treat/) — effort-per-benefit units that keep claims honest
- [Prevention economics](locales/en-gb-oxendict/topics/prevention-economics/) — why prevention is cost-effective but rarely cost-saving
- [Screening economics](locales/en-gb-oxendict/topics/screening-economics/) — Wilson–Jungner, PPV collapse at low prevalence, alert fatigue
- [Avoided downstream costs](locales/en-gb-oxendict/topics/avoided-downstream-costs/) — cost offsets and the rules that make them credible

## Software engineering and digital delivery

- [Cost of delay](locales/en-gb-oxendict/topics/cost-of-delay/) — £/week or QALYs/week of non-delivery; the master bridge metric
- [DORA metrics](locales/en-gb-oxendict/topics/dora-metrics/) — delivery performance, translated into health-economics terms
- [Flow metrics](locales/en-gb-oxendict/topics/flow-metrics/) — Little's Law, WIP, flow efficiency; the shared queueing math of hospitals and pipelines
- [WSJF and CD3](locales/en-gb-oxendict/topics/wsjf-and-cd3/) — value-density prioritization; the backlog as a QALY league table
- [SPACE and DevEx](locales/en-gb-oxendict/topics/space-and-devex/) — multi-dimensional productivity; the EQ-5D lesson for engineering metrics
- [Technical debt](locales/en-gb-oxendict/topics/technical-debt/) — principal, interest, and chronic-disease economics for codebases
- [Total cost of ownership (TCO)](locales/en-gb-oxendict/topics/total-cost-of-ownership/) — maintenance is 50–80%; the naive-drug-price error in software
- [Cloud unit economics (FinOps)](locales/en-gb-oxendict/topics/cloud-unit-economics/) — cost per unit of output; the digital service's reference cost
- [Build vs buy](locales/en-gb-oxendict/topics/build-vs-buy/) — risk-adjusted comparison with the delay term priced
- [Benefits realization](locales/en-gb-oxendict/topics/benefits-realization/) — auditing that forecast benefits actually happened
- [GDS service metrics](locales/en-gb-oxendict/topics/gds-service-metrics/) — cost per transaction, satisfaction, completion, take-up

## AI acceleration

- [AI developer productivity](locales/en-gb-oxendict/topics/ai-developer-productivity/) — Copilot RCT vs METR RCT; efficacy vs effectiveness
- [AI return on investment](locales/en-gb-oxendict/topics/ai-return-on-investment/) — the 95%-no-return finding and what the 5% did differently
- [Inference unit economics](locales/en-gb-oxendict/topics/inference-unit-economics/) — cost per token, and modeling relentless price decline
- [AI quality metrics](locales/en-gb-oxendict/topics/ai-quality-metrics/) — hallucination rates as harm rates with a price
- [Clinical AI evaluation](locales/en-gb-oxendict/topics/clinical-ai-evaluation/) — sensitivity, specificity, AUROC, and why prevalence rules the economics
- [AI regulatory evaluation](locales/en-gb-oxendict/topics/ai-regulatory-evaluation/) — FDA SaMD, PCCPs, and the economics of model updates

## Consumer health apps and devices

- [Engagement metrics](locales/en-gb-oxendict/topics/engagement-metrics/) — engagement as clinical dose
- [Retention and churn](locales/en-gb-oxendict/topics/retention-and-churn/) — the law of attrition; retention curves as treatment windows
- [Activation and uptake](locales/en-gb-oxendict/topics/activation-and-uptake/) — the front gates of the value funnel
- [Adherence and persistence](locales/en-gb-oxendict/topics/adherence-and-persistence/) — MPR, PDC, effective engagement, minimum effective dose
- [Patient-reported outcomes](locales/en-gb-oxendict/topics/patient-reported-outcomes/) — PROMs, PREMs, and the MCID honesty bar
- [Digital endpoints and biomarkers](locales/en-gb-oxendict/topics/digital-endpoints-and-biomarkers/) — from sensor telemetry to regulator-grade evidence
- [Wearable validation](locales/en-gb-oxendict/topics/wearable-validation/) — MAPE, agreement statistics, wear-time, completeness
- [Remote patient monitoring economics](locales/en-gb-oxendict/topics/remote-patient-monitoring-economics/) — CPT code stacks and hospital-at-home substitution
- [Health app unit economics](locales/en-gb-oxendict/topics/health-app-unit-economics/) — CAC, LTV, PMPM, and ROI vs VOI
- [Reach and equity](locales/en-gb-oxendict/topics/reach-and-equity/) — RE-AIM; population impact = reach × effectiveness

## Benchmark freshness

Many quoted figures refresh annually (NHS unit costs, payment scheme prices, DORA clusters, DiGA counts, LLM prices). Each doc dates its benchmarks in-line; re-verify before using in a live business case.

## Claude skills

This repo ships two [Claude Skills](https://code.claude.com/docs/en/skills) — drop either into a project's `.claude/skills/` (or point Claude at this repo's `skills/`) to put this book to work directly inside an agentic coding session:

- [health-economics-metrics-skill](https://github.com/health-economics-metrics/health-economics-metrics/blob/main/skills/health-economics-metrics-skill/SKILL.md) — for general use: explain a concept, compute a metric from your own numbers, or assemble a multi-metric business case, grounded in this book's formulas, worked examples, and pitfalls rather than generic recall.
- [health-economics-metrics-maintainer-skill](https://github.com/health-economics-metrics/health-economics-metrics/blob/main/skills/health-economics-metrics-maintainer-skill/SKILL.md) — for maintainers of this repo: the per-topic template, README indexing conventions, and a link/sync validation checklist for adding or editing topics.
