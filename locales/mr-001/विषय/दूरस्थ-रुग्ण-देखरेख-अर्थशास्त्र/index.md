# दूरस्थ रुग्ण देखरेख अर्थशास्त्र

घरी रुग्णांवर देखरेख करण्याचे परतफेड आणि खर्च-प्रतिसंतुलन अर्थशास्त्र: US मध्ये, परिभाषित CPT-कोड महसूल स्तर; राष्ट्रीय आरोग्य सेवांमध्ये, दाखला-टाळणे आणि आभासी-वॉर्ड अर्थशास्त्र, पूर्ण **घरातील-रुग्णालय** प्रतिस्थापनापर्यंत.

## हे का महत्त्वाचे आहे

RPM हे ठिकाण आहे जिथे उपकरण डेटा बिल करण्यायोग्य आरोग्यसेवा बनतो. US Medicare रचना (2025 राष्ट्रीय सरासरी) असामान्यपणे स्पष्ट आहे:

```
99453  setup & patient education     ~$19.73  one-time (after 16 days of data)
99454  device supply + transmission  ~$43.03  per 30 days — REQUIRES ≥16 days
                                              of readings in the 30
99457  first 20 min/month management ~$47.87  requires ≥20 logged minutes
99458  each additional 20 min        ~$38.49
```

अनुपालक रुग्ण-महिना सुमारे **$90–130 PMPM** पर्यंत जमतो. खर्च-प्रतिसंतुलन बाजूला, घरातील-रुग्णालय कार्यक्रम (CMS Acute Hospital Care at Home waiver: 300+ रुग्णालये) आंतररुग्ण काळजीच्या तुलनेत कमी पुनर्दाखल आणि संसर्गांसह प्रति दाखला ~$1,800–$3,000 बचत दाखवतात — देखरेख अधिक आभासी काळजी प्रणालीतील सर्वात महाग संसाधन, कर्मचारी असलेल्या खाटेची, जागा घेऊ शकते याचे सर्वात स्पष्ट प्रदर्शन.

## गणित

```
RPM revenue (US)  = enrolled × billing-compliant fraction × code stack PMPM
  — the 16-day rule makes wear-time compliance (wearable-validation.md)
    a revenue variable, and the 20-minute rule makes clinical-time
    logging an engineering requirement

NHS-style value   = admissions avoided × marginal admission cost
                  + bed days substituted × (inpatient − virtual-ward day cost)
                  − service cost (devices, platform, monitoring staff)
  (see emergency-attendance-avoidance.md and bed-days-saved.md for the
   attribution and marginal-cost rules)
```

## सोडवलेले उदाहरण

एक US प्रॅक्टिस 400 उच्च-रक्तदाब रुग्ण नोंदवते; सामान्य महिन्यात 70% 16-दिवस उंबरठा पूर्ण करतात; 60% साठी व्यवस्थापन मिनिटे नोंदवली:

```
Monthly revenue ≈ 400 × [0.70 × 43.03 + 0.60 × 47.87] = 400 × 58.84 ≈ $23,500
Annual ≈ $282,000; service cost (devices $12/mo, staff 0.8 FTE) ≈ $180,000
Margin ≈ $100k/year — and note the levers are engineering levers:
raising the 16-day compliance from 70% → 85% adds ~$31k/year
(device comfort, sync reliability, reminder design).
```

NHS प्रतिबिंब: 80% व्याप्तीवर 50-खाटांचा आभासी वॉर्ड प्रति दिवस £150 निव्वळ बचतीने आंतररुग्ण दिवस बदलतो ≈ 50 × 0.8 × 365 × 150 ≈ **£2.19M/वर्ष** एकूण — प्लॅटफॉर्म, उपकरणे आणि त्यावर कर्मचारी असलेल्या समुदाय परिचारिका संघाविरुद्ध.

## सॉफ्टवेअर अभियांत्रिकीशी संबंध

RPM प्लॅटफॉर्म हे दुर्मिळ उत्पादन आहे जिथे **अपटाइम आणि सिंक विश्वासार्हता थेट महसुलात रूपांतरित होतात** (अयशस्वी सिंकचा एक आठवडा एका कोहॉर्टसाठी 16-दिवस गेट मोडतो) आणि जिथे ऑडिट-दर्जाचा वेळ-मागोवा (20-मिनिट नियम) हे नंतरचे विचार नव्हे तर प्रथम-श्रेणी वैशिष्ट्य आहे. यासाठी बांधा: बिलिंग महिने पुनर्प्राप्त करण्यायोग्य असताना जोखमीचे महिने दाखवणारे प्रति-रुग्ण अनुपालन डॅशबोर्ड; वेळ-मुद्रित, छेडछाड-स्पष्ट डेटा मार्ग (देयक ऑडिट नेहमीचे असतात); आणि अलर्ट-अर्थशास्त्र समायोजन — प्रत्येक अलर्ट देखरेख संघाची मिनिटे खातो, जे बिल करण्यायोग्य एकक आणि दुर्मिळ संसाधन दोन्ही आहे ([तपासणी अर्थशास्त्र](../तपासणी-अर्थशास्त्र/) थ्रेशोल्ड निवड ठरवते).

## सामान्य चुका

- **नावनोंदणी ≠ महसूल**: अनुपालक अंश हा आकडा आहे; त्याचे मॉडेल करा, गृहीत धरू नका.
- **NHS प्रकरणांमध्ये US कोड रोपण** — राष्ट्रीय आरोग्य सेवा दाखला-टाळणे विकत घेतात, CPT स्तर नाही; दुसरे मॉडेल चालवा.
- **ज्यांचे स्थिर खर्च राहतात त्या दाखल्यांसाठी सरासरी खर्चावर प्रतिसंतुलन दावे** ([सीमान्त विरुद्ध सरासरी खर्च](../सीमान्त-विरुद्ध-सरासरी-खर्च/) पहा).
- **देखरेख-संघ संतृप्ती**: अलर्ट प्रमाण नावनोंदणीसोबत वाढते; कर्मचारी ओळ ही बहुतेक मॉडेल्स वगळतात ती बंधनकारक मर्यादा आहे.

## स्रोत

- RPM CPT codes and 2025 rates. <https://blog.prevounce.com/quick-guide-remote-patient-monitoring-rpm-cpt-codes-to-know>
- CMS hospital-at-home outcomes reporting. <https://www.mcknightshomecare.com/news/hospital-at-home-achieved-cost-savings-among-all-top-diagnosis-groups-cms-reports/>
- Telehealth.HHS.gov, billing for RPM. <https://telehealth.hhs.gov/providers/best-practice-guides/telehealth-and-remote-patient-monitoring/billing-remote-patient>
