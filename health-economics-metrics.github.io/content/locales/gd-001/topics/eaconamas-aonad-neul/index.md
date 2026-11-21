# Eaconamas aonad neul (FinOps)

Bidh eaconamas aonad neul a’ eadar-theangachadh caitheamh neòil amh gu **cosgais gach aonad toraidh** – gach neach-ceannach, gach malairt, gach cùis air a rèiteachadh, gach tòcan. Is e comas FinOps a th’ ann a thionndaidheas “is e £400k/mìos a th’ anns a’ bhile AWS againn” gu “tha frithealadh aon euslainteach a’ cosg £0.83.”

## Carson a tha e cudromach

Chan urrainn do dh’àireamhan caitheamh iomlan na ceistean cudromach a fhreagairt: a bheil an toradh a’ fàs nas èifeachdaiche no nas lugha? A bheil fàs a’ leasachadh no a’ sgrios iomall? Dè bu chòir dhuinn a chìsean? Bidh cosgaisean aonaid a’ freagairt nan trì. Airson slàinte didseatach gu sònraichte, tha “cosgais gach cùis air a rèiteachadh” *na* chosgais aonaid seirbheis slàinte – dìreach so-choimeasach ri figearan [Cruinneachadh Cosgais Nàiseanta](../taraif-nàiseanta-agus-cosgaisean-aonaid/) a bhios coimiseanair a’ cleachdadh airson gach seirbheis eile, a nì e na chànan nàdarra airson slighean didseatach a phrìsealachadh an aghaidh feadhainn traidiseanta.

## A’ mhatamataig

```
Cosgais aonaid = làn-chosgais riaghailte (a’ gabhail a-steach cosgaisean co-roinnte/àrd-ùrlair) / aonadan air an lìbhrigeadh

Dà theaghlach:
  aonadan èifeachdas goireasan: cosgais/GB air a stòradh, cosgais/vCPU-uair, cosgais/tòcan,
                             cosgais/mionaid togail
  aonadan gnìomhachais:       cosgais/neach-ceannach, cosgais/malairt, cosgais/co-chomhairle,
                             cosgais/cùis air a rèiteachadh

Tha smachd iomaill an aghaidh cuibheasach a’ buntainn (marginal-vs-average-cost.md):
bidh caitheamh geallta/glèidhte a’ dèanamh cosgais aonaid iomaill ≈ 0 gus an ath cheum geallaidh —
cuir prìs air co-dhùnaidhean leudachaidh aig iomall, treandan èifeachdais aig cuibheasach.
```

## Eisimpleir obrach

Seirbheis triage didseatach: caitheamh neòil £62,000/mìos (coimpiutaireachd £30k, dàta £18k, riarachadh àrd-ùrlair co-roinnte £14k), a’ làimhseachadh 380,000 tachartas triage/mìos:

```
Cosgais chuibheasach gach tachartais = 62,000 / 380,000 ≈ £0.163

Coimeas coimiseanair: triage fòn ≈ £8–12/gairm, co-chomhairle GP ≈ £42
→ bidh tachartas didseatach a’ ruith aig ~2% den roghainn dhaonna as saoire – eaconamas
gluasad seanail gds-service-metrics.md, bhon taobh chosgais.

Sgrùdadh treand: an-uiridh £0.21/tachartas aig 240k tachartas → eaconamas sgèile a’ dol am feabhas
(cosgaisean àrd-ùrlair stèidhichte ga sgaoileadh), airidh air ceann-naidheachd san QBR.
```

## Ceangal ri einnseanaireachd bathar-bog

Is e eaconamas aonaid far a bheil roghainnean einnseanaireachd a’ fàs so-leughaidh don ionmhas: tha ailtireachd a lughdaicheas cosgais gach tachartais na leth na bhuannachd prìsidh; tha fear a sgèileas os-loidhneach na bhomb-ùine ri fhaicinn san mheatrach seo a-mhàin. Cleachdaidhean a ghluaiseas bho chosgais slàinte: **foillsich na riaghailtean riarachaidh** (bha cosgaisean co-roinnte a’ cur dragh air figearan gach aonaid gus an do shònraich PLICS cosgadh aig ìre euslaintich – feumaidh riarachadh cosgais àrd-ùrlair agad an aon chruaidhead); **tagh aonadan anns a bheil an neach-ceannach a’ smaoineachadh** (bidh coimiseanairean a’ ceannach thachartasan, chan e vCPUan); agus bi a’ biathadh cosgaisean aonaid a-steach do gach modail [ICER](../co-mheas-cosg-èifeachdais-àrdachaidh/) agus [buaidh buidseit](../anailis-buaidh-buidseit/) mar an roinnear cosgais ùghdarrasach. Airson feartan AI, is e an tòcan an t-aonad – faic [eaconamas aonad inference](../eaconamas-aonad-inference/).

## Cunnartan

- **A’ dearmad cosgaisean co-roinnte**: bidh cosgaisean aonaid às aonais riarachaidhean àrd-ùrlair/tèarainteachd/on-call a’ ro-ìsleachadh 30–50% agus a’ tuiteam aig sgrùdadh.
- **Roinnearan dìomhain**: bidh “cosgais gach gairm API” a’ brosnachadh; bidh “cosgais gach tachartais euslaintich crìochnaichte” a’ fiosrachadh.
- **Prìsealachadh cuibheasach air co-dhùnaidhean iomaill**: a’ cur cosgais aonaid chuibheasach air sgiobaidhean airson cleachdadh a tha saor aig an iomall a’ stiùireadh taigh-cluiche seachnaidh sgudail (faic [pàigheadh nàiseanta](../taraif-nàiseanta-agus-cosgaisean-aonaid/) airson dreach an NHS den bhiog brosnachaidh seo).

## Stòran

- FinOps Foundation, unit economics. <https://www.finops.org/framework/capabilities/unit-economics/>
- FinOps Foundation, introduction to cloud unit economics. <https://www.finops.org/wg/introduction-cloud-unit-economics/>
