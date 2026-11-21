# Ma'aunan Gudana

Ma'aunan gudana suna auna yadda aiki ke motsawa ta tsarin isarwa: lokacin zagaye, lokacin jagoranci, fitarwa, aiki da ke gudana (WIP), da ingancin gudana. Dokar Little ce ke mulkinsu — lissafin jerin gwano iri ɗaya da ke mulkin gadajen asibiti da jerin jira.

## Dalilin muhimmancinsa

Yawancin lokacin isarwa ba aiki ba ne — jira ne. Binciken ingancin gudana na aikin ilimi akai-akai yana gano abubuwa ana aiki a kansu a zahiri **5–15%** kawai na lokacin da ya shuɗe; sauran jerin gwano ne. Wannan yana nufin mafi arha gaggautawa ita ce cire jerin gwano, ba ɗaukar ma'aikata ba — daidai fahimtar da shirye-shiryen kwararar marasa lafiya na asibiti suka gano game da gadaje. Ga duk abin da ke da [kuɗin jinkiri](../kuɗin-jinkiri/), ma'aunan gudana suna gano inda kuɗin jinkirin ke taruwa.

## Lissafin

```
Cycle time      = t(finished) − t(started)
Lead time       = t(delivered) − t(requested)     (includes pre-work queue)
Throughput      = items completed / period
WIP             = items started but unfinished
Flow efficiency = active time / (active + wait time) × 100

Little's Law:  average WIP = throughput × average cycle time
               (equivalently: cycle time = WIP / throughput)
```

Dokar Little ita ce lefa: a kan fitarwa tsayayye, rage WIP yana rage lokacin zagaye daidai gwargwado. Haka kuma tana tafiyar da asibitoci: `beds occupied = admissions/day × length of stay`.

## Misali da aka lissafa

Ƙungiya tana da abubuwa 40 a ci gaba kuma tana kammala 10/mako: lokacin zagaye = 40/10 = makonni 4. Suna sanya iyakokin WIP, suna rage WIP zuwa 15: lokacin zagaye = 15/10 = **makonni 1.5** — mutane iri ɗaya, fitarwa iri ɗaya, isarwa da sauri 62%, daga ladabin jerin gwano kawai.

An ƙayyade farashi da CoD: idan abubuwa suna da matsakaicin £3,000/mako na kuɗin jinkiri, kowane abu yanzu yana kashe makonni 2.5 ƙasa a jerin gwano: abubuwa 10/mako × 2.5 × 3,000 = **£75,000/mako na kuɗin jinkiri da aka kawar** — daga canjin manufa da bai kashe komai ba.

Madubin asibiti: shigar asibiti 40/rana × LOS na kwana 6.0 = gadaje 240; rage jiran da ba na asibiti ba a cikin LOS zuwa kwana 5.6 kuma gadaje 16 suna 'yantuwa ([tsawon zaman asibiti](../tsawon-zaman-asibiti/)) — doka ɗaya, lefa ɗaya.

## Alaƙa da injiniyancin manhaja

Ma'aunan gudana su ne harshen da aka raba tsakanin injiniyancin isarwa da aikin lafiya:

- **Ma'aunan matakan PR** (LinearB, ~PR miliyan 8): mafi kyau lokacin ɗauka < sa'o'i 7, bita < sa'o'i 6, jimlar zagaye < ~sa'o'i 26 — lokacin ɗauka tsantsar jerin gwano ne, abu na farko da za a kai wa hari.
- **[Jerin jira](../tasirin-jerin-jira/)** tarin aiki ne; **[RTT](../daga-turawa-zuwa-magani/)** lokacin jagoranci ne; **[cika gado](../kwanakin-gado-da-aka-ceta/)** WIP ne. Ingantawa tana wucewa ta hanyoyi biyu: iyakokin WIP ↔ daidaita shigar asibiti; kayan aikin auna lokacin jerin gwano ↔ bin matakan hanya.
- Ingancin gudana ƙasa da 15% na al'ada ne a fannoni biyu, kuma duka suna ɓoye shi domin *mutane* suna aiki alhali *aiki* yana jira — a auna agogon aikin, ba na ma'aikata ba.

## Tarkuna

- **Bautar amfani**: tuƙa amfanin ma'aikata zuwa 100% yana fashe lokutan jerin gwano ba tare da layi ba (M/M/1: jira ∝ ρ/(1−ρ)) — dalilin da asibitocin da suka cika 95% ke toshewa da ƙungiyoyin da aka rarraba 95% ke tsayawa.
- **Matsakaici a kan rarrabuwa mai karkata**: lokutan zagaye suna da wutsiya mai nauyi; a yi hasashe da kaso (p85), ba matsakaici ba.
- **Rage WIP ta ƙin aiki a sama** a kira shi ingantaccen gudana — buƙatar ba ta ɓace ba, ta yi jerin gwano a wajen iyakar aunawa (sigar asibiti: motocin ɗaukar marasa lafiya suna jira a wajen ED).

## Tushe

- Little's Law and flow metrics overviews. <https://agility-at-scale.com/safe/lpm/flow-metrics/> ; <https://getdx.com/blog/flow-metrics/>
- LinearB engineering benchmarks. <https://linearb.io/resources/engineering-benchmarks>
- Reinertsen DG, *The Principles of Product Development Flow*.
