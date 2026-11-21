# Valiutai saugus sąnaudų sumavimas

Daugelio piniginių eilučių – mėnesinių sąskaitų, kiekvienos vietos sąnaudų, daugiamečių biudžeto poveikio skaičių – sumavimas įprastais dvejetainiais slankiojo kablelio (`f64`) skaičiais kaupia mažas vaizdavimo paklaidas, nes dauguma dešimtainių trupmenų (pvz., 1 234,56 USD) dvejetainiame slankiajame kablelyje nėra tiksliai atvaizduojamos. Kiekviena atskira paklaida maža, bet didelis modelis, per kelerius metus sumuojantis šimtus ar tūkstančius eilučių, gali nukrypti centų dalimis – o nuokrypis priklauso nuo sudėties *tvarkos*, todėl neatkuriamas. Valiutos sumavimas, atliktas tikra dešimtaine (arba sveikųjų mažosios vienetų) aritmetika, sudedamas tiksliai, atitinkant tai, kaip apskaitos sistemos ir dvigubo įrašo knygos privalo sutapti iki cento.

## Kodėl tai svarbu

Tai gerai dokumentuota, esminė programinės įrangos klaidų klasė: Goldbergo 1991 m. ACM Computing Surveys straipsnis „What Every Computer Scientist Should Know About Floating-Point Arithmetic“ yra standartinis šaltinis, kodėl dvejetainis slankusis kablelis negali tiksliai atvaizduoti daugumos dešimtainių piniginių verčių ir kodėl daugelio jų sumavimas didina paklaidą. Sveikatos ekonomikos ir NHS finansų modeliai įprastai sumuoja daug metų ir daug sąnaudų kategorijų – [bendrosios nuosavybės kaina](../bendroji-nuosavybės-kaina/) ir [biudžeto poveikio analizė](../biudžeto-poveikio-analizė/) abi agreguoja didelį kiekį `f64` sąnaudų eilučių daugiamečiuose horizontuose. Kai modelis privalo sutapti iki cento – auditas, perskaičiuojantis sumą ranka, turi gauti *identišką* skaičių – pati aritmetika turi būti tiksliai dešimtainė, o ne slankiojo kablelio.

## Matematika

```
Naive rollup:              total = Σ f64(line_item_i)         — order-dependent drift
Currency-safe rollup:      total = Σ Decimal(line_item_i)      — exact, reproducible

Applying a percentage adjustment (e.g. a contingency buffer):
  adjusted = total × multiplier                — exact Decimal result, may carry
                                                  more decimal places than the
                                                  currency's minor-unit exponent
  rounded  = round(adjusted, currency_exponent, rounding_rule)  — the rounding rule
                                                  (half-up vs half-even/banker's
                                                  rounding) must be stated explicitly
```

Atkreipkite dėmesį į dviejų žingsnių discipliną: tikslios `Decimal` sumos dauginimas iš daugiklio gali sukurti daugiau dešimtainių ženklų nei valiuta iš tikrųjų naudoja (pvz., trys dešimtainiai ženklai iš sumos su dviem dešimtainiais ženklais, padaugintos iš daugiklio su dviem dešimtainiais ženklais) – tas tarpinis tikslumas *automatiškai neapvalinamas*; tik aiškus apvalinimo žingsnis su nurodyta apvalinimo taisykle sumažina jį iki tikrojo valiutos mažosios vienetų eksponento.

## Išspręstas pavyzdys

Dvylika identiškų mėnesinių sąskaitų po 1 234,56 USD, susumuotų tikra dešimtaine aritmetika: 1 234,56 USD × 12 = **14 814,72 USD**, tiksliai. Palyginkite su `f64` literalo `1234.56` sumavimu dvylika kartų IEEE-754 dvigubu tikslumu, kuris gali nukrypti centų dalimis, priklausomai nuo sudėties tvarkos – tai tikra, dokumentuota klaidų klasė, o ne problema modeliui, sukurtam su tikra dešimtaine `Money` aritmetika.

Dabar taikykite standartinį 5 % biudžeto poveikio atsargos priedą (1,05 daugiklis) šiai 14 814,72 USD sumai: 14 814,72 USD × 1,05 = 15 555,456 USD – trys dešimtainiai ženklai, nes daugyba yra tiksli ir automatiškai neapvalinama iki valiutos dviejų dešimtainių ženklų. Aiškiai apvalinus iki 2 dešimtainių ženklų pagal bankininko apvalinimą (half-even), gaunama tiksliai **15 555,46 USD**.

## Ryšys su programinės įrangos inžinerija

Tai tiesioginė, esminė pamoka už „finansinė programinė įranga naudoja `Decimal`, o ne `float`“ – ji aiškiai susijusi su šio repozitorijaus [bendrosios nuosavybės kainos](../bendroji-nuosavybės-kaina/) ir [biudžeto poveikio analizės](../biudžeto-poveikio-analizė/) moduliais, kurie abu šiuo metu sumuoja paprastas slankiojo kablelio sąnaudas; čia pateiktas teisingumo argumentas nereikalauja nedelsiant migruoti tų modelių, bet tiksliai nurodo, *kada* sistema privalo sutapti iki cento ir todėl negali naudoti dvejetainio slankiojo kablelio pinigų aritmetikai. Taip pat žr. [tikslus sąnaudų paskirstymas centais](../tikslus-sąnaudų-paskirstymas-centais/) – lydinčią problemą, kaip padalyti (o ne susumuoti) sumas neprarandant centų.

## Spąstai

- **Konvertavimas į `float` grandinės viduryje**: piniginės vertės ištraukimas į slankiojo kablelio skaičių skaičiavimo viduryje (kai kurios `Money` bibliotekos net pavadina šį konvertavimo metodą kažkuo panašiu į „lossy“ kaip aiškų įspėjimą) tyliai atmeta tikslumo garantiją kiekvienam tolesniam skaičiavimui.
- **„Decimal per lėtas, kad vargtume“**: tikslios dešimtainės aritmetikos atmetimas kaip nereikalingos pridėtinės apkrovos, kai finansinei atskaitomybei svarbus teisingumas ir audituojamumas, o ne grynasis pralaidumas.
- **Atsargos procento taikymas nenurodžius apvalinimo taisyklės**: apvalinimas half-up ar half-even (bankininko) gali pakeisti galutinį centą; pati apvalinimo konvencija turi būti nurodytas, audituojamas pasirinkimas – žr. [sąnaudų ir naudos analizė](../sąnaudų-ir-naudos-analizė/) dėl HM Treasury Green Book gairių apie atsargą ir optimizmo paklaidos pataisas, kurios yra būtent tokio tipo skaičius, kuriam taikomas šis apvalinimo žingsnis.

## Šaltiniai

- Fowler M. "Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — the `Money` pattern.
- Goldberg D. "What Every Computer Scientist Should Know About Floating-Point Arithmetic." ACM Computing Surveys, 1991.
- HM Treasury, The Green Book — optimism-bias and contingency guidance for budget-impact modelling. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
