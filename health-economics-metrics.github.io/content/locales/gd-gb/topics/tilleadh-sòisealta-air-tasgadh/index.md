# Tilleadh sòisealta air tasgadh (SROI)

Bidh SROI a’ leudachadh [ROI](../tilleadh-air-tasgadh/) gu toraidhean nach bi margaidhean a’ prìsealachadh – sunnd, ceangal sòisealta, buaidh àrainneachdail – le bhith gan airgeadachadh le seachadairean ionmhais, airson *a h-uile* neach-ùidh air a bheil buaidh.

## Carson a tha e cudromach

Chan ann gu bhith a’ suathadh ri loidhne buidseit a bhios mòran de na bhios eadar-theachdan slàinte is coimhearsnachd a’ toirt a-mach: aonaranachd nas lugha, faochadh luchd-cùraim, buannachdan cosnaidh, spèis. Bidh SROI, air a riaghladh le seachd prionnsabalan Social Value International (thoir buaidh air luchd-ùidh, cuir luach air na tha cudromach, na dèan cus tagraidh, bi follaiseach, dearbh…), a’ toirt a-mach aithrisean mar “£3.20 de luach sòisealta airson gach £1 a chaidh a thasgadh.” Tha riatanasan luach sòisealta ann am solar poblach na RA a’ fàgail fianais ann an stoidhle SROI buntainneach gu malairteach: bidh tairgsean airson cunntraichean poblach (a’ gabhail a-steach an NHS) a’ faighinn puingean airson luach sòisealta a chaidh a shealltainn.

## A’ mhatamataig

```
SROI ratio = PV(monetized social outcomes) / PV(investment)

For each outcome:
  value = quantity × financial proxy × attribution × (1 − deadweight) × (1 − displacement)

deadweight   = would have happened anyway
attribution  = share caused by others
displacement = benefit moved from elsewhere rather than created
drop-off     = decay of the outcome over years
```

Is e na factaran atharrachaidh ionracas na dòigh: às an aonais, is ficsean le soidhne airgid a th’ ann an SROI.

## Eisimpleir obrach

Aplacaid companais a’ ceangal inbhich as sine aonaranach ri saor-thoilichean; cosgais a’ phrògraim £200,000/bliadhna; 1,500 paidhir gnìomhach.

```
Outcome: reduced loneliness for 1,500 people
  proxy: wellbeing valuation of "relief from loneliness" ≈ £1,800/person/yr
  deadweight 25% (some would have found connection anyway)
  attribution 80% (some credit to other services)

Value = 1,500 × 1,800 × 0.80 × 0.75 = £1,620,000

Outcome: reduced GP visits, 1,500 × 1.2 visits × £42 = £75,600 (payer-real)

SROI = (1,620,000 + 75,600) / 200,000 ≈ 8.5 : 1
```

Thoir an aire gu bheil an co-mheas 96% sunnd air a luach le seachadair agus 4% airgead cruaidh. Is e SROI dligheach a tha sin – ach feumar a thaisbeanadh mar luach sòisealta, gun leigeil leis a bhith a’ ciallachadh gum faodar £1.7M a bhanca.

## Ceangal ri einnseanaireachd bathar-bog

Is e SROI am frèam onarach airson obair einnseanaireachd aig a bheil luchd-buannachd taobh a-muigh na sgioba pàighidh: cumail suas stòr-fhosgailte, leasachaidhean ruigsinneachd, obair ùrlair air a chleachdadh le sgiobaidhean eile, tasgadh coimhearsnachd luchd-leasachaidh. Na meacanaigean so-ghiùlain: comharraich a h-uile neach-ùidh, airgeadaich le seachadairean air an ainmeachadh, agus cuir an sàs lasachaidhean deadweight/attribution (an robh am fuasgladh OSS sin air tachairt co-dhiù? cia mheud den ghnóthachadh a tha san obair agad an aghaidh an eag-shiostam?). Is e an smachd a bhith *a’ lasachadh do thagraidhean buaidh fhèin* a tha a’ sgaradh SROI bho àireamh margaidheachd.

## Cunnartan

- **Ceannach seachadair**: an luachadh sunnd as fialaidh a tha ri fhaighinn a thaghadh.
- **A’ leum thairis air deadweight/attribution** – an àrdachadh as cumanta, gu tric a’ dùblachadh a’ cho-mheas.
- **Coimeas cho-mheasan thar sgrùdaidhean**: tha co-mheasan SROI mothachail air an dòigh; dèan coimeas taobh a-staigh frèam co-chòrdail a-mhàin.
- **Luach sòisealta a thaisbeanadh mar shàbhalaidhean so-bhanca** do neach-seilbh buidseit.

## Stòran

- Social Value International, Guide to SROI. <https://www.socialvalueint.org/guide-to-sroi>
- UK Government guide to SROI. <https://www.gov.uk/government/publications/a-guide-to-social-return-on-investment>
