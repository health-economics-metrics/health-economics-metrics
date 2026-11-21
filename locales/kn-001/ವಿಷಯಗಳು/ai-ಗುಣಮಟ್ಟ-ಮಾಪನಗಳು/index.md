# AI ಗುಣಮಟ್ಟ ಮಾಪನಗಳು

AI ಉತ್ಪಾದಿತ ಫಲಿತಾಂಶದ ಸರಿತನದ ಮಾಪನಗಳು: ನೆಲ-ಸತ್ಯಕ್ಕೆ ಹೋಲಿಸಿದ ನಿಖರತೆ, **ನಿಷ್ಠೆ/ಆಧಾರಿತತೆ (faithfulness/groundedness)** (ಪ್ರತಿ ಹೇಳಿಕೆಗೂ ಒದಗಿಸಿದ ಸಂದರ್ಭದ ಬೆಂಬಲವಿದೆಯೇ?), ಮತ್ತು **ಭ್ರಮೆ ದರ (hallucination rate)** (ಎಷ್ಟು ಭಾಗ ಫಲಿತಾಂಶಗಳು ಬೆಂಬಲರಹಿತ ಅಥವಾ ಸುಳ್ಳು ವಿಷಯ ಹೊಂದಿವೆ?). ಆರೋಗ್ಯ ಸನ್ನಿವೇಶಗಳಲ್ಲಿ ಇವು ಗುಣಮಟ್ಟದ ಸೊಬಗಲ್ಲ — ಇವು ಹಾನಿ ದರಗಳು.

## ಇದು ಏಕೆ ಮುಖ್ಯ

ವೈದ್ಯಕೀಯ-ಕ್ಷೇತ್ರದ ಮಾನದಂಡಗಳು ವೈದ್ಯಕೀಯ ಕಾರ್ಯಗಳಲ್ಲಿ **ಆಧಾರರಹಿತ LLMಗಳ ಭ್ರಮೆ ದರ 60%ಕ್ಕಿಂತ ಹೆಚ್ಚು** (ಕೆಲವು ಮುಕ್ತ ಮಾದರಿಗಳಲ್ಲಿ >80%) ಎಂದು ಅಳೆದಿವೆ, ಆದರೆ ಆಧಾರೀಕರಣ, ಪುನಃಪಡೆಯುವಿಕೆ ಮತ್ತು ತರ್ಕ ವಿಧಾನಗಳು ದರಗಳನ್ನು ನಾಟಕೀಯವಾಗಿ ಇಳಿಸುತ್ತವೆ (ಉದಾ. ಒಂದು ಮಾನದಂಡದಲ್ಲಿ GPT-5ರ ಚಿಂತನಾ ವಿಧಾನ HealthBench ಭ್ರಮೆಗಳನ್ನು 3.6% → 1.6%ಕ್ಕೆ ಇಳಿಸಿತು). ಕ್ಲಿನಿಕಲ್ ಕಾರ್ಯಪ್ರವಾಹದಲ್ಲಿ ಭ್ರಮೆಯ ಮಾತ್ರೆ ಪ್ರಮಾಣ ಅಥವಾ ಕಲ್ಪಿತ ಉಲ್ಲೇಖ **ಹಾನಿ-ಮಾರ್ಗವಿರುವ ತಪ್ಪು-ಮಾಹಿತಿ ಘಟನೆ** — ಯಾವುದೇ ಆರ್ಥಿಕ ಮಾದರಿಯ ಹಾನಿ ಭಾಗದಲ್ಲಿ ಇದಕ್ಕೆ ಸ್ಥಾನವಿದೆ, [ಸ್ಕ್ರೀನಿಂಗ್ ಅರ್ಥಶಾಸ್ತ್ರ](../ಸ್ಕ್ರೀನಿಂಗ್-ಅರ್ಥಶಾಸ್ತ್ರ/)ದ ಸುಳ್ಳು ಧನಾತ್ಮಕಗಳಂತೆ ಬೆಲೆ ಕಟ್ಟಬೇಕು: ಪ್ರತಿಯೊಂದೂ ಕೆಳಹಂತದ ವೆಚ್ಚವನ್ನು ಪ್ರಚೋದಿಸುತ್ತದೆ (ತಪ್ಪು ಮಾಹಿತಿಯ ಮೇಲೆ ಕ್ರಿಯೆ, ಪರಿಶೀಲನೆಯ ಶ್ರಮ, ವೈದ್ಯಕೀಯ-ಕಾನೂನು ಅಪಾಯ, ಕುಸಿದ ನಂಬಿಕೆ).

