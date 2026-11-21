# Kwatanta ICER Tsakanin Kuɗaɗe

Kwatanta [ICER](../rabon-ƙarin-tasirin-kuɗi/) da aka lissafa a kuɗin ƙasa ɗaya da [iyakar shirin biya](../iyakokin-shirin-biya/) na wata ƙasa — ko haɗa bayanan kuɗi da aka tattara a gwajin ƙasashe da yawa — yana buƙatar matakin sauya kuɗi bayyananne, mai iya dubawa. Idan aka yi kuskure a hanyar sauyawa, shaida ɗaya na iya juya shawarar ɗauka, ko da babu abin da ya canza a bayanan asibiti ko na kuɗi.

## Dalilin muhimmancinsa

Jagorar hanyoyin ISPOR don gwajin asibiti na ƙasashe da yawa (Willke et al., *Health Economics*, 1998) tana ba da shawarar sauya kuɗin albarkatu ta amfani da **daidaiton ikon sayayya (PPP)** — ba farashin musayar kasuwa ba — lokacin da ake kwatanta ainihin darajar tattalin arziki ta albarkatu tsakanin ƙasashe, da ajiye farashin musayar kuɗin ƙasashen waje don abin da aka yi su domin: ƙirar kwararar biyan kuɗi ta zahiri a tsakanin iyakoki. Rikita biyun yana ɗaya daga cikin kurakuran hanyoyin HTA na ƙasashe da yawa mafi yawa, daidai saboda duka suna kama da "farashin musaya" ga wanda bai karanta jagorar ba, kuma takardar lissafi ba ta hana ka yin kuskure.

## Lissafin

```
icer_in_local_currency = convert(icer_in_source_currency, conversion_factor)

conversion_factor should be:
  PPP conversion factor  — for comparing real economic value of resources
                            across countries (ISPOR-recommended for
                            multinational CEA)
  market FX rate         — only for actual cross-border cash payments

adopt if icer_in_local_currency < local_threshold
```

Ka'idar yanke shawara da kanta ita ce [ka'idar iyakar ICER](../iyakokin-shirin-biya/) ta al'ada — `adopt if ICER < λ` — tambayar hanyar da wannan maudu'i ke magana a kai gaba ɗaya game da *wane abin sauyawa* ne ke samar da lambar `icer_in_local_currency` da ake amfani da wannan ka'ida a kai.

## Misali da aka lissafa

ICER na magani daga gwajin Amurka ya kai $45,000/QALY. Wata ƙasa mai shigo da kaya ta hasashe tana saita iyakarta ta misali a £34,000/QALY (lambar hasashe ta takamaiman ƙasa don wannan misalin kawai — ainihin iyakoki suna bambanta bisa ƙasa kuma suna canzawa bisa lokaci, kuma dole a koyaushe a bayyana tushensu da ranarsu).

**Ta amfani da abin sauyawa na PPP na 0.72** (na misali, don wannan misalin kawai): $45,000 × 0.72 = £32,400/QALY. £32,400 < £34,000 → **ɗauka**.

**Ta amfani da farashin musayar kasuwa na 0.79** maimakon haka (na misali): $45,000 × 0.79 = £35,550/QALY. £35,550 > £34,000 → **ƙi**.

ICER ɗaya na $45,000/QALY yana samar da shawarar ɗauka a ƙarƙashin sauyawar PPP da shawarar ƙi a ƙarƙashin sauyawar kasuwar FX. Wannan shi ne misalin da ke nuna dalilin da ya sa jagorar ISPOR ke ɗaukar zaɓin abin sauyawa a matsayin mai tasiri a hanya — ba cikakkun bayanan zagaye ba, kuma ba wani abu da za a bari a ɓoye a cikin dabarar takardar lissafi da ba wanda ke sake dubawa ba.

## Alaƙa da injiniyancin manhaja

Wannan madubin tattalin arzikin lafiya ne na sanannen fannin injiniya: daidaiton farashin kuɗaɗe da yawa na i18n/l10n a manhajar kasuwanci, inda shafin farashin SaaS bai kamata ya kwatanta adadin `$` da farashin `£` a shiru ba. Tabbacin matakin nau'i da ingantaccen nau'in `Money` ke bayarwa — hanyoyin kwatanta da ke ƙin kwatanta kuɗaɗe marasa daidaito, suna tilasta matakin sauyawa a bayyane tukuna — daidai takwaran injiniyancin manhaja ne na batun hanyar tattalin arzikin lafiya a nan: kar a kwatanta alkaluma marasa sauyawa a tsakanin kuɗaɗe, kuma kar a bar matakin sauyawa ya zama a ɓoye ko ba a rubuta shi ba.

## Tarkuna

- **Kwatanta adadin kuɗaɗe dabam-dabam a shiru**: aikin HTA na takardar lissafi na kai-kai da ke ragewa ko kwatanta alkaluman dala da fam ba tare da matakin sauyawa tukuna ba — aji na kwaro da ainihin nau'in `Money` mai sanin kuɗi ke kamawa ta ƙira maimakon barin shi a matsayin kuskure a shiru.
- **Rikita farashin musayar kasuwa da PPP**: kuskuren hanyoyin HTA na ƙasashe da yawa mafi yawa bisa jagorar ISPOR — lambobin biyu na iya bambanta sosai kuma suna amsa tambayoyi daban (ainihin darajar tattalin arziki da ainihin kwararar kuɗi).
- **Rashin ranar farashin musaya ko ma'aunin PPP da aka yi amfani da shi**: duka suna motsawa bisa lokaci, don haka duk wani abin sauyawa da aka ambata dole a ranace shi yadda wannan ma'ajiya ke ranar sauran alkaluman ma'aunin ta (ƙimar carbon ta Green Book, darajar mutuwa da aka hana, da sauransu).

## Tushe

- Willke RJ, Glick HA, Polsky D, Schulman K. "Estimating country-specific cost-effectiveness from multinational clinical trials." *Health Economics*. 1998;7(6):481-93.
- OECD, Purchasing Power Parities (PPP) data. <https://www.oecd.org/en/data/indicators/purchasing-power-parities-ppp.html>
