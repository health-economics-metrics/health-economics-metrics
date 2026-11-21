# DORA-mutatók

A DORA (DevOps Research and Assessment) mutatók a szoftverszállítási teljesítmény négy mérőszáma — telepítési gyakoriság, a változtatások átfutási ideje, változási hibaarány és a sikertelen telepítés helyreállítási ideje —, plusz az ötödikként a megbízhatóság. Ezek az ágazat leginkább validált szállítási viszonyítási értékei, és mindegyiknek közvetlen egészséggazdasági olvasata van.

## Miért fontos

A DORA tízéves kutatása ezeket a mutatókat a szervezeti teljesítményhez kapcsolja. A 2024-es jelentés klaszterei: az **elit** csapatok igény szerint telepítenek (naponta többször), a commit-tól az élesig egy napnál kevesebbet vesznek igénybe, a változtatások ~5%-a hibázik, és egy óránál rövidebb idő alatt helyreállnak; az **alacsony** teljesítményűek havonta vagy ritkábban telepítenek, hónapokat vesznek igénybe, a változtatások ~40%-a hibázik, és hetek alatt állnak helyre. Egy egészségügyi rendszer számára ezek nem IT-hiúsági számok: meghatározzák, milyen gyorsan ér el a klinikai érték a betegekhez, és mekkora kockázatot hordoz minden változtatás.

## A matematika

```
Deployment frequency    = production deployments / time
Lead time for changes   = t(deploy) − t(commit), median
Change failure rate     = failed changes / total changes × 100
Recovery time (MTTR)    = t(restored) − t(failure), median
Reliability             = SLO attainment (availability, latency, correctness)
```

Egészséggazdasági fordítások:

```
Lead time     → cost-of-delay.md: weeks in the pipeline × CoD (£ or QALYs/week)
Failure rate  → adverse-event rate of software change: CFR × cost per incident
Recovery time → downtime harm: MTTR × (lost clinical activity + safety exposure)/hr
Reliability   → benefit discount: a service at 99% availability delivers ≈ 0.99
                of its modelled benefit — the software analogue of adherence
```

## Kidolgozott példa

Egy tröszt betegáramlás-szoftvercsapata egy szállítási mérnöki befektetés előtt/után:

```
                    Before      After
Deploys             monthly     weekly
Lead time           6 weeks     4 days
CFR                 25%         8%
MTTR                2 days      2 hours
```

A csapat évente ~30 fejlesztést szállít, fejlesztésenként átlagosan 4000 £/hét értékkel ([CoD](../a-késedelem-költsége/)). Az átfutási idő ~5,4 hetes csökkentése előrehozza minden fejlesztés előnyáramát: 30 × 5,4 × 4000 ≈ **648 000 £/év** hamarabb szállított érték. CFR-javulás: 30 × (0,25 − 0,08) = ~5-tel kevesebb sikertelen változtatás évente × 15 000 £ átlagos incidensköltség (klinikai rendszerek kiesése, helyreállítás) = **76 500 £/év**. A szállítási befektetés ugyanabban a valutában értékelődik, mint bármely klinikai beavatkozás.

## Kapcsolat a szoftverfejlesztéssel

Ez *maga* a szoftveres oldal — az érdemes kapcsolat a fordított leképezés: a DORA-mutatók a kórház működési mutatói, más ruhában. Átfutási idő ↔ [beutalástól a kezelésig](../beutalástól-a-kezelésig/); változási hibaarány ↔ [újrafelvételi arány](../újrafelvételi-arány/) (munka, amely visszapattant); MTTR ↔ sürgősségi reagálás; telepítési gyakoriság ↔ rendelői áteresztőképesség. A javítási módszerek mindkét irányban átvihetők, mert mindkettő biztonsági korlátok alatti sorbanállási rendszer. Jegyezd meg a DORA 2025 MI-megállapítását is: az MI-bevezetés ma magasabb áteresztőképességgel, de *rosszabb* stabilitással korrelál — hatásosság és mellékhatások egy beavatkozásban, pontosan azt a nettó haszon elemzést követelve, amelyet ez a repó tanít (lásd [MI-fejlesztői termelékenység](../mi-fejlesztői-termelékenység/)).

## Buktatók

- **Mutatójáték**: a telepítésszámokat felfújják üres kiadásokkal; a CFR-t csökkentik azzal, hogy a hotfixeket nem számolják hibának. Határozd meg pontosan az eseményeket, ahogy a HTA a végpontokat.
- **Csapatok közötti ranglisták**: a DORA-klaszterek gyakorlatokat hasonlítanak össze, nem eltérő kockázati profilú csapatokat; egy „magas" szintű klinikai rendszercsapat optimális lehet ott, ahol az „elit" vakmerő volna.
- **Egy mutató optimalizálása**: a sebesség CFR/megbízhatóság nélkül az áteresztőképesség–instabilitás kompromisszum — mindig a négyet együtt közöld (ez [költség-következmény táblázat](../költség-következmény-elemzés/), nem pontszám).

## Források

- DORA research and reports. <https://dora.dev/>
- 2024 DORA benchmarks summary. <https://octopus.com/devops/metrics/dora-metrics/>
- DORA 2025 State of AI-assisted Software Development. <https://dora.dev/dora-report-2025/>
