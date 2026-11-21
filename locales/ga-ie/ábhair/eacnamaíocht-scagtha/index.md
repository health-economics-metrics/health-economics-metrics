# Eacnamaíocht scagtha

Rialaíonn eacnamaíocht scagtha luach daonraí neamhchomharthacha a thástáil. An croífhíric mhatamaiticiúil: **ag leitheadúlacht galair íseal, gineann fiú tástálacha den scoth bréagdhearfaigh den chuid is mó** — agus is féidir leis an gcostas iartheachtach lena leanúint tairbhe na bhfíorfhaighte a shárú.

## Cén fáth a bhfuil tábhacht leis

Ó 1968, leag critéir Wilson–Jungner WHO an bheart le haghaidh scagtha daonra: caithfidh an riocht a bheith tábhachtach, an tástáil inghlactha agus cruinn, caithfidh cóireáil éifeachtach a bheith ann, agus caithfidh an eacnamaíocht a bheith cothrom. Cuireann Coiste Náisiúnta Scagtha na RA anailís chostéifeachtúlachta fhoirmiúil i bhfeidhm sula bhformheasann sé aon chlár náisiúnta — agus diúltaíonn sé don chuid is mó de na moltaí. Ritheann gach pitseáil “scagfaidh AI gach duine do gach rud” isteach sa mheaisínre seo, agus de ghnáth cailleann sí don uimhríocht thíos.

## An mhatamaitic

Titeann luach tuartha dearfach (PPV) — an dóchúlacht go bhfuil toradh dearfach fíor — ag leitheadúlacht íseal:

```
PPV = (sens × prev) / [sens × prev + (1 − spec) × (1 − prev)]

Example: sensitivity 90%, specificity 95%, prevalence 0.5%:
PPV = (0.9 × 0.005) / (0.9 × 0.005 + 0.05 × 0.995)
    = 0.0045 / (0.0045 + 0.04975) ≈ 8.3%
```

Tá aon dearfach déag as dhá cheann déag bréagach. Eacnamaíocht iomlán an chláir:

```
Cost per true case found = (screening cost + workup cost × all positives) / true positives
Then: is finding a case worth that? (earlier-intervention value per case,
      minus overdiagnosis harm — cases found that would never have mattered)
```

## Sampla oibrithe

Scagadh reitine AI do riocht annamh, 100,000 duine, leitheadúlacht 0.5%, sens 90%, spec 95%, scanadh £15, obair dheimhnithe £400:

```
True positives:  100,000 × 0.005 × 0.90 = 450
False positives: 100,000 × 0.995 × 0.05 = 4,975
Cost = 100,000 × 15 + (450 + 4,975) × 400 = 1.5M + 2.17M = £3.67M
Cost per true case ≈ £8,156
```

Má shábhálann cóireáil luath £20,000 + 1 QALY in aghaidh an cháis, glanann an clár go héasca. Ardaigh sainiúlacht go 99% (níos lú rabhaidh bhréige): titeann costas oibre go (450 + 995) × 400 = £0.58M, iomlán £2.08M, costas in aghaidh an cháis ≈ **£4,622** — is é sainiúlacht, ní íogaireacht, an áit a mbuaitear eacnamaíocht scagtha ag leitheadúlacht íseal.

## An nasc le hinnealtóireacht bogearraí

Is cláir scagtha thar bhunchóid agus teiliméadracht iad anailís statach, scanadh slándála, agus brath neamhghnách, le leitheadúlacht fhíor-lochta go minic i bhfad faoi bhun 1% in aghaidh na deise rabhaidh. Míníonn an mhatamaitic chéanna tuirse rabhaidh: báthann scanóir 95%-sainiúil ar chód leitheadúlachta íseal foirne i mbréagdhearfaigh, agus cosnaíonn gach bréagdhearfach aird agus creimeann sé muinín go dtí go ndéantar neamhaird ar fhíorrabhaidh (an téarma cliniciúil *dochar scagtha*; an téarma innealtóireachta *neamhíogaire phéijéir*). Aistríonn na leigheasanna ón tsláinte: ardaigh sainiúlacht roimh íogaireacht, scag fo-dhaonraí leitheadúlachta níos airde (spriocdhíriú riosca-bhunaithe ↔ scanadh cód athraithe amháin), agus áireamh costas tréidhíochta in eacnamaíocht na huirlise — féach [NNT](../líon-is-gá-a-chóireáil/) agus [meastóireacht AI chliniciúil](../meastóireacht-ai-cliniciúil/). Chun clár scagtha iomlán a mhéadú seachas tástáil amháin, féach [líon is gá a scagadh](../líon-is-gá-a-scagadh/) — cé mhéad duine a chaithfidh dul tríd an gcosán iomlán scagtha-agus-cóireála chun toradh amháin a chosc.

## Gaistí

- **Íogaireacht/sainiúlacht a lua gan leitheadúlacht** — is margaíocht é cruinneas gan PPV.
- **Ródhiagnóis a neamhaird**: tarraingíonn “galar” leasc a aimsiú nach ndéanfadh dochar riamh costais agus dochair chóireála fíor.
- **Claonadh ama tosaigh**: ataitíonn luathbhrath gan toradh athraithe marthanas dealraitheach — féach [idirghabháil níos luaithe](../idirghabháil-níos-luaithe/).

## Foinsí

- Wilson JMG, Jungner G. "Principles and practice of screening for disease." WHO 1968. <https://apps.who.int/iris/handle/10665/37650>
- UK National Screening Committee. <https://www.gov.uk/government/groups/uk-national-screening-committee-uk-nsc>
