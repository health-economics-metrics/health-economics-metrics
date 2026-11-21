# Smachd agus a’ chrìoch èifeachdais

Tha roghainn **fo smachd** ma tha roghainn eile a’ cosg nas lugha *agus* a’ lìbhrigeadh barrachd. Is e **a’ chrìoch èifeachdais** na tha air fhàgail às dèidh roghainnean fo smachd a thoirt air falbh: an seata roghainnean far am feum barrachd fhaighinn barrachd a phàigheadh.

## Carson a tha e cudromach

Mus tòisich deasbad sam bith mu stairsnichean no bhuidseatan, bidh measadh teicneòlais slàinte an toiseach a’ cur às do roghainnean nach bu chòir do dhuine a thaghadh a-chaoidh. Tha a bhith a’ cur gach roghainn air plèana cosgais-an-aghaidh-buaidh agus a’ tarraing na crìche na eacarsaich còig mionaidean a bhios gu cunbhalach a’ marbhadh leth de liosta ghoirid. Tha coimeasan àrdachaidh ([ICERs](../co-mheas-cosg-èifeachdais-àrdachaidh/)) an uairsin air an àireamhachadh *air feadh na crìche* a-mhàin, gach roghainn an aghaidh an ath fhear as saoire nach eil fo smachd – chan ann an aghaidh “na dèan dad” nuair a tha roghainnean eadar-mheadhanach nas fheàrr ann.

## A’ mhatamataig

```
Smachd teann:      tha A a’ cumail smachd air B ma tha Cosgais_A ≤ Cosgais_B agus Buaidh_A ≥ Buaidh_B
                    (le co-dhiù aon neo-ionannachd theann)

Smachd leudaichte: tha B air a dhùnadh a-mach ma choileanas measgachadh de A agus C barrachd buaidh
                    gach not — air a lorg nuair a thuiteas ICERs fhad ’s a ghluaiseas tu suas
                    a’ chrìoch. Feumaidh ICERs dligheach na crìche a bhith ag àrdachadh.
```

Pròiseas: seòrsaich roghainnean a rèir buaidh; thoir air falbh an fheadhainn fo smachd teann; obraich a-mach ICERs paidhrichte eadar nàbaidhean; thoir air falbh roghainn sam bith aig a bheil ICER os cionn an ath roghainn as èifeachdaiche (smachd leudaichte); dèan a-rithist gus am bi ICERs ag àrdachadh gu monotonach.

## Eisimpleir obrach

Ceithir roghainnean airson coinneamhan a chaidh air chall a lùghdachadh (buaidh = coinneamhan air an ath-ghabhail/bliadhna):

```
Roghainn        Cosgais/bliadhna    Air ath-ghabhail
Na dèan dad     £0                  0
Cuimhneachain SMS   £20,000         2,000
Gairmean fòn    £120,000            2,200
SMS + triage AI £90,000             3,500
```

Tha gairmean fòn **fo smachd teann** aig SMS + triage AI (a’ cosg barrachd, ag ath-ghabhail nas lugha). Crìoch: dad → SMS → SMS + AI.

```
ICER(SMS an aghaidh dad)   = 20,000 / 2,000  = £10 gach coinneamh air an ath-ghabhail
ICER(SMS+AI an aghaidh SMS) = (90,000 − 20,000) / (3,500 − 2,000) = £46.67 gach coinneamh
```

ICERs ag àrdachadh → crìoch dhligheach. Aig ~£160 air a shàbhaladh gach coinneamh ospadail air ath-ghabhail (faic [ìre nach tàinig](../ìre-nach-tàinig/)), tha an dà cheum crìche airidh air an gabhail; cha bu chòir do mholadh a’ bhanca-fòn a’ chomataidh a ruighinn a-chaoidh.

## Ceangal ri einnseanaireachd bathar-bog

Tog an aon chairt airson co-dhùnadh innealan sam bith: cosgais gach bliadhna air aon axis, builean tomhaiste (uairean air an sàbhaladh, thachartasan air an seachnadh, cleachdaidhean comasaichte) air an fhear eile. Tha puingean suas-is-clì den chrìch air an cur às mus tòisich duine ag argamaid mu bhuidseat. Bidh seo ag ath-fhrèamadh taghadh reiceadair bho dheasbadan liosta-feartan gu “tha thu fo smachd; tha a’ choinneamh seachad.” Bidh e cuideachd a’ nochdadh a’ phàtrain iomairt choitcheann a bhith a’ ceannach na roghainn as daoire airson buannachd iomaill – dligheach a-mhàin ma tha am prìs àrdachaidh gach aonad àrdachaidh fear a phàigheadh a’ bhuidheann gu fiosraichte.

## Cunnartan

- **A’ coimeas a h-uile càil ri bunait** an àite an ath roghainn air a’ chrìch – bidh seo a’ brosnachadh roghainnean daor le bhith a’ falach co-ionannan nas saoire.
- **Sgòran buaidh aon-thaobhach** a bhios a’ falach na tha cudromach; ma tha dà bhuilean a’ cunntadh, cuir còmhla iad gu dìonach (faic [anailis cosgais-fheumalachd](../anailis-cosgais-fheumalachd/)) no seall dà chrìoch.
- **A’ dìochuimhneachadh mì-chinnt**: faodaidh roghainnean faisg air a’ chrìch àiteachan atharrachadh fo [anailis mothachalachd](../anailis-mothachalachd/).

## Stòran

- York Health Economics Consortium glossary: dominance. <https://yhec.co.uk/glossary/dominance/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
