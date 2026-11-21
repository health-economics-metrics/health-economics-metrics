# Készpénzfelszabadító és nem készpénzfelszabadító megtakarítások

A készpénzfelszabadító megtakarítások a tényleges kiadást csökkentik — egy költségvetési sor kisebb lesz. A nem készpénzfelszabadító megtakarítások időt vagy kapacitást szabadítanak fel, amelyet *újrahasznosítanak*, nem pedig félretesznek. Az egészségügyi rendszerek pénzügyi igazgatói ezeket különböző fajoknak tekintik, és neked is így kell.

## Miért fontos

Ez a legélesebb őszinteségi teszt, amelyet egy nemzeti egészségügyi szolgálatban bármely digitális üzleti esetre alkalmaznak. Az NHS előnykeretei kifejezetten minden állított előnyt készpénzfelszabadítónak, nem készpénzfelszabadítónak vagy kvalitatívnak minősítenek. A digitális egészségügyi „megtakarítások" többsége — betegenként megtakarított klinikusi percek, gyorsabb dokumentáció — nem készpénzfelszabadító: értékes, de nem csökkenti a hiányt. A finanszírozási hiánnyal szembesülő tröszti pénzügyi igazgató csak készpénzt tud elkölteni. Lásd még: [kemény készpénzfelszabadító megtakarítások](../kemény-készpénzfelszabadító-megtakarítások/).

## A matematika

```
Cash-releasing saving   = budget line before − budget line after
                          (must be extractable: a cancelled contract, closed ward,
                           reduced agency spend, avoided purchase)

Non-cash-releasing value = time released × unit cost of that time
                          (valued at opportunity cost; the money is NOT extractable)
```

Ugyanaz a fizikai esemény (egy megtakarított óra) az egyik vagy a másik kategóriába kerül aszerint, mi történik utána:

```
hour saved → overtime/agency shift cancelled        → cash-releasing
hour saved → clinician sees one more waiting patient → non-cash-releasing (capacity)
hour saved → absorbed into slack, nothing changes    → no benefit at all
```

## Kidolgozott példa

A szoftver 100 ápolónak megtakarít műszakonként 30 percet. Ez 100 × 0,5 × 5 műszak/hét × 46 hét ≈ 11 500 óra/év. A 5. sávos (Band 5) munkáltatói költség ~25 £/óra mellett a csábító főszám 287 500 £/év.

Az őszinte felosztás:

- Az idő 20%-a ott landol, ahol az osztályok jelenleg bank-/ügynökségi felárat fizetnek a dokumentációs túlórák fedezésére: 2300 óra × 35 £ ügynökségi díj = **80 500 £ készpénzfelszabadító** (valóban le nem foglalt műszakok).
- 60%-át közvetlen betegellátásra csoportosítják át: 6900 óra × 25 £ = **172 500 £ nem készpénzfelszabadító kapacitás** — valódi érték, külön jelentve, soha nem „megtakarításnak" nevezve.
- 20% szétoszlik szünetekben és megszakításokban: **0 £**. Ennek igénylése fikció volna.

Az az üzleti eset, amely 80,5 ezer £ készpénzt + 172,5 ezer £ kapacitást mutat be, hiteles. Az, amelyik 287,5 ezer £ „megtakarítást" mutat, az első könyvelőnél elbukik, aki elolvassa.

## Kapcsolat a szoftverfejlesztéssel

Ugyanez a logika szabályozza az MI-kódolássegédek megtérülését: a „fejlesztőnként napi 30 perc" nem készpénzfelszabadító kapacitás, hacsak a létszám, a vállalkozói kiadások vagy a felhőköltség ténylegesen nem csökken. A kategóriákat külön jelentsd:

- Készpénzfelszabadító: lemondott vállalkozói szerződések, leszerelt eszközlicencek, csökkent felhőkiadás.
- Kapacitás: hamarabb szállított funkciók (érték a [késedelem költségén](../a-késedelem-költsége/) keresztül), lebontott backlog.
- Semmi: percek, amelyek környezetváltásokba aprózódnak.

Kövesd azt is, *hová ment ténylegesen a felszabadult idő* — a haszonrealizálás ([benefits-realization.md](../haszonrealizálás/)) azért létezik, mert az állított kapacitásnövekmények gyakran elpárolognak az audit során.

## Buktatók

- **A percek megszorzása a fizetéssel és megtakarításnak nevezése** — a kanonikus bűn.
- **A felszabadult idő értékelése átlagos teljes költségen**, amikor az idő határhasznosítása alacsony értékű — lásd [határköltség és átlagköltség](../határköltség-és-átlagköltség/).
- **Ugyanannak az órának a kétszeri számlálása**: készpénzként (elkerült műszak) és kapacitásként (több ellátott beteg).

## Források

- NHS Digital connectivity business case guidance, economic case (benefit categories). <https://digital.nhs.uk/services/networks-and-connectivity-transformation-frontline-capabilities/connectivity-hub/advice-and-guidance/making-the-business-case-for-connectivity-infrastructure-investment---guidance/economic-case>
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
