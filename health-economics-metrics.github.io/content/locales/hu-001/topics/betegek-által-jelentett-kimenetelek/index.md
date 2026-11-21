# Betegek által jelentett kimenetelek (PROM, PREM, MCID)

A PROM-ok szabványosított mérőeszközök, amelyekben a betegek saját egészségi állapotukat jelentik (tünetek, működés, életminőség); a PREM-ek az ellátás *élményét* rögzítik. Az **MCID** — minimális klinikailag fontos különbség — az a legkisebb pontszámváltozás, amelyet a betegek ténylegesen előnyösnek érzékelnek: az a léc, amelyet minden állított javulásnak át kell ugrania.

## Miért fontos

A PROM-ok a digitális egészségügy elsődleges hatásossági valutája: az alkalmazások ritkán mozgatják a halálozást, de hihetően mozgathatnak validált tünetpontszámokat. A számító mérőeszközök kevesen és szabványosítottak — **PHQ-9** (depresszió, 0–27; súlyossági sávok 5/10/15/20-nál), **GAD-7** (szorongás, 0–21; sávok 5/10/15-nél), **EQ-5D** (hasznosság a [QALY-khoz](../minőséggel-korrigált-életév/)) — és a szabályozók, HTA-testületek és finanszírozók éppen azért fogadják el őket, mert termékek és vizsgálatok között összehasonlíthatók. Az MCID az őszinteségi kapu: PHQ-9 MCID ≈ 5 pont, GAD-7 ≈ 4, EQ-5D index általában ~0,03–0,08 — egy nagy mintán statisztikailag szignifikáns 1,5 pontos PHQ-9 változás *valódi, de klinikailag értelmetlen*, és a bizonyítékbíráló ezt ki fogja mondani.

## A matematika

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

## Kidolgozott példa

Egy depresszió-támogató alkalmazás, RCT várólistával szemben, 12 hét:

```
PHQ-9 change: app −6.2 points, control −2.1 → adjusted difference −4.1
MCID check: 4.1 < 5 → mean difference below MCID; report responders instead:
  responders (≥5-point drop): app 48%, control 22% → ARR 26%
  NNT = 1/0.26 ≈ 4 — four users treated per additional clinical response

Economic bridge: responders' EQ-5D gain 0.06 sustained 6 months
  = 0.03 QALYs; per 1,000 users: 260 extra responders × 0.03 = 7.8 QALYs
  ≈ £156,000–£234,000 of health value at NICE thresholds
```

A válaszadó/NNT keretezés túléli a felülvizsgálatot, ahol az MCID alatti átlagkülönbséget elvetették volna.

## Kapcsolat a szoftverfejlesztéssel

A PROM-ok adatgyűjtési probléma, amelyet a szoftver egyedülállóan jól tud megoldani: az alkalmazáson belüli mérőeszközök olyan befejezési arányt és hosszmetszeti sűrűséget érnek el, amelyet a papír soha nem tudott, a rutin termék-telemetriát HTA-minőségű bizonyítékká alakítva (az [EQ-5D](../eq-5d/) öt képernyő). Mérnöki szabályok: használd a validált mérőeszközt *szó szerint* (az átfogalmazás érvényteleníti — licenc érvényes); a mérést a protokoll szerint ütemezd, ne az elköteleződési kényelem szerint (csak az aktív felhasználók mérése túlélési torzítás — lásd [megtartás](../megtartás-és-lemorzsolódás/)); és verziózárold a mérőeszköz adatait, mint bármely sémát — a vizsgálat közbeni megfogalmazásváltoztatás adatkorrupció. A PREM-ek a CSAT/NPS-stílusú mérőeszközökre képezhetők, és ugyanaz a lecke érvényes: a szabványosított jobb a házi készítésűnél, ahol a közönség finanszírozó. Egy munkatermelékenység-specifikus mérőeszközhöz lásd [WPAI](../munkahelyi-termelékenység-és-tevékenységkorlátozottság/).

## Buktatók

- **MCID alatti statisztikai szignifikancia** klinikai előnyként bemutatva — az ágazat leggyakoribb felfújása.
- **Az átlaghoz való visszatérés**: a felhasználók tünetcsúcsokon iratkoznak be; az egykarú előtte/utána hatalmasan túlbecsül — az összehasonlítók nem alkuképesek.
- **Mérőeszköz-vásárlás**: PHQ-9, GAD-7 és WHO-5 futtatása, majd bármelyik közlése, amelyik mozdult — regisztráld előre az elsődlegest.
- **Digitális beleegyezéses felmérési nyomás**: a felhasználók kedvező válaszok felé terelése megrongálja a mérőeszközt (és a bírálók ismerik az alapértékeket).

## Források

- MCID estimation review (EQ-5D). <https://pmc.ncbi.nlm.nih.gov/articles/PMC10526144/>
- PROMs vs PREMs primer. <https://www.forcetherapeutics.com/blog/whats-the-difference-between-pros-proms-pro-pms-and-prems>
- Kroenke K, et al. PHQ-9 validation literature. <https://pubmed.ncbi.nlm.nih.gov/11556941/>
