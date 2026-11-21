# Gydytojo laikas

Gydytojo laikas yra retiausias išteklius daugumoje sveikatos sistemų. Vertės matavimas sutaupant gydytojui minučių per dieną reikalauja pereiti nuo paprastos atlyginimų matematikos prie **alternatyviosios kainos ir sistemos pajėgumų**: nacionalinėje sveikatos tarnyboje gydytojo laikas yra standi veiklos kliūtis, o ne lanksti sąnaudų eilutė.

## Kodėl tai svarbu

Negalima greitai sukurti daugiau šeimos gydytojų, konsultantų ar specializuotų slaugytojų – rengimo vamzdynai trunka 5–15 metų, o laisvų vietų trūkumas lėtinis. Todėl sutaupyta gydytojo laiko valanda nėra „išvengti atlyginimai“ (gydytojui vis tiek mokama); tai *atlaisvinti kliūties pajėgumai*, o kliūties pajėgumai verti to, ką kliūtis sukuria. Todėl „sutaupo 10 minučių per konsultaciją“ teiginiai yra vienu metu ir dažniausi, ir blogiausiai įkainoti skaitmeninės sveikatos eilutė.

## Matematika

Trys vertinimo lygiai, didėjančio sąžiningumo tvarka:

```
1. Wage basis:        hours × loaded salary rate (PSSRU unit costs)
                      — what the time costs, not what it produces
2. Output basis:      hours → appointments/procedures enabled × scheme value
                      (see national-tariff-and-unit-costs.md)
3. Bottleneck basis:  if this role gates a whole pathway, hours × value of
                      pathway throughput released (theory of constraints)
```

Fragmentacijos nuolaida: laikas, sutaupytas trupiniais žemiau naudingo kvanto (pvz., 3 minutės, išsklaidytos po kliniką), perskirstomas prastai; taikykite nurodytą išnaudojimo koeficientą.

## Išspręstas pavyzdys

Ambientinis rašymas sutaupo šeimos gydytojui 2 minutes per konsultaciją, 30 konsultacijų per dieną: 60 minučių per dieną, arba **220 valandų per metus vienam šeimos gydytojui** per 220 darbo dienų.

```
Wage basis:   220 × £80 (loaded GP hour, PSSRU-region) ≈ £17,600/GP/year
Output basis: 60 min/day = 5 extra 12-min consultations/day
              = 1,100 extra appointments/GP/year × £42 ≈ £46,200/GP/year
              — or the same appointments absorbed as reduced overtime and
              safer, unhurried consultations (qualitative line)
```

50 šeimos gydytojų federacijoje išvesties pagrindu apskaičiuoti pajėgumai verti ~2,3 mln. £ per metus – jei minutės yra tikros (išmatuotos, o ne tiekėjo deklaruotos), konsoliduotos (ištisos konsultacijos, o ne fragmentai) ir perskirstytos (žr. [pinigus atlaisvinančios ir neatlaisvinančios santaupos](../pinigus-atlaisvinančios-ir-neatlaisvinančios-santaupos/)).

## Ryšys su programinės įrangos inžinerija

Vyresniojo inžinieriaus laikas elgiasi identiškai: jis yra kliūtis, per kurią teka dizainai, peržiūros ir incidentai, todėl vertinkite jį pagal tai, ką kliūtis valdo, o ne atlyginimą. Tas pats trijų lygių vertinimas taikomas bet kuriam „DI sutaupo kiekvienam kūrėjui X minučių“ teiginiui – atlyginimų matematika pataikauja mažiems skaičiams; sąžiningi klausimai yra, ar minutės susijungia į naudingus blokus ir ką atlaisvinti pajėgumai iš tikrųjų sukuria. Žr. [tolesnių išteklių optimizavimas](../tolesnių-išteklių-optimizavimas/) dėl daugiklio, kai sutaupyta valanda priklauso žmogui, kurio visi kiti laukia.

## Spąstai

- **Minutės × atlyginimas = santaupos** – kanoninis išpūtimas; tai pajėgumai, ir tik esant nurodytam išnaudojimui.
- **Kvanto problemos ignoravimas**: 12 × 5 minučių santaupų ≠ viena laisva valanda.
- **Visų vaidmenų vertinimas vienodai**: kelio kliūties valanda verta daug kartų daugiau nei neribojančio vaidmens valanda.

## Šaltiniai

- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
