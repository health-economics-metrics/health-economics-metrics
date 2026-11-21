# AI गुणवत्ता मेट्रिक्स

AI-निर्मित आउटपुटच्या अचूकतेचे मेट्रिक्स: मूलभूत सत्याच्या तुलनेत अचूकता, **निष्ठा/आधारितता (faithfulness/groundedness)** (प्रत्येक विधान पुरवलेल्या संदर्भाने समर्थित आहे का?) आणि **हॅलुसिनेशन दर** (किती टक्के आउटपुटमध्ये असमर्थित किंवा खोटा मजकूर आहे?). आरोग्य क्षेत्रात ही गुणवत्तेची चैन नाही — ते हानीचे दर आहेत.

## हे का महत्त्वाचे आहे

वैद्यकीय क्षेत्रातील बेंचमार्कनी वैद्यकीय कामांवर **संदर्भाधार नसलेल्या LLM साठी 60% पेक्षा जास्त** हॅलुसिनेशन दर मोजले आहेत (काही ओपन मॉडेलसाठी >80%), तर आधार देणे (grounding), पुनर्प्राप्ती (retrieval) आणि तर्क-पद्धती हे दर नाट्यमयरीत्या कमी करतात (उदा. एका बेंचमार्कवर GPT-5 च्या thinking मोडने HealthBench हॅलुसिनेशन 3.6% वरून 1.6% वर आणले). क्लिनिकल कार्यप्रवाहातील चुकीचा डोस किंवा बनावट संदर्भ ही **हानीचा मार्ग असलेली खोट्या माहितीची घटना** आहे — ती कोणत्याही आर्थिक मॉडेलच्या हानी-बाजूत यायला हवी, आणि [तपासणी अर्थशास्त्र](../तपासणी-अर्थशास्त्र/) मधील खोट्या सकारात्मकांप्रमाणे तिची किंमत ठरवायला हवी: प्रत्येक घटना पुढील खर्च निर्माण करते (चुकीच्या माहितीवर कृती, पडताळणीचे श्रम, वैद्यकीय-कायदेशीर जोखीम, ढासळलेला विश्वास).

## गणित

```
Hallucination rate = outputs containing unsupported/false content / total outputs
  intrinsic:  contradicts the provided context
  extrinsic:  unverifiable fabrication beyond the context

Faithfulness (RAGAS-style) = supported claims in answer / total claims in answer
Context precision/recall   = retrieval quality feeding the generator

Economic weighting — not all hallucinations cost alike:
  expected harm cost = Σ over error types (rate × P(undetected) ×
                       P(acted upon) × cost per acted-upon error)
  The human-review layer sets P(undetected) — and its cost belongs
  in the model too (reviewer minutes × volume).
```

## सोडवलेले उदाहरण

एक AI क्लिनिकल-कोडिंग साहाय्यक दरवर्षी 200,000 एपिसोड प्रक्रिया करतो; ऑडिटमध्ये 2% आउटपुटमध्ये गंभीर कोडिंग चूक आढळते; मानवी कोडर त्यापैकी 85% पकडतात:

```
Errors reaching submission = 200,000 × 0.02 × 0.15 = 600/year
Cost per uncaught error (mis-billing avg + audit exposure) ≈ £250
Expected error cost         = 600 × 250 = £150,000/year
Review cost (2 min × 200k × £0.50/min)  = £200,000/year

Improvement case: retrieval grounding cuts error rate to 0.8%
→ uncaught errors 240, error cost £60,000 (−£90k/yr); review time
  can also drop (sampling instead of full review) — the quality
  investment pays before any speed claim.
```

## सॉफ्टवेअर अभियांत्रिकीशी संबंध

मॉडेल गुणवत्तेकडे टेस्ट-कव्हरेजच्या अर्थशास्त्राप्रमाणे, पण आरोग्य-दर्जाच्या शिस्तीने पहा: **मूल्यमापन संच म्हणजे तुमची क्लिनिकल चाचणी** — पूर्व-नोंदणीकृत, *तुमच्या* केस-मिश्रणाचे प्रतिनिधित्व करणारा, ड्रिफ्टविरुद्ध ताजा ठेवलेला; **तथ्यात्मक कामांसाठी आधार देणे हे आकारापेक्षा उत्तम** (पुनर्प्राप्ती + संदर्भ-आवश्यक प्रॉम्प्टिंग हा सहसा उपलब्ध असलेला सर्वात स्वस्त हॅलुसिनेशन-घट मार्ग आहे — त्याच्या टोकन ओव्हरहेडसाठी [इन्फरन्स एकक अर्थशास्त्र](../इन्फरन्स-एकक-अर्थशास्त्र/) पहा); आणि **कार्यबिंदू प्रसिद्ध करा**: [संवेदनशीलता/विशिष्टता](../क्लिनिकल-ai-मूल्यमापन/) प्रमाणेच, कामाचे वितरण आणि शोध-मर्यादा याशिवाय "97% निष्ठावान" याला अर्थ नाही. वरील पुनरावलोकन-स्तराचे गणित कोणत्याही तपासणी-दारासारखेच [NNT/NNH](../उपचारासाठी-आवश्यक-संख्या/) अंकगणित आहे.

## सामान्य चुका

- **बेंचमार्कचे थेट उत्पादनात प्रत्यारोपण**: हॅलुसिनेशन दर कामावर प्रचंड अवलंबून असतात; तुमचे केस-मिश्रण हाच एकमेव ग्राह्य बेंचमार्क.
- **मानवी पुनरावलोकनाची किंमत न धरणे**: "डॉक्टर सर्व काही तपासतात" हे लाभ निम्मा करते आणि ते खर्चाच्या ओळीत यायलाच हवे — शिवाय सतर्कता कमी होते (ऑटोमेशन सुस्ती), त्यामुळे विश्वासासोबत P(undetected) वाढते.
- **सरासरी गुणवत्तेला इष्टतम करणे, तर हानी शेवटच्या टोकातील जोखमीत असते**: एक बनावट अ‍ॅलर्जी नोंद हजार बेढब वाक्यांपेक्षा जड ठरते; अपेक्षित-हानी सूत्रानुसार चुकांना परिणामानुसार भार द्या.

## स्रोत

- Hallucination evaluation methods and metrics. <https://www.braintrust.dev/articles/ai-hallucination-evaluations-metrics-methods-2026>
- Medical LLM hallucination statistics. <https://sqmagazine.co.uk/llm-hallucination-statistics/>
- RAG faithfulness metrics. <https://www.getmaxim.ai/articles/measuring-llm-hallucinations-the-metrics-that-actually-matter-for-reliable-ai-apps/>
