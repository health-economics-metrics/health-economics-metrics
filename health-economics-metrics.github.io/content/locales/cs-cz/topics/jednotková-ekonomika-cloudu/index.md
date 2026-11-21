# Jednotková ekonomika cloudu (FinOps)

Jednotková ekonomika cloudu převádí surové výdaje na cloud na **náklady na jednotku výstupu** – na zákazníka, transakci, vyřešený případ, token. Je to schopnost FinOps, která mění „naše účet za AWS je 400 tis. £ měsíčně“ na „obsloužení jednoho pacienta stojí 0,83 £“.

## Proč na tom záleží

Celkové výdaje nedokážou odpovědět na otázky, které záleží: je produkt stále efektivnější, nebo méně? Zlepšuje růst marži, nebo ji ničí? Kolik účtovat? Jednotkové náklady odpoví na všechny tři. Konkrétně pro digitální zdraví je „cena za vyřešený případ“ *právě* jednotkovým nákladem zdravotní služby – přímo srovnatelným s údaji [National Cost Collection](../národní-tarif-a-jednotkové-náklady/), které komisař používá u každé jiné služby, což z ní dělá přirozený jazyk pro oceňování digitálních cest proti tradičním.

## Matematika

```
Unit cost = total allocated cost (incl. shared/platform costs) / units delivered

Two families:
  resource-efficiency units: cost/GB stored, cost/vCPU-hour, cost/token,
                             cost/build-minute
  business units:            cost/customer, cost/transaction, cost/consultation,
                             cost/case-resolved

Marginal vs average discipline applies (marginal-vs-average-cost.md):
committed/reserved spend makes marginal unit cost ≈ 0 until the next
commitment step — price expansion decisions at marginal, efficiency
trends at average.
```

## Řešený příklad

Digitální triážní služba: výdaje na cloud 62 000 £/měsíc (výpočty 30 tis. £, data 18 tis. £, alokace sdílené platformy 14 tis. £), zpracovává 380 000 triážních epizod měsíčně:

```
Average cost per episode = 62,000 / 380,000 ≈ £0.163

Commissioner comparison: telephone triage ≈ £8–12/call, GP consultation ≈ £42
→ digital episode runs at ~2% of the cheapest human alternative — the
channel-shift economics of gds-service-metrics.md, from the cost side.

Trend check: last year £0.21/episode at 240k episodes → improving scale
economics (fixed platform costs amortizing), worth a headline in the QBR.
```

## Souvislost se softwarovým inženýrstvím

Jednotková ekonomika je místo, kde se inženýrské volby stávají čitelnými pro finance: architektura, která půlí náklady na epizodu, je cenová výhoda; ta, která škáluje nadlineárně, je časovaná bomba viditelná jen v této metrice. Postupy, které se přenášejí z nákladového účetnictví zdravotnictví: **zveřejněte pravidla alokace** (sdílené náklady zkreslovaly jednotkové údaje, dokud PLICS nestandardizoval nákladování na úrovni pacienta – vaše alokace nákladů platformy potřebuje stejnou přísnost); **zvolte jednotky, v nichž kupující přemýšlí** (komisaři kupují epizody, ne vCPU); a jednotkové náklady zaveďte do každého modelu [ICER](../inkrementální-poměr-nákladové-efektivity/) a [dopadu na rozpočet](../analýza-dopadu-na-rozpočet/) jako autoritativní nákladový jmenovatel. U funkcí AI je jednotkou token – viz [jednotková ekonomika inference](../jednotková-ekonomika-inference/).

## Úskalí

- **Ignorování sdílených nákladů**: jednotkové náklady bez alokací platformy/bezpečnosti/pohotovosti jsou podhodnoceny o 30–50 % a při auditu se zhroutí.
- **Ješitné jmenovatele**: „náklady na volání API“ lichotí; „náklady na dokončenou epizodu pacienta“ informují.
- **Oceňování mezních rozhodnutí průměrnými náklady**: účtování týmům průměrných jednotkových nákladů za užívání, které je mezně zdarma, vede k divadlu vyhýbání se plýtvání (viz [národní tarif](../národní-tarif-a-jednotkové-náklady/) pro verzi tohoto pobídkového defektu v NHS).

## Zdroje

- FinOps Foundation, unit economics. <https://www.finops.org/framework/capabilities/unit-economics/>
- FinOps Foundation, introduction to cloud unit economics. <https://www.finops.org/wg/introduction-cloud-unit-economics/>
