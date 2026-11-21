# पोहोच आणि समानता

RE-AIM — Reach, Effectiveness, Adoption, Implementation, Maintenance — ही हस्तक्षेपाच्या *लोकसंख्या* परिणामाचे मूल्यमापन करण्याची प्रमाणित चौकट आहे. तिचे मध्यवर्ती गणित: **सार्वजनिक-आरोग्य परिणाम ≈ पोहोच × परिणामकारकता**. डिजिटल साधने समानतेचे परिमाण जोडतात: डिजिटल दरी म्हणजे पोहोच पद्धतशीरपणे असमान आहे, आणि डिजिटल-प्रथम वितरण ज्या आरोग्य तफावती कमी करू पाहते त्या वाढवू शकते.

## हे का महत्त्वाचे आहे

mHealth ला RE-AIM लावणारी पद्धतशीर पुनरावलोकने सातत्यपूर्ण स्वाक्षरी दाखवतात: मजबूत पोहोच आणि स्वीकार, **कमकुवत परिणामकारकता आणि देखभाल** — अ‍ॅप्स सहज पसरतात आणि झपाट्याने विरतात. राष्ट्रीय आरोग्य सेवेसाठी याचा अर्थ असा की प्रभावी प्रति-वापरकर्ता उत्पादन वाईट लोकसंख्या गुंतवणूक असू शकते, आणि उलट: लाखोंपर्यंत पोहोचणारे माफक प्रभावी साधन हजारांपर्यंत पोहोचणाऱ्या तेजस्वी साधनापेक्षा जास्त निर्माण करू शकते ([HALE](../आरोग्य-समायोजित-आयुर्मान/) गणित पहा). समानता ही बाजूची मर्यादा नसून मूल्य चालक आहे: डिजिटल बहिष्कार वय, वंचितता, अपंगत्व आणि भाषेचा मागोवा घेतो — नेमक्या त्या लोकसंख्या ज्या सर्वाधिक उपचारयोग्य भार वाहतात — म्हणून सीमान्त बहिष्कृत वापरकर्त्याला अनेकदा *सरासरीपेक्षा जास्त* संभाव्य लाभ असतो. सामाजिक-आर्थिक-संबंधित आरोग्य विषमतेच्या औपचारिक सांख्यिकीय मापनासाठी [कॉन्सन्ट्रेशन इंडेक्स](../कॉन्सन्ट्रेशन-इंडेक्स/) पहा.

## गणित

```
Population impact ≈ reach × effectiveness
  reach         = participants / eligible population (see activation-and-uptake.md)
  effectiveness = real-world effect among participants (retention-weighted —
                  see retention-and-churn.md)

Equity-stratified version:
  impact_group_g = reach_g × effectiveness_g, reported per deprivation
  quintile / age band / language group
  equity gap = impact_top quintile − impact_bottom quintile

Distributional cost-effectiveness: apply equity weights to QALYs by
recipient group — a QALY to the worst-off counts more (an increasingly
mainstream HTA extension).
```

## सोडवलेले उदाहरण

डिजिटल मधुमेह-प्रतिबंध कार्यक्रम, दोन प्रकारे नोंदवलेला:

```
Aggregate: reach 12%, effect 0.02 QALYs/participant → 0.0024 QALYs/eligible person

Stratified (deprivation quintiles):
  Q1 (least deprived): reach 22%, effect 0.02 → 0.0044
  Q5 (most deprived):  reach 4%,  effect 0.025 → 0.0010

The programme delivers 4.4× more health to the least deprived —
while Q5's per-participant effect is HIGHER (more headroom). An
assisted-digital arm (phone coaching + community access) costing 20%
more per Q5 participant that lifts Q5 reach to 12% triples Q5 impact
and improves the aggregate — the equity investment IS the efficiency
investment here.
```

## सॉफ्टवेअर अभियांत्रिकीशी संबंध

पोहोच बऱ्याच अंशी अभियांत्रिकी कलाकृती आहे: उपकरण आणि OS किमान आवश्यकता, बँडविड्थ गृहीतके, भाषा समर्थन, प्रवेशयोग्यता अनुपालन (WCAG), ओळख-पडताळणी अडथळे आणि फक्त-अ‍ॅप-स्टोअर वितरण प्रत्येक भाजकातून लोकसंख्या वगळतात — सहसा अदृश्यपणे, कारण वगळलेले वापरकर्ते विश्लेषणात कधीच दिसत नाहीत. समानता हलवणारे अभियांत्रिकी सराव: *भाजक* मोजा (केवळ वापरकर्ते नव्हे, पात्र लोकसंख्या इन्स्ट्रुमेंट करा); जुन्या उपकरणांसाठी आणि खराब कनेक्टिव्हिटीसाठी कामगिरीचे अंदाजपत्रक करा; सहाय्यित-डिजिटल मार्ग (फोन, SMS, किओस्क) लज्जास्पद चॅनेलऐवजी प्रथम-श्रेणी प्रवाह म्हणून पाठवा; आणि प्रत्येक डॅशबोर्ड मेट्रिक समानता परिमाणांनुसार स्तरित करा — अस्तरित सरासरी हे विषमता लपण्याचे ठिकाण आहे ([GDS स्वीकार](../gds-सेवा-मेट्रिक्स/) तोच इशारा देतो).

## सामान्य चुका

- **परिणामकारकता पूर्ण करणाऱ्यांवर नोंदवली, परिणाम लोकसंख्येवर दावा केला** — पोहोच पदे शांतपणे वगळली.
- **समानता डिझाइन इनपुटऐवजी नंतरचे ऑडिट म्हणून**; पोहोच नंतर बसवणे त्यासाठी रचना करण्यापेक्षा खूप महागडे आहे.
- **देखभाल विस्मृती**: RE-AIM चे सर्वात कमकुवत mHealth परिमाण — पुराव्याच्या कालावधी क्षितिजापलीकडे परिणाम दावे.
- **फक्त-डिजिटल चॅनेल बचती** जे खर्च बहिष्कृत वापरकर्ते आणि आघाडीवरील कर्मचाऱ्यांवर ढकलतात ([GDS सेवा मेट्रिक्स](../gds-सेवा-मेट्रिक्स/) पहा).

## स्रोत

- RE-AIM framework. <https://re-aim.org/>
- RE-AIM systematic reviews of mHealth. <https://pmc.ncbi.nlm.nih.gov/articles/PMC12358350/>
- CDC, PRISM/RE-AIM for equity planning. <https://www.cdc.gov/pcd/issues/2018/17_0271.htm>
