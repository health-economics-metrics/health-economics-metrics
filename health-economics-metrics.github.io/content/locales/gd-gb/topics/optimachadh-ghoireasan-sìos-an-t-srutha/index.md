# Optimachadh ghoireasan sìos-an-t-srutha

Bidh uair a thìde a shàbhaladh do dh’eòlaiche àrd – GP, clàraiche àrd, comhairliche – gu tric a’ casg dàil cnap-starra airson sgioba ioma-chuspaireach (MDT) slàn de nàirsean, clèirich rianachd, agus leigheasan a tha a’ feitheamh air soidhnigeadh clionaigeach. Is e luach a bhith a’ fuasgladh a’ chnap-starra tron-chur a h-uile duine sìos-an-t-srutha dheth.

## Carson a tha e cudromach

Bidh cùram slàinte ag obair air slabhraidhean ùghdarrachaidh: tha leigeil dhachaigh a’ feitheamh air soidhnigeadh comhairliche, planaichean leigheis a’ feitheamh air ath-sgrùdadh MDT, iomraidhean a’ feitheamh air triage. Nuair a thèid am ròl-geata a chuir dheth, chan e uair aon neach a tha an cosgais – is e ùine dìomhain no bacte thar gach ròl eisimeileach, a bharrachd air ùine euslaintich ann an limbo ([làithean-leapa](../làithean-leapa-air-an-sàbhaladh/) a bharrachd, feitheamh [RTT](../iomradh-gu-làimhseachadh/) nas fhaide). Is e seo teòiridh nan cuingeadan air a cur an sàs ann an slighean clionaigeach: tha uair air a shàbhaladh *aig a’ chuingead* luach tron-chur iomaill an t-siostaim gu lèir; tha uair air a shàbhaladh àite eile luach mòran nas lugha.

## A’ mhatamataig

```
Luach fuasglaidh = Σ thairis air ròlan sìos-an-t-srutha (uairean bacte air an leigeil ma sgaoil × cosgais aonaid)
                 + buannachd tron-chuir slighe × luach gach crìochnachaidh slighe

Coimeas: luach na h-uairean a thìde ceudna air a shàbhaladh aig ròl neo-gheata ≈ luach comais
an ròil sin a-mhàin (faic practitioner-time.md).
```

Aithnich an cuingead gu empirigeach: càite a bheil obair a’ ciudhadh as fhaide? Dè an inbhox a bhios dàil a’ leantainn air ais thuige?

## Eisimpleir obrach

Feumaidh leigeil dhachaigh uàird sgrùdadh comhairliche gach madainn. Bidh an comhairliche a’ caitheamh 90 mion/latha a’ cruinneachadh fiosrachaidh sgapte thar shiostaman; bidh ath-sgrùdaidhean a’ crìochnachadh ro 14:00, agus bidh 6 leigeil dhachaigh/latha a’ crìochnachadh ro fhadalach don latha sin – gach fear a’ cosg latha-leapa seachanta.

Bidh deas-bhòrd geàrr-chunntais leigeil dhachaigh (deuchainnean, cungaidhean, brataichean ann an aon sealladh) a’ gearradh cruinneachadh gu 20 mionaid; bidh ath-sgrùdaidhean a’ crìochnachadh ro 11:30:

```
Làithean-leapa air an seachnadh = 4 de na 6 leigeil dhachaigh fadalach × 365 ≈ 1,460 latha-leapa/bliadhna
Fuasgladh sìos-an-t-srutha: 2 cho-òrdanaiche leigeil dhachaigh + cungaidh-leigheis + còmhdhail
                       roimhe dìomhain-an uairsin-dian gach feasgar —
                       ~3 uairean luchd-obrach/latha de dh’ùine bacte air a leigeil ma sgaoil ≈ 1,100 uair/bliadhna
```

Is e 70 mionaid an comhairliche fhèin an *roinn as lugha* den luach – a’ phrìomh phuing den mheatrach seo. Cuir luach air na làithean-leapa a rèir dòigh (faic [làithean-leapa air an sàbhaladh](../làithean-leapa-air-an-sàbhaladh/)) agus na h-uairean luchd-obrach mar chomas.

## Ceangal ri einnseanaireachd bathar-bog

Is e seo ath-sgrùdadh còd, soidhnigeadh ailtireachd, agus inbhox an einnseanair luchd-obrach. Nuair a bhios còig einnseanairean a’ feitheamh latha airson an aon neach as urrainn dealbhadh aontachadh, is e cosgais còig làithean-einnseanair a bharrachd air latha de [chosgais dàil](../cosgais-dàil/) air an obair fhèin – chan e aon uair ath-sgrùdaiche. Bidh innealan a dhlùthaicheas gnìomh a’ ròil-gheata (co-theacsa ath-sgrùdaidh nas fheàrr, ro-sgrùdaidhean fèin-obrachail, deas-bhùird a chruinnicheas na tha an neach-aontachaidh a dhìth) a’ ceannach tron-chur siostaim, chan e goireas pearsanta. Tomhais ùine togail/feitheimh aig a’ chuingead (faic [meatrachan sruthaidh](../meatrachan-sruthaidh/)) – is e co-ionann bathar-bog a’ chreige leigeil dhachaigh 14:00.

## Cunnartan

- **A’ optimeachadh neo-chuingead**: bidh innealan brèagha airson ròl nach eil dad a’ ciudhadh air a chùlaibh a’ toirt luach siostaim faisg air neoni.
- **Imrich cuingeadan**: fuasgail an comhairliche agus gluaisidh an cuingead (gu cungaidh-leigheis, gu còmhdhail) – modaileadh an *ath* chuingead mus tagair thu làn bhuannachdan tron-chuir.
- **A’ cunntadh uairean sìos-an-t-srutha mar airgead**: tha leigeil ma sgaoil ùine bacte na chomas, fo [dheuchainn ath-sgaoilidh](../sàbhalaidhean-a-leigeil-a-mach-airgead-an-aghaidh-nach-eil/) àbhaisteach.

## Stòran

- Goldratt EM, *The Goal* (theory of constraints).
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
