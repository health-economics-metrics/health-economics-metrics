# Celkové náklady vlastnictví (TCO)

TCO jsou plné náklady systému po celou jeho životnost: pořízení nebo vývoj, integrace, provoz, údržba, podpora, školení a vyřazení. Nepříjemná základna: **údržba tvoří 50–80 % TCO softwaru** – zhruba tři čtvrtiny nákladů za celou životnost přicházejí *po* spuštění.

## Proč na tom záleží

Hodnocení zdravotnických technologií se dávno naučilo, že cena léku není jeho náklad – podání, monitorování a zvládání nežádoucích účinků patří všechno do modelu. Softwarové byznys případy, které počítají jen náklady na vývoj/licenci, opakují chybu naivní ceny léku a systematicky podhodnocují nákladovou stranu každého [ICER](../inkrementální-poměr-nákladové-efektivity/) a [dopadu na rozpočet](../analýza-dopadu-na-rozpočet/), které krmí. Pro zadávání v NHS je disciplína TCO tím, co činí tvrzení o nákladové efektivitě digitálního produktu poctivým – a právě zde levně vypadající možnosti prohrávají.

## Matematika

```
TCO = initial cost (build/licence + integration + data migration + training)
    + Σ_t [operations + maintenance + support + infrastructure + upgrades
           + compliance/assurance]_t / (1 + r)^t
    + decommissioning cost (exit, data extraction, parallel running)
Horizon: 3–5 years commercial, system-lifetime for clinical infrastructure
r: 3.5% public sector (Green Book), 8–12% commercial
Benchmarks: annual maintenance ≈ 15–20% of build cost; ~78% of lifetime
TCO post-launch; ignore decommissioning and vendor lock-in prices itself.
```

## Řešený příklad

Dvě možnosti systému elektronických pozorování, horizont 5 let:

```
                        Vendor SaaS     In-house build
Year 0 (licence/build)  £250,000        £900,000
Integration + training  £180,000        £150,000
Annual run (yrs 1–5)    £120,000/yr     £190,000/yr  (hosting + 1.5 FTE maint.)
Exit/decommission       £60,000         £30,000
Undiscounted TCO        £1,090,000      £2,030,000
```

Inženýrský odhad varianty vývoje (900 tis. £) tvořil jen 44 % jejího skutečného TCO – a odhady vývoje samy typicky přesahují o 30–40 % (viz [vyrobit, nebo koupit](../vyrobit-nebo-koupit/)). Pokud interní možnost nepřináší podstatně odlišné *výsledky*, platí logika [minimalizace nákladů](../analýza-minimalizace-nákladů/) a SaaS vyhrává o ~940 tis. £.

## Souvislost se softwarovým inženýrstvím

Inženýři podceňují data o údržbě vlastního oboru, když obhajují vývoj: pravidlo roční údržby 15–20 % nákladů na vývoj znamená, že každý systém za 1 mil. £ tiše zavazuje 150–200 tis. £/rok budoucí kapacity – závazek, který patří do téže mentální rozvahy jako [technický dluh](../technický-dluh/). TCO je také nákladovou polovinou každé metriky v tomto repozitáři: náklady na nasazení, [jednotková ekonomika cloudu](../jednotková-ekonomika-cloudu/) a disciplína jmenovatele, kterou HTA vynucuje na sponzorech léků. Když je cena vašeho produktu zpochybněna, srovnání TCO zahrnující skutečné provozní náklady stávajícího řešení je obvykle nejsilnějším dostupným přerámováním. Víceletý údaj TCO jako výše je součtem mnoha nákladových položek v čase – proč má být tento součet přesně desítkový, nikoli v plovoucí řádové čárce, jakmile se model musí srovnat na penny, viz [měnově bezpečný souhrn nákladů](../měnově-bezpečný-souhrn-nákladů/) a pro rozdělení součtu TCO mezi nákladová střediska bez ztráty penny viz [přesná alokace nákladů na centy](../přesná-alokace-nákladů-na-centy/).

## Úskalí

- **Ukotvení na nákladech spuštění**: srovnávání možností podle nákladů v roce 0, když se pořadí do 3. roku obrátí.
- **Klam zdarma interní práce**: interní údržba oceněná nulou, protože „tým je už zaplacen“ – viz [náklady obětované příležitosti](../náklady-obětované-příležitosti/).
- **Ignorování nákladů na odchod**: výstup dat, ukončení smlouvy a paralelní provoz jsou místa, kde „levné“ SaaS zdraží.
- **Porušení stejného horizontu**: srovnání 3letého TCO SaaS s 10letou amortizací vývoje (viz [časový horizont](../časový-horizont/)).

## Zdroje

- IBM, total cost of ownership. <https://www.ibm.com/think/topics/total-cost-of-ownership>
- Software maintenance cost benchmarks. <https://pegotec.net/software-maintenance-cost-percentage-2026-industry-benchmarks/>
