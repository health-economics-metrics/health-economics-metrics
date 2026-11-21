# SPACE ಮತ್ತು DevEx

SPACE (ತೃಪ್ತಿ ಮತ್ತು ಯೋಗಕ್ಷೇಮ, ಕಾರ್ಯಕ್ಷಮತೆ, ಚಟುವಟಿಕೆ, ಸಂವಹನ ಮತ್ತು ಸಹಕಾರ, ದಕ್ಷತೆ ಮತ್ತು ಹರಿವು) ಮತ್ತು DevEx (ಪ್ರತಿಕ್ರಿಯೆ ಚಕ್ರಗಳು, ಅರಿವಿನ ಭಾರ, ಹರಿವಿನ ಸ್ಥಿತಿ) ಡೆವಲಪರ್ ಉತ್ಪಾದಕತೆಯನ್ನು **ಬಹು-ಆಯಾಮದಲ್ಲಿ** ಅಳೆಯುವ ಚೌಕಟ್ಟುಗಳು — ಯಾವ ಒಂದೇ ಮಾಪನವೂ ವಾಸ್ತವದ ಸಂಪರ್ಕದಲ್ಲಿ ಉಳಿಯುವುದಿಲ್ಲ ಎಂಬ ಆವಿಷ್ಕಾರಕ್ಕೆ ಕ್ಷೇತ್ರದ ಉತ್ತರ.

## ಇದು ಏಕೆ ಮುಖ್ಯ

ಎರಡೂ ಚೌಕಟ್ಟುಗಳು ಆರೋಗ್ಯ ಫಲಿತಾಂಶ ಸಂಶೋಧನೆ ದಶಕಗಳ ಹಿಂದೆ ಕಲಿತ ಅದೇ ಕಠಿಣ ಪಾಠವನ್ನು ಸಂಕೇತಿಸುತ್ತವೆ: ಒಂದೇ ಸಂಖ್ಯೆ (ಕೋಡ್ ಸಾಲುಗಳು; ರಕ್ತದೊತ್ತಡ) ಬಹು-ಆಯಾಮ ವಾಸ್ತವವನ್ನು ತಪ್ಪಾಗಿ ಪ್ರತಿನಿಧಿಸುತ್ತದೆ, ಮತ್ತು ಅದನ್ನು ಅತ್ಯುತ್ತಮಗೊಳಿಸುವುದು ಸುಧಾರಣೆಯಲ್ಲ, ತಿರುಚುವಿಕೆಯನ್ನು ಉತ್ಪಾದಿಸುತ್ತದೆ. SPACE ಕನಿಷ್ಠ ಮೂರು ಆಯಾಮಗಳ ಮಾಪನಗಳನ್ನು ಸಂಯೋಜಿಸಲು, ಟೆಲಿಮೆಟ್ರಿಯನ್ನು ಸ್ವಯಂ-ವರದಿಯೊಂದಿಗೆ ಬೆರೆಸಲು ಸೂಚಿಸುತ್ತದೆ — ಯಾವುದೇ ಸೂಚ್ಯಂಕ ಲೆಕ್ಕ ಹಾಕುವ ಮೊದಲು [EQ-5D](../eq-5d/) ಐದು ಆಯಾಮಗಳನ್ನು ಪ್ರೊಫೈಲ್ ಮಾಡುವುದಕ್ಕೆ ರಚನಾತ್ಮಕವಾಗಿ ಸಮಾನ, ಮತ್ತು ಕ್ಲಿನಿಕಲ್ ಮಾಪನಗಳ ಜೊತೆಗೆ [PROM](../ರೋಗಿ-ವರದಿ-ಫಲಿತಾಂಶಗಳು/)ಗಳು ಏಕೆ ಅಸ್ತಿತ್ವದಲ್ಲಿವೆ. ತೃಪ್ತಿ/ಯೋಗಕ್ಷೇಮ ಮೃದು ಅಲಂಕಾರವೂ ಅಲ್ಲ: ಅದು [ಕಾರ್ಯಪಡೆ ಉಳಿಸಿಕೊಳ್ಳುವಿಕೆ](../ಕಾರ್ಯಪಡೆ-ಉಳಿಸಿಕೊಳ್ಳುವಿಕೆ/) ಅರ್ಥಶಾಸ್ತ್ರಕ್ಕೆ ಹರಿಯುತ್ತದೆ, ಅಲ್ಲಿ ಕ್ಷೀಣತೆಗೆ ಲೋಡ್ ಮಾಡಿದ ಸಂಬಳದ ತಿಂಗಳುಗಳಲ್ಲಿ ಬೆಲೆ ಕಟ್ಟಲಾಗುತ್ತದೆ.

