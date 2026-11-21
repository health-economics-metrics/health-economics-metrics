# Líon is gá a scagadh (NNS)

Is é NNS líon na ndaoine ar gá iad a scagadh — ní amháin a chóireáil — chun **toradh díobhálach amháin** a chosc thar tréimhse leantacha shainithe, i bhfianaise riosca bunlíne an daonra agus an laghdaithe riosca choibhneasta a bhaineann luathbhrath agus cóireáil amach. Is é an analach ar leibhéal clár scagtha de NNT é: fiafraíonn NNT cé mhéad *cóireála* a theastaíonn chun toradh amháin a chosc; fiafraíonn NNS cé mhéad a chaithfidh dul tríd an gcosán iomlán *scagadh-agus-ansin-cóireáil* chun é a bhaint amach.

## Cén fáth a bhfuil tábhacht leis

Chuir Rembold NNS i láthair in 1998 go sonrach ionas go bhféadfaí cláir scagtha a chur i gcomparáid ar an mbonn céanna le cóireálacha, toisc go gcuireann laghdú riosca coibhneasta cheannlíne tástála scagtha dhá rud i bhfolach nach ndéanann ceann cóireála: riosca bunlíne an daonra a tugadh cuireadh dó i ndáiríre chun scagadh, agus an fhíric go n-iompraíonn gach duine a scagtar costas na tástála agus ualach bréagdearfach, ní hamháin an mionlach a bhaineann tairbhe as ina dhiaidh sin. Tá geata costéifeachtúlachta Choiste Náisiúnta Scagtha na RA (féach [eacnamaíocht scagtha](../eacnamaíocht-scagtha/)) tógtha go beacht ar an idirdhealú seo — is féidir le clár scagtha le laghdú riosca coibhneasta tuillte i ndaonra riosca bunlíne íseal NNS sna mílte a bheith aige fós, agus ag an bpointe sin is é costas an chláir in aghaidh an toraidh a coscadh an fhíorcheist.

## An mhatamaitic

```
NNS = 1 / (baseline_risk × relative_risk_reduction)

baseline_risk           = probability of the outcome in the screened
                           population over the follow-up period (0–1)
relative_risk_reduction = proportional risk reduction achieved by
                           screening-enabled early treatment (0–1)

Program cost per outcome prevented = NNS × cost_per_screen
```

Déan comparáid dhíreach le [NNT](../líon-is-gá-a-chóireáil/): comhdhlúthaíonn NNS éifeachtacht an chuimsithe iomláin scagadh → diagnóis → cóireáil in aon uimhir amháin, nuair a ghlacann NNT leis cheana go bhfuil an t-othar diagnóisithe agus ag tosú cóireála.

## Sampla oibrithe

Tá riosca imeachta bunlíne 2% ag daonra sprice clár scagtha thar thréimhse an staidéir (`baseline_risk = 0.02`), agus baineann luathbhrath laghdú riosca coibhneasta 25% amach (`relative_risk_reduction = 0.25`):

```
NNS = 1 / (0.02 × 0.25) = 1 / 0.005 = 200

200 people must be screened to prevent one outcome.

At £50 per screen:
Programme cost per outcome prevented = 200 × £50 = £10,000
```

Is é an figiúr £10,000 sin an rud ar cheart é a mheá i gcoinne chostas an toraidh féin agus na QALYanna a chosnódh sé — an chomparáid chéanna a dhéanann [eacnamaíocht cosanta](../eacnamaíocht-cosanta/) do chláir chosanta go ginearálta.

## An nasc le hinnealtóireacht bogearraí

Is é NNS “cé mhéad úsáideoir, imeacht, nó iarratas a chaithfidh rith trí shreabhadh brathadh nó tréidhíochta chun fíordhearbhach amháin is fiú gníomhú air a ghabháil” — a bhfuil tábhacht dhíreach leis do chórais mhonatóireachta agus thréidhíochta atá bunaithe ar rabhaidh, áit a mbíonn riocht sprice leitheadúlachta íseal ag ataitiú NNS ar an mbealach céanna a thitfidh sé luach tuartha dearfach (féach [eacnamaíocht scagtha](../eacnamaíocht-scagtha/) agus [meastóireacht AI chliniciúil](../meastóireacht-ai-cliniciúil/)). Ní fiú riail mhonatóireachta a chaithfidh 200 imeacht a phróiseáil in aghaidh gach fíorghabhála a rith ach amháin má tá an ghabháil fiú 200 uair costas tréidhíochta in aghaidh an imeachta ar a laghad — an uimhríocht chéanna leis an sampla oibrithe cúraim sláinte thuas.

## Gaistí

- **Spleáchas riosca bunlíne a neamhaird**: tá NNS an-difriúil — agus costéifeachtúlacht — ag an tástáil nó clár scagtha céanna i ndaonra ardriosca vs ceann íseal-riosca. Ná luaigh NNS riamh gan an daonra a lua ar ríomhadh dó.
- **An t-ainmneoir mícheart a chomhaireamh**: comhairimh NNS daoine a *scagadh*, ní daoine a bhfuil tástáil dearfach acu ná a thosaíonn cóireáil — tá éifeachtacht an chuimsithe iomláin leabaithe ann cheana, mar sin níor cheart é a chur i gcomparáid le méadracht a chomhairmhítear thar dhearfaigh amháin.
- **Comparáid thar thréimhsí leantacha**: de ghnáth ataitiú tréimhse leantacha níos giorra NNS, mar go bhfeictear níos lú imeachtaí san fhuinneog. Níl figiúirí NNS inchomparáide ach nuair a ríomhtar iad thar an bhfad leantacha céanna.

## Foinsí

- Rembold CM. "Number needed to screen: development of a statistic for disease screening." BMJ. 1998;317(7154):307-12.
