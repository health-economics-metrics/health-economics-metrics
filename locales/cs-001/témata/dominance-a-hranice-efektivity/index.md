# Dominance a hranice efektivity

Možnost je **dominovaná**, pokud jiná možnost stojí méně *a* přináší více. **Hranice efektivity** je to, co zbude po vyřazení dominovaných možností: množina voleb, kde získat víc vyžaduje platit víc.

## Proč na tom záleží

Před jakoukoli debatou o prazích nebo rozpočtech health technology assessment nejprve vyřadí možnosti, které by nikdo nikdy neměl vybrat. Zakreslení každé možnosti do roviny náklady–účinek a nakreslení hranice je pětiminutové cvičení, které běžně zabije polovinu užšího seznamu. Inkrementální srovnání ([ICER](../inkrementální-poměr-nákladové-efektivity/)) se pak počítají jen *podél hranice*, každá možnost proti další nejlevnější nedominované – nikdy proti „nedělat nic“, když existují lepší mezilehlé možnosti.

## Matematika

```
Strict dominance:   A dominates B if Cost_A ≤ Cost_B and Effect_A ≥ Effect_B
                    (with at least one strict inequality)

Extended dominance: B is ruled out if a mix of A and C achieves more effect
                    per pound — detected when ICERs decrease as you move up
                    the frontier. Valid frontier ICERs must be increasing.
```

Postup: seřaďte možnosti podle účinku; odstraňte striktně dominované; spočtěte párová ICER mezi sousedy; odstraňte každou možnost, jejíž ICER přesahuje ICER další účinnější možnosti (rozšířená dominance); opakujte, dokud ICER monotónně nerostou.

## Řešený příklad

Čtyři možnosti snížení zmeškaných návštěv (účinek = získané návštěvy za rok):

```
Option          Cost/yr    Recovered
Do nothing      £0         0
SMS reminders   £20,000    2,000
Phone calls     £120,000   2,200
SMS + AI triage £90,000    3,500
```

Telefonní hovory jsou **striktně dominovány** SMS + triáží AI (stojí víc, získají méně). Hranice: nic → SMS → SMS + AI.

```
ICER(SMS vs nothing)   = 20,000 / 2,000  = £10 per appointment recovered
ICER(SMS+AI vs SMS)    = (90,000 − 20,000) / (3,500 − 2,000) = £46.67 per appointment
```

Rostoucí ICER → platná hranice. Při ~160 £ ušetřených na získanou nemocniční návštěvu (viz [míra nedostavení se](../míra-nedostavení-se/)) stojí za to udělat oba kroky hranice; návrh telefonního centra by se nikdy neměl dostat před komisi.

## Souvislost se softwarovým inženýrstvím

Sestavte stejný graf pro jakékoli rozhodnutí o nástrojích: roční náklady na jedné ose, změřený výsledek (ušetřené hodiny, odvrácené incidenty, umožněná nasazení) na druhé. Body vlevo nahoře od hranice jsou vyřazeny dřív, než se kdokoli začne hádat o rozpočtu. To přerámuje výběr dodavatele z debat o kontrolních seznamech funkcí na „jste dominováni; schůzka skončila“. Odhaluje to také běžný podnikový vzor nákupu nejdražší možnosti za okrajový zisk – legitimní jen tehdy, když je inkrementální cena za inkrementální jednotku tou, kterou by organizace vědomě zaplatila.

## Úskalí

- **Srovnávání všeho s výchozím stavem** místo s další možností na hranici – lichotí drahým možnostem skrýváním levnějších téměř ekvivalentních.
- **Jednorozměrná skóre účinku**, která skrývají, co záleží; pokud počítají dva výsledky, buď je obhajitelně sloučte (viz [analýza nákladů a užitku](../analýza-nákladů-a-užitku/)), nebo ukažte dvě hranice.
- **Zapomenutí nejistoty**: možnosti blízko hranice si mohou při [analýze citlivosti](../analýza-citlivosti/) vyměnit místa.

## Zdroje

- York Health Economics Consortium glossary: dominance. <https://yhec.co.uk/glossary/dominance/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
