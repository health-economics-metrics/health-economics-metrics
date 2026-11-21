# Kwaikwayon Ƙungiya na Markov

Samfurin ƙungiya na Markov shi ne daidaitaccen dabarar ƙira ta HTA ga shiga tsakani da tasirinsu ke bayyana a tsawon lokuta da yawa (zagaye), ba a harbi ɗaya ba. Ƙungiyar hasashe tana farawa gaba ɗaya a yanayin lafiya ɗaya, kuma a kowane zagaye saitin yiwuwar sauyawa da aka tsayar yana motsa ɓangarorin ƙungiyar tsakanin yanayi; kuɗi da QALY suna taruwa a kowane zagaye gwargwadon yawan ƙungiyar da ke cikin kowane yanayi, kuma ana rage darajarsu zuwa darajar yanzu. Duk injiniyan manhaja da ke ƙera shari'ar kasuwanci ta lafiyar dijital ta shekaru da yawa — inda masu amfani ko marasa lafiya ke motsawa tsakanin yanayi kamar "mai shiga aiki", "ya yi kwanto", ko "ya bar amfani" a tsawon lokaci — yana gina tsari iri ɗaya.

## Dalilin muhimmancinsa

Yawancin shawarwarin fasahar lafiya na gaske ba kwatancen harbi ɗaya ba ne na kuɗi da sakamako na lokaci guda. Cuta ta dindindin tana ci gaba, tana sake dawowa, tana amsa magani, ko tana kashewa, a tsawon shekaru — kuma [binciken tasirin kuɗi](../binciken-tasirin-kuɗi/) na lokaci guda ba zai iya wakiltar hakan ba. Gabatarwar NICE, ICER, da CADTH don shiga tsakani na cututtuka na dindindin, da ake tantancewa ta [tantance fasahar lafiya](../tantance-fasahar-lafiya/), kusan koyaushe ana gina su a matsayin samfuran ƙungiya na Markov tare da tsawon lokacin rayuwa, domin madadin — ƙirar kowace hanyar majiyyaci ɗaya — ba za a iya magance ta a girma ba. Samfurin Markov na matakin ƙungiya yana musanya wasu gaskiyar matakin mutum ɗaya (ba zai iya wakiltar tunawa da yanayin da suka gabata ba cikin sauƙi, don haka "Markov": nan gaba ta dogara ne kawai a kan yanayin yanzu) da samfurin da yake bayyane, mai iya dubawa, kuma mai sauri isa a gudanar da shi dubban lokuta a [binciken jin canji na yiwuwa](../binciken-jin-canji-na-yiwuwa/).

## Lissafin

```
One cycle's cohort update (row-vector x transition matrix):
  new_state[j] = sum_i state[i] * transition_matrix[i][j]

One cycle's cost:
  cycle_cost = sum_s state[s] * cost_per_cycle[s]

One cycle's QALYs:
  cycle_qalys = sum_s state[s] * utility[s] * cycle_length_years

Full simulation over `cycles` cycles, discounted at `discount_rate`:
  total_discounted_cost  = sum_{t=0}^{cycles-1} cycle_cost(state_t)  / (1 + discount_rate)^t
  total_discounted_qalys = sum_{t=0}^{cycles-1} cycle_qalys(state_t) / (1 + discount_rate)^t
  where state_0 = initial_distribution, state_{t+1} = advance_cohort(state_t, transition_matrix)
```

Rage darajar kowane zagaye zuwa darajar yanzu yana amfani da dabarar [rage daraja da fifikon lokaci](../rage-daraja-da-fifikon-lokaci/) daidai, da aka shafa zagaye-bayan-zagaye maimakon shekara-bayan-shekara.

## Misali da aka lissafa

**Asibiti**: samfurin yanayi 2 — `Well` da `Dead` — inda 10% na ƙungiyar ke mutuwa a kowane zagaye kuma `Dead` yana ɗaukar (yiwuwar sauyawarsa zuwa kansa ita ce 1.0; barin wannan madauki zai sa yawan ƙungiyar ya ɓace bayan zagaye ɗaya a `Dead`). Ƙungiyar tana farawa gaba ɗaya `Well`, tana kashe £1,000 a kowane zagaye yayin `Well` (£0 da zarar `Dead`), kuma tana samun 0.8 QALY a shekara yayin `Well`. An kwaikwaya don zagayen shekara 3 a ƙimar rage darajar NICE ta 3.5%:

```
Cycle 0: state = [1.00, 0.00] (100% Well)
  cost = £1,000.00, qalys = 0.800, discount factor = 1.000000
  discounted: cost = £1,000.00, qalys = 0.8000

Cycle 1: state = [0.90, 0.10] (90% Well, 10% Dead)
  cost = £900.00, qalys = 0.720, discount factor = 0.966184
  discounted: cost = £869.57, qalys = 0.6957

Cycle 2: state = [0.81, 0.19] (81% Well, 19% Dead)
  cost = £810.00, qalys = 0.648, discount factor = 0.933511
  discounted: cost = £756.14, qalys = 0.6049

Total discounted cost  ≈ £2,625.71
Total discounted QALYs ≈ 2.1006
```

