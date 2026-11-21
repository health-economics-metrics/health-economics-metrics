# Laukimo sąrašo poveikis

Laukimo sąrašo poveikis paverčia sutaupytus klinikinius pajėgumus pacientais, išbrauktais iš laukimo sąrašo (arba greičiau juo praėjusiais). Sutaupytas valandas paversti papildomais vizitų laikais reiškia tiesiogiai sumažinti ligoninių trusto laukimo sąrašą – apčiuopiamiausias būdas parodyti sveikatos sistemai, kam skirti atlaisvinti pajėgumai.

## Kodėl tai svarbu

Planinių paslaugų laukimo sąrašas yra apibrėžiantis NHS iššūkis po pandemijos (jo dydis – nacionalinis politinis rodiklis), ir kiekvienas trustas vykdo planinių paslaugų atkūrimo programą. Verslo atvejis „sutaupo 2 000 slaugytojų valandų“ yra abstraktus; atvejis „sukuria 4 000 papildomų vizitų laikų, priimant 3 800 laukiančių pacientų ir sumažinant specialybės sąrašą 9 %“ – istorija, kurią veiklos direktorius gali nunešti savo valdybai. Laukimo sąrašo poveikis yra natūralus *apskaitos vienetas* [pinigų neatlaisvinantiems pajėgumams](../pinigus-atlaisvinančios-ir-neatlaisvinančios-santaupos/).

## Matematika

```
Extra slots        = hours released / slot duration × utilization
Patients seen      = extra slots × (1 − DNA rate)
List reduction     = patients seen − induced new demand
Waiting-time gain  = queueing improvement from higher service rate
                     (for stable queues, cutting the backlog N by ΔN at
                     service rate μ pulls everyone forward ~ΔN/μ)
```

Sveikatos nauda trumpiau laukiant: pacientai mažiau savaičių praleidžia žemesnės naudingumo būsenos prieš gydymą – QALY aritmetika pateikta skyriuje [siuntimas gydymui](../siuntimas-gydymui/).

## Išspręstas pavyzdys

Aplinkos dokumentavimo programinė įranga kiekvienam iš 20 klinikos slaugytojų sutaupo 45 min. per dieną. Per 250 dienų: 20 × 0,75 × 250 = 3 750 valandų per metus.

```
Slots (30 min, 85% usable) = 3,750 / 0.5 × 0.85 = 6,375 slots
Patients seen (7% DNA)     = 6,375 × 0.93       ≈ 5,929/year
```

Specialybei, kurios sąraše 12 000 pacientų, o paklausą atitinkantys pajėgumai – 24 000 vizitų per metus, ~5 900 papildomų vizitų sumažina vidutinį laukimą maždaug ketvirtadaliu – trustas pastebimai priartėja prie 18 savaičių standarto be naujų darbuotojų samdos. Esant ~160 £ schemos vertei už apsilankymą, veikla verta ~949 000 £ per metus (žr. [nacionalinis tarifas ir vieneto sąnaudos](../nacionalinis-tarifas-ir-vieneto-sąnaudos/)) – tačiau pirmiausia pateikite *laukimo sąrašo* požiūrį; būtent pagal jį sistema valdoma.

## Ryšys su programinės įrangos inžinerija

Laukimo sąrašas yra atsilikimų sąrašas (backlog), todėl atsilikimų mažinimo ekonomika perkeliama abiem kryptimis. Iš sveikatos į programinę įrangą: atsilikimo mažinimą vertinkite pagal tai, kiek ilgai *naudotojai* laukia vertės, o ne pagal uždarytų elementų skaičių ([vėlavimo kaina](../vėlavimo-kaina/) vienam eilėje esančiam elementui). Iš programinės įrangos į sveikatą: Little dėsnis sako, kad sąrašas mažėja tik jei aptarnavimo sparta viršija atvykimo spartą – pajėgumų prieaugį, sugerta augančių siuntimų, laukimo laikai nepasikeičia, todėl modeliuokite ir atvykimus. Abiejose srityse prioritetą teikite pagal sunkumu svertą vertę (klinikinio skubumo kategorijos ↔ [sunkumo modifikatoriai](../qaly-deficitas-ir-sunkumo-modifikatoriai/)), o ne „pirmas atėjo – pirmas aptarnautas“.

## Spąstai

- **Vizitų laikai ≠ pacientai**: pamirštami DNA rodikliai ir nepanaudojami atlaisvinto laiko fragmentai.
- **Sukelta paklausa**: matomi papildomi pajėgumai pritraukia siuntimų; grynasis sąrašo poveikis mažesnis už bendrąjį.
- **Pinigų tvirtinimas**: laukimo sąrašo poveikis yra pajėgumų vertė; pinigų reikalavimas (išvengtas atsilikusio darbo išorinis pirkimas) yra kita eilutė – žr. [išvengiamos išorinio paslaugų pirkimo sąnaudos](../išvengiamos-išorinio-paslaugų-pirkimo-sąnaudos/).

## Šaltiniai

- NHS England, RTT waiting times statistics. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
