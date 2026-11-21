# Bliadhna beatha le atharrachadh airson ciorraim (DALY)

Is e DALY aon bhliadhna de bheatha fhallain a chaidh air chall – sgàthan taobh-eallaich a’ [QALY](../bliadhna-beatha-le-atharrachadh-càileachd/). Far am bi QALY a’ cunntadh slàinte *a chaidh fhaighinn*, bidh DALY a’ cunntadh slàinte *a chaidh air chall* gu galar; bidh eadar-theachdan air an luachadh a rèir DALY **air an seachnadh**.

## Carson a tha e cudromach

Is e an DALY inbhe slàinte na cruinne (WHO, sgrùdadh Eallach Galair na Cruinne, agus a’ mhòr-chuid de mhinistrealachdan slàinte dhùthchannan le teachd-a-steach ìosal is meadhanach a’ dealbhadh ann an DALY). Ma tha do bhathar-bog ag amas air siostaman slàinte eadar-nàiseanta, tabhartasairean, no prògraman co-thaobhaichte ri WHO, is e DALY air an seachnadh – chan e QALY a chaidh fhaighinn – cànan an luach. Slat-tomhais eachdraidheil WHO-CHOICE: tha eadar-theachd a sheachnas DALY airson nas lugha na 1× GDP gach neach “gu math cosg-èifeachdach,” 1–3× GDP gach neach “cosg-èifeachdach” (tha WHO a-nis a’ dì-mholadh cleachdadh teann nam bann sin, ach tha iad fhathast anns a h-uile àite ann an cleachdadh).

## A’ mhatamataig

```
DALY = YLL + YLD

YLL (bliadhnaichean beatha a chaidh air chall)  = bàsan × dùil-beatha àbhaisteach aig aois bàis
YLD (bliadhnaichean beò le ciorram)             = coitcheannas × cuideam ciorraim

cuideam ciorraim ∈ [0, 1], 0 = làn-shlàinte, 1 = co-ionann ri bàs
(cuideaman air am foillseachadh le sgrùdadh Eallach Galair na Cruinne)
```

## Eisimpleir obrach

Bidh àrd-ùrlar cuimhneachain sgrùdaidh ann an roinn a’ togail lorg tràth galair. Gach bliadhna casgaidh e 10 bàs ro-ùine (gach fear a’ call 20 bliadhna an aghaidh dùil-beatha àbhaisteach) agus casgaidh e 200 neach bho bhith beò bliadhna le suidheachadh le cuideam ciorraim 0.2.

```
YLL air a sheachnadh = 10 × 20        = 200
YLD air a sheachnadh = 200 × 0.2      = 40
DALY air an seachnadh               = 240 gach bliadhna
```

Ma chosgas an t-àrd-ùrlar $600,000/bliadhna ri ruith, is e cosgais gach DALY air a sheachnadh 600,000 / 240 = **$2,500**. Ann an dùthaich le GDP gach neach de $8,000, tha sin fada fo shlat-tomhais 1× GDP – “gu math cosg-èifeachdach” a rèir WHO-CHOICE.

## Ceangal ri einnseanaireachd bathar-bog

- Bu chòir do shlàinte didseatach ag amas air maoineachairean slàinte na cruinne (Gavi, Global Fund, prògraman nàiseanta) buaidh a chur an cèill mar **chosgais gach DALY air a sheachnadh** – is e am meatrach a bhios luchd-ath-sgrùdaidh tabhartais a’ smaoineachadh ann mu thràth.
- Tha an DALY cuideachd na theamplaid *cunntachais eallaich* feumail airson einnseanaireachd: tha thachartasan, togail neo-sheasmhach, agus suathadh dìleabach nam “bliadhnaichean beò le ciorram” airson bunait còd – bidh clàr-seilbhe eallaich cuideamaichte a rèir obair-dubh ag innse dhut càite a cheannaicheas ceartachadh na “bliadhnaichean einnseanaireachd fallain” as motha, san aon dòigh ’s a bhios clàran eallaich GBD a’ stiùireadh caitheamh slàinte.

## Cunnartan

- **Chan eil QALY a chaidh fhaighinn ≠ DALY air an seachnadh gu h-àireamhach** – cuideaman eadar-dhealaichte, clàran beatha eadar-dhealaichte, gnàthachasan eadar-dhealaichte (bha DALY gu h-eachdraidheil a’ cleachdadh cuideaman aois agus lasachadh taobh a-staigh an tomhais). Na tionndaidh gu faoin.
- **A’ cleachdadh stairsnichean iomadan-GDP mar stampa rubair** – tha WHO fhèin a’ rabhadh gu bheil iad a’ dearmad bhuidseatan is cosgais cothrom; faic [stairsnichean deònach-pàigheadh](../stairsnich-deònachd-pàighidh/).
- **A’ tagradh DALY aig sgèile sluaigh bho èifeachd gach neach-cleachdaidh** gun iomadachadh tro ghabhail ris is cumail ri leigheas – faic [ruigsinn agus co-ionannachd](../ruigsinneachd-agus-co-ionannachd/).

## Stòran

- WHO indicator registry: DALYs. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/158>
- Bertram MY, et al. "Cost-effectiveness thresholds: pros and cons." (WHO) <https://pmc.ncbi.nlm.nih.gov/articles/PMC4339959/>
- Marseille E, et al. on GDP-based thresholds, Health Policy and Planning. <https://academic.oup.com/heapol/article/32/1/141/2555408>
