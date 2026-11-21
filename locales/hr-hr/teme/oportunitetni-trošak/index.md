# Oportunitetni trošak

Oportunitetni trošak je vrijednost najbolje alternative kojom se odričete kad angažirate neki resurs. U zdravstvenom sustavu s fiksnim proračunom trošenje 1 milijuna £ na jednu stvar znači 1 milijun £ zdravlja koje *nije* proizvedeno negdje drugdje.

## Zašto je važno

Oportunitetni trošak najdublja je ideja zdravstvene ekonomije, a softverski inženjeri je najčešće preskaču. Zdravstveni proračuni u svakoj su godini fiksni pa se nova tehnologija nikada ne financira iz „viška” novca — ona nešto istiskuje. Pitanje koje platitelj zapravo postavlja nije „je li ovo dobro?”, nego „je li ovo bolje od onoga što isti novac trenutačno kupuje?”

Zato uopće postoje pragovi isplativosti: prag je procjena zdravlja koje novac kupuje na margini postojećeg sustava. Vidi [pragove spremnosti na plaćanje](../pragovi-spremnosti-na-plaćanje/).

## Matematika

Ne postoji jedna formula; oportunitetni trošak je disciplina uspoređivanja:

```
Oportunitetni trošak odabira A = vrijednost najbolje propuštene alternative B
Neto dobitak od A = vrijednost(A) − vrijednost(B)
```

Empirijski mjerilo: Claxton i sur. (2015) procijenili su da NHS na margini proizvede jedan QALY za otprilike **13.000 £**. Dakle, 13.000 £ potrošenih na tehnologiju koja daje manje od jednog QALY-ja čini naciju *manje* zdravom, čak i ako tehnologija „radi”.

## Riješeni primjer

Transformacijski proračun NHS-ova trusta može financirati točno jedno od sljedećeg:

- **Opcija A**: softver za e-raspoređivanje osoblja — štedi 400.000 £ godišnje na troškovima agencijskog osoblja.
- **Opcija B**: softver za koordinaciju otpusta — štedi 2.000 bolničkih dana godišnje. Uz granični trošak od oko 150 £ po stvarno oslobođenom bolničkom danu to je 300.000 £ godišnje, plus raniji tretman pacijenata na listi čekanja.

Financiranje opcije A znači odricanje od opcije B. Oportunitetni trošak opcije A je 300.000 £ opcije B + korist za pacijente; *neto* opravdanje za A samo je razlika, a ne A-ovih naslovnih 400.000 £. Svaki poslovni slučaj koji prijedlog uspoređuje s „ne radi ništa”, umjesto s najboljom alternativom, precjenjuje njegovu vrijednost.

## Veza sa softverskim inženjerstvom

Inženjerski kapacitet također je fiksni proračun — mjesta na planu razvoja, a ne funkte. Platformski tim koji financira alat A koji štedi inženjerske sate po 500 £/sat, kad alat B isto postiže po 200 £/sat, uništava kapacitet, baš kao što zdravstveni sustav koji financira lijek od 40.000 £/QALY istiskuje skrb od 13.000 £/QALY. Disciplina se izravno prenosi:

- Uvijek imenujte komparator („u odnosu na što?”).
- Vrednujte inženjersko vrijeme prema onome što bi inače proizvelo, a ne samo prema plaći.
- „Ostao nam je proračun” tretirajte kao početak analize, a ne kraj.

## Zamke

- **Usporedba s ničim.** Ispravan komparator je sljedeća najbolja uporaba novca, što je rijetko „ne raditi ništa”.
- **Pretpostavka da ušteđeno vrijeme nema oportunitetni trošak.** Ušteđeno vrijeme vrijedi samo ako se preusmjeri na nešto vrijedno — vidi [uštede koje oslobađaju gotovinu naspram onih koje je ne oslobađaju](../uštede-koje-oslobađaju-gotovinu-naspram-onih-koje-je-ne-oslobađaju/).
- **Zanemarivanje istiskivanja.** „Proračun će se proširiti” u nacionalnoj zdravstvenoj službi tijekom godine gotovo nikad ne vrijedi.
- **Zanemarivanje metode kojom se vrednuje istisnuti resurs.** Za izgubljenu produktivnost posebno — zbog bolesti, invaliditeta ili odlaska zaposlenika — vidi [pristup ljudskog kapitala naspram metode troška trenja](../pristup-ljudskog-kapitala-naspram-metode-troška-trenja/), inačicu ove ideje specifičnu za troškove produktivnosti.

## Izvori

- Claxton K, et al. "Methods for the estimation of the NICE cost effectiveness threshold." Health Technology Assessment 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- York Health Economics Consortium glossary. <https://yhec.co.uk/glossary/opportunity-cost/>
