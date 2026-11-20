# Kostenminimierungsanalyse (CMA)

Die CMA vergleicht nur Kosten und wählt die günstigste Option — legitim *nur*, wenn die Ergebnisse der Alternativen nachweislich gleichwertig sind.

## Warum es wichtig ist

Die CMA ist die einfachste Analyse und die am meisten missbrauchte. Die Gleichwertigkeitsbehauptung trägt die gesamte Last: Unterscheiden sich die Ergebnisse tatsächlich nicht (ein Biosimilar gegenüber seinem Original; zwei Anbieter desselben Dienstes, die dieselbe Spezifikation erfüllen), dann sind die Kosten die einzige Frage, und die CMA ist korrekt. Die Sorgfalt liegt darin, die Gleichwertigkeit zuerst *zu beweisen* — typischerweise über eine Nichtunterlegenheitsstudie mit vorab festgelegter Marge —, genau der Schritt, den Einkäufer meist überspringen.

## Die Mathematik

```
Gegeben Evidenz, dass Effekt_A ≈ Effekt_B (innerhalb einer vorab festgelegten Marge δ):
min(Kosten_A, Kosten_B) wählen

Kosten aus derselben Perspektive gemessen, über denselben Horizont,
einschließlich Umstellungs-/Übergangskosten.
```

Kann Gleichwertigkeit nicht belegt werden, ist die CMA ungültig — stattdessen [CEA](../kosten-effektivitäts-analyse/)/[CUA](../kosten-nutzwert-analyse/) verwenden.

## Durchgerechnetes Beispiel

Ein Trust wählt zwischen zwei Videosprechstunden-Plattformen. Ein dreimonatiger Parallelpilot zeigt Abschlussraten von 94,1 % vs. 93,8 %, Patientenzufriedenheit 4,4 vs. 4,4 — Unterschiede innerhalb des vorab vereinbarten δ von 2 Prozentpunkten. Ergebnisse: gleichwertig. Kosten über 3 Jahre:

```
                     Plattform A    Plattform B
Lizenzen             360.000 £      210.000 £
Integration          80.000 £       150.000 £
Schulung/Support     60.000 £       90.000 £
Gesamt               500.000 £      450.000 £
```

Plattform B gewinnt um 50.000 £ — *einschließlich* ihrer höheren Integrationskosten. Ohne den Piloten würde die Gleichwertigkeitsbehauptung auf Anbieterbroschüren beruhen, und ein Unterschied von 1 Prozentpunkt bei der Abschlussrate (≈ Tausende gescheiterte Konsultationen/Jahr) würde 50.000 £ klein aussehen lassen.

## Bezug zur Softwareentwicklung

Die CMA ist die formale Gestalt der Commodity-Beschaffung: zwei CI-Anbieter, die identische SLOs erfüllen, zwei Objektspeicher mit derselben Haltbarkeitsspezifikation. Die Lehre der Gesundheitsökonomie ist die *Reihenfolge*: zuerst Gleichwertigkeit belegen (gegen die eigene Arbeitslast benchmarken, gegen die eigenen SLOs pilotieren, mit vorab vereinbarter Marge), dann die Gesamtkosten einschließlich Migration vergleichen. "Sie sind im Grunde gleich, B ist günstiger" ohne den ersten Schritt ist, wie Organisationen das Tool kaufen, das 10 % günstiger und 40 % schlechter ist. Umkehrschluss: Argumentiert ein Anbieter mit dem Preis, soll er Gleichwertigkeit festschreiben — das bindet auch in die andere Richtung.

## Fallstricke

- **Angenommene Gleichwertigkeit** — die definierende Sünde; fehlender Nachweis eines Unterschieds ist kein Nachweis der Gleichwertigkeit (unterdimensionierte Piloten "zeigen" Gleichwertigkeit geschenkt).
- **Umstellungskosten weglassen** — Migration, Umschulung und Parallelbetrieb gehören auf die Kostenseite.
- **Gleichwertigkeit bei den falschen Ergebnissen**: gleichwertig bei der gemessenen Kennzahl, unterschiedlich bei einer, die zählt (Barrierefreiheit, Latenz-Ausreißer, Daten-Abfluss).

## Quellen

- York Health Economics Consortium glossary: cost-minimization analysis. <https://yhec.co.uk/glossary/cost-minimisation-analysis/>
- Briggs AH, O'Brien BJ. "The death of cost-minimization analysis?" Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11288052/>
