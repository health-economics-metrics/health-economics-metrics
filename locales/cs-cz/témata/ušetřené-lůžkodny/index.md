# Ušetřené lůžkodny

Lůžkoden je jeden pacient obsazující jedno nemocniční lůžko po dobu jednoho dne. „Ušetřené lůžkodny“ – dřívějším propuštěním, odvrácením přijetí nebo virtuálními odděleními – jsou pracovním koněm přínosů v digitálních byznys případech NHS a nejčastěji nadhodnocovaným.

## Proč na tom záleží

Lůžka jsou omezujícím úzkým místem akutní péče: když se lůžka zaplní, ruší se plánované operace, sanitky stojí ve frontě a urgentní příjem se ucpává. Intervence, které uvolňují lůžkodny, proto nesou skutečnou hodnotu – ale *druh* hodnoty zcela závisí na tom, co se s uvolněným lůžkem stane. Finanční ředitelé se naučili naivní tvrzení o lůžkodnech výrazně slevovat; správná aritmetika je zkouška věrohodnosti.

## Matematika

```
Bed days saved = patients affected × Δ length of stay (or admissions avoided × avg LOS)

Value depends on the use of the freed capacity:
  refilled with elective activity → value = activity income or waiting-list benefit
  ward closed / flexed down      → value = staffing + running cost released (cash)
  absorbed as slack              → value ≈ marginal (hotel) cost only, £50–£150/day
```

Průměrné plně absorbované náklady akutní lůžkodny se často uvádějí přes 400 £ (National Cost Collection historicky ~350 £ za nadlimitní lůžkodny) – ale viz [mezní vs průměrné náklady](../mezní-vs-průměrné-náklady/): průměr téměř nikdy není úsporou.

## Řešený příklad

„Virtuální oddělení“ se vzdáleným monitorováním umožní 600 pacientům ročně odejít domů o 2 dny dříve: ušetřeno 1 200 lůžkodnů.

- **Naivní tvrzení**: 1 200 × 400 £ = 480 000 £. Nesprávné, pokud se neuzavře oddělení.
- **Poctivé tvrzení**: trust lůžka zaplní elektivními ortopedickými pacienty. 1 200 lůžkodnů ÷ průměrná délka pobytu 3 dny = 400 dalších elektivních hospitalizací po ~6 000 £ příjmu při platbě podle aktivity = **2,4 mil. £ dodatečně financované aktivity** (minus mezní náklady léčby těchto pacientů), *plus* 400 pacientů mimo čekací listinu. Provozní náklady virtuálního oddělení (350 000 £) se s tím vzájemně započtou.

Uvolněná kapacita, která se *znovu využije*, má často větší hodnotu než naivní tvrzení o hotovosti – ale je to jiný druh hodnoty a musí být tak označena ([uvolňující vs neuvolňující hotovost](../úspory-uvolňující-hotovost-vs-neuvolňující-hotovost/)).

## Souvislost se softwarovým inženýrstvím

„Ušetřené serverodny“ se chovají stejně. Vyřazení neustále běžících prostředí uvolní hotovost jen tehdy, když jsou instance ukončeny nebo rezervace vyprší; kapacita vstřebaná zpět do poolu má hodnotu svého mezního nákladu (~0 u zavázaných výdajů). Paralelní disciplína: u každé tvrzené úspory pojmenujte *mechanismus* – ukončeno, znovu zaplněno hodnotnou prací, nebo vyprchalo. Software zkracující délku pobytu v nemocnici (koordinace propouštění, vzdálené monitorování, rychlost diagnostiky) by měl modelovat všechny tři scénáře a nechat trust zvolit podle oddělení.

## Úskalí

- **Ocenění mezní kapacity průměrnými náklady** – kanonická chyba.
- **Dvojí započtení**: ušetřené lůžkodny *a* odvrácené hospitalizace *a* zkrácení čekací listiny z téhož uvolněného lůžka.
- **Předpoklad, že ušetřené dny jsou drahé dny**: dny ušetřené na konci pobytu jsou nejlevnější (nízká akutnost).

## Zdroje

- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- Economics by Design, NHS cost calculator. <https://economicsbydesign.com/tools/nhs-cost-calculator/>
