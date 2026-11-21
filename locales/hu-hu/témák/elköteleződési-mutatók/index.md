# Elköteleződési mutatók

Az elköteleződési mutatók azt mérik, mennyit használnak valójában a felhasználók egy egészségügyi alkalmazást: DAU/MAU ragadósság, munkamenet-gyakoriság és -időtartam, funkcióhasználat. A digitális egészségügyben az elköteleződés nem hiúság — **dózis**: az az expozíció, amelyen át minden klinikai hatásnak át kell folynia.

## Miért fontos

Az a gyógyszer, amely az üvegben marad, senkit sem gyógyít meg; az az alkalmazás, amely telepítetlen vagy kinyitatlan marad, ugyanaz a hibamód. Egy fogyasztói egészségügyi termék minden egészséggazdasági állítása az elköteleződésen át szorzódik — a vizsgálatokban kimutatott hatásosságot valamilyen használati szinten mérték, és a valós érték azzal skálázódik, mennyire közelíti a bevezetési használat ezt a szintet. Szokásos termék-viszonyítási értékek: a DAU/MAU körülbelül **20% egészségesnek számít** a mobilalkalmazásoknál általában, a >25% kivételes; az egészségügyi alkalmazások gyakran alacsonyabbak.

## A matematika

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

## Kidolgozott példa

Egy vérnyomás-alkalmazás kulcsfontosságú vizsgálata 6 mmHg szisztolés csökkenést mutatott azoknál a felhasználóknál, akik hetente ≥4 mérést naplóztak. 50 000 regisztrált felhasználós bevezetésben:

```
MAU 20,000 (40%); of those, logging ≥4×/week: 7,000
Effective-dose users = 7,000 / 50,000 = 14% of the registered base

Population-level effect ≈ trial effect delivered to 14%, not 100%:
any economic model quoting "50,000 users × 6 mmHg" overstates ~7×.
Honest model: 7,000 × full effect + partial credit (from dose-response
data, if any) for the 13,000 sub-threshold users.
```

Ez a szorzás — az elköteleződési tölcséren át a hatásos dózisig — a leggyakoribb hely, ahol a digitális egészségügyi gazdaságtan felfúvódik.

## Kapcsolat a szoftverfejlesztéssel

A mérnökök birtokolják az elköteleződési tölcsért, ami egy *klinikai* változó tulajdonosává teszi őket: a beléptetési súrlódás, az értesítési stratégia, a betöltési idő és az offline ellenálló képesség mind a leadott dózist mozgatják. Két tervezési következmény: műszerezd a **klinikailag értelmes cselekvést** (naplózott mérések, befejezett leckék), ne a megnyitásokat — az értesítés-visszapattanó munkamenetekre épített DAU dózis-csalás; és kezeld az elköteleződési célokat *elégségességi* célként, ne maximalizálásként — egy alkalmazás, amely heti 5 perc alatt eléri a kimenetét, és félreáll az útból, klinikailag ideális és mutatók szerint „gyenge" (lásd a hatásos elköteleződést az [adherencia és perzisztencia](../adherencia-és-perzisztencia/) témában). Magát az elköteleződési munkát a fenti populációs hatásmodellel értékeld: a hatásos dózis részarányának 2 pontos növekedése számszerűsíthető QALY-sor.

## Buktatók

- **Elköteleződés mint kimenet**: a használat eszköz; a kimenet a [PROM](../betegek-által-jelentett-kimenetelek/) vagy a klinikai végpont.
- **Átlagok bimodális használaton**: az egészségügyi alkalmazások populációi elkötelezett felhasználókra és szellemekre oszlanak; az átlagok senkit sem írnak le — kohorszold.
- **Sötét minta dózisfelfújás**: a sorozatok és bűntudatot keltő értesítések növelik a mutatókat, és árthatnak azoknak a szorongó populációknak, akiket az egészségügyi alkalmazások kiszolgálnak; a klinikai termékek klinikai etikát hordoznak.
- **Szállítói viszonyítási értékek eredete**: a legtöbb közzétett elköteleződési viszonyítási érték analitikai szállítóktól származik, nem lektorált kutatásból; kalibráld a saját vizsgálataidhoz.

## Források

- App engagement benchmarks. <https://getstream.io/blog/app-retention-guide/>
- Health app KPI guides. <https://www.darly.solutions/blog/key-metrics-for-health-apps-success-a-guide-to-kpis-and-outcomes>
- Yardley L, et al. on effective engagement. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
