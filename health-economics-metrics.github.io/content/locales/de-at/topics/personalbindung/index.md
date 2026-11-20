# Personalbindung

Die Ökonomie der Personalbindung beziffert, was Personalfluktuation ein Gesundheitssystem kostet — Rekrutierung, Einarbeitung, Vakanzabdeckung — und damit, was Software wert ist, die administrativen Burnout verringert. Burnout durch sich wiederholende administrative Datenaufgaben ist ein Haupttreiber von Personalfluktuation und Krankheitsausfall im NHS.

## Warum es wichtig ist

Verlässt ein Kliniker die Einrichtung, zahlt der Trust dreifach: für die Rekrutierung eines Ersatzes (Anzeigen, Vermittlungsgebühren, Interviews), für die Einarbeitung (Monate reduzierter Produktivität, Aufsicht), und für die Abdeckung der Vakanz in der Zwischenzeit — typischerweise mit Zeitarbeits- oder Honorarpersonal zu 2–3-fachen regulären Agenda-for-Change-Sätzen (siehe [vermeidbare Outsourcing-Kosten](../vermeidbare-outsourcing-kosten/) und [harte zahlungswirksame Einsparungen](../harte-zahlungswirksame-einsparungen/)). Weil Fluktuationskosten echtes Bargeld sind, gehören Bindungsverbesserungen zu den wenigen Personalnutzen, die ein Finanzdirektor verbuchen kann. Administrative Reibung wird durchgängig als einer der Haupttreiber klinischen Burnouts genannt, was sie zu einer softwareseitig angehbaren Kostenquelle macht.

## Die Mathematik

```
Kosten pro Abgang = Rekrutierungskosten + Einarbeitungs-/Produktivitätsrampe
                    + Vakanzabdeckungsaufschlag × Vakanzdauer

Jährliche Fluktuationskosten = Personalstand × Fluktuationsrate × Kosten pro Abgang

Wert der Software = Personalstand × ΔFluktuationsrate × Kosten pro Abgang
                    + Reduktion Krankheitsausfall × Abdeckungskosten/Tag
```

Die kausale Kette hat zwei geschätzte Glieder — Software → Burnout/Reibung, und Burnout → Fluktuation — also beide belegen (Personalbefragungen vorher/nachher; veröffentlichte Burnout-Fluktuations-Zusammenhänge) und das behauptete Δ bescheiden halten.

## Durchgerechnetes Beispiel

Ein Trust beschäftigt 1.200 Pflegekräfte; Fluktuation 11 %/Jahr. Kosten pro Abgang:

```
Rekrutierung ≈ 4.500 £;  Einarbeitung/Rampe ≈ 6.000 £
Vakanzabdeckung: 4 Monate × 0,6 VZÄ, abgedeckt mit Zeitarbeitsaufschlag ≈ 8.000 £
Gesamt ≈ 18.500 £ pro Abgang
Basis-Fluktuationskosten = 1.200 × 0,11 × 18.500 ≈ 2,44 Mio. £/Jahr
```

Software gegen Dokumentationslast (automatisch ausgefüllte Beurteilungen, Single Sign-on, Diktat) bewegt die Fluktuation plausibel um 1 Prozentpunkt:

```
Wert = 1.200 × 0,01 × 18.500 = 222.000 £/Jahr bargeldrelevant
```

Eine Behauptung von 1 Punkt, gestützt durch Reibungswerte aus Personalbefragungen, ist glaubwürdig; eine Behauptung von 4 Punkten nicht. Den [Tornado](../sensitivitätsanalyse/) auf ΔFluktuation laufen lassen: Er dominiert alles andere im Modell.

## Bezug zur Softwareentwicklung

Die Bindungsrechnung in der Softwareentwicklung ist identisch und schlechter dokumentiert: Der Ersatz eines Senior-Entwicklers kostet 6–12 Monate Vollkostengehalt (Rekrutierung, Einarbeitung, verlorener Kontext), sodass eine Organisation mit 200 Personen bei 15 % Fluktuation jährlich Millionen an Abwanderung verbrennt. Investitionen in Developer Experience ([SPACE und DevEx](../space-und-devex/)) sind das direkte Analogon zur Entlastung von Dokumentationslast bei Pflegekräften — und sollten genauso begründet werden: gemessene Reibungswerte, ein bescheiden behaupteter Effekt auf die Fluktuation, Kosten pro Abgang aus den eigenen Finanzdaten. Die zu übernehmende gesundheitsökonomische Disziplin ist, *den Abgang ehrlich zu bepreisen*, statt darüber zu streiten, ob Menschen "wirklich" wegen Tooling gehen.

## Fallstricke

- **Die gesamte Fluktuationsbewegung der eigenen Intervention zuschreiben** — Arbeitsmärkte bewegen Fluktuation weit mehr als Software; Kontrollgruppen oder zumindest eine Branchentrend-Bereinigung verwenden.
- **Doppelzählung**: Bindungseinsparungen und Zeitarbeits-Einsparungen überschneiden sich (Vakanzabdeckung *ist* Zeitarbeitsausgabe); die Zeilen abgleichen.
- **Die Verzögerung ignorieren**: burnoutbedingte Fluktuation reagiert über 1–2 Jahre auf Reibungsänderungen, nicht im nächsten Quartal.

## Quellen

- NHS England, reducing agency spend. <https://www.england.nhs.uk/long-read/reducing-agency-spend-in-the-nhs/>
- NHS Staff Survey (burnout and intention-to-leave data). <https://www.nhsstaffsurveys.com/>
