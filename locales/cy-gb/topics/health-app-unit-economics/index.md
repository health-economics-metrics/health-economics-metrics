# Economeg Uned Apiau Iechyd

Rhifyddeg fasnachol cynhyrchion iechyd defnyddwyr: cost caffael cwsmeriaid (CAC), gwerth oes (LTV), cyfartaledd refeniw fesul defnyddiwr (ARPU), prisio fesul-aelod-fesul-mis (PMPM), a'r gwahaniaeth ym marchnad cyflogwyr rhwng **ROI a VOI** (gwerth ar fuddsoddiad).

## Pam mae'n bwysig

Mae apiau iechyd yn wynebu gwasgfa strwythurol: mae caffael yn ddrud (honiadau wedi'u rheoleiddio, rhwystrau ymddiriedaeth, costau cydymffurfio) tra bod cadw defnyddwyr yn waeth nag unrhyw fertigol meddalwedd arall (~90% yn gadael o fewn 30 diwrnod — gweler [cadw a cholli defnyddwyr](../retention-and-churn/)). Mae'r prawf hyfywedd safonol — **LTV:CAC ≥ 3:1** — felly'n eithriadol o galed mewn iechyd defnyddwyr, a dyna pam mae'r diwydiant yn mudo tuag at fodelau B2B2C: cyflogwyr, yswirwyr, a systemau iechyd yn talu PMPM am boblogaethau, lle nad yr unigolyn sy'n gadael yw'r prynwr.

## Y mathemateg

```
CAC   = gwariant gwerthu + marchnata / cwsmeriaid newydd sy'n talu
ARPU  = refeniw / defnyddwyr gweithredol (fesul cyfnod)
LTV   = ARPU × oes gyfartalog  =  ARPU / cyfradd colli defnyddwyr
Hyfywedd: LTV : CAC ≥ 3, cyfnod ad-dalu ≤ 12–18 mis

CAC effeithiol fesul defnyddiwr a gadwyd = CAC / cadw(t)
  — ar gadw D30 o 4%, mae £5 fesul gosodiad = £125 fesul defnyddiwr a gadwyd am 30 diwrnod

Refeniw PMPM = cyfradd × aelodau cofrestredig × misoedd
  ymyl gwerthwr = PMPM − cost gwasanaethu fesul aelod fesul mis
  — mae ymgysylltiad yn gwrthdroi arwydd: o dan danysgrifiadau B2C mae
    ymgysylltiad yn gyrru refeniw; o dan PMPM, mae aelodau ymgysylltiedig
    yn COSTIO mwy i'w gwasanaethu na rhai llonydd, ac mae contractau
    canlyniadau'n ei wrthdroi eto
```

## Enghraifft wedi'i gweithio

Ap cwsg B2C: £6.99/mis, colli defnyddwyr misol 18%, CAC cymysg £38.

```
LTV = 6.99 / 0.18 ≈ £38.8 → LTV:CAC ≈ 1.0 — anhyfyw

Trosi i PMPM cyflogwr: £1.20 PMPM × 40,000 o fywydau wedi'u cwmpasu = £48k/mis
Cost gwasanaethu: seilwaith £0.15 + cymorth £0.10 + cynnwys £0.05
  fesul aelod ≈ £0.30 → ymyl ~75%, cylch gwerthu hir ond mae colli
  defnyddwyr ar lefel-contract (blynyddol), nid lefel-defnyddiwr (dyddiol)

Mae cwestiwn y cyflogwr yn newid y metrig: prin y gellir dangos ROI
arian-caled (llai o hawliadau, absenoldeb) ar gyfer cynhyrchion lles —
ateb y diwydiant yw VOI: cynhyrchedd, apêl recriwtio, ymgysylltiad —
sy'n onest dim ond pan gaiff ei labelu fel VOI, nid wedi'i wisgo fel
ROI (gweler return-on-investment.md a social-return-on-investment.md).
```

## Y cysylltiad â pheirianneg feddalwedd

Mae dewisiadau peirianneg yn gosod dwy ochr y gymhareb: mae **cost gwasanaethu** yn bensaernïaeth ([economeg uned cwmwl](../cloud-unit-economics/) — mae ymyl PMPM yn byw neu'n marw ar gost seilwaith fesul aelod), ac mae **LTV** yn beirianneg cadw defnyddwyr (mae pob pwynt colli defnyddiwr yn refeniw rhifyddol — mae gan rifyddeg QALY dogfen [cadw a cholli defnyddwyr](../retention-and-churn/) efell refeniw union). Ar gyfer cynhyrchion iechyd yn benodol, dylai dangosfwrdd economeg uned gario trydedd linell wrth ochr LTV a CAC: **gwerth iechyd fesul defnyddiwr a gaffaelwyd** (QALYs wedi'u pwysoli-cadw × trothwy) — oherwydd bod marchnadoedd talwyr a rhai tebyg i DiGA yn prisio arno fwyfwy, ac oherwydd bod angen i gynnyrch y mae ei economeg fasnachol a chlinigol yn gwahaniaethu (proffidiol ond yn glinigol ddiffrwyth, neu'n effeithiol ond yn anariannadwy) wybod pa broblem sydd ganddo.

## Peryglon

- **LTV o golli defnyddwyr carfan gynnar**: mae colli defnyddwyr yn sefydlogi ar i lawr; ond hefyd goroesiad — mae mabwysiadwyr cynnar yn cadw'n well na chynulleidfaoedd wedi'u graddfa. Defnyddiwch ddata carfan aeddfed.
- **CAC wedi'i gymysgu dros sianeli**: mae CAC cyfryngau cymdeithasol taledig a CAC atgyfeiriad clinigwr yn gwahaniaethu 10×, gyda phroffiliau cadw dirgroes — segmentwch neu cewch eich camarwain.
- **PMPM heb gapiau defnydd**: gall aelodau eithafol-ymgysylltiedig wrthdroi ymylon; modelwch y dosraniad, nid y cymedr.
- **VOI wedi'i gyflwyno fel ROI** i CFO — y methiant credadwyedd y bu'r diwydiant lles-cyflogwyr yn ei ennill dros ddegawd.

## Ffynonellau

- Healthtech unit economics primers. <https://smart-it.io/blog/how-to-calculate-unit-economics-for-healthcare-startups/>
- PMPM pricing frameworks for digital health. <https://www.quintupleaim.com/blog/strategic-pricing-for-digital-health-startups-in-value-based-care-per-member-per-month-pmpm-frameworks>
