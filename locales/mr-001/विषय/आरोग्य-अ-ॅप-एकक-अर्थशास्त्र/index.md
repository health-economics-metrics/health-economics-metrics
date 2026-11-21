# आरोग्य अ‍ॅप एकक अर्थशास्त्र

ग्राहक आरोग्य उत्पादनांचे व्यावसायिक गणित: ग्राहक संपादन खर्च (CAC), आजीवन मूल्य (LTV), प्रति वापरकर्ता सरासरी महसूल (ARPU), प्रति-सदस्य-प्रति-महिना (PMPM) किंमत, आणि नियोक्ता बाजारातील **ROI आणि VOI** (गुंतवणुकीवरील मूल्य) यातील फरक.

## हे का महत्त्वाचे आहे

आरोग्य अ‍ॅप्सना संरचनात्मक कोंडीचा सामना करावा लागतो: संपादन महाग आहे (नियंत्रित दावे, विश्वास अडथळे, अनुपालन खर्च) तर टिकवणूक कोणत्याही सॉफ्टवेअर क्षेत्रात सर्वात वाईट आहे (30 दिवसांत ~90% सोडून देणे — [टिकवणूक आणि गळती](../टिकवणूक-आणि-गळती/) पहा). प्रमाणित व्यवहार्यता चाचणी — **LTV:CAC ≥ 3:1** — म्हणून ग्राहक आरोग्यात क्रूरपणे कठीण आहे, म्हणूनच उद्योग B2B2C मॉडेलकडे स्थलांतर करतो: नियोक्ते, विमा कंपन्या आणि आरोग्य प्रणाली लोकसंख्येसाठी PMPM देतात, जिथे खरेदीदार गळती होणारी व्यक्ती नसतो.

## गणित

```
CAC   = sales + marketing spend / new paying customers
ARPU  = revenue / active users (per period)
LTV   = ARPU × average lifetime  =  ARPU / churn rate
Viability: LTV : CAC ≥ 3, payback period ≤ 12–18 months

Effective CAC per retained user = CAC / retention(t)
  — at 4% D30 retention, £5 per install = £125 per 30-day-retained user

PMPM revenue = rate × enrolled members × months
  vendor margin = PMPM − cost-to-serve per member per month
  — engagement flips sign: under B2C subscriptions engagement drives
    revenue; under PMPM, engaged members COST more to serve than
    dormant ones, and outcomes contracts flip it back again
```

## सोडवलेले उदाहरण

एक B2C झोप अ‍ॅप: £6.99/महिना, मासिक गळती 18%, मिश्र CAC £38.

```
LTV = 6.99 / 0.18 ≈ £38.8 → LTV:CAC ≈ 1.0 — non-viable

Pivot to employer PMPM: £1.20 PMPM × 40,000 covered lives = £48k/month
Cost-to-serve: infrastructure £0.15 + support £0.10 + content £0.05
  per member ≈ £0.30 → margin ~75%, sales cycle long but churn is
  contract-level (annual), not user-level (daily)

The employer's question shifts the metric: hard-dollar ROI (reduced
claims, absenteeism) is rarely demonstrable for wellness products —
the industry answer is VOI: productivity, recruitment appeal,
engagement — which is honest only when labelled as VOI, not dressed
as ROI (see return-on-investment.md and social-return-on-investment.md).
```

## सॉफ्टवेअर अभियांत्रिकीशी संबंध

अभियांत्रिकी निवडी गुणोत्तराच्या दोन्ही बाजू ठरवतात: **सेवा-खर्च** म्हणजे आर्किटेक्चर ([क्लाउड एकक अर्थशास्त्र](../क्लाउड-एकक-अर्थशास्त्र/) — PMPM मार्जिन प्रति-सदस्य पायाभूत सुविधा खर्चावर जगते किंवा मरते), आणि **LTV** म्हणजे टिकवणूक अभियांत्रिकी (प्रत्येक गळती-बिंदू म्हणजे अंकगणितीय महसूल — [टिकवणूक](../टिकवणूक-आणि-गळती/) दस्तऐवजातील QALY गणिताला अचूक महसूल जोडीदार आहे). विशेषतः आरोग्य उत्पादनांसाठी, एकक-अर्थशास्त्र डॅशबोर्डने LTV आणि CAC च्या बाजूला तिसरी ओळ वाहावी: **प्रति संपादित वापरकर्ता आरोग्य मूल्य** (टिकवणूक-भारित QALY × थ्रेशोल्ड) — कारण देय देणारे आणि DiGA-शैलीचे बाजार त्यावर वाढत्या प्रमाणात किंमत ठरवतात, आणि ज्या उत्पादनाचे व्यावसायिक आणि क्लिनिकल एकक अर्थशास्त्र वेगळे होते (फायदेशीर पण आरोग्य-निष्क्रिय, किंवा प्रभावी पण निधीहीन) त्याला कोणती समस्या आहे हे माहीत हवे.

## सामान्य चुका

- **लवकरच्या-कोहॉर्ट गळतीवरून LTV**: गळती खाली स्थिरावते; पण वाचलेल्यांचा पक्षपातही — लवकर स्वीकारणारे मोठ्या प्रेक्षकांपेक्षा चांगले टिकतात. परिपक्व कोहॉर्ट डेटा वापरा.
- **चॅनेलांवर मिश्र CAC**: paid-social CAC आणि वैद्यक-रेफरल CAC 10× वेगळे, विरुद्ध टिकवणूक प्रोफाइलसह — विभागा, नाहीतर दिशाभूल होते.
- **उपयोग मर्यादांशिवाय PMPM**: अति-गुंतलेले सदस्य मार्जिन उलटवू शकतात; सरासरीचे नव्हे, वितरणाचे मॉडेल करा.
- **CFO ला ROI म्हणून मांडलेले VOI** — नियोक्ता-वेलनेस उद्योगाने दशकभर कमावलेले विश्वासार्हता अपयश.

## स्रोत

- Healthtech unit economics primers. <https://smart-it.io/blog/how-to-calculate-unit-economics-for-healthcare-startups/>
- PMPM pricing frameworks for digital health. <https://www.quintupleaim.com/blog/strategic-pricing-for-digital-health-startups-in-value-based-care-per-member-per-month-pmpm-frameworks>
