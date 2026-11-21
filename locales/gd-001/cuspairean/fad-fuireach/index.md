# Fad fuireach (LOS)

Is e fad fuireach an àireamh de làithean bho ghabhail a-steach gu leigeil dhachaigh à ospadal — am prìomh mheatrach èifeachdas sruthaidh ann an cùram euslaintich-a-staigh. Bidh cuibheasachdan acute na RA timcheall air 4–5 làithean; bidh gach latha a bharrachd a’ caitheamh leapa gann agus a’ nochdadh an euslaintich do chunnartan a gheibhear san ospadal.

## Carson a tha e cudromach

Bidh LOS a’ stiùireadh cha mhòr a h-uile càil ann an eaconamas ospadail acute: comas leapa, tron-chur roghnach, sruth èiginn, luchd-obrach. Bidh lùghdachadh LOS cuibheasach le bloighean de latha aig sgèile a’ saoradh comais mhòir (faic [làithean-leapa air an sàbhaladh](../làithean-leapa-air-an-sàbhaladh/)). Tha LOS cuideachd na chomharra càileachd an dà chuid: ma tha e ro fhada tha e a’ moladh fàillinn pròiseis (breithneachaidhean air dàil, pàipearan leigeil dhachaigh, feitheamh cùram sòisealta); faodaidh ro ghoirid ciallachadh leigeil dhachaigh ro thràth, a nochdas nas fhaide air adhart mar [ath-ghabhaltasan](../ìre-ath-ghabhail/).

## A’ mhatamataig

```
LOS (per spell)  = discharge date − admission date
Average LOS      = occupied bed days / discharges (report mean AND median;
                   LOS is heavily right-skewed by long-stay outliers)

Comparisons require case-mix adjustment (age, diagnosis, acuity),
or you are measuring who the hospital admits, not how it performs.
```

Bidh Lagh Little a’ ceangal nan caochladairean sruthaidh: `beds occupied = admission rate × average LOS` — an aon lagh a tha a’ riaghladh ciudhaichean bathar-bog (faic [meatrachan sruthaidh](../meatrachan-sruthaidh/)).

## Eisimpleir obrach

Bidh trust a’ gabhail a-steach 40 euslainteach meidigeach èiginneach/latha aig LOS cuibheasach 6.0 làithean: 240 leabaidh air an àrachadh gu maireannach (40 × 6). Bidh bathar-bog co-òrdanachadh leigeil dhachaigh (lorg thaskaichean, fèin-ghluasad cungaidhean-gu-gabhail-dhachaigh, ceadachadh còmhdhail) a’ gearradh earball neo-chlionaigeach nam fuireach 0.4 latha air cuibheasach.

```
Beds needed = 40 × 5.6 = 224 → 16 beds freed continuously
            = 16 × 365 = 5,840 bed days/year
```

Cuir luach air na 5,840 latha-leapa a rèir dòigh (ath-lìonadh/dùnadh/slaodachd) a rèir [làithean-leapa air an sàbhaladh](../làithean-leapa-air-an-sàbhaladh/). Thoir fa-near na ghluais: chan e leigheas, ach *feitheamh* — bha an t-euslainteach fallain gu meidigeach; bha an siostam fhathast a’ dèanamh pàipearan. Is e duilgheadas ciudhaidh a tha sin, agus tha bathar-bog math air duilgheadasan ciudhaidh.

## Ceangal ri einnseanaireachd bathar-bog

Is e LOS ùine-cuairt an ospadail, agus tha an leabhar-cluiche leasachaidh co-ionann ri obair sruth lìbhrigidh: cuir ionnsramaidean air na ceumannan (gabhail a-steach → leigheas → fallain-gu-meidigeach → air leigeil dhachaigh gu fìrinneach), lorg far a bheil ùine a’ cruinneachadh (is e na gluasadan thairis), thoir air falbh stàitean feitheimh an àite comas a chur ris. Is e buidheann “fallain gu meidigeach airson leigeil dhachaigh ach fhathast a’ gabhail leabaidh” dreach an ospadail de PR aontaichte ach gun a bhith air a chur còmhla. Cothroman bathar-bog dìreach: co-sheirm thaskaichean leigeil dhachaigh, ùine tionndaidh breithneachaidh, e-òrdachadh chungaidhean leigeil dhachaigh, aonachadh iomraidhean cùram sòisealta.

## Cunnartan

- **Aithris cuibheasach a-mhàin** — bidh outliers a’ smachdachadh; faodaidh cuibheasach a tha a’ tuiteam earball fuireach fada a tha a’ fàs fhalach.
- **Gun atharrachadh measgachaidh chùisean** ann an tagraidhean ro/às dèidh: bidh stairsnichean gabhail a-steach ag atharrachadh gu seusanta agus gu ginealach.
- **Lùghdachadh LOS a tha ag ath-nochdadh mar ath-ghabhail** — càraich tagraidhean LOS an-còmhnaidh le dàta ath-ghabhail 30 latha.

## Stòran

- OECD, length of hospital stay indicator. <https://www.oecd.org/en/data/indicators/length-of-hospital-stay.html>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
