# Gwerth Bywyd Ystadegol (VSL)

Gwerth bywyd ystadegol (VSL) — a elwir yn "werth marwolaeth a atalwyd" (VPF) yn y DU — yw'r swm y mae *poblogaeth* yn barod i'w dalu ar y cyd i leihau'r risg o un farwolaeth ystadegol, wedi'i ddeillio o astudiaethau cyfnewid cyflog-risg (faint o dâl ychwanegol y mae gweithwyr yn ei fynnu am swyddi mwy peryglus) ac arolygon dewis a ddatganwyd. Nid pris bywyd unrhyw unigolyn a adnabuwyd ydyw; mae'n gystrawen risg poblogaeth, ac mae angen i beiriannydd meddalwedd sy'n adeiladu systemau lleihau risg — algorithmau dosbarthu, dosbarthu ambiwlansys, monitro diogelwch — wybod ei fod yn dod o draddodiad damcaniaethol gwahanol i [drothwyon parodrwydd i dalu](../trothwyon-parodrwydd-i-dalu/).

## Pam mae hyn yn bwysig

VSL/VPF yw'r offeryn safonol ar gyfer ariannu gostyngiadau risg marwolaethau mewn dadansoddiad cost a budd rheoleiddiol: mae diogelwch trafnidiaeth, rheoleiddio amgylcheddol a rhai ymyriadau iechyd y cyhoedd i gyd yn rhedeg eu hachosion busnes drwyddo. Mae Llyfr Gwyrdd Trysorlys EF yn cyhoeddi ffigur VPF sy'n deillio o dystiolaeth marchnad lafur ac arolygon y DU, ac mae'r Adran Drafnidiaeth yn ei ddefnyddio'n uniongyrchol wrth asesu diogelwch ffyrdd. Mae hwn yn draddodiad prisio gwahanol mewn gwirionedd i fethodoleg QALY × trothwy parodrwydd i dalu: mae'r dull trothwy yn prisio enillion iechyd yn erbyn yr hyn y mae *cyllideb* iechyd yn ei gynhyrchu ar yr ymyl ar hyn o bryd, tra bod VSL/VPF yn prisio lleihau risg yn erbyn yr hyn y mae pobl mewn marchnad lafur neu arolwg yn datgelu y byddent yn ei dalu amdano. Nid yw'r ddau fframwaith bob amser yn ymarferol i'w cysoni, ac mae defnyddio'r ddau yn yr un achos heb gydnabod hynny yn wall dadansoddol cyffredin.

## Y Fathemateg

```
Marwolaethau a osgowyd = poblogaeth × lleihad_risg_fesul_person
  (mae lleihad_risg_fesul_person yn debygolrwydd, e.e. 0.000001 = lleihad
   o 1 mewn miliwn yn y risg marwolaethau blynyddol)

Budd marwolaethau ariannol = marwolaethau_a_osgowyd × gwerth_marwolaeth_a_atalwyd
```

## Enghraifft Waith

Mae rhanbarth o 800,000 o bobl yn elwa o ymyriad dosbarthu/dosbarthu digidol diogelwch ffyrdd sy'n lleihau risg marwolaethau blynyddol pob person 1 mewn miliwn (0.000001):

```
Marwolaethau a osgowyd = 800,000 × 0.000001 = 0.8
```

Gan ddefnyddio Gwerth Marwolaeth a Atalwyd y DU, £2,180,000 (ffigur Trysorlys EF/DfT, prisiau 2023/24 — mae'r Llyfr Gwyrdd yn ei ddiweddaru'n flynyddol, gwiriwch eto cyn dyfynnu mewn dadansoddiad byw):

```
Budd marwolaethau ariannol = 0.8 × £2,180,000 = £1,744,000/blwyddyn
```

Ychydig o dan £1.75 miliwn y flwyddyn o fudd marwolaethau ariannol, o leihad risg na fyddai'r rhan fwyaf o'r boblogaeth yr effeithir arni byth yn sylwi arno'n unigol.

## Cysylltiad Peirianneg Feddalwedd

Mae timau meddalwedd diogelwch-hanfodol — cadarnwedd dyfeisiau meddygol, meddalwedd cerbydau ymreolaethol, systemau rheoli diwydiannol — yn wynebu'r union broblem brisio hon wrth adeiladu'r achos cost a budd ar gyfer buddsoddiad diogelwch: sut ydych chi'n prisio "atal un methiant trychinebus" pan fo'r methiant yn brin, yn ddifrifol ac wedi'i wasgaru ar draws poblogaeth fawr o ddefnyddwyr? Mae VSL/VPF yn gynsail byd go iawn degawdau oed, wedi'i ddogfennu'n gyhoeddus, ar gyfer rhoi rhif ar leihad risg prin, difrifol, lefel poblogaeth — yr un siâp dadl â phrisio buddsoddiad SRE yn erbyn toriad trychinebus prin, dim ond gyda chanlyniad marwolaeth yn lle canlyniad amser segur.

## Peryglon

- **Trin VSL fel "pris bywyd a adnabuwyd"**: nid ydyw. Mae VSL/VPF yn gystrawen ystadegol poblogaeth sy'n deillio o gyfnewidiadau lleihau risg ar draws llawer o bobl, nid prisiad o fywyd neu farwolaeth unrhyw berson penodol.
- **Cyfrif dwbl yn erbyn cyfrifiad budd ariannol net sy'n seiliedig ar QALY**: mae defnyddio ffigur VSL/VPF a chyfrifiad QALY × trothwy ar wahân yn yr un achos, heb eu cysoni, yn cyfrif gwerth yr un marwolaethau a osgowyd ddwywaith yn dawel. Dewiswch un fframwaith ar gyfer achos penodol.
- **Trawsblannu amcangyfrif VSL ar draws cyd-destunau heb addasu**: mae VSL a ddeilliodd o farchnad lafur un wlad, neu o ddata cyflog-risg oedran gweithio, a gymhwysir heb addasu at gyd-destun incwm gwahanol neu boblogaeth wahanol (plant, pobl wedi ymddeol), yn fater methodolegol hirsefydlog, a ddadleuir mewn gwirionedd — nid un a ddatryswyd.

## Ffynonellau

- HM Treasury, The Green Book: Central Government Guidance on Appraisal and Evaluation — canllawiau atodol Gwerth Marwolaeth a Atalwyd (prisiau 2023/24; mae gwerthoedd y Llyfr Gwyrdd yn cael eu diweddaru'n flynyddol). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- US EPA, "Mortality Risk Valuation" (ar gyfer traddodiad VSL yr UD, a ddyfynnir er cyferbyniad â ffigur VPF y DU uchod). <https://www.epa.gov/environmental-economics/mortality-risk-valuation>
- Viscusi WK, Aldy JE. "The Value of a Statistical Life: A Critical Review of Market Estimates Throughout the World." J Risk Uncertain. 2003;27(1):5-76.
