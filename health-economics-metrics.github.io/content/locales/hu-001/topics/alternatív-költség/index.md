# Alternatív költség

Az alternatív költség a lemondott legjobb alternatíva értéke, amikor egy erőforrást lekötsz. Egy rögzített költségvetésű egészségügyi rendszerben 1 millió £ elköltése valamire azt jelenti, hogy 1 millió £-nyi egészség *nem* jön létre valahol máshol.

## Miért fontos

Az alternatív költség az egészséggazdaságtan legmélyebb gondolata, és a szoftvermérnökök leggyakrabban ezt hagyják ki. Az egészségügyi költségvetések egy adott évben rögzítettek, ezért egy új technológiát soha nem „többletpénzből" finanszíroznak — valami mást szorít ki. A finanszírozó valójában nem azt kérdezi, hogy „jó-e ez?", hanem azt, hogy „jobb-e ez annál, amit ugyanaz a pénz jelenleg vásárol?"

Ezért léteznek egyáltalán a költséghatékonysági küszöbök: a küszöb annak becslése, hogy a pénz a jelenlegi rendszer határán mennyi egészséget vásárol. Lásd [fizetési hajlandósági küszöbök](../fizetési-hajlandósági-küszöbök/).

## A matematika

Nincs egyetlen képlet; az alternatív költség összehasonlítási fegyelem:

```
Opportunity cost of choosing A = value of best forgone alternative B
Net gain from A = value(A) − value(B)
```

Az empirikus viszonyítási alap: Claxton és munkatársai (2015) becslése szerint az NHS a határon nagyjából **13 000 £**-ért állít elő egy QALY-t. Tehát a 13 000 £, amelyet egy olyan technológiára költenek, amely egy QALY-nál kevesebbet hoz, *kevésbé* egészségessé teszi a nemzetet, még ha a technológia „működik" is.

## Kidolgozott példa

Egy NHS-tröszt átalakítási költségvetéséből pontosan az alábbiak egyike finanszírozható:

- **A lehetőség**: e-beosztás szoftver — évi 400 000 £-ot takarít meg az ügynökségi személyzeti kiadásokból.
- **B lehetőség**: elbocsátás-koordinációs szoftver — évi 2000 ágynapot takarít meg. Tényleges felszabadított ágynaponkénti mintegy 150 £ határköltség mellett ez évi 300 000 £, plusz a várakozó betegek korábbi kezelése.

Az A finanszírozása a B feladását jelenti. Az A alternatív költsége a B 300 000 £-ja + a betegelőny; az A *nettó* értéke csupán a különbség, nem az A 400 000 £-os főszáma. Bármely üzleti eset, amely egy javaslatot a „semmittevéshez" hasonlít a legjobb alternatíva helyett, túlbecsüli az értékét.

## Kapcsolat a szoftverfejlesztéssel

A mérnöki kapacitás is rögzített költségvetés — útitervi helyek, nem fontok. Az a platformcsapat, amely az A eszközt finanszírozza, amely óránként 500 £-ért takarít meg mérnökórákat, amikor a B eszköz ugyanezt óránként 200 £-ért nyújtja, kapacitást pazarol, pontosan úgy, ahogy az az egészségügyi rendszer, amely egy 40 000 £/QALY-s gyógyszert finanszíroz, kiszorít 13 000 £/QALY-s ellátást. A fegyelem közvetlenül átvihető:

- Mindig nevezd meg az összehasonlítót („mihez képest?").
- A mérnöki időt aszerint értékeld, mit termelne egyébként, ne csak a fizetés alapján.
- A „maradt még költségvetés" az elemzés kezdete, nem a vége.

## Buktatók

- **Összehasonlítás a semmivel.** A helyes összehasonlító a pénz következő legjobb felhasználása, ami ritkán a „semmittevés".
- **Annak feltételezése, hogy a megtakarított időnek nulla az alternatív költsége.** A megtakarított idő csak akkor értékes, ha értékes célra csoportosítják át — lásd [készpénzfelszabadító és nem készpénzfelszabadító megtakarítások](../készpénzfelszabadító-és-nem-készpénzfelszabadító-megtakarítások/).
- **A kiszorítás figyelmen kívül hagyása.** „A költségvetés ki fog bővülni" egy nemzeti egészségügyi szolgálatban az adott évben szinte soha nem igaz.
- **Annak figyelmen kívül hagyása, melyik módszer értékeli a kiszorított erőforrást.** A kieső termelékenységre — betegségből, fogyatékosságból vagy távozó munkavállalóból eredően — lásd [humántőke-megközelítés és súrlódási költség módszer](../humántőke-megközelítés-és-súrlódási-költség-módszer/), ennek a gondolatnak a termelékenységi költségekre szabott változatát.

## Források

- Claxton K, et al. "Methods for the estimation of the NICE cost effectiveness threshold." Health Technology Assessment 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- York Health Economics Consortium glossary. <https://yhec.co.uk/glossary/opportunity-cost/>
