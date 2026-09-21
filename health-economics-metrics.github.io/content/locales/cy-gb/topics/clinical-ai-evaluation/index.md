# Gwerthuso AI Clinigol

Y ystadegau craidd ar gyfer gwerthuso model AI clinigol neu ddiagnostig: sensitifedd, penodolrwydd, AUROC, gwerthoedd rhagfynegol, a'r nifer sydd angen eu sgrinio. Y wers economaidd ganolog: **nid yw AUROC gwych yn golygu defnydd cost-effeithiol** — mae gwerth yn dibynnu ar y pwynt gweithredu, y cyffredinedd, a'r hyn sy'n digwydd i lawr yr afon o bob canlyniad positif.

## Pam mae'n bwysig

Mae rheoleiddwyr (FDA, MHRA) yn awdurdodi AI clinigol ar **bwynt gweithredu wedi'i gloi** — pâr penodol o sensitifedd/penodolrwydd (e.e., y system awtonomaidd retinopathi diabetig gyntaf a gliriwyd gan yr FDA: sensitifedd 87.2%, penodolrwydd 90.7% yn ei threial arloesol). Yna mae economegwyr iechyd yn gofyn y cwestiwn na all metrigau cywirdeb ei ateb: ar gyffredinedd poblogaeth eich defnydd, faint mae pob canfyddiad yn ei *gostio*, ac a yw gweithredu arno werth chweil? Dangosodd gwerthusiad economaidd o AI sgrinio retinopathi (npj Digital Medicine 2024) nad oedd cywirdeb uwch ar ei ben ei hun yn gwarantu cost-effeithiolrwydd unwaith y cyfrifwyd costau atgyfeirio.

## Y mathemateg

```
Sensitifedd  = TP / (TP + FN)        — o'r rhai sy'n wirioneddol bositif, y gyfran a ddaliwyd
Penodolrwydd = TN / (TN + FP)        — o'r rhai sy'n wirioneddol negatif, y gyfran a glirwyd
AUROC        = P(model yn rhestru positif ar hap yn uwch na negatif ar hap)
               0.5 siawns … 1.0 perffaith; annibynnol ar drothwy — ac felly'n
               annigonol ar gyfer penderfyniad defnyddio

PPV = TP / (TP + FP)   ← yn dibynnu ar gyffredinedd (Bayes); yn cwympo pan fo'n brin
NPV = TN / (TN + FN)

NNS  ≈ 1 / (cyffredinedd × sensitifedd)       — sgrinio fesul achos gwirioneddol a ganfuwyd
Cost fesul achos gwirioneddol = cost rhaglen / TP      — y llinell waelod economaidd
```

## Enghraifft wedi'i gweithio

Yr un model, dwy leoliad — sensitifedd 90%, penodolrwydd 93%:

```
Clinig arbenigol (cyffredinedd 20%):
  PPV = (0.9×0.2)/(0.9×0.2 + 0.07×0.8) = 0.18/0.236 ≈ 76%  → 3 o bob 4 rhybudd yn wir

Gofal sylfaenol (cyffredinedd 1%):
  PPV = (0.9×0.01)/(0.9×0.01 + 0.07×0.99) = 0.009/0.0783 ≈ 11.5%
  → 8 o bob 9 rhybudd yn ffug; gwaith dilynol am £350 yr un:
  cost fesul achos gwirioneddol = (0.009 + 0.0693) × 350 / 0.009 ≈ £3,045 fesul achos a ganfuwyd
```

Yr un model yn union, economeg hollol wahanol — a dyna pam mae gwerthuso safle-benodol yn thema reoleiddiol a pham mai dechrau achos economaidd yw "mae gan ein model AUROC o 0.95," nid ei ddiwedd. Gweler [economeg sgrinio](../screening-economics/) am fathemateg lawn y rhaglen.

## Cysylltiad â pheirianneg meddalwedd

I beirianwyr sy'n adeiladu neu'n prynu AI clinigol: **cyflwynwch y matrics dryswch ar gyffredinedd y defnydd**, nid y gromlin ROC yn unig; **gadewch i'r trothwy fod yn benderfyniad economaidd** — dylai'r fasnach sensitifedd/penodolrwydd leihau'r gost ddisgwyliedig (achosion a gollwyd × cost colli vs larymau ffug × cost gwaith dilynol), nid uchafu ystadegyn meincnod; a chydnabod yr un fathemateg yn eich offer eich hun — mae systemau rhybuddio, canfyddwyr anomaledd, a sganwyr diogelwch yn brofion diagnostig dros ffrydiau digwyddiadau o gyffredinedd isel, gyda blinder rhybuddio fel [NNH](../number-needed-to-treat/). Mae diweddariadau model sy'n symud y pwynt gweithredu'n ailagor yr economeg (a'r clirio rheoleiddiol — gweler [gwerthuso rheoleiddiol AI](../ai-regulatory-evaluation/)).

## Peryglon

- **Siopa AUROC**: cymharu modelau ar AUROC pan fyddant yn rhedeg ar un trothwy — cymharwch ar y pwynt gweithredu.
- **PPV cyffredinedd-treial wedi'i ddyfynnu ar gyfer defnydd byd go iawn** — y clasur; ailgyfrifwch bob amser ar gyffredinedd lleol.
- **Tuedd sbectrwm**: modelau wedi'u dilysu ar achosion amlwg yn erbyn rheolyddion iach yn perfformio'n well na'r disgwyl ar y canol amwys sy'n dominyddu'r arfer.
- **Dim costio llwybr i lawr yr afon**: mae pob positif yn sbarduno gwaith dilynol; mae model yn ymyriad ar economeg y *llwybr cyfan*.

## Ffynonellau

- Cyfeirlyfr mesurau cywirdeb diagnostig. <https://www.medcalc.org/en/manual/roc-curves.php>
- Gwerthusiad economaidd o sgrinio retinopathi AI, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01032-9>
- Laupacis et al., NEJM 1988 (sylfeini NNT). <https://pubmed.ncbi.nlm.nih.gov/3374545/>
