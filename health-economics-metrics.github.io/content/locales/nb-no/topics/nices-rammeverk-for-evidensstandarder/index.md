# NICEs rammeverk for evidensstandarder

NICEs rammeverk for evidensstandarder spesifiserer risikograderte evidenskrav for digitale helseteknologier, fra lavrisiko velvære-apper til høyrisiko diagnostiske verktøy.

## Hvorfor det er viktig

Digitale helseprodukter trenger ikke alle å møte den samme evidenslisten — rammeverket skalerer kravene etter risikonivå.

## Matematikken

```
Evidensnivå = f(funksjonell risikoklasse, klinisk risikonivå)
```

Ingen numerisk formel; det er et klassifiseringssystem med tilhørende evidensterskler.

## Gjennomarbeidet eksempel

En app for stressreduksjon faller i nivå 1 (beskrivende evidens er tilstrekkelig); et KI-diagnostikkverktøy for kreftdeteksjon faller i nivå 3b (randomiserte kontrollerte studier kreves).

## Kobling til programvareutvikling

Ligner på risikobaserte testkrav — et internt verktøy trenger mindre streng validering enn et pasientsikkerhetskritisk system.

## Fallgruver

- **Å feilklassifisere et verktøy for å møte lavere evidenskrav.**
- **Å ikke revurdere evidenskravene når et produkts funksjonalitet endres.**

## Kilder

- NICE, Evidence Standards Framework for digital health technologies.
- NHS Digital, digital technology assessment criteria.
