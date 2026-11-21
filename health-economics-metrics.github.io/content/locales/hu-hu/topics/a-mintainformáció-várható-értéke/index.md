# A mintainformáció várható értéke (EVSI)

Az EVSI egy *konkrét tervezett vizsgálat* — adott felépítés, adott mintaméret — értéke a lefuttatása előtt, szemben az [EVPI-vel](../a-tökéletes-információ-várható-értéke/), amely a teljes bizonytalanság egyszerre történő megszüntetését árazza. Az EVSI azt a kérdést válaszolja meg, amellyel egy kutatásfinanszírozó valójában szembesül: „megéri-e *ez* a vizsgálat, *ekkora* méretben, a költségét?"

## Miért fontos

Az EVPI megmondja a plafont arra, mennyit érhet bármely kutatás; soha nem mondja meg, hogy az előtted lévő vizsgálat átugorja-e a lécet. Egy nemzeti kutatásfinanszírozónak, amely egy 50 betegű kísérleti projekt és egy 500 betegű döntő vizsgálat között választ, tudnia kell, mennyit ér *az egyes konkrét felépítés*, nem csupán a mindentudás értékét. Az EVSI ezt a számot adja, és mivel a mintamérettel skálázódik, lehetővé teszi a finanszírozónak, hogy megtalálja a várható nettó hasznot maximalizáló mintaméretet a találgatás helyett.

Ezért van az is, hogy az EVSI mindig kisebb vagy egyenlő az EVPI-nél: a véges minta csak részben oldja fel a bizonytalanságot, és az a vizsgálat, amely többet ér a tökéletes információnál, azt jelzi, hogy a számítás hibás, nem pedig valódi eredményt.

## A matematika

```
General:
EVSI(n) = E_data[ max_d E_θ|data[NB(d,θ)] ]  −  max_d E_θ[NB(d,θ)]
  (nested expectation: outer over possible study results, inner over the
  posterior belief about θ after seeing that result — usually estimated by
  nested Monte Carlo / Bayesian updating over probabilistic sensitivity
  analysis draws)

Closed-form normal approximation (single uncertain parameter, conjugate
normal-normal model — a standard shortcut, not exact for every model):
EVSI(n) = EVPI × n / (n + n0)

n  = proposed study's sample size
n0 = "prior-equivalent sample size" — the size of an imaginary sample that
     would carry the same information as the current prior, derived from
     the ratio of data variance to prior variance
ENBS(n) = EVSI(n) − Cost(n)
Population EVSI = per-decision EVSI × decisions affected
```

Az általános alak beágyazott várható érték, mert egy vizsgálat jövőbeli eredménye maga is bizonytalan: átlagolnod kell a vizsgálat által előállítható összes lehetséges adathalmazra, és mindegyikre újra ki kell számítani a legjobb döntést a frissített (poszterior) hiedelem mellett. A zárt alakú normális közelítés ezt a számítási költséget egyetlen hányadosra cseréli, amely akkor érvényes, ha a bizonytalan paraméter és az adatok (közelítőleg) normális eloszlásúak és konjugáltak — kényelmi megoldás, nem egyetemes törvény. A teljes beágyazott Monte-Carlo az általános célú módszer, ha ez a feltevés nem áll fenn. Az EVSI becslésének alapjául szolgáló PSA-mintákról lásd [valószínűségi érzékenységvizsgálat](../valószínűségi-érzékenységvizsgálat/).

## Kidolgozott példa

Az [EVPI](../a-tökéletes-információ-várható-értéke/) kidolgozott példájára építve — MI-dokumentációs asszisztens bevezetése 5000 klinikusnak, ahol az EVPI 1,2 M£ volt — fejezzük ki ugyanazt az EVPI-t egész fontokban: **EVPI = £1,200,000**.

Egy 50 klinikusos kísérleti vizsgálat van terítéken. Az előzetes hiedelem varianciájának és a kísérleti projekt mérési pontosságának arányából a prior-ekvivalens mintaméret `n0 = 75`:

```
EVSI(50) = 1,200,000 × 50 / (50 + 75)
         = 1,200,000 × 50 / 125
         = 1,200,000 × 0.4
         = £480,000
```

A kísérleti projekt 120 000 £-ba kerül:

```
ENBS = EVSI − Cost = 480,000 − 120,000 = £360,000
```

Egyértelműen pozitív ENBS: finanszírozd a kísérleti projektet. Ha ugyanez a beszerzési döntés 3 hasonló regionális trösztnél ismétlődik, a kísérleti projekt értéke skálázódik:

```
Population EVSI = 480,000 × 3 = £1,440,000
```

## Kapcsolat a szoftverfejlesztéssel

Az EVSI annak gazdaságtana, *mekkora* legyen egy kísérleti projekt vagy A/B-teszt, nem csupán az, hogy egyáltalán lefuttassuk-e:

- **Mintaméret mint befektetési döntés.** Egy 50 felhasználós béta és egy 5000 felhasználós szakaszos bevezetés különböző „vizsgálatok", különböző EVSI-vel és költséggel — az EVSI lehetővé teszi, hogy ugyanazon az alapon hasonlítsd össze őket, ahelyett hogy alapértelmezetten a „több adat mindig jobb" elvet követnéd.
- **Az ENBS, nem az EVSI önmagában a megrendelési teszt.** Az a vizsgálat, amelynek magas az EVSI-je, de költsége felemészti nagy részét, gyenge javaslat; a döntési szabály a mintavétel várható nettó haszna, pontosan úgy, ahogy az üzleti eset a hasznot a költséggel szembeállítja, nem csak a hasznot közli.
- **A csökkenő hozadék explicit.** Mivel az EVSI(n) az `n/(n+n0)` szerint nő, egy kísérleti projekt méretének megkétszerezése soha nem kétszerezi az értékét — ez a mérnöki ösztön formális változata, hogy a nagyobb kísérlet határinformáció-értéke csökken.

## Buktatók

- **A normális közelítés alkalmazása a feltevésein kívül.** Csak megközelítőleg konjugált, egyparaméteres bizonytalanságra érvényes; egy valóban nemlineáris vagy többparaméteres döntési modell teljes beágyazott Monte-Carlót igényel, nem ezt a rövidítést.
- **Az EVSI összehasonlítása csupán a készpénzköltséggel.** Az EVSI-t a vizsgálat *teljes* költségével kell mérlegelni, beleértve a saját döntéskésleltetési költségét — lásd [a késedelem költsége](../a-késedelem-költsége/) —, nem csak a vizsgálat számláját.
- **Az EVSI > EVPI valódi megállapításként kezelése.** Az EVSI konstrukció szerint soha nem haladhatja meg az EVPI-t; az ezt eredményező számítás modellezési hiba, nem felfedezés.

## Források

- Ades AE, Lu G, Claxton K. "Expected value of sample information calculations in medical decision modeling." Medical Decision Making 2004;24(2):207-27.
- Willan AR, Pinto EM. "The value of information and optimal clinical trial design." Statistics in Medicine 2005;24(12):1791-806.
- Strong M, Oakley JE. "When is a model-based value of information analysis feasible?" Medical Decision Making 2014.
