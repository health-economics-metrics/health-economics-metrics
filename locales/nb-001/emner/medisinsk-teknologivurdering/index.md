# Medisinsk teknologivurdering (HTA)

Medisinsk teknologivurdering er den formelle prosessen der organer som NICE, ICER (USA) og CADTH vurderer om en ny teknologi er verdt å finansiere.

## Hvorfor det er viktig

HTA-organer avgjør i praksis markedstilgangen for nye helseteknologier i de fleste utviklede helsevesen.

## Matematikken

```
HTA-anbefaling = f(ICER kontra terskel, budsjettpåvirkning, evidenskvalitet, likhetshensyn)
```

## Gjennomarbeidet eksempel

NICE vurderer et nytt diagnostisk verktøy: ICER £18 000/QALY (under terskelen), moderat budsjettpåvirkning og solid klinisk dokumentasjon fører til en positiv anbefaling for rutinemessig bruk.

## Kobling til programvareutvikling

Ligner på en formell arkitekturgodkjenningsprosess som vurderer kostnad, risiko og dokumentasjon på effektivitet før en ny teknologi godkjennes organisasjonsbredt.

For hvordan en flersyklusmodell i HTA faktisk simuleres kohort for kohort, syklus for syklus, se [Markov-kohortsimulering](../markov-kohortsimulering/).

## Fallgruver

- **Å anta at en positiv klinisk studie automatisk fører til HTA-godkjenning.**
- **Å behandle budsjettpåvirkning og kostnadseffektivitet som samme kriterium.**

## Kilder

- NICE, technology appraisal process.
- ICER (US), value assessment framework.
