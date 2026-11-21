# Koncentracijski indeks

Koncentracijski indeks (Wagstaff, Paci, van Doorslaer, 1991.) standardna je statistička mjera socioekonomski povezane nejednakosti u zdravstvenoj varijabli, u rasponu od -1 do 1. Negativna vrijednost znači da je zdravstvena varijabla koncentrirana među socioekonomski u nepovoljnijem položaju, pozitivna da je koncentrirana među bolje stojećima, a nula znači da nema dosljednog socioekonomskog gradijenta — pretvara sumnju o nejednakoj raspodjeli u jedan, usporediv broj.

## Zašto je važno

Program može izgledati učinkovito u agregatu, a ipak isporučivati svoju korist gotovo isključivo ljudima koji su već bili bolje stojeći. Takve distribucijske brige upravo prati [doseg i pravednost](../doseg-i-pravednost/) deskriptivno — doseg stratificiran po kvintilima deprivacije, jaz pravednosti između gornje i donje skupine — ali stratificirana tablica ne sažima se u jedan trend, i ne može se lako usporediti među dvije potpuno različite intervencije mjerene na različitim ljestvicama. Koncentracijski indeks rješava oba problema: računa se na isti način za bilo koju zdravstvenu varijablu prema bilo kojem socioekonomskom rangiranju, pa nacionalna zdravstvena služba može pratiti širi li se ili sužava nejednakost određene digitalne usluge izdanje po izdanje i može usporediti distribucijsku pravednost uvođenja aplikacije s, recimo, programom probira, na istoj normaliziranoj ljestvici.

## Matematika

```
CI = (2 / mean(zdravstvene_vrijednosti)) × Cov(zdravstvene_vrijednosti, socioekonomski_rangovi)

Cov(X, Y) = mean(X × Y) − mean(X) × mean(Y)   (populacijska kovarijanca)

socioekonomski_rangovi: razlomljeni rang svake osobe u socioekonomskoj
distribuciji, u [0, 1] (0 = najugroženiji, 1 = najpovlašteniji;
za grupirane/pojasne podatke, konvencionalno središnji rang svake skupine)
```

To je „zgodna formula kovarijance” (O'Donnell, van Doorslaer, Wagstaff, Lindelow, World Bank 2008.) — standardni praktičarski prečac za izračun Koncentracijskog indeksa izravno iz uparenih opažanja, bez prethodnog crtanja i integriranja ispod koncentracijske krivulje.

## Riješeni primjer

Samoprijavljeni rezultat dobrog zdravlja (1 = najgore, 4 = najbolje) opažen kroz četiri jednaka socioekonomska kvartila, svaki predstavljen središnjim rangom kvartila:

```
health_values        = [1.0, 2.0, 3.0, 4.0]
socioeconomic_ranks  = [0.125, 0.375, 0.625, 0.875]

mean(health_values)        = 2.5
mean(health × rank)        = mean([0.125, 0.75, 1.875, 3.5]) = 1.5625
mean(socioeconomic_ranks)  = 0.5

Cov = 1.5625 − 2.5 × 0.5 = 0.3125

CI = 2 × 0.3125 / 2.5 = 0.25
```

Pozitivnih `0,25` znači da je ovaj zdravstveni rezultat koncentriran među socioekonomski povlaštenom skupinom — ispitanici s višim rezultatima naginju prema boljem kraju rangiranja.

## Veza sa softverskim inženjerstvom

To je ista mjera nejednakosti temeljena na kovarijanci koja se koristi u ekonomiji općenito (rođak Ginijevog koeficijenta), a preslikava se na mjerenje koncentriraju li se koristi softverskog proizvoda među već povlaštenim segmentima korisnika umjesto da su pravedno raspoređene — izravno proširenje [dosega i pravednosti](../doseg-i-pravednost/) (RE-AIM-ova dimenzija „dosega”) u formalnu statističku mjeru umjesto opisanog jaza. Gdje doseg-i-pravednost iskazuje utjecaj po sloju, Koncentracijski indeks sažima cijelu distribuciju u jedan predznačeni broj, prikladan kao jedan praćeni KPI kroz izdanja — praktičan za nadzornu ploču, gdje potpuna stratificirana raščlamba nije.

## Zamke

- **Pomak konvencije predznaka**: predznak ovisi o tome kako su definirani i zdravstvena varijabla i rang — okretanje bilo kojeg okreće predznak, pa se korištena konvencija uvijek mora izričito navesti uz svaku iskazanu vrijednost.
- **Granični rangovi umjesto središnjih rangova**: grupirani ili pojasni socioekonomski podaci (npr. kvintili) zahtijevaju korištenje razlomljenog ranga svake skupine na njezinoj *sredini*, a ne granici, inače je indeks pristran.
- **Čitanje „blizu nule” kao „nema nejednakosti”**: Koncentracijski indeks blizu nule znači „nema dosljednog socioekonomskog gradijenta”, a ne „nema nejednakosti” u apsolutnom smislu — poništavajuće nejednakosti u različitim smjerovima mogu se međusobno poništiti.

## Izvori

- Wagstaff A, Paci P, van Doorslaer E. "On the measurement of inequalities in health." Soc Sci Med. 1991;33(5):545-57.
- O'Donnell O, van Doorslaer E, Wagstaff A, Lindelow M. "Analyzing Health Equity Using Household Survey Data." World Bank. 2008 — the standard practitioner handbook, source of the convenient covariance formula used here. <https://openknowledge.worldbank.org/entities/publication/98380884-0d1d-53d2-b95f-ec6be2019414>
