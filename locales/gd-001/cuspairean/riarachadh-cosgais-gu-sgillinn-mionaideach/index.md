# Riarachadh cosgais gu sgillinn mionaideach

Bidh sgoltadh suim airgid iomlan – tabhartas co-roinnte, bile bun-structar, figear buaidh buidseit – thar grunn luchd-faighinn le àireamhachadh ceudadach sìmplidh gu cunbhalach a’ toirt pàirtean nach cuir ri chèile air ais chun an iomlain tùsail. Is e riarachadh sgillinn mionaideach an leasachadh: dòigh slàn/deicheach, ag obair ann an aonadan beaga airgid (sgillinnean), a gheall gun cuir na pàirtean ri chèile gu *dìreach* an t-iomlan, ge bith dè cho neo-chothromach ’s a roinneas e. Feumaidh einnseanair bathar-bog sam bith a dh’fheumas iomlan roinnte a rèiteachadh chun na sgillinn – tuarastal, pàigheadh tabhartais, cìs-air-ais seirbheis co-roinnte – am pàtran seo, chan e ceudadan puing-fleòdraidh.

## Carson a tha e cudromach

Is e pàtran ainmichte, bunaiteach ann an einnseanaireachd bathar-bog iomairt: tha *Patterns of Enterprise Application Architecture* Martin Fowler (2002) a’ sgrìobhadh `Money` agus `Allocate` dìreach oir is e “roinn $100 ann an trì” duilgheadas a bhios còd naïve a’ dèanamh ceàrr gu cunbhalach, agus gu sàmhach – chan eil a’ mhearachd a’ nochdadh ach nuair a bhios cuideigin a’ rèiteachadh nan leabhraichean agus a’ lorg na pàirtean sgillinn fo (no os cionn) an iomlain. Ann an obair eaconamas slàinte agus ionmhais NHS chan eil seo acadaimigeach: tha iomlain buaidh buidseit air an sgoltadh thar làraich, bhliadhnaichean, no stiùiridhean; tha cosgaisean bun-structar agus cead co-roinnte air an riarachadh thar roinnean a rèir àireamh-chinn no cuibhreann gnìomhachd. Feumaidh gach fear dhe na sgoltaidhean sin rèiteachadh gu mionaideach, oir stadaidh stiùiriche ionmhais a gheibh pàirtean nach cuir ri chèile chun an iomlain ag earbsa ris a’ mhodail gu lèir.

## A’ mhatamataig

```
Dòigh naïve (briste):
  part_i = round(total × share_i / Σ shares)     — a’ cruinneachadh gach pàirt gu neo-eisimeileach

Dòigh mhionaideach (an fhuigheall as motha / “riarachadh na fuighill as motha”):
  1. base_i = floor(total_minor_units × share_i / Σ shares)   — aonadan beaga slàn (sgillinnean) a-mhàin
  2. remainder = total_minor_units − Σ base_i                  — sgillinnean air fhàgail, an-còmhnaidh < àireamh luchd-faighinn
  3. sgaoil 1 aonad beag a bharrachd gach fear dhan luchd-faighinn `remainder` aig a bheil
     an fhuigheall bloigh as motha bho cheum 1, gus am bi an còrr air a chaitheamh

Toradh: Σ part_i == total, an-còmhnaidh, a rèir dealbhaidh.
```

Chan eil an dòigh mhionaideach a’ cruinneachadh pàirt air leth gu bràth – bidh i a’ cruinneachadh *an riarachaidh slàin* mar aon ghnìomh, is e sin a nì an neo-chaochlaideach suim a chumail.

## Eisimpleir obrach

Roinn $100.00 trì dòighean co-ionann (`shares = [1, 1, 1]`).

Dòigh naïve: $100.00 ÷ 3 = $33.333…, air a chruinneachadh gu neo-eisimeileach chun na sgillinn as fhaisge a’ toirt $33.33 do gach neach-faighinn. Air a chur ri chèile: $33.33 × 3 = $99.99 – chaidh aon sgillinn à sealladh, agus chan eil nì loidhne singilte “ceàrr” gu leòr airson a lorg le sgrùdadh.

