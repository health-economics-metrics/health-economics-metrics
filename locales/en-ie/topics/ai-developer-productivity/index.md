# AI Developer Productivity

Metrics for what AI coding assistance actually does to engineering output: suggestion acceptance rates, controlled-study speedups, PR throughput, and code retention. The evidence base is genuinely contradictory — which makes it a perfect case study in the efficacy-vs-effectiveness distinction health economics was built to handle.

## Why it matters

The two most-cited controlled studies point in opposite directions:

- **Peng et al. 2023 (GitHub Copilot RCT)**: developers completed a greenfield HTTP-server task **55.8% faster** with Copilot (1h11m vs 2h41m, n=95).
- **METR 2025 RCT**: experienced open-source developers working on *their own mature repositories* were **19% slower** with early-2025 AI tools (16 devs, 246 tasks) — while *believing* they were 20% faster.

Both are good studies. The contradiction is the finding: greenfield-task efficacy does not transfer to mature-codebase effectiveness, and *perceived* benefit cannot substitute for measured benefit. Medicine has names for both phenomena (explanatory vs pragmatic trials; the placebo problem) and machinery for handling them.

## The maths

```
Acceptance rate  = accepted suggestions / shown suggestions
                   (GitHub telemetry ~30% avg; varies: SQL 45%, Python 35%, JS 28%)
Retention rate   = AI code surviving to merge / accepted AI code (~88% reported)
Speedup          = (t_control − t_AI) / t_control  (from controlled comparison ONLY)
Throughput delta = Δ merged PRs/dev/week (GitHub/Accenture field data: +8.7%)

Value model     = devs × time saved × loaded rate × utilisation factor
                  — every term needs local measurement; see the tornado in
                  sensitivity-analysis.md, where time-saved dominates all
                  other parameters combined
```

## Worked example

An org of 500 developers pilots an assistant with a proper control (matched teams, 3 months, pre-registered metrics):

```
Pilot result: PR cycle time −18%; merged PRs +6%; CFR unchanged;
              self-reported time saved 45 min/day; measured task-level ≈ 15 min/day

Value the MEASURED number: 500 × 0.25h × 220d × £60 × 0.6 utilisation
                          ≈ £990,000/year capacity (non-cash-releasing)
Cost: 500 × £39/mo × 12 ≈ £234,000/year
Net capacity ratio ≈ 4:1 — fundable, at one-third the self-reported claim.
```

The 3× gap between perceived and measured is the METR finding operating in the wild; budgeting on self-report would have tripled the benefit line.

## Software engineering connection

The health-economics imports for anyone evaluating AI tooling: run **pragmatic trials** (your codebase, your engineers, real tickets — not vendor demo tasks); treat **acceptance rate as a proxy, not an outcome** (it is the [PPV](../clinical-ai-evaluation/) of suggestions from the developer's view — high acceptance with low retention is overdiagnosis); pair every throughput gain with a **stability check** (DORA 2025: AI lifts throughput, hurts stability — an intervention with side effects needs net-benefit analysis, per [DORA metrics](../dora-metrics/)); and classify the benefit honestly as capacity ([cash-releasing vs non-cash-releasing](../cash-releasing-vs-non-cash-releasing/)).

## Pitfalls

- **Vendor-study transplantation**: greenfield RCT numbers applied to legacy-codebase work — the exact error the METR study exposed.
- **Self-report as measurement**: the 20-percentage-point perception gap is the largest known bias in this literature.
- **Activity inflation**: more PRs and more code are Activity, not outcomes ([SPACE](../space-and-devex/)); pair with rework and CFR.
- **Ignoring the learning curve**: week-2 measurements capture novelty effects in either direction; measure at steady state ([time horizon](../time-horizon/)).

## Sources

- Peng S, et al. "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot." 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity." 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA 2025 report. <https://dora.dev/dora-report-2025/>
