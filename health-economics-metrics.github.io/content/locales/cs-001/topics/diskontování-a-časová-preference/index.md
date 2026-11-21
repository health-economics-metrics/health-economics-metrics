# Diskontování a časová preference

Diskontování převádí budoucí náklady a přínosy na současné hodnoty, protože přínos dnes má větší hodnotu než týž přínos za pět let.

## Proč na tom záleží

Každé hodnocení health economics a každý vážný byznys případ veřejného sektoru diskontuje víceleté toky. Green Book britského HM Treasury nařizuje roční míru společenské časové preference 3,5 %; referenční případ NICE diskontuje náklady i zdravotní účinky 3,5 % ročně (s mírou 1,5 % mimo referenční případ u terapií blízkých vyléčení s přínosy přes 30 let). Pokud váš softwarový byznys případ tvrdí „úspory 5 milionů £ za 10 let“, finanční recenzent okamžitě požádá o diskontovanou hodnotu.

## Matematika

Současná hodnota budoucí částky:

```
PV = FV / (1 + r)^t

PV = present value
FV = future value in year t
r  = discount rate (NICE/Green Book: 0.035)
t  = years from now
```

Pro konstantní roční přínos B po n let (anuita):

```
PV = B × [1 − (1 + r)^(−n)] / r
```

## Řešený příklad

Váš software ušetří trustu NHS 100 000 £ ročně po dobu 5 let, počínaje rokem po spuštění.

Nediskontovaný součet: 500 000 £.

Diskontováno 3,5 %:

```
Year 1: 100,000 / 1.035^1 = £96,618
Year 2: 100,000 / 1.035^2 = £93,351
Year 3: 100,000 / 1.035^3 = £90,194
Year 4: 100,000 / 1.035^4 = £87,144
Year 5: 100,000 / 1.035^5 = £84,197

Total PV ≈ £451,505
```

Poctivým titulkem je asi 451 000 £, zhruba o 10 % méně než naivní součet. Nyní předpokládejte, že dodávka sklouzne o rok: každý člen se posune o rok později a PV klesne na asi 436 000 £ – pohled [nákladů zpoždění](../náklady-zpoždění/) skrze diskontování.

## Souvislost se softwarovým inženýrstvím

- **Splácení technického dluhu a migrace platforem** slibují toky přínosů o roky později; diskontujte je před srovnáním s prací, která se vrátí toto čtvrtletí.
- **Náklady vpředu, přínosy vzadu** je standardní tvar migrace. Diskontování tento tvar penalizuje, správně: oceňuje bezrizikovou časovou hodnotu zavázání kapacity nyní pro hodnotu později.
- **Tvrzení o „úsporách v 5. roce“** zaslouží skepsi dvojnásob – jsou zároveň silně diskontována i vysoce nejistá (viz [analýza citlivosti](../analýza-citlivosti/)).

## Úskalí

- **Diskontování nákladů, ale ne přínosů** (nebo naopak) – referenční případ diskontuje obojí stejnou mírou.
- **Použití komerční míry (8–12 %) ve veřejném případu**, nebo 3,5 % v případu financovaném rizikovým kapitálem. Přizpůsobte míru rozhodovateli.
- **Záměna diskontování s inflací.** Diskontování se vztahuje na *reálné* (inflačně očištěné) hodnoty; nedělejte obojí implicitně.

## Zdroje

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- HM Treasury Green Book, discounting supplementary guidance. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
