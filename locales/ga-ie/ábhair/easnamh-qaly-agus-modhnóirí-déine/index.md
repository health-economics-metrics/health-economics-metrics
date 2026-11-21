# Easnamh QALY agus modhnóirí déine

Tomhaiseann easnamh QALY cé mhéad sláinte todhchaí a thógann galar ó othair i gcomparáid leis an ngnáthdhaonra. Úsáideann NICE é chun **modhnóirí déine** a chur i bhfeidhm: dá mhéad a bhíonn an daonra tinn, is mó an luach a bhíonn ar gach QALY a baineadh amach — suas le 1.7× an tairseach chaighdeánach.

## Cén fáth a bhfuil tábhacht leis

Ó lámhleabhar 2022 NICE, is iolraitheoir sainráite é déine ar luach gnóthachan sláinte, ag cur in ionad an seanphréimh deireadh saoil. Déantar teicneolaíocht le haghaidh riocht tromchúiseach a mheas i gcoinne tairseach éifeachtach suas le ~£51,000/QALY in ionad £30,000. Má fhreastalaíonn do bhogearraí ar dhaonra fíor-thrí-bhuailte (teip croí ardleibhéil, tinneas meabhrach tromchúiseach), is féidir leis an modhnóir déine a bheith ar an difríocht idir cás eacnamaíoch inmhaoinithe agus neamh-inmhaoinithe — agus teastaíonn matamaitic easnaimh uait chun é a éileamh.

## An mhatamaitic

Dhá thomhas, ríofa thar fhuílleach saoil leis an gcaighdeán cúraim reatha:

```
Absolute shortfall     = QALYs_general_population − QALYs_with_condition
Proportional shortfall = Absolute shortfall / QALYs_general_population
```

Meáchain NICE 2022 (cuirtear i bhfeidhm cibé tomhas a thugann an meáchan is airde):

```
Weight ×1.0: absolute < 12 and proportional < 0.85
Weight ×1.2: absolute ≥ 12 or proportional ≥ 0.85
Weight ×1.7: absolute ≥ 18 or proportional ≥ 0.95
```

Iolraíonn an meáchan ΔE (nó an tairseach go coibhéiseach): is é λ éifeachtach £24k–£36k ag ×1.2 agus £34k–£51k ag ×1.7.

## Sampla oibrithe

Othair a bhfuil riocht ionsaitheach acu, meánaois 60. Tá 14.2 QALY lascainithe ag súil ag an ngnáthdhaonra ag 60; leis an riocht faoi chúram reatha, 2.1.

```
Absolute shortfall     = 14.2 − 2.1 = 12.1  (≥ 12 → qualifies for ×1.2)
Proportional shortfall = 12.1 / 14.2 = 0.852 (≥ 0.85 → also ×1.2)
```

Is é ICER d’ardáin monatóireachta £26,000/QALY — os cionn bhreithiúnas meánphointe caighdeánach £20k–£30k, ar an teorainn. Leis an meáchan ×1.2: ICER éifeachtach = 26,000 / 1.2 ≈ **£21,700/QALY** — inmhaoinithe go compordach. Bhog an ríomh easnaimh an cinneadh díreach.

## An nasc le hinnealtóireacht bogearraí

Is leagan foirmiúil é meáchan déine de rud a dhéanann eagraíochtaí innealtóireachta d’instinn: níos mó a chaitheamh in aghaidh gach aonad feabhais ar na córais is measa. An patrún inaistrithe — ríomh “easnamh SLO” gach seirbhíse (cé chomh fada faoi bhun a bhunlíne sláintiúil ionchasaí a ritheann sí, go hiomlán agus go comhréireach), agus meáigh luach feabhsúcháin dá réir. Fírinníonn sé seo, le huimhríocht in ionad argóintí, cén fáth a bhfaigheann an seanchóras trína chéile níos mó infheistíochta in aghaidh na huaire sábháilte ná ceann sláintiúil. Iompraíonn sé an ceacht rialachais céanna freisin: foilsigh na meáchain *roimh* an gcruinniú tosaíochta, nó éilíonn gach foireann déine.

## Gaistí

- **Easnamh a ríomh i gcoinne na bunlíne mícheart**: tomhaistear é faoin *gcaighdeán cúraim reatha*, ní stair nádúrtha gan chóireáil.
- **Íogaireacht aoise**: braitheann easnamh go mór ar aois an daonra (tá níos mó QALY le cailleadh ag othair níos óige → easnamh iomlán níos airde); úsáid dáileadh aoise iarbhír an daonra cóireáilte.
- **A ghlacadh leis go bhfuil an modhnóir i bhfeidhm in áiteanna eile** — meicníocht NICE (Sasana) é; láimhseálann comhlachtaí HTA eile déine ar bhealach difriúil (nó ar chor ar bith).

## Foinsí

- Analysis of NICE severity modifier decisions, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Mtech Access, NICE HTA decision modifiers explainer. <https://mtechaccess.co.uk/nice-hta-decision-modifier/>
