# SPACE आणि DevEx

SPACE (Satisfaction & well-being, Performance, Activity, Communication & collaboration, Efficiency & flow) आणि DevEx (फीडबॅक लूप, संज्ञानात्मक भार, फ्लो अवस्था) या डेव्हलपर उत्पादकता **बहु-परिमाणी** पद्धतीने मोजण्याच्या चौकटी आहेत — कोणताही एकल मेट्रिक वास्तवाशी संपर्कात टिकत नाही या शोधाला क्षेत्राचे उत्तर.

## हे का महत्त्वाचे आहे

दोन्ही चौकटी आरोग्य परिणाम संशोधनाने दशकांपूर्वी शिकलेला कष्टाने मिळवलेला धडा कोडबद्ध करतात: एकच संख्या (कोडच्या ओळी; रक्तदाब) बहु-परिमाणी वास्तवाचे चुकीचे प्रतिनिधित्व करते, आणि ती इष्टतम केल्याने हेराफेरी निर्माण होते, सुधारणा नाही. SPACE किमान तीन परिमाणांमधील मेट्रिक्स एकत्र करण्याची, टेलिमेट्रीला स्वयं-अहवालासोबत मिसळण्याची सूचना देते — रचनात्मकदृष्ट्या [EQ-5D](../eq-5d/) कोणताही निर्देशांक मोजण्यापूर्वी पाच परिमाणांचे प्रोफाइल कसे करते त्यासारखेच, आणि क्लिनिकल मापनांसोबत [PROM](../रुग्ण-नोंदवलेले-परिणाम/) का अस्तित्वात आहेत त्याचे कारणही. समाधान/कल्याण हे मऊ सजावटही नाही: ते [कर्मचारी टिकवणूक](../कर्मचारी-टिकवणूक/) अर्थशास्त्राला पोसते, जिथे गळतीची किंमत भारित पगाराच्या महिन्यांत ठरते.

## गणित

दोन्हीपैकी कोणतीही चौकट सूत्र नाही; दोन्ही मोजमाप रचना आहेत:

```
SPACE rule: ≥ 3 dimensions, ≥ 1 perceptual (survey) + ≥ 1 system (telemetry) metric

DevEx dimensions and example pairings:
  feedback loops  → CI duration (telemetry) + "waiting feels slow" (survey)
  cognitive load  → docs findability, onboarding time + perceived effort
  flow state      → meeting/interrupt density + self-reported focus

Derived indices (e.g., DX's DXI) map survey composites to time:
vendor claim ≈ 13 min/dev/week per index point — treat as a vendor
benchmark to validate locally, not a constant of nature.
```

## सोडवलेले उदाहरण

एक प्लॅटफॉर्म संघ 300 डेव्हलपर्ससाठी DevEx गुंतवणुकीचे (CI वेगवान करणे + दस्तऐवज सुधारणा) समर्थन करतो:

```
Baseline: CI p75 = 28 min; survey "I lose focus waiting for builds": 62% agree
After:    CI p75 = 9 min;  agreement 24%

Time reclaimed (telemetry): 6 builds/day × 19 min × 0.4 usable = ~45 min/day/dev
Capacity value: 300 × 0.75h × 220d × £60/h ≈ £2.97M/year (non-cash-releasing —
see cash-releasing-vs-non-cash-releasing.md; the 0.4 usability factor is the
fragmentation discount from practitioner-time.md)
Perceptual corroboration is what makes the telemetry claim credible — either
alone is gameable; together they triangulate.
```

## सॉफ्टवेअर अभियांत्रिकीशी संबंध

हा दस्तऐवज *म्हणजेच* सॉफ्टवेअर बाजू आहे; हस्तांतरण आरोग्य अर्थशास्त्राकडे जाते. "गुणवत्ता-समायोजित अभियंता वर्ष" — प्रमाणित अनुभव निर्देशांकाने भारित वेळ — हे अभियांत्रिकी क्षमतेला लावलेली [QALY](../गुणवत्ता-समायोजित-आयुर्वर्ष/) ची रचना आहे, आणि ती QALY चे नियम वारसाने घेते: भार प्रमाणित साधनातून (सुसंगत सर्वेक्षण, प्रकाशित गुणांकन), तुलनेपूर्वी मिळवलेले, पसंतीच्या टूलची खुशामत करण्यासाठी कधीही बसवलेले नाहीत. [SF-6D विरुद्ध EQ-5D](../eq-5d/) धडाही लागू: वेगवेगळी साधने पद्धतशीरपणे वेगवेगळे आकडे देतात, म्हणून विक्रेत्यांच्या साधनांमध्ये DevEx निर्देशांकांची कधीही तुलना करू नका.

## सामान्य चुका

- **एक-मेट्रिक कोसळणे**: SPACE एकाच गुणात कमी करणारे डॅशबोर्ड चौकट ज्या समस्येला रोखण्यासाठी आहे तीच पुन्हा निर्माण करतात.
- **परिणाम म्हणून क्रियाकलाप मेट्रिक्स**: कमिट्स, PR आणि स्टोरी पॉइंट्स हे Activity आहेत — SPACE स्पष्टपणे इशारा देते की हे परिमाण सर्वात जास्त हेराफेरीयोग्य आहे (आरोग्य साधर्म्य: प्रक्रिया मोजणे, बरे होणे नाही).
- **सर्वेक्षण थकवा आणि Hawthorne परिणाम**: तिमाही हलकी साधने साप्ताहिक चौकशीपेक्षा चांगली.
- **संघांची तुलना**: केस-मिक्स समायोजनाशिवाय रुग्णालय क्रमवारी तक्त्यांसारखे — संदर्भ फरक (डोमेन, legacy भार, ऑन-कॉल) वर्चस्व गाजवतात.

## स्रोत

- Forsgren N, et al. "The SPACE of Developer Productivity." ACM Queue 2021. <https://queue.acm.org/detail.cfm?id=3454124>
- Noda A, Forsgren N, Storey MA, Greiler M. "DevEx: What Actually Drives Productivity." ACM Queue 2023. <https://queue.acm.org/detail.cfm?id=3595878>
