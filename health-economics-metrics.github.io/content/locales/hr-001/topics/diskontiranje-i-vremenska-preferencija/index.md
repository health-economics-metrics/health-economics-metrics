# Diskontiranje i vremenska preferencija

Diskontiranje pretvara buduće troškove i koristi u sadašnje vrijednosti, jer korist danas vrijedi više od iste koristi za pet godina.

## Zašto je važno

Svaka procjena u zdravstvenoj ekonomiji i svaki ozbiljan poslovni slučaj u javnom sektoru diskontira višegodišnje tokove. Green Book britanskog Ministarstva financija (HM Treasury) propisuje godišnju društvenu stopu vremenske preferencije od 3,5 %; referentni slučaj NICE-a diskontira i troškove i zdravstvene učinke po 3,5 % godišnje (uz stopu od 1,5 % izvan referentnog slučaja za terapije koje gotovo liječe, s koristima kroz 30 i više godina). Ako vaš poslovni slučaj za softver tvrdi „5 milijuna £ ušteda u 10 godina”, financijski recenzent odmah će tražiti diskontirani iznos.

## Matematika

Sadašnja vrijednost budućeg iznosa:

```
PV = FV / (1 + r)^t

PV = sadašnja vrijednost
FV = buduća vrijednost u godini t
r  = diskontna stopa (NICE/Green Book: 0.035)
t  = broj godina od sada
```

Za konstantnu godišnju korist B kroz n godina (anuitet):

```
PV = B × [1 − (1 + r)^(−n)] / r
```

## Riješeni primjer

Vaš softver štedi NHS-ovu trustu 100.000 £ godišnje kroz 5 godina, počevši godinu dana nakon puštanja u rad.

Nediskontirani zbroj: 500.000 £.

Diskontirano po 3,5 %:

```
Godina 1: 100,000 / 1.035^1 = £96,618
Godina 2: 100,000 / 1.035^2 = £93,351
Godina 3: 100,000 / 1.035^3 = £90,194
Godina 4: 100,000 / 1.035^4 = £87,144
Godina 5: 100,000 / 1.035^5 = £84,197

Ukupno PV ≈ £451,505
```

Pošteni naslovni iznos je oko 451.000 £, otprilike 10 % manje od naivnog zbroja. Pretpostavimo sada da isporuka kasni godinu dana: svaki se član pomiče godinu unaprijed, a PV pada na oko 436.000 £ — diskontni pogled na [trošak odgode](../trošak-odgode/).

## Veza sa softverskim inženjerstvom

- **Otplata tehničkog duga i migracije platformi** obećavaju tokove koristi godinama unaprijed; diskontirajte ih prije usporedbe s radom koji se isplati ovog kvartala.
- **Troškovi unaprijed, koristi naknadno** standardni je oblik migracije. Diskontiranje taj oblik kažnjava, i to ispravno: cijeni vremensku vrijednost bez rizika za angažiranje kapaciteta sada radi vrijednosti kasnije.
- **Tvrdnje o „uštedama u petoj godini”** zaslužuju dvostruku skepsu — one su i snažno diskontirane i vrlo neizvjesne (vidi [analizu osjetljivosti](../analiza-osjetljivosti/)).

## Zamke

- **Diskontiranje troškova, a ne koristi** (ili obrnuto) — referentni slučaj diskontira oboje, po istoj stopi.
- **Korištenje komercijalne stope (8–12 %) u slučaju javnog sektora** ili 3,5 % u slučaju financiranom rizičnim kapitalom. Uskladite stopu s donositeljem odluke.
- **Brkanje diskontiranja i inflacije.** Diskontiranje se primjenjuje na *realne* (inflacijski prilagođene) vrijednosti; nemojte raditi oboje implicitno.

## Izvori

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- HM Treasury Green Book, discounting supplementary guidance. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
