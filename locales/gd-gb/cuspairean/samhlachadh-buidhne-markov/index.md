# Samhlachadh buidhne Markov

Is e modal buidhne Markov an dòigh modaladh HTA àbhaisteach airson eadar-theachdan aig a bheil buaidhean a’ foillseachadh thairis air iomadh ùine (cuairt), chan ann ann an aon seilbh. Bidh buidheann bhrìgheil a’ tòiseachadh gu tur ann an aon staid slàinte, agus gach cuairt bidh seata stèidhichte de choltasan gluasaid a’ gluasad bloighean den bhuidheann eadar stàitean; bidh cosgaisean agus QALYan a’ cruinneachadh gach cuairt a rèir cia mheud den bhuidheann a tha anns gach staid, agus tha iad air an lasachadh air ais gu luach làithreach. Tha einnseanair bathar-bog sam bith a bhios a’ modaladh cùis ghnìomhachais slàinte didseatach iomadh-bliadhna — far am bi luchd-cleachdaidh no euslaintich a’ gluasad eadar stàitean mar “an sàs”, “air tuiteam”, no “air falbh” thar ùine — a’ togail an aon structair.

## Carson a tha e cudromach

Chan e coimeasan aon-ùine de chosgais is toradh a th’ anns a’ chuid as motha de cho-dhùnaidhean teicneòlais slàinte fìor. Bidh staid leantainneach a’ dol air adhart, a’ tilleadh, a’ freagairt ri leigheas, no a’ marbhadh, thar bhliadhnachan — agus chan urrainn [anailis cosg-èifeachdais](../anailis-cosg-èifeachdais/) aon-ùine sin a riochdachadh. Tha tagraidhean NICE, ICER, agus CADTH airson eadar-theachdan tinneas leantainneach, air an measadh tro [mheasadh teicneòlais slàinte](../measadh-teicneòlais-slàinte/), cha mhòr an-còmhnaidh air an togail mar mhodailean buidhne Markov le fàire-ùine beatha, oir tha an roghainn eile — modaladh gach slighe euslaintich fa leth — do-làimhsichte aig sgèile. Bidh am modal Markov aig ìre buidhne a’ malairt cuid de fhìorachd aig ìre neach (chan urrainn dha cuimhne air stàitean roimhe a riochdachadh gu furasta, mar sin “Markov”: tha an àm ri teachd an eisimeil dìreach air an staid làithreach) airson modail a tha follaiseach, sgrùdaidh, agus luath gu leòr airson a ruith mìltean de thursan ann an [anailis mothachalachd choltach](../anailis-mothachalachd-coltachdail/).

## A’ mhatamataig

```
Ùrachadh buidhne aon chuairt (vectar-sreath x matrix gluasaid):
  new_state[j] = sum_i state[i] * transition_matrix[i][j]

Cosgais aon chuairt:
  cycle_cost = sum_s state[s] * cost_per_cycle[s]

QALYan aon chuairt:
  cycle_qalys = sum_s state[s] * utility[s] * cycle_length_years

Làn shamhlachadh thairis air `cycles` cuairt, air a lasachadh aig `discount_rate`:
  total_discounted_cost  = sum_{t=0}^{cycles-1} cycle_cost(state_t)  / (1 + discount_rate)^t
  total_discounted_qalys = sum_{t=0}^{cycles-1} cycle_qalys(state_t) / (1 + discount_rate)^t
  where state_0 = initial_distribution, state_{t+1} = advance_cohort(state_t, transition_matrix)
```

Bidh lasachadh gach cuairt air ais gu luach làithreach a’ cleachdadh dìreach foirmle [lasachadh agus roghainn ùine](../lasachadh-agus-roghainn-ùine/), air a chur an sàs cuairt air chuairt seach bliadhna air bhliadhna.

## Eisimpleir obrach

**Clionaigeach**: modail 2-staid — `Well` agus `Dead` — far am bàsaich 10% den bhuidheann gach cuairt agus a tha `Dead` ga ghabhail a-steach (is e 1.0 a choltas fèin-ghluasaid; ma dh’fhàgas sinn an lùb sin air falbh, rachadh tomad na buidhne à sealladh às dèidh aon chuairt ann an `Dead`). Bidh a’ bhuidheann a’ tòiseachadh gu tur `Well`, a’ cosg £1,000 gach cuairt fhad ’s a tha `Well` (£0 nuair a tha `Dead`), agus a’ cosnadh 0.8 QALY sa bhliadhna fhad ’s a tha `Well`. Air a shamhlachadh airson 3 cuairtean bliadhnail aig ìre lasachaidh 3.5% NICE:

```
Cycle 0: state = [1.00, 0.00] (100% Well)
  cost = £1,000.00, qalys = 0.800, discount factor = 1.000000
  discounted: cost = £1,000.00, qalys = 0.8000

Cycle 1: state = [0.90, 0.10] (90% Well, 10% Dead)
  cost = £900.00, qalys = 0.720, discount factor = 0.966184
  discounted: cost = £869.57, qalys = 0.6957

Cycle 2: state = [0.81, 0.19] (81% Well, 19% Dead)
  cost = £810.00, qalys = 0.648, discount factor = 0.933511
  discounted: cost = £756.14, qalys = 0.6049

Total discounted cost  ≈ £2,625.71
Total discounted QALYs ≈ 2.1006
```

