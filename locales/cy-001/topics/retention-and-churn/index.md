# Cadw a Cholli Defnyddwyr

Mae cadw defnyddwyr yn mesur pa gyfran o garfan o ddefnyddwyr sy'n dal i fod yn weithredol N diwrnod ar ôl dechrau (cromliniau D1/D7/D30); colli defnyddwyr yw ei chyflenwad. Y llinell sylfaen greulon ym maes iechyd digidol: mae tua **90% o ddefnyddwyr apiau iechyd yn rhoi'r gorau iddi cyn pen 30 diwrnod** — mae cadw defnyddwyr D30 ym maes iechyd digidol tua 3–4% o'i gymharu â chyfartaledd o ~6% ar gyfer pob ap.

## Pam mae'n bwysig

Eysenbach a enwodd hyn yn 2005: **deddf yr atreuliad** (the law of attrition) — mae colli defnyddwyr ar gyfraddau uchel yn briodwedd strwythurol gynhenid i ymyriadau e-iechyd, nid yn nam gweithredu, gydag atreuliad mewn treialon e-iechyd yn rheolaidd yn fwy na 50%. Mae'r canlyniad economaidd yn llwyr: mae cadw defnyddwyr yn diffinio'r *ffenestr driniaeth* y gellir cyflwyno unrhyw fudd o'i mewn, ac mae'r [economeg uned](../health-app-unit-economics/) — CAC a delir fesul defnyddiwr sy'n aros 12 diwrnod — yn methu cyflenwi LTV nac QALYs. Mae unrhyw fodel economaidd ar gyfer cynnyrch iechyd defnyddwyr nad yw'n pwysoli buddion yn ôl cromlin cadw defnyddwyr yn disgrifio cynnyrch nad yw'n bodoli.

## Y fathemateg

```
Retention_Dn = users active on day n / cohort size × 100
Churn rate   = users lost in period / users at period start × 100

Pwysoli budd (symudiad economeg-iechyd):
  expected benefit per acquired user = Σ_t retention(t) × benefit rate(t)
  ≈ area under the retention curve × per-time benefit
  — NID budd y treial × 100% o'r defnyddwyr a gaffaelwyd

Cost per retained-at-D30 user = CAC / D30 retention
  (ar 4% D30, mae CAC o £5 mewn gwirionedd yn £125 fesul defnyddiwr a gedwir)
```

## Enghraifft wedi'i gweithio

Ap iechyd meddwl: dangosodd treial fod 0.02 QALY yn cael eu hennill fesul defnyddiwr sy'n cwblhau 8 wythnos. Carfan ddefnyddio o 100,000 o lwythi i lawr, cadw D7 25%, D30 8%, wythnos-8 4%:

```
Completers          = 100,000 × 0.04 = 4,000
QALYs delivered     = 4,000 × 0.02 = 80  (not 100,000 × 0.02 = 2,000)
At £20,000/QALY     = £1.6M of health value (not £40M)
```

Gwerth iechyd fesul llwythiad i lawr = £16 — y ffigur ddylai bennu beth fydd taliedydd yn ei dalu fesul llwythiad i lawr, a 4% o'r hawliad naïf ydyw. Achos gwella cadw defnyddwyr: mae symud cwblhau wythnos-8 o 4% → 6% yn ychwanegu 40 QALY/flwyddyn ≈ £800k — mae peirianneg cadw defnyddwyr YN gynhyrchu iechyd.

## Cysylltiad â Pheirianneg Meddalwedd

Cadw defnyddwyr yw'r metrig lle mae peirianneg cynnyrch yn cynhyrchu gwerth iechyd yn fwyaf uniongyrchol, yn ôl y rhifyddeg uchod. Mae'r arferion sy'n ei symud yn rhai cyffredin: amser-i-werth-cyntaf wrth ymgyfarwyddo, dylunio ail-ymgysylltu, perfformiad, ac yn hollbwysig, **cwblhau dos wedi'i gynllunio** — dylai rhaglen sydd â diwedd diffiniedig (8 wythnos, yna graddio) fesur *cwblhau*, nid DAU parhaus, gan alinio'r metrig â'r model clinigol yn hytrach na'r model sylw a ariennir gan hysbysebion. Dadansoddiad goroesiad yw'r pecyn cywir o offer (yr un rhifyddeg Kaplan-Meier â [blynyddoedd bywyd a enillwyd](../life-years-gained/)); segmentwch gromliniau yn ôl sianel gaffael, gan fod cymysgedd sianeli'n newid cadw defnyddwyr yn fwy nag y mae'r rhan fwyaf o nodweddion yn ei wneud.

## Peryglon

- **Golchi bwriad-i-drin o chwith**: mae treialon yn adrodd am y rhai a gwblhaodd; rhaid i economeg defnyddio go iawn gyfrif pawb a gaffaelwyd (rhybudd craidd Eysenbach).
- **Theatr cadw defnyddwyr**: defnyddwyr "gweithredol" wedi'u sbarduno gan hysbysiadau nad ydynt byth yn cyflawni'r weithred therapiwtig (gweler [metrigau ymgysylltu](../engagement-metrics/)).
- **Cymharu cromliniau ar draws diffiniadau**: mae diffinio "gweithredol" fel agor ap yn erbyn cyflawni gweithred ystyrlon yn newid D30 gydag amlrifau.
- **Anwybyddu pwy sy'n gadael**: os yw'r rhai mwyaf sâl yn gadael gyflymaf, mae buddion fesul defnyddiwr yn gostwng wrth i gadw defnyddwyr wella ymhlith y rhai iach — parwch gromliniau â chymysgedd achosion (gweler [cyrhaeddiad a thegwch](../reach-and-equity/)).

## Ffynonellau

- Eysenbach G. "The law of attrition." JMIR 2005;7(1):e11. <https://www.jmir.org/2005/1/e11/>
- Mobile app retention benchmarks. <https://uxcam.com/blog/mobile-app-retention-benchmarks/>
- Healthcare product benchmarks. <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
