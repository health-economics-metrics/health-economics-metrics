# Economeg Uned Cwmwl (FinOps)

Mae economeg uned cwmwl yn trosi gwariant cwmwl crai yn **gost fesul uned allbwn** — fesul cwsmer, fesul trafodiad, fesul achos wedi'i ddatrys, fesul tocyn. Dyma'r gallu FinOps sy'n troi "mae ein bil AWS yn £400k/mis" yn "mae gwasanaethu un claf yn costio £0.83."

## Pam mae'n bwysig

Ni all ffigurau gwariant cyfan ateb y cwestiynau sy'n bwysig: a yw'r cynnyrch yn dod yn fwy neu'n llai effeithlon? A yw twf yn gwella neu'n dinistrio elw? Beth ddylem ei godi? Mae costau uned yn ateb y tri. Ar gyfer iechyd digidol yn benodol, mae "cost fesul achos wedi'i ddatrys" *yn* gost uned gwasanaeth iechyd — yn uniongyrchol gymharadwy â ffigurau'r [Casgliad Cost Cenedlaethol](../national-tariff-and-unit-costs/) y mae comisiynydd yn eu defnyddio ar gyfer pob gwasanaeth arall, sy'n ei gwneud yn iaith naturiol ar gyfer prisio llwybrau digidol yn erbyn rhai traddodiadol.

## Y mathemateg

```
Cost uned = cost cyfan wedi'i ddyrannu (gan gynnwys costau platfform/a rennir) / unedau a gyflenwyd

Dwy deulu:
  unedau effeithlonrwydd adnoddau: cost/GB wedi'i storio, cost/awr-vCPU, cost/tocyn,
                             cost/munud-adeiladu
  unedau busnes:            cost/cwsmer, cost/trafodiad, cost/ymgynghoriad,
                             cost/achos-wedi'i-ddatrys

Mae'r ddisgyblaeth ymylol vs cyfartalog yn berthnasol (marginal-vs-average-cost.md):
mae gwariant wedi'i ymrwymo/gadw'n golygu bod cost uned ymylol ≈ 0 hyd at gam
ymrwymo nesaf — prisiwch benderfyniadau ehangu ar sail ymylol, tueddiadau
effeithlonrwydd ar sail cyfartalog.
```

## Enghraifft wedi'i gweithio

Gwasanaeth triaets digidol: gwariant cwmwl £62,000/mis (cyfrifiadura £30k, data £18k, dyraniad platfform a rennir £14k), yn trin 380,000 o achosion triaets/mis:

```
Cost gyfartalog fesul achos = 62,000 / 380,000 ≈ £0.163

Cymhariaeth comisiynydd: triaets ffôn ≈ £8–12/alwad, ymgynghoriad meddyg teulu ≈ £42
→ mae'r achos digidol yn rhedeg ar ~2% o'r dewis arall dynol rhataf — economeg
y newid sianel yn gds-service-metrics.md, o ochr y gost.

Gwiriad tuedd: y llynedd £0.21/achos ar 240k achos → economeg raddfa'n
gwella (costau platfform sefydlog yn amorteiddio), yn werth pennawd yn yr adolygiad chwarterol.
```

## Cysylltiad â pheirianneg meddalwedd

Economeg uned yw'r man lle mae dewisiadau peirianneg yn dod yn ddarllenadwy'n ariannol: mae pensaernïaeth sy'n haneru'r gost fesul achos yn fantais brisio; mae un sy'n graddio'n uwch-linol yn fom amser sydd ond yn weladwy yn y metrig hwn. Arferion sy'n trosglwyddo o gostio iechyd: **cyhoeddwch y rheolau dyrannu** (roedd costau a rennir yn ystumio ffigurau fesul uned nes safonwyd costio ar lefel claf gan PLICS — mae angen yr un trylwyredd ar ddyraniad eich cost platfform); **dewiswch unedau y mae'r prynwr yn meddwl ynddynt** (mae comisiynwyr yn prynu achosion, nid vCPUs); a bwydwch gostau uned i mewn i bob model [ICER](../incremental-cost-effectiveness-ratio/) ac [effaith ar y gyllideb](../budget-impact-analysis/) fel yr enwadur cost awdurdodol. Ar gyfer nodweddion AI, y tocyn yw'r uned — gweler [economeg uned casgliad](../inference-unit-economics/).

## Peryglon

- **Anwybyddu costau a rennir**: mae costau uned sy'n eithrio dyraniadau platfform/diogelwch/ar alwad yn tanddatgan o 30–50% ac yn cwympo wrth eu harchwilio.
- **Enwaduron gwagedd**: mae "cost fesul galwad API" yn gwenieithu; mae "cost fesul achos claf cyflawn" yn hysbysu.
- **Prisio cost-gyfartalog ar benderfyniadau ymylol**: mae codi cost uned gyfartalog ar dimau am ddefnydd sydd ynghlwm yn rhad ac am ddim yn ymylol yn sbarduno theatr osgoi-gwastraff (gweler [tariff cenedlaethol](../national-tariff-and-unit-costs/) am fersiwn yr NHS o'r nam cymhelliant hwn).

## Ffynonellau

- Sefydliad FinOps, economeg uned. <https://www.finops.org/framework/capabilities/unit-economics/>
- Sefydliad FinOps, cyflwyniad i economeg uned cwmwl. <https://www.finops.org/wg/introduction-cloud-unit-economics/>
