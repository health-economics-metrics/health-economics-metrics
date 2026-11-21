# Godina života prilagođena kvaliteti (QALY)

QALY je jedna godina života proživljena u savršenom zdravlju. Kombinira *koliko dugo* ljudi žive s tim *koliko dobro* žive, tako da godina u lošem zdravlju vrijedi manje od jednog QALY-ja — čime se posve različite zdravstvene intervencije čine usporedivima na jednoj ljestvici.

## Zašto je važno

QALY je zajednička valuta procjene zdravstvenih tehnologija. NICE (Engleska) vrednuje zdravstvene dobitke na **20.000–30.000 £ po QALY-ju**: intervencija koja kupuje QALY-je jeftinije od tog praga obično se preporučuje; ona koja ih kupuje skuplje obično se odbija. Taj jedan broj način je na koji nacionalna zdravstvena služba uspoređuje lijek za rak, zamjenu kuka i aplikaciju za trijažu na istoj osi. Ako vaš softver može vjerodostojno tvrditi QALY-je — sprječavanjem pogoršanja, ubrzavanjem liječenja ili poboljšanjem sigurnosti — njegovu zdravstvenu vrijednost možete cijeniti u istoj valuti kao i sâmu medicinu.

## Matematika

```
QALY = Σ_i (trajanje_i × korisnost_i)

trajanje_i = godine provedene u zdravstvenom stanju i
korisnost_i = težina kvalitete stanja i, usidrena na 1 = savršeno zdravlje, 0 = smrt
              (dopuštene su negativne vrijednosti za stanja gora od smrti)
```

Težine korisnosti dolaze iz validiranih instrumenata, najčešće [EQ-5D](../eq-5d/). QALY *dobitak* intervencije je razlika između tokova QALY-ja s njom i bez nje, [diskontirana](../diskontiranje-i-vremenska-preferencija/) po 3,5 %/godišnje u referentnom slučaju NICE-a.

## Riješeni primjer

Pacijent čeka kardiološko liječenje u stanju s korisnošću 0,6. Liječenje ga vraća na korisnost 0,85.

- **Liječen sada**: 1 godina uz 0,85 = 0,85 QALY-ja ove godine.
- **Liječen nakon odgode od 6 mjeseci**: 0,5 × 0,6 + 0,5 × 0,85 = 0,725 QALY-ja.
- **Gubitak QALY-ja po pacijentu zbog odgode**: 0,85 − 0,725 = **0,125 QALY-ja**.

Unovčeno po pragu NICE-a: 0,125 × 20.000–30.000 £ = **2.500–3.750 £ izgubljene zdravstvene vrijednosti po pacijentu po 6-mjesečnoj odgodi**. Ako softver koji ubrzava put pacijenta ukloni tu odgodu za 400 pacijenata godišnje, zdravstvena vrijednost je 50 QALY-ja ≈ **1,0–1,5 milijuna £ godišnje** — prije ikakvog brojanja operativnih ušteda.

## Veza sa softverskim inženjerstvom

- **Brži putovi = raniji QALY-ji.** Sve što skraćuje [put od upute do liječenja](../od-upute-do-liječenja/) pretvara nekorisnost čekanja u zdravstveni dobitak, vrednovan kako je gore opisano.
- **Sigurnost = sačuvani QALY-ji.** Spriječene pogreške u lijekovima i propuštene dijagnoze su izbjegnuti gubici QALY-ja.
- **QALY je i predložak za dizajn metrika**: kompozit količine × kvalitete, s težinama kvalitete dobivenim iz standardiziranog instrumenta. „Godina inženjera prilagođena kvaliteti” (vrijeme × težina iz DevEx ankete) je ista konstrukcija — vidi [SPACE i DevEx](../space-i-devex/).
- Za pretvaranje QALY-ja u novac u poslovnom slučaju koristite [neto novčanu korist](../neto-novčana-korist/); za pretvaranje u odluku koristite [pragove spremnosti na plaćanje](../pragovi-spremnosti-na-plaćanje/).

## Zamke

- **Izmišljanje težina korisnosti.** Težine moraju dolaziti iz validiranih instrumenata (EQ-5D) i objavljenih skupova vrijednosti, a ne iz intuicije.
- **Tvrdnja o QALY-jima bez uzročnog puta.** „Naša aplikacija poboljšava dobrobit” nije tvrdnja o QALY-ju; „uklanja X tjedana čekanja u stanju korisnosti 0,6” jest.
- **Dvostruko brojanje**: tvrdnja i o dobitku QALY-ja i o uštedama troškova istog izbjegnutog pogoršanja traži pažnju da su doista odvojeni.
- **Slijepe pjege pravednosti**: QALY-ji vrednuju produljenje života prema početnoj korisnosti, što može dovesti u nepovoljan položaj osobe s invaliditetom — razlog zašto ICER (SAD) iskazuje i evLYG (vidi [dobivene godine života](../dobivene-godine-života/)).

## Izvori

- NICE glossary: QALY. <https://www.nice.org.uk/glossary?letter=q>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
