# MI-fejlesztői termelékenység

Mutatók arra, mit tesz valójában az MI-kódolássegítség a mérnöki kimenettel: javaslatelfogadási arányok, kontrollált vizsgálatok gyorsulása, PR-áteresztőképesség és kódmegtartás. A bizonyítékbázis valóban ellentmondásos — ami tökéletes esettanulmánnyá teszi a hatásosság és eredményesség megkülönböztetéséhez, amelynek kezelésére az egészséggazdaságtan épült.

## Miért fontos

A két leggyakrabban idézett kontrollált vizsgálat ellentétes irányba mutat:

- **Peng és mtsai 2023 (GitHub Copilot RCT)**: a fejlesztők egy zöldmezős HTTP-szerver feladatot **55,8%-kal gyorsabban** fejeztek be a Copilottal (1 óra 11 perc vs 2 óra 41 perc, n=95).
- **METR 2025 RCT**: tapasztalt nyílt forráskódú fejlesztők, akik *saját érett repóikon* dolgoztak, **19%-kal lassabbak** voltak a 2025 eleji MI-eszközökkel (16 fejlesztő, 246 feladat) — miközben *azt hitték*, hogy 20%-kal gyorsabbak.

Mindkettő jó vizsgálat. Az ellentmondás maga a megállapítás: a zöldmezős feladatokon mért hatásosság nem vihető át az érett kódbázison mért eredményességre, és az *észlelt* előny nem helyettesítheti a mért előnyt. Az orvostudománynak van neve mindkét jelenségre (magyarázó vs pragmatikus vizsgálatok; a placebo-probléma) és gépezete a kezelésükre.

## A matematika

```
Acceptance rate  = accepted suggestions / shown suggestions
                   (GitHub telemetry ~30% avg; varies: SQL 45%, Python 35%, JS 28%)
Retention rate   = AI code surviving to merge / accepted AI code (~88% reported)
Speedup          = (t_control − t_AI) / t_control  (from controlled comparison ONLY)
Throughput delta = Δ merged PRs/dev/week (GitHub/Accenture field data: +8.7%)

Value model     = devs × time saved × loaded rate × utilization factor
                  — every term needs local measurement; see the tornado in
                  sensitivity-analysis.md, where time-saved dominates all
                  other parameters combined
```

## Kidolgozott példa

Egy 500 fejlesztős szervezet megfelelő kontrollal kísérletezik egy asszisztenssel (illesztett csapatok, 3 hónap, előre regisztrált mutatók):

```
Pilot result: PR cycle time −18%; merged PRs +6%; CFR unchanged;
              self-reported time saved 45 min/day; measured task-level ≈ 15 min/day

Value the MEASURED number: 500 × 0.25h × 220d × £60 × 0.6 utilization
                          ≈ £990,000/year capacity (non-cash-releasing)
Cost: 500 × £39/mo × 12 ≈ £234,000/year
Net capacity ratio ≈ 4:1 — fundable, at one-third the self-reported claim.
```

Az észlelt és mért érték közötti 3-szoros rés a METR-megállapítás működés közben; az önbeszámolóra költségvetezés háromszorosára növelte volna az előnysort.

## Kapcsolat a szoftverfejlesztéssel

Az egészséggazdasági importok mindenkinek, aki MI-eszközöket értékel: futtass **pragmatikus vizsgálatokat** (a te kódbázisod, a te mérnökeid, valódi jegyek — nem szállítói demófeladatok); kezeld az **elfogadási arányt helyettesítőként, nem kimenetként** (ez a javaslatok [PPV](../klinikai-mi-értékelése/)-je a fejlesztő szemszögéből — magas elfogadás alacsony megtartással túldiagnosztizálás); párosíts minden áteresztőképesség-nyereséget **stabilitás-ellenőrzéssel** (DORA 2025: az MI növeli az áteresztőképességet, rontja a stabilitást — a mellékhatásokkal járó beavatkozás nettó haszon elemzést igényel, lásd [DORA-mutatók](../dora-mutatók/)); és osztályozd az előnyt őszintén kapacitásként ([készpénzfelszabadító és nem készpénzfelszabadító](../készpénzfelszabadító-és-nem-készpénzfelszabadító-megtakarítások/)).

## Buktatók

- **Szállítói vizsgálat átültetése**: zöldmezős RCT-számok alkalmazása régi kódbázison végzett munkára — pontosan az a hiba, amelyet a METR-vizsgálat leleplezett.
- **Önbeszámoló mint mérés**: a 20 százalékpontos észlelési rés a legnagyobb ismert torzítás ebben az irodalomban.
- **Aktivitás-felfújás**: a több PR és több kód Aktivitás, nem kimenet ([SPACE](../space-és-devex/)); párosítsd újramunkával és CFR-rel.
- **A tanulási görbe figyelmen kívül hagyása**: a 2. heti mérések mindkét irányban újdonsághatásokat rögzítenek; mérj állandósult állapotban ([időhorizont](../időhorizont/)).

## Források

- Peng S, et al. "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot." 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity." 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA 2025 report. <https://dora.dev/dora-report-2025/>
