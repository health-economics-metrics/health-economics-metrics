# Tattalin Arzikin Naúrar Hasashe

Tattalin arzikin naúrar hasashe yana ƙayyade farashin fasalolin AI bisa lissafinsu na ƙari: **kuɗi ga kowane token**, ana tara shi zuwa kuɗi ga kowane ciniki, kowane mai amfani, kowane lamarin asibiti. Ƙarfin da ke ayyana shi: farashin LLM sun faɗi kusan **matakin girma ɗaya a kowace shekara 1–2** a ƙarfin da bai canza ba — ƙimar faɗuwar farashi wadda ba ta da misali a ƙididdigar kuɗin fasahar lafiya.

## Dalilin muhimmancinsa

Sakamako biyu suna biyo bayan rugujewar farashin. A kasuwanci, fasalin AI da ke da iyaka a yau na iya zama mai riba cikin sauƙi cikin watanni 18 — kuma mai gogayya da aka ƙayyade masa farashi bisa kuɗin yau za a ƙasƙantar da shi. Ga kimantawar tattalin arziki, duk wani samfurin tasirin kuɗi na hidimar asibiti mai AI da ke daskare farashin hasashe na 2024 **yana ƙara kuɗin da ke ci gaba sosai fiye da gaskiya** — bincike yana buƙatar yanayin faɗuwar farashi yadda samfuran magani ke magance ƙarewar haƙƙin mallaka da shigar na gama-gari. (Wuraren tunani daga bincike: alamomin fitarwa na iyaka ~$15–75/M a tsakiyar 2026, samfuran matsakaici mataki ɗaya masu arha, ƙarfin matakin GPT-4 ya sauko daga ~$20/M a 2022 zuwa ~$0.40/M; Epoch AI ya auna faɗuwar 9×–900×/shekara bisa matakin ƙarfi.)

## Lissafin

```
Cost per call     = input tokens × input rate + output tokens × output rate
Cost per unit     = Σ calls per unit of business output (per triage episode,
                    per drafted letter, per consultation summary)

Blended reality   = base call + retries + RAG context (input-heavy)
                    + evaluation/guardrail calls (often 20–50% overhead)

Price-decline scenario for multi-year models:
  cost_t = cost_0 × d^t, test d ∈ {0.3, 0.5, 0.7}/year in sensitivity analysis
```

## Misali da aka lissafa

Hidimar AI ta taƙaitaccen sallama: matsakaicin taƙaitawa yana amfani da tokens 12,000 na shigarwa (mahallin rubutu) + 1,200 na fitarwa, tare da matakin tabbatarwa (6,000 shigarwa / 300 fitarwa). A $3/M shigarwa, $15/M fitarwa:

```
Draft:   12,000 × 3/1M + 1,200 × 15/1M  = $0.036 + $0.018 = $0.054
Verify:   6,000 × 3/1M +   300 × 15/1M  = $0.018 + $0.0045 ≈ $0.023
Per summary ≈ $0.077 → per 100,000 summaries/year ≈ $7,700

Against ~20 clinician-minutes saved per summary (≈ £25), inference is
0.25% of the value created — the economics are dominated by everything
EXCEPT the tokens: integration, evaluation, governance, adoption.
```

Wannan ƙarshe — kuɗin hasashe da wuya ya zama ƙuntatawa mai ɗaure, a farashin yanzu, ga ayyukan asibiti masu daraja — shi kansa abin da ya cancanci ɗauka zuwa tattaunawar farashi.

## Alaƙa da injiniyancin manhaja

Wannan [tattalin arzikin naúrar gajimare](../tattalin-arzikin-naúrar-gajimare/) ne da aka ƙware ga AI, tare da bayanan aiki uku: **a auna ga kowace naúrar kasuwanci**, ba kowane kiran API ba, don lambar ta shiga samfuran [ICER](../rabon-ƙarin-tasirin-kuɗi/)/[tasirin kasafin kuɗi](../binciken-tasirin-kasafin-kuɗi/) kai tsaye; **a kula da rashin daidaiton shigarwa/fitarwa** (fitarwa yawanci ~sau 4 farashin shigarwa; gine-ginen RAG suna da nauyin shigarwa — zaɓin gine-gine zaɓin farashi ne); da **a tura bisa matakin aiki** — daidaita ƙarfin samfuri da wahalar aiki (samfuran arha don rarrabawa, na iyaka don haɗa abubuwa) akai-akai yana rage kuɗin gauraye sau 5–10 a inganci ɗaya, sigar manhaja ta amfani da shiga tsakani mafi arha mai tasiri ([rage kuɗi](../binciken-rage-kuɗi/), an tabbatar da daidaito).

## Tarkuna

- **Samfuran shekaru da yawa da aka daskare farashi** — suna ƙara kuɗi; amma kuma **samfuran kuɗin shiga da aka zaci faɗuwa** — yaƙin farashi ba kwangila ba ne; a yi yanayi ga duka biyun.
- **Watsi da nauyin kimantawa**: shingen kariya, alƙalai, da sake gwadawa tokens ne na gaske, sau da yawa mafi yawa a yanayin da ake sarrafawa.
- **Hangen tsaki na kowane token**: jinkiri, iyakokin adadi, da ƙuntatawar taga mahallin suna ɗauke da kuɗin da babu farashin token da ke kamawa.

## Tushe

- Epoch AI, LLM inference price trends. <https://epoch.ai/data-insights/llm-inference-price-trends>
- LLM pricing comparisons. <https://www.silicondata.com/blog/llm-cost-per-token>
