# Cumail ri leigheas agus leantalachd

Is e cumail ri leigheas cho dlùth ’s a tha an cleachdadh fhìor a’ freagairt ris a’ chleachdadh òrdaichte (déine); is e leantalachd cho fada ’s a leanas an cleachdadh mus stad e (faid). Tha tomhasan àbhaisichte aig cungaidh-leigheis – **MPR** agus **PDC**, le ≥80% mar an àrd-sgoilear “a’ cumail ri leigheas” àbhaisteach – agus bidh leigheasan didseatach a’ gabhail an dà chuid nan bun-bheachdan agus an duilgheadais: is e cumail ri leigheas an iomadachair eadar èifeachd agus luach a thig gu buil.

## Carson a tha e cudromach

Tha luchd-pàighidh mu thràth ag obair air na h-àireamhan seo: bidh PDC ≥80% a’ cur ri Rangachadh Rionnag Medicare na SA, a ghluaiseas teachd-a-steach fìor luchd-pàighidh – tha cumail ri leigheas na bun-structar ionmhasail, chan e meatrach bog. Airson leigheasan didseatach bidh am pàtran ag ath-aithris: tha dàta DiGA a’ sealltainn tomhasan òrduighean làidir le cumail ri leigheas lag fad-ùine, agus pàighidh prìsean DTx stèidhichte air builean (a’ tighinn sa Ghearmailt bho 2026) airson builean air an cuingeadh le cumail ri leigheas. An àrdachadh bun-bheachdail bho rannsachadh slàinte didseatach: **com-pàirteachas èifeachdach** – com-pàirteachas *gu leòr* airson an toradh san amharc a choileanadh – agus a thoradh, an **dòs èifeachdach as lugha**, a tha air a stèidheachadh gu empirigeach airson gach eadar-theachd seach a ghabhail mar “barrachd”.

## A’ mhatamataig

```
MPR = Σ làithean solair air an sgaoileadh / làithean san ùine × 100   (faodaidh e dol thairis air 100%;
      a’ cur barrachd air tro ath-lìonaidhean tràth)
PDC = làithean còmhdaichte leis an t-solar / làithean san ùine × 100  (cuingichte aig 100%;
      an tuairmsear glèidhteach, ge-tà CMS)
Cumail ri leigheas didseatach = tachartasan cleachdaidh fìor / tachartasan cleachdaidh òrdaichte × 100
Leantalachd       = làithean bho thoiseach gu stad
                    (aithris % a tha leantainn aig N mìosan; dòighean mairsinneachd)

Cuingeadh luach: builean a thig gu buil ≈ èifeachd × g(cumail ri leigheas)
  far a bheil g na ghnìomh dòs-freagairt; fon dòs èifeachdach as lugha,
  g ≈ 0 – cosgais air a tharraing, buannachd air a call
```

## Eisimpleir obrach

Toradh CBT didseatach airson dìth cadail, òrdaichte mar 6 modalan thar 6 seachdainean; èifeachd deuchainn 0.025 QALY am measg an fheadhainn a chrìochnaich ≥4 modalan (an dòs èifeachdach as lugha air a stèidheachadh gu empirigeach):

```
1,000 òrdugh aig £250 → £250,000 de chaitheamh luchd-pàighidh
Crìochnachadh mhodalan: ≥4 modalan 38%; 1–3 modalan 34%; neoni modalan 28%

QALY a thàinig gu buil = 1,000 × 0.38 × 0.025 = 9.5
Cosgais gach QALY  = 250,000 / 9.5 ≈ £26,300 – oirthireach aig stairsnichean NICE

Einnseanaireachd cumail ri leigheas (dealbhadh ùr air cuimhneachain, giorrachadh sheiseanan)
togaidh e crìochnachadh ≥4 modalan gu 50%: 12.5 QALY → £20,000/QALY. Chaidh an toradh
thairis air an stairsneach maoineachaidh gun a bhith a’ suathadh ri susbaint na leigheis.
```

Fo phrìsean dèanadais san stoidhle 2026, bidh an gluasad ceudna a’ gluasad *teachd-a-steach* gu dìreach – bidh einnseanaireachd cumail ri leigheas na mapa-rathaid malairteach.

## Ceangal ri einnseanaireachd bathar-bog

Bidh dà fhaclair a’ tighinn còmhla air aon bhun-bheachd: tha anailis bathar-bog ([gnìomhachadh](../gnìomhachadh-agus-gabhail-ris/), [leanailteachd](../meatrachan-com-pàirteachais/), [cumail](../cumail-air-cleachdaichean-agus-call-chleachdaichean/)) agus cungaidh-leigheis chlionaigeach (MPR, PDC, leantalachd) le chèile a’ tomhas nochdadh do dh’eadar-theachd – mapaich tachartasan do thoraidh air an fhaclair chlionaigeach agus leughaidh luchd-pàighidh na deas-bhùird agad. Is le einnseanaireachd na luchd-gluasaid cumail ri leigheas: loidsig chuimhneachain (bidh pings làitheil gòrach a’ trèanadh diùltadh; chan eil an dòigh atharrachail), cosgais seisein (bidh modal 20 mionaidean a’ crìochnachadh nas lugha na 3×7 mionaidean), agus telemetry brisidh a lorgas *càite* sa phròtacal a bhios luchd-cleachdaidh a’ tuiteam dheth. Cuir dòs-freagairt an dàrna taobh bho latha 1 – feumaidh an anailis dòs èifeachdach as lugha a bhios a’ cuingeadh a’ mhodail eaconamach dàta cleachdaidh ceangailte ri builean nach urrainn ach an toradh a chruinneachadh.

## Cunnartan

- **Measgachadh MPR/PDC**: bidh MPR a’ cur barrachd air; ainmich an tuairmsear agus cleachd PDC airson dad a tha an aghaidh luchd-pàighidh.
- **Cumail ri leigheas ris a’ mheatrach, chan ris an leigheas**: fosgladh air a chunntadh mar dhòsan (faic [meatrachan com-pàirteachais](../meatrachan-com-pàirteachais/)).
- **Targaidean com-pàirteachais “barrachd na b’ fheàrr”** far a bheil dòs crìochnaichte aig an eadar-theachd – is e crìochnachadh soirbheachas, chan e cleachdadh sìorraidh.
- **Tagraidhean èifeachd stèidhichte air an fheadhainn a mhair**: tha buaidhean taghaidh ann am builean an fheadhainn a chùm ris (tha daoine a chùm ris eadar-dhealaichte); feumaidh an tuairmse adhbharach onarach thar-roghnachadh air thuaiream no atharrachadh faiceallach.

## Stòran

- MPR an aghaidh PDC. <https://phslrx.com/medication-adherence-metrics/>
- Yardley L, et al., effective engagement. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
- Toraidhean cumail ri leigheas DiGA, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
