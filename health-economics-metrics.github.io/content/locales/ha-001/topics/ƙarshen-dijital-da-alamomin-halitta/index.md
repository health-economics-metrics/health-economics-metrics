# Ƙarshen Dijital da Alamomin Halitta

Alamar halitta ta dijital ma'auni ne na jiki ko ɗabi'a na zahiri da aka tattara ta firikwensin (saurin tafiya daga waya, barci daga na'urar sawa, rawar jiki daga accelerometry). Ƙarshen dijital irin wannan ma'auni ne da aka ɗaga zuwa **sakamakon gwaji** — ana amfani da shi don nuna tasirin magani. Hawa daga "bayanan da na'ura ke fitarwa" zuwa "shaidar da mai ƙa'ida ke karɓa" yana wucewa ta matakalar tabbatarwa da aka ƙayyade.

## Dalilin muhimmancinsa

Ƙarshen gwaji na gargajiya na lokaci-lokaci ne (ziyarar asibiti kowane watanni 3) kuma masu tsada; ƙarshen dijital masu ci gaba ne, na yanayi (rayuwa ta zahiri, ba aikin asibiti ba), kuma masu arha ga kowace lura — za su iya rage gwaje-gwaje, gano tasiri da wuri, kuma su ba da damar bincike marasa tsakiya. Matsalar ita ce tabbatarwa: tsarin da aka karɓa (wanda ya dace da FDA, ginshiƙai uku) yana buƙatar **tabbatar da bincike/nazari** (firikwensin yana auna adadin jiki daidai), **tabbatar da asibiti** (ma'aunin yana nuna yanayin asibiti da yake da'awa), da kuma **fuskar lafiya mai ma'ana** da aka nuna (marasa lafiya suna kula da abin da yake kamawa). Ƙarshen da ba shi da duka uku telemetry ne, ba shaida ba.

## Lissafin

```
Analytical validation: agreement with reference (see wearable-validation.md —
                       MAPE, CCC, Bland-Altman)
Clinical validation:   correlation/discrimination against clinical anchors
                       (known-groups validity, responsiveness to change)
Endpoint economics:
  events detected per patient-year (continuous) vs per-visit sampling
  trial power: continuous measures cut sample size when between-visit
  variance dominates — N ∝ σ²/Δ², and σ² falls with dense sampling
```

## Misali da aka lissafa

Gwajin Parkinson yana la'akari da saurin tafiya daga firikwensin wuyan hannu da maki da asibiti ya bayar kowane kwata:

```
Clinic endpoint:  4 measurements/patient/year, high day-to-day noise
Digital endpoint: ~200 passive measurements/patient/year

Variance of the annual-change estimate falls ~5× with dense sampling →
detectable effect size at fixed power improves ~√5 ≈ 2.2×, or
equivalently sample size shrinks ~40–60% for the same hypothesis.
At £25,000 per enrolled patient, cutting 200 patients ≈ £5M saved
per trial — the commercial case for the validation investment
(itself perhaps £1–2M) across a sponsor's pipeline.
```

## Alaƙa da injiniyancin manhaja

Ƙarshen dijital horon injiniyancin bayanai ne sanye da tufafin asibiti: **asali da sigar** (sabunta algorithm a tsakiyar bincike yana barazana ga kwatantawa — matsalar [PCCP](../tantance-ai-ta-hukumomin-ƙa-ida/) a siffar gwaji; a kulle sigar kuma a tabbatar da gada); **ƙirar bayanan da suka ɓace** (giɓin lokacin sawa suna ɗauke da bayani, ba bazuwar ba — duba [tabbatar da na'urorin sawa](../tabbatar-da-na-urorin-sawa/); zaɓin cike bayanai da'awar kimiyya ne); da **shawarwarin rabon baki/gajimare** da ke canza abin da ɗanyen sigina ma za a iya dawo da shi daga baya. Ƙungiyoyin da ke ɗaukar bututun auna a matsayin manhajar da ake sarrafawa tun ranar farko — gwada, sigar, rubuta — suna sayen amincin ƙarshen su a arha; sake saka tabbatarwa a bututun da aka gina da gaggawa shi ne inda shirye-shiryen ƙarshen dijital ke mutuwa.

## Tarkuna

- **Daidaito da asibiti a matsayin cikakken tabbatarwa**: dacewa da ma'aunin asibiti mai lahani yana tabbatar da gado, ba gaskiya ba; a tabbatar a kan fuskar lafiya mai ma'ana.
- **Haɗarin ƙa'ida na sabon ƙarshe**: ƙarshen da ba a taɓa yi ba na iya fi kyau a kimiyya amma har yanzu ya nutsar da gabatarwa — a shiga tare da masu ƙa'ida da wuri (shirye-shiryen cancanta suna wanzuwa).
- **Rashin dacewar firikwensin da al'umma**: tabbatarwa a wuyan hannu na matasa masu lafiya, turawa ga marasa lafiya tsofaffi masu rawar jiki da bambancin launin fata da PPG bai taɓa gani ba.
- **Karkacewar fasali**: sake horar da algorithm na tafiya a kan sabbin bayanai yana sake ayyana ƙarshen a shiru a tsakiyar bincike.

## Tushe

- Coravos A, Khozin S, Mandl KD. "Developing and adopting safe and effective digital biomarkers to improve patient outcomes." npj Digital Medicine 2019. <https://www.nature.com/articles/s41746-019-0090-4>
- Digital Medicine Society (DiMe), digital endpoints resources. <https://dimesociety.org/>
