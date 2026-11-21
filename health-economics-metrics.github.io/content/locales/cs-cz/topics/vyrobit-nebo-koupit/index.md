# Vyrobit, nebo koupit

Vyrobit-vs-koupit je strukturované srovnání vlastního vývoje s komerčním pořízením na základě diskontovaného [TCO](../celkové-náklady-vlastnictví/), doby dodání a rizika. Empirická apriorní data jsou jednostranná: **skutečné náklady na vývoj typicky překračují projekce o 30–40 %**, zakoupená řešení se nasazují o 40–60 % rychleji a výzkum GenAI od MIT z roku 2025 zjistil, že zakoupené nástroje AI uspěly přibližně v 67 % případů, zatímco interní vývoj asi třikrát méně často.

## Proč na tom záleží

Zdravotní systémy toto rozhodnutí řeší neustále („make vs commission“ v jazyce NHS) a inženýrské organizace v něm systematicky chybují ve směru vývoje – protože tvůrci odhadují vývoj, nikoli [TCO](../celkové-náklady-vlastnictví/), a protože vyvíjet je zábavnější. Ekonomický rámec vynucuje poctivé srovnání: obě možnosti oceněné na stejném horizontu, obě upravené o riziko a *časový rozdíl oceněný jako [náklady zpoždění](../náklady-zpoždění/)* – člen, který nejčastěji odpověď rozhoduje a nejčastěji se vynechává.

## Matematika

```
Compare over the same 3–5 year horizon, discounted:

NPV_option = PV(benefits, shifted by time-to-value) − PV(TCO)

Risk adjustments (Green Book "optimism bias" pattern):
  build cost × 1.3–1.4        (overrun prior)
  build time-to-value + 40–60% (deployment delay prior)
  buy: add integration reality-check and exit costs instead

Decision drivers, in the order they usually decide:
  1. differentiation — is this capability your product, or plumbing?
  2. time-to-value × CoD
  3. risk-adjusted TCO
```

## Řešený příklad

Trust potřebuje systém elektronického souhlasu. Koupit: SaaS za 150 tis. £/rok, spuštění za 3 měsíce. Vyvinout: odhadem 600 tis. £ + 120 tis. £/rok údržby, spuštění za 12 měsíců.

```
Risk-adjusted build: 600k × 1.35 = £810k; time-to-value ≈ 18 months
5-yr TCO:  buy = 150k × 5 = £750k
           build = 810k + 120k × 5 = £1,410k
Delay term: consent digitization saves £25k/month; build arrives 15 months
            later → CoD = 15 × 25k = £375k

Effective comparison: £750k vs £1,785k — buy wins by ~£1M, and the largest
single term after the build itself is the delay cost nobody had priced.
```

Vývoj zůstává správnou volbou, když je schopnost diferencující (jádrový algoritmus vašeho produktu), když žádný dodavatel nesplňuje tvrdé omezení (klinická bezpečnost, umístění dat) nebo když je riziko závislosti na dodavateli vážné a oceněné.

## Souvislost se softwarovým inženýrstvím

Přenositelná disciplína z health economics je trojí: **úprava rizika podle apriorních dat** (30–40% navýšení za překročení je softwarová obdoba optimism bias v Green Book – aplikujte ji mechanicky, o výjimkách diskutujte, nevycházejte z nich); **poctivost komparátoru** (alternativou k vývoji není „nic“, ale nejlepší dostupný nákup – viz [náklady obětované příležitosti](../náklady-obětované-příležitosti/)); a **test ekvivalence před srovnáním nákladů** (pokud nákup a vývoj skutečně splňují stejnou specifikaci, jde o [analýzu minimalizace nákladů](../analýza-minimalizace-nákladů/) a vyhrává levnější; pokud ne, rozdíl ve výsledku se musí ocenit, nikoli tvrdit).

## Úskalí

- **Srovnávání ceníkové ceny dodavatele s odhady vývoje bez úpravy rizika** – dvojí lichotka směrem k vývoji.
- **Interní práce oceněná nulou** („tým už tu stejně je“).
- **Neoceněná závislost (lock-in) v obou směrech**: náklady na odchod od dodavatele, ale také bus-factor a udržovací doba vlastního vývoje.
- **Vývoj řízený identitou**: „tohle je pro nás jádrové“ tvrzené o infrastruktuře – diferenciaci testujte tím, zda by si zákazníci všimli.

## Zdroje

- Build-vs-buy TCO analyses. <https://neontri.com/blog/build-vs-buy-software/>
- MIT GenAI divide findings (buy-vs-build success rates). <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- HM Treasury Green Book (optimism bias). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
