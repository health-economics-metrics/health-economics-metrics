# Togail luach fheumalachd malairt-ùine (TTO)

Is e TTO dòigh àbhaisteach air luach feumalachd staid slàinte a thogail gu dìreach bho fhreagairiche, seach fear a dhealbhadh. Tha e mar aon de na dòighean togail – còmhla ri gambal àbhaisteach agus deuchainnean roghainn dealaichte – a bheir a-mach na seataichean luach air cùl ionnstramaidean mar [EQ-5D](../eq-5d/), agus mar sin air cùl a’ mhòr-chuid de àireamhachaidhean [QALY](../bliadhna-beatha-le-atharrachadh-càileachd/) sìos-an-t-srutha.

## Carson a tha e cudromach

Dh’fheumadh gach cuideam feumalachd a bhios a’ biathadh àireamhachadh QALY tighinn bho àiteigin. Is e TTO an dòigh: airson staid air a meas nas fheàrr na bàs, thathar a’ faighneachd de fhreagairiche cò mheud bliadhna `X` ann an slàinte shlàn a bhiodh co-ionann ri `T` bliadhna san staid lag (`X < T`); is e am feumalachd `X / T`. Airson staid a tha cuid de fhreagairichean ga meas nas miosa na bàs, bidh am foirmle àbhaisteach a’ briseadh sìos (chan urrainn dha feumalachdan fo neoni a riochdachadh gu glan), mar sin thèid TTO leudaichte a chur an sàs. Tha neach-leasachaidh no anailiseach a làimhsicheas cuideam feumalachd mar chuir-a-steach a chaidh a thoirt, gun fhios aige gun do dh’fheumadh protocol togail dearbhte a thoirt a-mach, aon cheum air falbh bho àireamh nach urrainn dha dìon ma thèid a cheasnachadh.

## A’ mhatamataig

```
Standard TTO (state better than death):
  utility = time_in_full_health / time_in_impaired_state

Extended TTO (state worse than death):
  utility = -time_traded_for_death / (total_duration - time_traded_for_death)
```

`time_in_full_health` / `time_in_impaired_state` – bliadhnaichean `X` ann an slàinte shlàn air am breithneachadh co-ionann ri `T` bliadhna san staid lag. `time_traded_for_death` / `total_duration` – anns an fhoirmle nas miosa-na-bàs, bliadhnaichean `a` de bheatha `T`-bliadhna a tha air fhàgail a bhiodh am freagairiche a’ malairt airson bàs sa bhad, a’ roghnachadh `T − a` bliadhna ann an slàinte shlàn air a leantainn le bàs thairis air `T` bliadhna san staid nas miosa-na-bàs. Tha an toradh àicheil, air a ghlasadh gus am bi bàs = 0.

## Eisimpleir obrach

**Àbhaisteach**: tha freagairiche ann an staid lag airson 10 bliadhna agus tha e cho coma le 7 bliadhna ann an slàinte shlàn: feumalachd = 7 / 10 = **0.7**.

**Nas miosa na bàs**: thairis air beatha 10-bliadhna a tha air fhàgail, bhiodh am freagairiche a’ malairt 2 bhliadhna airson bàs sa bhad – is fheàrr leis 8 bliadhna ann an slàinte shlàn air a leantainn le bàs thairis air 10 bliadhna san staid nas miosa-na-bàs: feumalachd = −2 / (10 − 2) = −2 / 8 = **−0.25**.

## Ceangal ri einnseanaireachd bathar-bog

Tha an aon phuing a thig tarsainn air sgrùdadh DevEx no com-pàirteachais nuair a dh’iarras e air daoine rudeigin a rangachadh air sgèile 0–10 gun sgrùdadh a’ buntainn an seo air an ais: tha TTO ann dìreach air sgàth nach e dòigh togail dearbhte a th’ ann an “dìreach faighnich dhaoine a rangachadh”. Mus tog thu clàr-amais measgaichte – sgòr DevEx, clàr-amais com-pàirteachais, sgèile losgadh-a--mach – air àireamh fèin-rangaichte, faighnich dè a thog e agus an deach an dòigh sin a dhearbhadh, an aon cheist a bhios eaconamairean slàinte a’ faighneachd de chuideam feumalachd mus tèid e a-steach do QALY.

## Cunnartan

- **Coitcheannachadh luach fa leth**: tha luachan TTO air an togail bho *shampall* den phoball choitcheann (no euslaintich), chan e an neach aig a bheil a chùram ga cho-dhùnadh – tha cleachdadh luach TTO aon fhreagairiche mar gum bu choitcheann e na mhearachd sampaill.
- **Foirmle ceàrr airson na staid**: tha am foirmle TTO àbhaisteach a’ gabhail ris gu bheil an staid gu soilleir nas fheàrr na bàs; ma chuirear an sàs i air staid a bhiodh cuid de fhreagairichean a’ meas nas miosa na bàs, gun tionndadh don fhoirmle leudaichte, bheir e feumalachd cheàrr (adhartach) gu sàmhach.
- **Fadan neo-choimeasach**: chan eil luachan TTO a chaidh a thogail le fadan beatha `T` eadar-dhealaichte airson coimeas nas miosa-na-bàs gu dìreach so-choimeasach gun dearbhadh gun do chùm dealbhadh an sgrùdaidh `T` seasmhach.

## Stòran

- Torrance GW. "Social preferences for health states: an empirical evaluation of three measurement techniques." Socioecon Plan Sci. 1976;10(3):129-36.
- Patrick DL, Starks HE, Cain KC, Uhlmann RF, Pearlman RA. "Measuring preferences for health states worse than death." Med Decis Making. 1994;14(1):9-18.
