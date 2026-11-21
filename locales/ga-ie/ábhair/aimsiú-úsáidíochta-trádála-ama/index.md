# Aimsiú úsáidíochta trádála ama (TTO)

Is modh caighdeánach é TTO chun luach úsáidíochta stáit sláinte a aimsiú go díreach ó fhreagróir, in ionad ceann a chumadh. Tá sé ar cheann de na modhanna aimsithe — taobh le cearrbhachas caighdeánach agus turgnaimh rogha scoite — a tháirgeann na tacair luacha atá taobh thiar d’ionstraimí ar nós [EQ-5D](../eq-5d/), agus dá bhrí sin taobh thiar de fhormhór ríomhanna [QALY](../bliain-saoil-choigeartaithe-de-réir-cáilíochta/) iartheachtacha.

## Cén fáth a bhfuil tábhacht leis

Bhí ar gach meáchan úsáidíochta a chothaíonn ríomh QALY teacht ón áit éigin. Is é TTO an chaoi: i gcás stáit a mheastar níos fearr ná bás, fiafraítear de fhreagróir cé mhéad bliain `X` i sláinte iomlán a mheasfadh sé coibhéiseach le `T` bliain sa stát lag (`X < T`); is é an úsáidíocht `X / T`. I gcás stáit a mheasann roinnt freagróirí níos measa ná bás, briseann an fhoirmle chaighdeánach síos (ní féidir léi úsáidíochtaí faoi bhun nialais a léiriú go glan), mar sin cuirtear TTO leathnaithe i bhfeidhm. Tá anailísí nó innealtóir bogearraí a chaitheann le meáchan úsáidíochta mar ionchur a thugtar, gan a fháil amach go raibh prótacal aimsithe bailíochtaithe ag teastáil chun é a tháirgeadh, céim amháin ó uimhir nach féidir leis a chosaint má dhéantar agóid.

## An mhatamaitic

```
Standard TTO (state better than death):
  utility = time_in_full_health / time_in_impaired_state

Extended TTO (state worse than death):
  utility = -time_traded_for_death / (total_duration - time_traded_for_death)
```

`time_in_full_health` / `time_in_impaired_state` — blianta `X` i sláinte iomlán a mheastar coibhéiseach le `T` bliain sa stát lag. `time_traded_for_death` / `total_duration` — san fhoirmliú níos measa-ná-bás, blianta `a` de shaol `T`-bliana atá fágtha a thrádálfadh an freagróir ar bhás láithreach, ag roghnú `T − a` bliain i sláinte iomlán agus bás ina dhiaidh thar `T` bliain sa stát níos measa-ná-bás. Tá an toradh diúltach, ancaire ionas go bhfuil bás = 0.

## Sampla oibrithe

**Caighdeánach**: tá freagróir i stát lag ar feadh 10 mbliana agus tá sé neamhshuimiúil le 7 mbliana i sláinte iomlán: úsáidíocht = 7 / 10 = **0.7**.

**Níos measa ná bás**: thar shaol 10 mbliana atá fágtha, thrádálfadh an freagróir 2 bhliain ar bhás láithreach — is fearr leis 8 mbliana i sláinte iomlán agus bás ina dhiaidh thar 10 mbliana sa stát níos measa-ná-bás: úsáidíocht = −2 / (10 − 2) = −2 / 8 = **−0.25**.

## An nasc le hinnealtóireacht bogearraí

Baineann an pointe céanna a bhuaileann suirbhé DevEx nó rannpháirtíochta nuair a iarrann sé ar dhaoine rud a rátáil ar scála 0–10 gan scrúdú leis anseo ar a mhalairt: tá TTO ann go beacht toisc nach modh aimsithe bailíochtaithe é “iarr ar dhaoine é a rátáil” leis féin. Sula dtógann tú innéacs ilchodach — scór DevEx, innéacs rannpháirtíochta, scála ídithe — ar bharr uimhreach féin-rátáilte, fiafraigh cad a d’aimsigh í agus ar bhailíochtaíodh an modh sin, an cheist chéanna a chuireann eacnamaithe sláinte ar mheáchan úsáidíochta sula dtéann sé isteach i QALY.

## Gaistí

- **Ginearálú luacha aonair**: aimsítear luachanna TTO ó *shampla* den phobal i gcoitinne (nó d’othair), ní ón duine aonair a bhfuil a chúram á chinneadh — is earráid shamplála é luach TTO freagróra amháin a úsáid amhail is dá ndéanfadh sé ginearálú.
- **Foirmliú mícheart don stát**: glacann an fhoirmle TTO chaighdeánach leis go bhfuil an stát gan amhras níos fearr ná bás; má chuirtear i bhfeidhm í ar stát a mheasfadh roinnt freagróirí níos measa ná bás gan aistriú go dtí an foirmliú leathnaithe, táirgtear úsáidíocht mhícheart (dhearfach) go ciúin.
- **Fadanna neamhchomparáide**: níl luachanna TTO a aimsíodh ag baint úsáide as fadanna saoil atá fágtha `T` éagsúla don chomparáid níos measa-ná-bás inchomparáide go díreach gan a sheiceáil gur choinnigh dearadh an staidéir `T` seasta.

## Foinsí

- Torrance GW. "Social preferences for health states: an empirical evaluation of three measurement techniques." Socioecon Plan Sci. 1976;10(3):129-36.
- Patrick DL, Starks HE, Cain KC, Uhlmann RF, Pearlman RA. "Measuring preferences for health states worse than death." Med Decis Making. 1994;14(1):9-18.
