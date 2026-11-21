# Jednotková ekonomika inference

Jednotková ekonomika inference oceňuje funkce AI podle jejich mezních výpočtů: **náklady na token**, sečtené na náklady na transakci, na uživatele, na klinickou epizodu. Určující dynamika: ceny LLM klesly zhruba **o řád každé 1–2 roky** při konstantní schopnosti – míra deflace bez precedentu v nákladování zdravotnických technologií.

## Proč na tom záleží

Z kolapsu cen plynou dva důsledky. Komerčně může být funkce AI, která je dnes okrajová, za 18 měsíců triviálně ziskové – a konkurent oceněný podle dnešních nákladů bude podbídnut. Pro ekonomické hodnocení platí, že každý model nákladové efektivity klinické služby s AI, který zmrazí ceny inference z roku 2024, **podstatně nadhodnocuje průběžné náklady** – analýza potřebuje scénáře poklesu cen tak, jako modely léků zvládají vypršení patentu a vstup generik. (Referenční body z výzkumu: výstupní tokeny špičkových modelů ~15–75 USD/M v polovině roku 2026, modely střední třídy o řád levnější, schopnost na úrovni GPT-4 klesla z ~20 USD/M v roce 2022 na ~0,40 USD/M; Epoch AI naměřila poklesy 9×–900× ročně podle milníku schopnosti.)

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

## Řešený příklad

Služba AI pro propouštěcí zprávy: průměrná zpráva používá 12 000 vstupních tokenů (kontext záznamu) + 1 200 výstupních, plus verifikační průchod (6 000 vstup / 300 výstup). Při 3 USD/M vstup, 15 USD/M výstup:

```
Draft:   12,000 × 3/1M + 1,200 × 15/1M  = $0.036 + $0.018 = $0.054
Verify:   6,000 × 3/1M +   300 × 15/1M  = $0.018 + $0.0045 ≈ $0.023
Per summary ≈ $0.077 → per 100,000 summaries/year ≈ $7,700

Against ~20 clinician-minutes saved per summary (≈ £25), inference is
0.25% of the value created — the economics are dominated by everything
EXCEPT the tokens: integration, evaluation, governance, adoption.
```

Tento závěr – náklady inference jsou při současných cenách zřídka omezujícím faktorem u vysoce hodnotných klinických úloh – je sám nálezem, který stojí za to přenést do cenových jednání.

## Souvislost se softwarovým inženýrstvím

Je to [jednotková ekonomika cloudu](../jednotková-ekonomika-cloudu/) specializovaná na AI se třemi praktickými poznámkami: **měřte na obchodní jednotku**, nikoli na volání API, aby se číslo zapojilo přímo do modelů [ICER](../inkrementální-poměr-nákladové-efektivity/)/[dopadu na rozpočet](../analýza-dopadu-na-rozpočet/); **hlídejte asymetrii vstup/výstup** (výstup bývá ~4× dražší než vstup; architektury RAG jsou náročné na vstup – architektonické volby jsou cenové volby); a **směrujte podle úrovně úlohy** – přiřazení schopnosti modelu k obtížnosti úlohy (levné modely pro klasifikaci, špičkové pro syntézu) běžně snižuje smíšené náklady 5–10× při stejné kvalitě, softwarová verze použití nejlevnější účinné intervence ([minimalizace nákladů](../analýza-minimalizace-nákladů/), ekvivalence doložena).

## Úskalí

- **Víceleté modely se zmrazenými cenami** – nadhodnocují náklady; ale také **příjmové modely s předpokládanou deflací** – cenová válka není smlouva; modelujte scénáře obojího.
- **Ignorování režie vyhodnocování**: guardraily, soudci a opakování jsou skutečné tokeny, v regulovaném prostředí často většina.
- **Per-token krátkozrakost**: latence, limity rychlosti a omezení kontextového okna nesou náklady, které žádná cena tokenu nezachytí.

## Zdroje

- Epoch AI, LLM inference price trends. <https://epoch.ai/data-insights/llm-inference-price-trends>
- LLM pricing comparisons. <https://www.silicondata.com/blog/llm-cost-per-token>
