# Adherencia és perzisztencia

Az adherencia azt jelenti, mennyire közelíti a tényleges használat az előírtat (intenzitás); a perzisztencia azt, meddig folytatódik a használat az abbahagyásig (időtartam). A gyógyszertárnak szabványosított mérőszámai vannak — **MPR** és **PDC**, a ≥80% a hagyományos „adherens" lécként — és a digitális terápiák mind a fogalmakat, mind a problémát öröklik: az adherencia a hatásosság és a megvalósult érték közötti szorzó.

## Miért fontos

A finanszírozók már ezekkel a számokkal működnek: a PDC ≥80% az amerikai Medicare Star Ratings-be táplál, amelyek valódi finanszírozói bevételt mozgatnak — az adherencia pénzügyileg teherviselő infrastruktúra, nem puha mutató. A digitális terápiáknál a minta megismétlődik: a DiGA-adatok erős receptmennyiséget mutatnak gyenge tartós adherenciával, és az eredményalapú DTx-árazás (Németországban 2026-tól érkezik) adherenciához kötött eredményekre fog fizetni. A fogalmi fejlesztés a digitális egészségügyi kutatásból: a **hatásos elköteleződés** — az *elégséges* elköteleződés a szándékolt kimenet eléréséhez — és következménye, a **minimális hatásos dózis**, intervencióként empirikusan megállapítva, nem „többnek" feltételezve.

## A matematika

```
MPR = Σ days' supply dispensed / days in period × 100   (can exceed 100%;
      overestimates via early refills)
PDC = days covered by supply / days in period × 100     (capped at 100%;
      the conservative, CMS-preferred estimator)
Digital adherence = actual usage events / prescribed usage events × 100
Persistence       = days from initiation to discontinuation
                    (report % persistent at N months; survival methods)

Value gating: realized outcome ≈ efficacy × g(adherence)
  where g is the dose-response function; below the minimum effective
  dose, g ≈ 0 — cost incurred, benefit forfeited
```

## Kidolgozott példa

Egy digitális CBT-alvászavarra termék, 6 modulra felírva 6 hétre; a vizsgálati hatásosság 0,025 QALY a ≥4 modult befejezőknél (az empirikusan megállapított minimális hatásos dózis):

```
1,000 prescriptions at £250 → £250,000 payer spend
Module completion: ≥4 modules 38%; 1–3 modules 34%; zero modules 28%

QALYs realized = 1,000 × 0.38 × 0.025 = 9.5
Cost per QALY  = 250,000 / 9.5 ≈ £26,300 — marginal at NICE thresholds

Adherence engineering (reminders redesign, session shortening) lifts
≥4-module completion to 50%: 12.5 QALYs → £20,000/QALY. The product
crossed the funding threshold without touching the therapy content.
```

A 2026-stílusú teljesítményalapú árazás alatt ugyanez az elmozdulás közvetlenül a *bevételt* mozgatja — az adherencia-mérnökség a kereskedelmi útitervvé válik.

## Kapcsolat a szoftverfejlesztéssel

Két szókincs konvergál egy fogalomra: a szoftveranalitika ([aktiválás](../aktiválás-és-felhasználóvá-válás/), [ragadósság](../elköteleződési-mutatók/), [megtartás](../megtartás-és-lemorzsolódás/)) és a klinikai gyógyszertár (MPR, PDC, perzisztencia) egyaránt egy beavatkozásnak való kitettséget mér — képezd le a termékeseményeidet a klinikai szókincsre, és a finanszírozók el tudják olvasni a műszerfalaidat. A mérnökség birtokolja az adherencia karjait: emlékeztető-logika (a buta napi pingek megtanítják az elutasítást; az adaptív időzítés nem), munkamenet-költség (egy 20 perces modul kevésbé fejeződik be, mint 3 × 7 perces), és súrlódási telemetria, amely megtalálja, a protokoll *melyik pontján* morzsolódnak le a felhasználók. Műszerezd a dózis-választ az első naptól — a teljes gazdasági modellt kapuzó minimális hatásos dózis elemzéshez kimenethez kötött használati adatok kellenek, amelyeket csak a termék tud gyűjteni.

## Buktatók

- **MPR/PDC összekeverése**: az MPR felfúj; mondd meg, melyik becslőt használod, és a PDC-t használd mindenhez, ami a finanszírozó felé néz.
- **Adherencia a mutatóhoz, nem a terápiához**: a megnyitások dózisként számolva (lásd [elköteleződési mutatók](../elköteleződési-mutatók/)).
- **„Több a jobb" elköteleződési célok**, ahol a beavatkozásnak véges dózisa van — a diplomaosztás siker, az örök használat nem.
- **Túlélő-alapú hatásossági állítások**: az adherensek közötti kimenetek szelekciós hatásokat tartalmaznak (az adherens emberek különböznek); az őszinte oksági becsléshez randomizálás vagy gondos korrekció kell.

## Források

- MPR vs PDC. <https://phslrx.com/medication-adherence-metrics/>
- Yardley L, et al., effective engagement. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
- DiGA adherence findings, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
