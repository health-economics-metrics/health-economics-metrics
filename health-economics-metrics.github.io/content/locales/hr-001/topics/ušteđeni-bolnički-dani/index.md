# Ušteđeni bolnički dani

Bolnički dan je jedan pacijent koji zauzima jedan bolnički krevet jedan dan. „Ušteđeni bolnički dani” — ranijim otpustom, izbjegavanjem prijma ili virtualnim odjelima — radni su konj koristi u NHS-ovim digitalnim poslovnim slučajevima i najčešće precijenjeni.

## Zašto je važno

Kreveti su obvezujuće ograničenje akutne skrbi: kad se kreveti napune, elektivna kirurgija se otkazuje, hitna pomoć stoji u redu, a hitni prijem se zagušuje. Intervencije koje oslobađaju bolničke dane stoga nose stvarnu vrijednost — ali *vrsta* vrijednosti u potpunosti ovisi o tome što se dogodi s oslobođenim krevetom. Financijski direktori naučili su jako umanjivati naivne tvrdnje o bolničkim danima; točna aritmetika ovdje je test vjerodostojnosti.

## Matematika

```
Ušteđeni bolnički dani = pogođeni pacijenti × Δ duljine boravka (ili izbjegnuti prijmovi × prosj. LOS)

Vrijednost ovisi o uporabi oslobođenog kapaciteta:
  ponovno popunjeno elektivnom aktivnošću → vrijednost = prihod od aktivnosti ili korist za listu čekanja
  odjel zatvoren / smanjen              → vrijednost = oslobođeni troškovi osoblja + pogona (gotovina)
  apsorbirano kao prazan hod            → vrijednost ≈ samo granični („hotelski”) trošak, £50–£150/dan
```

Prosječni potpuno apsorbirani trošak akutnog bolničkog dana često se navodi kao 400+ £ (National Cost Collection povijesno ~350 £ za prekobrojne bolničke dane) — ali vidi [granični naspram prosječnog troška](../granični-naspram-prosječnog-troška/): prosjek gotovo nikad nije ušteda.

## Riješeni primjer

„Virtualni odjel” s daljinskim praćenjem omogućuje 600 pacijenata godišnje da idu kući 2 dana ranije: 1.200 ušteđenih bolničkih dana.

- **Naivna tvrdnja**: 1.200 × 400 £ = 480.000 £. Pogrešno osim ako se odjel zatvori.
- **Poštena tvrdnja**: trust ponovno popunjava krevete elektivnim ortopedskim pacijentima. 1.200 bolničkih dana ÷ prosječan boravak od 3 dana = 400 dodatnih elektivnih epizoda uz ~6.000 £ prihoda svaka u sustavu plaćanja prema aktivnosti = **2,4 mil. £ dodatne financirane aktivnosti** (minus granični trošak liječenja tih pacijenata), *plus* 400 pacijenata manje na listi čekanja. Troškovi pogona virtualnog odjela (350.000 £) netiraju se naspram toga.

Oslobođeni kapacitet koji se *ponovno koristi* često vrijedi više od naivne tvrdnje o gotovini — ali to je druga vrsta vrijednosti i mora se tako označiti ([uštede koje oslobađaju gotovinu naspram onih koje je ne oslobađaju](../uštede-koje-oslobađaju-gotovinu-naspram-onih-koje-je-ne-oslobađaju/)).

## Veza sa softverskim inženjerstvom

„Ušteđeni dani poslužitelja” ponašaju se identično. Gašenje stalno uključenih okruženja oslobađa gotovinu samo kad se instance ugase ili rezervacije isteknu; kapacitet apsorbiran natrag u zajednički fond vrijedi svoj granični trošak (~0 na obvezanoj potrošnji). Paralelna disciplina: za svaku tvrđenu uštedu imenujte *mehanizam* — ugašeno, ponovno popunjeno vrijednim radom ili ishlapjelo. Softver koji smanjuje duljinu boravka u bolnici (koordinacija otpusta, daljinsko praćenje, brzina dijagnostike) trebao bi modelirati sva tri scenarija i pustiti trust da bira po odjelu.

## Zamke

- **Vrednovanje graničnog kapaciteta prosječnim troškom** — kanonska pogreška.
- **Dvostruko brojanje**: ušteđeni bolnički dani *i* izbjegnuti prijmovi *i* smanjenje liste čekanja od istog oslobođenog kreveta.
- **Pretpostavka da su ušteđeni dani skupi dani**: dani ušteđeni na kraju boravka su najjeftiniji (niskoakutni) dani.

## Izvori

- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- Economics by Design, NHS cost calculator. <https://economicsbydesign.com/tools/nhs-cost-calculator/>
