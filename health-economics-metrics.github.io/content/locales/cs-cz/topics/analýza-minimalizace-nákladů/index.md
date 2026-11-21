# Analýza minimalizace nákladů (CMA)

CMA porovnává pouze náklady a vybírá nejlevnější možnost – legitimní *pouze* tehdy, když byla prokázána ekvivalence výsledků alternativ.

## Proč na tom záleží

CMA je nejjednodušší analýza a nejvíc zneužívaná. Veškerou práci dělá tvrzení o ekvivalenci: pokud se výsledky skutečně neliší (biosimilar vs originální přípravek; dva dodavatelé téže služby splňující stejnou specifikaci), pak jedinou otázkou jsou náklady a CMA je správná. Přísnost spočívá v tom, že ekvivalenci je nejprve třeba *prokázat* – typicky studií non-inferiority s předem stanovenou hranicí – což je právě krok, který kupující obvykle přeskakují.

## Matematika

```
Given evidence that Effect_A ≈ Effect_B (within a pre-specified margin δ):
Choose min(Cost_A, Cost_B)

Costs measured from the same perspective, over the same horizon,
including switching/transition costs.
```

Pokud nelze ekvivalenci doložit, CMA je neplatná – použijte místo ní [CEA](../analýza-nákladové-efektivity/)/[CUA](../analýza-nákladů-a-užitku/).

## Řešený příklad

Trust volí mezi dvěma platformami pro videokonzultace. Tříměsíční paralelní pilot ukáže míry dokončení 94,1 % vs 93,8 %, spokojenost pacientů 4,4 vs 4,4 – rozdíly uvnitř předem dohodnutého δ 2 procentních bodů. Výsledky: ekvivalentní. Náklady za 3 roky:

```
                     Platform A     Platform B
Licences             £360,000       £210,000
Integration          £80,000        £150,000
Training/support     £60,000        £90,000
Total                £500,000       £450,000
```

Platforma B vyhrává o 50 000 £ – *včetně* vyšších nákladů na integraci. Bez pilotu by tvrzení o ekvivalenci stálo na brožurách dodavatelů a rozdíl 1 bodu v míře dokončení (≈ tisíce neúspěšných konzultací ročně) by 50 000 £ zcela převážil.

## Souvislost se softwarovým inženýrstvím

CMA je formální podoba nákupu komodit: dva poskytovatelé CI splňující stejná SLO, dvě objektová úložiště se stejnou specifikací odolnosti. Poučení z health economics je v *pořadí operací*: nejprve doložte ekvivalenci (benchmark na vaší zátěži, pilot proti vašim SLO, s předem dohodnutou hranicí), poté srovnejte celkové náklady včetně migrace. „Jsou v podstatě stejné, B je levnější“ bez prvního kroku je způsob, jakým organizace koupí nástroj o 10 % levnější a o 40 % horší. Důsledek: když dodavatel argumentuje cenou, přimějte ho stanovit ekvivalenci – zavazuje i opačným směrem.

## Úskalí

- **Předpokládaná ekvivalence** – definující hřích; absence důkazu o rozdílu není důkazem ekvivalence (poddimenzované piloty „prokazují“ ekvivalenci zadarmo).
- **Vynechání nákladů na přechod** – migrace, přeškolení a paralelní provoz patří na nákladovou stranu.
- **Ekvivalence na špatných výsledcích**: ekvivalentní v měřené metrice, odlišné v té, na které záleží (přístupnost, tail latency, výstup dat).

## Zdroje

- York Health Economics Consortium glossary: cost-minimization analysis. <https://yhec.co.uk/glossary/cost-minimisation-analysis/>
- Briggs AH, O'Brien BJ. "The death of cost-minimization analysis?" Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11288052/>
