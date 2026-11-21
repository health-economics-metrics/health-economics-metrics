# Izbjegnuti nizvodni troškovi

Izbjegnuti nizvodni troškovi (odbici troškova) su budući troškovi liječenja spriječeni ranijim ili boljim djelovanjem, netirani naspram troška same intervencije. Odbici su mehanizam kojim intervencija može postati *dominantna* — jeftinija **i** bolja — a ujedno su i najdvostruko brojana, najpreuveličavanija stavka u zdravstvenoj ekonomiji.

## Zašto je važno

Gotovo svaka vrijednosna ponuda digitalnog zdravlja sadrži tvrdnju o odbitku: „naša aplikacija sprječava prijmove”, „naša upozorenja sprječavaju pogoršanje”, „naša platforma izbjegava duplicirane pretrage”. Kad su odbici stvarni, mijenjaju ekonomiju (vidi riješeni primjer [ICER-a](../inkrementalni-omjer-isplativosti/), gdje odbitak od 600 tis. £ čini slučaj). Platitelji to znaju — pa tvrdnje o odbicima izazivaju najstrožu provjeru u svakoj procjeni. Pravila vjerodostojnosti u nastavku razlikuju financijski prihvatljiv model od marketinga.

## Matematika

```
Neto trošak = trošak intervencije − Σ odbici

Valjani odbitak mora biti:
  Pripisiv     — uzročno povezan s intervencijom (dokazi komparatora)
  Granični     — novac se doista prestaje trošiti, po graničnom a ne
                 prosječnom trošku (vidi marginal-vs-average-cost.md)
  Ponderiran   — vjerojatnošću da bi se nizvodni događaj dogodio
  vjerojatnošću
  Diskontiran  — budući izbjegnuti troškovi po sadašnjoj vrijednosti
  Jedinstven   — brojan jednom, u jednoj stavci koristi
```

## Riješeni primjer

„Ova tvrdnja o riziku migracije, napravljena kako treba”: aplikacija za praćenje rana za 5.000 postoperativnih pacijenata tvrdi da izbjegava ponovne prijmove zbog infekcije.

```
Osnovni ponovni prijam zbog infekcije: 4.0% ; s aplikacijom (RCT): 3.1%
Pripisivi izbjegnuti događaji = 5,000 × 0.009 = 45/godišnje
Trošak po epizodi ponovnog prijma (granični, ovaj trust): £3,200
Odbitak = 45 × 3,200 = £144,000/godišnje
Trošak aplikacije = 5,000 × £20 = £100,000/godišnje
Neto trošak = −£44,000 → doista štedljivo, uz:
  pripisivanje iz RCT-a ✓  granično troškovanje ✓  vjerojatnost iz podataka ispitivanja ✓
```

Ista tvrdnja izgrađena na „ponovni prijmovi koštaju prosječno 5.800 £, spriječit ćemo ih puno” pada na sva četiri testa i zaslužuje odbijanje koje dobiva.

## Veza sa softverskim inženjerstvom

„Ova migracija izbjegava buduće prepisivanje” je tvrdnja o odbitku, a pravila zdravstvene ekonomije čine je poštenom:

- **Kontrafaktualni trošak**: što bi prepisivanje stvarno koštalo, dokazano kako?
- **Vjerojatnost**: koliko je ta budućnost vjerojatna? (Ne 100 % — proizvodi se ukidaju, prioriteti se mijenjaju.)
- **Diskontiranje**: prepisivanje izbjegnuto u 4. godini uz diskont 3,5–10 % vrijedi znatno manje od nominalne vrijednosti.
- **Jedinstvenost**: ne tvrdite isto izbjegnuto prepisivanje i u stavci tehničkog duga i u stavci zadržavanja.

`Vrijednost odbitka = P(budući događaj) × kontrafaktualni trošak × faktor diskonta` — napišite taj redak u prijedlog i gledajte kako procjena postaje predmet rasprave, u čemu je i poanta.

## Zamke

- **Dvostruko brojanje** — isti izbjegnuti prijam tvrđen kao odbitak, bolnički dani i QALY-ji s priloženim troškom.
- **Odbici po prosječnom trošku** za događaje čiji fiksni troškovi teku bez obzira.
- **Tihi 100 % vjerojatnosti** na nizvodne događaje koji su bili samo mogući.
- **Odbici drugim proračunima** predstavljeni kao uštede platitelju kojeg se traži da plati — vidi [perspektivu analize](../perspektiva-analize/).

## Izvori

- York Health Economics Consortium glossary: cost offset. <https://yhec.co.uk/glossary/cost-offset/>
- Cohen JT, Neumann PJ, Weinstein MC. NEJM 2008 (offsets rarely exceed costs). <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
