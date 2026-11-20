# Gwerth Disgwyliedig Gwybodaeth Sampl (EVSI)

EVSI yw gwerth *astudiaeth benodol a gynigir* — dyluniad penodol, maint sampl penodol — cyn ei chynnal, yn hytrach na [EVPI](../gwerth-disgwyliedig-gwybodaeth-berffaith/), sy'n prisio dileu pob ansicrwydd yn llwyr. Mae EVSI yn ateb y cwestiwn y mae cyllidwr ymchwil yn ei wynebu mewn gwirionedd: "a yw *y* treial hwn, ar y maint *hwn*, yn werth ei gost?"

## Pam mae hyn yn bwysig

Mae EVPI yn dweud wrthych y nenfwd ar yr hyn y gallai unrhyw ymchwil fod yn werth; nid yw byth yn dweud a yw'r treial sydd o'ch blaen yn cyrraedd y trothwy. Mae cyllidwr ymchwil cenedlaethol sy'n dewis rhwng peilot o 50 claf a threial diffiniol o 500 claf angen gwybod faint o werth sydd i *bob dyluniad penodol*, nid dim ond gwerth hollwybodaeth. Mae EVSI yn cyflenwi'r rhif hwnnw, a chan ei fod yn graddio gyda maint y sampl, mae'n caniatáu i gyllidwr ganfod y maint sampl sy'n uchafu'r budd net disgwyliedig yn hytrach na dyfalu.

Dyma hefyd pam mae EVSI bob amser yn llai na neu'n hafal i EVPI: ni all sampl meidraidd ond datrys ansicrwydd yn rhannol, ac mae astudiaeth sy'n ymddangos yn fwy gwerthfawr na gwybodaeth berffaith yn arwydd bod y cyfrifiad yn anghywir, nid canlyniad go iawn.

## Y Fathemateg

```
Cyffredinol:
EVSI(n) = E_data[ max_d E_θ|data[NB(d,θ)] ]  −  max_d E_θ[NB(d,θ)]
  (disgwyliad nythiedig: allanol dros ganlyniadau astudiaeth posibl, mewnol
  dros y gred ôl-ddosraniadol am θ ar ôl gweld y canlyniad hwnnw — fel arfer
  wedi'i amcangyfrif gan Monte Carlo nythiedig / diweddaru Bayesaidd dros
  dynnu'r dadansoddiad sensitifrwydd tebygolyddol)

Brasamcan normal ffurf gaeedig (un paramedr ansicr, model normal-normal
cyfun — llwybr byr safonol, nid yn union ar gyfer pob model):
EVSI(n) = EVPI × n / (n + n0)

n  = maint sampl yr astudiaeth a gynigir
n0 = "maint sampl cyfwerth blaenorol" — maint sampl dychmygol a fyddai'n
     cario'r un wybodaeth â'r blaenorol presennol, wedi'i ddeillio o gymhareb
     amrywiant data i amrywiant blaenorol
ENBS(n) = EVSI(n) − Cost(n)
EVSI poblogaeth = EVSI_fesul_penderfyniad × penderfyniadau_yr_effeithir_arnynt
```

Mae'r ffurf gyffredinol yn ddisgwyliad nythiedig oherwydd bod canlyniad dyfodol astudiaeth ei hun yn ansicr: rhaid cyfartaleddu dros bob set ddata y gallai'r astudiaeth ei chynhyrchu, ac ar gyfer pob un ailgyfrifo'r penderfyniad gorau o ystyried y gred ddiweddaredig (ôl-ddosraniadol). Mae'r brasamcan normal ffurf gaeedig yn cyfnewid y gost gyfrifiadurol honno am un gymhareb, yn ddilys pan fo'r paramedr ansicr a'r data (yn fras) yn normal ac yn gyfun — hwylustod, nid cyfraith gyffredinol. Monte Carlo nythiedig llawn yw'r dull pwrpas cyffredinol pan nad yw'r dybiaeth honno'n dal. Gweler [dadansoddiad sensitifrwydd tebygolyddol](../dadansoddiad-sensitifrwydd-tebygolyddol/) am y tynnu PSA y mae EVSI fel arfer yn cael ei amcangyfrif ohonynt.

