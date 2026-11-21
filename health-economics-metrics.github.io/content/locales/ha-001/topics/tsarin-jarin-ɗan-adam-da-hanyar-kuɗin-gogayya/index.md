# Tsarin Jarin Ɗan Adam da Hanyar Kuɗin Gogayya

Waɗannan hanyoyi biyu ne masu gogayya na ƙimanta asarar aiki — daga rashin lafiya, nakasa, ko mutuwa — a binciken kuɗin cuta da riba-da-kuɗi. Tsarin Jarin Ɗan Adam (HCA) yana ƙimanta dukan fitarwar da aka rasa na cikakken tsawon rashin zuwa a ƙimar albashi; Hanyar Kuɗin Gogayya (FCM) tana ƙimanta ta ne kawai ga gajeren lokacin da mai ɗaukar aiki ke buƙata don mayar da samarwa. Zaɓi tsakaninsu yana canza ƙiyasin kuɗin kai tsaye da ninki biyu ko fiye.

## Dalilin muhimmancinsa

Kuɗaɗen kai tsaye (na aiki) suna ɗaya daga cikin layukan abubuwa da aka fi jayayya a tattalin arzikin lafiya daidai domin hanyoyin ma'auni biyu suna saɓawa sosai. HCA tana ɗaukar kowace ranar rashin zuwa a matsayin ranar fitarwa da tattalin arziki ya rasa da gaske, an ƙimanta ta a cikakken albashi na cikakken tsawon lokaci — ko, ga mutuwa ko nakasa ta dindindin, ga sauran rayuwar aiki. FCM tana hujjar cewa a tattalin arziki mai rashin aikin yi da sassaucin kasuwar ƙwadago, yawancin dogon rashin zuwa ba ya rage fitarwar ƙasa da gaske da zarar mai ɗaukar aiki ya horar da maye gurbi ko ya sake raba aiki; "lokacin gogayya" kawai — lokacin mayar da samarwa zuwa matakinsa na baya — shi ne asara ta gaske. Don haka FCM tana samar da ƙiyasin kuɗin kai tsaye na ƙasa, mafi taka tsantsan fiye da HCA, kuma hanyoyin biyu ba bayanan ƙasa masu musanyawa ba ne: ra'ayoyin tattalin arziki ne daban game da abin da "asarar aiki" ke nufi. Wannan kuma shi ne dalilin da ya sa [ƙa'idar tunani ta NICE](../tantance-fasahar-lafiya/) ke cire kuɗin aiki a tsohuwa, tana bayar da rahoton su, idan ma ta yi, a matsayin nazarin jin canji na mahangar al'umma daban maimakon haɗa su cikin ICER na ƙa'idar tunani — duba [mahangar bincike](../mahangar-bincike/).

## Lissafin

```
Human Capital Approach:
HCA_cost = daily_wage × days_lost

Friction Cost Method (simplified, capped-at-friction-period form):
FCM_cost = daily_wage × min(days_lost, friction_period_days)

friction_period_days = country/sector-specific estimate of time-to-restore
                        production (historically ~85 days in Dutch iMTA
                        costing guidance; varies by country and is
                        periodically re-estimated)
```

Dukan saɓanin hanyoyin biyu yana cikin `min()`: HCA ba ta taɓa iyakance `days_lost` ba, don haka kuɗi yana ci gaba da girma a duk tsawon rashin zuwa, yayin da FCM ke iyakance ranakun da ake ƙidayawa a lokacin gogayya, komai tsawon ainihin rashin zuwa.

## Misali da aka lissafa

Ma'aikaci ba ya aiki na `days_lost = 180` kwana, yana samun `daily_wage = £150`.

**Tsarin Jarin Ɗan Adam**:

```
HCA_cost = 150 × 180 = £27,000
```

**Hanyar Kuɗin Gogayya**, ta amfani da lokacin gogayya na `friction_period_days = 85` (ma'aunin iMTA na Holland na tarihi, har zuwa sake ƙiyasin jagorar na lokaci-lokaci):

```
FCM_cost = 150 × min(180, 85) = 150 × 85 = £12,750
```

£12,750 na FCM ya ƙasa da rabin £27,000 na HCA ga rashin zuwa *iri ɗaya* — zaɓin hanya kaɗai yana canza shari'ar kuɗin cuta sosai, kafin a taɓa kowane zato.

## Alaƙa da injiniyancin manhaja

Wannan yana dacewa kai tsaye da yadda ƙungiya ke ƙimanta tafiyar injiniya:

- **Ƙididdigar tafiya irin ta HCA**: ƙimanta asarar a matsayin cikakken albashin injiniyan da ya tafi na tsawon lokacin da aikin ke zama fanko. Wannan shi ne sigar maras zurfi ta yawancin samfuran kuɗin tafiya, kuma tana ƙara asarar saboda dalili iri ɗaya da HCA ke ƙara asarar aiki — tana zaton ƙarfin da ya zama fanko ya kasance mai aiki sosai a duk lokacin kuma babu abin da ya sha giɓin. Duba [riƙe ma'aikata](../riƙe-ma-aikata/), wanda ke ƙididdige sarkar ɗaukar aiki/shiga/rufe wurin fanko da wannan hanyar ke ciyarwa.
- **Ƙididdigar tafiya irin ta FCM**: ƙimanta asarar ne kawai ga ainihin lokacin cike-da-koyo na maye gurbi — "lokacin gogayya" na injiniya. Wannan shi ne lambar da za a iya kare ta ga shari'ar kasuwanci, daidai kamar FCM ita ce zaɓi mafi taka tsantsan a binciken kuɗin cuta.
- Horon da ke ƙasa iri ɗaya ne da na [farashin damar da aka bari](../farashin-damar-da-aka-bari/): a ƙimanta albarkatun da aka maye gurbi da abin da aka rasa da gaske, ba da kanun tsawon lokaci ninka ƙima ba.

## Tarkuna

- **Haɗa HCA da FCM a bincike ɗaya, ko bayar da rahoton ɗaya ba tare da bayyana zaɓin ba.** Bayanan rashin zuwa iri ɗaya na iya samar da bambanci na 2x+ a kuɗin da aka bayar da rahoto bisa hanya; dole a bayyana zaɓin, ba a ɓoye shi ba.
- **Amfani da HCA ga shari'ar mahangar al'umma ba tare da yin alama da cewa nazarin jin canji ne ba.** Ƙa'idar tunani ta NICE a bayyane tana cire kuɗin aiki; ƙiyasin HCA na mahangar al'umma yana cikin nazarin yanayi, ba ICER na kanun labarai ba.
- **Amfani da duka hanyoyin ga aikin da ba a biya ko wanda ba na kasuwa ba (misali kula) ba tare da gyara ba.** Duka hanyoyin suna zaton wakilin ƙimar albashi don daraja, wanda ba ya wucewa da tsabta zuwa aikin da ba shi da albashin kasuwa.

## Tushe

- Koopmanschap MA, Rutten FFH, van Ineveld BM, van Roijen L. "The friction cost method for measuring indirect costs of disease." Journal of Health Economics 1995;14(2):171-89.
- Drummond MF, Sculpher MJ, Claxton K, Stoddart GL, Torrance GW. "Methods for the Economic Evaluation of Health Care Programmes." 4th ed. Oxford University Press — topic on productivity costs.
- NICE health technology evaluations manual (PMG36) — reference-case perspective and optional societal-perspective guidance. <https://www.nice.org.uk/process/pmg36>
