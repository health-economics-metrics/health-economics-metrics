# Netto pengeverdi (NMB)

Netto pengeverdi omgjør helsegevinst til penger ved terskelverdien og trekker fra kostnadene, noe som gjør det mulig å rangere intervensjoner med ett enkelt tall.

## Hvorfor det er viktig

I motsetning til ICER er NMB lineær, noe som gjør statistisk analyse (gjennomsnitt, konfidensintervaller) mye enklere.

## Matematikken

```
NMB = (Effekt × terskelverdi) − Kostnad
```

## Gjennomarbeidet eksempel

En intervensjon gir 0,3 QALY til en kostnad på £4 000, terskel £20 000/QALY: NMB = (0,3 × £20 000) − £4 000 = £2 000 (positivt = kostnadseffektivt).

## Kobling til programvareutvikling

Ligner på å omgjøre flere effektdimensjoner (hastighet, pålitelighet, funksjoner) til én sammensatt verdiscore for prioritering.

## Fallgruver

- **Å bruke feil terskelverdi ved beregning av NMB.**
- **Å sammenligne NMB mellom studier som brukte ulike terskler.**

## Kilder

- Stinnett AA, Mullahy J, "Net health benefits: a new framework."
- NICE DSU Technical Support Documents.
