# Käschte-Konsequenz-Analyse (CCA)

D'CCA presentéiert Käschten nieft enger **opgeschlësselter Tabell vun allen Outcomes** — klinesch, operationell, erfuerene — ouni se op e Verhältnis oder Score ze kompriméieren. Den Entscheedungsdréier wiicht d'Trade-offs explizit of.

## Firwat et wichteg ass

D'CCA ass dem NICE säin **bevorzugten ökonomesche Format fir déi meescht digital Gesondheetstechnologien** ënnert dem Evidence Standards Framework. Digital Produkter produzéieren heterogen Effekter (agespuert Zäit, Zefriddenheet, DNA-Reduktioun, kleng klinesch Gewënn), déi sech géint eng éierlech Aggregatioun an eng QALY-Zuel sträifen. Amplaz e fragile Kompositt ze erzwéngen, weist d'CCA de ganze Ledger. Fir déi meescht Software-Business-Cases ass et souwuel dee éierlechste wéi och dee iwwerzeegendste Format, well all Stakeholder seng eege entscheedungsrelevant Zeil fënnt.

## D'Mathematik

Et gëtt absichtlech keng Aggregatiounsformel. D'Output ass eng Tabell:

```
                          Interventioun   Komparator   Differenz
Käschten (jäerlech)       X £             Y £          ΔC
Outcome 1 (natierlech Eenheeten) …        …            Δ1
Outcome 2                 …               …            Δ2
Qualitativ Outcomes       beschriwwen, net gescoort
```

All Zeil behält seng eege Eenheeten. Reegelen: all Konsequenz vireg spezifizéiert (kee Cherry-Picking no de Resultater); déiselwecht [Perspektiv](../analyseperspektiv/) an [Horizont](../zäithorizont/) duerchgängeg; Onsécherheet pro Zeil.

## Berechent Beispill

Digital Plattform fir präoperativ Bewäertung vs. telefonbaséiert Prozess, pro Joer, een Trust:

```
                                  Digital      Telefon     Differenz
Betribskäschten                   180.000 £    95.000 £    +85.000 £
Infirmièrestonne fir Bewäertungen 6.200        11.800      −5.600 Std.
Annulatioune um Operatiounsdag    92           174         −82
Patientenzefriddenheet (CSAT)     4,5/5        3,9/5       +0,6
Verluere/onvollstänneg Bewäertungen 1,2 %      4,8 %       −3,6 pp
```

Keen eenzege Score — awer d'Entscheedung ass einfach ze begrënnen: 85.000 £ kafe 5.600 Infirmièrestonnen (≈ 15 £/Stonn, wäit ënner all Personalkäschten), 82 vermeid Annulatiounen (jidderee verschwend en Operatiounssall-Slot vu ~1.200 £) a besser Erfahrung. E Comité gesäit och genau, wat en *net* kritt: keng behaapt QALY- oder Mortalitéitseffekter.

## Bezuch zur Softwareentwécklung

D'CCA ass déi formell Versioun vum Balanced Scorecard, deen e gudde Plattform-Virschlag schonn notzt: Käschte nieft DORA-Metriken, DevEx-Scores, Incident-Zuelen — net aggregéiert. D'Disziplin aus der Gesondheetsökonomie, déi een derbäisetzt: **d'Zeilen vireg spezifizéieren** (virum Pilot entscheeden, wat zielt, sou datt een net roueg d'Metrik falen ka loossen, déi méi schlecht gouf), an **ongënschteg Zeilen weisen** — eng CCA mat nëmme gudde Neiegkeete ass Marketing. CCA benotzen, wann et keen verdeedegbare Kompositt gëtt, wat bei Entwécklertooling bal ëmmer de Fall ass.

## Falen

- **Cherry-gepickt Konsequenzen** — d'Integritéit vum Format hänkt vun der Vir-Spezifikatioun of.
- **Verstoppt Aggregatioun**: Faarfcodéierung oder „Gesamtscores" féieren déi arbiträr Gewiichter erëm an, déi d'CCA vermeide soll.
- **Entscheedungsparalyse**: d'CCA brauch en Entscheedungsdréier, deen bereet ass, Trade-offs ofzewiéen; mat enger Recommandatioun an der Begrënnung paaren.

## Quellen

- NICE Evidence Standards Framework for digital health technologies (ECD7). <https://www.nice.org.uk/corporate/ecd7>
- ESF evidence standards tables. <https://www.nice.org.uk/corporate/ecd7/chapter/section-c-evidence-standards-tables>
