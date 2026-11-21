# Retention a Churn

Retention mooss, wéi en Deel vun enger Notzerkohort N Deeg nom Ufank nach aktiv ass (D1/D7/D30-Kurven); Churn ass hiert Komplement. D'brutal Basislinn vun der digitaler Gesondheet: **ongeféier 90 % vun de Gesondheets-App-Notzer ginn bannent 30 Deeg op** — d'D30-Retention vun der digitaler Gesondheet läit bei ~3–4 % géint e Mëttel vun alle Apps vun ~6 %.

## Firwat et wichteg ass

Eysenbach huet dat 2005 benannt: dat **Gesetz vum Ofgang** (law of attrition) — Notzer a héijen Raten ze verléieren ass eng intrinsesch, strukturell Eegenschaft vun eHealth-Interventiounen, kee Implementatiounsbug, mat Ofgang an eHealth-Studien, deen routinemäisseg 50 % iwwerschreit. D'wirtschaftlech Konsequenz ass total: Retention definéiert dat *Behandlungsfënster*, bannent deem all Notzen ka geliwwert ginn, an d'[Unit Economics](../unit-economics-vu-gesondheets-apps/) — CAC, bezuelt fir en Notzer, dee 12 Deeg bleift, liwwert weder LTV nach QALYs. All wirtschaftleche Modell fir e Konsumente-Gesondheetsprodukt, dat Notzen net mat der Retentiounskurv gewiicht, beschreift e Produit, dat et net gëtt.

## D'Mathematik

```
Retention_Dn = um Dag n aktiv Notzer / Kohortgréisst × 100
Churn-Rate   = am Period verluere Notzer / Notzer um Ufank vun der Period × 100

Notzengewiichtung (de gesondheetsökonomesche Schrëtt):
  erwaarten Notzen pro akquiréierten Notzer = Σ_t Retention(t) × Notzenrate(t)
  ≈ Fläch ënner der Retentiounskurv × Notzen pro Zäit
  — NET Studienotzen × 100 % vun den akquiréierten Notzer

Käschte pro bei D30 behalenen Notzer = CAC / D30-Retention
  (bei 4 % D30 sinn 5 £ CAC wierklech 125 £ pro behalenen Notzer)
```

## Berechent Beispill

Eng Mental-Health-App: d'Studie huet 0,02 gewonne QALYs pro Notzer gewisen, deen 8 Wochen ofschléisst. Deployment-Kohort vun 100.000 Downloads, Retention D7 25 %, D30 8 %, Woch 8 4 %:

```
Ofschléisser           = 100.000 × 0,04 = 4.000
Geliwwert QALYs        = 4.000 × 0,02 = 80  (net 100.000 × 0,02 = 2.000)
Bei 20.000 £/QALY      = 1,6 Mio. £ u Gesondheetswäert (net 40 Mio. £)

Gesondheetswäert pro Download = 16 £ — d'Zuel, déi soll setzen, wat en
Zueler pro Download bereet ass ze bezuelen, a si ass 4 % vun der naiver Behaaptung.
Fall fir Retentiounsverbesserung: d'Woch-8-Ofschlossquote vun 4 % → 6 % ze hiewen bréngt
40 QALYs/Joer ≈ 800.000 £ derbäi — Retention-Engineering ASS Gesondheetsproduktioun.
```

## Bezuch zur Softwareentwécklung

Retention ass d'Metrik, wou Produkt-Engineering am direktste Gesondheetswäert fabrizéiert, no der Arithmetik uewen. D'Praktiken, déi se bewegen, si gewéinlech: Time-to-first-value beim Onboarding, Re-Engagement-Design, Performance a virun allem **geplangten Dosis-Ofschloss** — e Programm mat definéiertem Enn (8 Wochen, dann Ofschloss) soll *Ofschloss* moossen, net éiwegt DAU, wat d'Metrik mam klineschen Modell ausriicht amplaz mam werbungsfinanzéierte Opmierksamkeetsmodell. D'Iwwerliewensanalys ass dat richtegt Toolkit (déiselwecht Kaplan-Meier-Mathematik wéi bei [Gewonnene Liewensjoer](../gewonnene-liewensjoer/)); Kurve no Akquisitiounskanal segmentéieren, well de Kanalmix d'Retention méi verännert wéi déi meescht Features.

## Falen

- **Intention-to-Treat-Wäschen ëmgedréit**: Studie mellen Ofschléisser; d'Deployment-Ökonomie muss jiddereen zielen, dee akquiréiert gouf (dem Eysenbach seng Kärwarnung).
- **Retention-Theater**: benoriichtegungsgedriwwen „aktiv" Notzer, déi ni déi therapeutesch Aktioun maachen (kuckt [Engagement-Metriken](../engagement-metriken/)).
- **Kurven iwwer Definitiounen vergläichen**: „aktiv" definéiert als opmaachen vs. sënnvoll Aktioun verréckelt D30 em Villfachen.
- **Ignoréieren, wien churnt**: wann déi Kränkste am séierste churnen, falen d'Notzen pro Notzer, wann d'Retention bei de Gesonde verbessert gëtt — Kurven mam Case-Mix paréieren (kuckt [Reechwäit a Gerechtegkeet](../reechwäit-a-gerechtegkeet/)).

## Quellen

- Eysenbach G. "The law of attrition." JMIR 2005;7(1):e11. <https://www.jmir.org/2005/1/e11/>
- Mobile app retention benchmarks. <https://uxcam.com/blog/mobile-app-retention-benchmarks/>
- Healthcare product benchmarks. <https://userpilot.com/blog/healthcare-product-metrics-benchmark-report/>
