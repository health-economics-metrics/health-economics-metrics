# Ma'aunan Shiga Aiki

Ma'aunan shiga aiki suna auna yawan da masu amfani ke amfani da manhajar lafiya a zahiri: mannewar DAU/MAU, yawan zama da tsawonsa, amfani da fasali. A lafiyar dijital, shiga aiki ba banza ba ne — shi ne **ma'aunin magani**: fallasar da kowane tasirin asibiti dole ya wuce ta cikinta.

## Dalilin muhimmancinsa

Maganin da ya tsaya a kwalba ba ya warkar da kowa; manhajar da ba a shigar ba ko ba a buɗe ba tana da gazawa iri ɗaya. Kowace da'awar tattalin arzikin lafiya ga samfurin lafiya na masu amfani tana ninkawa ta shiga aiki — tasirin da aka nuna a gwaji an auna shi a wani matakin amfani, kuma ainihin daraja tana girma gwargwadon kusancin amfanin turawa da wannan matakin. Ma'aunan samfur na yau da kullum: DAU/MAU kusan **20% ana ɗauka lafiya** ga manhajojin wayar hannu gabaɗaya, >25% na musamman; manhajojin lafiya sau da yawa suna ƙasa.

## Lissafin

```
Stickiness (DAU/MAU) = daily active users / monthly active users × 100
Session metrics      = sessions/user/period; avg duration = total time / sessions
Feature engagement   = users performing key action / active users

Dose-response framing (the health-economics upgrade):
  realized effect ≈ trial effect × f(actual usage / trial usage)
  where f comes from dose-response analysis — see the "effective
  engagement" concept in adherence-and-persistence.md: enough usage
  to achieve the intended outcome, which may be modest and finite
```

## Misali da aka lissafa

Binciken ainihin manhajar hawan jini ya nuna raguwar systolic na 6 mmHg a tsakanin masu amfani da ke rubuta karatu ≥4/mako. A turawa a cikin masu amfani 50,000 da suka yi rajista:

```
MAU 20,000 (40%); of those, logging ≥4×/week: 7,000
Effective-dose users = 7,000 / 50,000 = 14% of the registered base

Population-level effect ≈ trial effect delivered to 14%, not 100%:
any economic model quoting "50,000 users × 6 mmHg" overstates ~7×.
Honest model: 7,000 × full effect + partial credit (from dose-response
data, if any) for the 13,000 sub-threshold users.
```

Wannan ninkawa — ta mazubin shiga aiki zuwa ma'aunin da ke da tasiri — shi ne wuri mafi yawan da tattalin arzikin lafiyar dijital ke kumbura.

## Alaƙa da injiniyancin manhaja

Injiniyoyi su ne ke mallakar mazubin shiga aiki, wanda ke sa su masu mallakar sauyin *asibiti*: rikitarwar shiga, dabarar sanarwa, lokacin lodi, da juriyar rashin intanet duk suna motsa ma'aunin da aka isar. Abubuwa biyu na ƙira: a auna **aikin da ke da ma'ana ta asibiti** (karatun da aka rubuta, darussan da aka kammala), ba buɗewa ba — DAU da aka gina a kan zaman da sanarwa ta jawo yaudarar ma'auni ce; kuma a ɗauki burin shiga aiki a matsayin burin *isa*, ba ƙaruwa ba — manhajar da ke cimma sakamakonta cikin mintuna 5/mako kuma ta fita daga hanya ta dace a asibiti kuma "mara kyau" a ma'auni (duba shiga aiki mai tasiri a [bin ka'ida da dorewa](../bin-ka-ida-da-dorewa/)). A ƙimanta aikin shiga aiki da kansa ta samfurin tasirin al'umma na sama: ribar maki 2 na kason ma'aunin da ke da tasiri layin QALY ne da za a iya ƙididdigewa.

## Tarkuna

- **Shiga aiki a matsayin sakamako**: amfani hanya ne; sakamakon shi ne [PROM](../sakamakon-da-marasa-lafiya-suka-bayar/) ko ƙarshen asibiti.
- **Matsakaici a kan amfani mai gefe biyu**: al'ummar manhajar lafiya suna rabuwa zuwa masu sadaukarwa da fatalwoyi; matsakaici ba ya bayyana kowa — a raba su rukuni.
- **Kumbura ma'auni ta dabarun duhu**: jerin kullum da sanarwar laifi suna ɗaga ma'auni kuma suna iya cutar da masu damuwa da manhajojin lafiya ke yi wa hidima; samfuran asibiti suna ɗauke da ɗabi'ar asibiti.
- **Asalin ma'aunin mai sayarwa**: yawancin ma'aunan shiga aiki da aka wallafa suna zuwa daga masu sayar da nazari, ba bitar abokan aiki ba; a daidaita da gwaje-gwajenka.

## Tushe

- App engagement benchmarks. <https://getstream.io/blog/app-retention-guide/>
- Health app KPI guides. <https://www.darly.solutions/blog/key-metrics-for-health-apps-success-a-guide-to-kpis-and-outcomes>
- Yardley L, et al. on effective engagement. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
