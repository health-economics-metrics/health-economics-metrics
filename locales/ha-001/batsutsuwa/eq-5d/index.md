# EQ-5D

EQ-5D shi ne daidaitaccen tambayoyin ƙungiyar EuroQol don auna ingancin rayuwa mai alaƙa da lafiya. Shi ne kayan aikin da ke samar da ma'aunin amfani a cikin yawancin lissafin [QALY](../shekarar-rayuwa-da-aka-daidaita-da-inganci/) — ƙa'idar tunani ta NICE tana kiransa ma'aunin da aka fi so ga manya.

## Dalilin muhimmancinsa

Duk samfurin lafiyar dijital da ke son da'awar QALY yana buƙatar amfani daga kayan aikin da aka tabbatar, kuma EQ-5D shi ne tsohuwar zaɓi a Birtaniya da yawancin Turai. Gajere ne isa a saka cikin manhaja (tambayoyi 5 + ma'aunin gani), wanda ke nufin samfuran manhaja za su iya tattara bayanan sakamako masu darajar HTA a matsayin illar amfani na yau da kullum — fa'ida ta tsari fiye da magunguna, waɗanda ke buƙatar bincike na musamman.

## Lissafin

EQ-5D-5L yana yin tambaya ɗaya a kowane ɗaya cikin **girma 5** — motsi, kula da kai, ayyuka na yau da kullum, ciwo/rashin jin daɗi, damuwa/baƙin ciki — kowanne ana amsa shi a **matakai 5** (babu matsala … matsala mai tsanani), tare da ma'aunin gani na 0–100 (EQ VAS).

```
Health state = 5-digit profile, e.g. "21221"
Utility index = value_set(profile)

The value set is country-specific, derived from time-trade-off /
discrete-choice surveys of the general public. Anchors: 1 = full health,
0 = dead; states worse than death are negative (UK 3L set floor: −0.594).
```

Lissafin QALY sai ya ci gaba kamar `duration × utility`.

## Misali da aka lissafa

Manhajar gyaran tsoka da ƙashi tana auna EQ-5D-5L a shiga da kuma watanni 6 ga masu amfani 1,000 da suka kammala.

```
Mean utility at baseline:  0.62
Mean utility at 6 months:  0.71
Gain sustained (assume) 1 year: (0.71 − 0.62) × 1.0 = 0.09 QALYs per user
```

Idan aka kwatanta da canjin ƙungiyar kwatantawa na 0.03 (murmurewa ta halitta), ribar da aka danganta ita ce 0.06 QALY/mai amfani. An mayar da ita zuwa kuɗi a £20,000–£30,000/QALY: **£1,200–£1,800 na darajar lafiya ga kowane mai amfani da ya kammala** — lambar da ke ɗaure tattaunawar farashin manhajar da mai biya. (Mafi ƙarancin bambancin da ke da muhimmanci a asibiti ga ma'aunin EQ-5D yawanci a kewayen 0.03–0.08 ne, don haka 0.06 mai yiwuwa ne amma dole ya wuce kwatancen ƙungiyar kwatantawa; duba [sakamakon da marasa lafiya suka bayar](../sakamakon-da-marasa-lafiya-suka-bayar/).)

## Alaƙa da injiniyancin manhaja

- **A saka kayan aikin.** EQ-5D a shiga da lokutan bi-da-bi ƴan allon UI ne; ribar ita ce shaida mai darajar HTA. A sami lasisi daga EuroQol (wajibi, kyauta ga wasu amfani).
- **A yi amfani da saitin daraja daidai** ga ƙasar turawa — amsoshi iri ɗaya suna samun maki daban a Birtaniya da Jamus da Japan.
- **Darasin ƙira**: EQ-5D yana nuna yadda ƙaramin bincike mai daidaito tare da aikin maki da aka wallafa ke samar da ma'auni ɗaya da za a iya kwatantawa. Wannan shi ne tsarin kowane ingantaccen ma'aunin ƙwarewar mai haɓakawa ma — kayan aiki mai daidaito, nauyi da aka wallafa, ba jin daɗin kai ba. Duba [SPACE da DevEx](../space-da-devex/).

## Tarkuna

- **Kafin/bayan ba tare da abin kwatantawa ba** — komawa tsakiya da murmurewa ta halitta suna ƙara riba maras zurfi.
- **Son zuciya na waɗanda suka tsira**: auna masu amfani da suka ci gaba da shiga aiki kawai (duba [riƙewa da barin amfani](../riƙewa-da-barin-amfani/)).
- **Haɗa sigogin 3L da 5L ko saitunan daraja** a tsakanin bincike — lambobi daban-daban bisa tsari.
- **Tasirin rufi** a al'ummomin da abin ya shafa kaɗan: yawancin masu amfani suna samun kusan 1.0 a tushe, ba su bar sarari don nuna riba ba.
- **Ɗaukar saitin daraja a matsayin mai tabbatar da kansa**: lambobin amfani da saitin daraja ke dawowa su kansu an fitar da su daga jama'a ta binciken musayar lokaci (ko makamancin zaɓi) — duba [Fitar da Amfani ta Musayar Lokaci (TTO)](../fitar-da-amfani-ta-musayar-lokaci/) don yadda.

## Tushe

- EuroQol: EQ-5D-5L. <https://euroqol.org/information-and-support/euroqol-instruments/eq-5d-5l/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
