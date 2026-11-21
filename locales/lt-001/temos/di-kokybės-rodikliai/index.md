# DI kokybės rodikliai

DI sukurto rezultato teisingumo rodikliai: tikslumas pagal pagrindinę tiesą, **ištikimybė/pagrįstumas** (ar kiekvieną teiginį palaiko pateiktas kontekstas?) ir **haliucinacijų dažnis** (kokia rezultatų dalis turi nepagrįsto ar klaidingo turinio?). Sveikatos aplinkoje tai nėra kokybės subtilybės – tai žalos rodikliai.

## Kodėl tai svarbu

Medicinos srities lyginamieji testai išmatavo haliucinacijų dažnį **virš 60 % nepagrįstiems LLM** medicininėse užduotyse (kai kuriems atvirojo kodo modeliams >80 %), o pagrindimas, paieška ir samprotavimo režimai jį smarkiai sumažina (pvz., GPT-5 „thinking“ režimas sumažino HealthBench haliucinacijas nuo 3,6 % iki 1,6 % viename lyginamajame teste). Haliucinuota dozė ar išgalvotas citavimas klinikinėje darbo eigoje yra **klaidingos informacijos įvykis su žalos keliu** – jis priklauso bet kurio ekonominio modelio žalos šakai ir įkainojamas kaip [patikros ekonomikos](../patikros-ekonomika/) klaidingai teigiami: kiekvienas sukelia tolesnes sąnaudas (veikimas pagal klaidingą informaciją, tikrinimo darbas, medicininė-teisinė rizika, sumažėjęs pasitikėjimas).

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

## Išspręstas pavyzdys

DI klinikinio kodavimo asistentas apdoroja 200 000 epizodų per metus; auditas rodo, kad 2 % rezultatų turi esminę kodavimo klaidą; žmonės koduotojai pagauna 85 % jų:

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

## Ryšys su programinės įrangos inžinerija

Modelio kokybę traktuokite kaip testų aprėpties ekonomiką su sveikatos lygio disciplina: **vertinimo rinkiniai yra jūsų klinikinis tyrimas** – iš anksto užregistruoti, reprezentuojantys *jūsų* atvejų mišinį, atnaujinami pagal dreifą; **pagrindimas nugali mastą faktinėms užduotims** (paieška + privalomo citavimo užklausos paprastai yra pigiausias prieinamas haliucinacijų mažinimas – palyginkite [išvedimo vieneto ekonomika](../išvedimo-vieneto-ekonomika/) dėl jo žetonų pridėtinių išlaidų); ir **skelbkite veikimo tašką**: kaip [jautrumas/specifiškumas](../klinikinio-di-vertinimas/), „97 % ištikimas“ nieko nereiškia be užduočių pasiskirstymo ir aptikimo slenksčio. Peržiūros sluoksnio matematika aukščiau yra ta pati [NNT/NNH](../reikalingas-gydyti-skaičius/) aritmetika kaip bet kurių patikros vartų.

## Spąstai

- **Lyginamojo testo perkėlimas į gamybą**: haliucinacijų dažnis stipriai priklauso nuo užduoties; vienintelis svarbus lyginamasis testas – jūsų atvejų mišinys.
- **Neįkainota žmogaus peržiūra**: „gydytojas viską patikrina“ perpus sumažina naudą ir turi atsirasti sąnaudų eilutėje – o budrumas silpnėja (automatizacijos savitenkinimas), todėl P(neaptikta) auga didėjant pasitikėjimui.
- **Vidutinės kokybės optimizavimas, kai žalą neša uodegos rizika**: viena išgalvota alergijos pastaba atsveria tūkstantį nepatogių formuluočių; svertinkite klaidas pagal pasekmes, remdamiesi tikėtinos žalos formule.

## Šaltiniai

- Hallucination evaluation methods and metrics. <https://www.braintrust.dev/articles/ai-hallucination-evaluations-metrics-methods-2026>
- Medical LLM hallucination statistics. <https://sqmagazine.co.uk/llm-hallucination-statistics/>
- RAG faithfulness metrics. <https://www.getmaxim.ai/articles/measuring-llm-hallucinations-the-metrics-that-actually-matter-for-reliable-ai-apps/>
