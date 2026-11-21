# Tõenäosuslik tundlikkusanalüüs

Tõenäosuslik tundlikkusanalüüs (PSA) varieerib kõiki ebakindlaid parameetreid samaaegselt Monte Carlo simulatsiooni abil, et saada tulemuste tõenäosusjaotus.

## Miks see on oluline

Lihtne tundlikkusanalüüs testib korraga ühte muutujat; PSA haarab kõigi parameetrite kombineeritud ebakindluse koos.

## Matemaatika

```
Iga simulatsiooni i jaoks: võtta parameetrite väärtused nende jaotustest, arvutada tulemus_i
Kulutõhususe tõenäosus = läve alla jäävate simulatsioonide arv / simulatsioonide koguarv
```

## Lahendatud näide

10 000 Monte Carlo simulatsiooni uuest diagnostikavahendist näitavad, et see on kulutõhus 72% simulatsioonidest läve £20 000/QALY juures.

## Seos tarkvaraarendusega

Sarnaneb Monte Carlo koormustestimisega, mis varieerib mitut ebakindlat süsteemiparameetrit korraga.

## Lõksud

- **Parameetritevaheliste korrelatsioonide eiramine valimisel.**
- **CEAC vale tõlgendamine lihtsa protsendina tõenäosusjaotuse asemel.**

## Allikad

- Briggs AH, et al., Decision Modelling for Health Economic Evaluation.
- NICE DSU Technical Support Documents.
