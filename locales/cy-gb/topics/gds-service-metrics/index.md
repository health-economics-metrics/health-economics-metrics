# Metrigau Gwasanaeth GDS

Mae Llawlyfr Gwasanaeth y Gwasanaeth Digidol Llywodraethol (GDS) yn y DU yn mynnu pedwar Dangosydd Perfformiad Allweddol (KPI) ar gyfer pob gwasanaeth digidol llywodraethol: **cost fesul trafodiad, boddhad defnyddwyr, cyfradd cwblhau, a mabwysiadu digidol**. Gyda'i gilydd, dyma economeg leiaf gwasanaeth digidol cyhoeddus — a'r templed y mae gwasanaethau digidol yr NHS yn ei etifeddu.

## Pam mae'n bwysig

Mae metrigau GDS yn amgodio'r achos busnes newid-sianel a ariannodd ddegawd o ddigideiddio llywodraethol: canfu'r Digital Efficiency Report fod trafodion digidol tua 20× yn rhatach na'r ffôn a thua 50× yn rhatach nag wyneb yn wyneb (ffigurau llywodraeth leol: gwe £0.15, ffôn £2.83, wyneb yn wyneb £8.62). Ond dim ond pan fydd pobl yn *cwblhau*'r daith ddigidol (cyfradd cwblhau) *yn lle* defnyddio'r sianel ddrud (mabwysiadu) mae'r arbedion yn gwireddu — un model economaidd yw'r pedwar KPI, nid pedair dangosfwrdd.

## Y mathemateg

```
Cost fesul trafodiad = cyfanswm cost y gwasanaeth / trafodion wedi'u cwblhau
Cyfradd cwblhau      = wedi'u cwblhau / trafodion wedi'u dechrau × 100
Mabwysiadu digidol   = trafodion digidol / trafodion pob sianel × 100
Boddhad defnyddwyr   = % bodlon+bodlon iawn (5 pwynt, arolwg mewn-gwasanaeth)

Arbediad newid sianel = cyfaint × newid mabwysiadu × (cost_hen sianel − cost_digidol)
… llai galw methiant: (1 − cyfradd cwblhau) × cost sianel wrth gefn
```

## Enghraifft wedi'i gweithio

Gwasanaeth rheoli apwyntiadau'r NHS: 2M trafodyn/blwyddyn, ar hyn o bryd 70% ffôn (£3.20/galwad) / 30% digidol (£0.25). Mae ailddyluniad yn codi mabwysiadu digidol i 55% a chwblhau o 84% i 93%:

```
Arbediad newid mabwysiadu = 2M × 0.25 × (3.20 − 0.25) = £1,475,000/blwyddyn

Arbediad galw methiant: mae teithiau digidol methedig yn syrthio'n ôl i'r ffôn
  cyn:  2M × 0.30 × 0.16 × £3.20 = £307,200
  wedi: 2M × 0.55 × 0.07 × £3.20 = £246,400
  net £60,800/blwyddyn — mae gwelliannau cwblhau'n diogelu'r enillion mabwysiadu

Boddhad yw'r dangosydd arweiniol: mae defnyddwyr anfodlon yn dychwelyd at y
ffôn, felly mae gostyngiad boddhad yn rhagweld dirywiad mabwysiadu cyn iddo ymddangos.
```

## Y cysylltiad â pheirianneg feddalwedd

Mae'r pedwar KPI hyn yn enghraifft o safon cynhyrchu o [dabl cost-canlyniad](../cost-consequence-analysis/): un metrig cost, tri metrig canlyniad, byth wedi'u cywasgu'n sgôr. I beirianwyr cynnyrch, y gwersi gweithredol: mae **cyfradd cwblhau'n broblem offeryniad twndis** (mae pob pwynt gadael i'w ganfod a'i drwsio); mae **cost fesul trafodiad yn [economeg uned cwmwl](../cloud-unit-economics/)** ynghyd â chostau sianel â chymorth staff; mae **mabwysiadu'n fetrig cydraddoldeb dan gochl** — mae'r defnyddwyr na allant neu na fyddant yn newid sianel yn anghymesur o hen, anabl, ac amddifadus, felly mae cau sianeli'n ymosodol yn troi "arbedion" yn niwed mynediad (gweler [cyrhaeddiad a chydraddoldeb](../reach-and-equity/)). Mae cyhoeddi'r KPIs (mae GOV.UK yn gwneud, fesul gwasanaeth) yn fecanwaith ynddo'i hun: mae tryloywder yn disgyblu rhagolygon yn yr un modd ag y mae archwiliadau [gwireddu buddion](../benefits-realization/).

## Peryglon

- **Mabwysiadu drwy orfodaeth**: mae cau'r llinell ffôn yn codi mabwysiadu ac yn dympio galw methiant ar staff rheng flaen; mesurwch gost gyfan y system.
- **Cwblhau wedi'i fesur o dudalen-2**: mae dechrau'r twndis ar ôl y pwynt gollwng yn gwneud i'r gyfradd edrych yn well nag ydyw.
- **Cost fesul trafodiad yn anwybyddu cymorth digidol-gynorthwyol** a thrin galw methiant.
- **Arolygon boddhad dim ond ar gwblhau llwyddiannus** — nid yw'r anfodlon fel arfer byth yn cyrraedd yr arolwg.

## Ffynonellau

- GOV.UK Service Manual, measuring success / mandatory KPIs. <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- Digital Efficiency Report. <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
