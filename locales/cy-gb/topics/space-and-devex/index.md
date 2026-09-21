# SPACE a DevEx

Mae SPACE (Satisfaction & well-being, Performance, Activity, Communication & collaboration, Efficiency & flow) a DevEx (dolenni adborth, llwyth gwybyddol, cyflwr llif) yn fframweithiau ar gyfer mesur cynhyrchiant datblygwyr **mewn sawl dimensiwn** — ateb y maes i'r darganfyddiad nad oes unrhyw fetrig sengl yn goroesi cyswllt â realiti.

## Pam mae'n bwysig

Mae'r ddau fframwaith yn amgodio'r un wers a ddysgwyd yn ddrud gan ymchwil canlyniadau iechyd ddegawdau ynghynt: mae un rhif sengl (llinellau cod; pwysedd gwaed) yn camgynrychioli realiti aml-ddimensiwn, ac mae ei optimeiddio'n cynhyrchu gemio, nid gwelliant. Mae SPACE yn rhagnodi cyfuno metrigau o o leiaf dri dimensiwn, gan gymysgu telemetreg ag hunanadroddiad — yr un yn strwythurol â sut y mae [EQ-5D](../eq-5d/) yn proffilio pum dimensiwn cyn cyfrifo unrhyw fynegai, a pham mae [PROMs](../patient-reported-outcomes/) yn bodoli ochr yn ochr â mesurau clinigol. Nid addurniad meddal yw boddhad/llesiant ychwaith: mae'n bwydo economeg [cadw gweithlu](../workforce-retention/), lle mae atreuliad yn cael ei brisio mewn misoedd o gyflog llwythog.

## Y fathemateg

Nid fformiwla yw'r naill fframwaith na'r llall; dyluniadau mesur ydynt y ddau:

```
Rheol SPACE: ≥ 3 dimensiwn, ≥ 1 metrig canfyddiadol (arolwg) + ≥ 1 metrig system (telemetreg)

Dimensiynau DevEx ac enghreifftiau o barau:
  dolenni adborth   → hyd CI (telemetreg) + "mae aros yn teimlo'n araf" (arolwg)
  llwyth gwybyddol  → hygyrchedd dogfennau, amser ymgyfarwyddo + ymdrech ganfyddedig
  cyflwr llif       → dwysedd cyfarfodydd/tarfiadau + ffocws hunan-adroddedig

Mae mynegeion deilliedig (e.e. DXI gan DX) yn mapio cyfansoddion arolwg i amser:
honiad gwerthwr ≈ 13 munud/datblygwr/wythnos fesul pwynt mynegai — trinwch fel
fainc-farc gwerthwr i'w ddilysu'n lleol, nid yn gysonyn natur.
```

## Enghraifft wedi'i gweithio

Mae tîm platfform yn cyfiawnhau buddsoddiad DevEx (cyflymu CI + ailwampio dogfennau) ar gyfer 300 o ddatblygwyr:

```
Llinell sylfaen: CI p75 = 28 munud; arolwg "Rwy'n colli ffocws yn aros am builds": 62% yn cytuno
Wedyn:           CI p75 = 9 munud;  cytundeb 24%

Amser a adenillwyd (telemetreg): 6 build/dydd × 19 munud × 0.4 defnyddiadwy = ~45 munud/dydd/datblygwr
Gwerth capasiti: 300 × 0.75awr × 220d × £60/awr ≈ £2.97M/flwyddyn (nid yn rhyddhau
arian parod — gweler cash-releasing-vs-non-cash-releasing.md; y ffactor
defnyddioldeb 0.4 yw'r disgownt dryllio o practitioner-time.md)
Y corroboriad canfyddiadol sy'n gwneud yr honiad telemetreg yn gredadwy — mae
naill ai ar ei ben ei hun yn agored i gemio; gyda'i gilydd maen nhw'n triongli.
```

## Cysylltiad â Pheirianneg Meddalwedd

Y ddogfen hon *yw'r* ochr feddalwedd; mae'r trosglwyddiad yn rhedeg tuag at economeg iechyd. Mae "blwyddyn peiriannydd wedi'i haddasu am ansawdd" — amser wedi'i bwysoli gan fynegai profiad safonedig — yn adeiladwaith y [QALY](../quality-adjusted-life-year/) wedi'i gymhwyso i gapasiti peirianneg, ac mae'n etifeddu rheolau'r QALY: pwysau o offeryn dilysedig (arolwg cyson, sgorio cyhoeddedig), wedi'u codi *cyn* y gymhariaeth, byth wedi'u tiwnio i wenieithu offeryn ffafriedig. Mae gwers [SF-6D yn erbyn EQ-5D](../eq-5d/) yn berthnasol hefyd: mae gwahanol offerynnau'n rhoi rhifau sy'n systematig wahanol, felly peidiwch byth â chymharu mynegeion DevEx ar draws offerynnau gwahanol werthwyr.

## Peryglon

- **Cwymp i un metrig**: mae dangosfyrddau sy'n lleihau SPACE i un sgôr yn ailgreu'r broblem y mae'r fframwaith yn bodoli i'w hatal.
- **Metrigau Gweithgarwch fel canlyniadau**: mae commits, PRs, a phwyntiau stori yn Weithgarwch (Activity) — y dimensiwn y mae SPACE yn rhybuddio'n benodol ei fod fwyaf agored i gemio (cyfatebiaeth iechyd: cyfrif gweithdrefnau, nid gwelliannau).
- **Blinder arolwg ac effeithiau Hawthorne**: mae offerynnau chwarterol ysgafn-eu-cyffyrddiad yn well na chroesholi wythnosol.
- **Cymharu timau**: fel tablau cynghrair ysbytai heb addasiad cymysgedd achosion — mae gwahaniaethau cyd-destun (parth, llwyth etifeddol, ar-alwad) yn dominyddu.

## Ffynonellau

- Forsgren N, et al. "The SPACE of Developer Productivity." ACM Queue 2021. <https://queue.acm.org/detail.cfm?id=3454124>
- Noda A, Forsgren N, Storey MA, Greiler M. "DevEx: What Actually Drives Productivity." ACM Queue 2023. <https://queue.acm.org/detail.cfm?id=3595878>
