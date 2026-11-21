# Časový horizont

Časový horizont je období, za které analýza počítá náklady a účinky. Musí být dostatečně dlouhý, aby zachytil všechny smysluplné rozdíly mezi srovnávanými možnostmi.

## Proč na tom záleží

Zvolte krátký horizont a minete pozdní přínosy (prevence) i pozdní náklady (údržba). Zvolte příliš dlouhý a vše se utopí v nejistotě. Hodnocení zdravotnických technologií často používá **celoživotní** horizont u léčeb s účinky na úmrtnost; [analýza dopadu na rozpočet](../analýza-dopadu-na-rozpočet/) záměrně používá krátký horizont **1–5 let**, protože její otázkou je dostupnost, nikoli hodnota. Horizont je deklarovaná modelovací volba a nesourodé horizonty jsou klasický způsob, jak zmanipulovat srovnání.

## Matematika

Horizont je horní mez sumace v každém hodnocení:

```
Net present value = Σ (t = 0 … T) [ (Benefits_t − Costs_t) / (1 + r)^t ]
T = time horizon (years)
r = discount rate (see discounting-and-time-preference.md)
```

Výsledky by se měly uvádět s uvedeným horizontem a ideálně ukázat při více horizontech.

## Řešený příklad

Systém elektronického předepisování stojí 2 miliony £ na zavedení a 200 000 £/rok na provoz. Předchází medikačním chybám v hodnotě 600 000 £/rok (náklady léčby odvrácené újmy).

Čistý přínos podle horizontu (nediskontováno, pro přehlednost):

```
Horizon 1 year:  −2,000,000 − 200,000 + 600,000  = −£1,600,000
Horizon 3 years: −2,000,000 + 3 × 400,000        = −£800,000
Horizon 5 years: −2,000,000 + 5 × 400,000        =  £0
Horizon 10 years:−2,000,000 + 10 × 400,000       = +£2,000,000
```

Systém „selhává“ při jakémkoli horizontu pod 5 let a „uspívá“ při 10. Ani jedno není skutečnou odpovědí; poctivá zpráva uvádí bod zvratu a zdůvodňuje horizont životností systému (jak dlouho do výměny?).

## Souvislost se softwarovým inženýrstvím

- **Hodnocení nástrojů měřená přes jeden sprint** systematicky míjejí pokles křivky učení (náklady vpředu) i dlouhodobou údržbu (náklady vzadu). Piloty asistentů AI měřené ve 2. týdnu zachycují vrchol novosti, nikoli ustálený stav.
- **Délka smlouvy ≠ horizont přínosů.** Roční smlouva SaaS může být stále posuzována na 5 let, pokud realisticky očekáváte obnovu – ale řekněte to.
- **Případy náhrady starého systému** by měly sahat k věrohodnému konci životnosti starého systému, nikoli k libovolnému kulatému číslu.

## Úskalí

- **Nakupování horizontu**: volba toho, který horizont nechá vaši možnost vyhrát. Horizont předem registrujte před výpočtem výsledků.
- **Různé horizonty pro různé možnosti** v témže srovnání.
- **Celoživotní horizonty bez diskontování nebo analýzy nejistoty** – přínosy ve 30. roce při nominální hodnotě jsou fikce. Dlouhé horizonty spárujte s [analýzou citlivosti](../analýza-citlivosti/).

## Zdroje

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Sullivan SD, et al. "Budget Impact Analysis — Principles of Good Practice: Report of the ISPOR 2012 Budget Impact Analysis Good Practice II Task Force." Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
