# SPACE agus DevEx

Is e SPACE (Satisfaction & well-being, Performance, Activity, Communication & collaboration, Efficiency & flow) agus DevEx (cuairtean-fios-air-ais, eallach inntinneil, staid sruthaidh) frèaman airson cinneasachd luchd-leasachaidh a thomhas **ioma-thomhaiseach** – freagairt na h-obrach don lorg nach seas aon mheatrach ri fìrinn.

## Carson a tha e cudromach

Bidh an dà fhrèam a’ cuimsicheadh an aon leasain a dh’ionnsaich rannsachadh thoraidhean slàinte deicheadan na bu thràithe: bidh aon àireamh (loidhnichean còd; cuideam-fala) a’ mì-riochdachadh fìrinn ioma-thomhaiseach, agus bidh a bhith ga ghleusadh a’ toirt gheamachd, chan e leasachadh. Bidh SPACE ag òrdachadh meatrachan a cho-cheangal bho co-dhiù trì tomhasan, a’ measgachadh telemetry le fèin-aithris – structarail co-ionann ris mar a bhios [EQ-5D](../eq-5d/) a’ dèanamh pròifil de chòig tomhasan mus tèid clàr-amais sam bith àireamhachadh, agus carson a tha [PROMs](../builean-air-an-aithris-le-euslaintich/) ann an cois tomhasan clionaigeach. Chan e sgeadachadh bog a th’ ann an sàsachd/sunnd: bidh e a’ biathadh eaconamas [cumail luchd-obrach](../cumail-na-h-obair-lìbhrigidh/), far a bheil ìsleachadh air a phrìsealachadh ann am mìosan de thuarastal làn.

## A’ mhatamataig

Chan eil frèam sam bith na fhoirmle; tha an dithis nan dealbhaidhean tomhais:

```
SPACE rule: ≥ 3 dimensions, ≥ 1 perceptual (survey) + ≥ 1 system (telemetry) metric

DevEx dimensions and example pairings:
  feedback loops  → CI duration (telemetry) + "waiting feels slow" (survey)
  cognitive load  → docs findability, onboarding time + perceived effort
  flow state      → meeting/interrupt density + self-reported focus

Derived indices (e.g., DX's DXI) map survey composites to time:
vendor claim ≈ 13 min/dev/week per index point — treat as a vendor
benchmark to validate locally, not a constant of nature.
```

## Eisimpleir obrach

Bidh sgioba ùrlair a’ fìreanachadh tasgadh DevEx (luathachadh CI + ath-obair docaichean) airson 300 neach-leasachaidh:

```
Baseline: CI p75 = 28 min; survey "I lose focus waiting for builds": 62% agree
After:    CI p75 = 9 min;  agreement 24%

Time reclaimed (telemetry): 6 builds/day × 19 min × 0.4 usable = ~45 min/day/dev
Capacity value: 300 × 0.75h × 220d × £60/h ≈ £2.97M/year (non-cash-releasing —
see cash-releasing-vs-non-cash-releasing.md; the 0.4 usability factor is the
fragmentation discount from practitioner-time.md)
Perceptual corroboration is what makes the telemetry claim credible — either
alone is gameable; together they triangulate.
```

## Ceangal ri einnseanaireachd bathar-bog

Is e an sgrìobhainn seo *fhèin* taobh a’ bhathar-bhog; tha an gluasad a’ ruith a dh’ionnsaigh eaconamas slàinte. Is e “bliadhna einnseanair le càileachd air atharrachadh” – ùine air a cuideachadh le clàr-amais eòlais àbhaisteach – togail a’ [QALY](../bliadhna-beatha-le-atharrachadh-càileachd/) air a chur an sàs ann an comas einnseanaireachd, agus tha e a’ sealbhachadh riaghailtean a’ QALY: cuideaman bho ionnstramaid dhearbhte (sgrùdadh cunbhalach, sgòradh foillsichte), air an togail *mus* tèid an coimeas a dhèanamh, gun a bhith gu bràth air an gleusadh gus inneal as fheàrr leotha a mhiadachadh. Tha leasan [SF-6D an aghaidh EQ-5D](../eq-5d/) a’ buntainn cuideachd: bheir ionnstramaidean eadar-dhealaichte àireamhan eadar-dhealaichte gu rianail, mar sin na dèan coimeas eadar clàran-amais DevEx thar ionnstramaidean reiceadairean.

## Cunnartan

- **Tuiteam gu aon mheatrach**: bidh deas-bhùird a lùghdaicheas SPACE gu aon sgòr ag ath-chruthachadh na duilgheadas a tha am frèam ann gus casg a chur air.
- **Meatrachan gnìomhachd mar thoraidhean**: tha commits, PRan, agus puingean sgeòil nan Gnìomhachd – an tomhas a tha SPACE a’ toirt rabhadh gu soilleir mar an tè as so-gheamachd (co-ionann slàinte: cunntadh làimhseachaidhean, chan e ath-bheothachaidhean).
- **Sgìths sgrùdaidh agus buaidhean Hawthorne**: bidh ionnstramaidean aotrom ràitheil a’ buannachadh air ceasnachadh seachdaineil.
- **Coimeas sgiobaidhean**: coltach ri clàran-ìre ospadail gun atharrachadh measgachaidh chùisean – tha eadar-dhealachaidhean co-theacsa (raon, eallach dìleabach, on-call) làidir.

## Stòran

- Forsgren N, et al. "The SPACE of Developer Productivity." ACM Queue 2021. <https://queue.acm.org/detail.cfm?id=3454124>
- Noda A, Forsgren N, Storey MA, Greiler M. "DevEx: What Actually Drives Productivity." ACM Queue 2023. <https://queue.acm.org/detail.cfm?id=3595878>
