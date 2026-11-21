# Vrijednost statističkog života (VSL)

Vrijednost statističkog života (VSL) — u britanskoj uporabi „vrijednost spriječene smrti” (VPF) — iznos je koji je *populacija* kolektivno spremna platiti za smanjenje rizika jedne statističke smrti, izveden iz studija kompromisa plaća-rizik (koliko dodatne plaće radnici traže za rizičnije poslove) i anketa iskazanih preferencija. To nije cijena života ikojeg identificiranog pojedinca; to je populacijski konstrukt rizika, a softverski inženjer koji gradi sustave za smanjenje rizika — algoritme trijaže, otpremu hitne pomoći, nadzor sigurnosti — mora znati da dolazi iz drukčije teorijske tradicije od [pragova spremnosti na plaćanje](../pragovi-spremnosti-na-plaćanje/).

## Zašto je važno

VSL/VPF je standardni alat za unovčavanje smanjenja rizika od smrtnosti u regulatornoj analizi troškova i koristi: sigurnost prometa, regulacija okoliša i neke javnozdravstvene intervencije provode svoje poslovne slučajeve kroz njega. Green Book britanskog Ministarstva financija objavljuje VPF iznos izveden iz britanskih dokaza s tržišta rada i anketa, a Ministarstvo prometa koristi ga izravno u procjeni sigurnosti cestovnog prometa. To je doista drukčija tradicija vrednovanja od metodologije QALY × prag spremnosti na plaćanje: pristup praga vrednuje zdravstvene dobitke prema onome što zdravstveni *proračun* trenutačno proizvodi na margini, dok VSL/VPF vrednuje smanjenje rizika prema onome što ljudi na tržištu rada ili u anketi otkrivaju da bi za njega platili. Ta dva okvira nisu uvijek pomirljiva, a korištenje oba u istom slučaju bez priznavanja toga česta je analitička pogreška.

## Matematika

```
Izbjegnute smrti = populacija × smanjenje_rizika_po_osobi
  (smanjenje_rizika_po_osobi je vjerojatnost, npr. 0.000001 = smanjenje
   godišnjeg rizika smrtnosti jedan naprema milijun)

Unovčena korist smrtnosti = izbjegnute_smrti × vrijednost_spriječene_smrti
```

## Riješeni primjer

Regija od 800.000 ljudi ima koristi od digitalne intervencije otpreme/trijaže u cestovnoj sigurnosti koja smanjuje godišnji rizik smrtnosti svake osobe za 1 naprema milijun (0,000001):

```
Izbjegnute smrti = 800,000 × 0.000001 = 0.8
```

Koristeći britansku vrijednost spriječene smrti, 2.180.000 £ (iznos HM Treasury/DfT, cijene 2023./24. — Green Book ga ažurira godišnje, ponovno provjerite prije navođenja u aktivnoj analizi):

```
Unovčena korist smrtnosti = 0.8 × £2,180,000 = £1,744,000/godišnje
```

Nešto manje od 1,75 milijuna £ godišnje unovčene koristi smrtnosti, od smanjenja rizika koje većina pogođene populacije pojedinačno nikad ne bi primijetila.

## Veza sa softverskim inženjerstvom

Timovi za softver kritičan za sigurnost — firmver medicinskih uređaja, softver autonomnih vozila, industrijski upravljački sustavi — suočavaju se upravo s tim problemom određivanja cijene pri izradi poslovnog slučaja za ulaganje u sigurnost: kako cijeniti „spriječiti jedan katastrofalan kvar” kad je kvar rijedak, težak i raspoređen na veliku populaciju korisnika? VSL/VPF je desetljećima star, javno dokumentiran stvarni presedan za stavljanje broja na rijetko, teško smanjenje rizika na razini populacije — isti oblik argumenta kao cijena SRE ulaganja naspram rijetkog katastrofalnog ispada, samo s ishodom smrtnosti umjesto ishoda zastoja.

## Zamke

- **Tretiranje VSL-a kao „cijene identificiranog života”**: nije. VSL/VPF je populacijski statistički konstrukt izveden iz kompromisa smanjenja rizika među mnogim ljudima, a ne vrednovanje života ili smrti neke određene osobe.
- **Dvostruko brojanje naspram izračuna neto novčane koristi temeljenog na QALY-ju**: korištenje VSL/VPF iznosa i zasebnog izračuna QALY × prag u istom slučaju, bez njihova usklađivanja, tiho dvostruko broji vrijednost istih izbjegnutih smrti. Za pojedini slučaj odaberite jedan okvir.
- **Presađivanje procjene VSL-a među kontekste bez prilagodbe**: VSL izveden iz tržišta rada jedne zemlje ili iz podataka o plaći-riziku radno sposobne dobi, primijenjen neprilagođen na drukčiji dohodovni kontekst ili drukčiju populaciju (djeca, umirovljenici), dugotrajno je, doista sporno metodološko pitanje — ne riješeno.

## Izvori

- HM Treasury, The Green Book: Central Government Guidance on Appraisal and Evaluation — Value of a Prevented Fatality supplementary guidance (2023/24 prices; Green Book values are updated annually). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- US EPA, "Mortality Risk Valuation" (for the US VSL tradition, cited for contrast with the UK VPF figure above). <https://www.epa.gov/environmental-economics/mortality-risk-valuation>
- Viscusi WK, Aldy JE. "The Value of a Statistical Life: A Critical Review of Market Estimates Throughout the World." J Risk Uncertain. 2003;27(1):5-76.
