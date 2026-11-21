# Vrednovanje realnih opcija

Vrednovanje realnih opcija primjenjuje logiku cijene financijskih opcija na realne (nefinancijsko-tržišne) investicijske odluke — konkretno na *opciju širenja* projekta kasnije ako uspije, bez obveze. Pojednostavljeni jednoperiodni binomni model (Cox, Ross, Rubinstein, 1979) izravno vrednuje tu fleksibilnost, pretvarajući „isporučimo malo pa vidimo” iz slutnje u ukalkuliran broj.

## Zašto je važno

Statički izračun NPV-a cijeni projekt kao okladu sve-ili-ništa: financirati ga ili ne, u današnjem opsegu, zauvijek. Stvarni projekti — a posebno postupna uvođenja digitalnog zdravlja — rijetko se klade tako: zdravstveni sustav može financirati mali pilot, promatrati što se događa i uložiti dodatni novac tek ako uspije. Ta fleksibilnost ima stvarnu vrijednost, a njezino zanemarivanje sustavno podcjenjuje fazna ulaganja u odnosu na jednokratna, što je upravo naopako za postupke nabave koji nagrađuju sigurnije izgledajući fazni prijedlog. Vrednovanje realnih opcija cijeni samu fleksibilnost pa se fazni prijedlog može pošteno usporediti s alternativom pune obveze, umjesto da bude kažnjen jer na naivnoj NPV liniji izgleda manji.

## Matematika

```
Rizično-neutralna vjerojatnost „gornjeg” stanja:
  p = ((1 + risk_free_rate) − down_factor) / (up_factor − down_factor)

Isplata širenja u svakom stanju (s donjom granicom nula — širenje je opcionalno):
  payoff_up   = max(project_value × up_factor   − expansion_cost, 0)
  payoff_down = max(project_value × down_factor − expansion_cost, 0)

Vrijednost opcije (diskontirana očekivana isplata):
  option_value = (p × payoff_up + (1 − p) × payoff_down) / (1 + risk_free_rate)

Prošireni NPV = static_npv + option_value
```

Vrijednost projekta ili raste (`up_factor`) ili pada (`down_factor`) do sljedeće točke odlučivanja. Širenje se izvršava samo ako je u tom stanju profitabilno — donja granica isplate na nuli čini ovo pravom *opcijom*, a ne obvezom. Za vrednovanje opcije prikupljanja informacija prvo, umjesto opcije kasnijeg širenja, vidi [očekivanu vrijednost savršene informacije](../očekivana-vrijednost-savršene-informacije/). Za trošak čekanja na tu odluku vidi [trošak odgode](../trošak-odgode/).

## Riješeni primjer

Pilot digitalne usluge s `project_value = 1.000.000 £`, mogućim porastom na 1,5× ili padom na 0,5× do sljedeće točke odlučivanja, bezrizičnom stopom od 8 % i troškom širenja od 600.000 £:

```
p = (1.08 − 0.5) / (1.5 − 0.5) = 0.58

payoff_up   = max(1,000,000 × 1.5 − 600,000, 0) =  900,000
payoff_down = max(1,000,000 × 0.5 − 600,000, 0) = max(−100,000, 0) = 0

Donja granica je važna: opcija se NE bi izvršila ako tržište
razočara — trošak širenja od 600.000 £ premašuje 500.000 £
koliko bi projekt vrijedio u donjem stanju.

option_value = (0.58 × 900,000 + 0.42 × 0) / 1.08
             = 522,000 / 1.08
             ≈ £483,333.33
```

Dodavanjem vrijednosti opcije na statički NPV od 200.000 £: prošireni NPV = 200.000 + 483.333,33 ≈ **683.333,33 £**. Iskazivanje samog statičkog NPV-a od 200.000 £, bez te vrijednosti opcije, podcijenilo bi stvarnu vrijednost faznog projekta za više od dvostruko.

## Veza sa softverskim inženjerstvom

Ovo je formalna inačica „isporuči minimalnu verziju sada, zadrži opciju daljnjeg ulaganja ako se prihvati” — izravno relevantna za postupno uvođenje digitalnog zdravstvenog proizvoda, strukturno paralelna s okvirom redoslijeda pod neizvjesnošću u [trošku odgode](../trošak-odgode/) i [WSJF/CD3](../wsjf-i-cd3/), te komplementarna s [očekivanom vrijednosti savršene informacije](../očekivana-vrijednost-savršene-informacije/) i [očekivanom vrijednosti informacije iz uzorka](../očekivana-vrijednost-informacije-iz-uzorka/) — sva tri cijene fleksibilnost ili informaciju pod neizvjesnošću, iz različitih kutova.

## Zamke

- **Posuđivanje rizično-neutralnog vrednovanja bez pretpostavke o trgovanoj imovini na kojoj počiva**: modeli realnih opcija posuđuju rizično-neutralnu vjerojatnost iz vrednovanja financijskih opcija, koje pretpostavlja da je temeljna vrijednost *trgovana* imovina — za doista netrgovan realni projekt to je modelska pogodnost, a ne doslovna tržišna činjenica.
- **Tretiranje `up_factor`/`down_factor` kao slobodnih parametara**: binomni ulazi gore/dolje sami su pretpostavke koje traže opravdanje, a ne slobodni parametri birani da daju željeni odgovor.
- **Iskazivanje samo vrijednosti opcije**: vrijednost realne opcije je *aditivna* statičkom NPV-u samostalnog projekta — česta je pogreška iskazati samo vrijednost opcije i izostaviti osnovni slučaj, što precjenjuje slučaj ako je statički NPV negativan, a podcjenjuje ga (kao u gornjem primjeru) kad se statički NPV potpuno izostavi.

## Izvori

- Cox JC, Ross SA, Rubinstein M. "Option pricing: a simplified approach." J Financ Econ. 1979;7(3):229-63.
- Trigeorgis L. *Real Options: Managerial Flexibility and Strategy in Resource Allocation*. MIT Press. 1996.
- Driffield T, Smith PC. "A real options approach to watchful waiting: theory and an illustration." Med Decis Making. 2007;27(2):178-88 — ties real options directly to a health-economics decision context. <https://pubmed.ncbi.nlm.nih.gov/17395932/>
