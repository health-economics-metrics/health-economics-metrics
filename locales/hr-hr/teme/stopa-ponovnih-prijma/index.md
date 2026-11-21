# Stopa ponovnih prijma

30-dnevna stopa ponovnih prijma je postotak otpuštenih pacijenata koji se vrate kao hitni slučaj unutar 30 dana. To je kanonska metrika zdravstvenog sustava za *kvalitetu otpusta* — i nosi izravne financijske kazne.

## Zašto je važno

Ponovni prijam znači da prvi otpust nije držao: prerani otpust, neuspjela primopredaja lijekova, izostanak praćenja ili nedostatak socijalne podrške. Platitelji ga izričito kažnjavaju — američki Hospital Readmissions Reduction Program umanjuje do 3 % bolničkih plaćanja iz Medicarea; NHS povijesno nije plaćao izbjegive 30-dnevne hitne ponovne prijmove. Izbjegavanje ponovnih prijma stoga je jedna od rijetkih kategorija koristi koja je *izravno* novčano relevantna za pružatelja, a ne samo kapacitet.

## Matematika

```
Stopa ponovnih prijma = hitni ponovni prijmovi unutar 30 dana / indeksni otpusti × 100

Usporedbe standardizirane prema riziku prilagođavaju se sastavu slučajeva; programi
kažnjavanja uspoređuju opaženo naspram očekivanog za slične bolnice.

Vrijednost izbjegavanja = izbjegnuti ponovni prijmovi × (trošak po epizodi ponovnog prijma
                          + izloženost kazni po ponovnom prijmu)
```

## Riješeni primjer

Aplikacija za podršku otpustu zatajenja srca (praćenje simptoma, upozorenja na težinu, podsjetnici na lijekove, eskalacija medicinskoj sestri): 2.000 otpusta godišnje, osnovna stopa ponovnih prijma 18 %, ispitivanje pokazuje 14 % s aplikacijom.

```
Izbjegnuti ponovni prijmovi = 2,000 × (0.18 − 0.14) = 80/godišnje
Trošak po epizodi ponovnog prijma ≈ £3,500 → £280,000/godišnje izbjegnutog troška liječenja
Plus izloženost kazni/neplaćanju na tim epizodama.
Trošak aplikacije: 2,000 × £60 = £120,000/godišnje

Neto ≈ +£160,000/godišnje, prije bilo kakve tvrdnje o QALY-ju za izbjegnuto pogoršanje.
```

Broj koji treba braniti je učinak od 4 postotna boda: mora dolaziti iz kontrolirane usporedbe, jer se stope ponovnih prijma mijenjaju sa sastavom slučajeva i sezonom.

## Veza sa softverskim inženjerstvom

Ponovni prijam je **stopa neuspjeha promjena** zdravstvenog sustava (vidi [DORA metrike](../dora-metrike/)): rad koji je „isporučen” i vratio se unutar 30 dana. Analogije idu duboko — ponovno otvoreni tiketi i regresijski incidenti pokazuju lošu „kvalitetu otpusta” (slaba verifikacija, prerano zatvaranje, nedostatak dokumentacije primopredaje); obračun u stilu kazne (plaća tim koji popravlja, a ne tim koji prima) mijenja ponašanje; a oba područja naučila su istu lekciju: forsiranje sirove propusnosti (brži otpust, brža isporuka) bez ulaganja u primopredaju samo pretvara vidljive redove u nevidljiv ponovni rad. „30-dnevna stopa ponovnog otvaranja” pripada na nadzornu ploču svakog tima koji slavi vrijeme ciklusa.

## Zamke

- **Namještanje preimenovanjem**: ponovni prijmovi kodirani kao opservacijski boravci ili nova stanja; provjerite definiciju.
- **Svi uzroci naspram povezanih uzroka**: 30-dnevni svi-uzroci uključuje doista nepovezane događaje; kazne obično koriste sve uzroke upravo zato što je „povezano” podložno namještanju.
- **Sljepoća za sastav slučajeva**: bolnica koja služi bolesnijim, siromašnijim populacijama ponovno prima više iz razloga koje nijedna aplikacija ne rješava — prilagodite riziku prije usporedbe.

## Izvori

- CMS, Hospital Readmissions Reduction Program. <https://www.cms.gov/medicare/payment/prospective-payment-systems/acute-inpatient-pps/hospital-readmissions-reduction-program-hrrp>
- NHS Digital, emergency readmissions statistics. <https://digital.nhs.uk/data-and-information/publications/statistical/compendium-emergency-readmissions>
