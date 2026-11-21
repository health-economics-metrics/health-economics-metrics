# Sveikatos technologijų vertinimas (SVV)

SVV – formalus, institucionalizuotas procesas, kuriuo sveikatos sistemos nusprendžia, ar technologija – vaistas, priemonė ar programinė įranga – verta mokėti. Jis derina klinikinio veiksmingumo įrodymus su ekonominiu vertinimu pagal paskelbtą, privalomą metodiką.

## Kodėl tai svarbu

Jei parduodate nacionalinei sveikatos tarnybai, SVV institucija gali pažodžiui nuspręsti jūsų patekimą į rinką. Žinoti vietos procesą – tai žinoti tikrą vertės reguliatorių:

- **NICE (Anglija)**: įstatyminiai vertinimai pagal apibrėžtą *etaloninį atvejį* – QALY iš [EQ-5D](../eq-5d/), NHS+PSS [perspektyva](../analizės-perspektyva/), 3,5 % [diskontavimas](../diskontavimas-ir-laiko-pirmenybė/), būtinas [PSA](../tikimybinė-jautrumo-analizė/) – vertinama pagal 20–30 tūkst. £/QALY su [sunkumo modifikatoriais](../qaly-deficitas-ir-sunkumo-modifikatoriai/); labai specializuotoms technologijoms iki 100 tūkst. £+ su svėrimu.
- **ICER (JAV, nevyriausybinis)**: įrodymų ataskaitos su *sveikatos naudos kainos etalonu* – kaina, už kurią produktas būtų ekonomiškai efektyvus esant 100–150 tūkst. USD už QALY/evLYG – naudojama kaip derybų svertas; plius biudžeto poveikio „įperkamumo perspėjimai“.
- **Kanada (CADTH → CDA-AMC)**: kompensavimo peržiūros ties ≈50 tūkst. CAD/QALY; istoriškai prašė sumažinti kainas ~95 % paraiškų.

## Matematika

SVV galia yra ne formulė, o **privaloma metodika**: kiekviena paraiška skaičiuoja tą patį [ICER](../prieaugio-sąnaudų-efektyvumo-santykis/) pagal tas pačias etaloninio atvejo taisykles, todėl rezultatai palyginami tarp produktų ir metų. Etaloninis atvejis nustato rezultato matą, naudingumo instrumentą, perspektyvą, palyginamojo pasirinkimą, diskonto normą, laiko horizontą ir neapibrėžtumo analizę – pašalindamas kiekvieną laisvės laipsnį, kuriuo rėmėjas galėtų žaisti.

## Išspręstas pavyzdys

Skaitmeninė terapijos priemonė teikiama NICE tipo vertinimui:

```
Model: ΔC = +£450/patient, ΔE = +0.03 QALYs → ICER = £15,000/QALY ✓ under £20k
Reference-case checks:
  utilities from EQ-5D-5L with UK value set              ✓
  comparator = current care pathway (not "no treatment") ✓
  PSA: 71% probability cost-effective at £20k            ✓ (reported)
  severity modifier: shortfall below ×1.2 bounds         — none claimed
Recommendation: routine commissioning, with real-world data collection.
```

Paties rėmėjo pageidaujama analizė rodė 9 000 £/QALY; etaloninis atvejis pastūmėjo iki 15 000 £, privertęs naudoti sąžiningą palyginamąjį. Ta spraga ir yra *priežastis*, kodėl egzistuoja etaloniniai atvejai.

## Ryšys su programinės įrangos inžinerija

Perkeliamas artefaktas yra **vidinis etaloninis atvejis**: vienas privalomas metodas visoms įrankių / platformų verslo byloms – deklaruotas palyginamasis, standartinės vieneto sąnaudos (modelį žr. [nacionalinis tarifas ir vieneto sąnaudos](../nacionalinis-tarifas-ir-vieneto-sąnaudos/)), fiksuota diskonto norma, privaloma jautrumo analizė, standartinis šablonas. „AMCP dosjė įrankiams“, teikiama platformos tarybai, daro pasiūlymus palyginamus ir žaidimus matomus – lygiai taip, kaip SVV daro vaistams. Pradėkite mažiau nei NICE: dviejų puslapių šablonas plius paskelbtas kainų sąrašas yra geriau nei jokio standarto.

Kaip daugiaciklis SVV modelis iš tikrųjų simuliuojamas kohortomis ciklas po ciklo, žr. [Markovo kohortos simuliacija](../markovo-kohortos-simuliacija/).

## Spąstai

- **SVV laikymas formalumu po reguliavimo patvirtinimo** – CE / UKCA / FDA patvirtinimas sako, kad produktas saugus; SVV sprendžia, ar jį *verta pirkti*. Kita kliūtis, kiti įrodymai.
- **Ekonominio modelio kūrimas po tyrimo** – įrodymų generavimas turėtų būti suprojektuotas atgaline tvarka iš etaloninio atvejo reikalavimų.
- **Jurisdikcijų skirtumų ignoravimas**: ICER, finansuojamas JAV ties 120 tūkst. USD/QALY, nepraeina NICE ties 30 tūkst. £; planuokite įrodymus ir kainodarą kiekvienai rinkai.

## Šaltiniai

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER 2023 Value Assessment Framework. <https://icer.org/our-approach/methods-process/value-assessment-framework/>
- Canada's Drug Agency (CDA-AMC). <https://www.cda-amc.ca/>
