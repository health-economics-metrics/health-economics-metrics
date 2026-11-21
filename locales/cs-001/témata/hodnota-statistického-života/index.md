# Hodnota statistického života (VSL)

Hodnota statistického života (VSL) – v britském úzu nazývaná „hodnota předcházeného úmrtí“ (VPF) – je částka, kterou je *populace* kolektivně ochotna zaplatit za snížení rizika jednoho statistického úmrtí, odvozená ze studií kompromisu mzda–riziko (kolik navíc zaměstnanci požadují za rizikovější práci) a z průzkumů deklarovaných preferencí. Není to cena života žádného identifikovaného jednotlivce; je to konstrukt populačního rizika a softwarový inženýr budující systémy snižující riziko – triážní algoritmy, dispečink sanitek, bezpečnostní monitorování – potřebuje vědět, že pochází z jiné teoretické tradice než [prahy ochoty platit](../prahy-ochoty-platit/).

## Proč na tom záleží

VSL/VPF je standardním nástrojem monetizace snížení rizika úmrtnosti v regulační analýze nákladů a přínosů: bezpečnost dopravy, regulace životního prostředí a některé intervence veřejného zdraví vedou své byznys případy přes něj. Green Book HM Treasury zveřejňuje údaj VPF odvozený z britských důkazů z trhu práce a průzkumů a ministerstvo dopravy jej používá přímo při posuzování bezpečnosti silnic. Je to skutečně jiná tradice oceňování než metodika QALY × práh ochoty platit: přístup prahu oceňuje zdravotní zisky proti tomu, co zdravotní *rozpočet* nyní vytváří na hraně, zatímco VSL/VPF oceňuje snížení rizika proti tomu, co lidé na trhu práce nebo v průzkumu projeví, že by za ně zaplatili. Oba rámce nelze vždy sladit a používání obou v témže případu bez uznání toho je častou analytickou chybou.

## Matematika

```
Deaths averted = population × risk_reduction_per_person
  (risk_reduction_per_person is a probability, e.g. 0.000001 = 1-in-a-million
   reduction in annual mortality risk)
Monetized mortality benefit = deaths_averted × value_of_prevented_fatality
```

## Řešený příklad

Region s 800 000 lidmi profituje z digitální dispečerské/triážní intervence v silniční bezpečnosti, která snižuje roční riziko úmrtí každého o 1 z milionu (0,000001):

```
Deaths averted = 800,000 × 0.000001 = 0.8
```

S použitím britské hodnoty předcházeného úmrtí 2 180 000 £ (údaj HM Treasury/DfT, ceny 2023/24 – Green Book jej aktualizuje každoročně, před citací v živé analýze znovu ověřte):

```
Monetized mortality benefit = 0.8 × £2,180,000 = £1,744,000/year
```

Něco málo pod 1,75 mil. £ ročně monetizovaného přínosu úmrtnosti ze snížení rizika, kterého by si většina dotčené populace individuálně nevšimla.

## Souvislost se softwarovým inženýrstvím

Týmy bezpečnostně kritického softwaru – firmware zdravotnických prostředků, software autonomních vozidel, průmyslové řídicí systémy – čelí přesně tomuto problému oceňování při budování nákladově-přínosového případu pro investici do bezpečnosti: jak ocenit „zabránit jednomu katastrofálnímu selhání“, když je selhání vzácné, závažné a rozprostřené napříč velkou populací uživatelů? VSL/VPF je desítky let starý, veřejně zdokumentovaný reálný precedent pro vyjádření vzácného, závažného populačního snížení rizika číslem – táž podoba argumentu jako ocenění investice SRE proti vzácnému katastrofálnímu výpadku, jen s úmrtnostním výsledkem místo výsledku výpadku.

## Úskalí

- **Považování VSL za „cenu identifikovaného života“**: není. VSL/VPF je populační statistický konstrukt odvozený z kompromisů snížení rizika napříč mnoha lidmi, nikoli ocenění života či smrti konkrétní osoby.
- **Dvojí započtení proti výpočtu čistého peněžního přínosu založeném na QALY**: použití údaje VSL/VPF a samostatného výpočtu QALY × práh v témže případu bez jejich sladění tiše dvakrát počítá hodnotu týchž odvrácených úmrtí. Pro daný případ vyberte jeden rámec.
- **Přenos odhadu VSL napříč kontexty bez úpravy**: VSL odvozené z trhu práce jedné země nebo z dat mzda–riziko pracovně aktivního věku, aplikované bez úpravy na jiný příjmový kontext nebo jinou populaci (děti, důchodci), je dlouhodobě skutečně sporný metodický problém – ne vyřešený.

## Zdroje

- HM Treasury, The Green Book: Central Government Guidance on Appraisal and Evaluation — Value of a Prevented Fatality supplementary guidance (2023/24 prices; Green Book values are updated annually). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- US EPA, "Mortality Risk Valuation" (for the US VSL tradition, cited for contrast with the UK VPF figure above). <https://www.epa.gov/environmental-economics/mortality-risk-valuation>
- Viscusi WK, Aldy JE. "The Value of a Statistical Life: A Critical Review of Market Estimates Throughout the World." J Risk Uncertain. 2003;27(1):5-76.
