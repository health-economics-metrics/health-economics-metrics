# Niver Res dhe Dhrettya (NNT)

NNT yw an niver a glevyon a res degemeres ynkleth rag **unn** klav ekstra dhe dhos dhe brow, dres termyn derivys. Hi a dreyl leha risk radh — usi a dhelludh — dhe unnysow ober-rag-prow a yll pubonan resna.

## Perag yth yw posek

"A leha hwarvosow kolon dre 25%!" a hevel dewisek. Mar yw an risk dalleth-linenn 4% dres 5 bledhen, an leha absolut yw 1 poynt radh, ytho **100 den a res kemmeres an drog rag 5 bledhen rag unn dhe dhos dhe brow** — hag oll an 100 a bay an kostow ha'n efektys-sedh. NNT yw an gwynn-erbynn marghasans risk-perthynek, hag yth yw hedna perag y ledh medhegieth diwar skoodhyans orth hi. Statins rag lettyans kensa: NNT ≈ 50–100 dres 5 bledhen rag hwarvos kolon hwithys. Y myrwhes, **NNH** (niver res dhe wul drog), a gownt pys trettys rag pub den gwrys drog.

## An Matematik

```
ARR = ratyo hwarvos kontrol − ratyo hwarvos ynkleth   (leha risk absolut)
NNT = 1 / ARR

NNH = 1 / (ratyo drog_ynkleth − ratyo drog_kontrol)

Pons ekonomek:
kost rag hwarvos lettys = NNT × kost rag kelgh ynkleth
```

Derivewgh pup-prys an termyn ha'n pobel dalleth-linenn — NNT yw heb styr heb an dew.

## Ensampel gwrys

System ragwelyans kodhow y'n klavji a wolok klevyon a risk uhel rag ynkleth (synsoryow gwely, dasvyuwa, dyllyans). Previans: kodhow gans gwoes a goll dhort 3.2% dhe 2.4% a gemmyskyansow.

```
ARR = 0.8 poynt radh → NNT = 1/0.008 = 125
   (125 klav a res kemmeres an bagas ynkleth dhe lettya unn kodh gwoesek)

Kost ynkleth ≈ £40/klav → kost rag kodh lettys = 125 × 40 = £5,000
Kost kodh gwoesek yn klavji (gortos ekstra, delinyans, kesstryf lagh) ≈ £12,000
Nett: lettyans a bay ~2.4:1 — ha gwayn QALY a vydh a-ugh.
```

Merkewgh fatell wra NNT gwitha an klaym onest: "a leha kodhow 25%" ha "lett unn kodh rag 125 klav trettys" yw an keth sewyans, perswadyek yn dyffrans.

## Kolm gans ynjynnyans medhelweyth

NNT yw an unnys ewn rag pub yet po gwiryans a wra war lies nodh dhe gachya nebes: **"niver PRs a res tremena dres an yet dasvyuwa AI dhe gachya unn fowt a-wor-dhe-broduksyon."** Mar kwra an yet dasvyuwa 400 PR rag pub kachya gwir (NNT = 400) orth 4 mynysenn a wolok-displegyer pub unn, unn kachya a gost ~27 eur-displegyer — lemmyn keskomparewgh hemma gans kost an hwarvos a wetha. NNH a vapya dhe fals-pozityvys: pys PR rag pub merk *fals*, ha pyth a gost pub unn yn golok ha fydhyans? Ark stil keres (linters, skanyoryon sawder, dyskudhoryon anormal) a dal dos gans aritmetik NNT/NNH — gwelewgh [ekonomek keres](../ekonomek-screening/) rag perag y wra pewas isel an niverow ma krev-kales. [Niver res dhe gerghes](../niver-res-dhe-gerghes/) yw an figyr kehaval unn nivel a-ugh, rag towl kowl keres-ha-nessa-trettya yn le trettyans yn unnik.

## Fowtys Kemmyn

- **Heb termyn**: "NNT = 50" a styr nagonan tra; "NNT = 50 dres 5 bledhen" yw klaym.
- **Treuswerth risk-dalleth-linenn**: NNT kowntys yn pobel previans risk-uhel a goll yn pobel delivrans risk-isel.
- **Ankevi NNH** — yet gans NNT 400 ha NNH 3 yw jenerator anken, na ny yw system sawder.

## Fontynnow

- Laupacis A, Sackett DL, Roberts RS. "An assessment of clinically useful measures of the consequences of treatment." NEJM 1988. <https://pubmed.ncbi.nlm.nih.gov/3374545/>
- Displegyans TheNNT. <https://www.thennt.com/thennt-explained/>
