# Populační přičitatelný podíl (PAF)

PAF je podíl zátěže nemoci nebo výsledku v populaci, který je přičitatelný expozici konkrétnímu rizikovému faktoru – podíl, který by zmizel, pokud by byla expozice zcela odstraněna. Převádí „tento rizikový faktor zdvojnásobuje vaše šance“ na populační číslo, podle něhož může komisař skutečně plánovat: kolik případů a kolik nákladů stojí za to danou expozici honit.

## Proč na tom záleží

Levin zavedl PAF v roce 1953, aby odpověděl na úzkou, konkrétní otázku: kdyby nikdo nekouřil, kolik rakoviny plic by zmizelo? Stejná aritmetika dnes určuje rozsah národního plánování prevence od strategií proti tabáku a obezitě po žebříčky rizikových faktorů studie WHO Global Burden of Disease, protože relativní riziko samo o sobě nic neříká o dopadu – rizikový faktor může zdvojnásobit šanci vzácné události a sotva pohnout populační zátěží nemoci, nebo jen mírně zvýšit šanci častého jevu a přesto odpovídat za obrovský podíl případů. PAF je to, co mění „rizikový faktor X je nebezpečný“ na „odstranění rizikového faktoru X by ročně předešlo tolika případům“, což je číslo, které byznys případ preventivního programu skutečně potřebuje. Co stojí podle tohoto čísla jednat, viz [ekonomika prevence](../ekonomika-prevence/).

## Matematika

```
PAF = prevalence_exposed × (relative_risk − 1) / (1 + prevalence_exposed × (relative_risk − 1))
prevalence_exposed = fraction of the population exposed to the risk factor (0–1)
relative_risk      = risk of the outcome in exposed vs. unexposed people (e.g. 2.5 = 2.5×)
Cases attributable = total_cases × PAF
```

PAF roste s prevalencí expozice i s relativním rizikem – mírně zvýšené relativní riziko (řekněme 1,5×) spojené s velmi častou expozicí může dát větší PAF než dramatické relativní riziko (řekněme 5×) spojené se vzácnou. To je celý důvod, proč existuje jako samostatné číslo vedle relativního rizika.

## Řešený příklad

Rizikový faktor je přítomen u 30 % populace (`prevalence_exposed = 0.3`) a zvyšuje riziko výsledku 2,5krát (`relative_risk = 2.5`):

```
PAF = 0.3 × (2.5 − 1) / (1 + 0.3 × (2.5 − 1))
    = 0.3 × 1.5 / (1 + 0.3 × 1.5)
    = 0.45 / 1.45
    ≈ 0.3103 (31.0%)
With 1,000 cases/year in the population:
Cases attributable = 1,000 × 0.3103 ≈ 310 cases/year
```

Něco málo pod třetinou roční zátěže tohoto výsledku je přičitatelné expozici – její úplné odstranění (teoretický strop; žádná skutečná intervence nedosáhne 100% odstranění expozice) by ročně předešlo zhruba 310 z 1 000 případů.

## Souvislost se softwarovým inženýrstvím

PAF je epidemiologická verze „jaká část našeho objemu incidentů je přičitatelná této jedné kořenové příčině?“ – stejný tvar otázky, jakou týmy kladou, když poměřují konkrétní třídu nasazení nebo závislosti proti celkovým produkčním incidentům, místo aby každý incident považovaly za stejně hodný opravy stejným způsobem. Kategorie kořenové příčiny přítomná ve velkém podílu nasazení s jen mírným relativním rizikem způsobení incidentu může při volbě, kam nejdřív investovat inženýrské úsilí, předčit vzácnou kategorii s vysokým relativním rizikem – přesně poznatek PAF, přeložený.

## Úskalí

- **Sčítání PAF přes rizikové faktory**: PAF více faktorů působících na týž výsledek se nesčítají na 100 % – mohou ho celkem přesáhnout, protože faktory interagují a sdílejí kauzální cesty. Každé PAF berte jako „kdyby byl odstraněn tento faktor sám“, nikdy jako rozdělení celkového rizika.
- **Přenos relativního rizika napříč populacemi**: relativní riziko odhadnuté v jedné populaci (jiná základní prevalence expozice, jiné zavádějící faktory) vede při aplikaci na prevalenci expozice jiné populace k zavádějícímu PAF.
- **Záměna PAF s přičitatelným rizikem u exponovaných**: PAF je populační a závisí na prevalenci expozice; přičitatelné riziko u exponovaných je individuální a nezávisí. Odpovídají na různé otázky – neuvádějte jedno k zodpovězení druhého.

## Zdroje

- Levin ML. "The occurrence of lung cancer in man." Acta Unio Int Contra Cancrum. 1953;9(3):531-41.
- Rockhill B, Newman B, Weinberg C. "Use and misuse of population attributable fractions." Am J Public Health. 1998;88(1):15-9.
