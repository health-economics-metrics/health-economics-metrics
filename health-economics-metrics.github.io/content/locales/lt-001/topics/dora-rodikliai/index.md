# DORA rodikliai

DORA (DevOps Research and Assessment) rodikliai – tai keturi programinės įrangos pristatymo veiksmingumo matai: diegimo dažnis, pakeitimų vykdymo trukmė, pakeitimų nesėkmių dalis ir nepavykusio diegimo atkūrimo laikas – plius patikimumas kaip penktasis. Tai labiausiai validuoti srities pristatymo etalonai, ir kiekvienas turi tiesioginį sveikatos ekonomikos aiškinimą.

## Kodėl tai svarbu

Dešimtmetį trunkantys DORA tyrimai susieja šiuos rodiklius su organizacijos veiksmingumu. 2024 m. ataskaitos klasteriai: **elitinės** komandos diegia pagal poreikį (kelis kartus per dieną), užtrunka mažiau nei dieną nuo commit iki gamybos, nesėkmingi ~5 % pakeitimų ir atsigauna per mažiau nei valandą; **žemo lygio** komandos diegia kas mėnesį ar rečiau, užtrunka mėnesius, nesėkmingi ~40 % pakeitimų ir atsigauna per savaites. Sveikatos sistemai tai nėra IT tuščiagarbiai skaičiai: jie lemia, kaip greitai klinikinė vertė pasiekia pacientus ir kokią riziką neša kiekvienas pakeitimas.

## Matematika

```
Deployment frequency    = production deployments / time
Lead time for changes   = t(deploy) − t(commit), median
Change failure rate     = failed changes / total changes × 100
Recovery time (MTTR)    = t(restored) − t(failure), median
Reliability             = SLO attainment (availability, latency, correctness)
```

Sveikatos ekonomikos vertimai:

```
Lead time     → cost-of-delay.md: weeks in the pipeline × CoD (£ or QALYs/week)
Failure rate  → adverse-event rate of software change: CFR × cost per incident
Recovery time → downtime harm: MTTR × (lost clinical activity + safety exposure)/hr
Reliability   → benefit discount: a service at 99% availability delivers ≈ 0.99
                of its modelled benefit — the software analogue of adherence
```

## Išspręstas pavyzdys

Trestos pacientų srauto programinės įrangos komanda prieš / po pristatymo inžinerijos investicijos:

```
                    Before      After
Deploys             monthly     weekly
Lead time           6 weeks     4 days
CFR                 25%         8%
MTTR                2 days      2 hours
```

Komanda per metus pristato ~30 patobulinimų, kurių vidutinė vertė vienam patobulinimui 4 000 £ per savaitę ([CoD](../vėlavimo-kaina/)). Vykdymo trukmės sumažinimas ~5,4 savaitės pastumia kiekvieno patobulinimo naudos srautą į priekį: 30 × 5,4 × 4 000 ≈ **648 000 £ per metus** anksčiau pristatytos vertės. CFR pagerėjimas: 30 × (0,25 − 0,08) = ~5 mažiau nesėkmingų pakeitimų per metus × 15 000 £ vidutinė incidento kaina (klinikinės sistemos prastova, taisymas) = **76 500 £ per metus**. Pristatymo investicija įvertinta ta pačia valiuta kaip ir bet kuri klinikinė intervencija.

## Ryšys su programinės įrangos inžinerija

Tai *yra* programinės įrangos pusė – verta pasakyti atvirkštinį atvaizdavimą: DORA rodikliai yra ligoninės veiklos rodikliai, apsivilkę kitais drabužiais. Vykdymo trukmė ↔ [siuntimas gydymui](../siuntimas-gydymui/); pakeitimų nesėkmių dalis ↔ [pakartotinių hospitalizacijų rodiklis](../pakartotinių-hospitalizacijų-rodiklis/) (darbas, kuris grįžo); MTTR ↔ skubi reakcija; diegimo dažnis ↔ klinikos pralaidumas. Tobulinimo metodai perkeliami abiem kryptimis, nes abu yra eilių sistemos su saugumo apribojimais. Taip pat atkreipkite dėmesį į DORA 2025 DI išvadą: DI diegimas dabar koreliuoja su didesniu pralaidumu, bet *blogesniu* stabilumu – intervencija su veiksmingumu ir šalutiniais poveikiais, reikalaujanti būtent tokios grynosios naudos analizės, kurios moko šis repozitorijus (žr. [DI kūrėjų produktyvumas](../di-kūrėjų-produktyvumas/)).

## Spąstai

- **Rodiklių žaidimas**: diegimų skaičius išpučiamas tuščiais leidimais; CFR sumažinamas neskaičiuojant skubių taisymų kaip nesėkmių. Apibrėžkite įvykius tiksliai, kaip SVV apibrėžia galutinius rodiklius.
- **Tarpkomandinės lyginamosios lentelės**: DORA klasteriai lygina praktikas, o ne skirtingų rizikos profilių komandas; klinikinių sistemų komanda „aukšto“ lygio gali būti optimali ten, kur „elitinis“ būtų neatsakingas.
- **Vieno rodiklio optimizavimas**: greitis be CFR / patikimumo yra pralaidumo ir nestabilumo kompromisas – visada pateikite keturis kartu (tai [sąnaudų ir pasekmių lentelė](../sąnaudų-ir-pasekmių-analizė/), o ne balas).

## Šaltiniai

- DORA research and reports. <https://dora.dev/>
- 2024 DORA benchmarks summary. <https://octopus.com/devops/metrics/dora-metrics/>
- DORA 2025 State of AI-assisted Software Development. <https://dora.dev/dora-report-2025/>
