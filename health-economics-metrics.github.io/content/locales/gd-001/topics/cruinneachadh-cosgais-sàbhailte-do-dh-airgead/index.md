# Cruinneachadh cosgais sàbhailte do dh’airgead

Bidh a bhith a’ cur ri chèile mòran loidhnichean airgid – cunntasan mìosail, cosgaisean gach làraich, figearan buaidh buidseit ioma-bliadhna – le àireamhan puing-fleòdraidh bìnearaidh àbhaisteach (`f64`) a’ cruinneachadh mhearachdan riochdachaidh beaga, oir chan eil a’ mhòr-chuid de bhlocan deicheach ($1,234.56, mar eisimpleir) so-riochdachail gu mionaideach ann am puing-fleòdraidh bìnearaidh. Tha gach mearachd fa-leth beag, ach faodaidh modail mòr a’ cur ri chèile cheudan no mhìltean de loidhnichean thar grunn bhliadhnaichean gluasad le bloigh de sgillinn – agus tha an gluasad an urra ri *òrdugh* nan cuir-ris, a nì e do-ath-aithris. Bidh cruinneachadh airgid a dhèanamh ann an àireamhachadh deicheach mionaideach (no aonad-bheag slàn) a’ cur ri chèile gu mionaideach, a’ freagairt mar a dh’fheumas siostaman cunntasachd agus leabhraichean-cunntais dà-inntrigidh rèiteachadh chun na sgillinn.

## Carson a tha e cudromach

Is e seo clas buga bunaiteach le deagh sgrìobhadh: is e pàipear Goldberg 1991 ACM Computing Surveys “What Every Computer Scientist Should Know About Floating-Point Arithmetic” an tùs-sgrìobhadh àbhaisteach air carson nach urrainn puing-fleòdraidh bìnearaidh a’ mhòr-chuid de luachan airgid dheicheach a riochdachadh gu mionaideach, agus carson a bhios a bhith gan cur ri chèile a’ meudachadh a’ mhearachd. Bidh modailean eaconamas slàinte agus ionmhas an NHS gu cunbhalach a’ cur ri chèile mòran bhliadhnaichean agus roinnean chosgais – bidh [cosgais iomlan seilbh](../cosgais-iomlan-seilbh/) agus [anailis buaidh buidseit](../anailis-buaidh-buidseit/) le chèile a’ cruinneachadh àireamhan mòra de loidhnichean chosgais `f64` thar chrìochan-ùine ioma-bliadhna. Nuair a dh’fheumas modail rèiteachadh chun na sgillinn – feumaidh sgrùdadh a tha ag ath-àireamhachadh an iomlain le làimh an figear *co-ionann* fhaighinn – feumaidh an àireamhachadh fhèin a bhith deicheach mionaideach, chan e puing-fleòdraidh.

## A’ mhatamataig

```
Cruinneachadh naïve:         total = Σ f64(line_item_i)         — gluasad an urra ri òrdugh
Cruinneachadh sàbhailte do dh’airgead: total = Σ Decimal(line_item_i)  — mionaideach, so-ath-aithris

A’ cur an sàs atharrachadh ceudadach (m.e. bufair èiginn):
  adjusted = total × multiplier                — toradh Decimal mionaideach, faodaidh
                                                  barrachd àiteachan deicheach a bhith aige na
                                                  neach-minor-unit an airgid
  rounded  = round(adjusted, currency_exponent, rounding_rule)  — feumaidh an riaghailt
                                                  cruinneachaidh (half-up an aghaidh half-even/
                                                  cruinneachadh banca) a bhith air a ràdh gu soilleir
```

Thoir an aire don smachd dà-cheum: faodaidh Decimal mionaideach a iomadachadh le iomadachair barrachd àiteachan deicheach a thoirt gu bith na tha an t-airgead a’ cleachdadh (trì àiteachan deicheach bho shuim dà-àite × iomadachair dà-àite, mar eisimpleir) – chan eil an grad-mionaideachd eadar-mheadhanach sin air a chruinneachadh air falbh gu fèin-obrachail; chan eil ach ceum cruinneachaidh soilleir, le riaghailt cruinneachaidh ainmichte, ga thoirt sìos gu fìor easbonant aonad-bhig an airgid.

