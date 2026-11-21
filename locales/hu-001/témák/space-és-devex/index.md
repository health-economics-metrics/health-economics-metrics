# SPACE és DevEx

A SPACE (Satisfaction & well-being, Performance, Activity, Communication & collaboration, Efficiency & flow — elégedettség és jólét, teljesítmény, aktivitás, kommunikáció és együttműködés, hatékonyság és flow) és a DevEx (visszacsatolási hurkok, kognitív terhelés, flow-állapot) keretrendszerek a fejlesztői termelékenység **többdimenziós** mérésére — az ágazat válasza arra a felfedezésre, hogy egyetlen mutató sem éli túl a valósággal való találkozást.

## Miért fontos

Mindkét keretrendszer ugyanazt a nehezen megszerzett leckét kódolja, amelyet az egészségügyi kimenetkutatás évtizedekkel korábban megtanult: egyetlen szám (kódsorok; vérnyomás) félreismeri a többdimenziós valóságot, és optimalizálása játékot szül, nem javulást. A SPACE azt írja elő, hogy legalább három dimenzióból kombinálj mutatókat, a telemetriát önbeszámolóval keverve — szerkezetileg azonos azzal, ahogy az [EQ-5D](../eq-5d/) öt dimenziót profilozza bármely index kiszámítása előtt, és ezért léteznek a [PROM-ok](../betegek-által-jelentett-kimenetelek/) a klinikai mérések mellett. Az elégedettség/jólét sem puha díszítés: a [munkaerő-megtartás](../munkaerő-megtartás/) gazdaságtanába táplál, ahol a lemorzsolódást teljes fizetés hónapjaiban árazzák.

## A matematika

Egyik keretrendszer sem képlet; mindkettő mérési terv:

```
SPACE rule: ≥ 3 dimensions, ≥ 1 perceptual (survey) + ≥ 1 system (telemetry) metric

DevEx dimensions and example pairings:
  feedback loops  → CI duration (telemetry) + "waiting feels slow" (survey)
  cognitive load  → docs findability, onboarding time + perceived effort
  flow state      → meeting/interrupt density + self-reported focus

Derived indices (e.g., DX's DXI) map survey composites to time:
vendor claim ≈ 13 min/dev/week per index point — treat as a vendor
benchmark to validate locally, not a constant of nature.
```

## Kidolgozott példa

Egy platformcsapat DevEx-befektetést (CI-gyorsítás + dokumentáció-átdolgozás) indokol 300 fejlesztőnek:

```
Baseline: CI p75 = 28 min; survey "I lose focus waiting for builds": 62% agree
After:    CI p75 = 9 min;  agreement 24%

Time reclaimed (telemetry): 6 builds/day × 19 min × 0.4 usable = ~45 min/day/dev
Capacity value: 300 × 0.75h × 220d × £60/h ≈ £2.97M/year (non-cash-releasing —
see cash-releasing-vs-non-cash-releasing.md; the 0.4 usability factor is the
fragmentation discount from practitioner-time.md)
Perceptual corroboration is what makes the telemetry claim credible — either
alone is gameable; together they triangulate.
```

## Kapcsolat a szoftverfejlesztéssel

Ez a dokumentum *maga* a szoftveres oldal; az átvitel az egészséggazdaságtan felé irányul. A „minőséggel korrigált mérnöki év" — az idő szabványosított élmény-indexszel súlyozva — a [QALY](../minőséggel-korrigált-életév/) konstrukciója a mérnöki kapacitásra alkalmazva, és örökli a QALY szabályait: súlyok validált mérőeszközből (következetes felmérés, közzétett pontozás), az összehasonlítás *előtt* kikérdezve, soha nem hangolva egy kedvelt eszköz hízelgésére. Az [SF-6D és EQ-5D](../eq-5d/) lecke is érvényes: a különböző mérőeszközök rendszeresen eltérő számokat adnak, ezért soha ne hasonlíts DevEx-indexeket a szállítók mérőeszközei között.

## Buktatók

- **Egyetlen mutatóra összeomlás**: az a műszerfal, amely a SPACE-et egy pontszámra csökkenti, újraalkotja azt a problémát, amelynek megelőzésére a keretrendszer létezik.
- **Aktivitásmutatók mint kimenetek**: a commitok, PR-ok és story pontok Aktivitás — az a dimenzió, amelyről a SPACE kifejezetten figyelmeztet, hogy a leginkább játszható (egészségügyi analóg: eljárások számolása, nem gyógyulásoké).
- **Felmérési fáradtság és Hawthorne-hatások**: a negyedéves könnyű mérőeszközök jobbak a heti kikérdezésnél.
- **Csapatok összehasonlítása**: mint a kórházi ranglisták esetösszetétel-korrekció nélkül — a kontextusbeli különbségek (terület, régi terhek, ügyelet) dominálnak.

## Források

- Forsgren N, et al. "The SPACE of Developer Productivity." ACM Queue 2021. <https://queue.acm.org/detail.cfm?id=3454124>
- Noda A, Forsgren N, Storey MA, Greiler M. "DevEx: What Actually Drives Productivity." ACM Queue 2023. <https://queue.acm.org/detail.cfm?id=3595878>
