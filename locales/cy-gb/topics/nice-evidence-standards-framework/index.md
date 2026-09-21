# Fframwaith Safonau Tystiolaeth NICE (ESF)

Yr ESF yw fframwaith NICE sy'n nodi **faint o dystiolaeth sydd angen ar dechnoleg iechyd digidol, yn gymesur â'i risg**. Dyma'r peth agosaf at ateb swyddogol i "beth sy'n rhaid i ni ei brofi cyn i'r GIG brynu ein ap?"

## Pam mae hyn yn bwysig

Mae'r ESF (a ryddhawyd gyntaf yn 2019, wedi'i ddiweddaru yn 2022 i gwmpasu AI ac algorithmau addasol) yn dosbarthu technolegau iechyd digidol yn haenau yn ôl swyddogaeth glinigol, gyda safonau tystiolaeth **cronnus** — 21 safon ar draws 5 grŵp (ffactorau dylunio, gwerth, perfformiad/effeithiolrwydd, effaith economaidd, defnyddio):

```
Haen A — gwasanaethau system, dim canlyniad claf uniongyrchol (e.e., e-restru)
         → safonau sylfaenol: hygrededd, diogelu data, sicrwydd technegol
Haen B — hysbysu, monitro syml, cyfathrebu (e.e., dyddiadur symptomau)
         → + tystiolaeth o fudd i'r defnyddiwr, dibynadwyedd priodol
Haen C — trin, diagnosio, neu arwain rheolaeth glinigol yn weithredol
         → + tystiolaeth effeithiolrwydd cymharol o safon uchel (RCT yn
           ddelfrydol) a dadansoddiad economaidd
```

Ar gyfer tystiolaeth economaidd, mae [dadansoddiad canlyniad cost](../cost-consequence-analysis/) yn dderbyniol ar gyfer y rhan fwyaf o haenau; disgwylir [dadansoddiad cost-ddefnyddioldeb](../cost-utility-analysis/) ar y risg uchaf. Mae'r ESF yn diffinio eich **cost tystiolaeth mynediad i'r farchnad** — cyllidebwch ar ei chyfer fel unrhyw gost adeiladu arall.

## Y Fathemateg

Dim fformiwlâu — tabl penderfynu. Mae'r cyfrifiad gweithredol yn fasnachol:

```
Buddsoddiad tystiolaeth angenrheidiol = f(haen)
  Haen A: dogfennaeth + sicrwydd ≈ £10k–50k
  Haen B: astudiaeth arsylwadol/gymharol o fudd defnyddiwr ≈ £50k–250k
  Haen C: astudiaeth gymharol radd-RCT + model economaidd ≈ £250k–£2M+

Safbwyntiwch honiadau eich cynnyrch yn fwriadol: mae honni "cefnogi
penderfyniadau clinigol" yn hytrach na "hysbysu cleifion" yn eich symud
haen ac yn gallu 10× y bil.
```

## Enghraifft Waith

Mae gwneuthurwr ap atgoffa meddyginiaeth yn ystyried ychwanegu nodwedd argymhelliad addasu dos.

- Fel ap atgoffa: **Haen B** — mae astudiaeth garfan sy'n dangos gwelliant cydymffurfiaeth yn ddigonol.
- Gydag argymhellion dos: **Haen C** — tystiolaeth effeithiolrwydd cymharol (RCT yn ôl pob tebyg yn erbyn gofal arferol) ynghyd â dadansoddiad economaidd.

Os yw'r RCT yn costio £600k a bod refeniw cynyddrannol y nodwedd dos yn £200k/blwyddyn, rhaid i'r nodwedd ddal gwerth am 3+ blynedd cyn i gostau tystiolaeth doriad-hafal. Penderfyniad cynnyrch sy'n edrych yn gwbl wahanol pan fo haen ESF wedi'i brisio i mewn. Mae llawer o dimau'n llongio'r cynnyrch Haen B ac yn llwyfannu'r honiad Haen C y tu ôl i ariannu.

## Cysylltiad Peirianneg Feddalwedd

Yr ESF yw'r patrwm llywodraethu unigol mwyaf trosglwyddadwy yn y repo hwn: **gofynion tystiolaeth wedi'u haenu yn ôl risg ar gyfer mabwysiadu offer**. Fersiwn fewnol: mae fformatydd cod angen dangosiad (Haen A); mae offeryn cynhyrchedd sy'n hawlio oriau wedi'u harbed angen peilot wedi'i fesur (Haen B); mae angen tystiolaeth radd-treial-reoledig ar borth AI sy'n awtomatig-rwystro defnyddiadau neu'n awtomatig-ysgrifennu cod clinigol cyn ei gyflwyno'n sefydliadol-eang (Haen C). Mae tystiolaeth gymesur yn atal y ddau fodd methiant — biwrocratiaeth yn tagu offer dibwys, a llongio ar sail teimlad offer canlyniadol. Gweler hefyd [llwybr cyflym DiGA](../diga-fast-track/) am y cyflenwad "mabwysiadu dros dro gyda therfyn amser tystiolaeth".

## Peryglon

- **Camddosbarthu haen drwy feddwl gobeithiol** — mae rheoleiddwyr a phrynwyr yn dosbarthu yn ôl yr hyn y mae'r cynnyrch yn ei *wneud*, nid yr hyn y mae'r farchnata'n ei ddweud.
- **Tystiolaeth wedi'i hadeiladu ar ôl y cynnyrch**: mae ôl-osod RCT ar gynnyrch a longiwyd heb offeryniaeth na chydbwysedd yn araf ac yn aml yn amhosibl.
- **Bodloni'r ESF ac anghofio'r gweddill**: mae'r ESF yn eistedd ochr yn ochr â DTAC (diogelwch clinigol, diogelu data, rhyngweithredu) ac, ar gyfer AI, clirio rheoleiddiol — gweler [gwerthusiad rheoleiddiol AI](../ai-regulatory-evaluation/).

## Ffynonellau

- Fframwaith Safonau Tystiolaeth NICE (ECD7). <https://www.nice.org.uk/corporate/ecd7>
- Tablau safonau tystiolaeth ESF. <https://www.nice.org.uk/corporate/ecd7/chapter/section-c-evidence-standards-tables>
