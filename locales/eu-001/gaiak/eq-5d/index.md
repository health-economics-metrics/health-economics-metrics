# EQ-5D

EQ-5D EuroQol taldearen osasunarekin lotutako bizi-kalitatea neurtzeko galdetegi estandarizatua da. [QALY](../kalitatez-doitutako-bizi-urtea/) kalkulu gehienen barruko utilitate-pisuak sortzen dituen tresna da — NICEren erreferentzia-kasuak helduentzako neurri hobetsia izendatzen du.

## Zergatik axola duen

QALYak aldarrikatu nahi dituen osasun digitaleko edozein produktuk tresna balioztatu baten utilitateak behar ditu, eta EQ-5D da Erresuma Batuan eta Europa gehienean lehenetsia. Aplikazio batean txertatzeko bezain laburra da (5 galdera + eskala bisuala), eta horrek esan nahi du software-produktuek HTA mailako emaitza-datuak bil ditzaketela ohiko erabileraren albo-ondorio gisa — sendagaien aldean abantaila estrukturala, azterketa dedikatuak behar dituztenak.

## Matematika

EQ-5D-5Lk galdera bat egiten du **5 dimentsio** bakoitzean — mugikortasuna, norberaren zaintza, ohiko jarduerak, mina/deserosotasuna, antsietatea/depresioa —, bakoitza **5 mailatan** erantzunda (arazorik ez … arazo muturrekoak), gehi 0–100eko eskala analogiko bisuala (EQ VAS).

```
Osasun-egoera = 5 digituko profila, adib. "21221"
Utilitate-indizea = value_set(profila)

Balio-multzoa herrialde-espezifikoa da, publiko orokorraren time-trade-off /
aukera diskretuko inkestetatik eratorria. Ainguratzeak: 1 = osasun osoa,
0 = hila; heriotza baino okerragoak diren egoerak negatiboak dira (UK 3L multzoaren zorua: −0.594).
```

QALY aritmetika gero `iraupena × utilitatea` gisa doa.

## Adibide landua

Muskulu-eskeletiko errehabilitazioko aplikazio batek EQ-5D-5L neurtzen du onboardingean eta 6 hilabetera, amaitzen duten 1.000 erabiltzailerentzat.

```
Batez besteko utilitatea oinarrian:  0.62
Batez besteko utilitatea 6 hilabetera: 0.71
Irabazia 1 urtez jarraitua (suposatuta): (0.71 − 0.62) × 1.0 = 0.09 QALY erabiltzaileko
```

Kontrol-taldearen 0.03ko aldaketaren aurka (berreskuratze naturala), egotz daitekeen irabazia 0.06 QALY/erabiltzaile da. £20,000–£30,000/QALYn monetizatuta: **£1,200–£1,800 osasun-balio amaitzen duen erabiltzaile bakoitzeko** — aplikazioaren prezio-negoziazioa ordaintzaile batekin ainguratzen duen zenbakia. (EQ-5D indizearen aldaketa kliniko garrantzitsu minimoak 0.03–0.08 tartean izan ohi dira, beraz 0.06 sinesgarria da baina kontrol-konparaketa gainditu behar du; ikus [pazienteek jakinarazitako emaitzak](../pazienteek-jakinarazitako-emaitzak/).)

## Software ingeniaritzarekin lotura

- **Instrumentatu.** EQ-5D izen-ematean eta jarraipen-tarteetan UI pantaila gutxi dira; sariak HTA mailako ebidentzia da. Lortu lizentzia EuroQoletik (beharrezkoa, erabilera batzuetarako doakoa).
- **Erabili balio-multzo egokia** hedapen-herrialderako — erantzun berberek puntuazio desberdina dute Erresuma Batuan, Alemanian eta Japonian.
- **Diseinu-ikasgaia**: EQ-5Dk erakusten du inkesta estandarizatu txiki batek eta argitaratutako puntuazio-funtzio batek indize bakar alderagarria nola sortzen duten. Hori da garatzaile-esperientziako indize sinesgarri orokorrerako eredua ere — tresna estandarizatua, pisu argitaratuak, ez inpresio ad-hoc. Ikus [SPACE eta DevEx](../space-eta-devex/).

## Tranpak

- **Aurretik/ondoren konparatzailerik gabe** — batez bestekora itzulerak eta berreskuratze naturalak irabazi inozoak puztzen dituzte.
- **Bizirauletza-alborapena**: engaged geratu diren erabiltzaileak bakarrik neurtzea (ikus [atxikipena eta abandonua](../atxikipena-eta-uzte-tasa/)).
- **3L eta 5L bertsioak edo balio-multzoak nahastea** azterketa artean — sistematikoki zenbaki desberdinak.
- **Sabai-efektuak** neurriz kaltetutako populazioetan: erabiltzaile askok ia 1.0 puntuatzen dute oinarrian, irabazia frogatzeko tarterik utzi gabe.
- **Balio-multzoa bere buruaren justifikazio gisa tratatzea**: balio-multzo batek itzultzen dituen utilitate-zenbakiak berak publikoari time-trade-off (edo aukeran oinarritutako antzeko) inkesten bidez lortu ziren — ikus [Time Trade-Off (TTO) utilitatearen lorpena](../denbora-trukaketa-tto-erabilgarritasunaren-elikadura-time-trade-off-tto-utility-elicitation/) nola.

## Iturriak

- EuroQol: EQ-5D-5L. <https://euroqol.org/information-and-support/euroqol-instruments/eq-5d-5l/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
