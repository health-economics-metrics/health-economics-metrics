# Patikros ekonomika

Patikros ekonomika valdo besimptomių populiacijų tyrimo vertę. Pagrindinis matematinis faktas: **esant mažam ligos paplitimui net puikūs testai generuoja daugiausia klaidingų teigiamų rezultatų** – o jų vijimosi tolesnė kaina gali užgožti tikrų radinių naudą.

## Kodėl tai svarbu

Nuo 1968 m. PSO Wilsono–Jungnerio kriterijai nustato kartelę populiacijos patikrai: būklė turi būti svarbi, testas priimtinas ir tikslus, turi egzistuoti veiksmingas gydymas, o ekonomika turi subalansuoti. JK Nacionalinis patikros komitetas prieš tvirtindamas bet kurią nacionalinę programą taiko formalią ekonominio efektyvumo analizę – ir atmeta daugumą pasiūlymų. Kiekvienas „DI patikrins visus dėl visko“ pasiūlymas atsimuša į šią mašineriją ir paprastai pralaimi žemiau pateiktai aritmetikai.

## Matematika

Teigiama prognostinė vertė (PPV) – tikimybė, kad teigiamas rezultatas yra tikras – žlunga esant mažam paplitimui:

```
PPV = (sens × prev) / [sens × prev + (1 − spec) × (1 − prev)]

Example: sensitivity 90%, specificity 95%, prevalence 0.5%:
PPV = (0.9 × 0.005) / (0.9 × 0.005 + 0.05 × 0.995)
    = 0.0045 / (0.0045 + 0.04975) ≈ 8.3%
```

Vienuolika iš dvylikos teigiamų rezultatų yra klaidingi. Pilna programos ekonomika:

```
Cost per true case found = (screening cost + workup cost × all positives) / true positives
Then: is finding a case worth that? (earlier-intervention value per case,
      minus overdiagnosis harm — cases found that would never have mattered)
```

## Išspręstas pavyzdys

DI tinklainės patikra retai būklei, 100 000 žmonių, paplitimas 0,5 %, jautrumas 90 %, specifiškumas 95 %, tyrimas 15 £, patvirtinamasis tyrimas 400 £:

```
True positives:  100,000 × 0.005 × 0.90 = 450
False positives: 100,000 × 0.995 × 0.05 = 4,975
Cost = 100,000 × 15 + (450 + 4,975) × 400 = 1.5M + 2.17M = £3.67M
Cost per true case ≈ £8,156
```

Jei ankstyvas gydymas sutaupo 20 000 £ + 1 QALY už atvejį, programa lengvai praeina. Padidinkite specifiškumą iki 99 % (mažiau klaidingų aliarmų): patvirtinamųjų tyrimų kaina krenta iki (450 + 995) × 400 = 0,58 mln. £, iš viso 2,08 mln. £, kaina už atvejį ≈ **4 622 £** – esant mažam paplitimui patikros ekonomika laimima specifiškumu, o ne jautrumu.

## Ryšys su programinės įrangos inžinerija

Statinė analizė, saugumo skenavimas ir anomalijų aptikimas yra kodo bazių ir telemetrijos patikros programos, kur tikro defekto paplitimas vienai perspėjimo galimybei dažnai gerokai mažesnis nei 1 %. Identiška matematika paaiškina perspėjimų nuovargį: 95 % specifiškas skeneris mažo paplitimo kode skandina komandas klaidingais teigiamais, ir kiekvienas klaidingas teigiamas kainuoja dėmesį ir ardo pasitikėjimą, kol tikri perspėjimai ignoruojami (klinikinis terminas – *patikros žala*; inžinerinis – *pager nutirpimas*). Priemonės perkeliamos iš sveikatos: didinkite specifiškumą prieš jautrumą, tikrinkite didesnio paplitimo pogrupius (rizika pagrįstas taikymas ↔ tik pakeisto kodo skenavimas) ir įskaičiuokite triažo kainą į įrankio ekonomiką – žr. [NNT](../reikalingas-gydyti-skaičius/) ir [klinikinio DI vertinimas](../klinikinio-di-vertinimas/). Visos patikros programos, o ne vieno testo, dydžiui nustatyti žr. [reikalingas ištirti skaičius](../reikalingas-ištirti-skaičius/) – kiek žmonių turi praeiti visą patikros-ir-gydymo kelią, kad būtų išvengta vieno rezultato.

## Spąstai

- **Jautrumo / specifiškumo cituojimas be paplitimo** – tikslumas be PPV yra rinkodara.
- **Per didelės diagnostikos ignoravimas**: lėtinės „ligos“, kuri niekada nebūtų pakenkusi, radimas sukelia realias gydymo sąnaudas ir žalą.
- **Pirmaeigio laiko paklaida (lead-time bias)**: ankstesnis aptikimas nepakeitus rezultatų išpučia akivaizdų išgyvenamumą – žr. [ankstesnė intervencija](../ankstesnė-intervencija/).

## Šaltiniai

- Wilson JMG, Jungner G. "Principles and practice of screening for disease." WHO 1968. <https://apps.who.int/iris/handle/10665/37650>
- UK National Screening Committee. <https://www.gov.uk/government/groups/uk-national-screening-committee-uk-nsc>
