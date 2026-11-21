# Käschte-Effektivitéits-Analyse (CEA)

D'CEA vergläicht d'Käschte vun alternativen Interventiounen géint een eenzegen Outcome, gemoss a **natierlechen Eenheeten** — Liewensjoer, erkannt Fäll, vermeid Admissiounen, mmHg reduzéierte Bluttdrock. Hir Output ass eng Käschte pro Eenheet Outcome.

## Firwat et wichteg ass

D'CEA ass de Wierkpäerd-Verglach, wann all Optiounen dee selwechten Outcome unzielen. Si äntwert „wéi eng vun dëse Weeër, X z'erreechen, ass de bescht Gebrauch vu Geld?" — awer *net* „ass X iwwerhaapt wäert z'erreechen?" (dat brauch [Käschten-Notzen-Analyse](../käschten-notzen-analyse/)) a *net* „wéi vergläicht sech X mat net verbonne Prioritéiten?" (dat brauch [Käschte-Notzwäert-Analyse](../käschte-notzwäert-analyse/) an en generesche Outcome wéi de QALY).

## D'Mathematik

D'Verglächsstatistik ass den [ICER](../inkrementellt-käschte-effektivitéitsverhältnis/) a natierlechen Eenheeten:

```
ICER = (Käschten_A − Käschten_B) / (Effekt_A − Effekt_B)
     = £ pro zousätzlech erkannte Fall / vermeide Admissioun / usw.
```

Prozedur: d'Outcome-Eenheet definéieren; all Optioun aus der selwechter [Perspektiv](../analyseperspektiv/) iwwer deeselwechten [Zäithorizont](../zäithorizont/) bewäerten; dominéiert Optiounen eliminéieren ([Effizienzfrontière](../dominanz-an-effizienzfrontière/)); inkrementell Verhältnisser entlaanscht der Frontière berechnen.

## Berechent Beispill

Dräi Weeër, fir net diagnostizéiert Vorhofflimmeren an enger Bevëlkerung vun 100.000 ze fannen:

```
Optioun                      Käschten    Erkannte Fäll
Opportunistesch Pulskontrollen 150.000 £     300
Apdikt-Screening-Eventer       400.000 £     520
Wearable-baséiert Screening    900.000 £     610

ICER Apdikt vs. Puls:     (400k−150k)/(520−300) = 1.136 £ pro zousätzleche Fall
ICER Wearable vs. Apdikt: (900k−400k)/(610−520) = 5.556 £ pro zousätzleche Fall
```

Ob 5.556 £ pro zousätzleche Fall „et wäert sinn" hänkt vum Wäert vun engem fonnte Fall of (Schlaganfall-Präventioun nodeeleg) — d'CEA rangéiert d'Optiounen, awer d'Adoptiounsentscheedung brauch dës extern Bewäertung. Bemierkt, datt d'*Duerchschnëttskäschten* pro Fall bei der Wearable-Optioun (900k/610 = 1.475 £) gutt ausgesäit; déi *inkrementell* 5.556 £ si déi éierlech Zuel fir d'Expansiounsentscheedung.

## Bezuch zur Softwareentwécklung

D'CEA ass dat richtegt Template, wann Optiounen een Outcome deelen: Käschte pro eliminéierten Flaky-Test iwwer dräi Remediatiounsusätz; Käschte pro vermeidenen Incident iwwer Observability-Vendoren; Käschte pro erfollegräiche Deployment iwwer CI-Architekturen. D'Disziplin, déi se duerchsetzt — eng deklaréiert Outcome-Eenheet, inkrementell (net Duerchschnëtts-)Verhältnisser, dominéiert Optiounen als éischt eliminéieren — killt déi meescht schlecht Vendor-Vergläicher, ier d'Präisdiskussioun ufänkt.

## Falen

- **Optiounen mat verschiddenen Outcomes vergläichen** („Fäll fonnt" vs. „Zefriddenheet") an enger CEA — dat brauch [Käschte-Konsequenz-Analyse](../käschte-konsequenz-analyse/) oder en generesche Outcome.
- **Duerchschnëtts-Käschte-Effektivitéitsverhältnisser**, wou inkrementell gebraucht ginn (dat Wearable-Beispill hei uewen).
- **Outcome-Eenheeten, déi fir d'Schmeechelei gewielt ginn**: „generéiert Alerten" ass en Output, keen Outcome; op Eenheeten bestoen, déi Wäert droen.

## Quellen

- CDC POLARIS: cost-effectiveness analysis. <https://www.cdc.gov/policy/polaris/economics/cost-effectiveness/index.html>
- York Health Economics Consortium glossary. <https://yhec.co.uk/glossary/cost-effectiveness-analysis/>
