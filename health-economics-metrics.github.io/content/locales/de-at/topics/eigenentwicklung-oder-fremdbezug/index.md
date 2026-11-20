# Eigenentwicklung oder Fremdbezug

Eigenentwicklung-oder-Fremdbezug ist ein strukturierter Vergleich von Individualentwicklung gegenüber kommerziellem Erwerb, auf Basis diskontierter [TCO](../gesamtbetriebskosten/), Lieferzeit und Risiko. Die empirischen Ausgangswerte sind eindeutig: **tatsächliche Baukosten übersteigen Prognosen typischerweise um 30–40 %**, gekaufte Lösungen werden 40–60 % schneller eingesetzt, und MITs GenAI-Forschung von 2025 fand, dass gekaufte KI-Tools zu ~67 % der Fälle erfolgreich waren, während interne Eigenentwicklungen nur etwa ein Drittel so oft erfolgreich waren.

## Warum es wichtig ist

Gesundheitssysteme stehen ständig vor dieser Entscheidung ("make vs. commission" im NHS-Jargon), und Entwicklungsorganisationen liegen systematisch in Richtung Eigenbau falsch — weil Entwickler den Bau schätzen, nicht die [TCO](../gesamtbetriebskosten/), und weil Bauen mehr Spaß macht. Der ökonomische Rahmen erzwingt den ehrlichen Vergleich: beide Optionen über denselben Horizont bepreist, beide risikoadjustiert, und die *Zeitdifferenz als [Verzögerungskosten](../verzögerungskosten/) bepreist* — der Term, der die Antwort am häufigsten entscheidet und am häufigsten weggelassen wird.

## Die Mathematik

```
Über denselben 3–5-Jahres-Horizont vergleichen, diskontiert:

NPV_Option = PV(Nutzen, verschoben um Zeit-bis-zum-Wert) − PV(TCO)

Risikoanpassungen (Green-Book-"Optimismus-Bias"-Muster):
  Baukosten × 1,3–1,4          (Überschreitungs-Ausgangswert)
  Bau-Zeit-bis-zum-Wert + 40–60 % (Verzögerungs-Ausgangswert)
  Kauf: stattdessen Integrations-Realitätscheck und Ausstiegskosten ergänzen

Entscheidungstreiber, in der Reihenfolge, in der sie meist entscheiden:
  1. Differenzierung — ist diese Fähigkeit das eigene Produkt oder nur Installation?
  2. Zeit-bis-zum-Wert × CoD
  3. risikoadjustierte TCO
```

## Durchgerechnetes Beispiel

Ein Trust braucht ein E-Einwilligungssystem. Kaufen: 150.000 £/Jahr SaaS, live in 3 Monaten. Bauen: geschätzt 600.000 £ + 120.000 £/Jahr Wartung, live in 12 Monaten.

```
Risikoadjustierter Bau: 600.000 × 1,35 = 810.000 £; Zeit-bis-zum-Wert ≈ 18 Monate
5-Jahres-TCO:  Kauf = 150.000 × 5 = 750.000 £
               Bau  = 810.000 + 120.000 × 5 = 1.410.000 £
Verzögerungsterm: Digitalisierung der Einwilligung spart 25.000 £/Monat;
                  Bau kommt 15 Monate später → CoD = 15 × 25.000 = 375.000 £

Effektiver Vergleich: 750.000 £ vs. 1.785.000 £ — Kauf gewinnt um ~1 Mio. £,
und der größte Einzelterm nach dem Bau selbst sind die Verzögerungskosten,
die niemand bepreist hatte.
```

Bauen bleibt richtig, wenn die Fähigkeit differenzierend ist (der Kernalgorithmus des eigenen Produkts), wenn kein Anbieter eine harte Einschränkung erfüllt (klinische Sicherheit, Datenresidenz), oder wenn das Risiko der Anbieterbindung schwerwiegend und bepreist ist.

## Bezug zur Softwareentwicklung

Die übertragbare gesundheitsökonomische Disziplin ist dreifach: **ausgangswertbasierte Risikoanpassung** (der Aufschlag von 30–40 % Überschreitung ist der Software-Optimismus-Bias des Green Book — ihn mechanisch anwenden, Ausnahmen begründen statt von ihnen auszugehen); **Ehrlichkeit bei der Vergleichsoption** (die Alternative zum Bauen ist nicht "nichts", sondern der beste verfügbare Kauf — siehe [Opportunitätskosten](../opportunitätskosten/)); und **Gleichwertigkeitsprüfung vor Kostenvergleich** (erfüllen Kauf und Bau wirklich dieselbe Spezifikation, ist das [Kostenminimierungsanalyse](../kostenminimierungsanalyse/), und die günstigere gewinnt; wenn nicht, muss der Ergebnisunterschied bewertet, nicht behauptet werden).

## Fallstricke

- **Anbieter-Listenpreis mit nicht-risikoadjustierten Bauschätzungen vergleichen** — doppelte Schmeichelei zugunsten des Baus.
- **Interne Arbeit zu null Kosten angesetzt** ("das Team ist ja schon da").
- **Unbepreiste Bindung in beide Richtungen**: Ausstiegskosten des Anbieters, aber auch der Bus-Faktor und die Wartungsdauer des Baus.
- **Identitätsgetriebene Eigenbauten**: "das ist für uns zentral" für bloße Installation behauptet — Differenzierung daran prüfen, ob Kunden es bemerken würden.

## Quellen

- Build-vs-buy TCO analyses. <https://neontri.com/blog/build-vs-buy-software/>
- MIT GenAI divide findings (buy-vs-build success rates). <https://blueflame.ai/blog/achieving-ai-roi-key-findings-from-mits-genai-report>
- HM Treasury Green Book (optimism bias). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
