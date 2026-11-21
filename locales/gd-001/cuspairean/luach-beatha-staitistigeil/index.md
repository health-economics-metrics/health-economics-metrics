# Luach beatha staitistigeil (VSL)

Is e luach beatha staitistigeil (VSL) – ris an canar “luach bàis air a chasg” (VPF) ann an cleachdadh na RA – an t-suim a tha *sluagh* deònach pàigheadh còmhla gus cunnart aon bhàis staitistigeil a lùghdachadh, a thig bho sgrùdaidhean malairt cunnart-pàighidh (dè an tuarastal a bharrachd a dh’iarras luchd-obrach airson obraichean nas cunnartaiche) agus sgrùdaidhean roghainn ainmichte. Chan e prìs beatha neach sònraichte a th’ ann; is e togail cunnairt sluaigh a th’ ann, agus feumaidh einnsear bathar-bog a tha a’ togail shiostaman a lùghdaicheas cunnart – algairim triage, cuir-a-mach carbadan-eiridinn, sgrùdadh sàbhailteachd – fios a bhith aige gu bheil e a’ tighinn à traidisean teòiridheach eadar-dhealaichte bho [stairsnich deònachd pàighidh](../stairsnich-deònachd-pàighidh/).

## Carson a tha e cudromach

Is e VSL/VPF an inneal àbhaisteach airson airgead a chur air lùghdachaidhean cunnairt bàis ann an anailis cosgais-buannachd riaghlaidh: bidh sàbhailteachd còmhdhail, riaghladh àrainneachd, agus cuid de eadar-theachdan slàinte poblach uile a’ ruith an cùisean-gnìomhachais troimhe. Bidh Green Book Ionmhas EM a’ foillseachadh figear VPF a thàinig bho fhianais margaidh-obrach is sgrùdaidh na RA, agus bidh an Roinn Còmhdhail ga chleachdadh gu dìreach ann am measadh sàbhailteachd rathaidean. Is e traidisean luachaidh dha-rìribh eadar-dhealaichte a tha seo bho mhodh QALY × stairsneach deònachd pàighidh: bidh an dòigh stairsnich a’ cur luach air buannachdan slàinte an aghaidh na tha *buidseat* slàinte a’ toirt a-mach aig an iomall an-dràsta, ach bidh VSL/VPF a’ cur luach air lùghdachadh cunnairt an aghaidh na sheallas daoine ann am margaidh-obrach no sgrùdadh gum pàigheadh iad air a shon. Chan eil an dà fhrèam an-còmhnaidh co-chòrdail, agus is e mearachd anailis chumanta a bhith gan cleachdadh le chèile san aon chùis gun aithneachadh sin.

## A’ mhatamataig

```
Bàsan air an seachnadh = sluagh × lùghdachadh_cunnairt_gach_neach
  (is e coltachd a th’ ann an lùghdachadh_cunnairt_gach_neach, m.e. 0.000001 = lùghdachadh
   1-ann-am-millean ann an cunnart bàis bliadhnail)

Buannachd bàis ann an airgead = bàsan_air_an_seachnadh × luach_bàis_air_a_chasg
```

## Eisimpleir obrach

Tha sgìre de 800,000 neach a’ faighinn buannachd à eadar-theachd cuir-a-mach/triage didseatach airson sàbhailteachd rathaidean a lùghdaicheas cunnart bàis bliadhnail gach neach le 1 ann am millean (0.000001):

```
Bàsan air an seachnadh = 800,000 × 0.000001 = 0.8
```

A’ cleachdadh Luach Bàis air a Chasg na RA, £2,180,000 (figear Ionmhas EM/DfT, prìsean 2023/24 – bidh an Green Book ga ùrachadh gach bliadhna, ath-dhearbh mus luaidh thu e ann an anailis bheò):

```
Buannachd bàis ann an airgead = 0.8 × £2,180,000 = £1,744,000/bliadhna
```

Dìreach fo £1.75 millean gach bliadhna de bhuannachd bàis ann an airgead, bho lùghdachadh cunnairt nach mothaicheadh a’ mhòr-chuid den t-sluagh fa leth.

## Ceangal ri einnseanaireachd bathar-bog

Tha sgiobaidhean bathar-bog èiginneach do shàbhailteachd – firmware uidheaman meidigeach, bathar-bog charbadan fèin-obrachail, siostaman smachd gnìomhachais – an aghaidh dìreach an duilgheadas prìsidh seo nuair a thogas iad a’ chùis cosgais-buannachd airson tasgadh sàbhailteachd: ciamar a chuireas tu prìs air “casg aon fhàilligeadh tubaisteach” nuair a tha am fàilligeadh tearc, dona, agus sgaoilte thar sluagh mòr de luchd-cleachdaidh? Tha VSL/VPF na eisimpleir fìor, deicheadan a dh’aois, a tha air a chlàradh gu poblach, de bhith a’ cur àireamh air lùghdachadh cunnairt tearc, dona aig ìre sluaigh – an aon chumadh argamaid ri bhith a’ prìsealachadh tasgadh SRE an aghaidh briseadh-sìos tubaisteach tearc, ach le toradh bàis an àite toradh ùine-sìos.

## Cunnartan

- **A bhith a’ làimhseachadh VSL mar “phrìs beatha aithnichte”**: chan e. Is e togail staitistigeil sluaigh a th’ ann an VSL/VPF a thàinig bho mhalairt lùghdachadh cunnairt thar mòran dhaoine, chan e luachadh air beatha no bàs neach sònraichte.
- **Cunntadh dùbailte an aghaidh àireamhachadh buannachd airgid lom stèidhichte air QALY**: ma chleachdas tu figear VSL/VPF agus àireamhachadh QALY × stairsneach air leth san aon chùis, gun an rèiteachadh, bidh thu gu sàmhach a’ cunntadh luach nam bàsan air an seachnadh a dhà uair. Tagh aon fhrèam airson cùis sònraichte.
- **Tomhas VSL a ghluasad thar cho-theacsan gun atharrachadh**: tha VSL a thàinig bho mhargadh-obrach dùthaich amháin, no bho dhàta cunnart-pàighidh aois-obrach, air a chur an sàs gun atharrachadh ann an co-theacsa teachd-a-steach eadar-dhealaichte no sluagh eadar-dhealaichte (clann, luchd-cluaidh-dheth), na dheasbad dòigh-obrach fada, dha-rìribh connspaideach – chan e fear a chaidh fhuasgladh.

## Stòran

- HM Treasury, The Green Book: Central Government Guidance on Appraisal and Evaluation — Value of a Prevented Fatality supplementary guidance (2023/24 prices; Green Book values are updated annually). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- US EPA, "Mortality Risk Valuation" (for the US VSL tradition, cited for contrast with the UK VPF figure above). <https://www.epa.gov/environmental-economics/mortality-risk-valuation>
- Viscusi WK, Aldy JE. "The Value of a Statistical Life: A Critical Review of Market Estimates Throughout the World." J Risk Uncertain. 2003;27(1):5-76.
