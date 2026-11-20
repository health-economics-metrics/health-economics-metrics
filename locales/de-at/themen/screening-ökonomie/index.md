# Screening-Ökonomie

Die Screening-Ökonomie regelt den Wert des Testens asymptomatischer Bevölkerungen. Die mathematische Kerntatsache: **bei niedriger Krankheitsprävalenz erzeugen selbst exzellente Tests überwiegend falsch-positive Ergebnisse** — und die nachgelagerten Kosten, ihnen nachzujagen, können den Nutzen der echten Funde übersteigen.

## Warum es wichtig ist

Seit 1968 setzen die Wilson-Jungner-Kriterien der WHO den Maßstab für Bevölkerungsscreening: Die Erkrankung muss bedeutsam sein, der Test akzeptabel und genau, eine wirksame Behandlung muss existieren, und die Ökonomie muss aufgehen. Das britische National Screening Committee wendet formale Kosteneffektivitätsanalyse an, bevor es ein nationales Programm genehmigt — und lehnt die meisten Vorschläge ab. Jeder Pitch "KI wird alle auf alles screenen" stößt auf diese Maschinerie und verliert meist gegen die folgende Rechnung.

## Die Mathematik

Der positive Vorhersagewert (PPV) — die Wahrscheinlichkeit, dass ein positives Ergebnis echt ist — bricht bei niedriger Prävalenz zusammen:

```
PPV = (Sens × Präv) / [Sens × Präv + (1 − Spez) × (1 − Präv)]

Beispiel: Sensitivität 90 %, Spezifität 95 %, Prävalenz 0,5 %:
PPV = (0,9 × 0,005) / (0,9 × 0,005 + 0,05 × 0,995)
    = 0,0045 / (0,0045 + 0,0498) ≈ 8,3 %
```

Elf von zwölf Positiven sind falsch. Vollständige Programmökonomie:

```
Kosten pro gefundenem echtem Fall = (Screening-Kosten + Abklärungskosten
× alle Positiven) / echte Positive
Dann: lohnt sich, einen Fall zu finden, dieser Kostenwert? (Wert der
      Frühintervention pro Fall, minus Überdiagnose-Schaden — gefundene
      Fälle, die nie eine Rolle gespielt hätten)
```

## Durchgerechnetes Beispiel

KI-Netzhautscreening für eine seltene Erkrankung, 100.000 Menschen, Prävalenz 0,5 %, Sens 90 %, Spez 95 %, Scan 15 £, bestätigende Abklärung 400 £:

```
Echte Positive:   100.000 × 0,005 × 0,90 = 450
Falsche Positive: 100.000 × 0,995 × 0,05 = 4.975
Kosten = 100.000 × 15 + (450 + 4.975) × 400 = 1,5 Mio. + 2,17 Mio. = 3,67 Mio. £
Kosten pro echtem Fall ≈ 8.156 £
```

Spart die Frühbehandlung 20.000 £ + 1 QALY pro Fall, rechnet sich das Programm leicht. Erhöht man die Spezifität auf 99 % (weniger Fehlalarme): Die Abklärungskosten fallen auf (450 + 995) × 400 = 0,58 Mio. £, Gesamt 2,08 Mio. £, Kosten pro Fall ≈ **4.622 £** — Spezifität, nicht Sensitivität, ist es, wo die Screening-Ökonomie bei niedriger Prävalenz gewonnen wird.

## Bezug zur Softwareentwicklung

Statische Analyse, Sicherheitsscans und Anomalieerkennung sind Screening-Programme über Codebasen und Telemetrie, mit einer echten Fehlerprävalenz oft deutlich unter 1 % pro Alarmgelegenheit. Dieselbe Rechnung erklärt Alarmmüdigkeit: Ein zu 95 % spezifischer Scanner auf Code mit niedriger Prävalenz ertränkt Teams in Falsch-Positiven, und jeder Falsch-Positive kostet Aufmerksamkeit und untergräbt Vertrauen, bis echte Alarme ignoriert werden (der klinische Begriff ist *Screening-Schaden*; der Entwicklungsbegriff ist *Pager-Taubheit*). Die Abhilfen übertragen sich aus der Gesundheit: Spezifität vor Sensitivität erhöhen, Subpopulationen mit höherer Prävalenz screenen (risikobasiertes Targeting ↔ Scannen nur geänderten Codes), und die Triage-Kosten in der Ökonomie des Tools zählen — siehe [NNT](../anzahl-der-notwendigen-behandlungen/) und [Klinische KI-Evaluation](../klinische-ki-evaluation/). Für die Dimensionierung eines ganzen Screening-Programms statt eines einzelnen Tests siehe [Anzahl der notwendigen Screenings](../anzahl-der-notwendigen-screenings/) — wie viele Menschen den gesamten Pfad aus Screening und Behandlung durchlaufen müssen, um ein Ereignis zu verhindern.

## Fallstricke

- **Sensitivität/Spezifität ohne Prävalenz zitieren** — Genauigkeit ohne PPV ist Marketing.
- **Überdiagnose ignorieren**: das Finden trägen "Krankheit", die nie geschadet hätte, löst echte Behandlungskosten und -schäden aus.
- **Vorlaufzeit-Bias**: frühere Erkennung ohne veränderte Ergebnisse bläht scheinbares Überleben auf — siehe [Frühintervention](../frühintervention/).

## Quellen

- Wilson JMG, Jungner G. "Principles and practice of screening for disease." WHO 1968. <https://apps.who.int/iris/handle/10665/37650>
- UK National Screening Committee. <https://www.gov.uk/government/groups/uk-national-screening-committee-uk-nsc>
