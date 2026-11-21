# Ƙwazon Mai Haɓaka Manhaja da AI

Ma'auni na abin da taimakon rubuta lamba ta AI ke yi wa fitarwar injiniya a zahiri: adadin karɓar shawarwari, saurin da aka auna a gwaje-gwajen da aka sarrafa, yawan PR da ake kammalawa, da rikon lamba. Tushen shaida yana saɓa wa kansa da gaske — wanda ya sa ya zama cikakken nazarin misali na bambancin tasirin gwaji da tasirin amfani na gaske, wanda aka gina tattalin arzikin lafiya don magancewa.

## Dalilin muhimmancinsa

Gwaje-gwajen da aka sarrafa guda biyu da aka fi ambata suna nuni ne ga hanyoyi dabam-dabam:

- **Peng et al. 2023 (RCT na GitHub Copilot)**: masu haɓakawa sun kammala aikin sabar HTTP daga tushe **da sauri kashi 55.8%** tare da Copilot (sa'a 1 da mintuna 11 da sa'o'i 2 da mintuna 41, n=95).
- **METR 2025 RCT**: ƙwararrun masu haɓaka buɗaɗɗen tushe da ke aiki a kan *ma'ajiyoyin nasu masu girma* sun kasance **a hankali da kashi 19%** da kayan AI na farkon 2025 (masu haɓaka 16, ayyuka 246) — alhali suna *tsammanin* sun fi sauri da kashi 20%.

Dukansu gwaje-gwaje ne masu kyau. Saɓanin shi ne sakamakon: tasirin gwaji a aikin daga tushe ba ya wucewa zuwa tasirin amfani a lambar da ta tsufa, kuma fa'idar da aka *ji* ba za ta maye gurbin fa'idar da aka auna ba. Likitanci yana da sunaye ga duka al'amuran biyu (gwaje-gwajen bayani da na amfani; matsalar placebo) da kayan aikin magance su.

## Lissafin

```
Acceptance rate  = accepted suggestions / shown suggestions
                   (GitHub telemetry ~30% avg; varies: SQL 45%, Python 35%, JS 28%)
Retention rate   = AI code surviving to merge / accepted AI code (~88% reported)
Speedup          = (t_control − t_AI) / t_control  (from controlled comparison ONLY)
Throughput delta = Δ merged PRs/dev/week (GitHub/Accenture field data: +8.7%)

Value model     = devs × time saved × loaded rate × utilization factor
                  — every term needs local measurement; see the tornado in
                  sensitivity-analysis.md, where time-saved dominates all
                  other parameters combined
```

## Misali da aka lissafa

Ƙungiya mai masu haɓaka 500 tana gwada mataimaki tare da ingantaccen ƙungiyar kwatantawa (ƙungiyoyi masu daidaito, watanni 3, ma'auni da aka yi wa rajista tukuna):

```
Pilot result: PR cycle time −18%; merged PRs +6%; CFR unchanged;
              self-reported time saved 45 min/day; measured task-level ≈ 15 min/day

Value the MEASURED number: 500 × 0.25h × 220d × £60 × 0.6 utilization
                          ≈ £990,000/year capacity (non-cash-releasing)
Cost: 500 × £39/mo × 12 ≈ £234,000/year
Net capacity ratio ≈ 4:1 — fundable, at one-third the self-reported claim.
```

Giɓin ninki 3 tsakanin abin da aka ji da abin da aka auna shi ne binciken METR yana aiki a duniya ta zahiri; yin kasafi bisa rahoton kai da ya ninka layin fa'idar sau uku.

## Alaƙa da injiniyancin manhaja

Abubuwan da ake shigowa da su daga tattalin arzikin lafiya ga duk wanda ke tantance kayan AI: a gudanar da **gwaje-gwajen amfani** (lambarka, injiniyoyinka, tikiti na gaske — ba ayyukan nunin mai sayarwa ba); a ɗauki **adadin karɓa a matsayin wakili, ba sakamako ba** (shi ne [PPV](../tantance-ai-na-asibiti/) na shawarwari daga mahangar mai haɓakawa — karɓa mai yawa da rikon lamba maras yawa shi ne yawan ganewa fiye da kima); a haɗa kowane ribar fitarwa da **binciken kwanciyar hankali** (DORA 2025: AI yana ɗaga fitarwa, yana cutar da kwanciyar hankali — shiga tsakani mai illoli yana buƙatar bincike na fa'ida ta net, bisa ga [ma'aunan DORA](../ma-aunan-dora/)); kuma a rarraba fa'idar da gaskiya a matsayin ƙarfi ([mai sakin kuɗi da wanda ba ya sakin kuɗi](../tanadi-mai-sakin-kuɗi-da-wanda-ba-ya-sakin-kuɗi/)).

## Tarkuna

- **Dasa binciken mai sayarwa**: lambobin RCT na aikin daga tushe da aka shafa wa aikin tsohuwar lamba — daidai kuskuren da binciken METR ya fallasa.
- **Rahoton kai a matsayin aunawa**: giɓin fahimta na maki 20 shi ne mafi girman son kai da aka sani a wannan adabi.
- **Kumbura ayyuka**: ƙarin PR da ƙarin lamba Ayyuka ne, ba sakamako ba ([SPACE](../space-da-devex/)); a haɗa da gyaran-sake da CFR.
- **Watsi da lanƙwasar koyo**: auna a mako na 2 yana kama tasirin sabon abu ta kowace hanya; a auna a daidaitaccen yanayi ([tsawon lokacin bincike](../tsawon-lokacin-bincike/)).

## Tushe

- Peng S, et al. "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot." 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity." 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA 2025 report. <https://dora.dev/dora-report-2025/>
