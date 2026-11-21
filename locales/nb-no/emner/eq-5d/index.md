# EQ-5D

EQ-5D er et standardisert instrument som måler helsetilstand langs fem dimensjoner for å generere nyttevekter for QALY-beregninger.

## Hvorfor det er viktig

De fleste QALY-beregninger i praksis er basert på EQ-5D-data, noe som gjør instrumentet til det faktiske fundamentet bak tall som presenteres som abstrakt "nytte".

## Matematikken

```
Nytteindeks = f(mobilitet, egenomsorg, vanlige aktiviteter, smerte/ubehag, angst/depresjon)
```

## Gjennomarbeidet eksempel

En pasient rapporterer moderate problemer med mobilitet og smerte, ingen problemer ellers: dette tilstandsprofilen tilsvarer en nytte på rundt 0,73 ifølge det britiske verdisettet.

## Kobling til programvareutvikling

Ligner på en sammensatt tilfredshetsscore bygget fra flere målte dimensjoner i stedet for ett grovt mål.

## Fallgruver

- **Å bruke et verdisett fra feil land.**
- **Å blande den eldre EQ-5D-3L og den nyere EQ-5D-5L uten justering.**
- **Å behandle et verdisett som selvbegrunnende**: nytteverdiene et verdisett returnerer, er selv hentet fra allmennheten gjennom time trade-off-undersøkelser (eller beslektede valgbaserte undersøkelser); se [Time trade-off (TTO) for utledning av nytteverdi](../time-trade-off-tto-for-utledning-av-nytteverdi/) for hvordan.

## Kilder

- EuroQol Group, EQ-5D user guide.
- NICE, position statement on use of the EQ-5D-5L.
