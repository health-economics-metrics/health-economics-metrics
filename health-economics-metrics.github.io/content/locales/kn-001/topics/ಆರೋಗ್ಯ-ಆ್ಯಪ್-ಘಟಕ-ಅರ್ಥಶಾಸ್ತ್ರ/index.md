# ಆರೋಗ್ಯ ಆ್ಯಪ್ ಘಟಕ ಅರ್ಥಶಾಸ್ತ್ರ

ಗ್ರಾಹಕ ಆರೋಗ್ಯ ಉತ್ಪನ್ನಗಳ ವಾಣಿಜ್ಯ ಅಂಕಗಣಿತ: ಗ್ರಾಹಕ ಸ್ವಾಧೀನ ವೆಚ್ಚ (CAC), ಜೀವಿತಾವಧಿ ಮೌಲ್ಯ (LTV), ಪ್ರತಿ ಬಳಕೆದಾರರಿಗೆ ಸರಾಸರಿ ಆದಾಯ (ARPU), ಪ್ರತಿ-ಸದಸ್ಯ-ಪ್ರತಿ-ತಿಂಗಳು (PMPM) ಬೆಲೆ, ಮತ್ತು ಉದ್ಯೋಗದಾತ ಮಾರುಕಟ್ಟೆಯ **ROI ಮತ್ತು VOI** (ಹೂಡಿಕೆಯ ಮೇಲಿನ ಮೌಲ್ಯ) ವ್ಯತ್ಯಾಸ.

## ಇದು ಏಕೆ ಮುಖ್ಯ

ಆರೋಗ್ಯ ಆ್ಯಪ್‌ಗಳು ರಚನಾತ್ಮಕ ಹಿಸುಕನ್ನು ಎದುರಿಸುತ್ತವೆ: ಸ್ವಾಧೀನ ದುಬಾರಿ (ನಿಯಂತ್ರಿತ ಹಕ್ಕುಗಳು, ನಂಬಿಕೆ ಅಡೆತಡೆಗಳು, ಅನುಸರಣೆ ವೆಚ್ಚಗಳು) ಆದರೆ ಉಳಿಸಿಕೊಳ್ಳುವಿಕೆ ಯಾವುದೇ ಸಾಫ್ಟ್‌ವೇರ್ ಕ್ಷೇತ್ರದಲ್ಲಿ ಅತ್ಯಂತ ಕೆಟ್ಟದ್ದು (30 ದಿನಗಳೊಳಗೆ ~90% ಕೈಬಿಡುವಿಕೆ — [ಉಳಿಸಿಕೊಳ್ಳುವಿಕೆ ಮತ್ತು ಬಿಟ್ಟುಹೋಗುವಿಕೆ](../ಉಳಿಸಿಕೊಳ್ಳುವಿಕೆ-ಮತ್ತು-ಬಿಟ್ಟುಹೋಗುವಿಕೆ/) ನೋಡಿ). ಪ್ರಮಾಣಿತ ಕಾರ್ಯಸಾಧ್ಯತೆ ಪರೀಕ್ಷೆ — **LTV:CAC ≥ 3:1** — ಆದ್ದರಿಂದ ಗ್ರಾಹಕ ಆರೋಗ್ಯದಲ್ಲಿ ಕ್ರೂರವಾಗಿ ಕಠಿಣ, ಹೀಗಾಗಿಯೇ ಉದ್ಯಮ B2B2C ಮಾದರಿಗಳತ್ತ ವಲಸೆ ಹೋಗುತ್ತದೆ: ಉದ್ಯೋಗದಾತರು, ವಿಮೆದಾರರು ಮತ್ತು ಆರೋಗ್ಯ ವ್ಯವಸ್ಥೆಗಳು ಜನಸಂಖ್ಯೆಗಳಿಗೆ PMPM ಪಾವತಿಸುತ್ತವೆ, ಅಲ್ಲಿ ಖರೀದಿದಾರ ಬಿಟ್ಟುಹೋಗುವ ವ್ಯಕ್ತಿಯಲ್ಲ.

## ಗಣಿತ

