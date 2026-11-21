# Bliadhna beatha le atharrachadh càileachd (QALY)

Is e QALY aon bhliadhna de bheatha air a caitheamh ann an slàinte foirfe. Bidh e a’ measgachadh *cho fada* ’s a bhios daoine beò le *cho math* ’s a bhios iad beò, gus am bi bliadhna ann an droch shlàinte a’ cunntadh mar nas lugha na aon QALY – a’ dèanamh eadar-theachdan slàinte gu tur eadar-dhealaichte so-choimeasach air aon sgèile.

## Carson a tha e cudromach

Is e an QALY an t-airgead cumanta de mheasadh teicneòlais slàinte. Bidh NICE (Sasainn) a’ luachadh buannachdan slàinte aig **£20,000–£30,000 gach QALY**: mar as trice thèid eadar-theachd a cheannaicheas QALYan nas saoire na an stairsneach sin a mholadh; mar as trice thèid fear a cheannaicheas iad nas daoire a dhiùltadh. Is e an aon àireamh seo mar a bhios seirbheis slàinte nàiseanta a’ dèanamh coimeas eadar cungaidh aillse, ath-chur cruachain, agus app triage air an aon axis. Ma dh’fhaodas do bhathar-bog QALYan a thagradh gu creidsinneach – le bhith a’ casg dèanadh sìos, a’ luathachadh làimhseachaidh, no a’ leasachadh sàbhailteachd – faodaidh tu a luach slàinte a phrìseadh san aon airgead ris an leigheas fhèin.

## A’ mhatamataig

```
QALYs = Σ_i (duration_i × utility_i)

duration_i = bliadhnaichean air an caitheamh ann an staid slàinte i
utility_i  = cuideam càileachd staid i, air acair aig 1 = slàinte foirfe, 0 = marbh
             (luachan àicheil ceadaichte airson stàitean nas miosa na bàs)
```

Tha cuideaman feumalachd a’ tighinn bho ionnsramaidean dearbhte, as cumanta [EQ-5D](../eq-5d/). Is e *buannachd* QALY bho eadar-theachd an eadar-dhealachadh eadar na sruthan QALY leis agus às aonais, [lasaichte](../lasachadh-agus-roghainn-ùine/) aig 3.5%/bliadhna ann an reul-chùis NICE.

## Eisimpleir obrach

Bidh euslainteach a’ feitheamh ri làimhseachadh cridhe ann an staid le feumalachd 0.6. Bidh làimhseachadh gan toirt air ais gu feumalachd 0.85.

- **Air a làimhseachadh a-nis**: 1 bhliadhna aig 0.85 = 0.85 QALYan am-bliadhna.
- **Air a làimhseachadh às dèidh dàil 6 mìosan**: 0.5 × 0.6 + 0.5 × 0.85 = 0.725 QALYan.
- **Call QALY gach euslaintich bhon dàil**: 0.85 − 0.725 = **0.125 QALYan**.

Air a thionndadh gu airgead aig stairsneach NICE: 0.125 × £20,000–£30,000 = **£2,500–£3,750 de luach slàinte caillte gach euslaintich gach dàil 6-mìosan**. Ma bhios bathar-bog a bhios a’ luathachadh na slighe a’ toirt air falbh an dàil sin airson 400 euslaintich/bliadhna, is e 50 QALYan an luach slàinte ≈ **£1.0–£1.5 millean/bliadhna** – mus cunntar sàbhalaidhean obrachaidh sam bith.

## Ceangal ri einnseanaireachd bathar-bog

- **Slighean nas luaithe = QALYan nas tràithe.** Tha rud sam bith a ghiorraicheas [iomradh gu làimhseachadh](../iomradh-gu-làimhseachadh/) a’ tionndadh mì-fheumalachd ùine feitheimh gu buannachd slàinte, air a luachadh mar gu h-àrd.
- **Sàbhailteachd = QALYan glèidhte.** Tha mearachdan cungaidh a chaidh a sheachnadh agus diagnosisean a chaidh a chall nan calldaichean QALY a chaidh a sheachnadh.
- **Tha an QALY cuideachd na theamplaid dealbhaidh meatrach**: measgachadh de thomhas × càileachd, le cuideaman càileachd air an tarraing à ionnsramaid àbhaisteach. Tha “bliadhna einnseanair le atharrachadh càileachd” (ùine × cuideam sgrùdaidh DevEx) an aon thogail – faic [SPACE agus DevEx](../space-agus-devex/).
- Gus QALYan a thionndadh gu airgead airson cùis-ghnìomhachais, cleachd [buannachd airgeadail lom](../buannachd-airgid-lom/); gus an tionndadh gu co-dhùnadh, cleachd [stairsnichean deònachd pàighidh](../stairsnich-deònachd-pàighidh/).

## Cunnartan

- **A’ dealbhadh cuideaman feumalachd.** Feumaidh cuideaman tighinn bho ionnsramaidean dearbhte (EQ-5D) agus seataichean luach foillsichte, chan e instinct.
- **A’ tagradh QALYan gun slighe adhbharach.** Chan e tagradh QALY a th’ ann an “bidh ar n-app a’ leasachadh sunnd”; is e “a’ toirt air falbh X seachdainean feitheimh ann an staid feumalachd 0.6”.
- **Cunntadh dà-fhillte**: feumaidh tagradh an dà chuid buannachd QALY agus sàbhalaidhean cosgais an aon dèanadh sìos a chaidh a sheachnadh cùram gu bheil iad fìor air leth.
- **Dall-bhàrr co-ionannachd**: bidh QALYan a’ luachadh bliadhna de leudachadh beatha a rèir feumalachd bhunaiteach, a dh’fhaodas a bhith na eas-bhuannachd do dhaoine le ciorraman – an t-adhbhar a bhios ICER (na SA) cuideachd ag aithris an evLYG (faic [bliadhnaichean beatha buannaichte](../bliadhnachan-beatha-a-chaidh-a-chosnadh/)).

## Stòran

- NICE glossary: QALY. <https://www.nice.org.uk/glossary?letter=q>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
