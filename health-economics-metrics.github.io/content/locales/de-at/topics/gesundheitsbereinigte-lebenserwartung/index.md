# Gesundheitsbereinigte Lebenserwartung (HALE)

HALE ist eine Zusammenfassung auf Bevölkerungsebene: die Anzahl der Jahre, die eine Person voraussichtlich *bei voller Gesundheit* lebt, wobei in Krankheit oder Behinderung verbrachte Jahre abgezogen werden. Die globale HALE bei Geburt lag bei etwa 61,9 Jahren gegenüber einer Lebenserwartung von 73,3 (WHO, Daten 2019) — die Menschheit verbringt ihr letztes Jahrzehnt im Durchschnitt in weniger als voller Gesundheit.

## Warum es wichtig ist

HALE ist die Leitkennzahl nationaler und globaler Gesundheitspolitik — der Zähler von "gesundem Altern"-Zielen, und die Lücke, die sie offenlegt (Lebenserwartung minus HALE), ist die Last, die Prävention, Frühintervention und Management chronischer Erkrankungen schließen sollen. Digital-Health-Strategien auf Ministeriumsebene werden in HALE-Begriffen begründet; ein Portfolio aus Apps, Screening-Diensten und Überwachungsprogrammen läuft letztlich hier zusammen.

## Die Mathematik

Die Standardberechnung ist die **Sullivan-Methode**:

```
HALE_Alter_x = Σ (Lebenstafel-Personenjahre in jedem Alter ≥ x × Anteil bei voller Gesundheit)
               / Überlebende im Alter x

"Anteil bei voller Gesundheit" = 1 − Σ (Prävalenz_Erkrankung × Behinderungsgewicht)
```

Eingaben: eine Standard-Lebenstafel plus Prävalenz- und Behinderungsgewichte für Gesundheitszustände (aus Global-Burden-of-Disease-Daten). HALE hängt mit [DALYs](../behinderungsbereinigtes-lebensjahr/) zusammen — die DALY-Last der Bevölkerung und die HALE-Lücke sind zwei Sichten auf dieselbe verlorene Gesundheit.

## Durchgerechnetes Beispiel

Ein nationales digitales Bluthochdruckprogramm: 500.000 Teilnehmende, die durchschnittliche Blutdruckkontrolle verbessert sich genug, um die Schlaganfallinzidenz um 0,2 Prozentpunkte/Jahr zu senken. Über die Lebenszeit der Kohorte modelliert, sparen vermiedene Schlaganfälle 15.000 behinderungsgewichtete Jahre (YLD bei Gewicht 0,32 plus YLL durch tödliche Schlaganfälle).

```
HALE-Beitrag ≈ 15.000 gesunde Jahre / 500.000 Personen
             ≈ 0,03 Jahre (≈ 11 Tage) HALE pro teilnehmender Person
```

Elf Tage klingen wenig — aber auf Bevölkerungsebene bewegen sich nationale Kennzahlen genau so: Ministerien kaufen Millionen winziger Gewinne pro Person. Diese Rechnung zeigt auch, warum **Reichweite dominiert**: Eine doppelt so wirksame Intervention mit einem Zehntel der Teilnahme bewegt HALE fünfmal weniger. Siehe [Reichweite und Gerechtigkeit](../reichweite-und-gerechtigkeit/).

## Bezug zur Softwareentwicklung

HALE ist ein Muster für Flotten-Gesundheitskennzahlen: **erwartete Dienstlebensdauer × Anteil dieser Lebensdauer bei guter Gesundheit**. Ein Plattformteam kann eine "gesunde Dienstlebenserwartung" über seinen gesamten Bestand berechnen — Jahre, in denen ein Dienst voraussichtlich läuft, abgezinst um die in degradierten, veralteten oder Vorfallzuständen verbrachte Zeit (Gewichte aus SLO-Unterschreitung). Das rückt Zuverlässigkeit von punktueller Verfügbarkeit zu lebenslanger Gesundheit — und lenkt Sanierungsaufwand auf die Systeme, die die HALE des Bestands am stärksten drücken.

## Fallstricke

- **HALE bewegt sich langsam und multikausal** — keine einzelne Intervention "bewegt HALE" messbar; den modellierten Beitrag beanspruchen, nicht die nationale Statistik.
- **Prävalenzdaten hinken** Jahre hinterher; jüngste Gewinne zeigen sich noch nicht in der offiziellen HALE.
- **HALE zwischen Ländern vergleichen** mit unterschiedlicher Messung von Gesundheitszuständen ist tückisch; innerhalb eines Systems längsschnittlich verwenden.

## Quellen

- WHO indicator registry: HALE. <https://www.who.int/data/gho/indicator-metadata-registry/imr-details/66>
- Global Burden of Disease study (IHME). <https://www.healthdata.org/research-analysis/gbd>
