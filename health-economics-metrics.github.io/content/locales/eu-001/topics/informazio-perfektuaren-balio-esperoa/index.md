# Informazio perfektuaren balio esperoa (Expected Value of Perfect Information, EVPI)

EVPI erabaki aurretik ziurgabetasuna ezabatzeko erabaki-hartzaile batek gehienez ordaindu beharko lukeen zenbatekoa da — "has gaitezen azterketa batekin" esaldiaren prezio formala.

## Zergatik axola duen

Osasun-sistemek etengabe hautaketa honekin egiten dute topo: onartu orain ebidentzia inperfektuarekin, edo lehenik ikerketa gehiago finantzatu. EVPIk bigarren aukerari zenbaki bat ematen dio. EVPI £50,000 bada eta proposatutako saiakuntzak £2 milioi kostatzen badu, onartu orain. EVPI £20 milioi bada, saiakuntza merke-merke da. Galdera bera — "pilotatu behar al dugu hau hedatu aurretik?" — erakundeko tresna-erabaki guztietan sortzen da, eta ia inork ez du prezioztatzen. Proiektu bat geroago zabaltzeko aukeraren prezioa jartzeko, informazioa aurrena biltzeko aukeraren ordez, ikus [aukera errealen balioztapena](../aukera-errealen-balorazioa/).

## Matematika

EVPI aurrerapen perfektuarekin erabakitzearen eta orain esperantzetan oinarrituta erabakitzearen arteko tartea da:

```
EVPI = E_θ[ max_j NMB(j, θ) ]  −  max_j E_θ[ NMB(j, θ) ]

θ        = parametro ziurgabeak (beren banaketa bateratuarekin)
NMB(j,θ) = j aukeraren onura monetario garbia θ emanda
```

Lehen terminoa: mundu posible bakoitzeko aukera onenaren emaitzaren batez bestekoa (beti zuzen aukeratzen duzu). Bigarren terminoa: batez beste onena den aukera bakarraren emaitza (orain konprometitu behar duzu). EVPI ≥ 0 beti. Populazio-EVPIk eragindako erabaki-kopuruarekin biderkatzen du. Zuzenean [PSA](../sentikortasun-analisi-probabilistikoa/) laginetatik kalkulatzen da.

## Adibide landua

AA dokumentazio-laguntzaile bat 5.000 klinikori hedatu, edo ez. Bi mundu:

```
A mundua (p = 0.6): laguntzaileak 20 min/egun aurrezten ditu → hedapenaren NMB = +£8M
B mundua (p = 0.4): laguntzaileak ~0 aurrezten du (lan-fluxuaren marruskadura) → hedapenaren NMB = −£3M
"Ez hedatu"ren NMB = £0 bi munduetan.
```

Orain erabaki: E[NMB hedapena] = 0.6 × 8 − 0.4 × 3 = **+£3.6M** → hedatu.

Informazio perfektuarekin: A munduan hedatzea aukeratu (+£8M), B munduan ezer ez (£0). Balio esperoa = 0.6 × 8 + 0.4 × 0 = **£4.8M**.

```
EVPI = 4.8M − 3.6M = £1.2M
```

Zein mundutan zauden nabarmen argitzen duen £150,000ko 3 hilabeteko pilotu zorrotz bat nabarmen merezi du — eta £1.2M baino gehiago kostatzen duen edozein pilotuk ez, ahalik eta zehatzena izanda ere.

## Software ingeniaritzarekin lotura

EVPI spike-aren, pilotuaren, A/B probaren eta kontzeptu-frogaren ekonomia da. Bi arau praktiko ematen ditu:

- **Pilotu bat finantzatzea merezi du erabakiak benetan alda badaiteke bakarrik.** Pilotuaren emaitza edozein dela ere hedatuko bazenuke, EVPI = 0 da eta pilotua antzerkia da.
- **Mugatu pilotu-gastua EVPIra.** Informazioaren balioa informatzen duen erabakiaren balioak mugatzen du.

EVPI partzialak (EVPPI) parametro bakarrera hedatzen du: "zenbat balio du denbora-aurrezkiaren zenbakia zehazki finkatzeak?" — pilotuak zer neurtu behar duen esaten dizuna. Ziurgabetasun osoa ezabatu beharrean ikerketa *zehatz* proposatu baten prezioa jartzeko, ikus [EVSI](../lagin-informazioaren-balio-esperoa/).

## Tranpak

- **Erabaki-araurik gabeko pilotuak exekutatzea** — hautua alda ezin dezakeen informazioa definizioz balio gabekoa da.
- **Informazioa biltzeko atzerapen-kostua ez ikustea**: 6 hilabeteko pilotu batek 6 hilabeteko onura atzeratzen du ([atzerapenaren kostua](../atzerapenaren-kostua/)); pilotuaren balio garbia = EVPI ebatzia − atzerapen-kostua − pilotuaren kostua.
- **EVPI iragarpen gisa tratatzea.** Informazio-balioaren goi-muga da, ez azterketa zehatz batek emango duenaren estimazioa.

## Iturriak

- Claxton K. "Exploring uncertainty in cost-effectiveness analysis." PharmacoEconomics 2008. <https://pubmed.ncbi.nlm.nih.gov/18279550/>
- York Health Economics Consortium glossary: EVPI. <https://yhec.co.uk/glossary/expected-value-of-perfect-information-evpi/>
