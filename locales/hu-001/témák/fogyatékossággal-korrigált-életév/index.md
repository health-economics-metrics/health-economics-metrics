# Fogyatékossággal korrigált életév (DALY)

A DALY egy elvesztett egészséges életév — a [QALY](../minőséggel-korrigált-életév/) teheroldali tükörképe. Ahol a QALY az *nyert* egészséget számolja, a DALY a betegség miatt *elvesztettet*; a beavatkozásokat az **elkerült** DALY-k alapján értékelik.

## Miért fontos

A DALY a globális egészségügy szabványa (a WHO, a Global Burden of Disease vizsgálat és a legtöbb alacsony és közepes jövedelmű ország egészségügyi minisztériuma DALY-ban tervez). Ha a szoftvered nemzetközi egészségügyi rendszereket, adományozókat vagy WHO-hoz igazodó programokat céloz, az értéknyelv az elkerült DALY, nem a nyert QALY. A WHO-CHOICE történelmi viszonyítási értéke: az a beavatkozás, amely egy DALY-t az egy főre jutó GDP 1-szeresénél olcsóbban kerül el, „rendkívül költséghatékony", az 1–3-szoros „költséghatékony" (a WHO ma elveti e sávok mereven használatát, de a gyakorlatban továbbra is mindenütt jelen vannak).

## A matematika

```
DALY = YLL + YLD

YLL (years of life lost)         = deaths × standard life expectancy at age of death
YLD (years lived with disability) = prevalence × disability weight

disability weight ∈ [0, 1], 0 = full health, 1 = equivalent to death
(weights published by the Global Burden of Disease study)
```

## Kidolgozott példa

Egy szűrési emlékeztető platform egy régióban növeli egy betegség korai felismerését. Évente 10 idő előtti halált előz meg (mindegyik 20 évet veszít a szokásos várható élettartamhoz képest), és megelőzi, hogy 200 ember egy évet éljen olyan állapottal, amelynek fogyatékossági súlya 0,2.

```
YLL averted = 10 × 20        = 200
YLD averted = 200 × 0.2      = 40
DALYs averted               = 240 per year
```

Ha a platform üzemeltetése évi 600 000 $, az elkerült DALY-nkénti költség 600 000 / 240 = **2500 $**. Egy olyan országban, ahol az egy főre jutó GDP 8000 $, ez jóval az 1× GDP viszonyítási érték alatt van — WHO-CHOICE terminológiában „rendkívül költséghatékony".

## Kapcsolat a szoftverfejlesztéssel

- A globális egészségügyi finanszírozókat (Gavi, Global Fund, nemzeti programok) célzó digitális egészségügynek a hatást **elkerült DALY-nkénti költségben** kell kifejeznie — ebben a mutatóban gondolkodnak már a pályázatbírálók.
- A DALY hasznos *teherelszámolási* sablon a mérnöki munkához is: az incidensek, a megbízhatatlan buildek és a régi rendszerek súrlódása a kódbázis „fogyatékossággal eltöltött évei" — a fáradságsúlyozott terhelési leltár megmutatja, hol vásárolja a javítás a legtöbb „egészséges mérnöki évet", ahogy a GBD-teherstatisztikák irányítják az egészségügyi kiadásokat.

## Buktatók

- **A nyert QALY-k ≠ az elkerült DALY-k számszerűen** — különböző súlyok, különböző halandósági táblák, különböző konvenciók (a DALY-k történelmileg korsúlyozást és diszkontálást használtak a mutatón belül). Ne váltsd át könnyelműen.
- **A GDP-többszörös küszöbök gumibélyegzőként használata** — maga a WHO is figyelmeztet, hogy figyelmen kívül hagyják a költségvetést és az alternatív költséget; lásd [fizetési hajlandósági küszöbök](../fizetési-hajlandósági-küszöbök/).
- **Populációs léptékű DALY-k állítása felhasználónkénti hatásosságból** a felvétellel és az adherenciával való szorzás nélkül — lásd [elérés és méltányosság](../elérés-és-méltányosság/).

## Források

- WHO indicator registry: DALYs. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/158>
- Bertram MY, et al. "Cost-effectiveness thresholds: pros and cons." (WHO) <https://pmc.ncbi.nlm.nih.gov/articles/PMC4339959/>
- Marseille E, et al. on GDP-based thresholds, Health Policy and Planning. <https://academic.oup.com/heapol/article/32/1/141/2555408>
