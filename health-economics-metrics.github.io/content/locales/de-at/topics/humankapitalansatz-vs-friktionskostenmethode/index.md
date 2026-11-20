# Humankapitalansatz vs. Friktionskostenmethode

Das sind die beiden konkurrierenden Methoden, um Produktivitätsverluste — durch Krankheit, Behinderung oder Tod — in Krankheitskosten- und Kosten-Nutzen-Studien zu bewerten. Der Humankapitalansatz (HCA) bewertet den gesamten Produktionsausfall über die volle Dauer der Abwesenheit zum Lohnsatz; die Friktionskostenmethode (FCM) bewertet ihn nur für den kürzeren Zeitraum, den ein Arbeitgeber tatsächlich braucht, um die Produktion wiederherzustellen. Die Wahl zwischen beiden verändert eine Schätzung indirekter Kosten um das Zweifache oder mehr.

## Warum es wichtig ist

Indirekte (Produktivitäts-)Kosten sind einer der umstrittensten Posten der Gesundheitsökonomie, gerade weil die beiden Standardmethoden so stark voneinander abweichen. HCA behandelt jeden Abwesenheitstag als einen Tag Produktion, den die Volkswirtschaft wirklich verliert, bewertet zum vollen Lohn für die volle Dauer — oder bei Tod bzw. dauerhafter Behinderung für das verbleibende Arbeitsleben. FCM argumentiert, dass in einer Volkswirtschaft mit Arbeitslosigkeit und Arbeitsmarktreserven der größte Teil einer langen Abwesenheit die nationale Produktion nicht tatsächlich senkt, sobald ein Arbeitgeber einen Ersatz eingearbeitet oder Arbeit umverteilt hat; nur die „Friktionsperiode" — die Zeit bis zur Wiederherstellung des früheren Produktionsniveaus — stellt einen realen Verlust dar. FCM liefert daher systematisch niedrigere, konservativere Schätzungen indirekter Kosten als HCA, und die beiden Methoden sind keine austauschbaren Fußnoten: Sie sind verschiedene ökonomische Theorien darüber, was „Produktivitätsverlust" bedeutet. Das ist auch der Grund, warum der [Referenzfall von NICE](../bewertung-von-gesundheitstechnologien/) Produktivitätskosten standardmäßig ausschließt und sie, wenn überhaupt, als separate Sensitivitätsanalyse aus gesellschaftlicher Perspektive berichtet, statt sie in den Referenzfall-ICER einzumischen — siehe [Analyseperspektive](../analyseperspektive/).

## Die Mathematik

```
Humankapitalansatz:
HCA_Kosten = Tageslohn × verlorene_Tage

Friktionskostenmethode (vereinfachte Form, auf die Friktionsperiode gedeckelt):
FCM_Kosten = Tageslohn × min(verlorene_Tage, Friktionsperiode_Tage)

Friktionsperiode_Tage = länder-/branchenspezifische Schätzung der Zeit bis zur
                        Wiederherstellung der Produktion (historisch ~85 Tage
                        in den niederländischen iMTA-Kostenleitlinien; variiert
                        je Land und wird regelmäßig neu geschätzt)
```

Der gesamte Dissens zwischen den Methoden steckt im `min()`: HCA deckelt `verlorene_Tage` nie, sodass die Kosten über die gesamte Abwesenheit weiter wachsen, während FCM die gezählten Tage auf die Friktionsperiode begrenzt, egal wie lang die tatsächliche Abwesenheit dauert.

## Durchgerechnetes Beispiel

Ein Beschäftigter fehlt `verlorene_Tage = 180` Tage und verdient `Tageslohn = 150 £`.

**Humankapitalansatz**:

```
HCA_Kosten = 150 × 180 = 27.000 £
```

**Friktionskostenmethode** mit einer Friktionsperiode von `Friktionsperiode_Tage = 85` (der historische niederländische iMTA-Richtwert, Stand der regelmäßigen Neuschätzung der Leitlinie):

```
FCM_Kosten = 150 × min(180, 85) = 150 × 85 = 12.750 £
```

Die 12.750 £ der FCM sind weniger als die Hälfte der 27.000 £ der HCA für *dieselbe* Abwesenheit — die Wahl der Methode allein verändert einen Krankheitskostenfall erheblich, bevor irgendeine andere Annahme angefasst wird.

## Bezug zur Softwareentwicklung

Das lässt sich direkt darauf übertragen, wie ein Team den Weggang eines Entwicklers bewertet:

- **Fluktuationsbewertung im HCA-Stil**: den Verlust als volles Gehalt des ausgeschiedenen Entwicklers für die gesamte Dauer bewerten, die die Stelle unbesetzt bleibt. Das ist die naive Version der meisten Fluktuationskostenmodelle, und sie überschätzt den Verlust aus demselben Grund, aus dem HCA den Produktivitätsverlust überschätzt — sie nimmt an, die vakante Kapazität sei die ganze Zeit voll produktiv gewesen und nichts anderes habe die Lücke aufgefangen. Siehe [Mitarbeiterbindung](../personalbindung/), die die Kette aus Rekrutierung/Einarbeitung/Vakanzvertretung quantifiziert, in die diese Methode einfließt.
- **Fluktuationsbewertung im FCM-Stil**: den Verlust nur für die tatsächliche Zeit bis zur Nachbesetzung und Einarbeitung eines Ersatzes bewerten — die ingenieurtechnische „Friktionsperiode". Das ist die belastbarere Zahl für einen Business Case, genau wie FCM die konservativere Wahl in einer Krankheitskostenstudie ist.
- Die zugrunde liegende Disziplin ist dieselbe wie bei den [Opportunitätskosten](../opportunitätskosten/): eine verdrängte Ressource danach bewerten, was wirklich verloren geht, nicht nach einer Schlagzeilendauer mal einem Satz.

## Fallstricke

- **HCA und FCM innerhalb einer Analyse mischen oder nur eine berichten, ohne die Wahl offenzulegen.** Dieselben Abwesenheitsdaten können je nach Methode einen Kostenunterschied von 2x und mehr ergeben; die Wahl muss genannt, nicht versteckt werden.
- **HCA für einen Fall aus gesellschaftlicher Perspektive verwenden, ohne ihn als Sensitivitätsanalyse zu kennzeichnen.** Der Referenzfall von NICE schließt Produktivitätskosten ausdrücklich aus; eine HCA-Schätzung aus gesellschaftlicher Perspektive gehört in eine Szenarioanalyse, nicht in den ICER der Überschrift.
- **Eine der beiden Methoden auf unbezahlte oder marktferne Arbeit (z. B. Pflege) ohne Anpassung anwenden.** Beide Methoden nehmen einen Lohnsatz als Wert-Näherung an, der sich auf Arbeit ohne Marktlohn nicht sauber übertragen lässt.

## Quellen

- Koopmanschap MA, Rutten FFH, van Ineveld BM, van Roijen L. „The friction cost method for measuring indirect costs of disease." Journal of Health Economics 1995;14(2):171-89.
- Drummond MF, Sculpher MJ, Claxton K, Stoddart GL, Torrance GW. „Methods for the Economic Evaluation of Health Care Programmes." 4th ed. Oxford University Press — Thema Produktivitätskosten.
- NICE health technology evaluations manual (PMG36) — Referenzfall-Perspektive und optionale Leitlinien zur gesellschaftlichen Perspektive. <https://www.nice.org.uk/process/pmg36>
