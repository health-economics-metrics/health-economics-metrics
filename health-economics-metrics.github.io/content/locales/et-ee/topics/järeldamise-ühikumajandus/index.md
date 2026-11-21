# Järeldamise ühikumajandus

Järeldamise ühikumajandus analüüsib tehisintellekti mudeli käitamise piirkulusid päringu, tokeni või kasutaja kohta tootmises.

## Miks see on oluline

Erinevalt traditsioonilisest tarkvarast, kus piirkulu on sageli peaaegu null, kannab iga tehisintellekti päring tegelikku arvutuskulu — see muudab ühikumajanduse kriitiliseks skaleeritavuse jaoks.

## Matemaatika

```
Kulu päringu kohta = (Sisend tokenid × hind sisend tokeni kohta) + (Väljund tokenid × hind väljund tokeni kohta)
```

## Lahendatud näide

Kliiniline kokkuvõtte funktsioon, mis töötleb 1000 tokenit sisendit ja genereerib 200 tokenit väljundit, hinnaga £0,01/1K sisend ja £0,03/1K väljund, maksab £0,016 päringu kohta — 1 miljoni päringu puhul kuus = £16 000/kuus.

## Seos tarkvaraarendusega

Otseselt seotud [pilve ühikumajandusega](../pilve-ühikumajandus/), kuid teravdatud, kuna tehisintellekti järeldamiskulud on tavaliselt oluliselt kõrgemad tüüpilise API-kõne kohta.

## Lõksud

- **Ühikuhindade ekstrapoleerimine ilma mastaabisoodustusi või mudeli hinnamuutusi arvestamata.**
- **Vahemälu ja partii töötlemise optimeerimisvõimaluste eiramine.**

## Allikad

- a16z, LLM inference economics.
- OpenAI, Anthropic, API pricing documentation.
