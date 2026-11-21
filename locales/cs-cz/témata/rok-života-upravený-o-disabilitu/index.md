# Rok života upravený o disabilitu (DALY)

DALY je jeden ztracený rok zdravého života – zrcadlo [QALY](../rok-života-upravený-o-kvalitu/) na straně zátěže. Kde QALY počítají *získané* zdraví, DALY počítají zdraví *ztracené* kvůli nemoci; intervence se oceňují **odvrácenými** DALY.

## Proč na tom záleží

DALY je standardem globálního zdraví (WHO, studie Global Burden of Disease a většina ministerstev zdravotnictví zemí s nízkými a středními příjmy plánuje v DALY). Pokud váš software míří na mezinárodní zdravotní systémy, donory nebo programy sladěné s WHO, jazykem hodnoty jsou odvrácené DALY, nikoli získané QALY. Historický benchmark WHO-CHOICE: intervence odvracející DALY za méně než 1× HDP na obyvatele je „vysoce nákladově efektivní“, 1–3× HDP na obyvatele „nákladově efektivní“ (WHO nyní odrazuje od rigidního používání těchto pásem, ale v praxi zůstávají všudypřítomná).

## Matematika

```
DALY = YLL + YLD

YLL (years of life lost)         = deaths × standard life expectancy at age of death
YLD (years lived with disability) = prevalence × disability weight

disability weight ∈ [0, 1], 0 = full health, 1 = equivalent to death
(weights published by the Global Burden of Disease study)
```

## Řešený příklad

Platforma připomínek screeningu v regionu zvyšuje včasný záchyt nemoci. Ročně zabrání 10 předčasným úmrtím (každé ztratí 20 let oproti standardní naději dožití) a zabrání tomu, aby 200 lidí žilo rok s onemocněním s váhou disability 0,2.

```
YLL averted = 10 × 20        = 200
YLD averted = 200 × 0.2      = 40
DALYs averted               = 240 per year
```

Pokud provoz platformy stojí 600 000 USD/rok, náklady na odvrácené DALY jsou 600 000 / 240 = **2 500 USD**. V zemi s HDP na obyvatele 8 000 USD je to hluboko pod hranicí 1× HDP – „vysoce nákladově efektivní“ ve smyslu WHO-CHOICE.

## Souvislost se softwarovým inženýrstvím

- Digitální zdraví zaměřené na globální zdravotní donory (Gavi, Global Fund, národní programy) by mělo vyjadřovat dopad jako **náklady na odvrácené DALY** – je to metrika, v níž už posuzovatelé grantů myslí.
- DALY je také užitečnou šablonou *účetnictví zátěže* pro inženýrství: incidenty, nestabilní buildy a tření ze starého kódu jsou „roky žité s disabilitou“ pro kódovou základnu – soupis zátěže vážený prací (toil) ukáže, kde náprava koupí nejvíce „zdravých inženýrských let“, stejně jako tabulky zátěže GBD řídí výdaje na zdraví.

## Úskalí

- **Získané QALY ≠ odvrácené DALY číselně** – jiné váhy, jiné úmrtnostní tabulky, jiné konvence (DALY historicky používala věkové vážení a diskontování uvnitř míry). Nepřevádějte lehkovážně.
- **Používání prahů v násobcích HDP jako razítka** – samotná WHO varuje, že ignorují rozpočty a náklady obětované příležitosti; viz [prahy ochoty platit](../prahy-ochoty-platit/).
- **Tvrzení o DALY v populačním měřítku z účinnosti na uživatele** bez vynásobení přijetím a adherencí – viz [dosah a rovnost](../dosah-a-rovnost/).

## Zdroje

- WHO indicator registry: DALYs. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/158>
- Bertram MY, et al. "Cost-effectiveness thresholds: pros and cons." (WHO) <https://pmc.ncbi.nlm.nih.gov/articles/PMC4339959/>
- Marseille E, et al. on GDP-based thresholds, Health Policy and Planning. <https://academic.oup.com/heapol/article/32/1/141/2555408>
