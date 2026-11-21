# GDS paslaugų rodikliai

JK vyriausybės skaitmeninė tarnyba (GDS) savo Paslaugų vadove įpareigoja kiekvienai vyriausybės skaitmeninei paslaugai taikyti keturis KPI: **kaina vienam sandoriui, vartotojų pasitenkinimas, užbaigimo rodiklis ir skaitmeninis naudojimas**. Kartu jie yra minimali viešosios skaitmeninės paslaugos ekonomika – ir šablonas, kurį paveldi NHS skaitmeninės paslaugos.

## Kodėl tai svarbu

GDS rodikliai koduoja kanalų perėjimo verslo bylą, finansavusią dešimtmetį vyriausybės skaitmeninimo: Skaitmeninio efektyvumo ataskaita nustatė, kad skaitmeniniai sandoriai yra ~20× pigesni nei telefonu ir ~50× pigesni nei akis į akį (vietos valdžios skaičiai: internetu 0,15 £, telefonu 2,83 £, akis į akį 8,62 £). Tačiau santaupos atsiranda tik kai žmonės *užbaigia* skaitmeninį kelią (užbaigimo rodiklis) *vietoje* brangaus kanalo (naudojimas) – keturi KPI yra vienas ekonominis modelis, o ne keturi skydeliai.

## Matematika

```
Cost per transaction = total service cost / completed transactions
Completion rate      = completed / started transactions × 100
Digital take-up      = digital transactions / all-channel transactions × 100
User satisfaction    = % satisfied+very satisfied (5-point, in-service survey)

Channel-shift saving = volume × take-up shift × (cost_old_channel − cost_digital)
… minus failure demand: (1 − completion rate) × fallback channel cost
```

## Išspręstas pavyzdys

NHS vizitų valdymo paslauga: 2 mln. sandorių per metus, šiuo metu 70 % telefonu (3,20 £/skambutis) / 30 % skaitmeniškai (0,25 £). Pertvarkymas pakelia skaitmeninį naudojimą iki 55 %, o užbaigimą nuo 84 % iki 93 %:

```
Take-up shift saving = 2M × 0.25 × (3.20 − 0.25) = £1,475,000/year

Failure-demand saving: failed digital journeys fall back to phone
  before: 2M × 0.30 × 0.16 × £3.20 = £307,200
  after:  2M × 0.55 × 0.07 × £3.20 = £246,400
  net £60,800/year — completion improvements protect the take-up gains

Satisfaction is the leading indicator: dissatisfied users revert to phone,
so a satisfaction drop forecasts take-up decay before it appears.
```

## Ryšys su programinės įrangos inžinerija

Šie keturi KPI yra gamybinio lygio [sąnaudų ir pasekmių lentelės](../sąnaudų-ir-pasekmių-analizė/) pavyzdys: vienas kainos rodiklis, trys rezultatų rodikliai, niekada nesuspausti į balą. Produktų inžinieriams veiklos pamokos: **užbaigimo rodiklis yra piltuvo instrumentavimo problema** (kiekvienas atsisakymo taškas randamas ir pataisomas); **kaina vienam sandoriui yra [debesijos vieneto ekonomika](../debesijos-vieneto-ekonomika/)** plius personalo padedamų kanalų sąnaudos; **naudojimas yra užmaskuotas lygybės rodiklis** – vartotojai, kurie negali ar nenori pereiti kanalo, neproporcingai dažnai yra pagyvenę, neįgalūs ir nepasiturintys, todėl agresyvus kanalų uždarymas paverčia „santaupas“ prieigos žala (žr. [aprėptis ir lygybė](../aprėptis-ir-lygybė/)). Rodiklių skelbimas (GOV.UK daro tai kiekvienai paslaugai) pats yra mechanizmas: skaidrumas drausmina prognozes taip, kaip [naudos realizavimo](../naudos-realizavimas/) auditai.

## Spąstai

- **Naudojimas prievarta**: telefono linijos uždarymas kelia naudojimą ir numeta nesėkmių paklausą ant priekinės linijos personalo; matuokite visos sistemos kainą.
- **Užbaigimas, matuojamas nuo 2-ojo puslapio**: piltuvo pradžia po atkritimo taško pataikauja rodikliui.
- **Kaina vienam sandoriui, ignoruojanti padedamą skaitmeninį palaikymą** ir nesėkmių paklausos tvarkymą.
- **Pasitenkinimo apklausos tik sėkmingai užbaigus** – nepatenkinti dažniausiai niekada nepasiekia apklausos.

## Šaltiniai

- GOV.UK Service Manual, measuring success / mandatory KPIs. <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- Digital Efficiency Report. <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
