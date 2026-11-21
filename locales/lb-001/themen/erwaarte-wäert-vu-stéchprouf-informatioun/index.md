# Erwaarte Wäert vu Stéchprouf-Informatioun (EVSI)

EVSI ass de Wäert vun enger *spezifesch virgeschlagener Studie* — e gewëssen Design, eng gewësse Stéchprouf — éier se duerchgefouert gëtt, am Géigesaz zum [EVPI](../erwaarte-wäert-vu-perfekter-informatioun/), deen de komplette Eliminéiere vun all Onsécherheet bewäert. EVSI äntwert op d'Fro, déi e Fuerschungsfinanzéierer tatsächlech stellt: „ass *dës* Studie, bei *dëser* Gréisst, hir Käschte wäert?"

## Firwat et wichteg ass

EVPI seet dir den Dach dovun, wat eng Fuerschung maximal wäert kéint sinn; et seet dir ni, ob d'Studie virun dir d'Hürd schafft. E nationale Fuerschungsfinanzéierer, deen tëscht engem 50-Patienten-Pilot an enger 500-Patienten-definitiver Studie wielt, muss wëssen, wéi vill *all spezifeschen Design* wäert ass, net just de Wäert vun Allwëssenheet. EVSI liwwert dës Zuel, a well se mat der Stéchprouf skaléiert, léisst se e Finanzéierer d'Stéchprouf fannen, déi de erwaarten Nettonotzen maximéiert, amplaz ze roden.

Dat ass och, firwat EVSI ëmmer kleiner oder gläich EVPI ass: eng endlech Stéchprouf ka Onsécherheet nëmmen deelweis léisen, an eng Studie, déi méi wäert schéngt wéi perfekt Informatioun, ass en Zeechen, datt d'Berechnung falsch ass, kee reellt Resultat.

## D'Mathematik

```
Allgemeng:
EVSI(n) = E_Daten[ max_d E_θ|Daten[NB(d,θ)] ]  −  max_d E_θ[NB(d,θ)]
  (verschachtelt Erwaardung: baussenzeg iwwer méiglech Studieresultater, banne-
  zeg iwwer de Posterior-Glawen iwwer θ nom Gesinn vun deem Resultat — normaler-
  weis duerch verschachtelt Monte Carlo / Bayes'sch Aktualiséierung iwwer
  probabilistesch Sensitivitéitsanalys-Zéiunge geschat)

Geschlossene Normal-Approximatioun (en eenzege onséchere Parameter, konjugéiert
Normal-Normal-Modell — eng Standard-Ofkierzung, net exakt fir all Modell):
EVSI(n) = EVPI × n / (n + n0)

n  = Stéchprouf vun der virgeschlagener Studie
n0 = „Prior-äquivalent Stéchprouf" — d'Gréisst vun enger imaginärer Stéchprouf, déi
     déiselwecht Informatioun wéi dee jetzege Prior droe géif, ofgeleet aus dem
     Verhältnis vun Datevarianz zu Priorvarianz
ENBS(n) = EVSI(n) − Käschten(n)
Populatiouns-EVSI = EVSI pro Entscheedung × betraffe Entscheedungen
```

Déi allgemeng Form ass eng verschachtelt Erwaardung, well dat zukünftegt Resultat vun enger Studie selwer onsécher ass: dir musst iwwer all méiglechen Datesaz mëtteln, deen d'Studie produzéiere kéint, a fir all een d'bescht Entscheedung gegeben den aktualiséierten (Posterior-)Glawen nei berechnen. Déi geschlossen Normal-Approximatioun tauscht dës Rechenaarbecht géint e eenzegt Verhältnis, gülteg wann den onsécheren Parameter an d'Daten (ongeféier) normalverdeelt a konjugéiert sinn — eng Bequemlechkeet, kee universellt Gesetz. Voll verschachtelt Monte Carlo ass d'Allzweck-Method, wann dës Annahm net gëllt. Kuckt [probabilistesch Sensitivitéitsanalyse](../probabilistesch-sensitivitéitsanalyse/) fir d'PSA-Zéiungen, aus deenen EVSI normalerweis geschat gëtt.

