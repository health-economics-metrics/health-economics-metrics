# Přesná alokace nákladů na centy

Rozdělení celkové částky peněz – sdílené dotace, infrastrukturního účtu, údaje o dopadu na rozpočet – mezi několik příjemců naivní procentuální aritmetikou běžně vytvoří části, které se nesečtou zpět na původní součet. Přesná alokace na centy je oprava: celočíselná/desítková metoda pracující ve vedlejších jednotkách měny (centech), která zaručuje, že se části sečtou na *přesně* celek, bez ohledu na to, jak nerovnoměrně se dělí. Každý softwarový inženýr, který musí rozdělený součet srovnat na cent – mzdy, vyplácení dotací, přeúčtování sdílených služeb – potřebuje tento vzor, nikoli procenta v plovoucí řádové čárce.

## Proč na tom záleží

Je to pojmenovaný, základní vzor podnikového softwarového inženýrství: *Patterns of Enterprise Application Architecture* Martina Fowlera (2002) dokumentuje `Money` a `Allocate` právě proto, že „rozdělit 100 USD třemi způsoby“ je problém, ve kterém naivní kód chybuje neustále a tiše – chyba vyplave, až když někdo srovnává účetní knihy a zjistí, že části jsou o cent kratší (nebo delší) než součet. V práci health economics a financí NHS to není akademické: součty dopadu na rozpočet se dělí mezi lokality, roky nebo ředitelství; sdílené náklady na infrastrukturu a licence se rozpočítávají mezi oddělení podle počtu zaměstnanců nebo podílu aktivity. Každé z těchto dělení se musí srovnat přesně, protože finanční ředitel, jemuž jsou předloženy části, které se nesečtou na celek, přestane důvěřovat celému modelu.

## Matematika

```
Naive (broken) method:
  part_i = round(total × share_i / Σ shares)     — rounds each part independently

Exact method (largest remainder / "largest remainder allocation"):
  1. base_i = floor(total_minor_units × share_i / Σ shares)   — whole minor units (cents) only
  2. remainder = total_minor_units − Σ base_i                  — leftover cents, always < number of recipients
  3. distribute 1 extra minor unit each to the `remainder` recipients with the
     largest fractional remainder from step 1, until the leftover is exhausted

Result: Σ part_i == total, always, by construction.
```

Přesná metoda nikdy nezaokrouhluje část izolovaně – zaokrouhluje *celou alokaci* jako jednu operaci, což zajišťuje platnost invariantu součtu.

## Řešený příklad

Rozdělte 100,00 USD třemi stejnými způsoby (`shares = [1, 1, 1]`).

Naivní metoda: 100,00 USD ÷ 3 = 33,333… USD, nezávisle zaokrouhleno na nejbližší cent dává 33,33 USD pro každého příjemce. Součet: 33,33 USD × 3 = 99,99 USD – jeden cent zmizel a žádná jednotlivá řádka není natolik „špatná“, aby ji prohlídka odhalila.

Přesná metoda: `base` = 33,33 USD pro všechny tři (celkem 9 999 vedlejších jednotek z `floor(10,000 / 3) = 3,333` centů každému), zbývá zbytek 1 cent (10 000 − 9 999). Tento jediný zbylý cent jde příjemci s největším zlomkovým zbytkem při dělení – konkrétní příjemce je vnitřní detail řešení shody, na který by se volající neměl spoléhat. Dva příjemci skončí s 33,33 USD a jeden s 33,34 USD a tři části se sečtou přesně na 100,00 USD.

Je to přesně ta aritmetika, kterou [analýza dopadu na rozpočet](../analýza-dopadu-na-rozpočet/) potřebuje, kdykoli se celkový údaj o dopadu na rozpočet musí rozdělit mezi lokality, kohorty nebo finanční roky a srovnat zpět na zveřejněný součet – doprovodný problém sčítání mnoha takových položek bez driftu viz [měnově bezpečný souhrn nákladů](../měnově-bezpečný-souhrn-nákladů/).

## Souvislost se softwarovým inženýrstvím

Je to doslova „vzor Money“ z podnikové softwarové architektury – základní, pojmenovaný vzor přesně pro tuto třídu chyb, nikoli jednorázový trik. Skutečná selhání finančního srovnání byla dodána právě z této třídy chyb: procentní dělení počítaná v `f64`, zaokrouhlovaná po příjemcích a nikdy nekontrolovaná proti původnímu součtu. Napojuje se přímo na modul [celkové náklady vlastnictví](../celkové-náklady-vlastnictví/) tohoto repozitáře, který v současnosti sčítá prosté náklady v plovoucí řádové čárce napříč roky a možnostmi – stejná disciplína přesnosti platí, kdykoli se součet TCO nebo dopadu na rozpočet musí rozdělit, a nikoli jen sečíst.

## Úskalí

- **Procento-pak-zaokrouhlení místo největšího zbytku**: alokace pomocí procent v plovoucí řádové čárce se zaokrouhlením po příjemcích, které kumuluje chybu zaokrouhlení a zřídka se sečte zpět na celek, zvláště u mnoha příjemců.
- **Ignorování exponentů vedlejších jednotek měn**: předpoklad, že každá měna má 2 desetinná místa – japonský jen má 0, některé měny 3 – ručně psané procentní dělení obvykle natvrdo zadá 2 a tiše selže u jiných měn; rutina přesné alokace čte exponent z měny samotné (ISO 4217).
- **Opakovaná alokace již alokovaného zbytku**: opětovné spuštění alokační rutiny na to, co zbylo z předchozí alokace, bez kontrol idempotence, což může dvakrát připsat týž cent témuž příjemci.

## Zdroje

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — the `Money` and `Allocate` patterns.
- ISO 4217 — currency and funds code standard, which defines each currency's minor-unit exponent.
