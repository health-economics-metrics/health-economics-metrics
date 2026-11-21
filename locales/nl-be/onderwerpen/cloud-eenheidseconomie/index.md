# Cloud-eenheidseconomie

Cloud-eenheidseconomie meet infrastructuurkosten per individuele transactie, patiënt of verzoek.

## Waarom het ertoe doet

Cloudfacturen tonen het totaalbedrag, maar niet welke functie of patiëntpad de kosten veroorzaakt.

## De wiskunde

```
Eenheidskosten = clouduitgaven (£/maand) / transactievolume (per maand)
```

## Uitgewerkt voorbeeld

Beeldopslagdienst: £40.000/maand, 200.000 scans = £0,20 per scan.

## Verbinding met software-engineering

Splitst [totale eigendomskosten](../totale-eigendomskosten/) uit naar operationele schaal.

## Valkuilen

- **Reservekortingen negeren en berekenen tegen on-demand tarieven.**

## Bronnen

- FinOps Foundation, unit economics.
- AWS Well-Architected, cost optimization pillar.
