# Asesiad Technoleg Iechyd (HTA)

Mae HTA yn broses ffurfiol, sefydliadol y mae systemau iechyd yn ei defnyddio i benderfynu a yw technoleg — cyffur, dyfais, neu feddalwedd — yn werth talu amdani. Mae'n cyfuno tystiolaeth effeithiolrwydd clinigol ag arfarniad economaidd o dan fethodoleg gyhoeddedig, orfodol.

## Pam mae hyn yn bwysig

Os ydych yn gwerthu i wasanaeth iechyd cenedlaethol, gall corff HTA benderfynu, yn llythrennol, ar eich mynediad i'r farchnad. Mae adnabod y broses leol yn golygu adnabod eich gwir reoleiddiwr gwerth:

- **NICE (Lloegr)**: arfarniadau statudol o dan *achos cyfeirio* diffiniedig — QALYs o [EQ-5D](../eq-5d/), [persbectif](../analysis-perspective/) GIG+PSS, [disgowntio](../discounting-and-time-preference/) 3.5%, [PSA](../probabilistic-sensitivity-analysis/) yn ofynnol — wedi'u barnu yn erbyn £20k–£30k/QALY gyda [addasyddion difrifoldeb](../qaly-shortfall-and-severity-modifiers/); technolegau hynod arbenigol hyd at £100k+ gyda phwysoli.
- **ICER (UDA, anllywodraethol)**: adroddiadau tystiolaeth gyda *maen prawf pris budd-iechyd* — y pris y byddai cynnyrch yn gost-effeithiol ynddo ar $100k–$150k y QALY/evLYG — a ddefnyddir fel ysgogiad negodi; ynghyd â "rhybuddion fforddiadwyedd" effaith gyllideb.
- **Canada (CADTH → CDA-AMC)**: adolygiadau ad-dalu ar ≈CAD$50k/QALY; yn hanesyddol wedi gofyn am doriadau prisiau mewn ~95% o gyflwyniadau.

## Y Fathemateg

Nid fformiwla yw grym HTA ond **dull gorfodol**: mae pob cyflwyniad yn cyfrifo'r un [ICER](../incremental-cost-effectiveness-ratio/) o dan yr un rheolau achos cyfeirio, felly mae canlyniadau'n gymharadwy ar draws cynhyrchion a blynyddoedd. Mae'r achos cyfeirio yn nodi'r mesur canlyniad, yr offeryn defnyddioldeb, y persbectif, y dewis cymharydd, y gyfradd ddisgownt, y gorwel amser, a'r dadansoddiad ansicrwydd — gan ddileu pob gradd o ryddid y gallai noddwr ei chamddefnyddio.

## Enghraifft Waith

Mae therapiwtig digidol yn cyflwyno ar gyfer gwerthusiad ar ffurf NICE:

```
Model: ΔC = +£450/claf, ΔE = +0.03 QALY → ICER = £15,000/QALY ✓ o dan £20k
Gwiriadau'r achos cyfeirio:
  defnyddioldebau o EQ-5D-5L gyda set werthoedd y DU               ✓
  cymharydd = llwybr gofal presennol (nid "dim triniaeth")         ✓
  PSA: 71% tebygolrwydd cost-effeithiol ar £20k                    ✓ (adroddwyd)
  addasydd difrifoldeb: diffyg islaw ffiniau ×1.2                  — dim honiad
Argymhelliad: comisiynu arferol, gyda chasglu data byd-go-iawn.
```

Roedd dadansoddiad dewisol y noddwr ei hun yn dangos £9,000/QALY; gwthiodd yr achos cyfeirio hyn i £15,000 drwy orfodi'r cymharydd gonest. Dyna'r bwlch sy'n esbonio *pam* mae achosion cyfeirio'n bodoli.

## Cysylltiad Peirianneg Feddalwedd

Yr arteffact trosglwyddadwy yw'r **achos cyfeirio mewnol**: un dull gorfodol ar gyfer holl achosion busnes offer/platfform — cymharydd datganedig, costau uned safonol (gweler [tariff cenedlaethol a chostau uned](../national-tariff-and-unit-costs/) am y patrwm), cyfradd ddisgownt sefydlog, dadansoddiad sensitifrwydd gofynnol, templed safonol. Mae "dosier arddull-AMCP ar gyfer offer" a gyflwynir i gyngor platfform yn gwneud cynigion yn gymharadwy ac yn dinoethi camchwarae, yn union fel y mae HTA yn ei wneud ar gyfer meddyginiaeth. Dechreuwch yn llai uchelgeisiol na NICE: mae templed dwy dudalen ynghyd â llyfr prisiau cyhoeddedig yn well nag unrhyw ddiffyg safon o gwbl.

## Peryglon

- **Trin HTA fel ffurfioldeb ar ôl clirio rheoleiddiol** — mae clirio CE/UKCA/FDA yn dweud bod cynnyrch yn ddiogel; mae HTA yn penderfynu a yw'n *werth ei brynu*. Rhwystr gwahanol, tystiolaeth wahanol.
- **Adeiladu'r model economaidd ar ôl y treial** — dylid cynllunio cynhyrchu tystiolaeth am yn ôl o ofynion yr achos cyfeirio.
- **Anwybyddu gwahaniaethau awdurdodaeth**: mae ICER y gellir ei ariannu yn UDA ar $120k/QALY yn methu NICE ar £30k; cynlluniwch dystiolaeth a phrisio fesul marchnad.

## Ffynonellau

- Llawlyfr gwerthusiadau technoleg iechyd NICE (PMG36). <https://www.nice.org.uk/process/pmg36>
- Fframwaith Asesu Gwerth ICER 2023. <https://icer.org/our-approach/methods-process/value-assessment-framework/>
- Asiantaeth Cyffuriau Canada (CDA-AMC). <https://www.cda-amc.ca/>
