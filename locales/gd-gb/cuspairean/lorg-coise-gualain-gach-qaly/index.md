# Lorg-coise gualain gach QALY

Is e co-mheas èifeachdais a th’ ann an gualain gach QALY – sgaoilidhean gualain eadar-theachd (no sgaoilidhean air an seachnadh) air an roinn leis na QALY a bheir e – a tha dìreach co-chosmhail ri cosgais gach QALY, a leigeas le èifeachdas gualain eadar-theachd a mheasadh ri taobh èifeachdas cosgais. Bidh “buannachd airgid ghlan air atharrachadh airson gualain” a’ dol ceum nas fhaide, a’ cur luach airgid air buaidh gualain le luachan gualain neo-malairteach oifigeil Green Book na RA agus ga lùghdachadh bhon [bhuannachd airgid ghlan](../buannachd-airgid-lom/) àbhaisteach.

## Carson a tha e cudromach

Tha NICE agus NHS England a-nis an dùil gun tèid buaidh àrainneachdail a thoirt fa-near còmhla ri cosgais agus QALY. Tha gealltanas poblach neoni-glan aig an NHS: neoni-glan airson sgaoilidhean dìreach ro 2040, agus neoni-glan airson an lorg-coise slabhraidh solair slàn ro 2045. Tha leabhar-làimhe measaidhean teicneòlais slàinte NICE (PMG36) a’ toirt iomradh air seasmhachd àrainneachdail mar bheachdachadh a’ nochdadh ann am measadh theicneòlais. Airson toradh slàinte didseatach, tha seo a’ ciallachadh gu bheil gualain a’ fàs na cheathramh colbh den chùis luach, ri taobh cosgais, QALY, agus [buaidh-làidir air crìoch èifeachdais](../smachd-agus-a-chrìoch-èifeachdais/) – chan e àite nan fear sin, ach tomhas a dh’fheumas cùis-ghnìomhachais math aithris barrachd is barrachd.

## A’ mhatamataig

```
Gualain gach QALY = total_emissions_tonnes_co2e / total_qalys
  (tha luach àicheil a’ ciallachadh sgaoilidhean glan AIR AN SEACHNADH gach QALY
  a chaidh fhaighinn — dùbailte buannachd: slàinte nas fheàrr agus gualain nas lugha)

Buaidh gualain air a chur ann an airgead = emissions_tonnes_co2e × carbon_value_per_tonne
  (sgaoilidhean àicheil × luach deimhinneach = cosgais àicheil, i.e. buannachd)

NMB air atharrachadh airson gualain = net_monetary_benefit − monetized_carbon_impact
```

Bidh seo a’ leudachadh beachd crìoch èifeachdais cosgais/QALY le dàrna axis – gualain gach QALY – an aon loidsig “cuir air graf gach roghainn agus faic dè a tha fo smachd” ri [buaidh-làidir agus a’ chrìoch èifeachdais](../smachd-agus-a-chrìoch-èifeachdais/), air a cur an sàs air gualain an àite cosgais.

## Eisimpleir obrach

Bidh seirbheis telehealth a’ cur àite tadhal pearsanta, a’ seachnadh 5,000 turas càr/bliadhna aig timcheall air 8kg CO2e gach fear – 40 tònna CO2e air an seachnadh, air a riochdachadh mar fhigear sgaoilidhean àicheil (−40.0 tònna), agus bheir e 25 QALY/bliadhna:

```
Gualain gach QALY = −40.0 / 25.0 = −1.6 tonna CO2e air an seachnadh gach QALY a chaidh fhaighinn
```

A’ cleachdadh luach gualain neo-malairteach Green Book (figear sampaill, luach meadhanach neo-malairteach 2023 ≈ £269/tonna CO2e – bidh an Green Book ag ùrachadh luachan gualain gach bliadhna, ath-dhearbh mus luaidh thu ann an anailis bheò):

```
Buaidh gualain air a chur ann an airgead = −40.0 × £269 = −£10,760
```

Tha “cosgais” −£10,760 na bhuannachd £10,760. Ma tha buannachd airgid ghlan fa-leth an eadar-theachd £500,000:

```
NMB air atharrachadh airson gualain = £500,000 − (−£10,760) = £510,760
```

Bidh an sàbhaladh gualain a’ cur ris a’ chùis seach a bhith ga lùghdachadh – an dùbailte buannachd a tha am frèam sgaoilidhean àicheil an dùil a nochdadh.

## Ceangal ri einnseanaireachd bathar-bog

Is e crois-rathaid beò, làithreach seo le eaconamas AI/neul: tha lorg-coise gualain coimpiutaireachd airson trèanadh agus ruith modail AI a-nis na fhìor loidhne ann am solar an NHS, oir feumaidh cùmhnantan solaraichean an NHS os cionn stairsnichean sònraichte Plana Lùghdachadh Gualain. Tha [eaconamas aonad neul](../eaconamas-aonad-neul/) mu thràth a’ leantainn cosgais gach aonad toraidh coimpiutaireachd; is e gualain gach QALY an teamplaid nàdarra airson meatrach san àm ri teachd “cosgais gualain gach inference” a leudaicheas am modal sin agus eaconamas aonad inference chun taobh àrainneachdail, ged nach eil am meatrach sin ann fhathast.

## Cunnartan

- **Geamannan crìochan sgòpa**: a’ cunntadh sgaoilidhean dìreach (Sgòp 1) a-mhàin agus a’ fàgail a-mach sgaoilidhean slabhraidh solair (Sgòp 3), a bhios mar as trice nam mòr-chuid de fhìor lorg-coise toraidh slàinte didseatach.
- **A’ cleachdadh luach gualain seann-fhasanta**: bidh an Green Book ag ùrachadh nan luachan gualain neo-malairteach gach bliadhna, mar sin feumaidh figear £/tonna sam bith a thathar a’ togail ceann-latha, chan e seasmhach.
- **A’ làimhseachadh “èifeachdach air gualain” mar àite “cosg-èifeachdach”**: tha eadar-theachd gualain ìosal, luach ìosal fhathast na dhroch chleachdadh air goireasan an NHS. Is e gualain an ceathramh colbh ri taobh cosgais agus QALY, chan e àite dhiubh.

## Stòran

- NHS England, "Delivering a Net Zero National Health Service" (2020, updated 2022). <https://www.england.nhs.uk/greenernhs/publication/delivering-a-net-zero-national-health-service/>
- HM Treasury, The Green Book: Carbon Values supplementary guidance (updated annually; non-traded central value ≈ £269/tCO2e, 2023 — date any citation). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
