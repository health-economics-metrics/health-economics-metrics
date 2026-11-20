# Währungssichere Kostenaggregation

Wer viele Geldposten — Monatsrechnungen, Kosten je Standort, mehrjährige Budget-Impact-Zahlen — mit gewöhnlichen binären Gleitkommazahlen (`f64`) summiert, sammelt kleine Darstellungsfehler an, weil sich die meisten Dezimalbrüche (zum Beispiel 1.234,56 $) in binärer Gleitkommadarstellung nicht exakt abbilden lassen. Jeder einzelne Fehler ist winzig, aber ein großes Modell, das Hunderte oder Tausende Posten über mehrere Jahre summiert, kann um Bruchteile eines Cents abdriften — und die Abweichung hängt von der *Reihenfolge* der Additionen ab, was sie nicht reproduzierbar macht. Eine Währungsaggregation in exakter Dezimal- (oder ganzzahliger Untereinheiten-)Arithmetik summiert exakt und entspricht damit dem, wie Buchhaltungssysteme und doppelte Buchführung auf den Cent genau abstimmen müssen.

## Warum es wichtig ist

Das ist eine gut dokumentierte, grundlegende Klasse von Softwarefehlern: Goldbergs Aufsatz „What Every Computer Scientist Should Know About Floating-Point Arithmetic" (ACM Computing Surveys, 1991) ist die Standardreferenz dafür, warum binäre Gleitkommazahlen die meisten dezimalen Geldwerte nicht exakt darstellen können und warum das Summieren vieler davon den Fehler verstärkt. Gesundheitsökonomische Modelle und NHS-Finanzmodelle summieren routinemäßig viele Jahre und viele Kostenkategorien — [Gesamtbetriebskosten](../gesamtbetriebskosten/) und [Budget-Impact-Analyse](../budget-impact-analyse/) aggregieren beide große Mengen von `f64`-Kostenposten über mehrjährige Zeithorizonte. Muss ein Modell auf den Cent genau abstimmen — ein Audit, das die Summe von Hand nachrechnet, muss *genau* dieselbe Zahl erhalten —, muss die Arithmetik selbst exakt dezimal sein, nicht Gleitkomma.

## Die Mathematik

```
Naive Aggregation:         Summe = Σ f64(Posten_i)         — reihenfolgeabhängige Drift
Währungssichere Aggregation: Summe = Σ Decimal(Posten_i)    — exakt, reproduzierbar

Anwendung einer prozentualen Anpassung (z. B. eines Risikopuffers):
  angepasst = Summe × Multiplikator        — exaktes Decimal-Ergebnis, kann mehr
                                              Nachkommastellen haben als der
                                              Untereinheiten-Exponent der Währung
  gerundet  = runden(angepasst, Währungsexponent, Rundungsregel)  — die Rundungsregel
                                              (kaufmännisch half-up vs. half-even/
                                              Bankers Rounding) muss ausdrücklich
                                              angegeben werden
```

Man beachte die zweistufige Disziplin: Das Multiplizieren eines exakten `Decimal`-Betrags mit einem Multiplikator kann mehr Nachkommastellen ergeben, als die Währung tatsächlich verwendet (zum Beispiel drei Nachkommastellen aus einem Betrag mit zwei Stellen mal einem Multiplikator mit zwei Stellen) — diese Zwischenpräzision wird *nicht* automatisch weggerundet; erst ein ausdrücklicher Rundungsschritt mit angegebener Rundungsregel bringt sie auf den echten Untereinheiten-Exponenten der Währung.

## Durchgerechnetes Beispiel

Zwölf identische Monatsrechnungen zu je 1.234,56 $, in exakter Dezimalarithmetik summiert: 1.234,56 $ × 12 = **14.814,72 $**, exakt. Dem steht das zwölfmalige Summieren des `f64`-Literals `1234.56` in IEEE-754-Doppelpräzision gegenüber, das je nach Summationsreihenfolge um Bruchteile eines Cents abdriften kann — eine reale, dokumentierte Fehlerklasse, aber kein Problem für ein Modell auf Basis exakter dezimaler `Money`-Arithmetik.

Nun einen üblichen Budget-Impact-Risikopuffer von 5 % (Multiplikator 1,05) auf diese 14.814,72 $ anwenden: 14.814,72 $ × 1,05 = 15.555,456 $ — drei Nachkommastellen, weil die Multiplikation exakt ist und nicht automatisch auf die zwei Nachkommastellen der Währung gerundet wird. Explizit auf 2 Nachkommastellen mit Bankers Rounding (half-even) gerundet ergibt sich genau **15.555,46 $**.

## Bezug zur Softwareentwicklung

Das ist die direkte, grundlegende Lehre hinter „Finanzsoftware verwendet `Decimal`, nicht `float`" — sie verbindet sich ausdrücklich mit den Modulen [Gesamtbetriebskosten](../gesamtbetriebskosten/) und [Budget-Impact-Analyse](../budget-impact-analyse/) dieses Repositorys, die beide derzeit einfache Gleitkommakosten summieren; das Korrektheitsargument verlangt nicht, diese Modelle sofort zu migrieren, benennt aber genau, *wann* ein System auf den Cent genau abstimmen muss und deshalb keine binäre Gleitkommazahl für seine Geldarithmetik verwenden darf. Siehe auch [Cent-genaue Kostenzuordnung](../cent-genaue-kostenzuordnung/) für das Schwesterproblem, Summen aufzuteilen (statt zu addieren), ohne Cents zu verlieren.

## Fallstricke

- **Mitten in der Rechenkette nach `float` konvertieren**: Einen Geldwert mitten in einer Berechnung in eine Gleitkommazahl zu überführen (manche `Money`-Bibliotheken nennen diese Konvertierungsmethode als ausdrückliche Warnung etwa „lossy") verwirft stillschweigend die Exaktheitsgarantie für jede nachfolgende Berechnung.
- **„Decimal ist zu langsam, das lohnt nicht"**: exakte Dezimalarithmetik als unnötigen Mehraufwand abtun, obwohl für Finanzberichte Korrektheit und Prüfbarkeit — nicht der reine Durchsatz — zählen.
- **Prozentualen Risikoaufschlag ohne angegebene Rundungsregel anwenden**: Half-up gegenüber half-even (Bankers Rounding) kann den letzten Cent verändern; die Rundungskonvention selbst muss eine angegebene, prüfbare Entscheidung sein — siehe [Kosten-Nutzen-Analyse](../kosten-nutzen-analyse/) für die Green-Book-Leitlinie des HM Treasury zu Risikopuffern und Optimismus-Bias-Anpassungen, genau die Art von Zahl, auf die dieser Rundungsschritt angewandt wird.

## Quellen

- Fowler M. „Patterns of Enterprise Application Architecture." Addison-Wesley, 2002 — das `Money`-Muster.
- Goldberg D. „What Every Computer Scientist Should Know About Floating-Point Arithmetic." ACM Computing Surveys, 1991.
- HM Treasury, The Green Book — Leitlinien zu Optimismus-Bias und Risikopuffern für die Budget-Impact-Modellierung. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
