# Puingean-deiridh didseatach agus bith-chomharran

Is e bith-chomharra didseatach tomhas obrachail fiosaigeach no giùlain a chaidh a chruinneachadh tro mhothaichearan (astar coiseachd bho fòn, cadal bho wearable, crith bho accelerometry). Is e puing-dheireadh didseatach tomhas mar sin a chaidh àrdachadh gu **builean deuchainn** – air a chleachdadh gus buaidh leigheis a dhearbhadh. Tha an àrdachadh bho “dàta a thàirgeas an inneal” gu “fianais a ghabhas riaghladair” a’ ruith tro dhreach-sgèile dearbhaidh mìnichte.

## Carson a tha e cudromach

Tha puingean-deiridh deuchainn traidiseanta eadar-amail (tadhal clionaig gach 3 mìosan) agus daor; tha puingean-deiridh didseatach leantainneach, eag-eòlasach (fìor bheatha, chan e dèanadas clionaig), agus saor gach amharc – faodaidh iad deuchainnean a lùghdachadh, buaidhean a lorg nas tràithe, agus sgrùdaidhean sgaoilte a chomasachadh. Is e an cnap-starra dearbhadh: feumaidh am frèam aontaichte (co-thaobhaichte ris an FDA, trì colbhan) **dearbhadh/dearbhadh anailis** (tha am mothaichear a’ tomhas na h-aonaid fhiosaigeach gu ceart), **dearbhadh clionaigeach** (tha an tomhas a’ nochdadh na staid chlionaigeach a tha e ag ràdh), agus **taobh brìoghmhor de shlàinte** (tha cùram aig euslaintich dhe na tha e a’ glacadh). Chan e fianais a th’ ann am puing-dheireadh às aonais na trì, ach telemetry.

## A’ mhatamataig

```
Dearbhadh anailis:    aonta ri iomradh (faic wearable-validation.md —
                      MAPE, CCC, Bland-Altman)
Dearbhadh clionaigeach: co-cheangal/leth-bhreith an aghaidh acraichean clionaigeach
                      (dligheachd bhuidhnean aithnichte, mothachalachd air atharrachadh)
Eaconamas puing-dheireadh:
  tachartasan air an lorg gach euslainteach-bliadhna (leantainneach) an aghaidh sampall gach tadhal
  cumhachd deuchainn: bidh tomhasan leantainneach a’ lùghdachadh meud sampaill nuair a bhios
  caochlaideachd eadar tadhalan a’ riaghladh — N ∝ σ²/Δ², agus bidh σ² a’ tuiteam le sampall dùmhail
```

## Eisimpleir obrach

Tha deuchainn Parkinson a’ beachdachadh air astar coiseachd bho mhothaichear dùirn an aghaidh sgòran clionaig ràitheil:

```
Puing-dheireadh clionaig:   4 tomhas/euslainteach/bliadhna, fuaim àrd latha-gu-latha
Puing-dheireadh didseatach: ~200 tomhas fulangach/euslainteach/bliadhna

Bidh caochlaideachd tuairmse atharrachaidh bhliadhnail a’ tuiteam ~5× le sampall dùmhail →
bidh meud buaidh so-lorg aig cumhachd stèidhichte ag adhartachadh ~√5 ≈ 2.2×, no
co-ionann bidh meud sampaill a’ crìonadh ~40–60% airson an aon bharail.
Aig £25,000 gach euslainteach clàraichte, tha gearradh 200 euslainteach ≈ £5M air a shàbhaladh
gach deuchainn — a’ chùis mhalairteach airson an tasgaidh dearbhaidh
(fhèin ’s dòcha £1–2M) thar loidhne-phìoban neach-taice.
```

## Ceangal ri einnseanaireachd bathar-bog

Is e smachd einnseanaireachd dàta ann an aodach clionaigeach a th’ ann am puingean-deiridh didseatach: **tùs agus tionndadh** (tha ùrachaidhean algairim ann am meadhan sgrùdaidh a’ bagairt co-choimeasachd – duilgheadas [PCCP](../measadh-riaghlaidh-ai/) ann an cruth deuchainn; glasaich tionndadh agus dearbh drochaid); **dealbhadh dàta a tha a dhìth** (tha beàrnan ùine-caitheamh fiosrachail, chan e air thuaiream – faic [dearbhadh wearable](../dearbhadh-uidheaman-caitheamh/); is e tagraidhean saidheansail roghainnean in-lìonaidh); agus **co-dhùnaidhean sgoltadh oir/neul** a dh’atharraicheas dè an comharra amh a gheibhear air ais nas anmoiche. Bidh sgiobaidhean a làimhsicheas an loidhne tomhais mar bhathar-bog riaghlaichte bho latha 1 – deuchainn, tionndaidhte, sgrìobhte – a’ ceannach creideas am puingean-deiridh gu saor; is e ath-fhillte dearbhadh air loidhne a ghluais luath far am bàsaich prògraman puing-dheireadh didseatach.

## Cunnartan

- **Co-cheangal ri clionaig mar dhearbhadh slàn**: tha a bhith a’ freagairt air tomhas clionaig easbhaidheach a’ dearbhadh dìleab, chan e fìrinn; dearbh an aghaidh taobh brìoghmhor na slàinte.
- **Cunnart riaghlaidh puing-dheireadh ùr**: faodaidh puing-dheireadh gun eisimpleir a bhith nas fheàrr gu saidheansail agus fhathast tagradh a dhol fodha – gabh pàirt le riaghladairean tràth (tha prògraman teisteanais ann).
- **Mì-fhreagarrachd mothaichear-sluagh**: dearbhadh ann an dùirn òga fallain, cleachdadh ann an euslaintich aosta le crith agus eadar-dhealachaidhean pigmentation nach fhaca am PPG a-riamh.
- **Gluasad feart**: bidh ath-thrèanadh an algairim coiseachd air dàta ùr ag ath-mhìneachadh an puing-dheireadh gu sàmhach ann am meadhan sgrùdaidh.

## Stòran

- Coravos A, Khozin S, Mandl KD. "Developing and adopting safe and effective digital biomarkers to improve patient outcomes." npj Digital Medicine 2019. <https://www.nature.com/articles/s41746-019-0090-4>
- Digital Medicine Society (DiMe), digital endpoints resources. <https://dimesociety.org/>
