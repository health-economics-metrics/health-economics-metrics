# Lùghdachadh cinneasachd obrach is gnìomhachd (WPAI)

Is e ceisteachan fèin-aithris dearbhte a th’ ann an WPAI (Reilly, Zbrozek, Dasbach, 1993) a tha a’ tomhas cho mòr ’s a tha duilgheadas slàinte a’ toirt buaidh air obair pàighte agus gnìomhan làitheil, mar as trice thairis air na 7 làithean mu dheireadh. Bidh e a’ sgaradh a’ chall gu *neo-làthaireachd* – ùine obrach a chaidh a chall gu litireil – agus *làthaireachd-tinn* – cinneasachd lùghdaichte fhad ’s a tha thu aig an obair gu corporra, agus mar as trice is e an dàrna fear am pàirt cosgais as motha is as falaichte.

## Carson a tha e cudromach

Chan fhaic cunntasan sìmplidh de làithean tinneis ach neo-làthaireachd. Tha cliniceach no neach-obrach eòlais nach gabh latha dheth a-riamh ach a dh’obraicheas aig 60% comais tro staid sheasmhach a’ cur neoni ri clàr neo-làthaireachd agus fhathast a’ cruthachadh call cinneasachd mòr, fìor – tha WPAI air a dhealbhadh gu sònraichte gus a’ chosgais do-fhaicsinneach sin a thoirt am follais. Leis gur e ionnsramaid dhearbhte a th’ ann seach sgrùdadh sònraichte, faodar na sgòran aige a chleachdadh ann am pasganan fianais [builean air an aithris leis an euslainteach](../builean-air-an-aithris-le-euslaintich/) agus sgrùdaidhean cosgais tinneis gun fheum air an neach-ath-sgrùdaidh an tomhas ath-dhearbhadh. Mar ionnsramaid fèin-aithris, is e seòrsa de PROM a th’ ann fhèin, air a dhealachadh sa mhòr-chuid le fòcas air obair is gnìomhachd seach comharran no càileachd beatha.

## A’ mhatamataig

```
Neo-làthaireachd % = uairean_air_chall_air_sgàth_slàinte / (uairean_air_chall_air_sgàth_slàinte + uairean_obrach) × 100

Làthaireachd-tinn %  = lùghdachadh 0–10 fèin-ìre fhad ’s a tha thu ag obair, × 10
                  (air a tharraing a-mach gu dìreach tron cheisteachan, chan eil e air a thoirt a-mach an seo)

Lùghdachadh Obrach Iomlan % =
    Neo-làthaireachd% + (1 − Neo-làthaireachd%/100) × Làthaireachd-tinn%
    (a’ cur an dà rud còmhla gus nach urrainn don iomlan a dhol thairis air 100%)

Cosgais cinneasachd = Lùghdachadh Obrach Iomlan% / 100 × tuarastal_na_h-ùine
```

Chan e suim shìmplidh a th’ ann am foirmle an lùghdachaidh iomlan a dh’aona ghnothach: dh’fhaodadh an dà cheudad a chur ri chèile gu dìreach a dhol thairis air 100%, agus mar sin chan eil làthaireachd-tinn air a chur an sàs ach air a’ chuibhreann *a tha air fhàgail* (neo-neo-làthaireach) de dh’ùine obrach.

## Eisimpleir obrach

Tha neach-obrach le migraine ag aithris gu bheil seachdain 40 uair air a clàradh ach gun do chaill iad 4 uairean dhith:

```
uairean_air_chall = 4, uairean_obrach = 36
Neo-làthaireachd% = 4 / (4 + 36) × 100 = 10%
```

Bheir iad air leth fèin-ìre air buaidh cinneasachd fhad ’s a tha iad ag obair mar 3 a-mach à 10 air a’ cheisteachan WPAI, i.e. `Làthaireachd-tinn% = 30%` (is e freagairt amh a’ cheisteachain a tha anns a’ cheum seo, chan e rud a thàinig bho àireamhan eile):

```
Lùghdachadh Obrach Iomlan% = 10 + (1 − 10/100) × 30
                          = 10 + 0.9 × 30
                          = 10 + 27
                          = 37%
```

Thairis air seachdain 5 latha a’ cosnadh £800 (£160/latha):

```
Cosgais cinneasachd = 37/100 × 800 = £296
```

Mothaich nach biodh cunntas naive de làithean tinneis air clàradh ach na 4 uairean (10%) a chaidh a chall – tha am pàirt làthaireachd-tinn faisg air triple-adh an fhìor lùghdachaidh aon uair ’s gun tèid a chunntadh.

## Ceangal ri einnseanaireachd bathar-bog

Bidh seo a’ mapadh gu dìreach air meatrachan slàinte sgioba einnseanaireachd:

- Is e **neo-làthaireachd** fòrladh tinneis agus PTO – faicsinneach, air a lorg mu thràth, agus am pàirt furasta.
- Is e **làthaireachd-tinn** an t-einnsear a tha air a losgadh a-mach no air a luchdachadh le ceadan co-theacsa a tha an làthair anns gach stand-up fhad ’s a tha e ag obair aig comas lùghdaichte – mar as trice an cosgais as motha is as falaichte, agus do-fhaicsinneach do dhàta àireamh-cinn no frithealaidh. Nochdaidh e an àite sin mar thoradh lùghdaichte ann an [DORA](../meatrachan-dora/) agus [meatrachan sruthaidh](../meatrachan-sruthaidh/), no mar fhuasgladh nas slaodaiche air an [fhiachan teicnigeach](../fiachan-teicneòlais/) aig a bheil “riadh” a’ cur ris an lùghdachadh tuilleadh.
- Is e an aon leasan einnseanaireachd ris a’ chliniceach: tha a bhith a’ tomhas neo-làthaireachd a-mhàin agus ga ainmeachadh “call cinneasachd” a’ fo-mheasadh na fìor chosgais gu sistemach, oir tha e a’ call a h-uile duine a tha an làthair ach lùghdaichte.

## Cunnartan

- **Claonadh cuimhne fèin-aithris.** Tha uinneag cuimhne 7-latha fo ùmhlachd na h-aon mhì-chruthachaidhean aithris ri fèin-aithris ath-bhreithneachail sam bith.
- **A bhith a’ làimhseachadh sgèile làthaireachd-tinn 0–10 mar fhìor thomhas corporra.** Tha i òrdail, air a tharraing a-mach le fèin-ìre, chan e meud corporra dearbhte – tha a bhith a’ làimhseachadh eadar-dhealachaidhean oirre mar loidhneach no eadar-amail gu teann na ghoireas modaladh, chan e fìrinn chorporra dhearbhte.
- **Sgòran a phoileadh thar tionndaidhean WPAI.** Tha grunn thionndaidhean sònraichte do staid aig WPAI – WPAI:GH (slàinte choitcheann), WPAI:SHP (duilgheadas slàinte sònraichte), agus tionndaidhean sònraichte do ghalar – agus cha bu chòir sgòran bho thionndaidhean eadar-dhealaichte a phoileadh no a choimeas gun sgrùdadh an toiseach gur e an aon tionndadh ionnsramaid a th’ annta.

## Stòran

- Reilly MC, Zbrozek AS, Dasbach EJ. "The validity and reproducibility of a work productivity and activity impairment instrument." PharmacoEconomics 1993;4(5):353-65.
- WPAI instrument documentation, Reilly Associates — the official scoring reference. <https://www.reillyassociates.net/>
