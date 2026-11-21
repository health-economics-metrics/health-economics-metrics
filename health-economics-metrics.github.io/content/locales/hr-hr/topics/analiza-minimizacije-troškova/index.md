# Analiza minimizacije troškova (CMA)

CMA uspoređuje samo troškove i bira najjeftiniju opciju — legitimno *samo* kad je dokazano da su ishodi alternativa ekvivalentni.

## Zašto je važno

CMA je najjednostavnija analiza i najzloupotrebljavanija. Tvrdnja o ekvivalentnosti radi sav posao: ako se ishodi doista ne razlikuju (biosličan lijek naspram originatora; dva dobavljača iste usluge koji zadovoljavaju istu specifikaciju), trošak je jedino pitanje i CMA je ispravna. Rigoroznost leži u *dokazivanju* ekvivalentnosti prvo — obično studijom neinferiornosti s unaprijed određenom granicom — što je upravo korak koji kupci obično preskaču.

## Matematika

```
Uz dokaz da je Effect_A ≈ Effect_B (unutar unaprijed određene granice δ):
Izaberi min(Cost_A, Cost_B)

Troškovi mjereni iz iste perspektive, kroz isti horizont,
uključujući troškove prelaska/tranzicije.
```

Ako se ekvivalentnost ne može dokazati, CMA je nevaljana — koristite umjesto toga [CEA](../analiza-isplativosti/)/[CUA](../analiza-troška-i-korisnosti/).

## Riješeni primjer

Trust bira između dvije platforme za videokonzultacije. Tromjesečni paralelni pilot pokazuje stope dovršetka 94,1 % naspram 93,8 %, zadovoljstvo pacijenata 4,4 naspram 4,4 — razlike unutar unaprijed dogovorenog δ od 2 postotna boda. Ishodi: ekvivalentni. Troškovi kroz 3 godine:

```
                       Platforma A     Platforma B
Licence                £360,000        £210,000
Integracija            £80,000         £150,000
Obuka/podrška          £60,000         £90,000
Ukupno                 £500,000        £450,000
```

Platforma B pobjeđuje za 50.000 £ — *uključujući* njezin viši trošak integracije. Bez pilota, tvrdnja o ekvivalentnosti počivala bi na brošurama dobavljača, a razlika od 1 boda u stopi dovršetka (≈ tisuće neuspjelih konzultacija godišnje) zasjenila bi 50.000 £.

## Veza sa softverskim inženjerstvom

CMA je formalni oblik nabave robe široke potrošnje: dva CI pružatelja koji zadovoljavaju identične SLO-ove, dva objektna skladišta s istom specifikacijom trajnosti. Lekcija zdravstvene ekonomije je *redoslijed operacija*: prvo dokažite ekvivalentnost (benchmark naspram vašeg opterećenja, pilot naspram vaših SLO-ova, s unaprijed dogovorenom granicom), zatim usporedite ukupne troškove uključujući migraciju. „U osnovi su isti, B je jeftiniji” bez prvog koraka način je na koji organizacije kupe alat koji je 10 % jeftiniji i 40 % lošiji. Posljedica: kad dobavljač argumentira cijenom, natjerajte ga da propiše ekvivalentnost — obvezuje i u drugom smjeru.

## Zamke

- **Pretpostavljena ekvivalentnost** — definirajući grijeh; izostanak dokaza o razlici nije dokaz ekvivalentnosti (premale pilot-studije „pokazuju” ekvivalentnost besplatno).
- **Izostavljanje troškova prelaska** — migracija, prekvalifikacija i paralelni rad pripadaju na stranu troškova.
- **Ekvivalentnost na pogrešnim ishodima**: ekvivalentno na izmjerenoj metrici, različito na jednoj koja je važna (pristupačnost, latencija repa, izlaz podataka).

## Izvori

- York Health Economics Consortium glossary: cost-minimization analysis. <https://yhec.co.uk/glossary/cost-minimisation-analysis/>
- Briggs AH, O'Brien BJ. "The death of cost-minimization analysis?" Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11288052/>
