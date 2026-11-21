# Očekávaná hodnota výběrové informace (EVSI)

EVSI je hodnota *konkrétní navrhované studie* – daného návrhu, dané velikosti vzorku – před jejím provedením, na rozdíl od [EVPI](../očekávaná-hodnota-perfektní-informace/), která oceňuje úplné odstranění veškeré nejistoty. EVSI odpovídá na otázku, které skutečně čelí financovatel výzkumu: „vyplatí se *tato* studie při *této* velikosti?“

## Proč na tom záleží

EVPI vám říká strop toho, co by jakýkoli výzkum mohl stát; nikdy neříká, zda studie před vámi laťku překoná. Národní financovatel výzkumu vybírající mezi pilotem s 50 pacienty a definitivní studií s 500 pacienty potřebuje vědět, kolik stojí *každý konkrétní návrh*, nejen hodnotu vševědoucnosti. EVSI toto číslo dodává, a protože se škáluje s velikostí vzorku, umožňuje financovateli najít velikost vzorku, která maximalizuje očekávaný čistý přínos, místo hádání.

Proto je také EVSI vždy menší nebo rovno EVPI: konečný vzorek může nejistotu vyřešit jen částečně a studie, která se zdá být hodnotnější než perfektní informace, je znamením, že výpočet je chybný, nikoli skutečného výsledku.

## Matematika

```
General:
EVSI(n) = E_data[ max_d E_θ|data[NB(d,θ)] ]  −  max_d E_θ[NB(d,θ)]
  (nested expectation: outer over possible study results, inner over the
  posterior belief about θ after seeing that result — usually estimated by
  nested Monte Carlo / Bayesian updating over probabilistic sensitivity
  analysis draws)

Closed-form normal approximation (single uncertain parameter, conjugate
normal-normal model — a standard shortcut, not exact for every model):
EVSI(n) = EVPI × n / (n + n0)

n  = proposed study's sample size
n0 = "prior-equivalent sample size" — the size of an imaginary sample that
     would carry the same information as the current prior, derived from
     the ratio of data variance to prior variance
ENBS(n) = EVSI(n) − Cost(n)
Population EVSI = per-decision EVSI × decisions affected
```

Obecný tvar je vnořená očekávaná hodnota, protože budoucí výsledek studie je sám nejistý: musíte zprůměrovat přes každý možný dataset, který studie může vyprodukovat, a pro každý přepočítat nejlepší rozhodnutí při aktualizovaném (posteriorním) přesvědčení. Uzavřená normální aproximace vyměňuje tuto výpočetní náročnost za jediný poměr, platný, když jsou nejistý parametr a data (přibližně) normálně rozdělena a konjugovaná – pohodlnost, nikoli univerzální zákon. Plný vnořený Monte Carlo je obecnou metodou, když tento předpoklad neplatí. Losování PSA, z nichž se EVSI obvykle odhaduje, viz [pravděpodobnostní analýza citlivosti](../pravděpodobnostní-analýza-citlivosti/).

## Řešený příklad

Navazuje na řešený příklad [EVPI](../očekávaná-hodnota-perfektní-informace/) – zavedení asistenta AI pro dokumentaci u 5 000 klinických pracovníků, kde bylo EVPI 1,2 mil. £ – vyjádřete totéž EVPI v celých librách: **EVPI = 1 200 000 £**.

Na stole je navrhovaná pilotní studie s 50 klinickými pracovníky. Z poměru rozptylu apriorního přesvědčení k přesnosti měření pilotu vychází apriorně ekvivalentní velikost vzorku `n0 = 75`:

```
EVSI(50) = 1,200,000 × 50 / (50 + 75)
         = 1,200,000 × 50 / 125
         = 1,200,000 × 0.4
         = £480,000
```

Pilot stojí 120 000 £:

```
ENBS = EVSI − Cost = 480,000 − 120,000 = £360,000
```

Jednoznačně kladné ENBS: pilot financovat. Pokud se stejné zadávací rozhodnutí opakuje napříč 3 podobnými regionálními trusty, hodnota pilotu se škáluje:

```
Population EVSI = 480,000 × 3 = £1,440,000
```

## Souvislost se softwarovým inženýrstvím

EVSI je ekonomika volby, *jak velký* má být pilot nebo A/B test, nejen zda ho vůbec spustit:

- **Velikost vzorku jako investiční rozhodnutí.** Beta s 50 uživateli a postupné nasazení s 5 000 uživateli jsou různé „studie“ s různými EVSI a různými náklady – EVSI umožňuje porovnat je na stejném základě místo výchozího „více dat je vždy lepší“.
- **ENBS, nikoli samotné EVSI, je zadávací test.** Studie s vysokým EVSI, ale s náklady, které jej z velké části sežerou, je slabý návrh; rozhodovacím pravidlem je očekávaný čistý přínos vzorkování, přesně jako byznys případ odečítá přínos od nákladů místo uvádění samotného přínosu.
- **Klesající výnosy jsou explicitní.** Protože EVSI(n) roste s `n/(n+n0)`, zdvojnásobení velikosti pilotu nikdy nezdvojnásobí jeho hodnotu – formální verze inženýrského instinktu, že větší experiment má klesající mezní informační hodnotu.

## Úskalí

- **Použití normální aproximace mimo její předpoklady.** Platí jen pro zhruba konjugovanou nejistotu jednoho parametru; skutečně nelineární nebo vícerozměrný rozhodovací model potřebuje plný vnořený Monte Carlo, nikoli tuto zkratku.
- **Srovnávání EVSI jen s hotovostními náklady.** EVSI se musí vážit proti *plným* nákladům studie, včetně jejích vlastních nákladů zpoždění rozhodnutí – viz [náklady zpoždění](../náklady-zpoždění/) – nejen proti faktuře za studii.
- **Považování EVSI > EVPI za skutečný nález.** EVSI nikdy nemůže konstrukčně přesáhnout EVPI; výpočet, který to vytvoří, je chyba v modelu, nikoli objev.

## Zdroje

- Ades AE, Lu G, Claxton K. "Expected value of sample information calculations in medical decision modeling." Medical Decision Making 2004;24(2):207-27.
- Willan AR, Pinto EM. "The value of information and optimal clinical trial design." Statistics in Medicine 2005;24(12):1791-806.
- Strong M, Oakley JE. "When is a model-based value of information analysis feasible?" Medical Decision Making 2014.
