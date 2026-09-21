# Ffordd o Fesur Buddsoddiad AI (ROI)

ROI AI yw'r elw mesuradwy ar elw a cholled y gellir ei briodoli i fentrau AI. Y meincnod sobreiddiol: canfu ymchwil "GenAI Divide" MIT 2025, er gwaethaf $30–40B o fuddsoddiad GenAI mentrus, na ddangosodd **~95% o'r peilotiaid unrhyw elw elw a cholled mesuradwy** — ac roedd yr 5% llwyddiannus yn rhannu arferion adnabyddadwy.

## Pam mae hyn yn bwysig

Mae gan systemau iechyd enw ar y patrwm peilot-AI: **peilotitis** — mynwent y GIG o apiau addawol a beilotiwyd am byth ac na chawsant eu graddfa erioed. Mae canfyddiadau MIT yn mapio'n lân ar yr hyn y mae asesu technoleg iechyd eisoes yn ei wybod: mae angen pwyntiau terfyn wedi'u pennu ymlaen llaw ar honiadau gwerth, mae angen cymharyddion ar briodoliad, ac nid yw "mae pawb yn teimlo ei fod yn helpu" yn llinell fudd. Roedd y lleiafrif llwyddiannus yn nata MIT wedi'u crynhoi mewn awtomeiddio swyddfa gefn gyda llinellau sylfaen cost y gellir eu holrhain, a **llwyddodd offer a brynwyd ~67% o'r amser o'i gymharu ag adeiladu mewnol ar tua thraean o'r gyfradd honno** — blaenoriaethau sy'n perthyn ym mhob achos buddsoddi AI (gweler [adeiladu yn erbyn prynu](../build-vs-buy/)).

## Y Fathemateg

```
ROI AI = (budd priodoladwy − cost AI gyfanswm) / cost AI gyfanswm

Cost AI gyfanswm = trwyddedau/casgliad (gweler inference-unit-economics.md)
              + integreiddio + parodrwydd data + gwerthuso
              + ailddylunio llif gwaith + llywodraethu/sicrwydd
              (mae'r drwydded fel arfer yn y lleiafrif o'r enwadur)

Budd priodoladwy: wedi'i fesur yn erbyn llinell sylfaen neu reolaeth, wedi'i ddosbarthu
arian parod / capasiti / ansawdd yn ôl cash-releasing-vs-non-cash-releasing.md
```

## Enghraifft Waith

Mae grŵp ysbytai'n defnyddio AI ar gyfer dau achos defnydd:

```
Achos defnydd A — drafftio llythyrau clinigol (swyddfa gefn, y gellir ei olrhain):
  llinell sylfaen: trawsgrifio wedi'i allanoli £380k/flwyddyn
  wedi hynny: contract trawsgrifio wedi'i ganslo; amser adolygu clinigwr +£60k
  cost AI:  £120k/flwyddyn i gyd
  ROI = (380k − 60k − 120k) / 120k ≈ 167% — yn rhyddhau arian parod, y gellir ei archwilio ✓

Achos defnydd B — "cyd-beilot AI ar gyfer clinigwyr" (eang, heb ei olrhain):
  honiad budd: "yn arbed amser ar draws 4,000 o staff" — dim llinell sylfaen wedi'i chofnodi
  effaith elw-a-cholled wedi'i mesur: dim un y gellir ei ddangos
  → y bwced 95%, ni waeth a yw'n helpu mewn gwirionedd
```

Nid ansawdd yr AI yw'r gwahaniaeth — a oedd gan y budd **linell sylfaen, perchennog, a llinell gyllideb** ([gwireddu buddion](../benefits-realization/)) sy'n cyfrif.

## Cysylltiad Peirianneg Feddalwedd

Y llawlyfr ar siâp HTA ar gyfer buddsoddiad AI: **cyfnodwch y dystiolaeth fel [haenau NICE ESF](../nice-evidence-standards-framework/)** — tystiolaeth radd-arddangos ar gyfer offer risg isel, peilotiaid rheoledig cyn gwariant sefydliad gyfan, gyda phyrth cyflwyno wedi'u cofrestru ymlaen llaw (patrwm rhestru-dros-dro-gyda-therfyn-amser [DiGA](../diga-fast-track/)); **cyfrifwch osgoi cost fel y mae economeg iechyd yn cyfrif osgoi galw** — dim ond yn real pan fydd llinell gyllideb benodol yn symud; a **phrisiwch y peilot ei hun â [EVPI](../expected-value-of-perfect-information/)** — mae peilot na all newid y penderfyniad cyflwyno yn werth £0. Ar gyfer y darn offer datblygwyr yn benodol, gweler [cynhyrchiant datblygwyr AI](../ai-developer-productivity/).

## Peryglon

- **Gwasgariad budd**: mae gwerth wedi'i wasgaru'n denau ar draws miloedd o ddefnyddwyr yn amhosibl ei fesur wrth ei natur; dewiswch achosion defnydd â llinellau sylfaen crynodedig, y gellir eu holrhain.
- **Costio trwyddedau'n unig**: fel arfer mae integreiddio, gwerthuso, ac ailddylunio llif gwaith yn dominyddu'r gwir enwadur.
- **Lladrad priodoliad**: mae AI a ddefnyddir ochr yn ochr ag ailddylunio proses yn hawlio'r gwahaniaeth cyfan.
- **Dwysáu peilot suddedig**: ymestyn peilotiaid aflwyddiannus am fod stopio'n cyfaddef methiant — rhaid cytuno ar y dyddiad machlud ymlaen llaw.

## Ffynonellau

- Cynnwys "GenAI Divide" Project NANDA MIT. <https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/>
- Crynodeb canfyddiadau ROI GenAI MIT. <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- MIT Technology Review, dod o hyd i ROI ar fuddsoddiadau AI. <https://www.technologyreview.com/2025/10/28/1126693/finding-return-on-ai-investments-across-industries/>
