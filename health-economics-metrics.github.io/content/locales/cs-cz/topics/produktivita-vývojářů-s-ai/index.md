# Produktivita vývojářů s AI

Metriky toho, co asistence AI při programování skutečně dělá s inženýrským výstupem: míry přijetí návrhů, zrychlení z kontrolovaných studií, propustnost PR a zachování kódu. Důkazní základna je skutečně rozporuplná – což z ní dělá dokonalou případovou studii rozdílu mezi účinností a efektivitou, který health economics vznikla zvládat.

## Proč na tom záleží

Dvě nejcitovanější kontrolované studie mířily opačnými směry:

- **Peng et al. 2023 (RCT GitHub Copilot)**: vývojáři dokončili úlohu HTTP serveru od nuly **o 55,8 % rychleji** s Copilotem (1 h 11 min vs 2 h 41 min, n = 95).
- **METR 2025 RCT**: zkušení open-source vývojáři pracující na *vlastních vyspělých repozitářích* byli s nástroji AI z počátku roku 2025 **o 19 % pomalejší** (16 vývojářů, 246 úloh) – přičemž *věřili*, že jsou o 20 % rychlejší.

Obě studie jsou dobré. Rozpor je sám nálezem: účinnost u úloh od nuly se nepřenáší na efektivitu ve vyspělé kódové základně a *vnímaný* přínos nenahradí přínos změřený. Medicína má jména pro oba jevy (explanační vs pragmatické studie; problém placeba) i aparát, jak je zvládat.

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

## Řešený příklad

Organizace s 500 vývojáři pilotuje asistenta se správnou kontrolou (spárované týmy, 3 měsíce, předem registrované metriky):

```
Pilot result: PR cycle time −18%; merged PRs +6%; CFR unchanged;
              self-reported time saved 45 min/day; measured task-level ≈ 15 min/day

Value the MEASURED number: 500 × 0.25h × 220d × £60 × 0.6 utilization
                          ≈ £990,000/year capacity (non-cash-releasing)
Cost: 500 × £39/mo × 12 ≈ £234,000/year
Net capacity ratio ≈ 4:1 — fundable, at one-third the self-reported claim.
```

Trojnásobná mezera mezi vnímaným a změřeným je nález METR v praxi; rozpočtování podle sebehodnocení by přínosovou řádku ztrojnásobilo.

## Souvislost se softwarovým inženýrstvím

Importy z health economics pro každého, kdo hodnotí nástroje AI: provádějte **pragmatické studie** (váš kód, vaši inženýři, skutečné tikety – ne demo úlohy dodavatele); **míru přijetí berte jako proxy, ne výsledek** (z pohledu vývojáře je to [PPV](../hodnocení-klinické-ai/) návrhů – vysoké přijetí s nízkým zachováním je nadměrná diagnostika); každý zisk propustnosti spárujte s **kontrolou stability** (DORA 2025: AI zvyšuje propustnost, zhoršuje stabilitu – intervence s nežádoucími účinky potřebuje analýzu čistého přínosu podle [metrik DORA](../metriky-dora/)); a přínos poctivě klasifikujte jako kapacitu ([úspory uvolňující hotovost vs neuvolňující hotovost](../úspory-uvolňující-hotovost-vs-neuvolňující-hotovost/)).

## Úskalí

- **Přenos studií dodavatelů**: čísla z RCT od nuly aplikovaná na práci ve starém kódu – přesně ta chyba, kterou odhalila studie METR.
- **Sebehodnocení jako měření**: 20procentní bod rozdílu ve vnímání je největší známé zkreslení v této literatuře.
- **Nafouknutí aktivity**: víc PR a víc kódu je Aktivita, ne výsledek ([SPACE](../space-a-devex/)); spárujte s přepracováním a CFR.
- **Ignorování křivky učení**: měření ve druhém týdnu zachytí efekty novosti v obou směrech; měřte v ustáleném stavu ([časový horizont](../časový-horizont/)).

## Zdroje

- Peng S, et al. "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot." 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity." 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA 2025 report. <https://dora.dev/dora-report-2025/>
