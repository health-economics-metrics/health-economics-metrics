# Bliain saoil choigeartaithe de réir míchumais (DALY)

Is bliain amháin caillte de shaol sláintiúil é DALY — scáthán an bhrú-thaobh den [QALY](../bliain-saoil-choigeartaithe-de-réir-cáilíochta/). Cuireann QALYanna sláinte *a fuarthas* san áireamh; cuireann DALYanna sláinte *a cailleadh* do ghalar san áireamh; luacháiltear idirghabhálacha de réir DALYanna **seachanta**.

## Cén fáth a bhfuil tábhacht leis

Is é an DALY caighdeán na sláinte domhanda (an WHO, staidéar Ualach Domhanda Galair, agus formhór ranna sláinte tíortha ioncaim íseal agus mheánioncaim pleanálann siad i ndáiríre i DALYanna). Má dhíríonn do bhogearraí ar chórais sláinte idirnáisiúnta, deontóirí, nó cláir ailínithe leis an WHO, is é teanga an luacha DALYanna seachanta, ní QALYanna a fuarthas. Tagarmharc stairiúil WHO-CHOICE: idirghabháil a sheachnaíonn DALY ar níos lú ná 1× OTI per capita is “an-chostéifeachtúil” í, 1–3× OTI per capita “costéifeachtúil” (spreagann an WHO anois gan na bandaí seo a úsáid go docht, ach tá siad i ngach áit i gcleachtas).

## An mhatamaitic

```
DALY = YLL + YLD

YLL (blianta saoil caillte)         = básanna × ionchas saoil caighdeánach ag aois bháis
YLD (blianta a caitheadh le míchumas) = leitheadúlacht × meáchan míchumais

meáchan míchumais ∈ [0, 1], 0 = sláinte iomlán, 1 = coibhéiseach le bás
(meáchain foilsithe ag staidéar Ualach Domhanda Galair)
```

## Sampla oibrithe

Ardaíonn ardán meabhrúcháin scagthástála i réigiún luathbhrath galair. In aghaidh na bliana cuireann sé cosc ar 10 mbás roimh am (gach ceann ag cailleadh 20 bliain i gcomparáid le hionchas saoil caighdeánach) agus cuireann sé cosc ar 200 duine a bheith ag maireachtáil bliain le riocht a bhfuil meáchan míchumais 0.2 aige.

```
YLL seachanta = 10 × 20        = 200
YLD seachanta = 200 × 0.2      = 40
DALYanna seachanta             = 240 in aghaidh na bliana
```

Más $600,000/bliain a chosnaíonn an t-ardán a reáchtáil, is é an costas in aghaidh DALY seachanta 600,000 / 240 = **$2,500**. I dtír le OTI per capita de $8,000, tá sé sin i bhfad faoi bhun tagarmharc 1× OTI — “an-chostéifeachtúil” i dtéarmaí WHO-CHOICE.

## An nasc le hinnealtóireacht bogearraí

- Ba chóir do shláinte dhigiteach atá dírithe ar mhaoinitheoirí sláinte domhanda (Gavi, an Ciste Domhanda, cláir náisiúnta) tionchar a chur in iúl mar **chostas in aghaidh DALY seachanta** — is é an méadrach a smaoiníonn athbhreithneoirí deontais ann cheana féin.
- Is teimpléad úsáideach *cuntasaíochta ualaigh* d’innealtóireacht é an DALY freisin: is “blianta a caitheadh le míchumas” do bhunachar cód iad teagmhais, tógálacha flaky, agus frithchuimilt oidhreachta — insíonn fardal ualaigh meáite ar obair thrioblóideach duit cá gceannaíonn feabhsú an chuid is mó de “bhlianta innealtóireachta sláintiúla,” ar an mbealach céanna a threoraíonn táblaí ualaigh GBD caiteachas sláinte.

## Gaistí

- **Ní hionann QALYanna a fuarthas agus DALYanna seachanta go huimhriúil** — meáchain éagsúla, táblaí saoil éagsúla, coinbhinsiúin éagsúla (d’úsáid DALYanna go stairiúil aois-ualú agus lascainiú laistigh den tomhas). Ná tiontaigh go cas.
- **Tairseacha iolraigh OTI a úsáid mar stampa rubair** — tugann an WHO féin rabhadh go neamhaird siad buiséid agus costas deise; féach [tairseacha toilteanais le híoc](../tairseacha-toilteanais-íoc/).
- **DALYanna ar scála daonra a éileamh ó éifeachtacht in aghaidh an úsáideora** gan iolrú tríd an nglacadh agus cloí — féach [sroicheadh agus cothromas](../sroicheadh-agus-cothromaíocht/).

## Foinsí

- WHO indicator registry: DALYs. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/158>
- Bertram MY, et al. "Cost-effectiveness thresholds: pros and cons." (WHO) <https://pmc.ncbi.nlm.nih.gov/articles/PMC4339959/>
- Marseille E, et al. on GDP-based thresholds, Health Policy and Planning. <https://academic.oup.com/heapol/article/32/1/141/2555408>
