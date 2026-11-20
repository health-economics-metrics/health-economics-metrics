# Regulatorische KI-Evaluation

Die regulatorischen Rahmenwerke, die KI im Gesundheitswesen regieren — das FDA-Regime Software as a Medical Device (SaMD) mit **Predetermined Change Control Plans (PCCPs)** und Real-World-Evaluationsprogramme wie der NHS AI in Health and Care Award — und was sie ökonomisch kosten und ermöglichen.

## Warum es wichtig ist

Regulierung bestimmt sowohl die **Evidenzkosten des Markteintritts** als auch die **Kosten jedes späteren Modell-Updates** — bei KI-Produkten zählt Zweiteres oft mehr. Der traditionelle FDA-Modus (Modell festlegen; für Änderungen neu zulassen) machte kontinuierliche Verbesserung ökonomisch brutal. Die **PCCP-Leitlinie (finalisiert Dezember 2024)** änderte die Ökonomie: Ein Hersteller kann *spezifizierte* künftige Modell-Updates vorab genehmigen lassen — eine Beschreibung geplanter Änderungen, ein Änderungsprotokoll (wie jede validiert wird) und eine Wirkungsbewertung — sodass sanktionierte Verbesserungen ohne neue Einreichung ausgeliefert werden. Über 1.000 KI-gestützte Geräte haben eine FDA-Zulassung; die FDA prüft inzwischen auch die Überwachung der Real-World-Leistung (vorab festgelegte Kennzahlen: Basis-FP-/FN-Raten, Kalibrierungsdrift, Domänenverschiebungsindikatoren).

## Die Mathematik

Der PCCP ist die Ökonomie der [DORA-Lead-Time](../dora-metriken/), angewendet auf regulierte Modelle:

```
Kosten pro Modell-Update (traditionell) = Kosten der Neueinreichung +
                                          Prüfverzögerung × CoD
Kosten pro Modell-Update (PCCP-gestützt) = nur Kosten der Protokollausführung

Update-Ökonomie über die Produktlebenszeit:
  N Updates × (Einreichungskosten + Monate der Prüfung ×
              Verzögerungskosten pro Monat)
  vs. einmalige PCCP-Erstellungskosten + N × Protokollausführungen
```

Für das Muster des NHS-AI-Award ist der Kennzahlensatz breiter als Genauigkeit: unabhängige Real-World-Evaluationen bewerten klinische Leistung, Workflow-/Implementierungseffekte und ökonomische Wirkung — die vollständige institutionalisierte Pipeline [Wirksamkeit → Effektivität → Kosteneffektivität](../ki-entwicklerproduktivität/).

## Durchgerechnetes Beispiel

Ein Radiologie-KI-Anbieter plant vierteljährliche Modellverbesserungen über 3 Jahre (12 Updates):

```
Traditionell: 12 × (80.000 £ Einreichung + 4 Monate × 50.000 £/Monat
              verzögerter Nutzen-CoD) = 12 × 280.000 £ = 3,36 Mio. £
PCCP-Weg:     250.000 £ PCCP-Erstellung + 12 × 30.000 £ Protokoll-
              ausführung = 610.000 £
Einsparung ≈ 2,75 Mio. £ — und Patienten erhalten jede Verbesserung
~4 Monate früher: 12 × 4 Monate × der klinische Nutzen des Updates,
eine QALY-Zeile für sich genommen.
```

Der PCCP ist regulatorische Anerkennung dafür, dass **Deployment-Häufigkeit klinischen Wert hat** — die Hauptkausalkette dieses Repositorys, von einer Regulierungsbehörde bestätigt.

## Bezug zur Softwareentwicklung

Den PCCP gut zu konstruieren ist ein Softwareproblem: vorab festgelegte Evaluationssuiten, versionierte Datensätze, automatisierte Validierungspipelines, Drift-Überwachung — die regulierte Cousine der kontinuierlichen Auslieferung, wo das "Deploy-Gate" ein validiertes Protokoll statt eines Code-Reviews ist. Teams mit ausgereifter Eval-Infrastruktur ([KI-Qualitätskennzahlen](../ki-qualitätskennzahlen/)) bekommen PCCPs günstig; Teams ohne entdecken, dass die regulatorische Einschränkung eigentlich eine Reifegrad-Einschränkung der Entwicklung ist. Für Produkte, die in den NHS eintreten, ist der parallele Stapel DTAC (klinische Sicherheit, Datenschutz, Interoperabilität) plus [NICE-ESF](../nice-evidenzstandards-rahmenwerk/)-Evidenzstufen — alle als Markteintritts-[TCO](../gesamtbetriebskosten/) budgetieren.

## Fallstricke

- **PCCP-Geltungsbereich-Wunschträume**: nur *spezifizierte* Änderungsarten sind vorab genehmigt; Architekturänderungen oder neue Zweckbestimmungen brauchen weiterhin die volle Prüfung.
- **Unüberwachte Real-World-Drift**: Zulassung bei Einführungsleistung + stille Bevölkerungsdrift = ein Produkt, das außerhalb seiner zugelassenen Hüllkurve arbeitet; Überwachung ist sowohl regulatorische Erwartung als auch Selbstschutz.
- **Zulassung mit Wert verwechseln**: FDA-/UKCA-Zulassung ≠ jemand zahlt dafür — das ist die [HTA](../bewertung-von-gesundheitstechnologien/)-Hürde, separat zu nehmen.

## Quellen

- FDA, AI-enabled device software / SaMD. <https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-software-medical-device>
- PCCP implementation guidance analysis. <https://intuitionlabs.ai/articles/fda-pccp-implementation-guide-ai-ml-samd>
- NHS England, lessons from AI in Health and Care Award real-world evaluations. <https://www.england.nhs.uk/long-read/planning-and-implementing-real-world-ai-evaluations-lessons-from-the-ai-in-health-and-care-award/>
