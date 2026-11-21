# Lefelé irányuló erőforrás-optimalizálás

Egy óra megtakarítása egy vezető szakembernél — háziorvos, vezető rezidens, szakorvos — gyakran megelőzi a szűk keresztmetszeti késedelmeket egy egész multidiszciplináris csapatnál (MDT), amely ápolókból, adminisztratív ügyintézőkből és terapeutákból áll, és klinikai jóváhagyásokra vár. A szűk keresztmetszet feloldásának értéke mindenki áteresztőképessége, aki lefelé áll mögötte.

## Miért fontos

Az egészségügy jóváhagyási láncokon fut: az elbocsátások a szakorvosi jóváhagyásra, a kezelési tervek az MDT-felülvizsgálatra, a beutalók a triázsra várnak. Amikor a kapuzó szerep késik, a költség nem egy ember egy órája — hanem minden függő szerep tétlen vagy blokkolt ideje, plusz a beteg ideje a limbóban (további [ágynapok](../megtakarított-ágynapok/), hosszabb [RTT-várakozások](../beutalástól-a-kezelésig/)). Ez a korlátok elmélete a klinikai útvonalakra alkalmazva: a *szűk keresztmetszetnél* megtakarított óra az egész rendszer határáteresztőképességét éri; máshol megtakarított óra sokkal kevesebbet.

## A matematika

```
Value of unblocking = Σ over downstream roles (blocked hours released × unit cost)
                    + pathway throughput gain × value per pathway completion

Contrast: value of the same hour saved at a non-gating role ≈ that role's
capacity value alone (see practitioner-time.md).
```

Azonosítsd a korlátot empirikusan: hol sorakozik a munka a leghosszabban? Kinek a postaládájához vezethetők vissza a késedelmek?

## Kidolgozott példa

Egy osztály elbocsátásaihoz minden reggel szakorvosi felülvizsgálat kell. A szakorvos napi 90 percet tölt a rendszerek közt szétszórt információk összegyűjtésével; a felülvizsgálatok 14:00-ra végeznek, és napi 6 elbocsátás túl későn fejeződik be az adott napra — mindegyik egy elkerülhető ágynapba kerül.

Egy elbocsátási összefoglaló műszerfal (laborok, gyógyszerek, jelzések egy nézetben) 20 percre csökkenti az összegyűjtést; a felülvizsgálatok 11:30-ra végeznek:

```
Bed days avoided     = 4 of the 6 late discharges × 365 ≈ 1,460 bed days/year
Downstream unblocking: 2 discharge coordinators + pharmacy + transport
                       previously idle-then-crunched each afternoon —
                       ~3 staff-hours/day of blocked time released ≈ 1,100 hrs/yr
```

A szakorvos saját 70 perce az érték *legkisebb* része — ez e mutató lényege. Értékeld az ágynapokat mechanizmus szerint (lásd [megtakarított ágynapok](../megtakarított-ágynapok/)), a személyzeti órákat pedig kapacitásként.

## Kapcsolat a szoftverfejlesztéssel

Ez a code review, az architektúra-jóváhagyás és a staff engineer postaládája. Amikor öt mérnök egy napot vár arra az egy emberre, aki jóváhagyhat egy tervet, a költség öt mérnöknap plusz egy nap [késedelem költsége](../a-késedelem-költsége/) magán a munkán — nem egy bíráló-óra. Az az eszköz, amely tömöríti a kapuzó szerep feladatát (jobb review-kontextus, automatizált előellenőrzések, műszerfalak, amelyek összeállítják, amit a jóváhagyónak kell), rendszer-áteresztőképességet vásárol, nem egyéni kényelmet. Mérd a felvételi/várakozási időt a korlátnál (lásd [folyammutatók](../folyammutatók/)) — ez a 14:00-s elbocsátási szakadék szoftveres megfelelője.

## Buktatók

- **Nem korlát optimalizálása**: gyönyörű eszköz egy olyan szerepnek, amely mögött semmi nem sorakozik, közel nulla rendszerértéket ad.
- **Korlátvándorlás**: oldd fel a szakorvost, és a korlát elmozdul (a gyógyszertárba, a szállításhoz) — modellezd a *következő* korlátot, mielőtt teljes áteresztőképesség-nyereséget állítasz.
- **A lefelé irányuló órák készpénzként számlálása**: a blokkolt idő felszabadítása kapacitás, a szokásos [átcsoportosítási teszt](../készpénzfelszabadító-és-nem-készpénzfelszabadító-megtakarítások/) alá esik.

## Források

- Goldratt EM, *The Goal* (theory of constraints).
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
