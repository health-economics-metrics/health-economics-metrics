# Eaconamas sgrìonaidh

Bidh eaconamas sgrìonaidh a’ riaghladh luach deuchainn air sluagh gun chomharran. Am prìomh fhìrinn matamataigeach: **aig tricead galair ìosal, bidh eadhon deuchainnean sàr-mhath a’ toirt a-mach a’ mhòr-chuid de dhearbhaidhean ceàrr** – agus faodaidh cosgais sìos-an-t-srutha a bhith gan leantainn buannachd nan fìor lorg a bhàthadh.

## Carson a tha e cudromach

Bho 1968, tha slatan-tomhais Wilson–Jungner aig WHO air a’ bhàr a shuidheachadh airson sgrìonadh sluaigh: feumaidh an staid a bhith cudromach, an deuchainn gabhaltach agus mionaideach, feumaidh leigheas èifeachdach a bhith ann, agus feumaidh an eaconamas a bhith ann an cothromachadh. Bidh Comataidh Sgrìonaidh Nàiseanta na RA a’ cur anailis foirmeil cosg-èifeachdais an sàs mus aontaich iad ri prògram nàiseanta sam bith – agus a’ diùltadh a’ mhòr-chuid de mholaidhean. Bidh a h-uile cur-air-adhart “sgrìonaidh AI a h-uile duine airson a h-uile rud” a’ tighinn tarsainn air an uidheamachd seo, agus mar as trice a’ call don àireamhachd gu h-ìosal.

## A’ mhatamataig

Bidh luach ro-innseach adhartach (PPV) – an cothrom gu bheil toradh adhartach fìor – a’ tuiteam aig tricead ìosal:

```
PPV = (sens × prev) / [sens × prev + (1 − spec) × (1 − prev)]

Example: sensitivity 90%, specificity 95%, prevalence 0.5%:
PPV = (0.9 × 0.005) / (0.9 × 0.005 + 0.05 × 0.995)
    = 0.0045 / (0.0045 + 0.04975) ≈ 8.3%
```

Tha aon-deug à dà-dheug de dhearbhaidhean ceàrr. Eaconamas làn a’ phrògraim:

```
Cost per true case found = (screening cost + workup cost × all positives) / true positives
Then: is finding a case worth that? (earlier-intervention value per case,
      minus overdiagnosis harm — cases found that would never have mattered)
```

## Eisimpleir obrach

Sgrìonadh reitine le AI airson staid tearc, 100,000 neach, tricead 0.5%, sens 90%, spec 95%, sganadh £15, obair-dearbhaidh £400:

```
True positives:  100,000 × 0.005 × 0.90 = 450
False positives: 100,000 × 0.995 × 0.05 = 4,975
Cost = 100,000 × 15 + (450 + 4,975) × 400 = 1.5M + 2.17M = £3.67M
Cost per true case ≈ £8,156
```

Ma shàbhalas leigheas tràth £20,000 + 1 QALY gach cùis, bidh am prògram a’ dol seachad gu furasta. Àrdaich mionaideachd gu 99% (nas lugha de dh’fhaireachdainnean ceàrr): tuitidh cosgais obair-dearbhaidh gu (450 + 995) × 400 = £0.58M, iomlan £2.08M, cosgais gach cùise ≈ **£4,622** – is e mionaideachd, chan e mothachalachd, far a bheil eaconamas sgrìonaidh air a bhuannachadh aig tricead ìosal.

## Ceangal ri einnseanaireachd bathar-bog

Tha sgrùdadh statach, sganadh tèarainteachd, agus lorg neo-riaghailteachd nam prògraman sgrìonaidh thairis air bun-chodan agus telemetry, le tricead fìor-mheang gu tric fada fo 1% gach cothrom rabhaidh. Mìnichidh an aon mhatamataig sgìths rabhaidh: bidh sganair 95% mionaideach air còd le tricead ìosal a’ bàthadh sgiobaidhean ann am dearbhaidhean ceàrr, agus cosgaidh gach dearbhadh ceàrr aire agus bidh e a’ lùghdachadh earbsa gus an tèid rabhaidhean fìor a leigeil seachad (is e an teirm chlionaigeach *cron sgrìonaidh*; is e an teirm einnseanaireachd *numbness pager*). Tha na leigheasan a’ gluasad bho shlàinte: àrdaich mionaideachd ro mhothachalachd, sgrìon fo-shluagh le tricead nas àirde (targaidean stèidhichte air cunnart ↔ sganadh còd air atharrachadh a-mhàin), agus cunntaich cosgais triage ann an eaconamas an inneil – faic [NNT](../àireamh-a-dh-fheumar-a-làimhseachadh/) agus [measadh AI clionaigeach](../measadh-ai-clionaigeach/). Airson prògram sgrìonaidh slàn a mheudachadh seach aon deuchainn, faic [àireamh a dh’fheumar a sgrìonadh](../àireamh-a-dh-fheumar-a-sgrùdadh/) – cò mheud neach a dh’fheumas dol tron t-slighe sgrìonaidh-is-làimhseachaidh gu lèir gus aon thoradh a chasg.

## Cunnartan

- **Mothachalachd/mionaideachd a luaidh às aonais tricead** – is e margaidheachd a th’ ann an cruinneas às aonais PPV.
- **A’ dearmad cus-dhearbhaidh**: bidh lorg “galair” slaodach nach dèanadh cron gu bràth a’ cur dheth fìor chosgaisean agus chronan làimhseachaidh.
- **Claonadh ùine-stiùiridh**: bidh lorg nas tràithe gun toraidhean atharraichte a’ meudachadh mairsinn a tha follaiseach – faic [eadar-theachd nas tràithe](../eadar-theachd-nas-tràithe/).

## Stòran

- Wilson JMG, Jungner G. "Principles and practice of screening for disease." WHO 1968. <https://apps.who.int/iris/handle/10665/37650>
- UK National Screening Committee. <https://www.gov.uk/government/groups/uk-national-screening-committee-uk-nsc>
