# Povrat ulaganja (ROI)

ROI je omjer neto dobiti i uloženog novca. To je metrika koju inženjerstvo i financije već dijele — zdravstvena ekonomija dodaje disciplinu koja čini da tvrdnja o ROI-ju preživi provjeru: deklariranu perspektivu, komparator, horizont i kategorije koristi.

## Zašto je važno

ROI je lingua franca nositelja proračuna, a koristi ga i javno zdravstvo: prijelomni pregled Mastersa i sur. pronašao je **medijan ROI-ja od 14,3:1** za javnozdravstvene intervencije (svaka 1 £ vraća ~14 £ široj ekonomiji i zdravstvenom sustavu) — broj koji se široko koristi za argumentiranje potrošnje na prevenciju. No tih 14:1 je *društvena* brojka dugog horizonta; ROI bolničkog financijskog direktora je iz perspektive platitelja i 1–3 godine. Većina rasprava o ROI-ju zapravo su rasprave o nedeklariranoj perspektivi.

## Matematika

```
ROI = (Koristi − Troškovi) / Troškovi      (često × 100%)

Period povrata = Troškovi / godišnja neto korist
```

Tvrdnja o ROI-ju nedovoljno je određena bez četiri deklaracije:

1. **Perspektiva** — čije koristi vrijede? (vidi [perspektivu analize](../perspektiva-analize/))
2. **Komparator** — naspram koje alternative? (vidi [oportunitetni trošak](../oportunitetni-trošak/))
3. **Horizont** — kroz koliko dugo i [diskontirano](../diskontiranje-i-vremenska-preferencija/)?
4. **Klasa koristi** — oslobađa gotovinu, kapacitet ili kvalitativna? (vidi [uštede koje oslobađaju gotovinu naspram onih koje je ne oslobađaju](../uštede-koje-oslobađaju-gotovinu-naspram-onih-koje-je-ne-oslobađaju/))

## Riješeni primjer

Sustav e-raspoređivanja, trošak 500.000 £ kroz 3 godine.

```
Oslobađa gotovinu:  smanjenje agencijskih smjena       £450,000
Kapacitet:          oslobođeno administrativno vrijeme voditelja odjela £600,000 (vrednovano, ne pohranjeno)
Kvalitativno:       zadovoljstvo osoblja, sigurnost    nije unovčeno

Strogi financijski ROI = (450,000 − 500,000)/500,000 = −10%
Ekonomski ROI          = (1,050,000 − 500,000)/500,000 = +110%
```

Oba broja su istinita. Dobavljač koji financijskom direktoru koji može uštedjeti samo 450 tis. £ citira „+110 % ROI” izgubit će povjerenje; prikaz oboje, označenog, osvaja ga. Ista podjela štiti internog zagovaratelja kad financije revidiraju koristi dvije godine kasnije.

## Veza sa softverskim inženjerstvom

Svaki prijedlog alata ima slajd s ROI-jem; gotovo nijedan ne deklarira četiri parametra. Najčešći neuspjeh je miješanje kategorija: dobici u kapacitetu (programerske minute) predstavljeni kao financijski povrat. Strukturirajte ROI AI-ja/platforme kao u gornjem primjeru — redak gotovine, redak kapaciteta, kvalitativni redak — i dodajte [analizu osjetljivosti](../analiza-osjetljivosti/) na meke brojeve. Za provjeru stvarnosti P&L-a konkretno za ROI AI-ja vidi [povrat ulaganja u AI](../povrat-ulaganja-u-ai/).

## Zamke

- **Pranje perspektive**: društvene koristi kroz desetljeće citirane nositelju proračuna s horizontom od 12 mjeseci.
- **Bruto umjesto neto**: „vraća 3 mil. £” na potrošnju od 2 mil. £ je 50 % ROI, a ne 300 %.
- **Maksimizacija omjera**: sićušni nazivnici daju spektakularne ROI-jeve na trivijalnim ulaganjima; rangirajte portfelje po NPV-u ili [neto novčanoj koristi](../neto-novčana-korist/), ROI koristite kao sito.
- **Bez revizije koristi**: prognozirani ROI bez praćenja [ostvarenja koristi](../ostvarenje-koristi/) je obećanje, a ne rezultat.

## Izvori

- Masters R, et al. "Return on investment of public health interventions: a systematic review." J Epidemiol Community Health 2017. <https://pmc.ncbi.nlm.nih.gov/articles/PMC5537512/>
- HM Treasury Green Book. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
