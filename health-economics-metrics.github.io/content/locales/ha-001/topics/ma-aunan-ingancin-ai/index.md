# Ma'aunan Ingancin AI

Ma'auni na daidaiton abin da AI ya samar: daidaito idan aka kwatanta da ainihin gaskiya, **amincin/tushen bayani** (shin kowace da'awa tana da goyon bayan mahallin da aka bayar?), da **adadin ƙirƙirar ƙarya** (wane kaso na fitarwa ke ɗauke da abun da ba shi da goyon baya ko na ƙarya?). A yanayin lafiya waɗannan ba kyawawan ƙarin abubuwa ba ne — adadin cuta ne.

## Dalilin muhimmancinsa

Ma'aunan fannin likitanci sun auna adadin ƙirƙirar ƙarya **sama da 60% a LLM marasa tushe** a ayyukan likitanci (wasu samfura buɗaɗɗu >80%), yayin da tushe, dawo da bayani, da yanayin tunani ke rage adadin sosai (misali, yanayin tunani na GPT-5 ya rage ƙirƙirar ƙarya na HealthBench daga 3.6% zuwa 1.6% a wani ma'auni). Ƙirƙirar ma'aunin magani ko ambaton ƙarya a aikin asibiti **lamari ne na bayanin ƙarya mai hanyar cuta** — yana cikin ɓangaren cutarwa na kowane samfurin tattalin arziki, a ƙayyade masa farashi kamar ƙarairayin da [tattalin arzikin gwajin bincike](../tattalin-arzikin-gwajin-bincike/) ke samu: kowanne yana jawo kuɗin ƙasa (aiki bisa bayanin da ba daidai ba, aikin tabbatarwa, fallasa ga shari'ar likitanci, amana da ta ragu).

## Lissafin

```
Hallucination rate = outputs containing unsupported/false content / total outputs
  intrinsic:  contradicts the provided context
  extrinsic:  unverifiable fabrication beyond the context

Faithfulness (RAGAS-style) = supported claims in answer / total claims in answer
Context precision/recall   = retrieval quality feeding the generator

Economic weighting — not all hallucinations cost alike:
  expected harm cost = Σ over error types (rate × P(undetected) ×
                       P(acted upon) × cost per acted-upon error)
  The human-review layer sets P(undetected) — and its cost belongs
  in the model too (reviewer minutes × volume).
```

## Misali da aka lissafa

Mataimakin AI na lambar asibiti yana sarrafa lamurra 200,000 a shekara; bincike ya nuna 2% na fitarwa na ɗauke da babban kuskuren lamba; masu duba na ɗan adam suna kama 85% daga cikinsu:

```
Errors reaching submission = 200,000 × 0.02 × 0.15 = 600/year
Cost per uncaught error (mis-billing avg + audit exposure) ≈ £250
Expected error cost         = 600 × 250 = £150,000/year
Review cost (2 min × 200k × £0.50/min)  = £200,000/year

Improvement case: retrieval grounding cuts error rate to 0.8%
→ uncaught errors 240, error cost £60,000 (−£90k/yr); review time
  can also drop (sampling instead of full review) — the quality
  investment pays before any speed claim.
```

## Alaƙa da injiniyancin manhaja

A ɗauki ingancin samfuri kamar tattalin arzikin ɗaukar gwaji, da horon matakin lafiya: **rukunin kimantawa shi ne gwajinka na asibiti** — an yi masa rajista tukuna, yana wakiltar haɗin lamuranka *naka*, ana sabunta shi bisa ga gudun; **tushe ya fi girma ga ayyukan gaskiya** (dawo da bayani + umarni da ke buƙatar ambato yawanci shi ne mafi arha hanyar rage ƙirƙirar ƙarya — duba [tattalin arzikin naúrar hasashe](../tattalin-arzikin-naúrar-hasashe/) don nauyin token); kuma **a wallafa wurin aiki**: kamar [ji da keɓancewa](../tantance-ai-na-asibiti/), "97% daidai" ba shi da ma'ana ba tare da rarraba aikin da iyakar ganowa ba. Lissafin matakin dubawa na sama daidai lissafin [NNT/NNH](../adadin-da-ake-bukatar-magani/) ne na kowace ƙofar gwaji.

## Tarkuna

- **Dasa ma'auni zuwa samarwa**: adadin ƙirƙirar ƙarya yana canzawa sosai bisa aiki; haɗin lamuranka shi ne kaɗai ma'aunin da ke ƙidaya.
- **Duban ɗan adam da ba a yi masa farashi ba**: "likita yana duba komai" yana rage fa'ida da rabi kuma dole ya bayyana a layin kuɗi — kuma natsuwar lura tana raguwa (gamsuwa da na'ura), don haka P(undetected) yana ƙaruwa tare da amana.
- **Inganta matsakaicin inganci alhali haɗarin ƙarshe ne ke ɗauke da cutarwa**: bayanin rashin lafiyar alerji ɗaya na ƙarya ya fi jimlolin marasa kyau dubu nauyi; a auna kurakurai bisa sakamakonsu, bisa dabarar cutarwa da ake tsammani.

## Tushe

- Hallucination evaluation methods and metrics. <https://www.braintrust.dev/articles/ai-hallucination-evaluations-metrics-methods-2026>
- Medical LLM hallucination statistics. <https://sqmagazine.co.uk/llm-hallucination-statistics/>
- RAG faithfulness metrics. <https://www.getmaxim.ai/articles/measuring-llm-hallucinations-the-metrics-that-actually-matter-for-reliable-ai-apps/>
