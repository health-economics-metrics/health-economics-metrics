# Cloud-Unit-Economics (FinOps)

Cloud-Unit-Economics iwwersetzen rau Cloud-Ausgaben an **Käschten pro Eenheet Output** — pro Client, pro Transaktioun, pro geléist Fall, pro Token. Et ass d'FinOps-Fäegkeet, déi „eis AWS-Rechnung ass 400k £/Mount" zu „ee Patient ze bedéinen kascht 0,83 £" mécht.

## Firwat et wichteg ass

Gesamtausgaben-Zuele kënnen d'Froen net beäntweren, déi zielen: gëtt de Produkt méi oder manner effizient? Verbessert Wuesstem d'Marge oder zerstéiert et se? Wat sollte mir verrechnen? Stéckkäschten äntwere op all dräi. Speziell bei digitaler Gesondheet *ass* „Käschte pro geléist Fall" eng Stéckkäschte vum Gesondheetsdingscht — direkt vergläichbar mat de [National-Cost-Collection](../nationalen-tarif-a-stéckkäschten/)-Zuelen, déi e Commissioner fir all aneren Déngscht benotzt, wat et zur natierlecher Sprooch mécht, fir digital Pfaden géint traditionell ze bewäerten.

## D'Mathematik

```
Stéckkäschten = gesamt zougewise Käschten (inkl. gedeelt/Plattformkäschten) / geliwwert Eenheeten

Zwou Famillen:
  Ressourceneffizienz-Eenheeten: Käschten/GB gespäichert, Käschten/vCPU-Stonn, Käschten/Token,
                                 Käschten/Build-Minutt
  Business-Eenheeten:            Käschten/Client, Käschten/Transaktioun, Käschten/Consultatioun,
                                 Käschten/geléist-Fall

Grenz- vs. Duerchschnëtts-Disziplin gëllt (marginal-vs-average-cost.md):
engagéiert/reservéiert Ausgabe mécht Grenz-Stéckkäschten ≈ 0 bis zum nächste
Engagementsschrëtt — Expansiounsentscheedunge zu Grenzkäschte bewäerten,
Effizienztrends zum Duerchschnëtt.
```

## Berechent Beispill

E digitaalt Triage-Service: Cloud-Ausgaben 62.000 £/Mount (Compute 30k £, Daten 18k £, gedeelt Plattformverdeelung 14k £), mat 380.000 Triage-Episoden/Mount:

```
Duerchschnëttskäschten pro Episod = 62.000 / 380.000 ≈ 0,163 £

Commissioner-Verglach: Telefon-Triage ≈ 8–12 £/Uruff, Hausdokter-Consultatioun ≈ 42 £
→ digital Episod leeft bei ~2 % vun der bëllegster mënschlecher Alternativ — d'Ökonomie
  vun der Kanalverschiebung aus gds-service-metrics.md, vun der Käschtesäit.

Trendcheck: d'lescht Joer 0,21 £/Episod bei 240k Episoden → verbessert Skaléierungs-
Ökonomie (fix Plattformkäschten amortiséieren sech), eng Schlagzeil am QBR wäert.
```

## Bezuch zur Softwareentwécklung

Unit Economics ass de Punkt, wou Engineering-Entscheedungen finanziell liesbar ginn: eng Architektur, déi d'Käschte pro Episod hallefert, ass e Präisvirdeel; eng, déi iwwerlinear skaléiert, ass eng Zäitbomm, déi nëmmen an dëser Metrik siichtbar ass. Praktiken, déi aus der Gesondheets-Käschtekalkulatioun iwwerdroen: **d'Verdeelungsreegele publizéieren** (gedeelt Käschte verzerrten d'Stéckzuelen, bis PLICS patientenniveau Käschtekalkulatioun standardiséiert huet — deng Plattformkäschten-Verdeelung brauch déiselwecht Rigueur); **Eenheeten wielen, an deenen de Keefer denkt** (Commissionere kafe Episoden, keng vCPUs); an Stéckkäschten an all [ICER](../inkrementellt-käschte-effektivitéitsverhältnis/)- a [Budgetimpakt](../budgetimpakt-analyse/)-Modell als autoritative Käschtenenner fidderen. Bei KI-Features ass d'Eenheet den Token — kuckt [Inferenz-Unit-Economics](../inferenz-unit-economics/).

## Falen

- **Gedeelt Käschte ignoréieren**: Stéckkäschten ouni Plattform-/Sécherheets-/On-Call-Verdeelungen ënnerschätzen em 30–50 % a brécke beim Audit zesummen.
- **Vanity-Nenner**: „Käschte pro API-Uruff" schmeechelt; „Käschte pro ofgeschlossen Patienteepisod" informéiert.
- **Duerchschnëttskäschte-Präisser fir marginal Entscheedungen**: Equipen Duerchschnëtts-Stéckkäschte fir marginal gratis Notzung opbuerden dréit zu Verschwendungsvermeidungs-Theater (kuckt [National Tariff](../nationalen-tarif-a-stéckkäschten/) fir d'NHS-Versioun vun dësem Incentive-Bug).

## Quellen

- FinOps Foundation, unit economics. <https://www.finops.org/framework/capabilities/unit-economics/>
- FinOps Foundation, introduction to cloud unit economics. <https://www.finops.org/wg/introduction-cloud-unit-economics/>
