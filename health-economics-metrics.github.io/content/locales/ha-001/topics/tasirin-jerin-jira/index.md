# Tasirin Jerin Jira

Tasirin jerin jira yana mayar da ƙarfin asibiti da aka ceta zuwa marasa lafiya da aka cire daga (ko aka motsa da sauri ta cikin) jerin jira. Mayar da sa'o'in da aka ceta zuwa ƙarin ramukan asibiti yana rage girman jerin jira na asibiti kai tsaye — hanya mafi bayyana ta nuna wa tsarin lafiya abin da ƙarfin da aka 'yanta yake *wa*.

## Dalilin muhimmancinsa

Jerin jiran tiyata da aka zaɓa shi ne ƙalubalen NHS na bayan annoba (girmansa ma'aunin siyasa ne na ƙasa), kuma kowane asibiti yana gudanar da shirin farfaɗowa na zaɓaɓɓun tiyata a kansa. Shari'ar kasuwanci da ke cewa "tana ceton sa'o'in ma'aikacin jinya 2,000" ta zahiri ce; wadda ke cewa "tana ƙirƙirar ƙarin ramukan alƙawari 4,000, tana ganin marasa lafiya 3,800 da ke jira, tana rage jerin fannin da 9%" labari ne da Babban Jami'in Aiki zai iya kai wa hukumarsa. Tasirin jerin jira shi ne *naúrar lissafi* ta halitta ga [ƙarfi mara sakin kuɗi](../tanadi-mai-sakin-kuɗi-da-wanda-ba-ya-sakin-kuɗi/).

## Lissafin

```
Extra slots        = hours released / slot duration × utilization
Patients seen      = extra slots × (1 − DNA rate)
List reduction     = patients seen − induced new demand
Waiting-time gain  = queueing improvement from higher service rate
                     (for stable queues, cutting the backlog N by ΔN at
                     service rate μ pulls everyone forward ~ΔN/μ)
```

Darajar lafiya ta gajeren jira: marasa lafiya suna ɗaukar ƙarancin makonni a yanayin amfani na kafin magani — lissafin QALY a cikin [daga turawa zuwa magani](../daga-turawa-zuwa-magani/).

## Misali da aka lissafa

Manhajar rubutun takardu ta kai-tsaye tana ceton kowane ma'aikacin jinya na asibiti 20 mintuna 45/rana. A kwanaki 250: 20 × 0.75 × 250 = sa'o'i 3,750/shekara.

```
Slots (30 min, 85% usable) = 3,750 / 0.5 × 0.85 = 6,375 slots
Patients seen (7% DNA)     = 6,375 × 0.93       ≈ 5,929/year
```

Ga fanni mai jerin marasa lafiya 12,000 da alƙawura 24,000/shekara na ƙarfin da ya dace da buƙata, ƙarin alƙawura ~5,900 suna rage matsakaicin jira da kusan kwata — suna motsa asibitin sosai zuwa ƙa'idar makonni 18 ba tare da daukar ma'aikata ba. A ~£160 darajar tarifi ga kowane halarta, aikin yana da daraja ~£949,000/shekara (duba [farashin ƙasa da kuɗin naúra](../farashin-ƙasa-da-kuɗin-naúra/)) — amma gabatar da tsarin *jerin jira* da farko; shi ne wanda ake gudanar da tsarin a kai.

## Alaƙa da injiniyancin manhaja

Jerin jira tarin aiki ne, kuma tattalin arzikin rage tarin aiki yana canjawa a hanyoyi biyu. Daga lafiya zuwa manhaja: daraja rage tarin aiki da tsawon lokacin da *masu amfani* ke jira ga ƙima, ba ta abubuwan da aka rufe ba ([kuɗin jinkiri](../kuɗin-jinkiri/) ga kowane abu da ke jira). Daga manhaja zuwa lafiya: Dokar Little ta ce jerin yana raguwa ne kawai idan adadin hidima ya wuce adadin zuwa — ribar ƙarfi da turawa masu ƙaruwa ke sha tana barin jira ba canji, don haka ƙirƙiri masu zuwa ma. Kuma a fagage biyu, fifita bisa daraja da aka auna da tsanani (rukunan gaggawar asibiti ↔ [masu gyaran tsanani](../gibin-qaly-da-masu-gyaran-tsanani/)), ba na farko-shiga-na-farko-fita ba.

## Tarkuna

- **Ramuka ≠ marasa lafiya**: mantawa da adadin rashin halarta da ɓangarorin lokacin da aka saki da ba za a iya amfani da su ba.
- **Buƙatar da aka jawo**: ƙarin ƙarfi da ake gani yana jan turawa; tasirin jerin net ya fi na jimilla ƙanƙanta.
- **Da'awar kuɗi**: tasirin jerin jira darajar ƙarfi ce; da'awar kuɗi (fitar da aikin tarin aiki waje da aka kauce wa) layi ne daban — duba [kuɗin fitar da aiki waje da za a iya kauce wa](../kuɗin-fitar-da-aiki-waje-da-za-a-iya-kauce-wa/).

## Tushe

- NHS England, RTT waiting times statistics. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
