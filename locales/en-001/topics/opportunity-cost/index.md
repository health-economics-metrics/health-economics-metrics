# Opportunity Cost

Opportunity cost is the value of the best alternative you give up when you commit a resource. In a health system with a fixed budget, spending £1 million on one thing means £1 million of health *not* produced somewhere else.

## Why it matters

Opportunity cost is the deepest idea in health economics, and the one software engineers most often skip. Health budgets are fixed in any given year, so a new technology is never funded from "extra" money — it displaces something. The question a payer actually asks is not "is this good?" but "is this better than what the same money currently buys?"

This is why cost-effectiveness thresholds exist at all: the threshold is an estimate of the health that money buys at the margin of the current system. See [willingness-to-pay thresholds](../willingness-to-pay-thresholds/).

## The maths

There is no single formula; opportunity cost is a comparison discipline:

```
Opportunity cost of choosing A = value of best forgone alternative B
Net gain from A = value(A) − value(B)
```

The empirical benchmark: Claxton et al. (2015) estimated the NHS produces one QALY for roughly **£13,000** at the margin. So £13,000 spent on a technology that produces less than one QALY makes the nation *less* healthy, even if the technology "works."

## Worked example

An NHS trust's transformation budget can fund exactly one of:

- **Option A**: e-rostering software — saves £400,000/year in agency staffing spend.
- **Option B**: discharge-coordination software — saves 2,000 bed days/year. At a marginal cost of about £150 per bed day actually freed, that is £300,000/year, plus earlier treatment for waiting patients.

Funding A means giving up B. The opportunity cost of A is B's £300,000 + patient benefit; the *net* case for A is only the difference, not A's headline £400,000. Any business case that compares a proposal against "do nothing" instead of the best alternative overstates its value.

## Software engineering connection

Engineering capacity is a fixed budget too — roadmap slots, not pounds. A platform team that funds tool A saving engineer-hours at £500/hour when tool B delivers the same at £200/hour is destroying capacity, exactly as a health system funding a £40,000/QALY drug displaces £13,000/QALY care. The discipline transfers directly:

- Always name the comparator ("versus what?").
- Value engineer time at what it would otherwise produce, not at salary alone.
- Treat "we have budget left" as the beginning of the analysis, not the end.

## Pitfalls

- **Comparing against nothing.** The correct comparator is the next-best use of the money, which is rarely "do nothing."
- **Assuming saved time has zero opportunity cost.** Time saved is only valuable if redeployed to something valuable — see [cash-releasing vs non-cash-releasing savings](../cash-releasing-vs-non-cash-releasing/).
- **Ignoring displacement.** "The budget will expand to fit" is almost never true in a national health service in-year.

## Sources

- Claxton K, et al. "Methods for the estimation of the NICE cost effectiveness threshold." Health Technology Assessment 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- York Health Economics Consortium glossary. <https://yhec.co.uk/glossary/opportunity-cost/>
