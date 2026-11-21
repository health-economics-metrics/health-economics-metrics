# Budgetimpactanalyse (BIA)

Budgetimpactanalyse schat de netto verandering in uitgaven voor een betaler bij het invoeren van een nieuwe interventie, ongeacht de kosteneffectiviteit ervan.

## Waarom het ertoe doet

Een interventie kan zeer kosteneffectief zijn (lage £/QALY) maar toch onbetaalbaar omdat het totale budgetbeslag te groot is — betaalbaarheid en waarde zijn afzonderlijke vragen.

## De wiskunde

```
Budgetimpact = (Nieuwe interventiekosten × verwacht volume) − (Vervangen interventiekosten × verwacht volume)
```

## Uitgewerkt voorbeeld

Een nieuwe behandeling met een ICER van £15.000/QALY (goed onder de drempel) heeft toch een budgetimpact van £200 miljoen/jaar vanwege een grote patiëntenpopulatie, wat gefaseerde invoering vereist.

## Verbinding met software-engineering

Vergelijkbaar met het beoordelen of een technisch superieure oplossing past binnen het jaarlijkse infrastructuurbudget, los van de vraag of het de beste architectuur is. Een gepubliceerd budgetimpacttotaal verdelen over locaties, cohorten of boekjaren, en de delen exact laten aansluiten op het gepubliceerde cijfer, is precies [exacte-centen kostentoewijzing](../exacte-centen-kostentoewijzing/); de vele posten optellen die het totaal in de eerste plaats voeden is [valutaveilige kostenaggregatie](../valutaveilige-kostenaggregatie/).

## Valkuilen

- **Kosteneffectiviteit verwarren met betaalbaarheid.**
- **Verwacht volume onderschatten bij nieuwe indicaties die zich uitbreiden.**

## Bronnen

- ISPOR, budget impact analysis good practices.
- NICE, budget impact test guidance.
