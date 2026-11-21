# Sensitivitetsanalyse

Sensitivitetsanalyse tester hvor sensitiv konklusjonen av en økonomisk evaluering er for endringer i de underliggende antakelsene.

## Hvorfor det er viktig

Enhver business case hviler på usikre antakelser; sensitivitetsanalyse viser hvilke antakelser som faktisk betyr noe.

## Matematikken

```
Sensitivitet for variabel X = ΔUtfall / ΔX
```

Tornadodiagrammer rangerer variabler etter innvirkning, fra størst til minst.

## Gjennomarbeidet eksempel

En business case for en triage-app varierer antakelsen om adopsjonsrate mellom 20 % og 60 %: ROI-intervallet strekker seg fra negativt til sterkt positivt.

## Kobling til programvareutvikling

Ligner på å teste ytelsesantakelser under ulike belastningsscenarioer.

## Fallgruver

- **Å bare teste én variabel om gangen når antakelser er korrelerte.**
- **Å velge urealistiske intervaller som forvrenger sensitiviteten.**

## Kilder

- NICE, Guide to the methods of technology appraisal.
- Briggs AH, et al., Decision Modelling for Health Economic Evaluation.
