# Oceňování reálných opcí

Oceňování reálných opcí aplikuje logiku oceňování finančních opcí na reálná (nefinančně-tržní) investiční rozhodnutí – konkrétně na *opci rozšířit* projekt později, pokud uspěje, aniž by k tomu byl zavázán. Zjednodušený jednoperiodický binomický model (Cox, Ross, Rubinstein, 1979) ocení tuto flexibilitu přímo a mění „pojďme dodat malé a uvidíme“ z tušení na ocenitelné číslo.

## Proč na tom záleží

Statický výpočet NPV oceňuje projekt jako sázku všechno-nebo-nic: financovat, nebo ne, v dnešním rozsahu, navždy. Skutečné projekty – a zvláště postupná zavádění digitálního zdraví – se takto zřídka sází: zdravotní systém může financovat malý pilot, sledovat, co se stane, a zavázat další peníze, jen pokud to funguje. Tato flexibilita má skutečnou hodnotu a její ignorování systematicky podhodnocuje postupné investice vůči jednorázovým, což je přesně obráceně pro zadávací procesy, které odměňují bezpečněji vypadající postupný návrh. Oceňování reálných opcí oceňuje samotnou flexibilitu, takže postupný návrh lze férově srovnat s alternativou plného závazku, místo aby byl penalizován za to, že na naivní řádce NPV vypadá menší.

## Matematika

```
Risk-neutral probability of the "up" state:
  p = ((1 + risk_free_rate) − down_factor) / (up_factor − down_factor)
Expansion payoff in each state (floored at zero — expanding is optional):
  payoff_up   = max(project_value × up_factor   − expansion_cost, 0)
  payoff_down = max(project_value × down_factor − expansion_cost, 0)
Option value (discounted expected payoff):
  option_value = (p × payoff_up + (1 − p) × payoff_down) / (1 + risk_free_rate)
Expanded NPV = static_npv + option_value
```

Hodnota projektu buď vzroste (`up_factor`), nebo klesne (`down_factor`) do dalšího rozhodovacího bodu. Rozšíření se uplatní, jen pokud je v daném stavu ziskové – spodní hranice nuly ve výplatě činí z toho skutečnou *opci*, nikoli povinnost. K ocenění opce nejprve sbírat informace, nikoli opce rozšířit později, viz [očekávaná hodnota perfektní informace](../očekávaná-hodnota-perfektní-informace/). K nákladům čekání na toto rozhodnutí viz [náklady zpoždění](../náklady-zpoždění/).

## Řešený příklad

Pilot digitální služby s `project_value = £1,000,000`, možným vzestupem na 1,5× nebo poklesem na 0,5× do dalšího rozhodovacího bodu, bezrizikovou sazbou 8 % a náklady rozšíření 600 000 £:

```
p = (1.08 − 0.5) / (1.5 − 0.5) = 0.58
payoff_up   = max(1,000,000 × 1.5 − 600,000, 0) =  900,000
payoff_down = max(1,000,000 × 0.5 − 600,000, 0) = max(−100,000, 0) = 0
The floor matters: the option would NOT be exercised if the market
disappoints — the £600,000 expansion cost exceeds the £500,000 the
project would be worth in the down state.
option_value = (0.58 × 900,000 + 0.42 × 0) / 1.08
             = 522,000 / 1.08
             ≈ £483,333.33
```

Přičtením hodnoty opce k základnímu statickému NPV 200 000 £: rozšířené NPV = 200 000 + 483 333,33 ≈ **683 333,33 £**. Vykázání samotného statického NPV 200 000 £ bez této hodnoty opce by podhodnotilo skutečnou hodnotu postupného projektu o více než polovinu.

## Souvislost se softwarovým inženýrstvím

Je to formální verze „dodejte teď minimální verzi a ponechte si opci investovat dále, pokud se uchytí“ – přímo relevantní pro postupné zavádění produktu digitálního zdraví, strukturálně paralelní k rámování řazení za nejistoty u [nákladů zpoždění](../náklady-zpoždění/) a [WSJF/CD3](../wsjf-a-cd3/) a doplňující k [očekávané hodnotě perfektní informace](../očekávaná-hodnota-perfektní-informace/) a [očekávané hodnotě výběrové informace](../očekávaná-hodnota-výběrové-informace/) – všechny tři oceňují flexibilitu nebo informaci za nejistoty z různých úhlů.

## Úskalí

- **Vypůjčení rizikově neutrálního oceňování bez předpokladu obchodovaného aktiva, na kterém stojí**: modely reálných opcí si půjčují rizikově neutrální pravděpodobnost z oceňování finančních opcí, které předpokládá, že podkladová hodnota je *obchodované* aktivum – u skutečně neobchodovaného reálného projektu je to modelovací pohodlí, nikoli doslovný tržní fakt.
- **Považování `up_factor`/`down_factor` za volné parametry**: binomické vstupy nahoru/dolů jsou samy předpoklady vyžadující zdůvodnění, nikoli volné parametry zvolené tak, aby vyšla požadovaná odpověď.
- **Vykazování samotné hodnoty opce**: hodnota reálné opce je *aditivní* ke statickému NPV samostatného projektu – častou chybou je vykázat jen hodnotu opce a vypustit základní případ, což nadhodnocuje případ, pokud je statické NPV záporné, a podhodnocuje ho (jako v řešeném příkladu výše), když se statické NPV zcela vynechá.

## Zdroje

- Cox JC, Ross SA, Rubinstein M. "Option pricing: a simplified approach." J Financ Econ. 1979;7(3):229-63.
- Trigeorgis L. *Real Options: Managerial Flexibility and Strategy in Resource Allocation*. MIT Press. 1996.
- Driffield T, Smith PC. "A real options approach to watchful waiting: theory and an illustration." Med Decis Making. 2007;27(2):178-88 — ties real options directly to a health-economics decision context. <https://pubmed.ncbi.nlm.nih.gov/17395932/>
