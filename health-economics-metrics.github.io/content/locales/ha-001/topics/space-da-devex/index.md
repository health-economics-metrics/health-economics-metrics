# SPACE da DevEx

SPACE (Gamsuwa da jin daɗi, Aiki, Ayyuka, Sadarwa da haɗin gwiwa, Inganci da gudana — Satisfaction & well-being, Performance, Activity, Communication & collaboration, Efficiency & flow) da DevEx (zagayen ra'ayi, nauyin tunani, yanayin gudana) tsare-tsare ne na auna ƙwazon mai haɓaka manhaja **ta fuskoki da yawa** — amsar fagen ga gano cewa babu ma'auni ɗaya da ke tsira daga haɗuwa da gaskiya.

## Dalilin muhimmancinsa

Tsare-tsaren biyu suna ɗauke da darasi ɗaya da aka samu da wahala da binciken sakamakon lafiya ya koya shekaru da yawa da suka wuce: lamba ɗaya (layukan lamba; hawan jini) tana wakiltar gaskiya mai fuskoki da yawa da kuskure, kuma inganta ta yana haifar da yin wasa, ba ingantuwa ba. SPACE yana ba da shawarar haɗa ma'auni daga aƙalla fuskoki uku, haɗa telemetry da rahoton kai — a tsari iri ɗaya da yadda [EQ-5D](../eq-5d/) ke bayyana fuskoki biyar kafin a lissafa kowane ma'auni, da dalilin da ya sa [PROMs](../sakamakon-da-marasa-lafiya-suka-bayar/) ke wanzuwa tare da ma'aunan asibiti. Gamsuwa/jin daɗi ba kayan ado mai laushi ba ne ma: yana ciyar da tattalin arzikin [riƙe ma'aikata](../riƙe-ma-aikata/), inda ake yi wa ƙarewa farashi a watannin albashi mai kaya.

## Lissafin

Babu ɗaya daga cikin tsare-tsaren da dabara; duka ƙirar aunawa ne:

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

## Misali da aka lissafa

Ƙungiyar dandali tana hujjar jarin DevEx (saurin CI + gyaran takardu) ga masu haɓakawa 300:

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

## Alaƙa da injiniyancin manhaja

Wannan takarda *ita ce* ɓangaren manhaja; canjin yana tafiya zuwa tattalin arzikin lafiya. "Shekarar injiniya da aka daidaita da inganci" — lokaci da aka auna da ma'aunin ƙwarewa na ƙa'ida — ginin [QALY](../shekarar-rayuwa-da-aka-daidaita-da-inganci/) ne da aka yi amfani da shi ga ƙarfin injiniya, kuma yana gadon ƙa'idodin QALY: nauyi daga kayan aiki da aka tabbatar (bincike mai daidaito, maki da aka buga), da aka fitar *kafin* kwatantawa, ba a taɓa daidaita su don faranta kayan aiki da aka fi so ba. Darasin [SF-6D da EQ-5D](../eq-5d/) shi ma yana aiki: kayan aiki daban-daban suna ba da lambobi daban-daban a tsari, don haka kada ka kwatanta ma'aunan DevEx a faɗin kayan aikin masu siyarwa.

## Tarkuna

- **Rushewar ma'auni ɗaya**: dashboards da ke rage SPACE zuwa maki ɗaya suna sake ƙirƙirar matsalar da tsarin ya wanzu don hana.
- **Ma'aunan aiki a matsayin sakamako**: commits, PRs, da maki labari Ayyuka ne — fuskar da SPACE ke gargaɗi a bayyane ta fi sauƙin yin wasa da ita (kwatankwacin lafiya: ƙirga tiyata, ba murmurewa ba).
- **Gajiyar bincike da tasirin Hawthorne**: kayan aiki masu sauƙi na kwata-kwata sun fi tambayoyi na mako-mako.
- **Kwatanta ƙungiyoyi**: kamar teburin gasar asibitoci ba tare da daidaita gauraya na marasa lafiya ba — bambance-bambancen mahallin (fage, nauyin gado, on-call) suna rinjaye.

## Tushe

- Forsgren N, et al. "The SPACE of Developer Productivity." ACM Queue 2021. <https://queue.acm.org/detail.cfm?id=3454124>
- Noda A, Forsgren N, Storey MA, Greiler M. "DevEx: What Actually Drives Productivity." ACM Queue 2023. <https://queue.acm.org/detail.cfm?id=3595878>
