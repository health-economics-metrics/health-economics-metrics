# Incremental Cost-Effectiveness Ratio (ICER)

The ICER is the extra cost per extra unit of health effect when you choose one option over the next-best alternative. It is the headline number of health technology assessment. (When the effect unit is QALYs, it is also called the incremental cost-utility ratio, ICUR.)

## Why it matters

Health systems never evaluate a technology in isolation — always *incrementally*, against what would otherwise be done. NICE compares a technology's ICER to its **£20,000–£30,000 per QALY** threshold; the US ICER institute reports across $50,000–$200,000/QALY; Canada works to roughly CAD$50,000/QALY. Whether your product is "worth it" to a national health service is, formally, whether its ICER clears the local threshold. See [willingness-to-pay thresholds](../willingness-to-pay-thresholds/).

## The maths

```
ICER = (Cost_new − Cost_comparator) / (Effect_new − Effect_comparator)
     = ΔC / ΔE
```

Rules of interpretation:

- ΔC < 0, ΔE > 0: new option **dominates** — cheaper and better; no ratio needed.
- ΔC > 0, ΔE > 0: compute ICER, compare to threshold λ; adopt if ICER < λ.
- ΔC > 0, ΔE < 0: new option is dominated — reject.
- Ratios behave badly near ΔE = 0 — prefer [net monetary benefit](../net-monetary-benefit/) for ranking.

The comparator must be the *next-best non-dominated option*, not "do nothing" — see [dominance and the efficiency frontier](../dominance-and-efficiency-frontier/).

## Worked example

A remote-monitoring service for heart-failure patients, per 1,000 patients/year, versus usual care:

```
Costs:   service £900,000; admissions avoided save £600,000
         ΔC = 900,000 − 600,000 = £300,000
Effects: earlier intervention gains 25 QALYs
         ΔE = 25

ICER = 300,000 / 25 = £12,000 per QALY
```

£12,000/QALY is comfortably below NICE's £20,000 threshold — a strong case. Note how the *net* cost matters: without the £600,000 offset the ICER would be £36,000/QALY and the case would likely fail. Cost offsets and their evidence quality are where these analyses are won and lost (see [avoided downstream costs](../avoided-downstream-costs/)).

## Software engineering connection

The ICER discipline transfers wholesale to engineering decisions:

```
(cost of option B − cost of option A) / (outcome B − outcome A)
```

— incremental cost per additional deploy, per engineer-hour saved, per incident avoided — always against the next-best alternative, not against doing nothing. The two habits worth stealing: (1) *name the comparator explicitly*; most tool ROI claims secretly compare against a strawman; (2) *net the costs first* — a tool that costs £100k but displaces £80k of existing spend has ΔC = £20k.

## Pitfalls

- **Comparator gaming**: comparing against an obsolete or artificially bad baseline inflates ΔE and flatters the ICER.
- **Averages instead of increments**: cost per QALY of a whole programme is not the ICER of expanding or adopting it.
- **Point-estimate worship**: ICERs are ratios of two uncertain differences; report uncertainty via [PSA and CEACs](../probabilistic-sensitivity-analysis/).
- **Negative ICERs are ambiguous** (cheaper-and-better vs costlier-and-worse give the same sign) — never report a negative ICER without saying which quadrant it is.

## Sources

- NICE: cost-effectiveness thresholds FAQ. <https://www.nice.org.uk/what-nice-does/faqs/changes-to-nice-s-cost-effectiveness-thresholds>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
- York Health Economics Consortium glossary: ICER. <https://yhec.co.uk/glossary/incremental-cost-effectiveness-ratio-icer/>
