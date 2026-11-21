# Szén-dioxid-lábnyom QALY-nként

A szén-dioxid QALY-nként hatékonysági hányados — egy beavatkozás szén-dioxid-kibocsátása (vagy elkerült kibocsátása) osztva az általa nyújtott QALY-kkal — közvetlenül analóg a QALY-nkénti költséggel, lehetővé téve egy beavatkozás szénhatékonyságának értékelését a költséghatékonysága mellett. A „szénkorrigált nettó pénzbeli haszon" egy lépéssel továbbmegy: a széndioxid-hatást az Egyesült Királyság Green Book hivatalos nem kereskedett szénértékeivel pénzzé teszi, és nettósítja a szokásos [nettó pénzbeli haszonnal](../nettó-pénzbeli-haszon/).

## Miért fontos

A NICE és az NHS England ma már elvárja, hogy a környezeti hatást a költség és a QALY-k mellett figyelembe vegyék. Az NHS-nek nyilvános nettó nulla vállalása van: nettó nulla a közvetlen kibocsátásokra 2040-ig, és nettó nulla a teljes ellátási lánc lábnyomára 2045-ig. A NICE egészségügyi technológiaértékelési kézikönyve (PMG36) a környezeti fenntarthatóságot a technológiaértékelés feltörekvő szempontjaként említi. Egy digitális egészségügyi terméknél ez azt jelenti, hogy a szén-dioxid az értékajánlat negyedik pillérévé válik a költség, a QALY-k és a [dominancia a hatékonysági határon](../dominancia-és-hatékonysági-határ/) mellett — nem helyettesítve egyiket sem, hanem olyan dimenzió, amelyet egy jól épített üzleti esetnek egyre inkább közölnie kell.

## A matematika

```
Carbon per QALY = total_emissions_tonnes_co2e / total_qalys
  (a negative value means net emissions AVOIDED per QALY gained — a
  double win: better health and lower carbon)

Monetized carbon impact = emissions_tonnes_co2e × carbon_value_per_tonne
  (negative emissions × positive value = a negative cost, i.e. a benefit)

Carbon-adjusted NMB = net_monetary_benefit − monetized_carbon_impact
```

Ez kiterjeszti a költség/QALY hatékonysági határ gondolatát egy második tengellyel — szén-dioxid QALY-nként — ugyanaz a „ábrázolj minden lehetőséget, és nézd meg, mi dominált" logika, mint a [dominancia és hatékonysági határ](../dominancia-és-hatékonysági-határ/) témában, költség helyett szén-dioxidra alkalmazva.

## Kidolgozott példa

Egy telemedicina-szolgáltatás személyes látogatásokat vált ki, évi 5000 autóutat kerülve el kb. 8 kg CO2e-vel egyenként — 40 tonna elkerült CO2e, negatív kibocsátási számként ábrázolva (−40,0 tonna), és évi 25 QALY-t nyújt:

```
Carbon per QALY = −40.0 / 25.0 = −1.6 tonnes CO2e avoided per QALY gained
```

A Green Book nem kereskedett szénértékével (szemléltető szám, a 2023-as nem kereskedett központi érték ≈ 269 £/tonna CO2e — a Green Book évente frissíti a szénértékeket, élő elemzésben való idézés előtt ellenőrizd újra):

```
Monetized carbon impact = −40.0 × £269 = −£10,760
```

A −10 760 £ „költség" 10 760 £ haszon. Ha a beavatkozás önálló nettó pénzbeli haszna 500 000 £:

```
Carbon-adjusted NMB = £500,000 − (−£10,760) = £510,760
```

A szénmegtakarítás hozzáad az esethez, nem von le belőle — az a kettős nyereség, amelyet a negatív kibocsátás keretezés felszínre hozni hivatott.

## Kapcsolat a szoftverfejlesztéssel

Ez az MI/felhőgazdaságtannal való élő, aktuális metszéspont: egy MI-modell tanításának és futtatásának számítási szénlábnyoma ma már valódi tétel az NHS-beszerzésben, mivel bizonyos küszöböket meghaladó NHS-szállítói szerződések Szénkibocsátás-csökkentési Tervet (Carbon Reduction Plan) igényelnek. A [felhő-egységgazdaságtan](../felhő-egységgazdaságtan/) már követi a költséget a számítási kimenet egységére; a szén-dioxid QALY-nként a természetes sablon egy jövőbeli „szénköltség következtetésenként" mutatóhoz, amely ezt a modult és az inferencia-egységgazdaságtant a környezeti dimenzióba terjeszti ki, bár ez a mutató még nem létezik.

## Buktatók

- **Hatókörhatár-játék**: csak a közvetlen (Scope 1) kibocsátások számlálása és az ellátási lánc (Scope 3) kibocsátásainak kizárása, amelyek általában a többséget teszik ki egy digitális egészségügyi termék tényleges lábnyomából.
- **Elavult szénérték használata**: a Green Book évente frissíti a nem kereskedett szénértékeit, így bármely idézett £/tonna számot keltezni kell, nem rögzített állandóként idézni.
- **A „szénhatékony" kezelése a „költséghatékony" helyettesítőjeként**: egy alacsony szén-dioxid-kibocsátású, alacsony értékű beavatkozás továbbra is rossz felhasználása az NHS erőforrásainak. A szén-dioxid negyedik pillér a költség és a QALY-k mellett, nem helyettesíti egyiket sem.

## Források

- NHS England, "Delivering a Net Zero National Health Service" (2020, updated 2022). <https://www.england.nhs.uk/greenernhs/publication/delivering-a-net-zero-national-health-service/>
- HM Treasury, The Green Book: Carbon Values supplementary guidance (updated annually; non-traded central value ≈ £269/tCO2e, 2023 — date any citation). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
