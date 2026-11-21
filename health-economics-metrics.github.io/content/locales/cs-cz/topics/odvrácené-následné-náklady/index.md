# Odvrácené následné náklady

Odvrácené následné náklady (kompenzace nákladů, cost offsets) jsou budoucí výdaje na léčbu, kterým se předešlo dřívějším nebo lepším zásahem, odečtené od vlastních nákladů intervence. Kompenzace jsou mechanismem, jímž se intervence může stát *dominantní* – levnější **a** lepší – a zároveň jsou nejvíce dvojitě započítávanou a nejvíc přehnaně uplatňovanou řádkou v health economics.

## Proč na tom záleží

Téměř každá hodnotová nabídka digitálního zdraví obsahuje tvrzení o kompenzaci: „naše aplikace předchází hospitalizacím“, „naše upozornění zabraňují zhoršení“, „naše platforma se vyhne duplicitním testům“. Když jsou kompenzace skutečné, mění ekonomiku (viz řešený příklad [ICER](../inkrementální-poměr-nákladové-efektivity/), kde kompenzace 600 tis. £ případ zachrání). Plátci to vědí – proto tvrzení o kompenzaci přitahují nejtvrdší kontrolu v každém posouzení. Pravidla věrohodnosti níže oddělují financovatelný model od marketingu.

## Matematika

```
Net cost = intervention cost − Σ offsets

A valid offset must be:
  Attributable — causally linked to the intervention (comparator evidence)
  Marginal     — the money actually stops being spent, at marginal not
                 average cost (see marginal-vs-average-cost.md)
  Probability- — weighted by P(the downstream event would have occurred)
  weighted
  Discounted   — future avoided costs at present value
  Unique       — counted once, in one benefit line
```

## Řešený příklad

„Tvrzení o riziku migrace, provedené správně“: aplikace pro sledování ran u 5 000 pooperačních pacientů tvrdí, že odvrátí rehospitalizace kvůli infekci.

```
Baseline readmission for infection: 4.0% ; with app (RCT): 3.1%
Attributable events avoided = 5,000 × 0.009 = 45/year
Cost per readmission spell (marginal, this trust): £3,200
Offset = 45 × 3,200 = £144,000/year
App cost = 5,000 × £20 = £100,000/year
Net cost = −£44,000 → genuinely cost-saving, with:
  attribution from an RCT ✓  marginal costing ✓  probability from trial data ✓
```

Totéž tvrzení postavené na „rehospitalizace stojí v průměru 5 800 £, předejdeme spoustě“ neprojde ani jedním ze čtyř testů a zaslouží si zamítnutí, které dostane.

## Souvislost se softwarovým inženýrstvím

„Tato migrace odvrátí budoucí přepis“ je tvrzení o kompenzaci a pravidla health economics ho činí poctivým:

- **Kontrafaktuální náklad**: kolik by přepis skutečně stál a jak je to doloženo?
- **Pravděpodobnost**: jak pravděpodobná je ta budoucnost? (Ne 100 % – produkty se ruší, priority se mění.)
- **Diskontování**: přepis odvrácený ve 4. roce při diskontu 3,5–10 % má mnohem menší hodnotu než nominální.
- **Jedinečnost**: nenárokujte si tentýž odvrácený přepis zároveň v řádce technického dluhu a v řádce udržení.

`Offset value = P(future event) × counterfactual cost × discount factor` – napište tento řádek do návrhu a sledujte, jak se odhad stane diskutabilním, o což právě jde.

## Úskalí

- **Dvojí započtení** – tatáž odvrácená hospitalizace nárokovaná jako kompenzace, lůžkodny a QALY s připojenými náklady.
- **Kompenzace průměrnými náklady** u událostí, jejichž fixní náklady pokračují tak či tak.
- **Tichá 100% pravděpodobnost** u následných událostí, které byly pouze možné.
- **Kompenzace do jiných rozpočtů** prezentované jako úspory plátci, od něhož se žádá platba – viz [perspektiva analýzy](../perspektiva-analýzy/).

## Zdroje

- York Health Economics Consortium glossary: cost offset. <https://yhec.co.uk/glossary/cost-offset/>
- Cohen JT, Neumann PJ, Weinstein MC. NEJM 2008 (offsets rarely exceed costs). <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
