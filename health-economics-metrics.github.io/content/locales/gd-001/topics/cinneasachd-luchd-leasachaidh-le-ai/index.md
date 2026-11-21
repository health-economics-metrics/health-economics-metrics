# Cinneasachd luchd-leasachaidh le AI

Meatrachan airson dè a nì taic còdachaidh AI dha-rìribh air toradh einnseanaireachd: ìrean gabhail ri molaidhean, luathachadh ann an sgrùdaidhean smachdaichte, tron-chur PR agus cumail còd. Tha a’ bhunait fianais gu fìrinneach an aghaidh a chèile – rud a fhàgas e na sgrùdadh cùise foirfe air an eadar-dhealachadh eadar èifeachd agus èifeachdas a chaidh eaconamas slàinte a thogail airson a làimhseachadh.

## Carson a tha e cudromach

Tha an dà sgrùdadh smachdaichte as motha a thathas a’ togail a-mach a’ sealltainn an taobhan dùbhlanach:

- **Peng et al. 2023 (RCT GitHub Copilot)**: chrìochnaich luchd-leasachaidh obair frithealaiche HTTP ùr **55.8% nas luaithe** le Copilot (1u11m an aghaidh 2u41m, n=95).
- **RCT METR 2025**: bha luchd-leasachaidh còd fosgailte eòlach a’ cur obrach air *na stòran aibidh aca fhèin* **19% nas slaodaiche** le innealan AI tràth 2025 (16 luchd-leasachaidh, 246 gnìomhan) – fhad ’s a *bha iad a’ creidsinn* gun robh iad 20% nas luaithe.

Tha an dà sgrùdadh math. Is e an contrarrachd an lorg: chan eil èifeachd ann an gnìomhan ùra a’ gluasad gu èifeachdas ann an stòran aibidh, agus chan urrainn do bhuannachd *a bhathas a’ faicinn* àite buannachd tomhaiste a ghabhail. Tha ainmean aig leigheas airson an dà fhrùth (deuchainnean mìneachaidh an aghaidh deuchainnean practaigeach; duilgheadas an placebo) agus innealan airson an làimhseachadh.

## A’ mhatamataig

```
Ìre gabhail ris  = molaidhean ghabhte / molaidhean air an sealltainn
                   (telemetry GitHub ~30% cuibheasach; caochlaideach: SQL 45%, Python 35%, JS 28%)
Ìre cumail       = còd AI a mhaireas gu cumasg / còd AI ghabhte (~88% air aithris)
Luathachadh      = (t_smachd − t_AI) / t_smachd  (bho cho-dhèanamh smachdaichte A-MHÀIN)
Atharrachadh tron-chuir = Δ PR cumasgte/leasaiche/seachdain (dàta achaidh GitHub/Accenture: +8.7%)

Modail luach     = luchd-leasachaidh × ùine air a shàbhaladh × ìre luchdaichte × factar cleachdaidh
                  — feumaidh a h-uile teirm tomhas ionadail; faic an tornado ann an
                  sensitivity-analysis.md, far a bheil ùine air a shàbhaladh a’ cumail os cionn
                  a h-uile paramadair eile còmhla
```

## Eisimpleir obrach

Tha buidheann de 500 luchd-leasachaidh a’ dèanamh pìleat air cuideachadair le fìor smachd (sgiobaidhean co-chosmhail, 3 mìosan, meatrachan clàraichte ro-làimh):

```
Toradh a’ phìleat: ùine cuairt PR −18%; PR cumasgte +6%; CFR gun atharrachadh;
              ùine air a shàbhaladh air aithris leotha fhèin 45 mion/latha; tomhaiste aig ìre gnìomha ≈ 15 mion/latha

Cuir luach air an àireamh THOMHAISTE: 500 × 0.25u × 220l × £60 × 0.6 cleachdadh
                          ≈ £990,000/bliadhna de chomas (chan eil e a’ leigeil a-mach airgead)
Cosgais: 500 × £39/mìos × 12 ≈ £234,000/bliadhna
Co-mheas comais glan ≈ 4:1 – so-mhaoinichte, aig trian den tagradh ìre-fhèin.
```

Is e an eadar-dhealachadh 3× eadar na chaidh fhaicinn agus na chaidh a thomhas lorg METR ag obair san t-saoghal fhosgailte; nan robh buidseat air a stèidheachadh air fèin-aithris, bhiodh an loidhne bhuannachd air a trìoblachadh.

## Ceangal ri einnseanaireachd bathar-bog

Na rudan a bheir thu bho eaconamas slàinte ma tha thu a’ measadh innealan AI: ruith **deuchainnean practaigeach** (do stòr, do luchd-einnseanaireachd, fìor thiocaidean – chan e gnìomhan deamo reiceadair); làimhsich **ìre gabhail ris mar phrocsaidh, chan e builean** (is e [PPV](../measadh-ai-clionaigeach/) nam molaidhean a th’ ann bho shealladh an leasaiche – gabhail ris àrd le cumail ìosal na ro-dhearbhadh); cuir **sgrùdadh seasmhachd** ri gach buannachd tron-chuir (DORA 2025: bidh AI a’ togail tron-chuir, a’ dèanamh cron air seasmhachd – feumaidh eadar-theachd le buaidhean-taoibh anailis buannachd ghlain, a rèir [meatrachan DORA](../meatrachan-dora/)); agus seòrsaich a’ bhuannachd gu onarach mar chomas ([a’ leigeil a-mach airgead an aghaidh nach eil](../sàbhalaidhean-a-leigeil-a-mach-airgead-an-aghaidh-nach-eil/)).

## Cunnartan

- **Gluasad sgrùdadh reiceadair**: àireamhan RCT ùra air an cur an sàs ann an obair stòr dìleabach – an dearbh mhearachd a dh’fhoillsich sgrùdadh METR.
- **Fèin-aithris mar thomhas**: is e beàrn 20 puing sa cheud sa bheachd an claonadh as motha aithnichte san litreachas seo.
- **Àrdachadh gnìomhachd**: is e Gnìomhachd, chan e builean, barrachd PR agus barrachd còd ([SPACE](../space-agus-devex/)); cuir ri chèile le obair-ath-dhèanamh agus CFR.
- **A’ dearmad na lùb-ionnsachaidh**: bidh tomhasan seachdain-2 a’ glacadh buaidhean ùr-nodha ann an gach taobh; tomhais aig staid seasmhach ([crìoch-ùine](../fàire-ùine/)).

## Stòran

- Peng S, et al. "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot." 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity." 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- Aithisg DORA 2025. <https://dora.dev/dora-report-2025/>
