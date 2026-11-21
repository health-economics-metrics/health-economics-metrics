# Togail an aghaidh ceannach

Is e togail an aghaidh ceannach coimeas structaraichte eadar leasachadh gnàthaichte agus togail malairteach, a rèir [TCO](../cosgais-iomlan-seilbh/) lasaichte, ùine lìbhrigidh, agus cunnart. Tha na ro-bheachdan empirigeach aon-taobhach: **bidh fìor chosgaisean togail mar as trice 30–40% os cionn ro-mheasaidhean**, bidh fuasglaidhean ceannaichte a’ cleachdadh 40–60% nas luaithe, agus lorg rannsachadh GenAI MIT 2025 gun do shoirbhich le innealan AI ceannaichte ~67% den ùine fhad ’s a shoirbhich le togail a-staigh mu thrian cho tric.

## Carson a tha e cudromach

Bidh siostaman slàinte a’ cur aghaidh air a’ cho-dhùnadh seo gu cunbhalach (“dèan an aghaidh coimiseanadh” ann an cainnt an NHS), agus bidh buidhnean einnseanaireachd ga dhèanamh ceàrr gu rianail san taobh togail – oir bidh luchd-togail a’ meas an togail, chan e an [TCO](../cosgais-iomlan-seilbh/), agus oir tha togail nas spòrsail. Bidh am frèam eaconamach a’ sparradh coimeas onarach: an dà roghainn air am prìsealachadh thar an aon chrìoch-ùine, an dà chuid air an atharrachadh airson cunnart, agus an *eadar-dhealachadh ùine air a phrìsealachadh mar [chosgais dàil](../cosgais-dàil/)* – an teirm as trice a cho-dhùnas am freagairt agus as trice a thèid fhàgail a-mach.

## A’ mhatamataig

```
Coimeas thairis air an aon chrìoch-ùine 3–5 bliadhna, lasaichte:

NPV_roghainn = PV(buannachdan, air an gluasad le ùine-gu-luach) − PV(TCO)

Atharrachaidhean cunnairt (pàtran “claonadh dòchais” Green Book):
  cosgais togail × 1.3–1.4        (ro-bheachd thairis)
  ùine-gu-luach togail + 40–60%   (ro-bheachd dàil cleachdaidh)
  ceannach: cuir ris sgrùdadh fìrinn aonachaidh agus cosgaisean fàgail

Dè a cho-dhùnas, san òrdugh as trice:
  1. eadar-dhealachadh — an e do thoradh a th’ ann an comas seo, no pìoban?
  2. ùine-gu-luach × CoD
  3. TCO air atharrachadh airson cunnart
```

## Eisimpleir obrach

Feumaidh urras siostam e-cead. Ceannach: SaaS £150k/bliadhna, beò ann an 3 mìosan. Togail: ro-mheasta £600k + £120k/bliadhna cumail suas, beò ann an 12 mìosan.

```
Togail air atharrachadh airson cunnart: 600k × 1.35 = £810k; ùine-gu-luach ≈ 18 mìosan
TCO 5-bliadhna:  ceannach = 150k × 5 = £750k
                 togail = 810k + 120k × 5 = £1,410k
Teirm dàil: bidh didseatachadh cead a’ sàbhaladh £25k/mìos; ruigidh togail 15 mìosan
            nas anmoiche → CoD = 15 × 25k = £375k

Coimeas èifeachdach: £750k an aghaidh £1,785k – bidh ceannach a’ buannachadh le ~£1M, agus is e
an teirm singilte as motha às dèidh an togail fhèin cosgais na dàlach nach do chuir duine prìs oirre.
```

Tha togail fhathast ceart nuair a tha an comas eadar-dhealaichte (algairim bunaiteach do thoraidh), nuair nach coinnich reiceadair ri cuingead cruaidh (sàbhailteachd chlionaigeach, àite-còmhnaidh dàta), no nuair a tha cunnart glasaidh-a-steach reiceadair dona agus air a phrìsealachadh.

## Ceangal ri einnseanaireachd bathar-bog

Tha an smachd eaconamas slàinte a ghluaiseas trì-fillte: **atharrachadh cunnairt stèidhichte air ro-bheachdan** (is e àrdachadh thairis 30–40% claonadh dòchais Green Book bathar-bog – cuir an sàs e gu meacanaigeach, argamaid airson eisgeachdan seach bho eisgeachdan); **onarachd coimeas** (chan e “dad” an roghainn eile seach togail, ach an ceannach as fheàrr ri fhaighinn – faic [cosgais cothrom](../cosgais-cothrom/)); agus **deuchainn co-ionannachd ro choimeas cosgais** (ma choinnicheas ceannach agus togail dha-rìribh ris an aon sònrachadh, is e [anailis lùghdachadh cosgais](../anailis-lùghdachadh-cosgais/) a tha seo agus buannaichidh am fear saor; mura h-eil, feumar an eadar-dhealachadh builean a luachadh, gun a bhith ga thagradh).

## Cunnartan

- **A’ coimeas prìs liosta reiceadair ri ro-mheasaidhean togail gun atharrachadh cunnairt** – dà-fhlaitheas a dh’ionnsaigh togail.
- **Saothair a-staigh air a phrìsealachadh aig neoni** (“tha an sgioba an seo mu thràth”).
- **Glasadh-a-steach gun phrìs san dà thaobh**: cosgaisean fàgail reiceadair, ach cuideachd bus-factor an togail agus fad cumail suas.
- **Togail air a stiùireadh le dearbh-aithne**: “tha seo bunaiteach dhuinn” air a thagradh airson pìoban – deuchainn eadar-dhealachaidh an aghaidh am mothaicheadh luchd-ceannach.

## Stòran

- Build-vs-buy TCO analyses. <https://neontri.com/blog/build-vs-buy-software/>
- MIT GenAI divide findings (buy-vs-build success rates). <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- HM Treasury Green Book (optimism bias). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
