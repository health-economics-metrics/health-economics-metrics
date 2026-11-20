# Sensitivitätsanalyse

Die deterministische Sensitivitätsanalyse (DSA) variiert jeweils eine Annahme über einen plausiblen Bereich, um zu prüfen, ob die Schlussfolgerung bestehen bleibt. Die Standard-Visualisierung ist ein Tornado-Diagramm: Parameter, geordnet danach, wie stark sie das Ergebnis verändern.

## Warum es wichtig ist

Jedes ökonomische Modell beruht auf Schätzungen — eingesparte Zeit, Akzeptanz, Einheitskosten. Health Technology Assessment akzeptiert keinen Punktschätzer ("der ROI beträgt 340 %") ohne Nachweis, dass die Schlussfolgerung gegenüber vernünftigen Meinungsverschiedenheiten bei den Eingaben robust ist. Ein Tornado-Diagramm sagt dem Entscheider, *welche Annahme zu hinterfragen ist*: Funktioniert der Fall nur, wenn der umstrittenste Parameter an seinem optimistischen Ende liegt, sieht das sofort jeder.

Das ist die am leichtesten übertragbare Gewohnheit aus der Gesundheitsökonomie für Software-Business-Cases.

## Die Mathematik

Für jeden Parameter p mit plausiblem Bereich [p_niedrig, p_hoch]:

```
Ergebnis_niedrig = Modell(p = p_niedrig, alle anderen im Basisfall)
Ergebnis_hoch    = Modell(p = p_hoch,    alle anderen im Basisfall)
Ausschlag(p)     = |Ergebnis_hoch − Ergebnis_niedrig|
```

Parameter nach Ausschlag ordnen; horizontale Balken um das Basisfall-Ergebnis herum zeichnen. Varianten: zweiseitige DSA (zwei Parameter auf einem Raster variieren), Schwellenwertanalyse (den Parameterwert finden, bei dem die Entscheidung kippt).

## Durchgerechnetes Beispiel

KI-Coding-Assistent für 200 Entwickler. Basisfall: 39 £/Entwickler/Monat Lizenz; 30 Min./Entwickler/Tag gespart; Vollkosten 60 £/Stunde; 220 Arbeitstage.

```
Jahresnutzen im Basisfall = 200 × 0,5 h × 220 × 60 £ = 1.320.000 £
Jahreskosten              = 200 × 39 £ × 12          = 93.600 £
Netto im Basisfall        = 1.226.400 £
```

Tornado (jeweils ein Parameter):

```
Zeitersparnis 0,1–1,0 h/Tag: netto = 170.400 £ … 2.546.400 £  (Ausschlag 2,38 Mio. £) ← dominiert
Vollkosten 40–80 £/h:        netto = 786.400 £ … 1.666.400 £  (Ausschlag 0,88 Mio. £)
Arbeitstage 200–240:         netto = 1.106.400 £ … 1.346.400 £ (Ausschlag 0,24 Mio. £)
Lizenz 30–50 £/Monat:        netto = 1.248.000 £ … 1.200.000 £ (Ausschlag 48.000 £)
```

Schwellenwertanalyse: Der Nettonutzen erreicht bei etwa **2,1 Minuten/Tag** gesparter Zeit null. Die Entscheidung reagiert kaum auf den Lizenzpreis und hängt vollständig an der Schätzung der Zeitersparnis — also diese messen, nicht den Rest. (Und daran denken: Das Ergebnis ist Kapazität, kein Bargeld — siehe [zahlungswirksame vs. nicht zahlungswirksame Einsparungen](../zahlungswirksame-vs-nicht-zahlungswirksame-einsparungen/).)

## Bezug zur Softwareentwicklung

Entwickler machen das instinktiv bereits als "was, wenn wir uns bei X irren?" — DSA macht daraus nur ein systematisches, sichtbares Verfahren. Ein Tornado-Diagramm gehört in jeden Tooling-Vorschlag, jede Kapazitätsplanung und jede Build-vs-Buy-Analyse. Es verwandelt Streit darüber, wessen Bauchgefühl richtig liegt, in Einigkeit darüber, welchen Parameter man als Nächstes messen sollte — oft über einen Pilotversuch, dessen Wert sich selbst bepreisen lässt (siehe [erwarteter Wert perfekter Information](../erwarteter-wert-perfekter-information/)).

## Fallstricke

- **Bereiche, die schmeicheln**: ±10 % um jede Eingabe, unabhängig von der tatsächlichen Unsicherheit. Schätzungen zur Zeitersparnis verdienen ±80 %; Lizenzpreise ±10 %.
- **Einzelparameter-Variation übersieht Wechselwirkungen** — korrelierte Parameter (Akzeptanz und Zeitersparnis) brauchen zweiseitige Analyse oder eine vollständige [probabilistische Sensitivitätsanalyse](../probabilistische-sensitivitätsanalyse/).
- **Die Analyse durchführen und sie ignorieren**: Sagt der Tornado, dass der Fall an einer einzigen weichen Zahl hängt, ist der nächste Schritt Messung, nicht Freigabe.

## Quellen

- York Health Economics Consortium glossary: deterministic sensitivity analysis. <https://yhec.co.uk/glossary/deterministic-sensitivity-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
