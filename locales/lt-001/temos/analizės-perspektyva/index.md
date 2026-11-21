# Analizės perspektyva

Perspektyva nusako, *kieno* sąnaudos ir nauda skaičiuojamos ekonominėje analizėje: mokėtojo, paslaugų teikėjo ar visos visuomenės. Ta pati intervencija iš vienos perspektyvos gali atrodyti puikiai, o iš kitos – prastai.

## Kodėl tai svarbu

Kiekvienas ekonominis vertinimas turi iš anksto deklaruoti savo perspektyvą, nes būtent ji lemia, kokios išlaidų eilutės apskritai egzistuoja:

- **Mokėtojo perspektyva** (pvz., NHS užsakovas, draudikas): tik sąnaudos, kurias padengia mokėtojas.
- **Paslaugų teikėjo perspektyva** (pvz., ligoninių trestas): vidinės paslaugų teikimo sąnaudos, personalas, patalpos.
- **Visuomenės perspektyva**: viskas – įskaitant paciento laiką, kelionę, šeimos neformaliąją priežiūrą ir darbdavių patiriamus produktyvumo nuostolius.

NICE etaloninis atvejis sąnaudoms taiko **NHS ir asmeninių socialinių paslaugų (PSS)** perspektyvą. JAV Antrasis ekonominio efektyvumo skyrių komitetas rekomenduoja pateikti ir sveikatos sektoriaus, ir visuomenės analizę su „poveikio inventoriumi“, kuriame išvardyta, kas įtraukta.

## Matematika

Formulės nėra – tai apimties nustatymo taisyklė, taikoma prieš atliekant bet kokius skaičiavimus:

```
Included cost/benefit categories = f(perspective)
```

Naudingas patikrinimas: sudarykite poveikio inventoriaus lentelę, kurioje kiekviena sąnaudų ar naudos rūšis yra atskira eilutė, o kiekviena perspektyva – atskiras stulpelis, ir pažymėkite, kurie langeliai skaičiuojami.

## Išspręstas pavyzdys

Simptomų tikrinimo programėlė nukreipia 10 000 apsilankymų pas šeimos gydytoją per metus į savipriežiūrą.

- **Mokėtojas (NHS)**: sutaupo 10 000 × 42 £ už vieną šeimos gydytojo konsultaciją = **420 000 £ per metus** – stipriai teigiama.
- **Paslaugų teikėjas (šeimos gydytojo praktika)**: jei praktikoms mokama pagal gyventojų skaičių (capitation), jų pajamos nesikeičia, bet darbo krūvis mažėja – nežymiai teigiama.
- **Visuomenė**: pridedame pacientų sutaupytą kelionės ir laukimo laiką, tarkime, 10 000 × 2 valandos × 15 £/val. = 300 000 £ laiko vertės; bet atimame žalą, jei 2 % klaidingai nuramintų pacientų vėliau kreipiasi sunkesnės būklės, 200 × 3 000 £ = 600 000 £ papildomo gydymo. Grynasis visuomenės rezultatas: 420 000 + 300 000 − 600 000 = **120 000 £ per metus** – teigiamas, bet visiškai priklausomas nuo saugumo prielaidos.

Ta pati programėlė – trys skirtingi atsakymai. Būtent perspektyvos deklaravimas daro skaičius palyginamus ir sąžiningus.

## Ryšys su programinės įrangos inžinerija

Įrankių ir platformų investicijų grąža taip pat turi perspektyvų:

- **Komandos biudžetas („mokėtojas“)**: ar licencijos mokestis telpa į mano sąnaudų centrą?
- **Platformos organizacija („teikėjas“)**: visos sąnaudos, įskaitant integraciją, palaikymą ir priežiūrą.
- **Bendrovė („visuomenė“)**: įtraukite poveikį klientams, saugumo išorinius poveikius ir kiekvienos paveiktos komandos laiką.

CI įrankis, kuris pigus jį perkančiai komandai, bet perkelia migracijos darbą 40 kitų komandų, yra programinės įrangos sąnaudų perkėlimo atitikmuo – matomas tik iš platesnės perspektyvos. Nurodykite perspektyvą kiekvienoje verslo byloje; recenzentai negali ginčyti prielaidų, kurių nemato.

## Spąstai

- **Tylus perspektyvos keitimas**: skaičiuojant visuomenės naudą, bet tik mokėtojo sąnaudas, bet kas atrodys ekonomiškai efektyvu.
- **Dvigubas skaičiavimas**, kai perspektyvos sujungiamos (pvz., sutaupytas šeimos gydytojo vizitas įskaitomas ir kaip mokėtojo santaupos, ir kaip paciento laiko santaupos, nors mokėtojo suma jau apima personalo laiką).
- **Sąnaudų perkėlimo ignoravimas**: „santaupos“, kurios tiesiog perkelia sąnaudas pacientams, slaugytojams ar kitam skyriui.

## Šaltiniai

- Sanders GD, et al. "Recommendations for Conduct, Methodological Practices, and Reporting of Cost-effectiveness Analyses: Second Panel on Cost-Effectiveness in Health and Medicine." JAMA 2016. <https://jamanetwork.com/journals/jama/fullarticle/2552214>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