Is e staid gach cuairt staid na cuairt roimhe air a ghiùlan tron mhatrix gluasaid — fanaidh 90% den 90% a tha fhathast `Well` aig cuairt 1 `Well` aig cuairt 2 (0.9 × 0.9 = 0.81), fhad ’s a tha an 19% eile air bàsachadh a-nis (0.9 × 0.1 + 0.1 × 1.0 = 0.19). Thoir fa-near nach bi `Well` a’ falamhachadh gu tur a-chaoidh: le bàsmhorachd 10% seasmhach gach cuairt agus gun ath-inntrigeadh, bidh a’ bhloigh `Well` a’ crìonadh gu geoimeatrach seach a bhith a’ ruighinn neoni aig àireamh chrìochnaichte de chuairtean.

## Ceangal ri einnseanaireachd bathar-bog

Airson mar a thèid modail HTA iomadh-cuairt a chleachdadh ann am fìor mheasadh, faic [measadh teicneòlais slàinte](../measadh-teicneòlais-slàinte/) — an cùis-iomraidh a tha ag òrdachadh dè an ìre lasachaidh, an stòr feumalachd, agus am fàire-ùine a dh’fheumas modal Markov a chaidh a chur a-steach a chleachdadh.

Tha modal buidhne Markov na inneal-staide gu structarail le gluasadan coltach, air a ruith airson àireamh stèidhichte de thicean, a’ lasachadh luach gach tic. Bidh an aon chumadh a’ samhlachadh cumail-ris/gluasadan staid buidhne luchd-cleachdaidh thar ùine — faic [meatrachan DORA](../meatrachan-dora/) airson an tionndadh earbsachd-obrachaidh de “dè a’ bhloigh den t-siostam a tha ann an staid lùghdaichte san ùine seo, agus dè a chosgas sin”. Gu sònraichte:

- **Modaladh cumail-ris/churn** na mhodal buidhne Markov le stàitean mar “gnìomhach”, “ann an cunnart”, “air falbh”: bidh matrix gluasaid mìosail stèidhichte, air a ruith airson 12 no 24 cuairt mìosail, ag innse dhut an àireamh ris a bheil dùil de luchd-cleachdaidh gnìomhach (agus teachd-a-steach) aig mìos san àm ri teachd, mar a tha `Well`/`Dead` ag innse beò-mhaireannaich ris a bheil dùil.
- **Eaconamas earbsachd is thachartasan**: faodar stàitean siostaim (slàn, lùghdaichte, sìos) a mhodaladh san aon dòigh, le “cosgais gach cuairt” de chron downtime a’ cruinneachadh fhad ’s a tha an siostam anns na stàitean lùghdaichte/sìos — a’ tionndadh argamaid mu bhiodh thachartasan gu argamaid cosgais lasaichte so-choimeasach ri cosgais na h-obrach earbsachd a dh’atharraicheadh na coltasan gluasaid.
- **Stàitean gabhail-a-steach mar stàitean deireannach**: is e `Dead` ann am modal clionaigeach dìreach staid “fo-sgrìobhadh air a chuir dheth” no “dì-cheangailte gu maireannach” ann am modal bathar-bog — feumaidh an dà chuid coltas fèin-ghluasaid soilleir de 1.0, no caillidh an samhlachadh tomad gu sàmhach.

## Cunnartan

- **Coltasan gluasaid nach eil a’ cur suas gu 1 gach sreath.** Bidh sreath a tha a’ cur suas gu barrachd no nas lugha na 1 a’ toirt air a’ bhuidheann tomad “aodraman” no “fàs” gach cuairt gu sàmhach — dèan cinnteach à suimean sreatha an-còmhnaidh mus cuir thu earbsa ann an toradh modail, oir chan eil structar a’ mhodail fhèin a’ comharrachadh a’ mhearachd.
- **Fad cuairt ro gharbh airson fìor dhinamaigean an tinneis.** Bidh cuairt bhliadhnail airson staid a dh’atharraicheas gu brìoghmhor taobh a-staigh seachdainean a’ fo-thomhas gluasadan a thachras letheach slighe tron chuairt; tagh fad cuairt goirid an coimeas ri cho luath ’s a ghluaiseas am pròiseas a tha air a mhodaladh.
- **A’ dì-chuimhneachadh lùb fèin-ghluasaid staid ghabhail-a-steach.** Feumaidh staid ghabhail-a-steach (bàs, sgur maireannach) coltas fèin-ghluasaid dìreach 1.0. Fàg air falbh e agus falbhaidh tomad na buidhne san staid sin às dèidh aon chuairt, a’ fo-thomhas cosgaisean cruinnichte no call QALY.
- **A’ làimhseachadh a’ mhodail mar dhearbhte oir ruitheas e.** Faodaidh modal buidhne Markov le coltasan gluasaid a tha a’ coimhead reusanta a bhith ceàrr gu structarail (stàitean a dhìth, giùlan gabhail-a-steach ceàrr); dearbh an aghaidh slatan-tomhais eipidemiologach aithnichte (m.e. a bheil mairsinneachd mhodaladh aig 5 bliadhna a’ maidseadh lùban mairsinneachd foillsichte) mus cuir thu earbsa san toradh.

## Stòran

- Sonnenberg FA, Beck JR. "Markov models in medical decision making: a practical guide." Medical Decision Making. 1993;13(4):322-38. <https://pubmed.ncbi.nlm.nih.gov/8246705/>
- Briggs A, Sculpher M. "An introduction to Markov modelling for economic evaluation." PharmacoEconomics. 1998;13(4):397-409. <https://pubmed.ncbi.nlm.nih.gov/10178664/>
