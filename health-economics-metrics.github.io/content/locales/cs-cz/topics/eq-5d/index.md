# EQ-5D

EQ-5D je standardizovaný dotazník skupiny EuroQol pro měření kvality života související se zdravím. Je to nástroj, který vytváří užitkové váhy uvnitř většiny výpočtů [QALY](../rok-života-upravený-o-kvalitu/) – referenční případ NICE ho jmenuje jako preferovanou míru pro dospělé.

## Proč na tom záleží

Každý produkt digitálního zdraví, který si chce nárokovat QALY, potřebuje užitky z validovaného nástroje a EQ-5D je výchozím ve Spojeném království a velké části Evropy. Je dost krátký na to, aby se dal vložit do aplikace (5 otázek + vizuální škála), což znamená, že softwarové produkty mohou sbírat výsledková data na úrovni HTA jako vedlejší produkt běžného používání – strukturální výhoda oproti lékům, které potřebují vyhrazené studie.

## Matematika

EQ-5D-5L klade jednu otázku v každé z **5 dimenzí** – mobilita, sebepéče, obvyklé činnosti, bolest/nepříjemné pocity, úzkost/deprese – každou zodpovězenou na **5 úrovních** (žádné problémy … extrémní problémy), plus vizuální analogovou škálu 0–100 (EQ VAS).

```
Health state = 5-digit profile, e.g. "21221"
Utility index = value_set(profile)

The value set is country-specific, derived from time-trade-off /
discrete-choice surveys of the general public. Anchors: 1 = full health,
0 = dead; states worse than death are negative (UK 3L set floor: −0.594).
```

Aritmetika QALY pak pokračuje jako `duration × utility`.

## Řešený příklad

Aplikace pro rehabilitaci pohybového aparátu měří EQ-5D-5L při zahájení a po 6 měsících u 1 000 uživatelů, kteří program dokončili.

```
Mean utility at baseline:  0.62
Mean utility at 6 months:  0.71
Gain sustained (assume) 1 year: (0.71 − 0.62) × 1.0 = 0.09 QALYs per user
```

Proti změně 0,03 v kontrolní skupině (přirozené zotavení) je přičitatelný zisk 0,06 QALY na uživatele. Monetizováno při 20 000–30 000 £/QALY: **1 200–1 800 £ zdravotní hodnoty na uživatele, který program dokončil** – číslo, které ukotvuje cenové vyjednávání aplikace s plátcem. (Minimální klinicky významné rozdíly pro index EQ-5D se běžně pohybují v rozmezí 0,03–0,08, takže 0,06 je věrohodné, ale musí obstát proti kontrolnímu srovnání; viz [výsledky hlášené pacienty](../výsledky-hlášené-pacienty/).)

## Souvislost se softwarovým inženýrstvím

- **Instrumentujte to.** EQ-5D při registraci a v následných intervalech je několik obrazovek UI; odměnou jsou důkazy na úrovni HTA. Zajistěte licenci od EuroQol (vyžadována, pro některá užití zdarma).
- **Používejte správnou sadu hodnot** pro zemi nasazení – stejné odpovědi se ve Spojeném království, Německu a Japonsku skórují odlišně.
- **Designové poučení**: EQ-5D ukazuje, jak drobný standardizovaný dotazník plus zveřejněná skórovací funkce dává srovnatelný jediný index. To je vzor i pro každý věrohodný index vývojářské zkušenosti – standardizovaný nástroj, zveřejněné váhy, ne ad hoc pocity. Viz [SPACE a DevEx](../space-a-devex/).

## Úskalí

- **Před/po bez komparátoru** – regrese k průměru a přirozené zotavení nafukují naivní zisky.
- **Zkreslení přeživších**: měření jen uživatelů, kteří zůstali zapojeni (viz [udržení a odchod](../udržení-a-odchod-uživatelů/)).
- **Míchání verzí 3L a 5L nebo sad hodnot** napříč studiemi – systematicky odlišná čísla.
- **Efekty stropu** u mírně postižených populací: mnoho uživatelů skóruje při zahájení blízko 1,0, takže nezbývá prostor pro prokázání zisku.
- **Považování sady hodnot za samoodůvodňující**: užitková čísla, která sada hodnot vrací, byla sama zjištěna od veřejnosti prostřednictvím time-trade-off (nebo příbuzných volbových) šetření – jak, viz [Zjišťování užitku metodou Time Trade-Off (TTO)](../zjišťování-užitku-metodou-time-trade-off/).

## Zdroje

- EuroQol: EQ-5D-5L. <https://euroqol.org/information-and-support/euroqol-instruments/eq-5d-5l/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
