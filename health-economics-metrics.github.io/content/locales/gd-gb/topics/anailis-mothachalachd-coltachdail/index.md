# Anailis mothachalachd coltachdail (PSA)

Bidh PSA a’ sònrachadh cuairteachadh coltachd do gach paramadair mì-chinnteach, gan sampaladh uile aig an aon àm mìltean de thursan (Monte Carlo), agus ag aithris air *coltachd* gur e roghainn a’ chuid as fheàrr – an àite aon tuairmse puing.

## Carson a tha e cudromach

Tha reul-chùis NICE *ag iarraidh* PSA. Bidh anailis dhearbhach a’ freagairt “dè ma tha aon in-chur ceàrr?”; bidh PSA a’ freagairt “leis a h-uile nach eil fios againn aig an aon àm, dè cho coltach ’s a tha e gu bheil sinn a’ dèanamh an co-dhùnadh ceart?” Is e an toradh sònraichte aige, an **lùb gabhaltachd cosg-èifeachdais (CEAC)**, a bhios a’ cruthachadh coltachd gu bheil roghainn cosg-èifeachdach an aghaidh stairsneach deònachd pàighidh – a’ tionndadh “tha an ICER £24,000/QALY” gu “tha 78% de chothrom gur e seo an roghainn cheart aig £30,000/QALY.”

## A’ mhatamataig

```
Airson gach tarraing de N (N ≈ 10,000):
  sampaill gach paramadair θ às a chuairteachadh
    (cosgaisean ~ Gamma, coltachdan ~ Beta, feumalachdan ~ Beta, buaidhean ~ Normal/logNormal)
  cunnt NMB_j(θ) = λ × Effect_j(θ) − Cost_j(θ) airson gach roghainn j

CEAC_j(λ) = cuibhreann nan tarraingean anns a bheil an NMB as àirde aig roghainn j aig an stairsneach λ
```

Faic [buannachd airgeadail lom](../buannachd-airgid-lom/) airson NMB agus [stairsnichean deònachd pàighidh](../stairsnich-deònachd-pàighidh/) airson λ.

## Eisimpleir obrach

Cùis-ghnìomhachais gluasad àrd-ùrlair. Trì in-chuir mì-chinnteach:

```
Cosgais gluasaid       ~ Gamma,   cuibheasach £800k, sd £200k
Buannachd bhliadhnail  ~ Normal,  cuibheasach £350k, sd £150k
Fad na buannachd       ~ Uniform, 3–6 bliadhna
```

Airson gach tarraing de 10,000 cunnt buannachd lom = fad × bliadhnail − cosgais (lasachadh air fhàgail a-mach airson soilleireachd). Toraidhean sampaill:

```
Buannachd lom chuibheasach:  £775k
Coltachd lom > 0:            0.86
5mh–95mh ceudad:            −£180k … +£1.9M
```

Thuirt an tuairmse puing “gu follaiseach tha”. Tha an PSA ag ràdh “86% tha, le earball fìor far a bheil sinn a’ call £180k+” – a’ chùis a dh’fheumas fìor shealbhadair pasgain, agus bidh e a’ prìseadh na cùise airson spike lorg a ruith an toiseach (faic [EVPI](../luach-ris-a-bheil-dùil-de-fhiosrachadh-foirfe/)).

## Ceangal ri einnseanaireachd bathar-bog

Tha einnseanairean mu thràth a’ cur earbsa ann am Monte Carlo airson ro-aithris lìbhrigidh (bidh sampaladh tron-chur a’ dèanamh nas fheàrr na tuairmsean puing). Leudaich an aon uidheamachd gu airgead: cuairteachaidhean air gabhail ris, ùine air a shàbhaladh, agus tuarastal, agus aithris “coltachd gu bheil an tasgadh àrd-ùrlair seo lom-adhartach” an àite ROI le mionaideachd bhrèige. Tha lùb CEAC-stoidhle – coltachd a bhith an roghainn as fheàrr mar fheart air mar a luachaicheas an eagrachadh uair an einnseanair – na artifact gu fìrinneach nas fheàrr airson comataidh maoineachaidh na àireamh sam bith.

## Cunnartan

- **Cuairteachaidhean sgudail**: tha PSA le sgaoilidhean àbhaisteach air an dèanamh suas na anailis dhearbhach ann an còta obair-lann. Stèidhich sgaoilidhean air dàta no air tarraing-a-mach eòlaichean structarail.
- **A’ dearmad co-cheangail** eadar paramadairean (mar as trice tha gabhail ri àrd co-cheangailte ri ùine air a shàbhaladh àrd); bidh sampaladh neo-eisimeileach a’ ìsleachadh cunnart earbaill.
- **Aithris a’ chuibheasaich a-mhàin** den insimeileadh – is e am puing gu lèir an cuairteachadh agus coltachd co-dhùnaidh.

## Stòran

- Fenwick E, Claxton K, Sculpher M. "Representing uncertainty: the role of cost-effectiveness acceptability curves." Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11316594/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
