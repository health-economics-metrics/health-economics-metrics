# Denbora-horizontea (Time Horizon)

Denbora-horizontea analisi batek kostuak eta efektuak zenbatzen dituen aldia da. Alderatzen ari diren aukeren arteko alde esanguratsu guztiak jasotzeko adina luzea izan behar du.

## Zergatik axola duen

Horizonte laburra aukeratzen baduzu, berandu datozen onurak (prebentzioa) eta berandu datozen kostuak (mantentze-lanak) galtzen dituzu. Gehiegi luzea aukeratzen baduzu, dena ziurgabetasunean itotzen da. Osasun-teknologiaren ebaluazioak sarri bizitza osoko horizontea erabiltzen du heriotza-efektua duten tratamenduetarako; [aurrekontuaren inpaktuaren analisiak](../aurrekontu-inpaktuaren-analisia/) nahita **1–5 urteko** horizonte laburra erabiltzen du, bere galdera ez baita balioa, ordaingarritasuna baizik. Horizontea adierazitako modelatze-aukera da, eta horizonte ez-parekatuak alderaketa bat manipulatzeko modu klasikoa dira.

## Matematika

Horizontea edozein ebaluazioko batuketaren goiko muga da:

```
Net present value = Σ (t = 0 … T) [ (Benefits_t − Costs_t) / (1 + r)^t ]

T = time horizon (years)
r = discount rate (see discounting-and-time-preference.md)
```

Emaitzak horizontea adierazita jakinarazi behar dira, eta ahal bada hainbat horizontetan erakutsita.

## Adibide landua

Errezeta elektronikoko sistema bat inplementatzeko £2 million kostatzen da eta eragiteko £200,000/urte. Medikazio-akatsak saihesten ditu, £600,000/urteko balioarekin (saihestutako kaltearen tratamendu-kostua).

Onura garbia horizontearen arabera (deskontatu gabe, argitasunerako):

```
Horizon 1 year:  −2,000,000 − 200,000 + 600,000  = −£1,600,000
Horizon 3 years: −2,000,000 + 3 × 400,000        = −£800,000
Horizon 5 years: −2,000,000 + 5 × 400,000        =  £0
Horizon 10 years:−2,000,000 + 10 × 400,000       = +£2,000,000
```

Sistemak "huts egiten du" 5 urtetik beherako edozein horizontetan eta "arrakasta du" 10ean. Bietako batek ere ez da benetako erantzuna; txosten zintzoak orekapuntua adierazten du eta horizontea sistemaren bizitzarekin justifikatzen du (zenbat denbora ordezkapenaren aurretik?).

## Software ingeniaritzarekin lotura

- **Sprint batean neurtutako tresna-ebaluazioek** sistematikoki galtzen dute ikasketa-kurbaren beherakada (aurrera-kargatutako kostuak) eta epe luzeko mantentze-lanak (atzera-kargatutako kostuak). 2. astean neurtutako AA kodetze-laguntzaileen pilotuek berritasunaren gailurra jasotzen dute, ez egoera egonkorra.
- **Kontratuaren luzera ≠ onuraren horizontea.** 1 urteko SaaS kontratu bat 5 urtez ebalua daiteke berritzea errealistikoki espero baduzu — baina esan hori.
- **Legacy ordezkapen-kasuek** sistema zaharraren benetako bizitza-amaieraraino iritsi behar dute, ez zenbaki borobil arbitrario batera.

## Tranpak

- **Horizonte-erosketa**: zure aukerak irabazten duen horizontea aukeratzea. Aurre-erregistratu horizontea emaitzak kalkulatu aurretik.
- **Aukera ezberdinentzako horizonte ezberdinak** alderaketa berean.
- **Deskontatu gabeko edo ziurgabetasun-analisirik gabeko bizitza osoko horizonteak** — 30. urteko onurak nominalean fikzioa dira. Parekatu horizonte luzeak [sentikortasun-analisiarekin](../sentikortasun-analisia/).

## Iturriak

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Sullivan SD, et al. "Budget Impact Analysis — Principles of Good Practice: Report of the ISPOR 2012 Budget Impact Analysis Good Practice II Task Force." Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
