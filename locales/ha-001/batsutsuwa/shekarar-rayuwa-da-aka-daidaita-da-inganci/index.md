# Shekarar Rayuwa da Aka Daidaita da Inganci (QALY)

QALY shekara ɗaya ce ta rayuwa cikin cikakkiyar lafiya. Yana haɗa *tsawon* da mutane ke rayuwa da *ingancin* rayuwarsu, don haka shekara cikin rashin lafiya tana ƙidaya ƙasa da QALY ɗaya — yana mai da shiga tsakani na lafiya daban-daban gaba ɗaya a kwatankwacin ma'auni ɗaya.

## Dalilin muhimmancinsa

QALY shi ne kuɗin gama-gari na tantance fasahar lafiya. NICE (Ingila) tana darajar ribar lafiya a **£20,000–£30,000 ga kowane QALY**: shiga tsakani da ke sayen QALY ƙasa da wannan iyaka yawanci ana ba da shawarar sa; wanda ya fi tsada yawanci ana ƙi. Wannan lamba ɗaya ita ce yadda hidimar lafiya ta ƙasa ke kwatanta maganin ciwon daji, maye gurbin kwatangwalo, da manhajar rarrabawa a kan gatari ɗaya. Idan manhajarka za ta iya da'awar QALY cikin sahihanci — ta hana ta'azzara, ta gaggauta magani, ko ta inganta tsaro — za ka iya yi wa darajar lafiyarta farashi a kuɗi ɗaya da magani.

## Lissafin

```
QALYs = Σ_i (duration_i × utility_i)

duration_i = years spent in health state i
utility_i  = quality weight of state i, anchored at 1 = perfect health, 0 = dead
             (negative values allowed for states worse than death)
```

Nauyin amfani yana fitowa daga kayan aikin da aka tabbatar, mafi yawa [EQ-5D](../eq-5d/). *Ribar* QALY daga shiga tsakani ita ce bambanci tsakanin rafukan QALY da ba tare da shi ba, [an rage daraja](../rage-daraja-da-fifikon-lokaci/) a 3.5%/shekara a tsarin tunani na NICE.

## Misali da aka lissafa

Majiyyaci yana jiran maganin zuciya a yanayi mai amfani 0.6. Magani yana mayar da shi zuwa amfani 0.85.

- **An yi masa magani yanzu**: shekara 1 a 0.85 = QALY 0.85 a wannan shekara.
- **An yi masa magani bayan jinkirin wata 6**: 0.5 × 0.6 + 0.5 × 0.85 = QALY 0.725.
- **Asarar QALY ga kowane majiyyaci daga jinkiri**: 0.85 − 0.725 = **QALY 0.125**.

Idan aka mayar da shi kuɗi a iyakar NICE: 0.125 × £20,000–£30,000 = **£2,500–£3,750 na darajar lafiya da aka rasa ga kowane majiyyaci a kowane jinkirin wata 6**. Idan manhajar da ke gaggauta hanya ta cire wannan jinkiri ga marasa lafiya 400/shekara, darajar lafiya QALY 50 ce ≈ **£1.0–£1.5 miliyan/shekara** — kafin ƙirga kowane tanadin aiki.

## Alaƙa da injiniyancin manhaja

- **Hanyoyi masu sauri = QALY na farko.** Duk abin da ya rage [daga turawa zuwa magani](../daga-turawa-zuwa-magani/) yana mayar da rashin amfanin lokacin jira zuwa ribar lafiya, an daraja kamar na sama.
- **Tsaro = QALY da aka kiyaye.** Kurakuran magani da aka hana da gano cututtuka da aka rasa asarar QALY ce da aka kauce wa.
- **QALY kuma samfurin ƙirar ma'auni ne**: haɗin yawa × inganci, tare da nauyin inganci da aka fitar daga kayan aiki na ƙa'ida. "Shekarar injiniya da aka daidaita da inganci" (lokaci × nauyin binciken DevEx) gini ɗaya ne — duba [SPACE da DevEx](../space-da-devex/).
- Don mayar da QALY zuwa kuɗi don shari'ar kasuwanci, yi amfani da [ribar kuɗi net](../ribar-kuɗi-net/); don mayar da su shawara, yi amfani da [iyakokin shirin biya](../iyakokin-shirin-biya/).

## Tarkuna

- **Ƙirƙirar nauyin amfani.** Nauyi dole ya fito daga kayan aikin da aka tabbatar (EQ-5D) da ƙimar da aka buga, ba hankali ba.
- **Da'awar QALY ba tare da hanyar dalili ba.** "Manhajarmu tana inganta jin daɗi" ba da'awar QALY ba ce; "tana cire makonni X na jira a amfani 0.6" ita ce.
- **Ƙirga sau biyu**: da'awar ribar QALY da tanadin kuɗi na ta'azzara ɗaya da aka kauce wa yana buƙatar kulawa cewa a zahiri sun rabu.
- **Makantar adalci**: QALY yana darajar ƙarin shekarar rayuwa da amfanin tushe, wanda zai iya cutar da masu nakasa — dalilin da ICER (Amurka) ke bayar da rahoton evLYG ma (duba [shekarun rayuwa da aka samu](../shekarun-rayuwa-da-aka-samu/)).

## Tushe

- NICE glossary: QALY. <https://www.nice.org.uk/glossary?letter=q>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
