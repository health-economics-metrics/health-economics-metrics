# Clàr-amais cruinneachaidh

Is e Clàr-amais Cruinneachaidh (Wagstaff, Paci, van Doorslaer, 1991) an tomhas staitistigeil àbhaisteach air neo-chothromachd co-cheangailte ri inbhe shòisio-eaconamach ann an caochladair slàinte, a’ dol bho -1 gu 1. Tha àicheil a’ ciallachadh gu bheil an caochladair slàinte cruinnichte am measg an fheadhainn fo ana-cothrom sòisio-eaconamach, tha deimhinneach a’ ciallachadh gu bheil e cruinnichte am measg an fheadhainn a tha nas fheàrr dheth, agus tha neoni a’ ciallachadh nach eil caisead sòisio-eaconamach cunbhalach ann – bidh e a’ tionndadh amharas mu sgaoileadh neo-chothromach gu aon àireamh so-choimeasach.

## Carson a tha e cudromach

Faodaidh prògram coimhead èifeachdach gu h-iomlan agus fhathast a bhuannachd a lìbhrigeadh cha mhòr gu tur dhan fheadhainn a bha nas fheàrr dheth mu thràth. Is e draghan sgaoilidh mar seo dìreach na bhios [ruigsinn is co-ionannachd](../ruigsinneachd-agus-co-ionannachd/) a’ leantainn gu tuairisgeulach – ruigsinn air a shreathachadh a rèir cuinnean dìth, beàrn co-ionannachd eadar buidhnean àrd is ìosal – ach chan eil clàr sreathach a’ dlùthachadh gu aon loidhne treand, agus chan urrainn a choimeas gu furasta thar dà eadar-theachd gu tur eadar-dhealaichte a chaidh a thomhas air sgèilean eadar-dhealaichte. Bidh an Clàr-amais Cruinneachaidh a’ fuasgladh an dà dhuilgheadas: tha e air obrachadh a-mach san aon dòigh airson caochladair slàinte sam bith an aghaidh rangachadh sòisio-eaconamach sam bith, gus an urrainn do sheirbheis slàinte nàiseanta lorg a bheil neo-chothromachd seirbheis didseatach shònraichte a’ leudachadh no a’ lùghdachadh bho fhoillseachadh gu foillseachadh, agus an cothromachd sgaoilidh de sgaoileadh app a choimeas ri, can, prògram sgrùdaidh, air an aon sgèile àbhaisichte.

## A’ mhatamataig

```
CI = (2 / mean(health_values)) × Cov(health_values, socioeconomic_ranks)

Cov(X, Y) = mean(X × Y) − mean(X) × mean(Y)   (co-chaochlaideachd sluaigh)

socioeconomic_ranks: ìre bloigh gach neach san sgaoileadh sòisio-eaconamach,
ann an [0, 1] (0 = fo as motha ana-cothrom, 1 = as motha buannachd;
airson dàta buidhnichte/bannaichte, gu gnàthach ìre meadhan-phuing gach buidhne)
```

Is e seo am “foirmle co-chaochlaideachd goireasach” (O’Donnell, van Doorslaer, Wagstaff, Lindelow, World Bank 2008) – an ath-ghoirid àbhaisteach don chleachdaiche airson an Clàr-amais Cruinneachaidh obrachadh a-mach gu dìreach bho bhreithneachaidhean paidhrichte, gun a bhith a’ tarraing agus ag aonachadh fo lùb cruinneachaidh an toiseach.

## Eisimpleir obrach

Sgòr deagh-shlàinte fèin-aithriseach (1 = as miosa, 4 = as fheàrr) air a choimhead thar ceithir cairteal sòisio-eaconamach co-ionann, gach fear air a riochdachadh le ìre meadhan-phuing a chairteil:

```
health_values        = [1.0, 2.0, 3.0, 4.0]
socioeconomic_ranks  = [0.125, 0.375, 0.625, 0.875]

mean(health_values)        = 2.5
mean(health × rank)        = mean([0.125, 0.75, 1.875, 3.5]) = 1.5625
mean(socioeconomic_ranks)  = 0.5

Cov = 1.5625 − 2.5 × 0.5 = 0.3125

CI = 2 × 0.3125 / 2.5 = 0.25
```

Tha `0.25` deimhinneach a’ ciallachadh gu bheil an sgòr slàinte seo cruinnichte am measg a’ bhuidhinn sòisio-eaconamach le buannachd – tha na freagairtean le sgòr nas àirde a’ claonadh gu deireadh nas fheàrr dheth den rangachadh.

## Ceangal ri einnseanaireachd bathar-bog

Is e seo an aon tomhas neo-chothromachd stèidhichte air co-chaochlaideachd a thathas a’ cleachdadh ann an eaconamas san fharsaingeachd (co-ogha co-èifeachd Gini), agus bidh e a’ mapadh air tomhas a bheil buannachdan toraidh bathar-bog cruinnichte am measg earrannan luchd-cleachdaidh a tha buannachdach mu thràth an àite a bhith air an sgaoileadh gu cothromach – leudachadh dìreach air [ruigsinn is co-ionannachd](../ruigsinneachd-agus-co-ionannachd/) (taobh “ruigsinn” RE-AIM) gu tomhas staitistigeil foirmeil seach beàrn air a mhìneachadh. Far am bi ruigsinn-is-co-ionannachd ag aithris buaidh gach sreath, bidh an Clàr-amais Cruinneachaidh a’ dlùthachadh an sgaoilidh gu lèir gu aon àireamh le soidhne, freagarrach mar aon KPI air a leantainn thar fhoillseachaidhean – practaigeach do dheas-bhòrd, far nach eil briseadh sreathach slàn.

## Cunnartan

- **Gluasad gnàthachas soidhne**: tha an soidhne an urra ri mar a thèid an dà chuid an caochladair slàinte agus an ìre a mhìneachadh – ma thionndaidheas tu fear, tionndaidhidh an soidhne, mar sin feumar an gnàthachas a chleachdar a ràdh gu soilleir ri taobh luach sam bith air aithris.
- **Ìrean crìche an àite ìrean meadhan-phuing**: feumaidh dàta sòisio-eaconamach buidhnichte no bannaichte (m.e. còigeamhan) ìre bloigh gach buidhne aig a *mheadhan-phuing* a chleachdadh, chan e a chrìoch, no tha an clàr-amais claon.
- **A’ leughadh “faisg air neoni” mar “gun neo-chothromachd”**: tha Clàr-amais Cruinneachaidh faisg air neoni a’ ciallachadh “gun chaisead sòisio-eaconamach cunbhalach”, chan e “gun neo-chothromachd” ann an ciall iomlan – faodaidh neo-chothromachdan co-aontachail ann an dòighean eadar-dhealaichte a chèile a chuir gu neoni.

## Stòran

- Wagstaff A, Paci P, van Doorslaer E. "On the measurement of inequalities in health." Soc Sci Med. 1991;33(5):545-57.
- O'Donnell O, van Doorslaer E, Wagstaff A, Lindelow M. "Analyzing Health Equity Using Household Survey Data." World Bank. 2008 — the standard practitioner handbook, source of the convenient covariance formula used here. <https://openknowledge.worldbank.org/entities/publication/98380884-0d1d-53d2-b95f-ec6be2019414>
