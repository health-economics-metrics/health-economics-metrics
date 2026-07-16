# Clinical AI Evaluation

The core statistics for evaluating a clinical AI or diagnostic model: sensitivity, specificity, AUROC, predictive values, and number needed to screen. The central economic lesson: **a great AUROC does not make a cost-effective deployment** — value depends on the operating point, the prevalence, and what happens downstream of every positive.

## Why it matters

Regulators (FDA, MHRA) authorize clinical AI at a **locked operating point** — a specific sensitivity/specificity pair (e.g., the first FDA-cleared autonomous diabetic-retinopathy system: sensitivity 87.2%, specificity 90.7% in its pivotal trial). Health economists then ask the question accuracy metrics can't answer: at your deployment population's prevalence, what does each detection *cost*, and is acting on it worth it? An economic evaluation of retinopathy-screening AI (npj Digital Medicine 2024) showed higher accuracy alone did not guarantee cost-effectiveness once referral costs were counted.

## The math

```
Sensitivity = TP / (TP + FN)        — of the truly positive, share caught
Specificity = TN / (TN + FP)        — of the truly negative, share cleared
AUROC       = P(model ranks a random positive above a random negative)
              0.5 chance … 1.0 perfect; threshold-independent — and therefore
              deployment-decision-insufficient

PPV = TP / (TP + FP)   ← prevalence-dependent (Bayes); collapses when rare
NPV = TN / (TN + FN)

NNS  ≈ 1 / (prevalence × sensitivity)       — screened per true case found
Cost per true case = program cost / TP      — the economic bottom line
```

## Worked example

Same model, two settings — sensitivity 90%, specificity 93%:

```
Specialist clinic (prevalence 20%):
  PPV = (0.9×0.2)/(0.9×0.2 + 0.07×0.8) = 0.18/0.236 ≈ 76%  → 3 in 4 alerts real

Primary care (prevalence 1%):
  PPV = (0.9×0.01)/(0.9×0.01 + 0.07×0.99) = 0.009/0.0783 ≈ 11.5%
  → 8 in 9 alerts false; workup at £350 each:
  cost per true case = (0.009 + 0.0693) × 350 / 0.009 ≈ £3,045 per case found
```

Identical model, radically different economics — which is why site-specific evaluation is a regulatory theme and why "our model has 0.95 AUROC" is the beginning of an economic case, not the end. See [screening economics](screening-economics.md) for the full programme math.

## Software engineering connection

For engineers building or buying clinical AI: **ship the confusion matrix at the deployment prevalence**, not the ROC curve alone; **let the threshold be an economic decision** — the sens/spec trade-off should minimize expected cost (missed cases × miss cost vs false alarms × workup cost), not maximize a benchmark statistic; and recognize the same math in your own tooling — alert systems, anomaly detectors, and security scanners are diagnostic tests over low-prevalence event streams, with alert fatigue as the [NNH](number-needed-to-treat.md). Model updates that shift the operating point re-open the economics (and the regulatory clearance — see [AI regulatory evaluation](ai-regulatory-evaluation.md)).

## Pitfalls

- **AUROC shopping**: comparing models on AUROC when they'll run at one threshold — compare at the operating point.
- **Trial-prevalence PPV quoted for real-world deployment** — the classic; always recompute at local prevalence.
- **Spectrum bias**: models validated on obvious cases vs healthy controls overperform on the ambiguous middle that dominates practice.
- **No downstream pathway costing**: every positive triggers a workup; a model is an intervention on the *whole pathway's* economics.

## Sources

- Diagnostic accuracy measures reference. <https://www.medcalc.org/en/manual/roc-curves.php>
- Economic evaluation of AI retinopathy screening, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01032-9>
- Laupacis et al., NEJM 1988 (NNT foundations). <https://pubmed.ncbi.nlm.nih.gov/3374545/>
