# Meatrachan sruthaidh

Bidh meatrachan sruthaidh a’ tomhas mar a ghluaiseas obair tro shiostam lìbhrigidh: ùine cuairt, ùine-stiùiridh, tron-chur, obair a’ dol air adhart (WIP), agus èifeachdas sruthaidh. Tha iad air an riaghladh le Lagh Little – an aon mhatamataig ciudha a bhios a’ riaghladh leapannan ospadail agus liostaichean feitheimh.

## Carson a tha e cudromach

Chan e obair a th’ anns a’ mhòr-chuid de dh’ùine lìbhrigidh – is e feitheamh a th’ ann. Bidh sgrùdaidhean èifeachdas sruthaidh air obair eòlais gu cunbhalach a’ lorg nithean air an obrachadh gu gnìomhach dìreach **5–15%** den ùine ghabhte aca; is e ciudhaichean am fuigheall. Tha sin a’ ciallachadh gur e toirt air falbh ciudha, chan e fastadh, an luathachadh as saoire – dìreach an lèirsinn a lorg prògraman sruth-euslaintich ospadail mu leapannan. Airson rud sam bith le [cosgais dàil](../cosgais-dàil/), bidh meatrachan sruthaidh a’ lorg far a bheil cosgais na dàlach a’ cruinneachadh.

## A’ mhatamataig

```
Ùine cuairt       = t(crìochnaichte) − t(air tòiseachadh)
Ùine-stiùiridh    = t(lìbhrigte) − t(iarraidh)     (a’ gabhail a-steach ciudha ro-obrach)
Tron-chur         = nithean crìochnaichte / ùine
WIP               = nithean air tòiseachadh ach gun chrìochnachadh
Èifeachdas sruthaidh = ùine ghnìomhach / (gnìomhach + ùine feitheimh) × 100

Lagh Little:  WIP cuibheasach = tron-chur × ùine cuairt chuibheasach
              (co-ionann: ùine cuairt = WIP / tron-chur)
```

Is e Lagh Little an luamhan: aig tron-chur seasmhach, bidh gearradh WIP a’ gearradh ùine cuairt gu co-rèireach. Bidh e cuideachd a’ ruith ospadail: `leapannan air an gabhail = gabhaidhean-a-steach/latha × faid fuireach`.

## Eisimpleir obrach

Tha 40 nì a’ dol air adhart aig sgioba agus bidh i a’ crìochnachadh 10/seachdain: ùine cuairt = 40/10 = 4 seachdainean. Cuiridh iad crìochan WIP, a’ gearradh WIP gu 15: ùine cuairt = 15/10 = **1.5 seachdainean** – an aon dhaoine, an aon tron-chur, lìbhrigeadh 62% nas luaithe, bho smachd ciudha a-mhàin.

Air a phrìsealachadh le CoD: ma tha nithean a’ cosg £3,000/seachdain de chosgais dàil air a’ chuibheasachd, bidh gach nì a-nis a’ caitheamh 2.5 seachdainean nas lugha sa chiudha: 10 nì/seachdain × 2.5 × 3,000 = **£75,000/seachdain de chosgais dàil air a cur às** – bho atharrachadh poileasaidh gun chosgais.

Sgàthan ospadail: 40 gabhail-a-steach/latha × 6.0 latha LOS = 240 leabaidh; gearr an feitheamh neo-chlionaigeach taobh a-staigh LOS gu 5.6 latha agus tha 16 leabaidh air an saoradh ([faid fuireach](../fad-fuireach/)) – an aon lagh, an aon luamhan.

## Ceangal ri einnseanaireachd bathar-bog

Is e meatrachan sruthaidh a’ chànan cho-roinnte eadar einnseanaireachd lìbhrigidh agus obair slàinte:

- **Slatan-tomhais fo-ìre PR** (LinearB, ~8M PR): ùine togail elite < 7u, ath-sgrùdadh < 6u, cuairt iomlan < ~26u – is e ùine togail ciudha glan, a’ chiad rud ri ionnsaigh.
- Tha **[liostaichean feitheimh](../buaidh-liosta-feitheimh/)** nam backlogs; is e **[RTT](../iomradh-gu-làimhseachadh/)** ùine-stiùiridh; is e **[cleachdadh leapa](../làithean-leapa-air-an-sàbhaladh/)** WIP. Bidh leasachadh a’ gluasad san dà thaobh: crìochan WIP ↔ sgaoileadh gabhail-a-steach; ionnstramaid ùine ciudha ↔ lorg ìre slighe.
- Tha èifeachdas sruthaidh fo 15% àbhaisteach anns an dà raon, agus bidh an dà chuid ga fhalach oir tha *daoine* trang fhad ’s a tha *obair* a’ feitheamh – tomhais cloc na h-obrach, chan e cloc nan oibrichean.

## Cunnartan

- **Adhradh cleachdaidh**: bidh a bhith a’ dràibheadh cleachdadh luchd-obrach gu 100% a’ spreadhadh ùine ciudha neo-loidhneach (M/M/1: feitheamh ∝ ρ/(1−ρ)) – an adhbhar a bhios ospadail 95%-air-an-gabhail agus sgiobaidhean 95%-riaraichte a’ stad.
- **Cuibheasachdan thairis air sgaoilidhean claon**: tha ùine cuairt earball-throm; ro-innse le ceudeamhan (p85), chan e cuibheasachdan.
- **A’ gearradh WIP le bhith a’ diùltadh obair suas-an-t-srutha** agus ga ghairm leasachadh sruthaidh – cha deach an t-iarrtas à sealladh, chiùdhaich e taobh a-muigh crìoch an tomhais (dreach an ospadail: ambaileansan a’ feitheamh taobh a-muigh an ED).

## Stòran

- Little's Law and flow metrics overviews. <https://agility-at-scale.com/safe/lpm/flow-metrics/> ; <https://getdx.com/blog/flow-metrics/>
- LinearB engineering benchmarks. <https://linearb.io/resources/engineering-benchmarks>
- Reinertsen DG, *The Principles of Product Development Flow*.
