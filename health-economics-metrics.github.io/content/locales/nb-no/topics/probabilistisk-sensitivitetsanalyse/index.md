# Probabilistisk sensitivitetsanalyse

Probabilistisk sensitivitetsanalyse (PSA) varierer alle usikre parametere samtidig via Monte Carlo-simulering for å produsere en sannsynlighetsfordeling av utfall.

## Hvorfor det er viktig

Enkel sensitivitetsanalyse tester én variabel om gangen; PSA fanger den kombinerte usikkerheten til alle parametere sammen.

## Matematikken

```
For hver simulering i: trekk parameterverdier fra deres fordelinger, beregn utfall_i
Sannsynlighet for kostnadseffektivitet = antall simuleringer under terskelen / totalt antall simuleringer
```

## Gjennomarbeidet eksempel

10 000 Monte Carlo-simuleringer av et nytt diagnostisk verktøy viser at det er kostnadseffektivt i 72 % av simuleringene ved en terskel på £20 000/QALY.

## Kobling til programvareutvikling

Ligner på Monte Carlo-belastningstesting som varierer flere usikre systemparametere samtidig.

## Fallgruver

- **Å ignorere korrelasjoner mellom parametere ved sampling.**
- **Å feiltolke CEAC som en enkel prosentandel i stedet for en sannsynlighetsfordeling.**

## Kilder

- Briggs AH, et al., Decision Modelling for Health Economic Evaluation.
- NICE DSU Technical Support Documents.