```
CAC   = sales + marketing spend / new paying customers
ARPU  = revenue / active users (per period)
LTV   = ARPU × average lifetime  =  ARPU / churn rate
Viability: LTV : CAC ≥ 3, payback period ≤ 12–18 months

Effective CAC per retained user = CAC / retention(t)
  — at 4% D30 retention, £5 per install = £125 per 30-day-retained user

PMPM revenue = rate × enrolled members × months
  vendor margin = PMPM − cost-to-serve per member per month
  — engagement flips sign: under B2C subscriptions engagement drives
    revenue; under PMPM, engaged members COST more to serve than
    dormant ones, and outcomes contracts flip it back again
```

## ಬಿಡಿಸಿದ ಉದಾಹರಣೆ

B2C ನಿದ್ರೆ ಆ್ಯಪ್: ತಿಂಗಳಿಗೆ £6.99, ಮಾಸಿಕ ಬಿಟ್ಟುಹೋಗುವಿಕೆ 18%, ಮಿಶ್ರ CAC £38.

```
LTV = 6.99 / 0.18 ≈ £38.8 → LTV:CAC ≈ 1.0 — non-viable

Pivot to employer PMPM: £1.20 PMPM × 40,000 covered lives = £48k/month
Cost-to-serve: infrastructure £0.15 + support £0.10 + content £0.05
  per member ≈ £0.30 → margin ~75%, sales cycle long but churn is
  contract-level (annual), not user-level (daily)

The employer's question shifts the metric: hard-dollar ROI (reduced
claims, absenteeism) is rarely demonstrable for wellness products —
the industry answer is VOI: productivity, recruitment appeal,
engagement — which is honest only when labelled as VOI, not dressed
as ROI (see return-on-investment.md and social-return-on-investment.md).
```

## ಸಾಫ್ಟ್‌ವೇರ್ ಎಂಜಿನಿಯರಿಂಗ್‌ನೊಂದಿಗಿನ ಸಂಬಂಧ

ಎಂಜಿನಿಯರಿಂಗ್ ಆಯ್ಕೆಗಳು ಅನುಪಾತದ ಎರಡೂ ಬದಿಗಳನ್ನು ನಿರ್ಧರಿಸುತ್ತವೆ: **ಸೇವೆ ನೀಡುವ ವೆಚ್ಚ** ವಾಸ್ತುಶಿಲ್ಪ ([ಕ್ಲೌಡ್ ಘಟಕ ಅರ್ಥಶಾಸ್ತ್ರ](../ಕ್ಲೌಡ್-ಘಟಕ-ಅರ್ಥಶಾಸ್ತ್ರ/) — PMPM ಲಾಭಾಂಶ ಪ್ರತಿ-ಸದಸ್ಯ ಮೂಲಸೌಕರ್ಯ ವೆಚ್ಚದ ಮೇಲೆ ಬದುಕುತ್ತದೆ ಅಥವಾ ಸಾಯುತ್ತದೆ), ಮತ್ತು **LTV** ಉಳಿಸಿಕೊಳ್ಳುವಿಕೆ ಎಂಜಿನಿಯರಿಂಗ್ (ಪ್ರತಿ ಬಿಟ್ಟುಹೋಗುವ ಬಿಂದು ಅಂಕಗಣಿತ ಆದಾಯ — [ಉಳಿಸಿಕೊಳ್ಳುವಿಕೆ](../ಉಳಿಸಿಕೊಳ್ಳುವಿಕೆ-ಮತ್ತು-ಬಿಟ್ಟುಹೋಗುವಿಕೆ/) ದಾಖಲೆಯ QALY ಗಣಿತಕ್ಕೆ ನಿಖರ ಆದಾಯ ಅವಳಿ ಇದೆ). ಆರೋಗ್ಯ ಉತ್ಪನ್ನಗಳಿಗೆ ವಿಶೇಷವಾಗಿ, ಘಟಕ-ಅರ್ಥಶಾಸ್ತ್ರ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ LTV ಮತ್ತು CACಯ ಪಕ್ಕದಲ್ಲಿ ಮೂರನೇ ಸಾಲನ್ನು ಹೊಂದಿರಬೇಕು: **ಸ್ವಾಧೀನಪಡಿಸಿಕೊಂಡ ಪ್ರತಿ ಬಳಕೆದಾರರಿಗೆ ಆರೋಗ್ಯ ಮೌಲ್ಯ** (ಉಳಿಸಿಕೊಳ್ಳುವಿಕೆ-ತೂಕದ QALYಗಳು × ಮಿತಿ) — ಏಕೆಂದರೆ ಪಾವತಿದಾರ ಮತ್ತು DiGA-ಶೈಲಿಯ ಮಾರುಕಟ್ಟೆಗಳು ಹೆಚ್ಚಾಗಿ ಅದರ ಮೇಲೆ ಬೆಲೆ ನಿಗದಿಪಡಿಸುತ್ತವೆ, ಮತ್ತು ವಾಣಿಜ್ಯ ಹಾಗೂ ಕ್ಲಿನಿಕಲ್ ಘಟಕ ಅರ್ಥಶಾಸ್ತ್ರ ಬೇರೆಯಾಗುವ ಉತ್ಪನ್ನ (ಲಾಭದಾಯಕ ಆದರೆ ಆರೋಗ್ಯ-ನಿಷ್ಕ್ರಿಯ, ಅಥವಾ ಪರಿಣಾಮಕಾರಿ ಆದರೆ ಹಣ ನೀಡಲಾಗದ) ತನಗೆ ಯಾವ ಸಮಸ್ಯೆ ಎಂದು ತಿಳಿಯಬೇಕು.

