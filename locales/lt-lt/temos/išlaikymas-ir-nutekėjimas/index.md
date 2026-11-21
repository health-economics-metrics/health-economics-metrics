# Išlaikymas ir nutekėjimas

Išlaikymas matuoja, kuri vartotojų kohortos dalis vis dar aktyvi praėjus N dienų nuo pradžios (D1/D7/D30 kreivės); nutekėjimas yra jo papildinys. Žiauri skaitmeninės sveikatos bazė: **maždaug 90 % sveikatos programėlių vartotojų ją palieka per 30 dienų** – skaitmeninės sveikatos D30 išlaikymas siekia ~3–4 %, palyginti su visų programėlių vidurkiu ~6 %.

## Kodėl tai svarbu

Eysenbachas tai įvardijo 2005 m.: **nykimo dėsnis** – didelis vartotojų praradimas yra vidinė, struktūrinė eSveikatos intervencijų savybė, o ne įgyvendinimo klaida, o nykimas eSveikatos tyrimuose įprastai viršija 50 %. Ekonominė pasekmė yra visiška: išlaikymas apibrėžia *gydymo langą*, kuriame galima pristatyti bet kokią naudą, o [vieneto ekonomika](../sveikatos-programėlių-vieneto-ekonomika/) – CAC, sumokėta už vartotoją, kuris išlieka 12 dienų, nepristato nei LTV, nei QALY. Bet kuris vartotojų sveikatos produkto ekonominis modelis, nesveriantis naudų pagal išlaikymo kreivę, aprašo produktą, kurio nėra.

## Matematika

```
Retention_Dn = users active on day n / cohort size × 100
Churn rate   = users lost in period / users at period start × 100

Benefit weighting (the health-economics move):
  expected benefit per acquired user = Σ_t retention(t) × benefit rate(t)
  ≈ area under the retention curve × per-time benefit
  — NOT trial benefit × 100% of acquired users

Cost per retained-at-D30 user = CAC / D30 retention
  (at 4% D30, a £5 CAC is really £125 per retained user)
```

## Išspręstas pavyzdys

Psichikos sveikatos programėlė: tyrimas parodė 0,02 QALY laimėjimą vienam vartotojui, užbaigusiam 8 savaites. Diegimo kohorta 100 000 atsisiuntimų, išlaikymas D7 25 %, D30 8 %, 8 savaitę 4 %:

```
Completers          = 100,000 × 0.04 = 4,000
QALYs delivered     = 4,000 × 0.02 = 80  (not 100,000 × 0.02 = 2,000)
At £20,000/QALY     = £1.6M of health value (not £40M)

Per-download health value = £16 — the number that should set what a
payer will pay per download, and it is 4% of the naive claim.
Retention improvement case: moving week-8 completion 4% → 6% adds
40 QALYs/year ≈ £800k — retention engineering IS health production.
```

## Ryšys su programinės įrangos inžinerija

Išlaikymas yra rodiklis, kuriuo produktų inžinerija pagal aukščiau pateiktą aritmetiką tiesiogiausiai gamina sveikatos vertę. Jį judinančios praktikos įprastos: adaptacijos laikas iki pirmos vertės, pakartotinio įtraukimo dizainas, našumas ir svarbiausia **suplanuotas dozės užbaigimas** – programa su apibrėžta pabaiga (8 savaitės, tada baigimas) turėtų matuoti *užbaigimą*, o ne begalinį DAU, suderindama rodiklį su klinikiniu modeliu, o ne reklama finansuojamu dėmesio modeliu. Išgyvenamumo analizė yra tinkamas įrankių rinkinys (ta pati Kaplano–Maiero matematika kaip [įgyti gyvenimo metai](../įgyti-gyvenimo-metai/)); skirstykite kreives pagal pritraukimo kanalą, nes kanalų mišinys keičia išlaikymą labiau nei dauguma funkcijų.

## Spąstai

- **Atvirkštinis ketinimo gydyti plovimas**: tyrimai pateikia užbaigusius; diegimo ekonomika turi skaičiuoti visus pritrauktus (pagrindinis Eysenbacho įspėjimas).
- **Išlaikymo teatras**: pranešimų paskatinti „aktyvūs“ vartotojai, kurie niekada neatlieka terapinio veiksmo (žr. [įsitraukimo rodikliai](../įsitraukimo-rodikliai/)).
- **Kreivių palyginimas tarp apibrėžimų**: „aktyvus“, apibrėžtas kaip atidarymas, prieš prasmingą veiksmą keičia D30 kartotiniais.
- **Ignoravimas, kas nuteka**: jei sunkiausiai sergantys nuteka greičiausiai, nauda vienam vartotojui krenta, kai išlaikymas gerėja tarp sveikų – derinkite kreives su atvejų struktūra (žr. [aprėptis ir lygybė](../aprėptis-ir-lygybė/)).

## Šaltiniai

- Eysenbach G. "The law of attrition." JMIR 2005;7(1):e11. <https://www.jmir.org/2005/1/e11/>
- Mobile app retention benchmarks. <https://uxcam.com/blog/mobile-app-retention-benchmarks/>
- Healthcare product benchmarks. <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
