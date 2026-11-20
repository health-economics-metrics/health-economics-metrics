# Wiederaufnahmerate

Die 30-Tage-Wiederaufnahmerate ist der Prozentsatz entlassener Patienten, die innerhalb von 30 Tagen als Notfall zurückkehren. Sie ist die kanonische *Entlassungsqualitäts*-Kennzahl des Gesundheitssystems — und sie trägt direkte finanzielle Sanktionen.

## Warum es wichtig ist

Eine Wiederaufnahme bedeutet, dass die erste Entlassung nicht gehalten hat: vorzeitige Entlassung, gescheiterte Medikamentenübergabe, keine Nachsorge oder fehlende soziale Unterstützung. Kostenträger sanktionieren das explizit — das US-amerikanische Hospital Readmissions Reduction Program kürzt bis zu 3 % der Medicare-Zahlungen eines Krankenhauses; der NHS hat historisch nicht für vermeidbare 30-Tage-Notfall-Wiederaufnahmen bezahlt. Wiederaufnahme-Vermeidung ist damit eine der wenigen Nutzenkategorien, die für einen Leistungserbringer *direkt* bargeldrelevant ist, nicht nur Kapazität.

## Die Mathematik

```
Wiederaufnahmerate = Notfall-Wiederaufnahmen innerhalb 30 Tagen / Index-Entlassungen × 100

Risikostandardisierte Vergleiche bereinigen für Fallmix; Sanktionsprogramme
vergleichen Beobachtetes vs. Erwartetes für vergleichbare Krankenhäuser.

Wert der Vermeidung = vermiedene Wiederaufnahmen × (Kosten pro
                      Wiederaufnahmefall + Sanktionsrisiko pro Wiederaufnahme)
```

## Durchgerechnetes Beispiel

Eine App zur Entlassungsunterstützung bei Herzinsuffizienz (Symptomverfolgung, Gewichtsalarme, Medikamentenerinnerungen, Eskalation an Pflegekräfte): 2.000 Entlassungen/Jahr, Basis-Wiederaufnahmerate 18 %, die Studie zeigt 14 % mit der App.

```
Vermiedene Wiederaufnahmen = 2.000 × (0,18 − 0,14) = 80/Jahr
Kosten pro Wiederaufnahmefall ≈ 3.500 £ → 280.000 £/Jahr vermiedene Behandlungskosten
Zuzüglich Sanktions-/Nichtzahlungsrisiko bei diesen Fällen.
App-Kosten: 2.000 × 60 £ = 120.000 £/Jahr

Netto ≈ +160.000 £/Jahr, noch vor jeder QALY-Behauptung für vermiedene Verschlechterung.
```

Die zu verteidigende Zahl ist der Effekt von 4 Prozentpunkten: Er muss aus einem kontrollierten Vergleich stammen, weil Wiederaufnahmeraten mit Fallmix und Saison schwanken.

## Bezug zur Softwareentwicklung

Wiederaufnahme ist die **Change-Failure-Rate** des Gesundheitssystems (siehe [DORA-Metriken](../dora-metriken/)): Arbeit, die "ausgeliefert" wurde und innerhalb von 30 Tagen zurückprallt. Die Analogien reichen tief — wiedereröffnete Tickets und Regressions-Vorfälle zeigen schlechte "Entlassungsqualität" (schwache Verifikation, vorzeitiger Abschluss, fehlende Übergabedokumentation); eine Sanktions-artige Buchhaltung (das reparierende Team zahlt, nicht das empfangende) ändert Verhalten; und beide Felder haben dieselbe Lehre gezogen: rohen Durchsatz zu erhöhen (schnellere Entlassung, schnelleres Ausliefern), ohne in die Übergabe zu investieren, verwandelt sichtbare Warteschlangen einfach in unsichtbare Nacharbeit. Eine "30-Tage-Wiedereröffnungsrate" gehört auf jedes Team-Dashboard, das Zykluszeit feiert.

## Fallstricke

- **Manipulation durch Umkodierung**: Wiederaufnahmen als Beobachtungsaufenthalte oder neue Erkrankungen kodiert; die Definition prüfen.
- **Alle Ursachen vs. zusammenhängende Ursache**: 30-Tage-all-cause schließt echt unabhängige Ereignisse ein; Sanktionen nutzen meist all-cause, genau weil "zusammenhängend" manipulierbar ist.
- **Fallmix-Blindheit**: Ein Krankenhaus, das kränkere, ärmere Bevölkerungsgruppen versorgt, nimmt aus Gründen häufiger wieder auf, die keine App behebt — vor dem Vergleich risikoadjustieren.

## Quellen

- CMS, Hospital Readmissions Reduction Program. <https://www.cms.gov/medicare/payment/prospective-payment-systems/acute-inpatient-pps/hospital-readmissions-reduction-program-hrrp>
- NHS Digital, emergency readmissions statistics. <https://digital.nhs.uk/data-and-information/publications/statistical/compendium-emergency-readmissions>
