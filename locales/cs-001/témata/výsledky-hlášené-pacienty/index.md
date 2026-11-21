# Výsledky hlášené pacienty (PROM, PREM, MCID)

PROM jsou standardizované nástroje, kde pacienti sami hlásí svůj zdravotní stav (příznaky, funkci, kvalitu života); PREM zachycují *zkušenost* s péčí. **MCID** – minimální klinicky významný rozdíl – je nejmenší změna skóre, kterou pacienti skutečně vnímají jako prospěšnou: laťka, kterou musí překonat každé tvrzené zlepšení.

## Proč na tom záleží

PROM jsou primární měnou účinnosti pro digitální zdraví: aplikace zřídka hýbou úmrtností, ale mohou věrohodně hýbat validovanými skóre příznaků. Nástrojů, na kterých záleží, je málo a jsou standardizované – **PHQ-9** (deprese, 0–27; pásma závažnosti při 5/10/15/20), **GAD-7** (úzkost, 0–21; pásma při 5/10/15), **EQ-5D** (užitek pro [QALY](../rok-života-upravený-o-kvalitu/)) – a regulátoři, orgány HTA i plátci je přijímají právě proto, že jsou srovnatelné napříč produkty a studiemi. MCID je brána poctivosti: MCID PHQ-9 ≈ 5 bodů, GAD-7 ≈ 4, index EQ-5D běžně ~0,03–0,08 – statisticky významná změna PHQ-9 o 1,5 bodu na velkém vzorku je *skutečná, ale klinicky bezvýznamná* a recenzent důkazů to řekne.

## Matematika

```
PROM scoring: instrument-specific sums (e.g., PHQ-9 = Σ 9 items × 0–3)
MCID estimation:
  anchor-based:      score change among patients who report "somewhat better"
  distribution-based: ≈ 0.5 × SD of baseline scores (rough heuristic)
Response rate framing (for trials and dossiers):
  responder = patient improving ≥ MCID (or ≥50% for PHQ-9 convention)
  NNT = 1 / (responder rate_treatment − responder rate_control)
  — see number-needed-to-treat.md
```

## Řešený příklad

Aplikace podpory při depresi, RCT vs čekací listina, 12 týdnů:

```
PHQ-9 change: app −6.2 points, control −2.1 → adjusted difference −4.1
MCID check: 4.1 < 5 → mean difference below MCID; report responders instead:
  responders (≥5-point drop): app 48%, control 22% → ARR 26%
  NNT = 1/0.26 ≈ 4 — four users treated per additional clinical response
Economic bridge: responders' EQ-5D gain 0.06 sustained 6 months
  = 0.03 QALYs; per 1,000 users: 260 extra responders × 0.03 = 7.8 QALYs
  ≈ £156,000–£234,000 of health value at NICE thresholds
```

Rámec respondentů/NNT přežije recenzi tam, kde by průměrný rozdíl pod MCID byl odmítnut.

## Souvislost se softwarovým inženýrstvím

PROM jsou problém sběru dat, který software řeší jedinečně dobře: nástroje v aplikaci dosahují míry dokončení a longitudinální hustoty, jaké papír nikdy nedosáhl, a mění rutinní telemetrii produktu na důkazy na úrovni HTA ([EQ-5D](../eq-5d/) je pět obrazovek). Inženýrská pravidla: používejte validovaný nástroj *doslovně* (přeformulování ho znehodnotí – platí licencování); měření plánujte podle protokolu, nikoli podle pohodlí zapojení (měření jen aktivních uživatelů je zkreslení přeživších – viz [udržení](../udržení-a-odchod-uživatelů/)); a data nástroje verzujte jako každé schéma – změna formulace uprostřed studie je poškození dat. PREM odpovídají nástrojům typu CSAT/NPS a platí stejné poučení: standardizované poráží domácí všude, kde je publikem plátce. Pro nástroj specifický pro produktivitu práce viz [WPAI](../narušení-pracovní-produktivity-a-aktivity/).

## Úskalí

- **Statistická významnost pod MCID** prezentovaná jako klinický přínos – nejčastější nafouknutí v oboru.
- **Regrese k průměru**: uživatelé se zapisují při vrcholu příznaků; jednoramenné před/po masivně nadhodnocuje – komparátory nejsou k diskusi.
- **Nakupování nástrojů**: spuštění PHQ-9, GAD-7 a WHO-5 a vykázání toho, který se pohnul – předem registrujte primární.
- **Tlak na souhlas u digitálních průzkumů**: postrkování uživatelů k příznivým odpovědím poškozuje nástroj (a recenzenti znají základní míry).

## Zdroje

- MCID estimation review (EQ-5D). <https://pmc.ncbi.nlm.nih.gov/articles/PMC10526144/>
- PROMs vs PREMs primer. <https://www.forcetherapeutics.com/blog/whats-the-difference-between-pros-proms-pro-pms-and-prems>
- Kroenke K, et al. PHQ-9 validation literature. <https://pubmed.ncbi.nlm.nih.gov/11556941/>
