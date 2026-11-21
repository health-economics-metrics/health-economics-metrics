# Inferencia-egységgazdaságtan

Az inferencia-egységgazdaságtan az MI-funkciókat a határszámítási költségük szerint árazza: **költség tokenenként**, tranzakcióra, felhasználóra, klinikai epizódra összegezve. A meghatározó dinamika: az LLM-árak állandó képesség mellett nagyjából **1–2 évente egy nagyságrenddel** estek — árdeflációs ráta, amelynek nincs precedense az egészségügyi technológia költségszámításában.

## Miért fontos

Az árzuhanásból két következmény adódik. Kereskedelmileg az az MI-funkció, amely ma határeset, 18 hónap múlva triviálisan nyereséges lehet — és a mai költségekre árazott versenytársat alulárazzák. A gazdasági értékelésnél bármely MI-vel támogatott klinikai szolgáltatás költséghatékonysági modellje, amely befagyasztja a 2024-es inferenciaárakat, **jelentősen túlbecsüli a folyamatos költséget** — az elemzésnek árcsökkenési forgatókönyvek kellenek, ahogy a gyógyszermodellek a szabadalmi lejáratot és a generikus belépést kezelik. (Viszonyítási pontok a kutatásból: a frontier kimeneti tokenek ~15–75 $/M 2026 közepén, a középkategóriás modellek egy nagyságrenddel olcsóbbak, a GPT-4 szintű képesség a 2022-es ~20 $/M-ről ~0,40 $/M-re esett; az Epoch AI 9×–900× évi csökkenést mért a képességi mérföldkőtől függően.)

## A matematika

```
Cost per call     = input tokens × input rate + output tokens × output rate
Cost per unit     = Σ calls per unit of business output (per triage episode,
                    per drafted letter, per consultation summary)

Blended reality   = base call + retries + RAG context (input-heavy)
                    + evaluation/guardrail calls (often 20–50% overhead)

Price-decline scenario for multi-year models:
  cost_t = cost_0 × d^t, test d ∈ {0.3, 0.5, 0.7}/year in sensitivity analysis
```

## Kidolgozott példa

Egy MI elbocsátási összefoglaló szolgáltatás: az átlagos összefoglaló 12 000 bemeneti tokent (nyilvántartási kontextus) + 1200 kimenetet használ, plusz egy ellenőrző menet (6000 be / 300 ki). 3 $/M be, 15 $/M ki árakon:

```
Draft:   12,000 × 3/1M + 1,200 × 15/1M  = $0.036 + $0.018 = $0.054
Verify:   6,000 × 3/1M +   300 × 15/1M  = $0.018 + $0.0045 ≈ $0.023
Per summary ≈ $0.077 → per 100,000 summaries/year ≈ $7,700

Against ~20 clinician-minutes saved per summary (≈ £25), inference is
0.25% of the value created — the economics are dominated by everything
EXCEPT the tokens: integration, evaluation, governance, adoption.
```

Ez a következtetés — az inferenciaköltség a jelenlegi árakon ritkán a kötött korlát a nagy értékű klinikai feladatoknál — maga az a megállapítás, amelyet érdemes az árazási tárgyalásokba vinni.

## Kapcsolat a szoftverfejlesztéssel

Ez a [felhő-egységgazdaságtan](../felhő-egységgazdaságtan/) MI-re specializálva, három gyakorlati megjegyzéssel: **mérj üzleti egységenként**, nem API-hívásonként, hogy a szám közvetlenül illeszkedjen az [ICER](../inkrementális-költséghatékonysági-mutató/)/[költségvetési hatás](../költségvetési-hatáselemzés/) modellekbe; **figyeld a bemenet/kimenet aszimmetriát** (a kimenet jellemzően ~4× a bemeneti ár; a RAG-architektúrák bemenet-nehezek — az architektúra-választás árazási választás); és **irányíts feladatszint szerint** — a modell képességének a feladat nehézségéhez igazítása (olcsó modellek osztályozásra, frontier szintézisre) rutinszerűen 5–10-szeresére csökkenti a kevert költséget azonos minőség mellett, a legolcsóbb hatásos beavatkozás használatának szoftveres változata ([költségminimalizálás](../költségminimalizálási-elemzés/), bizonyított egyenértékűséggel).

## Buktatók

- **Befagyasztott árú többéves modellek** — túlbecsüli a költséget; de **feltételezett deflációs bevételi modellek** is — az árháború nem szerződés; forgatókönyvezd mindkettőt.
- **Az értékelési többletterhelés figyelmen kívül hagyása**: a védőkorlátok, bírák és újrapróbálkozások valódi tokenek, szabályozott környezetben gyakran a többség.
- **Token-rövidlátás**: a késleltetés, a ráta-korlátok és a kontextusablak-korlátok olyan költségeket hordoznak, amelyeket egyetlen tokenár sem ragad meg.

## Források

- Epoch AI, LLM inference price trends. <https://epoch.ai/data-insights/llm-inference-price-trends>
- LLM pricing comparisons. <https://www.silicondata.com/blog/llm-cost-per-token>
