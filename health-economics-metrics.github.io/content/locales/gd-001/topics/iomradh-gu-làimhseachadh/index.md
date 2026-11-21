# Iomradh gu làimhseachadh (RTT)

Is e iomradh gu làimhseachadh an ùine a dh’fhalbhas bho iomradh GP gu toiseach làimhseachaidh air a stiùireadh le comhairliche. Tha Bun-reachd an NHS a’ suidheachadh an inbhe: **bu chòir 92% de dh’euslaintich tòiseachadh air làimhseachadh taobh a-staigh 18 seachdainean**. Is e RTT am meatrach obrachaidh as follaisiche gu poilitigeach san NHS Shasainn.

## Carson a tha e cudromach

Bidh urrasan a bhios a’ call targaidean RTT an aghaidh sgrùdadh riaghlaidh, eadar-theachd, agus milleadh cliù; tha an liosta feitheimh nàiseanta na àireamh duilleag-aghaidh. Gach seachdain a bhios euslainteach a’ feitheamh tha slàinte caillte (a’ feitheamh ann an staid slàinte nas miosa – faic matamataig QALY gu h-ìosal) agus gu tric cosgais air a chosnadh (bidh staid a’ dol sìos; faic [eadar-theachd nas tràithe](../eadar-theachd-nas-tràithe/)). Bidh bathar-bog a shàbhaileas ùine àite sam bith air slighe iomradh-gu-làimhseachadh – triage, tionndadh diagnosachd, comas clionaig, sgeidealachadh – a’ lasachadh dìreach buaidhean obrachaidh agus ionmhais fàilligeadh an inbhe, agus is e sin an t-adhbhar gu bheil buaidh RTT na loidhne buannachd prìomh-ìre ann an cùisean-gnìomhachais didseatach an NHS.

## A’ mhatamataig

```
Coileanadh RTT = euslaintich air an làimhseachadh taobh a-staigh 18 seachdainean / iomlan air an làimhseachadh × 100
Cosgais slàinte ùine feitheimh gach euslaintich = fad feitheimh × (utility_treated − utility_waiting)

Sealladh slighe: RTT = Σ fad nan ìrean (triage iomraidh → a’ chiad choinneamh →
diagnosachd → co-dhùnadh → làimhseachadh) — leasaich an ciudha as fhaide, chan e an ìre
as trainge (faic flow-metrics.md).
```

## Eisimpleir obrach

Bidh speisealachd a’ làimhseachadh 5,000 euslaintich slighe/bliadhna; feitheamh cuibheasach 24 seachdainean; feumalachd feitheimh 0.68 an aghaidh làimhsichte 0.80.

Bidh triage didseatach agus pròtacalan dìreach-gu-deuchainn a’ toirt air falbh 5 seachdainean de chiudhadh fìor:

```
Buannachd QALY = 5,000 × (5/52) × (0.80 − 0.68) = 57.7 QALYan/bliadhna
Air a thionndadh gu airgead aig £20,000–£30,000/QALY (faic willingness-to-pay-thresholds.md):
  ≈ £1.15M–£1.73M/bliadhna de luach slàinte
```

– agus gluaisidh an t-urras bho bhriseadh gu coinneachadh ris an inbhe 18-seachdain, aig a bheil luach riaghlaidh nach glac clàr-sgaoilidh sam bith gu lèir.

## Ceangal ri einnseanaireachd bathar-bog

Is e RTT **meatrach ùine-stiùiridh thairis air ciudha ioma-ìre** – dreach an ospadail de ùine-stiùiridh commit-gu-cinneasachadh (faic [meatrachan DORA](../meatrachan-dora/)). Tha am modh leasachaidh co-ionann: ionnsramaich gach ìre, lorg càite am bi ùine mhìosachain a’ cruinneachadh (is e lìbhrigeadh agus ciudhaichean cha mhòr an còmhnaidh, chan e obair chlionaigeach), agus thoir air falbh stàitean feitheimh. Buannachdan bathar-bog àbhaisteach: e-triage a thèid iomraidhean a-steach ann an uairean an àite bhaidsean seachdaineil, putadh thoraidhean diagnosachd an àite choinneamhan leantainneach, agus slatan-tomhais dìreach-gu-deuchainn fèin-obrach. Luachaich an leasachadh le [cosgais dàil](../cosgais-dàil/) ann an QALYan/seachdain.

## Cunnartan

- **A’ leasachadh ìre nach e an cuingead** – a’ gearradh feitheamh a’ chiad choinneimh fhad ’s a bhios ciudhaichean diagnosachd a’ fàs dìreach a’ gluasad an lòn.
- **Cluich**: faodaidh ath-shuidheachadh slighe agus stad cloc RTT aithriseach a leasachadh gun duine a làimhseachadh na b’ luaithe; sgrùd an cuairteachadh bunaiteach.
- **A’ tagradh leasachadh na slighe gu lèir** airson aon inneal nuair a thàinig grunn atharrachaidhean còmhla – feumaidh buileachadh coimeasaiche.

## Stòran

- NHS England, RTT waiting times statistics. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
