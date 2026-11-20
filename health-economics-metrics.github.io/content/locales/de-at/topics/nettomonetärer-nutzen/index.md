# Nettomonetärer Nutzen (NMB)

NMB wandelt ein Kosteneffektivitätsergebnis in einen einzigen Geldwert um: Gesundheitsgewinn bewertet zur Zahlungsbereitschaftsschwelle, minus Kosten. Sein Zwilling, der Netto-Gesundheitsnutzen (NHB), drückt dieselbe Regel in Gesundheitseinheiten aus.

## Warum es wichtig ist

Verhältnisse ([ICERs](../inkrementelles-kosten-effektivitäts-verhältnis/)) sind unhandlich: Sie explodieren nahe null Effekt, lassen sich über Unsicherheitsstichproben nicht mitteln und können nicht sauber drei oder mehr Optionen ordnen. NMB behebt all das — er ist linear, sodass man Optionen ordnen, Monte-Carlo-Stichproben mitteln und Beiträge zerlegen kann. Es ist auch die Form gesundheitsökonomischer Mathematik, die jeder Entwickler bereits kennt: *Wert minus Kosten*.

## Die Mathematik

```
NMB = (ΔE × λ) − ΔK
NHB = ΔE − (ΔK / λ)

ΔE = inkrementeller Effekt (z. B. QALYs)
ΔK = inkrementelle Kosten
λ  = Zahlungsbereitschaftsschwelle (siehe willingness-to-pay-thresholds.md)

Entscheidungsregel: annehmen, wenn NMB > 0 (gleichwertig NHB > 0).
Unter Alternativen: die mit dem höchsten NMB wählen.
```

NMB > 0 ⇔ ICER < λ (wenn ΔE > 0), sodass beide Regeln übereinstimmen — NMB verhält sich nur besser.

## Durchgerechnetes Beispiel

Drei Optionen für einen Diabetesdienst, je 1.000 Patienten, λ = 20.000 £/QALY:

```
Option              ΔK          ΔE (QALYs)   NMB = 20.000×ΔE − ΔK
App + Coaching      400.000 £   30           600.000 − 400.000 = 200.000 £
Nur App             150.000 £   12           240.000 − 150.000 = 90.000 £
Zusätzliche Kliniken 700.000 £  32           640.000 − 700.000 = −60.000 £
```

Zusätzliche Kliniken gewinnen die meisten QALYs, vernichten aber bei diesem Schwellenwert Wert (NMB < 0). App + Coaching gewinnt. NMB erlaubt es, *alle drei gleichzeitig zu ordnen* — paarweise ICERs bräuchten das Grenzverfahren aus [Dominanz und die Effizienzgrenze](../dominanz-und-die-effizienzgrenze/) und kämen zum selben Ergebnis.

NHB-Sicht des Gewinners: 30 − 400.000/20.000 = 30 − 20 = **10 QALYs netto** — der Gesundheitsgewinn über das hinaus, was dasselbe Geld anderswo erzeugt hätte.

## Bezug zur Softwareentwicklung

`(gesparte Stunden × Vollkostensatz) − Tool-Kosten` — der alltägliche Business Case für Tools — ist buchstäblich eine NMB-Berechnung mit λ = Vollkosten eines Entwicklers. Zwei Erweiterungen aus der Gesundheitsökonomie:

- **λ als Variable behandeln, nicht als Konstante.** NMB gegen λ ("Wert einer Entwicklerstunde") auftragen und zeigen, wo die Entscheidung kippt; verschiedene Stakeholder können dann ihre eigene Bewertung anwenden, ohne die Rechnung zu wiederholen.
- **NHB-Denken**: "Diese Plattform spart 5.000 Entwicklerstunden, verbraucht aber Budget, das 3.000 Entwicklerstunden an Auftragnehmerkapazität gekauft hätte — netto 2.000 Stunden" erzwingt den Opportunitätskosten-Vergleich in Kapazitätseinheiten. Siehe [Opportunitätskosten](../opportunitätskosten/).

## Fallstricke

- **Den Schwellenwert verstecken**: ein NMB ist ohne Angabe von λ bedeutungslos; NMB bei 20.000 £ und 30.000 £ berichten oder die Kurve zeigen.
- **NMB nutzen, um winzige Effekte reinzuwaschen**: eine riesige Population mal ein vernachlässigbarer Effekt pro Person kann einen großen NMB ergeben — Effekte pro Person daneben ausweisen.
- **Vergessen, dass NMB jede Unsicherheit** in ΔK und ΔE erbt — mit [probabilistischer Sensitivitätsanalyse](../probabilistische-sensitivitätsanalyse/) kombinieren.

## Quellen

- York Health Economics Consortium glossary: net monetary benefit. <https://yhec.co.uk/glossary/net-monetary-benefit/>
- Stinnett AA, Mullahy J. "Net health benefits: a new framework for the analysis of uncertainty in cost-effectiveness analysis." <https://pmc.ncbi.nlm.nih.gov/articles/PMC2528971/>
