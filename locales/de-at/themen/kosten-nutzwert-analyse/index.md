# Kosten-Nutzwert-Analyse (CUA)

Die CUA ist eine Kosten-Effektivitäts-Analyse mit einem **generischen, präferenzgewichteten Ergebnis** — fast immer dem [QALY](../qualitätsadjustiertes-lebensjahr/) (oder vermiedenen [DALY](../behinderungsbereinigtes-lebensjahr/)). Weil die Ergebniseinheit universell ist, kann die CUA Interventionen über völlig unterschiedliche Krankheiten hinweg vergleichen.

## Warum es wichtig ist

Ein nationaler Gesundheitsdienst muss aus einem Budget zwischen einem Krebsmedikament, einer Mental-Health-App und einem OP-Roboter wählen. Natürliche Einheiten können sie nicht vergleichen; QALYs können es. Die CUA ist daher die Referenzfall-Methode bei NICE und den meisten HTA-Institutionen: Ihr Ergebnis — Kosten pro QALY, beurteilt gegen einen [Schwellenwert](../zahlungsbereitschaftsschwellen/) — kommt dem nächsten, was die Gesundheitspolitik als universellen Wechselkurs kennt. Wer möchte, dass seine Software *statt etwas anderem* finanziert wird, befindet sich in der Arena der CUA.

## Die Mathematik

```
ICUR = ΔKosten / ΔQALYs      (der ICER mit QALYs als Effekteinheit)

ΔQALYs = Σ (Dauer_i × Nutzwert_i)_neu − Σ (Dauer_i × Nutzwert_i)_alt
```

Nutzwerte aus validierten Instrumenten ([EQ-5D](../eq-5d/)); Kosten und QALYs beide mit 3,5 % [diskontiert](../diskontierung-und-zeitpräferenz/) (NICE-Referenzfall); Unsicherheit über [PSA](../probabilistische-sensitivitätsanalyse/).

## Durchgerechnetes Beispiel

Eine CBT-App für mittelschwere Angst gegenüber Warteliste für Präsenztherapie, pro Patient:

```
Kosten:  App-Lizenz + Support             250 £
         verdrängte Therapie              −680 £   (40 % der Nutzer brauchen sie nicht mehr)
         ΔK = 250 − 680 = −430 £ (spart Geld)

QALYs:   6 Monate bei Nutzwert 0,76 statt 0,68 während des Wartens
         ΔE = 0,5 × (0,76 − 0,68) = +0,04 QALYs
```

ΔK < 0 und ΔE > 0: Die App **dominiert** — besser und günstiger, kein Verhältnis nötig. Hätte die Annahme zur Therapieverdrängung nur 10 % betragen, wäre ΔK = 250 − 170 = +80 £, und ICUR = 80 / 0,04 = **2.000 £/QALY** — immer noch weit unter 20.000 £. Der Fall übersteht selbst eine drastisch gekürzte Schlüsselannahme: So sieht eine robuste CUA aus (und das [Tornado-Diagramm](../sensitivitätsanalyse/) beweist es).

## Bezug zur Softwareentwicklung

Die tiefe Idee der CUA — *eine zusammengesetzte, präferenzgewichtete Einheit, um Ungleiches zu vergleichen* — ist das Muster für den Vergleich ungleicher Entwicklungsinvestitionen (Sicherheit vs. Developer Experience vs. Zuverlässigkeit). Die ehrlichen Optionen sind entweder eine vertretbare zusammengesetzte Einheit (selten) oder eine explizite [Kosten-Konsequenzen-Tabelle](../kosten-konsequenzen-analyse/) (üblich). Wovor die CUA warnt, ist der gefälschte Verbund: ein gewichteter "Impact Score", dessen Gewichte im Nachhinein so angepasst wurden, dass die bevorzugte Option gewinnt. Die Gesundheitsökonomie hat Jahrzehnte damit verbracht, die Nutzwerterhebung zu standardisieren, genau damit die Gewichte dem Vergleich vorausgehen.

## Fallstricke

- **Nutzwertgewinne unterhalb der Instrumentensensitivität** (siehe minimal klinisch bedeutsamer Unterschied bei [patientenberichteten Endpunkten](../patientenberichtete-endpunkte/)) — winziges ΔE mal große Bevölkerung ist ein klassischer Reinwaschungstrick.
- **Fehlende Verdrängung der Vergleichsversorgung** — der größte Kostenposten digitaler Produkte ist oft das, was sie ersetzen.
- **Nicht-präferenzbasierte Scores auf Nutzwerte abbilden** mit unvalidierten Umrechnungen.

## Quellen

- York Health Economics Consortium glossary: cost-utility analysis. <https://yhec.co.uk/glossary/cost-utility-analysis/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
