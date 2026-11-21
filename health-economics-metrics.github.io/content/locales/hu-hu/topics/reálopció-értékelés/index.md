# Reálopció-értékelés

A reálopció-értékelés a pénzügyi opcióárazás logikáját alkalmazza valós (nem pénzügyi piaci) befektetési döntésekre — konkrétan a projekt későbbi *kiterjesztésének opciójára*, ha az sikeres, anélkül, hogy erre kötelezve lennénk. Egy egyszerűsített egyperiódusú binomiális modell (Cox, Ross, Rubinstein, 1979) közvetlenül értékeli ezt a rugalmasságot, a „szállítsunk kicsiben és lássuk" megérzését árazott számmá alakítva.

## Miért fontos

A statikus NPV-számítás a projektet mindent-vagy-semmit fogadásként árazza: finanszírozod vagy nem, a mai léptékben, örökre. A valós projekteket — különösen a szakaszolt digitális egészségügyi bevezetéseket — ritkán így fogadják: egy egészségügyi rendszer finanszírozhat egy kis kísérleti projektet, megnézheti, mi történik, és csak akkor köteleződik el további pénzzel, ha működik. Ennek a rugalmasságnak valódi értéke van, és figyelmen kívül hagyása rendszeresen alulértékeli a szakaszolt befektetéseket az egylépéses befektetésekhez képest, ami pont fordítva van a beszerzési folyamatok számára, amelyek a biztonságosabbnak tűnő szakaszolt javaslatot jutalmazzák. A reálopció-értékelés magát a rugalmasságot árazza, így a szakaszolt javaslat tisztességesen összehasonlítható a teljes elköteleződéses alternatívával ahelyett, hogy a naiv NPV-sorban kisebbnek látszása miatt büntetnék.

## A matematika

```
Risk-neutral probability of the "up" state:
  p = ((1 + risk_free_rate) − down_factor) / (up_factor − down_factor)

Expansion payoff in each state (floored at zero — expanding is optional):
  payoff_up   = max(project_value × up_factor   − expansion_cost, 0)
  payoff_down = max(project_value × down_factor − expansion_cost, 0)

Option value (discounted expected payoff):
  option_value = (p × payoff_up + (1 − p) × payoff_down) / (1 + risk_free_rate)

Expanded NPV = static_npv + option_value
```

A projekt értéke a következő döntési pontig vagy emelkedik (`up_factor`), vagy csökken (`down_factor`). A kiterjesztést csak akkor gyakorolják, ha az adott állapotban nyereséges — a nullán lévő kifizetési padló teszi ezt valódi *opcióvá* és nem kötelezettséggé. Az információgyűjtés opciójának árazásához, a későbbi kiterjesztés opciója helyett, lásd [a tökéletes információ várható értéke](../a-tökéletes-információ-várható-értéke/). A döntés meghozatalával való várakozás költségéről lásd [a késedelem költsége](../a-késedelem-költsége/).

## Kidolgozott példa

Egy digitális szolgáltatás kísérleti projektje `project_value = £1,000,000` értékkel, a következő döntési pontig 1,5-szeresre emelkedés vagy 0,5-szeresre esés lehetőségével, 8% kockázatmentes rátával és 600 000 £ kiterjesztési költséggel:

```
p = (1.08 − 0.5) / (1.5 − 0.5) = 0.58

payoff_up   = max(1,000,000 × 1.5 − 600,000, 0) =  900,000
payoff_down = max(1,000,000 × 0.5 − 600,000, 0) = max(−100,000, 0) = 0

The floor matters: the option would NOT be exercised if the market
disappoints — the £600,000 expansion cost exceeds the £500,000 the
project would be worth in the down state.

option_value = (0.58 × 900,000 + 0.42 × 0) / 1.08
             = 522,000 / 1.08
             ≈ £483,333.33
```

Az opció értékét egy 200 000 £-os statikus NPV-alaphoz adva: kiterjesztett NPV = 200 000 + 483 333,33 ≈ **683 333,33 £**. Ha csak a 200 000 £-os statikus NPV-t közölnénk ezen opcióérték nélkül, a szakaszolt projekt valódi értékét több mint kétszeresen alábecsülnénk.

## Kapcsolat a szoftverfejlesztéssel

Ez a „szállítsunk most egy minimális verziót, tartsuk meg a további befektetés lehetőségét, ha beindul" formális változata — közvetlenül releváns egy szakaszolt digitális egészségügyi termék bevezetéséhez, szerkezetileg párhuzamos a [késedelem költségével](../a-késedelem-költsége/) és a [WSJF/CD3](../wsjf-és-cd3/) bizonytalanság melletti sorrendezési keretezésével, és kiegészíti [a tökéletes információ várható értékét](../a-tökéletes-információ-várható-értéke/) és [a mintainformáció várható értékét](../a-mintainformáció-várható-értéke/) — mindhárom a rugalmasságot vagy az információt árazza bizonytalanság mellett, különböző szögekből.

## Buktatók

- **Kockázatsemleges árazás kölcsönvétele az azt megalapozó forgalmazott eszköz feltevése nélkül**: a reálopció-modellek a kockázatsemleges valószínűséget a pénzügyi opcióárazásból veszik kölcsön, amely feltételezi, hogy az alapul szolgáló érték *forgalmazott* eszköz — egy valóban nem forgalmazott valós projektnél ez modellezési kényelem, nem szó szerinti piaci tény.
- **Az `up_factor`/`down_factor` szabad paraméterként kezelése**: a binomiális fel/le bemenetek maguk is indoklást igénylő feltevések, nem a kívánt válasz előállítására választott szabad paraméterek.
- **Csak az opcióérték közlése**: a reálopció-érték *additív* az önálló projekt statikus NPV-jéhez — gyakori hiba, hogy csak az opcióértéket közlik, és elhagyják az alapesetet, ami túlbecsüli az esetet, ha a statikus NPV negatív, és alábecsüli (mint a fenti kidolgozott példában), ha a statikus NPV-t teljesen kihagyják.

## Források

- Cox JC, Ross SA, Rubinstein M. "Option pricing: a simplified approach." J Financ Econ. 1979;7(3):229-63.
- Trigeorgis L. *Real Options: Managerial Flexibility and Strategy in Resource Allocation*. MIT Press. 1996.
- Driffield T, Smith PC. "A real options approach to watchful waiting: theory and an illustration." Med Decis Making. 2007;27(2):178-88 — ties real options directly to a health-economics decision context. <https://pubmed.ncbi.nlm.nih.gov/17395932/>
