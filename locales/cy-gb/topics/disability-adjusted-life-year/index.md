# Blwyddyn Bywyd wedi'i Haddasu ar gyfer Anabledd (DALY)

Mae DALY yn flwyddyn goll o fywyd iach — drych ochr y baich o'r [QALY](../quality-adjusted-life-year/). Lle mae QALYs yn cyfrif iechyd sy'n cael ei *ennill*, mae DALYs yn cyfrif iechyd sy'n cael ei *golli* i glefyd; prisir ymyriadau yn ôl DALYs a **osgowyd**.

## Pam mae'n bwysig

Y DALY yw'r safon iechyd byd-eang (mae WHO, astudiaeth Baich Byd-eang Clefydau, a'r rhan fwyaf o weinidogaethau iechyd gwledydd incwm isel a chanolig yn cynllunio mewn DALYs). Os yw eich meddalwedd wedi'i thargedu at systemau iechyd rhyngwladol, cyllidwyr, neu raglenni wedi'u halinio â WHO, iaith y gwerth yw DALYs a osgowyd, nid QALYs a enillwyd. Meincnod hanesyddol WHO-CHOICE: mae ymyriad sy'n osgoi DALY am lai nag 1× Cynnyrch Mewnwladol Crynswth (CMC) y pen yn "gost-effeithiol iawn," 1–3× CMC y pen yn "gost-effeithiol" (mae WHO bellach yn annog peidio â defnyddio'r bandiau hyn yn gaeth, ond maent yn parhau'n hollbresennol yn ymarferol).

## Y fathemateg

```
DALY = YLL + YLD

YLL (blynyddoedd bywyd a gollwyd)   = marwolaethau × disgwyliad oes safonol yn oed marwolaeth
YLD (blynyddoedd a fyw ag anabledd) = cyffredinrwydd × pwysau anabledd

pwysau anabledd ∈ [0, 1], 0 = iechyd llawn, 1 = cyfwerth â marwolaeth
(pwysau a gyhoeddwyd gan astudiaeth Baich Byd-eang Clefydau)
```

## Enghraifft wedi'i datrys

Mae platfform nodiadau atgoffa sgrinio mewn rhanbarth yn codi canfod cynnar clefyd. Bob blwyddyn mae'n atal 10 marwolaeth gynamserol (pob un yn colli 20 mlynedd yn erbyn disgwyliad oes safonol) ac yn atal 200 o bobl rhag byw blwyddyn â chyflwr sydd â phwysau anabledd o 0.2.

```
YLL a osgowyd = 10 × 20        = 200
YLD a osgowyd = 200 × 0.2      = 40
DALYs a osgowyd               = 240 y flwyddyn
```

Os yw'n costio $600,000/flwyddyn i redeg y platfform, y gost fesul DALY a osgowyd yw 600,000 / 240 = **$2,500**. Mewn gwlad â CMC y pen o $8,000, mae hynny ymhell islaw'r meincnod 1× CMC — "gost-effeithiol iawn" yn nhermau WHO-CHOICE.

## Cysylltiad â pheirianneg meddalwedd

- Dylai iechyd digidol wedi'i anelu at gyllidwyr iechyd byd-eang (Gavi, y Gronfa Fyd-eang, rhaglenni cenedlaethol) fynegi effaith fel **cost fesul DALY a osgowyd** — dyma'r metrig y mae adolygwyr grantiau eisoes yn meddwl ynddo.
- Mae'r DALY hefyd yn templed defnyddiol ar gyfer *cyfrifo baich* mewn peirianneg: mae digwyddiadau, adeiladau ansefydlog, a ffrithiant etifeddol yn "flynyddoedd a fyw ag anabledd" i sylfaen god — mae rhestr faich wedi'i phwysoli yn ôl llafur yn dweud wrthych ble mae adfer yn prynu'r mwyaf o "flynyddoedd peirianneg iach," yn union fel y mae tablau baich GBD yn cyfeirio gwariant iechyd.

## Peryglon

- **Nid yw QALYs a enillwyd = DALYs a osgowyd yn rhifiadol** — pwysau gwahanol, tablau oes gwahanol, confensiynau gwahanol (yn hanesyddol, defnyddiodd DALYs bwysoli oedran a disgowntio o fewn y mesur ei hun). Peidiwch â throsi'n ddifeddwl.
- **Defnyddio trothwyon lluosrif-CMC fel stamp rwber** — mae WHO ei hun yn rhybuddio eu bod yn anwybyddu cyllidebau a chost cyfle; gweler [trothwyon parodrwydd i dalu](../willingness-to-pay-thresholds/).
- **Hawlio DALYs ar raddfa boblogaeth o effeithiolrwydd fesul defnyddiwr** heb luosi trwy gyfradd fabwysiadu ac ymlyniad — gweler [cyrhaeddiad a thegwch](../reach-and-equity/).

## Ffynonellau

- Cofrestr ddangosyddion WHO: DALYs. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/158>
- Bertram MY, et al. "Cost-effectiveness thresholds: pros and cons." (WHO) <https://pmc.ncbi.nlm.nih.gov/articles/PMC4339959/>
- Marseille E, et al. ar drothwyon seiliedig ar CMC, Health Policy and Planning. <https://academic.oup.com/heapol/article/32/1/141/2555408>
