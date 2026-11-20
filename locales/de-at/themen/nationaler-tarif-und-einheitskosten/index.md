# Nationaler Tarif und Einheitskosten

Der NHS bezahlt Leistungserbringer für Tätigkeit nach einer regelbasierten nationalen Preisliste — historisch der National Tariff / Payment by Results, seit dem 1. April 2023 abgelöst durch das **NHS Payment Scheme (NHSPS)**. Hinter den Preisen steht eine nationale Einheitskosten-Infrastruktur: die **National Cost Collection (NCC)** und der Kompendium **PSSRU Unit Costs of Health and Social Care**.

## Warum es wichtig ist

Das sind die Nenner jedes glaubwürdigen NHS-Business-Case. Wenn eine Behauptung sagt "ein ambulanter Termin ist 160 £ wert" oder "eine Pflegestunde der Band 6 kostet 31 £", stammen diese Zahlen aus dieser Infrastruktur — und die offiziellen Zahlen statt erfundener zu verwenden ist es, was unabhängige Evaluationen vergleichbar und Finanzteams kooperativ macht. Für einen Anbieter definiert der Tarif auch die *Erlös*-Seite: Tätigkeit, die Ihre Software ermöglicht (zusätzliche Kliniken, neu belegte Betten), wird zu Schema-Preisen bewertet.

## Die Mathematik

```
Tarifpreis pro Tätigkeitseinheit (HRG-kodierter Fall, ambulanter Termin)
  = nationale durchschnittliche Einheitskosten (aus NCC) × Market Forces Factor
    (lokale Anpassung)
  unter NHSPS: gemischte Fest- + variable ("aligned payment and incentive") Elemente

NCC-Einheitskosten = vom Trust gemeldete Gesamtkosten eines Tätigkeitstyps
                     / Tätigkeitsvolumen
                     (aufgebaut auf Patient-Level Information and Costing
                     Systems, PLICS)

PSSRU-Kompendium: ~80 Standard-Einheitskosten (Hausarztkonsultation,
Pflegestunde nach Band, ED-Besuch …) — die Standardquelle in
britischen ökonomischen Evaluationen.
```

## Durchgerechnetes Beispiel

Ihre Software setzt 1 Stunde/Tag Zeit einer Band-6-Pflegekraft in einem 250-Tage-Arbeitsjahr frei:

```
PSSRU-basierte Band-6-Kosten inkl. Gemeinkosten ≈ 31 £/Stunde
(aktuelle Ausgabe prüfen)
Kapazitätswert = 250 × 31 £ = 7.750 £/Pflegekraft/Jahr (nicht zahlungswirksam)
```

Alternativ führt die Pflegekraft 2 zusätzliche ambulante Nachsorgetermine/Tag zu ~160 £ Schema-Wert durch: 500 × 160 £ = **80.000 £/Jahr finanzierte Tätigkeit** — ein zehnfacher Unterschied im behaupteten Wert, je nach Umeinsatz, alles aus offiziellen Einheitskosten. Beide Behauptungen sind prüfbar, weil die Nenner veröffentlicht sind; genau darum geht es.

## Bezug zur Softwareentwicklung

Das ist das Muster des **internen Preisbuchs**. Britische Gesundheitsökonomie funktioniert, weil jede Evaluation dieselben veröffentlichten Einheitskosten verwendet; Entwicklungsorganisationen fehlt das meist, sodass jeder Business Case seine eigenen Kosten für eine Entwicklerstunde, einen Vorfall, ein Deployment erfindet. Ein Plattformteam kann genau so ein Buch veröffentlichen — Vollkosten pro Entwicklerstunde nach Level, pro Vorfall nach Schweregrad, pro Build-Minute — und dessen Verwendung in allen Vorschlägen verlangen. Verrechnungs-/Showback-Systeme reproduzieren auch die bekannten Fehlermodi des Tarifs: Durchschnittskostenpreise treiben Volumen-Manipulation, Festbeträge treiben Unterversorgung. Die Entwicklung des NHSPS von reiner Tätigkeitsvergütung zu gemischt fest+variabel sind zwanzig Jahre Lehren im Anreizdesign für interne Plattformpreise.

## Fallstricke

- **Veraltete Zahlen**: NCC-, PSSRU- und NHSPS-Preise werden jährlich aktualisiert — jede Zahl datieren.
- **Tarifpreis ≠ Kosten**: Preise sind nationale Durchschnittswerte mit Anpassungen; Ihre lokalen Grenzkosten weichen ab (siehe [Grenzkosten vs. Durchschnittskosten](../grenzkosten-vs-durchschnittskosten/)).
- **Kapazität zum Tarif bewerten** ohne Mechanismus, die zusätzliche Tätigkeit tatsächlich zu erbringen und dafür bezahlt zu werden.

## Quellen

- NHS England, NHS Payment Scheme. <https://www.england.nhs.uk/pay-syst/national-tariff/national-tariff-payment-system/>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- PSSRU, Unit Costs of Health and Social Care. <https://www.pssru.ac.uk/unitcostsreport/>
