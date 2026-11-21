# Luach ris a bheil dùil de fhiosrachadh foirfe (EVPI)

Is e EVPI an t-suim as motha a bu chòir do dh’neach-co-dhùnaidh pàigheadh gus mì-chinnt a thoirt air falbh mus co-dhùin e – prìs fhoirmeil “ruitheamaid sgrùdadh an toiseach.”

## Carson a tha e cudromach

Bidh siostaman slàinte an-còmhnaidh a’ cur aghaidh air an taghadh: gabh ris a-nis air fianais neo-fhoirfe, no maoinich barrachd rannsachaidh an toiseach. Bidh EVPI a’ cur àireamh air an dàrna roghainn. Ma tha EVPI £50,000 agus an deuchainn a thathar a’ moladh a’ cosg £2 mhillean, gabh ris a-nis. Ma tha EVPI £20 millean, tha an deuchainn na bargan. Bidh an aon cheist – “am bu chòir dhuinn seo a phìleatadh mus sgaoil sinn e?” – a’ nochdadh airson gach co-dhùnadh inneal iomairt, agus is gann gun cuir duine prìs air. Airson prìs a chur air an roghainn leudachadh pròiseact nas anmoiche, an àite an roghainn fiosrachadh a chruinneachadh an toiseach, faic [Luachadh Roghainnean Fìor](../luachadh-roghainnean-fìor/).

## A’ mhatamataig

Is e EVPI am beàrn eadar co-dhùnadh le ro-shealladh foirfe agus co-dhùnadh a-nis air ro-dhùilean:

```
EVPI = E_θ[ max_j NMB(j, θ) ]  −  max_j E_θ[ NMB(j, θ) ]

θ        = paramadairean mì-chinnteach (le an sgaoileadh co-ghabhalach)
NMB(j,θ) = buannachd airgid ghlan roghainn j a’ toirt θ
```

A’ chiad teirm: cuibheasachd pàigheadh an roghainn as fheàrr thar gach saoghal comasach (bidh thu an-còmhnaidh a’ taghadh ceart). An dàrna teirm: pàigheadh an aon roghainn as fheàrr air a’ chuibheasachd (feumaidh tu gealltainn a-nis). EVPI ≥ 0 an-còmhnaidh. Bidh EVPI sluaigh ag iomadachadh le àireamh nan co-dhùnaidhean air a bheil buaidh. Air a thomhas gu dìreach bho tharraingean [PSA](../anailis-mothachalachd-coltachdail/).

## Eisimpleir obrach

Sgaoil neach-cuideachaidh sgrìobhadh AI do 5,000 clionaigeach, no na dèan. Dà shaoghal:

```
Saoghal A (p = 0.6): bidh an neach-cuideachaidh a’ sàbhaladh 20 mion/latha → NMB sgaoilidh = +£8M
Saoghal B (p = 0.4): bidh an neach-cuideachaidh a’ sàbhaladh ~0 (suathadh sruth-obrach) → NMB sgaoilidh = −£3M
NMB “na sgaoil” = £0 anns an dà shaoghal.
```

Co-dhùin a-nis: E[NMB sgaoilidh] = 0.6 × 8 − 0.4 × 3 = **+£3.6M** → sgaoil.

Le fiosrachadh foirfe: ann an saoghal A tagh sgaoileadh (+£8M), ann an saoghal B tagh dad (£0). Luach ris a bheil dùil = 0.6 × 8 + 0.4 × 0 = **£4.8M**.

```
EVPI = 4.8M − 3.6M = £1.2M
```

Tha pìleat 3-mìosan teann a’ cosg £150,000 a dh’fhuasglas gu mòr dè an saoghal anns a bheil thu gu cinnteach airidh – agus chan eil pìleat sam bith a’ cosg barrachd air £1.2M, ge bith dè cho mionaideach.

## Ceangal ri einnseanaireachd bathar-bog

Is e EVPI eaconamas an spike, a’ phìleat, an deuchainn A/B, agus an dearbhadh-bun-bheachd. Bheir e dà riaghailt phractaigeach:

- **Chan fhiach pìleat a mhaoineachadh ach ma dh’fhaodadh an co-dhùnadh atharrachadh dha-rìribh.** Ma sgaoileadh tu ge bith dè toradh a’ phìleat, tha EVPI = 0 agus tha am pìleat na thaigh-cluiche.
- **Cuir crìoch air caitheamh pìleat aig EVPI.** Tha luach fiosrachaidh air a chuingeachadh le luach a’ cho-dhùnaidh a tha e a’ fiosrachadh.

Bidh EVPI pàirteach (EVPPI) a’ leudachadh seo gu paramadairean singilte: “dè an luach a th’ ann an àireamh na h-ùine air a shàbhaladh a dhaingneachadh gu sònraichte?” – a dh’innseas dhut dè bu chòir don phìleat a thomhas. Airson prìs a chur air sgrùdadh *sònraichte* a thathar a’ moladh seach a bhith a’ cur às do gach mì-chinnt, faic [EVSI](../luach-ris-a-bheil-dùil-de-dh-fhiosrachadh-sampaill/).

## Cunnartan

- **A’ ruith phìleatan gun riaghailt cho-dhùnaidh ceangailte** – tha fiosrachadh nach urrainn an taghadh atharrachadh gun luach a rèir mìneachaidh.
- **A’ dearmad cosgais dàil cruinneachadh fiosrachaidh**: tha pìleat 6-mìosan a’ cur dàil air 6 mìosan de bhuannachd ([cosgais dàil](../cosgais-dàil/)); luach glan a’ phìleat = EVPI air fhuasgladh − cosgais dàil − cosgais pìleat.
- **A’ làimhseachadh EVPI mar ro-innse.** Is e crìoch àrd air luach fiosrachaidh a th’ ann, chan e tuairmse air na bheir sgrùdadh sònraichte seachad.

## Stòran

- Claxton K. "Exploring uncertainty in cost-effectiveness analysis." PharmacoEconomics 2008. <https://pubmed.ncbi.nlm.nih.gov/18279550/>
- York Health Economics Consortium glossary: EVPI. <https://yhec.co.uk/glossary/expected-value-of-perfect-information-evpi/>
