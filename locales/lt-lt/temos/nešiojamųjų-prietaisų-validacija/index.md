# Nešiojamųjų prietaisų validacija

Validacijos rodikliai kiekybiškai įvertina, kaip gerai nešiojamo prietaiso matavimai sutampa su klinikiniu aukso standartu (EKG – širdies ritmui, polisomnografija – miegui): **MAPE**, sutapimo koreliacija, Blando–Altmano sutapimas – taip pat veiklos rodikliai, ribojantys realaus pasaulio duomenų kokybę: **dėvėjimo laiko laikymasis** ir **duomenų išsamumas**.

## Kodėl tai svarbu

Validacija yra visko tolesnio išankstinė sąlyga: prietaisas, negalintis įrodyti sutapimo su etaloniniu matavimu, negali būti [skaitmeninių galutinių rodiklių](../skaitmeniniai-galutiniai-rodikliai-ir-biožymenys/) inkaru, pagrįsti [RPM atsiskaitymo](../nuotolinės-pacientų-stebėsenos-ekonomika/) ar nešti klinikinių teiginių. Šioje srityje priimtini širdies ritmo slenksčiai: **MAPE ≤5 %** (griežtas) arba **≤10 %** (švelnus) lyginant su EKG. Atskaitos taškai iš literatūros: Oura Gen 3 ramybės ŠSD MAPE 1,67 % (CCC 0,97); Fitbit Charge 6 MAPE ~5,5 % – vartotojiški prietaisai dabar apima klinikinio lygio ribą, todėl būtent matavimas svarbus kiekvienam prietaisui ir būklei atskirai.

## Matematika

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

Validacija turi būti pateikiama **pagal veiklos sąlygą** (ramybė, judėjimas, miegas) ir populiaciją – PPG optinis jutimas prastėja dėl judesio artefaktų, prasto kontakto ir tamsesnių odos atspalvių – dokumentuotas su lygybe susijęs gedimo būdas.

## Išspręstas pavyzdys

Virtualaus skyriaus programa renkasi stebėsenos nešiojamą prietaisą. Kandidatas A: ramybės MAPE 2,1 %, krūvio MAPE 11,4 %. Kandidatas B: ramybės 3,8 %, krūvio 6,9 %.

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

## Ryšys su programinės įrangos inžinerija

Inžinieriai validacijos duomenis naudoja renkantis jutiklius ir juos *kuria* kurdami matavimo funkcijas – abiem vaidmenims reikia tos pačios disciplinos: testuokite diegimo, o ne demonstracijos sąlygomis (programinės įrangos analogas – lyginamasis testavimas su jūsų gamybos apkrova, o ne tiekėjo). Dėvėjimo laikas ir išsamumas yra produkto inžinerijos rezultatai – patogumas, baterijos veikimo laikas, įkrovimo ritualo dizainas ir sinchronizavimo patikimumas lemia, ar pasiekiamas 16 dienų iš 30 RPM atsiskaitymo vartas ([nuotolinės pacientų stebėsenos ekonomika](../nuotolinės-pacientų-stebėsenos-ekonomika/)) ir ar tyrimų duomenų rinkiniai analizuotini. Praleistas reikšmes traktuokite kaip suprojektuotą signalą: schemoje nuo pirmos dienos atskirkite „nedėvėta“, „dėvėta, bet nėra signalo“ ir „sinchronizavimas nepavyko“ – sulietos į null jos užnuodija kiekvieną tolesnę analizę.

## Spąstai

- **Bendras MAPE, slepiantis sąlygai specifinį gedimą** – pavyzdžio spąstai.
- **Validacijos populiacija ≠ diegimo populiacija**: amžius, odos atspalvis, tremoras, nutukimas – visa tai keičia optinio jutiklio paklaidą; tikrinkite tyrimo demografiją.
- **Pateikiama koreliacija ten, kur reikia sutapimo**: didelė Pearsono r su sistemine paklaida vis tiek klaidingai klasifikuoja pagal absoliučius slenksčius – reikalaukite CCC/Blando–Altmano.
- **Išsamumas išpūstas imputavimu**: užpildytos spragos pateikiamos kaip stebėti duomenys.

## Šaltiniai

- Consumer wearable HR validation (Oura Gen 3/4). <https://pmc.ncbi.nlm.nih.gov/articles/PMC12367097/>
- Wearable validity thresholds (MAPE standards). <https://formative.jmir.org/2025/1/e70835>
- Multi-device validation studies. <https://pmc.ncbi.nlm.nih.gov/articles/PMC6431828/>
