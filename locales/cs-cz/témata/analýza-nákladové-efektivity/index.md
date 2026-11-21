# Analýza nákladové efektivity (CEA)

CEA porovnává náklady alternativních intervencí vůči jedinému výsledku měřenému v **přirozených jednotkách** – roky života, odhalené případy, odvrácené hospitalizace, mmHg snížení krevního tlaku. Jejím výstupem jsou náklady na jednotku výsledku.

## Proč na tom záleží

CEA je pracovním koněm srovnání, když všechny možnosti míří na stejný výsledek. Odpovídá na „který z těchto způsobů dosažení X je nejlepším využitím peněz?“ – ale *ne* na „vyplatí se X vůbec dosahovat?“ (to vyžaduje [analýzu nákladů a přínosů](../analýza-nákladů-a-přínosů/)) a *ne* na „jak se X srovnává s nesouvisejícími prioritami?“ (to vyžaduje [analýzu nákladů a užitku](../analýza-nákladů-a-užitku/) a obecný výsledek jako QALY).

## Matematika

Srovnávací statistikou je [ICER](../inkrementální-poměr-nákladové-efektivity/) v přirozených jednotkách:

```
ICER = (Cost_A − Cost_B) / (Effect_A − Effect_B)
     = £ per additional case detected / admission avoided / etc.
```

Postup: definujte jednotku výsledku; oceňte každou možnost ze stejné [perspektivy](../perspektiva-analýzy/) na stejném [časovém horizontu](../časový-horizont/); vyřaďte dominované možnosti ([hranice efektivity](../dominance-a-hranice-efektivity/)); spočtěte inkrementální poměry podél hranice.

## Řešený příklad

Tři způsoby, jak najít nediagnostikovanou fibrilaci síní v populaci 100 000:

```
Option                    Cost        Cases found
Opportunistic pulse checks £150,000       300
Pharmacy screening events  £400,000       520
Wearable-based screening   £900,000       610

ICER pharmacy vs pulse:  (400k−150k)/(520−300) = £1,136 per additional case
ICER wearable vs pharmacy:(900k−400k)/(610−520) = £5,556 per additional case
```

Zda se 5 556 £ za další případ „vyplatí“, závisí na hodnotě nalezeného případu (prevence mrtvice dále po proudu) – CEA možnosti seřadí, ale rozhodnutí o zavedení potřebuje toto vnější ocenění. Všimněte si, že *průměrné* náklady na případ u varianty s nositelnou elektronikou (900 tis./610 = 1 475 £) vypadají dobře; *inkrementální* 5 556 £ je poctivé číslo pro rozhodnutí o rozšíření.

## Souvislost se softwarovým inženýrstvím

CEA je správnou šablonou vždy, když možnosti sdílejí jeden výsledek: náklady na odstraněný nestabilní test napříč třemi přístupy k nápravě; náklady na odvrácený incident napříč dodavateli pozorovatelnosti; náklady na úspěšné nasazení napříč architekturami CI. Disciplína, kterou vynucuje – jedna deklarovaná jednotka výsledku, inkrementální (ne průměrné) poměry, nejprve vyřazené dominované možnosti – zabije většinu špatných srovnání dodavatelů dřív, než začne diskuse o cenách.

## Úskalí

- **Srovnávání možností s různými výsledky** („nalezené případy“ vs „spokojenost“) v jedné CEA – to vyžaduje [analýzu nákladů a důsledků](../analýza-nákladů-a-důsledků/) nebo obecný výsledek.
- **Průměrné poměry nákladové efektivity** uváděné tam, kde jsou potřeba inkrementální (příklad s nositelnou elektronikou výše).
- **Jednotky výsledku vybrané pro lichotku**: „vygenerovaná upozornění“ je výstup, nikoli výsledek; trvejte na jednotkách, které nesou hodnotu.

## Zdroje

- CDC POLARIS: cost-effectiveness analysis. <https://www.cdc.gov/policy/polaris/economics/cost-effectiveness/index.html>
- York Health Economics Consortium glossary. <https://yhec.co.uk/glossary/cost-effectiveness-analysis/>
