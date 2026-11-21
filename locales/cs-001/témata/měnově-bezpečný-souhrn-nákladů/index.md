# Měnově bezpečný souhrn nákladů

Sčítání mnoha peněžních položek – měsíčních faktur, nákladů na lokalitu, víceletých údajů o dopadu na rozpočet – obyčejnými binárními čísly s plovoucí desetinnou čárkou (`f64`) kumuluje drobné chyby reprezentace, protože většinu desetinných zlomků (například 1 234,56 USD) nelze v binární plovoucí řádové čárce přesně vyjádřit. Každá jednotlivá chyba je nepatrná, ale velký model sčítající stovky nebo tisíce položek po několik let se může odchýlit o zlomky centu – a odchylka závisí na *pořadí*, v němž se sčítání provádí, takže je nereprodukovatelná. Souhrn v měně provedený v přesné desítkové (nebo celočíselné vedlejší jednotkové) aritmetice sčítá přesně, v souladu s tím, jak se účetní systémy a podvojné knihy musí srovnat na cent.

## Proč na tom záleží

Jde o dobře zdokumentovanou, základní třídu softwarových chyb: Goldbergův článek z roku 1991 v ACM Computing Surveys „What Every Computer Scientist Should Know About Floating-Point Arithmetic“ je standardním odkazem na to, proč binární plovoucí řádová čárka nedokáže přesně vyjádřit většinu desetinných peněžních hodnot a proč jejich sčítání chybu znásobuje. Modely health economics a financí NHS běžně sčítají mnoho let a mnoho nákladových kategorií – [celkové náklady vlastnictví](../celkové-náklady-vlastnictví/) i [analýza dopadu na rozpočet](../analýza-dopadu-na-rozpočet/) agregují velké počty nákladových položek `f64` na víceletých horizontech. Když se musí model srovnat na cent – audit, který přepočítá součet ručně, musí dostat *shodné* číslo – aritmetika sama musí být přesná desítková, nikoli v plovoucí řádové čárce.

## Matematika

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

Všimněte si dvoukrokové disciplíny: vynásobení přesné částky `Decimal` násobitelem může dát více desetinných míst, než měna skutečně používá (například tři desetinná místa z dvoumístné částky krát dvoumístný násobitel) – tato mezipřesnost se *nezaokrouhlí* automaticky; teprve explicitní krok zaokrouhlení se stanoveným pravidlem ji sníží na skutečný exponent vedlejší jednotky měny.

## Řešený příklad

Dvanáct stejných měsíčních faktur po 1 234,56 USD, sečtených v přesné desítkové aritmetice: 1 234,56 USD × 12 = **14 814,72 USD**, přesně. Porovnejte to se sčítáním literálu `f64` `1234.56` dvanáctkrát v dvojité přesnosti IEEE-754, které se může odchýlit o zlomky centu podle pořadí sčítání – skutečná, zdokumentovaná třída chyb, nikoli problém pro model postavený na přesné desítkové aritmetice `Money`.

Nyní na tento součet 14 814,72 USD uplaťte standardní rezervu dopadu na rozpočet 5 % (násobitel 1,05): 14 814,72 USD × 1,05 = 15 555,456 USD – tři desetinná místa, protože násobení je přesné a není automaticky zaokrouhleno na dvě desetinná místa měny. Explicitním zaokrouhlením na 2 desetinná místa bankéřským zaokrouhlením (half-even) vznikne přesně **15 555,46 USD**.

## Souvislost se softwarovým inženýrstvím

Je to přímé, základní poučení za větou „finanční software používá `Decimal`, ne `float`“ – výslovně se napojuje na moduly tohoto repozitáře [celkové náklady vlastnictví](../celkové-náklady-vlastnictví/) a [analýza dopadu na rozpočet](../analýza-dopadu-na-rozpočet/), které obě v současnosti sčítají prosté náklady v plovoucí řádové čárce; argument správnosti zde nevyžaduje tyto modely okamžitě migrovat, ale přesně stanoví, *kdy* se systém musí srovnat na cent, a tedy nesmí pro svou peněžní aritmetiku používat binární plovoucí řádovou čárku. Viz také [přesná alokace nákladů na centy](../přesná-alokace-nákladů-na-centy/) pro doprovodný problém dělení (spíše než sčítání) součtů bez ztráty centů.

## Úskalí

- **Převod na `float` uprostřed řetězce**: vytažení peněžní hodnoty do čísla s plovoucí řádovou čárkou uprostřed výpočtu (některé knihovny `Money` tuto převodní metodu výslovně pojmenovávají například „lossy“ jako varování) tiše zahodí záruku přesnosti pro každý výpočet po tomto bodě.
- **„Decimal je příliš pomalý, než abychom se tím zabývali“**: odmítání přesné desítkové aritmetiky jako zbytečné režie, když u finančního výkaznictví záleží na správnosti a auditovatelnosti, nikoli na hrubé propustnosti.
- **Uplatnění procenta rezervy bez uvedení pravidla zaokrouhlení**: zaokrouhlení half-up versus half-even (bankéřské) může změnit konečný cent; samotná konvence zaokrouhlení musí být uvedenou, auditovatelnou volbou – viz [analýza nákladů a přínosů](../analýza-nákladů-a-přínosů/) pro pokyny Green Book HM Treasury k úpravám o rezervu a optimism bias, což je přesně ten druh údaje, na který se tento krok zaokrouhlení aplikuje.

## Zdroje

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — the `Money` pattern.
- Goldberg D. "What Every Computer Scientist Should Know About Floating-Point Arithmetic." ACM Computing Surveys, 1991.
- HM Treasury, The Green Book — optimism-bias and contingency guidance for budget-impact modelling. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
