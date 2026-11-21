# Comhiomlánú costais slán ó thaobh airgeadra

Nuair a shuimítear go leor mírcheanna airgid — sceidil mhíosúla, costais in aghaidh an tsuímh, figiúirí tionchair buiséid il-bhliana — le gnáthuimhreacha snámhphointe dénártha (`f64`), carntar earráidí beaga léiriúcháin, mar nach féidir formhór na bhfrancaí deachúla ($1,234.56, mar shampla) a léiriú go beacht i snámhphointe dénártha. Tá gach earráid aonair beag, ach is féidir le samhail mhór a shuimíonn na céadta nó na mílte mír thar roinnt blianta sleamhnú ag codanna de cheint — agus braitheann an sleamhnú ar *ord* na suimeanna, rud a fhágann nach féidir é a atáirgeadh. Suimíonn comhiomlánú airgeadra a dhéantar i uimhríocht dheachúil bheacht (nó aonaid bheaga slánuimhreacha) go beacht, ag meaitseáil an chaoi a gcaithfidh córais chuntasaíochta agus leabhair dúbailt-iontrála réiteach go dtí an ceint.

## Cén fáth a bhfuil tábhacht leis

Is aicme fabht bogearraí bhunúsach, dea-dhoiciméadaithe é seo: is é páipéar ACM Computing Surveys 1991 Goldberg “What Every Computer Scientist Should Know About Floating-Point Arithmetic” an tagairt chaighdeánach do go beacht cén fáth nach féidir le snámhphointe dénártha formhór luachanna airgid deachúla a léiriú go beacht, agus cén fáth a gcomhluaitear an earráid trí go leor acu a shuimiú. Suimíonn samhlacha airgeadais eacnamaíochta sláinte agus NHS go rialta go leor blianta agus go leor catagóirí costais — comhiomlánaíonn [costas iomlán úinéireachta](../costas-iomlán-úinéireachta/) agus [anailís tionchair buiséid](../anailís-tionchair-buiséid/) araon líon mór míreanna costais `f64` thar spriocamanna il-bhliana. Nuair a chaithfidh samhail réiteach go dtí an ceint — ní mór d’iniúchadh a ríomhann an t-iomlán de láimh an figiúr *comhionann* a fháil — ní mór don uimhríocht féin a bheith beacht-dheachúil, ní snámhphointe.

## An mhatamaitic

```
Comhiomlánú naive:              iomlán = Σ f64(mír_i)         — sleamhnú ag brath ar ord
Comhiomlánú slán ó airgeadra:   iomlán = Σ Decimal(mír_i)      — beacht, inatáirgthe

Coigeartú céatadáin a chur i bhfeidhm (m.sh. maolán teagmhasach):
  coigeartaithe = iomlán × iolraitheoir        — toradh beacht Decimal, d’fhéadfadh
                                                  níos mó ionad deachúil a bheith ann
                                                  ná easpónant mionaonaid an
                                                  airgeadra
  slánaithe     = slánaigh(coigeartaithe, easpónant_airgeadra, riail_slánaithe)  — ní mór
                                                  an riail slánaithe (leathuasdeis vs
                                                  leath-fiú/slánú baincéara)
                                                  a lua go sainráite
```

Tabhair faoi deara an dian dhá chéim: is féidir le méid beacht `Decimal` a iolrú faoi iolraitheoir níos mó ionad deachúil a tháirgeadh ná mar a úsáideann an t-airgeadra i ndáiríre (trí ionad deachúil ó mhéid dhá ionad deachúil iolraithe faoi iolraitheoir dhá ionad deachúil, mar shampla) — ní shlánaítear an beachtas idirmheánach sin ar shiúl go huathoibríoch; ní thógann ach céim shlánaithe shainráite, le riail shlánaithe luaite, síos go dtí fíor-easpónant mionaonaid an airgeadra é.

## Sampla oibrithe

Dhá sceideal mhíosúla dhéag chomhionanna de $1,234.56 an ceann, suimithe in uimhríocht dheachúil bheacht: $1,234.56 × 12 = **$14,814.72**, go beacht. Cuir i gcodarsnacht é seo le suimiú an litriúil `f64` `1234.56` dhá uair dhéag i dtiúchan dúbailte IEEE-754, rud ar féidir leis sleamhnú ag codanna de cheint ag brath ar ord na suimithe — aicme fabht fíor, doiciméadaithe, ní fadhb do shamhail a tógadh ar uimhríocht `Money` dheachúil bheacht.

Cuir maolán teagmhasach caighdeánach tionchair buiséid de 5% (iolraitheoir 1.05×) i bhfeidhm anois ar an iomlán $14,814.72 sin: $14,814.72 × 1.05 = $15,555.456 — trí ionad deachúil, mar go bhfuil an t-iolrú beacht agus nach slánaítear go huathoibríoch é go dtí dhá ionad deachúil an airgeadra. Má shlánaítear go sainráite é go 2 ionad deachúil ag úsáid slánú baincéara (leath-fiú) tugann sé go beacht **$15,555.46**.

## An nasc le hinnealtóireacht bogearraí

Is é seo an ceacht díreach, bunúsach taobh thiar de “úsáideann bogearraí airgeadais `Decimal`, ní `float`” — nascann sé go sainráite le modúil [costais iomláin úinéireachta](../costas-iomlán-úinéireachta/) agus [anailís tionchair buiséid](../anailís-tionchair-buiséid/) an stóir seo, a shuimíonn costais snámhphointe simplí faoi láthair; ní éilíonn an argóint cheartachta anseo go n-imirceofaí na samhlacha sin láithreach, ach luann sí go beacht *cathain* a chaithfidh córas réiteach go dtí an ceint agus mar sin nár chóir dó snámhphointe dénártha a úsáid dá uimhríocht airgid. Féach freisin [leithdháileadh costais cheannta beacha](../leithdháileadh-costais-cheannta-beacha/) don fhadhb chomhghleacaí iomlán a roinnt (seachas a shuimiú) gan cinn a chailleadh.

## Gaistí

- **Tiontú go `float` i lár slabhra**: luach airgid a tharraingt amach go uimhir snámhphointe i lár ríomha (ainmníonn roinnt leabharlanna `Money` an modh tiontaithe seo fiú rud éigin cosúil le “lossy” mar rabhadh sainráite) caitheann go ciúin an ráthaíocht beachtais do gach ríomh iartheachtach ón bpointe sin.
- **“Tá Decimal ró-mhall le bodhraigh leis”**: uimhríocht dheachúil bheacht a dhíbhe mar bharrchostas gan ghá nuair is ceartas agus iniúchtacht — ní tréchur amh — a bhfuil tábhacht leo do thuairisciú airgeadais.
- **Céatadán teagmhasach a chur i bhfeidhm gan an riail slánaithe a lua**: is féidir le slánú leathuasdeis in aghaidh leath-fiú (slánú baincéara) an ceint deiridh a athrú; ní mór don choinbhinsiún slánaithe féin a bheith ina rogha luaite, iniúchta — féach [anailís costais is sochair](../anailís-costais-is-sochair/) do threoir Leabhar Glas Státchiste a Shoilse ar choigeartuithe teagmhasacha agus claonadh dóchais, arb é go beacht an cineál figiúir a gcuirtear an chéim slánaithe seo i bhfeidhm air.

## Foinsí

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — the `Money` pattern.
- Goldberg D. "What Every Computer Scientist Should Know About Floating-Point Arithmetic." ACM Computing Surveys, 1991.
- HM Treasury, The Green Book — optimism-bias and contingency guidance for budget-impact modelling. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
