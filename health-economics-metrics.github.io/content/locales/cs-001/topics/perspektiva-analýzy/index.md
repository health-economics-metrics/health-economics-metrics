# Perspektiva analýzy

Perspektiva určuje, *čí* náklady a přínosy se v ekonomické analýze počítají: plátce, poskytovatele, nebo společnosti jako celku. Táž intervence může z jedné perspektivy vypadat skvěle a z jiné příšerně.

## Proč na tom záleží

Každé ekonomické hodnocení musí perspektivu deklarovat předem, protože perspektiva určuje, které položky existují:

- **Perspektiva plátce** (např. komisař NHS, pojišťovna): pouze náklady, které plátce hradí.
- **Perspektiva poskytovatele** (např. nemocniční trust): interní náklady na poskytování, personál, nemovitosti.
- **Společenská perspektiva**: vše – včetně času pacientů, cestování, neformální péče rodiny a ztrát produktivity zaměstnavatelů.

Referenční případ NICE používá pro náklady perspektivu **NHS a osobních sociálních služeb (PSS)**. Americký Second Panel on Cost-Effectiveness doporučuje uvádět analýzu zdravotnického sektoru i společenskou analýzu se „soupisem dopadů“ (impact inventory) uvádějícím, co je zahrnuto.

## Matematika

Žádný vzorec – pravidlo vymezení uplatněné před jakoukoli matematikou:

```
Included cost/benefit categories = f(perspective)
```

Užitečná kontrola: sestavte tabulku soupisu dopadů s jedním řádkem na každý náklad/přínos a jedním sloupcem na každou perspektivu a označte, které buňky se počítají.

## Řešený příklad

Aplikace pro kontrolu příznaků odkloní ročně 10 000 návštěv praktického lékaře k sebepéči.

- **Plátce (NHS)**: ušetří 10 000 × 42 £ za konzultaci praktického lékaře = **420 000 £/rok** – silně pozitivní.
- **Poskytovatel (ordinace praktického lékaře)**: pokud jsou ordinace placeny kapitací, jejich příjem se nemění, ale zátěž klesá – mírně pozitivní.
- **Společnost**: přidejte ušetřený čas cestování a čekání pacientů, řekněme 10 000 × 2 hodiny × 15 £/hod = 300 000 £ hodnoty času; ale odečtěte újmu, pokud je 2 % falešně uklidněno a později se dostaví nemocnější, při 200 × 3 000 £ = 600 000 £ dodatečné léčby. Společenský čistý výsledek: 420 000 + 300 000 − 600 000 = **120 000 £/rok** – pozitivní, ale ovládaný předpokladem o bezpečnosti.

Táž aplikace, tři různé odpovědi. Deklarace perspektivy je to, co dělá čísla srovnatelnými a poctivými.

## Souvislost se softwarovým inženýrstvím

I ROI nástrojů a platforem má perspektivy:

- **Rozpočet týmu („plátce“)**: vejde se licenční poplatek do mého nákladového střediska?
- **Platformní organizace („poskytovatel“)**: celkové náklady včetně integrace, podpory a údržby.
- **Společnost („společenská“)**: zahrňte dopad na zákazníky, bezpečnostní externality a čas každého dotčeného týmu.

CI nástroj, který je levný pro nakupující tým, ale přesouvá migrační práci na 40 dalších týmů, je softwarová verze přesouvání nákladů – viditelná jen z širší perspektivy. Perspektivu uveďte v každém byznys případu; recenzenti nemohou zpochybnit předpoklady, které nevidí.

## Úskalí

- **Tiché střídání perspektiv**: počítat společenské přínosy, ale jen náklady plátce, způsobí, že cokoli vypadá nákladově efektivně.
- **Dvojí započtení** při slučování perspektiv (např. započtení ušetřené návštěvy praktického lékaře jak jako úspory plátce, tak jako úspory času pacienta, když údaj plátce už zahrnuje čas personálu).
- **Ignorování přesouvání nákladů**: „úspory“, které jen přesunou náklad na pacienty, pečovatele nebo jiné oddělení.

## Zdroje

- Sanders GD, et al. "Recommendations for Conduct, Methodological Practices, and Reporting of Cost-effectiveness Analyses: Second Panel on Cost-Effectiveness in Health and Medicine." JAMA 2016. <https://jamanetwork.com/journals/jama/fullarticle/2552214>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
