# Luachadh roghainnean fìor

Bidh luachadh roghainnean fìor a’ cur loidsig prìsidh roghainn ionmhais an sàs ann an co-dhùnaidhean tasgaidh fìor (neo-mhargaidh ionmhais) – gu sònraichte an *roghainn leudachadh* pròiseict nas fhaide air adhart ma shoirbhicheas e, gun a bhith fo dhleastanas. Bidh modail dà-roinneach aon-ùine sìmplichte (Cox, Ross, Rubinstein, 1979) a’ luachadh an sùbailteachd seo gu dìreach, a’ tionndadh “seòlamaid beag agus faicinn” bho bhrath gu àireamh air a prìseadh a-staigh.

## Carson a tha e cudromach

Bidh àireamhachadh NPV statach a’ prìseadh pròiseact mar gheall gach-no-dad: maoinich e no na dèan, aig sgèile an-diugh, gu bràth. Is ann ainneamh a thèid pròiseactan fìor – gu sònraichte cur-a-mach slàinte didseatach ann an ìrean – a gheallachadh mar sin: faodaidh siostam slàinte pìleat beag a mhaoineachadh, coimhead dè thachras, agus airgead a bharrachd a ghealltainn dìreach ma dh’obraicheas e. Tha fìor luach aig an sùbailteachd sin, agus tha a dearmad a’ dì-luachadh tasgaidhean ann an ìrean an coimeas ri feadhainn aon-bheum gu rianail, a tha dìreach air a chùlaibh airson pròiseasan solarachaidh a bhios a’ duaisean moladh ann an ìrean a tha coltach nas sàbhailte. Bidh luachadh roghainnean fìor a’ prìseadh an sùbailteachd fhèin, gus an gabh moladh ann an ìrean a choimeas gu cothromach ri roghainn làn-ghealladh seach a pheanasachadh airson coimhead nas lugha air loidhne NPV naive. Airson prìseadh na roghainn fiosrachadh a chruinneachadh an toiseach, seach an roghainn leudachadh nas fhaide air adhart, faic [luach ris a bheil dùil de fhiosrachadh foirfe](../luach-ris-a-bheil-dùil-de-fhiosrachadh-foirfe/). Airson cosgais feitheamh gus an co-dhùnadh sin a dhèanamh, faic [cosgais dàil](../cosgais-dàil/).

## A’ mhatamataig

```
Coltachd riosg-neodrach na staid “suas”:
  p = ((1 + risk_free_rate) − down_factor) / (up_factor − down_factor)

Toradh leudachaidh anns gach staid (làr aig neoni — tha leudachadh roghainneil):
  payoff_up   = max(project_value × up_factor   − expansion_cost, 0)
  payoff_down = max(project_value × down_factor − expansion_cost, 0)

Luach roghainn (toradh ris a bheil dùil, lasaichte):
  option_value = (p × payoff_up + (1 − p) × payoff_down) / (1 + risk_free_rate)

NPV leudaichte = static_npv + option_value
```

Bidh luach a’ phròiseict an dàrna cuid ag èirigh (`up_factor`) no a’ tuiteam (`down_factor`) ron ath phuing-cho-dhùnaidh. Chan eil leudachadh air a chleachdadh ach ma tha e prothaideach san staid sin – is e an làr aig neoni a tha ga dhèanamh na fhìor *roghainn* seach dleastanas. 

## Eisimpleir obrach

Pìleat seirbheis didseatach le `project_value = £1,000,000`, àrdachadh a dh’fhaodadh a bhith gu 1.5× no tuiteam gu 0.5× ron ath phuing-cho-dhùnaidh, ìre gun chunnart 8%, agus cosgais leudachaidh £600,000:

```
p = (1.08 − 0.5) / (1.5 − 0.5) = 0.58

payoff_up   = max(1,000,000 × 1.5 − 600,000, 0) =  900,000
payoff_down = max(1,000,000 × 0.5 − 600,000, 0) = max(−100,000, 0) = 0

Tha an làr cudromach: cha dèanamaid an roghainn a chleachdadh ma tha am
margadh a’ fàiligeadh — tha cosgais leudachaidh £600,000 nas àirde na na
£500,000 a bhiodh am pròiseact airidh air san staid sìos.

option_value = (0.58 × 900,000 + 0.42 × 0) / 1.08
             = 522,000 / 1.08
             ≈ £483,333.33
```

A’ cur luach na roghainn ri bunait NPV statach de £200,000: NPV leudaichte = 200,000 + 483,333.33 ≈ **£683,333.33**. Dh’fhàgadh aithris air an NPV statach £200,000 leis fhèin, às aonais luach na roghainn seo, fìor luach a’ phròiseict ann an ìrean nas lugha na an dàrna leth.

## Ceangal ri einnseanaireachd bathar-bog

Is e seo an dreach foirmeil de “cuir dreach as lugha a-mach a-nis, cùm an roghainn tasgadh a bharrachd ma thèid e air adhart” – gu dìreach buntainneach do chur-a-mach toraidh slàinte didseatach ann an ìrean, co-shìnte gu structarail ri frèam sreath-fo-mhì-chinnt aig [cosgais dàil](../cosgais-dàil/) agus [WSJF/CD3](../wsjf-agus-cd3/), agus co-phàirteach ri [luach ris a bheil dùil de fhiosrachadh foirfe](../luach-ris-a-bheil-dùil-de-fhiosrachadh-foirfe/) agus [luach ris a bheil dùil de dh’fhiosrachadh sampaill](../luach-ris-a-bheil-dùil-de-dh-fhiosrachadh-sampaill/) – bidh na trì a’ prìseadh sùbailteachd no fiosrachadh fo mhì-chinnt, o thaobhan eadar-dhealaichte.

## Cunnartan

- **A’ gabhail prìsidh riosg-neodrach às aonais an tuigse mu mhaoin malairteach air a bheil e an urra**: bidh modailean roghainnean fìor a’ gabhail coltachd riosg-neodrach bho phrìseadh roghainn ionmhais, a tha a’ gabhail ris gu bheil an luach bunaiteach na mhaoin *malairteach* – airson pròiseact fìor neo-mhalairteach is goireasachd mhodail a th’ ann, chan e fìrinn mhargaidh litireil.
- **A’ làimhseachadh `up_factor`/`down_factor` mar pharamadairean shaor**: tha na in-chuir suas/sìos binomial fhèin nan tuairmsean a dh’fheumas fìreanachadh, chan e paramadairean shaor air an taghadh gus freagairt a tha thu ag iarraidh a thoirt gu buil.
- **Aithris luach na roghainn a-mhàin**: tha luach roghainnean fìor *ìmpidh* ri NPV statach pròiseict air leth – mearachd cumanta is e aithris luach na roghainn a-mhàin agus am bunait a leigeil às, a bhios a’ cus-mheudachadh na cùise ma tha an NPV statach àicheil agus a’ ìsleachadh (mar san eisimpleir gu h-àrd) nuair a thèid an NPV statach fhàgail a-mach gu tur.

## Stòran

- Cox JC, Ross SA, Rubinstein M. "Option pricing: a simplified approach." J Financ Econ. 1979;7(3):229-63.
- Trigeorgis L. *Real Options: Managerial Flexibility and Strategy in Resource Allocation*. MIT Press. 1996.
- Driffield T, Smith PC. "A real options approach to watchful waiting: theory and an illustration." Med Decis Making. 2007;27(2):178-88 — ties real options directly to a health-economics decision context. <https://pubmed.ncbi.nlm.nih.gov/17395932/>
