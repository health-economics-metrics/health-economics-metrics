# ದೂರಸ್ಥ ರೋಗಿ ಮೇಲ್ವಿಚಾರಣೆ ಅರ್ಥಶಾಸ್ತ್ರ

ಮನೆಯಲ್ಲಿ ರೋಗಿಗಳ ಮೇಲ್ವಿಚಾರಣೆಯ ಮರುಪಾವತಿ ಮತ್ತು ವೆಚ್ಚ-ಸರಿದೂಗಿಸುವ ಅರ್ಥಶಾಸ್ತ್ರ: ಅಮೆರಿಕದಲ್ಲಿ, ನಿರ್ದಿಷ್ಟ CPT-ಕೋಡ್ ಆದಾಯ ಪದರ; ರಾಷ್ಟ್ರೀಯ ಆರೋಗ್ಯ ಸೇವೆಗಳಲ್ಲಿ, ದಾಖಲಾತಿ-ತಪ್ಪಿಸುವಿಕೆ ಮತ್ತು ವರ್ಚುವಲ್-ವಾರ್ಡ್ ಅರ್ಥಶಾಸ್ತ್ರ, ಪೂರ್ಣ **ಮನೆ-ಆಸ್ಪತ್ರೆ** ಬದಲಿ ವರೆಗೆ.

## ಇದು ಏಕೆ ಮುಖ್ಯ

RPM ಸಾಧನ ದತ್ತಾಂಶ ಬಿಲ್ ಮಾಡಬಹುದಾದ ಆರೋಗ್ಯ ಸೇವೆಯಾಗುವ ಸ್ಥಳ. ಅಮೆರಿಕದ Medicare ರಚನೆ (2025 ರಾಷ್ಟ್ರೀಯ ಸರಾಸರಿಗಳು) ಅಸಾಮಾನ್ಯವಾಗಿ ಸ್ಪಷ್ಟ:

```
99453  setup & patient education     ~$19.73  one-time (after 16 days of data)
99454  device supply + transmission  ~$43.03  per 30 days — REQUIRES ≥16 days
                                              of readings in the 30
99457  first 20 min/month management ~$47.87  requires ≥20 logged minutes
99458  each additional 20 min        ~$38.49
```

ಅನುಸರಿಸುವ ರೋಗಿ-ತಿಂಗಳು ಸುಮಾರು **$90–130 PMPM** ಆಗಿ ಜೋಡಣೆಯಾಗುತ್ತದೆ. ವೆಚ್ಚ-ಸರಿದೂಗಿಸುವ ಬದಿಯಲ್ಲಿ, ಮನೆ-ಆಸ್ಪತ್ರೆ ಕಾರ್ಯಕ್ರಮಗಳು (CMS Acute Hospital Care at Home ವಿನಾಯಿತಿ: 300+ ಆಸ್ಪತ್ರೆಗಳು) ಒಳರೋಗಿ ಆರೈಕೆಗೆ ಹೋಲಿಸಿದರೆ ಕಡಿಮೆ ಮರು-ದಾಖಲಾತಿ ಮತ್ತು ಸೋಂಕುಗಳೊಂದಿಗೆ ಪ್ರತಿ ಮುಖಾಮುಖಿಗೆ ~$1,800–$3,000 ಉಳಿತಾಯ ತೋರಿಸುತ್ತವೆ — ಮೇಲ್ವಿಚಾರಣೆ ಜೊತೆಗೆ ವರ್ಚುವಲ್ ಆರೈಕೆ ವ್ಯವಸ್ಥೆಯ ಅತ್ಯಂತ ದುಬಾರಿ ಸಂಪನ್ಮೂಲಕ್ಕೆ, ಸಿಬ್ಬಂದಿ ಇರುವ ಹಾಸಿಗೆಗೆ, ಬದಲಿಯಾಗಬಲ್ಲದು ಎಂಬುದರ ಸ್ಪಷ್ಟ ಪ್ರದರ್ಶನ.

## ಗಣಿತ

