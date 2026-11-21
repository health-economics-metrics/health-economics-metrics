# Vermeid nodeeleg Käschten

Vermeid nodeeleg Käschten (Cost Offsets) si zukünfteg Behandlungsausgaben, déi duerch fréier oder besser Handelen verhënnert ginn, mat de Käschte vun der Interventioun selwer verrechent. Offsets sinn de Mechanismus, duerch deen eng Interventioun *dominant* ka ginn — méi bëlleg **an** besser — a si sinn och déi am dackste duebel gezielt, iwwerbehaapt Zeil an der Gesondheetsökonomie.

## Firwat et wichteg ass

Bal all Wäertverspriechen an der digitaler Gesondheet enthält eng Offset-Behaaptung: „eis App verhënnert Admissiounen", „eis Alerten verhënneren Verschlechterung", „eis Plattform vermeit duebel Tester". Wann Offsets reell sinn, transforméieren se d'Ökonomie (kuckt d'Beispill beim [ICER](../inkrementellt-käschte-effektivitéitsverhältnis/), wou en Offset vu 600k £ de Fall mécht). Zueler wëssen dat — also zéien Offset-Behaaptungen déi haartst Kontroll an all Bewäertung un sech. D'Glaubwürdegkeetsreegele ënnendrënner trennen e finanzéierbare Modell vu Marketing.

## D'Mathematik

```
Nettokäschten = Interventiounskäschten − Σ Offsets

E gülteegen Offset muss sinn:
  Zouweisbar    — kausal mat der Interventioun verknäppt (Komparator-Evidenz)
  Marginal      — d'Geld hält wierklech op, ausginn ze ginn, zu Grenz- net
                  Duerchschnëttskäschte (kuckt marginal-vs-average-cost.md)
  Wahrschein-   — gewiicht mat P(dat nodeeleg Evenement wier opgetruede)
  lechkeets-
  gewiicht
  Diskontéiert  — zukünfteg vermeid Käschte zum Barwert
  Eendeiteg     — eemol gezielt, an enger Notzenzeil
```

## Berechent Beispill

„Dës Migratiounsrisiko-Behaaptung, richteg gemaach": eng Wonn-Monitoring-App fir 5.000 postoperativ Patiente behaapt, infektiounsbedingt Readmissiounen ze vermeiden.

```
Baseline-Readmissioun wéinst Infektioun: 4,0 % ; mat App (RCT): 3,1 %
Zouweisbar vermeid Evenementer = 5.000 × 0,009 = 45/Joer
Käschte pro Readmissiounsepisod (marginal, dësen Trust): 3.200 £
Offset = 45 × 3.200 = 144.000 £/Joer
App-Käschten = 5.000 × 20 £ = 100.000 £/Joer
Nettokäschten = −44.000 £ → wierklech käschtespuerend, mat:
  Attributioun aus engem RCT ✓  Grenzkäschtekalkulatioun ✓  Wahrscheinlechkeet aus Studiedaten ✓
```

Déiselwecht Behaaptung, opgebaut op „Readmissioune kaschten am Duerchschnëtt 5.800 £, mir verhënneren eng ganz Rëtsch", fält bei alle véier Tester duerch a verdéngt d'Oflehnung, déi se kritt.

## Bezuch zur Softwareentwécklung

„Dës Migratioun vermeit de spéidere Rewrite" ass eng Offset-Behaaptung, an d'Reegele vun der Gesondheetsökonomie maachen se éierlech:

- **Kontrafaktesch Käschten**: wat géif de Rewrite wierklech kaschten, an wéi beleet?
- **Wahrscheinlechkeet**: wéi wahrscheinlech ass déi Zukunft? (Net 100 % — Produkter ginn ofgeschaaft, Prioritéite ännere sech.)
- **Diskontéierung**: e Rewrite, dee mat 3,5–10 % Diskont am Joer 4 vermeit gëtt, ass vill manner wäert wéi den Nennwäert.
- **Eendeitegkeet**: behaapt net dee selwechte vermeide Rewrite och nach an der Tech-Debt-Zeil an an der Retentiounszeil.

`Offset-Wäert = P(zukünftegt Evenement) × kontrafaktesch Käschten × Diskontfaktor` — schreift dës Zeil an den Virschlag a kuckt, wéi d'Schätzung diskutabel gëtt, wat de Punkt ass.

## Falen

- **Duebelzielen** — dee selwechte vermeide Spidolsopenthalt als Offset, als Bettdeeg an als QALYs-mat-Käschte behaapt.
- **Offsets zu Duerchschnëttskäschten** fir Evenementer, deenen hir Fixkäschten egal wat weiderlafen.
- **Stëll 100 % Wahrscheinlechkeet** bei nodeelegen Evenementer, déi just méiglech waren.
- **Offsets bei aneren Budgeten**, déi als Ersparnisser fir de Zueler presentéiert ginn, dee gefrot gëtt ze bezuelen — kuckt [Analyseperspektiv](../analyseperspektiv/).

## Quellen

- York Health Economics Consortium glossary: cost offset. <https://yhec.co.uk/glossary/cost-offset/>
- Cohen JT, Neumann PJ, Weinstein MC. NEJM 2008 (offsets rarely exceed costs). <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
