# Očekivana vrijednost savršene informacije (EVPI)

EVPI je najveći iznos koji donositelj odluke treba platiti za uklanjanje neizvjesnosti prije odlučivanja — formalna cijena „prvo provedimo studiju”.

## Zašto je važno

Zdravstveni sustavi stalno biraju: usvojiti odmah na nesavršenim dokazima ili prvo financirati dodatno istraživanje. EVPI daje broj za drugu opciju. Ako je EVPI 50.000 £, a predloženo ispitivanje košta 2 milijuna £, usvojite odmah. Ako je EVPI 20 milijuna £, ispitivanje je povoljna kupnja. Isto pitanje — „trebamo li ovo pilotirati prije uvođenja?” — javlja se kod svake odluke o poslovnom alatu, a gotovo nitko ga ne cijeni. Za vrednovanje opcije kasnijeg širenja projekta, umjesto opcije prethodnog prikupljanja informacija, vidi [vrednovanje realnih opcija](../vrednovanje-realnih-opcija/).

## Matematika

EVPI je razlika između odlučivanja uz savršeno predviđanje i odlučivanja sada na temelju očekivanja:

```
EVPI = E_θ[ max_j NMB(j, θ) ]  −  max_j E_θ[ NMB(j, θ) ]

θ        = neizvjesni parametri (sa zajedničkom distribucijom)
NMB(j,θ) = neto novčana korist opcije j uz zadani θ
```

Prvi član: prosjek isplate najboljeg izbora kroz svaki mogući svijet (uvijek birate ispravno). Drugi član: isplata jedne opcije koja je prosječno najbolja (morate se obvezati sada). EVPI ≥ 0 uvijek. Populacijski EVPI množi se brojem pogođenih odluka. Izračunava se izravno iz izvlačenja [PSA](../probabilistička-analiza-osjetljivosti/).

## Riješeni primjer

Uvesti AI asistenta za dokumentaciju za 5.000 kliničara, ili ne. Dva svijeta:

```
Svijet A (p = 0.6): asistent štedi 20 min/dan → NMB uvođenja = +£8M
Svijet B (p = 0.4): asistent štedi ~0 (trenje u radnom toku) → NMB uvođenja = −£3M
NMB opcije „ne uvoditi” = £0 u oba svijeta.
```

Odlučiti sada: E[NMB uvođenja] = 0,6 × 8 − 0,4 × 3 = **+3,6 mil. £** → uvesti.

Uz savršenu informaciju: u svijetu A izaberite uvođenje (+8 mil. £), u svijetu B ništa (0 £). Očekivana vrijednost = 0,6 × 8 + 0,4 × 0 = **4,8 mil. £**.

```
EVPI = 4.8M − 3.6M = £1.2M
```

Rigorozan trimjesečni pilot koji košta 150.000 £ i bitno razrješava u kojem ste svijetu svakako se isplati — a svaki pilot skuplji od 1,2 mil. £ ne isplati se, koliko god bio temeljit.

## Veza sa softverskim inženjerstvom

EVPI je ekonomija spikea, pilota, A/B testa i proof-of-concepta. Daje dva praktična pravila:

- **Pilot vrijedi financirati samo ako odluka doista može promijeniti ishod.** Ako biste uveli bez obzira na rezultat pilota, EVPI = 0, a pilot je teatar.
- **Ograničite potrošnju na pilot na EVPI.** Vrijednost informacije ograničena je vrijednošću odluke koju informira.

Parcijalni EVPI (EVPPI) proširuje to na pojedinačne parametre: „koliko vrijedi precizno utvrditi baš broj ušteđenog vremena?” — što govori što bi pilot trebao mjeriti. Za vrednovanje *konkretne predložene studije*, umjesto uklanjanja sve neizvjesnosti, vidi [EVSI](../očekivana-vrijednost-informacije-iz-uzorka/).

## Zamke

- **Provođenje pilota bez pravila odlučivanja** — informacija koja ne može promijeniti izbor po definiciji je bezvrijedna.
- **Zanemarivanje troška odgode prikupljanja informacija**: šestomjesečni pilot odgađa 6 mjeseci koristi ([trošak odgode](../trošak-odgode/)); neto vrijednost pilota = razriješeni EVPI − trošak odgode − trošak pilota.
- **Tretiranje EVPI-ja kao prognoze.** To je gornja granica vrijednosti informacije, a ne procjena onoga što će konkretna studija isporučiti.

## Izvori

- Claxton K. "Exploring uncertainty in cost-effectiveness analysis." PharmacoEconomics 2008. <https://pubmed.ncbi.nlm.nih.gov/18279550/>
- York Health Economics Consortium glossary: EVPI. <https://yhec.co.uk/glossary/expected-value-of-perfect-information-evpi/>
