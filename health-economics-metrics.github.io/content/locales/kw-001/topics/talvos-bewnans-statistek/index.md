# Talvos Bewnans Statistek (VSL)

Talvos bewnans statistek (VSL) — hanwys "talvos mernans lettys" (VPF) yn devnydh UK — yw an kevrenn may ma *pobel* yn kesunnys bodhek dhe baya rag leha an risk a unn mernans statistek, dyrivys dhort studhyow kenwerth gober-risk (pygemmys paymans ekstra a bys gweythysi rag oberow riskyer) ha sorveyow dewis-derivys. Nyns yw pris bewnans den hanwys vyth; yth yw kesunnans risk pobel, ha'n ynjynnyer medhelweyth a dhrehev systemow lehe-risk — algoritmow triage, danvon ambulans, monitoryans sawder — a dal godhvos y dheu dhort tradyssyon deori dyffrans dhort [harthow bodh-dhe-dhalleth](../harthow-bodh-dhe-dhalleth/).

## Perag yth yw posek

VSL/VPF yw an arf savonek rag talvosa leha risk mernans yn analys kost-prow rewlyek: sawder treuslywyans, rewl kerrynnek, ha nebes ynterventyansow yeghes poblek a rol aga kasow busnes ganso. Green Book HM Treasury a dhyllas figur VPF dyrivys dhort dustuni marhas-lavur ha sorvey UK, ha'n Adran Treuslywyans a'n devnydh yn dhirek yn gwerthjyans sawder fordh. Hemma yw tradyssyon talvosyans yn gwir dyffrans a fordh QALY × harth-bodh-dhe-dhalleth: an fordh harth a dalvos nowodhow yeghes erbynn pyth a wra *budjet* yeghes lemmyn orth an marghen, mes VSL/VPF a dalvos leha risk erbynn pyth a dhiskwedh tus y'n marhas lavur po sorvey y baya. An dhew framya na yllons bos dasyunnys pub prys, ha devnydhya an dhew y'n keth kas heb aga aswonn yw fowt dyghtyans kemmyn.

## An Matematik

```
Mernansow lettys = pobel × leha_risk_rag_den
  (leha_risk_rag_den yw probabilita, ex. 0.000001 = 1-yn-milvil leha
   y'n risk mernans bledhynnyek)

Prow mernans talvosys = mernansow_lettys × talvos_mernans_lettys
```

## Ensampel gwrys

Ranndir a 800,000 den a gav prow dhort ynterventyans danvon/triage digidel sawder fordh a leha risk mernans bledhynnyek pub den dre 1 yn milvil (0.000001):

```
Mernansow lettys = 800,000 × 0.000001 = 0.8
```

Ow devnydhya Talvos Mernans Lettys UK, £2,180,000 (figur HM Treasury/DfT, prisyow 2023/24 — an Green Book a nowydhha hemma bledhynnyek, gwiryewgh arta kyns kyttya yn analys bew):

```
Prow mernans talvosys = 0.8 × £2,180,000 = £1,744,000/bledhen
```

Yn tiwedh £1.75 milvil/bledhen a brow mernans talvosys, dhort leha risk a na wrella an moyha a'n pobel tuchys y notya yn unnik.

## Kolm gans ynjynnyans medhelweyth

Skuadronow medhelweyth sawder-krisyek — firmware devis medhegel, medhelweyth kerry awtonomek, systemow kontrol diwysyansek — a drehedh an keth kudyn prisya pan wrons drehevel an kas kost-prow rag investyans sawder: fatell wrewgh prisya "lettya unn fyll tebel" pan vo an fyll skant, ankosk, ha gwaskerys dres pobel meur a ervydhyoryon? VSL/VPF yw rakwarnyans gwir hen-vledhynyow ha dyllys yn poblek rag settya niver war leha risk skant, ankosk, pobel-nivel — an keth furv argyans avel prisya investyans SRE erbynn hwarvos fyll a-brysek skant, nammnygen gans sewyans mernans yn le sewyans termyn-marow.

## Fowtys Kemmyn

- **Dyghtya VSL avel "pris bewnans hanwys"**: nyns yw. VSL/VPF yw kesunnans statistek pobel dyrivys dhort kenwerthow leha-risk a-dreus lies den, na ny yw gwerthjyans bewnans po mernans neb den spesyfek.
- **Dyblans-jynnya erbynn jorrans prow arghans netto herwydh QALY**: devnydhya figur VSL/VPF ha jorrans QALY × harth dyvers y'n keth kas, heb aga dasyunna, a dhyblans-gont yn tawesek an talvos a'n keth mernansow lettys. Dewisewgh unn framya rag kas ansyns.
- **Treusdrehevel erviryans VSL a-dreus kettestow heb addasya**: VSL dyrivys dhort marhas lavur unn pow, po dhort data gober-risk oos-oberi, devnydhys heb addasya dhe gettest enniv dyffrans po pobel dyffrans (flehes, dyth-obereryon) yw kudyn kemmyn hirgovys, gwir dhadhelys — na ny yw unn sesys.

## Fontynnow

- HM Treasury, The Green Book: Central Government Guidance on Appraisal and Evaluation — Value of a Prevented Fatality supplementary guidance (2023/24 prices; Green Book values are updated annually). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- US EPA, "Mortality Risk Valuation" (for the US VSL tradition, cited for contrast with the UK VPF figure above). <https://www.epa.gov/environmental-economics/mortality-risk-valuation>
- Viscusi WK, Aldy JE. "The Value of a Statistical Life: A Critical Review of Market Estimates Throughout the World." J Risk Uncertain. 2003;27(1):5-76.
