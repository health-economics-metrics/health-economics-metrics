# Perspektiva analize

Perspektiva određuje *čiji* troškovi i koristi ulaze u ekonomsku analizu: platiteljevi, pružateljevi ili društva u cjelini. Ista intervencija može izgledati briljantno iz jedne perspektive, a loše iz druge.

## Zašto je važno

Svaka ekonomska evaluacija mora unaprijed navesti svoju perspektivu, jer perspektiva određuje koje stavke postoje:

- **Perspektiva platitelja** (npr. NHS-ov naručitelj, osiguravatelj): samo troškovi koje platitelj nadoknađuje.
- **Perspektiva pružatelja** (npr. bolnički trust): interni troškovi pružanja usluge, osoblje, nekretnine.
- **Društvena perspektiva**: sve — uključujući vrijeme pacijenata, putovanje, neformalnu skrb obitelji i gubitke produktivnosti poslodavaca.

Referentni slučaj NICE-a za troškove koristi perspektivu **NHS-a i osobnih socijalnih usluga (PSS)**. Američki Second Panel on Cost-Effectiveness preporučuje izvješćivanje o analizi zdravstvenog sektora i o društvenoj analizi, uz „inventar učinaka” koji navodi što je uključeno.

## Matematika

Nema formule — pravilo određivanja opsega primjenjuje se prije bilo kakve matematike:

```
Uključene kategorije troškova/koristi = f(perspektiva)
```

Korisna provjera: izradite tablicu inventara učinaka s jednim retkom za svaki trošak/korist i jednim stupcem za svaku perspektivu te označite koje ćelije vrijede.

## Riješeni primjer

Aplikacija za provjeru simptoma preusmjerava 10.000 posjeta liječniku opće prakse godišnje na samozbrinjavanje.

- **Platitelj (NHS)**: štedi 10.000 × 42 £ po konzultaciji kod liječnika opće prakse = **420.000 £ godišnje** — izrazito pozitivno.
- **Pružatelj (ordinacija opće prakse)**: ako se ordinacije plaćaju po glavi stanovnika (kapitacija), prihod im je nepromijenjen, ali opterećenje pada — blago pozitivno.
- **Društvo**: dodajte ušteđeno putovanje i čekanje pacijenata, recimo 10.000 × 2 sata × 15 £/sat = 300.000 £ vrijednosti vremena; ali oduzmite štetu ako je 2 % lažno umireno i javi se kasnije, bolesnije, uz 200 × 3.000 £ = 600.000 £ dodatnog liječenja. Neto za društvo: 420.000 + 300.000 − 600.000 = **120.000 £ godišnje** — pozitivno, ali pod dominacijom pretpostavke o sigurnosti.

Ista aplikacija, tri različita odgovora. Upravo navođenje perspektive čini brojke usporedivima i poštenima.

## Veza sa softverskim inženjerstvom

I ROI alata i platformi ima perspektive:

- **Proračun tima („platitelj”)**: stane li licenčna naknada u moje troškovno mjesto?
- **Platformska organizacija („pružatelj”)**: ukupni trošak uključujući integraciju, podršku i održavanje.
- **Tvrtka („društvo”)**: uključite utjecaj na korisnike, sigurnosne eksternalije i vrijeme svakog pogođenog tima.

CI alat koji je jeftin za tim koji ga kupuje, ali prebacuje posao migracije na 40 drugih timova, softverska je inačica prebacivanja troškova — vidljiva samo iz šire perspektive. Navedite perspektivu u svakom poslovnom slučaju; recenzenti ne mogu osporavati pretpostavke koje ne vide.

## Zamke

- **Tiha promjena perspektive**: brojanje društvenih koristi, ali samo platiteljevih troškova, čini da sve izgleda isplativo.
- **Dvostruko brojanje** pri spajanju perspektiva (npr. ušteđeni posjet liječniku opće prakse broji se i kao ušteda platitelja i kao ušteda vremena pacijenta, dok platiteljev iznos već uključuje vrijeme osoblja).
- **Zanemarivanje prebacivanja troškova**: „uštede” koje samo premještaju trošak na pacijente, njegovatelje ili drugi odjel.

## Izvori

- Sanders GD, et al. "Recommendations for Conduct, Methodological Practices, and Reporting of Cost-effectiveness Analyses: Second Panel on Cost-Effectiveness in Health and Medicine." JAMA 2016. <https://jamanetwork.com/journals/jama/fullarticle/2552214>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
