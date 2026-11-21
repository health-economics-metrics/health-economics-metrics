# AI ಹೂಡಿಕೆಯ ಮೇಲಿನ ಪ್ರತಿಫಲ

AI ROI ಎಂದರೆ AI ಉಪಕ್ರಮಗಳಿಗೆ ಆರೋಪಿಸಬಹುದಾದ ಅಳೆಯಬಹುದಾದ P&L ಪ್ರತಿಫಲ. ಎಚ್ಚರಿಕೆಯ ಮಾನದಂಡ: MITಯ 2025 "GenAI Divide" ಸಂಶೋಧನೆ ಉದ್ಯಮ GenAIಯಲ್ಲಿ $30–40B ಹೂಡಿಕೆಯ ಹೊರತಾಗಿಯೂ **~95% ಪ್ರಾಯೋಗಿಕ ಯೋಜನೆಗಳು ಅಳೆಯಬಹುದಾದ P&L ಪ್ರತಿಫಲ ತೋರಿಸಲಿಲ್ಲ** ಎಂದು ಕಂಡುಕೊಂಡಿತು — ಯಶಸ್ವಿ 5% ಗುರುತಿಸಬಹುದಾದ ಅಭ್ಯಾಸಗಳನ್ನು ಹಂಚಿಕೊಂಡಿದ್ದವು.

## ಇದು ಏಕೆ ಮುಖ್ಯ

AI-ಪೈಲಟ್ ಮಾದರಿಗೆ ಆರೋಗ್ಯ ವ್ಯವಸ್ಥೆಗಳಲ್ಲಿ ಹೆಸರಿದೆ: **ಪೈಲಟೈಟಿಸ್ (pilotitis)** — ಭರವಸೆಯ ಆ್ಯಪ್‌ಗಳನ್ನು ಶಾಶ್ವತವಾಗಿ ಪ್ರಾಯೋಗಿಕವಾಗಿ ನಡೆಸಿ ಎಂದಿಗೂ ವಿಸ್ತರಿಸದ NHS ಸ್ಮಶಾನ. MIT ಸಂಶೋಧನೆಗಳು ಆರೋಗ್ಯ ತಂತ್ರಜ್ಞಾನ ಮೌಲ್ಯಮಾಪನ ಈಗಾಗಲೇ ಬಲ್ಲದ್ದಕ್ಕೆ ನೇರವಾಗಿ ಹೊಂದುತ್ತವೆ: ಮೌಲ್ಯ ಹೇಳಿಕೆಗಳಿಗೆ ಪೂರ್ವ-ನಿರ್ದಿಷ್ಟ ಅಂತಿಮ ಬಿಂದುಗಳು ಬೇಕು, ಆರೋಪಣೆಗೆ ಹೋಲಿಕೆದಾರರು ಬೇಕು, ಮತ್ತು "ಎಲ್ಲರಿಗೂ ಸಹಾಯವಾಗುತ್ತಿದೆ ಎನಿಸುತ್ತದೆ" ಲಾಭದ ಸಾಲಲ್ಲ. MIT ದತ್ತಾಂಶದ ಯಶಸ್ವಿ ಅಲ್ಪಸಂಖ್ಯೆ ಅನುಸರಿಸಬಹುದಾದ ವೆಚ್ಚ ಮೂಲರೇಖೆಗಳಿರುವ ಹಿನ್ನೆಲೆ-ಕಚೇರಿ ಸ್ವಯಂಚಾಲನದಲ್ಲಿ ಕೇಂದ್ರೀಕರಿಸಿತ್ತು, ಮತ್ತು **ಖರೀದಿಸಿದ ಸಾಧನಗಳು ~67% ಸಮಯ ಯಶಸ್ವಿಯಾದವು, ಆಂತರಿಕ ನಿರ್ಮಾಣಗಳು ಅದರ ಸುಮಾರು ಮೂರನೇ ಒಂದು ಭಾಗ** — ಪ್ರತಿ AI ಹೂಡಿಕೆ ಪ್ರಕರಣಕ್ಕೂ ಸೇರಬೇಕಾದ ಪೂರ್ವಭಾವಿ ಅಂದಾಜುಗಳು ([ನಿರ್ಮಿಸು vs ಖರೀದಿಸು](../ನಿರ್ಮಿಸು-vs-ಖರೀದಿಸು/) ನೋಡಿ).

