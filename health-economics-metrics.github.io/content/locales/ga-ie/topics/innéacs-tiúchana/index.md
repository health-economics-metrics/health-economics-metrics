# Innéacs tiúchana

Is é an Innéacs Tiúchana (Wagstaff, Paci, van Doorslaer, 1991) an beart staitistiúil caighdeánach d’éagothroime a bhaineann le stádas socheacnamaíoch i athróg sláinte, ó -1 go 1. Ciallaíonn diúltach go bhfuil an athróg sláinte tiúchan i measc na ndaoine faoi mhíbhuntáiste socheacnamaíoch, ciallaíonn dearfach go bhfuil sí tiúchan i measc na ndaoine is fearr as, agus ciallaíonn nialas nach bhfuil aon ghrádán socheacnamaíoch comhsheasmhach — aistríonn sé amhras faoi dháileadh éagothrom ina uimhir aonair inchomparáide.

## Cén fáth a bhfuil tábhacht leis

Is féidir le clár breathnú éifeachtach ar an iomlán agus a shochar a sheachadadh beagnach go hiomlán chuig daoine a bhí níos fearr as cheana féin. Is é seo go díreach na hábhair imní dáileacháin a rianaíonn [sroicheadh agus cothromas](../sroicheadh-agus-cothromaíocht/) go tuairisciúil — sroicheadh srathaithe de réir quintíle díothachta, bearna cothromais idir na grúpaí barr agus bun — ach ní chomhbhrúitear tábla srathaithe go líne treochta aonair, agus ní féidir é a chur i gcomparáid go héasca idir dhá idirghabháil iomlán difriúla a thomhaistear ar scálaí difriúla. Réitíonn an tInnéacs Tiúchana an dá fhadhb: ríomhtar é ar an mbealach céanna d’aon athróg sláinte i gcoinne aon rangú socheacnamaíoch, ionas gur féidir le seirbhís sláinte náisiúnta rianú an bhfuil éagothroime seirbhíse digití ar leith ag leathnú nó ag cúngú eisiúint ar eisiúint, agus cothromas dáileacháin rolladh amach aipe a chur i gcomparáid le, abair, clár scagthástála, ar an scála normalaithe céanna.

## An mhatamaitic

```
CI = (2 / meán(luachanna_sláinte)) × Cov(luachanna_sláinte, céimeanna_socheacnamaíocha)

Cov(X, Y) = meán(X × Y) − meán(X) × meán(Y)   (comhfhairsingeacht daonra)

céimeanna_socheacnamaíocha: céim chodánach gach duine sa dáileadh
socheacnamaíoch, in [0, 1] (0 = is mó faoi mhíbhuntáiste, 1 = is mó faoi bhuntáiste;
do shonraí grúpáilte/bandaithe, de réir an choinbhinsiúin céim lárphointe gach grúpa)
```

Is í seo an “fhoirmle chomhfhairsingeachta áisiúil” (O’Donnell, van Doorslaer, Wagstaff, Lindelow, World Bank 2008) — an aicearra caighdeánach cleachtóra chun an tInnéacs Tiúchana a ríomh go díreach ó bhreathnuithe péireáilte, gan cuar tiúchana a tharraingt agus a chomhtháthú ar dtús.

## Sampla oibrithe

Scór féin-tuairiscithe sláinte maith (1 = is measa, 4 = is fearr) breathnaithe thar cheithre cheathrú socheacnamaíocha comhmhéide, gach ceann léirithe ag a chéim lárphointe cheathrún:

```
luachanna_sláinte        = [1.0, 2.0, 3.0, 4.0]
céimeanna_socheacnamaíocha  = [0.125, 0.375, 0.625, 0.875]

meán(luachanna_sláinte)        = 2.5
meán(sláinte × céim)           = meán([0.125, 0.75, 1.875, 3.5]) = 1.5625
meán(céimeanna_socheacnamaíocha) = 0.5

Cov = 1.5625 − 2.5 × 0.5 = 0.3125

CI = 2 × 0.3125 / 2.5 = 0.25
```

Ciallaíonn `0.25` dearfach go bhfuil an scór sláinte seo tiúchan i measc an ghrúpa socheacnamaíoch buntáisteach — claonann na freagróirí le scóir níos airde i dtreo cheann is fearr as an rangaithe.

## An nasc le hinnealtóireacht bogearraí

Is é seo an tomhas éagothroime comhfhairsingeachta-bhunaithe céanna a úsáidtear san eacnamaíocht i gcoitinne (col ceathrair chomhéifeacht Gini), agus mapálann sé ar thomhas an bhfuil sochair táirge bogearraí tiúchan i measc deighleoga úsáideoirí atá buntáisteach cheana seachas scaipthe go cothrom — síneadh díreach ar [sroicheadh agus cothromas](../sroicheadh-agus-cothromaíocht/) (toise “sroicheadh” RE-AIM) i mbeart staitistiúil foirmiúil seachas bearna a thuairiscítear. Nuair a thuairiscíonn sroicheadh-agus-cothromas tionchar in aghaidh an stráta, comhbhrúann an tInnéacs Tiúchana an dáileadh iomlán ina uimhir shínithe amháin, oiriúnach mar KPI amháin rianaithe thar eisiúintí — praiticiúil do dhaiseanna, áit nach bhfuil miondealú srathaithe iomlán.

## Gaistí

- **Sodar coinbhinsiúin chomhartha**: braitheann an comhartha ar an gcaoi a sainmhínítear an athróg sláinte agus an chéim araon — iompaíonn ceachtar acu an comhartha, mar sin ní mór an coinbhinsiún a úsáidtear a lua go sainráite i gcónaí le haon luach tuairiscithe.
- **Céimeanna teorann in ionad céimeanna lárphointe**: éilíonn sonraí socheacnamaíocha grúpáilte nó bandaithe (m.sh. quintílí) céim chodánach gach grúpa ag a *lárphointe* a úsáid, ní a theorainn, nó tá an t-innéacs claonta.
- **“Gar do nialas” a léamh mar “gan éagothroime”**: ní chiallaíonn Innéacs Tiúchana gar do nialas “gan aon ghrádán socheacnamaíoch comhsheasmhach”, ní “gan éagothroime” go hiomlán — is féidir le héagothroimí fritháirithe i dtreonna éagsúla cealú.

## Foinsí

- Wagstaff A, Paci P, van Doorslaer E. "On the measurement of inequalities in health." Soc Sci Med. 1991;33(5):545-57.
- O'Donnell O, van Doorslaer E, Wagstaff A, Lindelow M. "Analyzing Health Equity Using Household Survey Data." World Bank. 2008 — the standard practitioner handbook, source of the convenient covariance formula used here. <https://openknowledge.worldbank.org/entities/publication/98380884-0d1d-53d2-b95f-ec6be2019414>
