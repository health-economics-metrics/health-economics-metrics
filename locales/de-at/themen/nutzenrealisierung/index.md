# Nutzenrealisierung

Benefits Realization Management (BRM) ist die Disziplin, zu identifizieren, eine Ausgangslage festzuhalten, zu verfolgen und *zu belegen*, dass der in einem Business Case versprochene Nutzen nach der Auslieferung tatsächlich eingetreten ist. In britischen öffentlichen Investitionen lebt sie im **Five Case Model** des Green Book des HM Treasury; in der Medizin ist ihre Cousine die Überwachung nach Markteinführung.

## Warum es wichtig ist

Business Cases sind Versprechen; Nutzenrealisierung ist die Prüfung. Evaluationen großer digitaler NHS-Programme fanden wiederholt prognostizierten Nutzen, der nie eintrat — und wenn Nutzen nicht zahlungswirksam war, brachte er dem Ergebnis des Trusts nichts. Die Antwort des Green Book: Jeder Ausgabenfall muss **fünf Fälle** bestehen (strategisch, ökonomisch, kommerziell, finanziell, Management), mit Nutzenrealisierung geplant im Management-Fall *vor der Genehmigung* — Verantwortliche benannt, Ausgangswerte erfasst, Messtermine festgelegt. Ohne das bleibt "die Software hat 30 Minuten pro Pflegekraft gespart" für immer Anbieter-Fiktion.

## Die Mathematik

```
Realisierungsrate = realisierter Nutzen / prognostizierter Nutzen
                    (pro Nutzen, pro Zeitraum)

Mechanik, die es berechenbar macht:
  Ausgangswert VOR dem Go-live erfasst (sonst ist die Differenz unmessbar)
  jeder Nutzen: Verantwortlicher, Kennzahl, Datenquelle, Messplan
  Prognose bei der Bewertung um Optimismus-Bias angepasst (Green-Book-Vorgabe)
  Nutzen klassifiziert als Bargeld/nicht-Bargeld/qualitativ und getrennt
  verfolgt (siehe cash-releasing-vs-non-cash-releasing.md)
```

## Durchgerechnetes Beispiel

Ein Business Case für E-Rostering versprach pro Jahr: 450.000 £ reduzierte Zeitarbeitsausgaben (Bargeld), 8.000 Stunden Stationsleitungszeit (Kapazität), verbesserte Besetzungsquoten-Einhaltung (qualitativ). Zwölf Monate nach Go-live:

```
Nutzen              Prognose    Realisiert   Rate   Evidenz
Zeitarbeitsausgaben 450.000 £   287.000 £    64 %   Kontenbuch vs. Basisjahr
Leitungsstunden     8.000       5.100        64 %   Zeit-Bewegungs-Stichprobe
Besetzungsquote     +10 Pp      +12 Pp       120 %  Rostering-Systemdaten

Maßnahmen aus der Überprüfung (der Sinn von BRM):
Zeitarbeits-Fehlbetrag auf zwei nie onboardete Stationen zurückgeführt →
  sie onboarden;
30-%-Optimismus-Fehler des Prognosemodells festgehalten → auf den
  nächsten Fall angewendet.
```

64 % Realisierung ist kein Scheitern — es ist *Wissen*. Ungemessene Fälle beanspruchen für immer 100 %.

## Bezug zur Softwareentwicklung

Entwicklungsorganisationen genehmigen Plattforminvestitionen auf Basis prognostizierten Nutzens und prüfen ihn fast nie — genau die Pathologie, die BRM behebt. Die leichtgewichtige Übertragung: jeder Vorschlag über einer Schwelle benennt Nutzenverantwortliche, Ausgangskennzahlen und einen Überprüfungstermin T+6 Monate; Realisierungsraten fließen zurück in den Abschlag, den die Organisation auf die nächste Prognose dieses Teams (oder Anbieters) anwendet. Das ist auch die Antwort auf KI-Tooling-Skepsis: [der MIT-Befund, dass ~95 % der GenAI-Piloten keine messbare Gewinn-und-Verlust-Rendite zeigten](../kapitalrendite-von-ki/) ist ein Nutzenrealisierungs-Ergebnis — die Piloten, die *doch* Rendite brachten, hatten verfolgbare, verantwortete Nutzenzeilen. Prognose → Messung → Neukalibrierung ist derselbe Kreislauf wie über [EVPI](../erwarteter-wert-perfekter-information/) bepreiste Piloten, nur im Portfolio-Maßstab ausgeführt.

## Fallstricke

- **Kein Ausgangswert vor Go-live** — die tödliche, unbehebbare Auslassung.
- **Nutzen-Waisenschaft**: kein benannter Verantwortlicher bedeutet, niemand erhebt die Daten, und jede Überprüfung sagt "im Großen und Ganzen im Plan".
- **Doppelt gezählter Nutzen über Programme hinweg**, die dieselbe freigesetzte Kapazität beanspruchen — ein Nutzenregister über das gesamte Portfolio führen.
- **Realisierungstheater**: die leichten qualitativen Erfolge messen, während die Bargeldzeilen still unbeachtet bleiben.

## Quellen

- HM Treasury, Green Book and Five Case Model guidance. <https://www.gov.uk/government/collections/the-green-book-and-accompanying-guidance-and-documents>
- Global Digital Exemplar programme evaluation (NHS digital benefits lessons). <https://pmc.ncbi.nlm.nih.gov/articles/PMC8685936/>
