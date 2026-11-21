# Cuibhreann a thathar a’ cur às leth a’ mhòr-shluaigh (PAF)

Is e PAF a’ cheart-cheàrnag de eallach galair no toraidh ann am mòr-shluagh a tha air a chur às leth nochdadh do fhactar cunnairt sònraichte – an cuibhreann a bhiodh a’ dol à bith nan toirteadh air falbh an nochdadh gu tur. Bidh e a’ tionndadh “tha am factar cunnairt seo a’ dùblachadh na h-oidhirp agad” gu àireamh aig ìre mòr-shluaigh as urrainn do choimiseanair planadh timcheall air: cia mheud cùis, agus cia mheud cosgais, as fhiach nochdadh sònraichte a leantainn.

## Carson a tha e cudromach

Thug Levin a-steach PAF ann an 1953 gus ceist chumhang, shoilleir a fhreagairt: mura robh duine a’ smocadh, cia mheud aillse sgamhain a dhol à bith? Tha an aon àireamhachadh a-nis a’ tomhas planadh casg nàiseanta anns a h-uile àite bho ro-innleachdan tombaca is reamhrachd gu rangachadh fhactaran cunnairt sgrùdadh Eallach Galair Cruinneil WHO, oir chan eil cunnart càirdeach leis fhèin ag innse dad mu bhuaidh – faodaidh fàctar cunnairt oidhirpean tachartais ainneamh a dhùblachadh agus eallach galair a’ mhòr-shluaigh a ghluasad cha mhòr gun dad, no oidhirpean tachartais cumanta àrdachadh ach beagan agus fhathast cuibhreann mòr de chùisean a mhìneachadh. Is e PAF a bhios a’ tionndadh “tha fàctar cunnairt X cunnartach” gu “bhiodh toirt air falbh fàctar cunnairt X a’ sheachnadh na h-uiread de chùisean gach bliadhna”, an àireamh a dh’fheumas cùis-gnìomhachais prògram casg. Faic [eaconamas casg](../eaconamas-casg/) airson dè a chosgas e gnìomhachadh air an àireamh sin.

## A’ mhatamataig

```
PAF = prevalence_exposed × (relative_risk − 1) / (1 + prevalence_exposed × (relative_risk − 1))

prevalence_exposed = cuibhreann a’ mhòr-shluaigh a tha fosgailte don fhactar cunnairt (0–1)
relative_risk      = cunnart an toraidh ann an daoine fosgailte an aghaidh daoine neo-fhosgailte (m.e. 2.5 = 2.5×)

Cùisean a thathar a’ cur às leth = total_cases × PAF
```

Bidh PAF ag èirigh le tricead nochdaidh agus cunnart càirdeach – faodaidh cunnart càirdeach meadhanach àrdaichte (can 1.5×) ceangailte ri nochdadh gu math cumanta PAF nas motha a thoirt gu buil na cunnart càirdeach drùidhteach (can 5×) ceangailte ri fear ainneamh. Is e sin an adhbhar gu bheil e ann mar àireamh air leth bho chunnart càirdeach.

## Eisimpleir obrach

Tha fàctar cunnairt an làthair ann an 30% de mhòr-shluagh (`prevalence_exposed = 0.3`) agus bidh e ag àrdachadh cunnart an toraidh 2.5-fhillte (`relative_risk = 2.5`):

```
PAF = 0.3 × (2.5 − 1) / (1 + 0.3 × (2.5 − 1))
    = 0.3 × 1.5 / (1 + 0.3 × 1.5)
    = 0.45 / 1.45
    ≈ 0.3103 (31.0%)

Le 1,000 cùisean/bliadhna sa mhòr-shluagh:
Cùisean a thathar a’ cur às leth = 1,000 × 0.3103 ≈ 310 cùisean/bliadhna
```

Tha dìreach fo thrian de dh’eallach bliadhnail an toraidh seo air a chur às leth an nochdaidh – bhiodh a thoirt air falbh gu tur (am mullach teòiridheach; chan eil eadar-theachd fìor a’ ruighinn 100%) a’ seachnadh timcheall air 310 den 1,000 cùis gach bliadhna.

## Ceangal ri einnseanaireachd bathar-bog

Is e PAF an dreach epidemiologach de “cia mheud de bholadh nan tachartasan againn a tha air a chur às leth an aon root cause seo?” – an aon seòrsa ceiste a bhios sgiobaidhean a’ faighneachd nuair a bhios iad a’ meudachadh seòrsa sònraichte de dheploy no eisimeileachd an aghaidh tachartasan cinneasachaidh iomlan, seach a bhith a’ làimhseachadh gach tachartas mar a bhith cho airidh air a chàradh san aon dòigh. Faodaidh roinn root-cause a tha an làthair ann am cuibhreann mòr de dheploys le cunnart càirdeach meadhanach de bhith ag adhbhrachadh tachartais a dhol thairis air roinn ainneamh le cunnart càirdeach àrd airson càite an cleachd thu oidhirp einnseanaireachd an toiseach – dìreach sealladh PAF, air eadar-theangachadh.

## Cunnartan

- **A’ cur PAFan ri chèile thar fhactaran cunnairt**: chan eil PAFan airson iomadh fàctar a bheir buaidh air an aon toradh a’ cur suas gu 100% – faodaidh iad a dhol thairis air gu h-iomlan, oir bidh fàctaran ag eadar-obrachadh agus a’ co-roinn slighean adhbharach. Làimhsich gach PAF mar “nan toirteadh am fàctar seo leis fhèin air falbh”, gu bràth mar earrann den chunnart iomlan.
- **A’ gluasad cunnart càirdeach thar mhòr-shluaigh**: bidh cunnart càirdeach air a mheasadh ann an aon mhòr-shluagh (tricead nochdaidh bunaiteach eadar-dhealaichte, confounders eadar-dhealaichte) a’ cunntadh PAF mì-chreidsinneach nuair a thathar ga chur an sàs ann an tricead nochdaidh mòr-shluaigh eile.
- **A’ measgachadh PAF le cunnart a thathar a’ cur às leth anns an fheadhainn fhosgailte**: tha PAF aig ìre mòr-shluaigh agus an urra ri tricead nochdaidh; tha cunnart a thathar a’ cur às leth anns an fheadhainn fhosgailte aig ìre dhaoine fa-leth agus chan eil. Bidh iad a’ freagairt cheistean eadar-dhealaichte – na luaidh fear gus am fear eile a fhreagairt.

## Stòran

- Levin ML. "The occurrence of lung cancer in man." Acta Unio Int Contra Cancrum. 1953;9(3):531-41.
- Rockhill B, Newman B, Weinberg C. "Use and misuse of population attributable fractions." Am J Public Health. 1998;88(1):15-9.
