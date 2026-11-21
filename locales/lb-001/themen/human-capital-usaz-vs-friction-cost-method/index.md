# Human-Capital-Usaz vs. Friction-Cost-Method

Dat sinn déi zwou konkurréierend Methoden, fir verluer Produktivitéit — duerch Krankheet, Behënnerung oder Doud — a Krankheetskäschten- a Käschten-Notzen-Studien ze bewäerten. De Human-Capital-Usaz (HCA) bewäert all verluer Output fir déi ganz Dauer vun der Absenz zum Lounsaz; d'Friction-Cost-Method (FCM) bewäert en nëmme fir déi méi kuerz Period, déi en Employer tatsächlech brauch, fir d'Produktioun nei opzebauen. D'Wiel tëscht hinnen ännert eng Indirekt-Käschte-Schätzung ëm de Facteur zwee oder méi.

## Firwat et wichteg ass

Indirekt (Produktivitéits-)Käschte sinn eng vun de ëmstridden Zeilen an der Gesondheetsökonomie, genau well déi zwou Standardmethode sou staark ofwäichen. HCA behandelt all Absenzdag als Dag Output, deen d'Wirtschaft wierklech verléiert, bewäert zum vollen Loun fir déi voll Dauer — oder, bei Doud oder permanenter Behënnerung, fir dat verbleiwend Aarbechtsliewen. FCM argumentéiert, datt an enger Wirtschaft mat Aarbechtslosegkeet a Marktspillraum déi meescht vun enger laanger Absenz den nationalen Output net tatsächlech reduzéiert, soubal en Employer e Remplaçant trainéiert oder d'Aarbecht ëmverdeelt huet; nëmmen déi „Friction-Period" — d'Zäit, fir d'Produktioun op hiert fréiert Niveau zréckzebréngen — representéiert e reelle Verloscht. FCM produzéiert dofir systematesch méi niddreg, méi konservativ Indirekt-Käschte-Schätzungen wéi HCA, an déi zwou Methoden sinn keng austauschbar Fussnoten: se sinn verschidde ökonomesch Theorien doriwwer, wat „verluer Produktivitéit" heescht. Dat ass och, firwat [dem NICE säi Referenzfall](../gesondheetstechnologie-bewäertung/) Produktivitéitskäschte standardméisseg ausschléisst, a se, wann iwwerhaapt, als separat Sensitivitéitsanalys vun der gesellschaftlecher Perspektiv mellt, amplaz se an den Referenzfall-ICER ze vermëschen — kuckt [Analyseperspektiv](../analyseperspektiv/).

## D'Mathematik

```
Human-Capital-Usaz:
HCA_Käschten = Dageslouhn × verluer_Deeg

Friction-Cost-Method (vereinfacht, op Friction-Period gedeckelt Form):
FCM_Käschten = Dageslouhn × min(verluer_Deeg, Friction_Period_Deeg)

Friction_Period_Deeg = lands-/sektorspezifesch Schätzung vun der Zäit, fir d'Produktioun
                       nei opzebauen (historesch ~85 Deeg an der hollännescher
                       iMTA-Käschteguidance; variéiert no Land a gëtt
                       periodesch nei geschat)
```

De ganzen Ënnerscheed tëscht den zwou Methode läit am `min()`: HCA deckelt `verluer_Deeg` ni, also wiisst d'Käschte fir déi ganz Absenz weider, wärend FCM déi gezielt Deeg op d'Friction-Period deckelt, egal wéi laang d'tatsächlech Absenz leeft.

## Berechent Beispill

E Mataarbechter ass `verluer_Deeg = 180` Deeg net um Aarbechtsplaz, mat `Dageslouhn = 150 £`.

**Human-Capital-Usaz**:

```
HCA_Käschten = 150 × 180 = 27.000 £
```

**Friction-Cost-Method**, mat enger Friction-Period vun `Friction_Period_Deeg = 85` (de historeschen hollänneschen iMTA-Benchmark, Stand vun der periodescher Nei-Schätzung vun der Guidance):

```
FCM_Käschten = 150 × min(180, 85) = 150 × 85 = 12.750 £
```

Dem FCM seng 12.750 £ si manner wéi d'Halschent vum HCA seng 27.000 £ fir *déiselwecht* Absenz — d'Wiel vun der Method eleng ännert e Krankheetskäschte-Fall wesentlech, ier iergend eng aner Annahm beréiert gëtt.

## Bezuch zur Softwareentwécklung

Dat mapt direkt drop, wéi en Team bewäert, wann en Ingenieur fortgeet:

- **HCA-Stil Attritioun-Käschtekalkulatioun**: de Verloscht als dat voll Gehalt vum fortgaangenen Ingenieur bewäerten, fir wéi laang d'Roll vakant bleift. Dat ass déi naiv Versioun vun de meeschten Attritiouns-Käschte-Modeller, an et iwwerschätzt de Verloscht aus dem selwechte Grond, aus dem HCA de Produktivitéitsverloscht iwwerschätzt — et hëlt un, déi vakant Kapazitéit wier déi ganz Zäit voll produktiv gewiescht an näischt anescht hätt de Spillraum opgeholl. Kuckt [Workforce Retention](../personalbindung/), dat d'Rekrutéierungs-/Onboarding-/Vakanz-Ofdeckungs-Kette quantifizéiert, an déi dës Method fiddert.
- **FCM-Stil Attritioun-Käschtekalkulatioun**: de Verloscht nëmme fir déi tatsächlech Zäit bewäerten, fir en Ersatz ze fannen an anzearbechten — d'Engineering-„Friction-Period". Dat ass déi verdeedegbarer Zuel fir e Business Case, genau wéi FCM déi méi konservativ Wiel an enger Krankheetskäschte-Studie ass.
- D'zugrondeliegend Disziplin ass dee selwechte wéi bei [Opportunitéitskäschten](../opportunitéitskäschten/): eng verdrängt Ressource nom bewäerten, wat wierklech verluer geet, net no enger Schlagzeil-Dauer mol engem Saz.

## Falen

- **HCA an FCM an enger Analyse vermëschen, oder nëmmen eng mellen ouni d'Wiel offenzeleeën.** Déiselwecht Absenzdaten kënnen en 2×+-Ënnerscheed an de gemellte Käschten produzéieren, jee nom Method; d'Wiel muss uginn, net begruewen ginn.
- **HCA fir e gesellschaftlech-Perspektiv-Fall benotzen ouni et als Sensitivitéitsanalys ze flaggen.** Dem NICE säi Referenzfall schléisst Produktivitéitskäschte explizit aus; eng HCA-Schätzung vun der gesellschaftlecher Perspektiv gehéiert an eng Szenarioanalys, net an den Schlagzeil-ICER.
- **Eng vun de Methoden op onbezuelt oder Net-Maart-Aarbecht (z. B. Betreiung) ouni Ajustéierung uwenden.** Béid Methoden huelen e Lounsaz als Proxy fir Wäert un, wat sech net propper op Aarbecht ouni Maartloun iwwerdréit.

## Quellen

- Koopmanschap MA, Rutten FFH, van Ineveld BM, van Roijen L. "The friction cost method for measuring indirect costs of disease." Journal of Health Economics 1995;14(2):171-89.
- Drummond MF, Sculpher MJ, Claxton K, Stoddart GL, Torrance GW. "Methods for the Economic Evaluation of Health Care Programmes." 4th ed. Oxford University Press — topic on productivity costs.
- NICE health technology evaluations manual (PMG36) — reference-case perspective and optional societal-perspective guidance. <https://www.nice.org.uk/process/pmg36>
