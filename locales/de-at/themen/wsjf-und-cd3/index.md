# WSJF und CD3

CD3 (Cost of Delay Divided by Duration) und WSJF (Weighted Shortest Job First) sind Priorisierungsregeln, die Arbeit nach **Wertdichte** planen: wie viel Verzögerungskosten pro Einheit verbrauchter knapper Kapazität beseitigt werden. Bei geteilter, fester Kapazität ist "höchstes CD3 zuerst" die mathematisch optimale Reihenfolge, um die gesamten Verzögerungskosten zu minimieren.

## Warum es wichtig ist

Jedes Backlog ist ein Rationierungsproblem: viele lohnende Punkte, eine Pipeline. Die Gesundheitsökonomie hat dasselbe Problem für Gesundheitsbudgets mit Kosteneffektivitäts-Ranglisten gelöst — Interventionen nach Gesundheitsgewinn pro Pfund ordnen, die Liste hinunter finanzieren, bis das Budget erschöpft ist. CD3 ist dieselbe Logik für Lieferkapazität: Nutzen pro Einheit der *knappen Ressource*, in Rangfolge finanziert. Die Reihenfolge richtig zu bekommen ist kostenloses Geld — dieselbe Arbeit, dieselbe Kapazität, weniger gesamte Verzögerungskosten.

## Die Mathematik

```
CD3  = Verzögerungskosten (£/Woche) / Dauer (Wochen)   — echte Einheiten (Black Swan Farming)

WSJF = (Nutzer-Geschäftswert + Zeitkritikalität + Risikoreduktion/
        Chancenermöglichung) / Aufgabengröße
       — SAFes relativer Skalen-Proxy, modifizierte Fibonacci-Werte
```

CD3 mit echter Währung ([Verzögerungskosten](../verzögerungskosten/)) ist strikt stärker als WSJFs einheitenlose Punkte — WSJF verhält sich zu CD3 wie Multi-Kriterien-Scoring zur vollen [Kosten-Nutzwert-Analyse](../kosten-nutzwert-analyse/): nutzbar, wenn Monetarisierung unpraktisch ist, manipulierbar, wenn die Werte keinen Anker haben.

## Durchgerechnetes Beispiel

Drei Features, ein Team:

```
Feature   CoD (£/Wo.)   Dauer     CD3
A         30.000        10 Wo.    3.000
B         12.000        2 Wo.     6.000
C         5.000         1 Wo.     5.000
```

CD3-Reihenfolge: B, C, A. Vergleich der gesamten Verzögerungskosten mit "größtes CoD zuerst" (A, B, C):

```
CD3-Reihenfolge (B,C,A): A wartet 3 Wo., C wartet 2 → 30.000×3 + 5.000×2 = 100.000 £ Verzögerungskosten
CoD-Reihenfolge (A,B,C): B wartet 10, C wartet 12   → 12.000×10 + 5.000×12 = 180.000 £
```

Dieselben Features, dasselbe Team — die Reihenfolge allein spart 80.000 £. Die Intuition: kleine, dringende Punkte zuerst, weil sie ihre Verzögerungskosten günstig freigeben; der große Punkt verliert wenig durch kurzes Warten.

## Bezug zur Softwareentwicklung

Für Portfolios von Gesundheitssoftware CoD in den Einheiten beziffern, die dieses Repository lehrt: QALYs/Woche × Schwellenwert + operative £/Woche, und das Backlog wird direkt vergleichbar damit, wie das Gesundheitssystem alles andere ordnet, was es kauft. Zwei Praxishinweise: (1) Dauer meint *Kalenderzeit, die die Restriktion belegt*, nicht Aufwand — ein Punkt mit 2 Wochen verstrichener Zeit, der nur 2 Tage des Engpassteams braucht, ist günstiger, als er aussieht (siehe [Optimierung nachgelagerter Ressourcen](../optimierung-nachgelagerter-ressourcen/)); (2) Krankenhäuser wenden dieselbe Regel implizit an, wenn sie OP-Listen nach dringlichkeitsgewichtetem Durchsatz ordnen — klinische Priorisierungskategorien sind schweregradgewichtetes CD3 (siehe [QALY-Defizit und Schweregrad-Modifikatoren](../qaly-defizit-und-schweregrad-modifikatoren/)).

## Fallstricke

- **WSJF-Score-Theater**: einheitenlose Fibonacci-Debatten enden bei dem, der am lautesten argumentiert; mindestens die obersten Backlog-Punkte in echter CoD verankern.
- **Dauer-Manipulation**: Punkte aufteilen, um den CD3-Rang aufzublähen — in Ordnung, wenn Teile unabhängig Wert liefern, Betrug, wenn nicht.
- **Dringlichkeitsprofile ignorieren**: fristenförmige CoD (regulatorische Termine) bricht die Annahme konstanter Rate; diese nach Terminmachbarkeit planen, dann den Rest per CD3.
- **Umranking-Unruhe**: CD3 ist für Reihenfolge-Entscheidungen zum Zeitpunkt der Festlegung, nicht für tägliches Umsortieren laufender Arbeit (siehe [Flow-Metriken](../flow-metriken/) zu WIP).

## Quellen

- Black Swan Farming, CD3 and WSJF. <https://blackswanfarming.com/wsjf-weighted-shortest-job-first/>
- SAFe, WSJF. <https://framework.scaledagile.com/wsjf>
- Reinertsen DG, *The Principles of Product Development Flow*.
