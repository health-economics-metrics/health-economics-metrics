# Išvengiamos išorinio paslaugų pirkimo sąnaudos

Kai trestas negali pasiekti tikslų su vidiniais pajėgumais, jis perka pajėgumus už padidintą kainą: savo darbuotojų darbą savaitgaliais ar procedūrų perdavimą privatiems teikėjams. Pajėgumus atlaisvinančios programinės įrangos ekonominė vertė apima **tokio padidintos kainos darbo išvengiamas sąnaudas**.

## Kodėl tai svarbu

Dėl planinės priežiūros atsigavimo spaudimo trestai įprastai moka privataus sektoriaus laikinas kainas (dažnai 1,2–1,5 karto viršijančias NHS schemos kainą) arba padidintus laukimo sąrašų iniciatyvos įkainius savo konsultantams už savaitgalio sąrašus. Skirtingai nei įprasti pajėgumų teiginiai, išvengtas išorinis pirkimas yra **pinigus atlaisvinantis**: sąskaita privačiam teikėjui tikrai nebus išrašyta. Todėl tai viena stipriausių naudos eilučių programinei įrangai, didinančiai vidinį pralaidumą – ir viena lengviausiai pagrindžiamų, nes išorinio pirkimo išlaidos jau yra matoma biudžeto eilutė.

## Matematika

```
Avoidable outsourcing cost = activity moved in-house × (outsourced unit price
                             − internal marginal cost per case)

Internal marginal cost: consumables + variable staffing for the extra activity
— the fixed estate is already paid for (see marginal-vs-average-cost.md).
```

Teiginys reikalauja, kad atlaisvinti vidiniai pajėgumai tikrai sugebėtų absorbuoti veiklą: turi būti prieinamos operacinių sesijos, lovos ir personalas (galioja ribojantis apribojimas – vėl apribojimų teorija).

## Išspręstas pavyzdys

Trestas per metus išorėje atlieka 800 kataraktos procedūrų po 900 £: 720 000 £ per metus išorės išlaidų, palyginti su schemos kaina ~750 £.

Operacinių planavimo programinė įranga (sąrašų optimizavimas, tarpų užpildymas po atšaukimų, apyvartos laiko sekimas) pakelia vidinį operacinių naudojimą tiek, kad 500 procedūrų galima grąžinti į vidų:

```
Internal marginal cost per case ≈ £350 (consumables + sessional staffing)
Saving = 500 × (900 − 350) = £275,000/year — cash-releasing
Remaining outsourcing: 300 × £900 = £270,000 (was £720,000)
```

Programinės įrangos kaina 90 000 £ per metus → grynasis rezultatas ≈ **+185 000 £ per metus realių pinigų**, plius vidinės kokybės ir mokymo nauda, išlaikant darbą viduje.

## Ryšys su programinės įrangos inžinerija

Tiesioginis analogas yra **rangovų ir konsultantų priemoka**: kai vidiniai inžinerijos pajėgumai nepadengia įsipareigojimų, organizacijos perka išorinius pajėgumus už 1,5–3 karto didesnį nei vidinis visas įkainis. Platformos ir produktyvumo investicijos, didinančios vidinį pralaidumą, turėtų deklaruoti išvengtas rangovų išlaidas lygiai taip pat – išorinis dienos įkainis minus vidinė ribinė kaina, padauginta iš grąžinto darbo – nes tai viena iš nedaugelio tikrai pinigus atlaisvinančių eilučių kūrėjų produktyvumo verslo byloje. Galioja ta pati išlyga: vidiniai pajėgumai turi iš tikrųjų egzistuoti ir būti paskirti grąžintam darbui, kitaip teiginys yra fikcija.

## Spąstai

- **Grąžinimo teiginys be pilnos pajėgumų grandinės** – atlaisvinti chirurgai, bet nėra operacinių laiko tarpų (arba atlaisvinti inžinieriai, bet nėra produkto valdymo pajėgumų) nieko negrąžina.
- **Išorinės kainos lyginimas su vidiniu vidutiniu, o ne ribiniu kaštu** – keistai, bet tai nuvertina santaupas; pastoviosios sąnaudos išlieka bet kuriuo atveju.
- **Kokybės / sudėtingumo asimetrija**: į išorę dažnai perduodami paprasti atvejai; juos grąžinus keičiasi vidinė atvejų struktūra ir vieneto kaštai.

## Šaltiniai

- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
