# Egészségügyi technológiaértékelés (HTA)

A HTA az a formális, intézményesített folyamat, amellyel az egészségügyi rendszerek eldöntik, hogy egy technológia — gyógyszer, eszköz vagy szoftver — megéri-e az árát. A klinikai hatásossági bizonyítékot gazdasági értékeléssel egyesíti egy közzétett, kötelező módszertan alatt.

## Miért fontos

Ha egy nemzeti egészségügyi szolgálatnak értékesítesz, egy HTA-testület szó szerint eldöntheti a piacra jutásodat. A helyi folyamat ismerete az igazi értékszabályozód ismerete:

- **NICE (Anglia)**: törvényes értékelések meghatározott *referenciaeset* alatt — QALY-k az [EQ-5D](../eq-5d/)-ből, NHS+PSS [nézőpont](../elemzési-nézőpont/), 3,5%-os [diszkontálás](../diszkontálás-és-időpreferencia/), kötelező [PSA](../valószínűségi-érzékenységvizsgálat/) — 20–30 ezer £/QALY-hez mérve a [súlyossági módosítókkal](../qaly-hiány-és-súlyossági-módosítók/); a nagyon speciális technológiák súlyozással 100 ezer £+-ig.
- **ICER (USA, nem kormányzati)**: bizonyítékjelentések *egészségi haszon ár-viszonyítási értékkel* — az az ár, amelynél egy termék költséghatékony lenne 100–150 ezer $ per QALY/evLYG mellett — tárgyalási eszközként használva; plusz költségvetési hatás „megfizethetőségi riasztások".
- **Kanada (CADTH → CDA-AMC)**: térítési felülvizsgálatok ≈50 ezer CAD$/QALY-nél; történelmileg a benyújtások ~95%-ában árcsökkentést kért.

## A matematika

A HTA ereje nem képlet, hanem **kötelezően előírt módszer**: minden benyújtás ugyanazt az [ICER](../inkrementális-költséghatékonysági-mutató/)-t számítja ki ugyanazon referenciaeset-szabályok alatt, így az eredmények összehasonlíthatók termékek és évek között. A referenciaeset meghatározza a kimeneti mérőszámot, a hasznossági mérőeszközt, a nézőpontot, az összehasonlító kiválasztását, a diszkontrátát, az időhorizontot és a bizonytalansági elemzést — eltávolítva minden szabadsági fokot, amellyel egy szponzor játszhatna.

## Kidolgozott példa

Egy digitális terápia NICE-stílusú értékelésre jelentkezik:

```
Model: ΔC = +£450/patient, ΔE = +0.03 QALYs → ICER = £15,000/QALY ✓ under £20k
Reference-case checks:
  utilities from EQ-5D-5L with UK value set              ✓
  comparator = current care pathway (not "no treatment") ✓
  PSA: 71% probability cost-effective at £20k            ✓ (reported)
  severity modifier: shortfall below ×1.2 bounds         — none claimed
Recommendation: routine commissioning, with real-world data collection.
```

A szponzor saját preferált elemzése 9000 £/QALY-t mutatott; a referenciaeset 15 000 £-ra tolta az őszinte összehasonlító kikényszerítésével. Ez a rés az, *amiért* a referenciaesetek léteznek.

## Kapcsolat a szoftverfejlesztéssel

Az átvihető műtermék a **belső referenciaeset**: egy kötelező módszer minden eszköz-/platform-üzleti esethez — deklarált összehasonlító, szabványos egységköltségek (a mintához lásd [országos tarifa és egységköltségek](../országos-tarifa-és-egységköltségek/)), rögzített diszkontráta, kötelező érzékenységvizsgálat, szabványos sablon. Egy platformtanácsnak benyújtott „AMCP-dosszié eszközökhöz" összehasonlíthatóvá teszi a javaslatokat és láthatóvá a játszadozást, pontosan úgy, ahogy a HTA a gyógyszerekkel. Kezdd kisebben, mint a NICE: egy kétoldalas sablon plusz egy közzétett árjegyzék jobb, mint semmilyen szabvány.

Arról, hogyan szimulálnak valójában egy többciklusú HTA-modellt kohorszonként és ciklusonként, lásd [Markov-kohorszszimuláció](../markov-kohorszszimuláció/).

## Buktatók

- **A HTA formalitásként kezelése a szabályozói engedély után** — a CE/UKCA/FDA-engedély azt mondja, hogy a termék biztonságos; a HTA azt dönti el, hogy *megéri-e megvenni*. Más akadály, más bizonyíték.
- **A gazdasági modell építése a vizsgálat után** — a bizonyítékgenerálást a referenciaeset követelményeiből visszafelé kell megtervezni.
- **A joghatósági különbségek figyelmen kívül hagyása**: egy ICER, amely az USA-ban 120 ezer $/QALY-nél finanszírozható, a NICE-nál 30 ezer £-nál megbukik; tervezd a bizonyítékot és az árazást piaconként.

## Források

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER 2023 Value Assessment Framework. <https://icer.org/our-approach/methods-process/value-assessment-framework/>
- Canada's Drug Agency (CDA-AMC). <https://www.cda-amc.ca/>
