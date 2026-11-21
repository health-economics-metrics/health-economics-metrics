# AAren garatzaile-produktibitatea (AI Developer Productivity)

Kodea idazteko AA laguntzak ingeniaritza-irteerari benetan zer egiten dion neurtzen duten metrikak: iradokizunen onarpen-tasak, azeleraketa kontrolatuak, PR emaritza eta kodearen atxikipena. Ebidentzia-oinarria benetan kontraesankorra da, eta horrek eraginkortasunaren (efficacy) eta eraginkortasun errealistaren (effectiveness) arteko bereizketaren kasu-azterketa perfektua bihurtzen du; osasun-ekonomia hori kudeatzeko sortu zen.

## Zergatik axola duen

Gehien aipatutako bi azterketa kontrolatuek kontrako noranzkoak seinalatzen dituzte:

- **Peng et al. 2023 (GitHub Copilot RCT)**: garatzaileek HTTP zerbitzari berri bat egiteko zeregina **%55,8 azkarrago** amaitu zuten Copilot-ekin (1h11m vs 2h41m, n=95).
- **METR 2025 RCT**: *beren biltegi helduetan* lan egiten zuten kode irekiko garatzaile experientziadunak **%19 motelagoak** izan ziren 2025 hasierako AA tresnekin (16 garatzaile, 246 zeregin) — eta *uste zuten* %20 azkarragoak zirela.

Bi azterketak onak dira. Kontraesana bera da aurkikuntza: zeregin berrietako eraginkortasuna ez da kode-base helduetako eraginkortasun errealistara transferitzen, eta *hautemandako* onurak ezin du neurtutako onura ordezkatu. Medikuntzak badu bi fenomenoentzako izena (saiakuntza azalgarriak vs pragmatikoak; plazebo-arazoa) eta horiek kudeatzeko tresneria.

## Matematika

```
Onarpen-tasa     = onartutako iradokizunak / erakutsitako iradokizunak
                   (GitHub telemetria ~%30 batez beste; aldatzen da: SQL 45%, Python 35%, JS 28%)
Atxikipen-tasa   = merge-ra iristen den AA kodea / onartutako AA kodea (~%88 jakinarazia)
Azeleraketa      = (t_kontrola − t_AA) / t_kontrola  (konparazio kontrolatutik SOILIK)
Emaritza-delta   = Δ merge-atutako PR/garatzaile/aste (GitHub/Accenture landa-datuak: +%8.7)

Balio-eredua     = garatzaileak × aurreztutako denbora × kostu osoa orduko × erabilera-faktorea
                   — termino bakoitzak tokiko neurketa behar du; ikus tornadoa
                   sensitivity-analysis.md fitxategian, non aurreztutako denborak
                   beste parametro guztiak batera menderatzen dituen
```

## Adibide landua

500 garatzaileko erakunde batek laguntzaile bat pilotatzen du kontrol egokiarekin (talde parekatuak, 3 hilabete, aurrez erregistratutako metrikak):

```
Pilotuaren emaitza: PR ziklo-denbora −%18; merge-atutako PRak +%6; CFR aldatu gabe;
                    norberak jakinarazitako aurrezkia 45 min/egun; neurtua zeregin-mailan ≈ 15 min/egun

Balioetsi NEURTUTAKO zenbakia: 500 × 0.25h × 220d × £60 × 0.6 erabilera
                              ≈ £990,000/urte ahalmena (diru-sarrerarik sortzen ez duena)
Kostua: 500 × £39/hil × 12 ≈ £234,000/urte
Ahalmen garbiaren ratioa ≈ 4:1 — finantza daiteke, norberak jakinarazitako aldarrikapenaren heren batean.
```

Hautemandakoaren eta neurtuaren arteko 3 aldiko aldea METR aurkikuntza praktikan jokatzen ari da; autoerrelatoan oinarritutako aurrekontuak onura-lerroa hirukoiztuko zukeen.

## Software ingeniaritzarekin lotura

AA tresnak ebaluatzen dituen edonorentzat osasun-ekonomiatik hartu beharrekoak: egin **saiakuntza pragmatikoak** (zure kode-basea, zure ingeniariak, benetako ticketak — ez saltzailearen demo-zereginak); tratatu **onarpen-tasa proxy gisa, ez emaitza gisa** (garatzailearen ikuspegitik iradokizunen [PPV](../aa-klinikoaren-ebaluazioa/) da — onarpen handia eta atxikipen baxua gaindiagnostikoa da); lotu emaritza-irabazi oro **egonkortasun-egiaztapenarekin** (DORA 2025: AAk emaritza igotzen du, egonkortasuna kaltetzen du — albo-ondorioak dituen esku-hartzeak onura garbiaren analisia behar du, [DORA metrikak](../dora-metrikak/)-en arabera); eta sailkatu onura zintzo ahalmen gisa ([diru-sarrera sortzen duten aurrezkiak vs sortzen ez dituztenak](../diru-sarrera-sortzen-duten-aurrezkiak-vs-sortzen-ez-dituztenak/)).

## Tranpak

- **Saltzailearen azterketen transplantea**: kode berriko RCTen zenbakiak legacy kode-baseko lanari aplikatzea — METR azterketak agerian utzitako akats bera.
- **Autoerrelatoa neurketa gisa**: 20 puntuko hautemate-aldea literatura honetako alborapen handiena da.
- **Jardueraren puzte**: PR gehiago eta kode gehiago Jarduera dira, ez emaitzak ([SPACE](../space-eta-devex/)); lotu berrlanarekin eta CFRrekin.
- **Ikaskuntza-kurbari ez erreparatzea**: 2. asteko neurketek berritasun-efektuak jasotzen dituzte, edozein norabidetan; neurtu egoera egonkorrean ([denbora-horizontea](../denbora-horizontea/)).

## Iturriak

- Peng S, et al. "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot." 2023. <https://arxiv.org/abs/2302.06590>
- METR, "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity." 2025. <https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/>
- DORA 2025 report. <https://dora.dev/dora-report-2025/>
