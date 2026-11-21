# Įgyti gyvenimo metai (LYG)

Įgyti gyvenimo metai – tai papildomas išgyvenimas, priskirtinas intervencijai, be kokybės koregavimo: plotas tarp išgyvenimo kreivių su ja ir be jos. Lygios vertės įgyti gyvenimo metai (evLYG) yra moderni versija, kuri visą gyvenimo pratęsimą įskaito vienodai.

## Kodėl tai svarbu

LYG yra neapdoročiausias sveikatos rezultatas: kiek ilgiau žmonės gyvena? Jis svarbus, kai trūksta kokybės duomenų, lyginant su QALY skeptiška auditorija ir onkologijoje, kur išgyvenimo kreivės yra pagrindinis tyrimo rezultatas. **evLYG** (naudoja JAV ICER institutas kartu su kaina / QALY) egzistuoja dėl etinės priežasties: QALY pratęsto gyvenimo metus vertina pagal paciento naudingumą, todėl žmogaus su negalia gyvenimo pratęsimas „skaičiuojasi mažiau“ – evLYG kiekvienus pratęstus metus vertina fiksuotu naudingumu, pašalindamas šią diskriminaciją.

## Matematika

```
LYG = mean survival_new − mean survival_comparator
    = area between survival curves (restricted to the time horizon)

QALY view of life extension:  extension × patient utility
evLYG view of life extension: extension × fixed utility (ICER uses ~0.851,
                              the average US population utility)
```

Abu ekonominiuose modeliuose [diskontuojami](../diskontavimas-ir-laiko-pirmenybė/).

## Išspręstas pavyzdys

Sepsio ankstyvojo perspėjimo algoritmas ligoninėje: modeliavimas rodo, kad ankstesni antibiotikai užkerta kelią 12 mirčių per metus; šių pacientų vidutinis amžius duoda po 8 likusius gyvenimo metus su naudingumu 0,7.

```
LYG   = 12 × 8            = 96 life-years/year
QALYs = 96 × 0.7          = 67.2
evLYG = 96 × 0.851        = 81.7
```

Po 20 000 £ už QALY, QALY požiūris išgyvenimą vertina 1,34 mln. £ per metus; evLYG – 1,63 mln. £. Skirtumas yra būtent etinis sprendimas, ar gyvenimo metai su naudingumu 0,7 vertas 70 % „pilnų“. Rimti dosjė pateikia abu.

## Ryšys su programinės įrangos inžinerija

- Išgyvenamumo analizė yra bendras įrankių rinkinys: Kaplano–Maiero kreivės pacientams ir *paslaugoms* (laikas iki gedimo, laikas iki nutekėjimo) yra ta pati matematika. „Įgyti paslaugos metai“ iš patikimumo investicijos = plotas tarp sistemos išgyvenimo kreivių su ir be – sąžiningesnis pateikimas nei taškiniai MTTF teiginiai.
- evLYG neša ir rodiklių dizaino įspėjimą inžinerijai: bet kuris produktyvumo rodiklis, svertas produkciją „komandos kokybės“ veiksniu, sistemingai nuvertins patobulinimus suvaržytoms ar sunkumus patiriančioms komandoms – kartais lygios vertės variantas norimas sąmoningai.

## Spąstai

- **Mediana prieš vidurkį išgyvenime**: ekonominiams modeliams reikia vidurkio (plotas po kreive); tyrimai dažnai antraštėje nurodo medianą. Asimetriniuose skirstiniuose jie labai skiriasi.
- **Ekstrapoliacija už tyrimo stebėjimo laikotarpio ribų** dominuoja modeliuotuose LYG lėtinėse ligose – nurodykite ekstrapoliacijos modelį ir išbandykite [jautrumo analizėje](../jautrumo-analizė/).
- **Išvengtų mirčių deklaravimas iš stebimųjų prieš / po duomenų** nekoreguojant pagal atvejų struktūrą ir ilgalaikes tendencijas.

## Šaltiniai

- York Health Economics Consortium glossary: life-years gained. <https://yhec.co.uk/glossary/life-years-gained/>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
