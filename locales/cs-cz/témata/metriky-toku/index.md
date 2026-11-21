# Metriky toku

Metriky toku měří, jak práce prochází dodávacím systémem: cycle time, lead time, propustnost, rozpracovanost (WIP) a efektivitu toku. Řídí se Littleovým zákonem – toutéž teorií front, která řídí nemocniční lůžka a čekací listiny.

## Proč na tom záleží

Většina doby dodání není práce – je to čekání. Studie efektivity toku u znalostní práce běžně zjišťují, že na položkách se aktivně pracuje jen **5–15 %** uplynulé doby; zbytek jsou fronty. To znamená, že nejlevnější zrychlení je odstranění front, nikoli nábor – přesně poznatek, který objevily nemocniční programy toku pacientů u lůžek. U všeho, co má [náklady zpoždění](../náklady-zpoždění/), metriky toku lokalizují, kde se náklady zpoždění nahromadí.

## Matematika

```
Cycle time      = t(finished) − t(started)
Lead time       = t(delivered) − t(requested)     (includes pre-work queue)
Throughput      = items completed / period
WIP             = items started but unfinished
Flow efficiency = active time / (active + wait time) × 100

Little's Law:  average WIP = throughput × average cycle time
               (equivalently: cycle time = WIP / throughput)
```

Littleův zákon je páka: při pevné propustnosti zkrácení WIP zkracuje cycle time úměrně. Řídí i nemocnice: `beds occupied = admissions/day × length of stay`.

## Řešený příklad

Tým má rozpracovaných 40 položek a dokončuje 10 týdně: cycle time = 40/10 = 4 týdny. Zavedou limity WIP a sníží WIP na 15: cycle time = 15/10 = **1,5 týdne** – titíž lidé, táž propustnost, o 62 % rychlejší dodání, čistě z disciplíny front.

Oceněno pomocí CoD: pokud položky mají v průměru 3 000 £/týden nákladů zpoždění, každá položka nyní tráví o 2,5 týdne méně ve frontě: 10 položek/týden × 2,5 × 3 000 = **75 000 £/týden eliminovaných nákladů zpoždění** – ze změny pravidel bez nákladů.

Nemocniční zrcadlo: 40 přijetí/den × 6,0 dne LOS = 240 lůžek; snižte neklinické čekání uvnitř LOS na 5,6 dne a uvolní se 16 lůžek ([délka pobytu](../délka-pobytu/)) – týž zákon, táž páka.

## Souvislost se softwarovým inženýrstvím

Metriky toku jsou společným jazykem mezi dodávacím inženýrstvím a zdravotním provozem:

- **Benchmarky podfází PR** (LinearB, ~8 mil. PR): elitní doba převzetí < 7 h, revize < 6 h, celkový cyklus < ~26 h – doba převzetí je čistá fronta, první věc k útoku.
- **[Čekací listiny](../dopad-na-čekací-listinu/)** jsou nedodělky; **[RTT](../odeslání-k-léčbě/)** je lead time; **[obsazenost lůžek](../ušetřené-lůžkodny/)** je WIP. Zlepšení se přenášejí oběma směry: limity WIP ↔ vyhlazování přijetí; instrumentace doby ve frontě ↔ sledování fází cesty.
- Efektivita toku pod 15 % je normální v obou oblastech a obě to skrývají, protože *lidé* jsou zaneprázdnění, zatímco *práce* čeká – měřte hodiny práce, nikoli pracovníků.

## Úskalí

- **Uctívání vytížení**: tlačení využití pracovníků k 100 % exploduje doby front nelineárně (M/M/1: čekání ∝ ρ/(1−ρ)) – důvod, proč se nemocnice obsazené z 95 % zasekávají a týmy alokované z 95 % se zastavují.
- **Průměry přes zešikmená rozdělení**: cycle time mají těžké ocasy; předpovídejte percentily (p85), nikoli průměry.
- **Snižování WIP odmítáním práce na vstupu** a označování za zlepšení toku – poptávka nezmizela, zařadila se do fronty mimo hranici měření (nemocniční verze: sanitky čekající před ED).

## Zdroje

- Little's Law and flow metrics overviews. <https://agility-at-scale.com/safe/lpm/flow-metrics/> ; <https://getdx.com/blog/flow-metrics/>
- LinearB engineering benchmarks. <https://linearb.io/resources/engineering-benchmarks>
- Reinertsen DG, *The Principles of Product Development Flow*.
