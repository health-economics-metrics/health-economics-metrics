# Cross-Currency ICER Comparison

Comparing an [ICER](../incremental-cost-effectiveness-ratio/) computed in one country's currency against another country's [willingness-to-pay threshold](../willingness-to-pay-thresholds/) — or pooling cost data collected across a multinational trial — requires an explicit, auditable currency-conversion step. Get the conversion method wrong and the same underlying evidence can flip an adoption decision, even though nothing about the clinical or cost data has changed.

## Why it matters

ISPOR's methods guidance for multinational clinical trials (Willke et al., *Health Economics*, 1998) recommends converting resource costs using **purchasing power parity (PPP)** — not market exchange rates — when comparing the real economic value of resources across countries, and reserving market foreign-exchange rates for what they're actually for: modelling real cross-border cash payment flows. Conflating the two is one of the most common multinational HTA methodology errors, precisely because both look like "the exchange rate" to someone who hasn't read the guidance, and a spreadsheet doesn't stop you doing it wrong.

## The maths

```
icer_in_local_currency = convert(icer_in_source_currency, conversion_factor)

conversion_factor should be:
  PPP conversion factor  — for comparing real economic value of resources
                            across countries (ISPOR-recommended for
                            multinational CEA)
  market FX rate         — only for actual cross-border cash payments

adopt if icer_in_local_currency < local_threshold
```

The decision rule itself is the ordinary [ICER threshold rule](../willingness-to-pay-thresholds/) — `adopt if ICER < λ` — the methodological question this topic addresses is entirely about *which conversion factor* produces the `icer_in_local_currency` figure that rule is applied to.

## Worked example

A drug's ICER from a US trial is $45,000/QALY. A hypothetical importing country sets its own illustrative threshold at £34,000/QALY (a hypothetical country-specific figure for this example only — real thresholds vary by country and change over time, and must always be sourced and dated).

**Using a PPP conversion factor of 0.72** (illustrative, for this worked example only): $45,000 × 0.72 = £32,400/QALY. £32,400 < £34,000 → **adopt**.

**Using a market exchange rate of 0.79** instead (illustrative): $45,000 × 0.79 = £35,550/QALY. £35,550 > £34,000 → **reject**.

The same underlying $45,000/QALY ICER produces an adopt decision under PPP conversion and a reject decision under market-FX conversion. This is the concrete illustration of why ISPOR guidance treats the choice of conversion factor as methodologically consequential — not a rounding detail, and not something to leave implicit in a spreadsheet formula that nobody double-checks.

## Software engineering connection

This is the health-economics mirror of a well-known engineering domain: i18n/l10n multi-currency pricing correctness in commercial software, where a SaaS pricing page must never silently compare a `$` amount to a `£` price. The type-level guarantee that a well-built `Money` type provides — comparison methods that refuse to compare mismatched currencies, forcing an explicit conversion step first — is a direct software-engineering parallel to the health-economics methodological point here: don't compare unconverted figures across currencies, and don't let the conversion step be implicit or undocumented.

## Pitfalls

- **Silently comparing amounts in different currencies**: ad hoc spreadsheet HTA work that subtracts or compares a dollar figure and a pound figure without a conversion step first — a bug class that a real currency-aware `Money` type catches by construction rather than leaving as a silent error.
- **Conflating market exchange rate with PPP**: the single most common multinational HTA methods error per ISPOR guidance — the two numbers can differ substantially and answer different questions (real economic value vs actual cash flow).
- **Not dating the exchange rate or PPP index used**: both move over time, so any cited conversion factor must be dated in the same way this repo dates its other benchmark figures (Green Book carbon values, value of a prevented fatality, and so on).

## Sources

- Willke RJ, Glick HA, Polsky D, Schulman K. "Estimating country-specific cost-effectiveness from multinational clinical trials." *Health Economics*. 1998;7(6):481-93.
- OECD, Purchasing Power Parities (PPP) data. <https://www.oecd.org/en/data/indicators/purchasing-power-parities-ppp.html>
