# Kosten-Nutzen-Analyse (CBA)

Die CBA bewertet sowohl Kosten *als auch* Ergebnisse in Geld. Sie ist die einzige Analyseart, die "lohnt sich das überhaupt?" beantworten kann — nicht nur "welche Option ist die beste?" —, weil monetarisierter Nutzen direkt mit den Kosten verglichen werden kann.

## Warum es wichtig ist

Die CBA ist der Standard des britischen Finanzministeriums (HM Treasury) im **Green Book** für die Bewertung sämtlicher öffentlicher Ausgaben, auch im Gesundheitswesen, sofern Ergebnisse monetarisierbar sind. Wo [CEA](../kosten-effektivitäts-analyse/)/[CUA](../kosten-nutzwert-analyse/) bei "Kosten pro Gesundheitseinheit" haltmachen, bepreist die CBA die Gesundheit selbst (QALY × Schwellenwert) und alles Weitere — Zeit, Fahrtwege, CO₂ — und berichtet eine einzige Nettozahl. Jeder vollständige digitale NHS-Business-Case enthält einen ökonomischen Fall im CBA-Format.

## Die Mathematik

```
NPV (gesellschaftlicher Nettobarwert) = Σ_t [ (Nutzen_t − Kosten_t) / (1 + r)^t ]
BCR (Nutzen-Kosten-Verhältnis)        = PV(Nutzen) / PV(Kosten)

Annehmen, wenn NPV > 0 (gleichwertig BCR > 1); nach NPV ordnen, nicht nach BCR.
r = 3,5 % (soziale Zeitpräferenzrate des Green Book)
```

Gesundheitseffekte können monetarisiert als QALYs × λ eingehen (siehe [Zahlungsbereitschaftsschwellen](../zahlungsbereitschaftsschwellen/)). Das Green Book schreibt zudem **Optimismus-Bias-Anpassungen** vor — Kostenschätzungen werden evidenzbasiert nach oben, Nutzen nach unten korrigiert, weil Bewertungen systematisch zu rosig ausfallen.

## Durchgerechnetes Beispiel

Ein E-Überweisungssystem, 5-Jahres-Horizont, 3,5 % Diskontsatz:

```
Kosten:  Aufbau 1,2 Mio. £ (Jahr 0), Betrieb 300.000 £/Jahr (Jahre 1–5)
Nutzen:  Verwaltungseinsparungen 250.000 £/Jahr, vermiedene Doppeldiagnostik 280.000 £/Jahr,
         gesparte Patientenzeit 40.000 Std./Jahr × 15 £ = 600.000 £/Jahr → 1.130.000 £/Jahr

PV Kosten  = 1.200.000 + 300.000 × 4,515 (Annuitätsfaktor) = 2.555.000 £
PV Nutzen  = 1.130.000 × 4,515                              = 5.102.000 £

NPV = 5.102.000 − 2.555.000 = +2.547.000 £     BCR = 2,0
```

Wendet man den Green-Book-Optimismus-Bias an (etwa +40 % auf Aufbaukosten, −20 % auf den Nutzen): PV Kosten ≈ 3.035.000 £, PV Nutzen ≈ 4.082.000 £, NPV ≈ **+1.047.000 £** — immer noch positiv, was genau der Sinn der Anpassung ist: Fälle sollten ihren eigenen Optimismus überstehen.

## Bezug zur Softwareentwicklung

Business Cases in der Softwareentwicklung sind informelle CBAs. Diese Green-Book-Erweiterungen lohnen sich zu übernehmen:

- **Optimismus-Bias als Standardaufschlag** — Entwickler unterschätzen Migrationskosten genauso zuverlässig, wie Ministerien Infrastrukturkosten unterschätzen; einen benannten Aufschlag anwenden, statt vorzugeben, diesmal sei es anders.
- **Den dominanten Nutzen ehrlich monetarisieren oder gar nicht** — Patienten-/Nutzerzeit wird zu vertretbaren Sätzen monetarisiert; "Markenwert" wird es nicht.
- **NPV ordnet, BCR nicht**: Ein winziges Projekt mit BCR 5 kann weniger bedeuten als ein großes mit BCR 1,6.

## Fallstricke

- **Das Nicht-Monetarisierbare monetarisieren**, um Nutzen aufzublähen (Moral, "strategische Ausrichtung") — das qualitativ belassen, gemäß [Kosten-Konsequenzen-Analyse](../kosten-konsequenzen-analyse/).
- **Transfers als Nutzen zählen**: Geld, das zwischen öffentlichen Stellen wandert, saldiert sich aus gesellschaftlicher [Perspektive](../analyseperspektive/) zu null.
- **Kein Kontrafaktisches**: Nutzen wird gegen die Minimalmaßnahme-Option gemessen, nicht gegen null.

## Quellen

- HM Treasury, The Green Book. <https://www.gov.uk/government/publications/the-green-book-appraisal-and-evaluation-in-central-government/the-green-book-2020>
- Green Book discounting guidance. <https://www.gov.uk/government/publications/green-book-supplementary-guidance-discounting>
