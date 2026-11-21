# Išvengtos tolesnės sąnaudos

Išvengtos tolesnės sąnaudos (sąnaudų užskaitos) yra būsimos gydymo išlaidos, kurių pavyko išvengti ankstesniais ar geresniais veiksmais, atėmus paties įsikišimo kainą. Užskaitos yra mechanizmas, per kurį intervencija gali tapti *dominuojančia* – pigesne **ir** geresne – ir kartu tai yra dažniausiai dvigubai skaičiuojama, labiausiai pervertinama sveikatos ekonomikos eilutė.

## Kodėl tai svarbu

Beveik kiekviename skaitmeninės sveikatos vertės pasiūlyme yra užskaitos teiginys: „mūsų programėlė užkerta kelią hospitalizacijoms“, „mūsų perspėjimai apsaugo nuo būklės blogėjimo“, „mūsų platforma išvengia pasikartojančių tyrimų“. Kai užskaitos tikros, jos pakeičia ekonomiką (žr. [ICER](../prieaugio-sąnaudų-efektyvumo-santykis/) išspręstą pavyzdį, kuriame 600 tūkst. £ užskaita lemia bylą). Mokėtojai tai žino – todėl užskaitų teiginiai sulaukia griežčiausio patikrinimo bet kuriame vertinime. Toliau pateiktos patikimumo taisyklės skiria finansuojamą modelį nuo rinkodaros.

## Matematika

```
Net cost = intervention cost − Σ offsets

A valid offset must be:
  Attributable — causally linked to the intervention (comparator evidence)
  Marginal     — the money actually stops being spent, at marginal not
                 average cost (see marginal-vs-average-cost.md)
  Probability- — weighted by P(the downstream event would have occurred)
  weighted
  Discounted   — future avoided costs at present value
  Unique       — counted once, in one benefit line
```

## Išspręstas pavyzdys

„Šis migracijos rizikos teiginys, padarytas teisingai“: žaizdų stebėsenos programėlė 5 000 pacientų po operacijų teigia išvengianti su infekcija susijusių pakartotinių hospitalizacijų.

```
Baseline readmission for infection: 4.0% ; with app (RCT): 3.1%
Attributable events avoided = 5,000 × 0.009 = 45/year
Cost per readmission spell (marginal, this trust): £3,200
Offset = 45 × 3,200 = £144,000/year
App cost = 5,000 × £20 = £100,000/year
Net cost = −£44,000 → genuinely cost-saving, with:
  attribution from an RCT ✓  marginal costing ✓  probability from trial data ✓
```

Tas pats teiginys, pagrįstas „pakartotinė hospitalizacija vidutiniškai kainuoja 5 800 £, užkirsime kelią daugybei“, nepraeina visų keturių patikrų ir nusipelno gaunamo atmetimo.

## Ryšys su programinės įrangos inžinerija

„Ši migracija išvengia būsimo perrašymo“ yra užskaitos teiginys, o sveikatos ekonomikos taisyklės jį padaro sąžiningą:

- **Kontrafaktinė kaina**: kiek iš tikrųjų kainuotų perrašymas ir kuo tai pagrįsta?
- **Tikimybė**: kiek tikėtina ta ateitis? (Ne 100 % – produktai nutraukiami, prioritetai keičiasi.)
- **Diskontavimas**: perrašymas, išvengtas 4 metais taikant 3,5–10 % diskonto normą, vertas gerokai mažiau nei nominali vertė.
- **Unikalumas**: neteikite to paties išvengto perrašymo ir technine skola, ir išlaikymo eilutėje.

`Offset value = P(future event) × counterfactual cost × discount factor` – parašykite šią eilutę pasiūlyme ir stebėkite, kaip įvertis tampa ginčytinas; būtent tai ir yra tikslas.

## Spąstai

- **Dvigubas skaičiavimas** – ta pati išvengta hospitalizacija pateikiama kaip užskaita, lovadieniai ir QALY su pridėta kaina.
- **Vidutinių sąnaudų užskaitos** įvykiams, kurių pastoviosios sąnaudos išlieka bet kuriuo atveju.
- **Tylus 100 % tikimybės priskyrimas** tolesniems įvykiams, kurie buvo tik galimi.
- **Užskaitos kitiems biudžetams**, pateiktos kaip santaupos mokėtojui, kurio prašoma mokėti – žr. [analizės perspektyva](../analizės-perspektyva/).

## Šaltiniai

- York Health Economics Consortium glossary: cost offset. <https://yhec.co.uk/glossary/cost-offset/>
- Cohen JT, Neumann PJ, Weinstein MC. NEJM 2008 (offsets rarely exceed costs). <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
