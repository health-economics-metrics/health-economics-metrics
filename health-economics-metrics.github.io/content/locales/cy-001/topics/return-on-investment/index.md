# Adenillion ar Fuddsoddiad (ROI)

ROI yw'r gymhareb rhwng yr enillion net a'r arian a fuddsoddwyd. Dyma'r metrig y mae peirianneg a chyllid eisoes yn ei rannu — mae economeg iechyd yn ychwanegu'r ddisgyblaeth sy'n gwneud i honiad ROI wrthsefyll craffu: persbectif datganedig, cymharydd, gorwel amser, a chategorïau budd.

## Pam mae'n bwysig

ROI yw iaith gyffredin deiliaid cyllidebau, ac mae iechyd cyhoeddus yn ei defnyddio hefyd: canfu adolygiad nodedig Masters et al. **ROI canolrifol o 14.3:1** ar gyfer ymyriadau iechyd cyhoeddus (mae pob £1 yn dychwelyd ~£14 i'r economi ehangach a'r system iechyd) — ffigur a ddefnyddir yn eang i ddadlau dros wariant atal. Ond ffigur *cymdeithasol, gorwel-hir* yw'r 14:1 hwnnw; mae ROI cyfarwyddwr cyllid ysbyty o safbwynt taliedydd a thros 1–3 blynedd. Mewn gwirionedd, ymrafaelion dros bersbectif heb ei ddatgan yw'r rhan fwyaf o ymrafaelion ROI.

## Y fathemateg

```
ROI = (Enillion − Costau) / Costau      (yn aml × 100%)

Cyfnod ad-dalu = Costau / budd net blynyddol
```

Mae honiad ROI heb ei ddigon manylu heb bedwar datganiad:

1. **Persbectif** — buddion pwy sy'n cyfrif? (gweler [persbectif dadansoddi](../analysis-perspective/))
2. **Cymharydd** — o'i gymharu â pha ddewis arall? (gweler [cost cyfle](../opportunity-cost/))
3. **Gorwel amser** — dros ba mor hir, a [wedi'i ddisgowntio](../discounting-and-time-preference/)?
4. **Dosbarth budd** — yn rhyddhau arian parod, yn gapasiti, neu'n ansoddol? (gweler [rhyddhau arian parod yn erbyn peidio â rhyddhau arian parod](../cash-releasing-vs-non-cash-releasing/))

## Enghraifft wedi'i gweithio

System e-rostro, cost £500,000 dros 3 blynedd.

```
Rhyddhau arian parod: gostyngiad shifftiau asiantaeth            £450,000
Capasiti:             amser gweinyddol rheolwr ward a ryddhawyd  £600,000 (wedi'i werthfawrogi, nid wedi'i fancio)
Ansoddol:             boddhad staff, diogelwch                   heb ei ariannoli

ROI ariannol llym = (450,000 − 500,000)/500,000 = −10%
ROI economaidd    = (1,050,000 − 500,000)/500,000 = +110%
```

Mae'r ddau ffigur yn wir. Bydd gwerthwr sy'n dyfynnu "+110% ROI" i gyfarwyddwr cyllid na all ond bancio £450k yn colli ymddiriedaeth; mae cyflwyno'r ddau, wedi'u labelu, yn ei hennill. Mae'r un rhaniad yn diogelu hyrwyddwr mewnol pan fydd cyllid yn archwilio'r buddion ddwy flynedd yn ddiweddarach.

## Cysylltiad â Pheirianneg Meddalwedd

Mae gan bob cynnig offer sleid ROI; braidd yr un ohonynt yn datgan y pedwar paramedr. Y methiant mwyaf cyffredin yw cymysgu categorïau: enillion capasiti (munudau datblygwr) yn cael eu cyflwyno fel elw ariannol. Strwythurwch ROI AI/platfform fel yr enghraifft uchod — llinell arian parod, llinell capasiti, llinell ansoddol — ac ychwanegwch [ddadansoddiad sensitifrwydd](../sensitivity-analysis/) ar y ffigurau meddal. Am y gwiriad realiti elw-a-cholled ar gyfer ROI AI yn benodol, gweler [adenillion ar fuddsoddiad AI](../ai-return-on-investment/).

## Peryglon

- **Golchi persbectif**: buddion cymdeithasol dros ddegawd yn cael eu dyfynnu i ddeiliad cyllideb sydd â gorwel o 12 mis.
- **Gros yn lle net**: mae "yn dychwelyd £3M" ar wariant o £2M yn ROI o 50%, nid 300%.
- **Mwyafu'r gymhareb**: mae enwadwyr bach yn cynhyrchu ROI ysblennydd ar fuddsoddiadau dibwys; rhestrwch bortffolios yn ôl NPV neu [fudd ariannol net](../net-monetary-benefit/), a defnyddiwch ROI fel sgrin.
- **Dim archwiliad buddion**: mae ROI a ragwelir heb dracio [gwireddu buddion](../benefits-realization/) yn addewid, nid yn ganlyniad.

## Ffynonellau

- Masters R, et al. "Return on investment of public health interventions: a systematic review." J Epidemiol Community Health 2017. <https://pmc.ncbi.nlm.nih.gov/articles/PMC5537512/>
- HM Treasury Green Book. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
