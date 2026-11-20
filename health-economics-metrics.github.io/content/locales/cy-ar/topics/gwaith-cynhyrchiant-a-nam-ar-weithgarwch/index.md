# Gwaith Cynhyrchiant a Nam ar Weithgarwch (WPAI)

Holiadur hunan-adrodd wedi'i ddilysu yw WPAI (Reilly, Zbrozek, Dasbach, 1993) sy'n mesur faint y mae problem iechyd yn effeithio ar waith â thâl a gweithgareddau dyddiol, fel arfer dros y 7 diwrnod diwethaf. Mae'n hollti'r golled yn *absenoliaeth* — amser gwaith a gollwyd yn llythrennol — a *phresenoldeb dan nam* (presenteeism) — cynhyrchiant llai tra'n bresennol yn gorfforol yn y gwaith — a'r ail yw'r gydran gost fwy cudd a mwy fel arfer.

## Pam mae hyn yn bwysig

Dim ond absenoliaeth y mae cyfrif diwrnodau salwch syml yn ei weld. Nid yw clinigwr neu weithiwr gwybodaeth sydd byth yn cymryd diwrnod i ffwrdd ond sy'n gweithio ar 60% o gapasiti drwy gyflwr cronig yn cyfrannu dim at gofrestr absenoliaeth ond yn dal i gynhyrchu colled cynhyrchiant mawr, go iawn — mae WPAI wedi'i gynllunio'n benodol i ddatgelu'r gost anweledig honno. Gan ei fod yn offeryn wedi'i ddilysu yn hytrach nag arolwg pwrpasol, gellir defnyddio ei sgorau mewn pecynnau tystiolaeth [canlyniad a adroddir gan gleifion](../canlyniadau-a-adroddir-gan-gleifion/) ac astudiaethau cost salwch heb fod angen i'r adolygydd ailddilysu'r mesur. Fel offeryn hunan-adrodd, mae ei hun yn fath o PROM, wedi'i wahaniaethu'n bennaf gan ei ffocws ar waith a gweithgarwch yn hytrach na symptomau neu ansawdd bywyd.

## Y Fathemateg

```
Absenoliaeth % = oriau_a_gollwyd_oherwydd_iechyd / (oriau_a_gollwyd_oherwydd_iechyd + oriau_a_weithiwyd) × 100

Presenoliaeth %  = nam hunan-raddedig 0–10 wrth weithio, × 10
                  (wedi'i gael yn uniongyrchol drwy'r holiadur, heb ei ddeillio yma)

Cyfanswm Nam Gwaith % =
    Absenoliaeth% + (1 − Absenoliaeth%/100) × Presenoliaeth%
    (yn cyfuno'r ddau fel na all y cyfanswm byth fod yn fwy na 100%)

Cost cynhyrchiant = Cyfanswm_Nam_Gwaith% / 100 × enillion_y_cyfnod
```

Nid yw'r fformiwla nam cyffredinol yn gyfanswm syml yn fwriadol: gallai adio'r ddwy ganran yn uniongyrchol fod yn fwy na 100%, felly mae presenoliaeth yn cael ei gymhwyso dim ond at gyfran *weddill* (heb fod yn absennol) yr amser gwaith.

## Enghraifft Waith

Mae gweithiwr â meigryn wedi'i drefnu ar gyfer wythnos 40 awr ond yn colli 4 awr ohoni:

```
oriau_a_gollwyd = 4, oriau_a_weithiwyd = 36
Absenoliaeth% = 4 / (4 + 36) × 100 = 10%
```

Maent ar wahân yn hunan-raddio eu heffaith ar gynhyrchiant wrth weithio fel 3 allan o 10 ar holiadur WPAI, h.y. `Presenoliaeth% = 30%` (mae'r cam hwn yn ateb holiadur crai, nid rhywbeth a ddeilliwyd o rifau eraill):

```
Cyfanswm Nam Gwaith% = 10 + (1 − 10/100) × 30
                     = 10 + 0.9 × 30
                     = 10 + 27
                     = 37%
```

Dros wythnos 5 diwrnod gydag enillion o £800 (£160/diwrnod):

```
Cost cynhyrchiant = 37/100 × 800 = £296
```

Sylwch na fyddai cyfrif diwrnodau salwch naïf wedi cofnodi dim ond y 4 awr (10%) a gollwyd — mae'r gydran presenoliaeth bron yn treblu'r gwir nam unwaith y'i cyfrifir.

## Cysylltiad Peirianneg Feddalwedd

Mae hyn yn mapio'n uniongyrchol ar fetrigau iechyd tîm peirianneg:

- **Absenoliaeth** yw gwyliau salwch a PTO — gweladwy, eisoes yn cael ei olrhain, a'r rhan hawdd.
- **Presenoliaeth** yw'r peiriannydd wedi llosgi allan neu wedi'i orlwytho gan newid cyd-destun sy'n bresennol ym mhob stand-up tra'n gweithredu ar gapasiti llai — fel arfer y gost fwy a mwy cudd, yn anweledig i ddata nifer pennau neu bresenoldeb. Yn lle hynny mae'n ymddangos fel trwybwn llai mewn [DORA](../metrigau-dora/) a [metrigau llif](../metrigau-llif/), neu fel datrysiad arafach o'r union [ddyled dechnegol](../dyled-dechnegol/) y mae ei "llog" yn cyfansoddi'r nam ymhellach.
- Yr un yw'r wers beirianegol â'r un glinigol: mae mesur absenoliaeth yn unig a'i alw'n "golled cynhyrchiant" yn tanamcangyfrif y gwir gost yn systematig, oherwydd ei fod yn methu pawb sy'n bresennol ond â nam.

## Peryglon

- **Tuedd cofio hunan-adrodd.** Mae ffenestr cofio 7 diwrnod yn destun yr un ystumiadau adrodd ag unrhyw hunan-adrodd ôl-edrychol.
- **Trin y raddfa presenoliaeth 0–10 fel mesuriad corfforol gwirioneddol.** Mae'n drefnol, wedi'i chael trwy hunan-raddio, nid maint ffisegol wedi'i ddilysu — mae trin gwahaniaethau arni fel rhai'n gwbl llinol neu gyfwng yn hwylustod modelu, nid ffaith ffisegol wedi'i dilysu.
- **Cyfuno sgorau ar draws amrywiadau WPAI.** Mae gan WPAI sawl fersiwn sy'n benodol i gyflwr — WPAI:GH (iechyd cyffredinol), WPAI:SHP (problem iechyd benodol), ac amrywiadau sy'n benodol i glefyd — ac ni ddylid cyfuno na chymharu sgorau o wahanol amrywiadau heb wirio yn gyntaf mai'r un fersiwn o'r offeryn ydynt.

## Ffynonellau

- Reilly MC, Zbrozek AS, Dasbach EJ. "The validity and reproducibility of a work productivity and activity impairment instrument." PharmacoEconomics 1993;4(5):353-65.
- Dogfennaeth offeryn WPAI, Reilly Associates — y cyfeirnod sgorio swyddogol. <https://www.reillyassociates.net/>
