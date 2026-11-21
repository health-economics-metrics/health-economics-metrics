# Metrike toka

Metrike toka mjere kako se rad kreće kroz sustav isporuke: vrijeme ciklusa, vrijeme isporuke, propusnost, rad u tijeku (WIP) i učinkovitost toka. Vlada njima Littleov zakon — ista matematika redova koja vlada bolničkim krevetima i listama čekanja.

## Zašto je važno

Većina vremena isporuke nije rad — to je čekanje. Studije učinkovitosti toka kod rada znanja rutinski nalaze da se na stavkama aktivno radi samo **5–15 %** proteklog vremena; ostalo su redovi. To znači da je najjeftinije ubrzanje uklanjanje redova, a ne zapošljavanje — upravo uvid do kojeg su došli bolnički programi protoka pacijenata o krevetima. Za sve s [troškom odgode](../trošak-odgode/), metrike toka lociraju gdje se trošak odgode akumulira.

## Matematika

```
Vrijeme ciklusa    = t(završeno) − t(započeto)
Vrijeme isporuke   = t(isporučeno) − t(zatraženo)     (uključuje red prije rada)
Propusnost         = završene stavke / razdoblje
WIP                = započete ali nedovršene stavke
Učinkovitost toka  = aktivno vrijeme / (aktivno + vrijeme čekanja) × 100

Littleov zakon:  prosječni WIP = propusnost × prosječno vrijeme ciklusa
                 (ekvivalentno: vrijeme ciklusa = WIP / propusnost)
```

Littleov zakon je poluga: pri fiksnoj propusnosti, smanjenje WIP-a smanjuje vrijeme ciklusa razmjerno. Vodi i bolnicama: `zauzeti kreveti = prijmovi/dan × duljina boravka`.

## Riješeni primjer

Tim ima 40 stavki u tijeku i dovrši 10/tjedan: vrijeme ciklusa = 40/10 = 4 tjedna. Uvedu WIP ograničenja, smanjujući WIP na 15: vrijeme ciklusa = 15/10 = **1,5 tjedna** — isti ljudi, ista propusnost, 62 % brža isporuka, isključivo iz discipline redova.

Vrednovano CoD-om: ako stavke u prosjeku imaju 3.000 £/tjedan troška odgode, svaka stavka sada provede 2,5 tjedna manje u redu: 10 stavki/tjedan × 2,5 × 3.000 = **75.000 £/tjedan eliminiranog troška odgode** — iz promjene pravila koja ne košta ništa.

Bolničko zrcalo: 40 prijma/dan × 6,0 dana LOS = 240 kreveta; smanjite neklinički čekanje unutar LOS-a na 5,6 dana i oslobađa se 16 kreveta ([duljina boravka](../duljina-boravka/)) — isti zakon, ista poluga.

## Veza sa softverskim inženjerstvom

Metrike toka su zajednički jezik između inženjeringa isporuke i zdravstvenih operacija:

- **Mjerila podfaza PR-a** (LinearB, ~8 mil. PR-ova): elitno vrijeme preuzimanja < 7 h, recenzija < 6 h, ukupni ciklus < ~26 h — vrijeme preuzimanja je čist red, prva stvar koju treba napasti.
- **[Liste čekanja](../utjecaj-na-listu-čekanja/)** su backlozi; **[RTT](../od-upute-do-liječenja/)** je vrijeme isporuke; **[popunjenost kreveta](../ušteđeni-bolnički-dani/)** je WIP. Poboljšanje se prenosi u oba smjera: WIP ograničenja ↔ ujednačavanje prijma; instrumentacija vremena u redu ↔ praćenje faza puta.
- Učinkovitost toka ispod 15 % je normalna u obje domene, a obje je skrivaju jer su *ljudi* zauzeti dok *rad* čeka — mjerite sat rada, a ne radnika.

## Zamke

- **Štovanje iskorištenosti**: guranje iskorištenosti radnika prema 100 % nelinearno eksplodira vrijeme u redu (M/M/1: čekanje ∝ ρ/(1−ρ)) — razlog zašto se bolnice s 95 % popunjenosti zagušuju, a timovi s 95 % alokacije staju.
- **Prosjeci preko asimetričnih distribucija**: vremena ciklusa su teškog repa; prognozirajte percentilima (p85), a ne prosjecima.
- **Smanjenje WIP-a odbijanjem posla na ulazu** i nazivanje toga poboljšanjem toka — potražnja nije nestala, nego je stala u red izvan granice mjerenja (bolnička inačica: hitna pomoć koja čeka ispred hitnog prijema).

## Izvori

- Little's Law and flow metrics overviews. <https://agility-at-scale.com/safe/lpm/flow-metrics/> ; <https://getdx.com/blog/flow-metrics/>
- LinearB engineering benchmarks. <https://linearb.io/resources/engineering-benchmarks>
- Reinertsen DG, *The Principles of Product Development Flow*.
