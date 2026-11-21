# Fàire-ùine

Is e an fhàire-ùine an ùine thar a bheil anailis a’ cunntadh chosgaisean agus bhuaidhean. Feumaidh i a bhith fada gu leòr gus a h-uile eadar-dhealachadh brìoghmhor eadar na roghainnean a thathar a’ coimeas a ghlacadh.

## Carson a tha e cudromach

Ma thaghas tu fàire ghoirid, call thu buannachdan anmoch (casg) agus cosgaisean anmoch (cumail suas). Ma thaghas tu fàire ro fhada, bàthar a h-uile càil ann am mì-chinnt. Bidh measadh teicneòlais slàinte gu tric a’ cleachdadh fàire **beatha** airson làimhseachaidhean le buaidhean bàsmhorachd; bidh [anailis buaidh buidseit](../anailis-buaidh-buidseit/) a’ cleachdadh fàire ghoirid **1–5 bliadhna** a dh’aon ghnothach air sgàth ’s gur e cothromachd cosgais, chan e luach, a’ cheist. Tha an fhàire na roghainn mhodail ghairmte, agus is e fàirean neo-fhreagarrach dòigh chlasaigeach air coimeas a gheamachadh.

## A’ mhatamataig

Is e an fhàire crìoch àrd an t-suim ann an measadh sam bith:

```
Net present value = Σ (t = 0 … T) [ (Benefits_t − Costs_t) / (1 + r)^t ]

T = time horizon (years)
r = discount rate (see discounting-and-time-preference.md)
```

Bu chòir toraidhean a bhith air an aithris leis an fhàire air a cur an cèill, agus gu h-ideal air an sealltainn aig iomadh fàire.

## Eisimpleir obrach

Cosgaidh siostam òrdachaidh dealanach £2 millean airson a chur an gnìomh agus £200,000/bliadhna airson ruith. Bidh e a’ casg mhearachdan cungaidh luach £600,000/bliadhna (cosgais làimhseachaidh cron air a sheachnadh).

Buannachd lom a rèir fàire (gun lasachadh, airson soilleireachd):

```
Horizon 1 year:  −2,000,000 − 200,000 + 600,000  = −£1,600,000
Horizon 3 years: −2,000,000 + 3 × 400,000        = −£800,000
Horizon 5 years: −2,000,000 + 5 × 400,000        =  £0
Horizon 10 years:−2,000,000 + 10 × 400,000       = +£2,000,000
```

Tha an siostam “a’ fàiligeadh” aig fàire sam bith fo 5 bliadhna agus “a’ soirbheachadh” aig 10. Chan eil gin dhiubh na fhìor fhreagairt; bidh an aithris onarach ag innse na puing-cothromachaidh agus a’ fìreanachadh na fàire le beatha an t-siostaim (dè cho fada mus tèid a chur na àite?).

## Ceangal ri einnseanaireachd bathar-bog

- **Measaidhean innealan air an tomhas thar aon sprint** a’ call gu rianail tuiteam lùb-ionnsachaidh (cosgaisean air an luchdachadh aig an toiseach) agus cumail suas fad-ùine (cosgaisean air an luchdachadh aig an deireadh). Bidh pìleatan neach-cuideachaidh còdaidh AI air an tomhas ann an seachdain 2 a’ glacadh àirde ùrachd, chan e cothromachd seasmhach.
- **Fad cùmhnant ≠ fàire bhuannachd.** Faodar cùmhnant SaaS 1-bliadhna fhathast a mheasadh thar 5 bliadhna ma tha dùil reusanta agad ri ath-nuadhachadh – ach can sin.
- **Cùisean ath-chur-an-àite dìleabach** a’ ruith gu deireadh-beatha creidsinneach an t-seann shiostaim, chan e àireamh chruinn thuaireamach.

## Cunnartan

- **Ceannach fàire**: a’ taghadh ge bith dè an fhàire a bheir buaidh don roghainn agad. Clàraich an fhàire ro àireamhachadh thoraidhean.
- **Fàirean eadar-dhealaichte airson roghainnean eadar-dhealaichte** san aon choimeas.
- **Fàirean beatha às aonais lasachaidh no anailis mì-chinnt** – tha buannachdan bliadhna-30 aig luach aghaidh nan ficsean. Paidhrich fàirean fada le [anailis mothachalachd](../anailis-mothachalachd/).

## Stòran

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Sullivan SD, et al. "Budget Impact Analysis — Principles of Good Practice: Report of the ISPOR 2012 Budget Impact Analysis Good Practice II Task Force." Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