## ಗಣಿತ

```
AI ROI = (attributable benefit − total AI cost) / total AI cost

Total AI cost = licences/inference (see inference-unit-economics.md)
              + integration + data readiness + evaluation
              + workflow redesign + governance/assurance
              (the licence is typically the minority of the denominator)

Attributable benefit: measured against a baseline or control, classed
cash / capacity / quality per cash-releasing-vs-non-cash-releasing.md
```

## ಬಿಡಿಸಿದ ಉದಾಹರಣೆ

ಆಸ್ಪತ್ರೆ ಸಮೂಹ ಎರಡು ಬಳಕೆ ಪ್ರಕರಣಗಳಿಗೆ AI ನಿಯೋಜಿಸುತ್ತದೆ:

```
Use case A — clinical-letter drafting (back office, trackable):
  baseline: outsourced transcription £380k/yr
  after:    transcription contract cancelled; clinician review time +£60k
  AI cost:  £120k/yr all-in
  ROI = (380k − 60k − 120k) / 120k ≈ 167% — cash-releasing, auditable ✓

Use case B — "AI copilot for clinicians" (broad, untracked):
  benefit claim: "saves time across 4,000 staff" — no baseline captured
  measured P&L effect: none demonstrable
  → the 95% bucket, regardless of whether it actually helps
```

ವ್ಯತ್ಯಾಸ AIಯ ಗುಣಮಟ್ಟದಲ್ಲ — ಲಾಭಕ್ಕೆ **ಮೂಲರೇಖೆ, ಮಾಲೀಕ ಮತ್ತು ಬಜೆಟ್ ಸಾಲು** ಇತ್ತೇ ಎಂಬುದು ([ಲಾಭ ಸಾಕ್ಷಾತ್ಕಾರ](../ಲಾಭ-ಸಾಕ್ಷಾತ್ಕಾರ/)).

## ಸಾಫ್ಟ್‌ವೇರ್ ಎಂಜಿನಿಯರಿಂಗ್‌ನೊಂದಿಗಿನ ಸಂಬಂಧ

AI ಹೂಡಿಕೆಗೆ HTA-ರೂಪದ ಕೈಪಿಡಿ: **ಸಾಕ್ಷ್ಯವನ್ನು [NICE ESF ಹಂತ](../nice-ಸಾಕ್ಷ್ಯ-ಮಾನದಂಡಗಳ-ಚೌಕಟ್ಟು/)ಗಳಂತೆ ಹಂತಹಂತವಾಗಿ ರೂಪಿಸಿ** — ಕಡಿಮೆ-ಪಣದ ಸಾಧನಗಳಿಗೆ ಡೆಮೊ-ದರ್ಜೆ ಸಾಕ್ಷ್ಯ, ಸಂಸ್ಥೆ-ವ್ಯಾಪಿ ಖರ್ಚಿನ ಮೊದಲು ನಿಯಂತ್ರಿತ ಪ್ರಾಯೋಗಿಕ ಯೋಜನೆಗಳು, ಪೂರ್ವ-ನೋಂದಾಯಿತ ವಿಸ್ತರಣೆ ದ್ವಾರಗಳೊಂದಿಗೆ ([DiGA](../ಜರ್ಮನಿಯ-diga-ತ್ವರಿತ-ಮಾರ್ಗ/)ದ ಗಡುವಿನೊಂದಿಗೆ ತಾತ್ಕಾಲಿಕ-ಪಟ್ಟಿ ಮಾದರಿ); **ವೆಚ್ಚ ತಪ್ಪಿಸುವಿಕೆಯನ್ನು ಆರೋಗ್ಯ ಅರ್ಥಶಾಸ್ತ್ರ ಬೇಡಿಕೆ ತಪ್ಪಿಸುವಿಕೆ ಎಣಿಸುವಂತೆ ಎಣಿಸಿ** — ನಿರ್ದಿಷ್ಟ ಬಜೆಟ್ ಸಾಲು ಚಲಿಸಿದಾಗ ಮಾತ್ರ ನಿಜ; ಮತ್ತು **ಪ್ರಾಯೋಗಿಕ ಯೋಜನೆಗೇ [EVPI](../ಪರಿಪೂರ್ಣ-ಮಾಹಿತಿಯ-ನಿರೀಕ್ಷಿತ-ಮೌಲ್ಯ/) ಯಿಂದ ಬೆಲೆ ಕಟ್ಟಿ** — ವಿಸ್ತರಣೆ ನಿರ್ಧಾರವನ್ನು ಬದಲಿಸಲಾಗದ ಪ್ರಾಯೋಗಿಕ ಯೋಜನೆಯ ಮೌಲ್ಯ £0. ಡೆವಲಪರ್-ಸಾಧನ ಭಾಗಕ್ಕೆ [AI ಡೆವಲಪರ್ ಉತ್ಪಾದಕತೆ](../ai-ಡೆವಲಪರ್-ಉತ್ಪಾದಕತೆ/) ನೋಡಿ.

