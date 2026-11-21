# Buannachd airgid lom (NMB)

Bidh NMB a’ tionndadh toradh cosg-èifeachdais gu aon luach airgid: buannachd slàinte air a phrìsealachadh aig an stairsneach deònach-pàigheadh, às aonais cosgais. Tha a dhàrna leth, Buannachd Slàinte Lom (NHB), a’ cur an cèill an aon riaghailt ann an aonadan slàinte.

## Carson a tha e cudromach

Tha co-mheasan ([ICERs](../co-mheas-cosg-èifeachdais-àrdachaidh/)) an-fhoiseil: bidh iad a’ spreadhadh faisg air neoni buaidh, chan urrainn an cuibheasachadh thar tharraingean neo-chinnteachd, agus chan urrainn trì roghainnean no barrachd a rangachadh gu glan. Bidh NMB a’ càradh sin uile — tha e loidhneach, agus mar sin faodaidh tu roghainnean a rangachadh, tarraingean Monte Carlo a chuibheasachadh, agus com-pàirtean a sgaradh. Is e cuideachd an cruth de mhatamataig eaconamas slàinte a tha aig a h-uile einnseanair mu thràth: *luach às aonais cosgais*.

## A’ mhatamataig

```
NMB = (ΔE × λ) − ΔC
NHB = ΔE − (ΔC / λ)

ΔE = buaidh àrdachaidh (m.e., QALYan)
ΔC = cosgais àrdachaidh
λ  = stairsneach deònach-pàigheadh (faic willingness-to-pay-thresholds.md)

Riaghailt co-dhùnaidh: gabh ris ma tha NMB > 0 (co-ionann NHB > 0).
Am measg roghainnean: tagh an NMB as àirde.
```

NMB > 0 ⇔ ICER < λ (nuair a tha ΔE > 0), agus mar sin tha an dà riaghailt ag aontachadh — tha NMB dìreach nas fheàrr ann an giùlan.

## Eisimpleir obrach

Trì roghainnean airson seirbheis diabetes, gach 1,000 euslaintich, λ = £20,000/QALY:

```
Option           ΔC          ΔE (QALYs)   NMB = 20,000×ΔE − ΔC
App + coaching   £400,000    30           600,000 − 400,000 = £200,000
App only         £150,000    12           240,000 − 150,000 = £90,000
Extra clinics    £700,000    32           640,000 − 700,000 = −£60,000
```

Bidh clionaigean a bharrachd a’ cosnadh na QALYan as motha ach a’ sgrios luach aig an stairsneach seo (NMB < 0). Bidh app + coidseadh a’ buannachadh. Thoir fa-near gu bheil NMB a’ leigeil leat *na trì a rangachadh aig an aon àm* — dh’fheumadh ICERan càraid dòigh na crìche ann an [smachd agus a’ chrìoch èifeachdais](../smachd-agus-a-chrìoch-èifeachdais/), agus ruigeadh iad an aon fhreagairt.

Sealladh NHB air a’ bhuannaiche: 30 − 400,000/20,000 = 30 − 20 = **10 QALY lom** — an slàinte a chaidh a chosnadh nas fhaide na an rud a bhiodh an aon airgead air a thoirt gu buil an àiteigin eile.

## Ceangal ri einnseanaireachd bathar-bog

Tha `(uairean air an sàbhaladh × ìre uair-chluaise làn-luchdaichte) − cosgais inneal` — an cùis ghnìomhachais inneal làitheil — gu litireil na àireamhachadh NMB le λ = cosgais einnseanair làn-luchdaichte. Dà ùrachadh a chuireas eaconamas slàinte ris:

- **Dèan λ na chaochladair, chan e na sheasmhachd.** Cuir NMB an aghaidh λ (“luach uair einnseanair”) air graf agus seall far a bheil an co-dhùnadh a’ tionndadh; faodaidh luchd-ùidh eadar-dhealaichte an luachadh fhèin a chur an sàs gun do mhatamataig a dhèanamh a-rithist.
- **Smaoineachadh NHB**: “tha an àrd-ùrlar seo a’ sàbhaladh 5,000 uair einnseanair ach a’ caitheamh buidseit a cheannaicheadh 3,000 uair einnseanair de chomas cùmhnantaiche — 2,000 uair lom” a’ toirt air coimeas cosgais cothrom a dhèanamh ann an aonadan comais. Faic [cosgais cothrom](../cosgais-cothrom/).

## Cunnartan

- **A’ falach an stairsnich**: chan eil brìgh ann an NMB gun λ a ràdh; aithris NMB aig £20k agus £30k, no cuir an lùb air graf.
- **A’ cleachdadh NMB gus buaidhean beaga a nighe**: faodaidh sluagh mòr uaireannan buaidh gach neach neo-chudromach NMB mòr a thoirt; aithris buaidhean gach neach ri thaobh.
- **A’ dì-chuimhneachadh gu bheil NMB a’ sealbhachadh a h-uile neo-chinnteachd** ann an ΔC agus ΔE — càraich le [anailis mothachalachd choltach](../anailis-mothachalachd-coltachdail/).

## Stòran

- York Health Economics Consortium glossary: net monetary benefit. <https://yhec.co.uk/glossary/net-monetary-benefit/>
- Stinnett AA, Mullahy J. "Net health benefits: a new framework for the analysis of uncertainty in cost-effectiveness analysis." <https://pmc.ncbi.nlm.nih.gov/articles/PMC2528971/>
