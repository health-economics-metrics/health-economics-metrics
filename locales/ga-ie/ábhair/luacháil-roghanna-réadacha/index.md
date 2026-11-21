# Luacháil roghanna réadacha (Real Options Valuation)

Cuireann luacháil roghanna réadacha loighic phraghsála roghanna airgeadais i bhfeidhm ar chinntí infheistíochta réadacha (neamh-mhargadh airgeadais) — go sonrach, an *rogha leathnú* tionscadail níos déanaí má éiríonn leis, gan a bheith faoi oibleagáid. Luacháiltear an solúbthacht seo go díreach le samhail dhénártha aon-tréimhse shimplithe (Cox, Ross, Rubinstein, 1979), ag casadh “seolaimis beag agus féachaimis” ó thuairim ina huimhir phraghsáilte.

## Cén fáth a bhfuil tábhacht leis

Praghsálann ríomh NPV statach tionscadal mar gheall gach-nó-rud: maoinigh é nó ná déan, ar scála an lae inniu, go brách. Is annamh a dhéantar geall den chineál sin ar thionscadail fhíor — go háirithe scaoileadh sláinte digití céimnithe: is féidir le córas sláinte píolótach beag a mhaoiniú, féachaint cad a tharlaíonn, agus airgead breise a thiomnú ach amháin má oibríonn sé. Tá fíorluach ag an solúbthacht sin, agus easluacháil chórasach á déanamh ar infheistíochtaí céimnithe i gcomparáid le cinn aon-iarracha má dhéantar neamhaird di, rud atá go hiomlán ar gcúl d’fhorbairtí soláthair a thugann luach saothair don togra céimnithe a bhfuil cuma níos sábháilte air. Praghsálann luacháil roghanna réadacha an solúbthacht féin, ionas gur féidir togra céimnithe a chur i gcomparáid go cothrom le hailtéarnach lán-ghealltanais seachas é a phionósú as cuma níos lú a bheith air ar líne NPV naïve.

## An mhatamaitic

```
Risk-neutral probability of the "up" state:
  p = ((1 + risk_free_rate) − down_factor) / (up_factor − down_factor)

Expansion payoff in each state (floored at zero — expanding is optional):
  payoff_up   = max(project_value × up_factor   − expansion_cost, 0)
  payoff_down = max(project_value × down_factor − expansion_cost, 0)

Option value (discounted expected payoff):
  option_value = (p × payoff_up + (1 − p) × payoff_down) / (1 + risk_free_rate)

Expanded NPV = static_npv + option_value
```

Éiríonn luach an tionscadail (`up_factor`) nó titeann sé (`down_factor`) faoin gcéad phointe cinnidh eile. Ní fheidhmítear leathnú ach má tá sé brabúsach sa stát sin — is é an t-urlár ag nialas a fhágann gur *rogha* fhíor seachas oibleagáid é seo. Chun praghsáil a dhéanamh ar an rogha eolas a bhailiú ar dtús, seachas an rogha leathnú níos déanaí, féach [luach ionchasach eolais foirfe](../luach-ionchais-faisnéise-foirfe/). Chun costas fanachta an chinnidh sin a fheiceáil, féach [costas moille](../costas-moille/).

## Sampla oibrithe

Píolótach seirbhíse digití le `project_value = £1,000,000`, ardú féideartha go 1.5× nó titim go 0.5× faoin gcéad phointe cinnidh eile, ráta saor ó riosca 8%, agus costas leathnaithe £600,000:

```
p = (1.08 − 0.5) / (1.5 − 0.5) = 0.58

payoff_up   = max(1,000,000 × 1.5 − 600,000, 0) =  900,000
payoff_down = max(1,000,000 × 0.5 − 600,000, 0) = max(−100,000, 0) = 0

The floor matters: the option would NOT be exercised if the market
disappoints — the £600,000 expansion cost exceeds the £500,000 the
project would be worth in the down state.

option_value = (0.58 × 900,000 + 0.42 × 0) / 1.08
             = 522,000 / 1.08
             ≈ £483,333.33
```

Má chuirtear luach na rogha le bunlíne NPV statach £200,000: NPV leathnaithe = 200,000 + 483,333.33 ≈ **£683,333.33**. Dá dtuairisceofaí an NPV statach £200,000 amháin, gan luach na rogha seo, d’easluacháil sé fíorluach an tionscadail chéimnithe níos mó ná faoi dhó.

## An nasc le hinnealtóireacht bogearraí

Is é seo an leagan foirmiúil de “seol leagan íosta anois, coinnigh an rogha chun níos mó a infheistiú má éiríonn leis” — a bhfuil tábhacht dhíreach leis do scaoileadh táirge sláinte digití céimnithe, comhthreomhar go struchtúrtha le frámaíocht seicheamhaithe-faoi-éiginnteacht [costas moille](../costas-moille/) agus [WSJF/CD3](../wsjf-agus-cd3/), agus comhlántach le [luach ionchasach eolais foirfe](../luach-ionchais-faisnéise-foirfe/) agus [luach ionchasach eolais samplach](../luach-ionchais-faisnéise-samplaí/) — praghsálann na trí cinn solúbthacht nó eolas faoi éiginnteacht, ó uillinneacha difriúla.

## Gaistí

- **Praghsáil neodrach riosca a fháil ar iasacht gan an toimhde sócmhainne trádáilte a bhraitheann sí air**: faigheann samhlacha roghanna réadacha dóchúlacht neodrach riosca ar iasacht ó phraghsáil roghanna airgeadais, a ghlacann leis gur sócmhainn *thrádáilte* an luach bunúsach — i gcás tionscadail fhíor neamh-thrádáilte is áis samhaltaithe é seo, ní fíric mhargaidh liteartha.
- **`up_factor`/`down_factor` a chaitheamh mar pharaiméadair shaora**: is toimhdí iad ionchuir dhénártha suas/síos iad féin a n-éilíonn údar, ní paraiméadair shaora a roghnaítear chun freagra inmhianaithe a tháirgeadh.
- **Luach na rogha amháin a thuairisciú**: tá luach roghanna réadacha *suimitheach* le NPV statach tionscadail neamhspleách — earráid choitianta é luach na rogha amháin a thuairisciú agus an cás bunúsach a fhágáil ar lár, rud a ró-mheasann an cás má tá an NPV statach diúltach agus a easmheasann é (mar atá sa sampla oibrithe thuas) nuair a fhágtar an NPV statach ar lár go hiomlán.

## Foinsí

- Cox JC, Ross SA, Rubinstein M. "Option pricing: a simplified approach." J Financ Econ. 1979;7(3):229-63.
- Trigeorgis L. *Real Options: Managerial Flexibility and Strategy in Resource Allocation*. MIT Press. 1996.
- Driffield T, Smith PC. "A real options approach to watchful waiting: theory and an illustration." Med Decis Making. 2007;27(2):178-88 — ties real options directly to a health-economics decision context. <https://pubmed.ncbi.nlm.nih.gov/17395932/>
