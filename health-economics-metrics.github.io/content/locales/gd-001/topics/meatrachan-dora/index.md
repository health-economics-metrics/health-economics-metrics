# Meatrachan DORA

Is e meatrachan DORA (DevOps Research and Assessment) ceithir tomhasan de dhèanadas lìbhrigidh bathar-bog – tricead cleachdaidh, ùine-stiùiridh airson atharrachaidhean, ìre fàilligeadh atharrachaidh, agus ùine ath-bheothachaidh à cleachdadh fàillte – agus earbsachd mar chòigeamh. Is iad na slatan-tomhais lìbhrigidh as dearbhte san raon, agus tha leughadh eaconamas slàinte dìreach aig gach fear.

## Carson a tha e cudromach

Tha deichead de rannsachadh DORA a’ ceangal nam meatrachan seo ri dèanadas buidhne. Buidhnean aithisg 2024: bidh sgiobaidhean **elite** a’ cleachdadh air iarrtas (grunn thursan/latha), a’ gabhail nas lugha na latha bho commit gu riochdachadh, a’ fàiligeadh ~5% de dh’atharrachaidhean, agus ag ath-bheothachadh ann an nas lugha na uair a thìde; bidh luchd-dèanaidh **ìosal** a’ cleachdadh gach mìos no nas lugha, a’ gabhail mhìosan, a’ fàiligeadh ~40% de dh’atharrachaidhean, agus ag ath-bheothachadh ann an seachdainean. Airson siostam slàinte, chan e àireamhan faoin IT a tha seo: tha iad a’ dearbhadh dè cho luath ’s a ruigeas luach clionaigeach euslaintich agus dè an cunnart a tha gach atharrachadh a’ giùlan.

## A’ mhatamataig

```
Tricead cleachdaidh     = cleachdaidhean riochdachaidh / ùine
Ùine-stiùiridh atharrachaidhean = t(cleachdadh) − t(commit), meadhan
Ìre fàilligeadh atharrachaidh = atharrachaidhean fàillte / atharrachaidhean iomlan × 100
Ùine ath-bheothachaidh (MTTR) = t(air ath-nuadhachadh) − t(fàilligeadh), meadhan
Earbsachd               = coileanadh SLO (ruigsinneachd, latency, ceartas)
```

Eadar-theangachaidhean eaconamas slàinte:

```
Ùine-stiùiridh → cost-of-delay.md: seachdainean sa phìoban × CoD (£ no QALY/seachdain)
Ìre fàilligeadh → ìre tachartais dhroch bhuaidh atharrachaidh bathar-bog: CFR × cosgais gach tachartais
Ùine ath-bheothachaidh → cron downtime: MTTR × (gnìomhachd chlionaigeach air chall + nochdadh sàbhailteachd)/uair
Earbsachd              → lasachadh buannachd: bidh seirbheis aig ruigsinneachd 99% a’ lìbhrigeadh ≈ 0.99
                          den bhuannachd mhodaileach aice — co-ionann bathar-bog cumail ri leigheas
```

## Eisimpleir obrach

Sgioba bathar-bog sruth-euslaintich aig urras, ro/às dèidh tasgadh ann an einnseanaireachd lìbhrigidh:

```
                    Ro          Às dèidh
Cleachdaidhean      gach mìos   gach seachdain
Ùine-stiùiridh      6 seachdainean  4 làithean
CFR                 25%         8%
MTTR                2 latha     2 uair
```

Bidh an sgioba a’ cur a-mach ~30 leasachadh/bliadhna le luach cuibheasach gach leasachaidh £4,000/seachdain ([CoD](../cosgais-dàil/)). Bidh gearradh ùine-stiùiridh de ~5.4 seachdainean a’ tarraing sruth buannachd gach leasachaidh air adhart: 30 × 5.4 × 4,000 ≈ **£648,000/bliadhna** de luach air a lìbhrigeadh nas tràithe. Leasachadh CFR: 30 × (0.25 − 0.08) = ~5 atharrachadh fàillte nas lugha/bliadhna × £15,000 cosgais chuibheasach tachartais (downtime siostaim chlionaigeach, leasachadh) = **£76,500/bliadhna**. Tha an tasgadh lìbhrigidh air a luachadh san aon airgead ri eadar-theachd clionaigeach sam bith.

## Ceangal ri einnseanaireachd bathar-bog

Is e seo taobh a’ bhathar-bhog fhèin – is e a’ phuing luaidh am mapadh cùl-taobh: is e meatrachan DORA meatrachan obrachaidh an ospadail ann an aodach eadar-dhealaichte. Ùine-stiùiridh ↔ [iomradh gu leigheas](../iomradh-gu-làimhseachadh/); ìre fàilligeadh atharrachaidh ↔ [ìre ath-ghabhail](../ìre-ath-ghabhail/) (obair a bhuail air ais); MTTR ↔ freagairt èiginn; tricead cleachdaidh ↔ tron-chur clionaig. Bidh dòighean leasachaidh a’ gluasad an dà chuid air sgàth ’s gur e siostaman ciudha fo chuingeadan sàbhailteachd a th’ ann an dà thaobh. Thoir an aire cuideachd do lorg AI DORA 2025: tha gabhail ri AI a-nis a’ co-cheangal ri tron-chur nas àirde ach seasmhachd *nas miosa* – eadar-theachd le èifeachd agus buaidhean-taoibh, ag iarraidh dìreach an anailis buannachd ghlain a tha an stòr seo a’ teagasg (faic [cinneasachd luchd-leasachaidh le AI](../cinneasachd-luchd-leasachaidh-le-ai/)).

## Cunnartan

- **Geamadh meatrach**: cunntasan cleachdaidh air am meudachadh le foillseachaidhean gun ghnìomh; CFR air a lùghdachadh le gun a bhith a’ cunntadh hotfixes mar fhàilligidhean. Mìnich tachartasan gu mionaideach, mar a bhios HTA a’ mìneachadh puingean-deiridh.
- **Clàran lìog thar sgiobaidhean**: bidh buidhnean DORA a’ coimeas chleachdaidhean, chan e sgiobaidhean le pròifilean cunnairt eadar-dhealaichte; faodaidh sgioba shiostaman clionaigeach aig “àrd” a bhith sàr-mhath far am biodh “elite” gòrach.
- **A’ optimeachadh aon mheatrach**: is e luaths gun CFR/earbsachd an co-rèiteachadh tron-chur-mì-sheasmhachd – aithris an-còmhnaidh na ceithir còmhla (is e [clàr cosgais-builean](../anailis-cosgais-builean/) a th’ annta, chan e sgòr).

## Stòran

- DORA research and reports. <https://dora.dev/>
- 2024 DORA benchmarks summary. <https://octopus.com/devops/metrics/dora-metrics/>
- DORA 2025 State of AI-assisted Software Development. <https://dora.dev/dora-report-2025/>
