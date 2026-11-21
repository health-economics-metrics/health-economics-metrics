# MI-minőségmutatók

Mutatók az MI által generált kimenet helyességére: pontosság a valósághoz képest, **hűség/megalapozottság** (minden állítást alátámaszt a megadott kontextus?) és **hallucinációs arány** (a kimenetek mekkora része tartalmaz alá nem támasztott vagy hamis tartalmat?). Az egészségügyi környezetben ezek nem minőségi finomságok — kárarányok.

## Miért fontos

Az orvosi területi viszonyítási tesztek **60% feletti hallucinációs arányokat** mértek megalapozás nélküli LLM-eknél orvosi feladatokon (egyes nyílt modelleknél >80%), míg a megalapozás, a visszakeresés és a következtetési módok drámaian csökkentik az arányokat (pl. a GPT-5 gondolkodó módja egy tesztben 3,6%-ról 1,6%-ra csökkentette a HealthBench hallucinációkat). Egy hallucinált adagolás vagy kitalált hivatkozás egy klinikai munkafolyamatban **kárútvonallal rendelkező téves információs esemény** — bármely gazdasági modell kárágába tartozik, a [szűrés gazdaságtana](../a-szűrés-gazdaságtana/) téves pozitívjaihoz hasonlóan árazva: mindegyik lefelé irányuló költséget vált ki (téves információ alapján cselekvés, ellenőrző munkaerő, orvosjogi kitettség, megrongált bizalom).

## A matematika

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

## Kidolgozott példa

Egy MI klinikai kódolási asszisztens évi 200 000 epizódot dolgoz fel; az audit szerint a kimenetek 2%-a tartalmaz lényeges kódolási hibát; az emberi kódolók ezek 85%-át elkapják:

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

## Kapcsolat a szoftverfejlesztéssel

Kezeld a modellminőséget úgy, mint a tesztlefedettség gazdaságtanát, egészségügyi szintű fegyelemmel: **az értékelési halmazok a te klinikai vizsgálatod** — előre regisztrált, a *te* esetösszetételedet reprezentáló, eltolódás ellen frissített; **a megalapozás legyőzi a méretet a tényszerű feladatoknál** (a visszakeresés + hivatkozást megkövetelő prompt általában a legolcsóbb elérhető hallucinációcsökkentés — vö. [inferencia-egységgazdaságtan](../inferencia-egységgazdaságtan/) a token-többletterheléséről); és **tedd közzé a működési pontot**: mint a [szenzitivitás/specificitás](../klinikai-mi-értékelése/), a „97% hű" semmit nem jelent a feladateloszlás és az észlelési küszöb nélkül. A fenti felülvizsgálati réteg számtana ugyanaz az [NNT/NNH](../kezelendő-betegek-száma/)-számtan, mint bármely szűrőkapunál.

## Buktatók

- **Viszonyítási teszt-éles átültetés**: a hallucinációs arányok vadul feladatfüggők; a te esetösszetételed az egyetlen számító viszonyítás.
- **Nem költségezett emberi felülvizsgálat**: a „egy klinikus mindent ellenőriz" felezi az előnyt, és meg kell jelennie a költségsorban — és az éberség lanyhul (automatizálási önelégültség), így a P(észrevétlen) a bizalommal nő.
- **Az átlagos minőség optimalizálása, miközben a farokkockázat hordozza a kárt**: egy kitalált allergiajegyzet többet nyom ezer ügyetlen megfogalmazásnál; súlyozd a hibákat következmény szerint, a várható kár képlet szerint.

## Források

- Hallucination evaluation methods and metrics. <https://www.braintrust.dev/articles/ai-hallucination-evaluations-metrics-methods-2026>
- Medical LLM hallucination statistics. <https://sqmagazine.co.uk/llm-hallucination-statistics/>
- RAG faithfulness metrics. <https://www.getmaxim.ai/articles/measuring-llm-hallucinations-the-metrics-that-actually-matter-for-reliable-ai-apps/>
