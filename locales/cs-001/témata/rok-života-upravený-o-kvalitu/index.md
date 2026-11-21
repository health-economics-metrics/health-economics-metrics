# Rok života upravený o kvalitu (QALY)

QALY je jeden rok života prožitý v dokonalém zdraví. Kombinuje *jak dlouho* lidé žijí s tím, *jak dobře* žijí, takže rok ve špatném zdraví se počítá jako méně než jedno QALY – což činí zcela odlišné zdravotní intervence srovnatelnými na jediné škále.

## Proč na tom záleží

QALY je společnou měnou hodnocení zdravotnických technologií. NICE (Anglie) oceňuje zdravotní zisky na **20 000–30 000 £ za QALY**: intervence, která kupuje QALY levněji, než je tento práh, se obvykle doporučí; ta, která je kupuje dráž, se obvykle zamítne. Toto jediné číslo je způsob, jak národní zdravotní služba srovnává lék na rakovinu, výměnu kyčle a triážní aplikaci na téže ose. Pokud váš software může věrohodně nárokovat QALY – předcházením zhoršení, urychlením léčby nebo zlepšením bezpečnosti – můžete ocenit jeho zdravotní hodnotu ve stejné měně jako samotná medicína.

## Matematika

```
QALYs = Σ_i (duration_i × utility_i)
duration_i = years spent in health state i
utility_i  = quality weight of state i, anchored at 1 = perfect health, 0 = dead
             (negative values allowed for states worse than death)
```

Užitkové váhy pocházejí z validovaných nástrojů, nejčastěji [EQ-5D](../eq-5d/). *Zisk* QALY z intervence je rozdíl mezi toky QALY s ní a bez ní, [diskontovaný](../diskontování-a-časová-preference/) 3,5 %/rok v referenčním případu NICE.

## Řešený příklad

Pacient čeká na kardiologickou léčbu ve stavu s užitkem 0,6. Léčba ho vrátí na užitek 0,85.

- **Léčen nyní**: 1 rok při 0,85 = 0,85 QALY tento rok.
- **Léčen po 6měsíčním zpoždění**: 0,5 × 0,6 + 0,5 × 0,85 = 0,725 QALY.
- **Ztráta QALY na pacienta ze zpoždění**: 0,85 − 0,725 = **0,125 QALY**.

Monetizováno prahem NICE: 0,125 × 20 000–30 000 £ = **2 500–3 750 £ ztracené zdravotní hodnoty na pacienta za 6měsíční zpoždění**. Pokud software urychlující cestu odstraní toto zpoždění u 400 pacientů ročně, zdravotní hodnota je 50 QALY ≈ **1,0–1,5 mil. £/rok** – před započtením jakýchkoli provozních úspor.

## Souvislost se softwarovým inženýrstvím

- **Rychlejší cesty = dřívější QALY.** Cokoli, co zkracuje [odeslání k léčbě](../odeslání-k-léčbě/), převádí neužitek z čekání na zdravotní zisk, oceněný jako výše.
- **Bezpečnost = zachovaná QALY.** Předcházené medikační chyby a zmeškané diagnózy jsou odvrácené ztráty QALY.
- **QALY je také šablonou návrhu metrik**: kompozit množství × kvalita s váhami kvality zjištěnými ze standardizovaného nástroje. „Inženýrský rok upravený o kvalitu“ (čas × váha z průzkumu DevEx) je stejná konstrukce – viz [SPACE a DevEx](../space-a-devex/).
- Pro převod QALY na peníze v byznys případu použijte [čistý peněžní přínos](../čistý-peněžní-přínos/); pro převod na rozhodnutí [prahy ochoty platit](../prahy-ochoty-platit/).

## Úskalí

- **Vymýšlení užitkových vah.** Váhy musí pocházet z validovaných nástrojů (EQ-5D) a zveřejněných sad hodnot, nikoli z intuice.
- **Tvrzení o QALY bez kauzální cesty.** „Naše aplikace zlepšuje wellbeing“ není tvrzení o QALY; „odstraňuje X týdnů čekání ve stavu s užitkem 0,6“ je.
- **Dvojí započtení**: nárokování zisku QALY i úspor nákladů téhož odvráceného zhoršení vyžaduje péči, aby byly skutečně oddělené.
- **Slepá místa v rovnosti**: QALY oceňují rok prodloužení života základním užitkem, což může znevýhodnit lidi s disabilitou – důvod, proč ICER (USA) vykazuje také evLYG (viz [získané roky života](../získané-roky-života/)).

## Zdroje

- NICE glossary: QALY. <https://www.nice.org.uk/glossary?letter=q>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
