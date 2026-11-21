# Lasachadh agus roghainn ùine

Bidh lasachadh a’ tionndadh chosgaisean is bhuannachdan san àm ri teachd gu luachan làithreach, oir tha buannachd an-diugh nas luachmhoire na an aon bhuannachd ann an còig bliadhna.

## Carson a tha e cudromach

Bidh gach measadh eaconamas slàinte agus gach cùis-ghnìomhachais sheòrsa poblach dhùrachdach a’ lasachadh shruthan ioma-bliadhna. Bidh Green Book Roinn an Ionmhais na RA ag òrdachadh ìre roghainn ùine shòisealta 3.5% gach bliadhna; bidh iuchair-chùis NICE a’ lasachadh an dà chuid cosgaisean agus buaidhean slàinte aig 3.5% gach bliadhna (le ìre 1.5% neo-iuchair-chùis airson leigheasan cha mhòr-leigheis le buannachdan thairis air 30+ bliadhna). Ma tha do chùis-ghnìomhachais bathar-bog ag ràdh “£5 millean de shàbhalaidhean thairis air 10 bliadhna,” iarraidh neach-ath-sgrùdaidh ionmhais sa bhad am figear lasaichte.

## A’ mhatamataig

Luach làithreach suim san àm ri teachd:

```
PV = FV / (1 + r)^t

PV = luach làithreach
FV = luach san àm ri teachd sa bhliadhna t
r  = ìre lasachaidh (NICE/Green Book: 0.035)
t  = bliadhnaichean bho nis
```

Airson buannachd bhliadhnail sheasmhach B thar n bliadhna (bliadhnachd):

```
PV = B × [1 − (1 + r)^(−n)] / r
```

## Eisimpleir obrach

Bidh do bhathar-bog a’ sàbhaladh £100,000 gach bliadhna do dh’urras NHS airson 5 bliadhna, a’ tòiseachadh bliadhna às dèidh go-live.

Iomlan gun lasachadh: £500,000.

Lasaichte aig 3.5%:

```
Bliadhna 1: 100,000 / 1.035^1 = £96,618
Bliadhna 2: 100,000 / 1.035^2 = £93,351
Bliadhna 3: 100,000 / 1.035^3 = £90,194
Bliadhna 4: 100,000 / 1.035^4 = £87,144
Bliadhna 5: 100,000 / 1.035^5 = £84,197

PV iomlan ≈ £451,505
```

Is e an ceann-naidheachd onarach mu £451,000, timcheall air 10% nas lugha na an t-suim shìmplidh. A-nis ma shleamhnaicheas lìbhrigeadh bliadhna: gluaisidh gach teirm bliadhna nas anmoiche, agus thuiteas an PV gu mu £436,000 – sealladh lasachaidh na [cosgais dàil](../cosgais-dàil/).

## Ceangal ri einnseanaireachd bathar-bog

- **Pàigheadh fiachan teignigeach agus imrichean àrd-ùrlair** a’ geallsinn shruthan bhuannachdan bliadhnaichean air falbh; lasaich iad mus dèan thu coimeas ri obair a phàigheas air ais an ràithe seo.
- **Cosgaisean air thoiseach, buannachdan air dheireadh** an cumadh àbhaisteach imrich. Bidh lasachadh a’ peanasachadh a’ chumaidh sin, gu ceart: bidh e a’ cur prìs air luach-ùine gun chunnart a bhith a’ gealltainn comais a-nis airson luach nas anmoiche.
- **Tagraidhean “sàbhalaidhean sa bhliadhna 5”** airidh air amharas dà thuras – tha iad air an lasachadh gu mòr agus gu math mì-chinnteach (faic [anailis mothachalachd](../anailis-mothachalachd/)).

## Cunnartan

- **A’ lasachadh chosgaisean ach chan e bhuannachdan** (no an taobh eile) – bidh an iuchair-chùis a’ lasachadh an dà chuid, aig an aon ìre.
- **A’ cleachdadh ìre mhalairteach (8–12%) ann an cùis phoblach**, no 3.5% ann an fear le tacadh tha-cothrom. Co-òrdanaich an ìre ris an neach-co-dhùnaidh.
- **A’ measgachadh lasachaidh le atharrachadh prìsean.** Bidh lasachadh a’ buntainn ri luachan *fìor* (air an atharrachadh airson atharrachadh prìsean); na dèan an dà chuid gu dìomhair.

## Stòran

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- HM Treasury Green Book, discounting supplementary guidance. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
