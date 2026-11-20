# Flow-Metriken

Flow-Metriken messen, wie sich Arbeit durch ein Liefersystem bewegt: Zykluszeit, Lead-Time, Durchsatz, Work in Progress (WIP) und Flow-Effizienz. Sie werden von Little's Law regiert — derselben Warteschlangenmathematik, die Krankenhausbetten und Wartelisten regiert.

## Warum es wichtig ist

Die meiste Lieferzeit ist keine Arbeit — es ist Warten. Flow-Effizienz-Studien zu Wissensarbeit finden regelmäßig, dass an Punkten nur **5–15 %** ihrer verstrichenen Zeit aktiv gearbeitet wird; der Rest sind Warteschlangen. Das heißt, die günstigste Beschleunigung ist Warteschlangenabbau, nicht Einstellung — genau die Erkenntnis, die Krankenhaus-Patientenfluss-Programme über Betten gewonnen haben. Für alles mit [Verzögerungskosten](../verzögerungskosten/) verorten Flow-Metriken, wo die Verzögerungskosten entstehen.

## Die Mathematik

```
Zykluszeit      = t(fertig) − t(begonnen)
Lead-Time       = t(ausgeliefert) − t(angefordert)     (enthält Vorarbeit-Warteschlange)
Durchsatz       = abgeschlossene Punkte / Zeitraum
WIP             = begonnene, aber unfertige Punkte
Flow-Effizienz  = aktive Zeit / (aktive Zeit + Wartezeit) × 100

Little's Law:  durchschnittliches WIP = Durchsatz × durchschnittliche Zykluszeit
               (gleichwertig: Zykluszeit = WIP / Durchsatz)
```

Little's Law ist der Hebel: Bei festem Durchsatz senkt eine Kürzung des WIP die Zykluszeit proportional. Es regiert auch Krankenhäuser: `belegte Betten = Aufnahmen/Tag × Verweildauer`.

## Durchgerechnetes Beispiel

Ein Team hat 40 Punkte in Arbeit und schließt 10/Woche ab: Zykluszeit = 40/10 = 4 Wochen. Es führt WIP-Grenzen ein und senkt WIP auf 15: Zykluszeit = 15/10 = **1,5 Wochen** — gleiche Leute, gleicher Durchsatz, 62 % schnellere Auslieferung, rein aus Warteschlangendisziplin.

Bepreist mit CoD: Betragen die Verzögerungskosten im Schnitt 3.000 £/Woche pro Punkt, verbringt jeder Punkt nun 2,5 Wochen weniger in der Warteschlange: 10 Punkte/Woche × 2,5 × 3.000 = **75.000 £/Woche eliminierte Verzögerungskosten** — aus einer Richtlinienänderung, die nichts kostet.

Krankenhaus-Spiegel: 40 Aufnahmen/Tag × 6,0 Tage Verweildauer = 240 Betten; das nichtklinische Warten innerhalb der Verweildauer auf 5,6 Tage kürzen, und 16 Betten werden frei ([Verweildauer](../verweildauer/)) — dasselbe Gesetz, derselbe Hebel.

## Bezug zur Softwareentwicklung

Flow-Metriken sind die gemeinsame Sprache zwischen Delivery Engineering und Gesundheitsbetrieb:

- **PR-Teilphasen-Benchmarks** (LinearB, ~8 Mio. PRs): Elite-Abholzeit < 7 Std., Review < 6 Std., Gesamtzyklus < ~26 Std. — Abholzeit ist reine Warteschlange, das Erste, das anzugehen ist.
- **[Wartelisten](../auswirkung-von-wartelisten/)** sind Rückstände; **[RTT](../überweisung-zur-behandlung/)** ist Lead-Time; **[Bettenbelegung](../eingesparte-bettentage/)** ist WIP. Verbesserung überträgt sich in beide Richtungen: WIP-Grenzen ↔ Glättung der Aufnahme; Wartezeit-Instrumentierung ↔ Verfolgung der Pfadphase.
- Flow-Effizienz unter 15 % ist in beiden Bereichen normal, und beide verbergen es, weil *Menschen* beschäftigt sind, während *Arbeit* wartet — die Uhr der Arbeit messen, nicht die der Arbeitenden.

## Fallstricke

- **Auslastungs-Verehrung**: Arbeiterauslastung Richtung 100 % zu treiben lässt Wartezeiten nichtlinear explodieren (M/M/1: Wartezeit ∝ ρ/(1−ρ)) — der Grund, warum zu 95 % ausgelastete Krankenhäuser blockieren und zu 95 % verplante Teams stocken.
- **Durchschnitte über schiefe Verteilungen**: Zykluszeiten sind schwer rechtsschief; mit Perzentilen (p85) prognostizieren, nicht mit Mittelwerten.
- **WIP kürzen, indem Arbeit vorgelagert abgelehnt wird**, und das Flussverbesserung nennen — die Nachfrage ist nicht verschwunden, sie hat sich außerhalb der Messgrenze aufgestaut (die Krankenhausversion: Krankenwagen, die außerhalb der Notaufnahme warten).

## Quellen

- Little's Law and flow metrics overviews. <https://agility-at-scale.com/safe/lpm/flow-metrics/> ; <https://getdx.com/blog/flow-metrics/>
- LinearB engineering benchmarks. <https://linearb.io/resources/engineering-benchmarks>
- Reinertsen DG, *The Principles of Product Development Flow*.
