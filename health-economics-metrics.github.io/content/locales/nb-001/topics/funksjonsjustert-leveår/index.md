# Funksjonsjustert leveår (DALY)

DALY måler sykdomsbyrde som antall friske leveår som går tapt gjennom for tidlig død og funksjonsnedsettelse.

## Hvorfor det er viktig

DALY er speilbildet av QALY: der QALY måler oppnådd helse, måler DALY tapt helse, og det er standardmålet innen global helse.

## Matematikken

```
DALY = YLL (tapte leveår) + YLD (år levd med funksjonsnedsettelse)
```

## Gjennomarbeidet eksempel

En sykdom som gjør at 1 000 mennesker dør 10 år for tidlig (10 000 YLL) pluss 5 000 mennesker lever 2 år med en funksjonsnedsettelse på 0,3 (3 000 YLD) = 13 000 DALY.

## Kobling til programvareutvikling

Ligner på å måle "tapt brukerverdi" gjennom systemavbrudd — både varighet og alvorlighetsgrad teller.

## Fallgruver

- **Å bruke utdaterte YLD-vekter fra gamle studier.**
- **Å blande DALY og QALY uten å korrigere fortegnet.**

## Kilder

- WHO, Global Burden of Disease study.
- Murray CJL, Lopez AD, The Global Burden of Disease.
