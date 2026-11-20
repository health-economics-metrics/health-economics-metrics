# Wert eines statistischen Lebens (VSL)

Der Wert eines statistischen Lebens (VSL) — im britischen Sprachgebrauch „Value of a Prevented Fatality" (VPF) — ist der Betrag, den eine *Bevölkerung* kollektiv zu zahlen bereit ist, um das Risiko eines statistischen Todesfalls zu senken, abgeleitet aus Lohn-Risiko-Abwägungsstudien (wie viel Mehrlohn Beschäftigte für riskantere Arbeit verlangen) und Befragungen zu geäußerten Präferenzen. Er ist nicht der Preis des Lebens irgendeiner identifizierten Einzelperson, sondern ein Konstrukt des Bevölkerungsrisikos, und ein Softwareentwickler, der risikomindernde Systeme baut — Triage-Algorithmen, Rettungsdienstdisposition, Sicherheitsüberwachung —, muss wissen, dass er aus einer anderen theoretischen Tradition stammt als [Zahlungsbereitschaftsschwellen](../zahlungsbereitschaftsschwellen/).

## Warum es wichtig ist

VSL/VPF ist das Standardwerkzeug zur Monetarisierung von Sterberisikominderungen in der regulatorischen Kosten-Nutzen-Analyse: Verkehrssicherheit, Umweltregulierung und einige Maßnahmen der öffentlichen Gesundheit führen ihre Business Cases darüber. Das Green Book des HM Treasury veröffentlicht einen VPF-Wert, der aus britischer Arbeitsmarkt- und Befragungsevidenz abgeleitet ist, und das Verkehrsministerium verwendet ihn direkt in der Bewertung der Straßenverkehrssicherheit. Das ist eine wirklich andere Bewertungstradition als die Methodik QALY × Zahlungsbereitschaftsschwelle: Der Schwellenansatz bewertet Gesundheitsgewinne gegen das, was ein Gesundheits-*Budget* derzeit am Rand hervorbringt, während VSL/VPF Risikominderung gegen das bewertet, was Menschen auf einem Arbeitsmarkt oder in einer Befragung offenbaren, dafür zahlen zu wollen. Die beiden Rahmen lassen sich nicht immer in Einklang bringen, und beide im selben Fall zu verwenden, ohne das anzuerkennen, ist ein häufiger Analysefehler.

## Die Mathematik

```
Vermiedene Todesfälle = Bevölkerung × Risikoreduktion_pro_Person
  (Risikoreduktion_pro_Person ist eine Wahrscheinlichkeit, z. B. 0,000001 =
   Senkung des jährlichen Sterberisikos um 1 zu einer Million)

Monetarisierter Sterblichkeitsnutzen = vermiedene_Todesfälle × Wert_eines_vermiedenen_Todesfalls
```

## Durchgerechnetes Beispiel

Eine Region mit 800.000 Menschen profitiert von einer digitalen Disposition/Triage zur Straßenverkehrssicherheit, die das jährliche Sterberisiko jeder Person um 1 zu einer Million (0,000001) senkt:

```
Vermiedene Todesfälle = 800.000 × 0,000001 = 0,8
```

Mit dem britischen Wert eines vermiedenen Todesfalls von 2.180.000 £ (Zahl des HM Treasury/DfT, Preise 2023/24 — das Green Book aktualisiert ihn jährlich, vor Verwendung in einer laufenden Analyse neu prüfen):

```
Monetarisierter Sterblichkeitsnutzen = 0,8 × 2.180.000 £ = 1.744.000 £/Jahr
```

Knapp 1,75 Millionen £ monetarisierter Sterblichkeitsnutzen pro Jahr, aus einer Risikominderung, die die meisten Betroffenen individuell nie bemerken würden.

## Bezug zur Softwareentwicklung

Teams für sicherheitskritische Software — Firmware für Medizinprodukte, Software für autonome Fahrzeuge, industrielle Steuerungssysteme — stehen vor genau diesem Bepreisungsproblem, wenn sie den Kosten-Nutzen-Fall für eine Sicherheitsinvestition aufbauen: Wie bepreist man „einen katastrophalen Ausfall verhindern", wenn der Ausfall selten, schwer und über eine große Nutzerpopulation verteilt ist? VSL/VPF ist ein jahrzehntealtes, öffentlich dokumentiertes reales Vorbild dafür, eine seltene, schwere Risikominderung auf Bevölkerungsebene mit einer Zahl zu versehen — dieselbe Argumentationsform wie die Bepreisung einer SRE-Investition gegen einen seltenen katastrophalen Ausfall, nur mit einem Sterblichkeits- statt einem Ausfallzeit-Ergebnis.

## Fallstricke

- **VSL als „den Preis eines identifizierten Lebens" behandeln**: Das ist er nicht. VSL/VPF ist ein statistisches Bevölkerungskonstrukt, abgeleitet aus Risikominderungs-Abwägungen über viele Menschen, keine Bewertung des Lebens oder Sterbens einer bestimmten Person.
- **Doppelzählung gegenüber einer QALY-basierten Berechnung des nettomonetären Nutzens**: Einen VSL/VPF-Wert und eine separate Rechnung QALY × Schwelle im selben Fall zu verwenden, ohne sie abzustimmen, zählt den Wert derselben vermiedenen Todesfälle stillschweigend doppelt. Für einen gegebenen Fall einen Rahmen wählen.
- **Eine VSL-Schätzung ohne Anpassung auf andere Kontexte übertragen**: Ein VSL, der aus dem Arbeitsmarkt eines Landes oder aus Lohn-Risiko-Daten von Erwerbsfähigen stammt, unangepasst auf einen anderen Einkommenskontext oder eine andere Bevölkerung (Kinder, Rentner) angewandt, ist ein altes, wirklich umstrittenes methodisches Problem — kein gelöstes.

## Quellen

- HM Treasury, The Green Book: Central Government Guidance on Appraisal and Evaluation — ergänzende Leitlinie zum Value of a Prevented Fatality (Preise 2023/24; Green-Book-Werte werden jährlich aktualisiert). <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government>
- US EPA, „Mortality Risk Valuation" (für die US-amerikanische VSL-Tradition, zum Kontrast mit dem oben genannten britischen VPF-Wert zitiert). <https://www.epa.gov/environmental-economics/mortality-risk-valuation>
- Viscusi WK, Aldy JE. „The Value of a Statistical Life: A Critical Review of Market Estimates Throughout the World." J Risk Uncertain. 2003;27(1):5-76.
