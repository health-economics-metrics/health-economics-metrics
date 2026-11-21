# SPACE i DevEx

SPACE (Satisfaction & well-being, Performance, Activity, Communication & collaboration, Efficiency & flow) i DevEx (povratne petlje, kognitivno opterećenje, stanje toka) okviri su za mjerenje produktivnosti programera **višedimenzionalno** — odgovor struke na otkriće da nijedna pojedinačna metrika ne preživljava susret sa stvarnošću.

## Zašto je važno

Oba okvira kodiraju istu teško stečenu lekciju koju su istraživanja zdravstvenih ishoda naučila desetljećima ranije: jedan broj (retci koda; krvni tlak) krivo prikazuje višedimenzionalnu stvarnost, a njegova optimizacija proizvodi namještanje, a ne poboljšanje. SPACE propisuje kombiniranje metrika iz barem tri dimenzije, miješajući telemetriju sa samoprocjenom — strukturno identično načinu na koji [EQ-5D](../eq-5d/) profilira pet dimenzija prije izračuna ikakvog indeksa, i zašto [PROM-ovi](../ishodi-koje-prijavljuju-pacijenti/) postoje uz kliničke mjere. Zadovoljstvo/dobrobit nije ni mekani ukras: ulazi u ekonomiju [zadržavanja radne snage](../zadržavanje-radne-snage/), gdje se odljev cijeni u mjesecima pune plaće.

## Matematika

Nijedan okvir nije formula; oba su dizajni mjerenja:

```
SPACE pravilo: ≥ 3 dimenzije, ≥ 1 perceptivna (anketa) + ≥ 1 sustavna (telemetrija) metrika

DevEx dimenzije i primjeri uparivanja:
  povratne petlje  → trajanje CI-ja (telemetrija) + „čekanje je sporo” (anketa)
  kognitivno opterećenje → pronalažljivost dokumentacije, vrijeme uvođenja + percipirani napor
  stanje toka      → gustoća sastanaka/prekida + samoprijavljeni fokus

Izvedeni indeksi (npr. DX-ov DXI) preslikavaju kompozite ankete u vrijeme:
tvrdnja dobavljača ≈ 13 min/programeru/tjedno po bodu indeksa — tretirajte kao
mjerilo dobavljača koje treba lokalno validirati, a ne prirodnu konstantu.
```

## Riješeni primjer

Platformski tim opravdava ulaganje u DevEx (ubrzanje CI-ja + obnova dokumentacije) za 300 programera:

```
Osnovno: CI p75 = 28 min; anketa „gubim fokus čekajući izgradnje”: 62% slaže se
Poslije: CI p75 = 9 min;  slaganje 24%

Povraćeno vrijeme (telemetrija): 6 izgradnji/dan × 19 min × 0.4 iskoristivo = ~45 min/dan/programeru
Vrijednost kapaciteta: 300 × 0.75h × 220d × £60/h ≈ £2.97M/godišnje (ne oslobađa gotovinu —
vidi cash-releasing-vs-non-cash-releasing.md; faktor iskoristivosti 0.4 je popust
za fragmentaciju iz practitioner-time.md)
Perceptivna potvrda je ono što telemetrijsku tvrdnju čini vjerodostojnom — svako
samo za sebe može se namjestiti; zajedno se triangulira.
```

## Veza sa softverskim inženjerstvom

Ovaj dokument *jest* softverska strana; prijenos ide prema zdravstvenoj ekonomiji. „Godina inženjera prilagođena kvaliteti” — vrijeme ponderirano standardiziranim indeksom iskustva — je konstrukcija [QALY-ja](../godina-života-prilagođena-kvaliteti/) primijenjena na inženjerski kapacitet i nasljeđuje QALY-jeva pravila: težine iz validiranog instrumenta (dosljedna anketa, objavljeno bodovanje), prikupljene *prije* usporedbe, nikad podešene da laskaju omiljenom alatu. Primjenjuje se i lekcija [SF-6D naspram EQ-5D](../eq-5d/): različiti instrumenti daju sustavno različite brojeve, pa nikad ne uspoređujte DevEx indekse preko instrumenata različitih dobavljača.

## Zamke

- **Kolaps u jednu metriku**: nadzorne ploče koje svode SPACE na jedan rezultat ponovno stvaraju problem koji okvir postoji da spriječi.
- **Metrike aktivnosti kao ishodi**: commitovi, PR-ovi i story pointi su Activity — dimenzija za koju SPACE izričito upozorava da je najpodložnija namještanju (zdravstveni analogon: brojanje zahvata, a ne oporavaka).
- **Zamor od anketa i Hawthorneovi učinci**: tromjesečni lagani instrumenti nadmašuju tjedno ispitivanje.
- **Uspoređivanje timova**: poput bolničkih ljestvica bez prilagodbe sastava slučajeva — razlike u kontekstu (domena, naslijeđeno opterećenje, dežurstva) dominiraju.

## Izvori

- Forsgren N, et al. "The SPACE of Developer Productivity." ACM Queue 2021. <https://queue.acm.org/detail.cfm?id=3454124>
- Noda A, Forsgren N, Storey MA, Greiler M. "DevEx: What Actually Drives Productivity." ACM Queue 2023. <https://queue.acm.org/detail.cfm?id=3595878>
