# QALY-hiány és súlyossági módosítók

A QALY-hiány azt méri, mennyi jövőbeli egészséget vesz el egy betegség a betegektől az általános populációhoz képest. A NICE **súlyossági módosítók** alkalmazására használja: minél betegebb a populáció, annál többet ér minden nyert QALY — a szokásos küszöb legfeljebb 1,7-szeresét.

## Miért fontos

A NICE 2022-es kézikönyve óta a súlyosság kifejezett szorzó az egészségnyereség értékén, felváltva a régi életvégi felárat. Egy súlyos állapotra szánt technológiát legfeljebb ~51 000 £/QALY tényleges küszöbhöz mérnek a 30 000 £ helyett. Ha a szoftvered súlyosan érintett populációt szolgál (előrehaladott szívelégtelenség, súlyos mentális betegség), a súlyossági módosító lehet a különbség a finanszírozható és a nem finanszírozható gazdasági eset között — és ennek igényléséhez kell a hiány-matematika.

## A matematika

Két mérőszám, a hátralévő élettartamra a jelenlegi standard ellátás mellett számolva:

```
Absolute shortfall     = QALYs_general_population − QALYs_with_condition
Proportional shortfall = Absolute shortfall / QALYs_general_population
```

NICE 2022 súlyok (az a mérőszám érvényes, amelyik a magasabb súlyt adja):

```
Weight ×1.0: absolute < 12 and proportional < 0.85
Weight ×1.2: absolute ≥ 12 or proportional ≥ 0.85
Weight ×1.7: absolute ≥ 18 or proportional ≥ 0.95
```

A súly a ΔE-t szorozza (vagy ekvivalensen a küszöböt): a tényleges λ ×1,2-nél 24–36 ezer £, ×1,7-nél 34–51 ezer £ lesz.

## Kidolgozott példa

Agresszív állapotú betegek, átlagéletkor 60 év. Az általános populáció 60 évesen 14,2 diszkontált QALY-ra számíthat; az állapottal, a jelenlegi ellátás mellett 2,1-re.

```
Absolute shortfall     = 14.2 − 2.1 = 12.1  (≥ 12 → qualifies for ×1.2)
Proportional shortfall = 12.1 / 14.2 = 0.852 (≥ 0.85 → also ×1.2)
```

A monitorozó platformod ICER-je 26 000 £/QALY — a szokásos 20–30 ezer £ közepi ítélet felett, határesetben. A ×1,2 súllyal: tényleges ICER = 26 000 / 1,2 ≈ **21 700 £/QALY** — kényelmesen finanszírozható. A hiányszámítás éppen elmozdította a döntést.

## Kapcsolat a szoftverfejlesztéssel

A súlyossági súlyozás formális változata annak, amit a mérnöki szervezetek ösztönösen tesznek: javulási egységenként többet költeni a leginkább rászoruló rendszerekre. Az átvihető minta — számítsd ki minden szolgáltatás „SLO-hiányát" (mennyivel fut a várt egészséges alapvonal alatt, abszolút és arányos értelemben), és ennek megfelelően súlyozd a javítás értékét. Ez számtannal, nem vitákkal indokolja, miért kap a lángoló régi rendszer megtakarított óránként több befektetést, mint egy egészséges. Ugyanazt az irányítási tanulságot is hordozza: tedd közzé a súlyokat a priorizálási értekezlet *előtt*, különben minden csapat súlyosságot állít.

## Buktatók

- **A hiány kiszámítása rossz alapvonalhoz**: a *jelenlegi standard ellátás* mellett mérik, nem a kezeletlen természetes lefolyáshoz.
- **Életkor-érzékenység**: a hiány erősen függ a populáció életkorától (a fiatalabb betegeknek több QALY-juk van elveszíteni → nagyobb abszolút hiány); használd a ténylegesen kezelt populáció életkor-eloszlását.
- **Feltételezni, hogy a módosító máshol is érvényes** — ez NICE (Anglia) mechanizmus; más HTA-testületek másképp (vagy sehogy) kezelik a súlyosságot.

## Források

- Analysis of NICE severity modifier decisions, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Mtech Access, NICE HTA decision modifiers explainer. <https://mtechaccess.co.uk/nice-hta-decision-modifier/>
