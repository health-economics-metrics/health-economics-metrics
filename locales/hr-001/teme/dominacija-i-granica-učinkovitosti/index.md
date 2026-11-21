# Dominacija i granica učinkovitosti

Opcija je **dominirana** ako druga opcija košta manje *i* daje više. **Granica učinkovitosti** je ono što ostane nakon uklanjanja dominiranih opcija: skup izbora kod kojih za više treba platiti više.

## Zašto je važno

Prije svake rasprave o pragovima ili proračunima, procjena zdravstvenih tehnologija prvo uklanja opcije koje nitko nikada ne bi trebao odabrati. Ucrtavanje svake opcije na ravninu trošak-naspram-učinka i crtanje granice vježba je od pet minuta koja rutinski ukloni pola užeg popisa. Inkrementalne usporedbe ([ICER-ovi](../inkrementalni-omjer-isplativosti/)) zatim se računaju samo *duž granice*, svaka opcija u odnosu na sljedeću najjeftiniju nedominiranu — nikad u odnosu na „ne raditi ništa” kad postoje bolje međuopcije.

## Matematika

```
Stroga dominacija:   A dominira B ako je Cost_A ≤ Cost_B i Effect_A ≥ Effect_B
                     (uz barem jednu strogu nejednakost)

Proširena dominacija: B se isključuje ako mješavina A i C postiže više učinka
                     po funti — otkriva se kad ICER-ovi opadaju kako se
                     penjete uz granicu. Ispravni ICER-ovi granice moraju rasti.
```

Postupak: poredajte opcije po učinku; uklonite strogo dominirane; izračunajte parne ICER-ove između susjeda; uklonite svaku opciju čiji ICER premašuje ICER sljedeće učinkovitije opcije (proširena dominacija); ponavljajte dok ICER-ovi ne postanu monotono rastući.

## Riješeni primjer

Četiri opcije za smanjenje propuštenih termina (učinak = vraćeni termini godišnje):

```
Opcija          Trošak/god  Vraćeno
Ne raditi ništa £0          0
SMS podsjetnici £20,000     2,000
Telefonski pozivi £120,000  2,200
SMS + AI trijaža £90,000    3,500
```

Telefonski pozivi su **strogo dominirani** opcijom SMS + AI trijaža (koštaju više, vraćaju manje). Granica: ništa → SMS → SMS + AI.

```
ICER(SMS vs ništa)     = 20,000 / 2,000  = £10 po vraćenom terminu
ICER(SMS+AI vs SMS)    = (90,000 − 20,000) / (3,500 − 2,000) = £46.67 po terminu
```

Rastući ICER-ovi → ispravna granica. Uz ~160 £ ušteđenih po vraćenom bolničkom terminu (vidi [stopu nedolazaka](../stopa-nedolazaka/)), oba koraka granice vrijedi poduzeti; prijedlog telefonskog centra nikad ne bi smio doći do odbora.

## Veza sa softverskim inženjerstvom

Izradite isti grafikon za svaku odluku o alatima: trošak godišnje na jednoj osi, izmjereni ishod (ušteđeni sati, izbjegnuti incidenti, omogućena puštanja u rad) na drugoj. Točke gore-lijevo od granice eliminiraju se prije nego itko raspravlja o proračunu. To preoblikuje odabir dobavljača iz rasprava o popisima značajki u „dominirani ste; sastanak je gotov.” Također razotkriva čest poslovni obrazac kupnje najskuplje opcije za marginalni dobitak — legitiman samo ako je inkrementalna cijena po inkrementalnoj jedinici ona koju bi organizacija svjesno platila.

## Zamke

- **Uspoređivanje svega s osnovnom linijom** umjesto sa sljedećom opcijom na granici — to laska skupim opcijama skrivajući jeftinije gotovo-ekvivalente.
- **Jednodimenzionalni ocjenski rezultati učinka** koji skrivaju što je važno; ako vrijede dva ishoda, ili ih obranjivo kombinirajte (vidi [analizu troškova i korisnosti](../analiza-troška-i-korisnosti/)) ili prikažite dvije granice.
- **Zaboravljanje neizvjesnosti**: opcije blizu granice mogu zamijeniti mjesta pod [analizom osjetljivosti](../analiza-osjetljivosti/).

## Izvori

- York Health Economics Consortium glossary: dominance. <https://yhec.co.uk/glossary/dominance/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