## Eisimpleir obrach

Dà chunntas mìosail dheug co-ionann de $1,234.56 gach fear, air an cur ri chèile ann an àireamhachadh deicheach mionaideach: $1,234.56 × 12 = **$14,814.72**, gu mionaideach. Cuir sin an aghaidh a bhith a’ cur ri chèile an litearail `f64` `1234.56` dà thuras deug ann an dà-chruinneas IEEE-754, a dh’fhaodas gluasad le bloigh de sgillinn a rèir òrdugh a’ chuir-ris – clas buga fìor, sgrìobhte, chan e duilgheadas do mhodail air a thogail air àireamhachadh `Money` deicheach mionaideach.

A-nis cuir an sàs bufair èiginn buaidh buidseit àbhaisteach de 5% (iomadachair 1.05×) don iomlan $14,814.72 sin: $14,814.72 × 1.05 = $15,555.456 – trì àiteachan deicheach, oir tha an iomadachadh mionaideach agus chan eil e air a chruinneachadh gu fèin-obrachail gu dà àite deicheach an airgid. Le bhith ga chruinneachadh gu soilleir gu 2 àite deicheach le cruinneachadh banca (half-even) gheibhear dìreach **$15,555.46**.

## Ceangal ri einnseanaireachd bathar-bog

Is e seo an leasan dìreach, bunaiteach air cùl “bidh bathar-bog ionmhais a’ cleachdadh `Decimal`, chan e `float`” – tha e a’ ceangal gu soilleir ri modalan [cosgais iomlan seilbh](../cosgais-iomlan-seilbh/) agus [anailis buaidh buidseit](../anailis-buaidh-buidseit/) an stòir seo, a tha an dà chuid an-dràsta a’ cur ri chèile chosgaisean puing-fleòdraidh sìmplidh; chan eil an argamaid cheartais an seo ag iarraidh gluasad nam modailean sin sa bhad, ach tha i ag ràdh gu mionaideach *cuin* a dh’fheumas siostam rèiteachadh chun na sgillinn agus mar sin nach bu chòir puing-fleòdraidh bìnearaidh a chleachdadh airson a àireamhachadh airgid. Faic cuideachd [riarachadh cosgais mionaideach gu sgillinn](../riarachadh-cosgais-gu-sgillinn-mionaideach/) airson an duilgheadas companach de bhith a’ sgoltadh (seach a’ cur ri chèile) iomlain gun sgillinnean a chall.

## Cunnartan

- **A’ tionndadh gu `float` letheach slighe**: a’ tarraing luach airgid a-mach gu àireamh puing-fleòdraidh letheach slighe tro àireamhachadh (bidh cuid de leabharlannan `Money` fiù ’s ag ainmeachadh an dòigh tionndaidh seo rudeigin mar “lossy” mar rabhadh soilleir) a’ tilgeil air falbh gu sàmhach cinnt na mionaideachd airson gach àireamhachadh sìos-an-t-srutha bhon phuing sin.
- **“Tha Decimal ro slaodach airson a bhith draghail”**: a’ cur dheth àireamhachadh deicheach mionaideach mar cheann-uidhe neo-riatanach nuair as e ceartas agus so-sgrùdachd – chan e tron-chur amh – a tha cudromach airson aithris ionmhais.
- **A’ cur an sàs ceudadach èiginn gun a bhith ag ràdh na riaghailte cruinneachaidh**: faodaidh cruinneachadh half-up an aghaidh half-even (cruinneachadh banca) an sgillinn mu dheireadh atharrachadh; feumaidh an gnàthachas cruinneachaidh fhèin a bhith na roghainn ainmichte, so-sgrùdaidh – faic [anailis cosgais-buannachd](../anailis-cosgais-buannachd/) airson stiùireadh Green Book HM Treasury air atharrachaidhean èiginn is claonadh-dòchais, a tha dìreach na sheòrsa figear don cuirear an ceum cruinneachaidh seo.

## Stòran

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — the `Money` pattern.
- Goldberg D. "What Every Computer Scientist Should Know About Floating-Point Arithmetic." ACM Computing Surveys, 1991.
- HM Treasury, The Green Book — optimism-bias and contingency guidance for budget-impact modelling. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
