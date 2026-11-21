# Imties informacijos tikėtina vertė (EVSI)

EVSI – tai *konkretaus siūlomo tyrimo* – tam tikro dizaino, tam tikro imties dydžio – vertė prieš jį atliekant, priešingai nei [EVPI](../tobulos-informacijos-tikėtina-vertė/), kuris įkainoja visiško neapibrėžtumo pašalinimą. EVSI atsako į klausimą, su kuriuo iš tikrųjų susiduria tyrimų finansuotojas: „ar *šis* tyrimas, *tokio* dydžio, vertas savo kainos?“

## Kodėl tai svarbu

EVPI parodo viršutinę ribą, kiek galėtų būti verti bet kokie tyrimai; jis niekada nepasako, ar jūsų akyse esantis tyrimas peržengia kartelę. Nacionalinis tyrimų finansuotojas, renkantis tarp 50 pacientų bandomojo tyrimo ir 500 pacientų lemiamo tyrimo, turi žinoti, kiek verta *kiekvienas konkretus dizainas*, o ne tik visažinystės vertę. EVSI suteikia tą skaičių, ir kadangi jis kinta su imties dydžiu, leidžia finansuotojui rasti imties dydį, maksimizuojantį tikėtiną grynąją naudą, užuot spėliojus.

Todėl EVSI visada mažesnis arba lygus EVPI: baigtinė imtis gali tik iš dalies išspręsti neapibrėžtumą, o tyrimas, atrodantis vertesnis už tobulą informaciją, yra ženklas, kad skaičiavimas klaidingas, o ne tikras rezultatas.

## Matematika

```
General:
EVSI(n) = E_data[ max_d E_θ|data[NB(d,θ)] ]  −  max_d E_θ[NB(d,θ)]
  (nested expectation: outer over possible study results, inner over the
  posterior belief about θ after seeing that result — usually estimated by
  nested Monte Carlo / Bayesian updating over probabilistic sensitivity
  analysis draws)

Closed-form normal approximation (single uncertain parameter, conjugate
normal-normal model — a standard shortcut, not exact for every model):
EVSI(n) = EVPI × n / (n + n0)

n  = proposed study's sample size
n0 = "prior-equivalent sample size" — the size of an imaginary sample that
     would carry the same information as the current prior, derived from
     the ratio of data variance to prior variance
ENBS(n) = EVSI(n) − Cost(n)
Population EVSI = per-decision EVSI × decisions affected
```

Bendroji forma yra įdėtasis vidurkis, nes būsimas tyrimo rezultatas pats yra neapibrėžtas: reikia suvidurkinti per kiekvieną galimą duomenų rinkinį, kurį tyrimas galėtų sukurti, ir kiekvienam iš naujo apskaičiuoti geriausią sprendimą pagal atnaujintą (aposteriorinį) įsitikinimą. Uždaros formos normalusis artinys išmaino tą skaičiavimo kainą į vieną santykį, galiojantį, kai neapibrėžtas parametras ir duomenys yra (apytiksliai) normalieji ir jungtiniai – patogumas, o ne visuotinis dėsnis. Pilnas įdėtasis Monte Karlo yra bendrosios paskirties metodas, kai ši prielaida negalioja. Žr. [tikimybinė jautrumo analizė](../tikimybinė-jautrumo-analizė/) dėl PSA traukimų, iš kurių paprastai vertinamas EVSI.

## Išspręstas pavyzdys

Remiantis [EVPI](../tobulos-informacijos-tikėtina-vertė/) išspręstu pavyzdžiu – DI dokumentavimo asistento diegimu 5 000 gydytojų, kur EVPI buvo 1,2 mln. £ – tą patį EVPI išreikškime pilnais svarais: **EVPI = 1 200 000 £**.

Svarstomas siūlomas 50 gydytojų bandomasis tyrimas. Pagal ankstesnio įsitikinimo dispersijos ir bandymo matavimo tikslumo santykį, aprioriškai ekvivalentus imties dydis yra `n0 = 75`:

```
EVSI(50) = 1,200,000 × 50 / (50 + 75)
         = 1,200,000 × 50 / 125
         = 1,200,000 × 0.4
         = £480,000
```

Bandymas kainuoja 120 000 £:

```
ENBS = EVSI − Cost = 480,000 − 120,000 = £360,000
```

Aiškiai teigiamas ENBS: finansuokite bandymą. Jei tas pats pirkimo sprendimas kartojasi 3 panašiuose regioniniuose trestuose, bandymo vertė didėja:

```
Population EVSI = 480,000 × 3 = £1,440,000
```

## Ryšys su programinės įrangos inžinerija

EVSI yra ekonomika, renkantis, *kokio dydžio* turi būti bandymas ar A/B testas, o ne tik ar apskritai jį vykdyti:

- **Imties dydis kaip investicijos sprendimas.** 50 vartotojų beta ir 5 000 vartotojų pakopinis diegimas yra skirtingi „tyrimai“ su skirtingais EVSI ir skirtingomis kainomis – EVSI leidžia juos palyginti ta pačia baze, o ne pagal numatytą „daugiau duomenų visada geriau“.
- **ENBS, o ne vien EVSI, yra užsakymo testas.** Tyrimas su dideliu EVSI, bet kaina, suvalgančia didžiąją jo dalį, yra silpnas pasiūlymas; sprendimo taisyklė yra tikėtina grynoji ėmimo nauda, lygiai kaip verslo byla atima kainą iš naudos, o ne pateikia vien naudą.
- **Mažėjanti grąža aiški.** Kadangi EVSI(n) auga pagal `n/(n+n0)`, bandymo dydžio padvigubinimas niekada nepadvigubina jo vertės – formali versija inžinerinio instinkto, kad didesnis eksperimentas turi mažėjančią ribinę informacijos vertę.

## Spąstai

- **Normaliojo artinio taikymas už jo prielaidų ribų.** Jis galioja tik apytiksliai jungtiniam, vieno parametro neapibrėžtumui; tikrai netiesiniam ar daugelio parametrų sprendimo modeliui reikia pilno įdėtojo Monte Karlo, o ne šio sutrumpinimo.
- **EVSI lyginimas tik su grynųjų pinigų kaina.** EVSI turi būti sveriamas prieš *pilną* tyrimo kainą, įskaitant savo paties sprendimo vėlavimo kainą – žr. [vėlavimo kaina](../vėlavimo-kaina/) – o ne tik tyrimo sąskaitą.
- **EVSI > EVPI laikymas tikru radiniu.** EVSI pagal konstrukciją niekada negali viršyti EVPI; skaičiavimas, tai duodantis, yra modeliavimo klaida, o ne atradimas.

## Šaltiniai

- Ades AE, Lu G, Claxton K. "Expected value of sample information calculations in medical decision modeling." Medical Decision Making 2004;24(2):207-27.
- Willan AR, Pinto EM. "The value of information and optimal clinical trial design." Statistics in Medicine 2005;24(12):1791-806.
- Strong M, Oakley JE. "When is a model-based value of information analysis feasible?" Medical Decision Making 2014.
