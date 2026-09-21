# Cyrhaeddiad a Thegwch

RE-AIM — Cyrhaeddiad, Effeithiolrwydd, Mabwysiadu, Gweithredu, Cynnal — yw'r fframwaith safonol ar gyfer barnu effaith *boblogaeth* ymyriad. Ei arithmetig canolog: **effaith iechyd cyhoeddus ≈ cyrhaeddiad × effeithiolrwydd**. Mae offer digidol yn ychwanegu dimensiwn tegwch: mae'r rhaniad digidol yn golygu bod cyrhaeddiad yn systematig anwastad, a gall cyflenwi digidol-yn-gyntaf ehangu'r bylchau iechyd y mae'n anelu at eu cau.

## Pam mae hyn yn bwysig

Mae adolygiadau systematig sy'n cymhwyso RE-AIM at mIechyd yn dod o hyd i lofnod cyson: Cyrhaeddiad a Mabwysiadu cryf, **Effeithiolrwydd a Chynnal gwan** — mae apiau'n lledaenu'n hawdd ac yn pylu'n gyflym. I wasanaeth iechyd cenedlaethol, mae hyn yn golygu y gall cynnyrch trawiadol fesul defnyddiwr fod yn fuddsoddiad poblogaeth gwael, a i'r gwrthwyneb: gall erfyn cymedrol effeithiol sy'n cyrraedd miliynau allgynhyrchu un ardderchog sy'n cyrraedd miloedd (gweler arithmetig [HALE](../health-adjusted-life-expectancy/)). Nid yw tegwch yn gyfyngiad ochr ond yn yrrwr gwerth: mae eithrio digidol yn dilyn oedran, amddifadedd, anabledd, ac iaith — yn union y poblogaethau sy'n cario'r baich mwyaf triniadwy — felly mae gan y defnyddiwr ymylol a eithrir yn aml botensial budd *uwch na'r cyfartaledd*.

## Y Fathemateg

```
Effaith boblogaeth ≈ cyrhaeddiad × effeithiolrwydd
  cyrhaeddiad    = cyfranogwyr / poblogaeth gymwys (gweler activation-and-uptake.md)
  effeithiolrwydd = effaith byd go iawn ymhlith cyfranogwyr (wedi'i bwysoli yn ôl cadw —
                  gweler retention-and-churn.md)

Fersiwn wedi'i haenu yn ôl tegwch:
  effaith_grŵp_g = cyrhaeddiad_g × effeithiolrwydd_g, wedi'i adrodd fesul
  chwintel amddifadedd / band oedran / grŵp iaith
  bwlch tegwch = effaith_chwintel uchaf − effaith_chwintel isaf

Cost-effeithiolrwydd dosraniadol: cymhwyswch bwysau tegwch i QALYs yn ôl
grŵp derbynnydd — mae QALY i'r rhai gwaethaf eu byd yn cyfrif mwy (estyniad HTA
sy'n dod yn fwyfwy prif ffrwd).
```

## Enghraifft Waith

Rhaglen atal diabetes digidol, wedi'i hadrodd mewn dwy ffordd:

```
Cyfanredol: cyrhaeddiad 12%, effaith 0.02 QALY/cyfranogwr → 0.0024 QALY/person cymwys

Wedi'i haenu (chwintelau amddifadedd):
  Ch1 (lleiaf amddifadus): cyrhaeddiad 22%, effaith 0.02 → 0.0044
  Ch5 (mwyaf amddifadus):  cyrhaeddiad 4%,  effaith 0.025 → 0.0010

Mae'r rhaglen yn cyflenwi 4.4× yn fwy o iechyd i'r lleiaf amddifadus —
tra bo effaith fesul cyfranogwr Ch5 YN UWCH (mwy o le i wella). Mae braich
ddigidol-gynorthwyol (hyfforddi dros y ffôn + mynediad cymunedol) sy'n costio 20%
yn fwy fesul cyfranogwr Ch5 sy'n codi cyrhaeddiad Ch5 i 12% yn treblu effaith Ch5
ac yn gwella'r cyfanredol — dyma'r buddsoddiad tegwch YW'r buddsoddiad
effeithlonrwydd yn yr achos hwn.
```

## Cysylltiad Peirianneg Feddalwedd

Mae cyrhaeddiad i raddau helaeth yn arteffact peirianneg: mae gofynion isafswm dyfais a system weithredu, tybiaethau lled band, cymorth iaith, cydymffurfiaeth hygyrchedd (WCAG), rhwystrau gwirio hunaniaeth, a dosbarthiad siop-ap-yn-unig i gyd yn naddu poblogaethau allan o'r enwadur — fel arfer yn anweledig, oherwydd nid yw defnyddwyr a eithrir byth yn ymddangos mewn dadansoddeg. Arferion peirianneg sy'n symud tegwch: mesurwch yr *enwadur* (offerynnwch y boblogaeth gymwys, nid dim ond defnyddwyr); cyllidebwch berfformiad ar gyfer dyfeisiau hen a chysylltedd gwael; llongau lwybrau digidol-gynorthwyol (ffôn, SMS, ciosg) fel llifau dosbarth cyntaf yn hytrach na sianeli cywilydd; a haenwch bob metrig dangosfwrdd yn ôl y dimensiynau tegwch — dyma lle mae anghydraddoldeb yn cuddio mewn cyfartaledd heb ei haenu (mae [defnydd GDS](../gds-service-metrics/) yn cario'r un rhybudd).

## Peryglon

- **Effeithiolrwydd wedi'i adrodd ar gwblhawyr, effaith wedi'i hawlio ar boblogaethau** — mae'r termau cyrhaeddiad yn cael eu gollwng yn dawel.
- **Tegwch fel archwiliad ôl-ystyriaeth** yn hytrach na mewnbwn dylunio; mae ôl-ffitio cyrhaeddiad yn llawer drutach na dylunio ar ei gyfer.
- **Anghofrwydd cynnal**: dimensiwn gwannaf mIechyd RE-AIM — hawliadau effaith y tu hwnt i orwel amser y dystiolaeth.
- **Arbedion sianel ddigidol-yn-unig** sy'n symud costau ymlaen at ddefnyddwyr a eithrir a staff rheng flaen (gweler [metrigau gwasanaeth GDS](../gds-service-metrics/)).

## Ffynonellau

- Fframwaith RE-AIM. <https://re-aim.org/>
- Adolygiadau systematig RE-AIM o mIechyd. <https://pmc.ncbi.nlm.nih.gov/articles/PMC12358350/>
- CDC, PRISM/RE-AIM ar gyfer cynllunio tegwch. <https://www.cdc.gov/pcd/issues/2018/17_0271.htm>
