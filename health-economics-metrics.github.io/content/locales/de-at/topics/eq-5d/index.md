# EQ-5D

EQ-5D ist der standardisierte Fragebogen der EuroQol-Gruppe zur Messung der gesundheitsbezogenen Lebensqualität. Es ist das Instrument, das die Nutzwertgewichte in den meisten [QALY](../qualitätsadjustiertes-lebensjahr/)-Berechnungen liefert — NICEs Referenzfall benennt es als bevorzugtes Maß für Erwachsene.

## Warum es wichtig ist

Jedes Digital-Health-Produkt, das QALYs beanspruchen will, braucht Nutzwerte aus einem validierten Instrument, und EQ-5D ist der Standard in Großbritannien und weiten Teilen Europas. Es ist kurz genug, um in eine App eingebettet zu werden (5 Fragen + eine visuelle Skala), sodass Softwareprodukte HTA-taugliche Ergebnisdaten als Nebeneffekt normaler Nutzung erheben können — ein struktureller Vorteil gegenüber Medikamenten, die eigene Studien benötigen.

## Die Mathematik

Der EQ-5D-5L stellt je eine Frage in **5 Dimensionen** — Mobilität, Selbstversorgung, allgemeine Tätigkeiten, Schmerzen/Beschwerden, Angst/Niedergeschlagenheit — jede beantwortet auf **5 Stufen** (keine Probleme … extreme Probleme), plus eine visuelle Analogskala von 0–100 (EQ VAS).

```
Gesundheitszustand = 5-stelliges Profil, z. B. "21221"
Nutzwertindex = value_set(Profil)

Das Wertset ist länderspezifisch und wird aus Time-Trade-off-/
Discrete-Choice-Befragungen der Allgemeinbevölkerung abgeleitet. Anker:
1 = volle Gesundheit, 0 = tot; Zustände schlechter als der Tod sind negativ
(Bodenwert des britischen 3L-Sets: −0,594).
```

Die QALY-Rechnung verläuft dann als `Dauer × Nutzwert`.

## Durchgerechnetes Beispiel

Eine App zur muskuloskelettalen Rehabilitation misst EQ-5D-5L beim Onboarding und nach 6 Monaten bei 1.000 Nutzern, die den Prozess abschließen.

```
Mittlerer Nutzwert zu Beginn:      0,62
Mittlerer Nutzwert nach 6 Monaten: 0,71
Anhaltender Gewinn (angenommen) über 1 Jahr: (0,71 − 0,62) × 1,0 = 0,09 QALYs pro Nutzer
```

Gegenüber einer Kontrollgruppenveränderung von 0,03 (natürliche Genesung) beträgt der zurechenbare Gewinn 0,06 QALYs/Nutzer. Monetarisiert mit 20.000–30.000 £/QALY: **1.200–1.800 £ Gesundheitswert pro abschließendem Nutzer** — die Zahl, an der die Preisverhandlung der App mit einem Kostenträger ansetzt. (Minimal klinisch bedeutsame Unterschiede für den EQ-5D-Index liegen meist im Bereich 0,03–0,08, sodass 0,06 plausibel ist, aber den Kontrollvergleich bestehen muss; siehe [patientenberichtete Endpunkte](../patientenberichtete-endpunkte/).)

## Bezug zur Softwareentwicklung

- **Instrumentieren.** EQ-5D bei Anmeldung und in Nachverfolgungsintervallen sind nur wenige UI-Bildschirme; der Lohn ist HTA-taugliche Evidenz. Lizenz bei EuroQol einholen (erforderlich, für manche Nutzungen kostenlos).
- **Das richtige Wertset verwenden** für das Einsatzland — dieselben Antworten ergeben in Großbritannien, Deutschland oder Japan unterschiedliche Werte.
- **Design-Lehre**: EQ-5D zeigt, wie eine winzige standardisierte Befragung plus eine veröffentlichte Bewertungsfunktion einen vergleichbaren Einzelindex ergeben. Das ist auch das Muster für jeden glaubwürdigen Developer-Experience-Index — standardisiertes Instrument, veröffentlichte Gewichte, kein Bauchgefühl. Siehe [SPACE und DevEx](../space-und-devex/).

## Fallstricke

- **Vorher/Nachher ohne Vergleichsgruppe** — Regression zur Mitte und natürliche Genesung blähen naive Gewinne auf.
- **Survivorship Bias**: nur Nutzer zu messen, die engagiert blieben (siehe [Bindung und Abwanderung](../bindung-und-abwanderung/)).
- **3L- und 5L-Versionen oder Wertesets mischen** über Studien hinweg — systematisch unterschiedliche Zahlen.
- **Deckeneffekte** in leicht betroffenen Bevölkerungsgruppen: Viele Nutzer liegen zu Beginn nahe bei 1,0, sodass kein Spielraum bleibt, um einen Gewinn zu zeigen.
- **Ein Wertset als selbstbegründend behandeln**: Die Nutzwerte, die ein Wertset liefert, wurden selbst per Time-Trade-Off (oder einer verwandten wahlbasierten) Befragung der Öffentlichkeit erhoben — siehe [Time-Trade-Off-(TTO-)Nutzwerterhebung](../time-trade-off-tto-nutzwerterhebung/) dazu, wie das geschieht.

## Quellen

- EuroQol: EQ-5D-5L. <https://euroqol.org/information-and-support/euroqol-instruments/eq-5d-5l/>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
