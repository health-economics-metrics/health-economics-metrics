# Atgyfeirio i Driniaeth (RTT)

Atgyfeirio i driniaeth yw'r amser sy'n mynd heibio o atgyfeiriad meddyg teulu i ddechrau triniaeth dan arweiniad ymgynghorydd. Mae Cyfansoddiad y GIG yn gosod y safon: dylai **92% o gleifion ddechrau triniaeth o fewn 18 wythnos**. RTT yw'r metrig gweithredol sengl mwyaf gweladwy'n wleidyddol yn y GIG yn Lloegr.

## Pam mae hyn yn bwysig

Mae ymddiriedolaethau sy'n methu targedau RTT yn wynebu craffu rheoleiddiol, ymyrraeth, a niwed i enw da; mae'r rhestr aros genedlaethol yn rhif tudalen flaen. Mae pob wythnos y mae claf yn aros yn iechyd a gollwyd (aros mewn cyflwr iechyd gwaeth — gweler mathemateg y QALY isod) ac yn aml yn gost a enillwyd (mae cyflyrau'n gwaethygu; gweler [ymyrryd yn gynharach](../earlier-intervention/)). Mae meddalwedd sy'n arbed amser yn unrhyw le yn llwybr atgyfeirio i driniaeth — trearn, tro amser diagnosteg, capasiti clinig, amserlennu — yn lliniaru'n uniongyrchol ganlyniadau gweithredol ac ariannol methu'r safon, a dyna pam mae effaith RTT yn llinell budd dosbarth cyntaf mewn achosion busnes digidol y GIG.

## Y Fathemateg

```
Perfformiad RTT = cleifion a drinwyd o fewn 18 wythnos / cyfanswm a drinwyd × 100
Cost iechyd amser aros fesul claf = hyd aros × (defnyddioldeb_wedi_trin − defnyddioldeb_aros)

Golwg llwybr: RTT = Σ hyd pob cam (trearn atgyfeirio → apwyntiad cyntaf →
diagnosteg → penderfyniad → triniaeth) — gwellwch y ciw hiraf, nid y cam
mwyaf prysur (gweler flow-metrics.md).
```

## Enghraifft Waith

Mae arbenigedd yn trin 5,000 o gleifion llwybr/blwyddyn; aros cymedrig 24 wythnos; defnyddioldeb aros 0.68 yn erbyn wedi'i drin 0.80.

Mae trearn digidol ynghyd â phrotocolau syth-i-brawf yn dileu 5 wythnos o giwio pur:

```
Ennill QALY = 5,000 × (5/52) × (0.80 − 0.68) = 57.7 QALY/blwyddyn
Wedi'i ariannoli yn £20,000–£30,000/QALY (gweler willingness-to-pay-thresholds.md):
  ≈ £1.15M–£1.73M/blwyddyn o werth iechyd
```

— ynghyd â bod yr ymddiriedolaeth yn symud o dorri i fodloni'r safon 18-wythnos, sydd â gwerth llywodraethu na all unrhyw daenlen ei ddal yn llawn.

## Cysylltiad Peirianneg Feddalwedd

Mae RTT yn **fetrig amser arwain dros giw aml-gam** — fersiwn yr ysbyty o amser arwain ymrwymo-i-gynhyrchu (gweler [metrigau DORA](../dora-metrics/)). Mae'r dull gwella'n union yr un fath: offerynnwch bob cam, dewch o hyd i le mae amser calendr yn pyllu (bron bob amser yn drosglwyddiadau a chiwiau, nid gwaith clinigol), a dileu cyflyrau aros. Enillion meddalwedd nodweddiadol: e-drearn sy'n llwybro atgyfeiriadau o fewn oriau yn hytrach na bysh wythnosol, gwthio canlyniadau diagnostig yn hytrach nag apwyntiadau dilyniant, a meini prawf syth-i-brawf wedi'u hawtomeiddio. Priswch y gwelliant â [chost oedi](../cost-of-delay/) wedi'i fesur mewn QALY/wythnos.

## Peryglon

- **Gwella cam nad yw'n gyfyngiad** — mae torri arosiadau apwyntiad cyntaf tra bo ciwiau diagnosteg yn tyfu yn symud y pwll yn unig.
- **Chwarae gêmau**: gall ailosod llwybrau a seibiannau cloc wella RTT a adroddir heb drin unrhyw un yn gynt; archwiliwch y dosraniad sylfaenol.
- **Hawlio'r gwelliant llwybr cyfan** ar gyfer un erfyn pan laniodd sawl newid gyda'i gilydd — mae angen cymharydd ar gyfer priodoliad.

## Ffynonellau

- NHS England, ystadegau amseroedd aros RTT. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, cynllun adfer gofal etholedig. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
