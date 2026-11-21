# Izbjegavanje hitnih dolazaka

Izbjegavanje hitnih dolazaka broji posjete hitnom prijmu (ED, A&E) i hitne prijme spriječene intervencijom na početku lanca — aplikacije za trijažu, daljinsko praćenje, virtualni odjeli, preusmjeravanje na hitnu skrb. Pretvara „uhvatili smo ranije” u troškovno iskazanu tvrdnju.

## Zašto je važno

Hitna skrb je najskuplje rutinsko okruženje u sustavu (jedinični troškovi dolaska u hitni prijem u rasponu 250–400 £ prema National Cost Collection / PSSRU; hitni prijam stoji tisuće), a gužva u hitnom prijemu kaskadira u kašnjenja hitne pomoći i otkazane elektivne zahvate. Sve što sigurno razrješava potražnju nizvodno — savjeti o samozbrinjavanju, primarna skrb istog dana, odgovor u zajednici — kupuje sustavu kapacitet u najopterećenijoj točki. To je standardna stavka koristi za provjeru simptoma, trijažne usluge u stilu 111 i [daljinsko praćenje pacijenata](../ekonomija-daljinskog-praćenja-pacijenata/).

## Matematika

```
Izbjegnuti dolasci = populacija × (osnovna stopa − stopa s intervencijom)
Bruto ušteda       = izbjegnuti dolasci × jedinični trošak po dolasku
                     (+ izbjegnuti prijmovi × trošak prijma, brojano zasebno)

Neto ušteda        = bruto ušteda − trošak intervencije − trošak korištenja novog puta
                     (preusmjerena potražnja nije besplatna: poziv 111, termin
                      kod liječnika opće prakse, dan virtualnog odjela imaju jedinične troškove)
```

Uzročna tvrdnja treba komparator: stope dolazaka imaju trend i sezonski variraju, pa samo prije/poslije ništa ne dokazuje.

## Riješeni primjer

Usluga daljinskog praćenja KOPB-a za 3.000 visokorizičnih pacijenata. Evaluacija s usklađenom kontrolom pokazuje da dolasci u hitni prijem povezani s egzacerbacijama padaju s 0,9 na 0,7 po pacijentogodini, a hitni prijmovi s 0,5 na 0,42.

```
Izbjegnuti dolasci = 3,000 × 0.2  = 600 × £300   = £180,000
Izbjegnuti prijmovi = 3,000 × 0.08 = 240 × £3,800 = £912,000
Bruto                                              £1,092,000/godišnje

Troškovi: usluga praćenja £600,000; dodatni odgovori medicinskih sestara u zajednici £150,000
Neto ≈ +£342,000/godišnje — plus QALY dobici egzacerbacija liječenih ranije.
```

Primijetite da stavka prijmova dominira: samo izbjegavanje dolazaka rijetko plaća uslugu praćenja; novac je u izbjegavanju *prijma*.

## Veza sa softverskim inženjerstvom

Ovo je **ekonomija izbjegavanja incidenata**. Vrijednost observabilnosti, canary puštanja u rad i sustava ranog upozorenja su izbjegnuti „hitni dolasci” — paging, war room, sev-1 — svaki s punim troškom (inženjerski sati × satnica + utjecaj na korisnike). Vrijede ista pravila modeliranja: netirajte trošak novog puta nizvodno (trijaža upozorenja nije besplatna), pazite na supstituciju (upozorenja koja stvaraju posao bez sprječavanja incidenata su zdravstvena anksioznost, a ne zdravlje) i dokažite kontrafaktualni scenarij kontrolom (stope incidenata timova imaju trend i regresiju prema sredini, baš kao dolasci u hitni prijem).

## Zamke

- **Regresija prema sredini**: visokorizične kohorte odabrane po lošoj godini poboljšavaju se i neliječene; usklađene kontrole ili stepped-wedge dizajni su nužni.
- **Potražnja inducirana ponudom**: laka digitalna trijaža može *povećati* ukupne kontakte (niži prag traženja pomoći) dok smanjuje udio hitnog prijema — brojite ukupni trošak sustava.
- **Vrednovanje dolazaka prosječnim troškom** kad fiksni troškovi hitnog prijema ne padaju — vidi [granični naspram prosječnog troška](../granični-naspram-prosječnog-troška/).

## Izvori

- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
