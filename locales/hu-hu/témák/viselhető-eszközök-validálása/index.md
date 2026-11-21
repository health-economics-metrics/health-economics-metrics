# Viselhető eszközök validálása

A validálási mérőszámok azt számszerűsítik, mennyire egyeznek egy viselhető eszköz mérései a klinikai aranystandarddal (EKG a pulzushoz, poliszomnográfia az alváshoz): **MAPE**, egyezési korreláció (concordance correlation), Bland–Altman-egyezés — továbbá a valós adatminőséget kapuzó működési mutatók: a **viselési idő megfelelősége** és az **adatteljesség**.

## Miért fontos

A validálás minden további lépés előfeltétele: az az eszköz, amely nem tudja igazolni az egyezést a referenciaméréssel, nem lehet [digitális végpontok](../digitális-végpontok-és-biomarkerek/) alapja, nem támaszthat alá [RPM-számlázást](../távoli-betegfigyelés-gazdaságtana/), és nem hordozhat klinikai állításokat. A szakterület elfogadott küszöbei a pulzusra az EKG-hoz képest: **MAPE ≤5%** (szigorú) vagy **≤10%** (engedékeny). Viszonyítási pontok az irodalomból: az Oura Gen 3 nyugalmi pulzus MAPE-je 1,67% (CCC 0,97); a Fitbit Charge 6 MAPE-je ~5,5% — a fogyasztói eszközök ma már átlépik a klinikai minőség határát, és éppen ezért számít a mérés eszközönként és állapotonként.

## A matematika

```
MAPE = (1/n) Σ |measured_i − reference_i| / reference_i × 100

CCC (concordance correlation) = agreement including both correlation
      and systematic bias (Pearson r penalized by location/scale shift)

Bland–Altman: mean bias ± 1.96 SD limits of agreement — shows whether
      error depends on the value's magnitude

Operational gates:
Wear-time compliance = time worn / protocol time × 100
Data completeness    = observed data points / expected × 100
```

A validálást **tevékenységi állapotonként** (nyugalom, mozgás, alvás) és populációnként kell jelenteni — a PPG optikai érzékelés romlik a mozgási műtermékektől, a rossz érintkezéstől és a sötétebb bőrtónustól, ami dokumentált, méltányosság szempontjából releváns hibamód.

## Kidolgozott példa

Egy virtuális osztályos program viselhető megfigyelőeszközt választ. A jelölt: nyugalmi MAPE 2,1%, terhelési MAPE 11,4%. B jelölt: nyugalmi 3,8%, terhelési 6,9%.

```
Use case: deteriorating-patient detection at home — alerts trigger on
sustained elevated HR, often during activity.
Candidate A's headline (2.1%) wins the brochure; candidate B wins the
use case: at the alert-relevant condition (motion), A's 11.4% error
at HR 100 = ±11 bpm — spanning the entire alert threshold band,
generating false escalations (each a nurse callout, ~£40) or misses.

False-alert economics: 500 patients × 2 extra false alerts/week × £40
= £2.08M/year of error cost from choosing the wrong validation number.
```

## Kapcsolat a szoftverfejlesztéssel

A mérnökök a validálási adatokat szenzorválasztáskor *fogyasztják*, a mérési funkciók építésekor pedig *előállítják* — mindkét szerep ugyanazt a fegyelmet kívánja: a telepítési körülményeken tesztelj, ne a bemutatón (a szoftveres megfelelő: a saját éles terhelésen benchmarkolsz, nem a gyártó terhelésén). A viselési idő és a teljesség termékmérnöki eredmények — a kényelem, az akkumulátor-üzemidő, a töltési rituálé tervezése és a szinkronizálás megbízhatósága dönti el, teljesül-e a 30-ból 16 napos RPM-számlázási kapu ([távoli betegfigyelés gazdaságtana](../távoli-betegfigyelés-gazdaságtana/)), és elemezhetők-e a vizsgálati adathalmazok. Kezeld a hiányzást tervezett jelként: a sémában az első naptól különböztesd meg a „nem viselt", a „viselt, de nincs jel" és a „szinkron sikertelen" eseteket — nullává összevonva minden további elemzést megmérgeznek.

## Buktatók

- **Az aggregált MAPE elrejti az állapotspecifikus hibát** — a kidolgozott példa csapdája.
- **Validálási populáció ≠ telepítési populáció**: az életkor, a bőrtónus, a tremor és az elhízás mind eltolja az optikai szenzor hibáját; ellenőrizd a vizsgálat demográfiáját.
- **Korreláció jelentése ott, ahol egyezés kell**: a magas Pearson-r szisztematikus torzítással még mindig rosszul osztályoz abszolút küszöbökhöz képest — követeld a CCC-t/Bland–Altmant.
- **Pótlással felfújt teljesség**: a kitöltött hézagokat megfigyelt adatként jelentik.

## Források

- Consumer wearable HR validation (Oura Gen 3/4). <https://pmc.ncbi.nlm.nih.gov/articles/PMC12367097/>
- Wearable validity thresholds (MAPE standards). <https://formative.jmir.org/2025/1/e70835>
- Multi-device validation studies. <https://pmc.ncbi.nlm.nih.gov/articles/PMC6431828/>
