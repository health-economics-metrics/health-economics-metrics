# Efelychu Carfan Markov

Model carfan Markov yw'r dechneg fodelu HTA safonol ar gyfer ymyriadau y mae eu heffeithiau'n datblygu dros gyfnodau amser lluosog (cylchoedd), nid mewn un ergyd. Mae carfan ddamcaniaethol yn dechrau'n gyfan gwbl mewn un cyflwr iechyd, ac ym mhob cylch mae set sefydlog o debygolrwyddau trawsnewid yn symud ffracsiynau o'r garfan rhwng cyflyrau; mae costau a QALYs yn cronni ym mhob cylch yn gymesur â faint o'r garfan sy'n meddiannu pob cyflwr, ac yn cael eu disgowntio'n ôl i werth presennol. Mae unrhyw beiriannydd meddalwedd sy'n modelu achos busnes iechyd digidol aml-flwyddyn — lle mae defnyddwyr neu gleifion yn symud rhwng cyflyrau fel "ymgysylltiedig", "wedi cwympo allan" neu "wedi gadael" dros amser — yn adeiladu'r un strwythur.

## Pam mae hyn yn bwysig

Nid cymariaethau un-ergyd o gost a chanlyniad un cyfnod yw'r rhan fwyaf o benderfyniadau technoleg iechyd go iawn. Mae cyflwr cronig yn datblygu, yn ailymddangos, yn ymateb i driniaeth, neu'n lladd, dros flynyddoedd — ac ni all [dadansoddiad costeffeithiolrwydd](../dadansoddiad-costeffeithiolrwydd/) un cyfnod gynrychioli hynny. Mae cyflwyniadau NICE, ICER a CADTH ar gyfer ymyriadau clefydau cronig, a aseswyd trwy [asesiad technoleg iechyd](../asesiad-technoleg-iechyd/), bron bob amser wedi'u hadeiladu fel modelau carfan Markov gydag gorwel amser oes, oherwydd bod yr dewis arall — modelu pob llwybr claf unigol posibl — yn anhydrin ar raddfa. Mae'r model Markov lefel carfan yn cyfnewid peth realaeth lefel unigolyn (ni all gynrychioli cof am gyflyrau blaenorol yn hawdd, a dyna pam "Markov": mae'r dyfodol yn dibynnu ar y cyflwr presennol yn unig) am fodel sy'n dryloyw, yn archwiliadwy ac yn ddigon cyflym i'w redeg filoedd o weithiau mewn [dadansoddiad sensitifrwydd tebygolyddol](../dadansoddiad-sensitifrwydd-tebygolyddol/).

## Y Fathemateg

```
Diweddariad carfan un cylch (fector rhes × matrics trawsnewid):
  cyflwr_newydd[j] = swm_i cyflwr[i] * matrics_trawsnewid[i][j]

Cost un cylch:
  cost_cylch = swm_s cyflwr[s] * cost_fesul_cylch[s]

QALYs un cylch:
  qalys_cylch = swm_s cyflwr[s] * cyfleustod[s] * hyd_cylch_blynyddoedd

Efelychiad llawn dros `cylchoedd` cylch, wedi'i ddisgowntio ar `cyfradd_disgownt`:
  cyfanswm_cost_disgowntiedig  = swm_{t=0}^{cylchoedd-1} cost_cylch(cyflwr_t)  / (1 + cyfradd_disgownt)^t
  cyfanswm_qalys_disgowntiedig = swm_{t=0}^{cylchoedd-1} qalys_cylch(cyflwr_t) / (1 + cyfradd_disgownt)^t
  lle cyflwr_0 = dosbarthiad_cychwynnol, cyflwr_{t+1} = symud_carfan_ymlaen(cyflwr_t, matrics_trawsnewid)
```

Mae disgowntio pob cylch yn ôl i werth presennol yn defnyddio'n union fformiwla [disgowntio a ffafriaeth amser](../disgowntio-a-ffafriaeth-amser/), wedi'i chymhwyso cylch wrth gylch yn lle blwyddyn wrth flwyddyn.

## Enghraifft Waith

**Clinigol**: model 2 gyflwr — `Iach` a `Marw` — lle mae 10% o'r garfan yn marw bob cylch ac mae `Marw` yn amsugnol (ei debygolrwydd hunan-drawsnewid yw 1.0; byddai hepgor y ddolen honno'n gwneud i fàs y garfan ddiflannu ar ôl un cylch yn `Marw`). Mae'r garfan yn dechrau'n gyfan gwbl `Iach`, yn costio £1,000 y cylch tra'n `Iach` (£0 unwaith yn `Marw`), ac yn ennill 0.8 QALY y flwyddyn tra'n `Iach`. Wedi'i efelychu am 3 cylch blynyddol ar gyfradd ddisgownt 3.5% NICE:

```
Cylch 0: cyflwr = [1.00, 0.00] (100% Iach)
  cost = £1,000.00, qalys = 0.800, ffactor disgownt = 1.000000
  disgowntiedig: cost = £1,000.00, qalys = 0.8000

Cylch 1: cyflwr = [0.90, 0.10] (90% Iach, 10% Marw)
  cost = £900.00, qalys = 0.720, ffactor disgownt = 0.966184
  disgowntiedig: cost = £869.57, qalys = 0.6957

Cylch 2: cyflwr = [0.81, 0.19] (81% Iach, 19% Marw)
  cost = £810.00, qalys = 0.648, ffactor disgownt = 0.933511
  disgowntiedig: cost = £756.14, qalys = 0.6049

Cyfanswm cost disgowntiedig  ≈ £2,625.71
Cyfanswm QALYs disgowntiedig ≈ 2.1006
```

