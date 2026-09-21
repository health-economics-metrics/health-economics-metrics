# Cost Oedi (CoD)

Cost Oedi yw'r gwerth economaidd a gollir am bob uned amser nad yw nodwedd, cynnyrch neu wasanaeth yn cael ei *ddarparu*. Dyma'r bont gryfaf rhwng metrigau cyflenwi meddalwedd ac economeg iechyd: mae'n trosi "fe ryddhawyd yn hwyr" yn arian — neu'n QALYs.

## Pam mae'n bwysig

Rheol Reinertsen: "Os mai dim ond un peth y byddwch yn ei fesur, mesurwch y Gost Oedi." Mae'r rhan fwyaf o sefydliadau'n gwybod cost prosiect, ond nid cost mis o oedi, felly maen nhw'n optimeiddio cyllidebau tra'n gwaedu gwerth-amser. I feddalwedd gofal iechyd mae'r peryglon yn llythrennol: bob wythnos y caiff gwelliant i lwybr gofal ei ohirio, mae cleifion yn aros yn hwy mewn cyflyrau iechyd gwaeth. CoD yw'r fframwaith mathemategol cryfaf i'w gyflwyno i randdeiliaid NHS am ei fod yn prisio *absenoldeb* eich meddalwedd.

## Y fathemateg

```
CoD = budd am bob uned amser a gollir tra nad yw wedi'i ddarparu   (£/wythnos neu QALYs/wythnos)

Colled oedi gyfan = CoD × hyd yr oedi

Ar gyfer blaenoriaethu, gweler wsjf-and-cd3.md: CD3 = CoD / hyd.
```

I feddalwedd glinigol, mynegwch mewn iechyd yn ogystal ag arian:

```
CoD_iechyd = cleifion yr effeithir arnynt yr wythnos × enillion QALY fesul claf
CoD_arian  = CoD_iechyd × λ (trothwy parodrwydd i dalu, £20k–30k/QALY)
             + arbedion gweithredol yr wythnos a gollir
```

## Enghraifft wedi'i datrys

**Gweithredol**: mae'r feddalwedd yn arbed £200 y claf ar lwybr gofal; mae ymddiriedolaeth yn prosesu 50 o gleifion o'r fath yr wythnos.

```
CoD = 200 × 50 = £10,000/wythnos
Mae oedi caffael o 10 wythnos yn costio 200 × 50 × 10 = £100,000 mewn gwastraff y gellid ei osgoi.
```

**Clinigol**: mae gwelliant brysbennu yn dileu 5 wythnos o aros (defnyddioldeb 0.68 → 0.80 yn gynt) i 100 o gleifion yr wythnos:

```
Enillion QALY fesul claf = (5/52) × 0.12 ≈ 0.0115
CoD_iechyd = 100 × 0.0115 = 1.15 QALYs/wythnos
CoD_arian  = 1.15 × £20,000 ≈ £23,000/wythnos o werth iechyd
```

Mae oedi cyflwyno o 6 mis yn "costio" ~30 QALYs — y ddadl sy'n ail-fframio llithriad go-live TG fel digwyddiad clinigol. (Meincnod o ran graddfa: canfu dadansoddiad enwog Maersk gan Black Swan Farming nodweddion unigol â CoD ≈ $200k/wythnos oedd wedi aros 38 wythnos.)

## Cysylltiad â pheirianneg meddalwedd

CoD yw'r metrig sy'n gwneud [amser arwain DORA](../dora-metrics/) ac [effeithlonrwydd llif](../flow-metrics/) yn ddarllenadwy'n ariannol: amser arwain × CoD = arian (neu iechyd) a losgir mewn ciwiau. Defnyddiau:

- **Blaenoriaethu**: graddio gwaith yn ôl CoD/hyd ([WSJF/CD3](../wsjf-and-cd3/)) yn hytrach na'r rhanddeiliad mwyaf swnllyd.
- **Economeg proses**: mae gan gadensau rhyddhau o 2 wythnos gost oedi ddisgwyliedig o ~1 wythnos × CoD fesul nodwedd, o'i gymharu â chyflenwi parhaus — prisiwch y swp.
- **Caffael**: mae gan gylchoedd caffael NHS o 6–18 mis CoD; mae ei ddangos yn newid sgyrsiau am frys (gweler [dadansoddiad effaith gyllideb](../budget-impact-analysis/) am y cymar fforddiadwyedd).

## Peryglon

- **Tybio CoD llinellol**: mae gan rywfaint o waith werth ar siâp terfyn amser (dyddiadau rheoleiddiol — CoD anfeidraidd ar ôl y dyddiad, sero cyn hynny) neu werth sy'n dadfeilio (ffenestri blaenwr cyntaf). Dosbarthwch broffil y brys cyn lluosi.
- **CoD ar allbynnau nad oes neb eu heisiau**: dim ond os oes gwerth i'r peth y mae oedi'n costio; mae sbwriel wedi'i oedi am ddim.
- **Cyfrif oedi a disgowntio ddwywaith**: mae [disgowntio](../discounting-and-time-preference/) eisoes yn prisio amser dros orwelion aml-flwyddyn; CoD yw'r fersiwn weithredol o fewn y gorwel. Defnyddiwch CoD ar gyfer wythnosau/misoedd, a newid NPV ar gyfer blynyddoedd.

## Ffynonellau

- Reinertsen DG, *The Principles of Product Development Flow*.
- Black Swan Farming, Cost of Delay. <https://blackswanfarming.com/cost-of-delay/>
- Trosolwg cost oedi. <https://en.wikipedia.org/wiki/Cost_of_delay>
