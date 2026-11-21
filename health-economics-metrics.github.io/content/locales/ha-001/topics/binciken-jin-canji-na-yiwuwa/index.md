# Binciken Jin Canji na Yiwuwa (PSA)

PSA yana ba da rarraba yiwuwa ga kowane sigar da ba ta da tabbas, yana ɗaukar samfurinsu duka lokaci ɗaya dubban lokuta (Monte Carlo), kuma yana bayar da rahoton *yiwuwar* cewa zaɓi shi ne mafi kyau — maimakon kiyasin wuri ɗaya.

## Dalilin muhimmancinsa

Tsarin tunani na NICE *yana buƙatar* PSA. Bincike na tabbatacce yana amsa "idan shigarwa ɗaya ba daidai ba?"; PSA yana amsa "la'akari da duk abin da ba mu sani ba a lokaci ɗaya, yaya yiwuwar cewa muna yin shawara daidai?" Sakamakonsa na alama, **lanƙwasar karɓuwar tasirin kuɗi (CEAC)**, yana zana yiwuwar zaɓi yana da tasirin kuɗi a kan iyakar shirin biya — yana mayar da "ICER £24,000/QALY ne" zuwa "akwai damar 78% wannan shi ne zaɓi daidai a £30,000/QALY."

## Lissafin

```
For each of N draws (N ≈ 10,000):
  sample every parameter θ from its distribution
    (costs ~ Gamma, probabilities ~ Beta, utilities ~ Beta, effects ~ Normal/logNormal)
  compute NMB_j(θ) = λ × Effect_j(θ) − Cost_j(θ) for each option j

CEAC_j(λ) = fraction of draws in which option j has the highest NMB at threshold λ
```

Duba [ribar kuɗi net](../ribar-kuɗi-net/) don NMB da [iyakokin shirin biya](../iyakokin-shirin-biya/) don λ.

## Misali da aka lissafa

Shari'ar kasuwanci ta ƙaura dandali. Shigarwa uku marasa tabbas:

```
Migration cost      ~ Gamma,  mean £800k, sd £200k
Annual benefit      ~ Normal, mean £350k, sd £150k
Benefit duration    ~ Uniform, 3–6 years
```

Ga kowane zane 10,000 a lissafa net benefit = duration × annual − cost (an bar rage daraja don sauƙi). Sakamako na misali:

```
Mean net benefit:      £775k
Probability net > 0:   0.86
5th–95th percentile:  −£180k … +£1.9M
```

Kiyasin wuri ɗaya ya ce "tabbas eh." PSA ya ce "86% eh, tare da wutsiya ta gaske inda muke rasa £180k+" — wanda shi ne abin da mai fayil ke buƙata da gaske, kuma yana ƙididdige farashin shari'ar gudanar da gwajin bincike tukuna (duba [EVPI](../darajar-da-ake-tsammani-ta-cikakken-bayani/)).

## Alaƙa da injiniyancin manhaja

Injiniyoyi sun riga sun amince da Monte Carlo don hasashen isarwa (samfurin kayan aiki ya fi kiyasin wuri). Faɗaɗa na'ura ɗaya zuwa kuɗi: rarrabawa a kan karɓuwa, lokacin da aka ceta, da albashi, sannan a ba da rahoton "yiwuwar wannan jarin dandali na net-mai kyau ne" maimakon ROI na ƙarya daidai. Lanƙwasa irin CEAC — yiwuwar kasancewa mafi kyawun zaɓi a matsayin aikin yadda ƙungiya ke darajar sa'ar injiniya — hakika ya fi kowace lamba ɗaya ga kwamitin ba da kuɗi.

## Tarkuna

- **Rarrabuwa mara kyau**: PSA da aka ƙirƙira daidaitattun karkacewa bincike ne na tabbatacce sanye da rigar dakin gwaji. Kafa yaɗuwa a kan bayanai ko tattara ra'ayin ƙwararru mai tsari.
- **Watsi da alaƙa** tsakanin sigogi (babban karɓuwa yawanci yana alaƙa da babban lokacin da aka ceta); samfur mai zaman kansa yana rage haɗarin wutsiya.
- **Bayar da rahoton matsakaici kawai** na kwaikwayon — dukan manufar rarrabawa ce da yiwuwar shawara.

## Tushe

- Fenwick E, Claxton K, Sculpher M. "Representing uncertainty: the role of cost-effectiveness acceptability curves." Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11316594/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
