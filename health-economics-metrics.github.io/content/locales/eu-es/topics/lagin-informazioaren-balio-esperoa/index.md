# Lagin-informazioaren balio esperoa (Expected Value of Sample Information, EVSI)

EVSI *proposatutako azterketa zehatz* baten balioa da — diseinu jakin bat, lagin-tamaina jakin bat — egin aurretik, [EVPI](../informazio-perfektuaren-balio-esperoa/)ren aurka, zeinak ziurgabetasun guztia zuzenean ezabatzearen prezioa jartzen duen. EVSIk ikerketa-finantzatzaile batek benetan duen galderari erantzuten dio: "merezi al du *saiakuntza honek*, *tamaina honetan*, bere kostua?"

## Zergatik axola duen

EVPIk ikerketa batek balio dezakeenaren sabaia esaten dizu; ez dizu inoiz esaten zure aurrean duzun saiakuntzak langa gainditzen duen. Ikerketa-finantzatzaile nazional batek 50 pazienteko pilotu baten eta 500 pazienteko saiakuntza behin betiko baten artean aukeratzean jakin behar du *diseinu zehatz bakoitzak* zenbat balio duen, ez bakarrik ororen-jakintasunaren balioa. EVSIk zenbaki hori ematen du, eta lagin-tamainarekin eskalatzen denez, finantzatzaileari onura garbi espero maximoa ematen duen lagin-tamaina aurkitzen uzten dio asmatu beharrean.

Horregatik da EVSI beti EVPI baino txikiagoa edo berdina: lagin finitu batek ziurgabetasuna partzialki bakarrik ebatz dezake, eta informazio perfektuak baino gehiago balio duela dirudien azterketa bat kalkuluak oker daudela adierazten du, ez benetako emaitza.

## Matematika

```
Orokorra:
EVSI(n) = E_datuak[ max_d E_θ|datuak[NB(d,θ)] ]  −  max_d E_θ[NB(d,θ)]
  (itxaropen habiaratua: kanpokoa azterketaren emaitza posible guztien gainean, barrukoa
  emaitza hori ikusi ondoren θri buruzko sinesmen posteriorraren gainean — normalean
  Monte Carlo habiaratuaren / eguneraketa Bayesiarraren bidez estimatua sentsibilitate-analisi
  probabilistikoaren laginen gainean)

Hurbilketa normal itxia (parametro ziurgabe bakarra, normal-normal eredu konjokatua —
lasterbide estandarra, eredu guztietarako zehatza ez dena):
EVSI(n) = EVPI × n / (n + n0)

n  = proposatutako azterketaren lagin-tamaina
n0 = "aurrekoaren baliokide den lagin-tamaina" — egungo aurrekoak daraman informazio bera
     eramango lukeen lagin imajinario baten tamaina, datuen bariantza / aurrekoaren
     bariantza ratiotik eratorria
ENBS(n) = EVSI(n) − Kostua(n)
Populazio-EVSI = erabaki bakoitzeko EVSI × eragindako erabakiak
```

Forma orokorra itxaropen habiaratua da, azterketaren etorkizuneko emaitza bera ziurgabea delako: azterketak sor lezakeen datu-multzo posible bakoitzaren gainean batez bestekoa egin behar duzu, eta bakoitzarentzat erabaki onena birkalkulatu eguneratutako (posteriorra) sinesmenarekin. Hurbilketa normal itxiak kostu konputazional hori ratio bakar batekin ordezkatzen du, parametro ziurgabea eta datuak (gutxi gorabehera) normalak eta konjokatuak direnean baliozkoa — erosotasuna, ez lege unibertsala. Monte Carlo habiaratu osoa hipotesi hori betetzen ez denean metodo orokorra da. Ikus [sentsibilitate-analisi probabilistikoa](../sentikortasun-analisi-probabilistikoa/) EVSI normalean estimatzen den PSA laginetarako.

## Adibide landua

[EVPI](../informazio-perfektuaren-balio-esperoa/) adibide landuan oinarrituta — AA dokumentazio-laguntzaile bat 5.000 klinikori hedatzea, non EVPI £1.2M zela aurkitu zen —, adierazi EVPI bera hemen libera osoetan: **EVPI = £1,200,000**.

50 klinikoko pilotu-azterketa bat proposatu da. Aurreko sinesmenaren bariantzaren eta pilotuaren neurketa-zehaztasunaren arteko ratiotik, aurrekoaren baliokide den lagin-tamaina `n0 = 75` da:

```
EVSI(50) = 1,200,000 × 50 / (50 + 75)
         = 1,200,000 × 50 / 125
         = 1,200,000 × 0.4
         = £480,000
```

Pilotuak £120,000 kostatzen ditu:

```
ENBS = EVSI − Kostua = 480,000 − 120,000 = £360,000
```

ENBS argi positiboa: finantzatu pilotua. Erosketa-erabaki bera antzeko 3 eskualdeko trusten artean errepikatzen bada, pilotuaren balioa eskalatzen da:

```
Populazio-EVSI = 480,000 × 3 = £1,440,000
```

## Software ingeniaritzarekin lotura

EVSI pilotu edo A/B proba baten *zein handia* izan behar duen aukeratzearen ekonomia da, ez bakarrik bat exekutatu behar den ala ez:

- **Lagin-tamaina inbertsio-erabaki gisa.** 50 erabiltzaileko beta bat eta 5.000 erabiltzaileko hedapen etapakatu bat "azterketa" desberdinak dira, EVSI eta kostu desberdinekin — EVSIk oinarri berean alderatzen uzten dizu "datu gehiago beti hobe" lehenetsi beharrean.
- **ENBS, ez EVSI bakarrik, da enkargu-proba.** EVSI handia baina kostuak gehiena jaten duen azterketa proposamen ahula da; erabaki-araua laginketaren onura garbi esperoa da, negozio-kasu batek onura kostuarekin garbitzen duen bezala, onura bakarrik jakinarazi beharrean.
- **Etekin gutxitzaileak esplizituak dira.** EVSI(n) `n/(n+n0)`rekin igotzen denez, pilotu baten tamaina bikoizteak ez du inoiz bere balioa bikoizten — esperimentu handiago batek informazio-balio marjinal gutxitzailea duela dioen ingeniaritza-senaren bertsio formala.

## Tranpak

- **Hurbilketa normala bere hipotesietatik kanpo aplikatzea.** Gutxi gorabehera konjokatua den parametro bakarreko ziurgabetasunerako bakarrik balio du; erabaki-eredu benetan ez-lineal edo parametro anitzekoak Monte Carlo habiaratu osoa behar du, ez lasterbide hau.
- **EVSI diru-kostuarekin bakarrik alderatzea.** EVSI azterketaren *kostu osoarekin* neurtu behar da, bere erabaki-atzerapenaren kostua barne — ikus [atzerapenaren kostua](../atzerapenaren-kostua/) —, ez azterketaren fakturarekin bakarrik.
- **EVSI > EVPI benetako aurkikuntza gisa tratatzea.** EVSIk ezin du inoiz EVPI gainditu eraikuntzaz; hori ematen duen kalkulua modelatze-akatsa da, ez aurkikuntza.

## Iturriak

- Ades AE, Lu G, Claxton K. "Expected value of sample information calculations in medical decision modeling." Medical Decision Making 2004;24(2):207-27.
- Willan AR, Pinto EM. "The value of information and optimal clinical trial design." Statistics in Medicine 2005;24(12):1791-806.
- Strong M, Oakley JE. "When is a model-based value of information analysis feasible?" Medical Decision Making 2014.
