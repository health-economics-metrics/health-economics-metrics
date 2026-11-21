# Inferensens enhetsøkonomi

Inferensens enhetsøkonomi måler kostnaden per individuell prediksjon eller generering fra en KI-modell.

## Hvorfor det er viktig

Treningskostnader er en engangskostnad, men inferenskostnader gjentar seg uendelig, proporsjonalt med bruken.

## Matematikken

```
Kostnad per inferens = (kostnad per GPU-time × behandlingstid) / antall forespørsler
```

## Gjennomarbeidet eksempel

En modell for støtte til bildetolkning: GPU £2/time, 1 000 behandlinger/time = £0,002 per tolkning.

## Kobling til programvareutvikling

Det KI-spesifikke tilfellet av [skyens enhetsøkonomi](../skyens-enhetsøkonomi/) og en nøkkelfaktor for [avkastning på KI-investering](../avkastning-på-ki-investering/).

## Fallgruver

- **Å ignorere batchbehandlingsrabatter og beregne med kostnader for individuelle forespørsler.**

## Kilder

- a16z, cost of inference analyses.
- Hugging Face, inference optimization guides.
