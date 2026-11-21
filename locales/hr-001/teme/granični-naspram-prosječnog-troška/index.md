# Granični naspram prosječnog troška

Prosječni trošak je ukupni trošak podijeljen s brojem proizvedenih jedinica. Granični trošak je trošak proizvodnje jedne *dodatne* jedinice. Odluke bi se trebale temeljiti na graničnom trošku — ali objavljeni jedinični troškovi gotovo su uvijek prosjeci.

## Zašto je važno

Najčešća pogreška u poslovnim slučajevima digitalnog zdravlja je vrednovanje ušteđenog resursa po **prosječnom** trošku kad je stvarna ušteda **granični** trošak. Bolnički dan ima prosječan (potpuno apsorbiran) trošak od 400+ £, ali oslobađanje jednog bolničkog dana ne štedi 400 £ — zgrada, grijanje i većina troškova osoblja nastavljaju teći. Stvarno oslobođena gotovina može biti 50–150 £, osim ako se oslobodi dovoljno kreveta da se zatvori odjel.

## Matematika

```
Prosječni trošak: AC = TC / Q
Granični trošak:  MC = dTC/dQ   (trošak jedne jedinice više/manje)

TC = ukupni trošak, Q = količina
```

Fiksni troškovi čine MC < AC pri smanjenju kapaciteta, a MC se može približiti nuli kad postoji višak kapaciteta. Tvrdnje o uštedama trebale bi koristiti:

```
Prava ušteda = ΔQ × MC          (male promjene)
Prava ušteda = skokovita promjena TC (velike promjene koje prelaze prag kapaciteta, npr. zatvaranje odjela)
```

## Riješeni primjer

Vaš softver smanjuje prosječnu duljinu boravka i oslobađa 1.000 bolničkih dana godišnje u trustu.

- **Naivna tvrdnja**: 1.000 × 400 £ prosječnog troška = **400.000 £ ušteđeno**. Pogrešno.
- **Granična tvrdnja**: varijabilni trošak po bolničkom danu (hrana, rublje, potrošni materijal, nešto fleksibilnog njegovanja) ≈ 120 £. Ušteda = 1.000 × 120 £ = **120.000 £**, *plus* vrijednost oslobođenog kapaciteta ako se kreveti ponovno popune elektivnim pacijentima s liste čekanja (prihod u sustavu plaćanja prema aktivnosti ili smanjenje liste čekanja).
- **Tvrdnja o skokovitoj promjeni**: ako trust oslobodi 7.300 bolničkih dana godišnje (odjel od 20 kreveta), može stvarno zatvoriti odjel: osoblje + pogon ≈ 1,5 milijuna £ godišnje stvarne gotovine. Sada je račun s prosječnim troškom bliži istini.

Ista intervencija, tri održive brojke, ovisno o tome prelazi li promjena skok kapaciteta.

## Veza sa softverskim inženjerstvom

Ekonomija oblaka prirodno je područje graničnog troška:

- Granični trošak još jednog CI izvođenja na već rezerviranom kapacitetu je ≈ 0 £, dok prosječni trošak po izvođenju (ukupna potrošnja platforme ÷ izvođenja) može iznositi funte. Sustavi naplate koji terete prosječni trošak tjeraju timove da premalo koriste zajednički kapacitet koji je na margini zapravo besplatan.
- Obrnuto, „uštedjeli smo 30 % računalnih resursa” oslobađa gotovinu samo ako se instance stvarno ugase ili rezervacije smanje — softverska inačica zamke bolničkog dana. Vidi [uštede koje oslobađaju gotovinu naspram onih koje je ne oslobađaju](../uštede-koje-oslobađaju-gotovinu-naspram-onih-koje-je-ne-oslobađaju/).

## Zamke

- **Vrednovanje kapaciteta po prosječnom trošku** i predstavljanje toga kao gotovine (klasika).
- **Pretpostavka da je granični trošak konstantan.** Skače na granicama kapaciteta (zatvaranja odjela, licenčni razredi, obveze rezerviranih instanci).
- **Korištenje graničnog troška za odluke o širenju, a prosječnog za smanjenje** u istom slučaju — birajte prema stvarnoj odluci.

## Izvori

- York Health Economics Consortium glossary: marginal cost. <https://yhec.co.uk/glossary/marginal-cost/>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
