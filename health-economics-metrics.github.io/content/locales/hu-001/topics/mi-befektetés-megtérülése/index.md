# MI-befektetés megtérülése

Az MI ROI az MI-kezdeményezéseknek tulajdonítható mérhető eredménykimutatási megtérülés. A kijózanító viszonyítási érték: az MIT 2025-ös „GenAI Divide" kutatása szerint a 30–40 milliárd $ vállalati GenAI-befektetés ellenére **a kísérletek ~95%-a nem mutatott mérhető eredménykimutatási megtérülést** — és a sikeres 5% azonosítható szokásokat osztott.

## Miért fontos

Az egészségügyi rendszereknek van nevük az MI-kísérleti mintára: **pilotitis** — az ígéretes alkalmazások NHS-temetője, amelyeket örökké kísérleteznek, és soha nem skálázzák. Az MIT-megállapítások tisztán leképeződnek arra, amit az egészségügyi technológiaértékelés már tud: az értékállításokhoz előre meghatározott végpontok kellenek, a tulajdonításhoz összehasonlítók, és a „mindenki érzi, hogy segít" nem előnysor. Az MIT adataiban a sikeres kisebbség a követhető költség-alapvonalú back-office automatizálásra koncentrálódott, és a **vásárolt eszközök ~67%-ban voltak sikeresek, a belső építések ennek nagyjából harmadában** — priorok, amelyek minden MI-befektetési esetbe beletartoznak (lásd [építés vagy vásárlás](../építés-vagy-vásárlás/)).

## A matematika

```
AI ROI = (attributable benefit − total AI cost) / total AI cost

Total AI cost = licences/inference (see inference-unit-economics.md)
              + integration + data readiness + evaluation
              + workflow redesign + governance/assurance
              (the licence is typically the minority of the denominator)

Attributable benefit: measured against a baseline or control, classed
cash / capacity / quality per cash-releasing-vs-non-cash-releasing.md
```

## Kidolgozott példa

Egy kórházcsoport két felhasználási esetre vezet be MI-t:

```
Use case A — clinical-letter drafting (back office, trackable):
  baseline: outsourced transcription £380k/yr
  after:    transcription contract cancelled; clinician review time +£60k
  AI cost:  £120k/yr all-in
  ROI = (380k − 60k − 120k) / 120k ≈ 167% — cash-releasing, auditable ✓

Use case B — "AI copilot for clinicians" (broad, untracked):
  benefit claim: "saves time across 4,000 staff" — no baseline captured
  measured P&L effect: none demonstrable
  → the 95% bucket, regardless of whether it actually helps
```

A különbség nem az MI minősége — hanem az, hogy az előnynek volt-e **alapvonala, felelőse és költségvetési sora** ([haszonrealizálás](../haszonrealizálás/)).

## Kapcsolat a szoftverfejlesztéssel

Az MI-befektetés HTA-alakú játékkönyve: **szakaszold a bizonyítékot, mint a [NICE ESF szinteket](../nice-bizonyítékszabványi-keretrendszer/)** — demó-szintű bizonyíték az alacsony téttel bíró eszközökhöz, kontrollált kísérletek a szervezetszintű kiadás előtt, előre regisztrált bevezetési kapukkal (a [DiGA](../németország-diga-gyorsított-eljárása/) ideiglenes listázás határidővel mintája); **számold a költségelkerülést úgy, ahogy az egészséggazdaságtan a keresletelkerülést** — csak akkor valódi, ha egy konkrét költségvetési sor elmozdul; és **áraztad magát a kísérleti projektet [EVPI](../a-tökéletes-információ-várható-értéke/)-vel** — az a kísérleti projekt, amely nem változtathatja meg a bevezetési döntést, 0 £-t ér. Kifejezetten a fejlesztői eszközök szeletéhez lásd [MI-fejlesztői termelékenység](../mi-fejlesztői-termelékenység/).

## Buktatók

- **Előnyszóródás**: ezernyi felhasználón vékonyan szétterülő érték konstrukció szerint mérhetetlen; válassz koncentrált, követhető alapvonalú felhasználási eseteket.
- **Csak licenc-költségezés**: az integráció, értékelés és munkafolyamat-újratervezés általában dominálja a valódi nevezőt.
- **Tulajdonítási lopás**: a folyamat-újratervezéssel együtt bevezetett MI az egész deltát magának állítja.
- **Elsüllyedt kísérlet eszkaláció**: a sikertelen kísérletek meghosszabbítása, mert a leállítás beismerné a kudarcot — a lemondási dátumot előre meg kell állapodni.

## Források

- MIT Project NANDA "GenAI Divide" coverage. <https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/>
- MIT GenAI ROI findings summary. <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- MIT Technology Review, finding ROI on AI. <https://www.technologyreview.com/2025/10/28/1126693/finding-return-on-ai-investments-across-industries/>
