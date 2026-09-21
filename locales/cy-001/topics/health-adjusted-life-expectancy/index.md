# Disgwyliad Oes wedi'i Addasu ar gyfer Iechyd (HALE)

Mae HALE yn grynodeb ar lefel poblogaeth: nifer y blynyddoedd y gall unigolyn ddisgwyl byw *mewn iechyd llawn*, gan ddidynnu blynyddoedd a dreuliwyd mewn salwch neu anabledd. Roedd HALE byd-eang adeg genedigaeth tua 61.9 mlynedd o gymharu â disgwyliad oes o 73.3 (data WHO, 2019) — mae dynoliaeth yn byw ei degawd olaf, ar gyfartaledd, mewn iechyd llai na llawn.

## Pam mae'n bwysig

HALE yw metrig seren-y-gogledd polisi iechyd cenedlaethol a byd-eang — rhifiadur targedau "heneiddio'n iach", a'r bwlch y mae'n ei ddatgelu (disgwyliad oes minws HALE) yw'r baich y mae atal, ymyrraeth gynnar, a rheoli clefydau cronig yn anelu at ei gau. Mae strategaethau iechyd digidol ar lefel weinidogol yn cael eu cyfiawnhau yn nhermau HALE; mae portffolio o apiau, gwasanaethau sgrinio, a rhaglenni monitro yn y pen draw'n cronni yma.

## Y mathemateg

Y cyfrifiad safonol yw **dull Sullivan**:

```
HALE_oedran_x = Σ (blynyddoedd-person tabl bywyd ym mhob oedran ≥ x × cyfran
                  mewn iechyd llawn) / goroeswyr yn oedran x

"cyfran mewn iechyd llawn" = 1 − Σ (cyffredinrwydd_cyflwr × pwysau anabledd)
```

Mewnbynnau: tabl bywyd safonol ynghyd â chyffredinrwydd a phwysau anabledd ar gyfer cyflyrau iechyd (o ddata Global Burden of Disease). Mae HALE yn ymwneud â [DALYs](../disability-adjusted-life-year/) — mae baich DALY poblogaeth a'r bwlch HALE yn ddau olwg ar yr un iechyd a gollwyd.

## Enghraifft wedi'i gweithio

Rhaglen pwysedd gwaed uchel ddigidol genedlaethol: 500,000 wedi cofrestru, mae rheolaeth pwysedd gwaed cyfartalog yn gwella digon i dorri achosion strôc o 0.2 pwynt canran/blwyddyn. Wedi'i fodelu dros oes y garfan, mae strociau a osgowyd yn arbed 15,000 o flynyddoedd wedi'u pwysoli-anabledd (YLD ar bwysau 0.32 ynghyd â YLL o strociau angheuol).

```
Cyfraniad HALE ≈ 15,000 o flynyddoedd iach / 500,000 o bobl
              ≈ 0.03 blwyddyn (≈ 11 diwrnod) o HALE fesul person cofrestredig
```

Mae un ar ddeg diwrnod yn swnio'n fach — ond ar raddfa boblogaeth dyna sut mae metrigau cenedlaethol yn symud go iawn: mae gweinidogaethau'n prynu miliynau o enillion bach fesul person. Mae'r rhifyddeg hon hefyd yn dangos pam mae **cyrhaeddiad yn dominyddu**: mae ymyrraeth ddwywaith mor effeithiol gydag un rhan o ddeg o'r cofrestriad yn symud HALE bum gwaith yn llai. Gweler [cyrhaeddiad a chydraddoldeb](../reach-and-equity/).

## Y cysylltiad â pheirianneg feddalwedd

Mae HALE yn batrwm metrig iechyd-fflyd: **disgwyliad oes gwasanaeth × cyfran o'r oes honno a dreuliwyd yn iach**. Gall tîm platfform gyfrifo "disgwyliad oes gwasanaeth iach" ar draws ei ystâd: blynyddoedd y disgwylir i wasanaeth redeg, wedi'u didynnu yn ôl amser a dreuliwyd mewn cyflyrau diraddiedig, anghymeradwyedig, neu ddigwyddiad (pwysau o ddiffyg SLO). Mae'n ail-fframio dibynadwyedd o argaeledd pwynt-mewn-amser i iechyd oes, ac yn cyfeirio unioni at y systemau sy'n llusgo HALE yr ystâd i lawr.

## Peryglon

- **Mae HALE yn symud yn araf ac yn amlachosol** — nid oes unrhyw ymyrraeth sengl yn "symud HALE" mewn modd mesuradwy; hawliwch y cyfraniad a fodelwyd, nid yr ystadegyn cenedlaethol.
- **Mae data cyffredinrwydd yn hwyrfrydig** flynyddoedd y tu ôl; ni fydd enillion diweddar yn ymddangos yn HALE swyddogol.
- **Cymharu HALE ar draws gwledydd** gyda mesuriad cyflwr iechyd gwahanol yn dwyllodrus; defnyddiwch ef yn hydredol o fewn un system.

## Ffynonellau

- WHO indicator registry: HALE. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/66>
- Global Burden of Disease study (IHME). <https://www.healthdata.org/research-analysis/gbd>
