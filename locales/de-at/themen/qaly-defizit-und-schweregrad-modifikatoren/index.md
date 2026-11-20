# QALY-Defizit und Schweregrad-Modifikatoren

Das QALY-Defizit misst, wie viel künftige Gesundheit eine Krankheit Patienten im Vergleich zur Allgemeinbevölkerung nimmt. NICE nutzt es, um **Schweregrad-Modifikatoren** anzuwenden: Je kränker die Bevölkerung, desto mehr ist jedes gewonnene QALY wert — bis zum 1,7-Fachen des Standardschwellenwerts.

## Warum es wichtig ist

Seit NICEs Handbuch von 2022 ist der Schweregrad ein expliziter Multiplikator für den Wert von Gesundheitsgewinnen und ersetzt die alte Lebensendprämie. Eine Technologie für eine schwere Erkrankung wird gegen einen effektiven Schwellenwert von bis zu ~51.000 £/QALY statt 30.000 £ beurteilt. Bedient Ihre Software eine schwer betroffene Bevölkerung (fortgeschrittene Herzinsuffizienz, schwere psychische Erkrankung), kann der Schweregrad-Modifikator den Unterschied zwischen einem finanzierbaren und einem nicht finanzierbaren ökonomischen Fall ausmachen — und Sie brauchen die Defizit-Rechnung, um ihn zu beanspruchen.

## Die Mathematik

Zwei Maße, berechnet über die verbleibende Lebenszeit bei aktuellem Versorgungsstandard:

```
Absolutes Defizit       = QALYs_Allgemeinbevölkerung − QALYs_mit_Erkrankung
Proportionales Defizit  = Absolutes Defizit / QALYs_Allgemeinbevölkerung
```

NICE-2022-Gewichte (das Maß mit dem höheren Gewicht gilt):

```
Gewicht ×1,0: absolut < 12 und proportional < 0,85
Gewicht ×1,2: absolut ≥ 12 oder proportional ≥ 0,85
Gewicht ×1,7: absolut ≥ 18 oder proportional ≥ 0,95
```

Das Gewicht multipliziert ΔE (bzw. gleichwertig den Schwellenwert): das effektive λ wird bei ×1,2 zu 24.000–36.000 £ und bei ×1,7 zu 34.000–51.000 £.

## Durchgerechnetes Beispiel

Patienten mit einer aggressiven Erkrankung, Durchschnittsalter 60. Die Allgemeinbevölkerung erwartet mit 60 Jahren 14,2 diskontierte QALYs; mit der Erkrankung unter aktueller Versorgung 2,1.

```
Absolutes Defizit       = 14,2 − 2,1 = 12,1  (≥ 12 → qualifiziert für ×1,2)
Proportionales Defizit  = 12,1 / 14,2 = 0,852 (≥ 0,85 → ebenfalls ×1,2)
```

Der ICER Ihrer Überwachungsplattform liegt bei 26.000 £/QALY — über dem üblichen Mittelwerturteil von 20.000–30.000 £, ein Grenzfall. Mit dem ×1,2-Gewicht: effektiver ICER = 26.000 / 1,2 ≈ **21.700 £/QALY** — komfortabel finanzierbar. Die Defizitberechnung hat die Entscheidung gerade verändert.

## Bezug zur Softwareentwicklung

Schweregradgewichtung ist eine formale Version dessen, was Entwicklungsorganisationen instinktiv tun: mehr pro Verbesserungseinheit bei den schlechtesten Systemen ausgeben. Das übertragbare Muster — für jeden Dienst das "SLO-Defizit" berechnen (wie weit er absolut und proportional unter seiner erwarteten gesunden Baseline läuft) und den Sanierungswert entsprechend gewichten. Das begründet mit Rechnung statt mit Argumenten, warum das brennende Legacy-System mehr Investition pro gesparter Stunde erhält als ein gesundes. Es trägt auch dieselbe Governance-Lehre: die Gewichte *vor* dem Priorisierungstreffen veröffentlichen, sonst beansprucht jedes Team Schweregrad für sich.

## Fallstricke

- **Das Defizit gegen die falsche Baseline berechnen**: Es wird unter dem *aktuellen Versorgungsstandard* gemessen, nicht dem unbehandelten natürlichen Verlauf.
- **Altersabhängigkeit**: Das Defizit hängt stark vom Alter der Bevölkerung ab (jüngere Patienten haben mehr QALYs zu verlieren → höheres absolutes Defizit); die tatsächliche Altersverteilung der behandelten Bevölkerung verwenden.
- **Annehmen, der Modifikator gelte auch anderswo** — er ist ein Mechanismus von NICE (England); andere HTA-Institutionen behandeln Schweregrad anders (oder gar nicht).

## Quellen

- Analysis of NICE severity modifier decisions, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Mtech Access, NICE HTA decision modifiers explainer. <https://mtechaccess.co.uk/nice-hta-decision-modifier/>
