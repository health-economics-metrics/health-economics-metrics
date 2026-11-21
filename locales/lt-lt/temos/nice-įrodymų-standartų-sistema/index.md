# NICE įrodymų standartų sistema (ESF)

ESF – NICE sistema, nurodanti, **kiek įrodymų reikia skaitmeninės sveikatos technologijai, proporcingai jos rizikai**. Tai artimiausias oficialus atsakymas į „ką turime įrodyti, kad NHS nupirktų mūsų programėlę?“

## Kodėl tai svarbu

ESF (pirmą kartą išleista 2019 m., atnaujinta 2022 m. dirbtiniam intelektui ir adaptyviems algoritmams apimti) klasifikuoja skaitmeninės sveikatos technologijas į pakopas pagal klinikinę funkciją su **kumuliatyviais** įrodymų standartais – 21 standartas 5 grupėse (dizaino veiksniai, vertė, veikimas / veiksmingumas, ekonominis poveikis, diegimas):

```
Tier A — system services, no direct patient outcome (e.g., e-rostering)
         → basic standards: credibility, data protection, technical assurance
Tier B — inform, simple monitoring, communication (e.g., symptom diary)
         → + evidence of user benefit, appropriate reliability
Tier C — treat, diagnose, or actively guide clinical management
         → + high-quality comparative effectiveness evidence (ideally RCT)
           and economic analysis
```

Ekonominiams įrodymams [sąnaudų ir pasekmių analizė](../sąnaudų-ir-pasekmių-analizė/) priimtina daugumai pakopų; [sąnaudų naudingumo analizė](../sąnaudų-naudingumo-analizė/) tikimasi didžiausios rizikos pakopoje. ESF apibrėžia jūsų **įrodymų kainą patenkant į rinką** – biudžetuokite ją kaip bet kurią kitą kūrimo kainą.

## Matematika

Jokių formulių – sprendimų lentelė. Veikiantis skaičiavimas yra komercinis:

```
Evidence investment required = f(tier)
  Tier A: documentation + assurance ≈ £10k–50k
  Tier B: observational/comparative user-benefit study ≈ £50k–250k
  Tier C: RCT-grade comparative study + economic model ≈ £250k–£2M+

Position your product's claims deliberately: claiming "supports clinical
decisions" instead of "informs patients" moves you a tier and can 10× the bill.
```

## Išspręstas pavyzdys

Vaistų priminimo programėlės kūrėjas svarsto pridėti dozės koregavimo rekomendacijos funkciją.

- Kaip priminimo programėlė: **B pakopa** – pakanka kohortos tyrimo, rodančio laikymosi pagerėjimą.
- Su dozių rekomendacijomis: **C pakopa** – lyginamojo veiksmingumo įrodymai (tikėtinai RCT prieš įprastą priežiūrą) plius ekonominė analizė.

Jei RCT kainuoja 600 tūkst. £, o dozės funkcijos papildomos pajamos yra 200 tūkst. £ per metus, funkcija turi išlaikyti vertę 3+ metus, kol įrodymų sąnaudos atsiperka – produkto sprendimas, atrodantis visiškai kitaip, kai ESF pakopa įkainota. Daug komandų išleidžia B pakopos produktą, o C pakopos teiginį atideda iki finansavimo.

## Ryšys su programinės įrangos inžinerija

ESF yra perkeliamiausias šio repozitorijaus valdymo šablonas: **rizikos pakopomis grįsti įrodymų reikalavimai įrankių diegimui**. Vidinė versija: kodo formatuotojui reikia demonstracijos (A pakopa); produktyvumo įrankiui, deklaruojančiam sutaupytas valandas, reikia išmatuoto bandymo (B pakopa); DI vartams, kurie automatiškai blokuoja diegimus ar automatiškai rašo klinikinį kodą, reikia kontroliuojamo tyrimo lygio įrodymų prieš visos organizacijos diegimą (C pakopa). Proporcingi įrodymai sustabdo abu gedimo režimus – biurokratiją, smaugiančią trivialius įrankius, ir nuojautą, išleidžiančią reikšmingus. Taip pat žr. [DiGA greitasis kelias](../vokietijos-diga-greitasis-kelias/) dėl „laikino priėmimo su įrodymų terminu“ papildinio.

## Spąstai

- **Pakopos klaidingas priskyrimas dėl pageidaujamo mąstymo** – reguliatoriai ir pirkėjai klasifikuoja pagal tai, ką produktas *daro*, o ne ką sako rinkodara.
- **Įrodymai, sukurti po produkto**: RCT pritaikymas jau išleistam produktui be instrumentavimo ar equipoise yra lėtas ir dažnai neįmanomas.
- **ESF atitiktis ir likusio pamiršimas**: ESF veikia šalia DTAC (klinikinis saugumas, duomenų apsauga, sąveikumas) ir DI atveju – reguliacinio patvirtinimo – žr. [DI reguliavimo vertinimas](../di-reguliavimo-vertinimas/).

## Šaltiniai

- NICE Evidence Standards Framework (ECD7). <https://www.nice.org.uk/corporate/ecd7>
- ESF evidence standards tables. <https://www.nice.org.uk/corporate/ecd7/chapter/section-c-evidence-standards-tables>
