# Klinische KI-Evaluation

Die Kernstatistiken zur Evaluation eines klinischen KI- oder Diagnosemodells: Sensitivität, Spezifität, AUROC, Vorhersagewerte und die Zahl der zum Screening Nötigen. Die zentrale ökonomische Lehre: **ein großartiger AUROC macht keinen kosteneffektiven Einsatz** — der Wert hängt vom Betriebspunkt, der Prävalenz und davon ab, was nach jedem Positiven nachgelagert geschieht.

## Warum es wichtig ist

Regulierungsbehörden (FDA, MHRA) genehmigen klinische KI an einem **festgelegten Betriebspunkt** — einem konkreten Sensitivitäts-/Spezifitäts-Paar (z. B. das erste von der FDA zugelassene autonome System zur diabetischen Retinopathie: Sensitivität 87,2 %, Spezifität 90,7 % in seiner entscheidenden Studie). Gesundheitsökonomen stellen dann die Frage, die Genauigkeitskennzahlen nicht beantworten können: Was *kostet* bei der Prävalenz der Einsatzbevölkerung jede Erkennung, und lohnt es sich, danach zu handeln? Eine ökonomische Evaluation von KI-Retinopathie-Screening (npj Digital Medicine 2024) zeigte, dass höhere Genauigkeit allein keine Kosteneffektivität garantierte, sobald Überweisungskosten mitgezählt wurden.

## Die Mathematik

```
Sensitivität = RP / (RP + FN)   — Anteil der wahren Positiven, die gefangen wurden
Spezifität   = RN / (RN + FP)   — Anteil der wahren Negativen, die freigesprochen wurden
AUROC        = P(Modell ordnet einen zufälligen Positiven über einen
               zufälligen Negativen ein)
               0,5 Zufall … 1,0 perfekt; schwellenwertunabhängig — und
               daher für Einsatzentscheidungen unzureichend

PPV = RP / (RP + FP)   ← prävalenzabhängig (Bayes); bricht bei Seltenheit zusammen
NPV = RN / (RN + FN)

NNS  ≈ 1 / (Prävalenz × Sensitivität)   — gescreent pro gefundenem echtem Fall
Kosten pro echtem Fall = Programmkosten / RP   — die ökonomische Bottom Line
```

## Durchgerechnetes Beispiel

Dasselbe Modell, zwei Settings — Sensitivität 90 %, Spezifität 93 %:

```
Facharztklinik (Prävalenz 20 %):
  PPV = (0,9×0,2)/(0,9×0,2 + 0,07×0,8) = 0,18/0,236 ≈ 76 %  → 3 von 4 Alarmen echt

Primärversorgung (Prävalenz 1 %):
  PPV = (0,9×0,01)/(0,9×0,01 + 0,07×0,99) = 0,009/0,0783 ≈ 11,5 %
  → 8 von 9 Alarmen falsch; Abklärung zu je 350 £:
  Kosten pro echtem Fall = (0,009 + 0,0693) × 350 / 0,009 ≈ 3.045 £ pro gefundenem Fall
```

Identisches Modell, radikal unterschiedliche Ökonomie — deshalb ist standortspezifische Evaluation ein regulatorisches Thema, und deshalb ist "unser Modell hat 0,95 AUROC" der Anfang eines ökonomischen Falls, nicht das Ende. Siehe [Screening-Ökonomie](../screening-ökonomie/) für die vollständige Programmrechnung.

## Bezug zur Softwareentwicklung

Für Entwickler, die klinische KI bauen oder kaufen: **die Konfusionsmatrix bei der Einsatzprävalenz ausliefern**, nicht nur die ROC-Kurve; **den Schwellenwert als ökonomische Entscheidung behandeln lassen** — der Sens/Spez-Kompromiss sollte erwartete Kosten minimieren (verpasste Fälle × Verpasskosten vs. Fehlalarme × Abklärungskosten), nicht eine Benchmark-Statistik maximieren; und dieselbe Rechnung im eigenen Tooling erkennen — Alarmsysteme, Anomalieerkenner und Sicherheitsscanner sind diagnostische Tests über Ereignisströme mit niedriger Prävalenz, mit Alarmmüdigkeit als [NNH](../anzahl-der-notwendigen-behandlungen/). Modell-Updates, die den Betriebspunkt verschieben, öffnen die Ökonomie neu (und die regulatorische Zulassung — siehe [Regulatorische KI-Evaluation](../regulatorische-ki-evaluation/)).

## Fallstricke

- **AUROC-Shopping**: Modelle nach AUROC vergleichen, wenn sie an einem Schwellenwert laufen werden — am Betriebspunkt vergleichen.
- **Studien-Prävalenz-PPV für den Realeinsatz zitiert** — der Klassiker; immer bei lokaler Prävalenz neu berechnen.
- **Spektrum-Bias**: Modelle, validiert an eindeutigen Fällen gegenüber gesunden Kontrollen, übertreffen sich bei der mehrdeutigen Mitte, die die Praxis dominiert.
- **Keine Kostenrechnung des nachgelagerten Pfads**: jeder Positive löst eine Abklärung aus; ein Modell ist eine Intervention in die Ökonomie des *gesamten Pfads*.

## Quellen

- Diagnostic accuracy measures reference. <https://www.medcalc.org/en/manual/roc-curves.php>
- Economic evaluation of AI retinopathy screening, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01032-9>
- Laupacis et al., NEJM 1988 (NNT foundations). <https://pubmed.ncbi.nlm.nih.gov/3374545/>
