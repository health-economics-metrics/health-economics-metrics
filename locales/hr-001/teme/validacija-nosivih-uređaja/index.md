# Validacija nosivih uređaja

Metrike validacije kvantificiraju koliko se mjerenja nosivog uređaja slažu s kliničkim zlatnim standardom (EKG za otkucaje srca, polisomnografija za spavanje): **MAPE**, korelacija podudarnosti, Bland–Altmanovo slaganje — plus operativne metrike koje vrata kvalitete podataka u stvarnom svijetu: **sukladnost nošenja** i **potpunost podataka**.

## Zašto je važno

Validacija je preduvjet svemu nizvodno: uređaj koji ne može dokazati slaganje s referentnim mjerenjem ne može usidriti [digitalne ishode](../digitalni-ishodi-i-biomarkeri/), podržati [RPM naplatu](../ekonomija-daljinskog-praćenja-pacijenata/) ni nositi kliničke tvrdnje. Prihvaćeni pragovi u struci za otkucaje srca: **MAPE ≤5 %** (strogo) ili **≤10 %** (blago) naspram EKG-a. Referentne točke iz literature: Oura Gen 3 MAPE otkucaja u mirovanju 1,67 % (CCC 0,97); Fitbit Charge 6 MAPE ~5,5 % — potrošački uređaji sada obuhvaćaju granicu kliničke razine, upravo zato mjerenje je važno po uređaju i po stanju.

## Matematika

```
MAPE = (1/n) Σ |izmjereno_i − referenca_i| / referenca_i × 100

CCC (korelacija podudarnosti) = slaganje uključujući i korelaciju
      i sustavnu pristranost (Pearsonov r kažnjen pomakom položaja/mjerila)

Bland–Altman: prosječna pristranost ± 1.96 SD granice slaganja — pokazuje
      ovisi li pogreška o veličini vrijednosti

Operativna vrata:
Sukladnost nošenja = vrijeme nošenja / vrijeme protokola × 100
Potpunost podataka = opažene podatkovne točke / očekivane × 100
```

Validacija se mora iskazati **po uvjetu aktivnosti** (mirovanje, kretanje, spavanje) i po populaciji — PPG optičko očitanje degradira se uz artefakte kretanja, loš kontakt i tamnije tonove kože, dokumentiran način neuspjeha relevantan za pravednost.

## Riješeni primjer

Program virtualnog odjela bira nosivi uređaj za praćenje. Kandidat A: MAPE u mirovanju 2,1 %, MAPE u vježbi 11,4 %. Kandidat B: mirovanje 3,8 %, vježba 6,9 %.

```
Slučaj uporabe: otkrivanje pogoršanja pacijenta kod kuće — upozorenja
se pokreću pri trajno povišenim otkucajima, često tijekom aktivnosti.
Naslovna brojka kandidata A (2.1%) pobjeđuje u brošuri; kandidat B pobjeđuje
u slučaju uporabe: pri uvjetu relevantnom za upozorenje (kretanje), A-ova
pogreška od 11.4% pri 100 otkucaja/min = ±11 otk/min — obuhvaća cijeli
pojas praga upozorenja, stvarajući lažne eskalacije (svaka poziv sestre, ~£40) ili propuste.

Ekonomija lažnih upozorenja: 500 pacijenata × 2 dodatna lažna upozorenja/tjedan × £40
= £2.08M/godišnje troška pogreške zbog odabira pogrešnog broja validacije.
```

## Veza sa softverskim inženjerstvom

Inženjeri troše podatke validacije pri odabiru senzora i *proizvode* ih pri gradnji funkcija mjerenja — obje uloge trebaju istu disciplinu: testirajte pri uvjetu uvođenja, a ne uvjetu demoa (softverski analogon: benchmarking na vašem produkcijskom opterećenju, a ne dobavljačevu). Vrijeme nošenja i potpunost su ishodi produktnog inženjeringa — udobnost, trajanje baterije, dizajn rituala punjenja i pouzdanost sinkronizacije određuju hoće li se zadovoljiti vrata naplate RPM-a od 16 dana u 30 ([ekonomija daljinskog praćenja pacijenata](../ekonomija-daljinskog-praćenja-pacijenata/)) i jesu li skupovi podataka ispitivanja analizabilni. Nedostajanje tretirajte kao dizajniran signal: razlikujte „nije nošen”, „nošen ali bez signala” i „sinkronizacija neuspjela” u shemi od prvog dana — sažeti u null, truju svaku nizvodnu analizu.

## Zamke

- **Agregirani MAPE koji skriva neuspjeh specifičan za uvjet** — zamka riješenog primjera.
- **Populacija validacije ≠ populacija uvođenja**: dob, ton kože, tremor, pretilost sve pomiču pogrešku optičkog senzora; provjerite demografiju studije.
- **Korelacija iskazana gdje je potrebno slaganje**: visok Pearsonov r uz sustavnu pristranost i dalje pogrešno razvrstava naspram apsolutnih pragova — inzistirajte na CCC/Bland–Altmanu.
- **Potpunost napuhana imputacijom**: popunjene praznine iskazane kao opaženi podaci.

## Izvori

- Consumer wearable HR validation (Oura Gen 3/4). <https://pmc.ncbi.nlm.nih.gov/articles/PMC12367097/>
- Wearable validity thresholds (MAPE standards). <https://formative.jmir.org/2025/1/e70835>
- Multi-device validation studies. <https://pmc.ncbi.nlm.nih.gov/articles/PMC6431828/>
