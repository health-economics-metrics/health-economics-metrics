# Erwarteter Wert perfekter Information (EVPI)

EVPI ist der Höchstbetrag, den ein Entscheider zahlen sollte, um Unsicherheit vor einer Entscheidung zu beseitigen — der formale Preis für "lass uns erst eine Studie machen".

## Warum es wichtig ist

Gesundheitssysteme stehen ständig vor der Wahl: jetzt auf Basis unvollständiger Evidenz einführen oder erst weitere Forschung finanzieren. EVPI gibt der zweiten Option eine Zahl. Beträgt EVPI 50.000 £ und die vorgeschlagene Studie kostet 2 Millionen £, sollte man jetzt einführen. Beträgt EVPI 20 Millionen £, ist die Studie ein Schnäppchen. Dieselbe Frage — "sollten wir das erst pilotieren, bevor wir es ausrollen?" — stellt sich bei jeder Entscheidung über Unternehmenswerkzeuge, und fast niemand bepreist sie. Für die Bepreisung der Option, ein Projekt später zu erweitern, statt zuerst Information zu sammeln, siehe [Realoptionsbewertung](../realoptionsbewertung/).

## Die Mathematik

EVPI ist die Lücke zwischen einer Entscheidung mit perfekter Voraussicht und einer Entscheidung jetzt auf Basis von Erwartungswerten:

```
EVPI = E_θ[ max_j NMB(j, θ) ]  −  max_j E_θ[ NMB(j, θ) ]

θ        = unsichere Parameter (mit ihrer gemeinsamen Verteilung)
NMB(j,θ) = Nettomonetärer Nutzen der Option j gegeben θ
```

Erster Term: Durchschnitt des Ergebnisses der besten Wahl über jede mögliche Welt hinweg (man liegt immer richtig). Zweiter Term: Ergebnis der einzigen Option, die im Durchschnitt am besten ist (man muss sich jetzt festlegen). EVPI ≥ 0 gilt immer. Der Populations-EVPI wird mit der Zahl der betroffenen Entscheidungen multipliziert. Wird direkt aus [PSA](../probabilistische-sensitivitätsanalyse/)-Stichproben berechnet.

## Durchgerechnetes Beispiel

Einen KI-Dokumentationsassistenten für 5.000 Kliniker ausrollen oder nicht. Zwei Welten:

```
Welt A (p = 0,6): Assistent spart 20 Min./Tag → NMB des Rollouts = +8 Mio. £
Welt B (p = 0,4): Assistent spart ~0 (Workflow-Reibung) → NMB des Rollouts = −3 Mio. £
NMB von "nicht ausrollen" = 0 £ in beiden Welten.
```

Jetzt entscheiden: E[NMB Rollout] = 0,6 × 8 − 0,4 × 3 = **+3,6 Mio. £** → ausrollen.

Mit perfekter Information: in Welt A Rollout wählen (+8 Mio. £), in Welt B nichts tun (0 £). Erwartungswert = 0,6 × 8 + 0,4 × 0 = **4,8 Mio. £**.

```
EVPI = 4,8 Mio. − 3,6 Mio. = 1,2 Mio. £
```

Ein rigoroser dreimonatiger Pilot für 150.000 £, der weitgehend klärt, in welcher Welt man sich befindet, lohnt sich eindeutig — und jeder Pilot, der mehr als 1,2 Mio. £ kostet, lohnt sich nicht, wie gründlich er auch ist.

## Bezug zur Softwareentwicklung

EVPI ist die Ökonomie des Spikes, des Pilotprojekts, des A/B-Tests und des Proof-of-Concept. Daraus ergeben sich zwei praktische Regeln:

- **Ein Pilot lohnt sich nur, wenn die Entscheidung sich tatsächlich ändern könnte.** Würde man ohnehin ausrollen, egal wie der Pilot ausfällt, ist EVPI = 0 und der Pilot ist Theater.
- **Pilotausgaben auf EVPI begrenzen.** Der Wert von Information ist durch den Wert der Entscheidung begrenzt, die sie informiert.

Der partielle EVPI (EVPPI) erweitert dies auf einzelne Parameter: "Was ist es wert, speziell die Zahl der Zeitersparnis genau zu bestimmen?" — das sagt, was der Pilot messen sollte. Für die Bepreisung einer *konkreten* Studie, statt alle Unsicherheit zu beseitigen, siehe [EVSI](../erwarteter-wert-von-stichprobeninformation/).

## Fallstricke

- **Piloten ohne angeschlossene Entscheidungsregel durchführen** — Information, die die Wahl nicht ändern kann, ist per Definition wertlos.
- **Die Verzögerungskosten der Informationsbeschaffung ignorieren**: Ein sechsmonatiger Pilot verzögert sechs Monate Nutzen ([Verzögerungskosten](../verzögerungskosten/)); der Nettowert des Piloten = aufgelöster EVPI − Verzögerungskosten − Pilotkosten.
- **EVPI als Prognose behandeln.** Er ist eine Obergrenze für den Wert von Information, keine Schätzung dessen, was eine konkrete Studie liefern wird.

## Quellen

- Claxton K. "Exploring uncertainty in cost-effectiveness analysis." PharmacoEconomics 2008. <https://pubmed.ncbi.nlm.nih.gov/18279550/>
- York Health Economics Consortium glossary: EVPI. <https://yhec.co.uk/glossary/expected-value-of-perfect-information-evpi/>
