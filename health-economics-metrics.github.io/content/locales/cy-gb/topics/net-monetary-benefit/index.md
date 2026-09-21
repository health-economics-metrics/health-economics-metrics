# Budd Ariannol Net (NMB)

Mae NMB yn trosi canlyniad cost-effeithiolrwydd yn un gwerth ariannol: enillion iechyd wedi'u prisio ar y trothwy parodrwydd i dalu, minws cost. Mae ei efaill, Budd Iechyd Net (NHB), yn mynegi'r un rheol mewn unedau iechyd.

## Pam mae hyn yn bwysig

Mae cymarebau ([ICERs](../incremental-cost-effectiveness-ratio/)) yn lletchwith: maent yn ffrwydro'n agos at effaith sero, ni ellir eu cyfartaleddu ar draws lluniadau ansicrwydd, ac ni allant raddio tri opsiwn neu fwy yn lân. Mae NMB yn datrys hyn i gyd — mae'n llinellol, felly gallwch raddio opsiynau, cyfartaleddu lluniadau Monte Carlo, a dadelfennu cyfraniadau. Dyma hefyd y ffurf ar fathemateg economeg iechyd y mae pob peiriannydd eisoes yn ei gwybod: *gwerth minws cost*.

## Y Fathemateg

```
NMB = (ΔE × λ) − ΔC
NHB = ΔE − (ΔC / λ)

ΔE = effaith gynyddrannol (e.e., QALYs)
ΔC = cost gynyddrannol
λ  = trothwy parodrwydd i dalu (gweler willingness-to-pay-thresholds.md)

Rheol benderfynu: mabwysiadwch os yw NMB > 0 (yn gyfatebol NHB > 0).
Ymysg dewisiadau: dewiswch y NMB uchaf.
```

NMB > 0 ⇔ ICER < λ (pan fo ΔE > 0), felly mae'r ddwy reol yn cytuno — mae NMB yn ymddwyn yn well, dyna i gyd.

## Enghraifft Waith

Tri opsiwn ar gyfer gwasanaeth diabetes, fesul 1,000 o gleifion, λ = £20,000/QALY:

```
Opsiwn                ΔC          ΔE (QALYs)   NMB = 20,000×ΔE − ΔC
Ap + hyfforddiant      £400,000    30           600,000 − 400,000 = £200,000
Ap yn unig             £150,000    12           240,000 − 150,000 = £90,000
Clinigau ychwanegol    £700,000    32           640,000 − 700,000 = −£60,000
```

Mae clinigau ychwanegol yn ennill y mwyaf o QALYs ond yn dinistrio gwerth ar y trothwy hwn (NMB < 0). Mae ap + hyfforddiant yn ennill. Sylwch fod NMB yn caniatáu ichi *raddio'r tri ar unwaith* — byddai angen gweithdrefn y ffin ar ICERs pâr-wrth-bâr yn [trechiant a'r ffin effeithlonrwydd](../dominance-and-efficiency-frontier/), gan gyrraedd yr un ateb.

Golwg NHB o'r enillydd: 30 − 400,000/20,000 = 30 − 20 = **10 QALY net** — yr iechyd a enillwyd y tu hwnt i'r hyn y byddai'r un arian wedi'i gynhyrchu mewn man arall.

## Cysylltiad Peirianneg Feddalwedd

`(oriau a arbedwyd × cyfradd fesul awr lwythog) − cost offeryn` — yr achos busnes offer bob dydd — sy'n llythrennol yn gyfrifiad NMB gyda λ = cost peiriannydd lwythog. Dau uwchraddiad y mae economeg iechyd yn eu hychwanegu:

- **Gwnewch λ yn newidyn, nid yn gysonyn.** Plotiwch NMB yn erbyn λ ("gwerth awr-beiriannydd") a dangoswch lle mae'r penderfyniad yn troi; gall gwahanol randdeiliaid wedyn gymhwyso eu prisiad eu hunain heb ailwneud eich mathemateg.
- **Meddwl NHB**: mae "mae'r platfform hwn yn arbed 5,000 awr-beiriannydd ond yn defnyddio cyllideb a fyddai wedi prynu 3,000 awr-beiriannydd o gapasiti contractwr — net 2,000 awr" yn gorfodi'r gymhariaeth cost cyfle mewn unedau capasiti. Gweler [cost cyfle](../opportunity-cost/).

## Peryglon

- **Cuddio'r trothwy**: mae NMB yn ddiystyr heb nodi λ; adroddwch NMB ar £20k a £30k, neu blotiwch y gromlin.
- **Defnyddio NMB i olchi effeithiau bach**: gall poblogaeth enfawr wedi'i lluosi ag effaith fesul person ddibwys gynhyrchu NMB fawr — adroddwch effeithiau fesul person ochr yn ochr.
- **Anghofio bod NMB yn etifeddu pob ansicrwydd** yn ΔC a ΔE — parwch â [dadansoddiad sensitifrwydd tebygolyddol](../probabilistic-sensitivity-analysis/).

## Ffynonellau

- Geirfa Consortiwm Economeg Iechyd Efrog: budd ariannol net. <https://yhec.co.uk/glossary/net-monetary-benefit/>
- Stinnett AA, Mullahy J. "Buddion iechyd net: fframwaith newydd ar gyfer dadansoddi ansicrwydd mewn dadansoddiad cost-effeithiolrwydd." <https://pmc.ncbi.nlm.nih.gov/articles/PMC2528971/>
