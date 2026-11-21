# Reikalingas gydyti skaičius (NNT)

NNT – tai pacientų, kurie turi gauti intervenciją, skaičius, kad **vienas** papildomas pacientas gautų naudos per nurodytą laikotarpį. Jis paverčia procentinius rizikos sumažėjimus – kurie klaidina – į pastangų-už-naudą vienetus, apie kuriuos gali mąstyti bet kas.

## Kodėl tai svarbu

„Sumažina širdies priepuolius 25 %!“ skamba lemiamai. Jei bazinė rizika yra 4 % per 5 metus, absoliutus sumažėjimas yra 1 procentinis punktas, todėl **100 žmonių turi vartoti vaistą 5 metus, kad vienas gautų naudos** – ir visi 100 moka išlaidas ir kenčia šalutinį poveikį. NNT yra priešnuodis santykinės rizikos rinkodarai, todėl įrodymais pagrįsta medicina jį pateikia pirmiausia. Statinai pirminei prevencijai: NNT ≈ 50–100 per 5 metus vienam išvengtam širdies priepuoliui. Jo veidrodis **NNH** (reikalingas pakenkti skaičius) skaičiuoja, kiek gydytų tenka vienam nukentėjusiam.

## Matematika

```
ARR = control event rate − treatment event rate   (absolute risk reduction)
NNT = 1 / ARR

NNH = 1 / (harm rate_treatment − harm rate_control)

Economic bridge:
cost per event prevented = NNT × cost per treatment course
```

Visada nurodykite laiko tarpą ir bazinę populiaciją – NNT be abiejų beprasmis.

## Išspręstas pavyzdys

Kritimų prognozavimo sistema ligoninėje pažymi didelės rizikos pacientus intervencijai (lovos jutikliai, peržiūra, priežiūra). Tyrimas: kritimai su sužalojimu sumažėja nuo 3,2 % iki 2,4 % priėmimų.

```
ARR = 0.8 percentage points → NNT = 1/0.008 = 125
   (125 patients must get the intervention bundle to prevent 1 injurious fall)

Intervention cost ≈ £40/patient → cost per fall prevented = 125 × 40 = £5,000
Cost of an injurious inpatient fall (extra stay, imaging, litigation) ≈ £12,000
Net: prevention pays ~2.4:1 — and the QALY gain is on top.
```

Atkreipkite dėmesį, kaip NNT išlaiko teiginį sąžiningą: „sumažina kritimus 25 %“ ir „užkerta kelią vienam kritimui 125 gydytiems pacientams“ yra tas pats rezultatas, skirtingai įtikinamas.

## Ryšys su programinės įrangos inžinerija

NNT yra tinkamas vienetas bet kuriems vartams ar patikrai, veikiantiems daug elementų, kad pagautų kelis: **„PR skaičius, kuris turi praeiti DI peržiūros vartus, kad būtų pagautas vienas į gamybą einantis defektas“.** Jei vartai peržiūri 400 PR vienam tikram pagavimui (NNT = 400) po 4 minutes kūrėjo dėmesio, vienas pagavimas kainuoja ~27 kūrėjo valandas – dabar palyginkite tai su incidento kaina, kurios jis išvengia. NNH atitinka klaidingus teigiamus: kiek PR tenka *klaidingai* žymai ir kiek kiekviena kainuoja dėmesio ir pasitikėjimo? Patikros tipo įrankiai (linteriai, saugumo skeneriai, anomalijų aptikimas) turėtų būti išleidžiami su NNT / NNH aritmetika – žr. [patikros ekonomika](../patikros-ekonomika/) dėl to, kodėl mažas paplitimas šiuos skaičius daro žiaurius. [Reikalingas ištirti skaičius](../reikalingas-ištirti-skaičius/) yra analogiškas skaičius vienu lygiu aukščiau – visai patikros-tada-gydymo programai, o ne vien gydymui.

## Spąstai

- **Nėra laiko tarpo**: „NNT = 50“ nieko nereiškia; „NNT = 50 per 5 metus“ yra teiginys.
- **Bazinės rizikos perkėlimas**: NNT, apskaičiuotas didelės rizikos tyrimo populiacijoje, žlunga mažos rizikos diegimo populiacijoje.
- **NNH ignoravimas** – vartai su NNT 400 ir NNH 3 yra erzinančių signalų generatorius, o ne saugumo sistema.

## Šaltiniai

- Laupacis A, Sackett DL, Roberts RS. "An assessment of clinically useful measures of the consequences of treatment." NEJM 1988. <https://pubmed.ncbi.nlm.nih.gov/3374545/>
- TheNNT explained. <https://www.thennt.com/thennt-explained/>
