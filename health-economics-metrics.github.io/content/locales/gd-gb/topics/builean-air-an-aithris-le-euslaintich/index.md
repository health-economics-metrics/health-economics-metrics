# Builean air an aithris le euslaintich (PROMs, PREMs, MCID)

Is e ionnsramaidean inbhe a th’ ann am PROMs anns am bi euslaintich ag aithris air an staid slàinte aca fhèin (comharran, gnìomh, càileachd beatha); bidh PREMs a’ glacadh *eòlas* na cùraim. Is e an **MCID** – an eadar-dhealachadh as lugha a tha cudromach gu clionaigeach – an t-atharrachadh sgòir as lugha a tha euslaintich a’ faicinn mar bhuannachd: an ìre a dh’fheumas leasachadh sam bith a thathar ag ràdh a ruigheachd.

## Carson a tha e cudromach

Is e PROMs am prìomh airgead-iomlaid èifeachdais airson slàinte didseatach: is ann ainneamh a bhios appan a’ gluasad bàsmhorachd, ach faodaidh iad sgòran comharran dearbhte a ghluasad gu creidsinneach. Chan eil ach beagan ionnsramaidean cudromach ann, agus tha iad àbhaisteach – **PHQ-9** (trom-inntinn, 0–27; bannan cruinn aig 5/10/15/20), **GAD-7** (iomagain, 0–21; bannan aig 5/10/15), **EQ-5D** (fheumalachd airson [QALYan](../bliadhna-beatha-le-atharrachadh-càileachd/)) – agus bidh riaghladairean, buidhnean HTA, agus luchd-pàighidh gan gabhail air sgàth ’s gu bheil iad so-choimeasach eadar toraidhean is deuchainnean. Is e an MCID geata na h-ionracais: PHQ-9 MCID ≈ 5 puingean, GAD-7 ≈ 4, clàr-amais EQ-5D mar as trice ~0.03–0.08 – tha atharrachadh 1.5-puing PHQ-9 a tha cudromach gu staitistigeil air sampall mòr *fìor ach gun bhrìgh chlionaigeach*, agus their neach-measaidh fianais sin.

## A’ mhatamataig

```
Sgòradh PROM: suimean sònraichte do dh’ionnsramaid (m.e., PHQ-9 = Σ 9 nithean × 0–3)

Tuairmse MCID:
  stèidhichte air acair:      atharrachadh sgòir am measg euslaintich a tha ag aithris “beagan nas fheàrr”
  stèidhichte air cuairteachadh: ≈ 0.5 × SD de sgòran bunaiteach (heuristic garbh)

Frèamadh ìre freagairt (airson deuchainnean is dossiers):
  freagairteach = euslainteach a’ leasachadh ≥ MCID (no ≥50% do chleachdadh PHQ-9)
  NNT = 1 / (ìre fhreagairteach_làimhseachadh − ìre fhreagairteach_smachd)
  — faic number-needed-to-treat.md
```

## Eisimpleir obrach

Aplacaid taic trom-inntinn, RCT an aghaidh liosta feitheimh, 12 seachdainean:

```
Atharrachadh PHQ-9: app −6.2 puingean, smachd −2.1 → eadar-dhealachadh atharraichte −4.1
Sgrùdadh MCID: 4.1 < 5 → eadar-dhealachadh cuibheasach fo MCID; aithris luchd-freagairt an àite:
  luchd-freagairt (tuiteam ≥5-puing): app 48%, smachd 22% → ARR 26%
  NNT = 1/0.26 ≈ 4 — ceithir luchd-cleachdaidh air an làimhseachadh gach freagairt chlionaigeach a bharrachd

Drochaid eaconamach: buannachd EQ-5D luchd-freagairt 0.06 seasmhach 6 mìosan
  = 0.03 QALYan; gach 1,000 neach-cleachdaidh: 260 freagairtean a bharrachd × 0.03 = 7.8 QALYan
  ≈ £156,000–£234,000 de luach slàinte aig stairsnich NICE
```

Mairidh am frèam luchd-freagairt/NNT sgrùdadh far am biodh an eadar-dhealachadh cuibheasach fo-MCID air a dhiùltadh.

## Ceangal ri einnseanaireachd bathar-bog

Is e duilgheadas cruinneachadh dàta a th’ ann am PROMs a tha bathar-bog gu sònraichte freagarrach airson fhuasgladh: bidh ionnsramaidean san app a’ faighinn ìrean coileanaidh agus dùmhlachd fhad-ùine nach d’ ràinig pàipear a-riamh, a’ tionndadh telemetry toraidh àbhaisteach gu fianais ìre HTA (tha [EQ-5D](../eq-5d/) na chòig sgrìnichean). Riaghailtean einnseanaireachd: cleachd an ionnsramaid dhearbhte *facal air an fhacal* (tha ath-fhaclachadh ga dhèanamh mì-dhligheach – bidh ceadachd a’ buntainn); clàraich tomhas a rèir pròtacal, chan ann a rèir goireasachd com-pàirteachais (chan eil tomhas luchd-cleachdaidh gnìomhach a-mhàin ach claonadh mairsinneachd – faic [cumail](../cumail-air-cleachdaichean-agus-call-chleachdaichean/)); agus glais tionndadh dàta ionnsramaid mar sgeama sam bith – is e truailleadh dàta a th’ ann an atharrachadh facail meadhan-sgrùdaidh. Bidh PREMs a’ mapadh gu ionnsramaidean mar CSAT/NPS, agus tha an aon leasan a’ buntainn: bidh ìnbhe a’ bualadh rud dachaigh-dhèanta nuair is e neach-pàighidh an luchd-èisteachd. Airson ionnsramaid shònraichte do thoradh-obrach, faic [WPAI](../lùghdachadh-cinneasachd-obrach-is-gnìomhachd/).

## Cunnartan

- **Cudromachd staitistigeil fo MCID** air a thaisbeanadh mar bhuannachd chlionaigeach – am meudachadh as cumanta san raon.
- **Ais-tilleadh chun a’ mheadhain**: bidh luchd-cleachdaidh a’ clàradh aig ìrean as àirde comharran; bidh ro-/às-dèidh aon-ghàirdean a’ cus-mheudachadh gu mòr – chan eil coimeasairean ri sheach-seachnadh.
- **Ceannach ionnsramaid**: a’ ruith PHQ-9, GAD-7, agus WHO-5, agus an uair sin ag aithris dè a ghluais – ro-chlàraich am prìomh fhear.
- **Cuideam sgrùdaidh cead didseatach**: a’ putadh luchd-cleachdaidh gu freagairtean fàbharach a’ truailleadh na h-ionnsramaid (agus tha na h-ìrean bunaiteach aig luchd-measaidh).

## Stòran

- MCID estimation review (EQ-5D). <https://pmc.ncbi.nlm.nih.gov/articles/PMC10526144/>
- PROMs vs PREMs primer. <https://www.forcetherapeutics.com/blog/whats-the-difference-between-pros-proms-pro-pms-and-prems>
- Kroenke K, et al. PHQ-9 validation literature. <https://pubmed.ncbi.nlm.nih.gov/11556941/>
