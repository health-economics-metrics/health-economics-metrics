# EQ-5D

Is é EQ-5D ceistiúchán caighdeánaithe an ghrúpa EuroQol chun cáilíocht saoil a bhaineann le sláinte a thomhas. Is é an ionstraim a tháirgeann na meáchain fóntais taobh istigh de fhormhór ríomhanna [QALY](../bliain-saoil-choigeartaithe-de-réir-cáilíochta/) — ainmníonn cás tagartha NICE é mar an beart is fearr le haghaidh daoine fásta.

## Cén fáth a bhfuil tábhacht leis

Teastaíonn fóntais ó ionstraim bhailíochtaithe ó aon táirge sláinte digití ar mian leis QALYanna a éileamh, agus is é EQ-5D an réamhshocrú sa RA agus i bhformhór na hEorpa. Tá sé gearr go leor chun é a leabú in aip (5 cheist + scála amhairc), rud a chiallaíonn gur féidir le táirgí bogearraí sonraí torthaí HTA-ghrád a bhailiú mar fho-iarmhairt d’úsáid ghnáth — buntáiste struchtúrtha ar dhrugaí, a theastaíonn staidéir tiomnaithe uathu.

## An mhatamaitic

Cuireann EQ-5D-5L ceist amháin i ngach ceann de **5 thoise** — soghluaisteacht, féinchúram, gníomhaíochtaí gnácha, pian/míchompord, imní/dúlagar — freagraithe ag **5 leibhéal** an ceann (gan fadhbanna … fadhbanna foircneacha), móide scála analógach amhairc 0–100 (EQ VAS).

```
Staid sláinte = próifíl 5-dhigit, m.sh. "21221"
Innéacs fóntais = tacar_luacha(próifíl)

Is tír-shonrach an tacar luacha, díorthaithe ó shuirbhéanna time-trade-off /
rogha-scoite den phobal i gcoitinne. Ancairí: 1 = sláinte iomlán,
0 = marbh; tá staideanna níos measa ná bás diúltach (urlár tacair 3L RA: −0.594).
```

Ansin leanann uimhríocht QALY mar `fad × fóntas`.

## Sampla oibrithe

Tomhaiseann aip athshlánaithe matánchnámharlaigh EQ-5D-5L ag tosú agus ag 6 mhí do 1,000 úsáideoir a chríochnaíonn.

```
Meánfhóntas ag bonnlíne:  0.62
Meánfhóntas ag 6 mhí:     0.71
Gnóthachan inbhuanaithe (glac leis) 1 bhliain: (0.71 − 0.62) × 1.0 = 0.09 QALY in aghaidh an úsáideora
```

I gcoinne athrú grúpa rialaithe 0.03 (téarnamh nádúrtha), is é an gnóthachan inaitreabúdaithe 0.06 QALY/úsáideoir. Airgeadaithe ag £20,000–£30,000/QALY: **£1,200–£1,800 de luach sláinte in aghaidh an úsáideora a chríochnaíonn** — an uimhir a ancaireann caibidlíocht phraghais na haipe le híocóir. (Is gnách go mbíonn na difríochtaí is lú tábhachtach go cliniciúil d’innéacs EQ-5D sa raon 0.03–0.08, mar sin tá 0.06 inchreidte ach ní mór dó an chomparáid rialaithe a ghlanadh; féach [torthaí a thuairiscíonn othair](../torthaí-tuairiscithe-ag-othair/).)

## An nasc le hinnealtóireacht bogearraí

- **Uirlisigh é.** Is cúpla scáileán UI é EQ-5D ag clárú agus ag eatraimh leantacha; is é an tairbhe fianaise HTA-ghrád. Faigh ceadúnas ó EuroQol (riachtanach, saor in aisce le haghaidh roinnt úsáidí).
- **Úsáid an tacar luacha ceart** don tír imlonnaithe — scóráiltear na freagraí céanna go difriúil sa RA vs sa Ghearmáin vs sa tSeapáin.
- **Ceacht dearaidh**: léiríonn EQ-5D conas a thugann suirbhé beag caighdeánaithe móide feidhm scórála foilsithe innéacs aonair inchomparáide. Is é sin an patrún d’aon innéacs creidiúnach taithí forbróra freisin — ionstraim chaighdeánaithe, meáchain fhoilsithe, ní mothúcháin ad hoc. Féach [SPACE agus DevEx](../space-agus-devex/).

## Gaistí

- **Roimh/tar éis gan chomparadóir** — séanann aischéimniú go dtí an meán agus téarnamh nádúrtha gnóthachain naive.
- **Claonadh marthanóra**: gan ach úsáideoirí a d’fhan rannpháirteach a thomhas (féach [coinneáil agus sceitheadh](../coinneáil-agus-scoite/)).
- **Leaganacha 3L agus 5L nó tacair luacha a mheascadh** thar staidéir — uimhreacha difriúla go córasach.
- **Éifeachtaí uasteorann** i ndaonraí measartha a ndeachaigh tionchar orthu: scórálann go leor úsáideoirí gar do 1.0 ag bonnlíne, gan spás le gnóthachan a léiriú.
- **Tacar luacha a chaitheamh mar fhéin-údaraithe**: eilíodh na huimhreacha fóntais a thugann tacar luacha ar ais féin ón bpobal trí shuirbhéanna time-trade-off (nó rogha-bhunaithe gaolmhar) — féach [Fáil Fóntais Time Trade-Off (TTO)](../aimsiú-úsáidíochta-trádála-ama/) chun a fheiceáil conas.

## Foinsí

- EuroQol: EQ-5D-5L. <https://euroqol.org/information-and-support/euroqol-instruments/eq-5d-5l/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