Yanayin kowane zagaye shi ne yanayin zagaye na baya da aka wuce ta matrix na sauyawa — 90% na 90% da suke har yanzu `Well` a zagaye na 1 suna ci gaba `Well` a zagaye na 2 (0.9 × 0.9 = 0.81), yayin da sauran 19% suka mutu yanzu (0.9 × 0.1 + 0.1 × 1.0 = 0.19). A lura cewa ƙungiyar ba ta taɓa ɓatar da `Well` gaba ɗaya ba: tare da mace-mace na 10% mai tsayayye a kowane zagaye kuma babu sake shiga, kason `Well` yana raguwa ta ninki maimakon ya kai sifili a kowane adadin zagaye mai iyaka.

## Alaƙa da injiniyancin manhaja

Don yadda ake amfani da samfurin HTA mai zagaye da yawa a cikin ainihin tantancewa, duba [tantance fasahar lafiya](../tantance-fasahar-lafiya/) — ƙa'idar tunani da ke mulkin wane ƙimar rage daraja, tushen amfani, da tsawon lokaci dole samfurin Markov da aka gabatar ya yi amfani da su.

Samfurin ƙungiya na Markov a tsari na'ura ce ta yanayi mai sauyawa ta yiwuwa, da ake gudanarwa tsawon adadin tik mai tsayayye, tana rage darajar kowane tik. Siffa ɗaya tana kwaikwayon sauyawar riƙewa/yanayin ƙungiyar masu amfani a tsawon lokaci — duba [ma'aunan DORA](../ma-aunan-dora/) don sigar amincin aiki ta "wane kaso na tsarin yake a yanayin lalacewa a wannan lokacin, kuma menene wannan ke kashewa". A zahiri:

- **Ƙirar riƙewa/barin amfani** samfurin ƙungiya na Markov ne tare da yanayi kamar "mai aiki", "cikin haɗari", "ya bar": matrix na sauyawa na wata-wata tsayayye, da aka gudanar na zagayen wata 12 ko 24, yana gaya maka adadin masu amfani masu aiki da ake tsammani (da kuɗin shiga) a kowane wata na gaba, daidai kamar yadda `Well`/`Dead` ke gaya maka masu tsira da ake tsammani.
- **Aminci da tattalin arzikin abubuwan da suka faru**: ana iya ƙera yanayin tsarin (lafiya, lalacewa, ya fadi) iri ɗaya, tare da "kuɗi ga kowane zagaye" na cutarwar rashin aiki da ke taruwa yayin da tsarin ke cikin yanayin lalacewa/faɗuwa — yana mayar da hujjar yawan abubuwan da suka faru zuwa hujjar kuɗi da aka rage daraja wadda za a iya kwatantawa da kuɗin aikin aminci da zai canza yiwuwar sauyawa.
- **Yanayin shanyewa a matsayin yanayin ƙarshe**: `Dead` a samfurin asibiti daidai yake da yanayin "biyan kuɗi da aka soke" ko "ya fita har abada" a samfurin manhaja — duka suna buƙatar yiwuwar sauyawa zuwa kai ta 1.0 a bayyane, in ba haka ba kwaikwayon yana asarar yawa a shiru.

## Tarkuna

- **Yiwuwar sauyawa da ba sa haɗuwa zuwa 1 ga kowane jere.** Jere da ya haɗu zuwa fiye ko ƙasa da 1 yana sa ƙungiyar "ta zube" ko "ta girma" a shiru a kowane zagaye — a koyaushe a duba jimlar jere kafin a amince da fitarwar samfuri, tun da babu abin da ke cikin tsarin samfurin da ke yin alamar kuskuren.
- **Tsawon zagaye mai girma ga ainihin ƙarfin cutar.** Zagayen shekara ga yanayin da ke canza yanayi a cikin makonni yana ƙasƙantar da sauyawar da ke faruwa a tsakiyar zagaye; a zaɓi tsawon zagaye gajere dangane da yadda tsarin da aka ƙera ke motsawa a zahiri.
- **Mantawa da madauki na kai na yanayin shanyewa.** Yanayin shanyewa (mutuwa, dakatar da ɗaukar magani na dindindin) yana buƙatar yiwuwar sauyawa zuwa kai ta daidai 1.0. Idan aka bar ta, yawan ƙungiyar a wannan yanayin yana ƙafewa bayan zagaye ɗaya, yana ƙasƙantar da kuɗin da ke taruwa ko asarar QALY.
- **Ɗaukar samfurin a matsayin wanda aka tabbatar domin yana gudana.** Samfurin ƙungiya na Markov mai yiwuwar sauyawa masu kama da gaske na iya kasancewa mara daidai a tsari (yanayi da suka ɓace, ɗabi'ar shanyewa mara kyau); a tabbatar da shi a kan ma'aunin cututtuka da aka sani (misali ko rayuwar da aka ƙera a shekaru 5 ta dace da lanƙwasar rayuwa da aka wallafa) kafin a amince da fitarwar.

## Tushe

- Sonnenberg FA, Beck JR. "Markov models in medical decision making: a practical guide." Medical Decision Making. 1993;13(4):322-38. <https://pubmed.ncbi.nlm.nih.gov/8246705/>
- Briggs A, Sculpher M. "An introduction to Markov modelling for economic evaluation." PharmacoEconomics. 1998;13(4):397-409. <https://pubmed.ncbi.nlm.nih.gov/10178664/>
