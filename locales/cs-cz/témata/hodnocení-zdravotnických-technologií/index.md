# Hodnocení zdravotnických technologií (HTA)

HTA je formální, institucionalizovaný proces, kterým zdravotní systémy rozhodují, zda technologie – lék, prostředek nebo software – stojí za zaplacení. Kombinuje důkazy o klinické účinnosti s ekonomickým hodnocením podle zveřejněné, povinné metodiky.

## Proč na tom záleží

Pokud prodáváte národní zdravotní službě, orgán HTA může doslova rozhodnout o vašem přístupu na trh. Znát místní proces znamená znát svého skutečného regulátora hodnoty:

- **NICE (Anglie)**: zákonná posouzení podle definovaného *referenčního případu* – QALY z [EQ-5D](../eq-5d/), [perspektiva](../perspektiva-analýzy/) NHS+PSS, [diskontování](../diskontování-a-časová-preference/) 3,5 %, vyžadovaná [PSA](../pravděpodobnostní-analýza-citlivosti/) – posuzováno proti 20–30 tis. £/QALY s [modifikátory závažnosti](../deficit-qaly-a-modifikátory-závažnosti/); vysoce specializované technologie až 100 tis. £+ s vážením.
- **ICER (USA, nevládní)**: zprávy o důkazech s *cenovým benchmarkem zdravotního přínosu* – cenou, při níž by byl produkt nákladově efektivní při 100–150 tis. USD na QALY/evLYG – používanou jako vyjednávací páka; plus „varování o dostupnosti“ z dopadu na rozpočet.
- **Kanada (CADTH → CDA-AMC)**: přezkumy úhrad při ≈50 tis. CAD/QALY; historicky žádaly snížení ceny u ~95 % podání.

## Matematika

Síla HTA není vzorec, ale **povinná metoda**: každé podání počítá totéž [ICER](../inkrementální-poměr-nákladové-efektivity/) podle týchž pravidel referenčního případu, takže výsledky jsou srovnatelné napříč produkty a lety. Referenční případ specifikuje míru výsledku, nástroj užitku, perspektivu, výběr komparátoru, diskontní míru, časový horizont a analýzu nejistoty – odstraňuje každý stupeň volnosti, který by sponzor mohl zneužít.

## Řešený příklad

Digitální terapeutikum se podává k hodnocení ve stylu NICE:

```
Model: ΔC = +£450/patient, ΔE = +0.03 QALYs → ICER = £15,000/QALY ✓ under £20k
Reference-case checks:
  utilities from EQ-5D-5L with UK value set              ✓
  comparator = current care pathway (not "no treatment") ✓
  PSA: 71% probability cost-effective at £20k            ✓ (reported)
  severity modifier: shortfall below ×1.2 bounds         — none claimed
Recommendation: routine commissioning, with real-world data collection.
```

Preferovaná analýza samotného sponzora ukázala 9 000 £/QALY; referenční případ ji posunul na 15 000 £ vynucením poctivého komparátoru. Ten rozdíl je *důvodem*, proč referenční případy existují.

## Souvislost se softwarovým inženýrstvím

Přenositelným artefaktem je **interní referenční případ**: jedna povinná metoda pro všechny byznys případy nástrojů/platforem – deklarovaný komparátor, standardní jednotkové náklady (vzor viz [národní tarif a jednotkové náklady](../národní-tarif-a-jednotkové-náklady/)), pevná diskontní míra, povinná analýza citlivosti, standardní šablona. „Dosje typu AMCP pro nástroje“ předložené platformní radě činí návrhy srovnatelnými a hrátky viditelnými, přesně jako HTA pro medicínu. Začněte menší než NICE: dvoustránková šablona plus zveřejněný ceník je lepší než žádný standard.

K tomu, jak se vícecyklový model HTA skutečně simuluje kohortu po cyklu, viz [Markovova kohortová simulace](../markovova-kohortová-simulace/).

## Úskalí

- **Pojímání HTA jako formality po regulačním schválení** – schválení CE/UKCA/FDA říká, že produkt je bezpečný; HTA rozhoduje, zda ho *stojí za to koupit*. Jiná překážka, jiné důkazy.
- **Budování ekonomického modelu po studii** – generování důkazů by se mělo navrhovat zpětně od požadavků referenčního případu.
- **Ignorování rozdílů jurisdikcí**: ICER financovatelné v USA při 120 tis. USD/QALY neprojde u NICE při 30 tis. £; plánujte důkazy a ceny podle trhu.

## Zdroje

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER 2023 Value Assessment Framework. <https://icer.org/our-approach/methods-process/value-assessment-framework/>
- Canada's Drug Agency (CDA-AMC). <https://www.cda-amc.ca/>
