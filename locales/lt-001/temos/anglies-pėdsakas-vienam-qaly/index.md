# Anglies pėdsakas vienam QALY

Anglies kiekis vienam QALY yra efektyvumo santykis – intervencijos išmetamas (arba išvengtas) anglies kiekis, padalytas iš jos suteiktų QALY – tiesioginis kainos vienam QALY analogas, leidžiantis vertinti intervencijos anglies efektyvumą šalia sąnaudų efektyvumo. „Anglies požiūriu pakoreguota grynoji piniginė nauda“ eina dar toliau: anglies poveikį išreiškia pinigais naudodama oficialias JK Green Book neprekiaujamos anglies vertes ir atima jį iš standartinės [grynosios piniginės naudos](../grynoji-piniginė-nauda/).

## Kodėl tai svarbu

NICE ir NHS England dabar tikisi, kad aplinkos poveikis bus vertinamas kartu su kaina ir QALY. NHS yra viešai įsipareigojęs pasiekti nulinį grynąjį poveikį: nulinį tiesioginių išmetamųjų teršalų kiekį iki 2040 m. ir nulinį visos tiekimo grandinės pėdsako kiekį iki 2045 m. NICE sveikatos technologijų vertinimo vadove (PMG36) aplinkos tvarumas minimas kaip besiformuojantis technologijų vertinimo aspektas. Skaitmeninės sveikatos produktui tai reiškia, kad anglis tampa ketvirtuoju vertės bylos ramsčiu šalia kainos, QALY ir [dominavimo efektyvumo ribos atžvilgiu](../dominavimas-ir-efektyvumo-riba/) – ne bet kurio iš jų pakaitalu, o dimensija, kurią gerai parengta verslo byla vis dažniau turi pateikti.

## Matematika

```
Carbon per QALY = total_emissions_tonnes_co2e / total_qalys
  (a negative value means net emissions AVOIDED per QALY gained — a
  double win: better health and lower carbon)

Monetized carbon impact = emissions_tonnes_co2e × carbon_value_per_tonne
  (negative emissions × positive value = a negative cost, i.e. a benefit)

Carbon-adjusted NMB = net_monetary_benefit − monetized_carbon_impact
```

Tai išplečia kainos / QALY efektyvumo ribos idėją antra ašimi – anglimi vienam QALY – ta pati logika „nubraižyk visas parinktis ir pamatyk, kas dominuojama“ kaip [dominavimas ir efektyvumo riba](../dominavimas-ir-efektyvumo-riba/), tik taikoma anglies, o ne kainos atžvilgiu.

## Išspręstas pavyzdys

Telemedicinos paslauga pakeičia gyvus vizitus, išvengdama 5 000 kelionių automobiliu per metus po maždaug 8 kg CO2e – išvengiama 40 tonų CO2e, išreikšta kaip neigiamas išmetimas (−40,0 tonų), ir suteikia 25 QALY per metus:

```
Carbon per QALY = −40.0 / 25.0 = −1.6 tonnes CO2e avoided per QALY gained
```

Naudojant Green Book neprekiaujamos anglies vertę (iliustracinis skaičius, 2023 m. neprekiaujamos anglies centrinė vertė ≈ 269 £/tonai CO2e – Green Book anglies vertes atnaujina kasmet, prieš cituodami realioje analizėje patikrinkite iš naujo):

```
Monetized carbon impact = −40.0 × £269 = −£10,760
```

−10 760 £ „sąnaudos“ yra 10 760 £ nauda. Jei intervencijos atskira grynoji piniginė nauda yra 500 000 £:

```
Carbon-adjusted NMB = £500,000 − (−£10,760) = £510,760
```

Anglies sutaupymas prisideda prie bylos, o ne mažina jos – dvigubas laimėjimas, kurį neigiamų išmetimų formuluotė ir skirta išryškinti.

## Ryšys su programinės įrangos inžinerija

Tai gyva, aktuali sankirta su DI / debesijos ekonomika: DI modelio mokymo ir vykdymo skaičiavimų anglies pėdsakas dabar yra tikra NHS pirkimų eilutė, nes NHS tiekėjų sutartys virš tam tikrų slenksčių reikalauja Anglies mažinimo plano. [Debesijos vieneto ekonomika](../debesijos-vieneto-ekonomika/) jau seka kainą vienam skaičiavimo rezultato vienetui; anglis vienam QALY yra natūralus šablonas būsimam „anglies kainos vienam išvedimui“ rodikliui, išplečiančiam tą modulį ir išvedimo vieneto ekonomiką į aplinkos dimensiją, nors tokio rodiklio dar nėra.

## Spąstai

- **Ribų žaidimai**: skaičiuojami tik tiesioginiai (1 srities) išmetimai, o tiekimo grandinės (3 srities) išmetimai, kurie paprastai sudaro daugumą realaus skaitmeninės sveikatos produkto pėdsako, neįtraukiami.
- **Pasenusios anglies vertės naudojimas**: Green Book neprekiaujamos anglies vertes atnaujina kasmet, todėl bet kuris cituojamas £/tonai skaičius turi būti datuotas, o ne pateiktas kaip pastovi konstanta.
- **„Anglies požiūriu efektyvus“ laikymas „ekonomiškai efektyvaus“ pakaitalu**: mažai anglies skleidžianti, mažos vertės intervencija vis tiek yra prastas NHS išteklių panaudojimas. Anglis yra ketvirtasis ramstis šalia kainos ir QALY, o ne bet kurio iš jų pakaitalas.

## Šaltiniai

- NHS England, "Delivering a Net Zero National Health Service" (2020, updated 2022). <https://www.england.nhs.uk/greenernhs/publication/delivering-a-net-zero-national-health-service/>
- HM Treasury, The Green Book: Carbon Values supplementary guidance (updated annually; non-traded central value ≈ £269/tCO2e, 2023 — date any citation). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
