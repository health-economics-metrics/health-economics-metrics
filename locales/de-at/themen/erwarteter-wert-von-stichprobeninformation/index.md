# Erwarteter Wert von Stichprobeninformation (EVSI)

EVSI ist der Wert einer *konkret vorgeschlagenen Studie* — eines bestimmten Designs, einer bestimmten Stichprobengröße — bevor sie durchgeführt wird, im Gegensatz zum [EVPI](../erwarteter-wert-perfekter-information/), der die vollständige Beseitigung aller Unsicherheit bepreist. EVSI beantwortet die Frage, vor der ein Forschungsförderer tatsächlich steht: „Lohnt sich *diese* Studie in *dieser* Größe für ihre Kosten?"

## Warum es wichtig ist

Der EVPI nennt die Obergrenze dessen, was irgendeine Forschung wert sein könnte; er sagt nie, ob die Studie, die gerade vorliegt, die Hürde nimmt. Ein nationaler Forschungsförderer, der zwischen einer Pilotstudie mit 50 Patienten und einer definitiven Studie mit 500 Patienten wählt, muss wissen, wie viel *jedes konkrete Design* wert ist, nicht nur den Wert der Allwissenheit. EVSI liefert diese Zahl, und weil sie mit der Stichprobengröße skaliert, kann ein Förderer die Stichprobengröße finden, die den erwarteten Nettonutzen maximiert, statt zu raten.

Deshalb ist EVSI auch immer kleiner oder gleich EVPI: Eine endliche Stichprobe kann Unsicherheit nur teilweise auflösen, und eine Studie, die mehr wert scheint als perfekte Information, ist ein Zeichen für eine fehlerhafte Berechnung, nicht für ein echtes Ergebnis.

## Die Mathematik

```
Allgemein:
EVSI(n) = E_Daten[ max_d E_θ|Daten[NB(d,θ)] ]  −  max_d E_θ[NB(d,θ)]
  (verschachtelter Erwartungswert: äußerer über mögliche Studienergebnisse,
  innerer über die A-posteriori-Überzeugung über θ nach Kenntnis dieses
  Ergebnisses — meist geschätzt durch verschachtelte Monte-Carlo-/
  Bayes-Aktualisierung über die Ziehungen der probabilistischen
  Sensitivitätsanalyse)

Geschlossene Normalapproximation (ein unsicherer Parameter, konjugiertes
Normal-Normal-Modell — eine gängige Abkürzung, nicht für jedes Modell exakt):
EVSI(n) = EVPI × n / (n + n0)

n  = Stichprobengröße der vorgeschlagenen Studie
n0 = „A-priori-äquivalente Stichprobengröße" — die Größe einer gedachten
     Stichprobe, die dieselbe Information trüge wie die aktuelle A-priori-
     Verteilung, abgeleitet aus dem Verhältnis von Datenvarianz zu
     A-priori-Varianz
ENBS(n) = EVSI(n) − Kosten(n)
Populations-EVSI = EVSI_pro_Entscheidung × betroffene_Entscheidungen
```

Die allgemeine Form ist ein verschachtelter Erwartungswert, weil das künftige Ergebnis einer Studie selbst unsicher ist: Man muss über jeden möglichen Datensatz mitteln, den die Studie liefern könnte, und für jeden die beste Entscheidung unter der aktualisierten (A-posteriori-)Überzeugung neu berechnen. Die geschlossene Normalapproximation tauscht diesen Rechenaufwand gegen ein einziges Verhältnis, gültig, wenn der unsichere Parameter und die Daten (näherungsweise) normalverteilt und konjugiert sind — eine Bequemlichkeit, kein universelles Gesetz. Vollständiges verschachteltes Monte Carlo ist das Allzweckverfahren, wenn diese Annahme nicht zutrifft. Siehe [probabilistische Sensitivitätsanalyse](../probabilistische-sensitivitätsanalyse/) für die PSA-Ziehungen, aus denen EVSI üblicherweise geschätzt wird.