## ಎಡವಟ್ಟುಗಳು

- **ಲಾಭ ಪ್ರಸರಣ**: ಸಾವಿರಾರು ಬಳಕೆದಾರರಲ್ಲಿ ತೆಳ್ಳಗೆ ಹರಡಿದ ಮೌಲ್ಯ ಸ್ವಭಾವತಃ ಅಳೆಯಲಾಗದು; ಕೇಂದ್ರೀಕೃತ, ಅನುಸರಿಸಬಹುದಾದ ಮೂಲರೇಖೆಗಳಿರುವ ಬಳಕೆ ಪ್ರಕರಣಗಳನ್ನು ಆರಿಸಿ.
- **ಪರವಾನಗಿ-ಮಾತ್ರ ವೆಚ್ಚ ಲೆಕ್ಕ**: ಏಕೀಕರಣ, ಮೌಲ್ಯಮಾಪನ ಮತ್ತು ಕಾರ್ಯಪ್ರವಾಹ ಮರುವಿನ್ಯಾಸ ಸಾಮಾನ್ಯವಾಗಿ ನಿಜವಾದ ಛೇದದಲ್ಲಿ ಪ್ರಾಬಲ್ಯ ಹೊಂದಿರುತ್ತವೆ.
- **ಆರೋಪಣೆ ಕಳ್ಳತನ**: ಪ್ರಕ್ರಿಯೆ ಮರುವಿನ್ಯಾಸದೊಂದಿಗೆ ನಿಯೋಜಿಸಿದ AI ಇಡೀ ವ್ಯತ್ಯಾಸವನ್ನು ತನ್ನದೆಂದು ಹೇಳಿಕೊಳ್ಳುತ್ತದೆ.
- **ಮುಳುಗಿದ-ಪ್ರಾಯೋಗಿಕ ಯೋಜನೆಯ ಉಲ್ಬಣ**: ನಿಲ್ಲಿಸುವುದು ವೈಫಲ್ಯವನ್ನು ಒಪ್ಪಿಕೊಳ್ಳುವುದು ಎಂಬ ಕಾರಣಕ್ಕೆ ವಿಫಲ ಪ್ರಾಯೋಗಿಕ ಯೋಜನೆಗಳನ್ನು ವಿಸ್ತರಿಸುವುದು — ಅಸ್ತಂಗತ ದಿನಾಂಕವನ್ನು ಮುಂಚಿತವಾಗಿ ಒಪ್ಪಬೇಕು.

## ಮೂಲಗಳು

- MIT Project NANDA "GenAI Divide" coverage. <https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/>
- MIT GenAI ROI findings summary. <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- MIT Technology Review, finding ROI on AI. <https://www.technologyreview.com/2025/10/28/1126693/finding-return-on-ai-investments-across-industries/>
