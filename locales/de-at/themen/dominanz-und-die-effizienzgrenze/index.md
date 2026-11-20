# Dominanz und die Effizienzgrenze

Eine Option ist **dominiert**, wenn eine andere Option weniger kostet *und* mehr leistet. Die **Effizienzgrenze** ist das, was übrig bleibt, nachdem dominierte Optionen eliminiert wurden: die Menge der Wahlmöglichkeiten, bei denen mehr zu bekommen bedeutet, mehr zu bezahlen.

## Warum es wichtig ist

Vor jeder Debatte über Schwellenwerte oder Budgets eliminiert Health Technology Assessment zuerst Optionen, die niemand jemals wählen sollte. Alle Optionen auf einer Kosten-Effekt-Ebene einzuzeichnen und die Grenze zu ziehen, ist eine Fünf-Minuten-Übung, die routinemäßig die Hälfte einer Shortlist eliminiert. Inkrementelle Vergleiche ([ICERs](../inkrementelles-kosten-effektivitäts-verhältnis/)) werden dann nur *entlang der Grenze* berechnet, jede Option gegen die nächstgünstigere nicht dominierte — niemals gegen "nichts tun", wenn bessere Zwischenoptionen existieren.

## Die Mathematik

```
Strikte Dominanz:     A dominiert B, wenn Kosten_A ≤ Kosten_B und Effekt_A ≥ Effekt_B
                      (mit mindestens einer strikten Ungleichung)

Erweiterte Dominanz:  B scheidet aus, wenn eine Mischung aus A und C mehr Effekt
                      pro Pfund erzielt — erkennbar daran, dass ICERs sinken, wenn man
                      die Grenze entlang nach oben geht. Gültige Grenz-ICERs müssen steigen.
```

Vorgehen: Optionen nach Effekt sortieren; strikt dominierte entfernen; paarweise ICERs zwischen Nachbarn berechnen; jede Option entfernen, deren ICER den der nächstwirksameren Option übersteigt (erweiterte Dominanz); wiederholen, bis die ICERs monoton steigen.

## Durchgerechnetes Beispiel

Vier Optionen zur Verringerung verpasster Termine (Effekt = zurückgewonnene Termine/Jahr):

```
Option              Kosten/Jahr   Zurückgewonnen
Nichts tun          0 £           0
SMS-Erinnerungen    20.000 £      2.000
Telefonanrufe       120.000 £     2.200
SMS + KI-Triage     90.000 £      3.500
```

Telefonanrufe werden von SMS + KI-Triage **strikt dominiert** (kosten mehr, gewinnen weniger zurück). Grenze: nichts → SMS → SMS + KI.

```
ICER(SMS vs. nichts)      = 20.000 / 2.000  = 10 £ pro zurückgewonnenem Termin
ICER(SMS+KI vs. SMS)      = (90.000 − 20.000) / (3.500 − 2.000) = 46,67 £ pro Termin
```

Steigende ICERs → gültige Grenze. Bei ~160 £ gesparten Kosten pro zurückgewonnenem Krankenhaustermin (siehe [Nichterscheinensrate](../nichterscheinensrate/)) lohnen sich beide Schritte entlang der Grenze; der Telefonzentrale-Vorschlag sollte den Ausschuss nie erreichen.

## Bezug zur Softwareentwicklung

Dasselbe Diagramm lässt sich für jede Tooling-Entscheidung erstellen: Kosten pro Jahr auf der einen Achse, gemessenes Ergebnis (gesparte Stunden, vermiedene Vorfälle, ermöglichte Deployments) auf der anderen. Punkte oben links der Grenze werden eliminiert, bevor überhaupt über das Budget gestritten wird. Das verwandelt die Anbieterauswahl von Debatten über Feature-Checklisten in "Sie sind dominiert; die Sitzung ist beendet." Es legt auch das verbreitete Unternehmensmuster offen, die teuerste Option für einen marginalen Gewinn zu kaufen — nur legitim, wenn der Preis pro inkrementeller Einheit einer ist, den die Organisation wissentlich zahlen würde.

## Fallstricke

- **Alles mit dem Ausgangswert vergleichen** statt mit der nächsten Option auf der Grenze — das schmeichelt teuren Optionen, indem es günstigere, fast gleichwertige Alternativen verbirgt.
- **Eindimensionale Effekt-Scores**, die Wichtiges verbergen; zählen zwei Ergebnisse, entweder vertretbar kombinieren (siehe [Kosten-Nutzwert-Analyse](../kosten-nutzwert-analyse/)) oder zwei Grenzen zeigen.
- **Unsicherheit vergessen**: Optionen nahe der Grenze können unter [Sensitivitätsanalyse](../sensitivitätsanalyse/) die Plätze tauschen.

## Quellen

- York Health Economics Consortium glossary: dominance. <https://yhec.co.uk/glossary/dominance/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
