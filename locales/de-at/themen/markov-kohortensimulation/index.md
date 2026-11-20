# Markov-Kohortensimulation

Ein Markov-Kohortenmodell ist die HTA-Standardmodellierungstechnik für Interventionen, deren Wirkungen sich über mehrere Zeitabschnitte (Zyklen) entfalten statt auf einen Schlag. Eine hypothetische Kohorte beginnt vollständig in einem Gesundheitszustand, und in jedem Zyklus verschiebt ein fester Satz von Übergangswahrscheinlichkeiten Anteile der Kohorte zwischen den Zuständen; Kosten und QALYs fallen in jedem Zyklus im Verhältnis dazu an, wie viel der Kohorte jeden Zustand besetzt, und werden auf den Barwert abgezinst. Jeder Softwareentwickler, der einen mehrjährigen digitalen Gesundheits-Business-Case modelliert — in dem Nutzer oder Patienten im Zeitverlauf zwischen Zuständen wie „engagiert", „abgesprungen" oder „verloren" wechseln —, baut dieselbe Struktur.

## Warum es wichtig ist

Die meisten realen Gesundheitstechnologie-Entscheidungen sind keine einmaligen Vergleiche von Kosten und Ergebnis eines einzelnen Zeitraums. Eine chronische Erkrankung schreitet voran, rezidiviert, spricht auf Behandlung an oder führt über Jahre zum Tod — und eine [Kosten-Effektivitäts-Analyse](../kosten-effektivitäts-analyse/) für einen einzelnen Zeitraum kann das nicht abbilden. Einreichungen bei NICE, ICER und CADTH für Interventionen bei chronischen Erkrankungen, bewertet über [Bewertung von Gesundheitstechnologien](../bewertung-von-gesundheitstechnologien/), sind fast immer als Markov-Kohortenmodelle mit lebenslangem Zeithorizont gebaut, weil die Alternative — jeden möglichen individuellen Patientenverlauf zu modellieren — im großen Maßstab nicht beherrschbar ist. Das Markov-Kohortenmodell tauscht etwas Realismus auf Individualebene (es kann die Erinnerung an frühere Zustände kaum darstellen, daher „Markov": die Zukunft hängt nur vom aktuellen Zustand ab) gegen ein Modell, das transparent, prüfbar und schnell genug ist, um in einer [probabilistischen Sensitivitätsanalyse](../probabilistische-sensitivitätsanalyse/) tausende Male zu laufen.

## Die Mathematik

```
Kohorten-Update eines Zyklus (Zeilenvektor × Übergangsmatrix):
  neuer_Zustand[j] = Summe_i Zustand[i] * Übergangsmatrix[i][j]

Kosten eines Zyklus:
  Zykluskosten = Summe_s Zustand[s] * Kosten_pro_Zyklus[s]

QALYs eines Zyklus:
  Zyklus_QALYs = Summe_s Zustand[s] * Nutzwert[s] * Zykluslänge_Jahre

Vollständige Simulation über `Zyklen` Zyklen, abgezinst mit `Diskontsatz`:
  gesamte_abgezinste_Kosten = Summe_{t=0}^{Zyklen-1} Zykluskosten(Zustand_t)  / (1 + Diskontsatz)^t
  gesamte_abgezinste_QALYs  = Summe_{t=0}^{Zyklen-1} Zyklus_QALYs(Zustand_t) / (1 + Diskontsatz)^t
  mit Zustand_0 = Anfangsverteilung, Zustand_{t+1} = Kohorte_fortschreiben(Zustand_t, Übergangsmatrix)
```

Das Abzinsen jedes Zyklus auf den Barwert verwendet genau die Formel aus [Diskontierung und Zeitpräferenz](../diskontierung-und-zeitpräferenz/), nur zyklusweise statt jahresweise angewandt.

## Durchgerechnetes Beispiel

**Klinisch**: ein Modell mit 2 Zuständen — `Gesund` und `Tot` —, in dem 10 % der Kohorte pro Zyklus sterben und `Tot` absorbierend ist (seine Selbstübergangswahrscheinlichkeit ist 1,0; fehlte diese Schleife, würde die Kohortenmasse nach einem Zyklus in `Tot` verschwinden). Die Kohorte beginnt vollständig `Gesund`, kostet 1.000 £ pro Zyklus im Zustand `Gesund` (0 £ im Zustand `Tot`) und gewinnt 0,8 QALYs pro Jahr im Zustand `Gesund`. Simuliert über 3 jährliche Zyklen mit dem NICE-Diskontsatz von 3,5 %:

```
Zyklus 0: Zustand = [1,00, 0,00] (100 % Gesund)
  Kosten = 1.000,00 £, QALYs = 0,800, Diskontfaktor = 1,000000
  abgezinst: Kosten = 1.000,00 £, QALYs = 0,8000

Zyklus 1: Zustand = [0,90, 0,10] (90 % Gesund, 10 % Tot)
  Kosten = 900,00 £, QALYs = 0,720, Diskontfaktor = 0,966184
  abgezinst: Kosten = 869,57 £, QALYs = 0,6957

Zyklus 2: Zustand = [0,81, 0,19] (81 % Gesund, 19 % Tot)
  Kosten = 810,00 £, QALYs = 0,648, Diskontfaktor = 0,933511
  abgezinst: Kosten = 756,14 £, QALYs = 0,6049

Gesamte abgezinste Kosten ≈ 2.625,71 £
Gesamte abgezinste QALYs  ≈ 2,1006
```

Der Zustand jedes Zyklus ist der durch die Übergangsmatrix geführte Zustand des vorigen Zyklus — 90 % der 90 %, die in Zyklus 1 noch `Gesund` sind, bleiben in Zyklus 2 `Gesund` (0,9 × 0,9 = 0,81), während die übrigen 19 % inzwischen gestorben sind (0,9 × 0,1 + 0,1 × 1,0 = 0,19). Man beachte, dass die Kohorte `Gesund` nie vollständig verlässt: Bei konstanter Sterblichkeit von 10 % pro Zyklus und ohne Wiedereintritt schrumpft der Anteil `Gesund` geometrisch, statt bei irgendeiner endlichen Zyklenzahl null zu erreichen.

## Bezug zur Softwareentwicklung

Wie ein mehrzyklisches HTA-Modell in einer realen Bewertung eingesetzt wird, steht unter [Bewertung von Gesundheitstechnologien](../bewertung-von-gesundheitstechnologien/) — der Referenzfall, der regelt, welchen Diskontsatz, welche Nutzwertquelle und welchen Zeithorizont ein eingereichtes Markov-Modell verwenden muss.

Ein Markov-Kohortenmodell ist strukturell ein Zustandsautomat mit probabilistischen Übergängen, der für eine feste Zahl von Takten läuft und den Wert jedes Taktes abzinst. Dieselbe Form simuliert Retention-/Zustandsübergänge einer Nutzerkohorte im Zeitverlauf — siehe [DORA-Metriken](../dora-metriken/) für die Betriebszuverlässigkeits-Version von „welcher Anteil des Systems ist in dieser Periode in einem degradierten Zustand, und was kostet das". Konkret:

- **Retention-/Churn-Modellierung** ist ein Markov-Kohortenmodell mit Zuständen wie „aktiv", „gefährdet", „abgewandert": Eine feste monatliche Übergangsmatrix, über 12 oder 24 Monatszyklen gerechnet, liefert die erwartete Zahl aktiver Nutzer (und den Umsatz) in jedem künftigen Monat, genauso wie `Gesund`/`Tot` die erwarteten Überlebenden liefert.
- **Zuverlässigkeits- und Störfallökonomie**: Die Zustände eines Systems (gesund, degradiert, ausgefallen) lassen sich genauso modellieren, mit „Kosten pro Zyklus" für den Ausfallschaden, der anfällt, solange das System die Zustände degradiert/ausgefallen besetzt — das macht aus einem Argument über Störfallhäufigkeit ein Argument über abgezinste Kosten, vergleichbar mit den Kosten der Zuverlässigkeitsarbeit, die die Übergangswahrscheinlichkeiten verändern würde.
- **Absorbierende Zustände als Endzustände**: `Tot` in einem klinischen Modell ist genau ein „gekündigtes Abonnement" oder „dauerhaft offline" in einem Softwaremodell — beide brauchen eine explizite Selbstübergangswahrscheinlichkeit von 1,0, sonst verliert die Simulation stillschweigend Masse.

## Fallstricke

- **Übergangswahrscheinlichkeiten, die pro Zeile nicht 1 ergeben.** Eine Zeile, deren Summe über oder unter 1 liegt, lässt die Kohorte in jedem Zyklus stillschweigend Masse „verlieren" oder „gewinnen" — Zeilensummen immer prüfen, bevor man der Ausgabe eines Modells traut, denn die Modellstruktur selbst meldet den Fehler nicht.
- **Zykluslänge zu grob für die tatsächliche Krankheitsdynamik.** Ein Jahreszyklus bei einer Erkrankung, die ihren Zustand binnen Wochen deutlich ändert, unterschätzt Übergänge, die mitten im Zyklus stattfinden; eine Zykluslänge wählen, die kurz ist im Verhältnis zur Geschwindigkeit des modellierten Prozesses.
- **Die Selbstschleife eines absorbierenden Zustands vergessen.** Ein absorbierender Zustand (Tod, dauerhafter Abbruch) braucht eine Selbstübergangswahrscheinlichkeit von genau 1,0. Fehlt sie, verdunstet die Kohortenmasse in diesem Zustand nach einem einzigen Zyklus und unterschätzt kumulative Kosten oder QALY-Verluste.
- **Das Modell für validiert halten, weil es läuft.** Ein Markov-Kohortenmodell mit plausibel aussehenden Übergangswahrscheinlichkeiten kann trotzdem strukturell falsch sein (fehlende Zustände, falsches Absorptionsverhalten); vor dem Vertrauen in die Ausgabe gegen bekannte epidemiologische Richtwerte validieren (z. B. ob das modellierte 5-Jahres-Überleben mit veröffentlichten Überlebenskurven übereinstimmt).

## Quellen

- Sonnenberg FA, Beck JR. „Markov models in medical decision making: a practical guide." Medical Decision Making. 1993;13(4):322-38. <https://pubmed.ncbi.nlm.nih.gov/8246705/>
- Briggs A, Sculpher M. „An introduction to Markov modelling for economic evaluation." PharmacoEconomics. 1998;13(4):397-409. <https://pubmed.ncbi.nlm.nih.gov/10178664/>
