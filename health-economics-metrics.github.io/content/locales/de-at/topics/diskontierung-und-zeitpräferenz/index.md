# Diskontierung und Zeitpräferenz

Diskontierung wandelt künftige Kosten und Nutzen in Barwerte um, weil ein Nutzen heute mehr wert ist als derselbe Nutzen in fünf Jahren.

## Warum es wichtig ist

Jede gesundheitsökonomische Bewertung und jeder ernstzunehmende Business Case im öffentlichen Sektor diskontiert mehrjährige Zahlungsströme. Das britische Finanzministerium (HM Treasury) schreibt im Green Book eine soziale Zeitpräferenzrate von 3,5 % pro Jahr vor; NICEs Referenzfall diskontiert sowohl Kosten als auch Gesundheitseffekte mit 3,5 % pro Jahr (mit einer abweichenden Rate von 1,5 % für nahezu heilende Therapien mit Nutzen über 30+ Jahre). Wenn Ihr Software-Business-Case "5 Millionen £ Einsparungen über 10 Jahre" behauptet, wird ein Finanzprüfer sofort nach der diskontierten Zahl fragen.

## Die Mathematik

Barwert eines künftigen Betrags:

```
PV = FV / (1 + r)^t

PV = Barwert (present value)
FV = künftiger Wert im Jahr t
r  = Diskontsatz (NICE/Green Book: 0,035)
t  = Jahre ab heute
```

Für einen konstanten jährlichen Nutzen B über n Jahre (eine Annuität):

```
PV = B × [1 − (1 + r)^(−n)] / r
```

## Durchgerechnetes Beispiel

Ihre Software spart einem NHS-Trust 100.000 £ pro Jahr über 5 Jahre, beginnend ein Jahr nach dem Go-live.

Undiskontierte Summe: 500.000 £.

Diskontiert mit 3,5 %:

```
Jahr 1: 100.000 / 1,035^1 = 96.618 £
Jahr 2: 100.000 / 1,035^2 = 93.351 £
Jahr 3: 100.000 / 1,035^3 = 90.194 £
Jahr 4: 100.000 / 1,035^4 = 87.144 £
Jahr 5: 100.000 / 1,035^5 = 84.197 £

Gesamter PV ≈ 451.505 £
```

Die ehrliche Schlagzeile lautet etwa 451.000 £, rund 10 % weniger als die naive Summe. Angenommen, die Lieferung verzögert sich um ein Jahr: Jeder Term verschiebt sich um ein Jahr nach hinten, und der PV fällt auf etwa 436.000 £ — die Diskontierungs-Sicht auf [Verzögerungskosten](../verzögerungskosten/).

## Bezug zur Softwareentwicklung

- **Abbau technischer Schulden und Plattformmigrationen** versprechen Nutzenströme, die Jahre in der Zukunft liegen; diskontieren Sie sie, bevor Sie sie mit Arbeit vergleichen, die sich noch dieses Quartal auszahlt.
- **Vorgezogene Kosten, nachgelagerter Nutzen** ist die typische Form einer Migration. Diskontierung bestraft diese Form — zu Recht: Sie bepreist den risikofreien Zeitwert, jetzt Kapazität für späteren Wert zu binden.
- **Behauptungen wie "Einsparungen in Jahr 5"** verdienen doppelte Skepsis — sie sind sowohl stark diskontiert als auch hochgradig unsicher (siehe [Sensitivitätsanalyse](../sensitivitätsanalyse/)).

## Fallstricke

- **Kosten diskontieren, aber nicht den Nutzen** (oder umgekehrt) — der Referenzfall diskontiert beides, mit derselben Rate.
- **Eine kommerzielle Rate (8–12 %) in einem Fall des öffentlichen Sektors verwenden**, oder 3,5 % in einem risikokapitalfinanzierten Fall. Die Rate muss zum Entscheidungsträger passen.
- **Diskontierung mit Inflation verwechseln.** Diskontierung gilt für *reale* (inflationsbereinigte) Werte; nicht beides implizit zugleich anwenden.

## Quellen

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- HM Treasury Green Book, discounting supplementary guidance. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
