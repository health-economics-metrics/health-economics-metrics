# GDS-Servicekennzahlen

Das Service Manual des britischen Government Digital Service (GDS) schreibt vier KPIs für jeden digitalen Regierungsdienst vor: **Kosten pro Transaktion, Nutzerzufriedenheit, Abschlussrate und digitale Inanspruchnahme**. Zusammen bilden sie die minimale Ökonomie eines öffentlichen digitalen Dienstes — und die Vorlage, die digitale NHS-Dienste erben.

## Warum es wichtig ist

Die GDS-Kennzahlen kodieren den Kanalverlagerungs-Business-Case, der ein Jahrzehnt Regierungsdigitalisierung finanzierte: Der Digital Efficiency Report fand digitale Transaktionen ~20-mal günstiger als Telefon und ~50-mal günstiger als persönlich (Kommunalverwaltungszahlen: Web 0,15 £, Telefon 2,83 £, persönlich 8,62 £). Doch die Einsparungen entstehen nur, wenn Menschen den digitalen Weg *abschließen* (Abschlussrate) *statt* den teuren Kanal (Inanspruchnahme) — die vier KPIs sind ein ökonomisches Modell, keine vier Dashboards.

## Die Mathematik

```
Kosten pro Transaktion = Gesamtdienstkosten / abgeschlossene Transaktionen
Abschlussrate           = abgeschlossen / begonnene Transaktionen × 100
Digitale Inanspruchnahme = digitale Transaktionen / Transaktionen aller Kanäle × 100
Nutzerzufriedenheit     = % zufrieden+sehr zufrieden (5-Punkte, dienstinterne Umfrage)

Kanalverlagerungs-Einsparung = Volumen × Inanspruchnahme-Verschiebung ×
                               (Kosten_alter_Kanal − Kosten_digital)
… minus Fehlbedarf: (1 − Abschlussrate) × Kosten des Ausweichkanals
```

## Durchgerechnetes Beispiel

Ein NHS-Termindienst: 2 Mio. Transaktionen/Jahr, derzeit 70 % Telefon (3,20 £/Anruf) / 30 % digital (0,25 £). Ein Redesign hebt die digitale Inanspruchnahme auf 55 % und die Abschlussrate von 84 % auf 93 %:

```
Einsparung durch Inanspruchnahme-Verschiebung = 2 Mio. × 0,25 × (3,20 − 0,25)
  = 1.475.000 £/Jahr

Einsparung beim Fehlbedarf: gescheiterte digitale Wege fallen aufs Telefon zurück
  vorher: 2 Mio. × 0,30 × 0,16 × 3,20 £ = 307.200 £
  nachher: 2 Mio. × 0,55 × 0,07 × 3,20 £ = 246.400 £
  netto 60.800 £/Jahr — Abschlussverbesserungen schützen die
  Inanspruchnahme-Gewinne

Zufriedenheit ist der Frühindikator: unzufriedene Nutzer kehren zum
Telefon zurück, sodass ein Zufriedenheitsrückgang den Inanspruchnahme-
Verfall vorhersagt, bevor er sichtbar wird.
```

## Bezug zur Softwareentwicklung

Diese vier KPIs sind ein produktionsreifes Beispiel einer [Kosten-Konsequenzen-Tabelle](../kosten-konsequenzen-analyse/): eine Kostenkennzahl, drei Ergebniskennzahlen, nie zu einem Score verdichtet. Für Produktentwickler die operativen Lehren: **Abschlussrate ist ein Trichter-Instrumentierungsproblem** (jeder Abbruchpunkt ist findbar und behebbar); **Kosten pro Transaktion sind [Cloud-Einheitsökonomie](../cloud-einheitsökonomie/)** plus Kosten personalgestützter Kanäle; **Inanspruchnahme ist eine verkleidete Gerechtigkeitskennzahl** — die Nutzer, die den Kanal nicht wechseln können oder wollen, sind überproportional älter, behindert und benachteiligt, sodass aggressive Kanalschließung "Einsparungen" in Zugangsschaden verwandelt (siehe [Reichweite und Gerechtigkeit](../reichweite-und-gerechtigkeit/)). Die KPIs zu veröffentlichen (GOV.UK tut das, pro Dienst) ist selbst ein Mechanismus: Transparenz diszipliniert Prognosen so, wie es [Nutzenrealisierungs](../nutzenrealisierung/)-Prüfungen tun.

## Fallstricke

- **Inanspruchnahme durch Zwang**: die Telefonleitung zu schließen hebt die Inanspruchnahme und lädt Fehlbedarf beim Frontpersonal ab; die Gesamtsystemkosten messen.
- **Abschluss gemessen ab Seite 2**: den Trichter erst nach dem Abbruchpunkt beginnen zu lassen schmeichelt der Rate.
- **Kosten pro Transaktion ohne unterstützt-digitalen Support** und Behandlung von Fehlbedarf.
- **Zufriedenheitsumfragen nur bei erfolgreichem Abschluss** — die Unzufriedenen erreichen die Umfrage meist nie.

## Quellen

- GOV.UK Service Manual, measuring success / mandatory KPIs. <https://www.gov.uk/service-manual/measuring-success/data-you-must-publish>
- Digital Efficiency Report. <https://www.gov.uk/government/publications/digital-efficiency-report/digital-efficiency-report>
