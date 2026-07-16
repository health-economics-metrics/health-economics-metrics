# Inference Unit Economics

Inference unit economics price AI features by their marginal compute: **cost per token**, rolled up to cost per transaction, per user, per clinical episode. The defining dynamic: LLM prices have fallen roughly **an order of magnitude every 1–2 years** at constant capability — a deflation rate with no precedent in health-technology costing.

## Why it matters

Two consequences follow from the price collapse. Commercially, an AI feature that is marginal today may be trivially profitable in 18 months — and a competitor priced on today's costs will be undercut. For economic evaluation, any cost-effectiveness model for an AI-enabled clinical service that freezes 2024 inference prices **materially overstates ongoing cost** — the analysis needs price-decline scenarios the way drug models handle patent expiry and generic entry. (Reference points from the research: frontier output tokens ~$15–75/M in mid-2026, mid-tier models an order cheaper, GPT-4-level capability down from ~$20/M in 2022 to ~$0.40/M; Epoch AI measured 9×–900×/year declines depending on the capability milestone.)

## The math

```
Cost per call     = input tokens × input rate + output tokens × output rate
Cost per unit     = Σ calls per unit of business output (per triage episode,
                    per drafted letter, per consultation summary)

Blended reality   = base call + retries + RAG context (input-heavy)
                    + evaluation/guardrail calls (often 20–50% overhead)

Price-decline scenario for multi-year models:
  cost_t = cost_0 × d^t, test d ∈ {0.3, 0.5, 0.7}/year in sensitivity analysis
```

## Worked example

An AI discharge-summary service: average summary uses 12,000 input tokens (record context) + 1,200 output, plus a verification pass (6,000 in / 300 out). At $3/M in, $15/M out:

```
Draft:   12,000 × 3/1M + 1,200 × 15/1M  = $0.036 + $0.018 = $0.054
Verify:   6,000 × 3/1M +   300 × 15/1M  = $0.018 + $0.0045 ≈ $0.023
Per summary ≈ $0.077 → per 100,000 summaries/year ≈ $7,700

Against ~20 clinician-minutes saved per summary (≈ £25), inference is
0.25% of the value created — the economics are dominated by everything
EXCEPT the tokens: integration, evaluation, governance, adoption.
```

That conclusion — inference cost is rarely the binding constraint, at current prices, for high-value clinical tasks — is itself the finding worth carrying into pricing meetings.

## Software engineering connection

This is [cloud unit economics](cloud-unit-economics.md) specialized for AI, with three practice notes: **meter per business unit**, not per API call, so the number plugs into [ICER](incremental-cost-effectiveness-ratio.md)/[budget impact](budget-impact-analysis.md) models directly; **watch the input/output asymmetry** (output typically ~4× input price; RAG architectures are input-heavy — architecture choices are pricing choices); and **route by task tier** — matching model capability to task difficulty (cheap models for classification, frontier for synthesis) routinely cuts blended cost 5–10× at equal quality, the software version of using the cheapest effective intervention ([cost-minimization](cost-minimization-analysis.md), equivalence evidenced).

## Pitfalls

- **Frozen-price multi-year models** — overstates cost; but also **assumed-deflation revenue models** — a price war is not a contract; scenario both.
- **Ignoring evaluation overhead**: guardrails, judges, and retries are real tokens, often the majority in regulated settings.
- **Per-token myopia**: latency, rate limits, and context-window constraints carry costs no token price captures.

## Sources

- Epoch AI, LLM inference price trends. <https://epoch.ai/data-insights/llm-inference-price-trends>
- LLM pricing comparisons. <https://www.silicondata.com/blog/llm-cost-per-token>
