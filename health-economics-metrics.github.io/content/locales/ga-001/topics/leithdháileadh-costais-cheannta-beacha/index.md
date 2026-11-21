# Leithdháileadh costais cheannta beacha

Is minic a tháirgeann méid airgid iomláin a roinnt — deontas comhroinnte, sceideal bonneagair, figiúr tionchair buiséid — thar roinnt faighteoirí le huimhríocht céatadáin naive codanna nach suimíonn ar ais leis an iomlán bunaidh. Is é leithdháileadh ceannta beacha an réiteach: modh slánuimhir/deachúil, ag obair in aonaid bheaga airgeadra (ceannta), a ráthaíonn go suimíonn na codanna go *beacht* leis an iomlán, is cuma cé chomh héagothrom a roinneann sé. Teastaíonn an patrún seo, ní céatadáin snámhphointe, ó aon innealtóir bogearraí a chaithfidh iomlán roinnte a réiteach go dtí an ceint — párolla, dáileadh deontais, athghearradh seirbhíse comhroinnte.

## Cén fáth a bhfuil tábhacht leis

Is patrún ainmnithe, bunúsach in innealtóireacht bogearraí fiontair é seo: déanann *Patterns of Enterprise Application Architecture* Martin Fowler (2002) `Money` agus `Allocate` a dhoiciméadú go beacht mar is fadhb í “roinn $100 ar thrí bhealach” a fhaigheann cód naive mícheart i gcónaí, agus go ciúin — ní thagann an earráid chun cinn ach nuair a réitíonn duine na leabhair agus a aimsíonn sé na codanna ceint gearr (nó os cionn) den iomlán. In obair eacnamaíochta sláinte agus airgeadais an NHS ní acadúil é seo: roinntear iomláin tionchair buiséid thar shuímh, blianta, nó stiúrthóireachtaí; leithdháiltear costais bonneagair agus cheadúnais chomhroinnte thar ranna de réir líon ceann nó sciar gníomhaíochta. Ní mór do gach ceann de na scoilteanna sin réiteach go beacht, mar go stopann stiúrthóir airgeadais a thugtar codanna dó nach suimíonn leis an iomlán ag muinín an tsamhail iomláin.

## An mhatamaitic

```
Modh naive (briste):
  codán_i = slánaigh(iomlán × sciar_i / Σ sciar)     — slánaíonn gach codán go neamhspleách

Modh beacht (an fuílleach is mó / “leithdháileadh an fhuílligh is mó”):
  1. bonn_i = urlár(aonaid_bheaga_iomlána × sciar_i / Σ sciar)   — aonaid bheaga iomlána (ceannta) amháin
  2. fuílleach = aonaid_bheaga_iomlána − Σ bonn_i                  — ceannta fágtha, i gcónaí < líon faighteoirí
  3. dáil 1 aonad beag breise an ceann ar na faighteoirí `fuílleach` leis an
     bhfuílleach codánach is mó ó chéim 1, go dtí go ídítear an fuílleach

Toradh: Σ codán_i == iomlán, i gcónaí, de réir tógála.
```

Ní shlánaíonn an modh beacht codán de leithligh riamh — slánaíonn sé an *leithdháileadh iomlán* mar oibríocht amháin, rud a choinníonn an t-éagsúlacht suime.

## Sampla oibrithe

Roinn $100.00 trí bhealach chomhionanna (`sciaranna = [1, 1, 1]`).

Modh naive: $100.00 ÷ 3 = $33.333…, slánaithe go neamhspleách go dtí an ceint is gaire tugann $33.33 do gach faighteoir. Suimithe: $33.33 × 3 = $99.99 — d’imigh ceint amháin, agus níl aon mhír aonair “mícheart” go leor le feiceáil ar iniúchadh.

Modh beacht: `bonn` = $33.33 do na trí cheann (9,999 aonad beag san iomlán ó `urlár(10,000 / 3) = 3,333` ceint an ceann), ag fágáil fuílleach de 1 cheint (10,000 − 9,999). Téann an ceint fágtha aonair sin chuig cibé faighteoir a bhfuil an fuílleach codánach is mó aige sa roinnt — is mionsonra inmheánach cur-i-gcóir é an faighteoir ar leith, ní rud ar chóir d’fhóin glaoigh brath air. Críochnaíonn beirt fhaighteoirí le $33.33 agus duine amháin le $33.34, agus suimíonn na trí chodán go beacht go $100.00.

Is é seo go beacht an uimhríocht a theastaíonn ó [anailís tionchair buiséid](../anailís-tionchair-buiséid/) aon uair a chaithfear figiúr tionchair buiséid iomlán a roinnt thar shuímh, cohóirtí, nó blianta airgeadais agus a réiteach ar ais leis an iomlán foilsithe — féach [comhiomlánú costais slán ó thaobh airgeadra](../comhiomlánú-costais-slán-ó-thaobh-airgeadra/) don fhadhb chomhghleacaí maidir le go leor míreanna den sórt sin a shuimiú gan sleamhnú.

## An nasc le hinnealtóireacht bogearraí

Is é seo go litriúil “patrún Money” ó ailtireacht bogearraí fiontair — patrún bunúsach, ainmnithe don aicme fabht seo go beacht, ní cleas aonair. Seoladh fíorlochtanna réitigh airgeadais ón aicme fabht seo go beacht: scoilteanna céatadáin ríofa in `f64`, slánaithe in aghaidh an fhaighteora, agus nár seiceáladh riamh i gcoinne an iomláin bhunaidh. Nascann sé go díreach le modúl [costais iomláin úinéireachta](../costas-iomlán-úinéireachta/) an stóir seo, a shuimíonn costais snámhphointe simplí thar blianta agus roghanna faoi láthair — baineann an araíonacht beachtais chéanna aon uair a chaithfear iomlán TCO nó tionchair buiséid a leithdháileadh seachas a shuimiú amháin.

## Gaistí

- **Céatadán-ansin-slánaigh in ionad an fuílleach is mó**: leithdháileadh le céatadáin snámhphointe agus gach faighteoir a shlánú go neamhspleách, a chomhluaíonn earráid slánaithe agus annamh a shuimíonn ar ais leis an iomlán, go háirithe thar go leor faighteoirí.
- **Easpónaint mionaonaid airgeadra a neamhaird**: glacadh leis go bhfuil 2 ionad deachúil ag gach airgeadra — tá 0 ag an Yen Seapánach, tá 3 ag roinnt airgeadraí — is gnách go gcuireann scoilt chéatadáin lámh-scríofa 2 go crua agus briseann sí go ciúin d’airgeadraí eile; léann gnáthamh leithdháilte beacht an t-easpónant ón airgeadra féin (ISO 4217).
- **Fuílleach atá leithdháilte cheana a athleithdháileadh**: an gnáthamh leithdháilte a rith arís ar a bhfuil fágtha ó leithdháileadh roimhe, gan seiceálacha idirdhaingneachta, rud a fhéadfaidh an ceint chéanna a chreidiúnú faoi dhó don fhaighteoir céanna.

## Foinsí

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — the `Money` and `Allocate` patterns.
- ISO 4217 — currency and funds code standard, which defines each currency's minor-unit exponent.
