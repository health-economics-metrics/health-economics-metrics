# Bewertung von Gesundheitstechnologien (HTA)

HTA ist der formale, institutionalisierte Prozess, mit dem Gesundheitssysteme entscheiden, ob eine Technologie — Medikament, Gerät oder Software — es wert ist, bezahlt zu werden. Er verbindet klinische Wirksamkeitsevidenz mit ökonomischer Evaluation nach einer veröffentlichten, verbindlichen Methodik.

## Warum es wichtig ist

Wer an einen nationalen Gesundheitsdienst verkauft, dessen Marktzugang kann eine HTA-Institution buchstäblich entscheiden. Den lokalen Prozess zu kennen heißt, den eigenen wahren Wert-Regulator zu kennen:

- **NICE (England)**: gesetzliche Bewertungen unter einem definierten *Referenzfall* — QALYs aus [EQ-5D](../eq-5d/), NHS+PSS-[Perspektive](../analyseperspektive/), 3,5 % [Diskontierung](../diskontierung-und-zeitpräferenz/), [PSA](../probabilistische-sensitivitätsanalyse/) erforderlich — beurteilt gegen 20.000–30.000 £/QALY mit [Schweregrad-Modifikatoren](../qaly-defizit-und-schweregrad-modifikatoren/); hochspezialisierte Technologien bis über 100.000 £ mit Gewichtung.
- **ICER (USA, nichtstaatlich)**: Evidenzberichte mit einem *Health-Benefit-Price-Benchmark* — dem Preis, bei dem ein Produkt bei 100.000–150.000 $ pro QALY/evLYG kosteneffektiv wäre — als Verhandlungshebel genutzt; plus Budget-Impact-"Erschwinglichkeitsalarme".
- **Kanada (CADTH → CDA-AMC)**: Erstattungsprüfungen bei ≈50.000 CAD$/QALY; historisch wurden in ~95 % der Einreichungen Preissenkungen verlangt.

## Die Mathematik

Die Kraft der HTA liegt nicht in einer Formel, sondern in einer **verbindlichen Methode**: Jede Einreichung berechnet denselben [ICER](../inkrementelles-kosten-effektivitäts-verhältnis/) nach denselben Referenzfall-Regeln, sodass Ergebnisse über Produkte und Jahre hinweg vergleichbar sind. Der Referenzfall legt fest: Ergebnismaß, Nutzwertinstrument, Perspektive, Auswahl der Vergleichsoption, Diskontsatz, Zeithorizont und Unsicherheitsanalyse — und entzieht jedem Freiheitsgrad die Manipulierbarkeit, den ein Sponsor ausnutzen könnte.

## Durchgerechnetes Beispiel

Ein digitales Therapeutikum wird einer Evaluation im NICE-Stil vorgelegt:

```
Modell: ΔK = +450 £/Patient, ΔE = +0,03 QALYs → ICER = 15.000 £/QALY ✓ unter 20.000 £
Referenzfall-Prüfungen:
  Nutzwerte aus EQ-5D-5L mit britischem Wertset                    ✓
  Vergleichsoption = aktueller Versorgungspfad (nicht "keine Behandlung") ✓
  PSA: 71 % Wahrscheinlichkeit, bei 20.000 £ kosteneffektiv zu sein  ✓ (berichtet)
  Schweregrad-Modifikator: Defizit unter den ×1,2-Grenzen             — nicht beansprucht
Empfehlung: reguläre Kommissionierung, mit Sammlung von Real-World-Daten.
```

Die vom Sponsor selbst bevorzugte Analyse zeigte 9.000 £/QALY; der Referenzfall drückte es auf 15.000 £, indem er die ehrliche Vergleichsoption erzwang. Diese Lücke ist *der Grund*, warum Referenzfälle existieren.

## Bezug zur Softwareentwicklung

Das übertragbare Artefakt ist der **interne Referenzfall**: eine verbindliche Methode für alle Tooling-/Plattform-Business-Cases — deklarierte Vergleichsoption, Standard-Einheitskosten (siehe [Nationaler Tarif und Einheitskosten](../nationaler-tarif-und-einheitskosten/) für das Muster), fester Diskontsatz, verpflichtende Sensitivitätsanalyse, Standardvorlage. Ein "AMCP-Dossier für Tools", das einem Plattform-Gremium vorgelegt wird, macht Vorschläge vergleichbar und Manipulation sichtbar — genau wie HTA es für Medizin tut. Kleiner anfangen als NICE es tat: eine zweiseitige Vorlage plus ein veröffentlichtes Preisbuch schlägt gar keinen Standard bei Weitem.

Wie ein mehrzyklisches HTA-Modell tatsächlich Kohorte für Kohorte und Zyklus für Zyklus simuliert wird, siehe [Markov-Kohortensimulation](../markov-kohortensimulation/).

## Fallstricke

- **HTA als Formalität nach der regulatorischen Zulassung behandeln** — CE-/UKCA-/FDA-Zulassung sagt, ein Produkt sei sicher; HTA entscheidet, ob es *den Kauf wert ist*. Andere Hürde, andere Evidenz.
- **Das ökonomische Modell nach der Studie bauen** — die Evidenzerzeugung sollte rückwärts von den Anforderungen des Referenzfalls konzipiert werden.
- **Unterschiede zwischen Rechtsordnungen ignorieren**: ein in den USA bei 120.000 $/QALY finanzierbarer ICER scheitert bei NICE mit 30.000 £; Evidenz und Preisgestaltung pro Markt planen.

## Quellen

- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- ICER 2023 Value Assessment Framework. <https://icer.org/our-approach/methods-process/value-assessment-framework/>
- Canada's Drug Agency (CDA-AMC). <https://www.cda-amc.ca/>