```
RPM revenue (US)  = enrolled × billing-compliant fraction × code stack PMPM
  — the 16-day rule makes wear-time compliance (wearable-validation.md)
    a revenue variable, and the 20-minute rule makes clinical-time
    logging an engineering requirement

NHS-style value   = admissions avoided × marginal admission cost
                  + bed days substituted × (inpatient − virtual-ward day cost)
                  − service cost (devices, platform, monitoring staff)
  (see emergency-attendance-avoidance.md and bed-days-saved.md for the
   attribution and marginal-cost rules)
```

## ಬಿಡಿಸಿದ ಉದಾಹರಣೆ

ಅಮೆರಿಕದ ಅಭ್ಯಾಸ 400 ಅಧಿಕ ರಕ್ತದೊತ್ತಡ ರೋಗಿಗಳನ್ನು ದಾಖಲಿಸುತ್ತದೆ; ವಿಶಿಷ್ಟ ತಿಂಗಳಲ್ಲಿ 70% 16-ದಿನದ ಮಿತಿ ಪೂರೈಸುತ್ತಾರೆ; 60%ಗೆ ನಿರ್ವಹಣೆ ನಿಮಿಷಗಳು ದಾಖಲಾಗುತ್ತವೆ:

```
Monthly revenue ≈ 400 × [0.70 × 43.03 + 0.60 × 47.87] = 400 × 58.84 ≈ $23,500
Annual ≈ $282,000; service cost (devices $12/mo, staff 0.8 FTE) ≈ $180,000
Margin ≈ $100k/year — and note the levers are engineering levers:
raising the 16-day compliance from 70% → 85% adds ~$31k/year
(device comfort, sync reliability, reminder design).
```

NHS ಪ್ರತಿಬಿಂಬ: 80% ಆಕ್ರಮಣದಲ್ಲಿ 50-ಹಾಸಿಗೆ ವರ್ಚುವಲ್ ವಾರ್ಡ್ ದಿನಕ್ಕೆ £150 ನಿವ್ವಳ ಉಳಿತಾಯದಲ್ಲಿ ಒಳರೋಗಿ ದಿನಗಳನ್ನು ಬದಲಿಸುವುದು ≈ 50 × 0.8 × 365 × 150 ≈ **ವರ್ಷಕ್ಕೆ £2.19M** ಒಟ್ಟು — ವೇದಿಕೆ, ಸಾಧನಗಳು ಮತ್ತು ಅದಕ್ಕೆ ಸಿಬ್ಬಂದಿ ಒದಗಿಸುವ ಸಮುದಾಯ ದಾದಿ ತಂಡದ ವಿರುದ್ಧ.

## ಸಾಫ್ಟ್‌ವೇರ್ ಎಂಜಿನಿಯರಿಂಗ್‌ನೊಂದಿಗಿನ ಸಂಬಂಧ

RPM ವೇದಿಕೆಗಳು **ಅಪ್‌ಟೈಮ್ ಮತ್ತು ಸಿಂಕ್ ವಿಶ್ವಾಸಾರ್ಹತೆ ನೇರವಾಗಿ ಆದಾಯವಾಗಿ ಪರಿವರ್ತನೆಯಾಗುವ** ಅಪರೂಪದ ಉತ್ಪನ್ನ (ಒಂದು ವಾರದ ವಿಫಲ ಸಿಂಕ್‌ಗಳು ಸಮೂಹಕ್ಕೆ 16-ದಿನದ ದ್ವಾರವನ್ನು ಮುರಿಯುತ್ತವೆ) ಮತ್ತು ಲೆಕ್ಕಪರಿಶೋಧನೆ-ದರ್ಜೆ ಸಮಯ-ಟ್ರ್ಯಾಕಿಂಗ್ (20-ನಿಮಿಷದ ನಿಯಮ) ನಂತರದ ಆಲೋಚನೆಯಲ್ಲ, ಪ್ರಥಮ ದರ್ಜೆ ವೈಶಿಷ್ಟ್ಯ. ಇವಕ್ಕಾಗಿ ನಿರ್ಮಿಸಿ: ಬಿಲ್ಲಿಂಗ್ ತಿಂಗಳುಗಳು ಇನ್ನೂ ಚೇತರಿಸಿಕೊಳ್ಳಬಹುದಾದಾಗ ಅಪಾಯದಲ್ಲಿರುವವನ್ನು ತೋರಿಸುವ ಪ್ರತಿ-ರೋಗಿ ಅನುಸರಣೆ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್‌ಗಳು; ಸಮಯಮುದ್ರೆ, ತಿರುಚಲಾಗದ ದತ್ತಾಂಶ ಜಾಡುಗಳು (ಪಾವತಿದಾರ ಲೆಕ್ಕಪರಿಶೋಧನೆಗಳು ನಿಯಮಿತ); ಮತ್ತು ಎಚ್ಚರಿಕೆ-ಅರ್ಥಶಾಸ್ತ್ರ ಹೊಂದಾಣಿಕೆ — ಪ್ರತಿ ಎಚ್ಚರಿಕೆ ಮೇಲ್ವಿಚಾರಣಾ ತಂಡದ ನಿಮಿಷಗಳನ್ನು ಬಳಸುತ್ತದೆ, ಅವು ಬಿಲ್ ಮಾಡಬಹುದಾದ ಘಟಕ ಮತ್ತು ವಿರಳ ಸಂಪನ್ಮೂಲ ಎರಡೂ ([ಸ್ಕ್ರೀನಿಂಗ್ ಅರ್ಥಶಾಸ್ತ್ರ](../ಸ್ಕ್ರೀನಿಂಗ್-ಅರ್ಥಶಾಸ್ತ್ರ/) ಮಿತಿ ಆಯ್ಕೆಯನ್ನು ನಿಯಂತ್ರಿಸುತ್ತದೆ).

