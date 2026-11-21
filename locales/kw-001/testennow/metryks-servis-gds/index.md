# Metryks Servis GDS

Lyver-dornlyver Servis Medhelweyth Government Digital Service (GDS) an Rewlm Unys a arghas peswar KPI rag kenyver servis nombrek governans: **kost rag treuswerth, plesyans devnydhyer, ratyo kowlwrans, ha degemeryans nombrek**. Warbarth yns an ekonomek byghanna a servis nombrek poblek — ha'n patrom may hwra servisow nombrek NHS ervynnya.

## Perag yth yw posek

Metryks GDS a vri kas besneth treuswerth-kanel a arghansas dekvledhydhyow a nombrekhe governans: Derivas Effeythusnans Nombrek a gavas treuswerthyow nombrek ~20× es ages pellgows ha ~50× es ages dirag-dirag (figuryow governans leel: gwiasva £0.15, pellgows £2.83, dirag-dirag £8.62). Mes an sawyansow a dheu yn unnik pan wra tus *kowlwul* an viaj nombrek (ratyo kowlwrans) *yn le a'n kanel kostus* (degemeryans) — an peswar KPI yw unn patrom ekonomek, na ny yw peswar dashbord.

## An Matematik

```
Kost rag treuswerth = kost servis oll / treuswerthyow kowlwrys
Ratyo kowlwrans     = kowlwrys / dallethys treuswerthyow × 100
Degemeryans nombrek = treuswerthyow nombrek / treuswerthyow oll kanelyow × 100
Plesyans devnydhyer = % plesys+pur blesys (5-poynt, sondyans y'n servis)

Sawyans treuswerth-kanel = kyfrol × shift degemeryans × (kost_kanel_koth − kost_nombrek)
… minus demmand fyll: (1 − ratyo kowlwrans) × kost kanel dasvyrya
```

## Ensampel gwrys

Servis maynans apoyntyans NHS: 2M treuswerth/bledhen, lemmyn 70% pellgows (£3.20/galwans) / 30% nombrek (£0.25). Dasdyssynyans a dhrehedh degemeryans nombrek dhe 55% ha kowlwrans dhort 84% dhe 93%:

```
Sawyans shift degemeryans = 2M × 0.25 × (3.20 − 0.25) = £1,475,000/bledhen

Sawyans demmand-fyll: viajow nombrek fyllys a dhasvyrya dhe bellgows
  kyns:  2M × 0.30 × 0.16 × £3.20 = £307,200
  wosa:  2M × 0.55 × 0.07 × £3.20 = £246,400
  nett £60,800/bledhen — gwellheansow kowlwrans a withi an gwaynyow degemeryans

Plesyans yw an menegva a-rag: devnydhyoryon displesys a dhasvyrya dhe bellgows,
ytho koll plesyans a ragwel koll degemeryans kyns y vos gweladow.
```

## Kolm gans ynjynnyans medhelweyth

An peswar KPI ma yw ensampel nivel-produksyon a [dabel kost-sewyans](../analys-kost-sewyans/): unn metrik kost, tri metrik sewyans, bythkweth heb kuntelles dhe skor. Rag ynjynnoryon produkt, an dyskasow oberyes: **kowlwrans yw kudyn instrumentya kanel** (pub poynt dilyans yw kavadow ha sawyadow); **kost rag treuswerth yw [ekonomek unys skeul](../ekonomek-unys-skeul/)** ha kostow kanel gweresys-gans-denel; **degemeryans yw metrik kehaval yn kudh** — an devnydhyoryon na yll na vynn shiftya kanel yw yn anheveleb koth, diskwir ha diswythus, ytho degya kanel kref a dreyl "sawyansow" dhe dhrog kavadowder (gwelewgh [hedhyans ha kehaval](../hedhes-hag-ekwita/)). Dyllas KPI (GOV.UK a wra, rag pub servis) yw mekanika yn y honan: displegyans a rewl ragwelyansow kepar dell wra awdits [kowlwrans prowyow](../kowlwrians-prowyow/).

## Fowtys Kemmyn

- **Degemeryans dre fors**: degya an linenn pellgows a dhrehedh degemeryans ha tewlel demmand-fyll war staff dhirek; musurewgh kost system kowl.
- **Kowlwrans musurys dhort folen-2**: dallethya an kanel wosa poynt an dilyans a ormens an ratyo.
- **Kost rag treuswerth a-der skoodhyans nombrek-gweresys** ha trettya demmand-fyll.
- **Sondyansow plesyans orth kowlwrans sewen yn unnik** — an re displesys na dhrehedh an sondyans bythkweth.

## Fontynnow

- GOV.UK Service Manual, musur sewyans / KPIs mandatek. <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- Derivas Effeythusnans Nombrek. <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
