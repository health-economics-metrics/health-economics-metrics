# Analýza nákladů a užitku (CUA)

CUA je analýza nákladové efektivity s **obecným, preferencemi váženým výsledkem** – téměř vždy [QALY](../rok-života-upravený-o-kvalitu/) (nebo odvrácené [DALY](../rok-života-upravený-o-disabilitu/)). Protože je jednotka výsledku univerzální, může CUA srovnávat intervence napříč zcela odlišnými nemocemi.

## Proč na tom záleží

Národní zdravotní služba musí z jednoho rozpočtu vybírat mezi lékem na rakovinu, aplikací pro duševní zdraví a chirurgickým robotem. Přirozené jednotky je nesrovnají; QALY ano. CUA je proto metodou referenčního případu v NICE a většině orgánů HTA: její výstup – náklady na QALY posuzované proti [prahu](../prahy-ochoty-platit/) – je nejbližší univerzální směnný kurz, jaký zdravotní politika má. Chcete-li, aby byl váš software financován *místo něčeho jiného*, CUA je tou arénou.

## Matematika

```
ICUR = ΔCost / ΔQALYs      (the ICER with QALYs as the effect unit)

ΔQALYs = Σ (duration_i × utility_i)_new − Σ (duration_i × utility_i)_old
```

Užitky z validovaných nástrojů ([EQ-5D](../eq-5d/)); náklady i QALY se [diskontují](../diskontování-a-časová-preference/) 3,5 % (referenční případ NICE); nejistota pomocí [PSA](../pravděpodobnostní-analýza-citlivosti/).

## Řešený příklad

Aplikace KBT pro střední úzkost vs čekací listina na osobní terapii, na pacienta:

```
Costs:  app licence + support        £250
        therapy displaced            −£680   (40% of users no longer need it)
        ΔC = 250 − 680 = −£430 (saves money)

QALYs:  6 months at utility 0.76 instead of 0.68 while waiting
        ΔE = 0.5 × (0.76 − 0.68) = +0.04 QALYs
```

ΔC < 0 a ΔE > 0: aplikace **dominuje** – lepší a levnější, poměr není potřeba. Pokud by předpoklad o vytlačení terapie byl jen 10 %, ΔC = 250 − 170 = +80 £ a ICUR = 80 / 0,04 = **2 000 £/QALY** – stále daleko pod 20 000 £. Případ přežije, i když se klíčový předpoklad výrazně sníží: tak vypadá robustní CUA (a [tornádový diagram](../analýza-citlivosti/) to dokazuje).

## Souvislost se softwarovým inženýrstvím

Hluboká myšlenka CUA – *jedna složená, preferencemi vážená jednotka ke srovnání nesrovnatelného* – je vzorem pro srovnávání nesourodých inženýrských investic (bezpečnost vs vývojářská zkušenost vs spolehlivost). Poctivé možnosti jsou buď obhajitelná složená jednotka (vzácná), nebo explicitní [tabulka nákladů a důsledků](../analýza-nákladů-a-důsledků/) (obvyklá). Před čím CUA varuje, je falešný kompozit: vážené „skóre dopadu“, jehož váhy byly dodatečně doladěny, aby vyhrála preferovaná možnost. Health economics strávila desetiletí standardizací zjišťování užitků právě proto, aby váhy předcházely srovnání.

## Úskalí

- **Zisky užitku pod citlivostí nástroje** (viz minimální klinicky významný rozdíl ve [výsledcích hlášených pacienty](../výsledky-hlášené-pacienty/)) – drobné ΔE krát velké populace je klasický trik praní.
- **Chybějící vytlačení komparátorové péče** – největší nákladová položka u digitálních produktů je často to, co nahrazují.
- **Mapování nepreferenčních skóre na užitky** nevalidovanými převodníky.

## Zdroje

- York Health Economics Consortium glossary: cost-utility analysis. <https://yhec.co.uk/glossary/cost-utility-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
