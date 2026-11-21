# Izbjegivi troškovi eksternalizacije

Kad trust ne može ispuniti ciljeve internim kapacitetom, kupuje kapacitet po premium stopama: prekovremeni vikend za vlastito osoblje ili eksternalizaciju zahvata privatnim pružateljima. Ekonomska vrijednost softvera koji oslobađa kapacitet uključuje **izbjegivi trošak tog rada po premium stopi**.

## Zašto je važno

Pod pritiskom elektivnog oporavka trustovi rutinski plaćaju privatne spot cijene (često 1,2–1,5× cijena sheme NHS-a) ili premium stope inicijative za listu čekanja vlastitim konzultantima za vikend liste. Za razliku od običnih tvrdnji o kapacitetu, izbjegnuta eksternalizacija **oslobađa gotovinu**: račun privatnom pružatelju doista se ne ispostavlja. To je jedna od najjačih stavki koristi dostupnih softveru koji povećava internu propusnost — i jedna od najlakših za dokazati, jer je potrošnja na eksternalizaciju već vidljiva proračunska stavka.

## Matematika

```
Izbjegivi trošak eksternalizacije = aktivnost premještena unutra × (jedinična cijena
                                    eksternalizirano − interni granični trošak po slučaju)

Interni granični trošak: potrošni materijal + varijabilno osoblje za dodatnu aktivnost
— fiksne nekretnine već su plaćene (vidi marginal-vs-average-cost.md).
```

Tvrdnja zahtijeva da oslobođeni interni kapacitet doista apsorbira aktivnost: operacijske sale, kreveti i osoblje moraju biti dostupni (obvezujuće ograničenje vlada — opet teorija ograničenja).

## Riješeni primjer

Trust eksternalizira 800 zahvata katarakte godišnje po 900 £ svaki: 720.000 £/godišnje vanjske potrošnje, naspram cijene sheme od ~750 £.

Softver za raspoređivanje operacijskih sala (optimizacija lista, popunjavanje praznina iz otkazivanja, praćenje vremena obrtaja) podiže iskorištenost internih sala dovoljno da se repatriira 500 zahvata:

```
Interni granični trošak po slučaju ≈ £350 (potrošni materijal + sesijsko osoblje)
Ušteda = 500 × (900 − 350) = £275,000/godišnje — oslobađa gotovinu
Preostala eksternalizacija: 300 × £900 = £270,000 (bilo £720,000)
```

Trošak softvera 90.000 £/godišnje → neto ≈ **+185.000 £/godišnje u gotovini koja se može pohraniti**, plus koristi za internu kvalitetu i obuku zadržavanjem posla unutar kuće.

## Veza sa softverskim inženjerstvom

Izravna analogija je **premija za vanjske suradnike i konzultante**: kad interni inženjerski kapacitet ne može ispuniti obveze, organizacije kupuju vanjski kapacitet po 1,5–3× višim punim internim stopama. Platformska ulaganja i ulaganja u produktivnost koja podižu internu propusnost trebaju tvrditi izbjegnutu potrošnju na vanjske suradnike točno kao gore — vanjska dnevnica minus interni granični trošak, puta repatriirani rad — jer je to jedna od rijetkih doista gotovinu oslobađajućih stavki u poslovnom slučaju produktivnosti programera. Vrijedi isto upozorenje: interni kapacitet doista mora postojati i biti raspoređen na repatrirani rad, inače je tvrdnja fikcija.

## Zamke

- **Tvrdnja o repatrijaciji bez cijelog lanca kapaciteta** — kirurzi oslobođeni, ali bez termina u salama (ili inženjeri oslobođeni, ali bez kapaciteta upravljanja proizvodom) ne repatriraju ništa.
- **Usporedba eksternalizirane cijene s internim prosječnim troškom** umjesto graničnog — čudno, podcjenjuje uštedu; fiksni troškovi teku u oba slučaja.
- **Asimetrija kvalitete/složenosti**: eksternalizirani slučajevi često su jednostavni; njihova repatrijacija mijenja sastav internih slučajeva i jedinične troškove.

## Izvori

- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
