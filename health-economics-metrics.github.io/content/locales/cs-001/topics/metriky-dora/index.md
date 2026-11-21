# Metriky DORA

Metriky DORA (DevOps Research and Assessment) jsou čtyři míry výkonu dodávky softwaru – frekvence nasazení, doba realizace změn, míra selhání změn a doba obnovy po selhání nasazení – plus spolehlivost jako pátá. Jsou to nejvalidovanější benchmarky dodávky v oboru a každá má přímé čtení v health economics.

## Proč na tom záleží

Desetiletí výzkumu DORA spojuje tyto metriky s výkonností organizací. Shluky zprávy z roku 2024: **elitní** týmy nasazují na požádání (vícekrát denně), od commitu do produkce potřebují méně než den, selže jim ~5 % změn a obnoví se za méně než hodinu; **slabé** týmy nasazují měsíčně nebo méně často, trvá jim to měsíce, selže jim ~40 % změn a obnovují se týdny. Pro zdravotní systém to nejsou IT ješitná čísla: určují, jak rychle klinická hodnota dorazí k pacientům a jaké riziko nese každá změna.

## Matematika

```
Deployment frequency    = production deployments / time
Lead time for changes   = t(deploy) − t(commit), median
Change failure rate     = failed changes / total changes × 100
Recovery time (MTTR)    = t(restored) − t(failure), median
Reliability             = SLO attainment (availability, latency, correctness)
```

Překlady do health economics:

```
Lead time     → cost-of-delay.md: weeks in the pipeline × CoD (£ or QALYs/week)
Failure rate  → adverse-event rate of software change: CFR × cost per incident
Recovery time → downtime harm: MTTR × (lost clinical activity + safety exposure)/hr
Reliability   → benefit discount: a service at 99% availability delivers ≈ 0.99
                of its modelled benefit — the software analogue of adherence
```

## Řešený příklad

Tým softwaru pro tok pacientů v trustu, před/po investici do dodávacího inženýrství:

```
                    Before      After
Deploys             monthly     weekly
Lead time           6 weeks     4 days
CFR                 25%         8%
MTTR                2 days      2 hours
```

Tým dodá ~30 zlepšení ročně s průměrnou hodnotou zlepšení 4 000 £/týden ([CoD](../náklady-zpoždění/)). Zkrácení doby realizace o ~5,4 týdne posune tok přínosů každého zlepšení dopředu: 30 × 5,4 × 4 000 ≈ **648 000 £/rok** dříve dodané hodnoty. Zlepšení CFR: 30 × (0,25 − 0,08) = ~5 méně neúspěšných změn ročně × 15 000 £ průměrných nákladů incidentu (výpadek klinického systému, náprava) = **76 500 £/rok**. Investice do dodávky se oceňuje ve stejné měně jako jakákoli klinická intervence.

## Souvislost se softwarovým inženýrstvím

Toto *je* softwarová strana – spojení, které stojí za vyslovení, je zpětné mapování: metriky DORA jsou provozní metriky nemocnice v jiném převleku. Doba realizace ↔ [odeslání k léčbě](../odeslání-k-léčbě/); míra selhání změn ↔ [míra rehospitalizace](../míra-rehospitalizace/) (práce, která se vrátila); MTTR ↔ pohotovostní reakce; frekvence nasazení ↔ propustnost kliniky. Metody zlepšování se přenášejí oběma směry, protože obojí jsou systémy front pod bezpečnostními omezeními. Všimněte si také nálezu DORA 2025 o AI: adopce AI nyní koreluje s vyšší propustností, ale *horší* stabilitou – intervence s účinností i nežádoucími účinky, vyžadující přesně tu analýzu čistého přínosu, kterou tento repozitář učí (viz [produktivita vývojářů s AI](../produktivita-vývojářů-s-ai/)).

## Úskalí

- **Hrátky s metrikami**: počty nasazení nafouknuté prázdnými vydáními; CFR snížená nepočítáním hotfixů jako selhání. Definujte události přesně, jako HTA definuje cílové ukazatele.
- **Žebříčky mezi týmy**: shluky DORA srovnávají postupy, nikoli týmy s odlišnými rizikovými profily; tým klinických systémů na „vysoké“ úrovni může být optimální tam, kde by „elitní“ bylo lehkovážné.
- **Optimalizace jedné metriky**: rychlost bez CFR/spolehlivosti je kompromis propustnost–nestabilita – vždy vykazujte čtyři společně (jsou to [tabulka nákladů a důsledků](../analýza-nákladů-a-důsledků/), nikoli skóre).

## Zdroje

- DORA research and reports. <https://dora.dev/>
- 2024 DORA benchmarks summary. <https://octopus.com/devops/metrics/dora-metrics/>
- DORA 2025 State of AI-assisted Software Development. <https://dora.dev/dora-report-2025/>
