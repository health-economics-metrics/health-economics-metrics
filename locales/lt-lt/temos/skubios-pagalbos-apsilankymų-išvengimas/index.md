# Skubios pagalbos apsilankymų išvengimas

Skubios pagalbos apsilankymų išvengimas skaičiuoja priėmimo skyriaus (A&E) vizitus ir skubius hospitalizavimus, kuriems užkirsta kelią ankstesnė intervencija – triažo programėlėmis, nuotolinė stebėsena, virtualiomis palatomis, skubios pagalbos nukreipimu. Jis paverčia „aptikome anksčiau“ įkainotu teiginiu.

## Kodėl tai svarbu

Skubi pagalba yra brangiausia įprasta aplinka sistemoje (PS apsilankymo vieneto kaina 250–400 £ pagal National Cost Collection / PSSRU skaičius; skubus hospitalizavimas kainuoja tūkstančius), o PS perpildymas kaskaduoja į greitosios vėlavimus ir atšauktas planines operacijas. Viskas, kas saugiai išsprendžia paklausą anksčiau – savipriežiūros patarimai, tos pačios dienos pirminė priežiūra, bendruomenės reagavimas – nuperka sistemai pajėgumus labiausiai įtemptame taške. Tai standartinė naudos eilutė simptomų tikrintuvams, 111 tipo triažo paslaugoms ir [nuotolinei pacientų stebėsenai](../nuotolinės-pacientų-stebėsenos-ekonomika/).

## Matematika

```
Avoided attendances = population × (baseline rate − intervention rate)
Gross saving        = avoided attendances × unit cost per attendance
                      (+ avoided admissions × admission cost, counted separately)

Net saving          = gross saving − intervention cost − cost of new pathway usage
                      (redirected demand isn't free: a 111 call, a GP slot,
                       a virtual-ward day all have unit costs)
```

Priežastiniam teiginiui reikia palyginamosios grupės: apsilankymų rodikliai turi tendencijas ir sezoniškumą, todėl vien prieš / po nieko neįrodo.

## Išspręstas pavyzdys

LOPL nuotolinės stebėsenos paslauga 3 000 didelės rizikos pacientų. Suderintos kontrolinės grupės vertinimas rodo, kad su paūmėjimais susijusių PS apsilankymų sumažėja nuo 0,9 iki 0,7 vienam paciento metui, o skubių hospitalizacijų – nuo 0,5 iki 0,42.

```
Avoided attendances = 3,000 × 0.2  = 600 × £300   = £180,000
Avoided admissions  = 3,000 × 0.08 = 240 × £3,800 = £912,000
Gross                                              £1,092,000/year

Costs: monitoring service £600,000; extra community-nurse responses £150,000
Net ≈ +£342,000/year — plus the QALY gains of exacerbations treated earlier.
```

Atkreipkite dėmesį, kad hospitalizacijų eilutė dominuoja: vien apsilankymų išvengimas retai padengia stebėsenos paslaugos kainą; *hospitalizacijų* išvengimas yra ten, kur pinigai.

## Ryšys su programinės įrangos inžinerija

Tai **incidentų išvengimo ekonomika**. Stebimumo, canary diegimų ir ankstyvojo perspėjimo sistemų vertė yra išvengti „skubios pagalbos apsilankymai“ – iškvietimai, karo kambariai, sev-1 – kiekvienas su pilna kaina (inžinierių valandos × įkainis + poveikis klientams). Taikomos tos pačios modeliavimo taisyklės: atimkite naujo ankstesnio kelio kainą (perspėjimų triažas nėra nemokamas), saugokitės pakeitimo (perspėjimai, kurie kuria darbą neužkirsdami kelio incidentams, yra sveikatos nerimas, o ne sveikata) ir įrodykite kontrafaktą su kontrole (komandų incidentų rodikliai kinta ir regresuoja link vidurkio lygiai taip pat kaip PS apsilankymai).

## Spąstai

- **Regresija link vidurkio**: didelės rizikos kohortos, atrinktos pagal blogus metus, pagerėja negydomos; būtini suderinti kontroliniai ar laipsniško įdiegimo (stepped-wedge) dizainai.
- **Pasiūlos sukelta paklausa**: lengvas skaitmeninis triažas gali *padidinti* bendrus kontaktus (žemesnis slenkstis kreiptis pagalbos), mažindamas PS dalį – skaičiuokite visos sistemos kainą.
- **Apsilankymų vertinimas vidutinėmis sąnaudomis**, kai PS pastoviosios sąnaudos nemažėja – žr. [ribinės ir vidutinės sąnaudos](../ribinės-ir-vidutinės-sąnaudos/).

## Šaltiniai

- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
