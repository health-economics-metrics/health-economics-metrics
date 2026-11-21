# Digitális végpontok és biomarkerek

A digitális biomarker szenzorokkal gyűjtött, objektív fiziológiai vagy viselkedési mérőszám (járássebesség telefonból, alvás viselhető eszközből, tremor gyorsulásmérésből). A digitális végpont egy ilyen mérőszám, **vizsgálati kimenetelként** használva — a kezelés hatásának igazolására. Az „eszköz által kibocsátott adat" és a „hatóság által elfogadott bizonyíték" közötti előrelépés egy meghatározott validálási létrán halad végig.

## Miért fontos

A hagyományos vizsgálati végpontok epizodikusak (háromhavonta rendelői vizit) és drágák; a digitális végpontok folyamatosak, ökológiai érvényesek (valós élet, nem rendelői teljesítmény) és megfigyelésenként olcsók — összezsugoríthatják a vizsgálatokat, korábban kimutathatnak hatásokat, és lehetővé teszik a decentralizált vizsgálatokat. A buktató a validálás: az elfogadott keretrendszer (az FDA-val összhangban, három pillér) megköveteli a **verifikálást/analitikai validálást** (a szenzor pontosan méri a fizikai mennyiséget), a **klinikai validálást** (a mérőszám azt a klinikai állapotot tükrözi, amit állít) és az **egészség értelmes aspektusának** igazolását (a betegeknek fontos, amit rögzít). A mindhárom nélküli végpont telemetria, nem bizonyíték.

## A matematika

```
Analytical validation: agreement with reference (see wearable-validation.md —
                       MAPE, CCC, Bland-Altman)
Clinical validation:   correlation/discrimination against clinical anchors
                       (known-groups validity, responsiveness to change)
Endpoint economics:
  events detected per patient-year (continuous) vs per-visit sampling
  trial power: continuous measures cut sample size when between-visit
  variance dominates — N ∝ σ²/Δ², and σ² falls with dense sampling
```

## Kidolgozott példa

Egy Parkinson-kóros vizsgálat csuklószenzorból származó járássebességet mérlegel a negyedéves, rendelőben értékelt pontszámokkal szemben:

```
Clinic endpoint:  4 measurements/patient/year, high day-to-day noise
Digital endpoint: ~200 passive measurements/patient/year

Variance of the annual-change estimate falls ~5× with dense sampling →
detectable effect size at fixed power improves ~√5 ≈ 2.2×, or
equivalently sample size shrinks ~40–60% for the same hypothesis.
At £25,000 per enrolled patient, cutting 200 patients ≈ £5M saved
per trial — the commercial case for the validation investment
(itself perhaps £1–2M) across a sponsor's pipeline.
```

## Kapcsolat a szoftverfejlesztéssel

A digitális végpontok klinikai ruhába bújtatott adatmérnöki szakterület: **adateredet és verziókezelés** (a vizsgálat közbeni algoritmusfrissítések veszélyeztetik az összehasonlíthatóságot — a [PCCP](../mi-szabályozási-értékelése/) problémája vizsgálati formában; verziózárolás és áthidaló validálás); **hiányzóadat-tervezés** (a viselési idő hézagai informatívak, nem véletlenszerűek — lásd [viselhető eszközök validálása](../viselhető-eszközök-validálása/); a pótlási döntések tudományos állítások); valamint **él/felhő megosztási döntések**, amelyek megváltoztatják, hogy a nyers jelből később egyáltalán mi nyerhető vissza. Azok a csapatok, amelyek a mérési folyamatot az első naptól szabályozott szoftverként kezelik — tesztelve, verziózva, dokumentálva —, olcsón vásárolják meg végpontjaik hitelességét; a validálás utólagos ráépítése egy gyorsan összetákolt folyamatra az a pont, ahol a digitális végpontú programok elhalnak.

## Buktatók

- **A rendelői méréssel való korreláció mint teljes validálás**: egy hibás rendelői mérőszám utánzása öröklődést bizonyít, nem igazságot; az egészség értelmes aspektusa ellen kell validálni.
- **Újszerű végpont szabályozási kockázata**: egy példa nélküli végpont tudományosan jobb lehet, és mégis elsüllyeszthet egy beadványt — a hatóságokat korán be kell vonni (léteznek minősítési programok).
- **Szenzor–populáció eltérés**: validálás fiatal, egészséges csuklókon, alkalmazás idős betegeknél, akiknél a tremor és a pigmentációs különbségek olyanok, amilyet a PPG sosem látott.
- **Jellemzők elsodródása**: a járásalgoritmus új adatokon való újratanítása csendben újradefiniálja a végpontot a vizsgálat közben.

## Források

- Coravos A, Khozin S, Mandl KD. "Developing and adopting safe and effective digital biomarkers to improve patient outcomes." npj Digital Medicine 2019. <https://www.nature.com/articles/s41746-019-0090-4>
- Digital Medicine Society (DiMe), digital endpoints resources. <https://dimesociety.org/>
