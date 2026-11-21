# Įsitraukimo rodikliai

Įsitraukimo rodikliai matuoja, kiek vartotojai iš tikrųjų naudoja sveikatos programėlę: DAU/MAU lipnumas, sesijų dažnis ir trukmė, funkcijų naudojimas. Skaitmeninėje sveikatoje įsitraukimas nėra tuščiagarbis – jis yra **dozė**: poveikis, per kurį turi tekėti bet koks klinikinis efektas.

## Kodėl tai svarbu

Vaistas, likęs buteliuke, niekam negydo; programėlė, likusi neįdiegta ar neatidaryta, yra tas pats gedimo režimas. Kiekvienas sveikatos ekonomikos teiginys apie vartotojų sveikatos produktą dauginamas per įsitraukimą – tyrimuose parodytas veiksmingumas buvo išmatuotas tam tikru naudojimo lygiu, o realioji vertė kinta pagal tai, kiek diegimo naudojimas priartėja prie to lygio. Standartiniai produktų etalonai: DAU/MAU apie **20 % laikoma sveika** mobiliesiems apkritai, >25 % išskirtinė; sveikatos programėlės dažnai žemesnės.

## Matematika

```
Stickiness (DAU/MAU) = daily active users / monthly active users × 100
Session metrics      = sessions/user/period; avg duration = total time / sessions
Feature engagement   = users performing key action / active users

Dose-response framing (the health-economics upgrade):
  realized effect ≈ trial effect × f(actual usage / trial usage)
  where f comes from dose-response analysis — see the "effective
  engagement" concept in adherence-and-persistence.md: enough usage
  to achieve the intended outcome, which may be modest and finite
```

## Išspręstas pavyzdys

Kraujospūdžio programėlės pagrindinis tyrimas parodė 6 mmHg sistolinio sumažėjimą tarp vartotojų, registravusių ≥ 4 matavimus per savaitę. Diegimas 50 000 registruotų vartotojų:

```
MAU 20,000 (40%); of those, logging ≥4×/week: 7,000
Effective-dose users = 7,000 / 50,000 = 14% of the registered base

Population-level effect ≈ trial effect delivered to 14%, not 100%:
any economic model quoting "50,000 users × 6 mmHg" overstates ~7×.
Honest model: 7,000 × full effect + partial credit (from dose-response
data, if any) for the 13,000 sub-threshold users.
```

Šis dauginimas – per įsitraukimo piltuvą iki veiksmingos dozės – yra pati dažniausia vieta, kur skaitmeninės sveikatos ekonomika išpučiama.

## Ryšys su programinės įrangos inžinerija

Inžinieriai valdo įsitraukimo piltuvą, todėl valdo *klinikinį* kintamąjį: adaptacijos trintis, pranešimų strategija, įkėlimo laikas ir veikimas neprisijungus keičia pristatomą dozę. Dvi dizaino pasekmės: instrumentuokite **klinikai reikšmingą veiksmą** (užregistruoti matavimai, užbaigtos pamokos), o ne atidarymus – DAU, sukurtas iš pranešimų sukeltų sesijų, yra dozės sukčiavimas; ir įsitraukimo tikslus traktuokite kaip *pakankamumo*, o ne maksimizavimo tikslus – programėlė, pasiekianti savo rezultatą per 5 min. per savaitę ir pasitraukianti iš kelio, yra klinikiškai idealus ir rodikliais „prasta“ (žr. veiksmingą įsitraukimą [laikymasis ir tęstinumas](../laikymasis-ir-tęstinumas/)). Patį įsitraukimo darbą įvertinkite pagal aukščiau pateiktą populiacijos poveikio modelį: 2 punktų veiksmingos dozės dalies laimėjimas yra kiekybiškai išreiškiama QALY eilutė.

## Spąstai

- **Įsitraukimas kaip rezultatas**: naudojimas yra priemonė; rezultatas yra [PROM](../paciento-pranešami-rezultatai/) ar klinikinis galutinis rodiklis.
- **Vidurkiai dvimodiam naudojimui**: sveikatos programėlių populiacijos skyla į atsidavusius vartotojus ir vaiduoklius; vidurkiai neapibūdina nieko – skirstykite į kohortas.
- **Tamsiųjų šablonų dozės išpūtimas**: serijos (streaks) ir kaltės pranešimai kelia rodiklius ir gali pakenkti nerimaujančioms populiacijoms, kurias aptarnauja sveikatos programėlės; klinikiniai produktai turi klinikinę etiką.
- **Tiekėjų etalonų kilmė**: dauguma paskelbtų įsitraukimo etalonų ateina iš analitikos tiekėjų, o ne recenzuojamų darbų; kalibruokite pagal savo tyrimus.

## Šaltiniai

- App engagement benchmarks. <https://getstream.io/blog/app-retention-guide/>
- Health app KPI guides. <https://www.darly.solutions/blog/key-metrics-for-health-apps-success-a-guide-to-kpis-and-outcomes>
- Yardley L, et al. on effective engagement. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
