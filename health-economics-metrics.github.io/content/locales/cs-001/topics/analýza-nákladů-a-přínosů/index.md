# Analýza nákladů a přínosů (CBA)

CBA oceňuje v penězích jak náklady, *tak* výsledky. Je to jediný typ analýzy, který dokáže odpovědět „vyplatí se to vůbec dělat?“ – nikoli jen „která možnost je nejlepší?“ – protože monetizované přínosy lze přímo srovnat s náklady.

## Proč na tom záleží

CBA je standardem britského **Green Book** HM Treasury pro posuzování všech veřejných výdajů, včetně zdravotnictví, pokud lze výsledky monetizovat. Kde [CEA](../analýza-nákladové-efektivity/)/[CUA](../analýza-nákladů-a-užitku/) končí u „nákladů na jednotku zdraví“, CBA oceňuje samotné zdraví (QALY × prahová hodnota) i vše ostatní – čas, cestování, uhlík – a vykazuje jediné čisté číslo. Každý úplný digitální byznys případ NHS obsahuje ekonomický případ ve tvaru CBA.

## Matematika

```
NPV (net present social value) = Σ_t [ (Benefits_t − Costs_t) / (1 + r)^t ]
BCR (benefit-cost ratio)       = PV(benefits) / PV(costs)

Adopt if NPV > 0 (equivalently BCR > 1); rank by NPV, not BCR.
r = 3.5% (Green Book social time preference rate)
```

Zdravotní účinky mohou vstupovat monetizované jako QALY × λ (viz [prahy ochoty platit](../prahy-ochoty-platit/)). Green Book také nařizuje **úpravy o optimism bias** – navýšení odhadů nákladů a snížení přínosů o procenta podložená důkazy, protože posouzení jsou systematicky růžová.

## Řešený příklad

Systém elektronického doporučení, horizont 5 let, diskont 3,5 %:

```
Costs:    build £1.2M (year 0), run £300k/yr (years 1–5)
Benefits: admin savings £250k/yr, avoided duplicate diagnostics £280k/yr,
          patient time saved 40,000 hrs/yr × £15 = £600k/yr → £1,130k/yr

PV costs    = 1,200k + 300k × 4.515 (annuity factor) = £2,555k
PV benefits = 1,130k × 4.515                          = £5,102k

NPV = 5,102 − 2,555 = +£2,547k     BCR = 2.0
```

Uplatněte optimism bias z Green Book (řekněme +40 % u nákladů na vývoj, −20 % u přínosů): PV nákladů ≈ 3 035 tis. £, PV přínosů ≈ 4 082 tis. £, NPV ≈ **+1 047 tis. £** – stále kladné, což je smyslem úpravy: případy mají přežít vlastní optimismus.

## Souvislost se softwarovým inženýrstvím

Inženýrské byznys případy jsou neformální CBA. Vylepšení z Green Book, která stojí za převzetí:

- **Optimism bias jako standardní navýšení** – inženýři podhodnocují náklady migrace stejně spolehlivě, jako ministerstva podhodnocují náklady infrastruktury; uplatněte stanovené navýšení místo předstírání, že tentokrát je to jinak.
- **Dominantní přínos monetizujte poctivě, nebo vůbec** – čas pacientů/uživatelů se monetizuje obhajitelnými sazbami; „hodnota značky“ ne.
- **NPV řadí, BCR ne**: drobný projekt s BCR 5 může záležet méně než velký s BCR 1,6.

## Úskalí

- **Monetizace nemonetizovatelného** za účelem nafouknutí přínosů (morálka, „strategické sladění“) – nechte je kvalitativní, jako v [analýze nákladů a důsledků](../analýza-nákladů-a-důsledků/).
- **Počítání transferů jako přínosů**: peníze přesouvané mezi veřejnými orgány se ze společenské [perspektivy](../perspektiva-analýzy/) vynulují.
- **Žádný kontrafaktuál**: přínosy se měří proti variantě minimálního zásahu, nikoli proti nule.

## Zdroje

- HM Treasury, The Green Book. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Green Book discounting guidance. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
