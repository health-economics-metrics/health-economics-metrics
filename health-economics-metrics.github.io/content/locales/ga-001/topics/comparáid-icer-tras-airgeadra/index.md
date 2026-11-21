# Comparáid ICER tras-airgeadra

Éilíonn [ICER](../cóimheas-incriminteach-costéifeachtúlachta/) a ríomhadh in airgeadra tíre amháin a chur i gcomparáid le [tairseach toilteanais le híoc](../tairseacha-toilteanais-íoc/) tíre eile — nó sonraí costais a bailíodh i dtriail ilnáisiúnta a chomhthiomsú — céim sainráite, iniúchta tiontaithe airgeadra. Má fhaigheann tú modh an tiontaithe mícheart, is féidir leis an bhfianaise bhunúsach chéanna cinneadh glactha a iompú, cé nár athraigh aon rud faoi na sonraí cliniciúla ná costais.

## Cén fáth a bhfuil tábhacht leis

Molann treoir mhodheolaíochta ISPOR do thrialacha cliniciúla ilnáisiúnta (Willke et al., *Health Economics*, 1998) costais acmhainne a thiontú ag úsáid **cothrom cumhachta ceannaigh (PPP)** — ní rátaí malairte margaidh — agus fíorluach eacnamaíoch acmhainní á chur i gcomparáid thar thíortha, agus rátaí malairte eachtraí margaidh a chaomhnú don rud a bhfuil siad ann dó: sreafaí íocaíochta airgid tirim trasteorann fíor a shamhaltú. Is ceann de na botúin mhodheolaíochta HTA ilnáisiúnta is coitianta é an dá cheann a mheascadh, go beacht toisc go bhfuil an dá cheann cosúil le “an ráta malairte” do dhuine nár léigh an treoir, agus ní stopann scarbhileog thú ó é a dhéanamh mícheart.

## An mhatamaitic

```
icer_in_airgeadra_áitiúil = tiontaigh(icer_in_airgeadra_foinse, fachtóir_tiontaithe)

ba chóir don fhachtóir_tiontaithe a bheith:
  fachtóir tiontaithe PPP — chun fíorluach eacnamaíoch acmhainní a chur i gcomparáid
                            thar thíortha (molta ag ISPOR do CEA
                            ilnáisiúnta)
  ráta FX margaidh        — d’fhíor-íocaíochtaí airgid tirim trasteorann amháin

glac leis má icer_in_airgeadra_áitiúil < tairseach_áitiúil
```

Is é an riail chinnidh féin riail ghnáth [tairsí ICER](../tairseacha-toilteanais-íoc/) — `glac leis má ICER < λ` — baineann an cheist mhodheolaíochta a thugann an topaic seo aghaidh uirthi go hiomlán le *cén fachtóir tiontaithe* a tháirgeann an figiúr `icer_in_airgeadra_áitiúil` a gcuirtear an riail sin i bhfeidhm air.

## Sampla oibrithe

Is é $45,000/QALY ICER druga ó thriail SAM. Socraíonn tír allmhairithe hipitéiseach a tairseach léiritheach féin ag £34,000/QALY (figiúr hipitéiseach tíre-shonrach don sampla seo amháin — athraíonn tairseacha fíor de réir tíre agus thar am, agus ní mór iad a fhoinsiú agus a dhátú i gcónaí).

**Ag úsáid fachtóir tiontaithe PPP 0.72** (léiritheach, don sampla oibrithe seo amháin): $45,000 × 0.72 = £32,400/QALY. £32,400 < £34,000 → **glac leis**.

**Ag úsáid ráta malairte margaidh 0.79** ina ionad (léiritheach): $45,000 × 0.79 = £35,550/QALY. £35,550 > £34,000 → **diúltaigh**.

Táirgeann an ICER bunúsach céanna $45,000/QALY cinneadh glactha faoi thiontú PPP agus cinneadh diúltaithe faoi thiontú FX margaidh. Is é seo an léiriú nithiúil ar an gcúis a chaitheann treoir ISPOR le roghnú an fhachtóra tiontaithe mar rud a bhfuil iarmhairt mhodheolaíoch aige — ní mionsonra cruinnithe, agus ní rud le fágáil intuigthe i bhfoirmle scarbhileoige nach ndéanann aon duine seiceáil dhúbailte uirthi.

## An nasc le hinnealtóireacht bogearraí

Is scáthán eacnamaíochta sláinte é seo de réimse innealtóireachta aitheanta: ceart praghsála il-airgeadra i18n/l10n i mbogearraí tráchtála, áit nach mór d’leathanach praghsála SaaS méid `$` a chur i gcomparáid go ciúin le praghas `£` go brách. Is comhthreomhar díreach innealtóireachta bogearraí leis an bpointe modheolaíochta eacnamaíochta sláinte anseo an ráthaíocht leibhéal-cineáil a sholáthraíonn cineál `Money` dea-thógtha — modhanna comparáide a dhiúltaíonn airgeadraí neamhmheaitseáilte a chur i gcomparáid, ag cur iallach ar chéim thiontaithe shainráite ar dtús: ná cuir figiúirí gan tiontú i gcomparáid thar airgeadraí, agus ná lig don chéim thiontaithe a bheith intuigthe nó gan doiciméadú.

## Gaistí

- **Méideanna in airgeadraí éagsúla a chur i gcomparáid go ciúin**: obair HTA scarbhileoige ad hoc a dhealaíonn nó a chuireann figiúr dollar agus figiúr punt i gcomparáid gan chéim thiontaithe ar dtús — aicme fabht a ghabhann cineál `Money` fíor-airgeadra-feasach de réir tógála in ionad é a fhágáil mar earráid chiúin.
- **Ráta malairte margaidh agus PPP a mheascadh**: an earráid mhodheolaíochta HTA ilnáisiúnta is coitianta de réir treorach ISPOR — is féidir leis an dá uimhir difriú go mór agus freagraíonn siad ceisteanna éagsúla (fíorluach eacnamaíoch vs sreabhadh airgid tirim iarbhír).
- **Gan dáta a chur leis an ráta malairte nó an t-innéacs PPP a úsáideadh**: bogann an dá cheann le himeacht ama, mar sin ní mór aon fhachtóir tiontaithe a luaitear a dhátú ar an mbealach céanna a dhátaíonn an stór seo a fhigiúirí tagarmhairc eile (luachanna carbóin Leabhar Glas, luach básmhaireachta seachanta, agus mar sin de).

## Foinsí

- Willke RJ, Glick HA, Polsky D, Schulman K. "Estimating country-specific cost-effectiveness from multinational clinical trials." *Health Economics*. 1998;7(6):481-93.
- OECD, Purchasing Power Parities (PPP) data. <https://www.oecd.org/en/data/indicators/purchasing-power-parities-ppp.html>
