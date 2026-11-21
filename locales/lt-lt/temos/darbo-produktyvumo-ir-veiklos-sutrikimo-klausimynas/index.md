# Darbo produktyvumo ir veiklos sutrikimo klausimynas (WPAI)

WPAI – patvirtintas savarankiškai pildomas klausimynas (Reilly, Zbrozek, Dasbach, 1993), matuojantis, kiek sveikatos problema veikia apmokamą darbą ir kasdienę veiklą, paprastai per paskutines 7 dienas. Jis skiria nuostolį į *absenteizmą* – tiesiogiai praleistą darbo laiką – ir *prezenteizmą* – sumažėjusį produktyvumą fiziškai esant darbe; antrasis paprastai yra didesnė ir paslėptesnė sąnaudų dalis.

## Kodėl tai svarbu

Paprasti nedarbingumo dienų skaičiavimai mato tik absenteizmą. Gydytojas ar žinių darbuotojas, niekada neimantis laisvos dienos, bet dirbantis 60 % pajėgumu dėl lėtinės ligos, nulį prisideda prie nedarbingumo registro, tačiau sukelia didelį, realų produktyvumo nuostolį – WPAI sukurtas būtent šiai nematomai sąnaudai atskleisti. Kadangi tai patvirtinta priemonė, o ne individuali apklausa, jos balai tinka [paciento pranešamų rezultatų](../paciento-pranešami-rezultatai/) įrodymų paketams ir ligos kainos tyrimams, vertintojui nereikalaujant iš naujo patvirtinti matavimo. Kaip savarankiškai pildoma priemonė, tai pati yra PROM forma, išsiskirianti daugiausia dėmesiu į darbą ir veiklą, o ne simptomus ar gyvenimo kokybę.

## Matematika

```
Absenteeism % = hours_missed_due_to_health / (hours_missed_due_to_health + hours_worked) × 100

Presenteeism %  = self-rated 0–10 impairment while working, × 10
                  (elicited directly via questionnaire, not derived here)

Overall Work Impairment % =
    Absenteeism% + (1 − Absenteeism%/100) × Presenteeism%
    (combines the two so the total can never exceed 100%)

Productivity cost = Overall Work Impairment% / 100 × period_earnings
```

Bendro sutrikimo formulė tyčia nėra paprasta suma: tiesiogiai sudėjus dvi procentines dalis galima viršyti 100 %, todėl prezenteizmas taikomas tik *likusiai* (nebuvusio nedarbingumo) darbo laiko daliai.

## Išspręstas pavyzdys

Darbuotojas, sergantis migrena, praneša, kad suplanuota 40 valandų savaitė, bet 4 valandas praleido:

```
hours_missed = 4, hours_worked = 36
Absenteeism% = 4 / (4 + 36) × 100 = 10%
```

Atskirai jis savo produktyvumo poveikį dirbant įvertina 3 balais iš 10 WPAI klausimyne, t. y. `Presenteeism% = 30%` (šis žingsnis yra neapdorotas klausimyno atsakymas, o ne išvestas iš kitų skaičių):

```
Overall Work Impairment% = 10 + (1 − 10/100) × 30
                          = 10 + 0.9 × 30
                          = 10 + 27
                          = 37%
```

Per 5 dienų savaitę uždirbant 800 £ (160 £ per dieną):

```
Productivity cost = 37/100 × 800 = £296
```

Atkreipkite dėmesį: naivus nedarbingumo dienų skaičiavimas užfiksuotų tik 4 praleistas valandas (10 %) – prezenteizmo dedamoji, ją įskaičiavus, beveik patrigubina tikrąjį sutrikimą.

## Ryšys su programinės įrangos inžinerija

Tai tiesiogiai atitinka inžinerinių komandų sveikatos rodiklius:

- **Absenteizmas** – tai nedarbingumas ir atostogos: matomas, jau sekamas ir lengvoji dalis.
- **Prezenteizmas** – tai perdegęs ar konteksto perjungimų perkrautas inžinierius, dalyvaujantis kiekviename stand-up, bet dirbantis sumažintu pajėgumu – paprastai didesnė ir paslėptesnė sąnauda, nematoma darbuotojų skaičiaus ar lankomumo duomenyse. Ji atsiranda kaip sumažėjęs našumas [DORA](../dora-rodikliai/) ir [srauto rodikliuose](../srauto-rodikliai/) arba kaip lėtesnis tos pačios [techninės skolos](../techninė-skola/), kurios „palūkanos“ dar labiau didina sutrikimą, sprendimas.
- Inžinerinė pamoka ta pati kaip klinikinė: matuoti tik nebuvimą ir tai vadinti „produktyvumo nuostoliu“ sistemingai nuvertina tikrąją kainą, nes praleidžiami visi esantys, bet sutrikę.

## Spąstai

- **Savarankiškos ataskaitos prisiminimo šališkumas.** 7 dienų prisiminimo langas patiria tuos pačius ataskaitų iškraipymus kaip bet kuri retrospektyvi savarankiška ataskaita.
- **0–10 prezenteizmo skalės laikymas tikru fiziniu matavimu.** Ji yra eilinė, išgaunama savęs vertinimu, o ne patvirtintas fizikinis dydis – skirtumus joje laikyti griežtai tiesiniais ar intervaliniais yra modeliavimo patogumas, o ne patvirtintas fizinis faktas.
- **WPAI variantų balų sujungimas.** WPAI turi kelias specifines versijas – WPAI:GH (bendroji sveikata), WPAI:SHP (konkreti sveikatos problema) ir ligai specifinius variantus – skirtingų variantų balų negalima jungti ar lyginti, pirmiausia nepatikrinus, ar tai ta pati priemonės versija.

## Šaltiniai

- Reilly MC, Zbrozek AS, Dasbach EJ. "The validity and reproducibility of a work productivity and activity impairment instrument." PharmacoEconomics 1993;4(5):353-65.
- WPAI instrument documentation, Reilly Associates — the official scoring reference. <https://www.reillyassociates.net/>
