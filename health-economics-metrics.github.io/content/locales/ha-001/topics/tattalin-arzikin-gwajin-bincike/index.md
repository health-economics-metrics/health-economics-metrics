# Tattalin Arzikin Gwajin Bincike

Tattalin arzikin gwajin bincike yana jagorantar darajar gwada al'ummomi marasa alamomi. Ainihin gaskiyar lissafi: **a ƙarancin yawan cuta, har ma da gwaje-gwaje masu kyau suna haifar da galibin ƙarya masu kyau** — kuma kuɗin da ke ƙasa na bin su zai iya mamaye fa'idar abubuwan gaske da aka samu.

## Dalilin muhimmancinsa

Tun 1968, ma'aunin Wilson–Jungner na WHO ya kafa mataki na binciken al'umma: dole yanayin ya zama mai muhimmanci, gwajin abin karɓa da daidai, dole ingantaccen magani ya wanzu, kuma dole tattalin arziki ya daidaita. Kwamitin Binciken Ƙasa na Burtaniya yana amfani da binciken tasirin kuɗi na hukuma kafin amincewa da kowane shirin ƙasa — kuma yana ƙin yawancin shawarwari. Kowane tallan "AI za ta bincika kowa don komai" tana cin karo da wannan tsari, kuma yawanci lissafin da ke ƙasa yana cin nasara a kanta.

## Lissafin

Ƙimar hasashen mai kyau (PPV) — yiwuwar sakamako mai kyau na gaskiya ne — tana rushewa a ƙarancin yawan cuta:

```
PPV = (sens × prev) / [sens × prev + (1 − spec) × (1 − prev)]

Example: sensitivity 90%, specificity 95%, prevalence 0.5%:
PPV = (0.9 × 0.005) / (0.9 × 0.005 + 0.05 × 0.995)
    = 0.0045 / (0.0045 + 0.04975) ≈ 8.3%
```

Goma sha ɗaya cikin goma sha biyu na masu kyau ƙarya ne. Cikakken tattalin arzikin shirin:

```
Cost per true case found = (screening cost + workup cost × all positives) / true positives
Then: is finding a case worth that? (earlier-intervention value per case,
      minus overdiagnosis harm — cases found that would never have mattered)
```

## Misali da aka lissafa

Binciken AI na ido don yanayi mai wuya, mutane 100,000, yawan cuta 0.5%, sens 90%, spec 95%, scan £15, bincike na tabbatarwa £400:

```
True positives:  100,000 × 0.005 × 0.90 = 450
False positives: 100,000 × 0.995 × 0.05 = 4,975
Cost = 100,000 × 15 + (450 + 4,975) × 400 = 1.5M + 2.17M = £3.67M
Cost per true case ≈ £8,156
```

Idan magani da wuri yana ceton £20,000 + QALY 1 ga kowane lamari, shirin yana cin gwaji cikin sauƙi. Ɗaga takamaiman gwaji zuwa 99% (ƙarancin ƙararrawar ƙarya): kuɗin bincike yana faɗuwa zuwa (450 + 995) × 400 = £0.58M, jimilla £2.08M, kuɗi ga kowane lamari ≈ **£4,622** — takamaiman gwaji, ba hankali ba, shi ne inda ake cin tattalin arzikin gwajin bincike a ƙarancin yawan cuta.

## Alaƙa da injiniyancin manhaja

Binciken a tsaye, duba tsaro, da gano abubuwan da ba na yau da kullum ba shirye-shiryen bincike ne a kan tushen lamba da telemetry, tare da yawan lahani na gaskiya yawanci ƙasa da 1% ga kowace damar faɗakarwa. Lissafi iri ɗaya yana bayyana gajiyar faɗakarwa: na'urar duba mai takamaiman 95% a lamba mai ƙarancin yawa tana nutsar da ƙungiyoyi a ƙarya masu kyau, kuma kowace ƙarya mai kyau tana kashe kulawa tana rage amana har sai ana watsi da faɗakarwa na gaske (kalmar asibiti ita ce *cutarwar bincike*; ta injiniya ita ce *rashin ji na pager*). Magungunan suna canjawa daga lafiya: ɗaga takamaiman gwaji kafin hankali, bincika ƙananan al'ummomi masu yawan cuta (nufin da ya dogara da haɗari ↔ duba lambar da aka canza kawai), kuma ƙirga kuɗin rarrabawa a tattalin arzikin kayan aiki — duba [NNT](../adadin-da-ake-bukatar-magani/) da [tantance AI na asibiti](../tantance-ai-na-asibiti/). Don auna dukan shirin bincike maimakon gwaji ɗaya, duba [adadin da ake bukata na bincike](../adadin-da-ake-bukatar-bincike/) — mutane nawa dole su bi dukan hanyar bincike-da-magani don hana sakamako ɗaya.

## Tarkuna

- **Faɗin hankali/takamaiman gwaji ba tare da yawan cuta ba** — daidaito ba tare da PPV ba tallace-tallace ne.
- **Watsi da yawan ganewa**: gano "cuta" mara ƙarfi da ba za ta taɓa cutarwa ba yana haifar da kuɗin magani da cutarwa na gaske.
- **Son zuciya na lokacin jagoranci**: ganowa da wuri ba tare da canjin sakamako ba yana ƙara bayyanar rayuwa — duba [shiga tsakani da wuri](../shiga-tsakani-da-wuri/).

## Tushe

- Wilson JMG, Jungner G. "Principles and practice of screening for disease." WHO 1968. <https://apps.who.int/iris/handle/10665/37650>
- UK National Screening Committee. <https://www.gov.uk/government/groups/uk-national-screening-committee-uk-nsc>
