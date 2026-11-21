# Délka pobytu (LOS)

Délka pobytu je počet dnů od přijetí do nemocnice po propuštění – základní metrika efektivity toku lůžkové péče. Britské akutní průměry se pohybují kolem 4–5 dnů; každý nadbytečný den spotřebovává vzácné lůžko a vystavuje pacienta nemocničním rizikům.

## Proč na tom záleží

LOS řídí téměř vše v ekonomice akutních nemocnic: kapacitu lůžek, propustnost plánované péče, tok urgentní péče, personální obsazení. Snížení průměrné LOS i o zlomky dne ve velkém měřítku uvolňuje obrovskou kapacitu (viz [ušetřené lůžkodny](../ušetřené-lůžkodny/)). LOS je také signálem kvality v obou směrech – příliš dlouhá naznačuje selhání procesu (zpožděná diagnostika, papírování při propuštění, čekání na sociální péči); příliš krátká může znamenat předčasné propuštění, které se později projeví jako [rehospitalizace](../míra-rehospitalizace/).

## Matematika

```
LOS (per spell)  = discharge date − admission date
Average LOS      = occupied bed days / discharges (report mean AND median;
                   LOS is heavily right-skewed by long-stay outliers)

Comparisons require case-mix adjustment (age, diagnosis, acuity),
or you are measuring who the hospital admits, not how it performs.
```

Littleův zákon propojuje proměnné toku: `beds occupied = admission rate × average LOS` – tentýž zákon, který řídí softwarové fronty (viz [metriky toku](../metriky-toku/)).

## Řešený příklad

Trust přijímá 40 akutních interních pacientů denně při průměrné LOS 6,0 dne: 240 trvale obsazených lůžek (40 × 6). Software koordinace propouštění (sledování úkolů, automatizace lékárny pro předání léků, rezervace dopravy) zkrátí neklinický ocas pobytů v průměru o 0,4 dne.

```
Beds needed = 40 × 5.6 = 224 → 16 beds freed continuously
            = 16 × 365 = 5,840 bed days/year
```

Oceňte 5 840 lůžkodnů podle mechanismu (znovu zaplnit/zavřít/slack) podle [ušetřených lůžkodnů](../ušetřené-lůžkodny/). Všimněte si, co se pohnulo: ne medicína, ale *čekání* – pacient byl zdravotně způsobilý; systém stále vyřizoval papíry. Je to problém front a software je na problémy front dobrý.

## Souvislost se softwarovým inženýrstvím

LOS je cycle time nemocnice a playbook zlepšování je totožný s prací na toku dodávky: instrumentujte fáze (přijetí → léčba → zdravotně způsobilý → skutečně propuštěn), najděte, kde se čas hromadí (jsou to předání), odstraňte stavy čekání místo přidávání kapacity. Kohorta „zdravotně způsobilých k propuštění, ale stále obsazujících lůžko“ je nemocniční verze PR schváleného, ale nesloučeného. Přímé softwarové příležitosti: orchestrace úkolů propuštění, rychlost diagnostiky, e-předpisy léků při propuštění, integrace doporučení do sociální péče.

## Úskalí

- **Vykazování pouze průměru** – dominují odlehlé hodnoty; klesající průměr může skrývat rostoucí ocas dlouhých pobytů.
- **Žádná úprava na případový mix** v tvrzeních před/po: prahy přijetí se mění sezónně i dlouhodobě.
- **Snížení LOS, které se znovu objeví jako rehospitalizace** – tvrzení o LOS vždy spárujte s daty o 30denních rehospitalizacích.

## Zdroje

- OECD, length of hospital stay indicator. <https://www.oecd.org/en/data/indicators/length-of-hospital-stay.html>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
