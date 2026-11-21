# Metriky zapojení

Metriky zapojení měří, kolik uživatelé zdravotní aplikaci skutečně používají: lepivost DAU/MAU, frekvence a délka sezení, používání funkcí. V digitálním zdraví není zapojení ješitnost – je to **dávka**: expozice, kterou musí procházet jakýkoli klinický účinek.

## Proč na tom záleží

Lék, který zůstane v lahvičce, nikoho neléčí; aplikace, která zůstane nenainstalovaná nebo neotevřená, je stejný způsob selhání. Každé zdravotně-ekonomické tvrzení o spotřebním zdravotním produktu se násobí zapojením – účinnost ukázaná ve studiích byla měřena při nějaké úrovni užívání a reálná hodnota se škáluje tím, jak blízko této úrovni se dostane užívání při nasazení. Standardní produktové benchmarky: DAU/MAU kolem **20 % se považuje za zdravé** u mobilních aplikací obecně, >25 % výjimečné; zdravotní aplikace často běží níže.

## Matematika

```
Stickiness (DAU/MAU) = daily active users / monthly active users × 100
Session metrics      = sessions/user/period; avg duration = total time / sessions
Feature engagement   = users performing key action / active users

Dose-response framing (the health-economics upgrade):
  realized effect ≈ trial effect × f(actual usage / trial usage)
  where f comes from dose-response analysis — see the "effective
  engagement" concept in adherence-and-persistence.md: enough usage
  to achieve the intended outcome, which may be modest and finite
```

## Řešený příklad

Pivotní studie aplikace pro krevní tlak ukázala snížení systolického tlaku o 6 mmHg u uživatelů zapisujících ≥4 měření týdně. Při nasazení u 50 000 registrovaných uživatelů:

```
MAU 20,000 (40%); of those, logging ≥4×/week: 7,000
Effective-dose users = 7,000 / 50,000 = 14% of the registered base

Population-level effect ≈ trial effect delivered to 14%, not 100%:
any economic model quoting "50,000 users × 6 mmHg" overstates ~7×.
Honest model: 7,000 × full effect + partial credit (from dose-response
data, if any) for the 13,000 sub-threshold users.
```

Toto násobení – skrze trychtýř zapojení k efektivní dávce – je nejčastějším místem, kde ekonomika digitálního zdraví nafukuje.

## Souvislost se softwarovým inženýrstvím

Inženýři vlastní trychtýř zapojení, což z nich dělá vlastníky *klinické* proměnné: tření při onboardingu, strategie notifikací, doba načtení a odolnost offline všechno mění doručenou dávku. Dvě návrhové implikace: instrumentujte **klinicky smysluplnou akci** (zapsaná měření, dokončené lekce), nikoli otevření – DAU postavené na sezeních vyvolaných notifikacemi je podvod s dávkou; a s cíli zapojení zacházejte jako s cíli *dostatečnosti*, nikoli maximalizace – aplikace, která dosáhne svého výsledku za 5 minut týdně a ustoupí z cesty, je klinicky ideální a metricky „slabá“ (viz efektivní zapojení v [adherenci a perzistenci](../adherence-a-perzistence/)). Samotnou práci na zapojení oceňte pomocí populačního modelu účinku výše: 2bodový zisk v podílu efektivní dávky je vyčíslitelná řádka QALY.

## Úskalí

- **Zapojení jako výsledek**: užívání je prostředek; výsledkem je [PROM](../výsledky-hlášené-pacienty/) nebo klinický cílový ukazatel.
- **Průměry přes bimodální užívání**: populace zdravotních aplikací se dělí na oddané uživatele a duchy; průměry nepopisují nikoho – rozdělte na kohorty.
- **Nafukování dávky pomocí dark patterns**: série a notifikace vyvolávající vinu zvedají metriky a mohou škodit úzkostným populacím, kterým zdravotní aplikace slouží; klinické produkty nesou klinickou etiku.
- **Provenience benchmarků dodavatelů**: většina publikovaných benchmarků zapojení pochází od analytických dodavatelů, nikoli z recenzovaných prací; kalibrujte proti vlastním studiím.

## Zdroje

- App engagement benchmarks. <https://getstream.io/blog/app-retention-guide/>
- Health app KPI guides. <https://www.darly.solutions/blog/key-metrics-for-health-apps-success-a-guide-to-kpis-and-outcomes>
- Yardley L, et al. on effective engagement. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
