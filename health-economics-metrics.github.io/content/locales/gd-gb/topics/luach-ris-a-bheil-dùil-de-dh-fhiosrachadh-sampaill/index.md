# Luach ris a bheil dùil de dh’fhiosrachadh sampaill (EVSI)

Is e EVSI luach *sgrùdaidh shònraichte a thathar a’ moladh* – dealbhadh sònraichte, meud sampaill sònraichte – mus tèid a ruith, an aghaidh [EVPI](../luach-ris-a-bheil-dùil-de-fhiosrachadh-foirfe/), a bhios a’ cur prìs air a h-uile mì-chinnt a thoirt air falbh gu tur. Bidh EVSI a’ freagairt na ceiste a bhios fìor mhaoineachair rannsachaidh a’ cur aghaidh air: “a bheil *an* deuchainn seo, aig *a’ mheud* seo, airidh air a cosgais?”

## Carson a tha e cudromach

Bidh EVPI ag innse dhut a’ mhullach air na b’ fhiach rannsachadh sam bith; chan innis e a-chaoidh dhut a bheil an deuchainn air do bheulaibh a’ ruighinn na h-ìre. Feumaidh maoineachair rannsachaidh nàiseanta a tha a’ taghadh eadar pìleat 50-euslainteach agus deuchainn chinnteach 500-euslainteach fios a bhith aige dè an luach a th’ aig *gach dealbhadh sònraichte*, chan e dìreach luach an uile-fhios. Bidh EVSI a’ solarachadh na h-àireimh sin, agus leis gu bheil e a’ sgèileadh le meud sampaill, leigidh e le maoineachair am meud sampaill a lorg a mheudaicheas buannachd ghlan ris a bheil dùil seach tomhais.

Is e sin cuideachd carson a tha EVSI an-còmhnaidh nas lugha na no co-ionann ri EVPI: chan urrainn do shampall crìochnaichte ach mì-chinnt fhuasgladh gu pàirteach, agus tha sgrùdadh a tha coltach gu bheil e luach barrachd na fiosrachadh foirfe na chomharra gu bheil an àireamhachadh ceàrr, chan e fìor thoradh.

## A’ mhatamataig

```
Coitcheann:
EVSI(n) = E_data[ max_d E_θ|data[NB(d,θ)] ]  −  max_d E_θ[NB(d,θ)]
  (dùil neadaichte: an taobh a-muigh thairis air toraidhean sgrùdaidh comasach, an taobh a-staigh
  thairis air a’ chreideas posterior mu θ às dèidh an toradh sin fhaicinn — mar as trice air a
  thomhas le Monte Carlo neadaichte / ùrachadh Bayesian thairis air tarraingean anailis
  mothachalachd choltais)

Fìor-fhoirm dùinte coitcheann àbhaisteach (aon pharamadair mì-chinnteach, modail conjugate
normal-normal — ath-ghoirid àbhaisteach, chan eil e mionaideach airson a h-uile modail):
EVSI(n) = EVPI × n / (n + n0)

n  = meud sampaill an sgrùdaidh a thathar a’ moladh
n0 = “meud sampaill co-ionann ris a’ phrìor” — meud sampaill ficseanail a bhiodh a’ giùlan
     an aon fhiosrachaidh ris a’ phrìor làithreach, a’ tighinn bho cho-mheas caochlaideachd
     dàta ri caochlaideachd prìor
ENBS(n) = EVSI(n) − Cosgais(n)
EVSI sluaigh = EVSI gach co-dhùnaidh × co-dhùnaidhean air a bheil buaidh
```

Tha an cruth coitcheann na dhùil neadaichte oir tha toradh san àm ri teachd sgrùdaidh fhèin mì-chinnteach: feumaidh tu cuibheasachadh thar gach seata dàta a dh’fhaodadh an sgrùdadh a thoirt gu bith, agus airson gach fear an co-dhùnadh as fheàrr ath-àireamhachadh a’ toirt creideas ùraichte (posterior). Bidh an fìor-fhoirm dhùinte àbhaisteach a’ malairt na cosgais coimpiutaireachd sin airson aon cho-mheas, dligheach nuair a tha am paramadair mì-chinnteach agus an dàta (timcheall) àbhaisteach agus conjugate – goireas, chan e lagh uile-choitcheann. Is e Monte Carlo neadaichte slàn an dòigh choitcheann nuair nach eil a’ bharail sin a’ cumail. Faic [anailis mothachalachd choltais](../anailis-mothachalachd-coltachdail/) airson tarraingean PSA a bhios EVSI mar as trice air a thomhas bhuapa.

