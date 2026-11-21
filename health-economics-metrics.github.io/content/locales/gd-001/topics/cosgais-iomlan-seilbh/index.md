# Cosgais iomlan seilbh (TCO)

Is e TCO làn chosgais siostaim thar a bheatha: ceannach no togail, amalachadh, obrachadh, cumail suas, taic, trèanadh, agus cur à seirbheis. A’ bhunait mì-chofhurtail: **tha cumail suas 50–80% de TCO bathar-bog** – tha timcheall air trì cairteal de chosgais fad-beatha a’ tighinn *às dèidh* an cur air bhog.

## Carson a tha e cudromach

Dh’ionnsaich measadh teicneòlais slàinte o chionn fhada nach e prìs cungaidh a cosgais – buinidh rianachd, sgrùdadh, agus riaghladh bhuaidhean-taobh uile don mhodail. Bidh cùisean-gnìomhachais bathar-bog nach cunntadh ach cosgais togail/ceadachais ag ath-aithris mearachd prìs cungaidh gun chiall, a’ fo-aithris cosgaisean gu rianail anns gach [ICER](../co-mheas-cosg-èifeachdais-àrdachaidh/) agus [buaidh buidseit](../anailis-buaidh-buidseit/) a bhios iad a’ biathadh. Airson solar an NHS, is e smachd TCO a nì tagradh cosg-èifeachdais toraidh didseatach onarach – agus is ann an sin a chailleas roghainnean a tha coltach saor.

## A’ mhatamataig

```
TCO = initial cost (build/licence + integration + data migration + training)
    + Σ_t [operations + maintenance + support + infrastructure + upgrades
           + compliance/assurance]_t / (1 + r)^t
    + decommissioning cost (exit, data extraction, parallel running)

Horizon: 3–5 years commercial, system-lifetime for clinical infrastructure
r: 3.5% public sector (Green Book), 8–12% commercial
Benchmarks: annual maintenance ≈ 15–20% of build cost; ~78% of lifetime
TCO post-launch; ignore decommissioning and vendor lock-in prices itself.
```

## Eisimpleir obrach

Dà roghainn airson siostam e-sgrùdaidh, fàire 5 bliadhna:

```
                        Vendor SaaS     In-house build
Year 0 (licence/build)  £250,000        £900,000
Integration + training  £180,000        £150,000
Annual run (yrs 1–5)    £120,000/yr     £190,000/yr  (hosting + 1.5 FTE maint.)
Exit/decommission       £60,000         £30,000

Undiscounted TCO        £1,090,000      £2,030,000
```

Cha robh tuairmse einnseanaireachd an roghainn thogail (£900k) ach 44% den fhìor TCO aige – agus bidh tuairmsean togail fhèin mar as trice a’ dol thairis 30–40% (faic [togail an aghaidh ceannach](../togail-an-aghaidh-ceannach/)). Mura lìbhrig an roghainn a-staigh *toraidhean* gu math eadar-dhealaichte, tha loidsig [lùghdachadh cosgais](../anailis-lùghdachadh-cosgais/) a’ buntainn agus bidh SaaS a’ buannachadh le ~£940k.

## Ceangal ri einnseanaireachd bathar-bog

Bidh einnseanairean a’ fo-chuideachadh dàta cumail suas an raoin fhèin nuair a bhios iad a’ tagradh airson togail: tha riaghailt cumail suas bliadhnail 15–20% de chosgais togail a’ ciallachadh gu bheil gach siostam £1M gu sàmhach a’ gealltainn £150–200k/bliadhna de chomas san àm ri teachd – uallach a bhuineas air an aon chlàr-iarrtais inntinn ri [fiachan teicneòlais](../fiachan-teicneòlais/). Is e TCO cuideachd leth na cosgais de gach meatrach san stòr seo: cosgais gach cur-an-gnìomh, [eaconamas aonad neul](../eaconamas-aonad-neul/), agus an smachd ainmiche a bhios HTA a’ cur air luchd-taic chungaidhean. Nuair a thèid prìs do thoraidh a cheasnachadh, is e coimeas TCO a’ gabhail a-steach fìor chosgaisean ruith an neach-seilbh an ath-fhrèamadh as làidire a tha ri fhaighinn. Is e suim iomadh loidhne cosgais thar ùine a th’ ann am figear TCO ioma-bhliadhna mar am fear gu h-àrd – faic [cruinneachadh cosgais sàbhailte do dh’airgead](../cruinneachadh-cosgais-sàbhailte-do-dh-airgead/) airson carson a bu chòir an t-suim sin a bhith dheicheach mionaideach seach puing-fhleòdraidh nuair a dh’fheumas modail rèiteachadh gu sgillinn, agus [riarachadh cosgais gu sgillinn mionaideach](../riarachadh-cosgais-gu-sgillinn-mionaideach/) airson iomlan TCO a roinn thar ionadan chosgais gun sgillinnean a chall.

## Cunnartan

- **Acair cosgais cur-air-bhog**: a’ dèanamh coimeas eadar roghainnean aig cosgais bliadhna-0 nuair a thionndaidheas an rangachadh ro bhliadhna 3.
- **Mealladh saothair-a-staigh-an-asgaidh**: cumail suas a-staigh air a chosg aig neoni air sgàth “gu bheil an sgioba pàighte mu thràth” – faic [cosgais cothrom](../cosgais-cothrom/).
- **A’ dearmad cosgaisean fàgail**: is e às-tharraing dàta, crìochnachadh cùmhnant, agus ruith co-shìnte far am bi SaaS “saor” a’ fàs daor.
- **Briseadh na h-aon fàire**: coimeas TCO SaaS 3-bliadhna an aghaidh ath-sgaoileadh togail 10-bliadhna (faic [fàire-ùine](../fàire-ùine/)).

## Stòran

- IBM, total cost of ownership. <https://www.ibm.com/think/topics/total-cost-of-ownership>
- Software maintenance cost benchmarks. <https://pegotec.net/software-maintenance-cost-percentage-2026-industry-benchmarks/>
