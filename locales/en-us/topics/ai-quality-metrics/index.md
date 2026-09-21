# AI Quality Metrics

Metrics for the correctness of AI-generated output: accuracy against ground truth, **faithfulness/groundedness** (is every claim supported by the provided context?), and **hallucination rate** (what fraction of outputs contain unsupported or false content?). In health settings these are not quality niceties — they are harm rates.

## Why it matters

Medical-domain benchmarks have measured hallucination rates **above 60% for ungrounded LLMs** on medical tasks (some open models >80%), while grounding, retrieval, and reasoning modes cut rates dramatically (e.g., GPT-5's thinking mode reduced HealthBench hallucinations 3.6% → 1.6% on one benchmark). A hallucinated dosage or fabricated citation in a clinical workflow is a **false-information event with a harm pathway** — it belongs in the harms arm of any economic model, priced like the false positives of [screening economics](../screening-economics/): every one triggers downstream cost (acting on wrong information, verification labor, medico-legal exposure, eroded trust).

## The math

```
Hallucination rate = outputs containing unsupported/false content / total outputs
  intrinsic:  contradicts the provided context
  extrinsic:  unverifiable fabrication beyond the context

Faithfulness (RAGAS-style) = supported claims in answer / total claims in answer
Context precision/recall   = retrieval quality feeding the generator

Economic weighting — not all hallucinations cost alike:
  expected harm cost = Σ over error types (rate × P(undetected) ×
                       P(acted upon) × cost per acted-upon error)
  The human-review layer sets P(undetected) — and its cost belongs
  in the model too (reviewer minutes × volume).
```

## Worked example

An AI clinical-coding assistant processes 200,000 episodes/year; audit shows 2% of outputs contain a material coding error; human coders catch 85% of those:

```
Errors reaching submission = 200,000 × 0.02 × 0.15 = 600/year
Cost per uncaught error (mis-billing avg + audit exposure) ≈ £250
Expected error cost         = 600 × 250 = £150,000/year
Review cost (2 min × 200k × £0.50/min)  = £200,000/year

Improvement case: retrieval grounding cuts error rate to 0.8%
→ uncaught errors 240, error cost £60,000 (−£90k/yr); review time
  can also drop (sampling instead of full review) — the quality
  investment pays before any speed claim.
```

## Software engineering connection

Treat model quality like test coverage economics, with health-grade discipline: **evaluation sets are your clinical trial** — pre-registered, representative of *your* case mix, refreshed against drift; **grounding beats scale for factual tasks** (retrieval + citation-required prompting is usually the cheapest hallucination reduction available — cf. [inference unit economics](../inference-unit-economics/) for its token overhead); and **publish the operating point**: like [sensitivity/specificity](../clinical-ai-evaluation/), "97% faithful" means nothing without the task distribution and the detection threshold. The review-layer math above is the same [NNT/NNH](../number-needed-to-treat/) arithmetic as any screening gate.

## Pitfalls

- **Benchmark-to-production transplantation**: hallucination rates are wildly task-dependent; your case mix is the only benchmark that counts.
- **Uncosted human review**: "a clinician checks everything" halves the benefit and must appear in the cost line — and vigilance decays (automation complacency), so P(undetected) rises with trust.
- **Optimizing average quality while tail risk carries the harm**: one fabricated allergy note outweighs a thousand awkward phrasings; weight errors by consequence, per the expected-harm formula.

## Sources

- Hallucination evaluation methods and metrics. <https://www.braintrust.dev/articles/ai-hallucination-evaluations-metrics-methods-2026>
- Medical LLM hallucination statistics. <https://sqmagazine.co.uk/llm-hallucination-statistics/>
- RAG faithfulness metrics. <https://www.getmaxim.ai/articles/measuring-llm-hallucinations-the-metrics-that-actually-matter-for-reliable-ai-apps/>
