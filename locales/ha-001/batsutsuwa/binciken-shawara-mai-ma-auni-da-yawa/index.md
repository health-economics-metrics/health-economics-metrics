# Binciken Shawara Mai Ma'auni Da Yawa (MCDA)

Binciken shawara mai ma'auni da yawa (MCDA) samfurin maki ne na jimlar mai nauyi da ake amfani da shi a tantance fasahar lafiya lokacin da iyaka ɗaya ta ICER/shirin biya ba ta kama duk abin da mai yanke shawara ke kula da shi ba: adalci, buƙatar da ba a biya ba, kirkire-kirkire, tasirin kasafin kuɗi, tsananin cuta. Kowane ma'auni yana samun nauyi da ke nuna muhimmancinsa (ana fitar da shi daga masu ruwa da tsaki, nauyi suna haɗuwa zuwa 1), kowane zaɓi yana samun maki da aka daidaita ga kowane ma'auni (yawanci 0–1), kuma jimillar maki shi ne jimlar mai nauyi — siffar lissafi iri ɗaya da katin maki na zaɓen mai sayarwa na manhaja.

## Dalilin muhimmancinsa

Ana amfani da MCDA a tsare-tsare kamar EVIDEM, da wasu hukumomin HTA don tantance cututtukan da ba su da yawa inda tsarin iyaka mai tsauri na kuɗi-ga-QALY ake ɗauka kunkuntu don kama duk abin da ke da muhimmanci game da shawara. Ƙungiyar Aiki ta ISPOR MCDA Emerging Good Practices ta tsara jagorar kyakkyawan aiki don fitar da nauyi da maki da kariya, daidai domin shawara da aka ba da nauyi ba bisa ƙa'ida ba tana da sauƙin ginawa kuma tana da sauƙin yin wasa da ita. Lokacin da fasahar lafiya ke da girman daraja da [iyakar shirin biya](../iyakokin-shirin-biya/) ɗaya ba za ta iya wakilta ba — tsanani, kirkire-kirkire, adalci — MCDA tana ba masu yanke shawara tsari bayyananne, mai iya dubawa don haɗa su, maimakon hukunci da ba a bayyana ba.

## Lissafin

```
MCDA score = Σ_i (weight_i × score_i)

weights should sum to 1 (elicited via stakeholder methods such as swing
weighting or the Analytic Hierarchy Process)
```

## Misali da aka lissafa

Kwamitin HTA yana ba da maki ga maganin dijital a kan ma'auni huɗu:

```
Criterion                          Weight   Score   Weight × Score
Clinical benefit                   0.4      0.8     0.32
Cost impact                        0.3      0.5     0.15
Disease severity / unmet need      0.2      0.9     0.18
Innovation                         0.1      0.6     0.06
                                    ─────                ─────
                                    1.0                  0.71
```

Nauyi suna haɗuwa zuwa 1.0 (0.4 + 0.3 + 0.2 + 0.1), kuma makin MCDA shi ne 0.71 (0.32 + 0.15 + 0.18 + 0.06). Kwamitin yana kwatanta 0.71 da iyaka da aka amince da ita tukuna, ko yana jera shi a kan fasahohi masu gogayya da aka ba da maki iri ɗaya.

## Alaƙa da injiniyancin manhaja

Wannan lissafi iri ɗaya ne da katin maki na zaɓen mai sayarwa mai nauyi, matrix na tantance RFP, ko samfurin maki na fifikon fasali — duba [gina da saye](../gina-da-saye/), misalin amfani na katin maki mai nauyi na gargajiya a sayen manhaja. Ya kamata kuma a bambanta shi da [WSJF da CD3](../wsjf-da-cd3/): WSJF/CD3 hanyar fifiko ce ta *rabo* (kuɗin jinkiri da aka raba ta girman aiki ko tsawon lokaci), yayin da MCDA ke jimla mai nauyi. MCDA da WSJF/CD3 amsoshi biyu ne daban a tsari ga "yaya za mu jera zaɓuɓɓuka masu gogayya," kuma sanin wanne shawara take bukata a zahiri — daraja ta ƙari a faɗin ma'auni masu zaman kansu, da yawan daraja ga kowace naúrar ƙarfi mai ƙarancin yawa — ya fi muhimmanci fiye da wace dabara ta fi kama da tsanani.

## Tarkuna

- **Son zuciya na fitar da nauyi**: duk wanda ya saita nauyi yana ƙayyade jeri tun da farko, don haka "dabara" za ta iya wanke shawara ta siyasa ko kasuwanci a matsayin lissafi na gaskiya. A rubuta wanda ya saita nauyi da yadda.
- **Ƙidaya ma'auni sau biyu da aka kama wani wuri**: ba da maki ga "tasirin kuɗi" a matsayin ma'auni ɗaya *kuma* ba da maki daban ga "tasirin kuɗi" yana ƙara nauyin kuɗi fiye da sauran ma'auni ba tare da wani ya nufa ba.
- **Daidaiton ƙarya**: makin mai nauyi na ɓangarorin goma biyu (0.71) yana nuna tsanani fiye da yadda ƙimar masu ruwa da tsaki ta 0–10 ke goyon baya a zahiri, kuma bambancin masu ƙima sau da yawa ba a bayar da rahoton shi kwata-kwata.

## Tushe

- Thokala P, Devlin N, Marsh K, et al. "Multiple Criteria Decision Analysis for Health Care Decision Making — An Introduction: Report 1 of the ISPOR MCDA Emerging Good Practices Task Force." Value Health. 2016;19(1):1-13.
- Goetghebeur MM, Wagner M, Khoury H, et al. "Evidence and Value: Impact on DEcisionMaking — the EVIDEM framework and potential applications." BMC Health Serv Res. 2008;8:270.
