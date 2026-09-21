# Economeg Atal

Economeg ymyrryd cyn i glefyd ddigwydd neu waethygu. Mae'r canfyddiad pennawd yn wrthreddfol: **nid yw'r rhan fwyaf o atal yn arbed arian** — mae'n prynu iechyd am bris da. Canfu dadansoddiad nodedig Cohen, Neumann a Weinstein yn y NEJM fod llai na 20% o ymyriadau ataliol yn arbed cost net; mae'r gweddill yn gost-effeithiol ar y gorau.

## Pam mae hyn yn bwysig

"Mae atal yn arbed arian" yw'r honiad ffug a ailadroddir amlaf mewn polisi iechyd, ac mae achosion busnes sy'n cael eu hadeiladu arno'n cael eu chwalu gan economegwyr iechyd. Y strwythur gonest: mae atal yn costio arian nawr (sgrinio poblogaethau cyfan, trin ffactorau risg mewn pobl na fyddent byth wedi mynd yn sâl) ac yn dychwelyd iechyd yn ddiweddarach — fel arfer am gost *dda* fesul QALY, weithiau am arbediad, weithiau am bris ofnadwy. Gwybod pa gyfundrefn rydych ynddi yw'r dadansoddiad. Mae'r gwahaniaeth yn bwysig yn fasnachol: mae cynnyrch atal sy'n cael ei werthu fel "yn arbed arian i'r GIG" yn gwahodd archwiliad y bydd yn ei fethu; wedi'i werthu fel "yn prynu QALYs am £4,000" gall ennill ar yr un ffeithiau. Gweler [ymyrryd yn gynharach](../earlier-intervention/) am y fersiwn o fewn llwybr.

## Y Fathemateg

```
Cost net atal (fesul person) =
    cost ymyriad × pawb a driniwyd
  − costau diweddarach a osgowyd × yr ychydig a fyddai wedi gwaethygu
  (y ddau wedi'u disgowntio — mae'r costau a osgowyd flynyddoedd i ffwrdd; gweler
   discounting-and-time-preference.md)

Mae angen ar gyfer arbed cost: cost ymyriad < P(gwaethygu) × cost a osgowyd × ffactor disgownt
Mae angen ar gyfer cost-effeithiolrwydd yn unig: cost net / QALYs a enillwyd < trothwy
```

Paradocs atal: mae cost ymyriad yn lluosi dros y boblogaeth gyfan; nid yw buddion yn cronni ond i'r ychydig gwrthffeithiol.

## Enghraifft Waith

Ap rheoli gorbwysedd a gynigir i 100,000 o oedolion mewn perygl, £25/person/blwyddyn. Dros 10 mlynedd mae'n atal 400 o strociau (pob un yn costio £45,000 wedi'i ddisgowntio, a 3 QALY a gollwyd).

```
Cost:    100,000 × £25 × 10 mlynedd (wedi'i ddisgowntio ≈ ×8.3) ≈ £20.8M
Gwrthbwysau: 400 × £45,000 = £18.0M
Cost net ≈ £2.8M — NID yn arbed cost

QALYs a enillwyd = 400 × 3 = 1,200
Cost fesul QALY = 2.8M / 1,200 ≈ £2,300/QALY — hynod o gost-effeithiol
```

Yr un rhaglen, y ddwy wirionedd: mae'n colli £2.8M mewn arian parod ac yn prynu iechyd am ddegfed ran o drothwy NICE. Ariannwch ef ar yr ail rif; peidiwch byth ag addo'r cyntaf.

## Cysylltiad Peirianneg Feddalwedd

Mae ansawdd shift-left yn economeg atal, gyda rhybudd wedi'i gynnwys. Mae adolygiadau, profion, a dadansoddiad statig yn cymhwyso cost i *bob* newid er mwyn dal problemau yn yr ychydig a fyddai wedi gwaethygu i ddigwyddiadau cynhyrchu. Mae cromlin cost diffygion (10–100× yn ôl cam) yn chwarae rôl costau strôc — ac mae'r casgliad gonest yn adlewyrchu iechyd: mae shift-left fel arfer yn gost-*effeithiol*, nid yn awtomatig yn gost-*arbed*, oherwydd ni fyddai'r rhan fwyaf o broblemau a nodwyd byth wedi dod yn ddigwyddiadau (problem yr ychydig gwrthffeithiol). Cyfrifwch ef: cyfanswm cost giât fesul cyfnod yn erbyn digwyddiadau a osgowyd mewn gwirionedd × cost digwyddiad — yr un strwythur enghraifft waith, gyda [NNT](../number-needed-to-treat/) fel yr uned fesul daliad.

## Peryglon

- **Honni arbedion cost pan fo'r dystiolaeth yn cefnogi cost-effeithiolrwydd yn unig** — camgymeriad diffiniol eiriolaeth atal yn y ddau faes.
- **Gwrthbwysau dyfodol heb eu disgowntio**: buddion 15 mlynedd i ffwrdd ar werth wyneb.
- **Anwybyddu costau gorddiagnosis/gorddrin**: mae atal yn dod o hyd i ffug-glefyd hefyd — gweler [economeg sgrinio](../screening-economics/).

## Ffynonellau

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- Masters R, et al. "Return on investment of public health interventions." JECH 2017. <https://pmc.ncbi.nlm.nih.gov/articles/PMC5537512/>
