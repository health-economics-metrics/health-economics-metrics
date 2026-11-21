# Biudžeto poveikio analizė (BIA)

BIA įvertina, ką intervencijos įdiegimas padaro konkretaus mokėtojo **biudžetui** per ateinančius 1–5 metus. Ji atsako į *įperkamumo* klausimą; ekonominis efektyvumas atsako į *vertės* klausimą. Technologija gali būti puikios vertės ir vis tiek neįperkama – arba įperkama, bet menkos vertės. Rimti vertinimai reikalauja abiejų.

## Kodėl tai svarbu

Finansų direktoriaus klausimas niekada nėra „koks ICER?“ – jis yra „ką tai padarys kitų metų biudžetui?“ ISPOR gerosios praktikos gairės (srities standartas) nurodo: paties mokėtojo perspektyvą, 1–5 metų horizontą, *nediskontuotus* metinius pinigų srautus, realistiškas įsisavinimo kreives ir scenarijų (o ne tikimybinį) neapibrėžtumą. NICE reikalauja biudžeto poveikio informacijos kartu su ekonominiu efektyvumu; produktas, kurio nacionalinis biudžeto poveikis Anglijoje viršija ~20 mln. £ per metus, inicijuoja komercines derybas nepriklausomai nuo jo ICER.

## Matematika

```
BI_year_t = Cost_scenario_with_new(t) − Cost_scenario_current(t)

Cost_scenario(t) = Σ over patient groups:
   eligible population(t) × uptake(t) × net cost per patient(t)

net cost per patient = intervention cost − displaced care cost + induced care cost
```

Pagrindiniai modeliavimo pasirinkimai: tinkamos populiacijos augimas, įsisavinimo kreivė (diegimas niekada nėra momentinis), ką nauja parinktis išstumia ir kokią paklausą ji *sukelia* (lengvesnė prieiga → daugiau vartotojų).

## Išspręstas pavyzdys

Mokėtojas, draudžiantis 2 mln. žmonių, svarsto skaitmeninę terapijos priemonę po 300 £ pacientui per metus; 1,5 % narių tinkami (30 000); įsisavinimas 20 % → 40 % → 60 % per 3 metus; kiekvienas vartotojas išstumia 120 £ per metus kitos priežiūros.

```
Net cost per user = 300 − 120 = £180

Year 1: 30,000 × 0.20 × 180 = £1.08M
Year 2: 30,000 × 0.40 × 180 = £2.16M
Year 3: 30,000 × 0.60 × 180 = £3.24M
```

Net jei produkto ICER puikus – 8 000 £/QALY – mokėtojas iki trečiųjų metų turi rasti 3,24 mln. £ *naujų pinigų* – išstumti 120 £ plonai paskirstyti kitoms biudžeto eilutėms ir nebus atlaisvinti kaip pinigai (žr. [pinigus atlaisvinančios ir neatlaisvinančios santaupos](../pinigus-atlaisvinančios-ir-neatlaisvinančios-santaupos/)). Todėl vieneto vertė ir įperkamumas yra atskiros kliūtys.

## Ryšys su programinės įrangos inžinerija

BIA yra būtent finansų direktoriui skirtas papildinys prie ROI teiginio vienai vietai: „kainuoja efektyviai vienam programuotojui, bet ar galime sau leisti diegimą visoje organizacijoje šiais finansiniais metais?“ Modeliuokite licencijų pakopas, diegimo S kreivę, išstumtas įrankių išlaidas, kurios atlaisvina pinigus tik tada, kai senos sutartys iš tikrųjų nutraukiamos, ir sukeltą naudojimą (pigesnė CI → daugiau CI). Trejų metų biudžeto poveikio lentelė šalia ROI daro įmonės įrankių pasiūlymą finansiškai patikimą. Paskelbtos biudžeto poveikio sumos paskirstymas tarp vietų, kohortų ar finansinių metų – kad dalys tiksliai sutaptų su paskelbtu skaičiumi – yra būtent [tikslus sąnaudų paskirstymas centais](../tikslus-sąnaudų-paskirstymas-centais/); daugybės eilučių, kurios sudaro bendrą sumą, sudėjimas yra [valiutai saugus sąnaudų sumavimas](../valiutai-saugus-sąnaudų-sumavimas/).

## Spąstai

- **Momentinio įsisavinimo fantazija**: pirmųjų metų poveikis skaičiuojamas esant nusistovėjusiam diegimui.
- **Išstumtų sąnaudų skaičiavimas kaip pinigų**, kai tai išsklaidyti pajėgumai.
- **Sukeltos paklausos ignoravimas** – prieigos pagerinimai didina tinkamos populiacijos naudojimą.
- **BIA ir CEA horizontų / diskontavimo painiojimas**: BIA pagal paskirtį yra trumpo horizonto, nediskontuota ir būdinga konkrečiam mokėtojui.

## Šaltiniai

- Sullivan SD, et al. ISPOR BIA Good Practice II Task Force. Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
- ISPOR good practices: budget impact analysis. <https://www.ispor.org/heor-resources/good-practices/article/principles-of-good-practice-for-budget-impact-analysis-ii>
