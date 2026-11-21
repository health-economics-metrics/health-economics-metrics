# Koncentracijos indeksas

Koncentracijos indeksas (Wagstaff, Paci, van Doorslaer, 1991) yra standartinė statistinė su socialine ir ekonomine padėtimi susijusios sveikatos kintamojo nelygybės matas, kintantis nuo −1 iki 1. Neigiama reikšmė reiškia, kad sveikatos kintamasis koncentruojasi tarp socialiai ir ekonomiškai nepalankioje padėtyje esančiųjų, teigiama – tarp pasiturinčiųjų, o nulis – nėra nuoseklaus socialinio ir ekonominio gradiento; jis paverčia įtarimą dėl nelygaus pasiskirstymo vienu, palyginamu skaičiumi.

## Kodėl tai svarbu

Programa gali atrodyti veiksminga bendrai ir vis tiek beveik visą naudą atnešti tiems, kurie jau buvo pasiturintys. Tokius paskirstymo rūpesčius aprašomuoju būdu seka [aprėptis ir lygybė](../aprėptis-ir-lygybė/) – aprėptis, suskirstyta pagal nepriteklių kvintilius, lygybės spraga tarp viršutinės ir apatinės grupių – tačiau stratifikuota lentelė nesusiveda į vieną tendencijos liniją ir sunkiai lyginama tarp dviejų visiškai skirtingų intervencijų, matuojamų skirtingomis skalėmis. Koncentracijos indeksas išsprendžia abi problemas: jis skaičiuojamas vienodai bet kuriam sveikatos kintamajam pagal bet kokį socialinį ir ekonominį reitingą, todėl nacionalinė sveikatos tarnyba gali sekti, ar konkrečios skaitmeninės paslaugos nelygybė didėja ar mažėja nuo laidos iki laidos, ir palyginti programėlės diegimo paskirstymo sąžiningumą, tarkime, su patikros programa ta pačia normalizuota skale.

## Matematika

```
CI = (2 / mean(health_values)) × Cov(health_values, socioeconomic_ranks)

Cov(X, Y) = mean(X × Y) − mean(X) × mean(Y)   (population covariance)

socioeconomic_ranks: each person's fractional rank in the socioeconomic
distribution, in [0, 1] (0 = most disadvantaged, 1 = most advantaged;
for grouped/banded data, conventionally the midpoint rank of each group)
```

Tai „patogi kovariacijos formulė“ (O'Donnell, van Doorslaer, Wagstaff, Lindelow, Pasaulio bankas 2008) – standartinis praktikų sutrumpinimas koncentracijos indeksui skaičiuoti tiesiai iš porinių stebėjimų, pirmiausia nebraižant ir neintegruojant po koncentracijos kreive.

## Išspręstas pavyzdys

Savarankiškai nurodytas geros sveikatos balas (1 = blogiausias, 4 = geriausias), stebimas keturiuose vienodo dydžio socialinio ir ekonominio statuso ketvirčiuose, kiekvienas atstovaujamas savo ketvirčio vidurio reitingu:

```
health_values        = [1.0, 2.0, 3.0, 4.0]
socioeconomic_ranks  = [0.125, 0.375, 0.625, 0.875]

mean(health_values)        = 2.5
mean(health × rank)        = mean([0.125, 0.75, 1.875, 3.5]) = 1.5625
mean(socioeconomic_ranks)  = 0.5

Cov = 1.5625 − 2.5 × 0.5 = 0.3125

CI = 2 × 0.3125 / 2.5 = 0.25
```

Teigiama `0.25` reiškia, kad šis sveikatos balas koncentruojasi socialiai ir ekonomiškai palankioje grupėje – didesnius balus turintys respondentai linksta į pasiturinčią reitingo pusę.

## Ryšys su programinės įrangos inžinerija

Tai ta pati kovariacija pagrįsta nelygybės matavimo metodika, naudojama ekonomikoje apskritai (Gini koeficiento pusbrolis), ir ji atitinka matavimą, ar programinės įrangos produkto nauda koncentruojasi jau palankioje padėtyje esančiuose vartotojų segmentuose, o ne paskirstoma teisingai – tiesioginis [aprėpties ir lygybės](../aprėptis-ir-lygybė/) (RE-AIM „aprėpties“ dimensijos) išplėtimas į formalų statistinį matą vietoje aprašytos spragos. Kur aprėptis ir lygybė pateikia poveikį pagal sluoksnį, Koncentracijos indeksas suspaudžia visą pasiskirstymą į vieną ženklinį skaičių, tinkamą kaip vienas sekamas KPI per laidas – praktiška skydeliui, kur pilnas stratifikuotas suskirstymas netinka.

## Spąstai

- **Ženklo konvencijos dreifas**: ženklas priklauso nuo to, kaip apibrėžti ir sveikatos kintamasis, ir reitingas – apvertus bet kurį, ženklas apsiverčia, todėl naudojama konvencija visada turi būti aiškiai nurodyta šalia bet kurios pateiktos reikšmės.
- **Ribiniai reitingai vietoj vidurio reitingų**: grupuoti ar sluoksniuoti socialiniai ir ekonominiai duomenys (pvz., kvintiliai) reikalauja naudoti kiekvienos grupės trupmeninį reitingą jos *viduryje*, o ne riboje, kitaip indeksas šališkas.
- **„Beveik nulio“ aiškinimas kaip „nėra nelygybės“**: Koncentracijos indeksas, artimas nuliui, reiškia „nėra nuoseklaus socialinio ir ekonominio gradiento“, o ne „nėra nelygybės“ absoliučia prasme – skirtingomis kryptimis veikiančios nelygybės gali viena kitą panaikinti.

## Šaltiniai

- Wagstaff A, Paci P, van Doorslaer E. "On the measurement of inequalities in health." Soc Sci Med. 1991;33(5):545-57.
- O'Donnell O, van Doorslaer E, Wagstaff A, Lindelow M. "Analyzing Health Equity Using Household Survey Data." World Bank. 2008 — the standard practitioner handbook, source of the convenient covariance formula used here. <https://openknowledge.worldbank.org/entities/publication/98380884-0d1d-53d2-b95f-ec6be2019414>
