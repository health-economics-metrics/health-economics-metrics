# Líon is gá a chóireáil (NNT)

Is é NNT líon na n-othar ar gá dóibh idirghabháil a fháil chun go mbainfeadh **othar breise amháin** tairbhe, thar thréimhse ama luaite. Tiontaíonn sé laghduithe riosca céatadáin — a chuireann amú — in aonaid iarrachta in aghaidh tairbhe is féidir le haon duine réasúnú orthu.

## Cén fáth a bhfuil tábhacht leis

Cloistear “Laghdaíonn sé taomanna croí 25%!” cinntitheach. Má tá an riosca bunlíne 4% thar 5 bliana, is pointe céatadáin 1 an laghdú iomlán, mar sin **caithfidh 100 duine an druga a ghlacadh ar feadh 5 bliana chun go mbainfeadh 1 tairbhe** — agus íocann gach 100 na costais agus na fo-éifeachtaí. Is é NNT an frithnimh in aghaidh margaíocht riosca coibhneasta, agus dá bhrí sin cuireann leigheas bunaithe ar fhianaise tús leis. Statiní le haghaidh cosanta príomha: NNT ≈ 50–100 thar 5 bliana in aghaidh gach taom croí a seachnaíodh. A scáthán, **NNH** (líon is gá chun dochar a dhéanamh), comhairimh cé mhéad a cóireáladh in aghaidh gach duine a ndearnadh dochar dó.

## An mhatamaitic

```
ARR = control event rate − treatment event rate   (absolute risk reduction)
NNT = 1 / ARR

NNH = 1 / (harm rate_treatment − harm rate_control)

Economic bridge:
cost per event prevented = NNT × cost per treatment course
```

Luaigh an tréimhse ama agus an daonra bunlíne i gcónaí — níl brí le NNT gan an dá cheann.

## Sampla oibrithe

Cuireann córas tuartha titime in ospidéal othair ardriosca ar bhratach le haghaidh idirghabhála (braiteoirí leapa, athbhreithniú, maoirseacht). Triail: titeann titimeanna le gortú ó 3.2% go 2.4% de ghlacadh isteach.

```
ARR = 0.8 percentage points → NNT = 1/0.008 = 125
   (125 patients must get the intervention bundle to prevent 1 injurious fall)

Intervention cost ≈ £40/patient → cost per fall prevented = 125 × 40 = £5,000
Cost of an injurious inpatient fall (extra stay, imaging, litigation) ≈ £12,000
Net: prevention pays ~2.4:1 — and the QALY gain is on top.
```

Tabhair faoi deara conas a choinníonn NNT an t-éileamh macánta: is é an toradh céanna é “laghdaíonn sé titimeanna 25%” agus “cosc ar thitim amháin in aghaidh gach 125 othar a cóireáladh”, ach cumasach ar bhealaí difriúla.

## An nasc le hinnealtóireacht bogearraí

Is é NNT an t-aonad ceart do gach geata nó seic a ghníomhaíonn ar go leor míreanna chun cúpla ceann a ghabháil: **“líon na bPR ar gá dóibh dul tríd an ngeata athbhreithnithe AI chun lochtanna amháin atá ag dul i dtáirgeadh a ghabháil.”** Má athbhreithníonn an geata 400 PR in aghaidh gach fíorghabhála (NNT = 400) ag 4 nóiméad d’aird forbróra an ceann, cosnaíonn gabháil amháin ~27 uair forbróra — déan comparáid anois leis an gcostas eachtra a chuireann sé cosc air. Mapálann NNH ar bhréagdhearfaigh: cé mhéad PR in aghaidh gach bratach *bhréagach*, agus cad a chosnaíonn gach ceann in aird agus muinín? Ba cheart uimhríocht NNT/NNH a sheoladh le huirlisí ar stíl scagtha (lintéirí, scanóirí slándála, brath neamhghnách) — féach [eacnamaíocht scagtha](../eacnamaíocht-scagtha/) chun a fheiceáil cén fáth go ndéanann leitheadúlacht íseal na huimhreacha seo cruálach. Is é [líon is gá a scagadh](../líon-is-gá-a-scagadh/) an figiúr analach leibhéal amháin níos airde, d’iomlán clár scagtha-agus-cóireála seachas cóireáil amháin.

## Gaistí

- **Gan tréimhse ama**: ní chiallaíonn “NNT = 50” rud ar bith; is éileamh é “NNT = 50 thar 5 bliana”.
- **Riosca bunlíne a thrasphlandáil**: titeann NNT a ríomhadh i ndaonra trialach ardriosca i ndaonra imscartha riosca íseal.
- **NNH a neamhaird** — gineadóir buartha is ea geata a bhfuil NNT 400 agus NNH 3 aige, ní córas sábháilteachta.

## Foinsí

- Laupacis A, Sackett DL, Roberts RS. "An assessment of clinically useful measures of the consequences of treatment." NEJM 1988. <https://pubmed.ncbi.nlm.nih.gov/3374545/>
- TheNNT explained. <https://www.thennt.com/thennt-explained/>
