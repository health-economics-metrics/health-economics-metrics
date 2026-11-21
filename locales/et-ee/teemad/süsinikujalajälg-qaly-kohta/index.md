# Süsinikujalajälg QALY kohta

Süsinik QALY kohta on tõhususe suhtarv — sekkumise süsinikuheide (või välditud heide) jagatud QALY-dega, mida see annab. See vastab otse kulule QALY kohta ja võimaldab hinnata sekkumise süsiniktõhusust kulutõhususe kõrval. „Süsinikuga korrigeeritud netorahaline kasu“ läheb sammu kaugemale: see teisendab kliimamõju rahaks Briti Green Booki ametlike mittekaubeldavate süsinikuväärtuste abil ja lahutab selle tavapärasest [netorahalisest kasust](../netorahaline-kasu/).

## Miks see on oluline

NICE ja NHS England ootavad nüüd, et keskkonnamõju kaaluks kulu ja QALY-de kõrval. NHS-il on avalik kliimaneutraalsuse kohustus: otsese heite netonull 2040. aastaks ja kogu tarneahela jalajälje netonull 2045. aastaks. NICE tervisetehnoloogia hindamise käsiraamat (PMG36) nimetab keskkonnasäästlikkust tehnoloogiate hindamisel esilekerkiva kaalutlusena. Digitaalse tervisetoote jaoks tähendab see, et süsinik on saamas väärtuspõhjenduse neljandaks sambaks kulu, QALY-de ja [dominantsuse efektiivsuspiiril](../dominantsus-ja-efektiivsuspiir/) kõrval — see ei asenda ühtegi neist, kuid on mõõde, millest hästi üles ehitatud ärijuhtum peab üha sagedamini aru andma.

## Matemaatika

```
Süsinik QALY kohta = heide_kokku_tonni_co2e / qaly_kokku
  (negatiivne väärtus tähendab netona VÄLDITUD heidet võidetud QALY kohta —
  topeltvõit: parem tervis ja vähem süsinikku)

Ümberarvestatud süsinikumõju = heide_tonni_co2e × süsiniku_väärtus_tonni_kohta
  (negatiivne heide × positiivne väärtus = negatiivne kulu ehk kasu)

Süsinikuga korrigeeritud NMB = netorahaline_kasu − ümberarvestatud_süsinikumõju
```

See laiendab kulu/QALY efektiivsuspiiri ideed teise teljega — süsinik QALY kohta — sama loogikaga „kanna kõik variandid graafikule ja vaata, millised on domineeritud“ nagu [dominantsuses ja efektiivsuspiiris](../dominantsus-ja-efektiivsuspiir/), kuid rakendatuna kulu asemel süsinikule.

## Lahendatud näide

Telemeditsiiniteenus asendab isiklikke visiite, vältides 5 000 autosõitu aastas umbes 8 kg CO2e kaupa — 40 tonni välditud CO2e, esitatud negatiivse heitena (−40,0 tonni) — ja annab 25 QALY-t aastas:

```
Süsinik QALY kohta = −40,0 / 25,0 = −1,6 tonni CO2e välditud võidetud QALY kohta
```

Green Booki mittekaubeldava süsiniku väärtusega (illustratiivne arv, 2023. aasta mittekaubeldav keskväärtus ≈ £269/tonn CO2e — Green Book ajakohastab süsinikuväärtusi igal aastal, kontrolli üle enne käimasolevas analüüsis viitamist):

```
Ümberarvestatud süsinikumõju = −40,0 × £269 = −£10 760
```

„Kulu“ −£10 760 on kasu £10 760. Kui sekkumise eraldiseisev netorahaline kasu on £500 000:

```
Süsinikuga korrigeeritud NMB = £500 000 − (−£10 760) = £510 760
```

Süsinikusääst lisab juhtumile, mitte ei võta sellest ära — see on topeltvõit, mida negatiivse heite raamistus peab nähtavaks tegema.

## Seos tarkvaraarendusega

See on aktuaalne puutepunkt tehisintellekti ja pilve majandusega: tehisintellekti mudeli treenimiseks ja käitamiseks vajaliku arvutuse süsinikujalajälg on nüüd NHS-i hangetes tegelik kirje, kuna NHS-i tarnijalepingud üle teatud lävendite nõuavad süsiniku vähendamise kava (Carbon Reduction Plan). [Pilve ühikumajandus](../pilve-ühikumajandus/) jälgib juba kulu arvutustulemi ühiku kohta; süsinik QALY kohta on loomulik eeskuju tulevasele näitajale „süsinikukulu järeldamise kohta“, mis laiendaks seda moodulit ja järeldamise ühikumajandust keskkonnamõõtmesse, kuigi sellist näitajat veel ei ole.

## Lõksud

- **Süsteemipiiri manipuleerimine**: arvestatakse ainult otsest (Scope 1) heidet ja jäetakse välja tarneahela (Scope 3) heide, mis moodustab tavaliselt enamiku digitaalse tervisetoote tegelikust jalajäljest.
- **Aegunud süsinikuväärtuse kasutamine**: Green Book ajakohastab oma mittekaubeldavaid süsinikuväärtusi igal aastal, nii et iga viidatud £/tonn arv tuleb kuupäevastada, mitte esitada fikseeritud konstandina.
- **„Süsiniktõhusa“ käsitamine „kulutõhusa“ asendajana**: väikese heitega, kuid väikese väärtusega sekkumine on ikkagi NHS-i ressursside halb kasutus. Süsinik on neljas sammas kulu ja QALY-de kõrval, mitte kummagi asendaja.

## Allikad

- NHS England, „Delivering a Net Zero National Health Service“ (2020, ajakohastatud 2022). <https://www.england.nhs.uk/greenernhs/publication/delivering-a-net-zero-national-health-service/>
- HM Treasury, The Green Book: Carbon Values supplementary guidance (ajakohastatakse igal aastal; mittekaubeldav keskväärtus ≈ £269/tCO2e, 2023 — kuupäevasta iga viide). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
