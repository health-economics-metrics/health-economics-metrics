# Mezní vs průměrné náklady

Průměrné náklady jsou celkové náklady dělené počtem vyrobených jednotek. Mezní náklady jsou náklady na výrobu jedné *další* jednotky. Rozhodnutí by se měla činit podle mezních nákladů – ale zveřejněné jednotkové náklady jsou téměř vždy průměry.

## Proč na tom záleží

Nejčastější chybou v byznys případech digitálního zdraví je ocenění ušetřeného zdroje jeho **průměrnými** náklady, když skutečnou úsporou jsou **mezní** náklady. Nemocniční lůžkoden má průměrné (plně absorbované) náklady 400 £+, ale uvolnění jednoho lůžkodne neušetří 400 £ – budova, topení a většina nákladů na personál pokračují. Skutečně uvolněná hotovost může být 50–150 £, pokud se neuvolní dost lůžek na uzavření oddělení.

## Matematika

```
Average cost:  AC = TC / Q
Marginal cost: MC = dTC/dQ   (cost of one more/one fewer unit)

TC = total cost, Q = quantity
```

Fixní náklady způsobují MC < AC při snižování kapacity a MC se může blížit nule, když existuje volná kapacita. Tvrzení o úsporách by měla používat:

```
True saving = ΔQ × MC          (small changes)
True saving = step change in TC (large changes that cross a capacity threshold, e.g. closing a ward)
```

## Řešený příklad

Váš software snižuje průměrnou délku pobytu a uvolňuje v trustu 1 000 lůžkodnů ročně.

- **Naivní tvrzení**: 1 000 × 400 £ průměrných nákladů = **400 000 £ ušetřeno**. Nesprávné.
- **Mezní tvrzení**: variabilní náklady na lůžkoden (jídlo, prádlo, spotřební materiál, určitá flexibilita ošetřovatelů) ≈ 120 £. Úspora = 1 000 × 120 £ = **120 000 £**, *plus* hodnota uvolněné kapacity, pokud se lůžka znovu zaplní čekajícími elektivními pacienty (příjem při platbě podle aktivity, nebo zkrácení čekací listiny).
- **Tvrzení o skokové změně**: pokud trust uvolní 7 300 lůžkodnů ročně (oddělení s 20 lůžky), může oddělení skutečně zavřít: personál + provoz ≈ 1,5 mil. £/rok skutečné hotovosti. Nyní je matematika průměrných nákladů blíže pravdě.

Táž intervence, tři obhajitelná čísla, podle toho, zda změna překročí kapacitní schod.

## Souvislost se softwarovým inženýrstvím

Ekonomika cloudu je přirozeně územím mezních nákladů:

- Mezní náklad jednoho dalšího běhu CI na již rezervované kapacitě je ≈ 0 £, zatímco průměrný náklad na běh (celkové výdaje platformy ÷ běhy) mohou být libry. Systémy chargeback účtující průměrné náklady vedou týmy k podvyužívání sdílené kapacity, která je na hraně ve skutečnosti zdarma.
- Naopak „ušetřili jsme 30 % výpočtů“ uvolní hotovost jen tehdy, když se instance skutečně ukončí nebo se sníží rezervace – softwarová verze pasti lůžkodnů. Viz [úspory uvolňující vs neuvolňující hotovost](../úspory-uvolňující-hotovost-vs-neuvolňující-hotovost/).

## Úskalí

- **Ocenění kapacity průměrnými náklady** a prezentace jako hotovosti (klasika).
- **Předpoklad konstantních mezních nákladů.** Skokově se mění na hranicích kapacity (uzavření oddělení, licenční pásma, závazky rezervovaných instancí).
- **Použití mezních nákladů pro rozšíření, ale průměrných pro zúžení** ve stejném případu – vybírejte podle skutečného rozhodnutí.

## Zdroje

- York Health Economics Consortium glossary: marginal cost. <https://yhec.co.uk/glossary/marginal-cost/>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
