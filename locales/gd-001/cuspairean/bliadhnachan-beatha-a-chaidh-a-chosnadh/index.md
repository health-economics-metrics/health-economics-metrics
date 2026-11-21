# Bliadhnachan beatha a chaidh a chosnadh (LYG)

Is e bliadhnachan beatha a chaidh a chosnadh an tuilleadh mairsinneachd a thig bho eadar-theachd, gun atharrachadh càileachd: an raon eadar na lùban mairsinneachd leis agus às aonais. Is e an t-atharrachadh ùr-nodha, bliadhna beatha le luach co-ionann (evLYG), a bheir an aon chreideas do gach leudachadh beatha.

## Carson a tha e cudromach

Is e LYG an toradh slàinte as amh: dè cho fada ’s a tha daoine beò? Tha e cudromach nuair a tha dàta càileachd a dhìth, nuair a thathar ga choimeas ri luchd-èisteachd a tha teagmhach mu QALYan, agus ann an oncology far a bheil lùban mairsinneachd nan prìomh thoraidhean deuchainn. Tha an **evLYG** (air a chleachdadh le ICER nan SA ri taobh cosgais/QALY) ann air adhbhar beusach: bidh QALYan a’ cur luach air bliadhna de bheatha leudaichte a rèir feumalachd an euslaintich, agus mar sin “tha nas lugha a’ cunntadh” nuair a thèid beatha cuideigin le ciorram a leudachadh — bidh evLYG a’ cur luach stèidhichte air gach bliadhna leudaichte, a’ toirt air falbh an leth-bhreith sin.

## A’ mhatamataig

```
LYG = mairsinneachd mheadhanach_ùr − mairsinneachd mheadhanach_coimeasach
    = raon eadar lùban mairsinneachd (cuingichte ris an fhàire-ùine)

Sealladh QALY air leudachadh beatha:  leudachadh × feumalachd an euslaintich
Sealladh evLYG air leudachadh beatha: leudachadh × feumalachd stèidhichte (bidh ICER a’ cleachdadh ~0.851,
                                      feumalachd cuibheasach shluagh nan SA)
```

Tha an dà chuid [air an lasachadh](../lasachadh-agus-roghainn-ùine/) ann am modailean eaconamach.

## Eisimpleir obrach

Algairim rabhaidh thràth airson sepsis ann an ospadal: tha modail a’ sealltainn gun cuir antibiotics nas tràithe casg air 12 bàs sa bhliadhna; tha aois cuibheasach nan euslainteach sin a’ toirt 8 bliadhna beatha air fhàgail dhaibh gach fear aig feumalachd 0.7.

```
LYG   = 12 × 8            = 96 bliadhna beatha/bliadhna
QALYs = 96 × 0.7          = 67.2
evLYG = 96 × 0.851        = 81.7
```

Aig £20,000 gach QALY, bidh frèam nan QALY a’ cur luach £1.34M/bliadhna air a’ mhairsinneachd; frèam evLYG £1.63M. Is e an t-eadar-dhealachadh dìreach am breithneachadh beusach a bheil bliadhna beatha aig feumalachd 0.7 a’ dol airson 70% de bhliadhna “làn”. Bidh dossiers dùrachdach ag aithris an dà chuid.

## Ceangal ri einnseanaireachd bathar-bog

- Is e anailis mairsinneachd an trusgan co-roinnte: tha lùban Kaplan-Meier airson euslaintich agus airson *sheirbheisean* (ùine gu fàillinn, ùine gu churn) nam matamataig co-ionann. Tha “bliadhnachan seirbheis a chaidh a chosnadh” bho thasgadh earbsachd = an raon eadar lùban mairsinneachd an t-siostaim leis/às aonais — frèam nas onaire na tagraidhean MTTF puing.
- Tha rabhadh dealbhaidh mheatrachan san evLYG airson einnseanaireachd cuideachd: bidh meatrach cinneasachd sam bith a thomhaiseas toradh a rèir factar “càileachd sgioba” a’ fo-luachadh leasachaidhean airson sgiobaidhean cuingichte no a tha a’ strì — uaireannan tha thu ag iarraidh an tionndaidh luach co-ionann a dh’aona ghnothach.

## Cunnartan

- **Meadhan an aghaidh cuibheasach mairsinneachd**: tha modailean eaconamach a’ feumachdainn a’ chuibheasaich (raon fon lùb); gu tric bidh deuchainnean a’ cur a’ mheadhain air thoiseach. Tha iad gu math eadar-dhealaichte ann an cuairteachaidhean claonta.
- **Tuairmse seach leantainn na deuchainn** a’ riaghladh LYG air a mhodaladh ann an tinneas leantainneach — thoir fa-near am modail tuairmse agus feuch e ann an [anailis mothachalachd](../anailis-mothachalachd/).
- **A’ tagradh bàsan a chaidh a sheachnadh à dàta amharcaidh ro/às dèidh** gun atharrachadh airson measgachadh chùisean agus gluasadan ùine.

## Stòran

- York Health Economics Consortium glossary: life-years gained. <https://yhec.co.uk/glossary/life-years-gained/>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
