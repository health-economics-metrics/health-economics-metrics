# Sochar airgeadaíochta glan (NMB)

Tiontaíonn NMB toradh costéifeachtúlachta ina luach airgid amháin: gnóthachan sláinte a phraghsáiltear ag an tairseach toilteanais íoc, lúide costas. Cuireann a chúpla, Sochar Glan Sláinte (NHB), an riail chéanna in iúl in aonaid sláinte.

## Cén fáth a bhfuil tábhacht leis

Tá cóimheasa ([ICERanna](../cóimheas-incriminteach-costéifeachtúlachta/)) míshásúil: pléascann siad in aice le héifeacht nialasach, ní féidir iad a mheánú thar tarraingtí éiginnteachta, agus ní féidir leo trí rogha nó níos mó a rangú go glan. Cuireann NMB ceart ar sin ar fad — tá sé líneach, mar sin is féidir leat roghanna a rangú, tarraingtí Monte Carlo a mheánú, agus ranníocaíochtaí a dhíchomhdhéanamh. Is é an cruth matamaitice eacnamaíochta sláinte é freisin a bhfuil aithne ag gach innealtóir air cheana: *luach lúide costas*.

## An mhatamaitic

```
NMB = (ΔE × λ) − ΔC
NHB = ΔE − (ΔC / λ)

ΔE = incremental effect (e.g., QALYs)
ΔC = incremental cost
λ  = willingness-to-pay threshold (see willingness-to-pay-thresholds.md)

Decision rule: adopt if NMB > 0 (equivalently NHB > 0).
Among alternatives: choose the highest NMB.
```

NMB > 0 ⇔ ICER < λ (nuair is ΔE > 0), mar sin aontaíonn an dá riail — tá NMB níos fearr iompair go simplí.

## Sampla oibrithe

Trí rogha do sheirbhís diaibéitis, in aghaidh 1,000 othar, λ = £20,000/QALY:

```
Option           ΔC          ΔE (QALYs)   NMB = 20,000×ΔE − ΔC
App + coaching   £400,000    30           600,000 − 400,000 = £200,000
App only         £150,000    12           240,000 − 150,000 = £90,000
Extra clinics    £700,000    32           640,000 − 700,000 = −£60,000
```

Gnóthaíonn cliniceanna breise na QALYanna is mó ach scriosann siad luach ag an tairseach seo (NMB < 0). Buann aip + cóitseáil. Tabhair faoi deara go gceadaíonn NMB duit *na trí cheann a rangú ag an am céanna* — theastódh an nós imeachta teorann in [ceannas agus an teorainn éifeachtúlachta](../ceannas-agus-an-teorainn-éifeachtúlachta/) ó ICERanna péireáilte, agus shroichfeadh siad an freagra céanna.

Radharc NHB ar an mbuaiteoir: 30 − 400,000/20,000 = 30 − 20 = **10 QALY glan** — an sláinte a baineadh amach thar an méid a tháirgfeadh an t-airgead céanna in áit eile.

## An nasc le hinnealtóireacht bogearraí

Is ríomh NMB go litriúil é `(hours saved × loaded hourly rate) − tool cost` — cás gnó laethúil uirlisí — le λ = costas luchtaithe innealtóra. Dhá uasghrádú a chuireann eacnamaíocht sláinte leis:

- **Déan λ ina athróg, ní tairiseach.** Breac NMB i gcoinne λ (“luach uair innealtóra”) agus taispeáin cén áit a n-iompaíonn an cinneadh; is féidir le páirtithe leasmhara éagsúla a luacháil féin a chur i bhfeidhm gan do mhatamaitic a athdhéanamh.
- **Smaointeoireacht NHB**: “sábhálann an t-ardán seo 5,000 uair innealtóra ach caitheann sé buiséad a cheannódh 3,000 uair acmhainne conraitheora — 2,000 uair glan” — fórsaíonn sé comparáid an chostais fhéideartha in aonaid acmhainne. Féach [costas deise](../costas-deise/).

## Gaistí

- **An tairseach a cheilt**: níl brí le NMB gan λ a lua; tuairiscigh NMB ag £20k agus £30k, nó breac an cuar.
- **NMB a úsáid chun éifeachtaí bídeacha a ghlanadh**: is féidir le daonra ollmhór méadaithe faoi éifeacht neamhshuntasach in aghaidh an duine NMB mór a tháirgeadh — tuairiscigh éifeachtaí in aghaidh an duine taobh leis.
- **Dearmad go n-oidhrítear gach éiginnteacht** i ΔC agus ΔE le NMB — cuir i bpéire le [anailís íogaireachta dóchúlachta](../anailís-íogaireachta-dóchúlachta/).

## Foinsí

- York Health Economics Consortium glossary: net monetary benefit. <https://yhec.co.uk/glossary/net-monetary-benefit/>
- Stinnett AA, Mullahy J. "Net health benefits: a new framework for the analysis of uncertainty in cost-effectiveness analysis." <https://pmc.ncbi.nlm.nih.gov/articles/PMC2528971/>
