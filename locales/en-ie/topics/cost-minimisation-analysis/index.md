# Cost-Minimisation Analysis (CMA)

CMA compares only costs, and picks the cheapest option — legitimate *only* when the outcomes of the alternatives have been demonstrated to be equivalent.

## Why it matters

CMA is the simplest analysis and the most abused. The equivalence claim is doing all the work: if outcomes genuinely don't differ (a biosimilar vs its originator; two suppliers of the same service meeting the same specification), then cost is the only question and CMA is correct. The rigor lives in *proving* equivalence first — typically via a non-inferiority study with a pre-specified margin — which is exactly the step buyers usually skip.

## The maths

```
Given evidence that Effect_A ≈ Effect_B (within a pre-specified margin δ):
Choose min(Cost_A, Cost_B)

Costs measured from the same perspective, over the same horizon,
including switching/transition costs.
```

If equivalence cannot be evidenced, CMA is invalid — use [CEA](../cost-effectiveness-analysis/)/[CUA](../cost-utility-analysis/) instead.

## Worked example

A trust chooses between two video-consultation platforms. A 3-month parallel pilot shows completion rates 94.1% vs 93.8%, patient satisfaction 4.4 vs 4.4 — differences inside the pre-agreed δ of 2 percentage points. Outcomes: equivalent. Costs over 3 years:

```
                     Platform A     Platform B
Licences             £360,000       £210,000
Integration          £80,000        £150,000
Training/support     £60,000        £90,000
Total                £500,000       £450,000
```

Platform B wins by £50,000 — *including* its higher integration cost. Without the pilot, the equivalence claim would rest on vendor brochures, and a 1-point completion-rate difference (≈ thousands of failed consultations/year) would dwarf £50,000.

## Software engineering connection

CMA is the formal shape of commodity procurement: two CI providers meeting identical SLOs, two object stores with the same durability spec. The health-economics lesson is the *order of operations*: first evidence equivalence (benchmark against your workload, pilot against your SLOs, with the margin agreed in advance), then compare total costs including migration. "They're basically the same, B is cheaper" without the first step is how orgs buy the tool that's 10% cheaper and 40% worse. Corollary: when a vendor argues price, make them stipulate equivalence — it's binding in the other direction too.

## Pitfalls

- **Assumed equivalence** — the defining sin; absence of evidence of difference is not evidence of equivalence (underpowered pilots "show" equivalence for free).
- **Omitting switching costs** — migration, retraining, and parallel running belong in the cost side.
- **Equivalence on the wrong outcomes**: equivalent on the measured metric, different on one that matters (accessibility, tail latency, data egress).

## Sources

- York Health Economics Consortium glossary: cost-minimisation analysis. <https://yhec.co.uk/glossary/cost-minimisation-analysis/>
- Briggs AH, O'Brien BJ. "The death of cost-minimisation analysis?" Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11288052/>
