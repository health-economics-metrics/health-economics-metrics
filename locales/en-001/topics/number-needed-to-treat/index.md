# Number Needed to Treat (NNT)

NNT is the number of patients who must receive an intervention for **one** additional patient to benefit, over a stated time frame. It converts percentage risk reductions — which mislead — into effort-per-benefit units that anyone can reason about.

## Why it matters

"Reduces heart attacks by 25%!" sounds decisive. If the baseline risk is 4% over 5 years, the absolute reduction is 1 percentage point, so **100 people must take the drug for 5 years for 1 to benefit** — and all 100 pay the costs and side effects. NNT is the antidote to relative-risk marketing, which is why evidence-based medicine leads with it. Statins for primary prevention: NNT ≈ 50–100 over 5 years per heart attack avoided. Its mirror, **NNH** (number needed to harm), counts how many treated per person harmed.

## The maths

```
ARR = control event rate − treatment event rate   (absolute risk reduction)
NNT = 1 / ARR

NNH = 1 / (harm rate_treatment − harm rate_control)

Economic bridge:
cost per event prevented = NNT × cost per treatment course
```

Always state the time frame and baseline population — NNT is meaningless without both.

## Worked example

A falls-prediction system in a hospital flags high-risk patients for intervention (bed sensors, review, supervision). Trial: falls with injury drop from 3.2% to 2.4% of admissions.

```
ARR = 0.8 percentage points → NNT = 1/0.008 = 125
   (125 patients must get the intervention bundle to prevent 1 injurious fall)

Intervention cost ≈ £40/patient → cost per fall prevented = 125 × 40 = £5,000
Cost of an injurious inpatient fall (extra stay, imaging, litigation) ≈ £12,000
Net: prevention pays ~2.4:1 — and the QALY gain is on top.
```

Note how NNT keeps the claim honest: "reduces falls 25%" and "prevent one fall per 125 patients treated" are the same result, differently persuasive.

## Software engineering connection

NNT is the right unit for any gate or check that acts on many items to catch few: **"number of PRs that must pass through the AI review gate to catch one production-bound defect."** If the gate reviews 400 PRs per real catch (NNT = 400) at 4 minutes of developer attention each, one catch costs ~27 developer-hours — now compare that to the incident cost it prevents. NNH maps to false positives: how many PRs per *false* flag, and what does each cost in attention and trust? Screening-style tooling (linters, security scanners, anomaly detection) should ship with NNT/NNH arithmetic — see [screening economics](../screening-economics/) for why low prevalence makes these numbers brutal.

## Pitfalls

- **No time frame**: "NNT = 50" means nothing; "NNT = 50 over 5 years" is a claim.
- **Baseline-risk transplantation**: NNT computed in a high-risk trial population collapses in a low-risk deployment population.
- **Ignoring NNH** — a gate with NNT 400 and NNH 3 is a nuisance generator, not a safety system.

## Sources

- Laupacis A, Sackett DL, Roberts RS. "An assessment of clinically useful measures of the consequences of treatment." NEJM 1988. <https://pubmed.ncbi.nlm.nih.gov/3374545/>
- TheNNT explained. <https://www.thennt.com/thennt-explained/>
