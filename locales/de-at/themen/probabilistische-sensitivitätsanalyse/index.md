# Probabilistische Sensitivitätsanalyse (PSA)

Die PSA weist jedem unsicheren Parameter eine Wahrscheinlichkeitsverteilung zu, zieht daraus tausendfach gleichzeitig Stichproben (Monte Carlo) und berichtet die *Wahrscheinlichkeit*, dass eine Option die beste Wahl ist — statt eines einzelnen Punktschätzers.

## Warum es wichtig ist

NICEs Referenzfall *verlangt* PSA. Die deterministische Analyse beantwortet "was, wenn eine Eingabe falsch ist?"; die PSA beantwortet "wie wahrscheinlich treffen wir angesichts all dessen, was wir gleichzeitig nicht wissen, die richtige Entscheidung?" Ihr charakteristisches Ergebnis, die **Cost-Effectiveness Acceptability Curve (CEAC)**, trägt die Wahrscheinlichkeit, dass eine Option kosteneffektiv ist, gegen die Zahlungsbereitschaftsschwelle auf — und macht aus "der ICER beträgt 24.000 £/QALY" ein "es besteht eine Wahrscheinlichkeit von 78 %, dass dies bei 30.000 £/QALY die richtige Wahl ist."

## Die Mathematik

```
Für jede von N Stichproben (N ≈ 10.000):
  jeden Parameter θ aus seiner Verteilung ziehen
    (Kosten ~ Gamma, Wahrscheinlichkeiten ~ Beta, Nutzwerte ~ Beta, Effekte ~ Normal-/Log-Normal)
  NMB_j(θ) = λ × Effekt_j(θ) − Kosten_j(θ) für jede Option j berechnen

CEAC_j(λ) = Anteil der Stichproben, in denen Option j bei Schwellenwert λ den höchsten NMB hat
```

Siehe [Nettomonetärer Nutzen](../nettomonetärer-nutzen/) für NMB und [Zahlungsbereitschaftsschwellen](../zahlungsbereitschaftsschwellen/) für λ.

## Durchgerechnetes Beispiel

Business Case einer Plattformmigration. Drei unsichere Eingaben:

```
Migrationskosten    ~ Gamma,   Mittelwert 800.000 £, Sd 200.000 £
Jährlicher Nutzen   ~ Normal,  Mittelwert 350.000 £, Sd 150.000 £
Nutzendauer         ~ Uniform, 3–6 Jahre
```

Für jede der 10.000 Stichproben wird der Nettonutzen = Dauer × Jahresnutzen − Kosten berechnet (Diskontierung zur Verdeutlichung weggelassen). Beispielhafte Ergebnisse:

```
Mittlerer Nettonutzen:   775.000 £
Wahrscheinlichkeit netto > 0: 0,86
5.–95. Perzentil:       −180.000 £ … +1,9 Mio. £
```

Der Punktschätzer sagte "eindeutig ja". Die PSA sagt "zu 86 % ja, mit einem realen Randbereich, in dem wir 180.000 £+ verlieren" — genau das, was ein Portfolio-Verantwortlicher tatsächlich braucht, und es bepreist den Fall dafür, zunächst einen Discovery-Spike durchzuführen (siehe [EVPI](../erwarteter-wert-perfekter-information/)).

## Bezug zur Softwareentwicklung

Entwickler vertrauen bei Liefer-Prognosen bereits auf Monte Carlo (Durchsatz-Sampling schlägt Punktschätzer). Dieselbe Maschinerie lässt sich auf Geld übertragen: Verteilungen für Akzeptanz, Zeitersparnis und Gehalt, dann "Wahrscheinlichkeit, dass diese Plattforminvestition netto positiv ist" berichten statt eines scheinpräzisen ROI. Eine Kurve im CEAC-Stil — Wahrscheinlichkeit, die beste Option zu sein, als Funktion davon, wie die Organisation eine Entwicklerstunde bewertet — ist für ein Finanzierungsgremium ein echt besseres Artefakt als jede Einzelzahl.

## Fallstricke

- **Verteilungen aus dem Bauch heraus**: PSA mit erfundenen Standardabweichungen ist deterministische Analyse im Laborkittel. Streuungen auf Daten oder strukturierte Expertenbefragung stützen.
- **Korrelation zwischen Parametern ignorieren** (hohe Akzeptanz korreliert meist mit hoher Zeitersparnis); unabhängiges Sampling unterschätzt das Randrisiko.
- **Nur den Mittelwert der Simulation berichten** — der ganze Sinn liegt in der Verteilung und der Entscheidungswahrscheinlichkeit.

## Quellen

- Fenwick E, Claxton K, Sculpher M. "Representing uncertainty: the role of cost-effectiveness acceptability curves." Health Economics 2001. <https://pubmed.ncbi.nlm.nih.gov/11316594/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
