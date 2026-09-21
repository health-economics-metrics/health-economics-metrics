# Hyd Arhosiad (LOS)

Hyd arhosiad yw nifer y dyddiau o dderbyniad i'r ysbyty hyd at ryddhau — y prif fetrig effeithlonrwydd llif mewn gofal cleifion mewnol. Mae cyfartaleddau achos acíwt y DU o gwmpas 4–5 diwrnod; mae pob diwrnod dros ben yn defnyddio gwely prin ac yn agored y claf i risgiau a gaffaelwyd yn yr ysbyty.

## Pam mae hyn yn bwysig

Mae LOS yn gyrru bron popeth mewn economeg ysbytai acíwt: capasiti gwelyau, trwygyrch dewisol, llif brys, staffio. Mae lleihau'r LOS cyfartalog hyd yn oed o ffracsiynau o ddiwrnod ar raddfa fawr yn rhyddhau capasiti aruthrol (gweler [diwrnodau gwely a arbedwyd](../bed-days-saved/)). Mae LOS hefyd yn arwydd ansawdd yn y ddau gyfeiriad — mae'n rhy hir yn awgrymu methiant proses (diagnosteg oedi, papurau rhyddhau, arosiadau gofal cymdeithasol); gall yn rhy fyr olygu rhyddhau cynamserol, sy'n ymddangos yn ddiweddarach fel [ail-dderbyniadau](../readmission-rate/).

## Y Fathemateg

```
LOS (fesul cyfnod) = dyddiad rhyddhau − dyddiad derbyn
LOS cyfartalog      = diwrnodau gwely a feddiannwyd / rhyddhau (adroddwch y cymedr A'R canolrif;
                   mae LOS wedi'i sgiwio'n drwm i'r dde gan werthoedd eithafol arhosiad hir)

Mae cymariaethau'n gofyn am addasiad cymysgedd achosion (oedran, diagnosis, difrifoldeb),
neu rydych yn mesur pwy y mae'r ysbyty'n eu derbyn, nid sut mae'n perfformio.
```

Mae Deddf Little yn cysylltu'r newidynnau llif: `gwelyau a feddiannwyd = cyfradd dderbyn × LOS cyfartalog` — yr un ddeddf sy'n rheoli ciwiau meddalwedd (gweler [metrigau llif](../flow-metrics/)).

## Enghraifft Waith

Mae ymddiriedolaeth yn derbyn 40 o gleifion meddygol brys/dydd ar LOS cymedrig o 6.0 diwrnod: 240 gwely wedi'u meddiannu'n barhaol (40 × 6). Mae meddalwedd cydgysylltu rhyddhau (tracio tasgau, awtomeiddio fferylliaeth-i-fynd, archebu trafnidiaeth) yn torri cynffon anghlinigol yr arosiadau o 0.4 diwrnod ar gyfartaledd.

```
Gwelyau sydd eu hangen = 40 × 5.6 = 224 → 16 gwely wedi'u rhyddhau'n barhaus
            = 16 × 365 = 5,840 diwrnod gwely/blwyddyn
```

Prisiwch y 5,840 diwrnod gwely yn ôl mecanwaith (ail-lenwi/cau/llacrwydd) yn unol â [diwrnodau gwely a arbedwyd](../bed-days-saved/). Sylwch beth symudodd: nid meddygaeth, ond *aros* — roedd y claf yn feddygol iach; roedd y system yn dal i wneud papurau. Mae hynny'n broblem ciwio, ac mae meddalwedd yn dda am broblemau ciwio.

## Cysylltiad Peirianneg Feddalwedd

LOS yw amser cylchred yr ysbyty, ac mae'r llyfr chwarae gwella'n union yr un fath â gwaith llif-cyflenwi: offeryna'r camau (derbyn → trin → meddygol-iach → wedi'i ryddhau go iawn), dod o hyd i ble mae amser yn pentyrru (y trosglwyddiadau ydyw), tynnu cyflyrau aros yn hytrach nag ychwanegu capasiti. Mae'r garfan "yn feddygol iach ar gyfer rhyddhau ond yn dal i feddiannu gwely" yn fersiwn yr ysbyty o PR sydd wedi'i gymeradwyo ond heb ei uno. Cyfleoedd meddalwedd uniongyrchol: cydgysylltu tasgau rhyddhau, trosiant diagnostig, rhagnodi electronig meddyginiaethau rhyddhau, integreiddio atgyfeiriadau gofal cymdeithasol.

## Peryglon

- **Adrodd y cymedr yn unig** — mae gwerthoedd eithafol yn dominyddu; gall cymedr sy'n gostwng guddio cynffon arhosiad hir sy'n tyfu.
- **Dim addasiad cymysgedd achosion** mewn honiadau cyn/ar ôl: mae trothwyon derbyn yn newid yn dymhorol ac yn seciwlar.
- **Gostyngiad LOS sy'n ailymddangos fel ail-dderbyniad** — parwch honiadau LOS bob amser â data ail-dderbyn 30 diwrnod.

## Ffynonellau

- OECD, dangosydd hyd arhosiad ysbyty. <https://www.oecd.org/en/data/indicators/length-of-hospital-stay.html>
- GIG Lloegr, Casgliad Cost Cenedlaethol. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