## ಗಣಿತ

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

## ಬಿಡಿಸಿದ ಉದಾಹರಣೆ

AI ಕ್ಲಿನಿಕಲ್-ಕೋಡಿಂಗ್ ಸಹಾಯಕ ವರ್ಷಕ್ಕೆ 200,000 ಪ್ರಕರಣಗಳನ್ನು ಸಂಸ್ಕರಿಸುತ್ತದೆ; ಲೆಕ್ಕಪರಿಶೋಧನೆ 2% ಫಲಿತಾಂಶಗಳಲ್ಲಿ ಗಮನಾರ್ಹ ಕೋಡಿಂಗ್ ದೋಷ ತೋರಿಸುತ್ತದೆ; ಮಾನವ ಕೋಡರ್‌ಗಳು ಅವುಗಳಲ್ಲಿ 85% ಹಿಡಿಯುತ್ತಾರೆ:

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

## ಸಾಫ್ಟ್‌ವೇರ್ ಎಂಜಿನಿಯರಿಂಗ್‌ನೊಂದಿಗಿನ ಸಂಬಂಧ

ಮಾದರಿ ಗುಣಮಟ್ಟವನ್ನು ಪರೀಕ್ಷಾ-ವ್ಯಾಪ್ತಿಯ ಅರ್ಥಶಾಸ್ತ್ರದಂತೆ, ಆರೋಗ್ಯ-ದರ್ಜೆಯ ಶಿಸ್ತಿನೊಂದಿಗೆ ಪರಿಗಣಿಸಿ: **ಮೌಲ್ಯಮಾಪನ ಸಮೂಹಗಳೇ ನಿಮ್ಮ ಕ್ಲಿನಿಕಲ್ ಪ್ರಯೋಗ** — ಪೂರ್ವ-ನೋಂದಾಯಿತ, *ನಿಮ್ಮ* ಪ್ರಕರಣ ಮಿಶ್ರಣವನ್ನು ಪ್ರತಿನಿಧಿಸುವ, ವಿಚಲನೆಗೆ (drift) ವಿರುದ್ಧ ನವೀಕರಿಸಿದ; **ವಾಸ್ತವಿಕ ಕಾರ್ಯಗಳಲ್ಲಿ ಗಾತ್ರಕ್ಕಿಂತ ಆಧಾರೀಕರಣ ಮೇಲು** (ಪುನಃಪಡೆಯುವಿಕೆ + ಉಲ್ಲೇಖ-ಕಡ್ಡಾಯ ಪ್ರಾಂಪ್ಟಿಂಗ್ ಸಾಮಾನ್ಯವಾಗಿ ಲಭ್ಯ ಅತಿ ಅಗ್ಗದ ಭ್ರಮೆ ಇಳಿಕೆ — ಅದರ ಟೋಕನ್ ಹೆಚ್ಚುವರಿ ಭಾರಕ್ಕೆ [ಅನುಮಾನ ಘಟಕ ಅರ್ಥಶಾಸ್ತ್ರ](../ಅನುಮಾನ-ಘಟಕ-ಅರ್ಥಶಾಸ್ತ್ರ/) ನೋಡಿ); ಮತ್ತು **ಕಾರ್ಯ ಬಿಂದುವನ್ನು ಪ್ರಕಟಿಸಿ**: [ಸೂಕ್ಷ್ಮತೆ/ವಿಶಿಷ್ಟತೆ](../ಕ್ಲಿನಿಕಲ್-ai-ಮೌಲ್ಯಮಾಪನ/)ಯಂತೆ, ಕಾರ್ಯ ವಿತರಣೆ ಮತ್ತು ಪತ್ತೆ ಮಿತಿ ಇಲ್ಲದೆ "97% ನಿಷ್ಠ" ಎಂಬುದಕ್ಕೆ ಅರ್ಥವಿಲ್ಲ. ಮೇಲಿನ ಪರಿಶೀಲನಾ-ಪದರದ ಗಣಿತ ಯಾವುದೇ ಸ್ಕ್ರೀನಿಂಗ್ ದ್ವಾರದ [NNT/NNH](../ಚಿಕಿತ್ಸೆ-ನೀಡಬೇಕಾದ-ಸಂಖ್ಯೆ/) ಅಂಕಗಣಿತವೇ.

