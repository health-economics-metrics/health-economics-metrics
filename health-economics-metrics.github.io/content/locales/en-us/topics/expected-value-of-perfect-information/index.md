# Expected Value of Perfect Information (EVPI)

EVPI is the maximum amount a decision-maker should pay to eliminate uncertainty before deciding — the formal price of "let's run a study first."

## Why it matters

Health systems constantly face the choice: adopt now on imperfect evidence, or fund more research first. EVPI puts a number on the second option. If EVPI is £50,000 and the proposed trial costs £2 million, adopt now. If EVPI is £20 million, the trial is a bargain. The same question — "should we pilot this before rolling it out?" — arises for every enterprise tool decision, and almost nobody prices it.

## The math

EVPI is the gap between deciding with perfect foresight and deciding now on expectations:

```
EVPI = E_θ[ max_j NMB(j, θ) ]  −  max_j E_θ[ NMB(j, θ) ]

θ        = uncertain parameters (with their joint distribution)
NMB(j,θ) = net monetary benefit of option j given θ
```

First term: average of the best-choice payoff across each possible world (you always pick right). Second term: payoff of the single option that is best on average (you must commit now). EVPI ≥ 0 always. Population EVPI multiplies by the number of decisions affected. Computed directly from [PSA](../probabilistic-sensitivity-analysis/) draws.

## Worked example

Roll out an AI documentation assistant to 5,000 clinicians, or not. Two worlds:

```
World A (p = 0.6): assistant saves 20 min/day → NMB of rollout = +£8M
World B (p = 0.4): assistant saves ~0 (workflow friction) → NMB of rollout = −£3M
NMB of "don't roll out" = £0 in both worlds.
```

Decide now: E[NMB rollout] = 0.6 × 8 − 0.4 × 3 = **+£3.6M** → roll out.

With perfect information: in world A choose rollout (+£8M), in world B choose nothing (£0). Expected value = 0.6 × 8 + 0.4 × 0 = **£4.8M**.

```
EVPI = 4.8M − 3.6M = £1.2M
```

A rigorous 3-month pilot costing £150,000 that substantially resolves which world you're in is emphatically worth it — and any pilot costing more than £1.2M is not, however thorough.

## Software engineering connection

EVPI is the economics of the spike, the pilot, the A/B test, and the proof-of-concept. It yields two practical rules:

- **A pilot is only worth funding if the decision could actually change.** If you'd roll out regardless of the pilot result, EVPI = 0 and the pilot is theater.
- **Cap pilot spend at EVPI.** The value of information is bounded by the value of the decision it informs.

Partial EVPI (EVPPI) extends this to single parameters: "what is it worth to nail down the time-saved number specifically?" — which tells you what the pilot should measure.

## Pitfalls

- **Running pilots with no decision rule attached** — information that can't change the choice is worthless by definition.
- **Ignoring the delay cost of gathering information**: a 6-month pilot delays 6 months of benefit ([cost of delay](../cost-of-delay/)); net value of the pilot = EVPI resolved − delay cost − pilot cost.
- **Treating EVPI as a forecast.** It is an upper bound on information value, not an estimate of what a specific study will deliver.

## Sources

- Claxton K. "Exploring uncertainty in cost-effectiveness analysis." PharmacoEconomics 2008. <https://pubmed.ncbi.nlm.nih.gov/18279550/>
- York Health Economics Consortium glossary: EVPI. <https://yhec.co.uk/glossary/expected-value-of-perfect-information-evpi/>
