# Adhärenz und Persistenz

Adhärenz ist, wie genau die tatsächliche Nutzung der verordneten Nutzung entspricht (Intensität); Persistenz ist, wie lange die Nutzung andauert, bevor sie abgebrochen wird (Dauer). Die Pharmazie hat standardisierte Maße — **MPR** und **PDC**, mit ≥80 % als üblicher "adhärenter" Balken — und digitale Therapeutika erben sowohl die Konzepte als auch das Problem: Adhärenz ist der Multiplikator zwischen Wirksamkeit und realisiertem Wert.

## Warum es wichtig ist

Kostenträger arbeiten bereits mit diesen Zahlen: PDC ≥80 % speist die US-Medicare-Star-Ratings, die echtes Kostenträger-Einkommen bewegen — Adhärenz ist finanziell tragende Infrastruktur, keine weiche Kennzahl. Bei digitalen Therapeutika wiederholt sich das Muster: DiGA-Daten zeigen starke Verordnungszahlen bei schwacher anhaltender Adhärenz, und ergebnisbasierte DTx-Preisgestaltung (in Deutschland ab 2026) wird nach adhärenzabhängigen Ergebnissen zahlen. Das konzeptionelle Upgrade aus der Forschung zu digitaler Gesundheit: **effektives Engagement** — *ausreichendes* Engagement, um das beabsichtigte Ergebnis zu erreichen — und sein Korollar, die **minimale Wirkdosis**, empirisch pro Intervention festgelegt, statt als "mehr ist besser" angenommen.

## Die Mathematik

```
MPR = Σ ausgegebene Vorratstage / Tage im Zeitraum × 100
      (kann 100 % übersteigen; überschätzt durch vorzeitige Wiederauffüllung)
PDC = durch Vorrat abgedeckte Tage / Tage im Zeitraum × 100
      (bei 100 % gedeckelt; der konservative, von CMS bevorzugte Schätzer)
Digitale Adhärenz = tatsächliche Nutzungsereignisse / verordnete
                    Nutzungsereignisse × 100
Persistenz         = Tage von Beginn bis Abbruch
                    (% persistent nach N Monaten berichten; Überlebens-
                    methoden)

Nutzenschranke: realisiertes Ergebnis ≈ Wirksamkeit × g(Adhärenz)
  wobei g die Dosis-Wirkungs-Funktion ist; unterhalb der minimalen
  Wirkdosis ist g ≈ 0 — Kosten entstanden, Nutzen verwirkt
```

## Durchgerechnetes Beispiel

Ein digitales KVT-Produkt gegen Schlaflosigkeit, verordnet als 6 Module über 6 Wochen; Studienwirksamkeit 0,025 QALYs bei denen, die ≥4 Module abschließen (die empirisch festgelegte minimale Wirkdosis):

```
1.000 Verordnungen zu je 250 £ → 250.000 £ Kostenträgerausgaben
Modulabschluss: ≥4 Module 38 %; 1–3 Module 34 %; null Module 28 %

Realisierte QALYs = 1.000 × 0,38 × 0,025 = 9,5
Kosten pro QALY   = 250.000 / 9,5 ≈ 26.300 £ — grenzwertig bei
                    NICE-Schwellenwerten

Adhärenz-Engineering (Neugestaltung der Erinnerungen, Sitzungsverkürzung)
hebt den ≥4-Modul-Abschluss auf 50 %: 12,5 QALYs → 20.000 £/QALY. Das
Produkt hat die Finanzierungsschwelle überschritten, ohne die
Therapieinhalte anzufassen.
```

Bei Performance-Preisgestaltung im Stil von 2026 bewegt derselbe Wechsel direkt den *Umsatz* — Adhärenz-Engineering wird zur kommerziellen Roadmap.

## Bezug zur Softwareentwicklung

Zwei Vokabulare laufen in einem Konzept zusammen: Software-Analytics ([Aktivierung](../aktivierung-und-nutzungsaufnahme/), [Stickiness](../engagement-kennzahlen/), [Bindung](../bindung-und-abwanderung/)) und klinische Pharmazie (MPR, PDC, Persistenz) messen beide die Exposition gegenüber einer Intervention — die eigenen Produktereignisse auf das klinische Vokabular abbilden, und Kostenträger können die eigenen Dashboards lesen. Entwicklung besitzt die Adhärenz-Hebel: Erinnerungslogik (dumme tägliche Pings trainieren Wegwischen; adaptives Timing nicht), Sitzungskosten (ein 20-Minuten-Modul schließt weniger ab als 3×7-Minuten-Module), und Reibungstelemetrie, die lokalisiert, *wo* im Protokoll Nutzer abfallen. Dosis-Wirkung vom ersten Tag an instrumentieren — die Analyse der minimalen Wirkdosis, die das gesamte ökonomische Modell steuert, braucht mit Ergebnis verknüpfte Nutzungsdaten, die nur das Produkt erheben kann.

## Fallstricke

- **Vermischung von MPR/PDC**: MPR bläht auf; angeben, welcher Schätzer verwendet wird, und PDC für alles Kostenträgerbezogene nutzen.
- **Adhärenz zur Kennzahl, nicht zur Therapie**: Öffnungen als Dosen gezählt (siehe [Engagement-Kennzahlen](../engagement-kennzahlen/)).
- **"Mehr ist besser"-Engagement-Ziele**, wo die Intervention eine endliche Dosis hat — Abschluss ist Erfolg, dauerhafte Nutzung nicht.
- **Auf Überlebenden basierende Wirksamkeitsbehauptungen**: Ergebnisse bei den Adhärenten enthalten Selektionseffekte (adhärente Menschen unterscheiden sich); die ehrliche kausale Schätzung braucht Randomisierung oder sorgfältige Anpassung.

## Quellen

- MPR vs PDC. <https://phslrx.com/medication-adherence-metrics/>
- Yardley L, et al., effective engagement. <https://pmc.ncbi.nlm.nih.gov/articles/PMC8726056/>
- DiGA adherence findings, npj Digital Medicine 2024. <https://www.nature.com/articles/s41746-024-01137-1>
