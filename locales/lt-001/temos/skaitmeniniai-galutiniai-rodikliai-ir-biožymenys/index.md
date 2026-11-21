# Skaitmeniniai galutiniai rodikliai ir biožymenys

Skaitmeninis biožymuo – tai objektyvus fiziologinis ar elgesio matas, surenkamas jutikliais (ėjimo greitis iš telefono, miegas iš nešiojamo prietaiso, tremoras iš akselerometrijos). Skaitmeninis galutinis rodiklis yra toks matas, pakeltas į **tyrimo rezultatą** – naudojamas gydymo poveikiui įrodyti. Pakilimas nuo „duomenų, kuriuos skleidžia prietaisas“ iki „įrodymų, kuriuos priima reguliatorius“ eina per apibrėžtą validavimo kopėčias.

## Kodėl tai svarbu

Tradiciniai tyrimų galutiniai rodikliai yra epizodiniai (klinikos vizitai kas 3 mėnesius) ir brangūs; skaitmeniniai yra nuolatiniai, ekologiški (realus gyvenimas, o ne veikimas klinikoje) ir pigūs vienam stebėjimui – jie gali sutrumpinti tyrimus, anksčiau aptikti poveikį ir įgalinti decentralizuotus tyrimus. Gaudyklė – validavimas: priimta sistema (suderinta su FDA, trys ramsčiai) reikalauja **verifikavimo / analitinio validavimo** (jutiklis tiksliai matuoja fizinį dydį), **klinikinio validavimo** (matas atspindi deklaruojamą klinikinę būklę) ir parodyto **prasmingo sveikatos aspekto** (pacientams rūpi tai, ką jis fiksuoja). Galutinis rodiklis be visų trijų yra telemetrija, o ne įrodymas.

## Matematika

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

## Išspręstas pavyzdys

Parkinsono ligos tyrimas svarsto ėjimo greitį iš riešo jutiklio vietoje kas ketvirtį klinikoje vertinamų balų:

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

## Ryšys su programinės įrangos inžinerija

Skaitmeniniai galutiniai rodikliai yra duomenų inžinerijos disciplina, apsivilkusi klinikiniais drabužiais: **kilmė ir versijavimas** (algoritmo atnaujinimai tyrimo viduryje kelia grėsmę palyginamumui – tai [PCCP](../di-reguliavimo-vertinimas/) problema tyrimo forma; užrakinkite versiją ir tiltu validuokite); **trūkstamų duomenų projektavimas** (dėvėjimo laiko spragos yra informatyvios, o ne atsitiktinės – žr. [nešiojamų prietaisų validavimas](../nešiojamųjų-prietaisų-validacija/); imputavimo pasirinkimai yra moksliniai teiginiai); ir **krašto / debesijos padalijimo sprendimai**, kurie keičia, koks neapdorotas signalas apskritai vėliau atkuriamas. Komandos, kurios matavimo vamzdyną nuo pirmos dienos traktuoja kaip reguliuojamą programinę įrangą – testuojamą, versijuotą, dokumentuotą – pigiai nusiperka savo galutinių rodiklių patikimumą; validavimo pritaikymas greitai judėjusiam vamzdynui yra vieta, kur skaitmeninių galutinių rodiklių programos žūsta.

## Spąstai

- **Koreliacija su klinika kaip pilnas validavimas**: atitikimas netobulam klinikos matui įrodo paveldėjimą, o ne tiesą; validuokite pagal prasmingą sveikatos aspektą.
- **Naujo galutinio rodiklio reguliavimo rizika**: precedento neturintis galutinis rodiklis gali būti moksliškai pranašesnis ir vis tiek nuskandinti paraišką – anksti įtraukite reguliatorius (egzistuoja kvalifikavimo programos).
- **Jutiklio ir populiacijos neatitikimas**: validavimas jaunuose sveikuose riešuose, diegimas pagyvenusiems pacientams su tremoru ir pigmentacijos skirtumais, kurių PPG niekada nematė.
- **Požymių dreifas**: ėjimo algoritmo perkvalifikavimas naujais duomenimis tyliai iš naujo apibrėžia galutinį rodiklį tyrimo viduryje.

## Šaltiniai

- Coravos A, Khozin S, Mandl KD. "Developing and adopting safe and effective digital biomarkers to improve patient outcomes." npj Digital Medicine 2019. <https://www.nature.com/articles/s41746-019-0090-4>
- Digital Medicine Society (DiMe), digital endpoints resources. <https://dimesociety.org/>
