# Méadracha DORA

Is ceithre bheart ar fheidhmíocht seachadta bogearraí iad méadracha DORA (DevOps Research and Assessment) — minicíocht imlonnaithe, am seolta d’athruithe, ráta teipe athraithe, agus am téarnaimh ó imlonnú theipthe — móide iontaofacht mar chúigiú ceann. Is iad na tagarmharcanna seachadta is bailíochtaithe sa réimse iad, agus tá léamh díreach eacnamaíochta sláinte ag gach ceann.

## Cén fáth a bhfuil tábhacht leis

Nascann deich mbliana taighde DORA na méadracha seo le feidhmíocht eagraíochta. Clústair thuarascáil 2024: imlonnaíonn foirne **mionlach** de réir éilimh (iolrach uaireanta/lá), tógann siad níos lú ná lá ó thiomantas go táirgeadh, teipeann orthu ~5% d’athruithe, agus téarnaíonn siad in níos lú ná uair an chloig; imlonnaíonn feidhmeannaigh **íseal** go míosúil-nó-níos lú, tógann míonna, teipeann orthu ~40% d’athruithe, agus téarnaíonn siad i seachtainí. I gcás córas sláinte, ní uimhreacha vanity TF iad seo: socraíonn siad cé chomh tapa a shroicheann luach cliniciúil othair agus cé mhéad riosca a iompraíonn gach athrú.

## An mhatamaitic

```
Minicíocht imlonnaithe  = imlonnuithe táirgeachta / am
Am seolta d’athruithe   = t(imlonnú) − t(tiomantas), airmheán
Ráta teipe athraithe    = athruithe teipthe / athruithe iomlána × 100
Am téarnaimh (MTTR)     = t(athchóirithe) − t(teip), airmheán
Iontaofacht             = bainte amach SLO (infhaighteacht, moill, ceartas)
```

Aistriúcháin eacnamaíochta sláinte:

```
Am seolta     → cost-of-delay.md: seachtainí sa phíblíne × CoD (£ nó QALY/seachtain)
Ráta teipe    → ráta imeachta díobhálach d’athrú bogearraí: CFR × costas in aghaidh teagmhais
Am téarnaimh  → dochar downtime: MTTR × (gníomhaíocht chliniciúil caillte + nochtadh sábháilteachta)/uair
Iontaofacht   → lascaine sochair: seirbhís ag 99% infhaighteachta seachadann ≈ 0.99
                dá sochar samhaltaithe — an analach bogearraí de chloí
```

## Sampla oibrithe

Foireann bogearraí sreafa othar iontaobhais, roimh/tar éis infheistíocht i seachadadh-innealtóireachta:

```
                    Roimh       Tar éis
Imlonnuithe         míosúil     seachtainiúil
Am seolta           6 sheachtain 4 lá
CFR                 25%         8%
MTTR                2 lá        2 uair
```

Seolann an fhoireann ~30 feabhsú/bliain le meánluach in aghaidh an fheabhsaithe £4,000/seachtain ([CoD](../costas-moille/)). Tarraingíonn gearradh ama seolta ~5.4 seachtaine sruth sochair gach feabhsaithe ar aghaidh: 30 × 5.4 × 4,000 ≈ **£648,000/bliain** de luach seachadta níos luaithe. Feabhsú CFR: 30 × (0.25 − 0.08) = ~5 athrú teipthe níos lú/bliain × £15,000 meánchostas teagmhais (downtime córais chliniciúil, feabhsúchán) = **£76,500/bliain**. Luacháiltear an infheistíocht seachadta san airgeadra céanna le haon idirghabháil chliniciúil.

## An nasc le hinnealtóireacht bogearraí

*Is é* seo an taobh bogearraí — is é an nasc is fiú a lua an mhapáil droim ar ais: is méadracha oibríochtúla an ospidéil iad méadracha DORA in éadaí éagsúla. Am seolta ↔ [tarchur chuig cóireáil](../tarchur-go-cóireáil/); ráta teipe athraithe ↔ [ráta athghlactha](../ráta-athghlactha/) (obair a phreab ar ais); MTTR ↔ freagairt éigeandála; minicíocht imlonnaithe ↔ tréchur clinice. Aistríonn modhanna feabhsúcháin sa dá threo mar is córais scuaine faoi shrianta sábháilteachta an dá cheann. Tabhair faoi deara freisin fionnachtain AI DORA 2025: comhghaolaíonn glacadh AI anois le tréchur níos airde ach cobhsaíocht *níos measa* — idirghabháil le héifeachtacht agus fo-iarmhairtí, ag éileamh go beacht an anailís sochair ghlain a mhúineann an stór seo (féach [táirgiúlacht forbróirí le AI](../táirgiúlacht-forbróirí-le-ai/)).

## Gaistí

- **Cluichí méadrach**: boilsciú ar chomhaireamh imlonnuithe trí eisiúintí gan oibriú; CFR laghdaithe trí gan hotfixanna a chomhaireamh mar theipeanna. Sainmhínigh imeachtaí go beacht, mar a shainmhíníonn HTA críochphointí.
- **Táblaí sraithe trasfhoirne**: cuireann clústair DORA cleachtais i gcomparáid, ní foirne le próifílí riosca éagsúla; d’fhéadfadh foireann córas cliniciúil ag “ard” a bheith optamach nuair a bheadh “mionlach” meargánta.
- **Méadrach amháin a bharrfheabhsú**: is é luas gan CFR/iontaofacht an malartú tréchur-éagobhsaíocht — tuairiscigh an ceathrar le chéile i gcónaí (is [tábla costais-iarmhairtí](../anailís-costais-iarmhairtí/) iad, ní scór).

## Foinsí

- DORA research and reports. <https://dora.dev/>
- 2024 DORA benchmarks summary. <https://octopus.com/devops/metrics/dora-metrics/>
- DORA 2025 State of AI-assisted Software Development. <https://dora.dev/dora-report-2025/>
