# Qualitätsadjustiertes Lebensjahr (QALY)

Ein QALY ist ein Lebensjahr in vollkommener Gesundheit. Es verbindet *wie lange* Menschen leben mit *wie gut* sie leben, sodass ein Jahr in schlechter Gesundheit als weniger als ein QALY zählt — und macht dadurch völlig unterschiedliche Gesundheitsinterventionen auf einer einzigen Skala vergleichbar.

## Warum es wichtig ist

Das QALY ist die gemeinsame Währung des Health Technology Assessment. NICE (England) bewertet Gesundheitsgewinne mit **20.000–30.000 £ pro QALY**: Eine Intervention, die QALYs günstiger als dieser Schwellenwert erkauft, wird normalerweise empfohlen; eine, die sie teurer erkauft, normalerweise abgelehnt. Diese eine Zahl ist es, mit der ein nationaler Gesundheitsdienst ein Krebsmedikament, eine Hüftoperation und eine Triage-App auf derselben Achse vergleicht. Wenn Ihre Software glaubwürdig QALYs beanspruchen kann — durch Verhinderung von Verschlechterung, schnellere Behandlung oder verbesserte Sicherheit —, können Sie ihren Gesundheitswert in derselben Währung bepreisen wie die Medizin selbst.

## Die Mathematik

```
QALYs = Σ_i (Dauer_i × Nutzwert_i)

Dauer_i    = Jahre im Gesundheitszustand i verbracht
Nutzwert_i = Qualitätsgewicht des Zustands i, verankert bei 1 = vollkommene Gesundheit, 0 = tot
             (negative Werte für Zustände schlechter als der Tod zulässig)
```

Nutzwertgewichte stammen aus validierten Instrumenten, meist [EQ-5D](../eq-5d/). Der QALY-*Gewinn* einer Intervention ist die Differenz zwischen den QALY-Strömen mit und ohne sie, im NICE-Referenzfall mit 3,5 %/Jahr [diskontiert](../diskontierung-und-zeitpräferenz/).

## Durchgerechnetes Beispiel

Ein Patient wartet auf eine Herzbehandlung in einem Zustand mit Nutzwert 0,6. Die Behandlung stellt einen Nutzwert von 0,85 wieder her.

- **Sofort behandelt**: 1 Jahr bei 0,85 = 0,85 QALYs in diesem Jahr.
- **Behandelt nach 6 Monaten Verzögerung**: 0,5 × 0,6 + 0,5 × 0,85 = 0,725 QALYs.
- **QALY-Verlust pro Patient durch die Verzögerung**: 0,85 − 0,725 = **0,125 QALYs**.

Monetarisiert mit dem NICE-Schwellenwert: 0,125 × 20.000–30.000 £ = **2.500–3.750 £ verlorener Gesundheitswert pro Patient und 6-monatiger Verzögerung**. Beseitigt eine Software, die den Pfad beschleunigt, diese Verzögerung für 400 Patienten/Jahr, beträgt der Gesundheitswert 50 QALYs ≈ **1,0–1,5 Mio. £/Jahr** — noch bevor operative Einsparungen mitgezählt werden.

## Bezug zur Softwareentwicklung

- **Schnellere Pfade = frühere QALYs.** Alles, was die [Überweisung zur Behandlung](../überweisung-zur-behandlung/) verkürzt, wandelt den Disnutzen der Wartezeit in Gesundheitsgewinn um, bewertet wie oben.
- **Sicherheit = erhaltene QALYs.** Verhinderte Medikationsfehler und verpasste Diagnosen sind vermiedene QALY-Verluste.
- **Das QALY ist auch eine Vorlage für Kennzahlendesign**: ein Verbund aus Menge × Qualität, mit Qualitätsgewichten aus einem standardisierten Instrument. Ein "qualitätsadjustiertes Entwicklerjahr" (Zeit × DevEx-Umfragegewicht) folgt derselben Konstruktion — siehe [SPACE und DevEx](../space-und-devex/).
- Um QALYs für einen Business Case in Geld umzuwandeln, den [Nettomonetären Nutzen](../nettomonetärer-nutzen/) verwenden; um sie in eine Entscheidung umzuwandeln, die [Zahlungsbereitschaftsschwellen](../zahlungsbereitschaftsschwellen/).

## Fallstricke

- **Nutzwertgewichte erfinden.** Gewichte müssen aus validierten Instrumenten (EQ-5D) und veröffentlichten Wertesets stammen, nicht aus Intuition.
- **QALYs ohne Kausalpfad behaupten.** "Unsere App verbessert das Wohlbefinden" ist keine QALY-Behauptung; "beseitigt X Wochen Wartezeit im Zustand mit Nutzwert 0,6" ist es.
- **Doppelzählung**: Sowohl den QALY-Gewinn als auch die Kosteneinsparung derselben vermiedenen Verschlechterung zu beanspruchen, erfordert Sorgfalt, damit beide wirklich getrennt sind.
- **Blinde Flecken bei Gerechtigkeit**: QALYs bewerten ein zusätzliches Lebensjahr nach dem Ausgangsnutzwert, was Menschen mit Behinderungen benachteiligen kann — deshalb berichtet ICER (USA) zusätzlich den evLYG (siehe [gewonnene Lebensjahre](../gewonnene-lebensjahre/)).

## Quellen

- NICE glossary: QALY. <https://www.nice.org.uk/glossary?letter=q>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
