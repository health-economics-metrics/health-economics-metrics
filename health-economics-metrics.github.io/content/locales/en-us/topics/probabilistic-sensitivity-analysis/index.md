# Probabilistic Sensitivity Analysis (PSA)

PSA assigns a probability distribution to every uncertain parameter, samples them all simultaneously thousands of times (Monte Carlo), and reports the *probability* that an option is the best choice — instead of a single point estimate.

## Why it matters

NICE's reference case *requires* PSA. Deterministic analysis answers "what if one input is wrong?"; PSA answers "given everything we don't know at once, how likely is it that we're making the right call?" Its signature output, the **cost-effectiveness acceptability curve (CEAC)**, plots the probability an option is cost-effective against the willingness-to-pay threshold — turning "the ICER is £24,000/QALY" into "there is a 78% chance this is the right choice at £30,000/QALY."

## The math

```
For each of N draws (N ≈ 10,000):
  sample every parameter θ from its distribution
    (costs ~ Gamma, probabilities ~ Beta, utilities ~ Beta, effects ~ Normal/logNormal)
  compute NMB_j(θ) = λ × Effect_j(θ) − Cost_j(θ) for each option j

CEAC_j(λ) = fraction of draws in which option j has the highest NMB at threshold λ
```

See [net monetary benefit](../net-monetary-benefit/) for NMB and [willingness-to-pay thresholds](../willingness-to-pay-thresholds/) for λ.

## Worked example

Platform migration business case. Three uncertain inputs:

```
Migration cost      ~ Gamma,  mean £800k, sd £200k
Annual benefit      ~ Normal, mean £350k, sd £150k
Benefit duration    ~ Uniform, 3–6 years
```

For each of 10,000 draws compute net benefit = duration × annual − cost (discount omitted for clarity). Illustrative results:

```
Mean net benefit:      £775k
Probability net > 0:   0.86
5th–95th percentile:  −£180k … +£1.9M
```

The point estimate said "obviously yes." The PSA says "86% yes, with a real tail where we lose £180k+" — which is what a portfolio owner actually needs, and it prices the case for running a discovery spike first (see [EVPI](../expected-value-of-perfect-information/)).

## Software engineering connection

Engineers already trust Monte Carlo for delivery forecasting (throughput sampling beats point estimates). Extend the same machinery to money: distributions on adoption, time saved, and salary, then report "probability this platform investment is net-positive" instead of a false-precision ROI. A CEAC-style curve — probability of being the best option as a function of how the org values an engineer-hour — is a genuinely better artifact for a funding committee than any single number.

## Pitfalls

- **Garbage distributions**: PSA with made-up standard deviations is deterministic analysis wearing a lab coat. Base spreads on data or structured expert elicitation.
- **Ignoring correlation** between parameters (high adoption usually correlates with high time-saved); independent sampling understates tail risk.
- **Reporting only the mean** of the simulation — the entire point is the distribution and decision probability.

## Sources

- Fenwick E, Claxton K, Sculpher M. "Representing uncertainty: the role of cost-effectiveness acceptability curves." Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11316594/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
