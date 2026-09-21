# Cyfradd Ailddderbyn

Cyfradd ailddderbyn 30-diwrnod yw canran y cleifion a ryddhawyd sy'n dychwelyd fel achos brys o fewn 30 diwrnod. Dyma fetrig *ansawdd rhyddhau* canonaidd y system iechyd — ac mae'n cario cosbau ariannol uniongyrchol.

## Pam mae hyn yn bwysig

Mae ailddderbyn yn golygu na wnaeth y rhyddhad cyntaf lynu: rhyddhau cynamserol, trosglwyddo meddyginiaeth aflwyddiannus, dim dilyniant, neu gefnogaeth gymdeithasol ar goll. Mae talwyr yn ei gosbi'n benodol — mae Rhaglen Lleihau Ailddderbyniadau Ysbyty UDA yn didynnu hyd at 3% o daliadau Medicare ysbyty; nid yw'r GIG hanesyddol wedi talu am ailddderbyniadau brys 30-diwrnod y gellid eu hosgoi. Felly mae osgoi ailddderbyn yn un o'r ychydig gategorïau budd sy'n *uniongyrchol* berthnasol i arian parod i ddarparwr, nid capasiti yn unig.

## Y Fathemateg

```
Cyfradd ailddderbyn = ailddderbyniadau brys o fewn 30 diwrnod / rhyddhad mynegai × 100

Mae cymariaethau wedi'u safoni yn ôl risg yn addasu ar gyfer cymysgedd achosion;
mae rhaglenni cosb yn cymharu arsylledig yn erbyn disgwyliedig ar gyfer ysbytai tebyg.

Gwerth osgoi = ailddderbyniadau a osgowyd × (cost fesul cyfnod ailddderbyn
                     + amlygiad cosb fesul ailddderbyn)
```

## Enghraifft Waith

Ap cymorth rhyddhau methiant calon (olrhain symptomau, rhybuddion pwysau, atgoffion meddyginiaeth, uwchgyfeirio nyrs): 2,000 o ryddhadau/blwyddyn, cyfradd ailddderbyn llinell sylfaen 18%, mae treial yn dangos 14% gyda'r ap.

```
Ailddderbyniadau a osgowyd = 2,000 × (0.18 − 0.14) = 80/blwyddyn
Cost fesul cyfnod ailddderbyn ≈ £3,500 → £280,000/blwyddyn o gost driniaeth a osgowyd
Ynghyd ag amlygiad cosb/dim taliad ar y cyfnodau hynny.
Cost ap: 2,000 × £60 = £120,000/blwyddyn

Net ≈ +£160,000/blwyddyn, cyn unrhyw hawliad QALY am ddirywiad a osgowyd.
```

Y rhif i'w amddiffyn yw'r effaith 4-pwynt canran: rhaid iddo ddod o gymhariaeth reoledig, oherwydd mae cyfraddau ailddderbyn yn siglo gyda chymysgedd achosion a thymor.

## Cysylltiad Peirianneg Feddalwedd

Ailddderbyn yw **cyfradd methiant newid** y system iechyd (gweler [metrigau DORA](../dora-metrics/)): gwaith a "gludwyd" ac a neidiodd yn ôl o fewn 30 diwrnod. Mae'r cyfatebiaethau'n ddwfn — mae tocynnau wedi'u hailagor a digwyddiadau atchweliad yn dangos "ansawdd rhyddhau" gwael (dilysu gwan, cau cynamserol, dogfennau trosglwyddo coll); mae cyfrifeg o'r math cosb (y tîm sy'n trwsio sy'n talu, nid y tîm sy'n derbyn) yn newid ymddygiad; ac mae'r ddau faes wedi dysgu'r un wers, sef bod gwthio trwybwn crai (rhyddhau cyflymach, llongio cyflymach) heb fuddsoddi yn y trosglwyddiad yn syml yn troi ciwiau gweladwy yn ailwaith anweledig. Mae "cyfradd ailagor 30-diwrnod" yn perthyn ar unrhyw ddangosfwrdd tîm sy'n dathlu amser cylchred.

## Peryglon

- **Chwarae gêmau trwy ailenwi**: ailddderbyniadau wedi'u codio fel arosiadau arsylwi neu gyflyrau newydd; archwiliwch y diffiniad.
- **Pob-achos yn erbyn achos-cysylltiedig**: mae 30-diwrnod pob-achos yn cynnwys digwyddiadau gwirioneddol ddigyswllt; mae cosbau fel arfer yn defnyddio pob-achos yn union oherwydd bod "cysylltiedig" yn agored i gêmau.
- **Dallineb cymysgedd achosion**: mae ysbyty sy'n gwasanaethu poblogaethau mwy sâl, mwy tlawd yn ailddderbyn mwy am resymau nad oes unrhyw ap yn eu trwsio — addaswch risg cyn cymharu.

## Ffynonellau

- CMS, Hospital Readmissions Reduction Program. <https://www.cms.gov/medicare/payment/prospective-payment-systems/acute-inpatient-pps/hospital-readmissions-reduction-program-hrrp>
- NHS Digital, ystadegau ailddderbyniadau brys. <https://digital.nhs.uk/data-and-information/publications/statistical/compendium-emergency-readmissions>
