# Incrementele kosteneffectiviteitsratio (ICER)

De ICER meet de extra kosten per extra eenheid gezondheidsuitkomst van één interventie ten opzichte van een alternatief.

## Waarom het ertoe doet

De ICER is de centrale beslissingsregel in de meeste HTA-systemen: onder de drempel = kosteneffectief, erboven = niet.

## De wiskunde

```
ICER = (Kosten_A − Kosten_B) / (Effecten_A − Effecten_B)
```

## Uitgewerkt voorbeeld

Nieuwe behandeling kost £5.000 meer en levert 0,25 extra QALY op ten opzichte van standaardzorg: ICER = £5.000 / 0,25 = £20.000/QALY — net onder de NICE-drempel.

## Verbinding met software-engineering

Vergelijkbaar met het berekenen van extra infrastructuurkosten per extra eenheid betrouwbaarheid of prestatie bij het vergelijken van architectuuropties.

## Valkuilen

- **De ICER berekenen tegen de verkeerde comparator.**
- **Een negatieve ICER verkeerd interpreteren zonder het kwadrant te specificeren.**
- **Een ICER over valuta's heen vergelijken zonder expliciete omrekenstap**: een ICER die in de valuta van het ene land is berekend, moet met een vermelde methode worden omgerekend voordat hij met de drempel van een ander land wordt vergeleken; zie [ICER-vergelijking tussen valuta's](../icer-vergelijking-tussen-valuta-s/) voor waarom de keuze van de omrekenfactor (koopkrachtpariteit vs marktwisselkoers) zelf de invoeringsbeslissing kan omkeren.

## Bronnen

- NICE, Guide to the methods of technology appraisal.
- Drummond MF, et al., Methods for the Economic Evaluation of Health Care Programmes.
