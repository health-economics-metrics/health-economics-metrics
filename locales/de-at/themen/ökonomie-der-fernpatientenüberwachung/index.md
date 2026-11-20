# Ökonomie der Fernpatientenüberwachung

Die Erstattungs- und Kostenausgleichs-Ökonomie der Überwachung von Patienten zu Hause: in den USA ein definierter CPT-Code-Erlösstapel; in nationalen Gesundheitsdiensten Einweisungsvermeidungs- und virtuelle-Stations-Ökonomie bis zur vollständigen **Hospital-at-Home**-Substitution.

## Warum es wichtig ist

RPM ist dort, wo Gerätedaten abrechenbare Gesundheitsversorgung werden. Die US-Medicare-Struktur (nationale Durchschnittswerte 2025) ist ungewöhnlich explizit:

```
99453  Einrichtung & Patientenschulung    ~19,73 $  einmalig (nach 16 Tagen Daten)
99454  Gerätebereitstellung + Übertragung ~43,03 $  je 30 Tage — ERFORDERT ≥16 Tage
                                                     Messwerte in den 30
99457  erste 20 Min./Monat Management     ~47,87 $  erfordert ≥20 protokollierte Minuten
99458  jede weitere 20 Min.               ~38,49 $
```

Ein compliant-Patientenmonat summiert sich auf grob **90–130 $ PMPM**. Auf der Kostenausgleichsseite zeigen Hospital-at-Home-Programme (CMS Acute Hospital Care at Home Waiver: 300+ Krankenhäuser) ~1.800–3.000 $ Einsparung pro Fall gegenüber stationärer Versorgung, mit niedrigeren Wiederaufnahmen und Infektionen — der klarste Beleg, dass Überwachung plus virtuelle Versorgung die teuerste Ressource im System ersetzen kann, das besetzte Bett.

## Die Mathematik

```
RPM-Erlös (USA) = eingeschrieben × abrechnungskonformer Anteil ×
                  Code-Stapel PMPM
  — die 16-Tage-Regel macht Tragezeit-Compliance
    (wearable-validation.md) zu einer Erlösvariable, und die
    20-Minuten-Regel macht die Protokollierung klinischer Zeit zu
    einer Entwicklungsanforderung

NHS-artiger Wert = vermiedene Einweisungen × Grenzkosten der Einweisung
                  + substituierte Bettentage × (stationärer − virtueller
                    Stationstag-Kosten)
                  − Dienstkosten (Geräte, Plattform, Überwachungspersonal)
  (siehe emergency-attendance-avoidance.md und bed-days-saved.md für die
   Zurechnungs- und Grenzkosten-Regeln)
```

## Durchgerechnetes Beispiel

Eine US-Praxis schreibt 400 Bluthochdruckpatienten ein; 70 % erfüllen in einem typischen Monat die 16-Tage-Schwelle; Management-Minuten für 60 % protokolliert:

```
Monatserlös ≈ 400 × [0,70 × 43,03 + 0,60 × 47,87] = 400 × 58,84 ≈ 23.500 $
Jährlich ≈ 282.000 $; Dienstkosten (Geräte 12 $/Monat, Personal 0,8 VZÄ)
≈ 180.000 $
Marge ≈ 100.000 $/Jahr — und die Hebel sind Entwicklungshebel: die
16-Tage-Compliance von 70 % → 85 % zu heben fügt ~31.000 $/Jahr hinzu
(Gerätekomfort, Synchronisationszuverlässigkeit, Erinnerungsdesign).
```

NHS-Spiegel: eine virtuelle Station mit 50 Betten bei 80 % Auslastung, die stationäre Tage bei 150 £ Nettoeinsparung/Tag substituiert ≈ 50 × 0,8 × 365 × 150 ≈ **2,19 Mio. £/Jahr** brutto — gegen Plattform, Geräte und das Gemeindepflegeteam, das sie besetzt.

## Bezug zur Softwareentwicklung

RPM-Plattformen sind das seltene Produkt, bei dem **Betriebszeit und Synchronisationszuverlässigkeit sich direkt in Umsatz umwandeln** (eine Woche fehlgeschlagener Synchronisationen bricht das 16-Tage-Tor für eine Kohorte) und bei dem prüftaugliche Zeiterfassung (die 20-Minuten-Regel) ein erstklassiges Feature ist, kein Nachtrag. Bauen für: Pro-Patient-Compliance-Dashboards, die gefährdete Abrechnungsmonate anzeigen, während sie noch rettbar sind; zeitgestempelte, manipulationssichere Datenpfade (Kostenträger-Prüfungen sind Routine); und Alarm-Ökonomie-Feinabstimmung — jeder Alarm verbraucht Minuten des Überwachungsteams, die sowohl die abrechenbare Einheit als auch die knappe Ressource sind ([Screening-Ökonomie](../screening-ökonomie/) regiert die Schwellenwahl).

## Fallstricke

- **Einschreibung ≠ Erlös**: der compliant-Anteil ist die entscheidende Zahl; ihn modellieren, nicht annehmen.
- **US-Codes in NHS-Fälle transplantiert** — nationale Gesundheitsdienste kaufen Einweisungsvermeidung, keine CPT-Stapel; das zweite Modell verwenden.
- **Ausgleichsbehauptungen zu Durchschnittskosten** für Einweisungen, deren Fixkosten bleiben (siehe [Grenzkosten vs. Durchschnittskosten](../grenzkosten-vs-durchschnittskosten/)).
- **Sättigung des Überwachungsteams**: das Alarmvolumen skaliert mit der Einschreibung; die Personalzeile ist die bindende Restriktion, die die meisten Modelle auslassen.

## Quellen

- RPM CPT codes and 2025 rates. <https://blog.prevounce.com/quick-guide-remote-patient-monitoring-rpm-cpt-codes-to-know>
- CMS hospital-at-home outcomes reporting. <https://www.mcknightshomecare.com/news/hospital-at-home-achieved-cost-savings-among-all-top-diagnosis-groups-cms-reports/>
- Telehealth.HHS.gov, billing for RPM. <https://telehealth.hhs.gov/providers/best-practice-guides/telehealth-and-remote-patient-monitoring/billing-remote-patient>
