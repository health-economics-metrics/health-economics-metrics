# Ma'aunan DORA

Ma'aunan DORA (DevOps Research and Assessment) ma'auni huɗu ne na aikin isar da manhaja — yawan aikawa, lokacin jagoranci don canje-canje, adadin gazawar canji, da lokacin murmurewa daga aikawa da ta gaza — tare da amincin aiki a matsayin na biyar. Su ne mafi tabbatattun ma'aunan isarwa na fannin, kuma kowanne yana da karatu kai tsaye na tattalin arzikin lafiya.

## Dalilin muhimmancinsa

Binciken DORA na shekaru goma yana alaƙanta waɗannan ma'auni da aikin ƙungiya. Rukunonin rahoton 2024: ƙungiyoyi **mafi kyau** suna aikawa lokacin da ake buƙata (sau da yawa a rana), suna ɗaukar ƙasa da rana daga commit zuwa samarwa, suna gazawa a ~5% na canje-canje, kuma suna murmurewa cikin ƙasa da sa'a; ƙungiyoyi **marasa kyau** suna aikawa kowane wata ko ƙasa, suna ɗaukar watanni, suna gazawa a ~40% na canje-canje, kuma suna murmurewa cikin makonni. Ga tsarin lafiya, waɗannan ba lambobin banza na IT ba ne: suna ƙayyade yadda saurin darajar asibiti ke isa ga marasa lafiya da nawa haɗari kowane canji yake ɗauka.

## Lissafin

```
Deployment frequency    = production deployments / time
Lead time for changes   = t(deploy) − t(commit), median
Change failure rate     = failed changes / total changes × 100
Recovery time (MTTR)    = t(restored) − t(failure), median
Reliability             = SLO attainment (availability, latency, correctness)
```

Fassarar tattalin arzikin lafiya:

```
Lead time     → cost-of-delay.md: weeks in the pipeline × CoD (£ or QALYs/week)
Failure rate  → adverse-event rate of software change: CFR × cost per incident
Recovery time → downtime harm: MTTR × (lost clinical activity + safety exposure)/hr
Reliability   → benefit discount: a service at 99% availability delivers ≈ 0.99
                of its modelled benefit — the software analogue of adherence
```

## Misali da aka lissafa

Ƙungiyar manhajar kwararar marasa lafiya ta asusun asibiti, kafin/bayan jarin injiniyancin isarwa:

```
                    Before      After
Deploys             monthly     weekly
Lead time           6 weeks     4 days
CFR                 25%         8%
MTTR                2 days      2 hours
```

Ƙungiyar tana aika ~ingantawa 30/shekara tare da matsakaicin darajar kowane ingantawa £4,000/mako ([CoD](../kuɗin-jinkiri/)). Rage lokacin jagoranci na ~makonni 5.4 yana jawo kwararar fa'idar kowane ingantawa gaba: 30 × 5.4 × 4,000 ≈ **£648,000/shekara** na darajar da aka isar da wuri. Ingantawar CFR: 30 × (0.25 − 0.08) = ~canje-canje 5 da suka gaza ƙasa/shekara × £15,000 matsakaicin kuɗin lamarin (rashin aikin tsarin asibiti, gyara) = **£76,500/shekara**. Ana ƙimanta jarin isarwa da kuɗi iri ɗaya da kowane shiga tsakani na asibiti.

## Alaƙa da injiniyancin manhaja

Wannan *shi ne* ɓangaren manhaja — alaƙar da ta cancanci faɗa ita ce taswirar baya: ma'aunan DORA ma'aunan aikin asibiti ne sanye da tufafi dabam. Lokacin jagoranci ↔ [daga turawa zuwa magani](../daga-turawa-zuwa-magani/); adadin gazawar canji ↔ [adadin komawa asibiti](../adadin-komawa-asibiti/) (aikin da ya dawo); MTTR ↔ amsar gaggawa; yawan aikawa ↔ fitarwar asibiti. Hanyoyin ingantawa suna wucewa ta hanyoyi biyu domin duka tsarin jerin gwano ne a ƙarƙashin ƙuntatawar aminci. A kuma lura da binciken AI na DORA 2025: ɗaukar AI yanzu yana da alaƙa da mafi girman fitarwa amma *mafi muni* kwanciyar hankali — shiga tsakani mai tasiri da illoli, yana buƙatar daidai binciken fa'ida net da wannan ma'ajiya ke koyarwa (duba [ƙwazon mai haɓaka manhaja da AI](../ƙwazon-mai-haɓaka-manhaja-da-ai/)).

## Tarkuna

- **Wasan ma'auni**: ƙidayar aikawa da aka kumbura da sakewa marasa aiki; CFR da aka ƙasƙantar da rashin ƙidaya hotfix a matsayin gazawa. A ayyana abubuwan da suka faru daidai, kamar yadda HTA ke ayyana ƙarshe.
- **Teburan gasa tsakanin ƙungiyoyi**: rukunonin DORA suna kwatanta ayyuka, ba ƙungiyoyi masu bayanan haɗari daban ba; ƙungiyar tsarin asibiti a "babba" na iya zama mafi kyau inda "mafi kyau" zai zama rashin hankali.
- **Inganta ma'auni ɗaya**: gudu ba tare da CFR/amincin aiki ba shi ne ciniki tsakanin fitarwa da rashin kwanciyar hankali — a koyaushe a bayar da rahoton huɗun tare (su [teburin sakamakon kuɗi](../binciken-sakamakon-kuɗi/) ne, ba maki ba).

## Tushe

- DORA research and reports. <https://dora.dev/>
- 2024 DORA benchmarks summary. <https://octopus.com/devops/metrics/dora-metrics/>
- DORA 2025 State of AI-assisted Software Development. <https://dora.dev/dora-report-2025/>
