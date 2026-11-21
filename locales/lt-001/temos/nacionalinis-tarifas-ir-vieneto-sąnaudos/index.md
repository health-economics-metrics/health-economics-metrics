# Nacionalinis tarifas ir vieneto sąnaudos

NHS moka teikėjams už veiklą pagal taisyklėmis pagrįstą nacionalinį kainų sąrašą – istoriškai Nacionalinis tarifas / Payment by Results, 2023 m. balandžio 1 d. pakeistas **NHS apmokėjimo schema (NHSPS)**. Už kainų slypi nacionalinė vieneto sąnaudų apskaitos infrastruktūra: **Nacionalinė sąnaudų kolekcija (NCC)** ir **PSSRU Sveikatos ir socialinės priežiūros vieneto sąnaudų** kompendiumas.

## Kodėl tai svarbu

Tai kiekvienos patikimos NHS verslo bylos vardikliai. Kai teiginys sako „ambulatorinis apsilankymas vertas 160 £“ ar „6 pakopos slaugytojos valanda kainuoja 31 £“, tie skaičiai ateina iš šios infrastruktūros – o oficialių, o ne išgalvotų skaičių naudojimas daro nepriklausomus vertinimus palyginamus, o finansų komandas – bendradarbiaujančias. Tiekėjui tarifas taip pat apibrėžia *pajamų* pusę: veikla, kurią jūsų programinė įranga įgalina (papildomos klinikos, užpildytos lovos), vertinama schemos kainomis.

## Matematika

```
Tariff price per unit of activity (HRG-coded spell, outpatient attendance)
  = national average unit cost (from NCC) × Market Forces Factor (local adjustment)
  under NHSPS: blended fixed + variable ("aligned payment and incentive") elements

NCC unit cost = trust-reported total cost of an activity type / activity volume
                (built on Patient-Level Information and Costing Systems, PLICS)

PSSRU compendium: ~80 standard unit costs (GP consultation, nurse-hour by band,
ED attendance…) — the default source in UK economic evaluations.
```

## Išspręstas pavyzdys

Jūsų programinė įranga atlaisvina 1 valandą per dieną 6 pakopos slaugytojos laiko 250 darbo dienų metuose:

```
PSSRU-based Band 6 cost incl. overheads ≈ £31/hour (check current edition)
Capacity value = 250 × £31 = £7,750/nurse/year (non-cash-releasing)
```

Arba slaugytoja atlieka 2 papildomus ambulatorinius pakartotinius vizitus per dieną po ~160 £ schemos vertės: 500 × 160 £ = **80 000 £ per metus finansuojamos veiklos** – dešimteriopas skirtumas deklaruojamoje vertėje, priklausomai nuo perskirstymo, ir viskas iš oficialių vieneto sąnaudų. Abu teiginiai audituojami, nes vardikliai paskelbti; tai ir yra esmė.

## Ryšys su programinės įrangos inžinerija

Tai **vidinio kainoraščio** šablonas. JK sveikatos ekonomika veikia, nes kiekvienas vertinimas naudoja tas pačias paskelbtas vieneto sąnaudas; inžinerijos organizacijoms daugiausia to trūksta, todėl kiekviena verslo byla išgalvoja savo inžinieriaus valandos, incidento, diegimo kainą. Platformos komanda gali paskelbti būtent tokį kainoraštį – visa kaina inžinieriaus valandai pagal lygį, incidentui pagal sunkumą, build minutei – ir pareikalauti jį naudoti visuose pasiūlymuose. Perskirstymo / parodymo sistemos taip pat atkartoja tarifo žinomus gedimo režimus: vidutinių sąnaudų kainodara skatina apimties žaidimus, fiksuotos išmokos skatina nepakankamą teikimą. NHSPS evoliucija nuo gryno veiklos mokėjimo iki mišraus fiksuoto + kintamo yra dvidešimt metų pamokų apie skatinimo dizainą vidinei platformų kainodarai.

## Spąstai

- **Pasenę skaičiai**: NCC, PSSRU ir NHSPS kainos atnaujinamos kasmet – datuokite kiekvieną skaičių.
- **Tarifo kaina ≠ sąnaudos**: kainos yra nacionaliniai vidurkiai su pataisomis; jūsų vietinė ribinė kaina skiriasi (žr. [ribinės ir vidutinės sąnaudos](../ribinės-ir-vidutinės-sąnaudos/)).
- **Pajėgumų vertinimas tarifu be mechanizmo**, kuris iš tikrųjų pristatytų papildomą veiklą ir už ją būtų sumokėta.

## Šaltiniai

- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
