# SPACE a DevEx

SPACE (Satisfaction & well-being, Performance, Activity, Communication & collaboration, Efficiency & flow) a DevEx (zpětnovazební smyčky, kognitivní zátěž, stav flow) jsou rámce pro měření produktivity vývojářů **vícerozměrně** – odpověď oboru na zjištění, že žádná jednotlivá metrika nepřežije setkání s realitou.

## Proč na tom záleží

Oba rámce kódují stejné draze vydobyté poučení, které se výzkum zdravotních výsledků naučil o desetiletí dříve: jediné číslo (řádky kódu; krevní tlak) zkresluje vícerozměrnou realitu a jeho optimalizace vede k hrátkám, nikoli ke zlepšení. SPACE předepisuje kombinovat metriky z aspoň tří dimenzí, míchat telemetrii se sebehodnocením – strukturálně totožné s tím, jak [EQ-5D](../eq-5d/) profiluje pět dimenzí dříve, než se spočítá jakýkoli index, a s tím, proč vedle klinických měr existují [PROM](../výsledky-hlášené-pacienty/). Spokojenost/wellbeing také není měkká ozdoba: vstupuje do ekonomiky [udržení pracovní síly](../udržení-pracovní-síly/), kde se fluktuace oceňuje v měsících plného platu.

## Matematika

Ani jeden rámec není vzorec; oba jsou návrhy měření:

```
SPACE rule: ≥ 3 dimensions, ≥ 1 perceptual (survey) + ≥ 1 system (telemetry) metric
DevEx dimensions and example pairings:
  feedback loops  → CI duration (telemetry) + "waiting feels slow" (survey)
  cognitive load  → docs findability, onboarding time + perceived effort
  flow state      → meeting/interrupt density + self-reported focus
Derived indices (e.g., DX's DXI) map survey composites to time:
vendor claim ≈ 13 min/dev/week per index point — treat as a vendor
benchmark to validate locally, not a constant of nature.
```

## Řešený příklad

Platformní tým zdůvodňuje investici do DevEx (zrychlení CI + přepracování dokumentace) pro 300 vývojářů:

```
Baseline: CI p75 = 28 min; survey "I lose focus waiting for builds": 62% agree
After:    CI p75 = 9 min;  agreement 24%
Time reclaimed (telemetry): 6 builds/day × 19 min × 0.4 usable = ~45 min/day/dev
Capacity value: 300 × 0.75h × 220d × £60/h ≈ £2.97M/year (non-cash-releasing —
see cash-releasing-vs-non-cash-releasing.md; the 0.4 usability factor is the
fragmentation discount from practitioner-time.md)
Perceptual corroboration is what makes the telemetry claim credible — either
alone is gameable; together they triangulate.
```

## Souvislost se softwarovým inženýrstvím

Tento dokument *je* softwarová strana; přenos směřuje do health economics. „Inženýrský rok upravený o kvalitu“ – čas vážený standardizovaným indexem zkušenosti – je konstrukce [QALY](../rok-života-upravený-o-kvalitu/) aplikovaná na inženýrskou kapacitu a dědí pravidla QALY: váhy z validovaného nástroje (konzistentní průzkum, zveřejněné skórování), zjištěné *před* srovnáním, nikdy ladění tak, aby lichotilo oblíbenému nástroji. Platí i poučení [SF-6D vs EQ-5D](../eq-5d/): různé nástroje dávají systematicky různá čísla, takže nikdy nesrovnávejte indexy DevEx napříč nástroji různých dodavatelů.

## Úskalí

- **Kolaps do jedné metriky**: dashboardy, které redukují SPACE na jedno skóre, znovu vytvářejí problém, jemuž má rámec zabránit.
- **Metriky aktivity jako výsledky**: commity, PR a story pointy jsou Aktivita – dimenze, o které SPACE výslovně varuje, že je nejsnáze zmanipulovatelná (zdravotnická analogie: počítání výkonů, nikoli uzdravení).
- **Únava z průzkumů a Hawthorneovy efekty**: čtvrtletní nenáročné nástroje poráží týdenní výslech.
- **Srovnávání týmů**: jako nemocniční žebříčky bez úpravy na případový mix – rozdíly kontextu (doména, zátěž starým kódem, pohotovost) dominují.

## Zdroje

- Forsgren N, et al. "The SPACE of Developer Productivity." ACM Queue 2021. <https://queue.acm.org/detail.cfm?id=3454124>
- Noda A, Forsgren N, Storey MA, Greiler M. "DevEx: What Actually Drives Productivity." ACM Queue 2023. <https://queue.acm.org/detail.cfm?id=3595878>
