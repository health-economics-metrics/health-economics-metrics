# Kostu-ondorio analisia (Cost-Consequence Analysis, CCA)

CCAk kostuak **emaitza guztien taula desagregatu** batekin batera aurkezten ditu — klinikoak, operatiboak, esperientziazkoak — ratio edo puntuazio bakar batean biltzeke. Erabakiak hartzen dituenak trukeak esplizituki neurtzen ditu.

## Zergatik axola duen

CCA da NICEren **aukerako formatu ekonomikoa osasun-teknologia digital gehienetarako** Evidence Standards Framework-aren arabera. Produktu digitalek efektu heterogeneoak sortzen dituzte (denbora aurreztua, asebetetzea, DNA murrizketa, irabazi kliniko txikiak) QALY zenbaki bakarrean zintzo agregatzeari aurre egiten dutenak. Konposatu hauskor bat behartu beharrean, CCAk liburu osoa erakusten du. Software negozio-kasu gehienetarako, formatu zintzoena eta konbentzigarriena da, interesdun bakoitzak bere erabaki-garrantzizko lerroa aurki dezakeelako.

## Matematika

Nahita ez dago agregazio-formularik. Irteera taula bat da:

```
                          Esku-hartzea   Konparatzailea   Aldea
Kostuak (urteko)          £X             £Y               ΔC
1. emaitza (unitate naturalak) …         …                Δ1
2. emaitza                …              …                Δ2
Emaitza kualitatiboak     deskribatuak, ez puntuatuak
```

Lerro bakoitzak bere unitateak mantentzen ditu. Arauak: ondorio guztiak aurrez zehaztuak (emaitzen ondoren hautazko ehizarik ez); [ikuspegi](../azterketaren-ikuspegia/) eta [horizonte](../denbora-horizontea/) bera osoan zehar; ziurgabetasuna lerro bakoitzeko.

## Adibide landua

Ebakuntza aurreko ebaluazio-plataforma digitala vs telefono bidezko prozesua, urteko, trust bat:

```
                              Digitala     Telefonoa   Aldea
Funtzionamendu-kostua         £180,000     £95,000     +£85,000
Erizain-orduak ebaluazioetan  6,200        11,800      −5,600 ordu
Eguneko ebakuntza bertan behera 92         174         −82
Pazientearen asebetetzea (CSAT) 4.5/5      3.9/5       +0.6
Galdutako/osatu gabeko ebaluazioak %1.2    %4.8        −3.6 pp
```

Puntuazio bakarrik ez — baina erabakia arrazoitzeko erraza da: £85,000 5.600 erizain-ordu erosten ditu (≈ £15/ordu, langile-kostu guztien oso azpitik), 82 bertan behera uzte saihestu (bakoitzak ~£1,200 balio duen kirofano-txanda alferrik galtzen duena) eta esperientzia hobea. Batzorde batek ere ikus dezake zehazki zer *ez* duen lortzen: QALY edo hilkortasun-efekturik ez aldarrikatua.

## Software ingeniaritzarekin lotura

CCA plataforma-proposamen on batek dagoeneko erabiltzen duen balanced scorecard-aren bertsio formala da: kostua DORA metrikekin, DevEx puntuazioekin, intzidentzia-zenbaketekin batera — agregatu gabe. Gehitzeko osasun-ekonomiako diziplina: **zehaztu lerroak aurrez** (erabaki zer kontatzen duen pilotuaren aurretik, okerrera egin duen metrika isilean kendu ezin izan dezazun), eta **erakutsi lerro ez-onuragarriak** — albiste onak bakarrik dituen CCA marketina da. Erabili CCA konposatu defendagarririk ez dagoenean, garatzaile-tresnetan ia beti.

## Tranpak

- **Hautazko ondorioak** — formatuaren osotasuna aurrez zehazteak babesten du.
- **Agregazio ezkutua**: kolore-kodeketak edo "puntuazio orokorrak" CCAk saihesteko dagoen pisu arbitrarioak berriro sartzen dituzte.
- **Erabaki-paralisia**: CCAk trukeak neurtzeko prest dagoen erabaki-hartzailea behar du; lotu gomendio eta arrazoibide batekin.

## Iturriak

- NICE Evidence Standards Framework for digital health technologies (ECD7). <https://www.nice.org.uk/corporate/ecd7>
- ESF evidence standards tables. <https://www.nice.org.uk/corporate/ecd7/chapter/section-c-evidence-standards-tables>
