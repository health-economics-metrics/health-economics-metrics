# Inkrementell kostnadseffektivitetsratio (ICER)

ICER måler den ekstra kostnaden per ekstra enhet helseutfall for én intervensjon sammenlignet med et alternativ.

## Hvorfor det er viktig

ICER er den sentrale beslutningsregelen i de fleste HTA-systemer: under terskelen = kostnadseffektivt, over = ikke.

## Matematikken

```
ICER = (Kostnad_A − Kostnad_B) / (Effekt_A − Effekt_B)
```

## Gjennomarbeidet eksempel

En ny behandling koster £5 000 mer og gir 0,25 ekstra QALY sammenlignet med standardbehandling: ICER = £5 000 / 0,25 = £20 000/QALY — like under NICEs terskel.

## Kobling til programvareutvikling

Ligner på å beregne ekstra infrastrukturkostnad per ekstra enhet pålitelighet eller ytelse ved sammenligning av arkitekturalternativer.

## Fallgruver

- **Å beregne ICER mot feil sammenligningsgrunnlag.**
- **Å feiltolke en negativ ICER uten å angi kvadranten.**
- **Å sammenligne en ICER på tvers av valutaer uten et eksplisitt omregningstrinn**: en ICER beregnet i ett lands valuta må omregnes med en oppgitt metode før den sammenlignes med et annet lands terskel; se [ICER-sammenligning på tvers av valutaer](../icer-sammenligning-på-tvers-av-valutaer/) for hvorfor valget av omregningsfaktor (kjøpekraftsparitet vs. markedsvalutakurs) i seg selv kan snu innføringsbeslutningen.

## Kilder

- NICE, Guide to the methods of technology appraisal.
- Drummond MF, et al., Methods for the Economic Evaluation of Health Care Programmes.
