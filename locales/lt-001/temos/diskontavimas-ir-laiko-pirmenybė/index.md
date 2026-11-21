# Diskontavimas ir laiko pirmenybė

Diskontavimas paverčia būsimas sąnaudas ir naudą dabartinėmis vertėmis, nes šiandienos nauda vertingesnė už tą pačią naudą po penkerių metų.

## Kodėl tai svarbu

Kiekvienas sveikatos ekonomikos vertinimas ir kiekviena rimta viešojo sektoriaus verslo byla diskontuoja daugiamečius srautus. JK HM Treasury Green Book įpareigoja taikyti 3,5 % metinę socialinę laiko pirmenybės normą; NICE etaloninis atvejis diskontuoja ir sąnaudas, ir poveikį sveikatai 3,5 % per metus (su 1,5 % ne etaloninio atvejo norma beveik išgydančioms terapijoms, kurių nauda trunka 30+ metų). Jei jūsų programinės įrangos verslo byla teigia „5 mln. £ santaupų per 10 metų“, finansų vertintojas iškart paklaus diskontuoto skaičiaus.

## Matematika

Būsimos sumos dabartinė vertė:

```
PV = FV / (1 + r)^t

PV = present value
FV = future value in year t
r  = discount rate (NICE/Green Book: 0.035)
t  = years from now
```

Pastoviai metinei naudai B per n metų (anuitetas):

```
PV = B × [1 − (1 + r)^(−n)] / r
```

## Išspręstas pavyzdys

Jūsų programinė įranga NHS trestui sutaupo 100 000 £ per metus 5 metus, pradedant metais po paleidimo.

Nediskontuota suma: 500 000 £.

Diskontuota 3,5 %:

```
Year 1: 100,000 / 1.035^1 = £96,618
Year 2: 100,000 / 1.035^2 = £93,351
Year 3: 100,000 / 1.035^3 = £90,194
Year 4: 100,000 / 1.035^4 = £87,144
Year 5: 100,000 / 1.035^5 = £84,197

Total PV ≈ £451,505
```

Sąžininga antraštė – apie 451 000 £, maždaug 10 % mažiau nei naivi suma. Dabar tarkime, kad pristatymas vėluoja vienerius metus: kiekvienas narys pasislenka metais vėliau, o PV krenta iki maždaug 436 000 £ – [vėlavimo kainos](../vėlavimo-kaina/) požiūris per diskontavimą.

## Ryšys su programinės įrangos inžinerija

- **Techninės skolos grąžinimas ir platformų migracijos** žada naudos srautus po daugelio metų; diskontuokite juos prieš lygindami su darbu, kuris atsiperka šį ketvirtį.
- **Sąnaudos priekyje, nauda gale** yra standartinė migracijos forma. Diskontavimas bausdamas tą formą elgiasi teisingai: jis įkainoja nerizikingą laiko vertę už pajėgumų įsipareigojimą dabar vertei vėliau.
- **„Santaupos penktaisiais metais“** teiginiai verti dvigubo skepticizmo – jie ir stipriai diskontuojami, ir labai neapibrėžti (žr. [jautrumo analizė](../jautrumo-analizė/)).

## Spąstai

- **Sąnaudų, bet ne naudos diskontavimas** (ar atvirkščiai) – etaloninis atvejis diskontuoja abi ta pačia norma.
- **Komercinės normos (8–12 %) naudojimas viešojo sektoriaus byloje** arba 3,5 % rizikos kapitalo remiamoje. Suderinkite normą su sprendimų priėmėju.
- **Diskontavimo painiojimas su infliacija.** Diskontavimas taikomas *realioms* (infliacija pakoreguotoms) vertėms; nedarykite abiejų numanomai.

## Šaltiniai

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- HM Treasury Green Book, discounting supplementary guidance. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
