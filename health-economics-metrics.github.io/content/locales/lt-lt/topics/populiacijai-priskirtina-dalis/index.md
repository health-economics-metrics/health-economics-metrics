# Populiacijai priskirtina dalis (PAF)

PAF – tai ligos ar rezultato naštos populiacijoje dalis, priskirtina konkrečiam rizikos veiksnio poveikiui – dalis, kuri išnyktų, jei poveikis būtų visiškai pašalintas. Ji paverčia „šis rizikos veiksnys padvigubina jūsų šansus“ populiacijos lygio skaičiumi, apie kurį užsakovas iš tikrųjų gali planuoti: kiek atvejų ir kiek kainos verta vytis tam tikrą poveikį.

## Kodėl tai svarbu

Levinas PAF pristatė 1953 m., atsakydamas į siaurą, konkretų klausimą: jei niekas nerūkytų, kiek plaučių vėžio išnyktų? Ta pati aritmetika dabar nustato nacionalinio prevencijos planavimo mastą visur – nuo tabako ir nutukimo strategijų iki PSO Pasaulinės ligų naštos tyrimo rizikos veiksnių reitingų, nes santykinė rizika pati savaime nieko nesako apie poveikį – rizikos veiksnys gali padvigubinti reto įvykio šansus ir vos pajudinti populiacijos ligų naštą, arba tik šiek tiek padidinti dažno įvykio šansus ir vis tiek sudaryti didžiulę atvejų dalį. PAF paverčia „rizikos veiksnys X pavojingas“ į „pašalinus rizikos veiksnį X būtų išvengta tiek atvejų per metus“ – skaičius, kurio iš tikrųjų reikia prevencijos programos verslo bylai. Žr. [prevencijos ekonomika](../prevencijos-ekonomika/) dėl to, kiek kainuoja veikti pagal tą skaičių, kai jį turite.

## Matematika

```
PAF = prevalence_exposed × (relative_risk − 1) / (1 + prevalence_exposed × (relative_risk − 1))

prevalence_exposed = fraction of the population exposed to the risk factor (0–1)
relative_risk      = risk of the outcome in exposed vs. unexposed people (e.g. 2.5 = 2.5×)

Cases attributable = total_cases × PAF
```

PAF auga didėjant ir poveikio paplitimui, ir santykinei rizikai – kukliai padidėjusi santykinė rizika (tarkime, 1,5×), susieta su labai dažnu poveikiu, gali duoti didesnį PAF nei dramatiška santykinė rizika (tarkime, 5×), susieta su retu. Būtent todėl jis egzistuoja kaip atskiras skaičius nuo santykinės rizikos.

## Išspręstas pavyzdys

Rizikos veiksnys yra 30 % populiacijos (`prevalence_exposed = 0.3`) ir 2,5 karto padidina rezultato riziką (`relative_risk = 2.5`):

```
PAF = 0.3 × (2.5 − 1) / (1 + 0.3 × (2.5 − 1))
    = 0.3 × 1.5 / (1 + 0.3 × 1.5)
    = 0.45 / 1.45
    ≈ 0.3103 (31.0%)

With 1,000 cases/year in the population:
Cases attributable = 1,000 × 0.3103 ≈ 310 cases/year
```

Kiek mažiau nei trečdalis šio rezultato metinės naštos priskirtina poveikiui – jį visiškai pašalinus (teorinė riba; jokia tikra intervencija nepasiekia 100 % poveikio pašalinimo) būtų išvengta maždaug 310 iš 1 000 atvejų per metus.

## Ryšys su programinės įrangos inžinerija

PAF yra epidemiologinė „kiek mūsų incidentų apimties priskirtina šiai vienai pagrindinei priežasčiai?“ versija – tokio paties pobūdžio klausimas, kurį komandos užduoda vertindamos konkrečią diegimo ar priklausomybės klasę prieš visus gamybos incidentus, užuot traktavusios kiekvieną incidentą kaip vienodai vertą taisyti tuo pačiu būdu. Pagrindinės priežasties kategorija, esanti dideliame diegimų segmente su tik kukliu santykinės rizikos sukelti incidentą rodikliu, gali pralenkti retą, didelės santykinės rizikos kategoriją pagal tai, kur pirmiausia investuoti inžinerinių pastangų – būtent PAF įžvalga, išversta.

## Spąstai

- **PAF sudėjimas per rizikos veiksnius**: kelių veiksnių, veikiančių tą patį rezultatą, PAF nesudaro 100 % – iš viso jie gali viršyti – nes veiksniai sąveikauja ir dalijasi priežastiniais keliais. Kiekvieną PAF traktuokite kaip „jei šis veiksnys vienas būtų pašalintas“, niekada kaip bendros rizikos padalijimą.
- **Santykinės rizikos perkėlimas tarp populiacijų**: santykinė rizika, įvertinta vienoje populiacijoje (kitoks bazinis poveikio paplitimas, kiti painiavos veiksniai), taikoma kitos populiacijos poveikio paplitimui duoda klaidinantį PAF.
- **PAF painiojimas su priskirtina rizika paveiktiesiems**: PAF yra populiacijos lygio ir priklauso nuo poveikio paplitimo; priskirtina rizika paveiktiesiems yra individualaus lygio ir nepriklauso. Jie atsako į skirtingus klausimus – nesicituokite vieno atsakydami į kitą.

## Šaltiniai

- Levin ML. "The occurrence of lung cancer in man." Acta Unio Int Contra Cancrum. 1953;9(3):531-41.
- Rockhill B, Newman B, Weinberg C. "Use and misuse of population attributable fractions." Am J Public Health. 1998;88(1):15-9.
