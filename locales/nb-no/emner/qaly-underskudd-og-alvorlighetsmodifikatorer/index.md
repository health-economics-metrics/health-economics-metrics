# QALY-underskudd og alvorlighetsmodifikatorer

QALY-underskudd måler hvor mye helse en pasientgruppe allerede mister sammenlignet med en normal forventet levealder; alvorlighetsmodifikatorer gir ekstra vekt til helsegevinster for sykere populasjoner.

## Hvorfor det er viktig

Uten korrigering behandler en standardterskel for ICER en QALY oppnådd av en alvorlig syk pasient på samme måte som en QALY oppnådd av en lett syk pasient.

## Matematikken

```
Underskudd = forventet friske QALY uten sykdom − forventet QALY med sykdom
Modifisert terskel = grunnterskel × alvorlighetsvekt(underskudd)
```

## Gjennomarbeidet eksempel

NICEs alvorlighetsmodifikator hever den effektive terskelen til £30 000/QALY for tilstander med et QALY-underskudd på 12 eller mer, sammenlignet med standardintervallet £20 000–£30 000.

## Kobling til programvareutvikling

Ligner på å gi høyere prioritet til å fikse feil som rammer de mest berørte brukerne, selv om antallet berørte brukere er lite.

## Fallgruver

- **Å beregne underskudd med feil referansepopulasjon.**
- **Å anvende alvorlighetsmodifikatorer oppå allerede justerte terskler, noe som forårsaker dobbelttelling.**

## Kilder

- NICE, health technology evaluations manual (severity modifier).
- Shah KK, et al., severity of illness in health technology assessment.
