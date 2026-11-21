# Analýza dopadu na rozpočet (BIA)

BIA odhaduje, co zavedení intervence udělá s **rozpočtem** konkrétního plátce v příštích 1–5 letech. Odpovídá na otázku *dostupnosti* (affordability); nákladová efektivita odpovídá na otázku *hodnoty*. Technologie může mít výbornou hodnotu a přesto být nedostupná – nebo být dostupná a mít slabou hodnotu. Vážná posouzení vyžadují obojí.

## Proč na tom záleží

Otázka finančního ředitele nikdy nezní „jaké je ICER?“ – zní „co to udělá s rozpočtem příštího roku?“. Pokyny ISPOR pro dobrou praxi (standard oboru) specifikují: vlastní perspektivu plátce, horizont 1–5 let, *nediskontované* roční peněžní toky, realistické křivky přijetí a scénářovou (nikoli pravděpodobnostní) nejistotu. NICE vyžaduje informace o dopadu na rozpočet vedle nákladové efektivity; produkt s celostátním dopadem na rozpočet nad ~20 mil. £/rok v Anglii spouští komerční vyjednávání bez ohledu na své ICER.

## Matematika

```
BI_year_t = Cost_scenario_with_new(t) − Cost_scenario_current(t)

Cost_scenario(t) = Σ over patient groups:
   eligible population(t) × uptake(t) × net cost per patient(t)

net cost per patient = intervention cost − displaced care cost + induced care cost
```

Klíčové modelovací volby: růst způsobilé populace, křivka přijetí (zavedení nikdy není okamžité), co nová možnost vytlačí a jakou poptávku *vyvolá* (snazší přístup → více uživatelů).

## Řešený příklad

Plátce pokrývající 2 mil. lidí zvažuje digitální terapeutikum za 300 £/pacient/rok; 1,5 % členů je způsobilých (30 000); přijetí 20 % → 40 % → 60 % během 3 let; každý uživatel vytlačí 120 £/rok jiné péče.

```
Net cost per user = 300 − 120 = £180

Year 1: 30,000 × 0.20 × 180 = £1.08M
Year 2: 30,000 × 0.40 × 180 = £2.16M
Year 3: 30,000 × 0.60 × 180 = £3.24M
```

I když je ICER produktu skvělých 8 000 £/QALY, plátce musí do 3. roku najít 3,24 mil. £ *nových peněz* – vytlačených 120 £ je rozprostřeno na jiné rozpočtové řádky a neuvolní se jako hotovost (viz [uvolňující vs neuvolňující hotovost](../úspory-uvolňující-hotovost-vs-neuvolňující-hotovost/)). Proto jsou hodnota na jednotku a dostupnost oddělené překážky.

## Souvislost se softwarovým inženýrstvím

BIA je přesně doplněk pro CFO k tvrzení o ROI na uživatele: „je to nákladově efektivní na vývojáře, ale můžeme si dovolit rozšíření napříč organizací v tomto fiskálním roce?“ Modelujte licenční pásma, S-křivku adopce, vytlačené výdaje na nástroje, které uvolní hotovost jen po skutečném ukončení starých smluv, a vyvolané užívání (levnější CI → více CI). Tříletá tabulka dopadu na rozpočet vedle ROI je to, co činí podnikový návrh nástrojů věrohodným pro finance. Rozdělení zveřejněného celkového dopadu na rozpočet mezi lokality, kohorty nebo finanční roky – tak, aby se části přesně srovnaly na zveřejněný údaj – je právě [přesná alokace nákladů na centy](../přesná-alokace-nákladů-na-centy/); sčítání mnoha řádkových položek, které celek tvoří, je [měnově bezpečný souhrn nákladů](../měnově-bezpečný-souhrn-nákladů/).

## Úskalí

- **Fantazie okamžitého přijetí**: dopad prvního roku spočtený při ustálené adopci.
- **Počítání vytlačených nákladů jako hotovosti**, když jde o rozptýlenou kapacitu.
- **Ignorování vyvolané poptávky** – zlepšení přístupu zvyšují užívání u způsobilé populace.
- **Směšování horizontů/diskontování BIA a CEA**: BIA je záměrně krátkodobá, nediskontovaná a specifická pro plátce.

## Zdroje

- Sullivan SD, et al. ISPOR BIA Good Practice II Task Force. Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
- ISPOR good practices: budget impact analysis. <https://www.ispor.org/heor-resources/good-practices/article/principles-of-good-practice-for-budget-impact-analysis-ii>
