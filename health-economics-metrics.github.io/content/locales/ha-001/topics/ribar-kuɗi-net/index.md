# Ribar Kuɗi Net (NMB)

NMB yana mayar da sakamakon binciken tasirin kuɗi zuwa ƙimar kuɗi ɗaya: ribar lafiya da aka yi mata farashi a kan iyakar shirin biya, rage kuɗin da aka kashe. Tagwayensa, Ribar Lafiya Net (NHB), yana bayyana ƙa'ida ɗaya a cikin naúrorin lafiya.

## Dalilin muhimmancinsa

Rabo ([ICER](../rabon-ƙarin-tasirin-kuɗi/)) yana da wahalar amfani: yana fashewa kusa da sifilin tasiri, ba za a iya matsakaita shi a faɗin zane-zanen rashin tabbas ba, kuma ba zai iya jera zaɓuɓɓuka uku ko fiye da tsafta ba. NMB yana gyara dukan waɗannan — yana da layi ɗaya, saboda haka za ka iya jera zaɓuɓɓuka, ka matsakaita zane-zanen Monte Carlo, ka kuma raba gudummawa. Shi ma salon lissafin tattalin arzikin lafiya ne da kowane injiniya ya riga ya sani: *daraja rage kuɗi*.

## Lissafin

```
NMB = (ΔE × λ) − ΔC
NHB = ΔE − (ΔC / λ)

ΔE = incremental effect (e.g., QALYs)
ΔC = incremental cost
λ  = willingness-to-pay threshold (see willingness-to-pay-thresholds.md)

Decision rule: adopt if NMB > 0 (equivalently NHB > 0).
Among alternatives: choose the highest NMB.
```

NMB > 0 ⇔ ICER < λ (idan ΔE > 0), don haka ƙa'idodin biyu sun yi daidai — NMB kawai ya fi kyakkyawan hali.

## Misali da aka lissafa

Zaɓuɓɓuka uku don sabis na ciwon sukari, ga kowane marasa lafiya 1,000, λ = £20,000/QALY:

```
Option           ΔC          ΔE (QALYs)   NMB = 20,000×ΔE − ΔC
App + coaching   £400,000    30           600,000 − 400,000 = £200,000
App only         £150,000    12           240,000 − 150,000 = £90,000
Extra clinics    £700,000    32           640,000 − 700,000 = −£60,000
```

Ƙarin asibitoci suna samun mafi yawan QALY amma suna lalata daraja a wannan iyaka (NMB < 0). Manhaja + horarwa ta yi nasara. Lura NMB yana ba ka damar *jera dukan uku lokaci ɗaya* — ICER na biyu-biyu zai buƙaci hanyar iyaka a cikin [mamaya da iyakar inganci](../mamaya-da-iyakar-inganci/), kuma ya kai ga amsa ɗaya.

Ra'ayin NHB na wanda ya yi nasara: 30 − 400,000/20,000 = 30 − 20 = **QALY 10 net** — lafiyar da aka samu fiye da abin da kuɗin ɗaya zai samar a wani wuri.

## Alaƙa da injiniyancin manhaja

`(hours saved × loaded hourly rate) − tool cost` — shari'ar kasuwanci ta kayan aiki ta yau da kullum — lissafin NMB ne a zahiri tare da λ = kuɗin injiniya mai kaya. Haɓaka biyu da tattalin arzikin lafiya ke ƙarawa:

- **Mayar da λ mai canzawa, ba tsayayye ba.** Zana NMB a kan λ ("darajar sa'ar injiniya") ka nuna inda shawarar ke juyawa; sai masu ruwa da tsaki daban-daban su yi amfani da nasu kimantawa ba tare da sake lissafinka ba.
- **Tunanin NHB**: "wannan dandali yana ceton sa'o'in injiniya 5,000 amma yana cinye kasafin da zai sayi sa'o'in ƙarfin ɗan kwangila 3,000 — net sa'o'i 2,000" yana tilasta kwatancen farashin damar da aka bari a naúrorin ƙarfi. Duba [farashin damar da aka bari](../farashin-damar-da-aka-bari/).

## Tarkuna

- **Ɓoye iyaka**: NMB ba shi da ma'ana ba tare da bayyana λ ba; bayar da rahoton NMB a £20k da £30k, ko zana lanƙwasa.
- **Amfani da NMB don wanke ƙananan tasiri**: babbar al'umma ninki ƙaramin tasiri ga mutum ɗaya na iya haifar da babban NMB — bayar da tasirin kowane mutum tare.
- **Mantawa NMB yana gadon kowane rashin tabbas** a ΔC da ΔE — haɗa shi da [binciken jin canji na yiwuwa](../binciken-jin-canji-na-yiwuwa/).

## Tushe

- York Health Economics Consortium glossary: net monetary benefit. <https://yhec.co.uk/glossary/net-monetary-benefit/>
- Stinnett AA, Mullahy J. "Net health benefits: a new framework for the analysis of uncertainty in cost-effectiveness analysis." <https://pmc.ncbi.nlm.nih.gov/articles/PMC2528971/>
