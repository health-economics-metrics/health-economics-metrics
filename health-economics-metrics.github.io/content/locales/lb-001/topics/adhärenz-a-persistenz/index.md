# Adhärenz a Persistenz

Adhärenz ass, wéi no de richtegen Gebrauch dem verschriwwene Gebrauch kënnt (Intensitéit); Persistenz ass, wéi laang de Gebrauch weidergeet, ier en ofgebrach gëtt (Dauer). D'Apdikt huet standardiséiert Moossen — **MPR** a **PDC**, mat ≥80 % als konventionell „adhärent" Schwell — an digital Therapeutika iwwerhuelen d'Konzepter an och de Problem: d'Adhärenz ass de Multiplikator tëscht Wirksamkeet a realiséierte Wäert.

## Firwat et wichteg ass

Zueler lafen scho mat dëse Zuelen: PDC ≥80 % fléisst an d'US-Medicare-Star-Ratings, déi richtegen Zuelerëmsaz beweegen — Adhärenz ass finanziell tragend Infrastruktur, keng mëll Metrik. Bei digitalen Therapeutika widderhëlt sech d'Muster: DiGA-Daten weisen staark Verschreiwungsvolumen mat schwaacher nohalteger Adhärenz, an outcomes-baséiert DTx-Präisser (ab 2026 an Däitschland) bezuele fir adhärenzofhängeg Resultater. De konzeptionelle Upgrade aus der digitaler Gesondheetsfuerschung: **effektiv Engagement** — *genuch* Engagement fir dat virgesinn Resultat z'erreechen — a säi Korollar, déi **minimal effektiv Dosis**, déi empiresch pro Interventioun festgestallt gëtt, amplaz als „méi" ugeholl ze ginn.

## D'Mathematik

```
MPR = Σ ausgeliwwert Dosdeeg / Deeg am Zäitraum × 100   (kann 100 % iwwerschreiden;
      iwwerschätzt duerch fréi Nofëllungen)
PDC = Deeg mat Versuergung ofgedeckt / Deeg am Zäitraum × 100     (op 100 % gedeckelt;
      de konservative, CMS-bevorzugte Schätzer)
Digital Adhärenz = tatsächlech Notzungsevenementer / verschriwwe Notzungsevenementer × 100
Persistenz       = Deeg vum Ufank bis zum Ofbroch
                   (% Persistent no N Méint uginn; Survival-Methoden)

Wäertgatter: realiséiert Outcome ≈ Wirksamkeet × g(Adhärenz)
  wou g d'Dosis-Äntwert-Funktioun ass; ënner der minimal effektiver
  Dosis ass g ≈ 0 — Käschte entstinn, Notzen verfällt
```

## Berechent Beispill

E digitale CBT-Produkt géint Schlofstéierungen, verschriwwen als 6 Moduler iwwer 6 Wochen; Studiewirksamkeet 0,025 QALYs bei deenen, déi ≥4 Moduler ofschléissen (déi empiresch festgestallt minimal effektiv Dosis):

```
1.000 Verschreiwunge zu 250 £ → 250.000 £ Zuelerausgaben
Modulofschluss: ≥4 Moduler 38 %; 1–3 Moduler 34 %; null Moduler 28 %

Realiséiert QALYs = 1.000 × 0,38 × 0,025 = 9,5
Käschte pro QALY  = 250.000 / 9,5 ≈ 26.300 £ — marginal bei NICE-Schwellen

Adhärenz-Engineering (Erënnerungs-Redesign, kierzer Sëtzungen) hieft den
Ofschluss vun ≥4 Moduler op 50 %: 12,5 QALYs → 20.000 £/QALY. D'Produkt
huet d'Finanzéierungsschwell iwwerschratt, ouni den Therapieinhalt unzerëmmen.
```

Ënner Performance-Präisser am Stil vun 2026 beweegt déiselwecht Verschiebung direkt den *Ëmsaz* — Adhärenz-Engineering gëtt zur kommerzieller Roadmap.

## Bezuch zur Softwareentwécklung

Zwee Vokabulairen konvergéieren op een Konzept: Software-Analytics ([Aktivéierung](../aktivéierung-an-notzungsopnam/), [Stickiness](../engagement-metriken/), [Retention](../retention-a-churn/)) a klinesch Apdikt (MPR, PDC, Persistenz) moossen allebéid d'Exposition géintiwwer enger Interventioun — mapp deng Produktevenementer op dat kliinescht Vokabulaire, an d'Zueler kënnen deng Dashboards liesen. Engineering besëtzt d'Adhärenz-Hiewel: Erënnerungslogik (domm deeglech Pings trainéieren d'Ofleenung; adaptiv Timing net), Sëtzungskäschten (e 20-Minute-Modul gëtt manner ofgeschloss wéi 3 × 7-Minute-Moduler) a Reibungs-Telemetrie, déi lokaliséiert, *wou* am Protokoll d'Notzer ofsprangen. Instrumentéier Dosis-Äntwert vum éischten Dag un — d'Analys vun der minimaler effektiver Dosis, déi dat ganzt ökonomescht Modell gatert, brauch Notzung-mat-Outcome-verknäppt Daten, déi nëmmen d'Produkt ka sammelen.

## Falen

- **MPR/PDC-Vermëschung**: MPR bléist op; gëff un, wéi ee Schätzer, a benotz PDC fir alles, wat dem Zueler zougewandt ass.
- **Adhärenz zur Metrik, net zur Therapie**: Opmaachen als Dosen gezielt (kuckt [Engagement-Metriken](../engagement-metriken/)).
- **„Méi ass besser"-Engagement-Zielen** wou d'Interventioun eng endlech Dosis huet — Ofschluss ass Succès, éiwege Gebrauch net.
- **Iwwerliewenden-baséiert Wirksamkeetsaussoen**: Outcomes bei den Adhärenten enthalen Selektiounseffekter (adhärent Leit ënnerscheeden sech); déi éierlech kausal Schätzung brauch Randomiséierung oder suergfälteg Ajustéierung.

## Quellen

- MPR vs. PDC. <https://phslrx.com/medication-adherence-metrics/>
- Yardley L, et al., effective engagement. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
- DiGA-Adhärenzbefunde, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
