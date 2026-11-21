# Kasulikkuse väljaselgitamine aja vahetamise meetodil (TTO)

TTO on standardmeetod tervise seisundi kasulikkuse väärtuse saamiseks otse vastajalt, selle asemel et seda välja mõelda. See on üks väljaselgitamismeetoditest — koos standard gamble'i ja diskreetsete valikukatsetega —, mis loovad väärtuskomplektid selliste instrumentide nagu [EQ-5D](../eq-5d/) taga ja seega enamiku järgnevate [QALY](../kvaliteedikohandatud-eluaasta/) arvutuste taga.

## Miks see on oluline

Iga kasulikkuskaal, mis QALY arvutusse sisse läheb, pidi kuskilt tulema. TTO on see „kuidas“: seisundi puhul, mida peetakse surmast paremaks, küsitakse vastajalt, mitu aastat `X` täielikus tervises ta peaks võrdväärseks `T` aastaga kahjustatud seisundis (`X < T`); kasulikkus on `X / T`. Seisundi puhul, mida mõned vastajad peavad surmast hullemaks, lakkab standardvalem töötamast (see ei suuda puhtalt esitada kasulikkust alla nulli), nii et kasutatakse laiendatud TTO-d. Tarkvarainsener või analüütik, kes käsitleb kasulikkuskaalu antud sisendina, teadmata, et selle saamiseks oli vaja valideeritud väljaselgitusprotokolli, on ühe sammu kaugusel arvust, mida ta ei suuda kaitsta, kui seda vaidlustatakse.

## Matemaatika

```
Standardne TTO (seisund parem kui surm):
  kasulikkus = aeg_täielikus_tervises / aeg_kahjustatud_seisundis

Laiendatud TTO (seisund hullem kui surm):
  kasulikkus = -surma_vastu_vahetatud_aeg / (kogukestus - surma_vastu_vahetatud_aeg)
```

`aeg_täielikus_tervises` / `aeg_kahjustatud_seisundis` — aastad `X` täielikus tervises, mida hinnatakse võrdväärseks `T` aastaga kahjustatud seisundis. `surma_vastu_vahetatud_aeg` / `kogukestus` — hullema-kui-surm sõnastuses `T` aasta pikkusest allesjäänud elust aastad `a`, mille vastaja vahetaks kohese surma vastu, eelistades `T − a` aastat täielikus tervises, millele järgneb surm, `T` aastale hullemas-kui-surm seisundis. Tulemus on negatiivne, ankurdatud nii, et surm = 0.

## Lahendatud näide

**Standardne**: vastaja on kahjustatud seisundis 10 aastat ja on ükskõikne 7 aasta suhtes täielikus tervises: kasulikkus = 7 / 10 = **0,7**.

**Hullem kui surm**: 10-aastasest allesjäänud elust vahetaks vastaja 2 aastat kohese surma vastu — ta eelistab 8 aastat täielikus tervises, millele järgneb surm, 10 aastale hullemas-kui-surm seisundis: kasulikkus = −2 / (10 − 2) = −2 / 8 = **−0,25**.

## Seos tarkvaraarendusega

Sama punkt, millega DevEx- või kaasatuse uuring kokku puutub, kui see palub inimestel midagi hinnata uurimata skaalal 0–10, kehtib siin vastupidi: TTO on olemas just seetõttu, et „palu inimestel lihtsalt hinnata“ ei ole iseenesest valideeritud väljaselgitusmeetod. Enne kui ehitad liitindeksi — DevEx skoori, kaasatuse indeksi, läbipõlemise skaala — enesehinnatud arvu peale, küsi, mille abil see välja selgitati ja kas see meetod oli valideeritud; sama küsimuse esitavad tervishoiuökonomistid kasulikkuskaalule enne, kui see QALY-sse läheb.

## Lõksud

- **Üksikute väärtuste üldistamine**: TTO väärtused saadakse üldsuse (või patsientide) *valimilt*, mitte isikult, kelle hooldusest otsustatakse — ühe vastaja TTO väärtuse kasutamine nii, nagu see üldistuks, on valimiviga.
- **Seisundile vale sõnastus**: standardne TTO valem eeldab, et seisund on üheselt surmast parem; selle rakendamine seisundile, mida mõned vastajad peaksid surmast hullemaks, laiendatud sõnastusele üle minemata, annab vaikselt vale (positiivse) kasulikkuse.
- **Võrreldamatud kestused**: TTO väärtused, mis on saadud erinevate allesjäänud eluaegadega `T` hullema-kui-surm võrdluse jaoks, pole otse võrreldavad ilma kontrollimata, et uuringu kavand hoidis `T` konstantsena.

## Allikad

- Torrance GW. „Social preferences for health states: an empirical evaluation of three measurement techniques.“ Socioecon Plan Sci. 1976;10(3):129-36.
- Patrick DL, Starks HE, Cain KC, Uhlmann RF, Pearlman RA. „Measuring preferences for health states worse than death.“ Med Decis Making. 1994;14(1):9-18.
