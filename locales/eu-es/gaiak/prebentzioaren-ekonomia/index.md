# Prebentzioaren ekonomia (Prevention Economics)

Gaixotasuna sortu edo aurrera egin baino lehen esku-hartzearen ekonomia. Aurkikuntza nagusia intuizioaren aurkakoa da: **prebentzio gehienak ez du dirurik aurrezten**; osasuna prezio onean erosten du. Cohen, Neumann eta Weinsteinen NEJMko analisi mugarriak aurkitu zuen prebentzio-esku-hartzeen %20 baino gutxiago direla kostu-aurrezle garbiak; gainerakoak, onenean, kostu-eraginkorrak dira.

## Zergatik axola duen

"Prebentzioak dirua aurrezten du" osasun-politikako aldarrikapen faltsurik errepikatuena da, eta horretan oinarritutako negozio-kasuak osasun-ekonomialariek birrintzen dituzte. Egitura zintzoa: prebentzioak dirua kostatzen du orain (populazio osoak miatzea, inoiz gaixotuko ez liratekeen pertsonetan arrisku-faktoreak tratatzea) eta osasuna itzultzen du geroago, normalean QALY bakoitzeko kostu *on* batean, noizbehinka aurrezki batean, batzuetan prezio izugarri batean. Zein erregimenetan zauden jakitea da analisia. Bereizketak garrantzi komertziala du: "NHSri dirua aurrezten dio" gisa saldutako prebentzio-produktuak huts egingo duen auditoretza erakartzen du; "QALYak £4.000-n erosten ditu" gisa saldutakoak gertaera berdinekin irabaz dezake. Ikus [esku-hartze goiztiarra](../esku-hartze-goiztiarra/) bide barruko bertsiorako. Prebentzio-programa baten kostua kalkulatu aurretik, [populazioari egotzitako zatiak](../populazioari-egotzitako-zatia/) neurri-galdera erantzuten du lehenik: programak helburu duen arrisku-faktoreak zenbat ezabatu lezakeen xede den gaixotasun-zamatik.

## Matematika

```
Net cost of prevention (per person) =
    intervention cost × everyone treated
  − downstream costs avoided × the few who would have progressed
  (both discounted — the avoided costs are years away; see
   discounting-and-time-preference.md)

Cost-saving requires: intervention cost < P(progression) × avoided cost × discount factor
Cost-effective requires only: net cost / QALYs gained < threshold
```

Prebentzioaren paradoxa: esku-hartzearen kostua populazio osoan biderkatzen da; onurak kontrafaktuala den gutxiengoarentzat bakarrik pilatzen dira.

## Adibide landua

Hipertentsioa kudeatzeko aplikazio bat arrisku handiko 100.000 helduri eskaintzen zaie, £25/pertsona/urte. 10 urtetan 400 iktus saihesten ditu (bakoitzak £45.000 balio du eguneratuta, eta 3 QALY galtzen dira).

```
Cost:    100,000 × £25 × 10 yrs (discounted ≈ ×8.3) ≈ £20.8M
Offsets: 400 × £45,000 = £18.0M
Net cost ≈ £2.8M — NOT cost-saving

QALYs gained = 400 × 3 = 1,200
Cost per QALY = 2.8M / 1,200 ≈ £2,300/QALY — outstandingly cost-effective
```

Programa bera, bi egiak: £2,8M galtzen ditu eskudirutan eta osasuna NICEren atalasearen hamarren batean erosten du. Finantzatu bigarren zenbakiagatik; ez agindu inoiz lehena.

## Software ingeniaritzarekin lotura

Shift-left kalitatea prebentzioaren ekonomia da, kontuz-oharra barne. Berrikuspenek, probek eta analisi estatikoak kostua aplikatzen diete aldaketa *guztiei*, ekoizpen-intzidentzia bihurtuko ziratekeen gutxietan arazoak harrapatzeko. Akatsen kostu-kurbak (10–100× fasearen arabera) iktusen kostuen papera jokatzen du, eta ondorio zintzoak osasunekoa islatzen du: shift-left normalean kostu-*eraginkorra* da, ez automatikoki kostu-*aurrezlea*, markatutako arazo gehienak inoiz intzidentzia bihurtuko ez liratekeelako (kontrafaktualaren gutxiengoaren arazoa). Kalkulatu: aldi bakoitzeko ate-kostu osoa vs benetan saihestutako intzidentziak × intzidentzia-kostua: adibide landuaren egitura bera, [NNT](../tratatu-behar-den-kopurua/) harrapaketa bakoitzeko unitate gisa.

## Tranpak

- **Kostu-aurrezkiak aldarrikatzea ebidentziak kostu-eraginkortasuna bakarrik onartzen duenean** — prebentzioaren aldeko defentsaren akats definitzailea bi alorretan.
- **Etorkizuneko konpentsazioak eguneratu gabe**: 15 urtera dauden onurak nominalean hartzea.
- **Gaindiagnostikoaren/gaintratamenduaren kostuak alde batera uztea**: prebentzioak pseudo-gaixotasuna ere aurkitzen du; ikus [screening-aren ekonomia](../screening-aren-ekonomia/).

## Iturriak

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- Masters R, et al. "Return on investment of public health interventions." JECH 2017. <https://pmc.ncbi.nlm.nih.gov/articles/PMC5537512/>
