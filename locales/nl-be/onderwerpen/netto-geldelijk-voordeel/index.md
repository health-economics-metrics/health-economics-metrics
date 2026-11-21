# Netto geldelijk voordeel (NMB)

Het netto geldelijk voordeel zet gezondheidswinst om in geld tegen de drempelwaarde en trekt de kosten af, zodat interventies met een enkel getal kunnen worden gerangschikt.

## Waarom het ertoe doet

In tegenstelling tot de ICER is de NMB lineair, waardoor statistische analyse (gemiddelden, betrouwbaarheidsintervallen) veel eenvoudiger wordt.

## De wiskunde

```
NMB = (Effecten × drempelwaarde) − Kosten
```

## Uitgewerkt voorbeeld

Een interventie levert 0,3 QALY op tegen £4.000 kosten, drempel £20.000/QALY: NMB = (0,3 × £20.000) − £4.000 = £2.000 (positief = kosteneffectief).

## Verbinding met software-engineering

Vergelijkbaar met het omzetten van meerdere impactdimensies (snelheid, betrouwbaarheid, functies) in één samengestelde waardescore voor prioritering.

## Valkuilen

- **De verkeerde drempelwaarde gebruiken bij het berekenen van de NMB.**
- **NMB-vergelijkingen maken tussen studies die verschillende drempels gebruikten.**

## Bronnen

- Stinnett AA, Mullahy J, "Net health benefits: a new framework."
- NICE DSU Technical Support Documents.
