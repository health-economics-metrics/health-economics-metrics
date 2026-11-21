# EQ-5D

EQ-5D – tai EuroQol grupės standartizuotas klausimynas su sveikata susijusiai gyvenimo kokybei matuoti. Tai instrumentas, sukuriantis naudingumo svorius daugumoje [QALY](../kokybės-požiūriu-pakoreguoti-gyvenimo-metai/) skaičiavimų – NICE etaloninis atvejis jį įvardija kaip pageidaujamą suaugusiųjų matą.

## Kodėl tai svarbu

Bet kuriam skaitmeninės sveikatos produktui, norinčiam deklaruoti QALY, reikia naudingumų iš validuoto instrumento, o EQ-5D yra numatytasis JK ir didelėje Europos dalyje. Jis pakankamai trumpas, kad būtų įterptas į programėlę (5 klausimai + vizualinė skalė), o tai reiškia, kad programinės įrangos produktai gali rinkti SVV lygio rezultatų duomenis kaip įprasto naudojimo šalutinį produktą – struktūrinis pranašumas prieš vaistus, kuriems reikia specialių tyrimų.

## Matematika

EQ-5D-5L užduoda po vieną klausimą **5 dimensijose** – judumas, savęs priežiūra, įprasta veikla, skausmas / diskomfortas, nerimas / depresija – kiekviena atsakoma **5 lygiais** (be problemų … itin didelės problemos), plius 0–100 vizualinė analoginė skalė (EQ VAS).

```
Health state = 5-digit profile, e.g. "21221"
Utility index = value_set(profile)

The value set is country-specific, derived from time-trade-off /
discrete-choice surveys of the general public. Anchors: 1 = full health,
0 = dead; states worse than death are negative (UK 3L set floor: −0.594).
```

Tada QALY aritmetika vyksta kaip `duration × utility`.

## Išspręstas pavyzdys

Raumenų ir kaulų sistemos reabilitacijos programėlė matuoja EQ-5D-5L registracijos metu ir po 6 mėnesių 1 000 užbaigusių vartotojų.

```
Mean utility at baseline:  0.62
Mean utility at 6 months:  0.71
Gain sustained (assume) 1 year: (0.71 − 0.62) × 1.0 = 0.09 QALYs per user
```

Palyginti su kontrolinės grupės pokyčiu 0,03 (natūrali sveikata), priskiriamas laimėjimas yra 0,06 QALY vienam vartotojui. Išreikšta pinigais po 20 000–30 000 £/QALY: **1 200–1 800 £ sveikatos vertės vienam užbaigusiam vartotojui** – skaičius, įtvirtinantis programėlės kainų derybas su mokėtoju. (Mažiausi klinikai reikšmingi EQ-5D indekso skirtumai paprastai yra 0,03–0,08 ribose, todėl 0,06 yra tikėtina, bet turi atlaikyti palyginimą su kontrole; žr. [paciento pranešami rezultatai](../paciento-pranešami-rezultatai/).)

## Ryšys su programinės įrangos inžinerija

- **Instrumentuokite.** EQ-5D registracijos metu ir stebėjimo intervalais yra keli sąsajos ekranai; atpildas – SVV lygio įrodymai. Gaukite licenciją iš EuroQol (privaloma, kai kuriems naudojimams nemokama).
- **Naudokite tinkamą verčių rinkinį** diegimo šaliai – tie patys atsakymai balais vertinami skirtingai JK, Vokietijoje ar Japonijoje.
- **Dizaino pamoka**: EQ-5D rodo, kaip maža standartizuota apklausa plius paskelbta vertinimo funkcija duoda palyginamą vieną indeksą. Tai šablonas ir bet kokiam patikimam kūrėjų patirties indeksui – standartizuotas instrumentas, paskelbti svoriai, o ne ad hoc nuojauta. Žr. [SPACE ir DevEx](../space-ir-devex/).

## Spąstai

- **Prieš / po be palyginamosios grupės** – regresija link vidurkio ir natūrali sveikata išpučia naivius laimėjimus.
- **Išgyvenusiųjų šališkumas**: matuojami tik vartotojai, likę įsitraukę (žr. [išlaikymas ir nutekėjimas](../išlaikymas-ir-nutekėjimas/)).
- **3L ir 5L versijų ar verčių rinkinių maišymas** tarp tyrimų – sistemingai skirtingi skaičiai.
- **Lubų efektai** lengvai paveiktose populiacijose: daugelis vartotojų pradžioje balai artimi 1,0, nepalikdami vietos laimėjimui parodyti.
- **Verčių rinkinio laikymas savaime pagrįstu**: naudingumo skaičiai, kuriuos grąžina verčių rinkinys, patys buvo gauti iš visuomenės laiko kompromiso (ar susijusiomis pasirinkimu pagrįstomis) apklausomis – žr. [Laiko kompromiso (TTO) naudingumo išgavimas](../laiko-kompromiso-tto-naudingumo-išgavimas/), kaip.

## Šaltiniai

- EuroQol: EQ-5D-5L. <https://euroqol.org/information-and-support/euroqol-instruments/eq-5d-5l/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
