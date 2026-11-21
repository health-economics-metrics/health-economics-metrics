# QALY deficitas ir sunkumo modifikatoriai

QALY deficitas matuoja, kiek būsimos sveikatos liga atima iš pacientų, palyginti su bendra populiacija. NICE jį naudoja **sunkumo modifikatoriams** taikyti: kuo sergantesnė populiacija, tuo daugiau verta kiekvienas įgytas QALY – iki 1,7× standartinio slenksčio.

## Kodėl tai svarbu

Nuo NICE 2022 m. vadovo sunkumas yra aiškus sveikatos laimėjimų vertės daugiklis, pakeitęs ankstesnę gyvenimo pabaigos priemoką. Technologija sunkiai būklei vertinama pagal efektyvų slenkstį iki ~51 000 £/QALY vietoje 30 000 £. Jei jūsų programinė įranga aptarnauja sunkiai paveiktą populiaciją (pažengęs širdies nepakankamumas, sunki psichikos liga), sunkumo modifikatorius gali būti skirtumas tarp finansuojamos ir nefinansuojamos ekonominės bylos – ir jums reikia deficito matematikos tam deklaruoti.

## Matematika

Du matai, skaičiuojami per likusį gyvenimą su dabartine standartine priežiūra:

```
Absolute shortfall     = QALYs_general_population − QALYs_with_condition
Proportional shortfall = Absolute shortfall / QALYs_general_population
```

NICE 2022 svoriai (taikomas tas matas, kuris duoda didesnį svorį):

```
Weight ×1.0: absolute < 12 and proportional < 0.85
Weight ×1.2: absolute ≥ 12 or proportional ≥ 0.85
Weight ×1.7: absolute ≥ 18 or proportional ≥ 0.95
```

Svoris dauginamas iš ΔE (arba lygiaverčiai – slenksčio): efektyvus λ tampa 24–36 tūkst. £ esant ×1,2 ir 34–51 tūkst. £ esant ×1,7.

## Išspręstas pavyzdys

Pacientai su agresyvia būkle, vidutinis amžius 60. Bendra populiacija 60 metų amžiaus tikisi 14,2 diskontuotų QALY; su būkle esant dabartinei priežiūrai – 2,1.

```
Absolute shortfall     = 14.2 − 2.1 = 12.1  (≥ 12 → qualifies for ×1.2)
Proportional shortfall = 12.1 / 14.2 = 0.852 (≥ 0.85 → also ×1.2)
```

Jūsų stebėsenos platformos ICER yra 26 000 £/QALY – virš standartinio 20–30 tūkst. £ vidurio sprendimo, ribinė. Su ×1,2 svoriu: efektyvus ICER = 26 000 / 1,2 ≈ **21 700 £/QALY** – patogiai finansuojama. Deficito skaičiavimas ką tik pakeitė sprendimą.

## Ryšys su programinės įrangos inžinerija

Sunkumo svėrimas yra formali versija to, ką inžinerijos organizacijos daro instinktyviai: išleisti daugiau vienam pagerinimo vienetui blogiausioje padėtyje esančioms sistemoms. Perkeliamas šablonas – apskaičiuokite kiekvienos paslaugos „SLO deficitą“ (kiek žemiau tikėtino sveiko bazinio lygio ji veikia, absoliučiai ir proporcingai) ir pasverkite taisymo vertę atitinkamai. Tai aritmetika vietoje argumentų pateisina, kodėl degančiai senai sistemai skiriama daugiau investicijų vienai sutaupytai valandai nei sveikai. Ji neša ir tą pačią valdymo pamoką: paskelbkite svorius *prieš* prioritetų susitikimą, kitaip kiekviena komanda deklaruos sunkumą.

## Spąstai

- **Deficito skaičiavimas pagal netinkamą bazę**: jis matuojamas pagal *dabartinę standartinę priežiūrą*, o ne negydytą natūralią eigą.
- **Amžiaus jautrumas**: deficitas smarkiai priklauso nuo populiacijos amžiaus (jaunesni pacientai turi daugiau QALY prarasti → didesnis absoliutus deficitas); naudokite faktinės gydomos populiacijos amžiaus skirstinį.
- **Prielaida, kad modifikatorius taikomas kitur** – tai NICE (Anglija) mechanizmas; kitos SVV institucijos sunkumą tvarko kitaip (arba visai netvarko).

## Šaltiniai

- Analysis of NICE severity modifier decisions, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Mtech Access, NICE HTA decision modifiers explainer. <https://mtechaccess.co.uk/nice-hta-decision-modifier/>
