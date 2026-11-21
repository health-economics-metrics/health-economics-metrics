# Sąnaudų ir naudos analizė (CBA)

CBA pinigais įvertina ir sąnaudas, *ir* rezultatus. Tai vienintelis analizės tipas, galintis atsakyti „ar apskritai verta tai daryti?“ – o ne tik „kuri parinktis geriausia?“ – nes išreikšta pinigais nauda gali būti tiesiogiai lyginama su sąnaudomis.

## Kodėl tai svarbu

CBA yra JK HM Treasury **Green Book** standartas visiems viešųjų išlaidų vertinimams, įskaitant sveikatą, kai rezultatus galima išreikšti pinigais. Kur [CEA](../sąnaudų-efektyvumo-analizė/) / [CUA](../sąnaudų-naudingumo-analizė/) sustoja ties „kaina vienam sveikatos vienetui“, CBA įkainoja pačią sveikatą (QALY × slenksčio vertė) ir viską kita – laiką, kelionę, anglį – ir pateikia vieną grynąjį skaičių. Kiekviena pilna NHS skaitmeninė verslo byla turi CBA pobūdžio ekonominę bylą.

## Matematika

```
NPV (net present social value) = Σ_t [ (Benefits_t − Costs_t) / (1 + r)^t ]
BCR (benefit-cost ratio)       = PV(benefits) / PV(costs)

Adopt if NPV > 0 (equivalently BCR > 1); rank by NPV, not BCR.
r = 3.5% (Green Book social time preference rate)
```

Poveikis sveikatai gali būti įtrauktas pinigais kaip QALY × λ (žr. [norimo mokėti slenksčiai](../pasirengimo-mokėti-slenksčiai/)). Green Book taip pat įpareigoja **optimizmo paklaidos pataisas** – sąnaudų įverčių didinimą ir naudos mažinimą įrodymais pagrįstais procentais, nes vertinimai sistemingai pernelyg rožiniai.

## Išspręstas pavyzdys

E. siuntimų sistema, 5 metų horizontas, 3,5 % diskonto norma:

```
Costs:    build £1.2M (year 0), run £300k/yr (years 1–5)
Benefits: admin savings £250k/yr, avoided duplicate diagnostics £280k/yr,
          patient time saved 40,000 hrs/yr × £15 = £600k/yr → £1,130k/yr

PV costs    = 1,200k + 300k × 4.515 (annuity factor) = £2,555k
PV benefits = 1,130k × 4.515                          = £5,102k

NPV = 5,102 − 2,555 = +£2,547k     BCR = 2.0
```

Pritaikius Green Book optimizmo paklaidą (tarkime, +40 % kūrimo kainai, −20 % naudai): PV sąnaudos ≈ 3 035 tūkst. £, PV nauda ≈ 4 082 tūkst. £, NPV ≈ **+1 047 tūkst. £** – vis dar teigiama, o tai ir yra pataisos esmė: bylos turi išlikti net atėmus savo optimizmą.

## Ryšys su programinės įrangos inžinerija

Inžinerinės verslo bylos yra neformalios CBA. Green Book patobulinimai, kuriuos verta pasisavinti:

- **Optimizmo paklaida kaip standartinis priedas** – inžinieriai nuvertina migracijos kainą taip pat patikimai, kaip ministerijos nuvertina infrastruktūros kainą; taikykite nurodytą priedą, užuot apsimetę, kad šįkart kitaip.
- **Pagrindinę naudą išreikškite pinigais sąžiningai arba visai neišreikškite** – pacientų / vartotojų laikas įkainojamas ginamais įkainiais; „prekės ženklo vertė“ – ne.
- **NPV rangina, BCR – ne**: mažas projektas su BCR 5 gali būti mažiau svarbus nei didelis su BCR 1,6.

## Spąstai

- **Neišreiškiamo išreiškimas pinigais**, siekiant išpūsti naudą (moralė, „strateginis suderinimas“) – laikykite tai kokybiniu, kaip [sąnaudų ir pasekmių analizėje](../sąnaudų-ir-pasekmių-analizė/).
- **Pervedimų skaičiavimas kaip naudos**: pinigai, judantys tarp viešųjų įstaigų, visuomenės [perspektyvoje](../analizės-perspektyva/) sudaro nulį.
- **Nėra kontrafaktinio scenarijaus**: nauda matuojama pagal minimalių veiksmų parinktį, o ne pagal nulį.

## Šaltiniai

- HM Treasury, The Green Book. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Green Book discounting guidance. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
