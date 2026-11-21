# Analiza troškova i posljedica (CCA)

CCA prikazuje troškove uz **dezagregiranu tablicu svih ishoda** — kliničkih, operativnih, iskustvenih — bez njihova sažimanja u jedan omjer ili ocjenu. Donositelj odluke izričito vaga kompromise.

## Zašto je važno

CCA je **NICE-ov preferirani ekonomski format za većinu digitalnih zdravstvenih tehnologija** prema Evidence Standards Frameworku. Digitalni proizvodi daju heterogene učinke (ušteđeno vrijeme, zadovoljstvo, smanjenje nedolazaka, male kliničke dobitke) koji se opiru poštenom agregiranju u jedan QALY broj. Umjesto prisiljavanja krhkog kompozita, CCA pokazuje cijelu knjigu. Za većinu softverskih poslovnih slučajeva to je i najpoštenija i najuvjerljivija forma, jer svaki dionik može pronaći svoj redak relevantan za odluku.

## Matematika

Namjerno nema formule agregiranja. Izlaz je tablica:

```
                          Intervencija   Komparator   Razlika
Troškovi (godišnje)       £X             £Y           ΔC
Ishod 1 (prirodne jedinice) …            …            Δ1
Ishod 2                   …              …            Δ2
Kvalitativni ishodi       opisani, ne boduju se
```

Svaki redak zadržava svoje jedinice. Pravila: svaka posljedica unaprijed određena (bez biranja povoljnih podataka (cherry-picking) nakon rezultata); ista [perspektiva](../perspektiva-analize/) i [horizont](../vremenski-horizont/) svugdje; neizvjesnost po retku.

## Riješeni primjer

Digitalna platforma za preoperativnu procjenu naspram telefonskog procesa, godišnje, jedan trust:

```
                              Digitalno    Telefon     Razlika
Trošak pogona                 £180,000     £95,000     +£85,000
Sati medicinskih sestara za procjene 6,200 11,800      −5,600 sati
Otkazivanja kirurgije na dan zahvata 92    174         −82
Zadovoljstvo pacijenata (CSAT) 4.5/5       3.9/5       +0.6
Izgubljene/nepotpune procjene 1.2%         4.8%        −3.6 pp
```

Nema jedne ocjene — ali odluku je lako obrazložiti: 85.000 £ kupuje 5.600 sati medicinskih sestara (≈ 15 £/sat, daleko ispod bilo kojeg troška osoblja), 82 izbjegnuta otkazivanja (svako troši termin operacijske sale vrijedan ~1.200 £) i bolje iskustvo. Odbor također točno vidi što *ne* dobiva: nema tvrđenog QALY-ja ili učinka na smrtnost.

## Veza sa softverskim inženjerstvom

CCA je formalna inačica uravnotežene tablice rezultata koju dobar platformski prijedlog već koristi: trošak pokraj DORA metrika, DevEx rezultata, broja incidenata — neagregirano. Disciplina zdravstvene ekonomije koju treba dodati: **unaprijed odredite retke** (odlučite što se broji prije pilota da ne možete tiho izbaciti metriku koja se pogoršala) i **pokažite nepovoljne retke** — CCA samo s dobrim vijestima je marketing. Koristite CCA kad ne postoji obranjiv kompozit, što je za razvojne alate gotovo uvijek.

## Zamke

- **Posljedice birane po povoljnosti (cherry-picking)** — integritet formata ovisi o prethodnom određivanju.
- **Prokrijumčareno agregiranje**: bojanje ili „ukupne ocjene” ponovno uvode proizvoljne težine kojih se CCA želi riješiti.
- **Paraliza odlučivanja**: CCA treba donositelja odluke voljnog vagati kompromise; uparite ga s preporukom i obrazloženjem.

## Izvori

- NICE Evidence Standards Framework for digital health technologies (ECD7). <https://www.nice.org.uk/corporate/ecd7>
- ESF evidence standards tables. <https://www.nice.org.uk/corporate/ecd7/chapter/section-c-evidence-standards-tables>
