# Kosten-Konsequenzen-Analyse (CCA)

Die CCA stellt Kosten neben eine **disaggregierte Tabelle aller Ergebnisse** — klinisch, operativ, erfahrungsbezogen — ohne sie zu einem einzigen Verhältnis oder Score zu verdichten. Der Entscheider wägt die Kompromisse explizit ab.

## Warum es wichtig ist

Die CCA ist NICEs **bevorzugtes ökonomisches Format für die meisten Digital-Health-Technologien** im Evidence Standards Framework. Digitale Produkte erzeugen heterogene Effekte (gesparte Zeit, Zufriedenheit, weniger Nichterscheinen, kleine klinische Gewinne), die sich einer ehrlichen Verdichtung in eine einzige QALY-Zahl widersetzen. Statt einen fragilen Verbund zu erzwingen, zeigt die CCA das vollständige Kontenbuch. Für die meisten Software-Business-Cases ist sie sowohl das ehrlichste als auch das überzeugendste Format, weil jeder Stakeholder seine eigene entscheidungsrelevante Zeile findet.

## Die Mathematik

Es gibt bewusst keine Aggregationsformel. Das Ergebnis ist eine Tabelle:

```
                          Intervention   Vergleichsoption   Differenz
Kosten (jährlich)         X £            Y £                ΔK
Ergebnis 1 (natürl. Einh.) …             …                  Δ1
Ergebnis 2                …              …                  Δ2
Qualitative Ergebnisse     beschrieben, nicht bewertet
```

Jede Zeile behält ihre eigenen Einheiten. Regeln: jede Konsequenz vorab festgelegt (kein Rosinenpicken nach den Ergebnissen); dieselbe [Perspektive](../analyseperspektive/) und derselbe [Horizont](../zeithorizont/) durchgehend; Unsicherheit pro Zeile.

## Durchgerechnetes Beispiel

Digitale präoperative Beurteilungsplattform gegenüber telefonbasiertem Prozess, pro Jahr, ein Trust:

```
                                 Digital      Telefon    Differenz
Betriebskosten                   180.000 £    95.000 £   +85.000 £
Pflegestunden für Beurteilungen  6.200        11.800     −5.600 Std.
Kurzfristige OP-Absagen          92           174        −82
Patientenzufriedenheit (CSAT)    4,5/5        3,9/5      +0,6
Verlorene/unvollständige         1,2 %        4,8 %      −3,6 Pp
Beurteilungen
```

Kein einzelner Score — aber die Entscheidung lässt sich leicht nachvollziehen: 85.000 £ kaufen 5.600 Pflegestunden (≈ 15 £/Stunde, weit unter jeden Personalkosten), 82 vermiedene Absagen (jede verschwendet einen OP-Slot im Wert von ~1.200 £) und bessere Erfahrung. Ein Ausschuss sieht auch genau, was er *nicht* bekommt: keinen behaupteten QALY- oder Mortalitätseffekt.

## Bezug zur Softwareentwicklung

Die CCA ist die formale Version der Balanced Scorecard, die ein guter Plattformvorschlag bereits verwendet: Kosten neben DORA-Metriken, DevEx-Scores, Vorfallzahlen — unaggregiert. Die gesundheitsökonomische Disziplin, die hinzukommt: **die Zeilen vorab festlegen** (vor dem Piloten entscheiden, was zählt, damit man nicht heimlich die Kennzahl fallen lässt, die schlechter geworden ist), und **ungünstige Zeilen zeigen** — eine CCA nur mit guten Nachrichten ist Marketing. Die CCA verwenden, wenn kein vertretbarer Verbund existiert, was bei Entwicklungswerkzeugen fast immer der Fall ist.

## Fallstricke

- **Rosinengepickte Konsequenzen** — die Integrität des Formats hängt von der Vorabfestlegung ab.
- **Eingeschmuggelte Aggregation**: Farbcodierung oder "Gesamt-Scores" führen die willkürlichen Gewichte wieder ein, die die CCA gerade vermeiden soll.
- **Entscheidungslähmung**: Die CCA braucht einen Entscheider, der bereit ist, Kompromisse abzuwägen; sie mit einer Empfehlung und deren Begründung kombinieren.

## Quellen

- NICE Evidence Standards Framework for digital health technologies (ECD7). <https://www.nice.org.uk/corporate/ecd7>
- ESF evidence standards tables. <https://www.nice.org.uk/corporate/ecd7/chapter/section-c-evidence-standards-tables>
