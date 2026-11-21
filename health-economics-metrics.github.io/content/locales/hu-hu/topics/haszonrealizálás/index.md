# Haszonrealizálás

A haszonrealizálás-menedzsment (BRM) az a fegyelem, amely azonosítja, alapvonalat rögzít, követi és *bizonyítja*, hogy az üzleti esetben ígért előnyök a szállítás után tényleg megvalósultak. Az egyesült királyságbeli közberuházásban a HM Treasury Green Book **Five Case Model** modelljén belül él; az orvostudományban rokona a forgalomba hozatal utáni felügyelet.

## Miért fontos

Az üzleti esetek ígéretek; a haszonrealizálás az audit. A jelentős NHS digitális programok értékelései ismételten olyan előrejelzett előnyöket találtak, amelyek soha nem valósultak meg — és amikor az előnyök nem voltak készpénzfelszabadítók, nem tettek semmit a tröszt eredményéért. A Green Book válasza: minden kiadási esetnek át kell mennie **öt eseten** (stratégiai, gazdasági, kereskedelmi, pénzügyi, irányítási), a haszonrealizálást az irányítási esetben *jóváhagyás előtt* megtervezve — megnevezett felelősökkel, rögzített alapvonalakkal, kitűzött mérési dátumokkal. Enélkül a „a szoftver ápolónként 30 percet takarított meg" örökre szállítói fikció marad.

## A matematika

```
Realization rate = benefits realized / benefits forecast   (per benefit, per period)

Mechanics that make it computable:
  baseline captured BEFORE go-live (else the delta is unmeasurable)
  each benefit: owner, metric, data source, measurement schedule
  forecast adjusted for optimism bias at appraisal (Green Book mandate)
  benefits classed cash / non-cash / qualitative and tracked separately
  (see cash-releasing-vs-non-cash-releasing.md)
```

## Kidolgozott példa

Egy e-beosztási üzleti eset évente ígért: 450 ezer £ ügynökségi kiadáscsökkenést (készpénz), 8000 osztályvezetői órát (kapacitás), javuló betöltési-arány megfelelést (kvalitatív). Tizenkét hónappal az éles indulás után:

```
Benefit           Forecast    Realized    Rate   Evidence
Agency spend      £450,000    £287,000    64%    ledger vs baseline year
Manager hours     8,000       5,100       64%    time-motion sample
Fill compliance   +10pp       +12pp       120%   rostering system data

Actions from the review (the point of BRM):
agency shortfall traced to two wards never onboarded → onboard them;
forecast model's 30%-optimism error logged → applied to the next case.
```

A 64%-os realizálás nem kudarc — *tudás*. A nem mért esetek örökké 100%-ot állítanak.

## Kapcsolat a szoftverfejlesztéssel

A mérnöki szervezetek előrejelzett előnyök alapján hagyják jóvá a platformbefektetéseket, és szinte soha nem auditálják őket — pontosan az a kórkép, amelyet a BRM javít. A könnyű átvitel: minden küszöb feletti javaslat megnevezi az előnyfelelősöket, az alapvonalmutatókat és a T+6 hónapos felülvizsgálati dátumot; a realizálási arányok visszacsatolnak abba, mennyire diszkontálja a szervezet az adott csapat (vagy szállító) következő előrejelzését. Ez a válasz az MI-eszközökkel szembeni szkepticizmusra is: az [MIT megállapítása, miszerint a GenAI-kísérletek ~95%-a nem mutatott mérhető eredménykimutatási megtérülést](../mi-befektetés-megtérülése/), haszonrealizálási eredmény — azok a kísérletek, amelyek *megtérültek*, követhető, felelőssel bíró előnysorokkal rendelkeztek. Előrejelzés → mérés → újrakalibrálás ugyanaz a hurok, mint az [EVPI](../a-tökéletes-információ-várható-értéke/)-árazott kísérleti projekteknél, portfólióléptékben futtatva.

## Buktatók

- **Nincs éles indulás előtti alapvonal** — a végzetes, kijavíthatatlan mulasztás.
- **Előny-árvaság**: megnevezett felelős nélkül senki nem gyűjti az adatot, és minden felülvizsgálat azt mondja: „nagyjából a terv szerint."
- **Programok közötti dupla számított előnyök**, amelyek ugyanazt a felszabadult kapacitást állítják — vezess előnynyilvántartást a portfólión át.
- **Realizálási színház**: a könnyű kvalitatív nyereségek mérése, miközben a készpénzsorokat csendben nem vizsgálják.

## Források

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Global Digital Exemplar programme evaluation (NHS digital benefits lessons). <https://pmc.ncbi.nlm.nih.gov/articles/PMC8685936/>
