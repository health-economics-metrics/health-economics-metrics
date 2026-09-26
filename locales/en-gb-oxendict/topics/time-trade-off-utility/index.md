# Time Trade-Off (TTO) Utility Elicitation

TTO is a standard method for eliciting a health-state utility value directly from a respondent, rather than inventing one. It is one of the elicitation methods — alongside standard gamble and discrete-choice experiments — that produce the value sets behind instruments like [EQ-5D](../eq-5d/), and therefore behind most [QALY](../quality-adjusted-life-year/) calculations downstream.

## Why it matters

Every utility weight that feeds a QALY calculation had to come from somewhere. TTO is how: for a state considered better than death, a respondent is asked how many years `X` in full health they would consider equivalent to `T` years in the impaired state (`X < T`); the utility is `X / T`. For a state some respondents consider worse than death, the standard formula breaks down (it can't represent utilities below zero cleanly), so an extended TTO applies instead. A software engineer or analyst who treats a utility weight as a given input, without knowing it required a validated elicitation protocol to produce, is one step removed from a number they can't defend if challenged.

## The maths

```
Standard TTO (state better than death):
  utility = time_in_full_health / time_in_impaired_state

Extended TTO (state worse than death):
  utility = -time_traded_for_death / (total_duration - time_traded_for_death)
```

`time_in_full_health` / `time_in_impaired_state` — years `X` in full health judged equivalent to `T` years in the impaired state. `time_traded_for_death` / `total_duration` — in the worse-than-death formulation, years `a` of a `T`-year remaining life the respondent would trade for immediate death, preferring `T − a` years in full health followed by death over `T` years in the worse-than-death state. The result is negative, anchored so that death = 0.

## Worked example

**Standard**: a respondent is in an impaired state for 10 years and is indifferent with 7 years in full health: utility = 7 / 10 = **0.7**.

**Worse than death**: over a 10-year remaining life, the respondent would trade 2 years for immediate death — they prefer 8 years in full health followed by death over 10 years in the worse-than-death state: utility = −2 / (10 − 2) = −2 / 8 = **−0.25**.

## Software engineering connection

The same point a DevEx or engagement survey runs into when it asks people to rate something on an unexamined 0–10 scale applies here in reverse: TTO exists precisely because "just ask people to rate it" isn't a validated elicitation method on its own. Before building a composite index — a DevEx score, an engagement index, a burnout scale — on top of a self-rated number, ask what elicited it and whether that method was validated, the same question health economists ask of a utility weight before it goes into a QALY.

## Pitfalls

- **Individual-value generalization**: TTO values are elicited from a *sample* of the general public (or patients), not the individual whose care is being decided — using one respondent's TTO value as if it generalizes is a sampling error.
- **Wrong formulation for the state**: the standard TTO formula assumes the state is unambiguously better than death; applying it to a state some respondents would consider worse than death, without switching to the extended formulation, silently produces a wrong (positive) utility.
- **Incomparable durations**: TTO values elicited using different remaining-life durations `T` for the worse-than-death comparison aren't directly comparable without checking the study design held `T` constant.

## Sources

- Torrance GW. "Social preferences for health states: an empirical evaluation of three measurement techniques." Socioecon Plan Sci. 1976;10(3):129-36.
- Patrick DL, Starks HE, Cain KC, Uhlmann RF, Pearlman RA. "Measuring preferences for health states worse than death." Med Decis Making. 1994;14(1):9-18.
