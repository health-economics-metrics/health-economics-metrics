# Measadh AI clionaigeach

Na prìomh staitistigean airson AI clionaigeach no modail breithneachaidh a mheasadh: mothachalachd, sònrachas, AUROC, luachan ro-innseach, agus an àireamh a dh’fheumar a sgrùdadh. Am prìomh leasan eaconamach: **chan eil AUROC sàr-mhath a’ dèanamh cleachdadh cosg-èifeachdach** – tha luach an urra ris a’ phuing obrachaidh, an coitcheannas, agus na thachras sìos an t-srutha bho gach deimhinneach.

## Carson a tha e cudromach

Bidh riaghladairean (FDA, MHRA) ag ùghdarrachadh AI clionaigeach aig **puing obrachaidh glaiste** – paidhir mothachalachd/sònrachas shònraichte (m.e. a’ chiad siostam fèin-obrachail retinopathy siùcair a chaidh a ghlanadh leis an FDA: mothachalachd 87.2%, sònrachas 90.7% san deuchainn ghnìomhach aige). Bidh eaconamaichean slàinte an uairsin a’ faighneachd a’ cheist nach urrainn meatrachan cruinneis a fhreagairt: aig coitcheannas sluagh do chleachdaidh, dè a chosgas gach lorg *dha-rìribh*, agus a bheil e luach gnìomh a dhèanamh air? Sheall measadh eaconamach air AI sgrùdaidh retinopathy (npj Digital Medicine 2024) nach d’ thug cruinneas nas àirde leis fhèin cosg-èifeachdas cinnteach nuair a chaidh cosgaisean tarraing a chunntadh.

## A’ mhatamataig

```
Mothachalachd = TP / (TP + FN)        — dhe na fìor dheimhinneach, a’ cho-roinn a chaidh a ghlacadh
Sònrachas     = TN / (TN + FP)        — dhe na fìor dhiùltach, a’ cho-roinn a chaidh a ghlanadh
AUROC         = P(bidh am modail a’ rangachadh deimhinneach air thuaiream os cionn diùltach air thuaiream)
              0.5 cothrom … 1.0 foirfe; neo-eisimeileach air stairsneach — agus mar sin
              neo-iomlan airson co-dhùnadh cleachdaidh

PPV = TP / (TP + FP)   ← an urra ri coitcheannas (Bayes); a’ tuiteam nuair a tha e tearc
NPV = TN / (TN + FN)

NNS  ≈ 1 / (coitcheannas × mothachalachd)  — air an sgrùdadh gach fìor chùis a chaidh a lorg
Cosgais gach fìor chùis = cosgais prògraim / TP — am bun-loidhne eaconamach
```

## Eisimpleir obrach

An aon mhodail, dà shuidheachadh – mothachalachd 90%, sònrachas 93%:

```
Clionaig speisealta (coitcheannas 20%):
  PPV = (0.9×0.2)/(0.9×0.2 + 0.07×0.8) = 0.18/0.236 ≈ 76%  → 3 à 4 rabhaidhean fìor

Prìomh chùram (coitcheannas 1%):
  PPV = (0.9×0.01)/(0.9×0.01 + 0.07×0.99) = 0.009/0.0783 ≈ 11.5%
  → 8 à 9 rabhaidhean meallta; obair-sgrùdaidh aig £350 gach fear:
  cosgais gach fìor chùis = (0.009 + 0.0693) × 350 / 0.009 ≈ £3,045 gach cùis a chaidh a lorg
```

An aon mhodail, eaconamas gu tur eadar-dhealaichte – is e sin carson a tha measadh sònraichte-làraich na chuspair riaghlaidh agus carson a tha “tha AUROC 0.95 aig ar modail” na thoiseach cùis eaconamach, chan e a deireadh. Faic [eaconamas sgrùdaidh](../eaconamas-sgrìonaidh/) airson matamataig slàn a’ phrògraim.

## Ceangal ri einnseanaireachd bathar-bog

Dha einnseanairean a tha a’ togail no a’ ceannach AI clionaigeach: **cuir a-mach am matrix measgachaidh aig coitcheannas cleachdaidh**, chan e lùb ROC a-mhàin; **leig leis an stairsneach a bhith na cho-dhùnadh eaconamach** – bu chòir don chothromachadh sens/spec cosgais ris a bheil dùil a lùghdachadh (cùisean air chall × cosgais call an aghaidh rabhaidhean meallta × cosgais obair-sgrùdaidh), chan e staitistig slat-tomhais a mheudachadh; agus aithnich an aon mhatamataig anns na h-innealan agad fhèin – siostaman rabhaidh, lorgairean neo-riaghailteachd, agus sganairean tèarainteachd nan deuchainnean breithneachaidh thairis air sruthan thachartasan le coitcheannas ìosal, le sgìths rabhaidh mar an [NNH](../àireamh-a-dh-fheumar-a-làimhseachadh/). Bidh ùrachaidhean modail a ghluaiseas a’ phuing obrachaidh ag ath-fhosgladh an eaconamais (agus a’ ghlanaidh riaghlaidh – faic [measadh riaghlaidh AI](../measadh-riaghlaidh-ai/)).

## Cunnartan

- **Ceannach cuairt AUROC**: a’ coimeas mhodailean air AUROC nuair a ruitheas iad aig aon stairsneach – dèan coimeas aig a’ phuing obrachaidh.
- **PPV coitcheannas-deuchainn air a luaidh airson cleachdadh san t-saoghal fhìor** – an clasaigeach; ath-àireamhaich an-còmhnaidh aig coitcheannas ionadail.
- **Claonadh speactram**: bidh modailean a chaidh a dhearbhadh air cùisean follaiseach an aghaidh smachdan slàn a’ dèanamh nas fheàrr na an dearbhadh air a’ mheadhan neo-shoilleir a tha a’ riaghladh cleachdadh.
- **Gun chosgadh slighe sìos-an-t-srutha**: bidh gach deimhinneach a’ cur obair-sgrùdaidh air bhog; tha modail na eadar-theachd air eaconamas na slighe *gu lèir*.

## Stòran

- Diagnostic accuracy measures reference. <https://www.medcalc.org/en/manual/roc-curves.php>
- Economic evaluation of AI retinopathy screening, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01032-9>
- Laupacis et al., NEJM 1988 (NNT foundations). <https://pubmed.ncbi.nlm.nih.gov/3374545/>