Cyflwr pob cylch yw cyflwr y cylch blaenorol wedi'i gario drwy'r matrics trawsnewid — mae 90% o'r 90% sy'n dal yn `Iach` yng nghylch 1 yn aros yn `Iach` yng nghylch 2 (0.9 × 0.9 = 0.81), tra bod y 19% arall bellach wedi marw (0.9 × 0.1 + 0.1 × 1.0 = 0.19). Sylwch nad yw'r garfan byth yn gwagio `Iach` yn llwyr: gyda marwolaethau cyson o 10% y cylch a dim ail-fynediad, mae'r ffracsiwn `Iach` yn pydru'n geometrig yn hytrach na tharo sero ar unrhyw nifer meidraidd o gylchoedd.

## Cysylltiad Peirianneg Feddalwedd

I weld sut mae model HTA aml-gylch yn cael ei ddefnyddio mewn asesiad go iawn, gweler [asesiad technoleg iechyd](../asesiad-technoleg-iechyd/) — yr achos cyfeirio sy'n llywodraethu pa gyfradd ddisgownt, ffynhonnell cyfleustod a gorwel amser y mae'n rhaid i fodel Markov a gyflwynir eu defnyddio.

Mae model carfan Markov yn strwythurol yn beiriant cyflwr gyda throsiannau tebygolyddol, wedi'i redeg am nifer sefydlog o dicio, gan ddisgowntio gwerth pob ticio. Mae'r un siâp yn efelychu trawsnewidiadau cadw/cyflwr carfan defnyddwyr dros amser — gweler [metrigau DORA](../metrigau-dora/) am fersiwn dibynadwyedd gweithredol "pa ffracsiwn o'r system sydd mewn cyflwr diraddiedig y cyfnod hwn, a beth mae hynny'n ei gostio". Yn benodol:

- **Mae modelu cadw/colli** yn fodel carfan Markov gyda chyflyrau fel "gweithredol", "mewn perygl", "wedi gadael": mae matrics trawsnewid misol sefydlog, wedi'i redeg am 12 neu 24 cylch misol, yn dweud wrthych nifer disgwyliedig y defnyddwyr gweithredol (a'r refeniw) mewn unrhyw fis yn y dyfodol, yn yr un modd ag y mae `Iach`/`Marw` yn dweud wrthych y goroeswyr disgwyliedig.
- **Dibynadwyedd ac economeg digwyddiadau**: gellir modelu cyflyrau system (iach, diraddiedig, i lawr) yn yr un modd, gyda "chost fesul cylch" o niwed amser segur yn cronni tra bod y system yn meddiannu'r cyflyrau diraddiedig/i lawr — gan droi dadl amlder digwyddiadau yn ddadl cost ddisgowntiedig y gellir ei chymharu â chost y gwaith dibynadwyedd a fyddai'n newid y tebygolyddion trawsnewid.
- **Cyflyrau amsugnol fel cyflyrau terfynol**: mae `Marw` mewn model clinigol yn union fel "tanysgrifiad wedi'i ganslo" neu "all-lein yn barhaol" mewn model meddalwedd — mae'r ddau angen tebygolrwydd hunan-drawsnewid penodol o 1.0, neu mae'r efelychiad yn colli màs yn dawel.

## Peryglon

- **Tebygolyddion trawsnewid nad ydynt yn adio i 1 fesul rhes.** Mae rhes sy'n adio i fwy neu lai nag 1 yn gwneud i'r garfan "ollwng" neu "dyfu" màs yn dawel bob cylch — gwiriwch symiau rhesi bob amser cyn ymddiried yn allbwn model, gan nad yw strwythur y model ei hun yn nodi'r gwall.
- **Hyd cylch yn rhy fras ar gyfer dynameg wirioneddol y clefyd.** Mae cylch blynyddol ar gyfer cyflwr sy'n newid cyflwr yn sylweddol o fewn wythnosau yn tanamcangyfrif trawsnewidiadau sy'n digwydd ynghanol y cylch; dewiswch hyd cylch sy'n fyr o gymharu â pha mor gyflym y mae'r broses a fodelir yn symud mewn gwirionedd.
- **Anghofio dolen hunan cyflwr amsugnol.** Mae cyflwr amsugnol (marwolaeth, rhoi'r gorau'n barhaol) angen tebygolrwydd hunan-drawsnewid o union 1.0. Os caiff ei hepgor, mae màs y garfan yn y cyflwr hwnnw'n anweddu ar ôl un cylch, gan danamcangyfrif costau cronnus neu golled QALY.
- **Trin y model fel un wedi'i ddilysu am ei fod yn rhedeg.** Gall model carfan Markov â thebygolyddion trawsnewid sy'n edrych yn gredadwy fod yn anghywir yn strwythurol o hyd (cyflyrau ar goll, ymddygiad amsugnol anghywir); dilyswch yn erbyn meincnodau epidemiolegol hysbys (e.e. a yw'r goroesiad a fodelir ar 5 mlynedd yn cyfateb i gromliniau goroesi a gyhoeddwyd) cyn ymddiried yn yr allbwn.

## Ffynonellau

- Sonnenberg FA, Beck JR. "Markov models in medical decision making: a practical guide." Medical Decision Making. 1993;13(4):322-38. <https://pubmed.ncbi.nlm.nih.gov/8246705/>
- Briggs A, Sculpher M. "An introduction to Markov modelling for economic evaluation." PharmacoEconomics. 1998;13(4):397-409. <https://pubmed.ncbi.nlm.nih.gov/10178664/>
