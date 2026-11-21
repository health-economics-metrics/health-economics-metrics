# Úspory uvolňující hotovost vs neuvolňující hotovost

Úspory uvolňující hotovost snižují skutečné výdaje – rozpočtová řádka se zmenší. Úspory neuvolňující hotovost uvolňují čas nebo kapacitu, která se *znovu využije*, nikoli uloží do banky. Finanční ředitelé zdravotních systémů je považují za různé druhy – a vy také byste měli.

## Proč na tom záleží

Je to nejostřejší zkouška poctivosti aplikovaná na jakýkoli digitální byznys případ v národním zdravotním systému. Rámce přínosů NHS výslovně kategorizují každý tvrzený přínos jako uvolňující hotovost, neuvolňující hotovost nebo kvalitativní. Většina „úspor“ digitálního zdraví – minuty klinika ušetřené na pacienta, rychlejší dokumentace – je neuvolňující hotovost: hodnotná, ale nesnižuje deficit. Finanční ředitel trustu čelící mezeře ve financování může utrácet jen hotovost. Viz také [tvrdé úspory uvolňující hotovost](../tvrdé-úspory-uvolňující-hotovost/).

## Matematika

```
Cash-releasing saving   = budget line before − budget line after
                          (must be extractable: a cancelled contract, closed ward,
                           reduced agency spend, avoided purchase)

Non-cash-releasing value = time released × unit cost of that time
                          (valued at opportunity cost; the money is NOT extractable)
```

Tatáž fyzická událost (ušetřená hodina) spadne do jedné či druhé kategorie podle toho, co se stane dál:

```
hour saved → overtime/agency shift cancelled        → cash-releasing
hour saved → clinician sees one more waiting patient → non-cash-releasing (capacity)
hour saved → absorbed into slack, nothing changes    → no benefit at all
```

## Řešený příklad

Software ušetří každé ze 100 sester 30 minut na směnu. To je 100 × 0,5 × 5 směn týdně × 46 týdnů ≈ 11 500 hodin ročně. Při nákladech zaměstnavatele pásma Band 5 ~25 £/hod je lákavým titulkem 287 500 £/rok.

Poctivé rozdělení:

- 20 % času připadá tam, kde oddělení nyní platí příplatek za bankovní/agenturní personál na pokrytí přetahů dokumentace: 2 300 hodin × 35 £ agenturní sazby = **80 500 £ uvolňujících hotovost** (směny skutečně neobjednány).
- 60 % se přesune do přímé péče o pacienty: 6 900 hodin × 25 £ = **172 500 £ kapacity neuvolňující hotovost** – skutečná hodnota, vykazovaná zvlášť, nikdy nazývaná „úspory“.
- 20 % se rozplyne v přestávkách a vyrušeních: **0 £**. Nárokovat to by byla fikce.

Byznys případ, který předloží 80,5 tis. £ hotovosti + 172,5 tis. £ kapacity, je věrohodný. Ten, který předloží 287,5 tis. £ „úspor“, zamítne první účetní, který ho přečte.

## Souvislost se softwarovým inženýrstvím

Totéž platí pro ROI asistentů AI při programování: „30 minut na vývojáře denně“ je kapacita neuvolňující hotovost, pokud skutečně neklesne počet zaměstnanců, výdaje na dodavatele nebo náklady na cloud. Kategorie vykazujte zvlášť:

- Uvolňující hotovost: zrušené smlouvy s dodavateli, vyřazené licence nástrojů, snížené výdaje na cloud.
- Kapacita: dříve dodané funkce (hodnota přes [náklady zpoždění](../náklady-zpoždění/)), vypálený backlog.
- Nic: ušetřené minuty, které se roztříští do přepínání kontextu.

Sledujte také, *kam uvolněný čas skutečně zmizel* – realizace přínosů ([benefits-realization.md](../realizace-přínosů/)) existuje proto, že tvrzené zisky kapacity se při auditu často vypaří.

## Úskalí

- **Násobení minut platem a nazývání toho úsporou** – kanonický hřích.
- **Ocenění uvolněného času průměrnými plnými náklady**, když je mezní využití toho času nízkohodnotné – viz [mezní vs průměrné náklady](../mezní-vs-průměrné-náklady/).
- **Dvojí započtení téže hodiny**: jako hotovost (zrušená směna) i jako kapacita (více ošetřených pacientů).

## Zdroje

- NHS Digital connectivity business case guidance, economic case (benefit categories). <https://digital.nhs.uk/services/networks-and-connectivity-transformation-frontline-capabilities/connectivity-hub/advice-and-guidance/making-the-business-case-for-connectivity-infrastructure-investment---guidance/economic-case>
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
