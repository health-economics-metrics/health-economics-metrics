# Präventionsökonomie

Die Ökonomie des Eingreifens, bevor eine Krankheit auftritt oder fortschreitet. Der Hauptbefund ist kontraintuitiv: **die meiste Prävention spart kein Geld** — sie kauft Gesundheit zu einem guten Preis. Die wegweisende NEJM-Analyse von Cohen, Neumann und Weinstein fand, dass weniger als 20 % der präventiven Interventionen netto kostensparend sind; der Rest ist bestenfalls kosteneffektiv.

## Warum es wichtig ist

"Prävention spart Geld" ist die am häufigsten wiederholte falsche Behauptung in der Gesundheitspolitik, und darauf aufgebaute Business Cases werden von Gesundheitsökonomen demontiert. Die ehrliche Struktur: Prävention kostet jetzt Geld (ganze Bevölkerungen screenen, Risikofaktoren bei Menschen behandeln, die nie krank geworden wären) und gibt später Gesundheit zurück — meist zu einem *guten* Preis pro QALY, gelegentlich mit Einsparung, manchmal zu einem schrecklichen Preis. Zu wissen, in welchem Regime man sich befindet, ist die eigentliche Analyse. Die Unterscheidung zählt kommerziell: Ein Präventionsprodukt, verkauft als "spart dem NHS Geld", lädt zu einer Prüfung ein, die es verlieren wird; verkauft als "kauft QALYs zu 4.000 £", kann es mit denselben Fakten gewinnen. Siehe [Frühintervention](../frühintervention/) für die Version innerhalb eines Pfades. Bevor man ein Präventionsprogramm kostenmäßig bewertet, beantwortet der [populationsattributable Anteil](../populationsattributabler-anteil/) zuerst die Dimensionierungsfrage — wie viel der anvisierten Krankheitslast der Risikofaktor, den das Programm adressiert, plausibel beseitigen könnte.

## Die Mathematik

```
Nettokosten der Prävention (pro Person) =
    Interventionskosten × alle Behandelten
  − vermiedene nachgelagerte Kosten × die wenigen, die fortgeschritten wären
  (beide diskontiert — die vermiedenen Kosten liegen Jahre entfernt; siehe
  discounting-and-time-preference.md)

Kostensparend erfordert: Interventionskosten < P(Progression) × vermiedene
Kosten × Diskontfaktor
Kosteneffektiv erfordert nur: Nettokosten / gewonnene QALYs < Schwellenwert
```

Das Präventionsparadox: Interventionskosten vervielfachen sich über die gesamte Bevölkerung; Nutzen fällt nur den wenigen des Kontrafaktischen zu.

## Durchgerechnetes Beispiel

Eine App zum Bluthochdruckmanagement, angeboten für 100.000 gefährdete Erwachsene, 25 £/Person/Jahr. Über 10 Jahre verhindert sie 400 Schlaganfälle (jeder kostet diskontiert 45.000 £, und 3 verlorene QALYs).

```
Kosten:     100.000 × 25 £ × 10 Jahre (diskontiert ≈ ×8,3) ≈ 20,8 Mio. £
Ausgleich:  400 × 45.000 £ = 18,0 Mio. £
Nettokosten ≈ 2,8 Mio. £ — NICHT kostensparend

QALYs gewonnen = 400 × 3 = 1.200
Kosten pro QALY = 2,8 Mio. / 1.200 ≈ 2.300 £/QALY — außerordentlich kosteneffektiv
```

Dasselbe Programm, beide Wahrheiten zugleich: Es verliert 2,8 Mio. £ an Bargeld und kauft Gesundheit zu einem Zehntel des NICE-Schwellenwerts. Es mit der zweiten Zahl finanzieren; nie die erste versprechen.

## Bezug zur Softwareentwicklung

Shift-Left-Qualität ist Präventionsökonomie, samt Vorbehalt. Reviews, Tests und statische Analyse wenden auf *jede* Änderung Kosten an, um Probleme bei den wenigen zu fangen, die zu Produktionsvorfällen fortgeschritten wären. Die Fehlerkostenkurve (10–100-fach je nach Phase) spielt die Rolle der Schlaganfallkosten — und die ehrliche Schlussfolgerung spiegelt die gesundheitliche: Shift-Left ist meist kosten*effektiv*, nicht automatisch kosten*sparend*, weil die meisten markierten Probleme nie zu Vorfällen geworden wären (das Problem der wenigen des Kontrafaktischen). Berechnen: Gesamtkosten des Gates pro Zeitraum gegenüber tatsächlich vermiedenen Vorfällen × Vorfallkosten — dieselbe Struktur wie im durchgerechneten Beispiel, mit [NNT](../anzahl-der-notwendigen-behandlungen/) als Einheit pro Fang.

## Fallstricke

- **Kosteneinsparung behaupten, wenn die Evidenz nur Kosteneffektivität stützt** — der definierende Fehler der Präventionsbefürwortung in beiden Bereichen.
- **Undiskontierte künftige Ausgleiche**: Nutzen 15 Jahre entfernt zum Nennwert genommen.
- **Kosten von Überdiagnose/Überbehandlung ignorieren**: Prävention findet auch Pseudo-Krankheit — siehe [Screening-Ökonomie](../screening-ökonomie/).

## Quellen

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- Masters R, et al. "Return on investment of public health interventions." JECH 2017. <https://pmc.ncbi.nlm.nih.gov/articles/PMC5537512/>
