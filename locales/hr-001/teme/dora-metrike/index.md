# DORA metrike

DORA (DevOps Research and Assessment) metrike su četiri mjere učinka softverske isporuke — učestalost puštanja u rad, vrijeme isporuke promjena, stopa neuspjeha promjena i vrijeme oporavka od neuspjelog puštanja — plus pouzdanost kao peta. To su najvalidiranija mjerila isporuke u struci, a svaka ima izravno zdravstveno-ekonomsko čitanje.

## Zašto je važno

DORA-ino desetljeće istraživanja povezuje te metrike s učinkom organizacije. Klasteri iz izvješća za 2024.: **elitni** timovi puštaju u rad na zahtjev (više puta dnevno), trebaju manje od jednog dana od commita do produkcije, ne uspijevaju ~5 % promjena i oporavljaju se za manje od sat vremena; **niski** izvođači puštaju mjesečno ili rjeđe, trebaju mjesece, ne uspijevaju ~40 % promjena i oporavljaju se tjednima. Za zdravstveni sustav to nisu IT brojke radi hvalisanja: određuju koliko brzo klinička vrijednost stiže do pacijenata i koliko rizika nosi svaka promjena.

## Matematika

```
Učestalost puštanja     = produkcijska puštanja / vrijeme
Vrijeme isporuke promjena = t(puštanje) − t(commit), medijan
Stopa neuspjeha promjena = neuspjele promjene / ukupne promjene × 100
Vrijeme oporavka (MTTR) = t(obnovljeno) − t(kvar), medijan
Pouzdanost             = ostvarenje SLO-a (dostupnost, latencija, ispravnost)
```

Zdravstveno-ekonomski prijevodi:

```
Vrijeme isporuke → cost-of-delay.md: tjedni u cjevovodu × CoD (£ ili QALY/tjedan)
Stopa neuspjeha  → stopa štetnih događaja softverske promjene: CFR × trošak po incidentu
Vrijeme oporavka → šteta zastoja: MTTR × (izgubljena klinička aktivnost + izloženost sigurnosti)/sat
Pouzdanost       → popust na korist: usluga s 99 % dostupnosti isporučuje ≈ 0.99
                   svoje modelirane koristi — softverski analogon pridržavanja
```

## Riješeni primjer

Tim softvera za protok pacijenata u trustu, prije/poslije ulaganja u inženjering isporuke:

```
                    Prije       Poslije
Puštanja            mjesečno    tjedno
Vrijeme isporuke    6 tjedana   4 dana
CFR                 25%         8%
MTTR                2 dana      2 sata
```

Tim isporučuje ~30 poboljšanja godišnje s prosječnom vrijednošću po poboljšanju od 4.000 £/tjedan ([CoD](../trošak-odgode/)). Smanjenje vremena isporuke od ~5,4 tjedna pomiče tok koristi svakog poboljšanja unaprijed: 30 × 5,4 × 4.000 ≈ **648.000 £/godišnje** ranije isporučene vrijednosti. Poboljšanje CFR-a: 30 × (0,25 − 0,08) = ~5 manje neuspjelih promjena godišnje × 15.000 £ prosječnog troška incidenta (zastoj kliničkog sustava, sanacija) = **76.500 £/godišnje**. Ulaganje u isporuku vrednuje se u istoj valuti kao i svaka klinička intervencija.

## Veza sa softverskim inženjerstvom

Ovo *jest* softverska strana — veza koju vrijedi navesti je obrnuto preslikavanje: DORA metrike su operativne metrike bolnice u drugoj odjeći. Vrijeme isporuke ↔ [od upute do liječenja](../od-upute-do-liječenja/); stopa neuspjeha promjena ↔ [stopa ponovnih prijma](../stopa-ponovnih-prijma/) (rad koji se vratio); MTTR ↔ hitni odgovor; učestalost puštanja ↔ propusnost ambulante. Metode poboljšanja prenose se u oba smjera jer su oba sustava redova pod sigurnosnim ograničenjima. Primijetite i DORA-in nalaz o AI-ju za 2025.: usvajanje AI-ja sada korelira s većom propusnošću, ali *lošijom* stabilnošću — intervencija s učinkovitošću i nuspojavama, koja traži upravo analizu neto koristi koju ovaj repozitorij uči (vidi [produktivnost programera uz AI](../produktivnost-programera-uz-ai/)).

## Zamke

- **Namještanje metrike**: napuhani broj puštanja praznim izdanjima; deflacionirani CFR nebrojenjem hitnih ispravaka kao neuspjeha. Precizno definirajte događaje, kao što HTA definira ishode.
- **Ljestvice među timovima**: DORA klasteri uspoređuju prakse, a ne timove s različitim profilima rizika; tim kliničkih sustava na „visokom” može biti optimalan gdje bi „elitni” bio nesmotren.
- **Optimizacija jedne metrike**: brzina bez CFR-a/pouzdanosti je kompromis propusnost-nestabilnost — uvijek iskažite sve četiri zajedno (one su [tablica troškova i posljedica](../analiza-troškova-i-posljedica/), a ne ocjena).

## Izvori

- DORA research and reports. <https://dora.dev/>
- 2024 DORA benchmarks summary. <https://octopus.com/devops/metrics/dora-metrics/>
- DORA 2025 State of AI-assisted Software Development. <https://dora.dev/dora-report-2025/>
