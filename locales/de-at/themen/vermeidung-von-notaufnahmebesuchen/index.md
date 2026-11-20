# Vermeidung von Notaufnahmebesuchen

Die Vermeidung von Notaufnahmebesuchen zählt ED-(Notaufnahme-)Besuche und Notfalleinweisungen, die durch vorgelagerte Intervention verhindert wurden — Triage-Apps, Fernüberwachung, virtuelle Stationen, Umleitung in die Dringlichkeitsversorgung. Sie verwandelt "wir haben es früher erkannt" in eine bezifferte Behauptung.

## Warum es wichtig ist

Die Notfallversorgung ist das teuerste Routine-Setting im System (Einheitskosten eines ED-Besuchs im Bereich 250–400 £ nach National-Cost-Collection-/PSSRU-Zahlen; eine Notfalleinweisung kostet Tausende), und ED-Überfüllung kaskadiert in Krankenwagenverzögerungen und abgesagte elektive Eingriffe. Alles, was Nachfrage sicher vorgelagert löst — Selbsthilferatschläge, Primärversorgung am selben Tag, kommunale Reaktion — kauft dem System Kapazität an seinem am stärksten belasteten Punkt. Das ist die Standard-Nutzenzeile für Symptom-Checker, 111-artige Triage-Dienste und [Fernpatientenüberwachung](../ökonomie-der-fernpatientenüberwachung/).

## Die Mathematik

```
Vermiedene Besuche = Bevölkerung × (Basisrate − Interventionsrate)
Bruttoeinsparung    = vermiedene Besuche × Einheitskosten pro Besuch
                      (+ vermiedene Einweisungen × Einweisungskosten, separat gezählt)

Nettoeinsparung     = Bruttoeinsparung − Interventionskosten − Kosten der neuen
                      Pfadnutzung (umgeleitete Nachfrage ist nicht kostenlos: ein
                      111-Anruf, ein Hausarzttermin, ein Tag virtuelle Station
                      haben alle Einheitskosten)
```

Die kausale Behauptung braucht eine Vergleichsgruppe: Besuchsraten trenden und variieren saisonal, sodass Vorher/Nachher allein nichts beweist.

## Durchgerechnetes Beispiel

Ein COPD-Fernüberwachungsdienst für 3.000 Hochrisikopatienten. Eine Evaluation mit abgeglichener Kontrollgruppe zeigt, dass exazerbationsbedingte ED-Besuche von 0,9 auf 0,7 pro Patientenjahr fallen und Notfalleinweisungen von 0,5 auf 0,42.

```
Vermiedene Besuche     = 3.000 × 0,2  = 600 × 300 £   = 180.000 £
Vermiedene Einweisungen = 3.000 × 0,08 = 240 × 3.800 £ = 912.000 £
Brutto                                                  1.092.000 £/Jahr

Kosten: Überwachungsdienst 600.000 £; zusätzliche Einsätze von Gemeindeschwestern 150.000 £
Netto ≈ +342.000 £/Jahr — zuzüglich der QALY-Gewinne durch früher behandelte Exazerbationen.
```

Bemerkenswert: Die Einweisungszeile dominiert; Besuchsvermeidung allein trägt selten die Kosten eines Überwachungsdienstes; *Einweisungs*-Vermeidung ist, wo das Geld liegt.

## Bezug zur Softwareentwicklung

Das ist **Vorfallsvermeidungs-Ökonomie**. Der Wert von Observability, Canary-Deployments und Frühwarnsystemen sind vermiedene "Notaufnahmebesuche" — Pager-Alarme, War Rooms, Sev-1-Vorfälle — jeder mit Vollkosten (Entwicklerstunden × Satz + Kundenwirkung). Dieselben Modellierungsregeln gelten: die Kosten des neuen vorgelagerten Pfads gegenrechnen (Alarm-Triage ist nicht kostenlos), Substitution beachten (Alarme, die Arbeit erzeugen, ohne Vorfälle zu verhindern, sind Gesundheitsangst, keine Gesundheit), und das Kontrafaktische mit einer Kontrollgruppe belegen (Vorfallraten von Teams trenden und regressieren zur Mitte, genau wie ED-Besuche).

## Fallstricke

- **Regression zur Mitte**: Hochrisikokohorten, ausgewählt nach einem schlechten Jahr, verbessern sich auch unbehandelt; abgeglichene Kontrollgruppen oder Stepped-Wedge-Designs sind unerlässlich.
- **Angebotsinduzierte Nachfrage**: Einfache digitale Triage kann die *Gesamt*-Kontakte erhöhen (niedrigere Schwelle, Hilfe zu suchen), während der ED-Anteil sinkt — die Gesamtsystemkosten zählen.
- **Besuche zu Durchschnittskosten bewerten**, wenn ED-Fixkosten nicht sinken — siehe [Grenzkosten vs. Durchschnittskosten](../grenzkosten-vs-durchschnittskosten/).

## Quellen

- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
