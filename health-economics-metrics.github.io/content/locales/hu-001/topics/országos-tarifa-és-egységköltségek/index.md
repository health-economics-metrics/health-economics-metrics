# Országos tarifa és egységköltségek

Az NHS szabályalapú országos árlista szerint fizet a szolgáltatóknak a tevékenységért — történelmileg a National Tariff / Payment by Results, amelyet 2023. április 1-jén az **NHS Payment Scheme (NHSPS)** váltott fel. Az árak mögött országos egységköltség-számítási infrastruktúra áll: a **National Cost Collection (NCC)** és a **PSSRU Unit Costs of Health and Social Care** gyűjtemény.

## Miért fontos

Ezek minden hiteles NHS-üzleti eset nevezői. Amikor egy állítás szerint „egy járóbeteg-megjelenés 160 £-ot ér" vagy „egy Band 6 ápolói óra 31 £-ba kerül", ezek a számok ebből az infrastruktúrából származnak — és a hivatalos számok használata a kitaláltak helyett teszi összehasonlíthatóvá a független értékeléseket és együttműködővé a pénzügyi csapatokat. Egy szállítónak a tarifa a *bevételi* oldalt is meghatározza: a szoftvered által lehetővé tett tevékenység (további rendelések, újratöltött ágyak) a konstrukció áraiban értékelődik.

## A matematika

```
Tariff price per unit of activity (HRG-coded spell, outpatient attendance)
  = national average unit cost (from NCC) × Market Forces Factor (local adjustment)
  under NHSPS: blended fixed + variable ("aligned payment and incentive") elements

NCC unit cost = trust-reported total cost of an activity type / activity volume
                (built on Patient-Level Information and Costing Systems, PLICS)

PSSRU compendium: ~80 standard unit costs (GP consultation, nurse-hour by band,
ED attendance…) — the default source in UK economic evaluations.
```

## Kidolgozott példa

A szoftvered naponta 1 órát szabadít fel egy Band 6 ápoló idejéből egy 250 munkanapos évben:

```
PSSRU-based Band 6 cost incl. overheads ≈ £31/hour (check current edition)
Capacity value = 250 × £31 = £7,750/nurse/year (non-cash-releasing)
```

Alternatívaként az ápoló naponta 2 további járóbeteg-utánkövető időpontot tart ~160 £ konstrukciós értéken: 500 × 160 £ = **80 000 £/év finanszírozott tevékenység** — tízszeres különbség az állított értékben az átcsoportosítástól függően, mind hivatalos egységköltségekből. Mindkét állítás auditálható, mert a nevezők közzétettek; ez az egész lényeg.

## Kapcsolat a szoftverfejlesztéssel

Ez a **belső árjegyzék** minta. Az egyesült királyságbeli egészséggazdaságtan azért működik, mert minden értékelés ugyanazokat a közzétett egységköltségeket használja; a mérnöki szervezetekből ez többnyire hiányzik, így minden üzleti eset kitalálja a saját mérnökóra-, incidens- és telepítésköltségét. Egy platformcsapat pontosan ilyen jegyzéket tehet közzé — teljes költség mérnökóránként szintenként, incidensenként súlyosság szerint, build-percenként — és előírhatja a használatát minden javaslatban. A visszaterhelési/megmutatási (chargeback/showback) rendszerek a tarifa ismert hibamódjait is megismétlik: az átlagköltség-árazás volumenjátékot ösztönöz, a fix kifizetések az alulszolgáltatást. Az NHSPS fejlődése a tisztán tevékenységalapú fizetéstől a kevert fix+változó felé húsz évnyi tanulság az ösztönzőtervezésről a belső platformárazáshoz.

## Buktatók

- **Elavult számok**: az NCC, a PSSRU és az NHSPS árai évente frissülnek — keltezz minden számot.
- **Tarifaár ≠ költség**: az árak korrekciókkal ellátott országos átlagok; a helyi határköltséged eltér (lásd [határköltség és átlagköltség](../határköltség-és-átlagköltség/)).
- **A kapacitás tarifán való értékelése olyan mechanizmus nélkül**, amely ténylegesen szállítaná a többlettevékenységet, és megfizetnék.

## Források

- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