## Berechent Beispill

Opbauend op dem [EVPI](../erwaarte-wäert-vu-perfekter-informatioun/)-Beispill — en KI-Dokumentatiounsassistent un 5.000 Kliniker ausrollen, wou EVPI als 1,2 Mio. £ fonnt gouf — dee selwechten EVPI hei a ganze Pond ausgedréckt: **EVPI = 1.200.000 £**.

Eng virgeschloe Pilotstudie mat 50 Kliniker läit um Dësch. Aus dem Verhältnis vun der Varianz vum Prior-Glawen zur Moosspräzisioun vum Pilot ergëtt sech d'Prior-äquivalent Stéchprouf `n0 = 75`:

```
EVSI(50) = 1.200.000 × 50 / (50 + 75)
         = 1.200.000 × 50 / 125
         = 1.200.000 × 0,4
         = 480.000 £
```

De Pilot kascht 120.000 £:

```
ENBS = EVSI − Käschten = 480.000 − 120.000 = 360.000 £
```

E kloer positiven ENBS: de Pilot finanzéieren. Wann dee selwechte Beschaffungsentscheedung bei 3 ähnleche regionalen Trusts widderkënnt, skaléiert de Wäert vum Pilot:

```
Populatiouns-EVSI = 480.000 × 3 = 1.440.000 £
```

## Bezuch zur Softwareentwécklung

EVSI ass d'Ökonomie vun der Wiel, *wéi grouss* e Pilot oder A/B-Test soll sinn, net just ob ee iwwerhaapt gemaach gëtt:

- **Stéchprouf-als-Investitiouns-Entscheedung.** E 50-Notzer-Beta an e 5.000-Notzer-gestuften Rollout si verschidde „Studien" mat verschiddenen EVSIs a verschiddene Käschten — EVSI léisst dech se op der selwechter Basis vergläichen amplaz op „méi Daten sinn ëmmer besser" ze defaulten.
- **ENBS, net EVSI eleng, ass den Test fir d'Commissioning.** Eng Studie mat héijem EVSI, awer Käschten, déi de gréissten Deel dovun opfriessen, ass e schwaache Virschlag; d'Entscheedungsreegel ass den erwaarten Nettonotzen vum Sampling, genau wéi e Business Case Notzen géint Käschte verrechent amplaz Notzen eleng ze mellen.
- **Ofhuelend Erträg si explizit.** Well EVSI(n) mat `n/(n+n0)` klëmmt, verduebelt e Verduebelen vun der Pilotgréisst ni säi Wäert — eng formell Versioun vum Ingenieurs-Instinkt, datt e gréissert Experiment ofhuelende marginale Informatiounswäert huet.

## Falen

- **Déi Normal-Approximatioun baussent hiren Annahmen uwenden.** Si gëllt nëmmen fir ongeféier konjugéiert Eenparameter-Onsécherheet; e wierklech nonlinear oder Méi-Parameter-Entscheedungsmodell brauch voll verschachtelt Monte Carlo, net dës Ofkierzung.
- **EVSI nëmme mat de Cashkäschte vergläichen.** EVSI muss géint déi *voll* Käschte vun der Studie ofgewei ginn, inklusiv hir eege Entscheedungsverzögerungskäschten — kuckt [Verzögerungskäschten](../verzögerungskäschten/) — net nëmmen d'Rechnung vun der Studie.
- **EVSI > EVPI als reellen Befund behandelen.** EVSI kann EVPI per Konstruktioun ni iwwerschreiden; eng Berechnung, déi dat produzéiert, ass e Modellbug, keng Entdeckung.

## Quellen

- Ades AE, Lu G, Claxton K. "Expected value of sample information calculations in medical decision modeling." Medical Decision Making 2004;24(2):207-27.
- Willan AR, Pinto EM. "The value of information and optimal clinical trial design." Statistics in Medicine 2005;24(12):1791-806.
- Strong M, Oakley JE. "When is a model-based value of information analysis feasible?" Medical Decision Making 2014.
