# Cymhareb Cost-Effeithiolrwydd Cynyddrannol (ICER)

Yr ICER yw'r gost ychwanegol fesul uned ychwanegol o effaith iechyd wrth ddewis un opsiwn yn hytrach na'r dewis arall gorau nesaf. Dyma'r prif rif mewn asesiad technoleg iechyd. (Pan fo'r uned effaith yn QALYs, gelwir hefyd yn gymhareb cost-defnyddioldeb cynyddrannol, ICUR.)

## Pam mae hyn yn bwysig

Nid yw systemau iechyd byth yn gwerthuso technoleg ar ei phen ei hun — bob amser yn *gynyddrannol*, yn erbyn yr hyn a fyddai'n cael ei wneud fel arall. Mae NICE yn cymharu ICER technoleg â'i drothwy **£20,000–£30,000 y QALY**; mae sefydliad ICER UDA yn adrodd ar draws $50,000–$200,000/QALY; mae Canada'n gweithio i tua CAD$50,000/QALY. A yw'ch cynnyrch yn "werth chweil" i wasanaeth iechyd cenedlaethol yw, yn ffurfiol, a yw ei ICER yn clirio'r trothwy lleol. Gweler [trothwyon parodrwydd i dalu](../willingness-to-pay-thresholds/).

## Y Fathemateg

```
ICER = (Cost_newydd − Cost_cymharydd) / (Effaith_newydd − Effaith_cymharydd)
     = ΔC / ΔE
```

Rheolau dehongli:

- ΔC < 0, ΔE > 0: mae'r opsiwn newydd yn **trechu** — yn rhatach ac yn well; nid oes angen cymhareb.
- ΔC > 0, ΔE > 0: cyfrifwch yr ICER, cymharwch â'r trothwy λ; mabwysiadwch os yw ICER < λ.
- ΔC > 0, ΔE < 0: mae'r opsiwn newydd wedi'i drechu — gwrthodwch.
- Mae cymarebau'n ymddwyn yn wael yn agos at ΔE = 0 — mae'n well defnyddio [budd ariannol net](../net-monetary-benefit/) ar gyfer graddio.

Rhaid i'r cymharydd fod yr *opsiwn heb-ei-drechu gorau nesaf*, nid "peidio â gwneud dim" — gweler [trechiant a'r ffin effeithlonrwydd](../dominance-and-efficiency-frontier/).

## Enghraifft Waith

Gwasanaeth monitro o bell ar gyfer cleifion methiant y galon, fesul 1,000 o gleifion/blwyddyn, o'i gymharu â gofal arferol:

```
Costau:  gwasanaeth £900,000; mae derbyniadau a osgowyd yn arbed £600,000
         ΔC = 900,000 − 600,000 = £300,000
Effeithiau: mae ymyriad cynharach yn ennill 25 QALY
         ΔE = 25

ICER = 300,000 / 25 = £12,000 y QALY
```

Mae £12,000/QALY yn gyfforddus islaw trothwy £20,000 NICE — achos cryf. Sylwch sut mae'r gost *net* yn bwysig: heb y gwrthbwyso o £600,000 byddai'r ICER yn £36,000/QALY a byddai'r achos yn debygol o fethu. Gwrthbwysau cost, ac ansawdd eu tystiolaeth, yw lle mae'r dadansoddiadau hyn yn cael eu hennill a'u colli (gweler [costau diweddarach a osgowyd](../avoided-downstream-costs/)).

## Cysylltiad Peirianneg Feddalwedd

Mae disgyblaeth yr ICER yn trosglwyddo'n gyfan gwbl i benderfyniadau peirianneg:

```
(cost opsiwn B − cost opsiwn A) / (canlyniad B − canlyniad A)
```

— cost gynyddrannol fesul defnydd ychwanegol, fesul awr-beiriannydd a arbedwyd, fesul digwyddiad a osgowyd — bob amser yn erbyn y dewis arall gorau nesaf, nid yn erbyn peidio â gwneud dim. Y ddwy arfer sy'n werth eu benthyg: (1) *enwch y cymharydd yn benodol*; mae'r rhan fwyaf o honiadau ROI offer yn cymharu'n gudd yn erbyn dyn gwellt; (2) *netiwch y costau'n gyntaf* — mae gan offeryn sy'n costio £100k ond sy'n disodli £80k o wariant presennol ΔC = £20k.

## Peryglon

- **Camchwarae'r cymharydd**: mae cymharu yn erbyn llinell sylfaen hen ffasiwn neu wael yn artiffisial yn chwyddo ΔE ac yn gwneud i'r ICER edrych yn well nag ydyw.
- **Cyfartaleddau yn lle cynyddrannau**: nid yw cost fesul QALY rhaglen gyfan yr un peth â'r ICER ar gyfer ei hehangu neu ei mabwysiadu.
- **Addoli amcangyfrifon pwynt**: mae ICERs yn gymarebau o ddau wahaniaeth ansicr; adroddwch ansicrwydd drwy [PSA a CEACs](../probabilistic-sensitivity-analysis/).
- **Mae ICERs negyddol yn amwys** (mae rhatach-a-gwell yn erbyn drutach-a-gwaeth yn rhoi'r un arwydd) — peidiwch byth ag adrodd ICER negyddol heb ddweud pa chwarter ydyw.

## Ffynonellau

- NICE: cwestiynau cyffredin trothwyon cost-effeithiolrwydd. <https://www.nice.org.uk/what-nice-does/faqs/changes-to-nice-s-cost-effectiveness-thresholds>
- Fframwaith Asesu Gwerth ICER 2023. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
- Geirfa Consortiwm Economeg Iechyd Efrog: ICER. <https://yhec.co.uk/glossary/incremental-cost-effectiveness-ratio-icer/>