## ಎಡವಟ್ಟುಗಳು

- **ದಾಖಲಾತಿ ≠ ಆದಾಯ**: ಅನುಸರಿಸುವ ಭಾಗವೇ ಸಂಖ್ಯೆ; ಅದನ್ನು ಮಾದರಿ ಮಾಡಿ, ಊಹಿಸಬೇಡಿ.
- **NHS ಪ್ರಕರಣಗಳಿಗೆ ಕಸಿ ಮಾಡಿದ ಅಮೆರಿಕದ ಕೋಡ್‌ಗಳು** — ರಾಷ್ಟ್ರೀಯ ಆರೋಗ್ಯ ಸೇವೆಗಳು CPT ಜೋಡಣೆಗಳನ್ನಲ್ಲ, ದಾಖಲಾತಿ ತಪ್ಪಿಸುವಿಕೆಯನ್ನು ಖರೀದಿಸುತ್ತವೆ; ಎರಡನೇ ಮಾದರಿ ನಡೆಸಿ.
- ನಿಗದಿತ ವೆಚ್ಚಗಳು ಉಳಿಯುವ ದಾಖಲಾತಿಗಳಿಗೆ **ಸರಾಸರಿ ವೆಚ್ಚದಲ್ಲಿ ಸರಿದೂಗಿಸುವ ಹಕ್ಕುಗಳು** ([ಸೀಮಾಂತ vs ಸರಾಸರಿ ವೆಚ್ಚ](../ಸೀಮಾಂತ-vs-ಸರಾಸರಿ-ವೆಚ್ಚ/) ನೋಡಿ).
- **ಮೇಲ್ವಿಚಾರಣಾ-ತಂಡ ಸ್ಯಾಚುರೇಶನ್**: ಎಚ್ಚರಿಕೆ ಪ್ರಮಾಣ ದಾಖಲಾತಿಯೊಂದಿಗೆ ಮಾಪನಗೊಳ್ಳುತ್ತದೆ; ಸಿಬ್ಬಂದಿ ಸಾಲು ಹೆಚ್ಚಿನ ಮಾದರಿಗಳು ಬಿಟ್ಟುಬಿಡುವ ಬಂಧಿಸುವ ನಿರ್ಬಂಧ.

## ಮೂಲಗಳು

- RPM CPT codes and 2025 rates. <https://blog.prevounce.com/quick-guide-remote-patient-monitoring-rpm-cpt-codes-to-know>
- CMS hospital-at-home outcomes reporting. <https://www.mcknightshomecare.com/news/hospital-at-home-achieved-cost-savings-among-all-top-diagnosis-groups-cms-reports/>
- Telehealth.HHS.gov, billing for RPM. <https://telehealth.hhs.gov/providers/best-practice-guides/telehealth-and-remote-patient-monitoring/billing-remote-patient>
