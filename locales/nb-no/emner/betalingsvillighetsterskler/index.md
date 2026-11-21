# Betalingsvillighetsterskler

Betalingsvillighetsterskler angir maksimumsbeløpet et system er villig til å betale per oppnådde QALY.

## Hvorfor det er viktig

Terskelen er beslutningsgrensen: intervensjoner under terskelen finansieres vanligvis, intervensjoner over gjør det vanligvis ikke.

## Matematikken

```
Finansieringsbeslutning: finansier hvis ICER < terskel (£/QALY)
```

## Gjennomarbeidet eksempel

NICE bruker typisk £20 000–£30 000/QALY; USA bruker uformelt $50 000–$150 000/QALY; Thailand bruker omtrent 1× BNP per innbygger.

## Kobling til programvareutvikling

Ligner på en intern "kostnad per unngått hendelse"-terskel som avgjør hvilke pålitelighetsinvesteringer som er verdt det.

## Fallgruver

- **Å sammenligne terskler mellom land uten å ta hensyn til kjøpekraftforskjeller.**
- **Å behandle terskelen som en absolutt grense i stedet for en retningslinje.**
- **Å sammenligne en ICER mot en terskel i en annen valuta uten å omregne først**: se [ICER-sammenligning på tvers av valutaer](../icer-sammenligning-på-tvers-av-valutaer/); omregningsmetoden (kjøpekraftsparitet vs. markedsvalutakurs) er metodisk avgjørende, ikke en avrundingsdetalj.
- **Å blande λ-basert verdsetting med arbeidsmarkedets VSL/VPF-tradisjon**: disse kommer fra ulike teoretiske tradisjoner (helsebudsjettbegrenset metodikk vs. preferanse avslørt gjennom avveininger mellom lønn og risiko) og lar seg ikke alltid forene; for den alternative tilnærmingen med avslørt preferanse til å verdsette liv, se [Verdien av et statistisk liv](../verdien-av-et-statistisk-liv/).

## Kilder

- Claxton K, et al., NICE cost effectiveness threshold estimation.
- WHO-CHOICE, cost-effectiveness thresholds.
