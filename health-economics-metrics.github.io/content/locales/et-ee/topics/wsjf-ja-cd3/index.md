# WSJF ja CD3

WSJF (Weighted Shortest Job First) ja CD3 (Cost of Delay Divided by Duration) on prioriseerimisraamistikud, mis järjestavad tööd viivituse kulu ja tööpingutuse suhte alusel.

## Miks see on oluline

Need raamistikud annavad objektiivse, matemaatilise meetodi konkureerivate algatuste prioriseerimiseks, selle asemel et tugineda poliitikale või valjuhäälseimale sidusrühmale.

## Matemaatika

```
CD3 = Viivituse kulu / Töö kestus (või pingutus)
```

Kõrgeima CD3 skooriga üksused prioriseeritakse esimesena.

## Lahendatud näide

Projekt A: viivituse kulu £10 000/nädalas, kestus 4 nädalat → CD3 = 2500. Projekt B: viivituse kulu £5000/nädalas, kestus 1 nädal → CD3 = 5000. Hoolimata madalamast absoluutsest väärtusest, tuleks projekt B esmalt teha.

## Seos tarkvaraarendusega

Laialdaselt kasutatav SAFe (Scaled Agile Framework) raamistikes funktsioonide ja projektide prioriseerimiseks tootejuhtide poolt.

## Lõksud

- **Viivituse kulu hinnangute ebatäpsus, mis viib CD3 arvutuste moonutamiseni.**
- **Raamistiku jäik rakendamine ilma strateegilist konteksti arvestamata.**

## Allikad

- Leffingwell D, SAFe framework documentation.
- Reinertsen DG, cost of delay and weighted shortest job first.
