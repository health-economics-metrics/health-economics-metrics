# Shiga Tsakani da Wuri

Idan ƙarfin da aka ceta yana bari ma'aikaci ya duba tarin bincike da wuri, marasa lafiya suna matsawa daga jerin jira zuwa magani mai aiki da sauri — kuma magani da wuri yawanci ya fi arha da kyau fiye da magani a makare, domin yanayin da ba a magance ba yana ci gaba.

## Dalilin muhimmancinsa

Ci gaban cuta shi ne ribar da ke ninkawa ta kula da lafiya. Majiyyaci da ke jira da yanayin da ba a magance ba ba ya cikin yanayin tsayayye: ciwon daji yana canza mataki, gazawar zuciya tana lalacewa, baƙin ciki mai sauƙi yana zama mai tsanani. Shiga tsakani da wuri don haka yana ba da ribar biyu — **sakamako mafi kyau** (ƙarin QALY, ana magani daga tushe mafi lafiya) da sau da yawa **ƙarancin kuɗin magani** (maganin mataki na farko ya fi sauƙi fiye da ceto na ƙarshe). Wannan hanyar ce ke ɗaga "hanyoyi masu sauri" daga kyautata aiki zuwa wajibcin asibiti da tattalin arziki — kuma shi ne zurfin dalilin da ya sa [kuɗin jinkiri](../kuɗin-jinkiri/) ke shafar manhajar asibiti.

## Lissafin

```
Value of earlier intervention (per patient) =
    [Cost_late − Cost_early]                       (treatment-cost offset)
  + [QALYs_early − QALYs_late] × λ                 (health gain × threshold)
  × P(progression during the delay)                 (probability weighting)
```

Nauyin yiwuwa yana da mahimmanci: ba kowane majiyyaci mai jira ne ke ci gaba ba. A yi samfurin yiwuwar sauyawa ga kowace naúrar lokaci (daga bayanan tarihin halitta), ba yanayin mafi muni ba. Sannan a rage daraja: kuɗin da aka kauce wa shekaru masu zuwa suna da daraja ƙasa a yau ([rage daraja](../rage-daraja-da-fifikon-lokaci/)) — kuma a lura yawancin shiga tsakani da wuri yana da *tasirin kuɗi* maimakon *ceton kuɗi* (duba [tattalin arzikin rigakafi](../tattalin-arzikin-rigakafi/)).

## Misali da aka lissafa

Tarin binciken ciwon ido na masu ciwon suga: marasa lafiya 4,000, watanni 6 a baya. Tantance AI yana ninka fitarwa sau uku kuma yana share jerin cikin makonni 8. Tarihin halitta: ~2% na marasa lafiya masu jira/shekara suna ci gaba zuwa matakan barazanar gani yayin da ba a duba su ba.

```
Progression events avoided by ~4 months' acceleration:
  4,000 × 2% × (4/12) ≈ 27 patients

Per avoided progression:
  treatment offset (intravitreal therapy vs laser) ≈ £4,000
  QALY gain (vision preserved) ≈ 0.8 QALYs × £20,000 = £16,000

Value ≈ 27 × (4,000 + 16,000) ≈ £540,000 — from one backlog cleared once,
before counting the permanent throughput gain.
```

## Alaƙa da injiniyancin manhaja

Canja wurare biyu. Na farko, bayyananne: manhajar da ke gaggauta hanyoyin bincike da magani (rarrabewa, tantance AI, tura sakamako) tana samun kuɗi ta wannan samfurin daidai — kuma samfurin yana gaya maka wace hanya za a gaggauta: wadda ke da lanƙwasar ci gaba mafi tsauri, ba jerin gwano mafi tsawo ba. Na biyu, madubin injiniya: **kurakurai ma suna ci gaba**. Kuskure da aka kama a ƙira yana kashe tattaunawa; a samarwa yana kashe lamari; lanƙwasar kuɗi ta "shift-left" (10–100× bisa mataki) samfurin ci gaba ne, kuma sigar gaskiya tana ɗauke da gargaɗi iri ɗaya — gano da wuri yawanci yana da tasirin kuɗi, ba kuɗin kyauta ba, domin bita da gwaje-gwaje suna da kuɗi na gaske kuma yawancin batutuwan da aka kama ba za su taɓa ci gaba ba.

## Tarkuna

- **Zaton ci gaban mafi muni ga kowa** — nauyin yiwuwa shi ne bambanci tsakanin bincike da shawara.
- **Son zuciya na lokacin jagoranci**: gano cuta da wuri ba tare da canza sakamako ba yana kama da fa'ida amma ba haka ba; *shiga tsakani mai tasiri* da wuri ne da'awar, ba gano da wuri kaɗai ba (duba [tattalin arzikin gwajin bincike](../tattalin-arzikin-gwajin-bincike/)).
- **Ƙidaya sau biyu** tare da da'awar jerin jira da RTT da aka gina a kan gaggautawa ɗaya — ingantawar hanya ɗaya, saitin fa'idodi ɗaya, a raba sau ɗaya.

## Tushe

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- NHS England, diabetic eye screening programme. <https://www.gov.uk/topic/population-screening-programmes/diabetic-eye>
