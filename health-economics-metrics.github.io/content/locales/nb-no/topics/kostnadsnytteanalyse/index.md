# Kostnadsnytteanalyse (CUA)

Kostnadsnytteanalyse sammenligner intervensjoner på kostnad per QALY, noe som gjør helt ulike behandlinger sammenlignbare på én skala.

## Hvorfor det er viktig

CUA er standardmetoden til NICE og de fleste HTA-organer fordi den kan sammenligne et hjertemedikament med en intervensjon for psykisk helse.

## Matematikken

```
CUA-ratio (ICER) = (Kostnad_A − Kostnad_B) / (QALY_A − QALY_B)
```

## Gjennomarbeidet eksempel

Et nytt reumatismelegemiddel koster £8 000 mer og gir 0,4 QALY mer sammenlignet med standardbehandling: £20 000/QALY.

## Kobling til programvareutvikling

Ligner på å normalisere kostnad per enhet brukerverdi på tvers av helt ulike typer funksjoner.

## Fallgruver

- **Å bruke nyttevekter som ikke er validert for den aktuelle populasjonen.**
- **Å blande CUA- og CEA-resultater uten å spesifisere enheten.**

## Kilder

- NICE, Guide to the methods of technology appraisal.
- Whitehead SJ, Ali S, QALYs and utilities.
