# SPACE agus DevEx

Is creataí iad SPACE (Satisfaction & well-being, Performance, Activity, Communication & collaboration, Efficiency & flow) agus DevEx (feedback loops, cognitive load, flow state) chun táirgiúlacht forbróirí a thomhas **go il-toiseach** — freagra an réimse ar an bhfionnachtain nach maireann aon mhéadracht amháin teagmháil leis an réaltacht.

## Cén fáth a bhfuil tábhacht leis

Ionchódaíonn an dá chreat an ceacht crua-bhuaite céanna a d’fhoghlaim taighde torthaí sláinte deich mbliana roimhe sin: tugann uimhir amháin (línte cód; brú fola) míléiriú ar réaltacht il-toiseach, agus tagann cluichíocht as í a bharrfheabhsú, ní feabhas. Ordaíonn SPACE méadrachtaí ó trí thoise ar a laghad a chomhcheangal, ag meascadh teiliméadrachta le féintuairisciú — comhionann go struchtúrtha leis an gcaoi a bpróifíleann [EQ-5D](../eq-5d/) cúig thoise sula ríomhtar aon innéacs, agus an fáth go bhfuil [PROManna](../torthaí-tuairiscithe-ag-othair/) ann taobh le tomhais chliniciúla. Ní maisiúchán bog é sásamh/folláine ach oiread: cothaíonn sé eacnamaíocht [coinneála fórsa oibre](../coinneáil-fórsa-oibre/), áit a bpraghsáiltear anailt i míonna de thuarastal luchtaithe.

## An mhatamaitic

Ní foirmle ceachtar creat; is dearaí tomhais iad araon:

```
SPACE rule: ≥ 3 dimensions, ≥ 1 perceptual (survey) + ≥ 1 system (telemetry) metric

DevEx dimensions and example pairings:
  feedback loops  → CI duration (telemetry) + "waiting feels slow" (survey)
  cognitive load  → docs findability, onboarding time + perceived effort
  flow state      → meeting/interrupt density + self-reported focus

Derived indices (e.g., DX's DXI) map survey composites to time:
vendor claim ≈ 13 min/dev/week per index point — treat as a vendor
benchmark to validate locally, not a constant of nature.
```

## Sampla oibrithe

Cosnaíonn foireann ardáin infheistíocht DevEx (CI níos tapúla + athchóiriú doiciméad) do 300 forbróir:

```
Baseline: CI p75 = 28 min; survey "I lose focus waiting for builds": 62% agree
After:    CI p75 = 9 min;  agreement 24%

Time reclaimed (telemetry): 6 builds/day × 19 min × 0.4 usable = ~45 min/day/dev
Capacity value: 300 × 0.75h × 220d × £60/h ≈ £2.97M/year (non-cash-releasing —
see cash-releasing-vs-non-cash-releasing.md; the 0.4 usability factor is the
fragmentation discount from practitioner-time.md)
Perceptual corroboration is what makes the telemetry claim credible — either
alone is gameable; together they triangulate.
```

## An nasc le hinnealtóireacht bogearraí

Is é an doiciméad seo an taobh bogearraí *féin*; ritheann an t-aistriú i dtreo eacnamaíocht sláinte. Is é “bliain innealtóra choigeartaithe de réir cáilíochta” — am meáite ag innéacs taithí caighdeánaithe — tógáil an [QALY](../bliain-saoil-choigeartaithe-de-réir-cáilíochta/) curtha i bhfeidhm ar acmhainn innealtóireachta, agus oidhrítear rialacha an QALY: meáchain ó ionstraim bhailíochtaithe (suirbhé comhsheasmhach, scóráil fhoilsithe), aimsithe *roimh* an gcomparáid, gan tiúnadh riamh chun uirlis fhabhrach a mholadh. Baineann ceacht [SF-6D vs EQ-5D](../eq-5d/) freisin: tugann ionstraimí difriúla uimhreacha difriúla go córasach, mar sin ná déan comparáid riamh idir innéacsanna DevEx thar ionstraimí díoltóirí.

## Gaistí

- **Titim méadrachta aonair**: athchruthaíonn deaiseanna a laghdaíonn SPACE go scór amháin an fhadhb a chuireann an creat cosc uirthi.
- **Méadrachtaí gníomhaíochta mar thorthaí**: is Gníomhaíocht iad coimiteanna, PRanna, agus pointí scéil — an toise a thugann SPACE rabhadh go sainráite is intuartha cluichíochta (analach sláinte: nósanna imeachta a chomhaireamh, ní téarnamh).
- **Tuirse suirbhé agus éifeachtaí Hawthorne**: buaileann ionstraimí éadroma ráithiúla ceistiú seachtainiúil.
- **Foirne a chur i gcomparáid**: cosúil le táblaí sraithe ospidéal gan coigeartú meascáin cásanna — tá difríochtaí comhthéacs (fearann, ualach oidhreachta, ar-ghlao) i gceannas.

## Foinsí

- Forsgren N, et al. "The SPACE of Developer Productivity." ACM Queue 2021. <https://queue.acm.org/detail.cfm?id=3454124>
- Noda A, Forsgren N, Storey MA, Greiler M. "DevEx: What Actually Drives Productivity." ACM Queue 2023. <https://queue.acm.org/detail.cfm?id=3595878>
