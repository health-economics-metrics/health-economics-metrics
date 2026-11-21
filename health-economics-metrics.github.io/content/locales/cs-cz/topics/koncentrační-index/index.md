# Koncentrační index

Koncentrační index (Wagstaff, Paci, van Doorslaer, 1991) je standardní statistická míra socioekonomicky podmíněné nerovnosti ve zdravotní proměnné v rozsahu od −1 do 1. Záporná hodnota znamená, že zdravotní proměnná je soustředěna mezi socioekonomicky znevýhodněnými, kladná, že je soustředěna mezi lépe situovanými, a nula znamená žádný konzistentní socioekonomický gradient – mění podezření na nerovné rozdělení v jediné srovnatelné číslo.

## Proč na tom záleží

Program může vypadat účinně v souhrnu a přesto doručovat svůj přínos téměř výhradně lidem, kterým se už dařilo lépe. Právě takové distribuční obavy popisně sleduje [dosah a rovnost](../dosah-a-rovnost/) – dosah stratifikovaný podle kvintilů deprivace, rozdíl rovnosti mezi nejvyšší a nejnižší skupinou – ale stratifikovaná tabulka se nezhustí do jediné trendové čáry a nelze ji snadno srovnávat mezi dvěma zcela odlišnými intervencemi měřenými na různých škálách. Koncentrační index řeší oba problémy: počítá se stejně pro libovolnou zdravotní proměnnou vůči libovolnému socioekonomickému pořadí, takže národní zdravotní služba může sledovat, zda se nerovnost konkrétní digitální služby od vydání k vydání zvětšuje, nebo zmenšuje, a může srovnávat distribuční spravedlnost zavedení aplikace například se screeningovým programem na téže normalizované škále.

## Matematika

```
CI = (2 / mean(health_values)) × Cov(health_values, socioeconomic_ranks)

Cov(X, Y) = mean(X × Y) − mean(X) × mean(Y)   (population covariance)

socioeconomic_ranks: each person's fractional rank in the socioeconomic
distribution, in [0, 1] (0 = most disadvantaged, 1 = most advantaged;
for grouped/banded data, conventionally the midpoint rank of each group)
```

Je to „pohodlný kovarianční vzorec“ (O'Donnell, van Doorslaer, Wagstaff, Lindelow, World Bank 2008) – standardní zkratka praktiků pro výpočet koncentračního indexu přímo z párových pozorování, bez předchozího kreslení a integrování pod koncentrační křivkou.

## Řešený příklad

Sebehodnocené skóre dobrého zdraví (1 = nejhorší, 4 = nejlepší) pozorované napříč čtyřmi stejně velkými socioekonomickými kvartily, každý reprezentovaný pořadím středu kvartilu:

```
health_values        = [1.0, 2.0, 3.0, 4.0]
socioeconomic_ranks  = [0.125, 0.375, 0.625, 0.875]

mean(health_values)        = 2.5
mean(health × rank)        = mean([0.125, 0.75, 1.875, 3.5]) = 1.5625
mean(socioeconomic_ranks)  = 0.5

Cov = 1.5625 − 2.5 × 0.5 = 0.3125

CI = 2 × 0.3125 / 2.5 = 0.25
```

Kladné `0.25` znamená, že toto zdravotní skóre je soustředěno ve socioekonomicky zvýhodněné skupině – respondenti s vyšším skóre se přiklánějí k lépe situovanému konci pořadí.

## Souvislost se softwarovým inženýrstvím

Je to totéž kovarianční měření nerovnosti, jaké se používá v ekonomii obecně (bratranec Giniho koeficientu), a promítá se do měření, zda jsou přínosy softwarového produktu soustředěny mezi již zvýhodněnými segmenty uživatelů, místo aby byly rozloženy spravedlivě – přímé rozšíření [dosahu a rovnosti](../dosah-a-rovnost/) (dimenze „reach“ v RE-AIM) do formální statistické míry místo popsaného rozdílu. Kde dosah a rovnost uvádí dopad na stratum, Koncentrační index stlačí celé rozdělení do jediného znaménkového čísla, vhodného jako jediný sledovaný KPI napříč vydáními – praktického pro dashboard, kde úplný stratifikovaný rozpis nelze zobrazit.

## Úskalí

- **Drift znaménkové konvence**: znaménko závisí na definici zdravotní proměnné i pořadí – otočení kterékoli otočí znaménko, takže použitá konvence musí být vždy výslovně uvedena u každé vykázané hodnoty.
- **Hraniční pořadí místo pořadí středu**: seskupená nebo pásmová socioekonomická data (např. kvintily) vyžadují použití zlomkového pořadí každé skupiny v jejím *středu*, nikoli na hranici, jinak je index zkreslený.
- **Čtení „blízko nuly“ jako „žádná nerovnost“**: Koncentrační index blízko nuly znamená „žádný konzistentní socioekonomický gradient“, nikoli „žádná nerovnost“ v absolutním smyslu – vyrovnávající se nerovnosti v různých směrech se mohou vzájemně rušit.

## Zdroje

- Wagstaff A, Paci P, van Doorslaer E. "On the measurement of inequalities in health." Soc Sci Med. 1991;33(5):545-57.
- O'Donnell O, van Doorslaer E, Wagstaff A, Lindelow M. "Analyzing Health Equity Using Household Survey Data." World Bank. 2008 — the standard practitioner handbook, source of the convenient covariance formula used here. <https://openknowledge.worldbank.org/entities/publication/98380884-0d1d-53d2-b95f-ec6be2019414>
