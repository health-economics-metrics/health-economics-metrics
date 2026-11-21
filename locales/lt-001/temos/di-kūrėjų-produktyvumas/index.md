# DI kūrėjų produktyvumas

Rodikliai, rodantys, ką DI programavimo pagalba iš tikrųjų daro inžinerijos rezultatams: pasiūlymų priėmimo dažnis, kontroliuojamų tyrimų pagreitis, PR pralaidumas ir kodo išlikimas. Įrodymų bazė tikrai prieštaringa – todėl tai tobulas pavyzdys skirtumui tarp veiksmingumo (efficacy) ir efektyvumo (effectiveness), kurį sveikatos ekonomika ir sukurta spręsti.

## Kodėl tai svarbu

Du dažniausiai cituojami kontroliuojami tyrimai rodo priešingas kryptis:

- **Peng ir kt. 2023 (GitHub Copilot RCT)**: kūrėjai nauja (greenfield) HTTP serverio užduotį su Copilot įvykdė **55,8 % greičiau** (1 val. 11 min. prieš 2 val. 41 min., n=95).
- **METR 2025 RCT**: patyrę atvirojo kodo kūrėjai, dirbę *su savo brandžiais saugyklų kodais*, su ankstyvųjų 2025 m. DI įrankiais buvo **19 % lėtesni** (16 kūrėjų, 246 užduotys) – nors *tikėjo*, kad yra 20 % greitesni.

Abu tyrimai geri. Prieštaravimas ir yra išvada: nauju kodu pagrįstų užduočių veiksmingumas neperduodamas brandžios kodų bazės efektyvumui, o *suvokta* nauda negali pakeisti išmatuotos naudos. Medicina turi pavadinimus abiem reiškiniams (aiškinamieji ir pragmatiniai tyrimai; placebo problema) ir mechanizmus jiems spręsti.

## Matematika

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

## Išspręstas pavyzdys

500 kūrėjų organizacija išbando asistentą su tinkama kontrole (suderintos komandos, 3 mėnesiai, iš anksto užregistruoti rodikliai):

```
Pilot result: PR cycle time −18%; merged PRs +6%; CFR unchanged;
              self-reported time saved 45 min/day; measured task-level ≈ 15 min/day

Value the MEASURED number: 500 × 0.25h × 220d × £60 × 0.6 utilization
                          ≈ £990,000/year capacity (non-cash-releasing)
Cost: 500 × £39/mo × 12 ≈ £234,000/year
Net capacity ratio ≈ 4:1 — fundable, at one-third the self-reported claim.
```

Triskart didesnis skirtumas tarp suvokto ir išmatuoto yra METR išvada, veikianti realiame gyvenime; biudžeto sudarymas pagal savęs vertinimą būtų patrigubinęs naudos eilutę.

## Ryšys su programinės įrangos inžinerija

Sveikatos ekonomikos pamokos kiekvienam, vertinančiam DI įrankius: atlikite **pragmatinius tyrimus** (jūsų kodų bazė, jūsų inžinieriai, tikros užduotys – ne tiekėjo demonstracinės); **priėmimo dažnį laikykite pakaitiniu rodikliu, o ne rezultatu** (tai pasiūlymų [PPV](../klinikinio-di-vertinimas/) kūrėjo požiūriu – didelis priėmimas su mažu išlikimu yra perdiagnozavimas); kiekvieną pralaidumo prieaugį siekite su **stabilumo patikra** (DORA 2025: DI didina pralaidumą, bet kenkia stabilumui – intervencijai su šalutiniais poveikiais reikia grynosios naudos analizės pagal [DORA rodiklius](../dora-rodikliai/)); ir sąžiningai klasifikuokite naudą kaip pajėgumus ([pinigus atlaisvinančios ir neatlaisvinančios santaupos](../pinigus-atlaisvinančios-ir-neatlaisvinančios-santaupos/)).

## Spąstai

- **Tiekėjo tyrimų perkėlimas**: naujų užduočių RCT skaičiai taikomi senos kodų bazės darbui – būtent klaida, kurią atskleidė METR tyrimas.
- **Savęs vertinimas kaip matavimas**: 20 procentinių punktų suvokimo skirtumas yra didžiausias žinomas šališkumas šioje literatūroje.
- **Veiklos išpūtimas**: daugiau PR ir daugiau kodo yra veikla, o ne rezultatai ([SPACE](../space-ir-devex/)); poruokite su pakartotiniu darbu ir CFR.
- **Mokymosi kreivės ignoravimas**: antros savaitės matavimai fiksuoja naujumo efektus abiem kryptimis; matuokite nusistovėjusioje būsenoje ([laiko horizontas](../laiko-horizontas/)).

## Šaltiniai

- Peng S, et al. "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot." 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity." 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA 2025 report. <https://dora.dev/dora-report-2025/>
