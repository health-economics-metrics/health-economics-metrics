# Rychlá cesta DiGA v Německu

DiGA (Digitale Gesundheitsanwendungen) je německá zákonná cesta „aplikací na předpis“ – první národní systém na světě, kde lékaři předepisují schválené zdravotní aplikace a zákonné pojištění je musí hradit. Je to přední živý experiment s placením digitálních terapeutik v národním měřítku.

## Proč na tom záleží

DiGA odpověděla na otázku, kterou si klade každá firma digitálního zdraví – „kdo vlastně zaplatí?“ – legislativou (DVG, 2019). Návrh je pozoruhodný:

- **Rychlé rozhodnutí**: BfArM (regulátor) musí rozhodnout do 3 měsíců.
- **Předběžné zařazení**: aplikace mohou být zařazeny na 12 měsíců, *zatímco stále generují důkazy* – vydělávají během pivotní studie.
- **Termín pro důkazy**: prokázat „pozitivní účinek na zdravotní péči“ (zdravotní přínos nebo pacientsky relevantní strukturální/procesní zlepšení) srovnávací studií – obvykle RCT – jinak vyřazení. Zhruba polovina předběžných záznamů se nepodaří převést.
- **Cena**: výrobce volně stanoví cenu v 1. roce; poté se vyjednává se svazem pojišťoven. Medián počátečních tříměsíčních cen kolem 500 €; prvky cenotvorby podle výkonu přicházejí od roku 2026.

Kontrola reality trhu (výzkum do konce roku 2024): ~68 zařazených aplikací, >1 mil. kumulativních předpisů, ~81 % předpisů aktivováno, ~234 mil. € kumulativních výdajů pojišťoven – skutečný trh, ale skromný oproti humbuku, a adherence po aktivaci zůstává slabým místem.

## Matematika

Komerční model, který počítá každý zakladatel DiGA:

```
Revenue = prescriptions × activation rate × price per prescription period
Evidence cost = pivotal RCT (typically €1M–3M) within the 12-month window
Expected value = P(evidence succeeds) × steady-state revenue − evidence cost

With ~50% conversion failure, P must be honestly assessed — half the field
spends the RCT money and loses the listing.
```

## Řešený příklad

Aplikace pro zvládání deprese se předběžně zařadí za 450 €/čtvrtletí:

```
Year 1: 20,000 prescriptions × 81% activation × €450 ≈ €7.3M revenue
RCT cost: €2M, running concurrently
Outcome A (evidence positive): permanent listing, negotiated price ~€380,
  steady state 60,000 scripts/yr ≈ €18.5M/yr
Outcome B (evidence fails): delisted at month 12; revenue stops.
```

Předběžný rok financuje generování důkazů – hlavní inovace cesty. Porovnejte tradiční pořadí (nejprve důkazy, příjmy o roky později), které vyhladovuje právě ty produkty, které DiGA chce mít.

## Souvislost se softwarovým inženýrstvím

Vzor DiGA – **předběžné přijetí s předem registrovanou metrikou úspěchu a automatickým ukončením** – lze přímo zkopírovat do správy inženýrských nástrojů: nasaďte nástroj reálným uživatelům na 12 měsíců, předem zaregistrujte metriku (změřený ušetřený čas, snížení incidentů), automaticky vyprší, pokud se neobjeví důkazy. Řeší paradox pilotu (nástroje, které potřebují měřítko k prokázání hodnoty, měřítko nikdy nedostanou), aniž by nezprokázané technologii udělovalo trvalou jistotu. Data o 81% aktivaci/nízké adherenci nesou i produktové poučení: předpis (nebo mandát vedení) přinese instalace; trvalé užívání přinese jen kvalita produktu – viz [adherence a perzistence](../adherence-a-perzistence/).

## Úskalí

- **Považování zařazení za cílovou čáru** – předpisy vyžadují důvěru předepisujících; mnoho zařazených DiGA vidí zanedbatelný objem.
- **Poddimenzování pivotní studie** kvůli úspoře peněz během roku příjmů – falešná úspora, která vysvětluje velkou část 50% míry neúspěchu.
- **Přenos modelu bez plátce**: DiGA funguje, protože úhrada je zákonná; kopie bez nařízené platby je jen pilotní program.

## Zdroje

- Analysis of the DiGA market, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
- DiGA pricing trends, npj Digital Medicine 2025. <https://www.nature.com/articles/s41746-025-01879-6>
- BfArM, Digital Health Applications. <https://www.bfarm.de/EN/Medical-devices/Tasks/DiGA-and-DiPA/Digital-Health-Applications/_node.html>
