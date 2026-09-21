# Effaith Rhestr Aros

Mae effaith rhestr aros yn trosi gallu clinigol a arbedwyd yn gleifion sy'n cael eu tynnu oddi ar (neu eu symud yn gynt trwy) y rhestr aros. Mae trosi oriau a arbedwyd yn slotiau clinig ychwanegol yn lleihau maint rhestr aros ymddiriedolaeth yn uniongyrchol — y ffordd fwyaf diriaethol o ddangos i system iechyd beth yw *diben* gallu a ryddhawyd.

## Pam mae hyn yn bwysig

Y rhestr aros ddewisol yw her ddiffiniol y GIG ar ôl y pandemig (mae ei maint yn fetrig gwleidyddol cenedlaethol), ac mae pob ymddiriedolaeth yn rhedeg rhaglen adfer ddewisol yn ei herbyn. Mae achos busnes sy'n dweud "yn arbed 2,000 o oriau nyrs" yn haniaethol; mae un sy'n dweud "yn creu 4,000 o slotiau apwyntiad ychwanegol, yn gweld 3,800 o gleifion sy'n aros, yn torri rhestr y sbesialaeth 9%" yn stori y gall Prif Swyddog Gweithredol ei chyflwyno i'w fwrdd. Effaith rhestr aros yw'r *uned gyfrif* naturiol ar gyfer [gallu nad yw'n rhyddhau arian parod](../cash-releasing-vs-non-cash-releasing/).

## Y Fathemateg

```
Slotiau ychwanegol   = oriau a ryddhawyd / hyd slot × defnydd
Cleifion a welwyd    = slotiau ychwanegol × (1 − cyfradd DNA)
Gostyngiad rhestr    = cleifion a welwyd − galw newydd anwythol
Enillion amser aros  = gwelliant ciwio o gyfradd wasanaeth uwch
                        (ar gyfer ciwiau sefydlog, mae torri'r ôl-groniad N
                        gan ΔN ar gyfradd wasanaeth μ yn tynnu pawb ymlaen ~ΔN/μ)
```

Gwerth iechyd arosiadau byrrach: mae cleifion yn treulio llai o wythnosau yn y cyflwr defnyddioldeb is cyn-triniaeth — y rhifyddeg QALY yn [atgyfeirio i driniaeth](../referral-to-treatment/).

## Enghraifft Waith

Mae meddalwedd dogfennaeth amgylchynol yn arbed 45 munud/dydd i bob un o 20 nyrs clinig. Dros 250 diwrnod: 20 × 0.75 × 250 = 3,750 awr/blwyddyn.

```
Slotiau (30 munud, 85% defnyddiadwy) = 3,750 / 0.5 × 0.85 = 6,375 slot
Cleifion a welwyd (7% DNA)           = 6,375 × 0.93       ≈ 5,929/blwyddyn
```

Ar gyfer sbesialaeth â rhestr o 12,000 o gleifion a 24,000 o apwyntiadau/blwyddyn o allu sy'n cyfateb i'r galw, mae ~5,900 o apwyntiadau ychwanegol yn torri arosiadau cyfartalog tua chwarter — gan symud yr ymddiriedolaeth yn sylweddol tuag at y safon 18 wythnos heb recriwtio. Ar werth cynllun o ~£160 fesul presenoldeb mae'r gweithgarwch yn werth ~£949,000/blwyddyn (gweler [tariff cenedlaethol a chostau uned](../national-tariff-and-unit-costs/)) — ond cyflwynwch fframio'r *rhestr aros* yn gyntaf; dyna'r un y mae'r system yn cael ei rheoli arni.

## Cysylltiad Peirianneg Feddalwedd

Mae rhestr aros yn ôl-groniad, ac mae economeg llosgi ôl-groniadau'n trosglwyddo i'r ddau gyfeiriad. O iechyd i feddalwedd: prisiwch ostyngiad ôl-groniad yn ôl pa mor hir y mae *defnyddwyr* yn aros am werth, nid yn ôl eitemau a gaewyd ([cost oedi](../cost-of-delay/) fesul eitem sydd yn y ciw). O feddalwedd i iechyd: mae Deddf Little yn dweud mai dim ond os yw'r gyfradd wasanaeth yn fwy na'r gyfradd gyrraedd y bydd y rhestr yn crebachu — mae enillion gallu a amsugnir gan atgyfeiriadau cynyddol yn gadael arosiadau'n ddigyfnewid, felly modelwch gyrhaeddiadau hefyd. Ac yn y ddau faes, blaenoriaethwch yn ôl gwerth wedi'i bwysoli yn ôl difrifoldeb (categorïau brys clinigol ↔ [addasyddion difrifoldeb](../qaly-shortfall-and-severity-modifiers/)), nid yn ôl cyntaf-i-mewn-cyntaf-allan.

## Peryglon

- **Slotiau ≠ cleifion**: anghofio cyfraddau DNA a darnau anddefnyddiadwy o amser a ryddhawyd.
- **Galw anwythol**: mae gallu ychwanegol gweladwy'n denu atgyfeiriadau; mae effaith net ar y rhestr yn llai na'r effaith gros.
- **Hawlio arian parod**: gwerth gallu yw effaith rhestr aros; mae'r hawliad arian parod (osgoi allanoli gwaith ôl-groniad) yn llinell wahanol — gweler [costau allanoli y gellir eu hosgoi](../avoidable-outsourcing-costs/).

## Ffynonellau

- GIG Lloegr, ystadegau amseroedd aros RTT. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- GIG Lloegr, cynllun adfer gofal dewisol. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
