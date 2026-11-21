# Siuntimas gydymui (RTT)

Siuntimas gydymui – tai praėjęs laikas nuo šeimos gydytojo siuntimo iki konsultanto vadovaujamo gydymo pradžios. NHS Konstitucija nustato standartą: **92 % pacientų turėtų pradėti gydymą per 18 savaičių**. RTT yra politiškai matomiausias veiklos rodiklis Anglijos NHS.

## Kodėl tai svarbu

Trestai, nepasiekiantys RTT tikslų, susiduria su reguliavimo priežiūra, įsikišimu ir reputacijos žala; nacionalinis laukimo sąrašas yra pirmojo puslapio skaičius. Kiekviena savaitė, kurią pacientas laukia, yra prarasta sveikata (laukimas blogesnėje sveikatos būsenoje – žr. QALY matematiką žemiau) ir dažnai įgytos sąnaudos (būklės blogėja; žr. [ankstesnė intervencija](../ankstesnė-intervencija/)). Programinė įranga, sutaupanti laiką bet kurioje siuntimo-gydymui kelio vietoje – triaže, diagnostikos apyvartoje, klinikos pajėgumuose, planavime – tiesiogiai mažina standarto nepasiekimo veiklos ir finansines pasekmes, todėl RTT poveikis yra pirmos klasės naudos eilutė NHS skaitmeninėse verslo bylose.

## Matematika

```
RTT performance = patients treated within 18 weeks / total treated × 100
Waiting-time health cost per patient = wait duration × (utility_treated − utility_waiting)

Pathway view: RTT = Σ stage durations (referral triage → first appointment →
diagnostics → decision → treatment) — improve the longest queue, not the
busiest stage (see flow-metrics.md).
```

## Išspręstas pavyzdys

Specialybė gydo 5 000 kelio pacientų per metus; vidutinis laukimas 24 savaitės; laukimo naudingumas 0,68 prieš gydyto 0,80.

Skaitmeninis triažas plius tiesiai į tyrimą protokolai pašalina 5 savaites grynos eilės:

```
QALY gain = 5,000 × (5/52) × (0.80 − 0.68) = 57.7 QALYs/year
Monetized at £20,000–£30,000/QALY (see willingness-to-pay-thresholds.md):
  ≈ £1.15M–£1.73M/year of health value
```

– plius trestas iš standarto pažeidimo pereina į 18 savaičių standarto laikymąsi, o tai turi valdymo vertę, kurios pilnai nefiksuoja jokia skaičiuoklė.

## Ryšys su programinės įrangos inžinerija

RTT yra **vykdymo trukmės rodiklis per daugiapakopę eilę** – ligoninės commit-to-production vykdymo trukmės versija (žr. [DORA rodikliai](../dora-rodikliai/)). Tobulinimo metodas identiškas: instrumentuokite kiekvieną etapą, raskite, kur kalendorinis laikas telkiasi (beveik visada tai perdavimai ir eilės, o ne klinikinis darbas), ir šalinkite laukimo būsenas. Tipiniai programinės įrangos laimėjimai: el. triažas, nukreipiantis siuntimus per valandas vietoje savaitinių partijų, diagnostikos rezultatų stūmimas vietoje tolesnių vizitų ir automatiniai tiesiai į tyrimą kriterijai. Pagerinimą įvertinkite [vėlavimo kaina](../vėlavimo-kaina/), išreikšta QALY/savaitę.

## Spąstai

- **Etapo, kuris nėra apribojimas, gerinimas** – pirmojo vizito laukimo mažinimas, kai diagnostikos eilės auga, tik perkelia telkinį.
- **Žaidimai**: kelio nustatymai iš naujo ir laikrodžio pauzės gali pagerinti pateikiamą RTT nieko neišgydžius anksčiau; auditą atlikite pagrindiniam skirstiniui.
- **Viso kelio pagerinimo deklaravimas** vienam įrankiui, kai kartu pasirodė keli pokyčiai – priskyrimui reikia palyginamosios grupės.

## Šaltiniai

- NHS England, RTT waiting times statistics. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
