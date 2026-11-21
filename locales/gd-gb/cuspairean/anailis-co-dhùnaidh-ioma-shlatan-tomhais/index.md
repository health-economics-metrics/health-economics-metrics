# Anailis co-dhùnaidh ioma-shlatan-tomhais (MCDA)

Is e anailis co-dhùnaidh ioma-shlatan-tomhais (MCDA) modail sgòraidh suim-cuideaichte a thathar a’ cleachdadh ann am measadh teicneòlais slàinte nuair nach glac aon ICER/stairsneach deònach-pàigheadh a h-uile càil a tha cudromach don neach-co-dhùnaidh: co-ionannachd, feum gun choinneachadh, ùr-ghnàthachadh, buaidh buidseit, dèineachd an tinneis. Gheibh gach slat-tomhais cuideam a’ nochdadh a cudrom (air a tharraing bho luchd-ùidh, cuideaman a’ cur suas gu 1), gheibh gach roghainn sgòr àbhaisichte gach slat-tomhais (mar as trice 0–1), agus is e an sgòr iomlan an t-suim chuideaichte — an aon chumadh matamataigeach ri cairt-sgòraidh taghadh reiceadair bathar-bog.

## Carson a tha e cudromach

Thathar a’ cleachdadh MCDA ann am frèaman mar EVIDEM, agus le cuid de bhuidhnean HTA airson measaidhean orphan/tinneasan tearc far a bheilear a’ meas dòigh stairsnich cosgais-gach-QALY ro chumhang airson a h-uile càil a ghlacadh. Chuir Buidheann-gnìomha Cleachdaidhean Math Ùra ISPOR MCDA stiùireadh deagh chleachdaidh an cèill airson cuideaman is sgòran a tharraing gu dìonach, dìreach oir tha co-dhùnadh le cuideaman neo-fhoirmeil furasta a thogail agus furasta a mhealladh. Nuair a tha dimeanchan luach aig teicneòlas slàinte nach urrainn aon [stairsneach deònach-pàigheadh](../stairsnich-deònachd-pàighidh/) a riochdachadh — dèineachd, ùr-ghnàthachadh, co-ionannachd — bheir MCDA structar soilleir, sgrùdaidh do luchd-co-dhùnaidh airson an cur còmhla, an àite breithneachaidh gun aithris.

## A’ mhatamataig

```
Sgòr MCDA = Σ_i (cuideam_i × sgòr_i)

bu chòir cuideaman cur suas gu 1 (air an tarraing le dòighean luchd-ùidh mar
cuideachadh swing no am Pròiseas Rangachd Anailiseach)
```

## Eisimpleir obrach

Bidh comataidh HTA a’ sgòradh leigheas didseatach air ceithir slatan-tomhais:

```
Criterion                          Weight   Score   Weight × Score
Clinical benefit                   0.4      0.8     0.32
Cost impact                        0.3      0.5     0.15
Disease severity / unmet need      0.2      0.9     0.18
Innovation                         0.1      0.6     0.06
                                    ─────                ─────
                                    1.0                  0.71
```

Tha na cuideaman a’ cur suas gu 1.0 (0.4 + 0.3 + 0.2 + 0.1), agus is e sgòr MCDA 0.71 (0.32 + 0.15 + 0.18 + 0.06). Bidh a’ chomataidh a’ coimeas 0.71 ri stairsneach a chaidh aontachadh roimhe, no ga rangachadh an aghaidh theicneòlasan farpaiseach air an sgòradh san aon dòigh.

## Ceangal ri einnseanaireachd bathar-bog

Is e seo dìreach an aon mhatamataig ri cairt-sgòraidh taghadh reiceadair cuideaichte, matrix measaidh RFP, no modal sgòraidh prìomhachais fheartan — faic [togail an aghaidh ceannach](../togail-an-aghaidh-ceannach/), cleachdadh clasaigeach cairt-sgòraidh chuideaichte ann an solarachadh bathar-bog. Is fhiach cuideachd a chur an coimeas ri [WSJF agus CD3](../wsjf-agus-cd3/): is e dòigh prìomhachais stèidhichte air *co-mheas* a th’ ann an WSJF/CD3 (cosgais dàil air a roinn le meud no fad na h-obrach), ach is e *suim* chuideaichte a th’ ann an MCDA. Tha MCDA agus WSJF/CD3 nan dà fhreagairt structarail eadar-dhealaichte do “ciamar a rangaicheas sinn roghainnean farpaiseach”, agus tha fios dè an tè a dh’iarras co-dhùnadh air a bheil cudromach seach dè am foirmle a tha a’ coimhead nas teann — luach cuir-ris thar shlatan-tomhais neo-eisimeileach, an aghaidh dùmhlachd luach gach aonad de chomas gann.

## Cunnartan

- **Claonadh tarraing chuideaman**: ge b’ e cò a shuidhicheas na cuideaman, bidh e gu h-èifeachdach a’ dearbhadh na rangachd, agus mar sin faodaidh “foirmle” co-dhùnadh poilitigeach no malairteach a nighe mar àireamhachadh amasach. Clàraich cò shuidhich na cuideaman agus ciamar.
- **Cunntadh dùbailte de shlat-tomhais a chaidh a ghlacadh àiteigin eile**: ma sgòras tu “cosg-èifeachdas” mar aon shlat-tomhais *agus* “buaidh cosgais” air leth, bidh airgead air a chuideachadh thairis air na slatan-tomhais eile gun neach a bhith ag amas air.
- **Mionaideachd meallta**: tha sgòr cuideaichte dà-dheicheach (0.71) a’ ciallachadh barrachd teanntachd na tha na h-ìrean luchd-ùidh bunaiteach 0–10 a’ cur an cèill, agus gu tric chan eilear ag aithris caochlaideachd eadar-mheasaiche anns na h-ìrean sin idir.

## Stòran

- Thokala P, Devlin N, Marsh K, et al. "Multiple Criteria Decision Analysis for Health Care Decision Making — An Introduction: Report 1 of the ISPOR MCDA Emerging Good Practices Task Force." Value Health. 2016;19(1):1-13.
- Goetghebeur MM, Wagner M, Khoury H, et al. "Evidence and Value: Impact on DEcisionMaking — the EVIDEM framework and potential applications." BMC Health Serv Res. 2008;8:270.
