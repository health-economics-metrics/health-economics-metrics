# A késedelem költsége (CoD)

A késedelem költsége az az időegységenkénti gazdasági érték, amely elvész, amíg egy funkciót, terméket vagy szolgáltatást *nem* szállítanak. Ez az egyetlen legerősebb híd a szoftverszállítási mutatók és az egészséggazdaságtan között: a „későn szállítottunk" állítást pénzzé — vagy QALY-kká — alakítja.

## Miért fontos

Reinertsen szabálya: „Ha csak egy dolgot számszerűsítesz, a késedelem költségét számszerűsítsd." A legtöbb szervezet tudja, mibe kerül egy projekt, de nem tudja, mibe kerül egy hónap késedelem, így a költségvetéseket optimalizálja, miközben vérzik az időérték. Az egészségügyi szoftvernél a tét szó szerinti: minden héten, amikor egy útvonal-javulás késik, a betegek hosszabban várnak rosszabb egészségi állapotban. A CoD a legerősebb matematikai keretrendszer az NHS-érdekeltek felé bemutatni, mert a szoftvered *hiányát* árazza.

## A matematika

```
CoD = benefit per unit time forgone while undelivered   (£/week or QALYs/week)

Total delay loss = CoD × delay duration

For prioritization, see wsjf-and-cd3.md: CD3 = CoD / duration.
```

Klinikai szoftvernél pénzben és egészségben is denominálj:

```
CoD_health = patients affected per week × QALY gain per patient
CoD_money  = CoD_health × λ (willingness-to-pay threshold, £20k–30k/QALY)
             + operational savings per week forgone
```

## Kidolgozott példa

**Működési**: a szoftver betegenként 200 £-ot takarít meg egy útvonalon; egy tröszt hetente 50 ilyen beteget dolgoz fel.

```
CoD = 200 × 50 = £10,000/week
A 10-week procurement delay costs 200 × 50 × 10 = £100,000 in avoidable waste.
```

**Klinikai**: egy triázsjavítás 5 hét várakozást szüntet meg (hasznosság 0,68 → 0,80 hamarabb) hetente 100 betegnél:

```
QALY gain per patient = (5/52) × 0.12 ≈ 0.0115
CoD_health = 100 × 0.0115 = 1.15 QALYs/week
CoD_money  = 1.15 × £20,000 ≈ £23,000/week of health value
```

Egy 6 hónapos bevezetési késedelem ~30 QALY-be „kerül" — az érv, amely az IT-éles indítás csúszását klinikai eseménnyé keretezi újra. (Léptékbenchmark: a Black Swan Farming híres Maersk-elemzése olyan egyedi funkciókat talált, amelyek CoD-ja ≈ 200 ezer $/hét volt, és 38 hetet vártak.)

## Kapcsolat a szoftverfejlesztéssel

A CoD az a mutató, amely a [DORA átfutási időt](../dora-mutatók/) és a [folyamathatékonyságot](../folyammutatók/) pénzügyileg olvashatóvá teszi: átfutási idő × CoD = a sorokban elégetett pénz (vagy egészség). Felhasználások:

- **Priorizálás**: rangsorold a munkát CoD/időtartam szerint ([WSJF/CD3](../wsjf-és-cd3/)) a leghangosabb érdekelt helyett.
- **Folyamatgazdaságtan**: egy 2 hetes kiadási ütemnek a folyamatos szállításhoz képest funkciónként ~1 hét × CoD a várható késedelmi költsége — áraztad a köteget.
- **Beszerzés**: az NHS 6–18 hónapos beszerzési ciklusainak van CoD-ja; megmutatása megváltoztatja a sürgősségi beszélgetéseket (lásd [költségvetési hatáselemzés](../költségvetési-hatáselemzés/) a megfizethetőségi megfelelőért).

## Buktatók

- **Lineáris CoD feltételezése**: egyes munkák értéke határidő-alakú (szabályozói időpontok — végtelen CoD a dátum után, nulla előtte) vagy csökkenő (úttörő-előnyablakok). Szorzás előtt osztályozd a sürgősségi profilt.
- **CoD olyan kimeneteken, amelyeket senki nem akar**: a késedelem csak akkor kerül pénzbe, ha a dolognak értéke van; a késleltetett szemét ingyenes.
- **A késedelem és a diszkontálás dupla számítása**: a [diszkontálás](../diszkontálás-és-időpreferencia/) már árazza az időt többéves horizonton; a CoD a horizonton belüli működési változat. Használj CoD-t hetekre/hónapokra, NPV-eltolást évekre.

## Források

- Reinertsen DG, *The Principles of Product Development Flow*.
- Black Swan Farming, Cost of Delay. <https://blackswanfarming.com/cost-of-delay/>
- Cost of delay overview. <https://en.wikipedia.org/wiki/Cost_of_delay>
