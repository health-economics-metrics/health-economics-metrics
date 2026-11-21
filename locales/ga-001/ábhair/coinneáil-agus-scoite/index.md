# Coinneáil agus scoite (Retention and Churn)

Tomhaiseann coinneáil cén chodán de chohórt úsáideoirí atá fós gníomhach N lá tar éis tosaithe (cuair D1/D7/D30); is é scoite a chomhlánú. An bunlíne bhrúidiúil sláinte digití: **tréigeann thart ar 90% d’úsáideoirí aipeanna sláinte laistigh de 30 lá** — rithfidh coinneáil D30 sláinte digití ~3–4% i gcomparáid le meán gach aip ~6%.

## Cén fáth a bhfuil tábhacht leis

Ainmnigh Eysenbach é seo in 2005: **dlí na hanailte** — is airí intreach, struchtúrach d’idirghabhálacha eSláinte é úsáideoirí a chailleadh ag rátaí arda, ní fabht cur i bhfeidhm, le hanailt i dtrialacha eSláinte ag sárú 50% go rialta. Tá an iarmhairt eacnamaíoch iomlán: sainmhíníonn coinneáil an *fhuinneog cóireála* ina bhféadfaí aon sochar a sheachadadh, agus an [geilleagar aonaid](../eacnamaíocht-aonad-aipe-sláinte/) — ní sheachadann CAC a íoctar in aghaidh úsáideora a fhanann 12 lá LTV ná QALYanna. Cuireann aon tsamhail eacnamaíoch do tháirge sláinte tomhaltóra nach meáíonn sochair leis an gcuar coinneála táirge nach bhfuil ann i gcéill.

## An mhatamaitic

```
Retention_Dn = users active on day n / cohort size × 100
Churn rate   = users lost in period / users at period start × 100

Benefit weighting (the health-economics move):
  expected benefit per acquired user = Σ_t retention(t) × benefit rate(t)
  ≈ area under the retention curve × per-time benefit
  — NOT trial benefit × 100% of acquired users

Cost per retained-at-D30 user = CAC / D30 retention
  (at 4% D30, a £5 CAC is really £125 per retained user)
```

## Sampla oibrithe

Aip sláinte meabhrach: léirigh triail 0.02 QALY a baineadh amach in aghaidh an úsáideora a chríochnaigh 8 seachtaine. Cohórt imscartha 100,000 íoslódáil, coinneáil D7 25%, D30 8%, seachtain-8 4%:

```
Completers          = 100,000 × 0.04 = 4,000
QALYs delivered     = 4,000 × 0.02 = 80  (not 100,000 × 0.02 = 2,000)
At £20,000/QALY     = £1.6M of health value (not £40M)

Per-download health value = £16 — the number that should set what a
payer will pay per download, and it is 4% of the naive claim.
Retention improvement case: moving week-8 completion 4% → 6% adds
40 QALYs/year ≈ £800k — retention engineering IS health production.
```

## An nasc le hinnealtóireacht bogearraí

Is í coinneáil an mhéadracht inar fhéidir le hinnealtóireacht táirge luach sláinte a mhonaraíocht is díreach, de réir na huimhríochta thuas. Is gnáth iad na cleachtais a bhogann í: am go céad-luach ar bord, dearadh athchomhphlé, feidhmíocht, agus go cruinn **críochnú dáileoige pleanáilte** — ba cheart do chlár a bhfuil deireadh sainithe aige (8 seachtaine, ansin céimeadh) *críochnú* a thomhas, ní DAU buan, ag ailíniú na méadrachta leis an tsamhail chliniciúil in ionad an tsamhail aird-mhaoinithe ag fógraí. Is é anailís marthanais an bosca uirlisí ceart (an mhatamaitic Kaplan-Meier chéanna le [bliain saoil a baineadh amach](../bliain-saoil-a-baineadh-amach/)); srathaigh cuair de réir cainéal éadála, mar athraíonn meascán cainéal coinneáil níos mó ná mar a dhéanann formhór na ngnéithe.

## Gaistí

- **Ionnglanadh intinne-chun-cóireála sa treo eile**: tuairiscíonn trialacha críochnaitheoirí; ní mór d’eacnamaíocht imscartha gach duine a fuarthas a chomhaireamh (príomhrabhadh Eysenbach).
- **Amharclann coinneála**: úsáideoirí “gníomhacha” a thiomáineann fógraí nach ndéanann an gníomh teiripeach riamh (féach [méadracht rannpháirtíochta](../méadracha-rannpháirtíochta/)).
- **Cuair a chur i gcomparáid thar shainmhínithe**: athraíonn “gníomhach” sainithe mar oscailte vs gníomh ciallmhar D30 faoi iolraí.
- **Neamhaird a dhéanamh ar cé a scoitear**: má scoitear na daoine is tinne is tapúla, titeann sochair in aghaidh an úsáideora de réir mar a fheabhsaíonn coinneáil i measc na ndaoine sláintiúla — cuir cuair i bpéire le meascán cásanna (féach [sroicheadh agus cothromaíocht](../sroicheadh-agus-cothromaíocht/)).

## Foinsí

- Eysenbach G. "The law of attrition." JMIR 2005;7(1):e11. <https://www.jmir.org/2005/1/e11/>
- Mobile app retention benchmarks. <https://uxcam.com/blog/mobile-app-retention-benchmarks/>
- Healthcare product benchmarks. <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
