# Počet pacientů nutných k léčbě (NNT)

NNT je počet pacientů, kteří musí dostat intervenci, aby měl prospěch **jeden** další pacient, za uvedené časové období. Převádí procentuální snížení rizika – které klame – na jednotky úsilí na přínos, o kterých může uvažovat každý.

## Proč na tom záleží

„Snižuje infarkty o 25 %!“ zní rozhodně. Pokud je základní riziko 4 % za 5 let, absolutní snížení je 1 procentní bod, takže **100 lidí musí užívat lék 5 let, aby měl prospěch 1** – a všech 100 platí náklady a nežádoucí účinky. NNT je protilátkou marketingu relativního rizika, proto jím medicína založená na důkazech začíná. Statiny v primární prevenci: NNT ≈ 50–100 za 5 let na odvrácený infarkt. Jeho zrcadlo, **NNH** (number needed to harm), počítá, kolik léčených připadá na jednoho poškozeného.

## Matematika

```
ARR = control event rate − treatment event rate   (absolute risk reduction)
NNT = 1 / ARR
NNH = 1 / (harm rate_treatment − harm rate_control)
Economic bridge:
cost per event prevented = NNT × cost per treatment course
```

Vždy uveďte časový rámec a základní populaci – NNT je bez obou bezvýznamné.

## Řešený příklad

Systém predikce pádů v nemocnici označí vysoce rizikové pacienty pro intervenci (senzory u lůžka, revize, dohled). Studie: pády se zraněním klesnou z 3,2 % na 2,4 % přijetí.

```
ARR = 0.8 percentage points → NNT = 1/0.008 = 125
   (125 patients must get the intervention bundle to prevent 1 injurious fall)
Intervention cost ≈ £40/patient → cost per fall prevented = 125 × 40 = £5,000
Cost of an injurious inpatient fall (extra stay, imaging, litigation) ≈ £12,000
Net: prevention pays ~2.4:1 — and the QALY gain is on top.
```

Všimněte si, jak NNT drží tvrzení poctivé: „snižuje pády o 25 %“ a „zabrání jednomu pádu na 125 léčených pacientů“ jsou týž výsledek, přesvědčivý odlišně.

## Souvislost se softwarovým inženýrstvím

NNT je správnou jednotkou pro každou bránu nebo kontrolu, která působí na mnoho položek, aby zachytila málo: **„počet PR, které musí projít bránou AI revize, aby zachytily jednu vadu mířící do produkce.“** Pokud brána přezkoumá 400 PR na jeden skutečný záchyt (NNT = 400) při 4 minutách pozornosti vývojáře na každý, jeden záchyt stojí ~27 vývojářských hodin – nyní to porovnejte s náklady incidentu, kterému zabrání. NNH se promítá do falešně pozitivních: kolik PR připadá na jedno *falešné* označení a kolik stojí každé v pozornosti a důvěře? Nástroje ve stylu screeningu (lintery, bezpečnostní skenery, detekce anomálií) by se měly dodávat s aritmetikou NNT/NNH – proč nízká prevalence činí tato čísla brutálními, viz [ekonomika screeningu](../ekonomika-screeningu/). [Počet vyšetřených nutných k odvrácení případu](../počet-vyšetřených-nutných-k-odvrácení-jednoho-případu/) je analogické číslo o úroveň výše, pro celý program vyšetření a léčby, nikoli pro samotnou léčbu.

## Úskalí

- **Žádný časový rámec**: „NNT = 50“ neznamená nic; „NNT = 50 za 5 let“ je tvrzení.
- **Přenos základního rizika**: NNT spočtené ve vysoce rizikové populaci studie se v nízkorizikové populaci nasazení hroutí.
- **Ignorování NNH** – brána s NNT 400 a NNH 3 je generátor obtěžování, nikoli bezpečnostní systém.

## Zdroje

- Laupacis A, Sackett DL, Roberts RS. "An assessment of clinically useful measures of the consequences of treatment." NEJM 1988. <https://pubmed.ncbi.nlm.nih.gov/3374545/>
- TheNNT explained. <https://www.thennt.com/thennt-explained/>
