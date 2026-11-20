# Ôl Troed Carbon fesul QALY

Mae carbon fesul QALY yn gymhareb effeithlonrwydd — allyriadau carbon ymyriad (neu'r allyriadau a osgowyd) wedi'u rhannu â'r QALYs y mae'n eu cyflawni — sy'n cyfateb yn uniongyrchol i gost fesul QALY, gan ganiatáu asesu effeithlonrwydd carbon ymyriad ochr yn ochr â'i effeithlonrwydd cost. Mae "budd ariannol net wedi'i addasu ar gyfer carbon" yn mynd cam ymhellach: mae'n ariannu effaith carbon gan ddefnyddio gwerthoedd carbon swyddogol anfasnachedig Llyfr Gwyrdd y DU, ac yn ei osod yn erbyn y [budd ariannol net](../budd-ariannol-net/) safonol.

## Pam mae hyn yn bwysig

Mae NICE a GIG Lloegr bellach yn disgwyl i effaith amgylcheddol gael ei hystyried ochr yn ochr â chost a QALYs. Mae gan y GIG ymrwymiad cyhoeddus i sero net: sero net ar gyfer ei allyriadau uniongyrchol erbyn 2040, a sero net ar gyfer ôl troed ei gadwyn gyflenwi lawn erbyn 2045. Mae llawlyfr gwerthuso technolegau iechyd NICE (PMG36) yn cyfeirio at gynaliadwyedd amgylcheddol fel ystyriaeth sy'n dod i'r amlwg wrth asesu technolegau. I gynnyrch iechyd digidol, mae hyn yn golygu bod carbon yn dod yn bedwerydd piler yr achos gwerth, ochr yn ochr â chost, QALYs a [threchiant ar y ffin effeithlonrwydd](../trechiant-a-r-ffin-effeithlonrwydd/) — nid yn lle'r un ohonynt, ond yn ddimensiwn y mae achos busnes wedi'i adeiladu'n dda yn gynyddol angen ei adrodd.

## Y Fathemateg

```
Carbon fesul QALY = cyfanswm_allyriadau_tunnell_co2e / cyfanswm_qalys
  (mae gwerth negyddol yn golygu allyriadau net a OSGOWYD fesul QALY a
  enillwyd — mantais ddwbl: gwell iechyd a llai o garbon)

Effaith carbon ariannol = allyriadau_tunnell_co2e × gwerth_carbon_fesul_tunnell
  (allyriadau negyddol × gwerth positif = cost negyddol, h.y. budd)

NMB wedi'i addasu ar gyfer carbon = budd_ariannol_net − effaith_carbon_ariannol
```

Mae hyn yn ymestyn syniad y ffin effeithlonrwydd cost/QALY gydag ail echel — carbon fesul QALY — yr un rhesymeg "plotio pob opsiwn a gweld beth sy'n cael ei drechu" â [threchiant a'r ffin effeithlonrwydd](../trechiant-a-r-ffin-effeithlonrwydd/), wedi'i chymhwyso at garbon yn lle cost.

## Enghraifft Waith

Mae gwasanaeth teleiechyd yn disodli ymweliadau wyneb yn wyneb, gan osgoi 5,000 o deithiau car y flwyddyn ar tua 8kg CO2e yr un — 40 tunnell o CO2e wedi'u hosgoi, wedi'u cynrychioli fel ffigur allyriadau negyddol (−40.0 tunnell), ac mae'n cyflawni 25 QALY y flwyddyn:

```
Carbon fesul QALY = −40.0 / 25.0 = −1.6 tunnell CO2e a osgowyd fesul QALY a enillwyd
```

Gan ddefnyddio gwerth carbon anfasnachedig y Llyfr Gwyrdd (ffigur darluniadol, gwerth canolog anfasnachedig 2023 ≈ £269/tunnell CO2e — mae'r Llyfr Gwyrdd yn diweddaru gwerthoedd carbon yn flynyddol, gwiriwch eto cyn dyfynnu mewn dadansoddiad byw):

```
Effaith carbon ariannol = −40.0 × £269 = −£10,760
```

Mae "cost" o −£10,760 yn fudd o £10,760. Os yw budd ariannol net annibynnol yr ymyriad yn £500,000:

```
NMB wedi'i addasu ar gyfer carbon = £500,000 − (−£10,760) = £510,760
```

Mae'r arbediad carbon yn ychwanegu at yr achos yn hytrach na thynnu oddi arno — y fantais ddwbl y bwriedir i'r fframio allyriadau negyddol ei datgelu.

## Cysylltiad Peirianneg Feddalwedd

Mae hon yn gyffordd fyw, gyfredol ag economeg AI/cwmwl: mae ôl troed carbon cyfrifiadura wrth hyfforddi a rhedeg model AI bellach yn eitem go iawn mewn caffael y GIG, gan fod contractau cyflenwyr y GIG uwchlaw rhai trothwyon yn gofyn am Gynllun Lleihau Carbon. Mae [economeg uned cwmwl](../economeg-uned-cwmwl/) eisoes yn olrhain cost fesul uned o allbwn cyfrifiadura; carbon fesul QALY yw'r templed naturiol ar gyfer metrig "cost carbon fesul casgliad" yn y dyfodol, sy'n ymestyn y modiwl hwnnw ac economeg uned casgliadau i'r dimensiwn amgylcheddol, er nad yw'r metrig hwnnw'n bodoli eto.

## Peryglon

- **Chwarae â ffin y cwmpas**: cyfrif allyriadau uniongyrchol (Cwmpas 1) yn unig a hepgor allyriadau cadwyn gyflenwi (Cwmpas 3), sydd fel arfer yn fwyafrif ôl troed gwirioneddol cynnyrch iechyd digidol.
- **Defnyddio gwerth carbon hen**: mae'r Llyfr Gwyrdd yn diweddaru ei werthoedd carbon anfasnachedig yn flynyddol, felly rhaid dyddio unrhyw ffigur £/tunnell a ddyfynnir, nid ei ddyfynnu fel cysonyn sefydlog.
- **Trin "effeithlon o ran carbon" fel dirprwy i "costeffeithiol"**: mae ymyriad carbon isel, gwerth isel yn dal i fod yn ddefnydd gwael o adnoddau'r GIG. Mae carbon yn bedwerydd piler ochr yn ochr â chost a QALYs, nid yn lle'r un ohonynt.

## Ffynonellau

- NHS England, "Delivering a Net Zero National Health Service" (2020, diweddarwyd 2022). <https://www.england.nhs.uk/greenernhs/publication/delivering-a-net-zero-national-health-service/>
- HM Treasury, The Green Book: Carbon Values supplementary guidance (diweddarir yn flynyddol; gwerth canolog anfasnachedig ≈ £269/tCO2e, 2023 — dyddiwch unrhyw ddyfyniad). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
