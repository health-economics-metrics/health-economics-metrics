# Gnìomhachadh agus gabhail ris

Is e ìre a’ ghnìomhachaidh a’ cho-roinn de dhaoine a chlàraich a ruigeas a’ chiad luach brìghmhor (an gnìomh “aha” – a’ chiad leughadh air a chlàradh, a’ chiad leasan deiseil). Is e gabhail ris an dreach aig a’ mhòr-shluagh: a’ cho-roinn den t-sluagh *ion-roghnaichte* a ghabhas ris idir. Còmhla is iad geatachan toisich a’ chuimir luach: togail luchd-cleachdaidh → gabhail ris → gnìomhachadh → [cumail](../cumail-air-cleachdaichean-agus-call-chleachdaichean/) → builean.

## Carson a tha e cudromach

Is e cosgais ghlan a th’ ann an luchd-cleachdaidh nach eil air an gnìomhachadh: caitheamh air togail, solarachadh, uachdar taice – gun luach clionaigeach sam bith. Tha slatan-tomhais a’ cur gnìomhachadh bathar-bog slàinte *fo* chuibheasachd nan gnìomhachasan uile (≈24% an aghaidh ≈37% airson gnìomhachadh luchd-cleachdaidh ùr ann an aon sheata slatan-tomhais SaaS; crìochnachadh liosta-sgrùdaidh tòiseachaidh ~20%), a’ nochdadh tòiseachadh nas truime (dearbh-aithne, cead, sàbhailteachd chlionaigeach). Tha gabhail ris a’ giùlan nan cunnartan airson a’ mhòr-shluaigh: ann an [frèam RE-AIM](../ruigsinneachd-agus-co-ionannachd/), tha buaidh slàinte poblaich ≈ ruigsinn × èifeachdas – chan eil app sàr-mhath a ghabhas 3% den t-sluagh ion-roghnaichte ris a’ gluasad a’ mhòr-shluaigh ach 3%. Airson leigheasan didseatach òrdaichte tha an geata gabhail ris ri fhaicinn ann an dàta nàiseanta: **tha ~81% de dh’òrduighean DiGA na Gearmailte air an gnìomhachadh** – chan eil aon de gach còig leigheasan òrdaichte is pàighte a’ tòiseachadh idir (faic [slighe luath DiGA](../slighe-luath-diga-na-gearmailte/)).

## A’ mhatamataig

```
Ìre gnìomhachaidh = luchd-cleachdaidh a choilean a’ phrìomh ghnìomh taobh a-staigh na h-uinneige / clàraidhean × 100
Ìre gabhail ris   = luchd-gabhail ris / sluagh ion-roghnaichte × 100
Ìre lìonaidh DTx  = còdan òrduigh gnìomhaichte / òrduighean a chaidh a thoirt seachad × 100

Modail luach a’ chuimir:
  ion-roghnaichte × gabhail ris × gnìomhachadh × buannachd cuideam-cumail = luach poblaich
  — ceithir iomadaichean; mar as trice tha leasachadh air an fhactar as lugha
  a’ riaghladh (teòiridh nan cuingeadan airson cuimeir)
```

## Eisimpleir obrach

Tha coimiseanair a’ tabhann app casg tinneas-siùcair do 80,000 neach-còmhnaidh ion-roghnaichte:

```
Cuirm → clàraichte:  80,000 → 12,000  (gabhail ris 15%)
Clàraichte → gnìomhaichte (a’ chiad seisean + amas suidhichte, 7 làithean): 12,000 → 5,400 (45%)
Gnìomhaichte → crìochnaich prògram 6 mìosan: 5,400 → 1,600 (30%)

Buaidh a’ phrògraim (deuchainn, luchd-crìochnachaidh): 0.03 QALY + £180 de chosgaisean air an seachnadh
Luach poblaich = 1,600 × (0.03 × £20,000 + £180) ≈ £1.25M
Luach gach neach ion-roghnaichte = £15.6 – an aghaidh £780 nan crìochnaicheadh a h-uile duine ion-roghnaichte e.

Càite an tasgaich thu? Ma dhùblaicheas tu gabhail ris (15→30%) dùblaichidh an luach;
ma thogas tu gnìomhachadh 45→65% cuiridh sin ~44% ris; tha an dà chuid nas fheàrr na
bhith a’ lìomhadh susbaint a’ phrògraim a tha na 1,600 a’ crìochnachadh mu thràth.
```

## Ceangal ri einnseanaireachd bathar-bog

Is e gnìomhachadh an ìre as fhasa a làimhseachadh le einnseanaireachd sa chuimir: rèim dearbhadh dearbh-aithne, sruthan cead, dealbhadh staid fhalamh agus ùine gu a’ chiad luach is e còd a th’ annta, chan e poileasaidh (is e ùine mheadhanach gu luach ann an slàinte ≈ 1 latha 7 uairean ann an dàta slatan-tomhais – tha gach uair dheth na ghabhail ri call). Is e duilgheadas siostaman sgaoilidh a th’ ann an gabhail ris: aonachadh ann an slighean tarraing (àm an òrduigh), cuirmean le taic GP (tha earbsa a’ gluasad) agus ruigsinneachd (cànan, sgilean didseatach – faic [ruigsinn agus co-ionannachd](../ruigsinneachd-agus-co-ionannachd/)). Is e am modail luach cuimir gineadair a’ chùis-ghnìomhachais airson an dà chuid: iomadaich na factaran, lorg an cuingead, agus cuir prìs air an dìoladh an aghaidh an luach poblaich a leigeas e ma sgaoil.

## Cunnartan

- **Gnìomhachadh air a mhìneachadh mar goireas** (post-d dearbhte) seach brìgh chlionaigeach (a’ chiad ghnìomh leigheis) – bidh sin a’ cur àrdachadh air a’ mheatrach agus a’ briseadh slabhraidh an luach.
- **Geamannan an t-sluaigh ris an roinnear**: “dhen fheadhainn a thadhail air an làrach” an aghaidh an t-sluaigh dha-rìribh ion-roghnaichte – is e an tè mu dheireadh a tha cudromach do choimiseanairean.
- **Buaidhean taghaidh**: is e na daoine as fhasa an gnìomhachadh na feadhainn as slàinte agus as lugha a tha air an cur fodha; faodaidh leasachaidhean cuimir beàlaichean co-ionannachd a leudachadh fhad ’s a tha na cuibheasachdan a’ dol am feabhas.

## Stòran

- Slatan-tomhais gnìomhachaidh (SaaS slàinte). <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
- Dàta gnìomhachaidh DiGA, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
- Frèam RE-AIM. <https://re-aim.org/>
