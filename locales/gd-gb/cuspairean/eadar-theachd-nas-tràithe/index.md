# Eadar-theachd nas tràithe

Ma leigeas comas air a shàbhaladh le eòlaiche cùlaibh dheuchainnean breithneachaidh ath-sgrùdadh nas luaithe, gluaisidh euslaintich bhon liosta feitheimh gu leigheas gnìomhach nas luaithe – agus tha leigheas nas tràithe mar as trice nas saoire agus nas fheàrr na leigheas nas anmoiche, oir bidh suidheachaidhean gun leigheas a’ dol air adhart.

## Carson a tha e cudromach

Is e adhartas galair riadh coimeasgte cùram slàinte. Chan eil euslainteach a’ feitheamh le suidheachadh gun leigheas ann an staid sheasmhach: bidh aillse ag atharrachadh ìre, bidh fàilligeadh cridhe a’ dì-dhèanamh, bidh trom-inntinn bhog a’ fàs dona. Bidh eadar-theachd nas tràithe mar sin a’ toirt dùbailte buannachd – **builean nas fheàrr** (barrachd QALY, air a làimhseachadh bho bhunait nas slàinte) agus gu tric **cosgaisean leigheis nas ìsle** (tha leigheas ìre thràth nas lugha dian na teasairginn ìre dheireannach). Is e am meacanaigeachd seo a dh’àrdaicheas “slighean nas luaithe” bho bhòidhchead obrachaidh gu riatanas clionaigeach is eaconamach – agus is e an adhbhar dhomhainn a bhuineas [cosgais dàil](../cosgais-dàil/) do bhathar-bog clionaigeach.

## A’ mhatamataig

```
Luach eadar-theachd nas tràithe (gach euslainteach) =
    [Cosgais_anmoch − Cosgais_tràth]                  (dìoladh cosgais leigheis)
  + [QALY_tràth − QALY_anmoch] × λ                    (buannachd slàinte × stairsneach)
  × P(adhartas rè na dàlach)                          (cuideam coltais)
```

Tha an cuideam coltais riatanach: chan eil a h-uile euslainteach a’ feitheamh a’ dol air adhart. Modaileadh coltas gluasaid gach aonad ùine (bho dhàta eachdraidh nàdarra), chan e an cùis as miosa. An uairsin lasaich: tha cosgaisean air an seachnadh bliadhnaichean air falbh luach nas lugha an-diugh ([lasachadh](../lasachadh-agus-roghainn-ùine/)) – agus thoir an aire gu bheil a’ mhòr-chuid de dh’eadar-theachd thràth cosg-*èifeachdach* seach cosg-*shàbhalach* (faic [eaconamas casg](../eaconamas-casg/)).

## Eisimpleir obrach

Backlog sgrùdaidh retinopathy siùcair: 4,000 euslainteach, 6 mìosan air dheireadh. Bidh gradaidh le cuideachadh AI a’ trìoblachadh tron-chur agus a’ glanadh a’ chiudha ann an 8 seachdainean. Eachdraidh nàdarra: ~2% de dh’euslaintich a’ feitheamh/bliadhna a’ dol air adhart gu ìrean a tha a’ bagairt lèirsinn nuair a tha iad gun ath-sgrùdadh.

```
Tachartasan adhartais air an seachnadh le luathachadh ~4 mìosan:
  4,000 × 2% × (4/12) ≈ 27 euslainteach

Gach adhartas air a sheachnadh:
  dìoladh leigheis (leigheas intravitreal an aghaidh laser) ≈ £4,000
  buannachd QALY (lèirsinn air a ghleidheadh) ≈ 0.8 QALY × £20,000 = £16,000

Luach ≈ 27 × (4,000 + 16,000) ≈ £540,000 — bho aon backlog air a ghlanadh aon turas,
mus cunntar am buannachd tron-chuir maireannach.
```

## Ceangal ri einnseanaireachd bathar-bog

Dà ghluasad. An toiseach, am fear follaiseach: bidh bathar-bog a luathaicheas slighean breithneachaidh is leigheis (triage, gradaidh AI, slighe thoraidhean) a’ cur ann an airgead tron mhodail chruinn seo – agus bidh am modail ag innse dhut dè an t-slighe a luathaicheas tu: an tè leis a’ chlaonadh adhartais as cas, chan e an ciudha as fhaide. San dàrna àite, an sgàthan einnseanaireachd: **bidh buggaichean cuideachd a’ dol air adhart**. Bidh bug a chaidh a ghlacadh ann an dealbhadh a’ cosg còmhradh; ann an riochdachadh a’ cosg tachartas; tha lùb cosgais “gluais clì” (10–100× a rèir ìre) na mhodail adhartais, agus tha an dreach onarach a’ giùlan an aon rabhaidh – tha lorg tràth mar as trice cosg-èifeachdach, chan e airgead an-asgaidh, oir tha fìor chosgaisean aig ath-sgrùdaidhean is deuchainnean agus cha robh a’ mhòr-chuid de chùisean a chaidh a ghlacadh a’ dol air adhart gu bràth.

## Cunnartan

- **Adhartas as miosa air a ghabhail ris airson a h-uile duine** – is e an cuideam coltais an t-eadar-dhealachadh eadar anailis agus tagradh.
- **Claonadh ùine-stiùiridh**: tha lorg galair nas tràithe gun atharrachadh builean a’ coimhead coltach ri buannachd ach chan eil; is e eadar-theachd *èifeachdach* nas tràithe an tagradh, chan e lorg nas tràithe a-mhàin (faic [eaconamas sgrùdaidh](../eaconamas-sgrìonaidh/)).
- **Dùblachadh cunntais** le tagraidhean liosta-feitheimh is RTT stèidhichte air an aon luathachadh – aon leasachadh slighe, aon seata bhuannachdan, air an riarachadh aon turas.

## Stòran

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- NHS England, diabetic eye screening programme. <https://www.gov.uk/topic/population-screening-programmes/diabetic-eye>
