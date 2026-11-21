# Folyammutatók

A folyammutatók azt mérik, hogyan mozog a munka egy szállítási rendszeren át: átfutási idő (cycle time), átfutás (lead time), áteresztőképesség, folyamatban lévő munka (WIP) és folyamathatékonyság. Őket a Little-törvény szabályozza — ugyanaz a sorbanállási matematika, amely a kórházi ágyakat és várólistákat.

## Miért fontos

A szállítási idő nagy része nem munka — várakozás. A tudásmunka folyamathatékonysági vizsgálatai rutinszerűen azt találják, hogy a tételeken az eltelt idejük csupán **5–15%-ában** dolgoznak aktívan; a többi sorbanállás. Ez azt jelenti, hogy a legolcsóbb gyorsítás a sorok eltávolítása, nem a felvétel — pontosan az a belátás, amelyet a kórházi betegáramlási programok az ágyakról felfedeztek. Bármi esetén, aminek van [késedelem költsége](../a-késedelem-költsége/), a folyammutatók megmutatják, hol halmozódik a késedelmi költség.

## A matematika

```
Cycle time      = t(finished) − t(started)
Lead time       = t(delivered) − t(requested)     (includes pre-work queue)
Throughput      = items completed / period
WIP             = items started but unfinished
Flow efficiency = active time / (active + wait time) × 100

Little's Law:  average WIP = throughput × average cycle time
               (equivalently: cycle time = WIP / throughput)
```

A Little-törvény a kar: rögzített áteresztőképességnél a WIP csökkentése arányosan csökkenti az átfutási időt. Kórházakat is vezérel: `elfoglalt ágyak = felvételek/nap × ápolási idő`.

## Kidolgozott példa

Egy csapatnak 40 tétele van folyamatban, és hetente 10-et fejez be: átfutási idő = 40/10 = 4 hét. WIP-korlátokat vezetnek be, a WIP-et 15-re csökkentve: átfutási idő = 15/10 = **1,5 hét** — ugyanazok az emberek, ugyanaz az áteresztőképesség, 62%-kal gyorsabb szállítás, kizárólag a sorfegyelemből.

CoD-dal árazva: ha a tételek átlagosan 3000 £/hét késedelmi költséget jelentenek, minden tétel 2,5 héttel kevesebbet tölt sorban: 10 tétel/hét × 2,5 × 3000 = **75 000 £/hét megszüntetett késedelmi költség** — egy semmibe nem kerülő szabályváltoztatásból.

Kórházi tükörkép: 40 felvétel/nap × 6,0 napos LOS = 240 ágy; a LOS-on belüli nem klinikai várakozást 5,6 napra csökkentve 16 ágy szabadul fel ([ápolási idő](../ápolási-idő/)) — ugyanaz a törvény, ugyanaz a kar.

## Kapcsolat a szoftverfejlesztéssel

A folyammutatók a szállítási mérnöki munka és az egészségügyi működés közös nyelve:

- **PR-részszakasz viszonyítási értékek** (LinearB, ~8 M PR): elit felvételi idő < 7 óra, review < 6 óra, teljes átfutás < ~26 óra — a felvételi idő tiszta sor, az első dolog, amit támadni kell.
- A **[várólisták](../várólista-hatás/)** backlogok; az **[RTT](../beutalástól-a-kezelésig/)** átfutási idő; az **[ágykihasználtság](../megtakarított-ágynapok/)** WIP. A javítás mindkét irányban átvihető: WIP-korlátok ↔ felvételi simítás; sorbanállási idő műszerezés ↔ útvonal-szakasz követés.
- A 15% alatti folyamathatékonyság mindkét területen normális, és mindkettő elrejti, mert az *emberek* elfoglaltak, míg a *munka* vár — a munka óráját mérd, ne a dolgozókét.

## Buktatók

- **Kihasználtság-imádat**: a dolgozói kihasználtság 100% felé hajtása nemlineárisan felrobbantja a sorbanállási időket (M/M/1: várakozás ∝ ρ/(1−ρ)) — ezért akadnak el a 95%-ban foglalt kórházak és a 95%-ban lefoglalt csapatok.
- **Átlagok ferde eloszlásokon**: az átfutási idők nehéz farkúak; percentilisekkel (p85) jelezz előre, nem átlagokkal.
- **A WIP csökkentése a munka felfelé elutasításával** és folyamatjavításnak nevezése — a kereslet nem tűnt el, a mérési határon kívül sorakozott (a kórházi változat: a sürgősségin kívül várakozó mentők).

## Források

- Little's Law and flow metrics overviews. <https://agility-at-scale.com/safe/lpm/flow-metrics/> ; <https://getdx.com/blog/flow-metrics/>
- LinearB engineering benchmarks. <https://linearb.io/resources/engineering-benchmarks>
- Reinertsen DG, *The Principles of Product Development Flow*.