## Durchgerechnetes Beispiel

Aufbauend auf dem Rechenbeispiel zum [EVPI](../erwarteter-wert-perfekter-information/) — Einführung eines KI-Dokumentationsassistenten für 5.000 Kliniker, wobei der EVPI 1,2 Mio. £ betrug —, hier derselbe EVPI in ganzen Pfund: **EVPI = 1.200.000 £**.

Zur Diskussion steht eine Pilotstudie mit 50 Klinikern. Aus dem Verhältnis der Varianz der A-priori-Überzeugung zur Messpräzision des Piloten ergibt sich eine A-priori-äquivalente Stichprobengröße von `n0 = 75`:

```
EVSI(50) = 1.200.000 × 50 / (50 + 75)
         = 1.200.000 × 50 / 125
         = 1.200.000 × 0,4
         = 480.000 £
```

Der Pilot kostet 120.000 £:

```
ENBS = EVSI − Kosten = 480.000 − 120.000 = 360.000 £
```

Ein klar positiver ENBS: den Piloten finanzieren. Wiederholt sich dieselbe Beschaffungsentscheidung in 3 ähnlichen regionalen Trusts, skaliert der Wert des Piloten:

```
Populations-EVSI = 480.000 × 3 = 1.440.000 £
```

## Bezug zur Softwareentwicklung

EVSI ist die Ökonomie der Entscheidung, *wie groß* ein Pilot oder A/B-Test sein sollte, nicht nur ob man überhaupt einen durchführt:

- **Stichprobengröße als Investitionsentscheidung.** Eine Beta mit 50 Nutzern und ein gestufter Rollout mit 5.000 Nutzern sind verschiedene „Studien" mit verschiedenen EVSIs und Kosten — EVSI erlaubt, sie auf derselben Basis zu vergleichen, statt standardmäßig zu denken „mehr Daten sind immer besser".
- **ENBS, nicht EVSI allein, ist der Beauftragungstest.** Eine Studie mit hohem EVSI, deren Kosten den größten Teil davon aufzehren, ist ein schwacher Vorschlag; die Entscheidungsregel ist der erwartete Nettonutzen der Stichprobe, genau wie ein Business Case den Nutzen gegen die Kosten verrechnet, statt nur den Nutzen zu nennen.
- **Abnehmende Erträge sind explizit.** Weil EVSI(n) mit `n/(n+n0)` steigt, verdoppelt eine doppelt so große Pilotstudie nie ihren Wert — eine formale Fassung des ingenieurtechnischen Instinkts, dass ein größeres Experiment einen abnehmenden Grenznutzen an Information hat.

## Fallstricke

- **Die Normalapproximation außerhalb ihrer Annahmen anwenden.** Sie gilt nur für annähernd konjugierte Unsicherheit bei einem einzelnen Parameter; ein wirklich nichtlineares oder mehrparametriges Entscheidungsmodell braucht vollständiges verschachteltes Monte Carlo, nicht diese Abkürzung.
- **EVSI nur mit den Barkosten vergleichen.** EVSI muss gegen die *vollen* Kosten der Studie abgewogen werden, einschließlich ihrer eigenen Entscheidungsverzögerungskosten — siehe [Verzögerungskosten](../verzögerungskosten/) —, nicht nur gegen die Rechnung der Studie.
- **EVSI > EVPI als echten Befund behandeln.** EVSI kann EVPI konstruktionsbedingt nie übersteigen; eine Berechnung, die das ergibt, ist ein Modellierungsfehler, keine Entdeckung.

## Quellen

- Ades AE, Lu G, Claxton K. „Expected value of sample information calculations in medical decision modeling." Medical Decision Making 2004;24(2):207-27.
- Willan AR, Pinto EM. „The value of information and optimal clinical trial design." Statistics in Medicine 2005;24(12):1791-806.
- Strong M, Oakley JE. „When is a model-based value of information analysis feasible?" Medical Decision Making 2014.
