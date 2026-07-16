# Earlier Intervention

If saved capacity lets a practitioner review diagnostic backlogs sooner, patients move from waiting list to active treatment faster — and treating earlier is usually cheaper and better than treating later, because untreated conditions progress.

## Why it matters

Disease progression is the compounding interest of health care. A patient waiting with an untreated condition is not in a steady state: cancers stage-shift, heart failure decompensates, mild depression becomes severe. Intervening earlier therefore delivers a double dividend — **better outcomes** (more QALYs, treated from a healthier baseline) and often **lower treatment costs** (early-stage treatment is less intensive than late-stage rescue). This mechanism is what elevates "faster pathways" from an operational nicety to a clinical and economic imperative — and it is the deep reason [cost of delay](cost-of-delay.md) applies to clinical software.

## The math

```
Value of earlier intervention (per patient) =
    [Cost_late − Cost_early]                       (treatment-cost offset)
  + [QALYs_early − QALYs_late] × λ                 (health gain × threshold)
  × P(progression during the delay)                 (probability weighting)
```

The probability weighting is essential: not every waiting patient progresses. Model the transition probability per unit time (from natural-history data), not the worst case. Then discount: costs avoided years away are worth less today ([discounting](discounting-and-time-preference.md)) — and note most early intervention is cost-*effective* rather than cost-*saving* (see [prevention economics](prevention-economics.md)).

## Worked example

Diabetic retinopathy screening backlog: 4,000 patients, 6 months behind. AI-assisted grading triples throughput and clears the queue in 8 weeks. Natural history: ~2% of waiting patients/year progress to sight-threatening stages while un-reviewed.

```
Progression events avoided by ~4 months' acceleration:
  4,000 × 2% × (4/12) ≈ 27 patients

Per avoided progression:
  treatment offset (intravitreal therapy vs laser) ≈ £4,000
  QALY gain (vision preserved) ≈ 0.8 QALYs × £20,000 = £16,000

Value ≈ 27 × (4,000 + 16,000) ≈ £540,000 — from one backlog cleared once,
before counting the permanent throughput gain.
```

## Software engineering connection

Two transfers. First, the obvious one: software that accelerates diagnostic and treatment pathways (triage, AI grading, results routing) monetizes via this exact model — and the model tells you which pathway to accelerate: the one with the steepest progression curve, not the longest queue. Second, the engineering mirror: **defects progress too**. A bug caught in design costs a conversation; in production it costs an incident; the "shift-left" cost curve (10–100× by stage) is a progression model, and the honest version carries the same caveat — early detection is usually cost-effective, not free money, because reviews and tests have real costs and most caught issues would never have progressed.

## Pitfalls

- **Worst-case progression assumed for everyone** — the probability weighting is the difference between analysis and advocacy.
- **Lead-time bias**: finding disease earlier without changing outcomes looks like benefit but isn't; earlier *effective intervention* is the claim, not earlier detection alone (see [screening economics](screening-economics.md)).
- **Double counting** with waiting-list and RTT claims built on the same acceleration — one pathway improvement, one set of benefits, allocated once.

## Sources

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- NHS England, diabetic eye screening programme. <https://www.gov.uk/topic/population-screening-programmes/diabetic-eye>
