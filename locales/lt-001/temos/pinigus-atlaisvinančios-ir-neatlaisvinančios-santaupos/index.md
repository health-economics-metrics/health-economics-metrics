# Pinigus atlaisvinančios ir neatlaisvinančios santaupos

Pinigus atlaisvinančios santaupos sumažina faktines išlaidas – biudžeto eilutė tampa mažesnė. Pinigų neatlaisvinančios santaupos atlaisvina laiką ar pajėgumus, kurie *panaudojami iš naujo*, o ne atidedami į šalį. Sveikatos sistemų finansų direktoriai šias rūšis laiko skirtingomis, tą patį turėtumėte daryti ir jūs.

## Kodėl tai svarbu

Tai aštriausias sąžiningumo testas, taikomas bet kuriai skaitmeninei verslo bylai nacionalinėje sveikatos tarnyboje. NHS naudos sistemos aiškiai kiekvieną deklaruojamą naudą priskiria pinigus atlaisvinančiai, pinigų neatlaisvinančiai arba kokybinei. Dauguma skaitmeninės sveikatos „santaupų“ – sutaupytos gydytojo minutės vienam pacientui, greitesnis dokumentavimas – yra pinigų neatlaisvinančios: vertingos, bet deficito nemažinančios. Trestų finansų direktorius, susidūręs su finansavimo spraga, gali išleisti tik pinigus. Taip pat žr. [kietosios pinigus atlaisvinančios santaupos](../kietosios-pinigus-atlaisvinančios-santaupos/).

## Matematika

```
Cash-releasing saving   = budget line before − budget line after
                          (must be extractable: a cancelled contract, closed ward,
                           reduced agency spend, avoided purchase)

Non-cash-releasing value = time released × unit cost of that time
                          (valued at opportunity cost; the money is NOT extractable)
```

Tas pats fizinis įvykis (sutaupyta valanda) patenka į vieną ar kitą kategoriją, priklausomai nuo to, kas vyksta toliau:

```
hour saved → overtime/agency shift cancelled        → cash-releasing
hour saved → clinician sees one more waiting patient → non-cash-releasing (capacity)
hour saved → absorbed into slack, nothing changes    → no benefit at all
```

## Išspręstas pavyzdys

Programinė įranga kiekvienai iš 100 slaugytojų sutaupo 30 minučių per pamainą. Tai 100 × 0,5 × 5 pamainos per savaitę × 46 savaitės ≈ 11 500 valandų per metus. Esant 5 pakopos darbdavio kainai ~25 £/val., viliojanti antraštė yra 287 500 £ per metus.

Sąžiningas padalijimas:

- 20 % laiko patenka ten, kur palatos šiuo metu moka laikinųjų / agentūros priemokas dokumentavimo viršvalandžiams padengti: 2 300 valandų × 35 £ agentūros įkainis = **80 500 £ pinigus atlaisvinančių** (pamainos tikrai neužsakytos).
- 60 % perskirstoma tiesioginei pacientų priežiūrai: 6 900 valandų × 25 £ = **172 500 £ pinigų neatlaisvinančių pajėgumų** – tikra vertė, nurodoma atskirai, niekada nevadinama „santaupomis“.
- 20 % išsisklaido pertraukose ir pertraukimuose: **0 £**. Tai deklaruoti būtų fikcija.

Verslo byla, pateikianti 80,5 tūkst. £ pinigų + 172,5 tūkst. £ pajėgumų, yra patikima. Pateikianti 287,5 tūkst. £ „santaupų“ bus atmesta pirmo ją perskaičiusio buhalterio.

## Ryšys su programinės įrangos inžinerija

Identiška logika valdo DI programavimo asistentų ROI: „30 minučių vienam programuotojui per dieną“ yra pinigų neatlaisvinantys pajėgumai, nebent iš tikrųjų sumažėja etatų skaičius, rangovų išlaidos ar debesijos kaina. Kategorijas nurodykite atskirai:

- Pinigus atlaisvinančios: atšauktos rangovų sutartys, išjungtos įrankių licencijos, sumažintos debesijos išlaidos.
- Pajėgumai: anksčiau pristatytos funkcijos (vertė per [vėlavimo kainą](../vėlavimo-kaina/)), sumažėjęs atsilikimas.
- Nieko: sutaupytos minutės, kurios suskaidomos į konteksto perjungimą.

Taip pat sekite, *kur iš tikrųjų nukeliavo atlaisvintas laikas* – naudos realizavimas ([benefits-realization.md](../naudos-realizavimas/)) egzistuoja todėl, kad deklaruoti pajėgumų laimėjimai audito metu dažnai išgaruoja.

## Spąstai

- **Minučių dauginimas iš atlyginimo ir vadinimas santaupomis** – kanoninė nuodėmė.
- **Atlaisvinto laiko vertinimas vidutinėmis visomis sąnaudomis**, kai ribinis to laiko panaudojimas mažos vertės – žr. [ribinės ir vidutinės sąnaudos](../ribinės-ir-vidutinės-sąnaudos/).
- **Tos pačios valandos skaičiavimas du kartus**: kaip pinigų (išvengta pamaina) ir kaip pajėgumų (priimta papildomų pacientų).

## Šaltiniai

- NHS Digital connectivity business case guidance, economic case (benefit categories). <https://digital.nhs.uk/services/networks-and-connectivity-transformation-frontline-capabilities/connectivity-hub/advice-and-guidance/making-the-business-case-for-connectivity-infrastructure-investment---guidance/economic-case>
- NHS England, NHS productivity. <https://www.england.nhs.uk/long-read/nhs-productivity/>
