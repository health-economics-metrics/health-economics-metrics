# Koncentrációs index

A koncentrációs index (Wagstaff, Paci, van Doorslaer, 1991) az egészségi változók társadalmi-gazdasági helyzettel összefüggő egyenlőtlenségének szokásos statisztikai mérőszáma, értéke −1 és 1 között mozog. A negatív érték azt jelenti, hogy az egészségi változó a társadalmi-gazdasági szempontból hátrányos helyzetűek körében koncentrálódik, a pozitív azt, hogy a jobb módúak körében, a nulla pedig azt, hogy nincs következetes társadalmi-gazdasági gradiens — a méltánytalan eloszlásra vonatkozó gyanút egyetlen, összehasonlítható számmá alakítja.

## Miért fontos

Egy program az egészében hatékonynak látszhat, miközben az előnyei szinte kizárólag azokhoz jutnak el, akik már eleve jobb helyzetben voltak. Az ilyen elosztási kérdéseket leíró jelleggel az [elérés és méltányosság](../elérés-és-méltányosság/) követi — az elérést depriváltsági kvintilisek szerint rétegezve, a felső és az alsó csoport közötti méltányossági rés formájában —, de egy rétegzett táblázat nem sűríthető egyetlen trendvonallá, és nehezen vethető össze két, egészen eltérő skálán mért beavatkozás között. A koncentrációs index mindkét problémát megoldja: bármely egészségi változóra, bármely társadalmi-gazdasági rangsor mellett ugyanúgy számítjuk, így egy nemzeti egészségügyi szolgálat nyomon követheti, hogy egy adott digitális szolgáltatás egyenlőtlensége kiadásról kiadásra nő-e vagy csökken, és összevetheti egy alkalmazás bevezetésének elosztási méltányosságát például egy szűrőprogramével, ugyanazon normalizált skálán.

## A matematika

```
CI = (2 / mean(health_values)) × Cov(health_values, socioeconomic_ranks)

Cov(X, Y) = mean(X × Y) − mean(X) × mean(Y)   (population covariance)

socioeconomic_ranks: each person's fractional rank in the socioeconomic
distribution, in [0, 1] (0 = most disadvantaged, 1 = most advantaged;
for grouped/banded data, conventionally the midpoint rank of each group)
```

Ez a „kényelmes kovarianciaképlet" (O'Donnell, van Doorslaer, Wagstaff, Lindelow, Világbank, 2008) — a szakemberek szokásos gyorsítása, amellyel a koncentrációs index közvetlenül a párosított megfigyelésekből számítható, anélkül hogy előbb koncentrációs görbét kellene rajzolni és alatta integrálni.

## Kidolgozott példa

Egy önbevallott jó egészségi állapot pontszám (1 = legrosszabb, 4 = legjobb) négy egyenlő méretű társadalmi-gazdasági kvartilisben, mindegyiket a kvartilis középponti rangjával jellemezve:

```
health_values        = [1.0, 2.0, 3.0, 4.0]
socioeconomic_ranks  = [0.125, 0.375, 0.625, 0.875]

mean(health_values)        = 2.5
mean(health × rank)        = mean([0.125, 0.75, 1.875, 3.5]) = 1.5625
mean(socioeconomic_ranks)  = 0.5

Cov = 1.5625 − 2.5 × 0.5 = 0.3125

CI = 2 × 0.3125 / 2.5 = 0.25
```

A pozitív `0.25` azt jelenti, hogy ez az egészségi pontszám a társadalmi-gazdasági szempontból előnyös helyzetű csoport körében koncentrálódik — a magasabb pontszámú válaszadók a rangsor jobb módú vége felé tolódnak el.

## Kapcsolat a szoftverfejlesztéssel

Ez ugyanaz a kovarianciaalapú egyenlőtlenségmérés, amelyet a közgazdaságtan általában használ (a Gini-együttható rokona), és arra képezhető le, hogy egy szoftvertermék előnyei a már eleve előnyös helyzetű felhasználói szegmensek körében koncentrálódnak-e ahelyett, hogy méltányosan oszlanának el — az [elérés és méltányosság](../elérés-és-méltányosság/) (a RE-AIM „elérés" dimenziója) közvetlen kiterjesztése egy leírt rés helyett formális statisztikai mérőszámmá. Ahol az elérés és méltányosság rétegenként számol be a hatásról, a koncentrációs index az egész eloszlást egyetlen előjeles számba sűríti, amely kiadásokon átívelő egyetlen követett KPI-ként használható — ez egy irányítópulton gyakorlatos, ahol a teljes rétegzett bontás nem az.

## Buktatók

- **Előjelkonvenció-csúszás**: az előjel attól függ, hogyan definiáljuk az egészségi változót és a rangot — bármelyik megfordítása megfordítja az előjelet, ezért az alkalmazott konvenciót minden közölt érték mellett kifejezetten meg kell adni.
- **Határrangok a középponti rangok helyett**: a csoportosított vagy sávos társadalmi-gazdasági adatoknál (pl. kvintilisek) minden csoport törtrangját a *középpontjában* kell használni, nem a határán, különben az index torzított.
- **A „nullához közeli" érték olvasása „nincs egyenlőtlenségként"**: a nullához közeli koncentrációs index azt jelenti, hogy „nincs következetes társadalmi-gazdasági gradiens", nem azt, hogy abszolút értelemben „nincs egyenlőtlenség" — a különböző irányú, egymást ellensúlyozó egyenlőtlenségek kioltódhatnak.

## Források

- Wagstaff A, Paci P, van Doorslaer E. "On the measurement of inequalities in health." Soc Sci Med. 1991;33(5):545-57.
- O'Donnell O, van Doorslaer E, Wagstaff A, Lindelow M. "Analyzing Health Equity Using Household Survey Data." World Bank. 2008 — a szokásos szakmai kézikönyv, az itt használt kényelmes kovarianciaképlet forrása. <https://openknowledge.worldbank.org/entities/publication/98380884-0d1d-53d2-b95f-ec6be2019414>
