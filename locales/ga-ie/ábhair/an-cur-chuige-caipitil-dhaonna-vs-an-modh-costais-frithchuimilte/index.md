# An Cur Chuige Caipitil Dhaonna vs an Modh Costais Frithchuimilte

Is iad seo an dá mhodh iomaíocha chun táirgiúlacht chaillte a luacháil — de dheasca tinnis, míchumais, nó báis — i staidéir costais-tinnis agus costais-sochair. Luacháil an Cur Chuige Caipitil Dhaonna (HCA) gach aschur caillte ar feadh fhad iomlán na neamhláithreachta ag an ráta pá; luacháil an Modh Costais Frithchuimilte (FCM) é ach don tréimhse is giorra a theastaíonn ó fhostóir chun táirgeadh a athchóiriú. Athraíonn rogha eatarthu meastachán costais indírigh faoi dhó nó níos mó.

## Cén fáth a bhfuil tábhacht leis

Tá costais indírigh (táirgiúlachta) ar cheann de na línte is conspóidí in eacnamaíocht sláinte go beacht toisc go n-easaontaíonn an dá mhodh caighdeánacha chomh géar. Caitheann HCA le gach lá neamhláithreachta mar lá aschuir a chailleann an geilleagar go fírinneach, luacháilte ag an bpá iomlán ar feadh na tréimhse iomláine — nó, i gcás báis nó míchumais bhuain, don tsaolré oibre atá fágtha. Áitíonn FCM, i ngeilleagar le dífhostaíocht agus scaoilteacht an mhargaidh saothair, nach laghdaíonn formhór neamhláithreachta fada aschur náisiúnta i ndáiríre tar éis d’fhostóir athchuiríocht a oiliúint nó obair a athdháileadh; ní léiríonn ach an “tréimhse frithchuimilte” — an t-am chun táirgeadh a athchóiriú go dtí a leibhéal roimhe — fíorchaillteanas. Táirgeann FCM mar sin meastacháin costais indírigh níos ísle, níos coimeádaí go córasach ná HCA, agus ní nótaí buntábhachtacha idirmhalartacha iad an dá mhodh: is teoiricí eacnamaíochta éagsúla iad faoi cad is brí le “táirgiúlacht chaillte.” Is é seo freisin an fáth a eisíonn [cás tagartha NICE](../measúnú-teicneolaíochta-sláinte/) costais táirgiúlachta de réir réamhshocraithe, ag tuairisciú orthu, má dhéantar, mar anailís íogaireachta peirspictíochta sochaíche ar leith seachas iad a chumasc isteach san ICER cáis tagartha — féach [peirspictíocht anailíse](../peirspictíocht-anailíse/).

## An mhatamaitic

```
An Cur Chuige Caipitil Dhaonna:
costas_HCA = pá_laethúil × laethanta_caillte

An Modh Costais Frithchuimilte (simplithe, foirm caipthe-ag-tréimhse-frithchuimilte):
costas_FCM = pá_laethúil × íos(laethanta_caillte, laethanta_tréimhse_frithchuimilte)

laethanta_tréimhse_frithchuimilte = meastachán tír/earnáil-shonrach den am chun
                        táirgeadh a athchóiriú (stairiúil ~85 lá i dtreoir
                        chostála iMTA na hÍsiltíre; athraíonn de réir tíre agus
                        athmheastar go tréimhsiúil é)
```

Tá an easaontas iomlán idir an dá mhodh sa `íos()`: ní chaipeann HCA `laethanta_caillte` riamh, mar sin leanann an costas ag fás ar feadh na neamhláithreachta ar fad, agus caipeann FCM na laethanta comhaireamh ag an tréimhse frithchuimilte, pé fada a ritheann an neamhláithreacht iarbhír.

## Sampla oibrithe

Tá fostaí as obair ar feadh `laethanta_caillte = 180` lá, ag tuilleamh `pá_laethúil = £150`.

**An Cur Chuige Caipitil Dhaonna**:

```
costas_HCA = 150 × 180 = £27,000
```

**An Modh Costais Frithchuimilte**, ag úsáid tréimhse frithchuimilte de `laethanta_tréimhse_frithchuimilte = 85` (an tagarmharc stairiúil iMTA Ísiltíreach, mar a bhí ag athmheastachán tréimhsiúil na treorach):

```
costas_FCM = 150 × íos(180, 85) = 150 × 85 = £12,750
```

Tá £12,750 FCM faoi bhun leath de £27,000 HCA don *neamhláithreacht chéanna* — athraíonn rogha an mhodha amháin cás costais-tinnis go hábhartha, sula dteagmháiltear le haon toimhde eile.

## An nasc le hinnealtóireacht bogearraí

Mapálann seo go díreach ar an gcaoi a luacháileann foireann innealtóir ag imeacht:

- **Costáil sceite de stíl HCA**: an caillteanas a luacháil mar thuarastal iomlán an innealtóra a d’imigh ar feadh cibé fada a fhanann an ról folamh. Is é seo an leagan naive de fhormhór samhlacha costais sceite, agus sárluacháiltear an caillteanas ar an gcúis chéanna a sárluacháiltear caillteanas táirgiúlachta le HCA — glactar leis go raibh an cumas folamh lán-tháirgiúil an t-am ar fad agus nár ionsúigh aon rud eile an scaoilteacht. Féach [coinneáil fórsa oibre](../coinneáil-fórsa-oibre/), a chainníochtaíonn an slabhra earcaíochta/ionduchtaithe/clúdach folúntais a chothaíonn an modh seo.
- **Costáil sceite de stíl FCM**: an caillteanas a luacháil don am iarbhír chun athchuiríocht a líonadh-agus-rampa amháin — “tréimhse frithchuimilte” na hinnealtóireachta. Is é seo an uimhir is inchosanta do chás gnó, díreach mar is é FCM an rogha is coimeádaí i staidéar costais-tinnis.
- Is í an araíonacht bhunúsach an cheann chéanna in [costas deise](../costas-deise/): luacháil acmhainn díláraithe de réir a gcailltear i ndáiríre, ní de réir fad ceannlíne iolraithe ag ráta.

## Gaistí

- **HCA agus FCM a mheascadh laistigh d’anailís amháin, nó ceann amháin a thuairisciú gan an rogha a nochtadh.** Is féidir leis na sonraí neamhláithreachta céanna difríocht 2x+ a tháirgeadh i gcostas tuairiscithe de réir modha; ní mór an rogha a lua, gan í a adhlacadh.
- **HCA a úsáid i gcás peirspictíochta sochaíche gan é a thabhairt faoi deara mar anailís íogaireachta.** Eisíonn cás tagartha NICE costais táirgiúlachta go sainráite; baineann meastachán HCA peirspictíochta sochaíche in anailís cásanna, ní san ICER ceannlíne.
- **Ceachtar modh a chur i bhfeidhm ar obair neamhíoctha nó neamhmhargaidh (m.sh. cúram) gan coigeartú.** Glacann an dá mhodh le seachvótaí ráta pá do luach, nach n-aistríonn go glan chuig obair gan pá margaidh.

## Foinsí

- Koopmanschap MA, Rutten FFH, van Ineveld BM, van Roijen L. "The friction cost method for measuring indirect costs of disease." Journal of Health Economics 1995;14(2):171-89.
- Drummond MF, Sculpher MJ, Claxton K, Stoddart GL, Torrance GW. "Methods for the Economic Evaluation of Health Care Programmes." 4th ed. Oxford University Press — topic on productivity costs.
- NICE health technology evaluations manual (PMG36) — reference-case perspective and optional societal-perspective guidance. <https://www.nice.org.uk/process/pmg36>
