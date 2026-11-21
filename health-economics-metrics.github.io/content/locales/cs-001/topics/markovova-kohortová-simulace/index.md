# Markovova kohortová simulace

Markovův kohortový model je standardní modelovací technika HTA pro intervence, jejichž účinky se rozvíjejí během více časových období (cyklů), nikoli jedinou ranou. Hypotetická kohorta začíná zcela v jednom zdravotním stavu a každý cyklus pevná sada pravděpodobností přechodu přesouvá zlomky kohorty mezi stavy; náklady a QALY se kumulují každý cyklus úměrně tomu, kolik kohorty každý stav obsazuje, a diskontují se zpět na současnou hodnotu. Každý softwarový inženýr, který modeluje víceletý byznys případ digitálního zdraví – kde uživatelé nebo pacienti v čase přecházejí mezi stavy jako „zapojený“, „vyprchávající“ nebo „odešlý“ – staví stejnou strukturu.

## Proč na tom záleží

Většina skutečných rozhodnutí o zdravotnických technologiích není jednorázové srovnání nákladů a výsledku jednoho období. Chronický stav progreduje, relabuje, reaguje na léčbu nebo zabíjí po léta – a [analýza nákladové efektivity](../analýza-nákladové-efektivity/) jednoho období to nedokáže vyjádřit. Podání NICE, ICER a CADTH pro intervence u chronických nemocí, posuzovaná prostřednictvím [hodnocení zdravotnických technologií](../hodnocení-zdravotnických-technologií/), jsou téměř vždy postavena jako Markovovy kohortové modely s celoživotním horizontem, protože alternativa – modelovat každou možnou individuální cestu pacienta – je ve velkém měřítku neřešitelná. Kohortový Markovův model vyměňuje část realismu na individuální úrovni (nedokáže snadno vyjádřit paměť minulých stavů, odtud „Markov“: budoucnost závisí jen na současném stavu) za model transparentní, auditovatelný a dostatečně rychlý, aby se dal spustit tisíckrát v [pravděpodobnostní analýze citlivosti](../pravděpodobnostní-analýza-citlivosti/).

## Matematika

```
One cycle's cohort update (row-vector x transition matrix):
  new_state[j] = sum_i state[i] * transition_matrix[i][j]

One cycle's cost:
  cycle_cost = sum_s state[s] * cost_per_cycle[s]

One cycle's QALYs:
  cycle_qalys = sum_s state[s] * utility[s] * cycle_length_years

Full simulation over `cycles` cycles, discounted at `discount_rate`:
  total_discounted_cost  = sum_{t=0}^{cycles-1} cycle_cost(state_t)  / (1 + discount_rate)^t
  total_discounted_qalys = sum_{t=0}^{cycles-1} cycle_qalys(state_t) / (1 + discount_rate)^t
  where state_0 = initial_distribution, state_{t+1} = advance_cohort(state_t, transition_matrix)
```

Diskontování každého cyklu zpět na současnou hodnotu používá přesně vzorec z [diskontování a časové preference](../diskontování-a-časová-preference/), aplikovaný po cyklech místo po letech.

## Řešený příklad

**Klinický**: dvoustavový model – `Well` a `Dead` – kde každý cyklus umírá 10 % kohorty a `Dead` je absorpční (jeho pravděpodobnost přechodu do sebe je 1,0; vynechání této smyčky by způsobilo, že hmota kohorty po jednom cyklu v `Dead` zmizí). Kohorta začíná zcela jako `Well`, stojí 1 000 £ za cyklus, dokud je `Well` (0 £ po `Dead`), a získává 0,8 QALY za rok, dokud je `Well`. Simulováno pro 3 roční cykly při diskontní míře NICE 3,5 %:

```
Cycle 0: state = [1.00, 0.00] (100% Well)
  cost = £1,000.00, qalys = 0.800, discount factor = 1.000000
  discounted: cost = £1,000.00, qalys = 0.8000

Cycle 1: state = [0.90, 0.10] (90% Well, 10% Dead)
  cost = £900.00, qalys = 0.720, discount factor = 0.966184
  discounted: cost = £869.57, qalys = 0.6957

Cycle 2: state = [0.81, 0.19] (81% Well, 19% Dead)
  cost = £810.00, qalys = 0.648, discount factor = 0.933511
  discounted: cost = £756.14, qalys = 0.6049

Total discounted cost  ≈ £2,625.71
Total discounted QALYs ≈ 2.1006
```

