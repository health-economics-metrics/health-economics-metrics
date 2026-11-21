# Srauto rodikliai

Srauto rodikliai matuoja, kaip darbas juda per pristatymo sistemą: ciklo trukmė, vykdymo trukmė, pralaidumas, nebaigto darbo (WIP) kiekis ir srauto efektyvumas. Juos valdo Little'o dėsnis – ta pati eilių matematika, kuri valdo ligoninių lovas ir laukimo sąrašus.

## Kodėl tai svarbu

Dauguma pristatymo laiko nėra darbas – tai laukimas. Žinių darbo srauto efektyvumo tyrimai įprastai rodo, kad elementai aktyviai dirbami tik **5–15 %** praėjusio laiko; likusi dalis yra eilės. Tai reiškia, kad pigiausias pagreitinimas yra eilių šalinimas, o ne samdymas – būtent tai, ką ligoninių pacientų srauto programos atrado apie lovas. Viskam, kas turi [vėlavimo kainą](../vėlavimo-kaina/), srauto rodikliai parodo, kur kaupiasi vėlavimo kaina.

## Matematika

```
Cycle time      = t(finished) − t(started)
Lead time       = t(delivered) − t(requested)     (includes pre-work queue)
Throughput      = items completed / period
WIP             = items started but unfinished
Flow efficiency = active time / (active + wait time) × 100

Little's Law:  average WIP = throughput × average cycle time
               (equivalently: cycle time = WIP / throughput)
```

Little'o dėsnis yra svertas: esant pastoviam pralaidumui, WIP mažinimas proporcingai mažina ciklo trukmę. Jis taip pat valdo ligonines: `beds occupied = admissions/day × length of stay`.

## Išspręstas pavyzdys

Komanda turi 40 vykdomų elementų ir užbaigia 10 per savaitę: ciklo trukmė = 40/10 = 4 savaitės. Ji nustato WIP ribas, sumažindama WIP iki 15: ciklo trukmė = 15/10 = **1,5 savaitės** – tie patys žmonės, tas pats pralaidumas, 62 % greitesnis pristatymas vien dėl eilių disciplinos.

Įkainota su CoD: jei elementai vidutiniškai turi 3 000 £ per savaitę vėlavimo kainos, kiekvienas elementas dabar eilėje praleidžia 2,5 savaitės mažiau: 10 elementų per savaitę × 2,5 × 3 000 = **75 000 £ per savaitę pašalintos vėlavimo kainos** – iš politikos pokyčio, kuris nieko nekainuoja.

Ligoninės veidrodis: 40 priėmimų per dieną × 6,0 dienų LOS = 240 lovų; sumažinus ne klinikinį laukimą LOS viduje iki 5,6 dienos, atlaisvinama 16 lovų ([hospitalizacijos trukmė](../hospitalizacijos-trukmė/)) – tas pats dėsnis, tas pats svertas.

## Ryšys su programinės įrangos inžinerija

Srauto rodikliai yra bendra pristatymo inžinerijos ir sveikatos veiklos kalba:

- **PR pogrupių etalonai** (LinearB, ~8 mln. PR): elito paėmimo laikas < 7 val., peržiūra < 6 val., bendras ciklas < ~26 val. – paėmimo laikas yra gryna eilė, pirmas dalykas, kurį reikia pulti.
- **[Laukimo sąrašai](../laukimo-sąrašo-poveikis/)** yra atsilikimai; **[RTT](../siuntimas-gydymui/)** yra vykdymo trukmė; **[lovų užimtumas](../sutaupyti-lovadieniai/)** yra WIP. Tobulinimas perkeliamas abiem kryptimis: WIP ribos ↔ priėmimų išlyginimas; eilės laiko instrumentavimas ↔ kelio etapų sekimas.
- Srauto efektyvumas žemiau 15 % yra normalus abiejose srityse, ir abi tai slepia, nes *žmonės* užsiėmę, o *darbas* laukia – matuokite darbo laikrodį, o ne darbuotojų.

## Spąstai

- **Išnaudojimo garbinimas**: darbuotojų išnaudojimo vilkimas link 100 % netiesiškai sprogdina eilės laikus (M/M/1: laukimas ∝ ρ/(1−ρ)) – todėl 95 % užimtos ligoninės užsikemša, o 95 % paskirstytos komandos stringa.
- **Vidurkiai iš asimetrinių skirstinių**: ciklo trukmės turi sunkias uodegas; prognozuokite procentiliais (p85), o ne vidurkiais.
- **WIP mažinimas atmetant darbą iš viršaus** ir vadinimas srauto pagerinimu – paklausa neišnyko, ji išsirikiavo už matavimo ribos (ligoninės versija: greitosios, laukiančios už PS).

## Šaltiniai

- Little's Law and flow metrics overviews. <https://agility-at-scale.com/safe/lpm/flow-metrics/> ; <https://getdx.com/blog/flow-metrics/>
- LinearB engineering benchmarks. <https://linearb.io/resources/engineering-benchmarks>
- Reinertsen DG, *The Principles of Product Development Flow*.
