# Investicijų grąža (ROI)

ROI – tai grynojo pelno ir investuotų pinigų santykis. Tai rodiklis, kurį inžinerija ir finansai jau dalijasi – sveikatos ekonomika prideda discipliną, leidžiančią ROI teiginiui išlaikyti patikrinimą: deklaruota perspektyva, palyginamasis, horizontas ir naudos kategorijos.

## Kodėl tai svarbu

ROI yra biudžeto turėtojų lingua franca, ir visuomenės sveikata jį taip pat naudoja: reikšminga Masters et al. apžvalga nustatė **medianinį ROI 14,3:1** visuomenės sveikatos intervencijoms (kiekvienas 1 £ grąžina ~14 £ platesnei ekonomikai ir sveikatos sistemai) – skaičius, plačiai naudojamas prevencijos išlaidoms ginti. Bet tas 14:1 yra *visuomeninis, ilgo horizonto* skaičius; ligoninės finansų direktoriaus ROI yra mokėtojo perspektyvos ir 1–3 metų. Dauguma ROI ginčų iš tikrųjų yra nedeklaruotos perspektyvos ginčai.

## Matematika

```
ROI = (Benefits − Costs) / Costs      (often × 100%)

Payback period = Costs / annual net benefit
```

ROI teiginys be keturių deklaracijų yra nepakankamai apibrėžtas:

1. **Perspektyva** – kieno nauda skaičiuojama? (žr. [analizės perspektyva](../analizės-perspektyva/))
2. **Palyginamasis** – palyginti su kokia alternatyva? (žr. [alternatyvioji kaina](../alternatyvioji-kaina/))
3. **Horizontas** – per kiek laiko ir ar [diskontuota](../diskontavimas-ir-laiko-pirmenybė/)?
4. **Naudos klasė** – pinigus atlaisvinanti, pajėgumai ar kokybinė? (žr. [pinigus atlaisvinančios ir neatlaisvinančios santaupos](../pinigus-atlaisvinančios-ir-neatlaisvinančios-santaupos/))

## Išspręstas pavyzdys

El. darbo grafikų sistema, kaina 500 000 £ per 3 metus.

```
Cash-releasing:  agency shift reduction        £450,000
Capacity:        ward-manager admin time freed £600,000 (valued, not banked)
Qualitative:     staff satisfaction, safety    not monetized

Strict financial ROI  = (450,000 − 500,000)/500,000 = −10%
Economic ROI          = (1,050,000 − 500,000)/500,000 = +110%
```

Abu skaičiai teisingi. Tiekėjas, cituojantis „+110 % ROI“ finansų direktoriui, galinčiam realizuoti tik 450 tūkst. £, praras pasitikėjimą; pateikdamas abu, pažymėtus, jį laimės. Tas pats padalijimas apsaugo vidinį šalininką, kai finansai po dvejų metų audituoja naudą.

## Ryšys su programinės įrangos inžinerija

Kiekvienas įrankių pasiūlymas turi ROI skaidrę; beveik niekas nedeklaruoja keturių parametrų. Dažniausia nesėkmė – kategorijų maišymas: pajėgumų laimėjimai (kūrėjų minutės), pateikti kaip finansinė grąža. Struktūruokite DI / platformos ROI kaip aukščiau pateiktą išspręstą pavyzdį – pinigų eilutė, pajėgumų eilutė, kokybinė eilutė – ir pridėkite [jautrumo analizę](../jautrumo-analizė/) minkštiems skaičiams. Būtent DI ROI pelno ir nuostolių realybės patikrai žr. [DI investicijų grąža](../di-investicijų-grąža/).

## Spąstai

- **Perspektyvos plovimas**: dešimtmečio visuomeninė nauda, cituojama biudžeto turėtojui su 12 mėnesių horizontu.
- **Bendras vietoje grynojo**: „grąžina 3 mln. £“ iš 2 mln. £ išlaidų yra 50 % ROI, o ne 300 %.
- **Santykio maksimizavimas**: maži vardikliai duoda įspūdingus ROI trivialioms investicijoms; portfelius reitinguokite pagal NPV ar [grynąją piniginę naudą](../grynoji-piniginė-nauda/), ROI naudokite kaip sietą.
- **Nėra naudos audito**: prognozuojamas ROI be [naudos realizavimo](../naudos-realizavimas/) sekimo yra pažadas, o ne rezultatas.

## Šaltiniai

- Masters R, et al. "Return on investment of public health interventions: a systematic review." J Epidemiol Community Health 2017. <https://pmc.ncbi.nlm.nih.gov/articles/PMC5537512/>
- HM Treasury Green Book. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
