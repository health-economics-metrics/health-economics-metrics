# Measadh riaghlaidh AI

Na frèaman riaghlaidh a bhios a’ riaghladh AI ann an cùram slàinte – siostam Bathar-bog mar Inneal Meidigeach (SaMD) aig an FDA le **Planaichean Smachd Atharrachaidh Ro-chinnteach (PCCPan)**, agus prògraman measaidh san t-saoghal fhìor leithid Duais AI ann an Slàinte is Cùram an NHS – agus dè a chosgas agus a dh’fhosglas iad gu h-eaconamach.

## Carson a tha e cudromach

Bidh riaghladh a’ suidheachadh an dà chuid **cosgais fianais airson a dhol a-steach don mhargaidh** agus **cosgais gach ùrachadh modail às dèidh sin** – airson toraidhean AI, bidh an dàrna fear gu tric nas cudromaiche. Rinn dòigh thraidiseanta an FDA (glasaich am modail; ath-ghlan airson atharrachaidhean) leasachadh leantainneach gu math cruaidh gu h-eaconamach. Dh’atharraich **stiùireadh PCCP (deireadh 2024)** an eaconamas: faodaidh neach-saothrachaidh ùrachaidhean modail ri teachd *sònraichte* ro-cheadachadh – tuairisgeul air atharrachaidhean planaichte, pròtacal atharrachaidh (mar a thèid gach fear a dhearbhadh), agus measadh buaidh – gus an tèid leasachaidhean ceadaichte a chur a-mach gun tagradh ùr. Tha os cionn 1,000 inneal le AI ceadaichte leis an FDA; tha an FDA a-nis cuideachd a’ rannsachadh sgrùdadh dèanadais san t-saoghal fhìor (meatrachan ro-shònraichte: ìrean FP/FN bunaiteach, gluasad calibrachaidh, comharran gluasad raoin).

## A’ mhatamataig

Is e PCCP eaconamas [ùine-stiùiridh DORA](../meatrachan-dora/) air a chur an sàs ann am modailean riaghlaichte:

```
Cosgais gach ùrachadh modail (traidiseanta) = cosgais ath-chuir a-steach + dàil ath-sgrùdaidh × CoD
Cosgais gach ùrachadh modail (le sgòp PCCP) = cosgais coileanadh pròtacail a-mhàin

Eaconamas ùrachaidh thar beatha toraidh:
  N ùrachaidhean × (cosgais cur a-steach + mìosan ath-sgrùdaidh × cosgais-dàil gach mìos)
  an aghaidh cosgais sgrìobhaidh PCCP aon-uaireach + N × coileanaidhean pròtacail
```

Airson pàtran Duais AI an NHS, tha an seata meatrachan nas fharsainge na cruinneas: bidh measaidhean neo-eisimeileach san t-saoghal fhìor a’ measadh dèanadas clionaigeach, buaidhean sruth-obrach/buileachaidh, agus buaidh eaconamach – an loidhne [èifeachd → èifeachdas → cosg-èifeachdas](../cinneasachd-luchd-leasachaidh-le-ai/) slàn air a stèidheachadh.

## Eisimpleir obrach

Tha reiceadair AI rèidio-eòlais a’ dealbhadh leasachaidhean modail ràitheil thar 3 bliadhna (12 ùrachaidhean):

```
Traidiseanta: 12 × (£80k cur a-steach + 4 mìosan × £50k/mìos CoD buannachd air dàil)
           = 12 × £280k = £3.36M
Slighe PCCP:  £250k sgrìobhadh PCCP + 12 × £30k coileanadh pròtacail = £610k
Sàbhaladh ≈ £2.75M – agus gheibh euslaintich gach leasachadh ~4 mìosan nas tràithe:
12 × 4 mìosan × buannachd chlionaigeach an ùrachaidh, loidhne QALY na còir fhèin.
```

Is e am PCCP aithne riaghlaidh gu bheil **luach clionaigeach aig tricead cleachdadh** – slabhraidh adhbharach mhaighstir an stòir seo, le taic bho riaghladair.

## Ceangal ri einnseanaireachd bathar-bog

Is e duilgheadas bathar-bog a th’ ann a bhith ag einnseanaireachd PCCP gu math: seataichean measaidh ro-shònraichte, seataichean dàta le tionndaidhean, loidhnichean dearbhaidh fèin-obrachail, sgrùdadh gluasaid – co-ghàrraidh riaghlaichte cleachdadh leantainneach, far a bheil an “geata cleachdaidh” na phròtacal dearbhte an àite sgrùdadh còd. Bidh sgiobaidhean le bun-structar measaidh aibidh ([meatrachan càileachd AI](../meatrachan-càileachd-ai/)) a’ faighinn PCCPan gu saor; lorgaidh sgiobaidhean às aonais gur e cuingeadh aibidh einnseanaireachd a th’ anns a’ chuingeadh riaghlaidh. Airson toraidhean a’ dol a-steach don NHS, is e an stac co-shìnte DTAC (sàbhailteachd chlionaigeach, dìon dàta, co-obrachadh) agus ìrean fianais [NICE ESF](../frèam-inbhean-fianais-nice/) – cuir buidseat air gach fear mar [TCO](../cosgais-iomlan-seilbh/) a’ dol a-steach don mhargaidh.

## Cunnartan

- **Aislingean sgòp PCCP**: chan eil ach seòrsaichean atharrachaidh *ainmichte* ro-cheadaichte; feumaidh atharrachaidhean ailtireachd no cleachdaidhean ùra san amharc làn ath-sgrùdadh.
- **Gluasad san t-saoghal fhìor gun sgrùdadh**: ùghdarrachadh aig dèanadas cur air bhog + gluasad sluaigh sàmhach = toradh ag obair taobh a-muigh a mhàileid ghlanaichte; tha sgrùdadh na dhùil riaghlaidh agus na fhèin-dhìon.
- **A’ measgachadh ghlanadh le luach**: chan eil glanadh FDA/UKCA ≠ gum pàigh duine – is e sin an cnap-starra [HTA](../measadh-teicneòlais-slàinte/), a’ ruith air leth.

## Stòran

- FDA, AI-enabled device software / SaMD. <https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-software-medical-device>
- PCCP implementation guidance analysis. <https://intuitionlabs.ai/articles/fda-pccp-implementation-guide-ai-ml-samd>
- NHS England, lessons from AI in Health and Care Award real-world evaluations. <https://www.england.nhs.uk/long-read/planning-and-implementing-real-world-ai-evaluations-lessons-from-the-ai-in-health-and-care-award/>
