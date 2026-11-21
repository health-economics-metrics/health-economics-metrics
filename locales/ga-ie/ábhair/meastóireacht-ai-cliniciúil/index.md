# Meastóireacht AI cliniciúil

Na príomhstaitisticí chun AI cliniciúil nó samhail dhiagnóiseach a mheas: íogaireacht, sainiúlacht, AUROC, luachanna tuartha, agus líon is gá a scagadh. An phríomhchaighdeán eacnamaíoch: **ní dhéanann AUROC iontach imlonnú costéifeachtúil** — braitheann luach ar an bpointe oibríochta, ar an leitheadúlacht, agus ar a tharlaíonn tar éis gach dearfach.

## Cén fáth a bhfuil tábhacht leis

Údaraíonn rialálaithe (FDA, MHRA) AI cliniciúil ag **pointe oibríochta faoi ghlas** — péire sonrach íogaireachta/sainiúlachta (m.sh., an chéad chóras uathrialaitheach glanta ag an FDA do réitinipiteolaíocht dhiaibéitigh: íogaireacht 87.2%, sainiúlacht 90.7% ina thriail lárnach). Ansin cuireann eacnamaithe sláinte an cheist nach féidir le méadracha cruinnis a fhreagairt: ag leitheadúlacht do dhaonra imlonnaithe, cad a *chosnaíonn* gach brath, agus an fiú gníomhú air? Léirigh meastóireacht eacnamaíoch ar AI scagthástála réitinipiteolaíochta (npj Digital Medicine 2024) nár chinntigh cruinneas níos airde amháin costéifeachtúlacht nuair a áiríodh costais tarchuir.

## An mhatamaitic

```
Íogaireacht = TP / (TP + FN)        — de na fíor-dhearfacha, an sciar a gabhadh
Sainiúlacht = TN / (TN + FP)        — de na fíor-dhiúltacha, an sciar a glanadh
AUROC       = P(rangaíonn an tsamhail dearfach randamach os cionn diúltach randamach)
              0.5 seans … 1.0 foirfe; neamhspleách ar thairseach — agus mar sin
              easnamhach mar chinneadh imlonnaithe

PPV = TP / (TP + FP)   ← braitheann ar leitheadúlacht (Bayes); titeann nuair is annamh
NPV = TN / (TN + FN)

NNS  ≈ 1 / (leitheadúlacht × íogaireacht)       — scagtha in aghaidh an fhíor-chháis a fuarthas
Costas in aghaidh an fhíor-chháis = costas cláir / TP      — an líne ghlan eacnamaíoch
```

## Sampla oibrithe

An tsamhail chéanna, dhá shuíomh — íogaireacht 90%, sainiúlacht 93%:

```
Clinic speisialtóra (leitheadúlacht 20%):
  PPV = (0.9×0.2)/(0.9×0.2 + 0.07×0.8) = 0.18/0.236 ≈ 76%  → 3 as 4 rabhadh fíor

Príomhchúram (leitheadúlacht 1%):
  PPV = (0.9×0.01)/(0.9×0.01 + 0.07×0.99) = 0.009/0.0783 ≈ 11.5%
  → 8 as 9 rabhadh bréagach; iniúchadh ar £350 an ceann:
  costas in aghaidh an fhíor-chháis = (0.009 + 0.0693) × 350 / 0.009 ≈ £3,045 in aghaidh an cháis a fuarthas
```

An tsamhail chéanna, eacnamaíocht an-difriúil — sin an fáth gur téama rialála í meastóireacht shuímh-shonrach agus gur tús cáis eacnamaíoch, ní deireadh, é “tá AUROC 0.95 ag ár samhail”. Féach [eacnamaíocht scagthástála](../eacnamaíocht-scagtha/) don mhatamaitic chláir iomláin.

## An nasc le hinnealtóireacht bogearraí

I gcás innealtóirí a thógann nó a cheannaíonn AI cliniciúil: **seol an mhaitrís mhearaithe ag an leitheadúlacht imlonnaithe**, ní cuar ROC amháin; **lig don tairseach a bheith ina cinneadh eacnamaíoch** — ba chóir don mhalartú íog/sain costas ionchais a íoslaghdú (cásanna caillte × costas caillte vs rabhaidh bhréagacha × costas iniúchta), gan staitistic tagarmhairc a uasmhéadú; agus aithin an mhatamaitic chéanna i d’uirlisí féin — is tástálacha diagnóiseacha thar sruthanna imeachtaí ísealleitheadúlachta iad córais rabhaidh, brathadóirí neamhghnáchaíochta, agus scanóirí slándála, agus is é tuirse rabhaidh an [NNH](../líon-is-gá-a-chóireáil/). Athoscailt nuashonruithe samhla a aistríonn an pointe oibríochta an eacnamaíocht (agus an ceadú rialála — féach [meastóireacht rialála AI](../meastóireacht-rialála-ai/)).

## Gaistí

- **Siopadóireacht AUROC**: samhlacha a chur i gcomparáid ar AUROC nuair a rithfidh siad ag tairseach amháin — déan comparáid ag an bpointe oibríochta.
- **PPV leitheadúlachta trialacha luaite d’imlonnú fíor-domhanda** — an ceann clasaiceach; athríomh i gcónaí ag leitheadúlacht áitiúil.
- **Claonadh speictrim**: feidhmíonn samhlacha a bhfuil bailíochtú déanta orthu ar chásanna soiléire vs rialuithe sláintiúla thar a bheith maith sa lár débhríoch a rialaíonn cleachtas.
- **Gan costáil ar an mbealach iartheachtach**: spreagann gach dearfach iniúchadh; is idirghabháil ar eacnamaíocht an *bhealaigh iomláin* é samhail.

## Foinsí

- Diagnostic accuracy measures reference. <https://www.medcalc.org/en/manual/roc-curves.php>
- Economic evaluation of AI retinopathy screening, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01032-9>
- Laupacis et al., NEJM 1988 (NNT foundations). <https://pubmed.ncbi.nlm.nih.gov/3374545/>
