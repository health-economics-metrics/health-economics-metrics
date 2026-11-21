# Tattalin Arzikin Naúrar Gajimare (FinOps)

Tattalin arzikin naúrar gajimare yana mayar da ɗanyen kashe kuɗin gajimare zuwa **kuɗi ga kowace naúrar fitarwa** — ga kowane abokin ciniki, kowane ciniki, kowane lamari da aka warware, kowane token. Shi ne ƙwarewar FinOps da ke mayar da "kuɗin AWS ɗinmu £400k/wata" zuwa "hidimar majiyyaci ɗaya na kashe £0.83."

## Dalilin muhimmancinsa

Lambobin jimillar kashe kuɗi ba za su iya amsa tambayoyin da suka fi muhimmanci ba: shin samfurin yana ƙara ko raguwa a inganci? Shin girma yana inganta ko lalata riba? Me ya kamata mu caji? Kuɗin naúra yana amsa duka uku. Ga lafiyar dijital musamman, "kuɗi ga kowane lamari da aka warware" shi *ne* kuɗin naúrar hidimar lafiya — kai tsaye ana iya kwatanta shi da alkaluman [National Cost Collection](../farashin-ƙasa-da-kuɗin-naúra/) da mai ba da umarni ke amfani da su ga kowace sauran hidima, wanda ya sa shi harshen dabi'a na ƙayyade farashin hanyoyin dijital da na gargajiya.

## Lissafin

```
Unit cost = total allocated cost (incl. shared/platform costs) / units delivered

Two families:
  resource-efficiency units: cost/GB stored, cost/vCPU-hour, cost/token,
                             cost/build-minute
  business units:            cost/customer, cost/transaction, cost/consultation,
                             cost/case-resolved

Marginal vs average discipline applies (marginal-vs-average-cost.md):
committed/reserved spend makes marginal unit cost ≈ 0 until the next
commitment step — price expansion decisions at marginal, efficiency
trends at average.
```

## Misali da aka lissafa

Hidimar rarrabewa ta dijital: kashe kuɗin gajimare £62,000/wata (lissafi £30k, bayanai £18k, rabon dandamali na tarayya £14k), tana sarrafa lamuran rarrabewa 380,000/wata:

```
Average cost per episode = 62,000 / 380,000 ≈ £0.163

Commissioner comparison: telephone triage ≈ £8–12/call, GP consultation ≈ £42
→ digital episode runs at ~2% of the cheapest human alternative — the
channel-shift economics of gds-service-metrics.md, from the cost side.

Trend check: last year £0.21/episode at 240k episodes → improving scale
economics (fixed platform costs amortizing), worth a headline in the QBR.
```

## Alaƙa da injiniyancin manhaja

Tattalin arzikin naúrar shi ne inda zaɓuɓɓukan injiniya ke zama masu iya karantuwa ga kuɗi: gine-ginen da ke raba kuɗi-ga-lamari rabi fa'idar farashi ce; wanda ke girma fiye da layi lokaci ne da ke fashewa wanda kawai ake gani a wannan ma'auni. Ayyukan da ke wucewa daga ƙididdige kuɗin lafiya: **a wallafa ƙa'idodin rabo** (kuɗaɗen tarayya sun karkatar da alkaluman kowace naúra har sai PLICS ya daidaita ƙididdigar kuɗi a matakin majiyyaci — rabon kuɗin dandamalin ku yana buƙatar irin wannan tsanani); **a zaɓi naúrorin da mai saye ke tunani a cikinsu** (masu ba da umarni suna sayen lamura, ba vCPU ba); kuma a shigar da kuɗin naúra a kowane samfurin [ICER](../rabon-ƙarin-tasirin-kuɗi/) da [tasirin kasafin kuɗi](../binciken-tasirin-kasafin-kuɗi/) a matsayin mai rabawa na kuɗi mai iko. Ga fasalolin AI, naúrar ita ce token — duba [tattalin arzikin naúrar hasashe](../tattalin-arzikin-naúrar-hasashe/).

## Tarkuna

- **Watsi da kuɗaɗen tarayya**: kuɗin naúra da ba su haɗa rabon dandamali/tsaro/kira ba suna raguwa da 30–50% kuma suna rushewa idan an duba.
- **Masu rabawa na banza**: "kuɗi ga kowane kiran API" yana yabo; "kuɗi ga kowane lamarin majiyyaci da aka kammala" yana ba da bayani.
- **Farashin matsakaicin kuɗi ga shawarwarin ƙari**: cajin ƙungiyoyi matsakaicin kuɗin naúra ga amfani da ke kyauta a ƙari yana haifar da wasan kwaikwayon kauce wa ɓarna (duba [farashin ƙasa](../farashin-ƙasa-da-kuɗin-naúra/) don sigar NHS na wannan kuskuren ƙarfafawa).

## Tushe

- FinOps Foundation, unit economics. <https://www.finops.org/framework/capabilities/unit-economics/>
- FinOps Foundation, introduction to cloud unit economics. <https://www.finops.org/wg/introduction-cloud-unit-economics/>
