# Measadh teicneòlais slàinte (HTA)

Is e HTA am pròiseas foirmeil, stèidhichte le institiudan leis am bi siostaman slàinte a’ co-dhùnadh a bheil teicneòlas – cungaidh, inneal, no bathar-bog – airidh air pàigheadh air. Bidh e a’ cur còmhla fianais èifeachdas clionaigeach agus measadh eaconamach fo dhòigh-obrach fhoillsichte, èigneachail.

## Carson a tha e cudromach

Ma reicear thu a-steach do sheirbheis slàinte nàiseanta, faodaidh buidheann HTA gu litearail co-dhùnadh air do ruigsinneachd margaidh. Is e eòlas air a’ phròiseas ionadail eòlas air do fhìor riaghladair luach:

- **NICE (Sasainn)**: measaidhean reachdail fo *iuchair-chùis* mhìnichte – QALY bho [EQ-5D](../eq-5d/), [sealladh](../sealladh-na-h-anailis/) NHS+PSS, [lasachadh](../lasachadh-agus-roghainn-ùine/) 3.5%, [PSA](../anailis-mothachalachd-coltachdail/) riatanach – air am breithneachadh an aghaidh £20k–£30k/QALY le [atharraichearan cruaidh-chàis](../easbhaidh-qaly-agus-modaladairean-dèine/); teicneòlasan gu math speisealta suas gu £100k+ le cuideam.
- **ICER (SA, neo-riaghaltais)**: aithisgean fianais le *slat-tomhais prìs buannachd slàinte* – an prìs aig am biodh toradh cosg-èifeachdach aig $100k–$150k gach QALY/evLYG – air a chleachdadh mar luamhan co-rèiteachaidh; a bharrachd air “rabhaidhean so-phàighteachd” buaidh buidseit.
- **Canada (CADTH → CDA-AMC)**: ath-bhreithneachaidhean ath-phàighidh aig ≈CAD$50k/QALY; gu h-eachdraidheil dh’iarr iad lùghdachadh prìs ann an ~95% de chur a-steach.

## A’ mhatamataig

Chan e foirmle a th’ ann an cumhachd HTA ach **dòigh-obrach èigneachail**: bidh gach cur a-steach ag obrachadh a-mach an aon [ICER](../co-mheas-cosg-èifeachdais-àrdachaidh/) fo na h-aon riaghailtean iuchair-chùis, gus am bi toraidhean so-choimeasach thar thoraidhean agus bhliadhnaichean. Bidh an iuchair-chùis a’ sònrachadh tomhas builean, ionnstramaid goireis, sealladh, taghadh coimeis, ìre lasachaidh, crìoch-ùine, agus anailis mì-chinnt – a’ toirt air falbh a h-uile ìre saorsa a dh’fhaodadh neach-taice geamadh.

## Eisimpleir obrach

Bidh leigheas didseatach a’ cur a-steach gu measadh stoidhle NICE:

```
Modail: ΔC = +£450/euslainteach, ΔE = +0.03 QALY → ICER = £15,000/QALY ✓ fo £20k
Sgrùdaidhean iuchair-chùis:
  goireasan bho EQ-5D-5L le seata luach RA                  ✓
  coimeas = slighe cùraim làithreach (chan e “gun leigheas”) ✓
  PSA: 71% coltas cosg-èifeachdach aig £20k                 ✓ (air aithris)
  atharraiche cruaidh-chàis: fo chrìochan shortfall ×1.2    — gun fhear air a thagradh
Molaidh: coimiseanadh gnàthach, le cruinneachadh dàta san t-saoghal fhìor.
```

Sheall am mion-sgrùdadh as fheàrr le neach-taice £9,000/QALY; ghluais an iuchair-chùis gu £15,000 le bhith a’ sparradh a’ choimeas onarach. Is e am beàrn sin an t-adhbhar a tha iuchairean-chùis ann.

## Ceangal ri einnseanaireachd bathar-bog

Is e an artefact a ghluaiseas an **iuchair-chùis a-staigh**: aon dòigh-obrach èigneachail airson gach cùis-ghnìomhachais innealan/àrd-ùrlair – coimeas ainmichte, cosgaisean aonaid àbhaisteach (faic [pàigheadh nàiseanta is cosgaisean aonaid](../taraif-nàiseanta-agus-cosgaisean-aonaid/) airson a’ phàtrain), ìre lasachaidh stèidhichte, anailis mothachalachd riatanach, teamplaid àbhaisteach. Bidh “dossier AMCP airson innealan” air a chur a-steach gu comhairle àrd-ùrlair a’ dèanamh mholaidhean so-choimeasach agus geamadh so-fhaicsinneach, dìreach mar a nì HTA airson leigheas. Tòisich nas lugha na NICE: bidh teamplaid dà-dhuilleag a bharrachd air leabhar prìsean foillsichte nas fheàrr na gun inbhe sam bith.

Airson mar a thèid modail HTA ioma-chuairt a shamhlachadh dha-rìribh buidheann-air-buidheann gach cuairt, faic [samhlachadh buidheann Markov](../samhlachadh-buidhne-markov/).

## Cunnartan

- **A’ làimhseachadh HTA mar fhoirmealachd às dèidh glanadh riaghlaidh** – tha glanadh CE/UKCA/FDA ag ràdh gu bheil toradh sàbhailte; bidh HTA a’ co-dhùnadh a bheil e *airidh air ceannach*. Cnap-starra eadar-dhealaichte, fianais eadar-dhealaichte.
- **A’ togail a’ mhodail eaconamach às dèidh na deuchainn** – bu chòir gintinn fianais a bhith air a dhealbhadh air ais bho riatanasan na h-iuchair-chùis.
- **A’ dearmad eadar-dhealachaidhean uachdranais**: bidh ICER a ghabhas maoineachadh anns na SA aig $120k/QALY a’ fàiligeadh NICE aig £30k; dealbhaich fianais agus prìsean gach margaidh.

## Stòran

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER 2023 Value Assessment Framework. <https://icer.org/our-approach/methods-process/value-assessment-framework/>
- Canada's Drug Agency (CDA-AMC). <https://www.cda-amc.ca/>
