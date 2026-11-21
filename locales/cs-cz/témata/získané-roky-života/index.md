# Získané roky života (LYG)

Získané roky života jsou dodatečné přežití přičitatelné intervenci, bez úpravy o kvalitu: plocha mezi křivkami přežití s intervencí a bez ní. Získaný rok života stejné hodnoty (evLYG) je moderní varianta, která ohodnocuje veškeré prodloužení života stejně.

## Proč na tom záleží

LYG je nejsurovější zdravotní výsledek: jak dlouho lidé žijí? Záleží na něm, když chybí data o kvalitě, při srovnání s publikem skeptickým k QALY a v onkologii, kde jsou křivky přežití hlavním výstupem studií. **evLYG** (používané americkým institutem ICER vedle nákladů/QALY) existuje z etického důvodu: QALY oceňují rok prodlouženého života užitkem pacienta, takže prodloužení života člověka s disabilitou „počítá méně“ – evLYG oceňuje každý prodloužený rok pevným užitkem, čímž tuto diskriminaci odstraňuje.

## Matematika

```
LYG = mean survival_new − mean survival_comparator
    = area between survival curves (restricted to the time horizon)

QALY view of life extension:  extension × patient utility
evLYG view of life extension: extension × fixed utility (ICER uses ~0.851,
                              the average US population utility)
```

Obojí se v ekonomických modelech [diskontuje](../diskontování-a-časová-preference/).

## Řešený příklad

Algoritmus včasného varování před sepsí v nemocnici: modelování ukazuje, že dřívější antibiotika zabrání 12 úmrtím ročně; průměrný věk těchto pacientů dává každému 8 zbývajících let života s užitkem 0,7.

```
LYG   = 12 × 8            = 96 life-years/year
QALYs = 96 × 0.7          = 67.2
evLYG = 96 × 0.851        = 81.7
```

Při 20 000 £ na QALY rámec QALY oceňuje přežití na 1,34 mil. £/rok; rámec evLYG na 1,63 mil. £. Rozdíl je přesně etický soud o tom, zda rok života s užitkem 0,7 stojí 70 % „plného“. Vážné dosje uvádějí obojí.

## Souvislost se softwarovým inženýrstvím

- Analýza přežití je sdílená sada nástrojů: křivky Kaplana–Meiera pro pacienty i pro *služby* (doba do selhání, doba do odchodu) jsou táž matematika. „Získané roky služby“ z investice do spolehlivosti = plocha mezi křivkami přežití systému s ní a bez ní – poctivější rámec než bodová tvrzení o MTTF.
- evLYG nese i pro inženýrství varování o návrhu metrik: každá metrika produktivity, která váží výstup faktorem „kvality týmu“, systematicky podhodnotí zlepšení pro omezené nebo bojující týmy – někdy chcete variantu stejné hodnoty záměrně.

## Úskalí

- **Medián vs průměr přežití**: ekonomické modely potřebují průměr (plocha pod křivkou); studie často uvádějí medián. U zešikmených rozdělení se výrazně liší.
- **Extrapolace za sledování studie** dominuje modelovaným LYG u chronických nemocí – uveďte extrapolační model a otestujte ho v [analýze citlivosti](../analýza-citlivosti/).
- **Tvrzení o předcházených úmrtích z observačních dat před/po** bez úpravy na případový mix a dlouhodobé trendy.

## Zdroje

- York Health Economics Consortium glossary: life-years gained. <https://yhec.co.uk/glossary/life-years-gained/>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