Dòigh mhionaideach: `base` = $33.33 don treas, (9,999 aonad beag iomlan bho `floor(10,000 / 3) = 3,333` sgillinn gach fear), a’ fàgail fuigheall de 1 sgillinn (10,000 − 9,999). Thèid an aon sgillinn sin dhan neach-faighinn aig a bheil an fhuigheall bloigh as motha san roinn – tha an neach-faighinn sònraichte na mhion-fhiosrachadh brisidh-tie a-staigh, chan e rud air an còir do neach-gairm a bhith an urra. Bidh dithis luchd-faighinn aig $33.33 agus fear aig $33.34, agus cuiridh na trì pàirtean ri chèile gu dìreach $100.00.

Is e seo dìreach an àireamhachadh a dh’fheumas [anailis buaidh buidseit](../anailis-buaidh-buidseit/) nuair a dh’fheumar figear iomlan buaidh buidseit a sgoltadh thar làraich, bhuidhnean, no bhliadhnaichean ionmhais agus a rèiteachadh air ais chun an iomlain fhoillsichte – faic [cruinneachadh cosgais sàbhailte do dh’airgead](../cruinneachadh-cosgais-sàbhailte-do-dh-airgead/) airson an duilgheadas companach de bhith a’ cur ri chèile mòran loidhnichean mar sin gun ghluasad.

## Ceangal ri einnseanaireachd bathar-bog

Is e seo litearail “pàtran Money” bho ailtireachd bathar-bog iomairt – pàtran bunaiteach ainmichte airson dìreach an clas buga seo, chan e cleas aon-uair. Chaidh fìor fhàilligidhean rèiteachaidh ionmhais a chur a-mach bhon chlas bug seo: sgoltaidhean ceudadach air an àireamhachadh ann am `f64`, air an cruinneachadh gach neach-faighinn, agus gun a bhith air an sgrùdadh an aghaidh an iomlain tùsail. Tha e a’ ceangal gu dìreach ri modal [cosgais iomlan seilbh](../cosgais-iomlan-seilbh/) an stòir seo, a tha an-dràsta a’ cur ri chèile chosgaisean puing-fleòdraidh sìmplidh thar bhliadhnaichean agus roghainnean – tha an aon smachd mionaideachd a’ buntainn uair sam bith a dh’fheumar iomlan TCO no buaidh buidseit a riarachadh seach dìreach a chur ri chèile.

## Cunnartan

- **Ceudad-an uairsin-cruinnich an àite na fuighill as motha**: a’ riarachadh le ceudadan puing-fleòdraidh agus a’ cruinneachadh gach neach-faighinn gu neo-eisimeileach, a mheudaicheas mearachd cruinneachaidh agus is gann a chuireas ri chèile air ais chun an iomlain, gu h-àraidh thar mhòran luchd-faighinn.
- **A’ dearmad easbonantan aonad-beag airgid**: a’ gabhail ris gu bheil 2 àite deicheach aig a h-uile airgead – tha 0 aig an Yen Iapanach, tha 3 aig cuid de dh’airgeadan – bidh sgoltadh ceudadach làimh-sgrìobhte gu cumanta a’ cruadhachadh 2 agus a’ briseadh gu sàmhach airson airgeadan eile; leughaidh gnàth-ghnìomh riarachaidh mionaideach an t-easbonant bhon airgead fhèin (ISO 4217).
- **Ath-riarachadh fuigheall a chaidh a riarachadh mu thràth**: a’ ruith an gnàth-ghnìomh riarachaidh a-rithist air na tha air fhàgail bho riarachadh roimhe, gun sgrùdaidhean idempotency, a dh’fhaodas an aon sgillinn a chreidsinn dà thuras don aon neach-faighinn.

## Stòran

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — the `Money` and `Allocate` patterns.
- ISO 4217 — currency and funds code standard, which defines each currency's minor-unit exponent.
