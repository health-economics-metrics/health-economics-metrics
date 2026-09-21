# Tariff Cenedlaethol a Chostau Uned

Mae'r GIG yn talu darparwyr am weithgaredd o dan restr prisiau cenedlaethol seiliedig ar reolau — yn hanesyddol y Tariff Cenedlaethol / Taliad yn ôl Canlyniadau, a ddisodlwyd gan **Gynllun Taliadau'r GIG (NHSPS)** ar 1 Ebrill 2023. Y tu ôl i'r prisiau mae seilwaith costio uned cenedlaethol: y **Casgliad Cost Cenedlaethol (NCC)** a chrynswth **Costau Uned Iechyd a Gofal Cymdeithasol PSSRU**.

## Pam mae hyn yn bwysig

Dyma enwaduron pob achos busnes GIG credadwy. Pan fo honiad yn dweud "mae presenoldeb claf allanol yn werth £160" neu "mae awr-nyrs Band 6 yn costio £31", daw'r rhifau hynny o'r seilwaith hwn — a defnyddio'r ffigurau swyddogol yn hytrach na rhai a ddyfeisiwyd yw'r hyn sy'n gwneud gwerthusiadau annibynnol yn gymharadwy a thimau cyllid yn gydweithredol. I werthwr, mae'r tariff hefyd yn diffinio ochr y *refeniw*: mae gweithgaredd y mae eich meddalwedd yn ei alluogi (clinigau ychwanegol, gwelyau wedi'u hail-lenwi) yn cael ei brisio ar brisiau'r cynllun.

## Y Fathemateg

```
Pris tariff fesul uned gweithgaredd (cyfnod wedi'i god-HRG, presenoldeb claf allanol)
  = cost uned cyfartalog cenedlaethol (o'r NCC) × Ffactor Grymoedd y Farchnad (addasiad lleol)
  o dan NHSPS: elfennau sefydlog + newidiol wedi'u cymysgu ("taliad a chymhelliant wedi'u halinio")

Cost uned NCC = cost gyfan gweithgaredd fel yr adroddwyd gan yr ymddiriedolaeth / cyfaint gweithgaredd
                (wedi'i adeiladu ar Systemau Gwybodaeth a Chostio Lefel-Claf, PLICS)

Crynswth PSSRU: ~80 cost uned safonol (ymgynghoriad meddyg teulu, awr-nyrs fesul band,
presenoldeb ED…) — y ffynhonnell ddiofyn mewn gwerthusiadau economaidd y DU.
```

## Enghraifft Waith

Mae eich meddalwedd yn rhyddhau 1 awr/dydd o amser nyrs Band 6 mewn blwyddyn waith o 250 diwrnod:

```
Cost Band 6 seiliedig ar PSSRU gan gynnwys gorbenion ≈ £31/awr (gwiriwch y rhifyn cyfredol)
Gwerth capasiti = 250 × £31 = £7,750/nyrs/blwyddyn (nid yn rhyddhau arian parod)
```

Fel arall mae'r nyrs yn cynnal 2 apwyntiad dilynol claf allanol ychwanegol/dydd ar werth cynllun o ~£160: 500 × £160 = **£80,000/blwyddyn o weithgaredd a ariennir** — gwahaniaeth degplyg mewn gwerth a hawlir yn dibynnu ar ailddefnyddio, y cyfan o gostau uned swyddogol. Mae'r ddau honiad yn archwiliadwy oherwydd bod yr enwaduron yn gyhoeddedig; dyna holl bwynt y peth.

## Cysylltiad Peirianneg Feddalwedd

Dyma'r patrwm **llyfr prisiau mewnol**. Mae economeg iechyd y DU yn gweithio oherwydd bod pob gwerthusiad yn defnyddio'r un costau uned cyhoeddedig; mae'r rhan fwyaf o sefydliadau peirianneg yn brin o hyn, felly mae pob achos busnes yn dyfeisio ei gost ei hun am awr-beiriannydd, digwyddiad, defnydd. Gall tîm platfform gyhoeddi union lyfr o'r fath — cost lwythog fesul awr-beiriannydd yn ôl lefel, fesul digwyddiad yn ôl difrifoldeb, fesul munud-adeiladu — a mynnu ei ddefnydd ym mhob cynnig. Mae systemau ad-dalu/dangos-cost hefyd yn ailadrodd moddau methiant hysbys y tariff: mae prisio cost gyfartalog yn gyrru camchwarae cyfaint, mae taliadau sefydlog yn gyrru tan-ddarpariaeth. Mae esblygiad yr NHSPS o daliad gweithgaredd pur i sefydlog+newidiol wedi'u cymysgu yn ugain mlynedd o wersi mewn dylunio cymhelliant ar gyfer prisio platfform mewnol.

## Peryglon

- **Ffigurau hen**: mae prisiau NCC, PSSRU, ac NHSPS yn adnewyddu'n flynyddol — dyddiwch bob rhif.
- **Pris tariff ≠ cost**: mae prisiau'n gyfartaleddau cenedlaethol gydag addasiadau; mae eich cost ymylol leol yn wahanol (gweler [cost ymylol yn erbyn cost gyfartalog](../marginal-vs-average-cost/)).
- **Prisio capasiti ar y tariff heb fecanwaith** i gyflawni'r gweithgaredd ychwanegol mewn gwirionedd a chael ei dalu amdano.

## Ffynonellau

- GIG Lloegr, Cynllun Taliadau'r GIG. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
- GIG Lloegr, Casgliad Cost Cenedlaethol. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Costau Uned Iechyd a Gofal Cymdeithasol. <https://www.pssru.ac.uk/unitcostsreport/>
