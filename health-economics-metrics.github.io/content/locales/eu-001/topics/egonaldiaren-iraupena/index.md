# Egonaldiaren iraupena (Length of Stay, LOS)

Egonaldiaren iraupena ospitaleratzetik alta artean igarotako egun-kopurua da — ospitaleratutako pazienteen arretaren fluxu-eraginkortasuneko oinarrizko metrika. Erresuma Batuko batez bestekoak 4–5 egun ingurukoak dira; soberako egun bakoitzak ohe urri bat kontsumitzen du eta pazientea ospitaleko arriskuen esposizioan jartzen du.

## Zergatik axola duen

LOSek ospitale akutuen ekonomiako ia dena gidatzen du: ohe-ahalmena, aukerako emaritza, larrialdi-fluxua, langileak. Batez besteko LOS egunaren zatiki batzuk murrizteak, eskala handian, ahalmen izugarria askatzen du (ikus [aurreztutako ohe-egunak](../aurreztutako-ohe-egunak/)). LOS kalitate-seinalea ere bada bi noranzkoetan — luzeegia prozesu-hutsegitea iradokitzen du (diagnostiko atzeratuak, alta-paperak, gizarte-arreta itxaronaldiak); laburregia goizegiko alta esan nahi dezake, geroago [berrospitalizazio](../berrospitalizazio-tasa/) gisa agertzen dena.

## Matematika

```
LOS (epealdi bakoitzeko) = alta-data − sarrera-data
Batez besteko LOS        = okupatutako ohe-egunak / altak (jakinarazi batez bestekoa ETA mediana;
                           LOS asko eskuinera okertuta dago egonaldi luzeko muturreko balioengatik)

Konparaketek kasu-nahasketaren doikuntza behar dute (adina, diagnostikoa, akutasuna),
bestela ospitaleak nor onartzen duen neurtzen ari zara, ez nola jokatzen duen.
```

Little-en legeak fluxu-aldagaiak lotzen ditu: `okupatutako oheak = sarrera-tasa × batez besteko LOS` — software-ilarak gobernatzen dituen lege bera (ikus [fluxu-metrikak](../fluxu-metrikak/)).

## Adibide landua

Trust batek egunean 40 larrialdi-ospitalizazio medikoko paziente onartzen ditu batez besteko LOS 6.0 egunekin: 240 ohe etengabe okupatuta (40 × 6). Alta-koordinazioko softwareak (zeregin-jarraipena, farmaziatik-eramateko automatizazioa, garraio-erreserba) egonaldien isats ez-klinikoa batez beste 0.4 egunean murrizten du.

```
Behar diren oheak = 40 × 5.6 = 224 → 16 ohe etengabe askatuak
                  = 16 × 365 = 5,840 ohe-egun/urte
```

Balioetsi 5.840 ohe-egunak mekanismoaren arabera (berriz bete/itxi/tartea) [aurreztutako ohe-egunak](../aurreztutako-ohe-egunak/)-en arabera. Kontuan izan zer mugitu den: ez medikuntza, *itxaronaldia* baizik — pazientea medikuki egokia zen; sistema oraindik paperak egiten ari zen. Hori ilara-arazo bat da, eta softwarea ona da ilara-arazoetan.

## Software ingeniaritzarekin lotura

LOS ospitalearen ziklo-denbora da, eta hobekuntza-gidaliburua entrega-fluxuaren lanaren berdina da: instrumentatu faseak (sarrera → tratamendua → medikuki-egokia → benetan-altan), aurkitu non pilatzen den denbora (eskuz-aldaketetan da), kendu itxarote-egoerak ahalmena gehitu beharrean. "Altarako medikuki egokia baina oraindik ohea okupatzen" kohortea ospitalearen "PR onartua baina merge gabea" bertsioa da. Software-aukera zuzenak: alta-zereginen orkestrazioa, diagnostikoen erantzun-denbora, altako sendagaien e-errezeta, gizarte-arretarako deribazioen integrazioa.

## Tranpak

- **Batez bestekoaren jakinarazpena bakarrik** — muturreko balioek menderatzen dute; batez besteko jaisten ari batek egonaldi luzeko isats hazten ari bat ezkuta dezake.
- **Kasu-nahasketaren doikuntzarik ez** aurretik/ondoren aldarrikapenetan: onarpen-atalaseak sasoiaren eta epe luzearen arabera aldatzen dira.
- **Berrospitalizazio gisa berriz agertzen den LOS murrizketa** — lotu beti LOS aldarrikapenak 30 eguneko berrospitalizazio-datuekin.

## Iturriak

- OECD, length of hospital stay indicator. <https://www.oecd.org/en/data/indicators/length-of-hospital-stay.html>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
