# Anailis cosgais-buannachd (CBA)

Bidh CBA a’ cur luach airgid air an dà chuid cosgaisean *agus* builean. Is e an aon seòrsa anailis a fhreagras “a bheil seo airidh air a dhèanamh idir?” – chan e dìreach “dè an roghainn as fheàrr?” – oir faodar buannachdan ann an airgead a choimeas dìreach ri cosgaisean.

## Carson a tha e cudromach

Is e CBA inbhe **Green Book** Roinn an Ionmhais na RA airson measadh caitheamh poblach gu lèir, slàinte nam measg nuair a ghabhas builean a chur ann an airgead. Far am bi [CEA](../anailis-cosg-èifeachdais/)/[CUA](../anailis-cosgais-fheumalachd/) a’ stad aig “cosgais gach aonad slàinte,” bidh CBA a’ cur prìs air an t-slàinte fhèin (QALY × luach stairsnich) agus air a h-uile càil eile – ùine, siubhal, gualain – agus ag aithris aon fhigear glan. Tha cùis eaconamach cumadh CBA anns gach cùis-ghnìomhachais didseatach slàn aig an NHS.

## A’ mhatamataig

```
NPV (luach sòisealta làithreach glan) = Σ_t [ (Buannachdan_t − Cosgaisean_t) / (1 + r)^t ]
BCR (co-mheas buannachd-cosgais)      = PV(buannachdan) / PV(cosgaisean)

Gabh ris ma tha NPV > 0 (co-ionann BCR > 1); rangaich a rèir NPV, chan e BCR.
r = 3.5% (ìre roghainn ùine shòisealta Green Book)
```

Faodaidh buaidhean slàinte a dhol a-steach ann an airgead mar QALY × λ (faic [stairsnichean deònach-pàigheadh](../stairsnich-deònachd-pàighidh/)). Bidh an Green Book cuideachd ag òrdachadh **atharrachaidhean claonadh dòchais** – a’ togail tuairmsean cosgais agus a’ lùghdachadh bhuannachdan le ceudadan stèidhichte air fianais, oir tha measaidhean gu rianail ro-dhòchasach.

## Eisimpleir obrach

Siostam e-referral, crìoch-ùine 5 bliadhna, lasachadh 3.5%:

```
Cosgaisean: togail £1.2M (bliadhna 0), ruith £300k/bliadhna (bliadhnaichean 1–5)
Buannachdan: sàbhalaidhean rianachd £250k/bliadhna, deuchainnean breithneachaidh dùblaichte air an seachnadh £280k/bliadhna,
          ùine euslaintich air a shàbhaladh 40,000 uair/bliadhna × £15 = £600k/bliadhna → £1,130k/bliadhna

PV cosgaisean    = 1,200k + 300k × 4.515 (factar bliadhnachd) = £2,555k
PV buannachdan   = 1,130k × 4.515                              = £5,102k

NPV = 5,102 − 2,555 = +£2,547k     BCR = 2.0
```

Cuir an sàs claonadh dòchais Green Book (can +40% air cosgais togail, −20% air buannachdan): PV cosgaisean ≈ £3,035k, PV buannachdan ≈ £4,082k, NPV ≈ **+£1,047k** – fhathast deimhinneach, is e sin am prìomh phuing den atharrachadh: bu chòir do chùisean a’ chlaonadh dòchais aca fhèin a mhaireachdainn.

## Ceangal ri einnseanaireachd bathar-bog

Is e CBAan neo-fhoirmeil a th’ ann an cùisean-gnìomhachais einnseanaireachd. Na h-àrdachaidhean Green Book as fhiach a ghoid:

- **Claonadh dòchais mar àrdachadh àbhaisteach** – bidh einnseanairean a’ ro-ìsleachadh cosgais imrich cho cunbhalach ’s a bhios ministrealachd a’ ro-ìsleachadh cosgais bun-structar; cuir an sàs àrdachadh ainmichte an àite a bhith a’ leigeil air gu bheil an turas seo eadar-dhealaichte.
- **Cuir ann an airgead a’ phrìomh bhuannachd gu onarach no idir** – ùine euslaintich/luchd-cleachdaidh air a chur ann an airgead aig ìrean dìon; chan eil “luach branda”.
- **Bidh NPV a’ rangachadh, chan eil BCR**: faodaidh pròiseact beag le BCR 5 a bhith nas cudromaiche na fear mòr le BCR 1.6.

## Cunnartan

- **A’ cur ann an airgead an rud nach gabh a chur ann an airgead** gus buannachdan a mheudachadh (misneachd, “co-thaobhadh ro-innleachdail”) – cùm iad sin càileachdail, a rèir [anailis cosgais-builean](../anailis-cosgais-builean/).
- **A’ cunntadh ghluasadan mar bhuannachdan**: bidh airgead a’ gluasad eadar buidhnean poblach a’ dol gu neoni aig [sealladh](../sealladh-na-h-anailis/) sòisealta.
- **Gun fhrith-fhìrinn**: tha buannachdan air an tomhas an aghaidh na roghainn as lugha, chan ann an aghaidh neoni.

## Stòran

- HM Treasury, The Green Book. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Green Book discounting guidance. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
