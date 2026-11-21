# Optimalisering av nedstrømsressurser

Optimalisering av nedstrømsressurser fokuserer på å låse opp rollen eller prosessen alle andre venter på, i stedet for å optimalisere tilfeldig.

## Hvorfor det er viktig

Å forbedre ikke-flaskehalstrinn i en behandlingsvei påvirker ikke den totale gjennomløpstiden — bare selve flaskehalsen bestemmer systemkapasiteten.

## Matematikken

```
Systemgjennomstrømning = gjennomstrømning for det begrensende trinnet (flaskehalsen)
```

## Gjennomarbeidet eksempel

En diagnostisk vei har fem trinn; trinn 3 (bildetolkning) har lengst ventetid. Å fremskynde trinn 1, 2, 4 og 5 påvirker ikke den totale gjennomløpstiden før trinn 3 adresseres.

## Kobling til programvareutvikling

Direkte analogi til begrensningsteorien anvendt på CI/CD-pipelines — fremskynd det tregeste trinnet, ikke et tilfeldig trinn.

## Fallgruver

- **Å investere ressurser i ikke-flaskehalsprosesser fordi de er lettere å forbedre.**
- **Å ikke re-identifisere flaskehalsen etter at den forrige er løst (flaskehalsen flytter seg).**

## Kilder

- Goldratt EM, The Goal.
- NHS Improvement, process improvement guidance.
