# Markovo kohortos simuliacija

Markovo kohortos modelis yra standartinė SVV modeliavimo technika intervencijoms, kurių poveikis atsiskleidžia per kelis laikotarpius (ciklus), o ne vienu šūviu. Hipotetinė kohorta pradeda visiškai vienoje sveikatos būsenoje, ir kiekvieną ciklą fiksuotas perėjimo tikimybių rinkinys perkelia kohortos dalis tarp būsenų; sąnaudos ir QALY kaupiasi kiekvieną ciklą proporcingai tam, kiek kohortos užima kiekvieną būseną, ir diskontuojamos iki dabartinės vertės. Bet kuris programinės įrangos inžinierius, modeliuojantis daugiametę skaitmeninės sveikatos verslo bylą – kurioje vartotojai ar pacientai laikui bėgant juda tarp būsenų, tokių kaip „įsitraukęs“, „nutrūkęs“ ar „nutekėjęs“ – kuria tą pačią struktūrą.

## Kodėl tai svarbu

Dauguma tikrų sveikatos technologijų sprendimų nėra vienkartiniai vieno laikotarpio sąnaudų ir rezultato palyginimai. Lėtinė būklė progresuoja, atsinaujina, reaguoja į gydymą ar žudo per metus – ir vieno laikotarpio [sąnaudų efektyvumo analizė](../sąnaudų-efektyvumo-analizė/) to atvaizduoti negali. NICE, ICER ir CADTH paraiškos lėtinių ligų intervencijoms, vertinamos per [sveikatos technologijų vertinimą](../sveikatos-technologijų-vertinimas/), beveik visada kuriamos kaip Markovo kohortos modeliai su viso gyvenimo laiko horizontu, nes alternatyva – modeliuoti kiekvieną galimą individualaus paciento kelią – masteliu neišsprendžiama. Kohortos lygio Markovo modelis išmaino dalį individualaus lygio realizmo (jis sunkiai atvaizduoja praeities būsenų atmintį, todėl „Markovo“: ateitis priklauso tik nuo dabartinės būsenos) į modelį, kuris yra skaidrus, audituojamas ir pakankamai greitas, kad būtų paleistas tūkstančius kartų [tikimybinėje jautrumo analizėje](../tikimybinė-jautrumo-analizė/).

## Matematika

```
One cycle's cohort update (row-vector x transition matrix):
  new_state[j] = sum_i state[i] * transition_matrix[i][j]

One cycle's cost:
  cycle_cost = sum_s state[s] * cost_per_cycle[s]

One cycle's QALYs:
  cycle_qalys = sum_s state[s] * utility[s] * cycle_length_years

Full simulation over `cycles` cycles, discounted at `discount_rate`:
  total_discounted_cost  = sum_{t=0}^{cycles-1} cycle_cost(state_t)  / (1 + discount_rate)^t
  total_discounted_qalys = sum_{t=0}^{cycles-1} cycle_qalys(state_t) / (1 + discount_rate)^t
  where state_0 = initial_distribution, state_{t+1} = advance_cohort(state_t, transition_matrix)
```

Kiekvieno ciklo diskontavimas iki dabartinės vertės naudoja tiksliai [diskontavimo ir laiko pirmenybės](../diskontavimas-ir-laiko-pirmenybė/) formulę, taikomą ciklas po ciklo, o ne metai po metų.

## Išspręstas pavyzdys

**Klinikinis**: 2 būsenų modelis – `Well` ir `Dead` – kur kas ciklą miršta 10 % kohortos, o `Dead` yra sugeriančioji (jos savaiminio perėjimo tikimybė yra 1,0; praleidus šią kilpą kohortos masė po vieno ciklo `Dead` išnyktų). Kohorta pradeda visiškai `Well`, kainuoja 1 000 £ per ciklą būdama `Well` (0 £, kai `Dead`) ir įgyja 0,8 QALY per metus būdama `Well`. Simuliuojama 3 metiniams ciklams pagal NICE 3,5 % diskonto normą:

```
Cycle 0: state = [1.00, 0.00] (100% Well)
  cost = £1,000.00, qalys = 0.800, discount factor = 1.000000
  discounted: cost = £1,000.00, qalys = 0.8000

Cycle 1: state = [0.90, 0.10] (90% Well, 10% Dead)
  cost = £900.00, qalys = 0.720, discount factor = 0.966184
  discounted: cost = £869.57, qalys = 0.6957

Cycle 2: state = [0.81, 0.19] (81% Well, 19% Dead)
  cost = £810.00, qalys = 0.648, discount factor = 0.933511
  discounted: cost = £756.14, qalys = 0.6049

Total discounted cost  ≈ £2,625.71
Total discounted QALYs ≈ 2.1006
```

