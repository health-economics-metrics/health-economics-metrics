# Sensitivity Analysis

Deterministic sensitivity analysis (DSA) varies one assumption at a time across a plausible range to see whether the conclusion survives. The standard visualization is a tornado diagram: parameters ranked by how much they swing the result.

## Why it matters

Every economic model is built on estimates — time saved, uptake, unit costs. Health technology assessment refuses to accept a point estimate ("ROI is 340%") without evidence that the conclusion is robust to reasonable disagreement about the inputs. A tornado diagram tells the decision-maker *which assumption to interrogate*: if the case only works when the most contested parameter is at its optimistic end, everyone can see that immediately.

This is the single most transferable habit from health economics to software business cases.

## The maths

For each parameter p with plausible range [p_low, p_high]:

```
Result_low  = model(p = p_low,  all others at base case)
Result_high = model(p = p_high, all others at base case)
Swing(p)    = |Result_high − Result_low|
```

Rank parameters by swing; plot horizontal bars around the base-case result. Variants: two-way DSA (vary two parameters on a grid), threshold analysis (find the parameter value where the decision flips).

## Worked example

AI coding assistant for 200 developers. Base case: £39/dev/month licence; 30 min/dev/day saved; loaded cost £60/hour; 220 working days.

```
Base-case annual benefit = 200 × 0.5h × 220 × £60 = £1,320,000
Annual cost              = 200 × £39 × 12         = £93,600
Base-case net            = £1,226,400
```

Tornado (one parameter at a time):

```
Time saved 0.1–1.0 h/day: net = £170,400 … £2,546,400   (swing £2.38M) ← dominates
Loaded cost £40–£80/h:    net = £786,400 … £1,666,400   (swing £0.88M)
Working days 200–240:     net = £1,106,400 … £1,346,400 (swing £0.24M)
Licence £30–£50/mo:       net = £1,248,000 … £1,200,000 (swing £48k)
```

Threshold analysis: net benefit hits zero at about **2.1 minutes/day** saved. The decision is insensitive to licence price and hinges entirely on the time-saved estimate — so measure that, not the rest. (And remember the result is capacity, not cash — see [cash-releasing vs non-cash-releasing](../cash-releasing-vs-non-cash-releasing/).)

## Software engineering connection

Engineers already do this instinct as "what if we're wrong about X?" — DSA just makes it systematic and visible. Put a tornado diagram in every tooling proposal, capacity plan, and build-vs-buy analysis. It converts arguments about whose gut feeling is right into agreements about which parameter to go measure — often via a pilot, whose value can itself be priced (see [expected value of perfect information](../expected-value-of-perfect-information/)).

## Pitfalls

- **Ranges chosen to flatter**: ±10% around every input regardless of actual uncertainty. Time-saved estimates deserve ±80%; licence prices ±10%.
- **One-at-a-time misses interactions** — correlated parameters (uptake and time saved) need two-way analysis or full [probabilistic sensitivity analysis](../probabilistic-sensitivity-analysis/).
- **Doing the analysis and ignoring it**: if the tornado says the case hinges on one soft number, the next step is measurement, not sign-off.

## Sources

- York Health Economics Consortium glossary: deterministic sensitivity analysis. <https://yhec.co.uk/glossary/deterministic-sensitivity-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
