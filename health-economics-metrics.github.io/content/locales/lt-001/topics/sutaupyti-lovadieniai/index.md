# Sutaupyti lovadieniai

Lovadienis – tai vienas pacientas, vieną dieną užimantis vieną ligoninės lovą. „Sutaupyti lovadieniai“ – dėl ankstesnio išrašymo, hospitalizacijos išvengimo ar virtualių palatų – yra NHS skaitmeninių verslo bylų darbinis arklys ir dažniausiai pervertinama nauda.

## Kodėl tai svarbu

Lovos yra ūmios priežiūros ribojantis veiksnys: kai lovos užpildytos, atšaukiamos planinės operacijos, greitosios eilėje stovi, o priėmimo skyrius užkimštas. Todėl intervencijos, atlaisvinančios lovadienius, turi realią vertę – tačiau vertės *rūšis* visiškai priklauso nuo to, kas nutinka atlaisvintai lovai. Finansų direktoriai išmoko stipriai nuvertinti naivius lovadienių teiginius; teisingai atlikti šią aritmetiką yra patikimumo išbandymas.

## Matematika

```
Bed days saved = patients affected × Δ length of stay (or admissions avoided × avg LOS)

Value depends on the use of the freed capacity:
  refilled with elective activity → value = activity income or waiting-list benefit
  ward closed / flexed down      → value = staffing + running cost released (cash)
  absorbed as slack              → value ≈ marginal (hotel) cost only, £50–£150/day
```

Vidutinė visiškai paskirstyta ūmaus lovadienio kaina dažnai nurodoma 400 £ ir daugiau (Nacionalinė sąnaudų kolekcija istoriškai ~350 £ už papildomus lovadienius) – bet žr. [ribinės ir vidutinės sąnaudos](../ribinės-ir-vidutinės-sąnaudos/): vidurkis beveik niekada nėra santaupa.

## Išspręstas pavyzdys

Nuotolinės stebėsenos „virtuali palata“ leidžia 600 pacientų per metus grįžti namo 2 dienomis anksčiau: sutaupoma 1 200 lovadienių.

- **Naivus teiginys**: 1 200 × 400 £ = 480 000 £. Neteisinga, nebent palata uždaroma.
- **Sąžiningas teiginys**: trestas užpildo lovas planiniais ortopedijos pacientais. 1 200 lovadienių ÷ 3 dienų vidutinė hospitalizacija = 400 papildomų planinių epizodų po ~6 000 £ pajamų pagal veiklos pagrindu mokamą apmokėjimą = **2,4 mln. £ papildomos finansuojamos veiklos** (atėmus tų pacientų gydymo ribines sąnaudas), *plius* 400 pacientų išbraukta iš laukimo sąrašo. Virtualios palatos veiklos kaina (350 000 £) atskaitoma nuo šios sumos.

Atlaisvinti pajėgumai, kurie *panaudojami iš naujo*, dažnai vertingesni nei naivus pinigų teiginys – tačiau tai kitokia vertė ir turi būti taip pažymėta ([pinigus atlaisvinančios ir neatlaisvinančios santaupos](../pinigus-atlaisvinančios-ir-neatlaisvinančios-santaupos/)).

## Ryšys su programinės įrangos inžinerija

„Sutaupytos serverio dienos“ elgiasi identiškai. Nuolat veikiančių aplinkų išjungimas atlaisvina pinigus tik tada, kai egzemplioriai nutraukiami arba rezervacijos baigiasi; į baseiną sugrąžinti pajėgumai verti savo ribinės kainos (~0 esant įsipareigotoms išlaidoms). Lygiagreti disciplina: kiekvienai deklaruotai santaupai įvardykite *mechanizmą* – nutraukta, užpildyta vertingu darbu ar išgaravo. Programinė įranga, mažinanti hospitalizacijos trukmę (išrašymo koordinavimas, nuotolinė stebėsena, diagnostikos apyvarta), turėtų modeliuoti visus tris scenarijus ir leisti trestui rinktis kiekvienai palatai.

## Spąstai

- **Vidutinių sąnaudų taikymas** ribiniams pajėgumams – kanoninė klaida.
- **Dvigubas skaičiavimas**: sutaupyti lovadieniai *ir* išvengtos hospitalizacijos *ir* laukimo sąrašo sumažėjimas dėl tos pačios atlaisvintos lovos.
- **Prielaida, kad sutaupytos dienos yra brangios dienos**: hospitalizacijos pabaigoje sutaupytos dienos yra pigiausios (mažo sudėtingumo).

## Šaltiniai

- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- Economics by Design, NHS cost calculator. <https://economicsbydesign.com/tools/nhs-cost-calculator/>
