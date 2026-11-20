# Analyseperspektive

Die Perspektive legt fest, *wessen* Kosten und Nutzen in einer ökonomischen Analyse zählen: die des Kostenträgers, die des Leistungserbringers oder die der Gesellschaft als Ganzes. Dieselbe Intervention kann aus einer Perspektive glänzend und aus einer anderen katastrophal aussehen.

## Warum es wichtig ist

Jede ökonomische Evaluation muss ihre Perspektive von vornherein deklarieren, denn die Perspektive bestimmt, welche Posten überhaupt existieren:

- **Kostenträgerperspektive** (z. B. NHS-Commissioner, Versicherer): nur Kosten, die der Kostenträger erstattet.
- **Leistungserbringerperspektive** (z. B. ein Krankenhaus-Trust): interne Versorgungskosten, Personal, Liegenschaften.
- **Gesellschaftliche Perspektive**: alles — einschließlich Patientenzeit, Fahrtwege, informelle Pflege durch Angehörige und Produktivitätsverluste bei Arbeitgebern.

NICEs Referenzfall verwendet für die Kosten die Perspektive **NHS und Personal Social Services (PSS)**. Das US-amerikanische Second Panel on Cost-Effectiveness empfiehlt, sowohl eine Analyse aus Sicht des Gesundheitssektors als auch eine gesellschaftliche Analyse mit einem "Impact Inventory" auszuweisen, das auflistet, was jeweils enthalten ist.

## Die Mathematik

Keine Formel — eine Abgrenzungsregel, die vor jeder Rechnung angewendet wird:

```
Eingeschlossene Kosten-/Nutzenkategorien = f(Perspektive)
```

Eine nützliche Prüfung: eine Impact-Inventory-Tabelle mit einer Zeile pro Kosten-/Nutzenposten und einer Spalte pro Perspektive erstellen und markieren, welche Zellen zählen.

## Durchgerechnetes Beispiel

Eine Symptom-Checker-App lenkt 10.000 Hausarztbesuche pro Jahr in die Selbstversorgung um.

- **Kostenträger (NHS)**: spart 10.000 × 42 £ pro Hausarztkonsultation = **420.000 £/Jahr** — deutlich positiv.
- **Leistungserbringer (Hausarztpraxis)**: Werden Praxen nach Kopfpauschale vergütet, bleibt ihr Einkommen unverändert, aber die Arbeitslast sinkt — leicht positiv.
- **Gesellschaftlich**: dazu kommen eingesparte Fahrt- und Wartezeit der Patienten, etwa 10.000 × 2 Stunden × 15 £/Stunde = 300.000 £ Zeitwert; abzuziehen ist jedoch der Schaden, wenn 2 % fälschlich beruhigt werden und später, kränker, wieder vorstellig werden, mit 200 × 3.000 £ = 600.000 £ zusätzlicher Behandlung. Gesellschaftlicher Nettoeffekt: 420.000 + 300.000 − 600.000 = **120.000 £/Jahr** — positiv, aber dominiert von der Sicherheitsannahme.

Dieselbe App, drei unterschiedliche Antworten. Erst die Deklaration der Perspektive macht die Zahlen vergleichbar und ehrlich.

## Bezug zur Softwareentwicklung

Auch der ROI von Tools und Plattformen hat Perspektiven:

- **Team-Budget ("Kostenträger")**: passt die Lizenzgebühr in meine Kostenstelle?
- **Plattform-Organisation ("Leistungserbringer")**: Gesamtkosten einschließlich Integration, Support und Wartung.
- **Unternehmen ("gesellschaftlich")**: Kundenwirkung, Sicherheits-Externalitäten und die Zeit jedes betroffenen Teams einbeziehen.

Ein CI-Tool, das für das kaufende Team günstig ist, aber Migrationsarbeit auf 40 andere Teams abwälzt, ist die Software-Version von Kostenverlagerung — sichtbar nur aus der weiteren Perspektive. Die Perspektive in jedem Business Case benennen; Prüfer können Annahmen nicht hinterfragen, die sie nicht sehen können.

## Fallstricke

- **Stiller Perspektivwechsel**: gesellschaftlichen Nutzen zu zählen, aber nur die Kosten des Kostenträgers, lässt alles kosteneffektiv erscheinen.
- **Doppelzählung** beim Zusammenführen von Perspektiven (z. B. einen eingesparten Hausarzttermin sowohl als Einsparung des Kostenträgers als auch als Zeitersparnis des Patienten zu zählen, wenn die Zahl des Kostenträgers die Personalzeit bereits enthält).
- **Kostenverlagerung ignorieren**: "Einsparungen", die Kosten nur auf Patienten, Pflegende oder eine andere Abteilung verschieben.

## Quellen

- Sanders GD, et al. "Recommendations for Conduct, Methodological Practices, and Reporting of Cost-effectiveness Analyses: Second Panel on Cost-Effectiveness in Health and Medicine." JAMA 2016. <https://jamanetwork.com/journals/jama/fullarticle/2552214>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
