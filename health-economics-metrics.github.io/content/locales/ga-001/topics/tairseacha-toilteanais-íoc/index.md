# Tairseacha toilteanais íoc

Is é tairseach toilteanais íoc (WTP) an uasmhéid a íocfaidh cinnteoir in aghaidh aonad gnóthachain sláinte — an líne a thiontaíonn [ICER](../cóimheas-incriminteach-costéifeachtúlachta/) ina chinneadh glacadh/diúltú.

## Cén fáth a bhfuil tábhacht leis

Is é an tairseach an áit a stopann eacnamaíocht sláinte de bheith ina tomhas agus a n-éiríonn sí ina beartas. Tá ceann ag gach córas náisiúnta, sainráite nó intuigthe, agus insíonn an uimhir áitiúil a fhios duit go beacht conas éileamh luacha sláinte a phraghsáil:

| Comhlacht | Tairseach (mar a taighdeadh, 2024–2025) |
|---|---|
| NICE (Sasana) | £20,000–£30,000 in aghaidh an QALY; meántairseach cinnidh eimpíreach ≈ £24,400 (2022–24); ardaíonn modhnóirí déine uasteorainn éifeachtach go ~£36k–£51k; teicneolaíochtaí an-speisialaithe suas le £100k+ |
| ICER (SA, neamhrialtasach) | tagarmharcanna praghais $100,000–$150,000 in aghaidh an QALY/evLYG; tuairiscíonn sé raon $50k–$200k |
| Ceanada (CADTH / CDA-AMC) | ≈ CAD$50,000 in aghaidh an QALY mar thairseach oibre |
| WHO-CHOICE (stairiúil, domhanda) | 1–3× OTI per capita in aghaidh DALY seachanta (díspreagtha anois mar ró-dhaingean) |
| Taobh soláthair eimpíreach na RA (Claxton et al.) | ≈ £13,000 in aghaidh an QALY a díláithríodh i ndáiríre ag imeall an NHS |

## An mhatamaitic

Téann an tairseach λ isteach i ngach riail chinnidh:

```
Adopt if ICER = ΔC/ΔE < λ
Equivalently: adopt if NMB = λ×ΔE − ΔC > 0
```

Dhá theoiric ar cad *is* λ:

- **Taobh éilimh**: cad atá an tsochaí toilteanach íoc as sláinte (breithiúnas luacha).
- **Taobh soláthair**: an tsláinte a tháirgeann an buiséad faoi láthair ag an imeall (cainníocht eimpíreach — ~£13k/QALY Claxton). Má sháraíonn λ a úsáidtear le haghaidh cinntí an ráta taobh-soláthair, díláithríonn formheas teicneolaíochta nua níos mó sláinte ná mar a chuireann sé leis.

## Sampla oibrithe

Seachadann do theiripe dhigiteach 0.05 QALY in aghaidh an othair cóireáilte ar chostas glan (praghas lúide fritháirimh) £800.

```
ICER = 800 / 0.05 = £16,000 per QALY
```

- Sasana: faoi bhun £20k → inmhaoinithe. Uasphraghas inchosanta: ag λ = £20,000, price_max = 0.05 × 20,000 + offsets = £1,000 + offsets.
- Frámaíocht tráchtála SA ag $150k/QALY: tá praghas bunaithe ar luach i bhfad níos airde.
- Tairseach tíre OTI per capita de $4,000: caithfidh an táirge céanna costáil faoi bhun ~$200 glan.

An táirge céanna, trí mhargadh, trí phraghas — *is* an tairseach an tsamhail phraghsála. Is praghsáil bunaithe ar luach é seo, rite ar gcúl ó λ.

## An nasc le hinnealtóireacht bogearraí

Tá λ intuigthe ag gach eagraíocht innealtóireachta: an tairseach ag a maoiníonn sí uirlisí in aghaidh uair innealtóra a shábháiltear. Cuireann a dhéanamh sainráite — “maoinímid aon rud faoi £40 in aghaidh uair innealtóra inchreidte a shábháiltear” — comparáid tábla sraithe infheistíochtaí ardáin ar fáil, go díreach mar a rangaíonn táblaí sraithe costas-in-aghaidh-an-QALY caiteachas sláinte. Aistríonn ceacht an taobh soláthair freisin: is é do fhíor-λ inmheánach an méid a tháirgeann do riaráiste *reatha* ag an imeall, ní an méid a deir an ceannaireacht go bhfuil am fiú.

## Gaistí

- **Siopadóireacht tairsí** thar dhlínsí nó uasteorainn HST a lua do tháirge gnáth.
- **λ a chaitheamh mar urlár praghais**: is riachtanach é an tairseach a ghlanadh, ní leordhóthanach — is féidir [tionchar buiséid](../anailís-tionchair-buiséid/) táirge inacmhainne in aghaidh an aonaid a bháthadh fós.
- **Neamhaird a dhéanamh ar thairseacha ag bogadh**: athraíonn modhnóirí déine NICE (2022) agus athbhreithnithe tréimhsiúla λ éifeachtach; dátaigh d’éilimh.
- **ICER a chur i gcomparáid le tairseach in airgeadra difriúil gan tiontú ar dtús**: féach [comparáid ICER thar airgeadraí](../comparáid-icer-tras-airgeadra/) — tá an modh tiontaithe (paireacht chumhachta ceannaigh vs ráta malairte margaidh) tábhachtach go modheolaíoch, ní sonra cruinnithe é.
- **Luacháil bunaithe ar λ a mheascadh le traidisiún VSL/VPF an mhargaidh saothair**: tagann siad ó thraidisiúin theoiriciúla difriúla (modheolaíocht srianta ag buiséad sláinte vs rogha nochta ó thrádálacha pá-riosca) agus ní féidir iad a réiteach i gcónaí — don chur chuige rogha nochta eile chun saol a luacháil, féach [Luach saoil staidrimh](../luach-saoil-staidrimh/).

## Foinsí

- NICE: changes to cost-effectiveness thresholds. <https://www.nice.org.uk/news/articles/changes-to-nice-s-cost-effectiveness-thresholds-confirmed>
- Empirical NICE threshold analysis, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- Claxton K, et al. HTA 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
