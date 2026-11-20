# Überweisung zur Behandlung (RTT)

Referral to Treatment ist die verstrichene Zeit von der hausärztlichen Überweisung bis zum Beginn der fachärztlich geleiteten Behandlung. Die NHS-Verfassung setzt den Standard: **92 % der Patienten sollten die Behandlung innerhalb von 18 Wochen beginnen**. RTT ist die politisch sichtbarste operative Kennzahl im englischen NHS.

## Warum es wichtig ist

Trusts, die RTT-Ziele verfehlen, sehen sich aufsichtsrechtlicher Prüfung, Eingriffen und Reputationsschäden gegenüber; die nationale Warteliste ist eine Titelseiten-Zahl. Jede Woche, die ein Patient wartet, ist verlorene Gesundheit (Warten in schlechterem Gesundheitszustand — siehe die QALY-Rechnung unten) und oft zusätzliche Kosten (Erkrankungen verschlechtern sich; siehe [Frühintervention](../frühintervention/)). Software, die irgendwo im Überweisungs-zur-Behandlung-Pfad Zeit spart — Triage, Diagnostik-Durchlaufzeit, Klinikkapazität, Terminplanung — mildert direkt die operativen und finanziellen Folgen des Verfehlens des Standards, weshalb die RTT-Wirkung eine erstklassige Nutzenzeile in digitalen NHS-Business-Cases ist.

## Die Mathematik

```
RTT-Leistung = innerhalb 18 Wochen behandelte Patienten / insgesamt behandelte × 100
Gesundheitskosten der Wartezeit pro Patient = Wartedauer × (Nutzwert_behandelt − Nutzwert_wartend)

Pfad-Sicht: RTT = Σ Phasendauern (Überweisungs-Triage → Ersttermin →
Diagnostik → Entscheidung → Behandlung) — die längste Warteschlange
verbessern, nicht die geschäftigste Phase (siehe flow-metrics.md).
```

## Durchgerechnetes Beispiel

Eine Fachrichtung behandelt 5.000 Pfad-Patienten/Jahr; mittlere Wartezeit 24 Wochen; Nutzwert im Warten 0,68 gegenüber 0,80 behandelt.

Digitale Triage plus Direkt-zum-Test-Protokolle entfernen 5 Wochen reines Warten:

```
QALY-Gewinn = 5.000 × (5/52) × (0,80 − 0,68) = 57,7 QALYs/Jahr
Monetarisiert bei 20.000–30.000 £/QALY (siehe willingness-to-pay-thresholds.md):
  ≈ 1,15–1,73 Mio. £/Jahr Gesundheitswert
```

— zuzüglich wechselt der Trust von Zielverfehlung zu Zielerfüllung des 18-Wochen-Standards, was einen Governance-Wert hat, den keine Tabelle vollständig erfasst.

## Bezug zur Softwareentwicklung

RTT ist eine **Durchlaufzeit-Kennzahl über eine mehrstufige Warteschlange** — die Krankenhausversion der Lead-Time von Commit bis Produktion (siehe [DORA-Metriken](../dora-metriken/)). Die Verbesserungsmethode ist identisch: jede Phase instrumentieren, herausfinden, wo sich Kalenderzeit staut (es sind fast immer Übergaben und Warteschlangen, nicht klinische Arbeit), und Wartezustände beseitigen. Typische Software-Erfolge: E-Triage, die Überweisungen in Stunden statt in wöchentlichen Stapeln weiterleitet, Push von Diagnostikergebnissen statt Nachsorgetermine, und automatisierte Direkt-zum-Test-Kriterien. Die Verbesserung mit [Verzögerungskosten](../verzögerungskosten/), beziffert in QALYs/Woche, bewerten.

## Fallstricke

- **Eine Phase verbessern, die nicht der Engpass ist** — kürzere Ersttermin-Wartezeiten, während Diagnostik-Warteschlangen wachsen, verschiebt nur den Stau.
- **Manipulation**: Pfad-Rücksetzungen und Uhr-Pausen können die berichtete RTT verbessern, ohne jemanden früher zu behandeln; die zugrunde liegende Verteilung prüfen.
- **Die gesamte Pfadverbesserung für ein Tool beanspruchen**, wenn mehrere Änderungen gemeinsam eingeführt wurden — Zurechnung braucht eine Vergleichsgruppe.

## Quellen

- NHS England, RTT waiting times statistics. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
