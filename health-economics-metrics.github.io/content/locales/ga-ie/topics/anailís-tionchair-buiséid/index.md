# Anailís tionchair buiséid (BIA)

Déanann BIA meastachán ar an méid a dhéanann glacadh le hidirghabháil do **bhuiséad** íocóra ar leith thar an gcéad 1–5 bliana eile. Freagraíonn sí do *inacmhainneacht*; freagraíonn costéifeachtúlacht do *luach*. Is féidir le teicneolaíocht a bheith ar luach iontach agus fós a bheith dothaibhsithe — nó inacmhainne agus drochluach. Éilíonn measúnuithe tromchúiseacha an dá cheann.

## Cén fáth a bhfuil tábhacht leis

Ní “cad é an ICER?” an cheist a chuireann an stiúrthóir airgeadais riamh — is é “cad a dhéanann seo do bhuiséad na bliana seo chugainn?” Sonraíonn treoir dea-chleachtais ISPOR (caighdeán an réimse): peirspictíocht féin an íocóra, spriocam 1–5 bliana, sreafaí airgid bliantúla *gan lascainiú*, cuair ghlactha réalaíocha, agus éiginnteacht chásanna (ní dóchúlachta). Éilíonn NICE faisnéis tionchair buiséid taobh le costéifeachtúlacht; spreagann táirge a bhfuil tionchar buiséid náisiúnta aige os cionn ~£20M/bliain i Sasana caibidlíocht tráchtála beag beann ar a ICER.

## An mhatamaitic

```
BI_bliain_t = Costas_cás_leis_an_nua(t) − Costas_cás_reatha(t)

Costas_cás(t) = Σ thar ghrúpaí othar:
   daonra incháilithe(t) × glacadh(t) × costas glan in aghaidh an othair(t)

costas glan in aghaidh an othair = costas idirghabhála − costas cúraim díláraithe + costas cúraim spreagtha
```

Príomhroghanna samhaltaithe: fás an daonra incháilithe, an chuair ghlactha (ní bhíonn glacadh láithreach riamh), an rud a dhílárasaíonn an rogha nua, agus aon éileamh a *spreagann* sé (rochtain níos éasca → níos mó úsáideoirí).

## Sampla oibrithe

Breathnaíonn íocóir a chlúdaíonn 2M duine ar theiripe dhigiteach ar £300/othar/bliain; 1.5% de bhaill incháilithe (30,000); glacadh 20% → 40% → 60% thar 3 bliana; dílárasaíonn gach úsáideoir £120/bliain de chúram eile.

```
Costas glan in aghaidh an úsáideora = 300 − 120 = £180

Bliain 1: 30,000 × 0.20 × 180 = £1.08M
Bliain 2: 30,000 × 0.40 × 180 = £2.16M
Bliain 3: 30,000 × 0.60 × 180 = £3.24M
```

Fiú má tá ICER an táirge ar £8,000/QALY iontach, ní mór don íocóir £3.24M d’*airgead nua* a aimsiú faoi bhliain 3 — scaiptear an £120 díláraithe tanaí thar línte buiséid eile agus ní scaoilfear mar airgead tirim é (féach [scaoileadh airgid tirim vs neamh-scaoileadh airgid tirim](../coigilteas-a-scaoileann-airgead-tirim-vs-coigilteas-nach-scaoileann/)). Is é seo an fáth gur bacainní ar leith iad luach in aghaidh an aonaid agus inacmhainneacht.

## An nasc le hinnealtóireacht bogearraí

Is é BIA go díreach comhlánú dírithe ar an CFO ar éileamh ROI in aghaidh an suíocháin: “tá sé costéifeachtúil in aghaidh an fhorbróra, ach an féidir linn rolladh amach eagraíochta a íoc an bhliain airgeadais seo?” Samhlaigh sraitheanna ceadúnais, cuar-S glactha, caiteachas uirlisí díláraithe nach scaoileann airgead tirim ach nuair a fhoirceanntar seanchonarthaí i ndáiríre, agus úsáid spreagtha (CI níos saoire → níos mó CI). Is é tábla tionchair buiséid 3 bliana a chur i láthair taobh le ROI a dhéanann togra uirlisí fiontair creidiúnach ó thaobh airgeadais. Is é iomlán tionchair buiséid foilsithe a roinnt thar shuíomhanna, cohóirtí, nó blianta airgeadais — agus na codanna ag réiteach go beacht leis an bhfigiúr foilsithe — go beacht [leithdháileadh costais cheannta beacha](../leithdháileadh-costais-cheannta-beacha/); is é na línte iomadúla a chothaíonn an t-iomlán a shuimiú ar an gcéad dul síos ná [comhiomlánú costais slán ó thaobh airgeadra](../comhiomlánú-costais-slán-ó-thaobh-airgeadra/).

## Gaistí

- **Fantaisíocht glactha láithreach**: tionchar bliain 1 ríofa ag glacadh cobhsaí.
- **Costas díláraithe a chomhaireamh mar airgead tirim** nuair is cumas craobhscaoilte é.
- **Éileamh spreagtha a neamhaird** — fásann feabhsuithe rochtana úsáid an daonra incháilithe.
- **BIA agus CEA a mhearbhall maidir le spriocam/lascainiú**: tá BIA gearr-spriocama, gan lascainiú, sonrach don íocóir de réir dearaidh.

## Foinsí

- Sullivan SD, et al. ISPOR BIA Good Practice II Task Force. Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
- ISPOR good practices: budget impact analysis. <https://www.ispor.org/heor-resources/good-practices/article/principles-of-good-practice-for-budget-impact-analysis-ii>
