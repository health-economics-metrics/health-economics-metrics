# Economeg Monitro Cleifion o Bell

Economeg ad-dalu a gosod costau yn erbyn ei gilydd ar gyfer monitro cleifion gartref: yn UDA, strwythur incwm diffiniedig o godau CPT; mewn gwasanaethau iechyd cenedlaethol, economeg osgoi derbyniadau a wardiau rhithwir hyd at ddisodli llawn drwy **ysbyty yn y cartref**.

## Pam mae'n bwysig

RPM yw'r man lle mae data dyfeisiau'n troi'n ofal iechyd y gellir ei filio. Mae strwythur Medicare UDA (cyfartaleddau cenedlaethol 2025) yn anarferol o eglur:

```
99453  sefydlu ac addysg i'r claf     ~$19.73  untro (ar ôl 16 diwrnod o ddata)
99454  cyflenwi dyfais + throsglwyddo ~$43.03  bob 30 diwrnod — YN GOFYN am ≥16 diwrnod
                                              o ddarlleniadau yn y 30
99457  rheoli 20 munud cyntaf/mis     ~$47.87  yn gofyn am ≥20 munud wedi'u cofnodi
99458  pob 20 munud ychwanegol        ~$38.49
```

Mae mis claf sy'n cydymffurfio'n llawn yn cronni i tua **$90–130 PMPM**. Ar ochr gosod costau yn erbyn ei gilydd, mae rhaglenni ysbyty-yn-y-cartref (esgusodiad CMS Acute Hospital Care at Home: dros 300 o ysbytai) yn dangos tua $1,800–$3,000 wedi'u harbed fesul achos o'i gymharu â gofal claf mewnol, gydag aildderbyniadau a heintiau is — y dystiolaeth gliriaf fod monitro ynghyd â gofal rhithwir yn gallu disodli'r adnodd drutaf yn y system, sef y gwely â staff.

## Y fathemateg

```
RPM revenue (US)  = enrolled × billing-compliant fraction × code stack PMPM
  — mae'r rheol 16 diwrnod yn gwneud cydymffurfiad ag amser gwisgo
    (wearable-validation.md) yn newidyn incwm, ac mae'r rheol 20 munud
    yn gwneud cofnodi amser clinigol yn ofyniad peirianneg

NHS-style value   = admissions avoided × marginal admission cost
                  + bed days substituted × (inpatient − virtual-ward day cost)
                  − service cost (devices, platform, monitoring staff)
  (gweler emergency-attendance-avoidance.md a bed-days-saved.md am y
   rheolau priodoli a chost ymylol)
```

## Enghraifft wedi'i gweithio

Mae practis yn UDA yn cofrestru 400 o gleifion gorbwysedd; mae 70% yn cyrraedd y trothwy 16 diwrnod mewn mis nodweddiadol; cofnodwyd munudau rheoli ar gyfer 60%:

```
Monthly revenue ≈ 400 × [0.70 × 43.03 + 0.60 × 47.87] = 400 × 58.84 ≈ $23,500
Annual ≈ $282,000; service cost (devices $12/mo, staff 0.8 FTE) ≈ $180,000
Margin ≈ $100k/year — a sylwer mai lifelau peirianneg yw'r lifelau:
mae codi'r cydymffurfiad 16 diwrnod o 70% → 85% yn ychwanegu ~$31k/year
(cysur dyfais, dibynadwyedd cydweddu, dylunio atgoffa).
```

Adlewyrchiad y GIG: ward rithwir 50 gwely ar 80% o feddiannaeth yn disodli diwrnodau claf mewnol ar arbediad net o £150/diwrnod ≈ 50 × 0.8 × 365 × 150 ≈ **£2.19M/flwyddyn** yn gros — yn erbyn cost y platfform, y dyfeisiau, a'r tîm nyrsio cymunedol sy'n ei staffio.

## Cysylltiad â Pheirianneg Meddalwedd

Mae platfformau RPM yn gynnyrch prin lle mae **argaeledd system a dibynadwyedd cydweddu'n trosi'n uniongyrchol yn incwm** (mae wythnos o gydweddu wedi methu yn torri porth y 16 diwrnod ar gyfer carfan) a lle mae tracio amser o safon archwilio (rheol yr 20 munud) yn nodwedd flaenllaw, nid yn ôl-ystyriaeth. Adeiladwch ar gyfer: dangosfyrddau cydymffurfiaeth fesul claf sy'n dangos misoedd bilio sydd mewn perygl tra bo modd eu hachub; llwybrau data wedi'u stampio amser sy'n datgelu ymyrraeth (mae archwiliadau gan gyrff talu'n rheolaidd); ac addasu economeg rhybuddion — mae pob rhybudd yn defnyddio munudau'r tîm monitro, sef yr uned y gellir ei bilio a'r adnodd prin ar yr un pryd ([economeg sgrinio](../screening-economics/) sy'n llywodraethu'r dewis o drothwy).

## Peryglon

- **Cofrestru ≠ incwm**: y gyfran sy'n cydymffurfio yw'r ffigur pwysig; modelwch hi, peidiwch â'i thybio.
- **Codau UDA wedi'u trawsblannu i achosion GIG** — mae gwasanaethau iechyd cenedlaethol yn prynu osgoi derbyniadau, nid pentyrrau CPT; rhedwch yr ail fodel.
- **Hawliadau gosod costau yn erbyn ei gilydd ar y gost gyfartalog** ar gyfer derbyniadau lle mae'r costau sefydlog yn parhau (gweler [cost ymylol yn erbyn cost gyfartalog](../marginal-vs-average-cost/)).
- **Dirlawnder y tîm monitro**: mae cyfaint rhybuddion yn cynyddu gyda chofrestru; llinell staffio yw'r cyfyngiad clymol y mae'r rhan fwyaf o fodelau'n ei hepgor.

## Ffynonellau

- RPM CPT codes and 2025 rates. <https://blog.prevounce.com/quick-guide-remote-patient-monitoring-rpm-cpt-codes-to-know>
- CMS hospital-at-home outcomes reporting. <https://www.mcknightshomecare.com/news/hospital-at-home-achieved-cost-savings-among-all-top-diagnosis-groups-cms-reports/>
- Telehealth.HHS.gov, billing for RPM. <https://telehealth.hhs.gov/providers/best-practice-guides/telehealth-and-remote-patient-monitoring/billing-remote-patient>
