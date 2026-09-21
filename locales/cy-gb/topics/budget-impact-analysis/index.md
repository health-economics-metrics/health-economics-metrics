# Dadansoddiad Effaith ar y Gyllideb (BIA)

Mae BIA yn amcangyfrif beth mae mabwysiadu ymyriad yn ei wneud i **gyllideb** talwr penodol dros y 1–5 mlynedd nesaf. Mae'n ateb cwestiwn *fforddiadwyedd*; mae cost-effeithiolrwydd yn ateb cwestiwn *gwerth*. Gall technoleg fod yn werth ardderchog ac eto'n anfforddiadwy — neu'n fforddiadwy ac o werth gwael. Mae gwerthusiadau trylwyr angen y ddau.

## Pam mae'n bwysig

Nid "beth yw'r ICER?" yw cwestiwn y cyfarwyddwr cyllid byth — "beth mae hyn yn ei wneud i gyllideb y flwyddyn nesaf?" yw'r cwestiwn hwnnw. Mae canllawiau arfer da ISPOR (safon y maes) yn nodi: persbectif y talwr ei hun, gorwel o 1–5 mlynedd, llifau arian blynyddol *heb eu disgowntio*, cromliniau derbyn realistig, ac ansicrwydd senario (nid tebygolyddol). Mae NICE yn ei gwneud yn ofynnol cael gwybodaeth am effaith ar y gyllideb ochr yn ochr â chost-effeithiolrwydd; mae cynnyrch ag effaith gyllidebol genedlaethol uwchlaw ~£20M/flwyddyn yn Lloegr yn sbarduno trafodaeth fasnachol ni waeth beth yw ei ICER.

## Y mathemateg

```
EG_blwyddyn_t = Cost_senario_gyda_newydd(t) − Cost_senario_gyfredol(t)

Cost_senario(t) = Σ dros grwpiau cleifion:
   poblogaeth gymwys(t) × derbyniad(t) × cost net fesul claf(t)

cost net fesul claf = cost yr ymyriad − cost gofal a ddadleolwyd + cost gofal a ysgogwyd
```

Y penderfyniadau modelu allweddol: twf y boblogaeth gymwys, y gromlin dderbyn (nid yw mabwysiadu byth yn digwydd ar unwaith), beth mae'r opsiwn newydd yn ei ddadleoli, ac unrhyw alw y mae'n ei *ysgogi* (mynediad haws → mwy o ddefnyddwyr).

## Enghraifft wedi'i gweithio

Mae talwr sy'n gyfrifol am 2 filiwn o bobl yn ystyried therapiwtig digidol am £300/claf/blwyddyn; mae 1.5% o'r aelodau'n gymwys (30,000); derbyniad 20% → 40% → 60% dros 3 blynedd; mae pob defnyddiwr yn dadleoli £120/blwyddyn o ofal arall.

```
Cost net fesul defnyddiwr = 300 − 120 = £180

Blwyddyn 1: 30,000 × 0.20 × 180 = £1.08M
Blwyddyn 2: 30,000 × 0.40 × 180 = £2.16M
Blwyddyn 3: 30,000 × 0.60 × 180 = £3.24M
```

Hyd yn oed os yw ICER y cynnyrch yn £8,000/QALY ardderchog, rhaid i'r talwr ddod o hyd i £3.24M o *arian newydd* erbyn blwyddyn 3 — mae'r £120 a ddadleolwyd wedi'i wasgaru'n denau ar draws llinellau cyllideb eraill ac ni chaiff ei ryddhau fel arian parod (gweler [rhyddhau arian parod vs peidio â rhyddhau arian parod](../cash-releasing-vs-non-cash-releasing/)). Dyma pam mae gwerth fesul uned a fforddiadwyedd yn rhwystrau ar wahân.

## Cysylltiad â pheirianneg meddalwedd

Mae BIA yn union yr elfen sy'n wynebu'r Prif Swyddog Cyllid ac sy'n cydategu hawliad ROI fesul sedd: "mae'n gost-effeithiol fesul datblygwr, ond a allwn ni fforddio cyflwyno hyn ledled y sefydliad y flwyddyn ariannol hon?" Modelwch haenau trwydded, cromlin fabwysiadu ar siâp S, gwariant offer a ddadleolwyd sydd ond yn rhyddhau arian parod pan fydd hen gontractau'n dod i ben mewn gwirionedd, a defnydd a ysgogwyd (CI rhatach → mwy o CI). Cyflwyno tabl effaith gyllidebol 3 blynedd ochr yn ochr â'r ROI yw'r hyn sy'n gwneud cynnig offer ar gyfer menter yn gredadwy i'r adran gyllid.

## Peryglon

- **Ffantasi derbyniad ar unwaith**: cyfrifo effaith blwyddyn 1 ar sail mabwysiadu cyflwr sefydlog.
- **Cyfrif cost a ddadleolwyd fel arian parod** pan fo'n gapasiti gwasgaredig.
- **Anwybyddu galw a ysgogwyd** — mae gwelliannau mynediad yn tyfu defnydd y boblogaeth gymwys.
- **Drysu gorwelion/disgowntio BIA a CEA**: mae BIA yn orwel byr, heb ei ddisgowntio, ac yn benodol i'r talwr yn ôl cynllun.

## Ffynonellau

- Sullivan SD, et al. Tasglu Arfer Da BIA ISPOR II. Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
- Arferion da ISPOR: dadansoddiad effaith ar y gyllideb. <https://www.ispor.org/heor-resources/good-practices/article/principles-of-good-practice-for-budget-impact-analysis-ii>
