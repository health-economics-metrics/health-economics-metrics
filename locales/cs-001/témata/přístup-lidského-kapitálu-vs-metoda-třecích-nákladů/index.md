# Přístup lidského kapitálu vs metoda třecích nákladů

Toto jsou dvě soupeřící metody oceňování ztracené produktivity – z nemoci, disability nebo smrti – ve studiích nákladů nemoci a nákladů a přínosů. Přístup lidského kapitálu (HCA) oceňuje veškerý ztracený výstup po celou dobu nepřítomnosti mzdovou sazbou; metoda třecích nákladů (FCM) jej oceňuje jen po kratší období, které zaměstnavatel skutečně potřebuje k obnovení výroby. Volba mezi nimi změní odhad nepřímých nákladů dvojnásobně či více.

## Proč na tom záleží

Nepřímé (produktivitní) náklady jsou jednou z nejspornějších položek v health economics právě proto, že se dvě standardní metody tak ostře rozcházejí. HCA považuje každý den nepřítomnosti za den výstupu, o který ekonomika skutečně přichází, oceněný plnou mzdou po celou dobu – nebo u smrti či trvalé disability po zbývající pracovní život. FCM tvrdí, že v ekonomice s nezaměstnaností a slackem na trhu práce většina dlouhé nepřítomnosti ve skutečnosti nesnižuje národní výstup, jakmile zaměstnavatel zaškolí náhradu nebo přerozdělí práci; skutečnou ztrátu představuje jen „třecí období“ – čas k obnovení výroby na předchozí úroveň. FCM proto vytváří systematicky nižší, konzervativnější odhady nepřímých nákladů než HCA a obě metody nejsou zaměnitelnými poznámkami pod čarou: jsou to odlišné ekonomické teorie o tom, co „ztracená produktivita“ znamená. Proto také [referenční případ NICE](../hodnocení-zdravotnických-technologií/) ve výchozím nastavení produktivitní náklady vylučuje a vykazuje je, pokud vůbec, jako samostatnou analýzu citlivosti ze společenské perspektivy, místo jejich míchání do ICER referenčního případu – viz [perspektiva analýzy](../perspektiva-analýzy/).

## Matematika

```
Human Capital Approach:
HCA_cost = daily_wage × days_lost

Friction Cost Method (simplified, capped-at-friction-period form):
FCM_cost = daily_wage × min(days_lost, friction_period_days)

friction_period_days = country/sector-specific estimate of time-to-restore
                        production (historically ~85 days in Dutch iMTA
                        costing guidance; varies by country and is
                        periodically re-estimated)
```

Celý rozpor mezi oběma metodami žije v `min()`: HCA nikdy `days_lost` neomezuje, takže náklad roste po celou nepřítomnost, zatímco FCM omezuje počítané dny na třecí období, jakkoli dlouhá je skutečná nepřítomnost.

## Řešený příklad

Zaměstnanec je mimo práci `days_lost = 180` dnů, s výdělkem `daily_wage = £150`.

**Přístup lidského kapitálu**:

```
HCA_cost = 150 × 180 = £27,000
```

**Metoda třecích nákladů** s třecím obdobím `friction_period_days = 85` (historický nizozemský benchmark iMTA, k datu periodického přehodnocování pokynů):

```
FCM_cost = 150 × min(180, 85) = 150 × 85 = £12,750
```

12 750 £ podle FCM je méně než polovina 27 000 £ podle HCA za *tutéž* nepřítomnost – samotná volba metody podstatně mění případ nákladů nemoci, ještě než se dotkneme jakéhokoli dalšího předpokladu.

## Souvislost se softwarovým inženýrstvím

Promítá se přímo do toho, jak tým oceňuje odchod inženýra:

- **Oceňování fluktuace ve stylu HCA**: ztráta oceněná jako plný plat odešlého inženýra po tak dlouho, jak role zůstane neobsazena. Je to naivní verze většiny modelů nákladů fluktuace a nadhodnocuje ztrátu ze stejného důvodu jako HCA nadhodnocuje ztrátu produktivity – předpokládá, že neobsazená kapacita byla po celou dobu plně produktivní a nic jiného nevstřebalo slack. Viz [udržení pracovní síly](../udržení-pracovní-síly/), které vyčísluje řetězec náboru/zapracování/pokrytí neobsazenosti, do něhož se tato metoda promítá.
- **Oceňování fluktuace ve stylu FCM**: ztráta oceněná jen po skutečnou dobu, než se náhrada najde a zapracuje – inženýrské „třecí období“. Je to obhajitelnější číslo pro byznys případ, přesně jako je FCM konzervativnější volbou ve studii nákladů nemoci.
- Základní disciplína je tatáž jako v [nákladech obětované příležitosti](../náklady-obětované-příležitosti/): oceňujte vytlačený zdroj tím, co je skutečně ztraceno, nikoli titulkovou dobou krát sazba.

## Úskalí

- **Míchání HCA a FCM v jedné analýze, nebo vykazování jen jedné bez zveřejnění volby.** Tatáž data o nepřítomnosti mohou dát 2× a vyšší rozdíl ve vykázaných nákladech podle metody; volba musí být uvedena, nikoli zakopána.
- **Použití HCA pro případ ze společenské perspektivy bez označení jako analýzy citlivosti.** Referenční případ NICE výslovně vylučuje produktivitní náklady; odhad HCA ze společenské perspektivy patří do scénářové analýzy, nikoli do titulkového ICER.
- **Aplikace kterékoli metody na neplacenou nebo netržní práci (např. péči) bez úpravy.** Obě metody předpokládají mzdovou sazbu jako proxy hodnoty, která se čistě nepřenáší na práci bez tržní mzdy.

## Zdroje

- Koopmanschap MA, Rutten FFH, van Ineveld BM, van Roijen L. "The friction cost method for measuring indirect costs of disease." Journal of Health Economics 1995;14(2):171-89.
- Drummond MF, Sculpher MJ, Claxton K, Stoddart GL, Torrance GW. "Methods for the Economic Evaluation of Health Care Programmes." 4th ed. Oxford University Press — topic on productivity costs.
- NICE health technology evaluations manual (PMG36) — reference-case perspective and optional societal-perspective guidance. <https://www.nice.org.uk/process/pmg36>
