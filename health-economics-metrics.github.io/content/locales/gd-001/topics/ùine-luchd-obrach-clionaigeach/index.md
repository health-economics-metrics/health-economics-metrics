# Ùine luchd-obrach clionaigeach

Is e ùine luchd-obrach clionaigeach an goireas as gainne anns a’ mhòr-chuid de shiostaman slàinte. Gus luach a tomhas airson mionaidean a shàbhaladh do chlinigeach gach latha, feumar gluasad bho mhatamataig tuarastail shìmplidh gu **cosgais cothrom agus comas an t-siostaim**: taobh a-staigh seirbheis slàinte nàiseanta, is e cnap-starra obrachaidh cruaidh a th’ ann an ùine neach-obrach clionaigeach, chan e loidhne cosgais a lùbas.

## Carson a tha e cudromach

Chan urrainn dhut barrachd GPan, comhairlichean no nursaichean speisealta a dhèanamh gu luath – tha lìonraidhean trèanaidh 5–15 bliadhna, agus tha dreuchdan falamh maireannach. Mar sin chan e “tuarastal air a sheachnadh” a th’ ann an uair de dh’ùine luchd-obrach air a shàbhaladh (tha an neach-obrach fhathast air a phàigheadh); is e *comas cnap-starra air a leigeil ma sgaoil* a th’ ann, agus tha luach comas cnap-starra co-ionann ris na tha an cnap-starra a’ dèanamh. Sin carson a tha tagraidhean “a’ sàbhaladh 10 mionaidean gach co-chomhairle” aig an aon àm an loidhne as cumanta agus as mì-phrìsichte ann an slàinte didseatach.

## A’ mhatamataig

Trì ìrean luachaidh, a’ dol am meud ann an onair:

```
1. Bunait tuarastail:   uairean × ìre tuarastail lìonta (cosgaisean aonad PSSRU)
                        — na tha an ùine a’ cosg, chan e na tha i a’ toirt gu buil
2. Bunait toraidh:      uairean → coinneamhan/modhan-obrach air an comasachadh × luach sgeama
                        (faic national-tariff-and-unit-costs.md)
3. Bunait cnap-starra:  ma tha an dreuchd seo a’ cumail slighe gu lèir, uairean × luach
                        tron-chur slighe air a leigeil ma sgaoil (teòiridh nan cuingeadan)
```

Lasachadh criomaig: bidh ùine air a shàbhaladh ann am fuigheagan fo chuantam so-chleachdaidh (m.e., 3 mionaidean sgapte thar clionaig) ag ath-chleachdadh gu dona; cuir a-steach factar cleachdaidh a chaidh a ràdh.

## Eisimpleir obrach

Bidh scribing àrainneachdail a’ sàbhaladh 2 mhionaid do GP gach co-chomhairle, 30 co-chomhairle/latha: 60 mionaid/latha, no **220 uair/bliadhna gach GP** thar 220 latha obrach.

```
Bunait tuarastail: 220 × £80 (uair GP lìonta, roinn PSSRU) ≈ £17,600/GP/bliadhna
Bunait toraidh:    60 mion/latha = 5 co-chomhairle 12-mhionaid a bharrachd/latha
                   = 1,100 coinneamh a bharrachd/GP/bliadhna × £42 ≈ £46,200/GP/bliadhna
                   — no na h-aon choinneamhan air an gabhail a-steach mar ùine-a bharrachd nas lugha agus
                   co-chomhairlean nas sàbhailte, gun cabhag (loidhne càileachdail)
```

Thar caidreachas 50-GP tha luach ~£2.3M/bliadhna aig comas bunait toraidh – ma tha na mionaidean fìor (air an tomhas, chan ann a rèir an reiceadair), air an cruinneachadh (co-chomhairlean slàna, chan e criomagan), agus air an ath-chleachdadh (faic [sàbhalaidhean a’ leigeil a-mach airgead an aghaidh nach eil](../sàbhalaidhean-a-leigeil-a-mach-airgead-an-aghaidh-nach-eil/)).

## Ceangal ri einnseanaireachd bathar-bog

Bidh ùine einnseanair shinnsearach a’ giùlan san aon dòigh: is e an cnap-starra tro bheil dealbhaidhean, lèirmheasan agus tachartasan a’ sruthadh, agus mar sin luachaich i a rèir na tha an cnap-starra a’ cumail, chan ann a rèir tuarastal. Tha an aon luachadh trì-ìre a’ buntainn ri tagradh “bidh AI a’ sàbhaladh X mionaidean do gach leasaiche” sam bith – bidh matamataig tuarastail a’ brosnachadh àireamhan beaga; is e na ceistean onarach a bheil mionaidean a’ cruinneachadh ann am blocaichean so-chleachdaidh agus dè a bhios an comas a chaidh a leigeil ma sgaoil a’ toirt gu buil. Faic [optimachadh ghoireasan sìos-an-t-srutha](../optimachadh-ghoireasan-sìos-an-t-srutha/) airson an iomadachaidh nuair is ann don neach a bhios a h-uile duine a’ feitheamh air a bhuineas an uair a shàbhail.

## Cunnartan

- **Mionaidean × tuarastal = sàbhalaidhean** – am meudachadh canonach; is e comas a th’ ann, agus dìreach aig a’ chleachdadh a chaidh ainmeachadh.
- **A’ dearmad duilgheadas a’ chuantaim**: chan eil 12 × 5-mionaid air an sàbhaladh = aon uair shaor.
- **A’ luachadh gach dreuchd co-ionnan**: tha uair den chnap-starra slighe luachmhor iomadh uair uair de dhreuchd nach cumail.

## Stòran

- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