## ಗಣಿತ

ಎರಡೂ ಚೌಕಟ್ಟುಗಳು ಸೂತ್ರಗಳಲ್ಲ; ಎರಡೂ ಮಾಪನ ವಿನ್ಯಾಸಗಳು:

```
SPACE rule: ≥ 3 dimensions, ≥ 1 perceptual (survey) + ≥ 1 system (telemetry) metric

DevEx dimensions and example pairings:
  feedback loops  → CI duration (telemetry) + "waiting feels slow" (survey)
  cognitive load  → docs findability, onboarding time + perceived effort
  flow state      → meeting/interrupt density + self-reported focus

Derived indices (e.g., DX's DXI) map survey composites to time:
vendor claim ≈ 13 min/dev/week per index point — treat as a vendor
benchmark to validate locally, not a constant of nature.
```

## ಬಿಡಿಸಿದ ಉದಾಹರಣೆ

ವೇದಿಕೆ ತಂಡ 300 ಡೆವಲಪರ್‌ಗಳಿಗೆ DevEx ಹೂಡಿಕೆಯನ್ನು (CI ವೇಗವರ್ಧನೆ + ದಾಖಲೆ ಪುನರ್ರಚನೆ) ಸಮರ್ಥಿಸುತ್ತದೆ:

```
Baseline: CI p75 = 28 min; survey "I lose focus waiting for builds": 62% agree
After:    CI p75 = 9 min;  agreement 24%

Time reclaimed (telemetry): 6 builds/day × 19 min × 0.4 usable = ~45 min/day/dev
Capacity value: 300 × 0.75h × 220d × £60/h ≈ £2.97M/year (non-cash-releasing —
see cash-releasing-vs-non-cash-releasing.md; the 0.4 usability factor is the
fragmentation discount from practitioner-time.md)
Perceptual corroboration is what makes the telemetry claim credible — either
alone is gameable; together they triangulate.
```

## ಸಾಫ್ಟ್‌ವೇರ್ ಎಂಜಿನಿಯರಿಂಗ್‌ನೊಂದಿಗಿನ ಸಂಬಂಧ

ಈ ದಾಖಲೆಯೇ ಸಾಫ್ಟ್‌ವೇರ್ ಭಾಗ; ವರ್ಗಾವಣೆ ಆರೋಗ್ಯ ಅರ್ಥಶಾಸ್ತ್ರದ ಕಡೆಗೆ ಹರಿಯುತ್ತದೆ. "ಗುಣಮಟ್ಟ-ಹೊಂದಾಣಿಕೆಯ ಎಂಜಿನಿಯರ್ ವರ್ಷ" — ಪ್ರಮಾಣಿತ ಅನುಭವ ಸೂಚ್ಯಂಕದಿಂದ ತೂಕ ಮಾಡಿದ ಸಮಯ — ಎಂಜಿನಿಯರಿಂಗ್ ಸಾಮರ್ಥ್ಯಕ್ಕೆ ಅನ್ವಯಿಸಿದ [QALY](../ಗುಣಮಟ್ಟ-ಹೊಂದಾಣಿಕೆಯ-ಜೀವ-ವರ್ಷ/)ಯ ನಿರ್ಮಾಣ, ಮತ್ತು ಅದು QALYಯ ನಿಯಮಗಳನ್ನು ಪಡೆಯುತ್ತದೆ: ಮೌಲ್ಯೀಕರಿಸಿದ ಸಾಧನದಿಂದ ತೂಕಗಳು (ಸ್ಥಿರ ಸಮೀಕ್ಷೆ, ಪ್ರಕಟಿತ ಅಂಕ ನಿಗದಿ), ಹೋಲಿಕೆಯ *ಮೊದಲು* ಪಡೆದದ್ದು, ಇಷ್ಟದ ಸಾಧನಕ್ಕೆ ಮುಖಸ್ತುತಿ ಮಾಡಲು ಎಂದಿಗೂ ಹೊಂದಿಸಿದ್ದಲ್ಲ. [SF-6D vs EQ-5D](../eq-5d/) ಪಾಠವೂ ಅನ್ವಯಿಸುತ್ತದೆ: ಭಿನ್ನ ಸಾಧನಗಳು ವ್ಯವಸ್ಥಿತವಾಗಿ ಭಿನ್ನ ಸಂಖ್ಯೆಗಳನ್ನು ನೀಡುತ್ತವೆ, ಆದ್ದರಿಂದ ಮಾರಾಟಗಾರರ ಸಾಧನಗಳಾದ್ಯಂತ DevEx ಸೂಚ್ಯಂಕಗಳನ್ನು ಎಂದಿಗೂ ಹೋಲಿಸಬೇಡಿ.

