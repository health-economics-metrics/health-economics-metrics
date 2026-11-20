# SPACE und DevEx

SPACE (Satisfaction & well-being, Performance, Activity, Communication & collaboration, Efficiency & flow) und DevEx (Feedback-Schleifen, kognitive Last, Flow-Zustand) sind Rahmenwerke, um Entwicklerproduktivität **mehrdimensional** zu messen — die Antwort des Feldes auf die Erkenntnis, dass keine einzelne Kennzahl den Kontakt mit der Realität übersteht.

## Warum es wichtig ist

Beide Rahmenwerke kodieren dieselbe hart erkämpfte Lehre, die die Erforschung von Gesundheitsergebnissen Jahrzehnte früher lernte: eine einzelne Zahl (Codezeilen; Blutdruck) stellt eine mehrdimensionale Realität falsch dar, und sie zu optimieren erzeugt Manipulation, keine Verbesserung. SPACE schreibt vor, Kennzahlen aus mindestens drei Dimensionen zu kombinieren, Telemetrie mit Selbstauskunft zu mischen — strukturell identisch damit, wie [EQ-5D](../eq-5d/) fünf Dimensionen profiliert, bevor überhaupt ein Index berechnet wird, und warum [PROMs](../patientenberichtete-endpunkte/) neben klinischen Maßen existieren. Zufriedenheit/Wohlbefinden ist auch keine weiche Beigabe: Es speist die Ökonomie der [Personalbindung](../personalbindung/), wo Fluktuation in Monaten Vollkostengehalt bepreist wird.

## Die Mathematik

Keines der beiden Rahmenwerke ist eine Formel; beide sind Messdesigns:

```
SPACE-Regel: ≥ 3 Dimensionen, ≥ 1 wahrnehmungsbasierte (Umfrage-) +
             ≥ 1 systembasierte (Telemetrie-) Kennzahl

DevEx-Dimensionen und Beispielpaarungen:
  Feedback-Schleifen → CI-Dauer (Telemetrie) + "Warten fühlt sich langsam an" (Umfrage)
  kognitive Last     → Auffindbarkeit von Dokumentation, Einarbeitungszeit
                        + wahrgenommener Aufwand
  Flow-Zustand       → Meeting-/Unterbrechungsdichte + selbstberichteter Fokus

Abgeleitete Indizes (z. B. DXs DXI) bilden Umfrage-Verbünde auf Zeit ab:
Anbieterbehauptung ≈ 13 Min./Entwickler/Woche pro Indexpunkt — als
Anbieter-Referenzwert behandeln, lokal zu validieren, nicht als
Naturkonstante.
```

## Durchgerechnetes Beispiel

Ein Plattformteam begründet eine DevEx-Investition (CI-Beschleunigung + Dokumentationsüberholung) für 300 Entwickler:

```
Basis: CI p75 = 28 Min.; Umfrage "ich verliere den Fokus beim Warten auf
Builds": 62 % Zustimmung
Danach: CI p75 = 9 Min.; Zustimmung 24 %

Zurückgewonnene Zeit (Telemetrie): 6 Builds/Tag × 19 Min. × 0,4 nutzbar
  = ~45 Min./Tag/Entwickler
Kapazitätswert: 300 × 0,75 Std. × 220 Tage × 60 £/Std. ≈ 2,97 Mio. £/Jahr
  (nicht zahlungswirksam — siehe cash-releasing-vs-non-cash-releasing.md;
  der Nutzbarkeitsfaktor 0,4 ist der Fragmentierungsabschlag aus
  practitioner-time.md)
Die wahrnehmungsbasierte Bestätigung ist es, was die Telemetrie-Behauptung
glaubwürdig macht — jede allein ist manipulierbar; zusammen trianguliert
man.
```

## Bezug zur Softwareentwicklung

Dieses Dokument *ist* bereits die Softwareseite; die Übertragung läuft Richtung Gesundheitsökonomie. Ein "qualitätsadjustiertes Entwicklerjahr" — Zeit gewichtet nach einem standardisierten Erfahrungsindex — ist die Konstruktion des [QALY](../qualitätsadjustiertes-lebensjahr/), angewendet auf Entwicklungskapazität, und erbt dessen Regeln: Gewichte aus einem validierten Instrument (konsistente Umfrage, veröffentlichte Bewertung), erhoben *vor* dem Vergleich, nie angepasst, um ein bevorzugtes Tool zu schmeicheln. Auch die Lehre [SF-6D vs. EQ-5D](../eq-5d/) gilt: unterschiedliche Instrumente liefern systematisch unterschiedliche Zahlen, also DevEx-Indizes nie über Anbieterinstrumente hinweg vergleichen.

## Fallstricke

- **Kollaps auf eine Kennzahl**: Dashboards, die SPACE auf einen Score reduzieren, erschaffen genau das Problem neu, das das Rahmenwerk verhindern soll.
- **Aktivitätskennzahlen als Ergebnisse**: Commits, PRs und Story Points sind Activity — die Dimension, vor deren Manipulierbarkeit SPACE ausdrücklich warnt (Gesundheits-Analogon: Eingriffe zählen, nicht Genesungen).
- **Umfragemüdigkeit und Hawthorne-Effekte**: vierteljährliche, leichte Instrumente schlagen wöchentliche Befragung.
- **Teams vergleichen**: wie Krankenhaus-Ranglisten ohne Fallmix-Bereinigung — Kontextunterschiede (Domäne, Legacy-Last, Bereitschaftsdienst) dominieren.

## Quellen

- Forsgren N, et al. "The SPACE of Developer Productivity." ACM Queue 2021. <https://queue.acm.org/detail.cfm?id=3454124>
- Noda A, Forsgren N, Storey MA, Greiler M. "DevEx: What Actually Drives Productivity." ACM Queue 2023. <https://queue.acm.org/detail.cfm?id=3595878>
