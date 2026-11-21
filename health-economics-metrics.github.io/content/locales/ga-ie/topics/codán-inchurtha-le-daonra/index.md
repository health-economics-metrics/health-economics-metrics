# Codán inchurtha le daonra (PAF)

Is é PAF an chuid d’ualach galair nó toraidh i ndaonra atá inchurtha le nochtadh riosca-fachtóra ar leith — an sciar a imeodh dá mbainfí an nochtadh go hiomlán. Tiontaíonn sé “dúbailt a dhéanann an riosca-fachtóir seo ar do dheiseanna” ina uimhir ar leibhéal daonra ar féidir le coimisinéir pleanáil ina thimpeall: cé mhéad cás, agus cé mhéad costais, is fiú nochtadh ar leith a leanúint.

## Cén fáth a bhfuil tábhacht leis

Chuir Levin PAF i láthair in 1953 chun ceist chúng, choincréiteach a fhreagairt: mura ndearna aon duine caitheamh tobac, cé mhéad ailse scamhóige a d’imeodh? Déanann an uimhríocht chéanna pleanáil náisiúnta cosanta a mhéadú anois ó straitéisí tobac agus murtallachta go dtí rangú riosca-fachtóirí staidéar Global Burden of Disease WHO, mar ní deir riosca coibhneasta leis féin aon rud faoi thionchar — is féidir le riosca-fachtóir deiseanna tarluithe annamh a dhúbailt agus ualach galair an daonra a bhogadh go beagnach nialas, nó deiseanna imeachta coitianta a ardú ach beagán agus sciar ollmhór cásanna a chuntas fós. Is é PAF an rud a thiontaíonn “tá riosca-fachtóir X contúirteach” ina “chosnódh baint riosca-fachtóir X an oiread seo cásanna sa bhliain”, an uimhir a theastaíonn ó chás gnó clár cosanta i ndáiríre. Féach [eacnamaíocht cosanta](../eacnamaíocht-cosanta/) chun a fheiceáil cad a chosnaíonn sé gníomhú ar an uimhir sin nuair atá sí agat.

## An mhatamaitic

```
PAF = prevalence_exposed × (relative_risk − 1) / (1 + prevalence_exposed × (relative_risk − 1))

prevalence_exposed = fraction of the population exposed to the risk factor (0–1)
relative_risk      = risk of the outcome in exposed vs. unexposed people (e.g. 2.5 = 2.5×)

Cases attributable = total_cases × PAF
```

Ardaíonn PAF le leitheadúlacht nochta agus le riosca coibhneasta araon — is féidir le riosca coibhneasta measartha ardaithe (abair 1.5×) a bhfuil nochtadh an-choitianta ceangailte leis PAF níos mó a tháirgeadh ná riosca coibhneasta drámatúil (abair 5×) a bhfuil nochtadh annamh ceangailte leis. Sin an chúis iomlán go bhfuil sé ann mar uimhir ar leith ón riosca coibhneasta.

## Sampla oibrithe

Tá riosca-fachtóir i láthair i 30% de dhaonra (`prevalence_exposed = 0.3`) agus ardaíonn sé riosca an toraidh 2.5-oll (`relative_risk = 2.5`):

```
PAF = 0.3 × (2.5 − 1) / (1 + 0.3 × (2.5 − 1))
    = 0.3 × 1.5 / (1 + 0.3 × 1.5)
    = 0.45 / 1.45
    ≈ 0.3103 (31.0%)

With 1,000 cases/year in the population:
Cases attributable = 1,000 × 0.3103 ≈ 310 cases/year
```

Tá beagán faoi bhun trian de ualach bliantúil an toraidh seo inchurtha leis an nochtadh — chosnódh a dhíothú go hiomlán (uasteorainn theoiriciúil; ní bhaineann aon fhíoridirghabháil 100% de bhaint nochta amach) thart ar 310 den 1,000 cás gach bliain.

## An nasc le hinnealtóireacht bogearraí

Is é PAF an leagan eipidéimeolaíoch de “cén méid dár méid eachtraí atá inchurtha leis an bhfréamh-chúis amháin seo?” — an cruth ceiste céanna a chuireann foirne agus iad ag méid aicme áirithe imscartha nó spleáchais i gcoinne iomlán na n-eachtraí táirgeachta, seachas gach eachtra a láimhseáil mar a bheadh sí chomh fiúntach céanna a shocrú ar an mbealach céanna. Is féidir le catagóir fréamh-chúise atá i láthair i sciar mór d’imscarthaí le riosca coibhneasta measartha eachtra a chur faoi deara níos mó ná catagóir annamh, riosca-coibhneasta ard maidir le cá gcaithfear iarracht innealtóireachta ar dtús — go beacht an léargas PAF, aistrithe.

## Gaistí

- **PAFanna a shuimiú thar riosca-fachtóirí**: ní shuimíonn PAFanna d’il-fhachtóirí a théann i bhfeidhm ar an toradh céanna go 100% — is féidir leo é a shárú san iomlán, toisc go n-idirghníomhaíonn fachtóirí agus go roinneann siad cosáin chúisíocha. Caith le gach PAF mar “dá mbainfí an fachtóir seo amháin”, riamh mar dheighilt den riosca iomlán.
- **Riosca coibhneasta a thrasphlandáil thar dhaonraí**: ríomhann riosca coibhneasta a mheastar i ndaonra amháin (leitheadúlacht nochta bunlíne dhifriúil, mearbhaí difriúla) PAF mhíthreorach nuair a chuirtear i bhfeidhm é ar leitheadúlacht nochta daonra eile.
- **PAF a mheascadh le riosca inchurtha sna nochta**: tá PAF ar leibhéal an daonra agus braitheann sé ar leitheadúlacht nochta; tá riosca inchurtha sna nochta ar leibhéal an duine agus ní bhraitheann. Freagraíonn siad ceisteanna difriúla — ná luaigh ceann amháin chun an ceann eile a fhreagairt.

## Foinsí

- Levin ML. "The occurrence of lung cancer in man." Acta Unio Int Contra Cancrum. 1953;9(3):531-41.
- Rockhill B, Newman B, Weinberg C. "Use and misuse of population attributable fractions." Am J Public Health. 1998;88(1):15-9.
