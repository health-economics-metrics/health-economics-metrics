# Tvrde uštede koje oslobađaju gotovinu (obrana od deficita)

Tvrde uštede koje oslobađaju gotovinu su stavke koje bolnica može aktivno **izbrisati iz proračuna sljedećeg mjeseca** zahvaljujući vašem softveru. Strogom financijskom računovođi — i trustu koji posluje s deficitom — to je jedina klasa koristi koja se u potpunosti računa.

## Zašto je važno

Mnogi NHS-ovi trustovi posluju prema planovima oporavka od deficita uz intenzivan nadzor svake stavke rashoda. U tom okruženju dobici u kapacitetu i poboljšanja kvalitete — koliko god stvarni — ne zatvaraju jaz; to čini samo gotovina. Softverski proizvod koji može dokazati da briše proračunske stavke *sam se financira iz perspektive financijskog direktora*, što mijenja nabavu: razgovor prestaje biti „možemo li si ovo priuštiti?” i postaje „možemo li si priuštiti da to ne učinimo?”. Ovaj dokument je oštri kraj [ušteda koje oslobađaju gotovinu naspram onih koje je ne oslobađaju](../uštede-koje-oslobađaju-gotovinu-naspram-onih-koje-je-ne-oslobađaju/) okrenut deficitu.

## Matematika

NHS-ova najpouzdanija meta tvrde gotovine je **privremeno osoblje po premium stopi**. Trustovi pokrivaju praznine internim „Bank” osobljem (plaćenim približno standardnim stopama) i vanjskim „Agency” osobljem (često 2–3× stope Agenda for Change, ograničeno ali često prekoračeno za oskudne uloge).

```
Tvrda ušteda = izbjegnute premium smjene × (premium stopa − stopa stalnog zaposlenika)
             + izbjegnuti prekovremeni sati × prekovremena premija
             + otkazani vanjski ugovori × vrijednost ugovora

Zahtjev mehanizma: imenujte konkretnu proračunsku stavku i menadžera koji će
potvrditi njezino smanjenje. Ako nitko ne može pokazati na stavku, nije tvrda gotovina.
```

## Riješeni primjer

Medicinska sestra Band 6 gubi ~1 sat/smjeni na administrativne režije; dokumentacija se redovito prelijeva preko kraja smjene u prekovremeni rad, a odjeli rezerviraju dodatno Bank pokrivanje za nadoknadu dokumentacije.

Softver vraća taj sat u zakazanu smjenu kroz 300 sestara:

```
Izbjegnuti prekovremeni: 300 sestara × 2.5 plaćena prekovremena sata/tjedno × £8 premije × 46 tjedana
                         ≈ £276,000/godišnje
Bank/agencijske smjene:  15 smjena nadoknade/tjedno × £180 premije × 52
                         ≈ £140,400/godišnje
Tvrda gotovina ukupno    ≈ £416,000/godišnje naspram troška licence od ~£150,000
```

Svaka funta je provjerljiva prema sustavima e-raspoređivanja i obračuna plaća — što je upravo način kako korist treba dokazivati, mjesečno, kroz [ostvarenje koristi](../ostvarenje-koristi/). (Objavljeni NHS-ovi modeli radne snage tvrdili su omjere i do 11+ £ ušteđenih po 1 £ potrošenoj na ovaj mehanizam; svaki takav omjer tretirajte kao hipotezu za podatke o raspoređivanju *vašeg* trusta, a ne kao prenosivu činjenicu.)

## Veza sa softverskim inženjerstvom

Inženjerski ekvivalenti agencijske premije su vlastite organizacijske kupnje u nevolji: dnevnice vanjskih suradnika koje pokrivaju praznine u isporuci, prekovremeni rad zbog incidenata, ugovori o ubrzanoj podršci i panika zbog spot cijena oblaka. Softver za produktivnost koji tvrdi tvrdu gotovinu treba ciljati te stavke istom disciplinom — imenovati proračunsku stavku, vlasnika i mjesec kad se smanjuje. Sve ostalo što isporučuje je kapacitet ([kapacitet koji stvara vrijednost](../kapacitet-koji-stvara-vrijednost/)) ili kvaliteta: stvarno, vrijedno i drukčije.

## Zamke

- **Nazivanje kapaciteta „uštedama”** — trenutni ubojica vjerodostojnosti pred financijama; vidi taksonomiju u [uštedama koje oslobađaju gotovinu naspram onih koje je ne oslobađaju](../uštede-koje-oslobađaju-gotovinu-naspram-onih-koje-je-ne-oslobađaju/).
- **Omjeri iz modela dobavljača predstavljeni kao lokalna činjenica** (problem 11 £ : 1 £) — ponovno izgradite model na podacima o raspoređivanju trusta.
- **Brkanje jednokratnog i ponavljajućeg**: otkazani ugovor štedi svoju vrijednost jednom godišnje, a ne jednom; izbrisano radno mjesto štedi plaću samo dok ostane izbrisano.

## Izvori

- NHS England, reducing agency spend in the NHS. <https://www.england.nhs.uk/long-read/reducing-agency-spend-in-the-nhs/>
- NHS Digital business case guidance, economic case. <https://digital.nhs.uk/services/networks-and-connectivity-transformation-frontline-capabilities/connectivity-hub/advice-and-guidance/making-the-business-case-for-connectivity-infrastructure-investment---guidance/economic-case>
