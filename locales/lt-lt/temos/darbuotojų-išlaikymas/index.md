# Darbuotojų išlaikymas

Darbuotojų išlaikymo ekonomika kiekybiškai įvertina, kiek sveikatos sistemai kainuoja personalo kaita – įdarbinimas, įvedimas į darbą, laisvos vietos padengimas – ir todėl kiek verta programinė įranga, mažinanti administracinį perdegimą. Pasikartojančių administracinių duomenų užduočių sukeltas perdegimas yra pagrindinė personalo kaitos ir nedarbingumo NHS priežastis.

## Kodėl tai svarbu

Kai gydytojas išeina, trustas moka tris kartus: už pakaitalo įdarbinimą (skelbimai, agentūrų mokesčiai, pokalbiai), už jo įvedimą į darbą (mėnesiai sumažėjusio produktyvumo, priežiūra) ir už laisvos vietos padengimą – paprastai agentūros ar laikinų darbuotojų, kurių įkainiai 2–3 kartus didesni už pagrindinius Agenda for Change įkainius (žr. [išvengiamos išorinio paslaugų pirkimo sąnaudos](../išvengiamos-išorinio-paslaugų-pirkimo-sąnaudos/) ir [kietosios pinigus atlaisvinančios santaupos](../kietosios-pinigus-atlaisvinančios-santaupos/)). Kadangi kaitos sąnaudos yra realūs pinigai, išlaikymo pagerinimai – viena negausių darbo jėgos naudų, kurią finansų direktorius gali „įsikasti“ į biudžetą. Administracinė trintis nuosekliai įvardijama tarp pagrindinių klinikinio perdegimo veiksnių, todėl tai programine įranga sprendžiama sąnauda.

## Matematika

```
Cost per leaver = recruitment cost + onboarding/productivity-ramp cost
                + vacancy cover premium × vacancy duration

Annual turnover cost = headcount × turnover rate × cost per leaver

Value of software  = headcount × Δturnover rate × cost per leaver
                   + sickness-absence reduction × cover cost/day
```

Priežastinė grandinė turi dvi įvertintas jungtis – programinė įranga → perdegimas/trintis ir perdegimas → kaita – todėl pagrįskite abi (personalo apklausos prieš/po; paskelbtos perdegimo ir kaitos sąsajos) ir išlaikykite teigiamą Δ kuklią.

## Išspręstas pavyzdys

Trustas turi 1 200 slaugytojų; kaita 11 % per metus. Sąnaudos vienam išeinančiam:

```
Recruitment ≈ £4,500;  onboarding/ramp ≈ £6,000
Vacancy cover: 4 months × 0.6 WTE covered by agency premium ≈ £8,000
Total ≈ £18,500 per leaver
Baseline turnover cost = 1,200 × 0.11 × 18,500 ≈ £2.44M/year
```

Dokumentavimo naštą mažinanti programinė įranga (automatiškai užpildomi vertinimai, vieno prisijungimo sistema, diktavimas) tikėtinai sumažina kaitą 1 procentiniu punktu:

```
Value = 1,200 × 0.01 × 18,500 = £222,000/year cash-relevant
```

1 punkto teiginys, paremtas personalo apklausų trinties balais, yra patikimas; 4 punktų teiginys – ne. Atlikite [tornado diagramą](../jautrumo-analizė/) pagal Δkaitos: ji viršija visa kita modelyje.

## Ryšys su programinės įrangos inžinerija

Inžinierių išlaikymo matematika identiška, tik prasčiau dokumentuota: vyresniojo inžinieriaus pakeitimas kainuoja 6–12 mėnesių pilnos atlyginimo kainos (įdarbinimas, įsisavinimas, prarastas kontekstas), todėl 200 žmonių organizacija su 15 % kaita kasmet išleidžia milijonus kaitai. Kūrėjų patirties investicijos ([SPACE ir DevEx](../space-ir-devex/)) yra tiesioginis dokumentavimo naštos palengvinimo slaugytojams analogas ir turi būti pagrindžiamos taip pat: išmatuotais trinties balais, kukliu teigiamu poveikiu kaitai ir išeinančiojo kaina iš jūsų pačių finansų duomenų. Iš sveikatos ekonomikos verta perimti discipliną *sąžiningai įkainoti išeinantįjį*, o ne ginčytis, ar žmonės „tikrai“ išeina dėl įrankių.

## Spąstai

- **Visą kaitos pokytį priskirti jūsų intervencijai** – darbo rinkos kaitą keičia daug labiau nei programinė įranga; naudokite kontrolines grupes ar bent sektoriaus tendencijos korekciją.
- **Dvigubas skaičiavimas**: išlaikymo ir agentūrų išlaidų santaupos persidengia (vietos padengimas *yra* agentūrų išlaidos); suderinkite eilutes.
- **Vėlavimo ignoravimas**: perdegimo sukelta kaita reaguoja į trinties pokyčius per 1–2 metus, o ne kitą ketvirtį.

## Šaltiniai

- NHS England, reducing agency spend. <https://www.england.nhs.uk/long-read/reducing-agency-spend-in-the-nhs/>
- NHS Staff Survey (burnout and intention-to-leave data). <https://www.nhsstaffsurveys.com/>
