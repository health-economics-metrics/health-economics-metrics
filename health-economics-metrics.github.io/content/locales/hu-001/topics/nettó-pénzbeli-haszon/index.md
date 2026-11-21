# Nettó pénzbeli haszon (NMB)

Az NMB a költséghatékonysági eredményt egyetlen pénzértékké alakítja: a fizetési hajlandósági küszöbön árazott egészségnyereség mínusz a költség. Ikertestvére, a nettó egészséghaszon (NHB) ugyanazt a szabályt egészségegységekben fejezi ki.

## Miért fontos

A hányadosok ([ICER-ek](../inkrementális-költséghatékonysági-mutató/)) kényelmetlenek: nulla hatás közelében felrobbannak, nem átlagolhatók bizonytalansági mintavételek között, és nem rangsorolnak tisztán három vagy több lehetőséget. Az NMB ezt mind megoldja — lineáris, így rangsorolhatod a lehetőségeket, átlagolhatod a Monte-Carlo mintákat és felbonthatod a hozzájárulásokat. Ez az egészséggazdasági matematikának az a formája is, amelyet minden mérnök ismer: *érték mínusz költség*.

## A matematika

```
NMB = (ΔE × λ) − ΔC
NHB = ΔE − (ΔC / λ)

ΔE = incremental effect (e.g., QALYs)
ΔC = incremental cost
λ  = willingness-to-pay threshold (see willingness-to-pay-thresholds.md)

Decision rule: adopt if NMB > 0 (equivalently NHB > 0).
Among alternatives: choose the highest NMB.
```

NMB > 0 ⇔ ICER < λ (ha ΔE > 0), tehát a két szabály egyezik — az NMB csak jobban viselkedik.

## Kidolgozott példa

Három lehetőség egy cukorbeteg-szolgáltatásra, 1000 betegre, λ = 20 000 £/QALY:

```
Option           ΔC          ΔE (QALYs)   NMB = 20,000×ΔE − ΔC
App + coaching   £400,000    30           600,000 − 400,000 = £200,000
App only         £150,000    12           240,000 − 150,000 = £90,000
Extra clinics    £700,000    32           640,000 − 700,000 = −£60,000
```

A többletrendelők nyerik a legtöbb QALY-t, de ennél a küszöbnél értéket rombolnak (NMB < 0). Az alkalmazás + coaching nyer. Figyeld meg, az NMB lehetővé teszi mind a hármat *egyszerre rangsorolni* — a páronkénti ICER-ekhez a [dominancia és hatékonysági határ](../dominancia-és-hatékonysági-határ/) szerinti határeljárás kellene, és ugyanarra a válaszra jutnának.

A nyertes NHB-nézete: 30 − 400 000/20 000 = 30 − 20 = **10 QALY nettó** — az egészségnyereség azon felül, amit ugyanaz a pénz máshol előállított volna.

## Kapcsolat a szoftverfejlesztéssel

A `(megtakarított órák × teljes óradíj) − eszközköltség` — a mindennapi eszköz-üzleti eset — szó szerint NMB-számítás λ = teljes mérnöki költséggel. Két fejlesztés, amelyet az egészséggazdaságtan hozzáad:

- **Tedd a λ-t változóvá, ne állandóvá.** Ábrázold az NMB-t a λ függvényében („egy mérnökóra értéke"), és mutasd meg, hol fordul át a döntés; a különböző érdekeltek így a saját értékelésüket alkalmazhatják a számításaid újracsinálása nélkül.
- **NHB-gondolkodás**: „ez a platform 5000 mérnökórát takarít meg, de olyan költségvetést fogyaszt, amely 3000 mérnökórányi vállalkozói kapacitást vásárolt volna — nettó 2000 óra" kapacitásegységekben kényszeríti ki az alternatív költség összehasonlítását. Lásd [alternatív költség](../alternatív-költség/).

## Buktatók

- **A küszöb elrejtése**: az NMB értelmetlen a λ megadása nélkül; közöld az NMB-t 20 és 30 ezer £-nál, vagy ábrázold a görbét.
- **Az NMB használata apró hatások tisztára mosására**: egy hatalmas populáció szorozva egy elhanyagolható személyenkénti hatással nagy NMB-t adhat — közöld mellette a személyenkénti hatásokat.
- **Elfelejteni, hogy az NMB örökli a ΔC és ΔE minden bizonytalanságát** — párosítsd [valószínűségi érzékenységvizsgálattal](../valószínűségi-érzékenységvizsgálat/).

## Források

- York Health Economics Consortium glossary: net monetary benefit. <https://yhec.co.uk/glossary/net-monetary-benefit/>
- Stinnett AA, Mullahy J. "Net health benefits: a new framework for the analysis of uncertainty in cost-effectiveness analysis." <https://pmc.ncbi.nlm.nih.gov/articles/PMC2528971/>
