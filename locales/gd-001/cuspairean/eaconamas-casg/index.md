# Eaconamas casg

Eaconamas eadar-theachd mus tachair no mus d’ fhàs galar. Tha an lorg cinn-naidheachd an aghaidh na tuigse: **cha shàbhail a’ mhòr-chuid de chasg airgead** – bidh e a’ ceannach slàinte aig deagh phrìs. Lorg anailis chomharraichte NEJM aig Cohen, Neumann agus Weinstein nach eil nas lugha na 20% de dh’eadar-theachdan casg a’ sàbhaladh cosgais lom; tha an còrr cosg-èifeachdach aig a’ char as fheàrr.

## Carson a tha e cudromach

Is e “bidh casg a’ sàbhaladh airgead” an tagradh meallta as trice ann am poileasaidh slàinte, agus bidh cùisean-gnìomhachais stèidhichte air a’ sgrios le eaconamaichean slàinte. An structar onarach: bidh casg a’ cosg airgead an-diugh (sgrùdadh shluagh slàn, làimhseachadh fhactaran cunnairt ann an daoine nach biodh a-riamh air tuiteam bochd) agus a’ tilleadh slàinte nas fhaide air adhart – mar as trice aig cosgais *mhath* gach QALY, uaireannan aig sàbhaladh, uaireannan aig droch phrìs. Is e fios dè an rèim anns a bheil thu an anailis. Tha an eadar-dhealachadh cudromach gu malairteach: bidh toradh casg air a reic mar “a’ sàbhaladh airgead don NHS” a’ cuireadh sgrùdadh air nach seas e; air a reic mar “a’ ceannach QALYan aig £4,000” faodaidh e buannachadh air na h-aon fhìrinnean. Faic [eadar-theachd nas tràithe](../eadar-theachd-nas-tràithe/) airson an tionndadh taobh a-staigh slighe. Mus cosg thu prògram casg, bidh [cuibhreann a thathar a’ cur às leth a’ mhòr-shluaigh](../cuibhreann-a-thathar-a-cur-às-leth-a-mhòr-shluaigh/) a’ freagairt na ceiste meudachaidh an toiseach – cia mheud den eallach galair targaid a dh’fhaodadh am fàctar cunnairt a tha am prògram a’ làimhseachadh a chur às.

## A’ mhatamataig

```
Cosgais lom casg (gach neach) =
    cosgais eadar-theachd × a h-uile duine air an làimhseachadh
  − cosgaisean sìos-an-t-srutha air an seachnadh × an fheadhainn bheaga a bhiodh air fàs
  (an dà chuid lasaichte — tha na cosgaisean seachnaidh bliadhnaichean air falbh; faic
   discounting-and-time-preference.md)

Feumaidh sàbhaladh cosgais: cosgais eadar-theachd < P(adhartas) × cosgais seachnaidh × factar lasachaidh
Feumaidh cosg-èifeachdas a-mhàin: cosgais lom / QALYan buannaichte < stairsneach
```

Paradocs casg: bidh cosgais eadar-theachd a’ iomadachadh thar a’ mhòr-shluaigh gu lèir; bidh buannachdan a’ tighinn dìreach don fheadhainn bheaga an aghaidh-fhìrinn.

## Eisimpleir obrach

Aplacaid riaghlaidh cuideam-fala àrd air a thabhann do 100,000 inbheach ann an cunnart, £25/neach/bliadhna. Thar 10 bliadhna bidh e a’ seachnadh 400 stròc (gach fear a’ cosg £45,000 lasaichte, agus 3 QALYan caillte).

```
Cosgais: 100,000 × £25 × 10 bliadhna (lasaichte ≈ ×8.3) ≈ £20.8M
Cothromachaidhean: 400 × £45,000 = £18.0M
Cosgais lom ≈ £2.8M — CHAN EIL e a’ sàbhaladh cosgais

QALYan buannaichte = 400 × 3 = 1,200
Cosgais gach QALY = 2.8M / 1,200 ≈ £2,300/QALY — air leth cosg-èifeachdach
```

An aon phrògram, an dà fhìrinn: bidh e a’ call £2.8M ann an airgead agus a’ ceannach slàinte aig an deicheamh cuid de stairsneach NICE. Maoinich e air an dàrna àireamh; na geall a-chaoidh a’ chiad fhear.

## Ceangal ri einnseanaireachd bathar-bog

Is e eaconamas casg a th’ ann an càileachd shift-left, leis an rabhadh a-staigh. Bidh lèirmheasan, deuchainnean, agus anailis statach a’ cur cosgais air *gach* atharrachadh gus duilgheadasan a ghlacadh anns an fheadhainn bheaga a bhiodh air fàs gu tachartasan cinneasachaidh. Bidh lùb cosgais lochdan (10–100× a rèir ìre) a’ cluich pàirt cosgaisean stròc – agus tha an co-dhùnadh onarach a’ nochdadh slàinte: mar as trice tha shift-left cosg-*èifeachdach*, chan e sàbhaladh cosgais gu fèin-obrach, oir cha bhiodh a’ mhòr-chuid de dhuilgheadasan a chaidh a chomharrachadh air fàs gu tachartasan (duilgheadas na feadhna beaga an aghaidh-fhìrinn). Obraich a-mach e: cosgais gheata iomlan gach ùine an aghaidh tachartasan a chaidh a sheachnadh gu fìor × cosgais tachartais – an aon structar eisimpleir obrach, le [NNT](../àireamh-a-dh-fheumar-a-làimhseachadh/) mar an t-aonad gach glacaidh.

## Cunnartan

- **A’ tagradh sàbhalaidhean cosgais nuair a tha an fhianais a’ toirt taic do chosg-èifeachdas** – mearachd mìneachaidh tagradh casg anns an dà raon.
- **Cothromachaidhean san àm ri teachd gun lasachadh**: buannachdan 15 bliadhna air falbh aig làn-luach.
- **A’ dearmad cosgaisean cus-dhiagnosis/cus-làimhseachaidh**: lorgaidh casg cuideachd fàs-ghalar – faic [eaconamas sgrùdaidh](../eaconamas-sgrìonaidh/).

## Stòran

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- Masters R, et al. "Return on investment of public health interventions." JECH 2017. <https://pmc.ncbi.nlm.nih.gov/articles/PMC5537512/>
