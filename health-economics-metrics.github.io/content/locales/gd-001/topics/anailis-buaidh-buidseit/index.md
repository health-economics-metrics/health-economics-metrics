# Anailis buaidh buidseit (BIA)

Bidh BIA a’ meas dè a nì gabhail ri eadar-theachd air **buidseat** neach-pàighidh sònraichte thar na 1–5 bliadhna ri teachd. Bidh e a’ freagairt *so-phàighidh*; bidh cosg-èifeachdas a’ freagairt *luach*. Faodaidh teicneòlas a bhith sàr-mhath airson luach agus fhathast do-phàighte – no so-phàighte agus droch luach. Feumaidh measaidhean dhaibhsan an dà chuid.

## Carson a tha e cudromach

Chan e “dè an ICER?” ceist an stiùiriche ionmhais a-chaoidh – is e “dè a nì seo air buidseat an ath-bhliadhna?”. Tha stiùireadh deagh-chleachdaidh ISPOR (àbhaisteach an raoin) a’ sònrachadh: sealladh an neach-pàighidh fhèin, crìoch-ùine 1–5 bliadhna, sruthan airgid bliadhnail *gun lasachadh*, lùban gabhail ris reusanta, agus mì-chinnt suidheachaidh (chan e coltais). Feumaidh NICE fiosrachadh buaidh buidseit còmhla ri cosg-èifeachdas; bidh toradh le buaidh buidseit nàiseanta os cionn ~£20M/bliadhna sa Bhreatainn a’ cur dealbh-tairgsean malairteach air bhog ge bith dè an ICER.

## A’ mhatamataig

```
BI_bliadhna_t = Cosgais_suidheachadh_leis_an_fhear_ùr(t) − Cosgais_suidheachadh_làithreach(t)

Cosgais_suidheachadh(t) = Σ thairis air buidhnean euslaintich:
   sluagh ion-roghnaichte(t) × gabhail ris(t) × cosgais ghlan gach euslaintich(t)

cosgais ghlan gach euslaintich = cosgais eadar-theachd − cosgais cùraim a chaidh a chur an àite + cosgais cùraim a chaidh a bhrosnachadh
```

Prìomh roghainnean modaileadh: fàs sluaigh ion-roghnaichte, lùb gabhail ris (chan eil gabhail ris a-chaoidh sa bhad), dè a chuireas an roghainn ùr an àite, agus iarrtas sam bith a *bhrosnaicheas* e (ruigsinneachd nas fhasa → barrachd luchd-cleachdaidh).

## Eisimpleir obrach

Tha neach-pàighidh a’ còmhdachadh 2M neach a’ beachdachadh air leigheas didseatach aig £300/euslainteach/bliadhna; 1.5% de bhuill ion-roghnaichte (30,000); gabhail ris 20% → 40% → 60% thar 3 bliadhna; bidh gach neach-cleachdaidh a’ cur £120/bliadhna de chùram eile an àite.

```
Cosgais ghlan gach neach-cleachdaidh = 300 − 120 = £180

Bliadhna 1: 30,000 × 0.20 × 180 = £1.08M
Bliadhna 2: 30,000 × 0.40 × 180 = £2.16M
Bliadhna 3: 30,000 × 0.60 × 180 = £3.24M
```

Fiù ’s ma tha ICER an toraidh sàr-mhath aig £8,000/QALY, feumaidh an neach-pàighidh £3.24M de *dh’airgead ùr* a lorg ro bhliadhna 3 – tha na £120 a chaidh a chur an àite sgaoilte tana thar loidhnichean buidseit eile agus cha tèid an leigeil ma sgaoil mar airgead (faic [a’ leigeil a-mach airgead an aghaidh nach eil](../sàbhalaidhean-a-leigeil-a-mach-airgead-an-aghaidh-nach-eil/)). Is e sin carson a tha luach gach aonaid agus so-phàighteachd nan cnapan-starra air leth.

## Ceangal ri einnseanaireachd bathar-bog

Is e BIA dìreach an co-phàirt a tha an aghaidh CFO do thagradh ROI gach cathair: “tha e cosg-èifeachdach gach leasaiche, ach an urrainn dhuinn sgaoileadh air feadh na buidhne a phàigheadh am-bliadhna ionmhasail?” Modail ìrean cead, lùb-S gabhail ris, caitheamh innealan a chaidh a chur an àite nach leig ma sgaoil airgead ach nuair a chrìochnaicheas seann chùmhnantan dha-rìribh, agus cleachdadh brosnaichte (CI nas saoire → barrachd CI). Is e a bhith a’ taisbeanadh clàr buaidh buidseit 3-bliadhna ri taobh an ROI a nì moladh innealan iomairt so-chreidsinneach ionmhais. Is e a bhith a’ sgoltadh iomlan buaidh buidseit foillsichte thar làraich, buidhnean, no bliadhnaichean ionmhais – le na pàirtean a’ rèiteachadh gu mionaideach ris an fhigear fhoillsichte – dìreach [riarachadh cosgais mionaideach gu sgillinn](../riarachadh-cosgais-gu-sgillinn-mionaideach/); is e a bhith a’ cruinneachadh nan iomadh loidhne a bhios a’ biathadh an iomlain sa chiad àite [cruinneachadh cosgais sàbhailte do dh’airgead](../cruinneachadh-cosgais-sàbhailte-do-dh-airgead/).

## Cunnartan

- **Faoin gabhail ris sa bhad**: buaidh bliadhna-1 air a h-àireamhachadh aig gabhail ris staid sheasmhaich.
- **A’ cunntadh cosgais a chaidh a chur an àite mar airgead** nuair a tha e na chomas sgaoilte.
- **A’ dearmad iarrtas brosnaichte** – bidh leasachaidhean ruigsinneachd a’ meudachadh cleachdadh an t-sluaigh ion-roghnaichte.
- **A’ measgachadh crìoch-ùine/lasachadh BIA agus CEA**: tha BIA geàrr-ùine, gun lasachadh, sònraichte don neach-pàighidh a rèir dealbhaidh.

## Stòran

- Sullivan SD, et al. ISPOR BIA Good Practice II Task Force. Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
- ISPOR good practices: budget impact analysis. <https://www.ispor.org/heor-resources/good-practices/article/principles-of-good-practice-for-budget-impact-analysis-ii>
