# Co-mheas cosg-èifeachdais àrdachaidh (ICER)

Is e an ICER an cosgais a bharrachd gach aonad a bharrachd de bhuaidh slàinte nuair a thaghas tu aon roghainn thairis air an ath roghainn as fheàrr. Is e àireamh ceann-naidheachd measadh teicneòlais slàinte. (Nuair as e QALY an t-aonad buaidh, canar ris cuideachd co-mheas cosgais-feumalachd àrdachaidh, ICUR.)

## Carson a tha e cudromach

Cha bhi siostaman slàinte a’ measadh teicneòlas ann an aonaranachd a-chaoidh – an-còmhnaidh *a rèir àrdachaidh*, an aghaidh na dhèanadh iad air dhòigh eile. Bidh NICE a’ coimeas ICER teicneòlais ri a stairsneach **£20,000–£30,000 gach QALY**; bidh institiud ICER na SA ag aithris thar $50,000–$200,000/QALY; bidh Canada ag obair gu timcheall CAD$50,000/QALY. Is e a bheil do thoradh “airidh air” do sheirbheis slàinte nàiseanta, gu foirmeil, a bheil an ICER aige a’ glanadh na stairsnich ionadail. Faic [stairsnichean deònach-pàigheadh](../stairsnich-deònachd-pàighidh/).

## A’ mhatamataig

```
ICER = (Cosgais_ùr − Cosgais_coimeas) / (Buaidh_ùr − Buaidh_coimeas)
     = ΔC / ΔE
```

Riaghailtean mìneachaidh:

- ΔC < 0, ΔE > 0: bidh an roghainn ùr **a’ cumail smachd** – nas saoire agus nas fheàrr; gun fheum air co-mheas.
- ΔC > 0, ΔE > 0: obraich a-mach ICER, dèan coimeas ris an stairsneach λ; gabh ris ma tha ICER < λ.
- ΔC > 0, ΔE < 0: tha an roghainn ùr fo smachd – diùlt.
- Bidh co-mheasan ag obair gu dona faisg air ΔE = 0 – is fheàrr [buannachd airgid ghlan](../buannachd-airgid-lom/) airson rangachadh.

Feumaidh an coimeas a bhith an *ath roghainn as fheàrr nach eil fo smachd*, chan e “na dèan dad” – faic [smachd agus a’ chrìoch èifeachdais](../smachd-agus-a-chrìoch-èifeachdais/).

## Eisimpleir obrach

Seirbheis sgrùdaidh iomallach airson euslaintich fàilligeadh cridhe, gach 1,000 euslainteach/bliadhna, an aghaidh cùram àbhaisteach:

```
Cosgaisean:   seirbheis £900,000; bidh gabhaidhean-a-steach air an seachnadh a’ sàbhaladh £600,000
              ΔC = 900,000 − 600,000 = £300,000
Buaidhean:    bidh eadar-theachd nas tràithe a’ faighinn 25 QALY
              ΔE = 25

ICER = 300,000 / 25 = £12,000 gach QALY
```

Tha £12,000/QALY gu comhfhurtail fo stairsneach £20,000 NICE – cùis làidir. Thoir an aire mar a tha cosgais *ghlan* cudromach: às aonais an dìoladh £600,000 bhiodh an ICER £36,000/QALY agus bhiodh a’ chùis gu coltach a’ fàiligeadh. Is e dìoladh chosgaisean agus càileachd fianais dhaibh far a bheil na h-anailisean sin air am buannachadh is air chall (faic [cosgaisean sìos-an-t-srutha air an seachnadh](../cosgaisean-sìos-an-t-srutha-air-an-seachnadh/)).

## Ceangal ri einnseanaireachd bathar-bog

Bidh smachd an ICER a’ gluasad gu h-iomlan gu co-dhùnaidhean einnseanaireachd:

```
(cosgais roghainn B − cosgais roghainn A) / (builean B − builean A)
```

– cosgais àrdachaidh gach cleachdadh a bharrachd, gach uair einnseanair air a shàbhaladh, gach tachartas air a sheachnadh – an-còmhnaidh an aghaidh an ath roghainn as fheàrr, chan e an aghaidh gun dad a dhèanamh. An dà chleachdadh as fhiach a ghoid: (1) *ainmich an coimeas gu soilleir*; bidh a’ mhòr-chuid de thagraidhean ROI innealan gu dìomhair a’ coimeas ri fear-fèidh; (2) *cuir às cosgaisean glan an toiseach* – inneal a chosgas £100k ach a chuireas £80k de chaitheamh làithreach an àite tha ΔC = £20k.

## Cunnartan

- **A’ coimeas ICER thar airgeadan gun cheum tionndaidh soilleir**: feumaidh ICER a chaidh àireamhachadh ann an airgead aon dùthcha a bhith air a thionndadh le dòigh ainmichte mus coimeas e ri stairsneach dùthcha eile – faic [coimeas ICER thar airgeadan](../coimeas-icer-thar-airgeadan/) airson carson as urrainn don taghadh fhèin (co-ionannachd cumhachd-ceannaich an aghaidh ìre iomlaid margaidh) co-dhùnadh gabhail ris a thionndadh.
- **Geamadh coimeis**: a’ coimeas ri bunait seann-fhasanta no gu fuadain dona a’ cur barrachd air ΔE agus a’ brosnachadh an ICER.
- **Cuibheasachdan an àite àrdachaidhean**: chan e cosgais gach QALY de phrògram slàn an ICER a bhith ga leudachadh no ga ghabhail.
- **Adhradh puing-tuairmse**: tha ICERs nan co-mheasan de dhà eadar-dhealachadh mì-chinnteach; aithris mì-chinnt tro [PSA agus CEACs](../anailis-mothachalachd-coltachdail/).
- **Tha ICERs àicheil neo-shoilleir** (nas saoire-is-nas-fheàrr an aghaidh nas daoire-is-nas-miosa a’ toirt an aon soidhne) – na aithris ICER àicheil gun ràdh dè an ceathramh a th’ ann.

## Stòran

- NICE: cost-effectiveness thresholds FAQ. <https://www.nice.org.uk/what-nice-does/faqs/changes-to-nice-s-cost-effectiveness-thresholds>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
- York Health Economics Consortium glossary: ICER. <https://yhec.co.uk/glossary/incremental-cost-effectiveness-ratio-icer/>