## Enghraifft Waith

Gan adeiladu ar enghraifft waith [EVPI](../gwerth-disgwyliedig-gwybodaeth-berffaith/) — cyflwyno cynorthwyydd dogfennaeth AI i 5,000 o glinigwyr, lle canfuwyd bod EVPI yn £1.2M — mynegwch yr un EVPI yma mewn punnoedd cyfan: **EVPI = £1,200,000**.

Mae astudiaeth beilot arfaethedig o 50 clinigwr ar y bwrdd. O gymhareb amrywiant y gred flaenorol i fanylder mesur y peilot, mae'r maint sampl cyfwerth blaenorol yn dod i `n0 = 75`:

```
EVSI(50) = 1,200,000 × 50 / (50 + 75)
         = 1,200,000 × 50 / 125
         = 1,200,000 × 0.4
         = £480,000
```

Mae'r peilot yn costio £120,000:

```
ENBS = EVSI − Cost = 480,000 − 120,000 = £360,000
```

ENBS clir bositif: ariannu'r peilot. Os yw'r un penderfyniad caffael yn digwydd eto ar draws 3 ymddiriedolaeth ranbarthol tebyg, mae gwerth y peilot yn graddio:

```
EVSI poblogaeth = 480,000 × 3 = £1,440,000
```

## Cysylltiad Peirianneg Feddalwedd

EVSI yw economeg dewis *pa mor fawr* y dylai peilot neu brawf A/B fod, nid dim ond a ddylid cynnal un o gwbl:

- **Maint sampl fel penderfyniad buddsoddi.** Mae beta o 50 defnyddiwr a chyflwyno cam wrth gam i 5,000 o ddefnyddwyr yn "astudiaethau" gwahanol gydag EVSIs a chostau gwahanol — mae EVSI yn caniatáu i chi eu cymharu ar yr un sail yn hytrach na rhagosod i "mae mwy o ddata bob amser yn well".
- **ENBS, nid EVSI yn unig, yw'r prawf comisiynu.** Mae astudiaeth ag EVSI uchel ond cost sy'n bwyta'r rhan fwyaf ohono yn gynnig gwan; y rheol benderfynu yw budd net disgwyliedig samplu, yn union fel y mae achos busnes yn gosod budd yn erbyn cost yn hytrach nag adrodd y budd yn unig.
- **Mae enillion lleihaol yn eglur.** Gan fod EVSI(n) yn codi gyda `n/(n+n0)`, nid yw dyblu maint peilot byth yn dyblu ei werth — fersiwn ffurfiol o'r reddf beirianegol bod gan arbrawf mwy werth gwybodaeth ymylol sy'n lleihau.

## Peryglon

- **Cymhwyso'r brasamcan normal y tu allan i'w ragdybiaethau.** Mae'n dal dim ond ar gyfer ansicrwydd un paramedr sy'n fras gyfun; mae angen Monte Carlo nythiedig llawn ar fodel penderfynu gwirioneddol aflinol neu aml-baramedr, nid y llwybr byr hwn.
- **Cymharu EVSI â chost arian parod yn unig.** Rhaid pwyso EVSI yn erbyn cost *lawn* yr astudiaeth, gan gynnwys ei chost oedi penderfyniad ei hun — gweler [cost oedi](../cost-oedi/) — nid dim ond anfoneb yr astudiaeth.
- **Trin EVSI > EVPI fel canfyddiad go iawn.** Ni all EVSI byth fod yn fwy nag EVPI trwy adeiladwaith; mae cyfrifiad sy'n cynhyrchu hyn yn fyg modelu, nid darganfyddiad.

## Ffynonellau

- Ades AE, Lu G, Claxton K. "Expected value of sample information calculations in medical decision modeling." Medical Decision Making 2004;24(2):207-27.
- Willan AR, Pinto EM. "The value of information and optimal clinical trial design." Statistics in Medicine 2005;24(12):1791-806.
- Strong M, Oakley JE. "When is a model-based value of information analysis feasible?" Medical Decision Making 2014.
