# Tehisintellekti kvaliteedinäitajad

Tehisintellekti kvaliteedinäitajad mõõdavad tehisintellekti süsteemi väljundite täpsust, usaldusväärsust ja ohutust, mis on kriitilise tähtsusega enne kliinilisse või äriprotsessi integreerimist.

## Miks see on oluline

Tehisintellekti mudelid võivad tunduda veenvad, olles samas faktiliselt valed ("hallutsinatsioonid") — kvaliteedinäitajad vastutavad usaldusväärsuse, mitte ainult soravuse eest.

## Matemaatika

```
Täpsuse määr = Õigete väljundite arv / Hinnatud väljundite koguarv × 100%
```

Lisaks jälgitakse sageli hallutsinatsioonimäära, kooskõlastatuse määra ja kalibreerimisvigasid eraldi.

## Lahendatud näide

Kliiniline dokumentatsiooniassistent, mis on hinnatud 1000 juhtumi suhtes, millest 950 on faktiliselt õiged, annab täpsuse määraks 95%, kuid 5% vigade määr võib olla lubamatu kõrge riskiga kliinilises kontekstis.

## Seos tarkvaraarendusega

Sarnaneb tarkvara testikatvusega, kuid tehisintellekti väljundite mittedeterministlik olemus muudab põhjaliku testimise keerulisemaks.

## Lõksud

- **Üldise täpsuse mõõtmine ilma vigade tõsiduse jaotust arvestamata.**
- **Kvaliteedinäitajate hindamine ainult treeningandmetel, mitte reaalse maailma kasutuses.**

## Allikad

- Stanford HAI, AI Index Report.
- Ji Z, et al., survey of hallucination in natural language generation.
