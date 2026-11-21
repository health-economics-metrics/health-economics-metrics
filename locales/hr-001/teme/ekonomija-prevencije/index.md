# Ekonomija prevencije

Ekonomija intervencije prije nego što bolest nastane ili napreduje. Naslovni nalaz je neintuitivan: **većina prevencije ne štedi novac** — ona kupuje zdravlje po dobroj cijeni. Prijelomna NEJM analiza Cohena, Neumanna i Weinsteina pokazala je da je manje od 20 % preventivnih intervencija neto štedljivo; ostatak je u najboljem slučaju isplativ.

## Zašto je važno

„Prevencija štedi novac” najponavljanija je lažna tvrdnja u zdravstvenoj politici, a poslovne slučajeve izgrađene na njoj zdravstveni ekonomisti ruše. Pošteni sklop: prevencija sada košta novac (probir cijelih populacija, liječenje čimbenika rizika kod ljudi koji nikad ne bi obolili) i vraća zdravlje kasnije — obično po *dobroj* cijeni po QALY-ju, povremeno uz uštedu, ponekad po užasnoj cijeni. Znati u kojem ste režimu jest analiza. Razlika je komercijalno važna: proizvod prevencije prodan kao „štedi NHS-u novac” izaziva reviziju koju će pasti; prodan kao „kupuje QALY-je po 4.000 £” može pobijediti na istim činjenicama. Vidi [ranu intervenciju](../ranija-intervencija/) za inačicu unutar puta. Prije troškovanja programa prevencije, [populacijski pripisivi udio](../populacijski-pripisivi-udio/) prvo odgovara na pitanje opsega — koliki dio ciljanog tereta bolesti čimbenik rizika koji program adresira uvjerljivo može ukloniti.

## Matematika

```
Neto trošak prevencije (po osobi) =
    trošak intervencije × svi liječeni
  − izbjegnuti nizvodni troškovi × rijetki koji bi napredovali
  (oboje diskontirano — izbjegnuti troškovi su godinama daleko; vidi
   discounting-and-time-preference.md)

Štednja troška zahtijeva: trošak intervencije < P(napredovanje) × izbjegnuti trošak × faktor diskonta
Isplativost zahtijeva samo: neto trošak / dobiveni QALY-ji < prag
```

Paradoks prevencije: trošak intervencije množi se kroz cijelu populaciju; koristi stječu samo kontrafaktualni rijetki.

## Riješeni primjer

Aplikacija za upravljanje hipertenzijom ponuđena 100.000 odraslih u riziku, 25 £/osobi/godišnje. Kroz 10 godina sprječava 400 moždanih udara (svaki košta 45.000 £ diskontirano i gubi 3 QALY-ja).

```
Trošak:   100,000 × £25 × 10 god (diskontirano ≈ ×8.3) ≈ £20.8M
Odbici:   400 × £45,000 = £18.0M
Neto trošak ≈ £2.8M — NIJE štedljivo

Dobiveni QALY-ji = 400 × 3 = 1,200
Trošak po QALY-ju = 2.8M / 1,200 ≈ £2,300/QALY — izvanredno isplativo
```

Isti program, obje istine: gubi 2,8 mil. £ u gotovini i kupuje zdravlje po desetini NICE-ova praga. Financirajte ga na temelju drugog broja; nikad ne obećavajte prvi.

## Veza sa softverskim inženjerstvom

Kvaliteta „shift-left” je ekonomija prevencije, uz upozorenje. Recenzije, testovi i statička analiza primjenjuju trošak na *svaku* promjenu da uhvate probleme u rijetkima koji bi napredovali do produkcijskih incidenata. Krivulja troška defekata (10–100× po fazi) igra ulogu troškova moždanog udara — a pošteni zaključak zrcali zdravstvo: shift-left je obično *isplativ*, a ne automatski *štedljiv*, jer većina označenih problema nikad ne bi postala incident (problem kontrafaktualnih rijetkih). Izračunajte: ukupni trošak vrata po razdoblju naspram stvarno izbjegnutih incidenata × trošak incidenta — ista struktura riješenog primjera, s [NNT](../broj-potreban-za-liječenje/) kao jedinicom po hvatanju.

## Zamke

- **Tvrdnja o uštedi troška kad dokazi podupiru isplativost** — definirajuća pogreška zagovaranja prevencije u obje domene.
- **Nediskontirani budući odbici**: koristi 15 godina unaprijed po nominalnoj vrijednosti.
- **Zanemarivanje troškova prekomjerne dijagnoze/prekomjernog liječenja**: prevencija pronalazi i pseudo-bolest — vidi [ekonomiju probira](../ekonomija-probira/).

## Izvori

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- Masters R, et al. "Return on investment of public health interventions." JECH 2017. <https://pmc.ncbi.nlm.nih.gov/articles/PMC5537512/>
