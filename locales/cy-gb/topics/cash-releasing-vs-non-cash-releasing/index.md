# Arbedion sy'n Rhyddhau Arian Parod vs Arbedion nad ydynt yn Rhyddhau Arian Parod

Mae arbedion sy'n rhyddhau arian parod yn lleihau gwariant gwirioneddol — mae llinell gyllideb yn mynd yn llai. Mae arbedion nad ydynt yn rhyddhau arian parod yn rhyddhau amser neu gapasiti sy'n cael ei *ailddefnyddio* yn hytrach na'i fancio. Mae cyfarwyddwyr cyllid systemau iechyd yn trin y rhain fel rhywogaethau gwahanol, a dylech chithau hefyd.

## Pam mae'n bwysig

Dyma'r prawf gonestrwydd mwyaf llym a gymhwysir i unrhyw achos busnes digidol mewn gwasanaeth iechyd cenedlaethol. Mae fframweithiau buddiannau'r NHS yn categoreiddio pob budd a hawlir yn benodol fel un sy'n rhyddhau arian parod, un nad yw'n rhyddhau arian parod, neu'n ansoddol. Mae'r rhan fwyaf o "arbedion" iechyd digidol — munudau clinigwr a arbedwyd fesul claf, dogfennu cyflymach — yn arbedion nad ydynt yn rhyddhau arian parod: yn werthfawr, ond nid ydynt yn lleihau'r diffyg. Dim ond arian parod y gall Prif Swyddog Cyllid ymddiriedolaeth sy'n wynebu bwlch cyllido ei wario. Gweler hefyd [arbedion caled sy'n rhyddhau arian parod](../hard-cash-releasing-savings-deficit-defence/).

## Y mathemateg

```
Arbediad sy'n rhyddhau arian parod   = llinell gyllideb cyn − llinell gyllideb ar ôl
                          (rhaid iddo fod yn echdynadwy: contract wedi'i ganslo, ward wedi cau,
                           gwariant asiantaeth wedi'i ostwng, pryniant wedi'i osgoi)

Gwerth nad yw'n rhyddhau arian parod = amser a ryddhawyd × cost uned yr amser hwnnw
                          (wedi'i brisio ar gost cyfle; nid yw'r arian yn ECHDYNADWY)
```

Mae'r un digwyddiad ffisegol (awr wedi'i harbed) yn glanio yn un categori neu'r llall yn dibynnu ar yr hyn sy'n digwydd nesaf:

```
awr wedi'i harbed → shifft goramser/asiantaeth wedi'i chanslo        → rhyddhau arian parod
awr wedi'i harbed → clinigwr yn gweld un claf arall sy'n aros         → nad yw'n rhyddhau arian parod (capasiti)
awr wedi'i harbed → wedi'i sugno i mewn i lac, dim yn newid           → dim budd o gwbl
```

## Enghraifft wedi'i gweithio

Mae meddalwedd yn arbed 30 munud fesul shifft i bob un o 100 nyrs. Mae hynny'n 100 × 0.5 × 5 shifft/wythnos × 46 wythnos ≈ 11,500 awr/blwyddyn. Ar gost gyflogwr Band 5 o ~£25/awr, y pennawd temtasiynol yw £287,500/blwyddyn.

Y rhaniad gonest:

- Mae 20% o'r amser yn glanio lle mae wardiau ar hyn o bryd yn talu premiwm banc/asiantaeth i ymdopi â gorredau dogfennu: 2,300 awr × cyfradd asiantaeth £35 = **£80,500 sy'n rhyddhau arian parod** (shifftiau nad ydynt yn cael eu harchebu mewn gwirionedd).
- Mae 60% yn cael ei ailddefnyddio ar gyfer gofal claf uniongyrchol: 6,900 awr × £25 = **£172,500 o gapasiti nad yw'n rhyddhau arian parod** — gwerth gwirioneddol, wedi'i adrodd ar wahân, byth wedi'i alw'n "arbedion."
- Mae 20% yn gwasgaru i mewn i seibiannau ac ymyriadau: **£0**. Byddai ei hawlio'n ffuglen.

Mae achos busnes sy'n cyflwyno £80.5k o arian parod + £172.5k o gapasiti yn gredadwy. Mae un sy'n cyflwyno £287.5k o "arbedion" yn cael ei wrthod gan y cyfrifydd cyntaf sy'n ei ddarllen.

## Cysylltiad â pheirianneg meddalwedd

Mae'r un rhesymeg yn union yn llywodraethu ROI cynorthwyydd codio AI: mae "30 munud fesul datblygwr fesul dydd" yn gapasiti nad yw'n rhyddhau arian parod oni bai bod niferoedd staff, gwariant contractwyr, neu gost cwmwl yn gostwng mewn gwirionedd. Adroddwch y categorïau ar wahân:

- Rhyddhau arian parod: ymrwymiadau contractwyr wedi'u canslo, trwyddedau offer wedi'u dad-gomisiynu, gwariant cwmwl wedi'i ostwng.
- Capasiti: nodweddion yn cael eu cyflenwi'n gynt (gwerth trwy [gost oedi](../cost-of-delay/)), backlog wedi'i losgi i lawr.
- Dim byd: munudau a arbedwyd sy'n chwalu'n ddarnau wrth newid cyd-destun.

Olrheiniwch hefyd *i ble aeth yr amser a ryddhawyd mewn gwirionedd* — mae gwireddu buddiannau ([benefits-realization.md](../benefits-realization/)) yn bodoli oherwydd bod enillion capasiti a hawlir yn aml yn anweddu wrth eu harchwilio.

## Peryglon

- **Lluosi munudau â chyflog a'i alw'n arbedion** — y pechod canonaidd.
- **Prisio amser a ryddhawyd ar gost lwythog gyfartalog** pan fo defnydd ymylol yr amser hwnnw'n isel ei werth — gweler [cost ymylol vs cost gyfartalog](../marginal-vs-average-cost/).
- **Cyfrif yr un awr ddwywaith**: fel arian parod (shifft wedi'i hosgoi) ac fel capasiti (cleifion ychwanegol wedi'u gweld).

## Ffynonellau

- Canllawiau achos busnes cysylltedd Digidol yr NHS, yr achos economaidd (categorïau buddiannau). <https://digital.nhs.uk/services/networks-and-connectivity-transformation-frontline-capabilities/connectivity-hub/advice-and-guidance/making-the-business-case-for-connectivity-infrastructure-investment---guidance/economic-case>
- NHS England, cynhyrchiant yr NHS. <https://www.england.nhs.uk/long-read/nhs-productivity/>
