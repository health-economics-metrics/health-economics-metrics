# Očekivana vrijednost informacije iz uzorka (EVSI)

EVSI je vrijednost *konkretne predložene studije* — zadani dizajn, zadana veličina uzorka — prije nego što se provede, za razliku od [EVPI](../očekivana-vrijednost-savršene-informacije/), koji cijeni potpuno uklanjanje sve neizvjesnosti. EVSI odgovara na pitanje s kojim se financijer istraživanja zapravo suočava: „isplati li se *ovo* ispitivanje, ove veličine, svog troška?”

## Zašto je važno

EVPI vam govori gornju granicu vrijednosti bilo kojeg istraživanja; nikad ne govori prelazi li ispitivanje pred vama tu letvicu. Nacionalni financijer istraživanja koji bira između pilota s 50 pacijenata i konačnog ispitivanja s 500 pacijenata mora znati koliko vrijedi *svaki konkretni dizajn*, a ne samo vrijednost sveznanja. EVSI daje taj broj, a budući da raste s veličinom uzorka, financijeru omogućuje da pronađe veličinu uzorka koja maksimizira očekivanu neto korist umjesto da pogađa.

Zato je EVSI uvijek manji ili jednak EVPI-ju: konačan uzorak može samo djelomično razriješiti neizvjesnost, a studija koja se čini vrijednijom od savršene informacije znak je pogrešnog izračuna, a ne stvarnog rezultata.

## Matematika

```
Općenito:
EVSI(n) = E_data[ max_d E_θ|data[NB(d,θ)] ]  −  max_d E_θ[NB(d,θ)]
  (ugniježđeno očekivanje: vanjsko po mogućim rezultatima studije, unutarnje po
  posteriornom uvjerenju o θ nakon viđenja tog rezultata — obično se procjenjuje
  ugniježđenim Monte Carlom / Bayesovim ažuriranjem preko izvlačenja
  probabilističke analize osjetljivosti)

Zatvoreni oblik normalne aproksimacije (jedan neizvjestan parametar, konjugirani
normalno-normalni model — standardni prečac, nije točan za svaki model):
EVSI(n) = EVPI × n / (n + n0)

n  = veličina uzorka predložene studije
n0 = „veličina uzorka ekvivalentna priori” — veličina zamišljenog uzorka koji bi
     nosio istu informaciju kao trenutni prior, izvedena iz omjera
     varijance podataka i varijance priora
ENBS(n) = EVSI(n) − Cost(n)
Populacijski EVSI = EVSI po odluci × broj pogođenih odluka
```

Opći oblik je ugniježđeno očekivanje jer je budući rezultat studije i sam neizvjestan: morate usrednjiti preko svakog mogućeg skupa podataka koji studija može dati, a za svaki ponovno izračunati najbolju odluku uz ažurirano (posteriorno) uvjerenje. Zatvoreni oblik normalne aproksimacije zamjenjuje taj računski trošak jednim omjerom, važećim kad su neizvjesni parametar i podaci (približno) normalno distribuirani i konjugirani — pogodnost, a ne univerzalni zakon. Potpuni ugniježđeni Monte Carlo opća je metoda kad ta pretpostavka ne vrijedi. Vidi [probabilističku analizu osjetljivosti](../probabilistička-analiza-osjetljivosti/) za izvlačenja PSA iz kojih se EVSI obično procjenjuje.

## Riješeni primjer

Nadovezujući se na riješeni primjer [EVPI](../očekivana-vrijednost-savršene-informacije/) — uvođenje AI asistenta za dokumentaciju za 5.000 kliničara, gdje je EVPI bio 1,2 mil. £ — izrazimo isti EVPI ovdje u cijelim funtama: **EVPI = 1.200.000 £**.

Na stolu je predložena pilot-studija na 50 kliničara. Iz omjera varijance prethodnog uvjerenja i preciznosti mjerenja pilota, veličina uzorka ekvivalentna priori iznosi `n0 = 75`:

```
EVSI(50) = 1,200,000 × 50 / (50 + 75)
         = 1,200,000 × 50 / 125
         = 1,200,000 × 0.4
         = £480,000
```

Pilot košta 120.000 £:

```
ENBS = EVSI − Cost = 480,000 − 120,000 = £360,000
```

Jasno pozitivan ENBS: financirajte pilot. Ako se ista odluka o nabavi ponavlja u 3 slična regionalna trusta, vrijednost pilota skalira se:

```
Population EVSI = 480,000 × 3 = £1,440,000
```

## Veza sa softverskim inženjerstvom

EVSI je ekonomija biranja *koliko velik* pilot ili A/B test treba biti, a ne samo hoće li se uopće provesti:

- **Veličina uzorka kao odluka o ulaganju.** Beta s 50 korisnika i postupno uvođenje na 5.000 korisnika su različite „studije” s različitim EVSI-jevima i troškovima — EVSI ih omogućuje usporediti na istoj osnovi umjesto zadanog „više podataka je uvijek bolje”.
- **ENBS, a ne sam EVSI, test je za naručivanje.** Studija s visokim EVSI-jem čiji trošak pojede većinu toga slab je prijedlog; pravilo odlučivanja je očekivana neto korist uzorkovanja, baš kao što poslovni slučaj netira korist protiv troška umjesto da iskazuje samo korist.
- **Opadajući prinosi su eksplicitni.** Budući da EVSI(n) raste s `n/(n+n0)`, udvostručenje veličine pilota nikad ne udvostručuje njegovu vrijednost — formalna inačica inženjerskog instinkta da veći eksperiment ima opadajuću graničnu vrijednost informacije.

## Zamke

- **Primjena normalne aproksimacije izvan njezinih pretpostavki.** Vrijedi samo za približno konjugiranu neizvjesnost jednog parametra; doista nelinearan ili višeparametarski model odlučivanja treba puni ugniježđeni Monte Carlo, a ne ovaj prečac.
- **Uspoređivanje EVSI-ja samo s novčanim troškom.** EVSI se mora vagati prema *punom* trošku studije, uključujući njezin vlastiti trošak odgode odluke — vidi [trošak odgode](../trošak-odgode/) — a ne samo prema računu studije.
- **Tretiranje EVSI > EVPI kao stvarnog nalaza.** EVSI po konstrukciji nikad ne može premašiti EVPI; izračun koji to daje je greška modeliranja, a ne otkriće.

## Izvori

- Ades AE, Lu G, Claxton K. "Expected value of sample information calculations in medical decision modeling." Medical Decision Making 2004;24(2):207-27.
- Willan AR, Pinto EM. "The value of information and optimal clinical trial design." Statistics in Medicine 2005;24(12):1791-806.
- Strong M, Oakley JE. "When is a model-based value of information analysis feasible?" Medical Decision Making 2014.
