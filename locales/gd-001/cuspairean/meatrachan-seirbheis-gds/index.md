# Meatrachan seirbheis GDS

Bidh Leabhar-làimhe Seirbheis Seirbheis Didseatach an Riaghaltais (GDS) na RA ag òrdachadh cheithir KPI airson gach seirbheis didseatach riaghaltais: **cosgais gach malairt, sàsachd luchd-cleachdaidh, ìre crìochnachaidh, agus gabhail ris didseatach**. Còmhla is iad eaconamas as lugha seirbheis didseatach phoblach – agus an teamplaid a gheibh seirbheisean didseatach an NHS mar dhìleab.

## Carson a tha e cudromach

Bidh meatrachan GDS a’ còdachadh a’ chùis-ghnìomhachais gluasaid seanail a mhaoinich deichead de dhidseatachadh riaghaltais: lorg an Aithisg Èifeachdas Didseatach gu bheil malairtean didseatach ~20× nas saoire na fòn agus ~50× nas saoire na aghaidh-ri-aghaidh (figearan riaghaltas ionadail: lìon £0.15, fòn £2.83, aghaidh-ri-aghaidh £8.62). Ach cha tig na sàbhalaidhean gu buil ach nuair a *chrìochnaicheas* daoine an turas didseatach (ìre crìochnachaidh) *an àite* an t-seanail dhaoir (gabhail ris) – is e aon mhodail eaconamach na ceithir KPI, chan e ceithir deas-bhòrd.

## A’ mhatamataig

```
Cosgais gach malairt  = làn-chosgais seirbheis / malairtean crìochnaichte
Ìre crìochnachaidh    = crìochnaichte / malairtean air tòiseachadh × 100
Gabhail ris didseatach = malairtean didseatach / malairtean gach seanail × 100
Sàsachd luchd-cleachdaidh = % sàsaichte+glè shàsaichte (5-puing, sgrùdadh san t-seirbheis)

Sàbhaladh gluasaid seanail = meud × gluasad gabhail ris × (cosgais_seann seanail − cosgais_didseatach)
… às aonais iarrtas fàilligidh: (1 − ìre crìochnachaidh) × cosgais seanail air ais
```

## Eisimpleir obrach

Seirbheis stiùireadh choinneamhan an NHS: 2M malairt/bliadhna, an-dràsta 70% fòn (£3.20/gairm) / 30% didseatach (£0.25). Bidh ath-dhealbhadh a’ togail gabhail ris didseatach gu 55% agus crìochnachadh bho 84% gu 93%:

```
Sàbhaladh gluasad gabhail ris = 2M × 0.25 × (3.20 − 0.25) = £1,475,000/bliadhna

Sàbhaladh iarrtas fàilligidh: bidh slighean didseatach fàillte a’ tuiteam air ais gu fòn
  ro:     2M × 0.30 × 0.16 × £3.20 = £307,200
  às dèidh: 2M × 0.55 × 0.07 × £3.20 = £246,400
  glan £60,800/bliadhna — bidh leasachaidhean crìochnachaidh a’ dìon buannachdan gabhail ris

Is e sàsachd an comharra-stiùiridh: bidh luchd-cleachdaidh mì-shàsaichte a’ tilleadh gu fòn,
mar sin bidh tuiteam sàsachd a’ ro-innse crìonadh gabhail ris mus nochd e.
```

## Ceangal ri einnseanaireachd bathar-bog

Is e na ceithir KPI sin eisimpleir ìre-riochdachaidh de [chlàr cosgais-builean](../anailis-cosgais-builean/): aon mheatrach cosgais, trì meatrachan builean, gun a bhith air an lùghdachadh gu sgòr. Do dh’einnseanairean toraidh na leasanan obrachaidh: **is e duilgheadas ionnstramaid-cuimir a th’ ann an ìre crìochnachaidh** (gach àite trèigsinn so-lorgte agus so-ghnìomhachadh); **is e [eaconamas aonad neul](../eaconamas-aonad-neul/) a bharrachd air cosgaisean seanail le taic dhaonna a th’ ann an cosgais gach malairt**; **tha gabhail ris na mheatrach co-ionannachd fo chasaid** – tha an fheadhainn nach urrainn no nach gluais seanail ro-mhòr nam measg seann daoine, daoine ciorramach, agus fo dhìth, agus mar sin bidh dùnadh seanail ionnsaigheach a’ tionndadh “sàbhalaidhean” gu cron ruigsinneachd (faic [ruigsinn agus co-ionannachd](../ruigsinneachd-agus-co-ionannachd/)). Tha foillseachadh nan KPI (bidh GOV.UK ga dhèanamh, gach seirbheis) fhèin na mheacanaigeachd: bidh follaiseachd a’ smachdachadh ro-innseachdan mar a bhios sgrùdaidhean [coileanadh bhuannachdan](../coileanadh-bhuannachdan/).

## Cunnartan

- **Gabhail ris tro èiginn**: bidh dùnadh loidhne fòn a’ togail gabhail ris agus a’ dumpadh iarrtas fàilligidh air luchd-obrach loidhne-aghaidh; tomhais làn-chosgais an t-siostaim.
- **Crìochnachadh air a thomhas bho dhuilleag-2**: a’ tòiseachadh a’ chuimir às dèidh a’ phuing trèigsinn a’ brosnachadh na h-ìre.
- **Cosgais gach malairt a’ dearmad taic didseatach le cuideachadh** agus làimhseachadh iarrtas fàilligidh.
- **Sgrùdaidhean sàsachd aig crìochnachadh soirbheachail a-mhàin** – cha ruig an fheadhainn mì-shàsaichte an sgrùdadh mar as trice.

## Stòran

- GOV.UK Service Manual, measuring success / mandatory KPIs. <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- Digital Efficiency Report. <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