Kiekvieno ciklo būsena yra praėjusio ciklo būsena, perleista per perėjimo matricą – 90 % iš 90 %, vis dar `Well` 1 cikle, lieka `Well` 2 cikle (0,9 × 0,9 = 0,81), o kiti 19 % jau mirė (0,9 × 0,1 + 0,1 × 1,0 = 0,19). Atkreipkite dėmesį, kad kohorta niekada visiškai neištuština `Well`: esant pastoviam 10 % mirtingumui per ciklą ir be grįžimo, `Well` dalis mažėja geometriškai, o ne pasiekia nulį prie jokio baigtinio ciklų skaičiaus.

## Ryšys su programinės įrangos inžinerija

Kaip daugiaciklis SVV modelis naudojamas tikrame vertinime, žr. [sveikatos technologijų vertinimas](../sveikatos-technologijų-vertinimas/) – etaloninis atvejis, valdantis, kokią diskonto normą, naudingumo šaltinį ir laiko horizontą turi naudoti pateiktas Markovo modelis.

Markovo kohortos modelis struktūriškai yra būsenų mašina su tikimybiniais perėjimais, vykdoma fiksuotą taktų skaičių, diskontuojant kiekvieno takto vertę. Ta pati forma simuliuoja vartotojų kohortos išlaikymą / būsenų perėjimus laikui bėgant – žr. [DORA rodikliai](../dora-rodikliai/) dėl veikimo patikimumo versijos „kokia sistemos dalis šį laikotarpį yra degradavusioje būsenoje ir kiek tai kainuoja“. Konkrečiai:

- **Išlaikymo / nutekėjimo modeliavimas** yra Markovo kohortos modelis su būsenomis „aktyvus“, „rizikoje“, „nutekėjęs“: fiksuota mėnesio perėjimo matrica, paleista 12 ar 24 mėnesių ciklams, parodo tikėtiną aktyvių vartotojų skaičių (ir pajamas) bet kurį būsimą mėnesį – kaip `Well`/`Dead` parodo tikėtinus išgyvenusiuosius.
- **Patikimumo ir incidentų ekonomika**: sistemos būsenos (sveika, degradavusi, neveikianti) gali būti modeliuojamos taip pat, su „kaina per ciklą“ prastovos žalos, kaupiamos, kol sistema užima degradavusias / neveikiančias būsenas – paverčiant incidentų dažnumo argumentą diskontuotų sąnaudų argumentu, palyginamu su patikimumo darbo, kuris pakeistų perėjimo tikimybes, kaina.
- **Sugeriančiosios būsenos kaip galutinės būsenos**: `Dead` klinikiniame modelyje yra būtent „atšaukta prenumerata“ ar „visam laikui neprisijungęs“ būsena programinės įrangos modelyje – abiem reikia aiškios savaiminio perėjimo tikimybės 1,0, kitaip simuliacija tyliai praranda masę.

## Spąstai

- **Perėjimo tikimybės, kurių eilutės nesumuoja į 1.** Eilutė, sumuojanti daugiau ar mažiau nei 1, tyliai priverčia kohortą „nutekėti“ ar „augti“ kas ciklą – visada tikrinkite eilučių sumas prieš pasitikėdami modelio rezultatu, nes pati modelio struktūra klaidos nepažymi.
- **Per grubus ciklo ilgis tikrai ligos dinamikai.** Metinis ciklas būklei, kuri reikšmingai keičia būseną per savaites, nuvertina perėjimus, vykstančius ciklo viduryje; rinkitės ciklo ilgį, trumpą palyginti su tuo, kaip greitai juda modeliuojamas procesas.
- **Pamirštama sugeriančiosios būsenos savaiminė kilpa.** Sugeriančioji būsena (mirtis, galutinis nutraukimas) turi turėti savaiminio perėjimo tikimybę lygiai 1,0. Praleidus ją, kohortos masė toje būsenoje išgaruoja po vieno ciklo, nuvertindama kaupiamas sąnaudas ar QALY praradimą.
- **Modelio laikymas patvirtintu, nes jis veikia.** Markovo kohortos modelis su tikėtinai atrodančiomis perėjimo tikimybėmis vis tiek gali būti struktūriškai klaidingas (trūkstamos būsenos, netinkamas sugeriančiosios elgesys); prieš pasitikėdami rezultatu, patikrinkite pagal žinomus epidemiologinius etalonus (pvz., ar modeliuotas 5 metų išgyvenimas sutampa su paskelbtomis išgyvenimo kreivėmis).

## Šaltiniai

- Sonnenberg FA, Beck JR. "Markov models in medical decision making: a practical guide." Medical Decision Making. 1993;13(4):322-38. <https://pubmed.ncbi.nlm.nih.gov/8246705/>
- Briggs A, Sculpher M. "An introduction to Markov modelling for economic evaluation." PharmacoEconomics. 1998;13(4):397-409. <https://pubmed.ncbi.nlm.nih.gov/10178664/>
