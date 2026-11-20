# Frühintervention

Wenn gesparte Kapazität einem Behandler erlaubt, Diagnostik-Rückstände früher durchzusehen, wechseln Patienten schneller von der Warteliste zur aktiven Behandlung — und früher zu behandeln ist meist günstiger und besser als später zu behandeln, weil unbehandelte Erkrankungen fortschreiten.

## Warum es wichtig ist

Krankheitsprogression ist der Zinseszins der Gesundheitsversorgung. Ein Patient, der mit einer unbehandelten Erkrankung wartet, befindet sich nicht in einem stationären Zustand: Krebserkrankungen wechseln das Stadium, Herzinsuffizienz dekompensiert, leichte Depression wird schwer. Früher zu intervenieren liefert daher eine doppelte Dividende — **bessere Ergebnisse** (mehr QALYs, behandelt von einer gesünderen Ausgangslage) und oft **niedrigere Behandlungskosten** (Behandlung im Frühstadium ist weniger intensiv als Rettung im Spätstadium). Dieser Mechanismus hebt "schnellere Pfade" von einer operativen Annehmlichkeit zu einem klinischen und ökonomischen Imperativ — und ist der tiefe Grund, warum [Verzögerungskosten](../verzögerungskosten/) für klinische Software gelten.

## Die Mathematik

```
Wert der Frühintervention (pro Patient) =
    [Kosten_spät − Kosten_früh]                     (Behandlungskostenausgleich)
  + [QALYs_früh − QALYs_spät] × λ                    (Gesundheitsgewinn × Schwellenwert)
  × P(Progression während der Verzögerung)            (Wahrscheinlichkeitsgewichtung)
```

Die Wahrscheinlichkeitsgewichtung ist wesentlich: nicht jeder wartende Patient schreitet fort. Die Übergangswahrscheinlichkeit pro Zeiteinheit modellieren (aus Daten zum natürlichen Verlauf), nicht den schlimmsten Fall. Dann diskontieren: Jahre entfernt vermiedene Kosten sind heute weniger wert ([Diskontierung](../diskontierung-und-zeitpräferenz/)) — und zu beachten: die meiste Frühintervention ist kosten*effektiv*, nicht kosten*sparend* (siehe [Präventionsökonomie](../präventionsökonomie/)).

## Durchgerechnetes Beispiel

Rückstand beim Screening auf diabetische Retinopathie: 4.000 Patienten, 6 Monate im Rückstand. KI-gestützte Befundung verdreifacht den Durchsatz und räumt die Warteschlange in 8 Wochen ab. Natürlicher Verlauf: ~2 % der wartenden Patienten/Jahr schreiten unbefundet zu sehbedrohenden Stadien fort.

```
Vermiedene Progressionsereignisse durch ~4 Monate Beschleunigung:
  4.000 × 2 % × (4/12) ≈ 27 Patienten

Pro vermiedener Progression:
  Behandlungsausgleich (intravitreale Therapie vs. Laser) ≈ 4.000 £
  QALY-Gewinn (erhaltenes Sehvermögen) ≈ 0,8 QALYs × 20.000 £ = 16.000 £

Wert ≈ 27 × (4.000 + 16.000) ≈ 540.000 £ — aus einem einmal abgebauten
Rückstand, noch bevor der dauerhafte Durchsatzgewinn gezählt wird.
```

## Bezug zur Softwareentwicklung

Zwei Übertragungen. Erstens die naheliegende: Software, die Diagnostik- und Behandlungspfade beschleunigt (Triage, KI-Befundung, Ergebnis-Routing), monetarisiert genau über dieses Modell — und das Modell sagt, welcher Pfad beschleunigt werden sollte: der mit der steilsten Progressionskurve, nicht der längsten Warteschlange. Zweitens der Entwicklungs-Spiegel: **Fehler schreiten auch fort**. Ein im Design gefangener Bug kostet ein Gespräch; in Produktion kostet er einen Vorfall; die "Shift-Left"-Kostenkurve (10–100-fach je nach Phase) ist ein Progressionsmodell, und die ehrliche Version trägt denselben Vorbehalt — frühe Erkennung ist meist kosteneffektiv, kein kostenloses Geld, weil Reviews und Tests echte Kosten haben und die meisten gefangenen Probleme nie fortgeschritten wären.

## Fallstricke

- **Worst-Case-Progression für alle angenommen** — die Wahrscheinlichkeitsgewichtung ist der Unterschied zwischen Analyse und Interessenvertretung.
- **Vorlaufzeit-Bias**: Eine Krankheit früher zu finden, ohne die Ergebnisse zu ändern, sieht wie Nutzen aus, ist es aber nicht; die Behauptung ist frühere *wirksame Intervention*, nicht frühere Erkennung allein (siehe [Screening-Ökonomie](../screening-ökonomie/)).
- **Doppelzählung** mit Wartelisten- und RTT-Behauptungen, die auf derselben Beschleunigung aufbauen — eine Pfadverbesserung, ein Satz Nutzen, einmal zugeordnet.

## Quellen

- Cohen JT, Neumann PJ, Weinstein MC. "Does preventive care save money?" NEJM 2008. <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
- NHS England, diabetic eye screening programme. <https://www.gov.uk/topic/population-screening-programmes/diabetic-eye>
