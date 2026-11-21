# Laikymasis ir tęstinumas

Laikymasis (angl. adherence) rodo, kiek faktinis vartojimas atitinka paskirtąjį (intensyvumas); tęstinumas (angl. persistence) – kiek laiko vartojimas tęsiamas iki nutraukimo (trukmė). Farmacijoje yra standartizuoti rodikliai – **MPR** ir **PDC**, o ≥ 80 % laikoma įprasta „laikymosi“ riba; skaitmeninės terapijos priemonės paveldi ir sąvokas, ir problemą: laikymasis yra daugiklis tarp veiksmingumo ir realizuotos vertės.

## Kodėl tai svarbu

Mokėtojai jau veikia pagal šiuos skaičius: PDC ≥ 80 % lemia JAV Medicare žvaigždučių reitingus, kurie keičia realias mokėtojo pajamas – laikymasis yra finansiškai laikanti infrastruktūra, o ne „minkštas“ rodiklis. Skaitmeninėms terapijos priemonėms modelis kartojasi: DiGA duomenys rodo didelius receptų kiekius, bet silpną ilgalaikį laikymąsi, o rezultatais pagrįsta DTx kainodara (Vokietijoje pradedama taikyti nuo 2026 m.) mokės už laikymusi sąlygotus rezultatus. Konceptualus skaitmeninės sveikatos tyrimų patobulinimas: **veiksmingas įsitraukimas** – *pakankamas* įsitraukimas numatytam rezultatui pasiekti – ir jo išvada, **mažiausia veiksminga dozė**, nustatoma empiriškai kiekvienai intervencijai, o ne laikoma „kuo daugiau, tuo geriau“.

## Matematika

```
MPR = Σ days' supply dispensed / days in period × 100   (can exceed 100%;
      overestimates via early refills)
PDC = days covered by supply / days in period × 100     (capped at 100%;
      the conservative, CMS-preferred estimator)
Digital adherence = actual usage events / prescribed usage events × 100
Persistence       = days from initiation to discontinuation
                    (report % persistent at N months; survival methods)

Value gating: realized outcome ≈ efficacy × g(adherence)
  where g is the dose-response function; below the minimum effective
  dose, g ≈ 0 — cost incurred, benefit forfeited
```

## Išspręstas pavyzdys

Skaitmeninis nemigos KET (kognityvinės elgesio terapijos) produktas, skiriamas kaip 6 moduliai per 6 savaites; tyrimo veiksmingumas – 0,025 QALY tarp tų, kurie užbaigė ≥ 4 modulius (empiriškai nustatyta mažiausia veiksminga dozė):

```
1,000 prescriptions at £250 → £250,000 payer spend
Module completion: ≥4 modules 38%; 1–3 modules 34%; zero modules 28%

QALYs realized = 1,000 × 0.38 × 0.025 = 9.5
Cost per QALY  = 250,000 / 9.5 ≈ £26,300 — marginal at NICE thresholds

Adherence engineering (reminders redesign, session shortening) lifts
≥4-module completion to 50%: 12.5 QALYs → £20,000/QALY. The product
crossed the funding threshold without touching the therapy content.
```

Taikant 2026 m. stiliaus veiklos rezultatais pagrįstą kainodarą, tas pats pokytis tiesiogiai keičia *pajamas* – laikymosi inžinerija tampa komerciniu produkto planu.

## Ryšys su programinės įrangos inžinerija

Du žodynai susilieja į vieną sąvoką: programinės įrangos analitika ([aktyvacija](../aktyvavimas-ir-pradėjimas-naudoti/), [lipnumas](../įsitraukimo-rodikliai/), [išlaikymas](../išlaikymas-ir-nutekėjimas/)) ir klinikinė farmacija (MPR, PDC, tęstinumas) abi matuoja intervencijos poveikio trukmę ir dažnį – susiekite savo produkto įvykius su klinikiniu žodynu, ir mokėtojai galės skaityti jūsų skydelius. Inžinerija valdo laikymosi svertus: priminimų logiką (kvaili kasdieniai pranešimai moko juos atmesti, o adaptyvus laikas – ne), sesijos kainą (20 minučių modulis užbaigiamas rečiau nei 3 × 7 minučių) ir trinties telemetriją, rodančią, *kurioje* protokolo vietoje vartotojai pasitraukia. Dozės ir atsako priklausomybę instrumentuokite nuo pirmos dienos – mažiausios veiksmingos dozės analizei, kuria remiasi visas ekonominis modelis, reikia duomenų apie naudojimą, susietą su rezultatu, o juos gali surinkti tik pats produktas.

## Spąstai

- **MPR ir PDC painiojimas**: MPR išpučia rezultatą; nurodykite, kuris vertintojas naudojamas, o viskam, kas skirta mokėtojams, naudokite PDC.
- **Laikymasis rodikliui, o ne terapijai**: atidarymai skaičiuojami kaip dozės (žr. [įsitraukimo rodikliai](../įsitraukimo-rodikliai/)).
- **Tikslai „kuo daugiau, tuo geriau“** ten, kur intervencijos dozė baigtinė – sėkmė yra „baigimas“, o ne begalinis naudojimas.
- **Išlikusiaisiais pagrįsti veiksmingumo teiginiai**: rezultatai tarp besilaikančiųjų apima atrankos efektus (besilaikantys žmonės skiriasi); sąžiningam priežastiniam įverčiui reikia randomizavimo arba kruopštaus koregavimo.

## Šaltiniai

- MPR vs PDC. <https://phslrx.com/medication-adherence-metrics/>
- Yardley L, et al., effective engagement. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
- DiGA adherence findings, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
