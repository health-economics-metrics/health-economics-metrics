# Metriky kvality AI

Metriky správnosti výstupu generovaného AI: přesnost vůči základní pravdě, **věrnost/zakotvenost** (je každé tvrzení podloženo poskytnutým kontextem?) a **míra halucinací** (jaký zlomek výstupů obsahuje nepodložený nebo nepravdivý obsah?). Ve zdravotnictví nejsou tyto metriky okrasou kvality – jsou mírou újmy.

## Proč na tom záleží

Lékařské benchmarky naměřily míru halucinací **nad 60 % u nezakotvených LLM** v lékařských úlohách (některé otevřené modely > 80 %), zatímco zakotvení, vyhledávání a režimy uvažování míru dramaticky snižují (např. režim přemýšlení GPT-5 snížil halucinace v HealthBench z 3,6 % na 1,6 % v jednom benchmarku). Halucinovaná dávka nebo vymyšlená citace v klinickém procesu je **událost nepravdivé informace s cestou k újmě** – patří do ramene újmy každého ekonomického modelu a oceňuje se jako falešně pozitivní nálezy v [ekonomice screeningu](../ekonomika-screeningu/): každá spouští následné náklady (jednání podle chybné informace, práce s ověřováním, medicínsko-právní expozice, narušená důvěra).

## Matematika

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

## Řešený příklad

Asistent AI pro klinické kódování zpracuje 200 000 epizod ročně; audit ukáže, že 2 % výstupů obsahují významnou chybu v kódování; lidští kodéři jich zachytí 85 %:

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

## Souvislost se softwarovým inženýrstvím

S kvalitou modelu zacházejte jako s ekonomikou pokrytí testy, ale se zdravotnickou disciplínou: **vyhodnocovací sady jsou vaše klinická studie** – předem registrované, reprezentativní pro *váš* případový mix, obnovované vůči driftu; **zakotvení poráží velikost** u faktických úloh (vyhledávání + vyžadování citací v promptu je obvykle nejlevnější dostupné snížení halucinací – srov. [jednotková ekonomika inference](../jednotková-ekonomika-inference/) kvůli režii tokenů); a **zveřejněte pracovní bod**: stejně jako u [senzitivity/specificity](../hodnocení-klinické-ai/) neznamená „97 % věrnost“ nic bez rozložení úloh a prahu detekce. Matematika kontrolní vrstvy výše je táž aritmetika [NNT/NNH](../počet-pacientů-nutných-k-léčbě/) jako u každé screeningové brány.

## Úskalí

- **Přenos z benchmarku do produkce**: míra halucinací výrazně závisí na úloze; jediným benchmarkem, který se počítá, je váš případový mix.
- **Nezaúčtovaná lidská kontrola**: „klinik vše zkontroluje“ půlí přínos a musí se objevit v nákladové řádce – a bdělost slábne (automatizační pohodlnost), takže P(nezjištěno) s důvěrou roste.
- **Optimalizace průměrné kvality, zatímco újmu nese konec rozdělení**: jedna vymyšlená poznámka o alergii převáží tisíc neobratných formulací; vážte chyby podle důsledků dle vzorce očekávané újmy.

## Zdroje

- Hallucination evaluation methods and metrics. <https://www.braintrust.dev/articles/ai-hallucination-evaluations-metrics-methods-2026>
- Medical LLM hallucination statistics. <https://sqmagazine.co.uk/llm-hallucination-statistics/>
- RAG faithfulness metrics. <https://www.getmaxim.ai/articles/measuring-llm-hallucinations-the-metrics-that-actually-matter-for-reliable-ai-apps/>
