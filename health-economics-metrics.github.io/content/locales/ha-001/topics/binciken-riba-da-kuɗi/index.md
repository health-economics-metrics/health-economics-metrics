# Binciken Riba da Kuɗi (CBA)

CBA yana ƙimanta kuɗi *da* sakamako duka a cikin kuɗi. Shi ne kaɗai nau'in bincike da zai iya amsa "shin ya cancanci yin wannan kwata-kwata?" — ba kawai "wane zaɓi ne mafi kyau?" ba — domin ana iya kwatanta fa'idodin da aka mayar zuwa kuɗi kai tsaye da kuɗin.

## Dalilin muhimmancinsa

CBA ita ce ma'auni na **Green Book** na HM Treasury na Birtaniya don tantance duk kashe kuɗin jama'a, har da lafiya idan za a iya mayar da sakamako zuwa kuɗi. Inda [CEA](../binciken-tasirin-kuɗi/)/[CUA](../binciken-amfanin-kuɗi/) suke tsayawa a "kuɗi ga kowace naúrar lafiya," CBA tana ƙayyade farashin lafiyar kanta (QALY × darajar iyaka) da komai — lokaci, tafiya, carbon — kuma tana ba da rahoton lamba net ɗaya. Kowace cikakkiyar shari'ar kasuwanci ta dijital ta NHS tana ɗauke da shari'ar tattalin arziki mai siffar CBA.

## Lissafin

```
NPV (net present social value) = Σ_t [ (Benefits_t − Costs_t) / (1 + r)^t ]
BCR (benefit-cost ratio)       = PV(benefits) / PV(costs)

Adopt if NPV > 0 (equivalently BCR > 1); rank by NPV, not BCR.
r = 3.5% (Green Book social time preference rate)
```

Tasirin lafiya na iya shiga a matsayin kuɗi ta QALY × λ (duba [iyakokin shirin biya](../iyakokin-shirin-biya/)). Green Book kuma tana wajabta **gyaran son zuciya na kyakkyawan fata** — ƙara ƙiyasin kuɗi da rage fa'idodi da kashi na bisa shaida, domin tantancewa tana da kyakkyawan fata kullum.

## Misali da aka lissafa

Tsarin e-referral, tsawon shekaru 5, rage daraja 3.5%:

```
Costs:    build £1.2M (year 0), run £300k/yr (years 1–5)
Benefits: admin savings £250k/yr, avoided duplicate diagnostics £280k/yr,
          patient time saved 40,000 hrs/yr × £15 = £600k/yr → £1,130k/yr

PV costs    = 1,200k + 300k × 4.515 (annuity factor) = £2,555k
PV benefits = 1,130k × 4.515                          = £5,102k

NPV = 5,102 − 2,555 = +£2,547k     BCR = 2.0
```

A yi amfani da son zuciya na kyakkyawan fata na Green Book (a ce +40% a kuɗin gini, −20% a fa'idodi): PV costs ≈ £3,035k, PV benefits ≈ £4,082k, NPV ≈ **+£1,047k** — har yanzu mai kyau, wanda shi ne manufar gyaran: ya kamata shari'o'i su tsira daga kyakkyawan fatar kansu.

## Alaƙa da injiniyancin manhaja

Shari'o'in kasuwanci na injiniya CBA ne marasa tsari. Haɓakar Green Book da ya dace a sata:

- **Son zuciya na kyakkyawan fata a matsayin daidaitaccen ƙari** — injiniyoyi suna ƙiyasta kuɗin ƙaura a ƙasa daidai yadda ma'aikatu ke ƙiyasta kuɗin kayayyakin more rayuwa; a yi amfani da ƙari da aka bayyana maimakon a yi kamar wannan karon ya bambanta.
- **A mayar da babbar fa'ida zuwa kuɗi da gaskiya ko kar a yi** — lokacin majiyyaci/mai amfani ana mayar da shi zuwa kuɗi a ƙimar da za a iya kare; "darajar alama" ba haka ba.
- **NPV na jera, BCR ba ya jera**: ƙaramin aiki mai BCR 5 na iya zama ƙasa da muhimmanci fiye da babba mai BCR 1.6.

## Tarkuna

- **Mayar da abin da ba za a iya mayar da shi zuwa kuɗi ba** don ƙara fa'idodi (ɗabi'a, "daidaiton dabara") — a bar su na inganci, bisa ga [binciken sakamakon kuɗi](../binciken-sakamakon-kuɗi/).
- **Ƙidaya canja wurare a matsayin fa'idodi**: kuɗin da ke motsawa tsakanin hukumomin jama'a yana zama sifili a [mahangar](../mahangar-bincike/) al'umma.
- **Rashin abin kwatantawa**: ana auna fa'idodi da zaɓin mafi ƙaranci, ba da sifili ba.

## Tushe

- HM Treasury, The Green Book. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Green Book discounting guidance. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
