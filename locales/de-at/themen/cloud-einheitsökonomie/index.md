# Cloud-Einheitsökonomie (FinOps)

Cloud-Einheitsökonomie übersetzt rohe Cloud-Ausgaben in **Kosten pro Outputeinheit** — pro Kunde, pro Transaktion, pro gelöstem Fall, pro Token. Das ist die FinOps-Fähigkeit, die aus "unsere AWS-Rechnung beträgt 400.000 £/Monat" macht: "einen Patienten zu versorgen kostet 0,83 £".

## Warum es wichtig ist

Gesamtausgabenzahlen können die Fragen nicht beantworten, die zählen: Wird das Produkt effizienter oder ineffizienter? Verbessert oder zerstört Wachstum die Marge? Was sollten wir berechnen? Einheitskosten beantworten alle drei. Speziell für die digitale Gesundheit *ist* "Kosten pro gelöstem Fall" eine Einheitskosten-Kennzahl des Gesundheitsdienstes — direkt vergleichbar mit den Zahlen der [National Cost Collection](../nationaler-tarif-und-einheitskosten/), die ein Commissioner für jeden anderen Dienst verwendet, was es zur natürlichen Sprache macht, um digitale Pfade gegen traditionelle zu bepreisen.

## Die Mathematik

```
Einheitskosten = zugeordnete Gesamtkosten (inkl. geteilte/Plattformkosten)
                / gelieferte Einheiten

Zwei Familien:
  Ressourceneffizienz-Einheiten: Kosten/GB gespeichert, Kosten/vCPU-Stunde,
                                 Kosten/Token, Kosten/Build-Minute
  Geschäftseinheiten:            Kosten/Kunde, Kosten/Transaktion,
                                 Kosten/Konsultation, Kosten/gelöstem Fall

Die Grenz-vs.-Durchschnitts-Disziplin gilt (marginal-vs-average-cost.md):
gebundene/reservierte Ausgaben machen Grenzeinheitskosten ≈ 0 bis zum
nächsten Verpflichtungsschritt — Ausweitungsentscheidungen zu Grenzkosten
bepreisen, Effizienztrends zu Durchschnittskosten.
```

## Durchgerechnetes Beispiel

Ein digitaler Triage-Dienst: Cloud-Ausgaben 62.000 £/Monat (Rechenleistung 30.000 £, Daten 18.000 £, Zuordnung geteilter Plattform 14.000 £), bearbeitet 380.000 Triage-Episoden/Monat:

```
Durchschnittskosten pro Episode = 62.000 / 380.000 ≈ 0,163 £

Commissioner-Vergleich: telefonische Triage ≈ 8–12 £/Anruf, Hausarzt-
konsultation ≈ 42 £
→ die digitale Episode läuft bei ~2 % der günstigsten menschlichen
Alternative — die Kanalverlagerungs-Ökonomie aus gds-service-metrics.md,
von der Kostenseite.

Trendprüfung: letztes Jahr 0,21 £/Episode bei 240.000 Episoden →
verbesserte Skaleneffekte (fixe Plattformkosten amortisieren sich),
eine Schlagzeile im QBR wert.
```

## Bezug zur Softwareentwicklung

Einheitsökonomie ist dort, wo Entwicklungsentscheidungen für die Finanzabteilung lesbar werden: eine Architektur, die die Kosten pro Episode halbiert, ist ein Preisvorteil; eine, die superlinear skaliert, ist eine Zeitbombe, sichtbar nur in dieser Kennzahl. Praktiken, die sich aus der Gesundheitskostenrechnung übertragen: **die Zuordnungsregeln veröffentlichen** (geteilte Kosten verzerrten Pro-Einheit-Zahlen, bis PLICS die Kostenrechnung auf Patientenebene standardisierte — Ihre Plattformkosten-Zuordnung braucht dieselbe Strenge); **Einheiten wählen, in denen der Käufer denkt** (Commissioner kaufen Episoden, keine vCPUs); und Einheitskosten in jedes [ICER](../inkrementelles-kosten-effektivitäts-verhältnis/)- und [Budget-Impact](../budget-impact-analyse/)-Modell als maßgeblichen Kostennenner einspeisen. Für KI-Features ist die Einheit das Token — siehe [Einheitsökonomie der Inferenz](../einheitsökonomie-der-inferenz/).

## Fallstricke

- **Geteilte Kosten ignorieren**: Einheitskosten ohne Plattform-/Sicherheits-/Bereitschaftsdienst-Zuordnungen unterschätzen um 30–50 % und brechen bei einer Prüfung zusammen.
- **Eitle Nenner**: "Kosten pro API-Aufruf" schmeichelt; "Kosten pro abgeschlossener Patientenepisode" informiert.
- **Durchschnittskostenpreise für Grenzentscheidungen**: Teams für Nutzung, die grenzwertig kostenlos ist, Durchschnittseinheitskosten zu berechnen, treibt Verschwendungsvermeidungs-Theater an (siehe [nationaler Tarif](../nationaler-tarif-und-einheitskosten/) für die NHS-Version dieses Anreizfehlers).

## Quellen

- FinOps Foundation, unit economics. <https://www.finops.org/framework/capabilities/unit-economics/>
- FinOps Foundation, introduction to cloud unit economics. <https://www.finops.org/wg/introduction-cloud-unit-economics/>
