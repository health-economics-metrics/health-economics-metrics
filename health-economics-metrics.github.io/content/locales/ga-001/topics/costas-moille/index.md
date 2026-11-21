# Costas moille (CoD)

Is é Costas Moille an luach eacnamaíoch a chailltear in aghaidh an aonaid ama nach *seachadtar* gné, táirge, nó seirbhís. Is é an droichead is láidre idir méadracha seachadta bogearraí agus eacnamaíocht sláinte é: aistríonn sé “sheolamar déanach” go hairgeadra — nó go QALY.

## Cén fáth a bhfuil tábhacht leis

Riail Reinertsen: “Mura gcainníochtaíonn tú ach rud amháin, cainníochtaigh an Costas Moille.” Tá a fhios ag formhór na n-eagraíochtaí cad a chosnaíonn tionscadal ach ní cad a chosnaíonn mí moille, agus mar sin barrfheabhsaíonn siad buiséid agus iad ag cailleadh luach ama. I gcás bogearraí cúram sláinte tá na geallta liteartha: gach seachtain a mhoillítear feabhsú ar bhealach, fanann othair níos faide i staideanna sláinte níos measa. Is é CoD an creat matamaiticiúil is láidre le cur i láthair geallsealbhóirí an NHS mar go bhfuil praghas aige ar *easpa* do bhogearraí.

## An mhatamaitic

```
CoD = sochar in aghaidh an aonaid ama a chailltear fad nach seachadtar   (£/seachtain nó QALY/seachtain)

Caillteanas iomlán moille = CoD × fad na moille

Le haghaidh tosaíochta, féach wsjf-and-cd3.md: CD3 = CoD / fad.
```

I gcás bogearraí cliniciúla, ainmnigh i sláinte chomh maith le hairgead:

```
CoD_sláinte = othair a ndeachaigh sé i bhfeidhm orthu in aghaidh na seachtaine × gnóthachan QALY in aghaidh an othair
CoD_airgead = CoD_sláinte × λ (tairseach toilteanais le híoc, £20k–30k/QALY)
             + coigilteas oibríochtúil in aghaidh na seachtaine a chailltear
```

## Sampla oibrithe

**Oibríochtúil**: sábhálann bogearraí £200 in aghaidh an othair ar bhealach; próiseálann iontaobhas 50 othar den sórt sin/seachtain.

```
CoD = 200 × 50 = £10,000/seachtain
Cosnaíonn moill sholáthair 10 seachtain 200 × 50 × 10 = £100,000 d’dramhaíl seachanta.
```

**Cliniciúil**: baineann feabhsú triaiste 5 seachtaine feithimh (fóntas 0.68 → 0.80 níos luaithe) do 100 othar/seachtain:

```
Gnóthachan QALY in aghaidh an othair = (5/52) × 0.12 ≈ 0.0115
CoD_sláinte = 100 × 0.0115 = 1.15 QALY/seachtain
CoD_airgead = 1.15 × £20,000 ≈ £23,000/seachtain de luach sláinte
```

“Cosnaíonn” moill imlonnaithe 6 mhí ~30 QALY — an argóint a athfhráimeann sciorradh go-live TF mar theagmhas cliniciúil. (Tagarmharc le haghaidh scála: fuair anailís cháiliúil Maersk Black Swan Farming gnéithe aonair le CoD ≈ $200k/seachtain a bhí ag fanacht 38 seachtain.)

## An nasc le hinnealtóireacht bogearraí

Is é CoD an méadrach a dhéanann [am seolta DORA](../méadracha-dora/) agus [éifeachtúlacht sreafa](../méadracha-sreafa/) inléite go hairgeadais: am seolta × CoD = airgead (nó sláinte) dóite i scuaineanna. Úsáidí:

- **Tosaíocht**: rangaigh obair de réir CoD/fad ([WSJF/CD3](../wsjf-agus-cd3/)) in ionad an gheallsealbhóra is airde glór.
- **Eacnamaíocht próisis**: tá costas moille ionchais ~1 seachtain × CoD in aghaidh na gné ag cadence eisiúna 2 sheachtain i gcomparáid le seachadadh leanúnach — cuir praghas ar an mbaisc.
- **Soláthar**: tá CoD ag timthriallta soláthair an NHS 6–18 mí; athraíonn a thaispeáint comhráití práinne (féach [anailís tionchair buiséid](../anailís-tionchair-buiséid/) don chomhghleacaí inacmhainneachta).

## Gaistí

- **CoD líneach a ghlacadh mar a bheith ann**: tá luach cruth-sprioclá ag roinnt oibre (dátaí rialála — CoD gan teorainn tar éis an dáta, nialas roimhe) nó luach lobhaidh (fuinneoga chéad-ghluaiste). Aicmigh próifíl na práinne sula n-iolraíonn tú.
- **CoD ar aschuir nach mian le aon duine**: ní chosnaíonn moill ach má tá luach ag an rud; tá truflais mhoillithe saor in aisce.
- **Moill agus lascainiú a chomhaireamh faoi dhó**: cuireann [lascainiú](../lascainiú-agus-rogha-ama/) praghas ar am ar spriocamanna il-bhliana cheana féin; is é CoD an leagan oibríochtúil laistigh den spriocam. Úsáid CoD do sheachtainí/míonna, aistriú NPV do bhlianta.

## Foinsí

- Reinertsen DG, *The Principles of Product Development Flow*.
- Black Swan Farming, Cost of Delay. <https://blackswanfarming.com/cost-of-delay/>
- Cost of delay overview. <https://en.wikipedia.org/wiki/Cost_of_delay>
