# Tvrdé úspory uvolňující hotovost (obrana deficitu)

Tvrdé úspory uvolňující hotovost jsou položky, které nemocnice může aktivně **vymazat z rozpočtu příštího měsíce** díky vašemu softwaru. Pro přísného finančního účetního – a pro trust s deficitem – je to jediná třída přínosů, která se plně počítá.

## Proč na tom záleží

Mnoho trustů NHS pracuje podle plánů obnovy deficitu s intenzivním dohledem nad každou výdajovou řádkou. V tomto prostředí kapacitní přínosy a zlepšení kvality – jakkoli skutečné – mezeru nezavřou; jen hotovost. Softwarový produkt, který dokáže prokázat, že maže rozpočtové řádky, je *z pohledu CFO sám sebe financující*, což mění zadávání: rozhovor přestane být „můžeme si to dovolit?“ a stane se „můžeme si dovolit to nemít?“. Tento dokument je deficitní, ostrou stranou [úspor uvolňujících vs neuvolňujících hotovost](../úspory-uvolňující-hotovost-vs-neuvolňující-hotovost/).

## Matematika

Nejspolehlivějším cílem tvrdé hotovosti v NHS je **dočasný personál za příplatkové sazby**. Trusty zakrývají mezery interním personálem „Bank“ (placeným téměř standardními sazbami) a externím „Agency“ (často 2–3× sazby Agenda for Change, limitované, ale u vzácných rolí často překračované).

```
Hard saving = premium shifts avoided × (premium rate − substantive rate)
            + overtime hours avoided × overtime premium
            + external contracts cancelled × contract value

Mechanism requirement: name the specific budget line and the manager who
will confirm its reduction. If no one can point to the line, it isn't hard cash.
```

## Řešený příklad

Sestra pásma Band 6 ztrácí ~1 hodinu na směnu administrativní režií; dokumentace se běžně přelévá za konec směny do přesčasů a oddělení objednávají extra pokrytí Bank na dohánění dokumentace.

Software vrátí tuto hodinu do naplánované směny u 300 sester:

```
Overtime avoided:   300 nurses × 2.5 paid overtime hrs/week × £8 premium × 46 wks
                    ≈ £276,000/year
Bank/agency shifts: 15 catch-up shifts/week × £180 premium × 52
                    ≈ £140,400/year
Hard cash total     ≈ £416,000/year against a licence cost of ~£150,000
```

Každá libra je auditovatelná vůči systémům elektronického rozpisu a mezd – přesně tak by měl být přínos doložen, měsíčně, prostřednictvím [realizace přínosů](../realizace-přínosů/). (Publikované modely pracovní síly NHS tvrdily poměry až 11 £+ ušetřených na 1 £ vynaloženou tímto mechanismem; jakýkoli takový poměr berte jako hypotézu pro rozpisová data *vašeho* trustu, nikoli přenosný fakt.)

## Souvislost se softwarovým inženýrstvím

Inženýrskými ekvivalenty příplatku za agenturu jsou nouzové nákupy organizace samotné: denní sazby dodavatelů zakrývající mezery v dodání, přesčasy vyvolané incidenty, smlouvy o urychlené podpoře a panika kolem spotových cen cloudu. Software produktivity tvrdící tvrdou hotovost by měl cílit na tyto řádky se stejnou disciplínou – pojmenovat rozpočtovou řádku, vlastníka a měsíc, kdy se zmenší. Vše ostatní, co přináší, je kapacita ([kapacita vytvářející hodnotu](../kapacita-vytvářející-hodnotu/)) nebo kvalita: skutečné, hodnotné a jiné.

## Úskalí

- **Nazývání kapacity „úsporami“** – okamžitý zabiják věrohodnosti u financí; viz taxonomie v [uvolňující vs neuvolňující hotovost](../úspory-uvolňující-hotovost-vs-neuvolňující-hotovost/).
- **Poměry z modelů dodavatelů prezentované jako místní fakt** (problém 11 £:1 £) – přestavte model na vlastních rozpisových datech trustu.
- **Záměna jednorázového a opakujícího se**: zrušená smlouva ušetří svou hodnotu jednou ročně, nikoli jednou; smazané místo ušetří plat jen po dobu, kdy zůstane smazané.

## Zdroje

- NHS England, reducing agency spend in the NHS. <https://www.england.nhs.uk/long-read/reducing-agency-spend-in-the-nhs/>
- NHS Digital business case guidance, economic case. <https://digital.nhs.uk/services/networks-and-connectivity-transformation-frontline-capabilities/connectivity-hub/advice-and-guidance/making-the-business-case-for-connectivity-infrastructure-investment---guidance/economic-case>
