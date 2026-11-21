# Ostvarenje koristi

Upravljanje ostvarenjem koristi (BRM) je disciplina identificiranja, utvrđivanja osnovne linije, praćenja i *dokazivanja* da su koristi obećane u poslovnom slučaju doista nastale nakon isporuke. U britanskim javnim ulaganjima živi unutar **Modela pet slučajeva** Green Booka HM Treasuryja; u medicini je njegov rođak nadzor nakon stavljanja na tržište.

## Zašto je važno

Poslovni slučajevi su obećanja; ostvarenje koristi je revizija. Evaluacije velikih NHS-ovih digitalnih programa ponovno su nalazile prognozirane koristi koje se nikad nisu ostvarile — a kad koristi nisu oslobađale gotovinu, nisu učinile ništa za donju liniju trusta. Odgovor Green Booka: svaki slučaj potrošnje mora proći **pet slučajeva** (strateški, ekonomski, komercijalni, financijski, upravljački), uz ostvarenje koristi planirano u upravljačkom slučaju *prije odobrenja* — imenovani vlasnici, utvrđene osnovne linije, određeni datumi mjerenja. Bez toga „softver je uštedio 30 minuta po medicinskoj sestri” zauvijek ostaje fikcija dobavljača.

## Matematika

```
Stopa ostvarenja = ostvarene koristi / prognozirane koristi   (po koristi, po razdoblju)

Mehanika koja to čini izračunljivim:
  osnovna linija utvrđena PRIJE puštanja u rad (inače se delta ne može mjeriti)
  svaka korist: vlasnik, metrika, izvor podataka, raspored mjerenja
  prognoza prilagođena pristranosti optimizma pri procjeni (mandat Green Booka)
  koristi razvrstane kao gotovina / ne-gotovina / kvalitativne i praćene zasebno
  (vidi cash-releasing-vs-non-cash-releasing.md)
```

## Riješeni primjer

Poslovni slučaj e-raspoređivanja obećao je, godišnje: 450 tis. £ smanjenja potrošnje na agencije (gotovina), 8.000 sati voditelja odjela (kapacitet), poboljšanu usklađenost popunjenosti (kvalitativno). Dvanaest mjeseci nakon puštanja u rad:

```
Korist              Prognoza    Ostvareno   Stopa   Dokaz
Potrošnja na agencije £450,000  £287,000    64%     glavna knjiga naspram osnovne godine
Sati voditelja      8,000       5,100       64%     uzorak vremena i kretanja
Usklađenost popunjenosti +10pp  +12pp       120%    podaci sustava raspoređivanja

Radnje iz pregleda (poanta BRM-a):
manjak kod agencija prati se do dva odjela koja nikad nisu uključena → uključiti ih;
pogreška optimizma modela prognoze od 30% evidentirana → primijeniti na sljedeći slučaj.
```

64 % ostvarenja nije neuspjeh — to je *znanje*. Neizmjereni slučajevi zauvijek tvrde 100 %.

## Veza sa softverskim inženjerstvom

Inženjerske organizacije odobravaju platformska ulaganja na temelju prognoziranih koristi i gotovo ih nikad ne revidiraju — upravo patologija koju BRM popravlja. Lagan prijenos: svaki prijedlog iznad praga imenuje vlasnike koristi, osnovne metrike i datum pregleda T+6 mjeseci; stope ostvarenja vraćaju se u to koliko organizacija umanjuje sljedeću prognozu tog tima (ili dobavljača). To je i odgovor na skepsu prema AI alatima: [MIT-ov nalaz da ~95 % GenAI pilota nije pokazalo mjerljiv povrat u P&L-u](../povrat-ulaganja-u-ai/) je rezultat ostvarenja koristi — piloti koji su *donijeli* povrat imali su prative stavke koristi s vlasnicima. Prognoza → mjerenje → rekalibracija ista je petlja kao piloti cijenjeni [EVPI-jem](../očekivana-vrijednost-savršene-informacije/), pokrenuta u opsegu portfelja.

## Zamke

- **Bez osnovne linije prije puštanja u rad** — kobna, neispravljiva propust.
- **Siročad koristi**: bez imenovanog vlasnika nitko ne prikuplja podatke i svaki pregled kaže „uglavnom na dobrom putu”.
- **Dvostruko brojane koristi među programima** koji tvrde isti oslobođeni kapacitet — vodite registar koristi kroz portfelj.
- **Kazalište ostvarenja**: mjerenje lakih kvalitativnih pobjeda dok se novčane stavke tiho ne ispituju.

## Izvori

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Global Digital Exemplar programme evaluation (NHS digital benefits lessons). <https://pmc.ncbi.nlm.nih.gov/articles/PMC8685936/>
