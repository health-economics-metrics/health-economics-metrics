# Vermiedene nachgelagerte Kosten

Vermiedene nachgelagerte Kosten (Kostenausgleiche) sind künftige Behandlungsausgaben, die durch früheres oder besseres Handeln verhindert werden, gegengerechnet mit den eigenen Kosten der Intervention. Ausgleiche sind der Mechanismus, durch den eine Intervention *dominant* werden kann — günstiger **und** besser —, und sie sind zugleich die am meisten doppelt gezählte, überbehauptete Zeile in der Gesundheitsökonomie.

## Warum es wichtig ist

Fast jedes Wertversprechen der digitalen Gesundheit enthält eine Ausgleichsbehauptung: "unsere App verhindert Einweisungen", "unsere Alarme verhindern Verschlechterung", "unsere Plattform vermeidet doppelte Tests". Sind Ausgleiche echt, verändern sie die Ökonomie grundlegend (siehe das durchgerechnete [ICER](../inkrementelles-kosten-effektivitäts-verhältnis/)-Beispiel, wo ein Ausgleich von 600.000 £ den Fall entscheidet). Kostenträger wissen das — Ausgleichsbehauptungen ziehen daher die schärfste Prüfung in jeder Bewertung auf sich. Die folgenden Glaubwürdigkeitsregeln trennen ein finanzierbares Modell von Marketing.

## Die Mathematik

```
Nettokosten = Interventionskosten − Σ Ausgleiche

Ein gültiger Ausgleich muss sein:
  zurechenbar        — kausal mit der Intervention verknüpft (Vergleichsevidenz)
  marginal           — das Geld wird tatsächlich nicht mehr ausgegeben, zu
                       Grenz- nicht Durchschnittskosten (siehe
                       marginal-vs-average-cost.md)
  wahrscheinlichkeits- gewichtet mit P(das nachgelagerte Ereignis wäre
  gewichtet            eingetreten)
  diskontiert        — künftig vermiedene Kosten zum Barwert
  eindeutig          — einmal gezählt, in einer Nutzenzeile
```

## Durchgerechnetes Beispiel

"Diese Behauptung, richtig gemacht": eine Wundüberwachungs-App für 5.000 postoperative Patienten behauptet, infektionsbedingte Wiederaufnahmen zu vermeiden.

```
Basis-Wiederaufnahme wegen Infektion: 4,0 %; mit App (RCT): 3,1 %
Zurechenbare vermiedene Ereignisse = 5.000 × 0,009 = 45/Jahr
Kosten pro Wiederaufnahmefall (marginal, dieser Trust): 3.200 £
Ausgleich = 45 × 3.200 = 144.000 £/Jahr
App-Kosten = 5.000 × 20 £ = 100.000 £/Jahr
Nettokosten = −44.000 £ → echt kostensparend, mit:
  Zurechnung aus einem RCT ✓  Grenzkostenrechnung ✓  Wahrscheinlichkeit aus Studiendaten ✓
```

Dieselbe Behauptung, aufgebaut auf "Wiederaufnahmen kosten im Schnitt 5.800 £, wir verhindern jede Menge", scheitert an allen vier Tests und verdient die Ablehnung, die sie bekommt.

## Bezug zur Softwareentwicklung

"Diese Migration vermeidet die künftige Neuentwicklung" ist eine Ausgleichsbehauptung, und die gesundheitsökonomischen Regeln machen sie ehrlich:

- **Kontrafaktische Kosten**: was würde die Neuentwicklung tatsächlich kosten, wie belegt?
- **Wahrscheinlichkeit**: wie wahrscheinlich ist diese Zukunft? (Nicht 100 % — Produkte werden eingestellt, Prioritäten ändern sich.)
- **Diskontierung**: eine in Jahr 4 vermiedene Neuentwicklung ist bei 3,5–10 % Diskontsatz viel weniger wert als der Nennwert.
- **Eindeutigkeit**: dieselbe vermiedene Neuentwicklung nicht auch in der Zeile für technische Schulden und der Bindungszeile beanspruchen.

`Ausgleichswert = P(künftiges Ereignis) × kontrafaktische Kosten × Diskontfaktor` — diese Zeile in den Vorschlag schreiben und zusehen, wie die Schätzung debattierbar wird, was genau der Punkt ist.

## Fallstricke

- **Doppelzählung** — dieselbe vermiedene Einweisung als Ausgleich, Bettentage und QALYs mit angehängten Kosten beansprucht.
- **Durchschnittskosten-Ausgleiche** für Ereignisse, deren Fixkosten ohnehin weiterlaufen.
- **Stille 100-Prozent-Wahrscheinlichkeit** bei nachgelagerten Ereignissen, die nur möglich waren.
- **Ausgleiche zu anderen Budgets**, dargestellt als Einsparung für den Kostenträger, der um Zahlung gebeten wird — siehe [Analyseperspektive](../analyseperspektive/).

## Quellen

- York Health Economics Consortium glossary: cost offset. <https://yhec.co.uk/glossary/cost-offset/>
- Cohen JT, Neumann PJ, Weinstein MC. NEJM 2008 (offsets rarely exceed costs). <https://www.nejm.org/doi/full/10.1056/NEJMp0708558>
