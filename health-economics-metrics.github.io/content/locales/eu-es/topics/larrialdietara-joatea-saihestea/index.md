# Larrialdietara joatea saihestea (Emergency Attendance Avoidance)

Larrialdietara joatea saihesteak gorako esku-hartzeek — triage aplikazioak, urruneko monitorizazioa, ospitale birtualak, larrialdi-arreta birbideratzea — saihestutako ED (A&E) bisitak eta larrialdi-ospitalizazioak zenbatzen ditu. "Lehenago harrapatu dugu" kostuztatutako aldarrikapen bihurtzen du.

## Zergatik axola duen

Larrialdi-arreta sistemako ohiko ingurune garestiena da (ED joatearen unitate-kostuak £250–£400 inguruan National Cost Collection / PSSRU zifren arabera; larrialdi-ospitalizazio batek milaka), eta ED pilaketak anbulantzia-atzerapenak eta aukerako kirurgia bertan behera uztea eragiten du. Eskaria gorantz segurtasunez konpontzen duen edozerk — autozaintza-aholkuak, egun bereko lehen mailako arreta, erantzun komunitarioa — sistemari ahalmena erosten dio bere puntu estuenean. Hau sintoma-egiaztatzaileen, 111 estiloko triage-zerbitzuen eta [urruneko pazienteen monitorizazioaren](../urruneko-pazienteen-monitorizazioaren-ekonomia/) onura-lerro estandarra da.

## Matematika

```
Saihestutako bisitak = populazioa × (oinarrizko tasa − esku-hartzearen tasa)
Aurrezki gordina     = saihestutako bisitak × bisita bakoitzeko unitate-kostua
                       (+ saihestutako ospitalizazioak × ospitalizazio-kostua, bereizita zenbatuta)

Aurrezki garbia      = aurrezki gordina − esku-hartzearen kostua − bide berriaren erabileraren kostua
                       (birbideratutako eskaria ez da doakoa: 111 dei batek, GP txanda batek,
                        ospitale birtualeko egun batek unitate-kostuak dituzte)
```

Aldarrikapen kausalak konparatzailea behar du: bisita-tasek joera eta sasoi-aldaketak dituzte, beraz aurretik/ondoren bakarrik ez da ezer frogatzen.

## Adibide landua

Arrisku handiko 3.000 pazienteentzako COPD urruneko monitorizazio zerbitzu bat. Kontrol parekatuko ebaluazioak erakusten du larrialdiekin lotutako ED bisitak 0.9tik 0.7ra jaisten direla paziente-urteko, eta larrialdi-ospitalizazioak 0.5etik 0.42ra.

```
Saihestutako bisitak       = 3,000 × 0.2  = 600 × £300   = £180,000
Saihestutako ospitalizazioak = 3,000 × 0.08 = 240 × £3,800 = £912,000
Gordina                                                   £1,092,000/urte

Kostuak: monitorizazio-zerbitzua £600,000; erizain komunitarioen erantzun gehigarriak £150,000
Garbia ≈ +£342,000/urte — gehi lehenago tratatutako okerretze-aldien QALY irabaziak.
```

Kontuan izan ospitalizazio-lerroak menderatzen duela: bisitak saihesteak bakarrik gutxitan ordaintzen du monitorizazio-zerbitzu bat; *ospitalizazioak* saihestean dago dirua.

## Software ingeniaritzarekin lotura

Hau **intzidentziak saihesteko ekonomia** da. Observabilitatearen, canary hedapenen eta alerta goiztiarreko sistemen balioa "larrialdietara joate" saihestuak dira — pageak, war room-ak, sev-1ak —, bakoitza kostu osoarekin (ingeniari-orduak × tasa + bezeroen inpaktua). Modelatze-arau berak aplikatzen dira: kendu gorako bide berriaren kostua (alerten triagea ez da doakoa), kontuz ordezkapenarekin (intzidentziak saihestu gabe lana sortzen duten alertak osasun-antsietatea dira, ez osasuna), eta frogatu kontrafaktikoa kontrol batekin (taldeen intzidentzia-tasek joera dute eta batez bestekora itzultzen dira, ED bisitak bezalaxe).

## Tranpak

- **Batez bestekora itzulera**: urte txar batean hautatutako arrisku handiko kohorteak tratatu gabe hobetzen dira; kontrol parekatuak edo stepped-wedge diseinuak ezinbestekoak dira.
- **Eskaintzak eragindako eskaria**: triage digital errazak kontaktu *guztiak handi* ditzake (laguntza bilatzeko atalase baxuagoa) ED zatia jaisten duen bitartean — zenbatu sistemaren kostu osoa.
- **Bisitak batez besteko kostuan balioestea** ED kostu finkoak jaisten ez direnean — ikus [kostu marjinala vs batez bestekoa](../kostu-marjinala-vs-batez-bestekoa/).

## Iturriak

- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
