# Technische Schulden

Technische Schulden sind die implizierten künftigen Kosten zweckmäßiger vergangener Entscheidungen in einer Codebasis: die geschuldete Sanierungsarbeit (**Tilgung**) und die anhaltende Bremswirkung auf die Auslieferung (**Zinsen**). Quantifizierungsmethoden wie SQALE machen daraus keine Metapher mehr, sondern eine bezifferte Verbindlichkeit.

## Warum es wichtig ist

Unbeziffert sind technische Schulden ein Klagelied; beziffert sind sie ein Business Case. Branchen-Baselines (CAST Appmarq, 1.400 Apps / 550 Mio. LOC): historisch ≈ **3,61 $ Tilgungs-Prinzipal je Codezeile**, mit typischen Codebasen bei einer Schuldenquote von 15–20 % der Neubaukosten, gegenüber einer üblich verwendeten Gesundheitsschwelle von ≤5 % (SonarQubes Note "A"). Der gesundheitsökonomische Rahmen passt präzise: Schulden sind ein *chronischer Zustand* — unbehandelt schreiten sie fort, ihre "Zinsen" verzinsen sich als langsamere Auslieferung und höhere Fehlerraten, und Sanierung konkurriert um Kapazität mit Feature-Arbeit, genau wie Prävention mit Behandlung konkurriert.

## Die Mathematik

```
SQALE-Prinzipal = Σ über Verstöße (Sanierungszeit) × Entwicklerkostensatz
Technische-Schulden-Quote (TDR) = Sanierungskosten / Neuentwicklungskosten × 100
                    (SonarQube-Noten: A ≤ 5 %, B ≤ 10 %, C ≤ 20 %, D ≤ 50 %)

Zinsen (die Zahl, die die Tilgung rechtfertigt):
  Zinsen/Jahr = Δ Liefergeschwindigkeit × Wert pro Geschwindigkeitseinheit
              + Δ Fehlerrate × Kosten pro Fehler
Tilgungsfall = PV(vermiedene Zinsen über den Horizont) − Sanierungskosten
               (diskontiert — siehe discounting-and-time-preference.md)
```

Der Prinzipal benennt die Verbindlichkeit; die **Zinsen** begründen den Investitionsfall. 500.000 £ Prinzipal zu zahlen, um 40.000 £/Jahr Zinsen zu vermeiden, ist ein schlechter Tausch; um 400.000 £/Jahr zu vermeiden, ein exzellenter.

## Durchgerechnetes Beispiel

Eine 400.000-LOC-Integrationsschicht für klinische Akten: SQALE-Prinzipal 3.800 Stunden × 75 £ = **285.000 £**; TDR ≈ 12 % (Note C). Gemessene Zinsen: Teams, die diese Schicht berühren, zeigen 40 % längere Zykluszeiten und doppelte Change-Failure-Raten gegenüber der Baseline des Bestands. Die Schicht absorbiert 6.000 Entwicklerstunden/Jahr:

```
Zinsen ≈ 6.000 × 0,40 × 75 £           = 180.000 £/Jahr (Geschwindigkeitsbremse)
        + 12 zusätzliche Fehlschläge × 8.000 £ = 96.000 £/Jahr (Nacharbeit/Vorfälle)
        ≈ 276.000 £/Jahr

Die schlimmsten 30 % des Prinzipals sanieren (85.000 £), gezielt auf
Hotspots → modellierte Zinsreduktion 60 %: spart ~166.000 £/Jahr.
Amortisation ≈ 6 Monate.
```

Das Anvisieren von Hotspots zählt: Schuldzinsen konzentrieren sich dort, wo Änderungshäufigkeit × Schuldendichte am höchsten ist — selten berührte Schulden zu sanieren bringt nichts, wie die Behandlung eines Zustands, der nie fortgeschritten wäre ([Präventionsökonomie](../präventionsökonomie/)).

## Bezug zur Softwareentwicklung

Die gesundheitsökonomischen Importe, die Argumente zu technischen Schulden aufwerten: den Bestand als **Lasteninventar** ausdrücken ([DALY](../behinderungsbereinigtes-lebensjahr/)-artig — wo gehen gesunde Entwicklungsjahre verloren?); Tilgung ehrlich mit Progressionsrechnung begründen (meist kosteneffektiv, nicht kostensparend); die Sanierung der schlimmsten Systeme nach [Schweregrad-Defizit](../qaly-defizit-und-schweregrad-modifikatoren/) gewichten; und große Sanierungsvorschläge mit einer Ausgleichsanalyse einreichen, die die Regeln der [vermiedenen nachgelagerten Kosten](../vermiedene-nachgelagerte-kosten/) übersteht — wahrscheinlichkeitsgewichtet, diskontiert, einmal gezählt.

## Fallstricke

- **Nur den Prinzipal berichten**: eine große, beängstigende Zahl ohne Zinsschätzung rechtfertigt nichts.
- **Werkzeuggenerierte Schuldenzahlen wörtlich genommen**: SQALE zählt Regelverstöße; es übersieht architektonische Schulden (die teure Art) und zählt Nebensächliches.
- **Null-Schulden-Utopie**: das optimale Schuldenniveau ist nicht null — Schulden sind Hebelwirkung; die Frage ist der Zinssatz.
- **"Die Neuentwicklung vermeidet alles davon"**: Neuentwicklungsvorschläge müssen dieselben Ausgleichsregeln bestehen — kontrafaktische Kosten, Wahrscheinlichkeit, Diskontierung.

## Quellen

- CAST, technical debt estimation. <https://www.castsoftware.com/glossary/technical-debt-estimation>
- Letouzey J-L, "The SQALE method for evaluating Technical Debt." <https://www.researchgate.net/publication/239763591_The_SQALE_method_for_evaluating_Technical_Debt>
