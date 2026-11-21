# Od upute do liječenja (RTT)

Od upute do liječenja je proteklo vrijeme od upute liječnika opće prakse do početka liječenja pod vodstvom konzultanta. Standard postavlja NHS Constitution: **92 % pacijenata treba započeti liječenje unutar 18 tjedana**. RTT je najpolitički vidljiva operativna metrika u engleskom NHS-u.

## Zašto je važno

Trustovi koji promaše RTT ciljeve suočavaju se s regulatornim nadzorom, intervencijom i štetom ugledu; nacionalna lista čekanja broj je s naslovnice. Svaki tjedan čekanja je izgubljeno zdravlje (čekanje u lošijem zdravstvenom stanju — vidi QALY matematiku u nastavku) i često dobiveni trošak (stanja se pogoršavaju; vidi [raniju intervenciju](../ranija-intervencija/)). Softver koji štedi vrijeme bilo gdje na putu od upute do liječenja — trijaža, brzina dijagnostike, kapacitet ambulanti, zakazivanje — izravno ublažava operativne i financijske posljedice propuštanja standarda, zbog čega je utjecaj na RTT prvoklasna stavka koristi u NHS-ovim digitalnim poslovnim slučajevima.

## Matematika

```
RTT učinak = pacijenti liječeni unutar 18 tjedana / ukupno liječeni × 100
Zdravstveni trošak čekanja po pacijentu = trajanje čekanja × (korisnost_liječen − korisnost_čeka)

Pogled na put: RTT = Σ trajanja faza (trijaža upute → prvi termin →
dijagnostika → odluka → liječenje) — poboljšajte najdulji red, a ne
najzaposleniju fazu (vidi flow-metrics.md).
```

## Riješeni primjer

Specijalnost liječi 5.000 pacijenata na putu godišnje; prosječno čekanje 24 tjedna; korisnost čekanja 0,68 naspram liječenog 0,80.

Digitalna trijaža plus protokoli izravno-na-pretragu uklanjaju 5 tjedana čistog čekanja u redu:

```
QALY dobitak = 5,000 × (5/52) × (0.80 − 0.68) = 57.7 QALY-ja/godišnje
Unovčeno po £20,000–£30,000/QALY (vidi willingness-to-pay-thresholds.md):
  ≈ £1.15M–£1.73M/godišnje zdravstvene vrijednosti
```

— plus trust prelazi iz kršenja u ispunjavanje standarda od 18 tjedana, što ima vrijednost za upravljanje koju nijedna tablica ne obuhvaća u potpunosti.

## Veza sa softverskim inženjerstvom

RTT je **metrika vremena isporuke kroz višefazni red** — bolnička inačica vremena isporuke od commita do produkcije (vidi [DORA metrike](../dora-metrike/)). Metoda poboljšanja je identična: instrumentirajte svaku fazu, pronađite gdje se kalendarsko vrijeme nakuplja (gotovo uvijek su to primopredaje i redovi, a ne klinički rad) i uklonite stanja čekanja. Tipične softverske pobjede: e-trijaža koja usmjerava upute u satima umjesto tjednim serijama, slanje rezultata dijagnostike umjesto kontrolnih termina i automatizirani kriteriji izravno-na-pretragu. Vrednujte poboljšanje [troškom odgode](../trošak-odgode/) izraženim u QALY-ju/tjedno.

## Zamke

- **Poboljšavanje faze koja nije ograničenje** — skraćivanje čekanja na prvi termin dok redovi dijagnostike rastu samo premješta nakupljanje.
- **Namještanje**: resetiranje putova i pauze sata mogu poboljšati iskazani RTT bez da itko bude ranije liječen; revidirajte temeljnu distribuciju.
- **Tvrdnja o poboljšanju cijelog puta** za jedan alat kad je više promjena stiglo zajedno — pripisivanje traži komparator.

## Izvori

- NHS England, RTT waiting times statistics. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