## ಎಡವಟ್ಟುಗಳು

- **ಏಕ-ಮಾಪನ ಕುಸಿತ**: SPACE ಅನ್ನು ಒಂದು ಅಂಕಕ್ಕೆ ಇಳಿಸುವ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗಳು ಚೌಕಟ್ಟು ತಡೆಯಲು ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ಸಮಸ್ಯೆಯನ್ನೇ ಮರುಸೃಷ್ಟಿಸುತ್ತವೆ.
- **ಫಲಿತಾಂಶಗಳಾಗಿ ಚಟುವಟಿಕೆ ಮಾಪನಗಳು**: ಕಮಿಟ್‌ಗಳು, PRಗಳು ಮತ್ತು ಸ್ಟೋರಿ ಪಾಯಿಂಟ್‌ಗಳು ಚಟುವಟಿಕೆ — SPACE ಅತಿ ತಿರುಚಬಹುದಾದ ಆಯಾಮ ಎಂದು ಸ್ಪಷ್ಟವಾಗಿ ಎಚ್ಚರಿಸುತ್ತದೆ (ಆರೋಗ್ಯ ಸಮಾನ: ಚೇತರಿಕೆಗಳಲ್ಲ, ಕಾರ್ಯವಿಧಾನಗಳನ್ನು ಎಣಿಸುವುದು).
- **ಸಮೀಕ್ಷೆ ಆಯಾಸ ಮತ್ತು Hawthorne ಪರಿಣಾಮಗಳು**: ತ್ರೈಮಾಸಿಕ ಹಗುರ-ಸ್ಪರ್ಶ ಸಾಧನಗಳು ಸಾಪ್ತಾಹಿಕ ವಿಚಾರಣೆಯನ್ನು ಮೀರಿಸುತ್ತವೆ.
- **ತಂಡಗಳ ಹೋಲಿಕೆ**: ಪ್ರಕರಣ-ಮಿಶ್ರಣ ಹೊಂದಾಣಿಕೆಯಿಲ್ಲದ ಆಸ್ಪತ್ರೆ ಲೀಗ್ ಕೋಷ್ಟಕಗಳಂತೆ — ಸಂದರ್ಭ ವ್ಯತ್ಯಾಸಗಳು (ಕ್ಷೇತ್ರ, ಹಳೆಯ ಭಾರ, ಆನ್-ಕಾಲ್) ಪ್ರಾಬಲ್ಯ ಹೊಂದುತ್ತವೆ.

## ಮೂಲಗಳು

- Forsgren N, et al. "The SPACE of Developer Productivity." ACM Queue 2021. <https://queue.acm.org/detail.cfm?id=3454124>
- Noda A, Forsgren N, Storey MA, Greiler M. "DevEx: What Actually Drives Productivity." ACM Queue 2023. <https://queue.acm.org/detail.cfm?id=3595878>
