# Sąnaudų ir pasekmių analizė (CCA)

CCA pateikia sąnaudas kartu su **išskaidyta visų rezultatų lentele** – klinikinių, veiklos, patirties – nesuspausdama jų į vieną santykį ar balą. Sprendimų priėmėjas aiškiai pasveria kompromisus.

## Kodėl tai svarbu

CCA yra NICE **pageidaujamas ekonominis formatas daugumai skaitmeninės sveikatos technologijų** pagal Įrodymų standartų sistemą. Skaitmeniniai produktai sukuria nevienalytį poveikį (sutaupytas laikas, pasitenkinimas, DNA sumažėjimas, nedideli klinikiniai laimėjimai), kurio sąžiningai nepavyksta sujungti į vieną QALY skaičių. Užuot prievarta kūrusi trapų junginį, CCA parodo visą knygą. Daugumai programinės įrangos verslo bylų tai ir sąžiningiausias, ir įtaigiausias formatas, nes kiekvienas suinteresuotasis asmuo gali rasti savo sprendimui svarbią eilutę.

## Matematika

Sąmoningai nėra agregavimo formulės. Rezultatas yra lentelė:

```
                          Intervention   Comparator   Difference
Costs (annual)            £X             £Y           ΔC
Outcome 1 (natural units) …              …            Δ1
Outcome 2                 …              …            Δ2
Qualitative outcomes      described, not scored
```

Kiekviena eilutė išlaiko savo vienetus. Taisyklės: kiekviena pasekmė nurodoma iš anksto (jokio rinkimosi po rezultatų); visur ta pati [perspektyva](../analizės-perspektyva/) ir [horizontas](../laiko-horizontas/); neapibrėžtumas kiekvienai eilutei.

## Išspręstas pavyzdys

Skaitmeninė priešoperacinio įvertinimo platforma, palyginti su telefoniniu procesu, per metus, vienam trestui:

```
                              Digital      Phone       Difference
Running cost                  £180,000     £95,000     +£85,000
Nurse hours on assessments    6,200        11,800      −5,600 hrs
On-day surgery cancellations  92           174         −82
Patient satisfaction (CSAT)   4.5/5        3.9/5       +0.6
Assessments lost/incomplete   1.2%         4.8%        −3.6 pp
```

Jokio vieno balo – bet sprendimą lengva pagrįsti: 85 000 £ nuperka 5 600 slaugytojų valandų (≈ 15 £/val., gerokai mažiau nei bet kokia personalo kaina), 82 išvengtus atšaukimus (kiekvienas iššvaisto operacinės laiko tarpą, vertą ~1 200 £) ir geresnę patirtį. Komitetas taip pat tiksliai mato, ko *negauna*: jokio deklaruoto QALY ar mirtingumo poveikio.

## Ryšys su programinės įrangos inžinerija

CCA yra formali subalansuotos rezultatų kortelės, kurią jau naudoja gerai parengtas platformos pasiūlymas, versija: kaina šalia DORA rodiklių, DevEx balų, incidentų skaičiaus – nesuagreguota. Sveikatos ekonomikos disciplina, kurią verta pridėti: **eilutes nustatykite iš anksto** (nuspręskite, kas skaičiuojama, prieš bandymą, kad negalėtumėte tyliai atsisakyti rodiklio, kuris pablogėjo), ir **rodykite nepalankias eilutes** – CCA vien su geromis naujienomis yra rinkodara. Naudokite CCA, kai nėra ginamo junginio, o tai kūrėjų įrankiams beveik visada.

## Spąstai

- **Parinktos pasekmės** – formato vientisumas priklauso nuo išankstinio nustatymo.
- **Paslėptas agregavimas**: spalvų kodavimas ar „bendri balai“ grąžina savavališkus svorius, kurių išvengti ir skirta CCA.
- **Sprendimų paralyžius**: CCA reikia sprendimų priėmėjo, pasirengusio pasverti kompromisus; pridėkite rekomendaciją ir argumentaciją.

## Šaltiniai

- NICE Evidence Standards Framework for digital health technologies (ECD7). <https://www.nice.org.uk/corporate/ecd7>
- ESF evidence standards tables. <https://www.nice.org.uk/corporate/ecd7/chapter/section-c-evidence-standards-tables>
