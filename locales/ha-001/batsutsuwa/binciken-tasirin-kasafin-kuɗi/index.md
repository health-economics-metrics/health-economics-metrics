# Binciken Tasirin Kasafin Kuɗi (BIA)

BIA yana ƙiyasta abin da ɗaukar shiga tsakani ke yi wa **kasafin kuɗi** na takamaiman mai biya cikin shekaru 1–5 masu zuwa. Yana amsa *iya biya*; tasirin kuɗi yana amsa *daraja*. Fasaha na iya zama kyakkyawar daraja amma ba za a iya biya ba — ko a iya biya amma maras daraja. Tantance mai tsanani yana buƙatar duka biyun.

## Dalilin muhimmancinsa

Tambayar daraktan kuɗi ba ta taɓa zama "menene ICER?" ba — ita ce "me wannan zai yi wa kasafin kuɗin shekara mai zuwa?" Jagoran kyakkyawan aiki na ISPOR (ma'aunin fannin) ya ƙayyade: mahangar mai biyan kansa, tsawon shekara 1–5, kwararar kuɗi ta shekara *ba tare da rage daraja ba*, lanƙwasar karɓuwa ta zahiri, da rashin tabbas na yanayi (ba na yiwuwa ba). NICE tana buƙatar bayanin tasirin kasafin kuɗi tare da tasirin kuɗi; samfurin da tasirin kasafin kuɗin ƙasa ya haura ~£20M/shekara a Ingila yana jawo tattaunawar kasuwanci ko da kuwa ICER ɗinsa.

## Lissafin

```
BI_year_t = Cost_scenario_with_new(t) − Cost_scenario_current(t)

Cost_scenario(t) = Σ over patient groups:
   eligible population(t) × uptake(t) × net cost per patient(t)

net cost per patient = intervention cost − displaced care cost + induced care cost
```

Zaɓuɓɓukan ƙirar mabuɗi: girman al'ummar da suka cancanta, lanƙwasar karɓuwa (karɓa ba ya faruwa nan take), abin da sabon zaɓin ke maye gurbinsa, da duk buƙatar da yake *jawo* (sauƙin samuwa → ƙarin masu amfani).

## Misali da aka lissafa

Mai biya da ke rufe mutane miliyan 2 yana la'akari da maganin dijital a £300/majiyyaci/shekara; 1.5% na mambobi sun cancanta (30,000); karɓuwa 20% → 40% → 60% cikin shekaru 3; kowane mai amfani yana maye gurbin £120/shekara na wata kulawa.

```
Net cost per user = 300 − 120 = £180

Year 1: 30,000 × 0.20 × 180 = £1.08M
Year 2: 30,000 × 0.40 × 180 = £2.16M
Year 3: 30,000 × 0.60 × 180 = £3.24M
```

Ko da ICER ɗin samfurin ya kai £8,000/QALY mai ban mamaki, dole mai biya ya nemo £3.24M na *sabon kuɗi* da shekara ta 3 — £120 da aka maye gurbin an watsa shi siriri a layukan kasafin kuɗi dabam-dabam kuma ba za a saki shi a matsayin kuɗi ba (duba [mai sakin kuɗi da wanda ba ya sakin kuɗi](../tanadi-mai-sakin-kuɗi-da-wanda-ba-ya-sakin-kuɗi/)). Wannan ya sa daraja ga kowace naúra da iya biya shingaye dabam.

## Alaƙa da injiniyancin manhaja

BIA daidai ne abokin CFO na da'awar ROI ga kowane wurin zama: "yana da tasirin kuɗi ga kowane mai haɓakawa, amma za mu iya biyan fitar da shi a faɗin ƙungiya a wannan shekarar kuɗi?" A yi samfurin matakan lasisi, lanƙwasar S ta karɓuwa, kuɗin kayan aikin da aka maye gurbin da ke saki kuɗi ne kawai idan tsoffin kwangiloli suka ƙare, da amfani da aka jawo (CI mai arha → ƙarin CI). Gabatar da teburin tasirin kasafin kuɗi na shekaru 3 tare da ROI shi ne yake sa shawarar kayan aikin kamfani ta zama amintacciya ta fuskar kuɗi. Raba jimlar tasirin kasafin kuɗi da aka wallafa a tsakanin wurare, rukuni, ko shekarun kuɗi — tare da sassan suna daidaita daidai da lambar da aka wallafa — daidai [raba kuɗi daidai zuwa kobo](../raba-kuɗi-daidai-zuwa-kobo/) ne; haɗa layukan abubuwa da yawa da ke ciyar da jimlar tun farko shi ne [jimlar kuɗi mai tsaron kuɗin ƙasa](../jimlar-kuɗi-mai-tsaron-kuɗin-ƙasa/).

## Tarkuna

- **Mafarkin karɓuwa nan take**: tasirin shekara ta 1 da aka lissafa a karɓa na daidaitaccen yanayi.
- **Ƙidaya kuɗin da aka maye gurbin a matsayin kuɗi** alhali ƙarfi ne da aka warwatse.
- **Watsi da buƙatar da aka jawo** — inganta samuwa yana ƙara amfanin al'ummar da suka cancanta.
- **Rikita tsawon lokaci/rage daraja na BIA da CEA**: BIA gajeren lokaci ne, ba tare da rage daraja ba, na takamaiman mai biya da ƙira.

## Tushe

- Sullivan SD, et al. ISPOR BIA Good Practice II Task Force. Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
- ISPOR good practices: budget impact analysis. <https://www.ispor.org/heor-resources/good-practices/article/principles-of-good-practice-for-budget-impact-analysis-ii>
