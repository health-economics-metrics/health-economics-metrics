# Počet vyšetřených nutných k odvrácení jednoho případu (NNS)

NNS je počet lidí, kteří musí být vyšetřeni – nikoli jen léčeni – aby se zabránilo **jednomu** nepříznivému výsledku během definovaného období sledování, vzhledem k základnímu riziku populace a relativnímu snížení rizika, jehož dosáhne včasná detekce a léčba. Je to analog NNT na úrovni screeningového programu: NNT se ptá, kolik musí být *léčeno*, aby se zabránilo jednomu výsledku; NNS se ptá, kolik jich musí projít celou cestou *vyšetření a poté léčby*, aby se tam dospělo.

## Proč na tom záleží

Rembold zavedl NNS v roce 1998 právě proto, aby bylo možné screeningové programy srovnávat na stejném základě jako léčby, protože titulkové relativní snížení rizika screeningového testu skrývá dvě věci, které to u léčby neskrývá: základní riziko populace skutečně pozvané k vyšetření a skutečnost, že náklady testu a zátěž falešně pozitivních nese každý vyšetřený, nikoli jen menšina, která z toho nakonec profituje. Brána nákladové efektivity britského National Screening Committee (viz [ekonomika screeningu](../ekonomika-screeningu/)) je postavena právě na tomto rozlišení – screeningový program s působivým relativním snížením rizika v populaci s nízkým základním rizikem může mít NNS v tisících, a pak se skutečnou otázkou stávají náklady programu na odvrácený výsledek.

## Matematika

```
NNS = 1 / (baseline_risk × relative_risk_reduction)
baseline_risk           = probability of the outcome in the screened
                           population over the follow-up period (0–1)
relative_risk_reduction = proportional risk reduction achieved by
                           screening-enabled early treatment (0–1)
Program cost per outcome prevented = NNS × cost_per_screen
```

Srovnejte přímo s [NNT](../počet-pacientů-nutných-k-léčbě/): NNS sbaluje účinnost celého trychtýře vyšetření → diagnóza → léčba do jednoho čísla, zatímco NNT už předpokládá, že pacient je diagnostikován a zahajuje léčbu.

## Řešený příklad

Cílová populace screeningového programu má 2% základní riziko události v období studie (`baseline_risk = 0.02`) a včasná detekce dosahuje 25% relativního snížení rizika (`relative_risk_reduction = 0.25`):

```
NNS = 1 / (0.02 × 0.25) = 1 / 0.005 = 200
200 people must be screened to prevent one outcome.
At £50 per screen:
Programme cost per outcome prevented = 200 × £50 = £10,000
```

Těch 10 000 £ je číslo, které se má poměřit s náklady samotného výsledku a QALY, o které by připravil – stejné srovnání, jaké dělá [ekonomika prevence](../ekonomika-prevence/) u preventivních programů obecně.

## Souvislost se softwarovým inženýrstvím

NNS je „kolik uživatelů, událostí nebo požadavků musí projít detekčním nebo triážním tokem, aby se zachytil jeden pravý pozitivní nález, podle něhož stojí za to jednat“ – přímo relevantní pro monitorování založené na upozorněních a triážní systémy, kde cílový stav s nízkou prevalencí nafukuje NNS stejným způsobem, jakým hroutí pozitivní prediktivní hodnotu (viz [ekonomika screeningu](../ekonomika-screeningu/) a [hodnocení klinické AI](../hodnocení-klinické-ai/)). Monitorovací pravidlo, které musí zpracovat 200 událostí na jeden skutečný záchyt, stojí za provoz jen tehdy, když záchyt stojí aspoň 200násobek nákladů triáže na událost – táž aritmetika jako ve zdravotnickém řešeném příkladu výše.

## Úskalí

- **Ignorování závislosti na základním riziku**: týž screeningový test či program má velmi odlišné NNS – a nákladovou efektivitu – ve vysoce rizikové vs nízkorizikové populaci. Nikdy neuvádějte NNS bez uvedení populace, pro kterou byl spočten.
- **Počítání špatného jmenovatele**: NNS počítá lidi *vyšetřené*, nikoli ty s pozitivním testem nebo zahájenou léčbou – už v sobě zahrnuje účinnost celého trychtýře, takže by se nikdy nemělo srovnávat s metrikou počítanou jen přes pozitivní.
- **Srovnávání napříč obdobími sledování**: kratší období sledování obecně nafukuje NNS, protože v okně je pozorováno méně událostí. Čísla NNS jsou srovnatelná jen při výpočtu za stejnou délku sledování.

## Zdroje

- Rembold CM. "Number needed to screen: development of a statistic for disease screening." BMJ. 1998;317(7154):307-12.
