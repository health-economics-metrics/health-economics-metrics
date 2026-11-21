# Teljes birtoklási költség (TCO)

A TCO egy rendszer teljes költsége az élettartama alatt: beszerzés vagy építés, integráció, üzemeltetés, karbantartás, támogatás, képzés és leszerelés. A kényelmetlen alapvonal: **a karbantartás a szoftver TCO 50–80%-a** — az élettartam-költség nagyjából háromnegyede *az indulás után* jelentkezik.

## Miért fontos

Az egészségügyi technológiaértékelés régen megtanulta, hogy egy gyógyszer ára nem a költsége — az adagolás, a monitorozás és a mellékhatások kezelése mind a modellbe tartozik. Azok a szoftveres üzleti esetek, amelyek csak az építési/licencköltséget számolják, a naiv gyógyszerár-hibát ismétlik, és rendszeresen alábecsülik a költségoldalt minden [ICER](../inkrementális-költséghatékonysági-mutató/)-ben és [költségvetési hatásban](../költségvetési-hatáselemzés/), amelyet táplálnak. Az NHS-beszerzésben a TCO-fegyelem az, ami őszintévé teszi egy digitális termék költséghatékonysági állítását — és ott veszítenek az olcsónak látszó lehetőségek.

## A matematika

```
TCO = initial cost (build/licence + integration + data migration + training)
    + Σ_t [operations + maintenance + support + infrastructure + upgrades
           + compliance/assurance]_t / (1 + r)^t
    + decommissioning cost (exit, data extraction, parallel running)

Horizon: 3–5 years commercial, system-lifetime for clinical infrastructure
r: 3.5% public sector (Green Book), 8–12% commercial
Benchmarks: annual maintenance ≈ 15–20% of build cost; ~78% of lifetime
TCO post-launch; ignore decommissioning and vendor lock-in prices itself.
```

## Kidolgozott példa

Két lehetőség egy e-megfigyelési rendszerre, 5 éves horizont:

```
                        Vendor SaaS     In-house build
Year 0 (licence/build)  £250,000        £900,000
Integration + training  £180,000        £150,000
Annual run (yrs 1–5)    £120,000/yr     £190,000/yr  (hosting + 1.5 FTE maint.)
Exit/decommission       £60,000         £30,000

Undiscounted TCO        £1,090,000      £2,030,000
```

Az építési lehetőség mérnöki becslése (900 ezer £) csak a valódi TCO 44%-a volt — és maguk az építési becslések jellemzően 30–40%-kal túllépnek (lásd [építés vagy vásárlás](../építés-vagy-vásárlás/)). Hacsak a házon belüli lehetőség nem nyújt lényegesen eltérő *kimeneteket*, a [költségminimalizálási](../költségminimalizálási-elemzés/) logika érvényes, és a SaaS ~940 ezer £-dal nyer.

## Kapcsolat a szoftverfejlesztéssel

A mérnökök alulsúlyozzák saját területük karbantartási adatait, amikor építést szószólnak: az építési költség évi 15–20%-os karbantartási szabálya azt jelenti, hogy minden 1 M£-os rendszer csendben évi 150–200 ezer £ jövőbeli kapacitást köt le — olyan kötelezettség, amely ugyanarra a mentális mérlegre tartozik, mint a [technikai adósság](../technikai-adósság/). A TCO ezen repó minden mutatójának költségfele is: költség telepítésenként, [felhő-egységgazdaságtan](../felhő-egységgazdaságtan/), és a nevező-fegyelem, amelyet a HTA a gyógyszerszponzoroktól megkövetel. Amikor a termékeid árát megkérdőjelezik, a TCO-összehasonlítás, amely tartalmazza a beágyazott megoldás valódi üzemeltetési költségeit, általában a legerősebb újrakeretezés. Egy többéves TCO-szám, mint a fenti, sok költségtétel összege az idő során — lásd [valutabiztos költségösszesítés](../valutabiztos-költségösszesítés/), miért kell ennek az összegnek pontos tizedesnek lennie lebegőpontos helyett, amint egy modellnek fillérre egyeznie kell, és [fillérre pontos költségfelosztás](../fillérre-pontos-költségfelosztás/) egy TCO-összeg költséghelyek közötti felosztására fillérek elvesztése nélkül.

## Buktatók

- **Indulási költségre horgonyzás**: a lehetőségek összehasonlítása a 0. év költségén, amikor a rangsor a 3. évre megfordul.
- **Ingyenes belső munkaerő téveszme**: a házon belüli karbantartás nulla költségű, mert „a csapat már ki van fizetve" — lásd [alternatív költség](../alternatív-költség/).
- **A kilépési költségek figyelmen kívül hagyása**: adatkiáramlás, szerződésfelmondás és párhuzamos futtatás ott van, ahol az „olcsó" SaaS drágává válik.
- **Azonos horizont megsértése**: egy 3 éves SaaS TCO összehasonlítása egy 10 éves építési amortizációval (lásd [időhorizont](../időhorizont/)).

## Források

- IBM, total cost of ownership. <https://www.ibm.com/think/topics/total-cost-of-ownership>
- Software maintenance cost benchmarks. <https://pegotec.net/software-maintenance-cost-percentage-2026-industry-benchmarks/>
