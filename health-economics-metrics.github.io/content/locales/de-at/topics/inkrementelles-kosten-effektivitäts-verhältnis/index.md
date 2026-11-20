# Inkrementelles Kosten-Effektivitäts-Verhältnis (ICER)

Der ICER sind die zusätzlichen Kosten pro zusätzlicher Einheit Gesundheitseffekt, wenn man sich für eine Option gegenüber der nächstbesten Alternative entscheidet. Es ist die Schlagzeilen-Kennzahl des Health Technology Assessment. (Ist die Effekteinheit QALYs, wird es auch inkrementelles Kosten-Nutzwert-Verhältnis, ICUR, genannt.)

## Warum es wichtig ist

Gesundheitssysteme bewerten eine Technologie nie isoliert — immer *inkrementell*, gegenüber dem, was sonst getan würde. NICE vergleicht den ICER einer Technologie mit seinem Schwellenwert von **20.000–30.000 £ pro QALY**; das US-amerikanische ICER-Institut berichtet im Bereich 50.000–200.000 $/QALY; Kanada arbeitet mit etwa 50.000 CAD$/QALY. Ob Ihr Produkt für einen nationalen Gesundheitsdienst "es wert ist", entscheidet sich formal daran, ob sein ICER den lokalen Schwellenwert unterschreitet. Siehe [Zahlungsbereitschaftsschwellen](../zahlungsbereitschaftsschwellen/).

## Die Mathematik

```
ICER = (Kosten_neu − Kosten_Vergleichsoption) / (Effekt_neu − Effekt_Vergleichsoption)
```

Interpretationsregeln:

- ΔK < 0, ΔE > 0: Die neue Option **dominiert** — günstiger und besser; kein Verhältnis nötig.
- ΔK > 0, ΔE > 0: ICER berechnen, mit Schwellenwert λ vergleichen; übernehmen, wenn ICER < λ.
- ΔK > 0, ΔE < 0: Die neue Option ist dominiert — ablehnen.
- Verhältnisse verhalten sich nahe ΔE = 0 schlecht — für die Rangfolge den [Nettomonetären Nutzen](../nettomonetärer-nutzen/) bevorzugen.

Die Vergleichsoption muss die *nächstbeste nicht dominierte Option* sein, nicht "nichts tun" — siehe [Dominanz und die Effizienzgrenze](../dominanz-und-die-effizienzgrenze/).

## Durchgerechnetes Beispiel

Ein Fernüberwachungsdienst für Herzinsuffizienzpatienten, je 1.000 Patienten/Jahr, gegenüber üblicher Versorgung:

```
Kosten:  Dienst 900.000 £; vermiedene Einweisungen sparen 600.000 £
Nettokosten (ΔK) = 900.000 − 600.000 = 300.000 £

Effekte: frühere Intervention gewinnt 25 QALYs

ICER = 300.000 / 25 = 12.000 £ pro QALY
```

12.000 £/QALY liegt komfortabel unter NICEs Schwellenwert von 20.000 £ — ein starker Fall. Beachtenswert, wie sehr die *Netto*-Kosten zählen: ohne den Ausgleich von 600.000 £ läge der ICER bei 36.000 £/QALY, und der Fall würde wahrscheinlich scheitern. Kostenausgleiche und ihre Evidenzqualität sind es, woran diese Analysen gewonnen oder verloren werden (siehe [vermiedene nachgelagerte Kosten](../vermiedene-nachgelagerte-kosten/)).

## Bezug zur Softwareentwicklung

Die ICER-Disziplin überträgt sich vollständig auf Entwicklungsentscheidungen:

```
(Kosten von Option B − Kosten von Option A) / (Ergebnis B − Ergebnis A)
```

— inkrementelle Kosten pro zusätzlichem Deployment, pro gesparter Entwicklerstunde, pro vermiedenem Vorfall — immer gegenüber der nächstbesten Alternative, nicht gegenüber Nichtstun. Zwei Gewohnheiten, die sich zu stehlen lohnen: (1) *die Vergleichsoption explizit benennen*; die meisten ROI-Behauptungen zu Tools vergleichen heimlich mit einem Strohmann; (2) *zuerst die Kosten verrechnen* — ein Tool, das 100.000 £ kostet, aber 80.000 £ bestehender Ausgaben verdrängt, hat ΔK = 20.000 £.

## Fallstricke

- **Vergleichsoptions-Manipulation**: der Vergleich mit einer veralteten oder künstlich schlechten Ausgangslage bläht ΔE auf und schmeichelt dem ICER.
- **Durchschnittswerte statt Inkremente**: die Kosten pro QALY eines ganzen Programms sind nicht der ICER seiner Ausweitung oder Einführung.
- **Punktschätzer-Verehrung**: ICERs sind Verhältnisse zweier unsicherer Differenzen; Unsicherheit über [PSA und CEACs](../probabilistische-sensitivitätsanalyse/) berichten.
- **Negative ICERs sind mehrdeutig** (günstiger-und-besser und teurer-und-schlechter ergeben dasselbe Vorzeichen) — nie einen negativen ICER berichten, ohne zu sagen, in welchem Quadranten er liegt.
- **Einen ICER über Währungen hinweg ohne expliziten Umrechnungsschritt vergleichen**: Ein in der Währung eines Landes berechneter ICER muss mit einer angegebenen Methode umgerechnet werden, bevor er mit der Schwelle eines anderen Landes verglichen wird — siehe [währungsübergreifender ICER-Vergleich](../währungsübergreifender-icer-vergleich/), warum die Wahl des Umrechnungsfaktors (Kaufkraftparität vs. Marktwechselkurs) selbst die Einführungsentscheidung kippen kann.

## Quellen

- NICE: cost-effectiveness thresholds FAQ. <https://www.nice.org.uk/what-nice-does/faqs/changes-to-nice-s-cost-effectiveness-thresholds>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
- York Health Economics Consortium glossary: ICER. <https://yhec.co.uk/glossary/incremental-cost-effectiveness-ratio-icer/>
