# Anailis mothachalachd

Bidh anailis mothachalachd cinntinneach (DSA) ag atharrachadh aon bharail aig an aon àm thar raon reusanta gus faicinn a bheil an co-dhùnadh a’ seasamh. Is e an t-uidheamachadh lèirsinneach àbhaisteach an diagram tornado: paramadairean air an rangachadh a rèir cho mòr ’s a bhios iad a’ luasgadh an toraidh.

## Carson a tha e cudromach

Tha a h-uile modal eaconamach air a thogail air tuairmsean – ùine air a shàbhaladh, gabhail ris, cosgaisean aonad. Chan eil measadh teicneòlais slàinte a’ gabhail ri tuairmse puing (“is e 340% an ROI”) às aonais fianais gu bheil an co-dhùnadh làidir an aghaidh eas-aonta reusanta mu na cuir-a-steach. Innsidh diagram tornado don neach-co-dhùnaidh *dè a’ bharail a bu chòir ceasnachadh*: mura obraich an cùis ach nuair a tha am paramadair as connspaidiche aig a cheann dòchasach, chì a h-uile duine sin sa bhad.

Is e seo an cleachdadh as so-ghiùlain bho eaconamas slàinte gu cùisean-gnìomhachais bathar-bog.

## A’ mhatamataig

Airson gach paramadair p le raon reusanta [p_low, p_high]:

```
Result_low  = model(p = p_low,  all others at base case)
Result_high = model(p = p_high, all others at base case)
Swing(p)    = |Result_high − Result_low|
```

Rangaich paramadairean a rèir luasgan; cuir bàraichean còmhnard timcheall air toradh a’ chùis-bhunaiteach. Atharrachaidhean: DSA dà-shligheach (atharraich dà pharamadair air grid), anailis stairsnich (lorg luach a’ pharamadair far a bheil an co-dhùnadh a’ tionndadh).

## Eisimpleir obrach

Neach-cuideachaidh còdaidh AI airson 200 neach-leasachaidh. Cùis-bhunaiteach: ceadachas £39/neach-leasachaidh/mìos; 30 mion/neach-leasachaidh/latha air a shàbhaladh; cosgais làn £60/uair; 220 latha obrach.

```
Base-case annual benefit = 200 × 0.5h × 220 × £60 = £1,320,000
Annual cost              = 200 × £39 × 12         = £93,600
Base-case net            = £1,226,400
```

Tornado (aon pharamadair aig an aon àm):

```
Time saved 0.1–1.0 h/day: net = £170,400 … £2,546,400   (swing £2.38M) ← dominates
Loaded cost £40–£80/h:    net = £786,400 … £1,666,400   (swing £0.88M)
Working days 200–240:     net = £1,106,400 … £1,346,400 (swing £0.24M)
Licence £30–£50/mo:       net = £1,248,000 … £1,200,000 (swing £48k)
```

Anailis stairsnich: bidh buannachd lom aig neoni aig timcheall air **2.1 mionaid/latha** air a shàbhaladh. Chan eil an co-dhùnadh mothachail air prìs ceadachais agus tha e an crochadh gu tur air tuairmse na h-ùine a chaidh a shàbhaladh – mar sin tomhais sin, chan e an còrr. (Agus cuimhnich gur e comas, chan e airgead, an toradh – faic [sàbhalaidhean a’ leigeil a-mach airgead an aghaidh nach eil](../sàbhalaidhean-a-leigeil-a-mach-airgead-an-aghaidh-nach-eil/).)

## Ceangal ri einnseanaireachd bathar-bog

Bidh einnseanairean mu thràth a’ dèanamh seo mar instinct “dè ma tha sinn ceàrr mu X?” – bidh DSA dìreach ga dhèanamh rianail agus follaiseach. Cuir diagram tornado anns gach moladh uidheamachd, plana comais, agus anailis togail-an-aghaidh-ceannach. Tionndaidhidh e argamaidean mu cò aig a bheil faireachdainn ceart gu aonta mu dè am paramadair a thèid a thomhas – gu tric tro phìleat, aig a bheil luach fhèin a ghabhas prìsealachadh (faic [luach ris a bheil dùil de dh’fhiosrachadh foirfe](../luach-ris-a-bheil-dùil-de-fhiosrachadh-foirfe/)).

## Cunnartan

- **Raointean air an taghadh gus miadachadh**: ±10% timcheall gach cuir-a-steach ge bith dè cho mì-chinnteach ’s a tha e. Is airidh tuairmsean ùine air a shàbhaladh air ±80%; prìsean ceadachais ±10%.
- **Chan eil aon-aig-an-aon a’ glacadh eadar-obrachaidhean** – feumaidh paramadairean co-cheangailte (gabhail ris agus ùine air a shàbhaladh) anailis dà-shligheach no [anailis mothachalachd coltachd](../anailis-mothachalachd-coltachdail/) slàn.
- **Anailis a dhèanamh agus a leigeil seachad**: ma tha an tornado ag ràdh gu bheil an cùis an crochadh air aon àireamh bhog, is e tomhas an ath cheum, chan e soidhnigeadh.

## Stòran

- York Health Economics Consortium glossary: deterministic sensitivity analysis. <https://yhec.co.uk/glossary/deterministic-sensitivity-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
