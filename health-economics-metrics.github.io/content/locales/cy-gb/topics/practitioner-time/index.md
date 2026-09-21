# Amser Ymarferwr

Amser ymarferwr yw'r adnodd prinnaf yn y rhan fwyaf o systemau iechyd. Mae mesur gwerth arbed munudau y dydd i glinigwr yn gofyn am symud o fathemateg cyflog syml i **gost cyfle a chapasiti system**: o fewn gwasanaeth iechyd cenedlaethol, mae amser ymarferwr yn dagfa weithredol anhyblyg, nid llinell gost sy'n hyblyg.

## Pam mae hyn yn bwysig

Ni allwch greu mwy o feddygon teulu, ymgynghorwyr, neu nyrsys arbenigol yn gyflym — mae piblinellau hyfforddi'n rhedeg am 5–15 mlynedd, ac mae swyddi gwag yn gronig. Felly nid "cyflogau a osgowyd" yw awr o amser ymarferwr a arbedwyd (mae'r ymarferwr yn dal i gael ei dalu); mae'n *gapasiti tagfa a ryddhawyd*, ac mae capasiti tagfa'n werth yr hyn y mae'r dagfa'n ei gynhyrchu. Dyma pam mae honiadau "arbed 10 munud fesul ymgynghoriad" yr un pryd y llinell fwyaf cyffredin a'r un a brisir waethaf mewn iechyd digidol.

## Y Fathemateg

Tri lefel prisio, mewn trefn gynyddol o onestrwydd:

```
1. Sail cyflog:       oriau × cyfradd cyflog wedi'i lwytho (costau uned PSSRU)
                      — beth mae'r amser yn ei gostio, nid beth mae'n ei gynhyrchu
2. Sail allbwn:       oriau → apwyntiadau/gweithdrefnau a alluogir × gwerth cynllun
                      (gweler national-tariff-and-unit-costs.md)
3. Sail tagfa:        os yw'r rôl hon yn giatio llwybr cyfan, oriau × gwerth
                      trwybwn llwybr a ryddhawyd (theori cyfyngiadau)
```

Disgownt darniogrwydd: mae amser a arbedwyd mewn darnau islaw cwantwm defnyddiadwy (e.e., 3 munud wedi'u gwasgaru ar draws clinig) yn ailddefnyddio'n wael; defnyddiwch ffactor defnydd datganedig.

## Enghraifft Waith

Mae ysgrifennu amgylchynnol yn arbed 2 funud fesul ymgynghoriad i feddyg teulu, 30 ymgynghoriad/dydd: 60 munud/dydd, neu **220 awr/blwyddyn fesul meddyg teulu** dros 220 diwrnod gwaith.

```
Sail cyflog:  220 × £80 (awr feddyg teulu wedi'i lwytho, rhanbarth PSSRU) ≈ £17,600/meddyg teulu/blwyddyn
Sail allbwn:  60 munud/dydd = 5 ymgynghoriad 12-munud ychwanegol/dydd
              = 1,100 apwyntiad ychwanegol/meddyg teulu/blwyddyn × £42 ≈ £46,200/meddyg teulu/blwyddyn
              — neu'r un apwyntiadau wedi'u hamsugno fel llai o oramser a
              ymgynghoriadau diogelach, di-frys (llinell ansoddol)
```

Ar draws ffederasiwn o 50 meddyg teulu mae capasiti'r sail allbwn yn werth ~£2.3M/blwyddyn — ar yr amod bod y munudau'n real (wedi'u mesur, nid wedi'u honni gan werthwr), wedi'u cyfuno (ymgynghoriadau cyfan, nid darnau), ac wedi'u hailddefnyddio (gweler [arbedion sy'n rhyddhau arian parod yn erbyn rhai nad ydynt](../cash-releasing-vs-non-cash-releasing/)).

## Cysylltiad Peirianneg Feddalwedd

Mae amser peiriannydd uwch yn ymddwyn yn union yr un fath: dyma'r dagfa y mae dyluniadau, adolygiadau, a digwyddiadau'n llifo trwyddi, felly prisiwch ef yn ôl yr hyn y mae'r dagfa'n ei giatio, nid yn ôl cyflog. Mae'r un prisio tri-lefel yn berthnasol i unrhyw honiad "mae AI yn arbed X munud i bob datblygwr" — mae mathemateg cyflog yn gwneud rhifau bach yn fwy deniadol; y cwestiynau gonest yw a yw munudau'n cyfuno'n flociau defnyddiadwy a beth mae'r capasiti a ryddhawyd yn ei gynhyrchu mewn gwirionedd. Gweler [optimeiddio adnoddau diweddarach](../downstream-resource-optimization/) am y lluosydd pan fo'r awr a arbedwyd yn perthyn i'r person y mae pawb arall yn aros amdano.

## Peryglon

- **Munudau × cyflog = arbedion** — y chwyddiant canonaidd; capasiti ydyw, ac ar y defnydd datganedig yn unig.
- **Anwybyddu problem y cwantwm**: nid yw 12 × arbediad 5-munud yn hafal i un awr rydd.
- **Prisio pob rôl yn gyfartal**: mae awr o dagfa'r llwybr yn werth sawl gwaith awr o rôl nad yw'n giatio.

## Ffynonellau

- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
- NHS England, cynhyrchedd y GIG. <https://www.england.nhs.uk/long-read/nhs-productivity/>
