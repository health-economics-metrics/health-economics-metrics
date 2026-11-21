# Dawowar Jari ta AI

ROI na AI shi ne dawowar P&L da za a auna kuma a danganta ga shirye-shiryen AI. Ma'aunin da ke tunatarwa: binciken "GenAI Divide" na MIT na 2025 ya gano cewa duk da jarin kamfanoni na GenAI na $30–40B, **kusan 95% na gwaje-gwajen ba su nuna dawowar P&L da za a auna ba** — kuma kashi 5% masu nasara sun raba halaye da za a iya ganewa.

## Dalilin muhimmancinsa

Tsarin lafiya yana da suna ga tsarin gwajin AI: **pilotitis** — makabartar NHS na manhajoji masu alƙawarin da ake gwadawa har abada ba a taɓa faɗaɗawa ba. Binciken MIT ya dace da abin da tantance fasahar lafiya ta riga ta sani: da'awar daraja tana buƙatar ƙarshe da aka tsara tukuna, danganta yana buƙatar abin kwatantawa, kuma "kowa yana jin yana taimakawa" ba layin fa'ida ba ne. Marasa rinjaye masu nasara a bayanan MIT sun taru a aikin atomatik na ofis na baya mai ma'aunin kuɗi da za a bi, kuma **kayan da aka saya sun yi nasara ~67% na lokaci da gina na cikin gida a kusan ukun wannan** — ra'ayoyin farko da ya kamata su kasance a kowace shari'ar jarin AI (duba [gina da saye](../gina-da-saye/)).

## Lissafin

```
AI ROI = (attributable benefit − total AI cost) / total AI cost

Total AI cost = licences/inference (see inference-unit-economics.md)
              + integration + data readiness + evaluation
              + workflow redesign + governance/assurance
              (the licence is typically the minority of the denominator)

Attributable benefit: measured against a baseline or control, classed
cash / capacity / quality per cash-releasing-vs-non-cash-releasing.md
```

## Misali da aka lissafa

Ƙungiyar asibitoci tana tura AI don aikace-aikace biyu:

```
Use case A — clinical-letter drafting (back office, trackable):
  baseline: outsourced transcription £380k/yr
  after:    transcription contract cancelled; clinician review time +£60k
  AI cost:  £120k/yr all-in
  ROI = (380k − 60k − 120k) / 120k ≈ 167% — cash-releasing, auditable ✓

Use case B — "AI copilot for clinicians" (broad, untracked):
  benefit claim: "saves time across 4,000 staff" — no baseline captured
  measured P&L effect: none demonstrable
  → the 95% bucket, regardless of whether it actually helps
```

Bambanci ba ingancin AI ba ne — shi ne ko fa'idar tana da **tushe, mai mallaka, da layin kasafin kuɗi** ([gane fa'idodi](../gane-fa-idodi/)).

## Alaƙa da injiniyancin manhaja

Jagorar jarin AI mai siffar HTA: **a matsa shaida kamar [matakan NICE ESF](../tsarin-matsayin-shaida-na-nice/)** — shaidar matakin nuni ga kayan ƙaramin haɗari, gwaje-gwajen da aka sarrafa kafin kashe kuɗi a faɗin ƙungiya, tare da ƙofofin faɗaɗawa da aka yi wa rajista tukuna (tsarin jerin wucin gadi mai wa'adi na [DiGA](../hanyar-gaggawa-ta-diga-ta-jamus/)); **a ƙidaya kaucewa kuɗi yadda tattalin arzikin lafiya ke ƙidaya kaucewa buƙata** — gaskiya ne kawai idan wani layin kasafin kuɗi na musamman ya motsa; kuma **a ƙayyade farashin gwajin da kansa da [EVPI](../darajar-da-ake-tsammani-ta-cikakken-bayani/)** — gwajin da ba zai iya canza shawarar faɗaɗawa ba darajarsa £0. Ga ɓangaren kayan masu haɓakawa musamman, duba [ƙwazon mai haɓaka manhaja da AI](../ƙwazon-mai-haɓaka-manhaja-da-ai/).

## Tarkuna

- **Warwatsewar fa'ida**: daraja da aka shimfiɗa siriri a kan dubban masu amfani ba za a iya aunawa ba ta ginin kanta; a zaɓi aikace-aikace masu tushe masu tattarawa da za a bi.
- **Ƙididdige lasisi kawai**: haɗawa, kimantawa, da sake tsara tsarin aiki yawanci su ne suka mamaye ainihin mai rabawa.
- **Satar danganta**: AI da aka tura tare da sake tsara tsari yana ɗaukar dukan bambanci.
- **Ƙara goyon bayan gwajin da ya gaza**: tsawaita gwajin da ya gaza saboda dainawa na nufin yarda da gazawa — dole a amince da ranar ƙarewa tukuna.

## Tushe

- MIT Project NANDA "GenAI Divide" coverage. <https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/>
- MIT GenAI ROI findings summary. <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- MIT Technology Review, finding ROI on AI. <https://www.technologyreview.com/2025/10/28/1126693/finding-return-on-ai-investments-across-industries/>
