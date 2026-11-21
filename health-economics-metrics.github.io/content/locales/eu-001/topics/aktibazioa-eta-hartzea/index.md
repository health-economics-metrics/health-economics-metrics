# Aktibazioa eta hartzea (Activation and Uptake)

Aktibazio-tasa izen-emateen artean lehen balio esanguratsura (ekintza "aha": lehen irakurketa erregistratzea, lehen ikasgaia amaitzea) iristen direnen ehunekoa da. Hartzea (uptake) populazio-bertsioa da: populazio *egokiaren* zer ehunekok onartzen duen aplikazioa, besterik gabe. Biak batera balio-inbutuaren sarrerako ateak dira: eskuraketa → hartzea → aktibazioa → [atxikipena](../atxikipena-eta-uzte-tasa/) → emaitza.

## Zergatik axola duen

Aktibatu gabeko erabiltzaileak kostu hutsa dira: eskuraketa-gastua, hornidura, laguntza-azalera, eta balio klinikorik batere ez. Erreferentziek diote osasun-softwarearen aktibazioa sektore arteko batez bestekoaren *azpitik* dagoela (SaaS erreferentzia-multzo batean erabiltzaile berrien aktibazioa ≈%24 vs ≈%37; onboarding-egiaztapen-zerrendaren osatzea ~%20), onboarding astunagoa delako (identitatea, adostasuna, segurtasun klinikoa). Hartzeak populazio-mailako ondorioak ditu: [RE-AIM esparruan](../irismena-eta-ekitatea/), osasun publikoaren inpaktua ≈ irismena × eraginkortasuna; populazio egokiaren %3k hartutako aplikazio bikain batek populazioaren orratza %3ren neurrian bakarrik mugitzen du. Errezetatutako terapia digitaletan hartzearen atea nazio-mailako datuetan ikusten da: **Alemaniako DiGA errezeten ~%81 aktibatzen da**, hau da, errezetatutako eta ordaindutako bost tratamenduetatik batek ez du inoiz hasten (ikus [DiGA fast-track](../alemaniako-diga-fast-track/)).

## Matematika

```
Aktibazio-tasa = leihoaren barruan funtsezko ekintza egiten duten erabiltzaileak / izen-emateak × 100
Hartze-tasa    = hartzaileak / populazio egokia × 100
DTx betetze-tasa = aktibatutako errezeta-kodeak / jaulkitako errezetak × 100

Inbutuaren balio-eredua:
  egokiak × hartzea × aktibazioa × atxikipenaren arabera haztatutako onura = populazio-balioa
  — lau biderketa; faktore txikiena hobetzeak normalean
  gainontzeko guztiak menderatzen ditu (inbutuetarako murrizketen teoria)
```

## Adibide landua

Komisiodun batek diabetesaren prebentziorako aplikazio bat eskaintzen die 80.000 egoiliar egokiri:

```
Gonbidatuak → erregistratuak:  80,000 → 12,000  (hartzea %15)
Erregistratuak → aktibatuak (lehen saioa + helburua ezarrita, 7 egun): 12,000 → 5,400 (%45)
Aktibatuak → 6 hilabeteko programa osatu dutenak: 5,400 → 1,600 (%30)

Programaren efektua (saiakuntza, amaitzaileak): 0.03 QALY + £180 saihestutako kostu
Populazio-balioa = 1,600 × (0.03 × £20,000 + £180) ≈ £1.25M
Pertsona egoki bakoitzeko balioa = £15.6 — pertsona egoki guztiek amaituko balute £780 izango litzateke.

Non inbertitu? Hartzea bikoizteak (15→30%) balioa bikoizten du; aktibazioa
45→65% igotzeak ~%44 gehitzen du; biek hobeto funtzionatzen dute
1.600ek dagoeneko osatzen duten programaren edukia gehiago leuntzeak baino.
```

## Software ingeniaritzarekin lotura

Aktibazioa inbutuaren fase ingeniaritzaren aldetik landuenetakoa da: identitatea egiaztatzeko marruskadura, adostasun-fluxuak, egoera hutsen diseinua eta lehen balioraino behar den denbora kodea dira, ez politika (osasun-sektorean lehen baliora iristeko denbora mediana ≈ 1 egun eta 7 ordu da erreferentzia-datuetan; ordu bakoitza abandonu-esposizioa da). Hartzea banaketa-sistemen arazoa da: bide-deribazioetan integratzea (errezeta-unea), ohiko medikuak onartutako gonbidapenak (konfiantza transferitzen da) eta irisgarritasuna (hizkuntza, trebetasun digitalak — ikus [irismena eta ekitatea](../irismena-eta-ekitatea/)). Goiko inbutuaren balio-eredua bietarako negozio-kasuen sorgailua da: biderkatu faktoreak, aurkitu murrizketa, eta jarri konponketaren prezioa askatzen duen populazio-balioaren aurrean.

## Tranpak

- **Aktibazioa erosotasun gisa definitzea** (posta egiaztatuta) esanahi klinikoaren (lehen ekintza terapeutikoa) ordez: metrika puztu egiten du eta balio-katea hautsi.
- **Hartzearen izendatzailearen trikimailuak**: "webgunea bisitatu dutenen artean" vs benetan populazio egokiaren artean; komisiodunek azkenekoa begiratzen dute.
- **Hautaketa-efektuak**: aktibatzen errazenak gaixotasun eta pobrezia gutxien dutenak dira; inbutuaren hobekuntzek ekitate-hutsuneak handi ditzakete batez bestekoak hobetzen dituzten bitartean.

## Iturriak

- Activation benchmarks (healthcare SaaS). <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
- DiGA activation data, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
- RE-AIM framework. <https://re-aim.org/>
