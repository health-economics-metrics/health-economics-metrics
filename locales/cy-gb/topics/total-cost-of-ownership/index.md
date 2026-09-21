# Cyfanswm Cost Perchnogaeth (TCO)

TCO yw cost lawn system dros ei hoes: caffael neu adeiladu, integreiddio, gweithredu, cynnal a chadw, cymorth, hyfforddiant, a datgomisiynu. Y llinell sylfaen anghyfforddus: **cynnal a chadw yw 50–80% o TCO meddalwedd** — mae oddeutu tri chwarter cost oes yn cyrraedd *ar ôl* lansio.

## Pam mae'n bwysig

Dysgodd asesu technoleg iechyd ers talwm nad pris cyffur yw ei gost — mae gweinyddu, monitro, a rheoli sgil-effeithiau i gyd yn perthyn yn y model. Mae achosion busnes meddalwedd sy'n cyfrif dim ond cost adeiladu/trwydded yn ailadrodd camgymeriad pris-cyffur naïf ac yn tanddatgan ochr gost pob [ICER](../incremental-cost-effectiveness-ratio/) ac [effaith cyllideb](../budget-impact-analysis/) y maent yn ei bwydo, yn systematig. O ran caffael y GIG, disgyblaeth TCO sy'n gwneud honiad cost-effeithiolrwydd cynnyrch digidol yn onest — a dyna lle mae dewisiadau sy'n edrych yn rhad yn colli.

## Y fathemateg

```
TCO = initial cost (build/licence + integration + data migration + training)
    + Σ_t [operations + maintenance + support + infrastructure + upgrades
           + compliance/assurance]_t / (1 + r)^t
    + decommissioning cost (exit, data extraction, parallel running)

Gorwel: 3–5 mlynedd yn fasnachol, oes-system ar gyfer seilwaith clinigol
r: 3.5% sector cyhoeddus (Green Book), 8–12% masnachol
Meincnodau: cynnal a chadw blynyddol ≈ 15–20% o gost adeiladu; ~78% o TCO oes
yn digwydd ar ôl lansio; mae anwybyddu datgomisiynu a chlo gwerthwr yn prisio ei hun.
```

## Enghraifft wedi'i gweithio

Dau ddewis ar gyfer system e-arsylwadau, gorwel 5 mlynedd:

```
                                SaaS Gwerthwr   Adeiladu Mewnol
Blwyddyn 0 (trwydded/adeiladu)  £250,000        £900,000
Integreiddio + hyfforddiant     £180,000        £150,000
Rhediad blynyddol (bl 1–5)      £120,000/fl     £190,000/fl  (cynnal + 1.5 FTE cynnal a chadw)
Ymadael/datgomisiynu            £60,000         £30,000

TCO heb ei ddisgowntio           £1,090,000      £2,030,000
```

Amcangyfrif peirianneg y dewis adeiladu (£900k) oedd 44% yn unig o'i wir TCO — ac mae amcangyfrifon adeiladu eu hunain fel arfer yn gorredeg 30–40% (gweler [adeiladu yn erbyn prynu](../build-vs-buy/)). Oni bai bod y dewis mewnol yn cyflenwi canlyniadau sy'n wahanol o ran sylwedd, mae rhesymeg [gostwng cost i'r eithaf](../cost-minimization-analysis/) yn berthnasol, ac mae SaaS yn ennill o ~£940k.

## Cysylltiad â Pheirianneg Meddalwedd

Mae peirianwyr yn tanbwysoli data cynnal a chadw eu maes eu hunain wrth ddadlau dros adeiladu: mae'r rheol cynnal a chadw blynyddol o 15–20% o gost adeiladu yn golygu bod pob system £1M yn ymrwymo'n dawel £150–200k/flwyddyn o gapasiti'r dyfodol — atebolrwydd sy'n perthyn ar yr un fantolen feddyliol â [dyled dechnegol](../technical-debt/). TCO hefyd yw hanner cost pob metrig yn y storfa hon: cost fesul defnydd, [economeg uned cwmwl](../cloud-unit-economics/), a'r ddisgyblaeth enwadur y mae HTA yn ei gorfodi ar noddwyr cyffuriau. Pan gaiff pris eich cynnyrch ei herio, cymhariaeth TCO sy'n cynnwys costau rhedeg gwirioneddol y deiliad presennol fel arfer yw'r ail-fframio cryfaf sydd ar gael.

## Peryglon

- **Angori ar gost lansio**: cymharu dewisiadau ar gost blwyddyn-0 pan fo'r drefn yn gwrthdroi erbyn blwyddyn 3.
- **Camsyniad llafur-mewnol-am-ddim**: cynnal a chadw mewnol wedi'i gostio'n sero am fod "y tîm eisoes wedi'i dalu" — gweler [cost cyfle](../opportunity-cost/).
- **Anwybyddu costau ymadael**: allfudo data, terfynu contract, a rhedeg cyfochrog yw lle mae SaaS "rhad" yn mynd yn ddrud.
- **Torri'r rheol un-gorwel**: cymharu TCO SaaS 3 blynedd yn erbyn amorteiddiad adeiladu 10 mlynedd (gweler [gorwel amser](../time-horizon/)).

## Ffynonellau

- IBM, total cost of ownership. <https://www.ibm.com/think/topics/total-cost-of-ownership>
- Software maintenance cost benchmarks. <https://pegotec.net/software-maintenance-cost-percentage-2026-industry-benchmarks/>
