# Bidalketatik tratamendura (Referral to Treatment, RTT)

Bidalketatik tratamendura bitarteko denbora mediku orokorraren bidalketatik aholkulariak zuzendutako tratamenduaren hasierara igarotako denbora da. NHS Konstituzioak estandarra ezartzen du: **pazienteen %92k tratamenduari 18 asteren barruan hasi behar diote**. RTT Ingalaterrako NHSko eragiketa-metrika politikoki ikusgarriena da.

## Zergatik axola duen

RTT helburuak huts egiten dituzten trust-ek ikuskapen arautzailea, esku-hartzea eta ospe-kaltea jasaten dituzte; itxaron-zerrenda nazionala lehen orriko zenbakia da. Pazientea itxaroten egoten den aste bakoitza galdutako osasuna da (osasun-egoera txarragoan itxaroten; ikus beheko QALY matematika) eta sarri irabazitako kostua (egoerak okertzen dira; ikus [esku-hartze goiztiarra](../esku-hartze-goiztiarra/)). Bidalketatik tratamendura bidearen edozein puntutan denbora aurrezten duen softwareak (triage, diagnostikoen itzulera, kliniken kapazitatea, programazioa) estandarrak huts egitearen ondorio operatibo eta finantzarioak zuzenean arintzen ditu, eta horregatik da RTT inpaktua NHSko negozio-kasu digitaletan lehen mailako onura-lerroa.

## Matematika

```
RTT performance = patients treated within 18 weeks / total treated × 100
Waiting-time health cost per patient = wait duration × (utility_treated − utility_waiting)

Pathway view: RTT = Σ stage durations (referral triage → first appointment →
diagnostics → decision → treatment) — improve the longest queue, not the
busiest stage (see flow-metrics.md).
```

## Adibide landua

Espezialitate batek urtean 5.000 bide-paziente tratatzen ditu; batez besteko itxaronaldia 24 aste; itxaroteko utilitatea 0,68 vs tratatuarena 0,80.

Triage digitalak eta zuzenean-probara protokoloek 5 aste ilara hutsa kentzen dituzte:

```
QALY gain = 5,000 × (5/52) × (0.80 − 0.68) = 57.7 QALYs/year
Monetized at £20,000–£30,000/QALY (see willingness-to-pay-thresholds.md):
  ≈ £1.15M–£1.73M/year of health value
```

Gainera, trust-a 18 asteko estandarra urratzetik betetzera pasatzen da, eta horrek inongo kalkulu-orrik guztiz jasotzen ez duen gobernantza-balioa du.

## Software ingeniaritzarekin lotura

RTT **etapa anitzeko ilara baten gaineko lead-time metrika** da: ospitalearen bertsioa commit-etik ekoizpenera bitarteko lead time-arena (ikus [DORA metrikak](../dora-metrikak/)). Hobetzeko metodoa berdina da: instrumentatu etapa guztiak, aurkitu egutegi-denbora non pilatzen den (ia beti eskuz-eskuak eta ilarak dira, ez lan klinikoa) eta kendu itxaron-egoerak. Software-irabazi tipikoak: bidalketak asteroko loteen ordez orduetan bideratzen dituen e-triagea, jarraipen-hitzorduen ordez diagnostiko-emaitzen push-a eta zuzenean-probara irizpide automatikoak. Baloratu hobekuntza QALY/aste moneta duen [atzerapenaren kostua](../atzerapenaren-kostua/) erabiliz.

## Tranpak

- **Murrizpena ez den etapa bat hobetzea** — lehen hitzorduaren itxaronaldiak mozteak, diagnostiko-ilarak hazten diren bitartean, putzua mugitu besterik ez du egiten.
- **Jokoaren manipulazioa**: bide-berrezarpenek eta erloju-pausek jakinarazitako RTT hobe dezakete inor lehenago tratatu gabe; auditatu azpiko banaketa.
- **Bide osoaren hobekuntza tresna bati egoztea** hainbat aldaketa batera iritsi direnean — egozteak konparatzailea behar du.

## Iturriak

- NHS England, RTT waiting times statistics. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
