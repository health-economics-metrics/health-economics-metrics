# Osgoi Presenoldeb Brys

Mae osgoi presenoldeb brys yn cyfrif ymweliadau ag Adran Achosion Brys (A&E) a derbyniadau brys a ataliwyd gan ymyrraeth ymlaen llaw — apiau trioli, monitro o bell, wardiau rhithwir, ailgyfeirio gofal brys. Mae'n trosi "fe'i daliwyd yn gynharach" yn honiad wedi'i gostio.

## Pam mae'n bwysig

Gofal brys yw'r lleoliad rheolaidd drutaf yn y system (mae costau uned presenoldeb yr Adran Achosion Brys yn amrywio rhwng £250–£400 yn ôl ffigurau'r National Cost Collection / PSSRU; mae derbyniad brys yn filoedd), ac mae gorlenwi'r Adran Achosion Brys yn achosi oedi i ambiwlansys ac achosion dewisol wedi'u canslo. Mae unrhyw beth sy'n datrys galw'n ddiogel ymlaen llaw — cyngor hunanofal, gofal sylfaenol yr un diwrnod, ymateb cymunedol — yn prynu capasiti i'r system yn ei phwynt mwyaf dan straen. Dyma'r llinell fudd safonol ar gyfer gwiriwyr symptomau, gwasanaethau trioli tebyg i 111, a [monitro cleifion o bell](../remote-patient-monitoring-economics/).

## Y mathemateg

```
Presenoldeb a osgowyd = poblogaeth × (cyfradd sylfaenol − cyfradd ymyrraeth)
Arbediad gros         = presenoldeb a osgowyd × cost uned fesul presenoldeb
                        (+ derbyniadau a osgowyd × cost derbyniad, wedi'u cyfrif ar wahân)

Arbediad net          = arbediad gros − cost ymyrraeth − cost defnydd llwybr newydd
                        (nid yw galw a ailgyfeiriwyd am ddim: mae gan alwad 111,
                         apwyntiad meddyg teulu, a diwrnod ward rithwir eu costau
                         uned eu hunain)
```

Mae angen cymharydd ar gyfer yr honiad achosol: mae cyfraddau presenoldeb yn tueddu ac yn amrywio'n dymhorol, felly nid yw cymharu cyn/ar ôl ar ei ben ei hun yn profi dim.

## Enghraifft wedi'i gweithio

Gwasanaeth monitro o bell ar gyfer COPD i 3,000 o gleifion risg uchel. Mae gwerthusiad grŵp cymharu wedi'i baru'n dangos bod presenoldeb Adran Achosion Brys sy'n gysylltiedig â gwaethygiad yn gostwng o 0.9 i 0.7 fesul claf-blwyddyn, a derbyniadau brys o 0.5 i 0.42.

```
Presenoldeb a osgowyd = 3,000 × 0.2  = 600 × £300   = £180,000
Derbyniadau a osgowyd = 3,000 × 0.08 = 240 × £3,800 = £912,000
Gros                                                  £1,092,000/blwyddyn

Costau: gwasanaeth monitro £600,000; ymatebion ychwanegol nyrsys cymunedol £150,000
Net ≈ +£342,000/blwyddyn — ynghyd ag enillion QALY o waethygiadau a driniwyd yn gynharach.
```

Sylwch mai'r llinell dderbyniadau sy'n dominyddu: prin y bydd osgoi presenoldeb yn unig yn talu am wasanaeth monitro; osgoi *derbyniadau* yw lle mae'r arian.

## Y cysylltiad â pheirianneg feddalwedd

Dyma **economeg osgoi digwyddiadau**. Gwerth arsylwadwyedd, defnyddiadau canari, a systemau rhybudd cynnar yw "presenoldebau brys" a osgowyd — tudalennau galw, ystafelloedd rhyfel, digwyddiadau sev-1 — pob un â chost lwythog (oriau peiriannydd × cyfradd + effaith ar gwsmeriaid). Mae'r un rheolau modelu'n berthnasol: tynnwch gost y llwybr newydd ymlaen llaw (nid yw trioli rhybuddion am ddim), gwyliwch am amnewid (mae rhybuddion sy'n creu gwaith heb atal digwyddiadau yn orbryder iechyd, nid iechyd), a phrofwch y cwestiwn gwrthffeithiol gyda grŵp rheoli (mae cyfraddau digwyddiadau timau'n tueddu ac yn dychwelyd i'r cymedr, yn union fel presenoldeb yr Adran Achosion Brys).

## Peryglon

- **Atchweliad i'r cymedr**: mae carfannau risg uchel a ddewiswyd ar sail blwyddyn wael yn gwella heb driniaeth; mae grwpiau rheoli wedi'u paru neu gynlluniau "stepped-wedge" yn hanfodol.
- **Galw a ysgogwyd gan gyflenwad**: gall trioli digidol hawdd *gynyddu* cyfanswm y cysylltiadau (trothwy is i geisio cymorth) tra'n lleihau cyfran yr Adran Achosion Brys — cyfrifwch gost gyfan y system.
- **Prisio presenoldeb ar gost gyfartalog** pan nad yw costau sefydlog yr Adran Achosion Brys yn gostwng — gweler [cost ymylol yn erbyn cost gyfartalog](../marginal-vs-average-cost/).

## Ffynonellau

- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
