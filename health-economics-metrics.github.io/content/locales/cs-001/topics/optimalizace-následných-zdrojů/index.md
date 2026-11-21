# Optimalizace následných zdrojů

Ušetření hodiny seniorního praktika – praktického lékaře, seniorního registrara, konzultanta – často předchází zdržení úzkého místa celého multidisciplinárního týmu (MDT) sester, administrativních úředníků a terapeutů, kteří čekají na klinická schválení. Hodnotou odblokování úzkého místa je propustnost všech za ním.

## Proč na tom záleží

Zdravotní péče běží na řetězcích schvalování: propuštění čekají na podpis konzultanta, léčebné plány na revizi MDT, doporučení na triáž. Když se zdrží řídicí role, náklad není hodina jednoho člověka – je to nečinný nebo blokovaný čas napříč každou závislou rolí plus čas pacientů v limbu (další [lůžkodny](../ušetřené-lůžkodny/), delší [čekání RTT](../odeslání-k-léčbě/)). Je to teorie omezení aplikovaná na klinické cesty: hodina ušetřená *na omezení* má hodnotu mezní propustnosti celého systému; hodina ušetřená jinde má hodnotu mnohem menší.

## Matematika

```
Value of unblocking = Σ over downstream roles (blocked hours released × unit cost)
                    + pathway throughput gain × value per pathway completion

Contrast: value of the same hour saved at a non-gating role ≈ that role's
capacity value alone (see practitioner-time.md).
```

Omezení identifikujte empiricky: kde práce čeká ve frontě nejdéle? Do čí schránky se zpoždění vracejí?

## Řešený příklad

Propuštění z oddělení vyžadují každé ráno revizi konzultanta. Konzultant tráví 90 min/den sestavováním informací rozptýlených napříč systémy; revize skončí do 14:00 a 6 propuštění denně se dokončí příliš pozdě na ten den – každé stojí odvratitelnou lůžkodenní.

Dashboard souhrnu propuštění (laboratoře, léky, příznaky v jednom pohledu) zkrátí sestavení na 20 minut; revize skončí do 11:30:

```
Bed days avoided     = 4 of the 6 late discharges × 365 ≈ 1,460 bed days/year
Downstream unblocking: 2 discharge coordinators + pharmacy + transport
                       previously idle-then-crunched each afternoon —
                       ~3 staff-hours/day of blocked time released ≈ 1,100 hrs/yr
```

Konzultantových vlastních 70 minut je *nejmenší* část hodnoty – smysl této metriky. Lůžkodny ocenit podle mechanismu (viz [ušetřené lůžkodny](../ušetřené-lůžkodny/)) a hodiny personálu jako kapacitu.

## Souvislost se softwarovým inženýrstvím

Je to code review, schvalování architektury a schránka staff inženýra. Když pět inženýrů čeká den na jedinou osobu, která může schválit návrh, náklad je pět inženýrských dnů plus den [nákladů zpoždění](../náklady-zpoždění/) na samotné práci – ne hodina jednoho recenzenta. Nástroje, které stlačí úkol řídicí role (lepší kontext revize, automatické předkontroly, dashboardy sestavující, co schvalovatel potřebuje), kupují propustnost systému, nikoli pohodlí jednotlivce. Měřte čas převzetí/čekání na omezení (viz [metriky toku](../metriky-toku/)) – je to softwarový ekvivalent propasti propuštění ve 14:00.

## Úskalí

- **Optimalizace neomezení**: krásné nástroje pro roli, za kterou nic nečeká, vytvářejí téměř nulovou hodnotu pro systém.
- **Migrace omezení**: odblokujete konzultanta a omezení se přesune (do lékárny, do dopravy) – modelujte *další* omezení dřív, než si nárokujete plné zisky propustnosti.
- **Počítání následných hodin jako hotovosti**: uvolnění blokovaného času je kapacita, podléhající obvyklému [testu přesunu](../úspory-uvolňující-hotovost-vs-neuvolňující-hotovost/).

## Zdroje

- Goldratt EM, *The Goal* (theory of constraints).
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
