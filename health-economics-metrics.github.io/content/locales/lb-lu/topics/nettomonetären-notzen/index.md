# Nettomonetären Notzen (NMB)

NMB wandelt e Käschte-Effektivitéitsresultat an e eenzege Geldwäert ëm: Gesondheetsgewënn zur Zuelungsbereetschaftsschwell bewäert, minus Käschten. Säin Zwilling, den Net Health Benefit (NHB), dréckt dee selwechte Reegel a Gesondheetseenheeten aus.

## Firwat et wichteg ass

Verhältnisser ([ICERs](../inkrementellt-käschte-effektivitéitsverhältnis/)) sinn onbequem: si explodéieren no bei null Effekt, kënnen net iwwer Onsécherheets-Zéiunge gemëttelt ginn a kënnen dräi oder méi Optioune net propper rangéieren. NMB fixéiert dat alles — et ass linear, also kann een Optiounen rangéieren, Monte-Carlo-Zéiunge mëtteln an Bäiträg zerleeën. Et ass och déi Form vun der Gesondheetsökonomie-Mathematik, déi all Ingenieur scho kennt: *Wäert minus Käschten*.

## D'Mathematik

```
NMB = (ΔE × λ) − ΔC
NHB = ΔE − (ΔC / λ)

ΔE = inkrementellen Effekt (z. B. QALYs)
ΔC = inkrementell Käschten
λ  = Zuelungsbereetschaftsschwell (kuckt willingness-to-pay-thresholds.md)

Entscheedungsreegel: adoptéieren, wann NMB > 0 (äquivalent NHB > 0).
Ënner Alternativen: dee mat dem héchsten NMB wielen.
```

NMB > 0 ⇔ ICER < λ (wann ΔE > 0), also stëmmen déi zwou Reegele iwwereen — NMB behält sech just besser.

## Berechent Beispill

Dräi Optioune fir e Diabetes-Service, pro 1.000 Patienten, λ = 20.000 £/QALY:

```
Optioun          ΔC          ΔE (QALYs)   NMB = 20.000×ΔE − ΔC
App + Coaching   400.000 £   30           600.000 − 400.000 = 200.000 £
Nëmmen App       150.000 £   12           240.000 − 150.000 = 90.000 £
Extra Kliniken   700.000 £   32           640.000 − 700.000 = −60.000 £
```

Extra Kliniken gewannen déi meescht QALYs, zerstéieren awer bei dëser Schwell Wäert (NMB < 0). App + Coaching gewënnt. Bemierkt, datt NMB dech *all dräi op eemol* rangéiere léisst — paarweis ICERs géife d'Frontière-Prozedur aus [Dominanz an Effizienzfrontière](../dominanz-an-effizienzfrontière/) brauchen, a kommen op déiselwecht Äntwert.

NHB-Sicht vum Gewënner: 30 − 400.000/20.000 = 30 − 20 = **10 QALYs netto** — d'Gesondheet, déi iwwer dat eraus gewonne gëtt, wat dat selwecht Geld soss iergendwou produzéiert hätt.

## Bezuch zur Softwareentwécklung

`(agespuert Stonnen × belaaschte Stonnesaz) − Tool-Käschten` — de alldeegleche Tooling-Business-Case — ass wuertwiertlech eng NMB-Berechnung mat λ = belaaschte Ingenieur-Käschten. Zwee Upgrades, déi Gesondheetsökonomie derbäisetzt:

- **λ zu enger Variabel maachen, net zu enger Konstant.** NMB géint λ plotten („Wäert vun enger Ingenieur-Stonn") a weisen, wou d'Entscheedung ëmschléit; verschidde Stakeholder kënnen dann hir eege Bewäertung uwenden, ouni deng Mathematik nei ze maachen.
- **NHB-Denken**: „dës Plattform spuert 5.000 Ingenieur-Stonnen, verbraucht awer Budget, dat 3.000 Ingenieur-Stonnen Contractor-Kapazitéit kaaft hätt — netto 2.000 Stonnen" erzwéngt den Opportunitéitskäschte-Verglach an Kapazitéitseenheeten. Kuckt [Opportunitéitskäschten](../opportunitéitskäschten/).

## Falen

- **D'Schwell verstoppen**: e NMB ass sënnlos ouni λ unzeginn; NMB bei 20k £ an 30k £ mellen, oder d'Kurv plotten.
- **NMB benotzen, fir winzeg Effekter ze wäschen**: eng riseg Populatioun mol en onbedeitenden Effekt pro Persoun kann e grousse NMB produzéieren — Pro-Persoun-Effekter nieft deem mellen.
- **Vergiessen, datt NMB all Onsécherheet** an ΔC an ΔE ierft — mat [probabilistescher Sensitivitéitsanalyse](../probabilistesch-sensitivitéitsanalyse/) paaren.

## Quellen

- York Health Economics Consortium glossary: net monetary benefit. <https://yhec.co.uk/glossary/net-monetary-benefit/>
- Stinnett AA, Mullahy J. "Net health benefits: a new framework for the analysis of uncertainty in cost-effectiveness analysis." <https://pmc.ncbi.nlm.nih.gov/articles/PMC2528971/>
