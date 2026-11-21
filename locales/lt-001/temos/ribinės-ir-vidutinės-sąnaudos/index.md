# Ribinės ir vidutinės sąnaudos

Vidutinės sąnaudos – bendros sąnaudos, padalytos iš pagamintų vienetų. Ribinės sąnaudos – vieno *papildomo* vieneto pagaminimo kaina. Sprendimai turėtų būti priimami pagal ribines sąnaudas – bet paskelbtos vieneto sąnaudos beveik visada yra vidurkiai.

## Kodėl tai svarbu

Dažniausia klaida skaitmeninės sveikatos verslo bylose – sutaupytą išteklių vertinti **vidutinėmis** sąnaudomis, kai tikroji santaupa yra **ribinės** sąnaudos. Ligoninės lovadienis turi vidutines (visiškai paskirstytas) sąnaudas 400 £+, bet vieno lovadienio atlaisvinimas nesutaupo 400 £ – pastatas, šildymas ir dauguma personalo sąnaudų tęsiasi. Faktiškai atlaisvinti pinigai gali būti 50–150 £, nebent atlaisvinama pakankamai lovų palatai uždaryti.

## Matematika

```
Average cost:  AC = TC / Q
Marginal cost: MC = dTC/dQ   (cost of one more/one fewer unit)

TC = total cost, Q = quantity
```

Pastoviosios sąnaudos daro MC < AC pajėgumų mažinimui, o MC gali artėti prie nulio, kai yra laisvų pajėgumų. Santaupų teiginiuose turėtų būti naudojama:

```
True saving = ΔQ × MC          (small changes)
True saving = step change in TC (large changes that cross a capacity threshold, e.g. closing a ward)
```

## Išspręstas pavyzdys

Jūsų programinė įranga sumažina vidutinę hospitalizacijos trukmę, atlaisvindama 1 000 lovadienių per metus trestui.

- **Naivus teiginys**: 1 000 × 400 £ vidutinės sąnaudos = **400 000 £ sutaupyta**. Neteisinga.
- **Ribinis teiginys**: kintamosios sąnaudos vienam lovadieniui (maistas, skalbimas, eksploatacinės medžiagos, dalis slaugos lankstumo) ≈ 120 £. Santaupa = 1 000 × 120 £ = **120 000 £**, *plius* atlaisvintų pajėgumų vertė, jei lovos vėl užpildomos laukiančiais planiniais pacientais (pajamos pagal veiklos pagrindu mokamą apmokėjimą arba laukimo sąrašo sumažinimas).
- **Šuolinis teiginys**: jei trestas atlaisvina 7 300 lovadienių per metus (20 lovų palata), jis gali iš tikrųjų uždaryti palatą: personalas + eksploatacija ≈ 1,5 mln. £ per metus realių pinigų. Dabar vidutinių sąnaudų matematika artimesnė tiesai.

Ta pati intervencija, trys ginami skaičiai, priklausomai nuo to, ar pokytis kerta pajėgumų žingsnį.

## Ryšys su programinės įrangos inžinerija

Debesijos ekonomika yra prigimtinė ribinių sąnaudų teritorija:

- Ribinė vieno papildomo CI paleidimo sąnaudos jau rezervuotuose pajėgumuose yra ≈ 0 £, o vidutinės sąnaudos paleidimui (visos platformos išlaidos ÷ paleidimai) gali būti svarai. Perskirstymo sistemos, skaičiuojančios vidutinę kainą, skatina komandas nepakankamai naudoti bendrus pajėgumus, kurie ties riba iš tikrųjų nemokami.
- Priešingai, „sutaupėme 30 % skaičiavimų“ atlaisvina pinigus tik jei egzemplioriai iš tikrųjų nutraukiami ar rezervacijos sumažinamos – lovadienio spąstų programinės įrangos versija. Žr. [pinigus atlaisvinančios ir neatlaisvinančios santaupos](../pinigus-atlaisvinančios-ir-neatlaisvinančios-santaupos/).

## Spąstai

- **Pajėgumų vertinimas vidutinėmis sąnaudomis** ir pateikimas kaip pinigų (klasika).
- **Prielaida, kad ribinė kaina pastovi.** Ji šokteli ties pajėgumų ribomis (palatų uždarymas, licencijų pakopos, rezervuotų egzempliorių įsipareigojimai).
- **Ribinių sąnaudų naudojimas plėtimo sprendimams, bet vidutinių – mažinimui** toje pačioje byloje – rinkitės pagal faktinį sprendimą.

## Šaltiniai

- York Health Economics Consortium glossary: marginal cost. <https://yhec.co.uk/glossary/marginal-cost/>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
