# AI गुंतवणुकीवरील परतावा

AI ROI म्हणजे AI उपक्रमांना श्रेय देता येणारा मोजता येण्याजोगा P&L परतावा. गंभीर करणारा बेंचमार्क: MIT च्या 2025 च्या "GenAI Divide" संशोधनात आढळले की उद्योगांनी GenAI मध्ये $30–40B गुंतवूनही **~95% पायलटनी मोजता येण्याजोगा P&L परतावा दाखवला नाही** — आणि यशस्वी 5% मध्ये काही ओळखता येण्याजोग्या सवयी समान होत्या.

## हे का महत्त्वाचे आहे

आरोग्य व्यवस्थांकडे AI-पायलट नमुन्याला एक नाव आहे: **पायलटायटिस (pilotitis)** — NHS मधील आशादायक अ‍ॅप्सची स्मशानभूमी, जी कायम पायलट होतात आणि कधीच विस्तारत नाहीत. MIT चे निष्कर्ष आरोग्य तंत्रज्ञान मूल्यमापनाला आधीच माहीत असलेल्या गोष्टींशी चपखल जुळतात: मूल्याच्या दाव्यांना पूर्वनिर्दिष्ट अंतिम बिंदू लागतात, श्रेयनिर्धारणाला तुलना-गट लागतात, आणि "सर्वांना वाटते की ते मदत करत आहे" ही लाभाची ओळ नाही. MIT डेटातील यशस्वी अल्पसंख्य मागच्या कार्यालयातील (back-office) ऑटोमेशनमध्ये केंद्रित होते जिथे खर्चाची मूळ पातळी मोजता येते, आणि **विकत घेतलेली साधने ~67% वेळा यशस्वी झाली, तर अंतर्गत बनवलेली त्याच्या सुमारे एक-तृतीयांश** — हे पूर्वानुमान प्रत्येक AI गुंतवणूक प्रकरणात असायला हवेत ([बनवा विरुद्ध खरेदी करा](../बनवा-विरुद्ध-खरेदी-करा/) पहा).

## गणित

```
AI ROI = (attributable benefit − total AI cost) / total AI cost

Total AI cost = licences/inference (see inference-unit-economics.md)
              + integration + data readiness + evaluation
              + workflow redesign + governance/assurance
              (the licence is typically the minority of the denominator)

Attributable benefit: measured against a baseline or control, classed
cash / capacity / quality per cash-releasing-vs-non-cash-releasing.md
```

## सोडवलेले उदाहरण

एक रुग्णालय समूह दोन वापर-प्रकरणांसाठी AI तैनात करतो:

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

फरक AI च्या गुणवत्तेचा नाही — तर लाभाला **मूळ पातळी, मालक आणि अंदाजपत्रकातील ओळ** होती का याचा आहे ([लाभ प्राप्ती](../लाभ-प्राप्ती/)).

## सॉफ्टवेअर अभियांत्रिकीशी संबंध

AI गुंतवणुकीसाठी HTA-आकाराचा आराखडा: **पुराव्याचे टप्पे [NICE ESF श्रेणीं](../nice-पुरावा-मानक-चौकट/) प्रमाणे ठरवा** — कमी जोखमीच्या साधनांसाठी डेमो-दर्जाचा पुरावा, संस्था-व्यापी खर्चापूर्वी नियंत्रित पायलट, आणि पूर्व-नोंदणीकृत रोलआउट दारे ([DiGA](../जर्मनीचा-diga-फास्ट-ट्रॅक/) चा मुदतीसह तात्पुरत्या सूचीबद्धतेचा नमुना); **खर्च-टाळणे मोजण्याची पद्धत आरोग्य अर्थशास्त्र मागणी-टाळणे जशी मोजते तशी ठेवा** — विशिष्ट अंदाजपत्रक ओळ हलली तरच ते खरे; आणि **पायलटची किंमत [EVPI](../परिपूर्ण-माहितीचे-अपेक्षित-मूल्य/) ने ठरवा** — रोलआउट निर्णय बदलू न शकणारा पायलट £0 किमतीचा असतो. विशेषतः डेव्हलपर-टूल्सच्या भागासाठी [AI विकासक उत्पादकता](../ai-विकासक-उत्पादकता/) पहा.

## सामान्य चुका

- **लाभाचे विखुरणे**: हजारो वापरकर्त्यांमध्ये पातळ पसरलेले मूल्य रचनेनेच मोजता येत नाही; केंद्रित, मोजता येणारी मूळ पातळी असलेली वापर-प्रकरणे निवडा.
- **फक्त परवान्याचा खर्च धरणे**: एकात्मता, मूल्यमापन आणि कार्यप्रवाह पुनर्रचना हे सहसा खऱ्या छेदावर वर्चस्व गाजवतात.
- **श्रेयाची चोरी**: प्रक्रिया पुनर्रचनेसोबत तैनात केलेले AI संपूर्ण फरकावर दावा करते.
- **बुडालेल्या पायलटची वाढ**: अयशस्वी पायलट थांबवणे म्हणजे अपयश मान्य करणे म्हणून ते लांबवणे — सूर्यास्ताची तारीख आधीच ठरलेली असावी.

## स्रोत

- MIT Project NANDA "GenAI Divide" coverage. <https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/>
- MIT GenAI ROI findings summary. <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- MIT Technology Review, finding ROI on AI. <https://www.technologyreview.com/2025/10/28/1126693/finding-return-on-ai-investments-across-industries/>
