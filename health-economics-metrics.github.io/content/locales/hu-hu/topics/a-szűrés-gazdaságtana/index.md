# A szűrés gazdaságtana

A szűrés gazdaságtana a tünetmentes populációk tesztelésének értékét szabályozza. A központi matematikai tény: **alacsony betegségprevalencia mellett még a kiváló tesztek is többnyire téves pozitívokat termelnek** — és ezek üldözésének lefelé irányuló költsége elnyomhatja a valódi találatok hasznát.

## Miért fontos

1968 óta a WHO Wilson–Jungner-kritériumai állítják fel a lécet a populációs szűréshez: az állapotnak fontosnak kell lennie, a tesztnek elfogadhatónak és pontosnak, hatásos kezelésnek kell léteznie, és a gazdaságtannak egyensúlyban kell lennie. Az Egyesült Királyság Nemzeti Szűrőbizottsága formális költséghatékonysági elemzést alkalmaz bármely országos program jóváhagyása előtt — és a legtöbb javaslatot elutasítja. Minden „az MI mindenkit mindenre megszűr" ajánlat ebbe a gépezetbe ütközik, és általában alulmarad az alábbi számtannal szemben.

## A matematika

A pozitív prediktív érték (PPV) — annak valószínűsége, hogy egy pozitív eredmény valódi — alacsony prevalenciánál összeomlik:

```
PPV = (sens × prev) / [sens × prev + (1 − spec) × (1 − prev)]

Example: sensitivity 90%, specificity 95%, prevalence 0.5%:
PPV = (0.9 × 0.005) / (0.9 × 0.005 + 0.05 × 0.995)
    = 0.0045 / (0.0045 + 0.04975) ≈ 8.3%
```

Tizenkét pozitívból tizenegy téves. Teljes programgazdaságtan:

```
Cost per true case found = (screening cost + workup cost × all positives) / true positives
Then: is finding a case worth that? (earlier-intervention value per case,
      minus overdiagnosis harm — cases found that would never have mattered)
```

## Kidolgozott példa

MI-retinaszűrés egy ritka állapotra, 100 000 ember, prevalencia 0,5%, szenzitivitás 90%, specificitás 95%, vizsgálat 15 £, megerősítő kivizsgálás 400 £:

```
True positives:  100,000 × 0.005 × 0.90 = 450
False positives: 100,000 × 0.995 × 0.05 = 4,975
Cost = 100,000 × 15 + (450 + 4,975) × 400 = 1.5M + 2.17M = £3.67M
Cost per true case ≈ £8,156
```

Ha a korai kezelés esetenként 20 000 £-ot + 1 QALY-t takarít meg, a program könnyedén átmegy. Növeld a specificitást 99%-ra (kevesebb téves riasztás): a kivizsgálási költség (450 + 995) × 400 = 0,58 M£-ra esik, az összeg 2,08 M£, az esetenkénti költség ≈ **4622 £** — a specificitás, nem a szenzitivitás az, ahol a szűrés gazdaságtana alacsony prevalenciánál eldől.

## Kapcsolat a szoftverfejlesztéssel

A statikus elemzés, a biztonsági szkennelés és az anomáliadetektálás szűrőprogramok kódbázisokon és telemetrián, ahol a valódi hibaprevalencia riasztási lehetőségenként gyakran jóval 1% alatt van. Ugyanez a matematika magyarázza a riasztási fáradtságot: egy 95%-ban specifikus szkenner alacsony prevalenciájú kódon téves pozitívokban fojtja a csapatokat, és minden téves pozitív figyelmet költ és rombolja a bizalmat, amíg a valódi riasztásokat figyelmen kívül hagyják (a klinikai kifejezés *szűrési ártalom*; a mérnöki *lapozó-érzéketlenség*). A gyógyszerek az egészségügyből átvihetők: a specificitást a szenzitivitás előtt növeld, szűrj magasabb prevalenciájú alpopulációkat (kockázatalapú célzás ↔ csak módosított kód szkennelése), és számold a triázs költségét az eszköz gazdaságtanában — lásd [NNT](../kezelendő-betegek-száma/) és [klinikai MI értékelése](../klinikai-mi-értékelése/). Egy egész szűrőprogram méretezéséhez egy teszt helyett lásd [szűrendő személyek száma](../szűrendő-személyek-száma/) — hány embernek kell végigmennie a teljes szűrés-és-kezelés útvonalon egy kimenet megelőzéséhez.

## Buktatók

- **Szenzitivitás/specificitás idézése prevalencia nélkül** — pontosság PPV nélkül marketing.
- **A túldiagnosztizálás figyelmen kívül hagyása**: a soha nem ártott indolens „betegség" megtalálása valódi kezelési költségeket és ártalmakat vált ki.
- **Lead-time torzítás**: a korábbi felismerés megváltozott kimenetek nélkül felfújja a látszólagos túlélést — lásd [korábbi beavatkozás](../korábbi-beavatkozás/).

## Források

- Wilson JMG, Jungner G. "Principles and practice of screening for disease." WHO 1968. <https://apps.who.int/iris/handle/10665/37650>
- UK National Screening Committee. <https://www.gov.uk/government/groups/uk-national-screening-committee-uk-nsc>
