# Méadracha sreafa

Tomhaiseann méadracha sreafa an chaoi a ngluaiseann obair trí chóras seachadta: am timthrialla, am seolta, tréchur, obair ar siúl (WIP), agus éifeachtúlacht sreafa. Rialaíonn Dlí Little iad — an mhatamaitic scuaine chéanna a rialaíonn leapacha ospidéil agus liostaí feithimh.

## Cén fáth a bhfuil tábhacht leis

Ní obair é formhór an ama seachadta — is feitheamh é. Faigheann staidéir éifeachtúlachta sreafa ar obair eolais go rialta nach n-oibrítear go gníomhach ar mhíreanna ach **5–15%** dá n-am caite; is scuaine é an chuid eile. Ciallaíonn sé sin gurb é bhaint scuaine an luasghéarú is saoire, ní fruiliú — go beacht an tuiscint a d’aimsigh cláir sreafa othar ospidéil faoi leapacha. I gcás aon rud a bhfuil [costas moille](../costas-moille/) air, aimsíonn méadracha sreafa cá bhfabhraíonn an costas moille.

## An mhatamaitic

```
Am timthrialla  = t(críochnaithe) − t(tosaithe)
Am seolta       = t(seachadta) − t(iarrtha)     (lena n-áirítear scuaine réamh-oibre)
Tréchur         = míreanna críochnaithe / tréimhse
WIP             = míreanna tosaithe ach neamhchríochnaithe
Éifeachtúlacht sreafa = am gníomhach / (gníomhach + am feithimh) × 100

Dlí Little:  meán WIP = tréchur × meán-am timthrialla
             (go coibhéiseach: am timthrialla = WIP / tréchur)
```

Is é Dlí Little an luamhán: ag tréchur seasta, laghdaíonn gearradh WIP am timthrialla go comhréireach. Ritheann sé ospidéil freisin: `leapacha áitithe = glactha isteach/lá × fad fanachta`.

## Sampla oibrithe

Tá 40 mír ar siúl ag foireann agus críochnaíonn siad 10/seachtain: am timthrialla = 40/10 = 4 sheachtain. Cuireann siad teorainneacha WIP i bhfeidhm, ag gearradh WIP go 15: am timthrialla = 15/10 = **1.5 seachtain** — na daoine céanna, an tréchur céanna, seachadadh 62% níos tapúla, ó dhiscréid scuaine amháin.

Praghsáilte le CoD: más £3,000/seachtain meánchostas moille míreanna, caitheann gach mír 2.5 seachtain níos lú ar scuaine anois: 10 mír/seachtain × 2.5 × 3,000 = **£75,000/seachtain de chostas moille curtha deireadh leis** — ó athrú polasaí nach gcosnaíonn faic.

Scáthán ospidéil: 40 glacadh isteach/lá × 6.0 lá LOS = 240 leaba; gearr an feitheamh neamhcliniciúil laistigh de LOS go 5.6 lá agus saorfar 16 leaba ([fad fanachta](../fad-an-fhanachta/)) — an dlí céanna, an luamhán céanna.

## An nasc le hinnealtóireacht bogearraí

Is í an teanga chomhroinnte idir innealtóireacht seachadta agus oibríochtaí sláinte iad méadracha sreafa:

- **Tagarmharcanna fo-chéime PR** (LinearB, ~8M PR): am piocadh mionlach < 7u, athbhreithniú < 6u, timthriall iomlán < ~26u — is scuaine íon é am piocadh, an chéad rud le hionsaí.
- Is riaráistí iad **[liostaí feithimh](../tionchar-liosta-feithimh/)**; is am seolta é **[RTT](../tarchur-go-cóireáil/)**; is WIP é **[áitíocht leapa](../laethanta-leapa-sábháilte/)**. Aistríonn feabhsú sa dá threo: teorainneacha WIP ↔ réiteach glactha isteach; uirlisiú ama scuaine ↔ rianú céime bealaigh.
- Tá éifeachtúlacht sreafa faoi 15% gnáth sa dá réimse, agus ceileann an dá cheann é mar go bhfuil *daoine* gnóthach agus *obair* ag fanacht — tomhais clog na hoibre, ní clog na n-oibrithe.

## Gaistí

- **Adhradh úsáide**: pléascann tiomáint úsáid oibrithe i dtreo 100% amanna scuaine neamhlíneach (M/M/1: feitheamh ∝ ρ/(1−ρ)) — an chúis a ndéantar gridlock d’ospidéil 95%-áitithe agus a stopann foirne 95%-leithdháilte.
- **Meáin thar dháiltí claonta**: tá eireabaill throma ar amanna timthrialla; déan réamhaisnéis le peircintílí (p85), ní meáin.
- **WIP a ghearradh trí obair a dhiúltú suas an sruth** agus feabhsú sreafa a thabhairt air — níor imigh an t-éileamh, scuain sé lasmuigh den teorainn tomhais (leagan ospidéil: otharchairr ag fanacht lasmuigh den ED).

## Foinsí

- Little's Law and flow metrics overviews. <https://agility-at-scale.com/safe/lpm/flow-metrics/> ; <https://getdx.com/blog/flow-metrics/>
- LinearB engineering benchmarks. <https://linearb.io/resources/engineering-benchmarks>
- Reinertsen DG, *The Principles of Product Development Flow*.
