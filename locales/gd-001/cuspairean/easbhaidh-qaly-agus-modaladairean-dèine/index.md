# Easbhaidh QALY agus modaladairean dèine

Bidh easbhaidh QALY a’ tomhas cia mheud slàinte san àm ri teachd a bhios galar a’ toirt bho euslaintich an coimeas ris a’ mhòr-shluagh choitcheann. Bidh NICE ga chleachdadh gus **modaladairean dèine** a chur an sàs: mar as tinne am mòr-shluagh, is ann as luachmhoire a bhios gach QALY buannaichte – suas gu 1.7× an stairsneach àbhaisteach.

## Carson a tha e cudromach

Bhon leabhar-làimhe NICE 2022, tha dèine na iomadachair shoilleir air luach buannachdan slàinte, a’ cur àite a’ phrìomh-chùmhnant deireadh-beatha. Bithear a’ breithneachadh teicneòlas airson staid dhuilich an aghaidh stairsneach èifeachdach suas gu ~£51,000/QALY an àite £30,000. Ma tha do bhathar-bog a’ frithealadh mòr-shluagh fo bhuaidh dhuilich (fàilligeadh cridhe adhartach, tinneas inntinn dona), faodaidh am modaladair dèine a bhith na eadar-dhealachadh eadar cùis eaconamach a ghabhas maoineachadh agus fear nach gabh – agus feumaidh tu matamataig easbhaidh gus a thagradh.

## A’ mhatamataig

Dà thomhas, air an cunntadh thar fad-beatha a tha air fhàgail le cùram àbhaisteach làithreach:

```
Easbhaidh iomlan      = QALYs_general_population − QALYs_with_condition
Easbhaidh co-rèireach = Easbhaidh iomlan / QALYs_general_population
```

Cuideaman NICE 2022 (bidh am fear aig a bheil an cuideam as àirde a’ buntainn):

```
Cuideam ×1.0: iomlan < 12 agus co-rèireach < 0.85
Cuideam ×1.2: iomlan ≥ 12 no co-rèireach ≥ 0.85
Cuideam ×1.7: iomlan ≥ 18 no co-rèireach ≥ 0.95
```

Bidh an cuideam ag iomadachadh ΔE (no co-ionann an stairsneach): bidh λ èifeachdach a’ tighinn gu £24k–£36k aig ×1.2 agus £34k–£51k aig ×1.7.

## Eisimpleir obrach

Euslaintich le staid ionnsaigheach, aois chuibheasach 60. Tha mòr-shluagh coitcheann aig 60 a’ sùileachadh 14.2 QALYan lasaichte; leis an staid fo chùram làithreach, 2.1.

```
Easbhaidh iomlan      = 14.2 − 2.1 = 12.1  (≥ 12 → airidh air ×1.2)
Easbhaidh co-rèireach = 12.1 / 14.2 = 0.852 (≥ 0.85 → cuideachd ×1.2)
```

Is e ICER d’ àrd-ùrlair sgrùdaidh £26,000/QALY – os cionn breithneachadh meadhan-phuing àbhaisteach £20k–£30k, air an iomall. Leis a’ chuideam ×1.2: ICER èifeachdach = 26,000 / 1.2 ≈ **£21,700/QALY** – gu soilleir a ghabhas maoineachadh. Ghluais an àireamhachadh easbhaidh an co-dhùnadh.

## Ceangal ri einnseanaireachd bathar-bog

Tha cuideachadh dèine na dhreach foirmeil de rud a bhios buidhnean einnseanaireachd a’ dèanamh air instinct: barrachd a chosg gach aonad leasachaidh air na siostaman as miosa. An pàtran a ghiùlainear – cunnt “easbhaidh SLO” gach seirbheis (cho fada fo a bhunait slàn ris an robh dùil a tha i ag obair, gu h-iomlan agus gu co-rèireach), agus cuideam luach leasachaidh a rèir sin. Tha seo a’ dearbhadh, le àireamhachd an àite argamaidean, carson a gheibh an siostam dìleabach a tha na theine barrachd tasgaidh gach uair a shàbhail na fear slàn. Bidh e cuideachd a’ giùlan an aon leasan riaghlaidh: foillsich na cuideaman *ron* choinneamh prìomhachais, no bidh gach sgioba ag agairt dèine.

## Cunnartan

- **A’ cunntadh easbhaidh an aghaidh na bunait cheàrr**: tha e air a thomhas fo *chùram àbhaisteach làithreach*, chan ann eachdraidh nàdarra gun làimhseachadh.
- **Mothachalachd aoise**: tha easbhaidh gu mòr an urra ri aois a’ mhòr-shluaigh (tha barrachd QALYan aig euslaintich nas òige ri chall → easbhaidh iomlan nas àirde); cleachd fìor chuairteachadh aoise a’ mhòr-shluaigh air an làimhseachadh.
- **A’ gabhail ris gu bheil am modaladair a’ buntainn àite sam bith eile** – is e inneal NICE (Sasainn) a th’ ann; bidh buidhnean HTA eile a’ làimhseachadh dèine ann an dòigh eadar-dhealaichte (no idir).

## Stòran

- Analysis of NICE severity modifier decisions, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Mtech Access, NICE HTA decision modifiers explainer. <https://mtechaccess.co.uk/nice-hta-decision-modifier/>
