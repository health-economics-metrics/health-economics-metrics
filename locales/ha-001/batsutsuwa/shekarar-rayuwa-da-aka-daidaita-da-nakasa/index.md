# Shekarar Rayuwa da Aka Daidaita da Nakasa (DALY)

DALY shekara ɗaya ce ta rayuwa mai lafiya da aka rasa — madubin ɓangaren nauyi na [QALY](../shekarar-rayuwa-da-aka-daidaita-da-inganci/). Inda QALY ke ƙidaya lafiyar da aka *samu*, DALY tana ƙidaya lafiyar da cuta ta *rasa*; ana ƙimanta shiga tsakani da DALY da aka **kauce wa**.

## Dalilin muhimmancinsa

DALY ita ce ma'aunin lafiyar duniya (WHO, binciken Global Burden of Disease, da yawancin ma'aikatun lafiya na ƙasashe masu ƙaramin ƙarfi da matsakaici suna tsarawa da DALY). Idan manhajarka tana nufin tsarin lafiya na ƙasa da ƙasa, masu ba da gudummawa, ko shirye-shiryen da suka dace da WHO, harshen daraja shi ne DALY da aka kauce wa, ba QALY da aka samu ba. Ma'aunin tarihi na WHO-CHOICE: shiga tsakani da ke kauce wa DALY a ƙasa da 1× GDP ga kowane mutum "yana da tasirin kuɗi sosai," 1–3× GDP ga kowane mutum "yana da tasirin kuɗi" (WHO yanzu tana hana amfani da waɗannan rukunoni da tsauri, amma suna nan a ko'ina a aikace).

## Lissafin

```
DALY = YLL + YLD

YLL (years of life lost)         = deaths × standard life expectancy at age of death
YLD (years lived with disability) = prevalence × disability weight

disability weight ∈ [0, 1], 0 = full health, 1 = equivalent to death
(weights published by the Global Burden of Disease study)
```

## Misali da aka lissafa

Dandamalin tunatarwar gwaji a wani yanki yana ƙara gano cuta da wuri. A kowace shekara yana hana mutuwa 10 kafin lokaci (kowanne yana rasa shekaru 20 idan aka kwatanta da tsawon rai na ma'auni) kuma yana hana mutane 200 rayuwa shekara ɗaya da yanayi mai nauyin nakasa 0.2.

```
YLL averted = 10 × 20        = 200
YLD averted = 200 × 0.2      = 40
DALYs averted               = 240 per year
```

Idan dandamalin yana kashe $600,000/shekara don gudanarwa, kuɗi ga kowane DALY da aka kauce wa shi ne 600,000 / 240 = **$2,500**. A ƙasar da GDP ga kowane mutum ya kai $8,000, wannan ya yi ƙasa da ma'aunin 1× GDP sosai — "mai tasirin kuɗi sosai" a harshen WHO-CHOICE.

## Alaƙa da injiniyancin manhaja

- Lafiyar dijital da ke nufin masu ba da kuɗin lafiyar duniya (Gavi, Global Fund, shirye-shiryen ƙasa) ya kamata ta bayyana tasiri a matsayin **kuɗi ga kowane DALY da aka kauce wa** — shi ne ma'aunin da masu duba tallafi ke tunani a ciki tuni.
- DALY kuma samfurin *lissafin nauyi* ne mai amfani ga injiniya: abubuwan da suka faru, gine-gine marasa tsayayye, da rikitarwar tsohuwar lamba "shekarun rayuwa da nakasa" ne ga ma'ajiyar lamba — jerin nauyin da aka auna da wahala yana gaya maka inda gyara ke saya mafi yawan "shekarun injiniya masu lafiya," kamar yadda tebura nauyi na GBD ke jagorantar kashe kuɗin lafiya.

## Tarkuna

- **QALY da aka samu ≠ DALY da aka kauce wa a lamba** — nauyi daban-daban, teburan rayuwa daban-daban, al'adu daban-daban (DALY a tarihi sun yi amfani da nauyin shekaru da rage daraja a cikin ma'aunin). Kar a sauya a sakaci.
- **Amfani da iyakokin ninki na GDP a matsayin tambarin amincewa** — WHO da kanta tana gargaɗi suna watsi da kasafin kuɗi da farashin damar da aka bari; duba [iyakokin shirin biya](../iyakokin-shirin-biya/).
- **Da'awar DALY na girman al'umma daga tasirin kowane mai amfani** ba tare da ninka ta karɓuwa da bin ka'ida ba — duba [isa da adalci](../isa-da-adalci/).

## Tushe

- WHO indicator registry: DALYs. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/158>
- Bertram MY, et al. "Cost-effectiveness thresholds: pros and cons." (WHO) <https://pmc.ncbi.nlm.nih.gov/articles/PMC4339959/>
- Marseille E, et al. on GDP-based thresholds, Health Policy and Planning. <https://academic.oup.com/heapol/article/32/1/141/2555408>
