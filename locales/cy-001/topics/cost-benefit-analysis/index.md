# Dadansoddiad Cost-Budd (CBA)

Mae CBA yn prisio costau *a* chanlyniadau mewn arian. Dyma'r unig fath o ddadansoddiad sy'n gallu ateb "a yw hyn werth ei wneud o gwbl?" — nid yn unig "pa opsiwn yw'r gorau?" — oherwydd gellir cymharu buddiannau wedi'u prisio'n uniongyrchol yn erbyn costau.

## Pam mae'n bwysig

CBA yw safon **Llyfr Gwyrdd** EM Trysorlys y DU ar gyfer pob gwerthusiad gwario cyhoeddus, gan gynnwys iechyd pan ellir prisio canlyniadau. Lle mae [CEA](../cost-effectiveness-analysis/)/[CUA](../cost-utility-analysis/) yn stopio wrth "gost fesul uned o iechyd," mae CBA yn prisio'r iechyd ei hun (QALY × gwerth trothwy) a phopeth arall — amser, teithio, carbon — ac yn adrodd un ffigur net. Mae gan bob achos busnes digidol llawn yr NHS achos economaidd ar siâp CBA.

## Y mathemateg

```
NPV (gwerth presennol net cymdeithasol) = Σ_t [ (Buddiannau_t − Costau_t) / (1 + r)^t ]
CBR (cymhareb cost-budd)                = GP(buddiannau) / GP(costau)

Mabwysiadwch os yw NPV > 0 (yn gyfatebol CBR > 1); graddiwch yn ôl NPV, nid CBR.
r = 3.5% (cyfradd ffafriaeth amser cymdeithasol y Llyfr Gwyrdd)
```

Gall effeithiau iechyd fynd i mewn wedi'u prisio fel QALYs × λ (gweler [trothwyon parodrwydd-i-dalu](../willingness-to-pay-thresholds/)). Mae'r Llyfr Gwyrdd hefyd yn mynnu **addasiadau tuedd optimistiaeth** — codi amcangyfrifon cost a thorri buddiannau yn ôl canrannau seiliedig ar dystiolaeth, oherwydd bod gwerthusiadau'n systematig or-optimistaidd.

## Enghraifft wedi'i gweithio

System e-atgyfeirio, gorwel 5 mlynedd, disgownt 3.5%:

```
Costau:    adeiladu £1.2M (blwyddyn 0), rhedeg £300k/flwyddyn (blynyddoedd 1–5)
Buddiannau: arbedion gweinyddol £250k/flwyddyn, diagnosteg ddyblyg wedi'i osgoi £280k/flwyddyn,
          amser claf wedi'i arbed 40,000 awr/flwyddyn × £15 = £600k/flwyddyn → £1,130k/flwyddyn

GP costau    = 1,200k + 300k × 4.515 (ffactor blwydd-dal) = £2,555k
GP buddiannau = 1,130k × 4.515                             = £5,102k

NPV = 5,102 − 2,555 = +£2,547k     CBR = 2.0
```

Cymhwyswch dueddiad optimistiaeth y Llyfr Gwyrdd (dyweder +40% ar gost adeiladu, −20% ar fuddiannau): GP costau ≈ £3,035k, GP buddiannau ≈ £4,082k, NPV ≈ **+£1,047k** — yn dal yn bositif, a dyna bwynt yr addasiad: dylai achosion oroesi eu hoptimistiaeth eu hunain.

## Cysylltiad â pheirianneg meddalwedd

Mae achosion busnes peirianneg yn CBAs anffurfiol. Y datblygiadau o'r Llyfr Gwyrdd sy'n werth eu benthyca:

- **Tuedd optimistiaeth fel codiad safonol** — mae peirianwyr yn tanamcangyfrif cost mudo mor ddibynadwy â gweinidogaethau'n tanamcangyfrif cost seilwaith; cymhwyswch godiad datganedig yn lle esgus bod y tro hwn yn wahanol.
- **Prisiwch y budd trech yn onest neu ddim o gwbl** — mae amser claf/defnyddiwr yn cael ei brisio ar gyfraddau amddiffynadwy; nid yw "gwerth brand."
- **Mae NPV yn graddio, nid CBR**: gall prosiect bach â CBR o 5 fod yn llai pwysig na phrosiect mawr â CBR o 1.6.

## Peryglon

- **Prisio'r hyn na ellir ei brisio** i chwyddo buddiannau (morâl, "cydraddoldeb strategol") — cadwch y rheini'n ansoddol, yn ôl [dadansoddiad cost-canlyniad](../cost-consequence-analysis/).
- **Cyfrif trosglwyddiadau fel buddiannau**: mae arian yn symud rhwng cyrff cyhoeddus yn net sero o'r [persbectif](../analysis-perspective/) cymdeithasol.
- **Dim gwrthffeithiol**: mae buddiannau'n cael eu mesur yn erbyn yr opsiwn gwneud-lleiafswm, nid yn erbyn sero.

## Ffynonellau

- HM Treasury, Y Green Book. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Canllawiau disgowntio'r Green Book. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
