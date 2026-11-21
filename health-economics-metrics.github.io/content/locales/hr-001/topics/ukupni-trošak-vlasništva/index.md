# Ukupni trošak vlasništva (TCO)

TCO je puni trošak sustava tijekom njegova vijeka: nabava ili izgradnja, integracija, rad, održavanje, podrška, obuka i povlačenje iz uporabe. Neugodna osnovna činjenica: **održavanje je 50–80 % TCO-a softvera** — otprilike tri četvrtine troška kroz vijek stiže *nakon* lansiranja.

## Zašto je važno

Procjena zdravstvenih tehnologija davno je naučila da cijena lijeka nije njegov trošak — primjena, praćenje i upravljanje nuspojavama pripadaju u model. Softverski poslovni slučajevi koji broje samo trošak izgradnje/licence ponavljaju pogrešku naivne cijene lijeka i sustavno podcjenjuju stranu troškova svakog [ICER-a](../inkrementalni-omjer-isplativosti/) i [utjecaja na proračun](../analiza-utjecaja-na-proračun/) koje hrane. Za NHS-ovu nabavu, disciplina TCO-a čini da tvrdnja o isplativosti digitalnog proizvoda bude poštena — i tu jeftino izgledajuće opcije gube.

## Matematika

```
TCO = početni trošak (izgradnja/licenca + integracija + migracija podataka + obuka)
    + Σ_t [operacije + održavanje + podrška + infrastruktura + nadogradnje
           + usklađenost/jamstvo]_t / (1 + r)^t
    + trošak povlačenja (izlazak, izvlačenje podataka, paralelni rad)

Horizont: 3–5 godina komercijalno, životni vijek sustava za kliničku infrastrukturu
r: 3.5% javni sektor (Green Book), 8–12% komercijalno
Mjerila: godišnje održavanje ≈ 15–20% troška izgradnje; ~78% TCO-a kroz vijek
nakon lansiranja; ignorirajte povlačenje i zaključavanje dobavljača plaća samo sebe.
```

## Riješeni primjer

Dvije opcije za sustav e-opservacija, horizont od 5 godina:

```
                        Vendor SaaS     Interna izgradnja
Godina 0 (licenca/izgradnja) £250,000   £900,000
Integracija + obuka     £180,000        £150,000
Godišnji pogon (god. 1–5) £120,000/god  £190,000/god  (hosting + 1.5 FTE održavanja)
Izlazak/povlačenje      £60,000         £30,000

Nediskontirani TCO      £1,090,000      £2,030,000
```

Inženjerska procjena opcije izgradnje (900 tis. £) bila je samo 44 % njezina pravog TCO-a — a procjene izgradnje i same obično prekoračuju 30–40 % (vidi [izgradi ili kupi](../izgradi-ili-kupi/)). Osim ako interna opcija ne isporučuje bitno različite *ishode*, vrijedi logika [minimizacije troškova](../analiza-minimizacije-troškova/), a SaaS pobjeđuje za ~940 tis. £.

## Veza sa softverskim inženjerstvom

Inženjeri podcjenjuju podatke o održavanju vlastitog područja kad zagovaraju izgradnju: pravilo godišnjeg održavanja od 15–20 % troška izgradnje znači da svaki sustav od 1 mil. £ tiho obvezuje 150–200 tis. £/godišnje budućeg kapaciteta — obveza koja pripada na istu mentalnu bilancu kao [tehnički dug](../tehnički-dug/). TCO je i troškovna polovica svake metrike u ovom repozitoriju: trošak po puštanju u rad, [jedinična ekonomija oblaka](../jedinična-ekonomija-oblaka/) i disciplina nazivnika koju HTA nameće sponzorima lijekova. Kad se cijena vašeg proizvoda ospori, usporedba TCO-a uključujući prave pogonske troškove postojećeg rješenja obično je najjače dostupno preoblikovanje. Višegodišnja brojka TCO-a poput gornje je zbroj mnogih stavki troškova kroz vrijeme — vidi [valutno siguran zbroj troškova](../valutno-siguran-zbroj-troškova/) zašto taj zbroj treba biti u točnom decimalnom, a ne u pomičnom zarezu kad se model mora podudarati do penija, i [raspodjelu troškova na točan cent](../raspodjela-troškova-na-točan-cent/) za podjelu ukupnog TCO-a po troškovnim mjestima bez gubitka penija.

## Zamke

- **Sidrenje na trošku lansiranja**: usporedba opcija po trošku u godini 0 kad se rang obrne do 3. godine.
- **Zabluda besplatnog internog rada**: interno održavanje troškovano na nulu jer je „tim već plaćen” — vidi [oportunitetni trošak](../oportunitetni-trošak/).
- **Zanemarivanje troškova izlaska**: izlaz podataka, raskid ugovora i paralelni rad su mjesta gdje „jeftin” SaaS postaje skup.
- **Kršenja istog horizonta**: usporedba trogodišnjeg TCO-a SaaS-a s 10-godišnjom amortizacijom izgradnje (vidi [vremenski horizont](../vremenski-horizont/)).

## Izvori

- IBM, total cost of ownership. <https://www.ibm.com/think/topics/total-cost-of-ownership>
- Software maintenance cost benchmarks. <https://pegotec.net/software-maintenance-cost-percentage-2026-industry-benchmarks/>
