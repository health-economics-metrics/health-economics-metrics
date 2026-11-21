# Screeningøkonomi

Screeningøkonomi omhandler Wilson-Jungner-kriteriene for når screening er fornuftig, og matematikken bak hvorfor prediktiv verdi kollapser ved lav prevalens.

## Hvorfor det er viktig

Selv en svært nøyaktig test genererer overveldende mange falske positive når den underliggende sykdommen er sjelden, noe som fører til alarmtretthet og unødvendige oppfølgingsundersøkelser.

## Matematikken

```
Positiv prediktiv verdi (PPV) = (Sensitivitet × Prevalens) / [(Sensitivitet × Prevalens) + ((1−Spesifisitet) × (1−Prevalens))]
```

## Gjennomarbeidet eksempel

En test med 95 % sensitivitet og 95 % spesifisitet anvendt på en sykdom med 0,1 % prevalens har en PPV på bare rundt 2 % — 98 % av de positive resultatene er falske.

## Kobling til programvareutvikling

Direkte analogi til alarmtretthet i overvåkingssystemer: en detektor med høy nøyaktighet anvendt på en sjelden hendelse produserer fortsatt overveiende falske alarmer. For å dimensjonere et helt screeningprogram i stedet for én enkelt test, se [antall som må screenes](../antall-som-må-screenes/): hvor mange mennesker som må gjennom hele screen-og-behandle-løpet for å forebygge ett utfall.

## Fallgruver

- **Å sitere sensitivitet og spesifisitet uten å oppgi prevalensen.**
- **Å ignorere Wilson-Jungner-kriteriene og screene uten å ha en effektiv behandling tilgjengelig.**

## Kilder

- Wilson JMG, Jungner G, Principles and Practice of Screening for Disease.
- UK National Screening Committee, screening criteria.
