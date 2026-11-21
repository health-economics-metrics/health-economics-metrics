# Tantance Fasahar Lafiya (HTA)

HTA shi ne tsari na hukuma, da aka kafa a matsayin cibiya, wanda tsarin lafiya ke yanke shawara ko fasaha — magani, na'ura, ko manhaja — ta cancanci biya. Yana haɗa shaidar tasirin asibiti da kimantawar tattalin arziki a ƙarƙashin hanyar da aka wallafa, wajibi.

## Dalilin muhimmancinsa

Idan kana sayarwa ga hidimar lafiya ta ƙasa, hukumar HTA na iya yanke damar shiga kasuwarka a zahiri. Sanin tsarin gida shi ne sanin ainihin mai ƙa'idar darajarka:

- **NICE (Ingila)**: tantancewa na doka a ƙarƙashin *ƙa'idar tunani* da aka ayyana — QALY daga [EQ-5D](../eq-5d/), [mahangar](../mahangar-bincike/) NHS+PSS, [rage daraja](../rage-daraja-da-fifikon-lokaci/) 3.5%, ana buƙatar [PSA](../binciken-jin-canji-na-yiwuwa/) — ana yanke hukunci a kan £20k–£30k/QALY tare da [masu gyaran tsanani](../gibin-qaly-da-masu-gyaran-tsanani/); fasahar da ta ƙware sosai har zuwa £100k+ tare da nauyi.
- **ICER (Amurka, ba na gwamnati ba)**: rahotannin shaida tare da *ma'aunin farashin fa'idar lafiya* — farashin da samfuri zai zama mai tasirin kuɗi a $100k–$150k ga kowane QALY/evLYG — ana amfani da shi a matsayin ƙarfin tattaunawa; tare da "faɗakarwar iya biya" na tasirin kasafin kuɗi.
- **Kanada (CADTH → CDA-AMC)**: bitar mayar da kuɗi a ≈CAD$50k/QALY; a tarihi ta nemi rage farashi a ~95% na gabatarwa.

## Lissafin

Ƙarfin HTA ba dabara ba ce sai **hanyar da aka wajabta**: kowace gabatarwa tana lissafa [ICER](../rabon-ƙarin-tasirin-kuɗi/) iri ɗaya a ƙarƙashin ƙa'idodin ƙa'idar tunani iri ɗaya, don haka sakamako suna kwatantuwa tsakanin samfura da shekaru. Ƙa'idar tunani tana ƙayyade ma'aunin sakamako, kayan aikin amfani, mahanga, zaɓen abin kwatantawa, ƙimar rage daraja, tsawon lokaci, da nazarin rashin tabbas — tana cire kowane digiri na 'yanci da mai tallafi zai iya yin wasa da shi.

## Misali da aka lissafa

Maganin dijital yana gabatarwa ga kimantawa irin ta NICE:

```
Model: ΔC = +£450/patient, ΔE = +0.03 QALYs → ICER = £15,000/QALY ✓ under £20k
Reference-case checks:
  utilities from EQ-5D-5L with UK value set              ✓
  comparator = current care pathway (not "no treatment") ✓
  PSA: 71% probability cost-effective at £20k            ✓ (reported)
  severity modifier: shortfall below ×1.2 bounds         — none claimed
Recommendation: routine commissioning, with real-world data collection.
```

Binciken da mai tallafin ya fi so ya nuna £9,000/QALY; ƙa'idar tunani ta tura shi zuwa £15,000 ta hanyar tilasta abin kwatantawa na gaskiya. Wannan giɓi *shi ne* dalilin da ya sa ƙa'idodin tunani ke wanzuwa.

## Alaƙa da injiniyancin manhaja

Abin da ke wucewa shi ne **ƙa'idar tunani ta ciki**: hanya ɗaya da aka wajabta ga duk shari'o'in kasuwanci na kayan aiki/dandamali — abin kwatantawa da aka bayyana, kuɗin naúra na ma'auni (duba [kuɗin ƙasa da kuɗin naúra](../farashin-ƙasa-da-kuɗin-naúra/) don tsarin), ƙimar rage daraja tsayayye, nazarin jin canji da ake buƙata, samfurin daidaitacce. "Dossier irin na AMCP don kayan aiki" da aka gabatar ga majalisar dandamali yana sa shawarwari su kwatantu kuma wasa ya bayyana, daidai kamar yadda HTA ke yi wa magani. A fara ƙarami fiye da NICE: samfurin shafuka biyu tare da littafin farashi da aka wallafa ya fi rashin ma'auni gaba ɗaya.

Don yadda ake kwaikwayon samfurin HTA mai zagaye da yawa ƙungiya bayan ƙungiya, duba [kwaikwayon ƙungiya na Markov](../kwaikwayon-ƙungiya-na-markov/).

## Tarkuna

- **Ɗaukar HTA a matsayin tsari kawai bayan izinin ƙa'ida** — izinin CE/UKCA/FDA yana cewa samfur lafiya ne; HTA yana yanke ko *ya cancanci saye*. Shinge daban, shaida daban.
- **Gina samfurin tattalin arziki bayan gwaji** — ya kamata a tsara samar da shaida a baya daga buƙatun ƙa'idar tunani.
- **Watsi da bambancin hukunci**: ICER da za a iya ba da kuɗi a Amurka a $120k/QALY yana faɗuwa a NICE a £30k; a shirya shaida da farashi ga kowace kasuwa.

## Tushe

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER 2023 Value Assessment Framework. <https://icer.org/our-approach/methods-process/value-assessment-framework/>
- Canada's Drug Agency (CDA-AMC). <https://www.cda-amc.ca/>
