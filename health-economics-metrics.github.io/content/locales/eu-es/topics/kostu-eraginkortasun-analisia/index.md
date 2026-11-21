# Kostu-eraginkortasun analisia (Cost-Effectiveness Analysis, CEA)

CEAk esku-hartze alternatiboen kostuak **unitate naturaletan** neurtutako emaitza bakar baten aurka alderatzen ditu — bizi-urteak, detektatutako kasuak, saihestutako ospitalizazioak, jaitsitako mmHg odol-presioa. Bere irteera emaitza-unitate bakoitzeko kostua da.

## Zergatik axola duen

CEA aukera guztiek emaitza bera helburu dutenean erabiltzen den konparaketa nagusia da. "X lortzeko zein modu da diruaren erabilerarik onena?" erantzuten du — baina *ez* "merezi al du X lortzeak?" (horretarako [kostu-onura analisia](../kostu-onura-analisia/) behar da) eta *ez* "nola alderatzen da X erlazionatu gabeko lehentasunekin?" (horretarako [kostu-utilitate analisia](../kostu-utilitate-analisia/) eta QALY bezalako emaitza generiko bat behar dira).

## Matematika

Konparaketa-estatistikoa [ICER](../kostu-eraginkortasun-gehigarriaren-ratioa/) da, unitate naturaletan:

```
ICER = (Kostua_A − Kostua_B) / (Efektua_A − Efektua_B)
     = £ detektatutako kasu gehigarri / saihestutako ospitalizazio / etab. bakoitzeko
```

Prozedura: definitu emaitza-unitatea; kostatu aukera guztiak [ikuspegi](../azterketaren-ikuspegia/) berberetik [denbora-horizonte](../denbora-horizontea/) berean; ezabatu aukera menderatuak ([eraginkortasun-muga](../menderatzea-eta-eraginkortasun-muga/)); kalkulatu ratio gehigarriak mugan zehar.

## Adibide landua

Diagnostikatu gabeko aurikula-fibrilazioa aurkitzeko hiru modu, 100.000 biztanleko populazio batean:

```
Aukera                         Kostua      Aurkitutako kasuak
Pultsu-egiaztapen oportunistak £150,000       300
Farmazia-kribatze ekitaldiak   £400,000       520
Eramangarrietan oinarritutako kribatzea £900,000  610

ICER farmazia vs pultsua:  (400k−150k)/(520−300) = £1,136 kasu gehigarri bakoitzeko
ICER eramangarria vs farmazia:(900k−400k)/(610−520) = £5,556 kasu gehigarri bakoitzeko
```

Kasu gehigarri bakoitzeko £5,556 "merezi duen" ala ez aurkitutako kasu baten balioaren araberakoa da (beheranzko iktusaren prebentzioa) — CEAk aukerak sailkatzen ditu baina onarpen-erabakiak kanpoko balioztapen hori behar du. Kontuan izan eramangarri aukeraren kasu bakoitzeko *batez besteko* kostua (900k/610 = £1,475) ondo ikusten dela; £5,556 *gehigarria* da hedapen-erabakirako zenbaki zintzoa.

## Software ingeniaritzarekin lotura

CEA txantiloi egokia da aukerek emaitza bera partekatzen dutenean: ezabatutako test hauskor bakoitzeko kostua hiru konponketa-ikuspegitan; saihestutako intzidentzia bakoitzeko kostua observabilitate-saltzaileen artean; hedapen arrakastatsu bakoitzeko kostua CI arkitekturen artean. Ezartzen duen diziplinak — emaitza-unitate adierazi bakarra, ratio gehigarriak (ez batez bestekoak), menderatutako aukerak lehenengo ezabatuta — saltzaile-konparaketa txar gehienak hiltzen ditu prezio-eztabaida hasi aurretik.

## Tranpak

- **Emaitza desberdineko aukerak alderatzea** ("aurkitutako kasuak" vs "asebetetzea") CEA bakar batean — horrek [kostu-ondorio analisia](../kostu-ondorio-analisia/) edo emaitza generiko bat behar du.
- **Batez besteko kostu-eraginkortasun ratioak** ratio gehigarriak behar direnean aurkeztea (goiko eramangarriaren adibidea).
- **Lausengurako aukeratutako emaitza-unitateak**: "sortutako alertak" irteera da, ez emaitza; eskatu balioa daramaten unitateak.

## Iturriak

- CDC POLARIS: cost-effectiveness analysis. <https://www.cdc.gov/policy/polaris/economics/cost-effectiveness/index.html>
- York Health Economics Consortium glossary. <https://yhec.co.uk/glossary/cost-effectiveness-analysis/>