## ಎಡವಟ್ಟುಗಳು

- **ಆರಂಭಿಕ-ಸಮೂಹ ಬಿಟ್ಟುಹೋಗುವಿಕೆಯಿಂದ LTV**: ಬಿಟ್ಟುಹೋಗುವಿಕೆ ಕೆಳಮುಖವಾಗಿ ಸ್ಥಿರಗೊಳ್ಳುತ್ತದೆ; ಆದರೆ ಉಳಿದವರ ಪಕ್ಷಪಾತವೂ — ಆರಂಭಿಕ ಅಳವಡಿಸಿಕೊಳ್ಳುವವರು ವಿಸ್ತರಿಸಿದ ಪ್ರೇಕ್ಷಕರಿಗಿಂತ ಉತ್ತಮವಾಗಿ ಉಳಿಯುತ್ತಾರೆ. ಪ್ರಬುದ್ಧ-ಸಮೂಹ ದತ್ತಾಂಶ ಬಳಸಿ.
- **ಚಾನೆಲ್‌ಗಳಾದ್ಯಂತ ಮಿಶ್ರ CAC**: ಪಾವತಿಸಿದ-ಸಾಮಾಜಿಕ CAC ಮತ್ತು ವೈದ್ಯ-ಶಿಫಾರಸು CAC 10× ವ್ಯತ್ಯಾಸ, ವಿರುದ್ಧ ಉಳಿಸಿಕೊಳ್ಳುವಿಕೆ ಪ್ರೊಫೈಲ್‌ಗಳೊಂದಿಗೆ — ವಿಭಾಗಿಸಿ ಅಥವಾ ದಾರಿ ತಪ್ಪಿ.
- **ಬಳಕೆ ಮಿತಿಗಳಿಲ್ಲದ PMPM**: ಅತಿ-ತೊಡಗಿದ ಸದಸ್ಯರು ಲಾಭಾಂಶವನ್ನು ತಿರುಗಿಸಬಹುದು; ಸರಾಸರಿಯಲ್ಲ, ವಿತರಣೆಯನ್ನು ಮಾದರಿ ಮಾಡಿ.
- CFOಗೆ **ROI ಆಗಿ ಪ್ರಸ್ತುತಪಡಿಸಿದ VOI** — ಉದ್ಯೋಗದಾತ-ಆರೋಗ್ಯ ಉದ್ಯಮ ಒಂದು ದಶಕ ಗಳಿಸಿದ ವಿಶ್ವಾಸಾರ್ಹತೆ ವೈಫಲ್ಯ.

## ಮೂಲಗಳು

- Healthtech unit economics primers. <https://smart-it.io/blog/how-to-calculate-unit-economics-for-healthcare-startups/>
- PMPM pricing frameworks for digital health. <https://www.quintupleaim.com/blog/strategic-pricing-for-digital-health-startups-in-value-based-care-per-member-per-month-pmpm-frameworks>
