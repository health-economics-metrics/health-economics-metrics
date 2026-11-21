# Referral to Treatment (RTT)

Referral to treatment is the elapsed time from a GP's referral to the start of consultant-led treatment. The NHS Constitution sets the standard: **92% of patients should start treatment within 18 weeks**. RTT is the single most politically visible operational metric in the English NHS.

## Why it matters

Trusts that miss RTT targets face regulatory scrutiny, intervention, and reputational damage; the national waiting list is a front-page number. Every week a patient waits is health lost (waiting in a worse health state — see the QALY maths below) and often cost gained (conditions deteriorate; see [earlier intervention](../earlier-intervention/)). Software that saves time anywhere in the referral-to-treatment pathway — triage, diagnostics turnaround, clinic capacity, scheduling — directly mitigates the operational and financial consequences of failing the standard, which is why RTT impact is a first-class benefit line in NHS digital business cases.

## The maths

```
RTT performance = patients treated within 18 weeks / total treated × 100
Waiting-time health cost per patient = wait duration × (utility_treated − utility_waiting)

Pathway view: RTT = Σ stage durations (referral triage → first appointment →
diagnostics → decision → treatment) — improve the longest queue, not the
busiest stage (see flow-metrics.md).
```

## Worked example

A specialty treats 5,000 pathway patients/year; mean wait 24 weeks; waiting utility 0.68 vs treated 0.80.

Digital triage plus straight-to-test protocols remove 5 weeks of pure queueing:

```
QALY gain = 5,000 × (5/52) × (0.80 − 0.68) = 57.7 QALYs/year
Monetised at £20,000–£30,000/QALY (see willingness-to-pay-thresholds.md):
  ≈ £1.15M–£1.73M/year of health value
```

— plus the trust moves from breaching to meeting the 18-week standard, which has governance value no spreadsheet fully captures.

## Software engineering connection

RTT is a **lead-time metric over a multi-stage queue** — the hospital's version of commit-to-production lead time (see [DORA metrics](../dora-metrics/)). The improvement method is identical: instrument every stage, find where calendar time pools (it is nearly always handoffs and queues, not clinical work), and remove wait states. Typical software wins: e-triage that routes referrals in hours instead of weekly batches, diagnostic-results push instead of follow-up appointments, and automated straight-to-test criteria. Value the improvement with [cost of delay](../cost-of-delay/) denominated in QALYs/week.

## Pitfalls

- **Improving a stage that isn't the constraint** — cutting first-appointment waits while diagnostics queues grow just moves the pool.
- **Gaming**: pathway resets and clock pauses can improve reported RTT without treating anyone sooner; audit the underlying distribution.
- **Claiming the whole pathway improvement** for one tool when several changes landed together — attribution needs a comparator.

## Sources

- NHS England, RTT waiting times statistics. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
