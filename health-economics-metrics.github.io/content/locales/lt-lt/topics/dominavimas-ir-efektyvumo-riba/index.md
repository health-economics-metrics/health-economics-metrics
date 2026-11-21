# Dominavimas ir efektyvumo riba

Parinktis yra **dominuojama**, jei kita parinktis kainuoja mažiau *ir* duoda daugiau. **Efektyvumo riba** – tai tai, kas lieka pašalinus dominuojamas parinktis: pasirinkimų aibė, kurioje norint gauti daugiau reikia mokėti daugiau.

## Kodėl tai svarbu

Prieš bet kokias diskusijas apie slenksčius ar biudžetus sveikatos technologijų vertinimas pirmiausia pašalina parinktis, kurių niekas niekada neturėtų rinktis. Visų parinkčių pavaizdavimas kainos ir poveikio plokštumoje bei ribos nubrėžimas yra penkių minučių pratimas, kuris įprastai nužudo pusę trumpojo sąrašo. Prieaugio palyginimai ([ICER](../prieaugio-sąnaudų-efektyvumo-santykis/)) tada skaičiuojami tik *išilgai ribos*, kiekviena parinktis prieš kitą pigiausią nedominuojamą – niekada prieš „nieko nedaryti“, kai yra geresnių tarpinių parinkčių.

## Matematika

```
Strict dominance:   A dominates B if Cost_A ≤ Cost_B and Effect_A ≥ Effect_B
                    (with at least one strict inequality)

Extended dominance: B is ruled out if a mix of A and C achieves more effect
                    per pound — detected when ICERs decrease as you move up
                    the frontier. Valid frontier ICERs must be increasing.
```

Procedūra: surikiuokite parinktis pagal poveikį; pašalinkite griežtai dominuojamas; apskaičiuokite porinius ICER tarp kaimynų; pašalinkite parinktį, kurios ICER viršija kitos, efektyvesnės parinkties (išplėstinis dominavimas); kartokite, kol ICER didės monotoniškai.

## Išspręstas pavyzdys

Keturios parinktys praleistiems vizitams mažinti (poveikis = susigrąžinti vizitai per metus):

```
Option          Cost/yr    Recovered
Do nothing      £0         0
SMS reminders   £20,000    2,000
Phone calls     £120,000   2,200
SMS + AI triage £90,000    3,500
```

Skambučiai yra **griežtai dominuojami** SMS + DI triažo (kainuoja daugiau, susigrąžina mažiau). Riba: nieko → SMS → SMS + DI.

```
ICER(SMS vs nothing)   = 20,000 / 2,000  = £10 per appointment recovered
ICER(SMS+AI vs SMS)    = (90,000 − 20,000) / (3,500 − 2,000) = £46.67 per appointment
```

Didėjantys ICER → teisinga riba. Esant ~160 £ sutaupymui už kiekvieną susigrąžintą ligoninės vizitą (žr. [neatvykimo rodiklis](../neatvykimo-į-vizitą-dna-rodiklis/)), abu ribos žingsniai verti žengti; skambučių centro pasiūlymas niekada neturėtų pasiekti komiteto.

## Ryšys su programinės įrangos inžinerija

Sukurkite tą pačią diagramą bet kuriam įrankių sprendimui: kaina per metus vienoje ašyje, išmatuotas rezultatas (sutaupytos valandos, išvengti incidentai, įgalinti diegimai) kitoje. Taškai aukščiau ir kairėje nuo ribos pašalinami, kol niekas dar nesiginčija dėl biudžeto. Tai pakeičia tiekėjo pasirinkimą iš funkcijų sąrašo debatų į „jūs esate dominuojami; susitikimas baigtas“. Tai taip pat atskleidžia įprastą įmonių modelį – pirkti brangiausią parinktį už nedidelį laimėjimą – teisėtą tik jei prieaugio kaina už prieaugio vienetą yra tokia, kurią organizacija sąmoningai mokėtų.

## Spąstai

- **Viskas lyginama su baze**, o ne su kita parinktimi ribos atžvilgiu – tai pataikauja brangioms parinktims, slėpdama pigesnius beveik ekvivalentus.
- **Vienmačiai poveikio balai**, slepiantys svarbų dalyką; jei skaičiuojami du rezultatai, arba ginamai juos sujunkite (žr. [sąnaudų naudingumo analizė](../sąnaudų-naudingumo-analizė/)), arba parodykite dvi ribas.
- **Neapibrėžtumo pamiršimas**: parinktys prie ribos gali keistis vietomis pagal [jautrumo analizę](../jautrumo-analizė/).

## Šaltiniai

- York Health Economics Consortium glossary: dominance. <https://yhec.co.uk/glossary/dominance/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
