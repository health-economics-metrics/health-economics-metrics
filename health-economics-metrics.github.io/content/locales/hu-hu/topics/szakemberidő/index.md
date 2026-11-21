# Szakemberidő

A szakemberidő a legszűkösebb erőforrás a legtöbb egészségügyi rendszerben. Egy klinikus napi percekben mért megtakarításának értékeléséhez az egyszerű bérszámításról az **alternatív költségre és a rendszerkapacitásra** kell áttérni: egy nemzeti egészségügyi szolgálatban a szakember ideje merev működési szűk keresztmetszet, nem rugalmasan változó költségsor.

## Miért fontos

Nem lehet gyorsan több háziorvost, szakorvost vagy szakápolót létrehozni — a képzési csővezetékek 5–15 évesek, és a betöltetlen állások krónikusak. Így egy megtakarított szakemberóra nem „elkerült bér" (a szakembert továbbra is fizetik); *felszabadított szűk keresztmetszeti kapacitás*, és a szűk keresztmetszeti kapacitás annyit ér, amennyit a szűk keresztmetszet előállít. Ezért a „konzultációnként 10 percet takarít meg" állítások egyszerre a digitális egészségügy leggyakoribb és leginkább rosszul árazott sorai.

## A matematika

Három értékelési szint, növekvő őszinteséggel:

```
1. Wage basis:        hours × loaded salary rate (PSSRU unit costs)
                      — what the time costs, not what it produces
2. Output basis:      hours → appointments/procedures enabled × scheme value
                      (see national-tariff-and-unit-costs.md)
3. Bottleneck basis:  if this role gates a whole pathway, hours × value of
                      pathway throughput released (theory of constraints)
```

Töredezettségi diszkont: a használható kvantum alatti morzsákban megtakarított idő (pl. 3 perc szétszórva egy rendelőben) rosszul csoportosítható át; alkalmazz kimondott kihasználtsági tényezőt.

## Kidolgozott példa

Az ambiens jegyzetelés konzultációnként 2 percet takarít meg egy háziorvosnak, naponta 30 konzultációval: 60 perc/nap, azaz **220 óra/év háziorvosonként** 220 munkanapon.

```
Wage basis:   220 × £80 (loaded GP hour, PSSRU-region) ≈ £17,600/GP/year
Output basis: 60 min/day = 5 extra 12-min consultations/day
              = 1,100 extra appointments/GP/year × £42 ≈ £46,200/GP/year
              — or the same appointments absorbed as reduced overtime and
              safer, unhurried consultations (qualitative line)
```

Egy 50 háziorvosos szövetségben a kibocsátás-alapú kapacitás ~2,3 M£/évet ér — feltéve, hogy a percek valódiak (mértek, nem szállítói állítások), konszolidáltak (teljes konzultációk, nem töredékek), és átcsoportosítottak (lásd [készpénzfelszabadító és nem készpénzfelszabadító](../készpénzfelszabadító-és-nem-készpénzfelszabadító-megtakarítások/)).

## Kapcsolat a szoftverfejlesztéssel

A senior mérnök ideje azonosan viselkedik: ez a szűk keresztmetszet, amelyen a tervek, felülvizsgálatok és incidensek átfolynak, ezért aszerint értékeld, mit zár el a szűk keresztmetszet, nem a fizetés szerint. Ugyanaz a háromszintű értékelés érvényes bármely „az MI minden fejlesztőnek X percet takarít meg" állításra — a bérszámítás hízeleg az apró számoknak; az őszinte kérdések: a percek használható blokkokká konszolidálódnak-e, és mit termel ténylegesen a felszabadult kapacitás. Lásd [lefelé irányuló erőforrás-optimalizálás](../lefelé-irányuló-erőforrás-optimalizálás/) a szorzóról, amikor a megtakarított óra azé, akire mindenki más vár.

## Buktatók

- **Percek × fizetés = megtakarítás** — a kanonikus felfújás; ez kapacitás, és csak a kimondott kihasználtságnál.
- **A kvantumprobléma figyelmen kívül hagyása**: 12 × 5 perc megtakarítás ≠ egy szabad óra.
- **Minden szerep egyformán értékelése**: az útvonal szűk keresztmetszetének egy órája sokszor többet ér egy nem kapuzó szerep egy óránál.

## Források

- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
