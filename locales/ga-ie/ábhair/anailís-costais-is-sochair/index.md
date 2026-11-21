# Anailís costais is sochair (CBA)

Luachálann CBA costais *agus* torthaí in airgead. Is í an t-aon chineál anailíse a fhreagraíonn “an fiú é seo a dhéanamh ar chor ar bith?” — ní hamháin “cén rogha is fearr?” — mar is féidir sochair airgeadaithe a chur i gcomparáid go díreach le costais.

## Cén fáth a bhfuil tábhacht leis

Is é CBA caighdeán **Leabhar Glas** Státchiste a Shoilse na RA do gach measúnú caiteachais phoiblí, sláinte san áireamh nuair is féidir torthaí a airgeadú. Nuair a stopann [CEA](../anailís-costéifeachtúlachta/)/[CUA](../anailís-costais-fóntais/) ag “costas in aghaidh an aonaid sláinte,” cuireann CBA praghas ar an tsláinte féin (QALY × luach tairsí) agus gach rud eile — am, taisteal, carbón — agus tuairiscíonn sé figiúr glan amháin. Tá cás eacnamaíoch CBA-chruthach i ngach cás gnó digiteach iomlán an NHS.

## An mhatamaitic

```
NPV (luach sóisialta glan láithreach) = Σ_t [ (Sochair_t − Costais_t) / (1 + r)^t ]
BCR (cóimheas sochair-costais)        = PV(sochair) / PV(costais)

Glac leis má NPV > 0 (go coibhéiseach BCR > 1); rangaigh de réir NPV, ní BCR.
r = 3.5% (ráta fabhraithe ama sóisialta an Leabhair Ghlais)
```

Is féidir le héifeachtaí sláinte dul isteach airgeadaithe mar QALY × λ (féach [tairseacha toilteanais le híoc](../tairseacha-toilteanais-íoc/)). Sainordaíonn an Leabhar Glas freisin **coigeartuithe claonadh dóchais** — meastacháin costais a ardú agus sochair a ghearradh faoi chéatadáin bunaithe ar fhianaise, mar go bhfuil measúnuithe córasach rósach.

## Sampla oibrithe

Córas ríomh-tharchuir, spriocam 5 bliana, lascainiú 3.5%:

```
Costais:  tógáil £1.2M (bliain 0), reáchtáil £300k/bl (blianta 1–5)
Sochair:  coigilteas riaracháin £250k/bl, diagnóisic dhúbailte seachanta £280k/bl,
          am othair sábháilte 40,000 uair/bl × £15 = £600k/bl → £1,130k/bl

PV costais   = 1,200k + 300k × 4.515 (fachtóir annuity) = £2,555k
PV sochair   = 1,130k × 4.515                           = £5,102k

NPV = 5,102 − 2,555 = +£2,547k     BCR = 2.0
```

Cuir claonadh dóchais an Leabhair Ghlais i bhfeidhm (abair +40% ar chostas tógála, −20% ar shochair): PV costais ≈ £3,035k, PV sochair ≈ £4,082k, NPV ≈ **+£1,047k** — dearfach fós, arb é sin pointe an choigeartaithe: ba cheart do chásanna a ndóchas féin a mharthain.

## An nasc le hinnealtóireacht bogearraí

Is CBAanna neamhfhoirmiúla iad cásanna gnó innealtóireachta. Na huasghráduithe Leabhar Glas is fiú a ghoid:

- **Claonadh dóchais mar ardú caighdeánach** — cuireann innealtóirí costas imirce faoi bhun mheastachán chomh iontaofa agus a dhéanann ranna stáit bonneagar; cuir ardú luaite i bhfeidhm in ionad ligean air go bhfuil an uair seo difriúil.
- **Airgeadaigh an sochar ceannasach go macánta nó ar chor ar bith** — airgeadaítear am othair/úsáideora ag rátaí inchosanta; ní airgeadaítear “luach branda”.
- **Rangaíonn NPV, ní rangaíonn BCR**: is féidir le tionscadal beag le BCR 5 a bheith níos lú tábhachtach ná ceann mór le BCR 1.6.

## Gaistí

- **An t-neamh-airgeadaithe a airgeadú** chun sochair a bholscadh (meanma, “ailíniú straitéiseach”) — coinnigh cáilíochtúil iad, de réir [anailís costais-iarmhairtí](../anailís-costais-iarmhairtí/).
- **Aistrithe a chomhaireamh mar shochair**: ní dhéanann airgead ag gluaiseacht idir comhlachtaí poiblí aon rud glan ag an [bpeirspictíocht](../peirspictíocht-anailíse/) shochaíoch.
- **Gan contrafhíoras**: tomhaistear sochair i gcoinne an rogha íosta a dhéanamh, ní i gcoinne nialais.

## Foinsí

- HM Treasury, The Green Book. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Green Book discounting guidance. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
