# Uštede koje oslobađaju gotovinu naspram onih koje je ne oslobađaju

Uštede koje oslobađaju gotovinu smanjuju stvarnu potrošnju — proračunska stavka postaje manja. Uštede koje ne oslobađaju gotovinu oslobađaju vrijeme ili kapacitet koji se *ponovno koristi*, a ne pohranjuje. Financijski direktori zdravstvenog sustava smatraju ih različitim vrstama, a tako bi trebali i vi.

## Zašto je važno

Ovo je najoštriji test poštenja za svaki digitalni poslovni slučaj u nacionalnoj zdravstvenoj službi. NHS-ovi okviri koristi izričito razvrstavaju svaku tvrđenu korist kao oslobađanje gotovine, neoslobađanje gotovine ili kvalitativnu. Većina „ušteda” u digitalnom zdravlju — minute kliničara ušteđene po pacijentu, brža dokumentacija — ne oslobađa gotovinu: vrijedne su, ali ne smanjuju deficit. Financijski direktor trusta pred manjkom sredstava može trošiti samo gotovinu. Vidi i [tvrde uštede koje oslobađaju gotovinu](../tvrde-uštede-koje-oslobađaju-gotovinu/).

## Matematika

```
Ušteda koja oslobađa gotovinu = proračunska stavka prije − proračunska stavka poslije
                          (mora se moći izvući: otkazani ugovor, zatvoren odjel,
                           smanjena potrošnja na agencije, izbjegnuta nabava)

Vrijednost koja ne oslobađa gotovinu = oslobođeno vrijeme × jedinični trošak tog vremena
                          (vrednovano po oportunitetnom trošku; novac se NE može izvući)
```

Isti fizički događaj (ušteđen sat) završava u jednoj ili drugoj kategoriji ovisno o tome što se dogodi potom:

```
ušteđen sat → otkazana smjena prekovremenog/agencijskog rada → oslobađa gotovinu
ušteđen sat → kliničar primi još jednog pacijenta s liste čekanja → ne oslobađa gotovinu (kapacitet)
ušteđen sat → apsorbiran u prazan hod, ništa se ne mijenja    → nikakve koristi
```

## Riješeni primjer

Softver svakoj od 100 medicinskih sestara štedi 30 minuta po smjeni. To je 100 × 0,5 × 5 smjena tjedno × 46 tjedana ≈ 11.500 sati godišnje. Uz trošak poslodavca za Band 5 od ~25 £/sat, primamljiv naslovni iznos je 287.500 £ godišnje.

Pošteni raspored:

- 20 % vremena završava tamo gdje odjeli trenutačno plaćaju bank/agencijski dodatak za pokrivanje prekoračenja u dokumentaciji: 2.300 sati × 35 £ agencijske satnice = **80.500 £ oslobođene gotovine** (smjene doista nisu rezervirane).
- 60 % preusmjerava se izravnoj skrbi za pacijente: 6.900 sati × 25 £ = **172.500 £ kapaciteta koji ne oslobađa gotovinu** — stvarna vrijednost, iskazana zasebno, nikad nazvana „uštedom”.
- 20 % se rasprši u stanke i prekide: **0 £**. Tvrdnja o tome bila bi fikcija.

Poslovni slučaj koji predstavlja 80,5 tis. £ gotovine + 172,5 tis. £ kapaciteta vjerodostojan je. Onaj koji predstavlja 287,5 tis. £ „ušteda” odbacit će prvi računovođa koji ga pročita.

## Veza sa softverskim inženjerstvom

Ista logika vrijedi za ROI AI asistenata za kodiranje: „30 minuta po programeru dnevno” je kapacitet koji ne oslobađa gotovinu, osim ako stvarno ne padne broj zaposlenih, potrošnja na vanjske suradnike ili trošak oblaka. Kategorije iskazujte zasebno:

- Oslobađa gotovinu: otkazani angažmani vanjskih suradnika, ukinute licence za alate, smanjena potrošnja na oblak.
- Kapacitet: funkcionalnosti isporučene ranije (vrijednost preko [troška odgode](../trošak-odgode/)), raščišćen backlog.
- Ništa: minute ušteđene koje se rasprše u promjenu konteksta.

Pratite i *kamo je oslobođeno vrijeme stvarno otišlo* — ostvarenje koristi ([benefits-realization.md](../ostvarenje-koristi/)) postoji jer tvrđeni dobici u kapacitetu često ispare pri reviziji.

## Zamke

- **Množenje minuta plaćom i nazivanje toga uštedom** — kanonski grijeh.
- **Vrednovanje oslobođenog vremena po prosječnom punom trošku** kad je granična uporaba tog vremena male vrijednosti — vidi [granični naspram prosječnog troška](../granični-naspram-prosječnog-troška/).
- **Dvostruko brojanje istog sata**: kao gotovine (izbjegnuta smjena) i kao kapaciteta (primljeni dodatni pacijenti).

## Izvori

- NHS Digital connectivity business case guidance, economic case (benefit categories). <https://digital.nhs.uk/services/networks-and-connectivity-transformation-frontline-capabilities/connectivity-hub/advice-and-guidance/making-the-business-case-for-connectivity-infrastructure-investment---guidance/economic-case>
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
