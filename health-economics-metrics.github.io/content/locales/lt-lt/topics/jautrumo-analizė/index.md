# Jautrumo analizė

Deterministinė jautrumo analizė (DSA) keičia po vieną prielaidą tikėtinu diapazonu, kad pamatytų, ar išvada išlieka. Standartinė vizualizacija yra tornado diagrama: parametrai, surikiuoti pagal tai, kiek jie svaido rezultatą.

## Kodėl tai svarbu

Kiekvienas ekonominis modelis sukurtas ant įverčių – sutaupytas laikas, įsisavinimas, vieneto sąnaudos. Sveikatos technologijų vertinimas atsisako priimti taškinį įvertį („ROI yra 340 %“) be įrodymų, kad išvada atspari pagrįstiems nesutarimams dėl įvesčių. Tornado diagrama sprendimų priėmėjui parodo, *kurią prielaidą tikrinti*: jei byla veikia tik kai labiausiai ginčijamas parametras yra optimistiniame gale, visi tai mato iš karto.

Tai vienas labiausiai perkeliamų įpročių iš sveikatos ekonomikos į programinės įrangos verslo bylas.

## Matematika

Kiekvienam parametrui p su tikėtinu diapazonu [p_low, p_high]:

```
Result_low  = model(p = p_low,  all others at base case)
Result_high = model(p = p_high, all others at base case)
Swing(p)    = |Result_high − Result_low|
```

Surikiuokite parametrus pagal svyravimą; nubraižykite horizontalias juostas aplink bazinio atvejo rezultatą. Variantai: dvipusė DSA (keičiami du parametrai tinkle), slenksčio analizė (rasti parametro reikšmę, kur sprendimas apsiverčia).

## Išspręstas pavyzdys

DI programavimo asistentas 200 kūrėjų. Bazinis atvejis: 39 £/kūrėjui/mėn. licencija; 30 min/kūrėjui/dieną sutaupoma; visa kaina 60 £/val.; 220 darbo dienų.

```
Base-case annual benefit = 200 × 0.5h × 220 × £60 = £1,320,000
Annual cost              = 200 × £39 × 12         = £93,600
Base-case net            = £1,226,400
```

Tornado (po vieną parametrą):

```
Time saved 0.1–1.0 h/day: net = £170,400 … £2,546,400   (swing £2.38M) ← dominates
Loaded cost £40–£80/h:    net = £786,400 … £1,666,400   (swing £0.88M)
Working days 200–240:     net = £1,106,400 … £1,346,400 (swing £0.24M)
Licence £30–£50/mo:       net = £1,248,000 … £1,200,000 (swing £48k)
```

Slenksčio analizė: grynoji nauda tampa nuline ties apie **2,1 minutės per dieną** sutaupyta. Sprendimas nejautrus licencijos kainai ir visiškai priklauso nuo sutaupyto laiko įverčio – todėl matuokite tai, o ne likusį. (Ir prisiminkite, kad rezultatas yra pajėgumai, o ne pinigai – žr. [pinigus atlaisvinančios ir neatlaisvinančios santaupos](../pinigus-atlaisvinančios-ir-neatlaisvinančios-santaupos/).)

## Ryšys su programinės įrangos inžinerija

Inžinieriai šį instinktą jau turi kaip „o jei klystame dėl X?“ – DSA tik padaro jį sistemingą ir matomą. Dėkite tornado diagramą į kiekvieną įrankių pasiūlymą, pajėgumų planą ir kurti-ar-pirkti analizę. Ji paverčia ginčus apie tai, kieno nuojauta teisi, susitarimais dėl to, kurį parametrą eiti matuoti – dažnai per bandymą, kurio vertė pati gali būti įkainota (žr. [tobulos informacijos tikėtina vertė](../tobulos-informacijos-tikėtina-vertė/)).

## Spąstai

- **Pagražinti diapazonai**: ±10 % aplink kiekvieną įvestį nepriklausomai nuo tikrojo neapibrėžtumo. Sutaupyto laiko įverčiai nusipelno ±80 %; licencijų kainos ±10 %.
- **Po vieną vienu metu praleidžia sąveikas** – koreliuojantiems parametrams (įsisavinimas ir sutaupytas laikas) reikia dvipusės analizės arba pilnos [tikimybinės jautrumo analizės](../tikimybinė-jautrumo-analizė/).
- **Analizės atlikimas ir jos ignoravimas**: jei tornado sako, kad byla priklauso nuo vieno minkšto skaičiaus, kitas žingsnis yra matavimas, o ne patvirtinimas.

## Šaltiniai

- York Health Economics Consortium glossary: deterministic sensitivity analysis. <https://yhec.co.uk/glossary/deterministic-sensitivity-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
