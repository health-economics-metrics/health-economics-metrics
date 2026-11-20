# Opportunitätskosten

Opportunitätskosten sind der Wert der besten Alternative, auf die man verzichtet, wenn man eine Ressource bindet. In einem Gesundheitssystem mit festem Budget bedeutet die Ausgabe von 1 Million £ für eine Sache 1 Million £ Gesundheit, die *nicht* anderswo erzeugt wird.

## Warum es wichtig ist

Opportunitätskosten sind die tiefgreifendste Idee der Gesundheitsökonomie — und diejenige, die Softwareentwickler am häufigsten übergehen. Gesundheitsbudgets sind in jedem Jahr fix, sodass eine neue Technologie nie aus "zusätzlichem" Geld finanziert wird — sie verdrängt etwas anderes. Die Frage, die sich ein Kostenträger tatsächlich stellt, lautet nicht "Ist das gut?", sondern "Ist das besser als das, was dasselbe Geld derzeit kauft?"

Deshalb gibt es überhaupt Kosten-Effektivitäts-Schwellenwerte: Der Schwellenwert schätzt, wie viel Gesundheit das Geld am Rand des bestehenden Systems kauft. Siehe [Zahlungsbereitschaftsschwellen](../zahlungsbereitschaftsschwellen/).

## Die Mathematik

Es gibt keine einzelne Formel; Opportunitätskosten sind eine Disziplin des Vergleichs:

```
Opportunitätskosten der Wahl von A = Wert der besten aufgegebenen Alternative B
Nettogewinn von A = Wert(A) − Wert(B)
```

Der empirische Referenzwert: Claxton et al. (2015) schätzten, dass der NHS am Rand ein QALY für etwa **13.000 £** erzeugt. Wer also 13.000 £ für eine Technologie ausgibt, die weniger als ein QALY erzeugt, macht die Nation *weniger* gesund — selbst wenn die Technologie "wirkt".

## Durchgerechnetes Beispiel

Das Transformationsbudget eines NHS-Trusts kann genau eine dieser Optionen finanzieren:

- **Option A**: E-Rostering-Software — spart 400.000 £/Jahr an Ausgaben für Zeitarbeitskräfte.
- **Option B**: Software zur Entlassungskoordination — spart 2.000 Bettentage/Jahr. Bei Grenzkosten von etwa 150 £ pro tatsächlich freigemachtem Bettentag sind das 300.000 £/Jahr, plus frühere Behandlung für wartende Patienten.

Die Finanzierung von A bedeutet, auf B zu verzichten. Die Opportunitätskosten von A sind die 300.000 £ von B plus der Patientennutzen; das *Netto*-Argument für A ist nur die Differenz, nicht die plakativen 400.000 £ von A. Jeder Business Case, der einen Vorschlag mit "nichts tun" statt mit der besten Alternative vergleicht, überschätzt seinen Wert.

## Bezug zur Softwareentwicklung

Auch Entwicklungskapazität ist ein festes Budget — Roadmap-Slots statt Pfund. Ein Plattformteam, das Tool A finanziert und damit Entwicklerstunden zu 500 £/Stunde spart, obwohl Tool B dasselbe zu 200 £/Stunde liefert, vernichtet Kapazität — genau wie ein Gesundheitssystem, das ein Medikament zu 40.000 £/QALY finanziert, Versorgung zu 13.000 £/QALY verdrängt. Die Disziplin überträgt sich direkt:

- Immer den Vergleichsmaßstab benennen ("verglichen womit?").
- Entwicklerzeit nach dem bewerten, was sie sonst erzeugen würde, nicht nur nach dem Gehalt.
- "Wir haben noch Budget übrig" als Anfang der Analyse behandeln, nicht als deren Ende.

## Fallstricke

- **Vergleich mit nichts.** Der korrekte Vergleichsmaßstab ist die zweitbeste Verwendung des Geldes, was selten "nichts tun" ist.
- **Annahme, gesparte Zeit habe keine Opportunitätskosten.** Gesparte Zeit ist nur wertvoll, wenn sie für etwas Wertvolles neu eingesetzt wird — siehe [zahlungswirksame vs. nicht zahlungswirksame Einsparungen](../zahlungswirksame-vs-nicht-zahlungswirksame-einsparungen/).
- **Verdrängung ignorieren.** "Das Budget wird sich entsprechend erweitern" stimmt in einem nationalen Gesundheitsdienst unterjährig so gut wie nie.
- **Ignorieren, welche Methode eine verdrängte Ressource bewertet.** Speziell für verlorene Produktivität — durch Krankheit, Behinderung oder einen ausscheidenden Mitarbeiter — siehe [Humankapitalansatz vs. Friktionskostenmethode](../humankapitalansatz-vs-friktionskostenmethode/), die produktivitätskostenspezifische Fassung dieser Idee.

## Quellen

- Claxton K, et al. "Methods for the estimation of the NICE cost effectiveness threshold." Health Technology Assessment 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- York Health Economics Consortium glossary. <https://yhec.co.uk/glossary/opportunity-cost/>
