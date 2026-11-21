# Anailís cinnidh il-chritéar (MCDA)

Is samhail scórála suime meáite í anailís cinnidh il-chritéar (MCDA) a úsáidtear i measúnú teicneolaíochta sláinte nuair nach gcuimsíonn tairseach ICER/toilteanas íoc amháin gach rud a bhfuil cúram ar an gcinnteoir de: cothromaíocht, ídiú riachtanais, nuálaíocht, tionchar buiséid, déine galair. Faigheann gach critéar meáchan a léiríonn a thábhacht (aimsithe ó pháirtithe leasmhara, meáchain ag suimiú go 1), faigheann gach rogha scór normalaithe in aghaidh an chritéir (go hiondúil 0–1), agus is é an scór foriomlán an tsuim mheáite — an cruth matamaiticiúil céanna le cárta scórála roghnaithe díoltóra bogearraí.

## Cén fáth a bhfuil tábhacht leis

Úsáidtear MCDA i gcreataí ar nós EVIDEM, agus ag roinnt comhlachtaí HTA le haghaidh measúnuithe ar ghalair dhílleachta/annamha ina meastar go bhfuil cur chuige tairsí docht costas in aghaidh an QALY ró-chúng chun gach rud is tábhachtach faoi chinneadh a ghabháil. Chuir Tascfhórsa Dea-Chleachtais Éagsúla ISPOR MCDA treoir dea-chleachtais i bhfoirm chun meáchain agus scóir a aimsiú ar bhealach cosanta, go beacht toisc go bhfuil cinneadh meáite neamhfhoirmiúil éasca a thógáil agus éasca a mhí-úsáid. Nuair a bhfuil toisí luacha ag teicneolaíocht sláinte nach bhfuil [tairseach toilteanais íoc](../tairseacha-toilteanais-íoc/) amháin in ann a léiriú — déine, nuálaíocht, cothromaíocht — tugann MCDA struchtúr sainráite, iniúchta do chinnteoirí chun iad a chomhcheangal, in ionad breithiúnas neamhluaite.

## An mhatamaitic

```
MCDA score = Σ_i (weight_i × score_i)

weights should sum to 1 (elicited via stakeholder methods such as swing
weighting or the Analytic Hierarchy Process)
```

## Sampla oibrithe

Scórálann coiste HTA teiripeach digiteach ar cheithre chritéar:

```
Criterion                          Weight   Score   Weight × Score
Clinical benefit                   0.4      0.8     0.32
Cost impact                        0.3      0.5     0.15
Disease severity / unmet need      0.2      0.9     0.18
Innovation                         0.1      0.6     0.06
                                    ─────                ─────
                                    1.0                  0.71
```

Suimíonn na meáchain go 1.0 (0.4 + 0.3 + 0.2 + 0.1), agus is é 0.71 scór MCDA (0.32 + 0.15 + 0.18 + 0.06). Déanann an coiste comparáid idir 0.71 agus tairseach réamhaontaithe, nó rangaíonn sé i gcoinne teicneolaíochtaí iomaíocha a scóráladh ar an mbealach céanna.

## An nasc le hinnealtóireacht bogearraí

Is í seo go díreach an mhatamaitic chéanna le cárta scórála meáite roghnaithe díoltóra, maitrís mheastóireachta RFP, nó samhail scórála tosaíochta gnéithe — féach [tógáil vs ceannach](../tóg-nó-ceannaigh/), cás úsáide clasaiceach cárta scórála meáite i soláthar bogearraí. Is fiú é a chodarsnú le [WSJF agus CD3](../wsjf-agus-cd3/) freisin: is modh tosaíochta bunaithe ar *chóimheas* é WSJF/CD3 (costas moille roinnte ar mhéid nó fad an jab), agus is *suim* mheáite é MCDA. Dhá fhreagra atá difriúil go struchtúrtha ar “conas a rangaímid roghanna iomaíocha” iad MCDA agus WSJF/CD3, agus is tábhachtaí a fhios cé acu a éilíonn cinneadh ar leith — luach suimitheach thar chritéir neamhspleácha, vs dlús luacha in aghaidh na haonaid d’acmhainn ghann — ná cé acu foirmle a bhfuil cuma níos déine uirthi.

## Gaistí

- **Claonadh i bhfáil meáchan**: socraíonn an té a leagann na meáchain an rangú go héifeachtach roimh ré, agus mar sin is féidir le “foirmle” cinneadh polaitiúil nó tráchtála a ghlanadh mar ríomh oibiachtúil. Doiciméadaigh cé a leag na meáchain agus conas.
- **Critéar a chomhaireamh faoi dhó a bhfuil gabhta cheana in áit eile**: tríd “costéifeachtúlacht” a scóráil mar chritéar amháin agus “tionchar costais” a scóráil ar leith freisin, déantar an t-airgead a ró-mheá i gcomparáid leis na critéir eile gan aon duine é a bheartú.
- **Cruinneas bréagach**: tugann scór meáite dhá dheachúil (0.71) le tuiscint go bhfuil níos mó déine ann ná mar a thacaíonn rátálacha na bpáirtithe leasmhara 0–10 leis i ndáiríre, agus ní thuairiscítear éagsúlacht idir-rátálaithe sna rátálacha sin go minic ar chor ar bith.

## Foinsí

- Thokala P, Devlin N, Marsh K, et al. "Multiple Criteria Decision Analysis for Health Care Decision Making — An Introduction: Report 1 of the ISPOR MCDA Emerging Good Practices Task Force." Value Health. 2016;19(1):1-13.
- Goetghebeur MM, Wagner M, Khoury H, et al. "Evidence and Value: Impact on DEcisionMaking — the EVIDEM framework and potential applications." BMC Health Serv Res. 2008;8:270.
