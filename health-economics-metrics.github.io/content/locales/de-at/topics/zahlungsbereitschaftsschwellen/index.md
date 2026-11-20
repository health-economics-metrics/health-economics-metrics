# Zahlungsbereitschaftsschwellen

Eine Zahlungsbereitschaftsschwelle (Willingness-to-Pay, WTP) ist der Höchstbetrag, den ein Entscheider pro Einheit Gesundheitsgewinn zu zahlen bereit ist — die Linie, die einen [ICER](../inkrementelles-kosten-effektivitäts-verhältnis/) in eine Annahme-/Ablehnungsentscheidung verwandelt.

## Warum es wichtig ist

Der Schwellenwert ist dort, wo Gesundheitsökonomie aufhört, Messung zu sein, und zu Politik wird. Jedes nationale System hat einen, ob explizit oder implizit, und die lokale Zahl zu kennen sagt genau, wie man eine Gesundheitswert-Behauptung bepreist:

| Institution | Schwellenwert (Stand der Forschung, 2024–2025) |
|---|---|
| NICE (England) | 20.000–30.000 £ pro QALY; empirischer durchschnittlicher Entscheidungsschwellenwert ≈ 24.400 £ (2022–24); Schweregrad-Modifikatoren heben die effektive Obergrenze auf ~36.000–51.000 £ an; hochspezialisierte Technologien bis über 100.000 £ |
| ICER (USA, nichtstaatlich) | Preisreferenzwerte von 100.000–150.000 $ pro QALY/evLYG; berichtet einen Bereich von 50.000–200.000 $ |
| Kanada (CADTH / CDA-AMC) | Arbeitsschwellenwert ≈ 50.000 CAD$ pro QALY |
| WHO-CHOICE (historisch, global) | 1–3-faches BIP pro Kopf pro vermiedenem DALY (inzwischen als zu grob abgeraten) |
| Empirische britische Angebotsseite (Claxton et al.) | ≈ 13.000 £ pro tatsächlich am NHS-Rand verdrängtem QALY |

## Die Mathematik

Der Schwellenwert λ geht in jede Entscheidungsregel ein:

```
Annehmen, wenn ICER = ΔK/ΔE < λ
Gleichwertig: annehmen, wenn NMB = λ×ΔE − ΔK > 0
```

Zwei Theorien darüber, was λ *ist*:

- **Nachfrageseite**: was die Gesellschaft für Gesundheit zu zahlen bereit ist (ein Werturteil).
- **Angebotsseite**: die Gesundheit, die das Budget derzeit am Rand erzeugt (eine empirische Größe — Claxtons ~13.000 £/QALY). Übersteigt das für Entscheidungen verwendete λ die Angebotsseiten-Rate, verdrängt die Zulassung neuer Technologien mehr Gesundheit, als sie hinzufügt.

## Durchgerechnetes Beispiel

Ihr digitales Therapeutikum erzeugt 0,05 QALYs pro behandeltem Patienten bei Nettokosten (Preis minus Ausgleiche) von 800 £.

```
ICER = 800 / 0,05 = 16.000 £ pro QALY
```

- England: unter 20.000 £ → finanzierbar. Maximal vertretbarer Preis: bei λ = 20.000 £, Preis_max = 0,05 × 20.000 + Ausgleiche = 1.000 £ + Ausgleiche.
- US-amerikanischer kommerzieller Rahmen bei 150.000 $/QALY: der wertbasierte Preis liegt weit höher.
- Ein Land mit BIP-pro-Kopf-Schwellenwert von 4.000 $: dasselbe Produkt darf netto nur unter ~200 $ kosten.

Dasselbe Produkt, drei Märkte, drei Preise — der Schwellenwert *ist* das Preismodell. Das ist wertbasierte Preisgestaltung, rückwärts von λ ausgeführt.

## Bezug zur Softwareentwicklung

Jede Entwicklungsorganisation hat ein implizites λ: die Hürde, ab der sie Tools pro gesparter Entwicklerstunde finanziert. Sie explizit zu machen — "wir finanzieren alles unter 40 £ pro glaubwürdig gesparter Entwicklerstunde" — ermöglicht einen Ranglisten-Vergleich von Plattforminvestitionen, genau wie Kosten-pro-QALY-Ranglisten Gesundheitsausgaben ordnen. Auch die Angebotsseiten-Lehre überträgt sich: Ihr wahres internes λ ist das, was Ihr *aktueller* Rückstand am Rand erzeugt, nicht das, was die Führung sagt, Zeit sei wert.

## Fallstricke

- **Schwellenwert-Shopping** über Rechtsordnungen hinweg oder das Zitieren der HST-Obergrenze für ein gewöhnliches Produkt.
- **λ als Preisuntergrenze behandeln**: den Schwellenwert zu unterschreiten ist notwendig, nicht hinreichend — der [Budget-Impact](../budget-impact-analyse/) kann ein pro Einheit erschwingliches Produkt trotzdem versenken.
- **Ignorieren, dass sich Schwellenwerte bewegen**: NICEs Schweregrad-Modifikatoren (2022) und periodische Überprüfungen ändern das effektive λ; Behauptungen datieren.
- **Einen ICER ohne vorherige Umrechnung mit einer Schwelle in anderer Währung vergleichen**: siehe [währungsübergreifender ICER-Vergleich](../währungsübergreifender-icer-vergleich/) — die Umrechnungsmethode (Kaufkraftparität vs. Marktwechselkurs) ist methodisch folgenreich, kein Rundungsdetail.
- **λ-basierte Bewertung mit der arbeitsmarktbasierten VSL/VPF-Tradition vermengen**: Sie stammen aus verschiedenen theoretischen Traditionen (budgetbeschränkte Gesundheitsmethodik vs. aus Lohn-Risiko-Abwägungen offenbarte Präferenz) und lassen sich nicht immer in Einklang bringen — zum alternativen Ansatz der offenbarten Präferenz bei der Bewertung des Lebens siehe [Wert eines statistischen Lebens](../wert-eines-statistischen-lebens/).

## Quellen

- NICE: changes to cost-effectiveness thresholds. <https://www.nice.org.uk/news/articles/changes-to-nice-s-cost-effectiveness-thresholds-confirmed>
- Empirical NICE threshold analysis, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- Claxton K, et al. HTA 2015;19(14). <https://www.journalslibrary.nihr.ac.uk/hta/hta19140/>
- ICER 2023 Value Assessment Framework. <https://icer.org/wp-content/uploads/2023/09/ICER_2023_VAF_For-Publication_092523.pdf>
