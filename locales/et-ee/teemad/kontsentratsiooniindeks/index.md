# Kontsentratsiooniindeks

Kontsentratsiooniindeks (Wagstaff, Paci, van Doorslaer, 1991) on tervisemuutuja sotsiaalmajandusliku ebavõrdsuse standardne statistiline mõõt, mille väärtused jäävad vahemikku −1 kuni 1. Negatiivne tähendab, et tervisemuutuja on koondunud sotsiaalmajanduslikult halvemas seisus olevate hulka, positiivne — et jõukamate hulka, ja null — et järjepidevat sotsiaalmajanduslikku gradienti ei ole. See muudab kahtluse ebavõrdse jaotuse kohta üheks võrreldavaks arvuks.

## Miks see on oluline

Programm võib tervikuna näida tõhus ja siiski anda oma kasu peaaegu täielikult inimestele, kellel läks niigi paremini. Just selliseid jaotuslikke küsimusi jälgib kirjeldavalt [ulatus ja võrdsus](../ulatus-ja-võrdsus/) — ulatus kihistatuna puuduse kvintiilide kaupa, võrdsuslõhe ülemise ja alumise rühma vahel —, kuid kihistatud tabelit ei saa kokku suruda üheks trendijooneks ning seda on raske võrrelda kahe täiesti erineva, eri skaalal mõõdetud sekkumise vahel. Kontsentratsiooniindeks lahendab mõlemad probleemid: seda arvutatakse sama moodi mis tahes tervisemuutuja kohta mis tahes sotsiaalmajandusliku järjestuse suhtes, nii et riiklik tervishoiuteenistus saab jälgida, kas konkreetse digiteenuse ebavõrdsus kasvab või väheneb väljalaskest väljalaskeni, ning võrrelda rakenduse kasutuselevõtu jaotuslikku õiglust näiteks sõeluuringuprogrammiga samal normaliseeritud skaalal.

## Matemaatika

```
CI = (2 / keskmine(tervise_väärtused)) × Kov(tervise_väärtused, sotsiaalmajanduslikud_järgud)

Kov(X, Y) = keskmine(X × Y) − keskmine(X) × keskmine(Y)   (üldkogumi kovariatsioon)

sotsiaalmajanduslikud_järgud: iga inimese murdjärk sotsiaalmajanduslikus
jaotuses, vahemikus [0, 1] (0 = kõige halvemas seisus, 1 = kõige paremas
seisus; rühmitatud/klassidesse jaotatud andmete puhul tavapäraselt iga
rühma keskpunkti järk)
```

See on „mugav kovariatsioonivalem“ (O'Donnell, van Doorslaer, Wagstaff, Lindelow, Maailmapank 2008) — praktikute standardne otsetee kontsentratsiooniindeksi arvutamiseks otse paaristatud vaatlustest, joonistamata ja integreerimata esmalt kontsentratsioonikõverat.

## Lahendatud näide

Enesehinnanguline hea tervise skoor (1 = halvim, 4 = parim), jälgitud nelja võrdse suurusega sotsiaalmajandusliku kvartiili kaupa, igaüht esindab kvartiili keskpunkti järk:

```
tervise_väärtused                = [1,0, 2,0, 3,0, 4,0]
sotsiaalmajanduslikud_järgud     = [0,125, 0,375, 0,625, 0,875]

keskmine(tervise_väärtused)      = 2,5
keskmine(tervis × järk)          = keskmine([0,125, 0,75, 1,875, 3,5]) = 1,5625
keskmine(järgud)                 = 0,5

Kov = 1,5625 − 2,5 × 0,5 = 0,3125

CI = 2 × 0,3125 / 2,5 = 0,25
```

Positiivne `0,25` tähendab, et see tervise skoor on koondunud sotsiaalmajanduslikult eelisseisundis rühma — kõrgema skooriga vastajad kalduvad järjestuse jõukama otsa poole.

## Seos tarkvaraarendusega

See on sama kovariatsioonil põhinev ebavõrdsuse mõõtmine, mida kasutatakse majanduses üldiselt (Gini koefitsiendi nõbu), ja see kandub üle sellele, kas tarkvaratoote kasu on koondunud juba eelisseisundis kasutajasegmentidesse, mitte ei jaotu õiglaselt — otsene laiendus [ulatusele ja võrdsusele](../ulatus-ja-võrdsus/) (RE-AIM-i „reach“-mõõde) kirjeldatud lõhe asemel formaalseks statistiliseks mõõdupuuks. Kus ulatus ja võrdsus annab aru mõju kihtide kaupa, surub kontsentratsiooniindeks kogu jaotuse kokku üheks märgiga arvuks, mis sobib üheks väljalasete vahel jälgitavaks KPI-ks — praktiline töölaua jaoks, kuhu täielik kihistatud jaotus ei mahu.

## Lõksud

- **Märgikokkuleppe triiv**: märk sõltub sellest, kuidas nii tervisemuutuja kui ka järk on defineeritud — kui ükskõik kumb ümber pöörata, pöördub märk, nii et kasutatud kokkulepe tuleb alati iga raporteeritud väärtuse juures selgelt ära märkida.
- **Piirjärgud keskpunktijärkude asemel**: rühmitatud või klassidesse jaotatud sotsiaalmajanduslikud andmed (nt kvintiilid) nõuavad iga rühma murdjärgu kasutamist selle *keskpunktis*, mitte piiril, vastasel juhul on indeks nihkega.
- **„Nulli lähedal“ lugemine kui „ebavõrdsust pole“**: nulli lähedane kontsentratsiooniindeks tähendab „järjepidevat sotsiaalmajanduslikku gradienti ei ole“, mitte absoluutses mõttes „ebavõrdsust ei ole“ — eri suundades vastastikku kompenseeruvad ebavõrdsused võivad üksteist tühistada.

## Allikad

- Wagstaff A, Paci P, van Doorslaer E. „On the measurement of inequalities in health.“ Soc Sci Med. 1991;33(5):545-57.
- O'Donnell O, van Doorslaer E, Wagstaff A, Lindelow M. „Analyzing Health Equity Using Household Survey Data.“ World Bank. 2008 — praktikute standardkäsiraamat, siin kasutatud mugava kovariatsioonivalemi allikas. <https://openknowledge.worldbank.org/entities/publication/98380884-0d1d-53d2-b95f-ec6be2019414>
