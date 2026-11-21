# Dėl negalios prarasti gyvenimo metai (DALY)

DALY – tai vieni prarasti sveiko gyvenimo metai; naštos pusės veidrodis [QALY](../kokybės-požiūriu-pakoreguoti-gyvenimo-metai/). Kur QALY skaičiuoja *įgytą* sveikatą, DALY skaičiuoja dėl ligos *prarastą* sveikatą; intervencijos vertinamos pagal **išvengtus** DALY.

## Kodėl tai svarbu

DALY yra pasaulinės sveikatos standartas (PSO, Pasaulinės ligų naštos tyrimas ir dauguma mažų bei vidutinių pajamų šalių sveikatos ministerijų planuoja pagal DALY). Jei jūsų programinė įranga skirta tarptautinėms sveikatos sistemoms, donorams ar su PSO suderintoms programoms, vertės kalba yra išvengti DALY, o ne įgyti QALY. Istorinis WHO-CHOICE etalonas: intervencija, išvengianti DALY už mažiau nei 1× BVP vienam gyventojui, yra „labai ekonomiškai efektyvi“, 1–3× BVP vienam gyventojui – „ekonomiškai efektyvi“ (PSO dabar nerekomenduoja griežtai taikyti šių juostų, bet praktikoje jos išlieka visur).

## Matematika

```
DALY = YLL + YLD

YLL (years of life lost)         = deaths × standard life expectancy at age of death
YLD (years lived with disability) = prevalence × disability weight

disability weight ∈ [0, 1], 0 = full health, 1 = equivalent to death
(weights published by the Global Burden of Disease study)
```

## Išspręstas pavyzdys

Patikros priminimų platforma regione padidina ankstyvą ligos aptikimą. Per metus ji užkerta kelią 10 priešlaikinių mirčių (kiekviena praranda 20 metų, palyginti su standartine gyvenimo trukme) ir apsaugo 200 žmonių nuo metų su būkle, kurios negalios svoris yra 0,2.

```
YLL averted = 10 × 20        = 200
YLD averted = 200 × 0.2      = 40
DALYs averted               = 240 per year
```

Jei platformos veikimas kainuoja 600 000 USD per metus, kaina už išvengtą DALY yra 600 000 / 240 = **2 500 USD**. Šalyje, kurios BVP vienam gyventojui 8 000 USD, tai gerokai žemiau 1× BVP etalono – „labai ekonomiškai efektyvu“ pagal WHO-CHOICE.

## Ryšys su programinės įrangos inžinerija

- Skaitmeninė sveikata, skirta pasaulinės sveikatos finansuotojams (Gavi, Global Fund, nacionalinės programos), poveikį turėtų išreikšti kaip **kainą už išvengtą DALY** – tai rodiklis, kuriuo jau mąsto dotacijų vertintojai.
- DALY taip pat yra naudingas *naštos apskaitos* šablonas inžinerijai: incidentai, nestabilūs build'ai ir senos sistemos trintis yra kodo bazės „gyventi su negalia metai“ – darbo kančia svertas naštos inventorius parodo, kur taisymas nuperka daugiausia „sveikų inžinerijos metų“, taip pat kaip GBD naštos lentelės nukreipia sveikatos išlaidas.

## Spąstai

- **Įgyti QALY ≠ išvengti DALY skaitine prasme** – skirtingi svoriai, skirtingos gyvenimo lentelės, skirtingos konvencijos (DALY istoriškai naudojo amžiaus svėrimą ir diskontavimą pačiame rodiklyje). Nekonvertuokite nerūpestingai.
- **BVP kartotinių slenksčių naudojimas kaip antspaudas** – pati PSO įspėja, kad jie ignoruoja biudžetus ir alternatyviąją kainą; žr. [norimo mokėti slenksčiai](../pasirengimo-mokėti-slenksčiai/).
- **Populiacijos masto DALY deklaravimas iš vartotojo lygio veiksmingumo** nepadauginus iš įsisavinimo ir laikymosi – žr. [aprėptis ir lygybė](../aprėptis-ir-lygybė/).

## Šaltiniai

- WHO indicator registry: DALYs. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/158>
- Bertram MY, et al. "Cost-effectiveness thresholds: pros and cons." (WHO) <https://pmc.ncbi.nlm.nih.gov/articles/PMC4339959/>
- Marseille E, et al. on GDP-based thresholds, Health Policy and Planning. <https://academic.oup.com/heapol/article/32/1/141/2555408>
