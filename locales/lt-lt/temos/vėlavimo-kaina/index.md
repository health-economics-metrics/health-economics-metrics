# Vėlavimo kaina (CoD)

Vėlavimo kaina – tai ekonominė vertė, prarandama per laiko vienetą, kol funkcija, produktas ar paslauga *nepristatyti*. Tai stipriausias vienas tiltas tarp programinės įrangos pristatymo rodiklių ir sveikatos ekonomikos: jis paverčia „pristatėme per vėlai“ pinigais – ar QALY.

## Kodėl tai svarbu

Reinertseno taisyklė: „Jei kiekybiškai įvertinsite tik vieną dalyką, įvertinkite vėlavimo kainą.“ Dauguma organizacijų žino, kiek kainuoja projektas, bet ne tai, kiek kainuoja vėlavimo mėnuo, todėl optimizuoja biudžetus, kraujuodamos laiko vertę. Sveikatos priežiūros programinei įrangai statymai tiesioginiai: kiekviena savaitė, kai atidedamas kelio patobulinimas, pacientai ilgiau laukia blogesnės sveikatos būsenose. CoD yra stipriausias matematinis pagrindas pristatyti NHS suinteresuotiesiems asmenims, nes jis įkainoja jūsų programinės įrangos *nebuvimą*.

## Matematika

```
CoD = benefit per unit time forgone while undelivered   (£/week or QALYs/week)

Total delay loss = CoD × delay duration

For prioritization, see wsjf-and-cd3.md: CD3 = CoD / duration.
```

Klinikinei programinei įrangai išreikškite ir sveikata, ir pinigais:

```
CoD_health = patients affected per week × QALY gain per patient
CoD_money  = CoD_health × λ (willingness-to-pay threshold, £20k–30k/QALY)
             + operational savings per week forgone
```

## Išspręstas pavyzdys

**Veiklos**: programinė įranga sutaupo 200 £ vienam pacientui kelyje; trestas per savaitę apdoroja 50 tokių pacientų.

```
CoD = 200 × 50 = £10,000/week
A 10-week procurement delay costs 200 × 50 × 10 = £100,000 in avoidable waste.
```

**Klinikinis**: triažo patobulinimas pašalina 5 savaičių laukimą (naudingumas 0,68 → 0,80 anksčiau) 100 pacientų per savaitę:

```
QALY gain per patient = (5/52) × 0.12 ≈ 0.0115
CoD_health = 100 × 0.0115 = 1.15 QALYs/week
CoD_money  = 1.15 × £20,000 ≈ £23,000/week of health value
```

6 mėnesių diegimo vėlavimas „kainuoja“ ~30 QALY – argumentas, kuris perrėmina IT paleidimo vėlavimą kaip klinikinį įvykį. (Mastelio etalonas: Black Swan Farming garsioji Maersk analizė rado atskiras funkcijas su CoD ≈ 200 tūkst. USD per savaitę, kurios laukė 38 savaites.)

## Ryšys su programinės įrangos inžinerija

CoD yra rodiklis, padarantis [DORA vykdymo trukmę](../dora-rodikliai/) ir [srauto efektyvumą](../srauto-rodikliai/) finansiškai suprantamus: vykdymo trukmė × CoD = eilėse sudeginti pinigai (ar sveikata). Panaudojimas:

- **Prioritetų nustatymas**: darbus rūšiuokite pagal CoD / trukmę ([WSJF / CD3](../wsjf-ir-cd3/)), o ne pagal garsiausią suinteresuotąjį asmenį.
- **Proceso ekonomika**: 2 savaičių išleidimo ritmas turi tikėtiną vėlavimo kainą ~1 savaitė × CoD vienai funkcijai, palyginti su nuolatiniu pristatymu – įkainokite partiją.
- **Pirkimai**: NHS pirkimų ciklai po 6–18 mėnesių turi CoD; jos parodymas keičia skubos pokalbius (įperkamumo atitikmenį žr. [biudžeto poveikio analizė](../biudžeto-poveikio-analizė/)).

## Spąstai

- **Linijinės CoD prielaida**: kai kurio darbo vertė turi termino formą (reguliavimo datos – begalinė CoD po datos, nulinė prieš) arba mažėja (pirmojo žaidėjo langai). Prieš dauginant suklasifikuokite skubos profilį.
- **CoD rezultatams, kurių niekas nenori**: vėlavimas kainuoja tik jei daiktas turi vertę; vėluojančios šiukšlės nieko nekainuoja.
- **Vėlavimo ir diskontavimo dvigubas skaičiavimas**: [diskontavimas](../diskontavimas-ir-laiko-pirmenybė/) jau įkainoja laiką daugiamečiuose horizontuose; CoD yra horizonto viduje veikianti veiklos versija. CoD naudokite savaitėms / mėnesiams, NPV poslinkį – metams.

## Šaltiniai

- Reinertsen DG, *The Principles of Product Development Flow*.
- Black Swan Farming, Cost of Delay. <https://blackswanfarming.com/cost-of-delay/>
- Cost of delay overview. <https://en.wikipedia.org/wiki/Cost_of_delay>
