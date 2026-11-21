# Nacionalni tarifni sustav i jedinični troškovi

NHS plaća pružatelje za aktivnost prema nacionalnom cjeniku utemeljenom na pravilima — povijesno National Tariff / Payment by Results, zamijenjen **NHS Payment Schemeom (NHSPS)** 1. travnja 2023. Iza cijena stoji nacionalna infrastruktura jediničnog troškovanja: **National Cost Collection (NCC)** i kompendij **PSSRU Unit Costs of Health and Social Care**.

## Zašto je važno

To su nazivnici svakog vjerodostojnog NHS-ova poslovnog slučaja. Kad tvrdnja kaže „ambulantni dolazak vrijedi 160 £” ili „sat medicinske sestre Band 6 košta 31 £”, ti brojevi dolaze iz ove infrastrukture — a korištenje službenih brojki umjesto izmišljenih čini neovisne evaluacije usporedivima, a financijske timove susretljivima. Za dobavljača, tarifa definira i stranu *prihoda*: aktivnost koju vaš softver omogućuje (dodatne ambulante, ponovno popunjeni kreveti) vrednuje se po cijenama sheme.

## Matematika

```
Tarifna cijena po jedinici aktivnosti (HRG-kodirana epizoda, ambulantni dolazak)
  = nacionalni prosječni jedinični trošak (iz NCC-a) × Market Forces Factor (lokalna prilagodba)
  prema NHSPS-u: kombinirani fiksni + varijabilni elementi („aligned payment and incentive”)

NCC jedinični trošak = trošak vrste aktivnosti koji je prijavio trust / opseg aktivnosti
                       (izgrađen na Patient-Level Information and Costing Systems, PLICS)

PSSRU kompendij: ~80 standardnih jediničnih troškova (konzultacija kod liječnika opće
prakse, sat medicinske sestre po bandu, dolazak u hitni prijem…) — zadani izvor
u britanskim ekonomskim evaluacijama.
```

## Riješeni primjer

Vaš softver oslobađa 1 sat dnevno vremena medicinske sestre Band 6 u radnoj godini od 250 dana:

```
Trošak Banda 6 prema PSSRU-u uključujući režije ≈ £31/sat (provjerite aktualno izdanje)
Vrijednost kapaciteta = 250 × £31 = £7,750/sestri/godišnje (ne oslobađa gotovinu)
```

Alternativno, sestra vodi 2 dodatna ambulantna kontrolna termina dnevno uz ~160 £ vrijednosti sheme: 500 × 160 £ = **80.000 £/godišnje financirane aktivnosti** — desetorostruka razlika u tvrđenoj vrijednosti ovisno o preusmjeravanju, sve iz službenih jediničnih troškova. Obje tvrdnje su provjerljive jer su nazivnici objavljeni; u tome je cijela poanta.

## Veza sa softverskim inženjerstvom

Ovo je obrazac **internog cjenika**. Britanska zdravstvena ekonomija funkcionira jer svaka evaluacija koristi iste objavljene jedinične troškove; inženjerskim organizacijama to uglavnom nedostaje, pa svaki poslovni slučaj izmišlja vlastiti trošak inženjerskog sata, incidenta, puštanja u rad. Platformski tim može objaviti upravo takav cjenik — puni trošak po inženjerskom satu po razini, po incidentu po težini, po minuti izgradnje — i zahtijevati njegovu uporabu u svim prijedlozima. Sustavi povrata troška/showback ponavljaju i poznate načine propadanja tarife: određivanje cijena prosječnim troškom pokreće namještanje obujma, fiksna plaćanja pokreću podopskrbu. Razvoj NHSPS-a od čistog plaćanja aktivnosti do kombiniranog fiksnog+varijabilnog dvadeset je godina lekcija u dizajnu poticaja za interno određivanje cijena platforme.

## Zamke

- **Zastarjele brojke**: cijene NCC-a, PSSRU-a i NHSPS-a osvježavaju se godišnje — datirajte svaki broj.
- **Tarifna cijena ≠ trošak**: cijene su nacionalni prosjeci s prilagodbama; vaš lokalni granični trošak razlikuje se (vidi [granični naspram prosječnog troška](../granični-naspram-prosječnog-troška/)).
- **Vrednovanje kapaciteta po tarifi bez mehanizma** za stvarno pružanje i naplatu dodatne aktivnosti.

## Izvori

- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
