# Fiachan teicneòlais

Is e fiachan teicneòlais an cosgais ri teachd a tha an lùib cho-dhùnaidhean luath san àm a dh’fhalbh ann am bun-chòd: an obair leasachaidh a tha ri dhìoladh (**prionnsabal**) agus an tarraing leantainneach a tha e a’ cur air lìbhrigeadh (**riadh**). Bidh dòighean meudachaidh mar SQALE ga thionndadh bho shamhla gu uallach le cosgais.

## Carson a tha e cudromach

Gun mheudachadh, is gearan a th’ ann am fiachan teicneòlais; air a mheudachadh, is cùis-gnìomhachais a th’ ann. Bunaitean gnìomhachais (CAST Appmarq, 1,400 app / 550M LOC): gu h-eachdraidheil ≈ **$3.61 de phrionnsabal fhiachan teicneòlais gach loidhne còd**, le bun-chòdan àbhaisteach a’ giùlan co-mheas fiachan de 15–20% de chosgais ath-thogail, an aghaidh bàr slàinte a thathas a’ cleachdadh gu cumanta de ≤5% (ìre “A” SonarQube). Tha am frèam eaconamas slàinte a’ freagairt gu mionaideach: tha fiachan nan *staid chronach* – gun làimhseachadh, bidh e a’ dol air adhart, bidh a “riadh” a’ cruinneachadh mar lìbhrigeadh nas slaodaiche agus ìrean easbhaidhean nas àirde, agus bidh càradh a’ strì airson comas an aghaidh obair fheartan dìreach mar a bhios casg a’ strì an aghaidh làimhseachaidh.

## A’ mhatamataig

```
SQALE principal   = Σ over violations (remediation time) × developer cost rate
Technical debt ratio (TDR) = remediation cost / redevelopment cost × 100
                    (SonarQube grades: A ≤ 5%, B ≤ 10%, C ≤ 20%, D ≤ 50%)

Interest (the number that justifies paydown):
  interest/year = Δ delivery velocity × value per unit velocity
                + Δ defect rate × cost per defect
Paydown case  = PV(interest avoided over horizon) − remediation cost
                (discounted — see discounting-and-time-preference.md)
```

Bidh am prionnsabal ag innse an uallaich; is e **riadh** a nì cùis an tasgaidh. Tha pàigheadh prionnsabal £500k gus £40k/bliadhna de riadh a sheachnadh na mhalairt dona; gus £400k/bliadhna a sheachnadh, sàr-mhath.

## Eisimpleir obrach

Còmhdach amalachaidh chlàran clionaigeach 400k-LOC: prionnsabal SQALE 3,800 uair × £75 = **£285k**; TDR ≈ 12% (ìre C). Riadh tomhaiste: tha ùineachan cuairt 40% nas fhaide aig sgiobaidhean a bheir làimh air an còmhdach seo agus ìrean fàilligeadh atharrachaidh 2× an aghaidh bunait an oighreachd. Bidh an còmhdach a’ gabhail 6,000 uair-leasachaidh/bliadhna:

```
Interest ≈ 6,000 × 0.40 × £75      = £180,000/year (velocity drag)
         + 12 extra failures × £8,000 = £96,000/year (rework/incidents)
         ≈ £276,000/year

Remediate the worst 30% of principal (£85k) targeting hotspots → modelled
interest reduction 60%: saves ~£166k/year. Payback ≈ 6 months.
```

Tha targaideachd nan àiteachan teth cudromach: bidh riadh fiachan a’ cruinneachadh far a bheil tricead atharrachaidh × dùmhlachd fhiachan aig an àirde – chan eil càradh fiachan ainneamh air an suathadh a’ ceannach dad, coltach ri làimhseachadh staid nach dèanadh adhartas gu bràth ([eaconamas casg](../eaconamas-casg/)).

## Ceangal ri einnseanaireachd bathar-bog

Na h-ion-phortan eaconamas slàinte a leasaicheas argamaidean fiachan teicneòlais: cuir an cèill an t-oighreachd mar **clàr-innse eallaich** (ann an stoidhle [DALY](../bliadhna-beatha-le-atharrachadh-airson-ciorraim/) – càit a bheil na bliadhnaichean einnseanaireachd slàn a chaidh air chall?); fìreanaich pàigheadh sìos le matamataig adhartais, gu h-onarach (mar as trice cosg-èifeachdach, chan e sàbhaladh cosgais); cuir cuideam air càradh nan siostaman as miosa le [easbhaidh doimhneachd](../easbhaidh-qaly-agus-modaladairean-dèine/); agus cuir air adhart moltaichean càraidh mòra le anailis dìolaidh a sheasas ri riaghailtean [chosgaisean sìos-an-t-srutha air an seachnadh](../cosgaisean-sìos-an-t-srutha-air-an-seachnadh/) – cuideaman coltachd, lasaichte, air an cunntadh aon turas.

## Cunnartan

- **Aithris prionnsabail a-mhàin**: chan eil àireamh mhòr eagalach gun tuairmse riadh a’ fìreanachadh dad.
- **Figearan fiachan air an gineadh le inneal air an gabhail gu litireil**: bidh SQALE a’ cunntadh briseadh riaghailtean; bidh e a’ call fiachan ailtireachd (an seòrsa daor) agus a’ cunntadh mion-fhiosrachadh.
- **Utopianachd fiachan-neoni**: chan e neoni an ìre fiachan as fheàrr – is e giùlan a th’ ann am fiachan; is e a’ cheist an ìre rèidh.
- **“Seachnaidh an ath-sgrìobhadh a h-uile càil”**: feumaidh moltaichean ath-sgrìobhaidh na h-aon riaghailtean dìolaidh a choileanadh – cosgais coimeasach, coltachd, lasachadh.

## Stòran

- CAST, technical debt estimation. <https://www.castsoftware.com/glossary/technical-debt-estimation>
- Letouzey J-L, "The SQALE method for evaluating Technical Debt." <https://www.researchgate.net/publication/239763591_The_SQALE_method_for_evaluating_Technical_Debt>
