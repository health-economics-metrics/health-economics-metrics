# Luach ionchais faisnéise foirfe (EVPI)

Is é EVPI an méid uasta ar chóir do chinnteoir íoc chun éiginnteacht a dhíchur sula gcinneann sé — praghas foirmiúil “déanaimis staidéar ar dtús.”

## Cén fáth a bhfuil tábhacht leis

Bíonn córais sláinte os comhair an rogha i gcónaí: glac leis anois ar fhianaise easnamhach, nó maoiniú taighde breise ar dtús. Cuireann EVPI uimhir ar an dara rogha. Más £50,000 EVPI agus más £2 mhilliún a chosnaíonn an triail beartaithe, glac leis anois. Más £20 milliún EVPI, is margadh í an triail. Tagann an cheist chéanna — “ar cheart dúinn é seo a phíolótú sula rollaimid amach é?” — chun cinn do gach cinneadh uirlisí fiontair, agus is beag duine a chuireann praghas air. Chun praghas a chur ar an rogha tionscadal a leathnú níos déanaí, seachas an rogha faisnéis a bhailiú ar dtús, féach [Luacháil roghanna fíor](../luacháil-roghanna-réadacha/).

## An mhatamaitic

Is é EVPI an bhearna idir cinneadh le réamhfheiceáil foirfe agus cinneadh anois ar ionchais:

```
EVPI = E_θ[ uas_j NMB(j, θ) ]  −  uas_j E_θ[ NMB(j, θ) ]

θ        = paraiméadair éiginnte (lena ndáileadh comhpháirteach)
NMB(j,θ) = sochar airgeadaíochta glan rogha j ag tabhairt θ
```

An chéad téarma: meán an luach saothair rogha is fearr thar gach domhan indéanta (roghnaíonn tú i gceart i gcónaí). An dara téarma: luach saothair na rogha aonair is fearr ar an meán (ní mór duit tiomantas a thabhairt anois). EVPI ≥ 0 i gcónaí. Iolraíonn EVPI daonra faoi líon na gcinntí a ndeachaigh tionchar orthu. Ríomhtha go díreach ó tharraingtí [PSA](../anailís-íogaireachta-dóchúlachta/).

## Sampla oibrithe

Rolladh amach cúntóir doiciméadaithe AI do 5,000 cliniceoir, nó ná déan. Dhá dhomhan:

```
Domhan A (p = 0.6): sábhálann an cúntóir 20 nóim/lá → NMB an rollta amach = +£8M
Domhan B (p = 0.4): sábhálann an cúntóir ~0 (frithchuimilt sreabhadh oibre) → NMB an rollta amach = −£3M
NMB “ná rolladh amach” = £0 sa dá dhomhan.
```

Cinn anois: E[NMB rolladh amach] = 0.6 × 8 − 0.4 × 3 = **+£3.6M** → rolladh amach.

Le faisnéis foirfe: i ndomhan A roghnaigh rolladh amach (+£8M), i ndomhan B roghnaigh faic (£0). Luach ionchais = 0.6 × 8 + 0.4 × 0 = **£4.8M**.

```
EVPI = 4.8M − 3.6M = £1.2M
```

Is fiú go mór píolót 3 mhí £150,000 a réitíonn go suntasach cén domhan ina bhfuil tú — agus ní fiú aon phíolót a chosnaíonn níos mó ná £1.2M, pé chomh críochnúil.

## An nasc le hinnealtóireacht bogearraí

Is é EVPI eacnamaíocht an spike, an phíolóta, an tástála A/B, agus an chruthúnais choincheapa. Tugann sé dhá riail phraiticiúla:

- **Níl píolót fiú a mhaoiniú ach amháin má d’fhéadfadh an cinneadh athrú i ndáiríre.** Má rollfá amach beag beann ar thoradh an phíolóta, EVPI = 0 agus is amharclann é an píolót.
- **Caipeáil caiteachas píolóta ag EVPI.** Tá luach na faisnéise teoranta ag luach an chinnidh a chuireann sí in iúl.

Leathnaíonn EVPI páirteach (EVPPI) seo go paraiméadair aonair: “cad is fiú an uimhir ama sábháilte go sonrach a ghreamú síos?” — a insíonn duit cad ba chóir don phíolót a thomhas. Chun staidéar *sonrach* beartaithe a phraghsáil seachas gach éiginnteacht a dhíchur, féach [EVSI](../luach-ionchais-faisnéise-samplaí/).

## Gaistí

- **Píolótaí a rith gan riail chinnidh ceangailte** — tá faisnéis nach féidir leis an rogha a athrú gan luach de réir sainmhínithe.
- **Costas moille bailiú faisnéise a neamhaird**: cuireann píolót 6 mhí moill 6 mhí ar an sochar ([costas moille](../costas-moille/)); glanluach an phíolóta = EVPI réitithe − costas moille − costas píolóta.
- **EVPI a chaitheamh mar réamhaisnéis.** Is uasteorainn é ar luach faisnéise, ní meastachán ar an méid a sheachadfaidh staidéar ar leith.

## Foinsí

- Claxton K. "Exploring uncertainty in cost-effectiveness analysis." PharmacoEconomics 2008. <https://pubmed.ncbi.nlm.nih.gov/18279550/>
- York Health Economics Consortium glossary: EVPI. <https://yhec.co.uk/glossary/expected-value-of-perfect-information-evpi/>
