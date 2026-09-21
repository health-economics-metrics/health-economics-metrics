# AI Return on Investment

AI ROI is the measurable P&L return attributable to AI initiatives. The sobering benchmark: MIT's 2025 "GenAI Divide" research found that despite $30–40B of enterprise GenAI investment, **~95% of pilots showed no measurable P&L return** — and the successful 5% shared identifiable habits.

## Why it matters

Health systems have a name for the AI-pilot pattern: **pilotitis** — the NHS graveyard of promising apps piloted forever and scaled never. The MIT findings map cleanly onto what health technology assessment already knows: value claims need pre-specified endpoints, attribution needs comparators, and "everyone feels it's helping" is not a benefit line. The successful minority in the MIT data concentrated in back-office automation with trackable cost baselines, and **purchased tools succeeded ~67% of the time versus internal builds at roughly a third of that** — priors that belong in every AI investment case (see [build vs buy](../build-vs-buy/)).

## The math

```
AI ROI = (attributable benefit − total AI cost) / total AI cost

Total AI cost = licenses/inference (see inference-unit-economics.md)
              + integration + data readiness + evaluation
              + workflow redesign + governance/assurance
              (the license is typically the minority of the denominator)

Attributable benefit: measured against a baseline or control, classed
cash / capacity / quality per cash-releasing-vs-non-cash-releasing.md
```

## Worked example

A hospital group deploys AI for two use cases:

```
Use case A — clinical-letter drafting (back office, trackable):
  baseline: outsourced transcription £380k/yr
  after:    transcription contract canceled; clinician review time +£60k
  AI cost:  £120k/yr all-in
  ROI = (380k − 60k − 120k) / 120k ≈ 167% — cash-releasing, auditable ✓

Use case B — "AI copilot for clinicians" (broad, untracked):
  benefit claim: "saves time across 4,000 staff" — no baseline captured
  measured P&L effect: none demonstrable
  → the 95% bucket, regardless of whether it actually helps
```

The difference is not the AI's quality — it is whether the benefit had a **baseline, an owner, and a budget line** ([benefits realization](../benefits-realization/)).

## Software engineering connection

The HTA-shaped playbook for AI investment: **stage the evidence like the [NICE ESF tiers](../nice-evidence-standards-framework/)** — demo-grade evidence for low-stakes tools, controlled pilots before org-wide spend, with rollout gates pre-registered ([DiGA's](../diga-fast-track/) provisional-listing-with-deadline pattern); **count cost avoidance the way health economics counts demand avoidance** — real only when a specific budget line moves; and **price the pilot itself with [EVPI](../expected-value-of-perfect-information/)** — a pilot that can't change the rollout decision is worth £0. For the developer-tools slice specifically, see [AI developer productivity](../ai-developer-productivity/).

## Pitfalls

- **Benefit diffusion**: value spread thin across thousands of users is unmeasurable by construction; pick use cases with concentrated, trackable baselines.
- **License-only costing**: integration, evaluation, and workflow redesign usually dominate the true denominator.
- **Attribution theft**: AI deployed alongside process redesign claims the whole delta.
- **Sunk-pilot escalation**: extending failed pilots because stopping admits failure — the sunset date must be pre-agreed.

## Sources

- MIT Project NANDA "GenAI Divide" coverage. <https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/>
- MIT GenAI ROI findings summary. <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- MIT Technology Review, finding ROI on AI. <https://www.technologyreview.com/2025/10/28/1126693/finding-return-on-ai-investments-across-industries/>
