# Zeithorizont

Der Zeithorizont ist der Zeitraum, über den eine Analyse Kosten und Effekte zählt. Er muss lang genug sein, um alle bedeutsamen Unterschiede zwischen den verglichenen Optionen zu erfassen.

## Warum es wichtig ist

Ein zu kurzer Horizont übersieht späten Nutzen (Prävention) und späte Kosten (Instandhaltung). Ein zu langer Horizont ertränkt alles in Unsicherheit. Health Technology Assessment verwendet für Behandlungen mit Mortalitätseffekten oft einen **lebenslangen** Horizont; die [Budget-Impact-Analyse](../budget-impact-analyse/) verwendet bewusst einen kurzen Horizont von **1–5 Jahren**, weil ihre Frage die Erschwinglichkeit ist, nicht der Wert. Der Horizont ist eine deklarierte Modellierungsentscheidung, und unpassend gewählte Horizonte sind ein klassischer Weg, einen Vergleich zu manipulieren.

## Die Mathematik

Der Horizont ist die obere Grenze der Summation in jeder Evaluation:

```
Nettobarwert = Σ (t = 0 … T) [ (Nutzen_t − Kosten_t) / (1 + r)^t ]

T = Zeithorizont (Jahre)
r = Diskontsatz (siehe discounting-and-time-preference.md)
```

Ergebnisse sollten stets mit angegebenem Horizont berichtet werden, idealerweise für mehrere Horizonte zugleich.

## Durchgerechnetes Beispiel

Ein elektronisches Verordnungssystem kostet 2 Millionen £ in der Einführung und 200.000 £/Jahr im Betrieb. Es verhindert Medikationsfehler im Wert von 600.000 £/Jahr (Behandlungskosten des vermiedenen Schadens).

Nettonutzen nach Horizont (undiskontiert, zur Verdeutlichung):

```
Horizont 1 Jahr:   −2.000.000 − 200.000 + 600.000  = −1.600.000 £
Horizont 3 Jahre:  −2.000.000 + 3 × 400.000         = −800.000 £
Horizont 5 Jahre:  −2.000.000 + 5 × 400.000         =  0 £
Horizont 10 Jahre: −2.000.000 + 10 × 400.000        = +2.000.000 £
```

Das System "scheitert" bei jedem Horizont unter 5 Jahren und "gelingt" bei 10. Keines von beidem ist die wahre Antwort; der ehrliche Bericht nennt den Break-even-Punkt und begründet den Horizont mit der Systemlebensdauer (wie lange bis zur Ablösung?).

## Bezug zur Softwareentwicklung

- **Tool-Bewertungen über einen einzigen Sprint** übersehen systematisch die Lernkurven-Delle (Kosten vorgezogen) und die langfristige Wartung (Kosten nachgelagert). Pilotprojekte mit KI-Coding-Assistenten, die in Woche 2 gemessen werden, erfassen den Neuheitshöhepunkt, nicht den stationären Zustand.
- **Vertragslaufzeit ≠ Nutzenhorizont.** Ein einjähriger SaaS-Vertrag kann trotzdem über 5 Jahre bewertet werden, wenn eine Verlängerung realistisch zu erwarten ist — das muss dann aber so benannt werden.
- **Fälle der Legacy-Ablösung** sollten bis zum glaubwürdigen Lebensende des Altsystems laufen, nicht bis zu einer beliebigen runden Zahl.

## Fallstricke

- **Horizont-Shopping**: den Horizont wählen, bei dem die eigene Option gewinnt. Den Horizont vor der Berechnung der Ergebnisse festlegen.
- **Unterschiedliche Horizonte für unterschiedliche Optionen** im selben Vergleich.
- **Lebenslange Horizonte ohne Diskontierung oder Unsicherheitsanalyse** — Nutzen in Jahr 30 zum Nennwert ist Fiktion. Lange Horizonte mit [Sensitivitätsanalyse](../sensitivitätsanalyse/) kombinieren.

## Quellen

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Sullivan SD, et al. "Budget Impact Analysis — Principles of Good Practice: Report of the ISPOR 2012 Budget Impact Analysis Good Practice II Task Force." Value in Health 2014;17(1):5–14. <https://pubmed.ncbi.nlm.nih.gov/24438712/>