Stav každého cyklu je stav předchozího cyklu protažený maticí přechodu – 90 % z 90 %, kteří jsou v cyklu 1 stále `Well`, zůstává `Well` v cyklu 2 (0,9 × 0,9 = 0,81), zatímco zbylých 19 % už zemřelo (0,9 × 0,1 + 0,1 × 1,0 = 0,19). Všimněte si, že kohorta `Well` nikdy zcela nevyprázdní: při konstantní 10% úmrtnosti na cyklus a bez návratu se podíl `Well` rozkládá geometricky, místo aby při jakémkoli konečném počtu cyklů dosáhl nuly.

## Souvislost se softwarovým inženýrstvím

K tomu, jak se vícecyklový model HTA používá v reálném posouzení, viz [hodnocení zdravotnických technologií](../hodnocení-zdravotnických-technologií/) – referenční případ, který určuje, jakou diskontní míru, zdroj užitků a časový horizont musí předložený Markovův model používat.

Markovův kohortový model je strukturálně stavový automat s pravděpodobnostními přechody, běžící pevný počet taktů a diskontující hodnotu každého taktu. Stejný tvar simuluje retenci/přechody stavů kohorty uživatelů v čase – provozní verzi „jaký zlomek systému je v tomto období ve zhoršeném stavu a kolik to stojí“ viz [metriky DORA](../metriky-dora/). Konkrétně:

- **Modelování udržení/odchodu** je Markovův kohortový model se stavy jako „aktivní“, „ohrožený“, „odešlý“: pevná měsíční matice přechodu, spuštěná na 12 nebo 24 měsíčních cyklů, říká očekávaný počet aktivních uživatelů (a příjem) v kterémkoli budoucím měsíci, stejně jako `Well`/`Dead` říká očekávané přeživší.
- **Spolehlivost a ekonomika incidentů**: stavy systému (zdravý, zhoršený, mimo provoz) lze modelovat stejně, s „náklady na cyklus“ újmy z výpadku narůstajícími, dokud systém obsazuje zhoršené/vypnuté stavy – mění argument o frekvenci incidentů na argument diskontovaných nákladů srovnatelný s náklady na práci na spolehlivosti, která by změnila pravděpodobnosti přechodu.
- **Absorpční stavy jako koncové stavy**: `Dead` v klinickém modelu je přesně „zrušené předplatné“ nebo „trvale offline“ v softwarovém modelu – oba potřebují explicitní pravděpodobnost přechodu do sebe 1,0, jinak simulace tiše ztrácí hmotu.

## Úskalí

- **Pravděpodobnosti přechodu, které se v řádku nesčítají na 1.** Řádek, který se sčítá na více nebo méně než 1, tiše způsobí, že kohorta každý cyklus „prosakuje“ nebo „roste“ – vždy zkontrolujte součty řádků, než výstupu modelu uvěříte, protože nic ve struktuře modelu samo chybu neohlásí.
- **Délka cyklu příliš hrubá pro skutečnou dynamiku nemoci.** Roční cyklus u stavu, který se výrazně mění během týdnů, podhodnocuje přechody uprostřed cyklu; zvolte délku cyklu krátkou vzhledem k tomu, jak rychle se modelovaný proces skutečně hýbe.
- **Zapomenutí smyčky do sebe u absorpčního stavu.** Absorpční stav (smrt, trvalé přerušení) potřebuje pravděpodobnost přechodu do sebe přesně 1,0. Vynechejte ji a hmota kohorty v tomto stavu se po jediném cyklu vypaří, což podhodnotí kumulativní náklady nebo ztrátu QALY.
- **Považování modelu za validovaný, protože běží.** Markovův kohortový model s věrohodně vypadajícími pravděpodobnostmi přechodu může být strukturálně špatně (chybějící stavy, špatné absorpční chování); validujte proti známým epidemiologickým benchmarkům (např. odpovídá modelované pětileté přežití zveřejněným křivkám přežití), než výstupu uvěříte.

## Zdroje

- Sonnenberg FA, Beck JR. "Markov models in medical decision making: a practical guide." Medical Decision Making. 1993;13(4):322-38. <https://pubmed.ncbi.nlm.nih.gov/8246705/>
- Briggs A, Sculpher M. "An introduction to Markov modelling for economic evaluation." PharmacoEconomics. 1998;13(4):397-409. <https://pubmed.ncbi.nlm.nih.gov/10178664/>
