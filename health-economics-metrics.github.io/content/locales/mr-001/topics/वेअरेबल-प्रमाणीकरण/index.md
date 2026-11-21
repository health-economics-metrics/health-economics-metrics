# वेअरेबल प्रमाणीकरण

प्रमाणीकरण मेट्रिक्स वेअरेबलची मापने क्लिनिकल सुवर्ण-मानकाशी (हृदय गतीसाठी ECG, झोपेसाठी polysomnography) किती सहमत आहेत ते मोजतात: **MAPE**, concordance सहसंबंध, Bland–Altman सहमती — तसेच वास्तव-जगातील डेटा गुणवत्ता नियंत्रित करणारे कार्यात्मक मेट्रिक्स: **वेअर-टाइम अनुपालन** आणि **डेटा पूर्णत्व**.

## हे का महत्त्वाचे आहे

प्रमाणीकरण हे खालील सर्वांची पूर्वअट आहे: संदर्भ मापनाशी सहमती सिद्ध करू न शकणारे उपकरण [डिजिटल अंतिम बिंदूंना](../डिजिटल-अंतिम-बिंदू-आणि-बायोमार्कर/) आधार देऊ शकत नाही, [RPM बिलिंग](../दूरस्थ-रुग्ण-देखरेख-अर्थशास्त्र/) समर्थित करू शकत नाही किंवा क्लिनिकल दावे वाहू शकत नाही. हृदय गतीसाठी क्षेत्राचे स्वीकृत थ्रेशोल्ड: ECD विरुद्ध **MAPE ≤5%** (कडक) किंवा **≤10%** (सौम्य). साहित्यातील संदर्भ बिंदू: Oura Gen 3 विश्रांती HR MAPE 1.67% (CCC 0.97); Fitbit Charge 6 MAPE ~5.5% — ग्राहक उपकरणे आता क्लिनिकल-दर्जाच्या सीमेवर पसरली आहेत, म्हणूनच प्रति-उपकरण आणि प्रति-स्थिती मोजमाप महत्त्वाचे आहे.

## गणित

```
MAPE = (1/n) Σ |measured_i − reference_i| / reference_i × 100

CCC (concordance correlation) = agreement including both correlation
      and systematic bias (Pearson r penalized by location/scale shift)

Bland–Altman: mean bias ± 1.96 SD limits of agreement — shows whether
      error depends on the value's magnitude

Operational gates:
Wear-time compliance = time worn / protocol time × 100
Data completeness    = observed data points / expected × 100
```

प्रमाणीकरण **प्रति क्रियाकलाप स्थिती** (विश्रांती, हालचाल, झोप) आणि प्रति लोकसंख्या नोंदवले पाहिजे — PPG ऑप्टिकल सेन्सिंग हालचाल कलाकृती, खराब संपर्क आणि गडद त्वचा रंगांमुळे बिघडते, दस्तऐवजीकृत समानता-संबंधित अपयश प्रकार.

## सोडवलेले उदाहरण

एक आभासी-वॉर्ड कार्यक्रम देखरेख वेअरेबल निवडतो. उमेदवार A: विश्रांती MAPE 2.1%, व्यायाम MAPE 11.4%. उमेदवार B: विश्रांती 3.8%, व्यायाम 6.9%.

```
Use case: deteriorating-patient detection at home — alerts trigger on
sustained elevated HR, often during activity.
Candidate A's headline (2.1%) wins the brochure; candidate B wins the
use case: at the alert-relevant condition (motion), A's 11.4% error
at HR 100 = ±11 bpm — spanning the entire alert threshold band,
generating false escalations (each a nurse callout, ~£40) or misses.

False-alert economics: 500 patients × 2 extra false alerts/week × £40
= £2.08M/year of error cost from choosing the wrong validation number.
```

## सॉफ्टवेअर अभियांत्रिकीशी संबंध

अभियंते सेन्सर निवडताना प्रमाणीकरण डेटा वापरतात आणि मापन वैशिष्ट्ये बांधताना तो *निर्माण* करतात — दोन्ही भूमिकांना तीच शिस्त हवी: डेमो स्थितीवर नव्हे, तैनाती स्थितीवर चाचणी करा (सॉफ्टवेअर साधर्म्य: विक्रेत्याच्या नव्हे, तुमच्या उत्पादन वर्कलोडवर बेंचमार्क). वेअर-टाइम आणि पूर्णत्व हे उत्पादन-अभियांत्रिकी परिणाम आहेत — आराम, बॅटरी आयुष्य, चार्जिंग विधी रचना आणि सिंक विश्वासार्हता 30 पैकी 16-दिवस RPM बिलिंग गेट पूर्ण होते का ([दूरस्थ रुग्ण देखरेख अर्थशास्त्र](../दूरस्थ-रुग्ण-देखरेख-अर्थशास्त्र/)) आणि चाचणी डेटासेट विश्लेषणयोग्य आहेत का हे ठरवतात. गहाळपणाला रचलेला संकेत माना: स्कीमामध्ये पहिल्या दिवसापासून "घातलेले नाही," "घातले पण सिग्नल नाही," आणि "सिंक अयशस्वी" यात फरक करा — null मध्ये कोसळल्यास ते खालील प्रत्येक विश्लेषण विषारी करतात.

## सामान्य चुका

- **स्थिती-विशिष्ट अपयश लपवणारा एकूण MAPE** — सोडवलेल्या उदाहरणातील सापळा.
- **प्रमाणीकरण लोकसंख्या ≠ तैनाती लोकसंख्या**: वय, त्वचा रंग, कंप, लठ्ठपणा हे सर्व ऑप्टिकल-सेन्सर त्रुटी बदलतात; अभ्यास लोकसंख्याशास्त्र तपासा.
- **जिथे सहमती हवी तिथे सहसंबंध नोंदवणे**: पद्धतशीर पक्षपातासह उच्च Pearson r तरीही निरपेक्ष थ्रेशोल्डविरुद्ध चुकीचे वर्गीकरण करतो — CCC/Bland–Altman चा आग्रह धरा.
- **इम्प्युटेशनने फुगवलेले पूर्णत्व**: भरलेल्या तफावती निरीक्षित डेटा म्हणून नोंदवणे.

## स्रोत

- Consumer wearable HR validation (Oura Gen 3/4). <https://pmc.ncbi.nlm.nih.gov/articles/PMC12367097/>
- Wearable validity thresholds (MAPE standards). <https://formative.jmir.org/2025/1/e70835>
- Multi-device validation studies. <https://pmc.ncbi.nlm.nih.gov/articles/PMC6431828/>