## Eisimpleir obrach

A’ togail air an eisimpleir obrach [EVPI](../luach-ris-a-bheil-dùil-de-fhiosrachadh-foirfe/) – a’ sgaoileadh neach-cuideachaidh sgrìobhaidh AI do 5,000 clionaigeach, far an deach EVPI a lorg aig £1.2M – cuir an cèill an EVPI ceudna an seo ann am notaichean slàna: **EVPI = £1,200,000**.

Tha sgrùdadh pìleat de 50 clionaigeach air a mholadh. Bho cho-mheas caochlaideachd creideas prìor ri mionaideachd tomhais a’ phìleat, tha meud sampaill co-ionann ris a’ phrìor `n0 = 75`:

```
EVSI(50) = 1,200,000 × 50 / (50 + 75)
         = 1,200,000 × 50 / 125
         = 1,200,000 × 0.4
         = £480,000
```

Tha am pìleat a’ cosg £120,000:

```
ENBS = EVSI − Cosgais = 480,000 − 120,000 = £360,000
```

ENBS gu soilleir deimhinneach: maoinich am pìleat. Ma bhios an aon cho-dhùnadh solair a’ tachairt thar 3 urrasan roinneil coltach, bidh luach a’ phìleat a’ sgèileadh:

```
EVSI sluaigh = 480,000 × 3 = £1,440,000
```

## Ceangal ri einnseanaireachd bathar-bog

Is e EVSI eaconamas a bhith a’ taghadh *cho mòr* ’s bu chòir pìleat no deuchainn A/B a bhith, chan e dìreach am bu chòir fear a ruith idir:

- **Co-dhùnadh meud-sampaill-mar-thasgadh.** Tha beta 50-neach-cleachdaidh agus sgaoileadh ìre 5,000-neach-cleachdaidh nan “sgrùdaidhean” eadar-dhealaichte le EVSIan agus cosgaisean eadar-dhealaichte – leigidh EVSI dhut an coimeas air an aon bhunait an àite a dhol gu bunaiteach “tha barrachd dàta an-còmhnaidh nas fheàrr.”
- **Is e ENBS, chan e EVSI a-mhàin, deuchainn coimiseanaidh.** Tha sgrùdadh le EVSI àrd ach cosgais a dh’itheas a’ mhòr-chuid dheth na mholadh lag; is e an riaghailt co-dhùnaidh buannachd ghlan sampaill ris a bheil dùil, dìreach mar a bhios cùis-ghnìomhachais a’ cur buannachd an aghaidh cosgais seach a bhith ag aithris buannachd a-mhàin.
- **Tha buannachdan lùghdaichte follaiseach.** Leis gu bheil EVSI(n) ag èirigh le `n/(n+n0)`, chan fhaod dùblachadh meud pìleat a luach a dhùblachadh gu bràth – dreach foirmeil den chuspair einnseanaireachd gu bheil luach fiosrachaidh iomaill lùghdaichte aig deuchainn nas motha.

## Cunnartan

- **A’ cur an sàs na fìor-fhoirm àbhaisteach taobh a-muigh a barailean.** Chan eil i a’ cumail ach airson mì-chinnt aon-pharamadair coltach ri conjugate; feumaidh modal co-dhùnaidh gu fìrinneach neo-loidhneach no ioma-pharamadair Monte Carlo neadaichte slàn, chan e an ath-ghoirid seo.
- **A’ coimeas EVSI ri cosgais airgid a-mhàin.** Feumar EVSI a thomhas an aghaidh *làn* chosgais an sgrùdaidh, a’ gabhail a-steach a chosgais dàil co-dhùnaidh fhèin – faic [cosgais dàil](../cosgais-dàil/) – chan e dìreach cunntas an sgrùdaidh.
- **A’ làimhseachadh EVSI > EVPI mar fhìor lorg.** Chan urrainn EVSI a dhol thairis air EVPI a rèir dealbhaidh; is e buga modaileadh, chan e lorg, àireamhachadh a thoirt seo.

## Stòran

- Ades AE, Lu G, Claxton K. "Expected value of sample information calculations in medical decision modeling." Medical Decision Making 2004;24(2):207-27.
- Willan AR, Pinto EM. "The value of information and optimal clinical trial design." Statistics in Medicine 2005;24(12):1791-806.
- Strong M, Oakley JE. "When is a model-based value of information analysis feasible?" Medical Decision Making 2014.
