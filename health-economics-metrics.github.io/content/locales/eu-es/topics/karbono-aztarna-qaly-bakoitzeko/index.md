# Karbono-aztarna QALY bakoitzeko (Carbon Footprint per QALY)

QALY bakoitzeko karbonoa eraginkortasun-ratio bat da — esku-hartze baten karbono-isurketak (edo saihestutako isurketak) berak ematen dituen QALYekin zatituta — QALY bakoitzeko kostuaren analogo zuzena, esku-hartze baten karbono-eraginkortasuna bere kostu-eraginkortasunarekin batera ebaluatzen uzten duena. "Karbonoarekin doitutako onura monetario garbiak" urrats bat harago doa, karbonoaren inpaktua monetizatuz Erresuma Batuko Green Book-eko merkaturatu gabeko karbono-balio ofizialak erabiliz eta [onura monetario garbi](../onura-monetario-garbia/) estandarrari kenduz.

## Zergatik axola duen

NICEk eta NHS Englandek orain ingurumen-inpaktua kostuarekin eta QALYekin batera kontuan hartzea espero dute. NHSk zero garbiko konpromiso publikoa du: bere isurketa zuzenetarako zero garbia 2040rako, eta hornidura-kate osoko aztarnarako zero garbia 2045erako. NICEren osasun-teknologien ebaluazioen eskuliburuak (PMG36) ingurumen-jasangarritasuna teknologia-ebaluazioko kontuan hartzeko gai sortu gisa aipatzen du. Osasun digitaleko produktu batentzat, horrek esan nahi du karbonoa balio-kasuaren laugarren zutabe bihurtzen ari dela, kostuarekin, QALYekin eta [eraginkortasun-mugako menderatzearekin](../menderatzea-eta-eraginkortasun-muga/) batera — ez horietako ezertaren ordez, baizik eta negozio-kasu on batek gero eta gehiago jakinarazi behar duen dimentsio gisa.

## Matematika

```
QALY bakoitzeko karbonoa = isurketa_guztira_tona_co2e / qaly_guztira
  (balio negatiboak QALY irabazi bakoitzeko SAIHESTUTAKO isurketa garbiak esan nahi du —
  garaipen bikoitza: osasun hobea eta karbono gutxiago)

Karbono-inpaktu monetizatua = isurketak_tona_co2e × karbono_balioa_tonako
  (isurketa negatiboak × balio positiboa = kostu negatiboa, hau da, onura)

Karbonoarekin doitutako NMB = onura_monetario_garbia − karbono_inpaktu_monetizatua
```

Honek kostua/QALY eraginkortasun-mugaren ideia hedatzen du bigarren ardatz batekin — QALY bakoitzeko karbonoa — [menderatzea eta eraginkortasun-muga](../menderatzea-eta-eraginkortasun-muga/)ren "marraztu aukera guztiak eta ikusi zer dagoen menderatuta" logika bera, kostuaren ordez karbonoari aplikatuta.

## Adibide landua

Telesaluzko zerbitzu batek bisita presentzialak ordezkatzen ditu, urtean 5.000 auto-bidaia saihestuz, bakoitza gutxi gorabehera 8kg CO2e — 40 tona CO2e saihestuta, isurketa negatibo gisa adierazita (−40.0 tona), eta 25 QALY/urte ematen ditu:

```
QALY bakoitzeko karbonoa = −40.0 / 25.0 = −1.6 tona CO2e saihestu irabazitako QALY bakoitzeko
```

Green Book-eko merkaturatu gabeko karbono-balioa erabiliz (zifra ilustratiboa, 2023ko merkaturatu gabeko balio zentrala ≈ £269/tona CO2e — Green Book-ek karbono-balioak urtero eguneratzen ditu, egiaztatu berriro analisi errealean aipatu aurretik):

```
Karbono-inpaktu monetizatua = −40.0 × £269 = −£10,760
```

−£10,760ko "kostu" bat £10,760ko onura bat da. Esku-hartzearen bere onura monetario garbia £500,000 bada:

```
Karbonoarekin doitutako NMB = £500,000 − (−£10,760) = £510,760
```

Karbono-aurrezkiak kasuari gehitzen dio, ez kentzen — isurketa negatiboen enkuadreak azaleratu nahi duen garaipen bikoitza.

## Software ingeniaritzarekin lotura

Hau AA/hodei-ekonomiarekiko elkargune bizi eta egungoa da: AA eredu bat entrenatu eta exekutatzearen konputazio-karbono aztarna NHSren erosketetan benetako lerro bat da orain, atalase jakin batzuk gainditzen dituzten NHS hornitzaile-kontratuek Karbono Murrizketa Plana eskatzen baitute. [Hodei-unitateen ekonomiak](../hodei-unitateen-ekonomia/) dagoeneko konputazio-irteeraren unitate bakoitzeko kostua jarraitzen du; QALY bakoitzeko karbonoa "inferentzia bakoitzeko karbono-kostua" metrika baten etorkizuneko txantiloi naturala da, modulu hori eta inferentziaren unitate-ekonomia ingurumen-dimentsiora hedatuz, nahiz eta metrika hori oraindik ez dagoen.

## Tranpak

- **Irismen-mugen manipulazioa**: isurketa zuzenak (1. irismena) bakarrik zenbatzea eta hornidura-katekoak (3. irismena) kanpoan uztea, osasun digitaleko produktu baten benetako aztarnaren gehiengoa izan ohi direnak.
- **Karbono-balio zaharkitua erabiltzea**: Green Book-ek merkaturatu gabeko karbono-balioak urtero eguneratzen ditu, beraz aipatutako £/tona zifra orok datatuta egon behar du, ez konstante finko gisa.
- **"Karbono-eraginkorra" "kostu-eraginkorraren" ordezko gisa tratatzea**: karbono gutxiko, balio gutxiko esku-hartzea NHSren baliabideen erabilera txarra da hala ere. Karbonoa kostuaren eta QALYen ondoko laugarren zutabea da, ez horietako baten ordezkoa.

## Iturriak

- NHS England, "Delivering a Net Zero National Health Service" (2020, updated 2022). <https://www.england.nhs.uk/greenernhs/publication/delivering-a-net-zero-national-health-service/>
- HM Treasury, The Green Book: Carbon Values supplementary guidance (updated annually; non-traded central value ≈ £269/tCO2e, 2023 — date any citation). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