## ಎಡವಟ್ಟುಗಳು

- **ಮಾನದಂಡದಿಂದ ಉತ್ಪಾದನೆಗೆ ಕಸಿ**: ಭ್ರಮೆ ದರಗಳು ಕಾರ್ಯ-ಅವಲಂಬಿತವಾಗಿ ತೀವ್ರವಾಗಿ ಬದಲಾಗುತ್ತವೆ; ನಿಮ್ಮ ಪ್ರಕರಣ ಮಿಶ್ರಣವೇ ಲೆಕ್ಕಕ್ಕೆ ಬರುವ ಏಕೈಕ ಮಾನದಂಡ.
- **ವೆಚ್ಚ ಲೆಕ್ಕಿಸದ ಮಾನವ ಪರಿಶೀಲನೆ**: "ವೈದ್ಯರು ಎಲ್ಲವನ್ನೂ ಪರಿಶೀಲಿಸುತ್ತಾರೆ" ಲಾಭವನ್ನು ಅರ್ಧಕ್ಕಿಳಿಸುತ್ತದೆ ಮತ್ತು ವೆಚ್ಚದ ಸಾಲಿನಲ್ಲಿ ಕಾಣಿಸಬೇಕು — ಜೊತೆಗೆ ಜಾಗರೂಕತೆ ಕ್ಷೀಣಿಸುತ್ತದೆ (ಸ್ವಯಂಚಾಲನ ನಿರಾತಂಕ), ಹೀಗಾಗಿ ನಂಬಿಕೆ ಹೆಚ್ಚಿದಂತೆ P(ಪತ್ತೆಯಾಗದ) ಏರುತ್ತದೆ.
- **ಹಾನಿ ಬಾಲದ ಅಪಾಯದಲ್ಲಿರುವಾಗ ಸರಾಸರಿ ಗುಣಮಟ್ಟವನ್ನು ಉತ್ತಮಗೊಳಿಸುವುದು**: ಒಂದು ಕಲ್ಪಿತ ಅಲರ್ಜಿ ಟಿಪ್ಪಣಿ ಸಾವಿರ ವಿಚಿತ್ರ ವಾಕ್ಯ ರಚನೆಗಳಿಗಿಂತ ಭಾರ; ನಿರೀಕ್ಷಿತ-ಹಾನಿ ಸೂತ್ರದಂತೆ ದೋಷಗಳನ್ನು ಪರಿಣಾಮಕ್ಕೆ ತೂಕ ಮಾಡಿ.

## ಮೂಲಗಳು

- Hallucination evaluation methods and metrics. <https://www.braintrust.dev/articles/ai-hallucination-evaluations-metrics-methods-2026>
- Medical LLM hallucination statistics. <https://sqmagazine.co.uk/llm-hallucination-statistics/>
- RAG faithfulness metrics. <https://www.getmaxim.ai/articles/measuring-llm-hallucinations-the-metrics-that-actually-matter-for-reliable-ai-apps/>
