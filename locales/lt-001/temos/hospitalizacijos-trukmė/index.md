# Hospitalizacijos trukmė (LOS)

Hospitalizacijos trukmė – dienų skaičius nuo priėmimo į ligoninę iki išrašymo – pagrindinis stacionarinės priežiūros srauto efektyvumo rodiklis. JK ūmių ligoninių vidurkiai yra apie 4–5 dienas; kiekviena papildoma diena užima retą lovą ir veikia pacientą ligoninėje įgyjamos rizikos.

## Kodėl tai svarbu

LOS lemia beveik viską ūmios ligoninės ekonomikoje: lovų pajėgumus, planinių operacijų pralaidumą, skubios pagalbos srautą, personalą. Vidutinės LOS sumažinimas net dienos dalimis dideliu mastu atlaisvina milžiniškus pajėgumus (žr. [sutaupyti lovadieniai](../sutaupyti-lovadieniai/)). LOS taip pat yra kokybės signalas abiem kryptimis – per ilga rodo proceso nesėkmę (vėluojanti diagnostika, išrašymo dokumentai, socialinės priežiūros laukimas); per trumpa gali reikšti per ankstyvą išrašymą, kuris vėliau pasireiškia kaip [pakartotinės hospitalizacijos](../pakartotinių-hospitalizacijų-rodiklis/).

## Matematika

```
LOS (per spell)  = discharge date − admission date
Average LOS      = occupied bed days / discharges (report mean AND median;
                   LOS is heavily right-skewed by long-stay outliers)

Comparisons require case-mix adjustment (age, diagnosis, acuity),
or you are measuring who the hospital admits, not how it performs.
```

Little'o dėsnis sieja srauto kintamuosius: `beds occupied = admission rate × average LOS` – tas pats dėsnis, kuris valdo programinės įrangos eiles (žr. [srauto rodikliai](../srauto-rodikliai/)).

## Išspręstas pavyzdys

Trestas priima 40 skubių terapinių pacientų per dieną, vidutinė LOS 6,0 dienos: 240 nuolat užimtų lovų (40 × 6). Išrašymo koordinavimo programinė įranga (užduočių sekimas, vaistinės automatizavimas, transporto užsakymas) sumažina ne klinikinę hospitalizacijų uodegą vidutiniškai 0,4 dienos.

```
Beds needed = 40 × 5.6 = 224 → 16 beds freed continuously
            = 16 × 365 = 5,840 bed days/year
```

5 840 lovadienius vertinkite pagal mechanizmą (užpildymas / uždarymas / laisvumas) pagal [sutaupyti lovadieniai](../sutaupyti-lovadieniai/). Atkreipkite dėmesį, kas pasikeitė: ne medicina, o *laukimas* – pacientas buvo medicininiu požiūriu tinkamas; sistema vis dar tvarkė popierius. Tai eilių problema, o programinė įranga gerai sprendžia eilių problemas.

## Ryšys su programinės įrangos inžinerija

LOS yra ligoninės ciklo trukmė, o tobulinimo vadovas identiškas pristatymo srauto darbui: instrumentuokite etapus (priėmimas → gydymas → medicininiu požiūriu tinkamas → faktiškai išrašytas), raskite, kur laikas telkiasi (tai perdavimai), šalinkite laukimo būsenas, o ne pridėkite pajėgumų. „Medicininiu požiūriu tinkamų išrašyti, bet vis dar užimančių lovą“ kohorta yra ligoninės PR, patvirtinto, bet nesujungto, versija. Tiesioginės programinės įrangos galimybės: išrašymo užduočių orkestravimas, diagnostikos apyvarta, išrašymo vaistų e. receptai, socialinės priežiūros siuntimų integracija.

## Spąstai

- **Pateikiamas tik vidurkis** – išskirtys dominuoja; krintantis vidurkis gali slėpti augančią ilgos hospitalizacijos uodegą.
- **Nėra atvejų struktūros koregavimo** teiginiuose prieš / po: priėmimo slenksčiai kinta sezoniškai ir ilgalaikiškai.
- **LOS sumažinimas, kuris vėl atsiranda kaip pakartotinė hospitalizacija** – LOS teiginius visada derinkite su 30 dienų pakartotinių hospitalizacijų duomenimis.

## Šaltiniai

- OECD, length of hospital stay indicator. <https://www.oecd.org/en/data/indicators/length-of-hospital-stay.html>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
