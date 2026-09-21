# EQ-5D

EQ-5D is the EuroQol group's standardized questionnaire for measuring health-related quality of life. It is the instrument that produces the utility weights inside most [QALY](../quality-adjusted-life-year/) calculations — NICE's reference case names it the preferred measure for adults.

## Why it matters

Any digital health product that wants to claim QALYs needs utilities from a validated instrument, and EQ-5D is the default in the UK and much of Europe. It is short enough to embed in an app (5 questions + a visual scale), which means software products can collect HTA-grade outcome data as a side effect of normal use — a structural advantage over drugs, which need dedicated studies.

## The math

The EQ-5D-5L asks one question in each of **5 dimensions** — mobility, self-care, usual activities, pain/discomfort, anxiety/depression — each answered at **5 levels** (no problems … extreme problems), plus a 0–100 visual analog scale (EQ VAS).

```
Health state = 5-digit profile, e.g. "21221"
Utility index = value_set(profile)

The value set is country-specific, derived from time-trade-off /
discrete-choice surveys of the general public. Anchors: 1 = full health,
0 = dead; states worse than death are negative (UK 3L set floor: −0.594).
```

QALY arithmetic then proceeds as `duration × utility`.

## Worked example

A musculoskeletal rehab app measures EQ-5D-5L at onboarding and at 6 months for 1,000 completing users.

```
Mean utility at baseline:  0.62
Mean utility at 6 months:  0.71
Gain sustained (assume) 1 year: (0.71 − 0.62) × 1.0 = 0.09 QALYs per user
```

Against a control-group change of 0.03 (natural recovery), the attributable gain is 0.06 QALYs/user. Monetized at £20,000–£30,000/QALY: **£1,200–£1,800 of health value per completing user** — the number that anchors the app's price negotiation with a payer. (Minimal clinically important differences for the EQ-5D index are commonly in the 0.03–0.08 range, so 0.06 is plausible but must clear the control comparison; see [patient-reported outcomes](../patient-reported-outcomes/).)

## Software engineering connection

- **Instrument it.** EQ-5D at signup and at follow-up intervals is a few screens of UI; the payoff is HTA-grade evidence. Get licensing from EuroQol (required, free for some uses).
- **Use the right value set** for the deployment country — the same answers score differently in the UK vs Germany vs Japan.
- **Design lesson**: EQ-5D shows how a tiny standardized survey plus a published scoring function yields a comparable single index. That's the pattern for any credible developer-experience index too — standardized instrument, published weights, not ad-hoc vibes. See [SPACE and DevEx](../space-and-devex/).

## Pitfalls

- **Before/after without a comparator** — regression to the mean and natural recovery inflate naive gains.
- **Survivorship bias**: measuring only users who stayed engaged (see [retention and churn](../retention-and-churn/)).
- **Mixing 3L and 5L versions or value sets** across studies — systematically different numbers.
- **Ceiling effects** in mildly affected populations: many users score near 1.0 at baseline, leaving no headroom to demonstrate gain.

## Sources

- EuroQol: EQ-5D-5L. <https://euroqol.org/information-and-support/euroqol-instruments/eq-5d-5l/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
