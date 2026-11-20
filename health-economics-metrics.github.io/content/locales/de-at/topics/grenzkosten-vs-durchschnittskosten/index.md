# Grenzkosten vs. Durchschnittskosten

Durchschnittskosten sind die Gesamtkosten geteilt durch die produzierten Einheiten. Grenzkosten sind die Kosten der Produktion einer *zusätzlichen* Einheit. Entscheidungen sollten auf Grenzkosten beruhen — doch veröffentlichte Einheitskosten sind fast immer Durchschnittswerte.

## Warum es wichtig ist

Der mit Abstand häufigste Fehler in Business Cases der digitalen Gesundheit ist, eine eingesparte Ressource zu ihren **Durchschnitts**kosten zu bewerten, während die tatsächliche Einsparung den **Grenz**kosten entspricht. Ein Krankenhausbettentag hat Durchschnittskosten (voll umgelegt) von über 400 £, aber das Freimachen eines Bettentags spart nicht 400 £ — Gebäude, Heizung und die meisten Personalkosten laufen weiter. Die tatsächlich freiwerdenden Barmittel liegen bei 50–150 £, sofern nicht genug Betten freigemacht werden, um eine Station zu schließen.

## Die Mathematik

```
Durchschnittskosten: AC = TC / Q
Grenzkosten:         MC = dTC/dQ   (Kosten einer Einheit mehr/weniger)

TC = Gesamtkosten, Q = Menge
```

Fixkosten führen bei Kapazitätsabbau zu MC < AC, und MC kann sich bei vorhandener freier Kapazität null annähern. Einsparbehauptungen sollten verwenden:

```
Wahre Einsparung = ΔQ × MC             (kleine Änderungen)
Wahre Einsparung = Sprung in TC        (große Änderungen, die eine Kapazitätsschwelle überschreiten, z. B. Schließung einer Station)
```

## Durchgerechnetes Beispiel

Ihre Software verkürzt die durchschnittliche Verweildauer und macht in einem Trust 1.000 Bettentage/Jahr frei.

- **Naive Behauptung**: 1.000 × 400 £ Durchschnittskosten = **400.000 £ gespart**. Falsch.
- **Grenzkosten-Behauptung**: variable Kosten pro Bettentag (Verpflegung, Wäsche, Verbrauchsmaterial, etwas Pflegeflexibilität) ≈ 120 £. Einsparung = 1.000 × 120 £ = **120.000 £**, *zuzüglich* des Werts der freigemachten Kapazität, wenn Betten mit wartenden elektiven Patienten neu belegt werden (Einnahmen bei leistungsbezogener Vergütung oder Abbau der Warteliste).
- **Sprung-Behauptung**: Macht der Trust 7.300 Bettentage/Jahr frei (eine Station mit 20 Betten), kann er die Station tatsächlich schließen: Personal- und Betriebskosten ≈ 1,5 Millionen £/Jahr an echtem Bargeld. Jetzt kommt die Durchschnittskostenrechnung der Wahrheit näher.

Dieselbe Intervention, drei vertretbare Zahlen, je nachdem, ob die Änderung eine Kapazitätsstufe überschreitet.

## Bezug zur Softwareentwicklung

Cloud-Ökonomie ist ureigenes Grenzkosten-Terrain:

- Die Grenzkosten eines weiteren CI-Laufs auf bereits reservierter Kapazität liegen bei ≈ 0 £, während die Durchschnittskosten pro Lauf (Gesamtausgaben der Plattform ÷ Läufe) mehrere Pfund betragen können. Verrechnungssysteme, die Durchschnittskosten abrechnen, verleiten Teams dazu, gemeinsame Kapazität zu wenig zu nutzen, die am Rand eigentlich kostenlos ist.
- Umgekehrt setzt "wir haben 30 % der Rechenleistung gespart" nur dann Bargeld frei, wenn Instanzen tatsächlich beendet oder Reservierungen reduziert werden — die Software-Version der Bettentag-Falle. Siehe [zahlungswirksame vs. nicht zahlungswirksame Einsparungen](../zahlungswirksame-vs-nicht-zahlungswirksame-einsparungen/).

## Fallstricke

- **Kapazität zu Durchschnittskosten bewerten** und als Bargeld darstellen (der Klassiker).
- **Annahme, Grenzkosten seien konstant.** Sie springen an Kapazitätsgrenzen (Stationsschließungen, Lizenzstufen, Verpflichtungen für reservierte Instanzen).
- **Grenzkosten für Ausweitungsentscheidungen, aber Durchschnittskosten für Rückbau** im selben Fall verwenden — die Wahl muss zur tatsächlichen Entscheidung passen.

## Quellen

- York Health Economics Consortium glossary: marginal cost. <https://yhec.co.uk/glossary/marginal-cost/>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
