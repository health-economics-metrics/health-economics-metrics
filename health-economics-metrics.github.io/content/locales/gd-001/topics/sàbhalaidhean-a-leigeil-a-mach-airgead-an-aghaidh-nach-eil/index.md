# Sàbhalaidhean a’ leigeil a-mach airgead an aghaidh nach eil

Bidh sàbhalaidhean a’ leigeil a-mach airgead a’ lùghdachadh caitheamh fìor – bidh loidhne buidseit a’ fàs nas lugha. Bidh sàbhalaidhean nach eil a’ leigeil a-mach airgead a’ saoradh ùine no comais a thèid *ath-chleachdadh* seach a bhanca. Làimhsichidh stiùirichean ionmhais siostaman slàinte iad mar dhà sheòrsa eadar-dhealaichte, agus bu chòir dhutsa cuideachd.

## Carson a tha e cudromach

Is e seo an deuchainn onarachd as geire a thèid a chur air cùis-ghnìomhachais didseatach sam bith ann an seirbheis slàinte nàiseanta. Bidh frèaman buannachd an NHS a’ seòrsachadh gach buannachd a thathar a’ tagradh gu soilleir mar a’ leigeil a-mach airgead, gun a bhith a’ leigeil a-mach airgead, no càileachdail. Tha a’ mhòr-chuid de “shàbhalaidhean” slàinte didseatach – mionaidean clionaigeach air an sàbhaladh gach euslaintich, sgrìobhadh sgrìobhainnean nas luaithe – nach eil a’ leigeil a-mach airgead: luachmhor, ach chan eil iad a’ lughdachadh an easbhaidh. Chan urrainn do CFO urrais le beàrn maoineachaidh ach airgead a chosg. Faic cuideachd [sàbhalaidhean cruaidh a’ leigeil a-mach airgead](../sàbhalaidhean-cruaidh-a-leigeil-a-mach-airgead/).

## A’ mhatamataig

```
Sàbhaladh a’ leigeil a-mach airgead = loidhne buidseit ro − loidhne buidseit às dèidh
                          (feumaidh e a bhith so-tharraing: cùmhnant air a chuir dheth, uàrd dùinte,
                           caitheamh bàigh air a lùghdachadh, ceannach air a sheachnadh)

Luach nach eil a’ leigeil a-mach airgead = ùine air a leigeil ma sgaoil × cosgais aonaid na h-ùine sin
                          (air a luachadh aig cosgais cothrom; chan eil an t-airgead so-tharraing)
```

Bidh an aon tachartas fiosaigeach (uair a thìde air a shàbhaladh) a’ tuiteam ann an aon roinn no an roinn eile a rèir dè thachras às dèidh sin:

```
uair air a shàbhaladh → shift ùine a bharrachd/bàigh air a chuir dheth → a’ leigeil a-mach airgead
uair air a shàbhaladh → bidh clionaigeach a’ faicinn aon euslainteach a bharrachd → nach eil a’ leigeil a-mach airgead (comas)
uair air a shàbhaladh → air a ghabhail a-steach ann an slaodachd, gun atharrachadh → gun bhuannachd idir
```

## Eisimpleir obrach

Bidh bathar-bog a’ sàbhaladh 30 mionaid gach shift do gach neach de 100 nàirsean. Is e sin 100 × 0.5 × 5 shift/seachdain × 46 seachdainean ≈ 11,500 uair/bliadhna. Aig cosgais fastaiche Band 5 de ~£25/uair, is e an ceann-naidheachd tàlaidh £287,500/bliadhna.

An sgaradh onarach:

- 20% den ùine a’ tuiteam far a bheil uàrdan an-dràsta a’ pàigheadh prìomhachas bank/bàigh gus còmhdach a chur air tuilleadh-ùine sgrìobhainnean: 2,300 uair × £35 ìre bàigh = **£80,500 a’ leigeil a-mach airgead** (shifts gun a bhith air an cur dhaibh dha-rìribh).
- Tha 60% air ath-sgaoileadh gu cùram dìreach euslaintich: 6,900 uair × £25 = **£172,500 de chomas nach eil a’ leigeil a-mach airgead** – fìor luach, air aithris air leth, gun a ghairm “sàbhalaidhean” a-chaoidh.
- Bidh 20% a’ sgaoileadh ann am bristeadh is briseadh-stad: **£0**. Bhiodh a thagradh na uirsgeul.

Tha cùis-ghnìomhachais a bheir seachad £80.5k airgead + £172.5k comas so-chreidsinneach. Bidh fear a bheir seachad £287.5k “sàbhalaidhean” air a dhiùltadh leis a’ chiad neach-cunntais a leughas e.

## Ceangal ri einnseanaireachd bathar-bog

Bidh an aon loidsig a’ riaghladh ROI cuideachadair còdachaidh AI: tha “30 mionaid gach leasaiche gach latha” na chomas nach eil a’ leigeil a-mach airgead mura tuit àireamh-chinn, caitheamh cùmhnantaiche, no cosgais neòil dha-rìribh. Aithris na roinnean air leth:

- A’ leigeil a-mach airgead: cùmhnantan cùmhnantaiche air an cur dheth, ceadan innealan air an toirt à bith, caitheamh neòil air a lùghdachadh.
- Comas: feartan air an cur a-mach nas tràithe (luach tro [chosgais dàil](../cosgais-dàil/)), backlog air a losgadh sìos.
- Dad: mionaidean air an sàbhaladh a bhriseas a-steach do ghluasad co-theacsa.

Lean cuideachd *far an deach an ùine shaoraichte dha-rìribh* – tha coileanadh bhuannachdan ([benefits-realization.md](../coileanadh-bhuannachdan/)) ann oir bidh buannachdan comais a thathar a’ tagradh gu tric a’ falbh nuair a thèid sgrùdadh a dhèanamh.

## Cunnartan

- **Mionaidean iomadachadh le tuarastal agus a ghairm sàbhalaidhean** – am peacadh clasaigeach.
- **Ùine shaoraichte air a luachadh aig cosgais luchdaichte chuibheasach** nuair a tha cleachdadh iomaill na h-ùine sin le luach ìosal – faic [cosgais iomaill an aghaidh cuibheasach](../cosgais-iomaill-an-aghaidh-cosgais-cuibheasach/).
- **A’ cunntadh an aon uair dà thuras**: mar airgead (shift air a sheachnadh) agus mar chomas (euslaintich a bharrachd air am faicinn).

## Stòran

- NHS Digital connectivity business case guidance, economic case (benefit categories). <https://digital.nhs.uk/services/networks-and-connectivity-transformation-frontline-capabilities/connectivity-hub/advice-and-guidance/making-the-business-case-for-connectivity-infrastructure-investment---guidance/economic-case>
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
