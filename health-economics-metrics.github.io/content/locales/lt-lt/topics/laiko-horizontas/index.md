# Laiko horizontas

Laiko horizontas – tai laikotarpis, per kurį analizė skaičiuoja sąnaudas ir poveikį. Jis turi būti pakankamai ilgas, kad apimtų visus reikšmingus palyginamų parinkčių skirtumus.

## Kodėl tai svarbu

Pasirinkite trumpą horizontą ir praleisite vėlyvą naudą (prevencija) ir vėlyvas sąnaudas (priežiūra). Pasirinkite per ilgą horizontą ir viskas skęsta neapibrėžtume. Sveikatos technologijų vertinimas dažnai naudoja **viso gyvenimo** horizontą gydymui su mirtingumo poveikiu; [biudžeto poveikio analizė](../biudžeto-poveikio-analizė/) sąmoningai naudoja trumpą **1–5 metų** horizontą, nes jos klausimas yra įperkamumas, o ne vertė. Horizontas yra deklaruotas modeliavimo pasirinkimas, o neatitinkantys horizontai yra klasikinis būdas pažaisti palyginimu.

## Matematika

Horizontas yra sumavimo viršutinė riba bet kuriame vertinime:

```
Net present value = Σ (t = 0 … T) [ (Benefits_t − Costs_t) / (1 + r)^t ]

T = time horizon (years)
r = discount rate (see discounting-and-time-preference.md)
```

Rezultatai turėtų būti pateikiami nurodant horizontą ir geriausia – parodyti keliais horizontais.

## Išspręstas pavyzdys

Elektroninė receptų sistema kainuoja 2 mln. £ diegimui ir 200 000 £ per metus veikimui. Ji užkerta kelią vaistų klaidoms, vertoms 600 000 £ per metus (išvengtos žalos gydymo kaina).

Grynoji nauda pagal horizontą (nediskontuota, dėl aiškumo):

```
Horizon 1 year:  −2,000,000 − 200,000 + 600,000  = −£1,600,000
Horizon 3 years: −2,000,000 + 3 × 400,000        = −£800,000
Horizon 5 years: −2,000,000 + 5 × 400,000        =  £0
Horizon 10 years:−2,000,000 + 10 × 400,000       = +£2,000,000
```

Sistema „žlunga“ bet kuriuo horizontu žemiau 5 metų ir „sėkmingai“ 10. Nei vienas nėra tikras atsakymas; sąžininga ataskaita nurodo lūžio tašką ir pagrindžia horizontą sistemos tarnavimo laiku (kiek laiko iki pakeitimo?).

## Ryšys su programinės įrangos inžinerija

- **Įrankių vertinimai, matuojami per vieną sprintą**, sistemingai praleidžia mokymosi kreivės kritimą (sąnaudos priekyje) ir ilgalaikę priežiūrą (sąnaudos gale). DI programavimo asistentų bandymai, matuojami 2 savaitę, fiksuoja naujumo piką, o ne nusistovėjusią būseną.
- **Sutarties trukmė ≠ naudos horizontas.** 1 metų SaaS sutartį vis tiek galima vertinti per 5 metus, jei realistiškai tikitės atnaujinimo – bet pasakykite tai.
- **Senų sistemų pakeitimo bylos** turėtų tęstis iki senosios sistemos patikimos gyvavimo pabaigos, o ne savavališko apvalaus skaičiaus.

## Spąstai

- **Horizonto pirkimas**: pasirenkamas horizontas, kuris leidžia laimėti jūsų parinkčiai. Užregistruokite horizontą prieš skaičiuodami rezultatus.
- **Skirtingi horizontai skirtingoms parinktims** tame pačiame palyginime.
- **Viso gyvenimo horizontai be diskontavimo ar neapibrėžtumo analizės** – 30 metų nauda nominalia verte yra fikcija. Ilgus horizontus derinkite su [jautrumo analize](../jautrumo-analizė/).

## Šaltiniai

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Sullivan SD, et al. "Budget Impact Analysis — Principles of Good Practice: Report of the ISPOR 2012 Budget Impact Analysis Good Practice II Task Force." Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
