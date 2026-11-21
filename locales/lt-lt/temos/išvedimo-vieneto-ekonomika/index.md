# Išvedimo vieneto ekonomika

Išvedimo vieneto ekonomika DI funkcijas įkainoja pagal jų ribinius skaičiavimus: **kaina vienam žetonui**, sumuojama į kainą vienam sandoriui, vienam vartotojui, vienam klinikiniam epizodui. Apibrėžianti dinamika: LLM kainos krinta maždaug **dydžio eile kas 1–2 metus** esant pastoviam gebėjimui – defliacijos norma be precedento sveikatos technologijų sąnaudų apskaitoje.

## Kodėl tai svarbu

Iš kainų žlugimo išplaukia dvi pasekmės. Komerciškai šiandien ribinė DI funkcija po 18 mėnesių gali būti triviališkai pelninga – o konkurentas, kainuojantis pagal šiandienos sąnaudas, bus pralenktas. Ekonominiam vertinimui bet kuris DI palaikomos klinikinės paslaugos ekonominio efektyvumo modelis, užšaldantis 2024 m. išvedimo kainas, **esmingai pervertina einamąsias sąnaudas** – analizei reikia kainų kritimo scenarijų, taip kaip vaistų modeliai tvarko patentų galiojimo pabaigą ir generikų atsiradimą. (Tyrimų atskaitos taškai: pažangiausi išvesties žetonai ~15–75 USD/M 2026 m. viduryje, vidutinio lygio modeliai dydžio eile pigesni, GPT-4 lygio gebėjimas nukrito nuo ~20 USD/M 2022 m. iki ~0,40 USD/M; Epoch AI išmatavo 9×–900× per metus kritimą, priklausomai nuo gebėjimo etapo.)

## Matematika

```
Cost per call     = input tokens × input rate + output tokens × output rate
Cost per unit     = Σ calls per unit of business output (per triage episode,
                    per drafted letter, per consultation summary)

Blended reality   = base call + retries + RAG context (input-heavy)
                    + evaluation/guardrail calls (often 20–50% overhead)

Price-decline scenario for multi-year models:
  cost_t = cost_0 × d^t, test d ∈ {0.3, 0.5, 0.7}/year in sensitivity analysis
```

## Išspręstas pavyzdys

DI išrašymo santraukos paslauga: vidutinė santrauka naudoja 12 000 įvesties žetonų (įrašo kontekstas) + 1 200 išvesties, plius patikros praėjimą (6 000 įv. / 300 išv.). Esant 3 USD/M įv., 15 USD/M išv.:

```
Draft:   12,000 × 3/1M + 1,200 × 15/1M  = $0.036 + $0.018 = $0.054
Verify:   6,000 × 3/1M +   300 × 15/1M  = $0.018 + $0.0045 ≈ $0.023
Per summary ≈ $0.077 → per 100,000 summaries/year ≈ $7,700

Against ~20 clinician-minutes saved per summary (≈ £25), inference is
0.25% of the value created — the economics are dominated by everything
EXCEPT the tokens: integration, evaluation, governance, adoption.
```

Ši išvada – išvedimo kaina retai yra ribojantis veiksnys, esant dabartinėms kainoms, didelės vertės klinikinėms užduotims – pati yra radinys, vertas nešti į kainodaros susitikimus.

## Ryšys su programinės įrangos inžinerija

Tai [debesijos vieneto ekonomika](../debesijos-vieneto-ekonomika/), specializuota DI, su trimis praktinėmis pastabomis: **matuokite pagal verslo vienetą**, o ne API iškvietimą, kad skaičius tiesiai įsijungtų į [ICER](../prieaugio-sąnaudų-efektyvumo-santykis/) / [biudžeto poveikio](../biudžeto-poveikio-analizė/) modelius; **stebėkite įvesties / išvesties asimetriją** (išvestis paprastai ~4× brangesnė už įvestį; RAG architektūros daug įvesties – architektūros pasirinkimai yra kainodaros pasirinkimai); ir **maršrutizuokite pagal užduoties pakopą** – derinant modelio gebėjimą su užduoties sunkumu (pigūs modeliai klasifikavimui, pažangiausi sintezei) įprastai sumažinama mišri kaina 5–10× esant tokiai pačiai kokybei, programinės įrangos versija naudojant pigiausią veiksmingą intervenciją ([sąnaudų minimizavimas](../sąnaudų-minimizavimo-analizė/), ekvivalentiškumas įrodytas).

## Spąstai

- **Užšaldytų kainų daugiamečiai modeliai** – pervertina kainą; bet ir **prielaidomis apie defliaciją pagrįsti pajamų modeliai** – kainų karas nėra sutartis; modeliuokite abu scenarijus.
- **Vertinimo pridėtinių sąnaudų ignoravimas**: apsauginiai mechanizmai, vertintojai ir pakartojimai yra tikri žetonai, reguliuojamose aplinkose dažnai dauguma.
- **Žetono trumparegystė**: vėlinimas, greičio apribojimai ir konteksto lango apribojimai turi sąnaudų, kurių nefiksuoja jokia žetono kaina.

## Šaltiniai

- Epoch AI, LLM inference price trends. <https://epoch.ai/data-insights/llm-inference-price-trends>
- LLM pricing comparisons. <https://www.silicondata.com/blog/llm-cost-per-token>
