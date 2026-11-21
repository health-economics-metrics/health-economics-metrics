# EQ-5D

Is e EQ-5D ceisteachan àbhaisteach buidheann EuroQol airson càileachd beatha co-cheangailte ri slàinte a thomhas. Is e an t-inneal a bheir cuideaman feumalachd taobh a-staigh a’ mhòr-chuid de dh’àireamhachaidhean [QALY](../bliadhna-beatha-le-atharrachadh-càileachd/) – tha iuchair-chùis NICE ga ainmeachadh mar an tomhas as fheàrr le inbhich.

## Carson a tha e cudromach

Feumaidh toradh slàinte didseatach sam bith a tha ag iarraidh QALY a thagradh goireasan bho ionnstramaid dhearbhte, agus is e EQ-5D an roghainn bhunaiteach san RA agus ann am mòran den Roinn Eòrpa. Tha e goirid gu leòr airson a bhith air a chur ann an app (5 ceistean + sgèile lèirsinneach), a tha a’ ciallachadh gun urrainn do thoraidhean bathar-bog dàta builean ìre-HTA a chruinneachadh mar thaobh-bhuaidh cleachdaidh àbhaisteach – buannachd structarail thairis air cungaidhean, a dh’fheumas sgrùdaidhean sònraichte.

## A’ mhatamataig

Bidh EQ-5D-5L a’ faighneachd aon cheist ann an gach **5 meud** – gluasad, fèin-chùram, gnìomhan àbhaisteach, pian/mì-chofhurtachd, iomagain/trom-inntinn – gach fear air a fhreagairt aig **5 ìrean** (gun duilgheadasan … duilgheadasan fìor-mhòra), a bharrachd air sgèile analach lèirsinneach 0–100 (EQ VAS).

```
Staid slàinte = pròifil 5-àireamh, m.e. “21221”
Clàr-amais goireis = value_set(pròifil)

Tha an seata luach sònraichte do dhùthaich, a’ tighinn bho sgrùdaidhean time-trade-off /
roghainn-discrete den phobaill san fharsaingeachd. Acraichean: 1 = làn-shlàinte,
0 = marbh; tha staidean nas miosa na bàs àicheil (làr seata UK 3L: −0.594).
```

An uairsin bidh àireamhachadh QALY a’ dol air adhart mar `faid × goireas`.

## Eisimpleir obrach

Bidh app ath-ghnàthachaidh matharraidh-chnàmh-fèithe a’ tomhas EQ-5D-5L aig tòiseachadh agus aig 6 mìosan do 1,000 neach-cleachdaidh a chrìochnaich.

```
Goireas cuibheasach aig bunait: 0.62
Goireas cuibheasach aig 6 mìosan: 0.71
Buannachd air a chumail (barail) 1 bhliadhna: (0.71 − 0.62) × 1.0 = 0.09 QALY gach neach-cleachdaidh
```

An aghaidh atharrachadh buidhne smachd de 0.03 (ath-bheothachadh nàdarra), is e a’ bhuannachd a ghabhas a thoirt dha 0.06 QALY/neach-cleachdaidh. Air a chur ann an airgead aig £20,000–£30,000/QALY: **£1,200–£1,800 de luach slàinte gach neach-cleachdaidh crìochnaichte** – an àireamh a tha ag acair co-rèiteachadh prìs an app le neach-pàighidh. (Tha eadar-dhealachaidhean clionaigeach cudromach as lugha airson clàr-amais EQ-5D gu cumanta anns an raon 0.03–0.08, mar sin tha 0.06 reusanta ach feumaidh e a’ chùis a dhèanamh air coimeas smachd; faic [builean aithriseach euslaintich](../builean-air-an-aithris-le-euslaintich/).)

## Ceangal ri einnseanaireachd bathar-bog

- **Cuir an ionnstramaid an sàs.** Tha EQ-5D aig clàradh agus aig amannan leantainneach nan beagan sgàilean UI; is e an toradh fianais ìre-HTA. Faigh cead bho EuroQol (riatanach, an-asgaidh airson cuid de chleachdaidhean).
- **Cleachd an seata luach ceart** airson na dùthcha cleachdaidh – bidh na h-aon fhreagairtean a’ sgòradh eadar-dhealaichte san RA an aghaidh na Gearmailt an aghaidh Iapan.
- **Leasan dealbhaidh**: bidh EQ-5D a’ sealltainn mar a bheir sgrùdadh beag àbhaisteach a bharrachd air gnìomh sgòraidh foillsichte clàr-amais singilte so-choimeasach. Is e sin am pàtran airson clàr-amais eòlas-luchd-leasachaidh dìonach cuideachd – ionnstramaid àbhaisteach, cuideaman foillsichte, chan e faireachdainnean ad hoc. Faic [SPACE agus DevEx](../space-agus-devex/).

## Cunnartan

- **Ro/às dèidh gun choimeas** – bidh tilleadh chun mheadhan agus ath-bheothachadh nàdarra a’ cur barrachd air buannachdan sìmplidh.
- **Claonadh neach-mairsinn**: a’ tomhas luchd-cleachdaidh a dh’fhan com-pàirteach a-mhàin (faic [cumail is call luchd-cleachdaidh](../cumail-air-cleachdaichean-agus-call-chleachdaichean/)).
- **A’ measgachadh dreachan no seataichean luach 3L agus 5L** thar sgrùdaidhean – àireamhan gu rianail eadar-dhealaichte.
- **Buaidhean mullaich** ann an sluagh le buaidh bhog: bidh mòran luchd-cleachdaidh a’ sgòradh faisg air 1.0 aig bunait, gun rùm airson buannachd a shealltainn.
- **A’ làimhseachadh seata luach mar fhèin-dhearbhaidh**: chaidh na h-àireamhan goireis a thilleas seata luach fhèin a tharraing bhon phobaill tro shrùdaidhean time-trade-off (no co-cheangailte stèidhichte air roghainn) – faic [Elicitation goireas Time Trade-Off (TTO)](../togail-luach-fheumalachd-malairt-ùine/) airson mar a thèid sin.

## Stòran

- EuroQol: EQ-5D-5L. <https://euroqol.org/information-and-support/euroqol-instruments/eq-5d-5l/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
