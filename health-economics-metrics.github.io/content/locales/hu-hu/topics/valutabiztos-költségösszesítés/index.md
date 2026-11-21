# Valutabiztos költségösszesítés

Sok pénzösszeg-tételsor — havi számlák, telephelyenkénti költségek, többéves költségvetési hatás-számok — összegzése a szokásos bináris lebegőpontos (`f64`) számokkal apró ábrázolási hibákat halmoz, mert a legtöbb tizedes tört (például 1234,56 $) nem ábrázolható pontosan bináris lebegőpontban. Minden egyes hiba apró, de egy nagy modell, amely több évre szóló száz- vagy ezernyi tételsort összegez, a cent törtrészeivel eltolódhat — és az eltolódás az összeadások *sorrendjétől* függ, ami reprodukálhatatlanná teszi. A pontos tizedes (vagy egész kisebb egységes) számtannal végzett pénznem-összesítés pontosan összegez, ahogyan a könyvelőrendszereknek és a kettős könyvelésnek centre egyeznie kell.

## Miért fontos

Ez egy jól dokumentált, alapvető szoftverhibaosztály: Goldberg 1991-es ACM Computing Surveys cikke, a „What Every Computer Scientist Should Know About Floating-Point Arithmetic" a szabványos hivatkozás arra, miért nem tudja a bináris lebegőpont a legtöbb tizedes pénzértéket pontosan ábrázolni, és miért halmozza a hibát sokuk összegzése. Az egészséggazdaságtani és NHS-pénzügyi modellek rutinszerűen sok évet és sok költségkategóriát összegeznek — a [teljes birtoklási költség](../teljes-birtoklási-költség/) és a [költségvetési hatáselemzés](../költségvetési-hatáselemzés/) egyaránt nagy számú `f64` költségtételt aggregál többéves horizonton. Amikor egy modellnek centre kell egyeznie — egy audit, amely kézzel újraszámolja az összeget, *azonos* számot kell kapjon —, magának a számtannak pontos tizedesnek kell lennie, nem lebegőpontosnak.

## A matematika

```
Naive rollup:              total = Σ f64(line_item_i)         — order-dependent drift
Currency-safe rollup:      total = Σ Decimal(line_item_i)      — exact, reproducible

Applying a percentage adjustment (e.g. a contingency buffer):
  adjusted = total × multiplier                — exact Decimal result, may carry
                                                  more decimal places than the
                                                  currency's minor-unit exponent
  rounded  = round(adjusted, currency_exponent, rounding_rule)  — the rounding rule
                                                  (half-up vs half-even/banker's
                                                  rounding) must be stated explicitly
```

Figyeld meg a kétlépéses fegyelmet: egy pontos `Decimal` összeg szorzása egy szorzóval több tizedesjegyet adhat, mint amennyit a pénznem ténylegesen használ (például három tizedesjegyet egy kéttizedesjegyű összegből és kéttizedesjegyű szorzóból) — ezt a közbenső pontosságot *nem* kerekíti el automatikusan; csak kifejezett kerekítési lépés, megadott kerekítési szabállyal viszi le a pénznem valódi kisebb egység kitevőjére.

## Kidolgozott példa

Tizenkét azonos, egyenként 1234,56 $-os havi számla, pontos tizedes számtannal összegezve: 1234,56 $ × 12 = **14 814,72 $**, pontosan. Hasonlítsd ezt az `f64` literál `1234.56` tizenkétszeri összegzéséhez IEEE-754 dupla pontosságban, amely az összegzés sorrendjétől függően a cent törtrészeivel eltolódhat — valódi, dokumentált hibaosztály, nem probléma a pontos tizedes `Money` számtanra épülő modellnek.

Most alkalmazz egy szokásos 5%-os költségvetési hatás-tartalékot (1,05× szorzó) erre a 14 814,72 $-os összegre: 14 814,72 $ × 1,05 = 15 555,456 $ — három tizedesjegy, mert a szorzás pontos és nem kerekítődik automatikusan a pénznem két tizedesjegyére. Ennek kifejezett 2 tizedesjegyre kerekítése bankári kerekítéssel (half-even) pontosan **15 555,46 $**-t ad.

## Kapcsolat a szoftverfejlesztéssel

Ez a közvetlen, alapvető lecke a „a pénzügyi szoftver `Decimal`-t használ, nem `float`-ot" mögött — kifejezetten kapcsolódik a repó [teljes birtoklási költség](../teljes-birtoklási-költség/) és [költségvetési hatáselemzés](../költségvetési-hatáselemzés/) moduljaihoz, amelyek mindketten jelenleg sima lebegőpontos költségeket összegeznek; az itteni helyességi érv nem követeli e modellek azonnali migrálását, de pontosan megmondja, *mikor* kell egy rendszernek centre egyeznie, és ezért nem szabad bináris lebegőpontot használnia a pénzszámtanhoz. Lásd még [fillérre pontos költségfelosztás](../fillérre-pontos-költségfelosztás/) a társ-problémáról, az összegek felosztásáról (nem összegzéséről) cent elvesztése nélkül.

## Buktatók

- **Átváltás `float`-ra a lánc közepén**: egy pénzérték lebegőpontos számba kivétele egy számítás közepén (egyes `Money` könyvtárak ezt az átalakító metódust kifejezett figyelmeztetésként még „lossy"-nak is nevezik) csendben eldobja a pontossági garanciát minden ezen a ponton túli számításra.
- **„A Decimal túl lassú, hogy vesződjünk vele"**: a pontos tizedes számtan szükségtelen többletterhelésként elvetése, amikor a pénzügyi jelentésnél a helyesség és az auditálhatóság számít, nem a nyers áteresztőképesség.
- **Tartalékszázalék alkalmazása a kerekítési szabály megadása nélkül**: a half-up és a half-even (bankári) kerekítés megváltoztathatja a végső centet; maga a kerekítési konvenció kimondott, auditálható választás kell legyen — lásd [költség-haszon elemzés](../költség-haszon-elemzés/) a HM Treasury Green Book tartalék- és optimizmustorzítás-korrekciós útmutatóról, amely pontosan az a fajta szám, amelyre ezt a kerekítési lépést alkalmazzák.

## Források

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — the `Money` pattern.
- Goldberg D. "What Every Computer Scientist Should Know About Floating-Point Arithmetic." ACM Computing Surveys, 1991.
- HM Treasury, The Green Book — optimism-bias and contingency guidance for budget-impact modelling. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
