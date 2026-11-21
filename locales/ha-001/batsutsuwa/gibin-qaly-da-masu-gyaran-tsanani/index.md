# Gibin QALY da Masu Gyaran Tsanani

Gibin QALY yana auna lafiyar nan gaba da cuta ke ɗauka daga marasa lafiya idan aka kwatanta da al'umma gabaɗaya. NICE tana amfani da shi don amfani da **masu gyaran tsanani**: yadda al'umma ke da rashin lafiya sosai, haka kowane QALY da aka samu ke da daraja — har zuwa 1.7× na iyaka ta ƙa'ida.

## Dalilin muhimmancinsa

Tun daga ƙa'idar NICE ta 2022, tsanani ma'auni ne bayyananne a kan darajar ribar lafiya, wanda ya maye gurbin tsohon ƙarin ƙarshen rayuwa. Ana auna fasaha ga yanayi mai tsanani a kan iyaka mai tasiri har ~£51,000/QALY maimakon £30,000. Idan manhajarka tana yi wa al'umma mai tsananin cuta hidima (ciwon zuciya mai ci gaba, tabin hankali mai tsanani), mai gyaran tsanani na iya zama bambanci tsakanin shari'ar tattalin arziki da ake ba da kuɗi da wadda ba a bayarwa — kuma kana buƙatar lissafin gibi don da'awarsa.

## Lissafin

Ma'auni biyu, ana lissafa a sauran tsawon rayuwa da kulawar ƙa'ida ta yanzu:

```
Absolute shortfall     = QALYs_general_population − QALYs_with_condition
Proportional shortfall = Absolute shortfall / QALYs_general_population
```

Nauyin NICE na 2022 (ma'aunin da ya ba da nauyi mafi girma shi ke aiki):

```
Weight ×1.0: absolute < 12 and proportional < 0.85
Weight ×1.2: absolute ≥ 12 or proportional ≥ 0.85
Weight ×1.7: absolute ≥ 18 or proportional ≥ 0.95
```

Nauyin yana ninka ΔE (ko iyaka daidai): λ mai tasiri ya zama £24k–£36k a ×1.2 da £34k–£51k a ×1.7.

## Misali da aka lissafa

Marasa lafiya masu yanayi mai tsanani, matsakaicin shekaru 60. Al'umma gabaɗaya a 60 tana tsammanin QALY 14.2 da aka rage daraja; tare da yanayin a kulawa ta yanzu, 2.1.

```
Absolute shortfall     = 14.2 − 2.1 = 12.1  (≥ 12 → qualifies for ×1.2)
Proportional shortfall = 12.1 / 14.2 = 0.852 (≥ 0.85 → also ×1.2)
```

ICER na dandalin sa ido naka £26,000/QALY ne — sama da hukuncin tsakiyar £20k–£30k na ƙa'ida, kan iyaka. Tare da nauyin ×1.2: ICER mai tasiri = 26,000 / 1.2 ≈ **£21,700/QALY** — ana iya ba da kuɗi cikin sauƙi. Lissafin gibi ya motsa shawarar.

## Alaƙa da injiniyancin manhaja

Nauyin tsanani sigar hukuma ce ta abin da ƙungiyoyin injiniya ke yi da ilhami: kashe ƙari ga kowace naúrar ingantuwa a kan tsarin da suka fi muni. Tsarin da za a iya canjawa — lissafa "gibin SLO" na kowane sabis (nisan da yake ƙasa da tushen lafiyarsa da ake tsammani, cikakke da na kashi), sannan a ba da nauyin ƙimar gyara daidai. Wannan yana hujjar, da lissafi maimakon muhawara, dalilin da tsohon tsarin da ke ƙonewa ke samun ƙarin jari ga kowace sa'a da aka ceta fiye da lafiyayye. Yana kuma ɗauke da darasin shugabanci iri ɗaya: buga nauyin *kafin* taron fifiko, ko kowane ƙungiya zai yi da'awar tsanani.

## Tarkuna

- **Lissafin gibi a kan tushe mara kyau**: ana auna shi a ƙarƙashin *kulawar ƙa'ida ta yanzu*, ba tarihin halitta ba tare da magani ba.
- **Hankalin shekaru**: gibi yana dogara sosai da shekarun al'umma (marasa lafiya ƙanana suna da ƙarin QALY da za su rasa → mafi girman gibi cikakke); yi amfani da rarraba shekarun al'ummar da aka yi wa magani da gaske.
- **Zaton mai gyaran yana aiki a wani wuri** — tsari ne na NICE (Ingila); sauran hukumomin HTA suna kula da tsanani daban (ko ba komai).

## Tushe

- Analysis of NICE severity modifier decisions, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Mtech Access, NICE HTA decision modifiers explainer. <https://mtechaccess.co.uk/nice-hta-decision-modifier/>
