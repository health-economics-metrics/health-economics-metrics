# Dyssehtyans Kost Ewn-Kans

Rannya kevrann kowl a vona — grant rynnys, bil isstrukter, figyr efekt budjet — dres lies degemeryer dre aritmetik radh sempel a dhre menowgh rannow na wra sommya dhe'n tomm kensa. Dyssehtyans ewn-kans yw an sawyans: fordh niver-kowl/desimal, ow oberi yn unnysow arghans byghan (kans), a gwith bos an rannow a sommya *yn tien* dhe'n kowl, kyn nag eus rann kehaval. Kenyver ynjynnyer medhelweyth a res dasparthi tomm rynnys dhe'n kans — pagyow, dyllans grant, chargya servis-rynnys — a res an patrom ma, na ny yw radhow floating-point.

## Perag yth yw posek

Hemma yw patrom hanwys, selys yn ynjynnyans medhelweyth kowethyans: *Patterns of Enterprise Application Architecture* Martin Fowler (2002) a dhiskwedh `Money` ha `Allocate` rag an kaus ma pur — "rann $100 yn tri" yw kudyn a wra kod sempel yn kamm yn menowgh, yn tawesek — an fowt a dheu yn unnik pan dasrekenna nebonan an lyvrow ha kavos an rannow unn kans le (po moy) ages an tomm. Yn ober ekonomek yeghes ha mona NHS hemma nyns yw akademek: tommow efekt budjet a vydh rynnys dres steusow, bledhydhyow, po komandow; kostow isstrukter ha lisens rynnys a vydh dyllys dres adhepertyansow dre niver staff po radh gwrians. Pub rann a res dasparthi yn tien, drefen bos an rewler mona a dhalleth dhe wul dhe-vyska y fydhyans y'n patrom oll pan veu rannow na sommya dhodho.

## An Matematik

```
Fordh sempel (torrys):
  rann_i = round(tomm × radh_i / Σ radhow)     — rondya pub rann yn dispar

Fordh ewn (gwarthel-restow / "dyssehtyans gwarthel-restow"):
  1. base_i = floor(unnysow_minor_oll × radh_i / Σ radhow)   — unnysow minor kowl (kans) yn unnik
  2. restow = unnysow_minor_oll − Σ base_i                   — kans a-dhelergh, peub-prys < niver degemeryer
  3. dyllewgh 1 unnys minor ekstra dhe'n `restow` degemeryer a'n
     gwarthel restow radhek dhort step 1, bys may fyllo an remnant

Sewyans: Σ rann_i == tomm, peub-prys, dre dhyssyn.
```

An fordh ewn na ronda bythkweth rann yn kudh — hi a ronda an *dyssehtyans kowl* avel unn gwrians, hag yth yw hedna a wra an invariant sommya dhe sevel.

## Ensampel gwrys

Rannewgh $100.00 yn tri kehaval (`radhow = [1, 1, 1]`).

Fordh sempel: $100.00 ÷ 3 = $33.333…, rondys yn dispar dhe'n kans ogasa a re $33.33 rag pub degemeryer. Sommys: $33.33 × 3 = $99.99 — unn kans yw kellys, ha nagonan linenn nyns yw "kamm" lowr dhe vos gwelys dre ves.

Fordh ewn: `base` = $33.33 rag an tri (9,999 unnys minor oll dhort `floor(10,000 / 3) = 3,333` kans pub unn), ow tyllas restow a 1 kans (10,000 − 9,999). An unn kans na a dhe'n degemeryer ow kovyn an radh restow moyha y'n rannans — an degemeryer spesifek yw manylyon ynterna tie-break, na ny yw tra a res dhe'n galwer dysplegya. Dew degemeryer a worfenn gans $33.33 hag unn gans $33.34, hag an tri rann a sommya dhe $100.00 yn tien.

Hemma yw an aritmetik kowal a res [analys efekt budjet](../analys-efekt-budjet/) pan res rannya figyr efekt budjet oll dres steusow, kohortow, po bledhydhyow arghansek ha'y dhasparthi dhe'n tomm dyllys — gwelewgh [kuntell kost sawys-arghans](../kuntell-kost-sawys-arghans/) rag an kudyn kowethes a sommya lies linenn heb drifta.

## Kolm gans ynjynnyans medhelweyth

Hemma yw yn lyterel "an patrom Money" a arkitektur medhelweyth kowethyans — patrom selys, hanwys, rag an klass fowt na. Fyllyansow dasparthi arghansek gwir a veu delivrys dhort an klass fowt na: rannow radh kowntys yn `f64`, rondys pub degemeryer, ha ny veu gwiryes erbynn an tomm kensa. Hi a golm dhirek dhe vodul [kost perghenogyeth kowl](../kost-perghenogeth-hollow/) an repo ma, usi a sommya lemmyn kostow floating-point sempel dres bledhydhyow ha dewisow — an keth dyskyplin ewnder a dhevnydh pan res dhe dommow TCO po efekt budjet bos dyllys yn le bos sommys yn unnik.

## Fowtys Kemmyn

- **Radh-ha-nessa-rondya yn le gwarthel-restow**: dyllas gans radhow floating-point ha rondya pub degemeryer yn dispar, usi a gressa fowt rondya ha menowgh na sommya dhe'n tomm, arbennik dres lies degemeryer.
- **Ankevi exponent unnys minor arghans**: tybya bos 2 desimal dhe bub arghans — Yen Japan a'n jeves 0, nebes arghans 3 — rannans radh gwrys dre dorn peub-prys a gudh 2 ha a fyll yn tawesek rag arghans erel; rewtin dyssehtyans ewn a redya an exponent dhort an arghans y honan (ISO 4217).
- **Dasdyllas restow dyllys seulabrys**: ledya an rewtin dyssehtyans arta war an pyth a'n gedh dhort dyssehtyans kyns, heb previansow idempotens, usi a yll re dhewblya an keth kans dhe'n keth degemeryer.

## Fontynnow

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — an patromow `Money` ha `Allocate`.
- ISO 4217 — standard kod arghans ha fondyow, usi a dhyllas exponent unnys minor pub arghans.
