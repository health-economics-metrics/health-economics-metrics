# Wearable-Validierung

Validierungskennzahlen beziffern, wie gut die Messungen eines Wearables mit einem klinischen Goldstandard übereinstimmen (EKG für Herzfrequenz, Polysomnografie für Schlaf): **MAPE**, Konkordanzkorrelation, Bland-Altman-Übereinstimmung — plus die operativen Kennzahlen, die die Qualität von Real-World-Daten steuern: **Tragezeit-Compliance** und **Datenvollständigkeit**.

## Warum es wichtig ist

Validierung ist die Voraussetzung für alles Nachgelagerte: Ein Gerät, das Übereinstimmung mit der Referenzmessung nicht belegen kann, kann [digitale Endpunkte](../digitale-endpunkte-und-biomarker/) nicht verankern, keine [RPM-Abrechnung](../ökonomie-der-fernpatientenüberwachung/) unterstützen und keine klinischen Behauptungen tragen. Die akzeptierten Schwellenwerte des Feldes für Herzfrequenz: **MAPE ≤5 %** (streng) oder **≤10 %** (nachsichtig) gegenüber EKG. Referenzpunkte aus der Literatur: Oura Gen 3 Ruhe-HR-MAPE 1,67 % (CCC 0,97); Fitbit Charge 6 MAPE ~5,5 % — Konsumgeräte überspannen inzwischen die klinische Grenze, weshalb die Messung genau pro Gerät und pro Bedingung zählt.

## Die Mathematik

```
MAPE = (1/n) Σ |gemessen_i − Referenz_i| / Referenz_i × 100

CCC (Konkordanzkorrelation) = Übereinstimmung einschließlich Korrelation
      und systematischer Verzerrung (Pearson-r, bestraft durch Lage-/
      Skalenverschiebung)

Bland-Altman: mittlere Verzerrung ± 1,96 SD Übereinstimmungsgrenzen —
      zeigt, ob der Fehler von der Größenordnung des Werts abhängt

Operative Schwellen:
Tragezeit-Compliance = getragene Zeit / Protokollzeit × 100
Datenvollständigkeit = beobachtete Datenpunkte / erwartete × 100
```

Validierung muss **pro Aktivitätsbedingung** (Ruhe, Bewegung, Schlaf) und pro Bevölkerung berichtet werden — optische PPG-Erfassung verschlechtert sich durch Bewegungsartefakte, schlechten Kontakt und dunklere Hauttöne, ein dokumentierter, gerechtigkeitsrelevanter Fehlermodus.

## Durchgerechnetes Beispiel

Ein Programm für virtuelle Stationen wählt ein Überwachungs-Wearable. Kandidat A: Ruhe-MAPE 2,1 %, Belastungs-MAPE 11,4 %. Kandidat B: Ruhe 3,8 %, Belastung 6,9 %.

```
Anwendungsfall: Erkennung sich verschlechternder Patienten zu Hause —
Alarme lösen bei anhaltend erhöhter HF aus, oft während Aktivität.
Die Schlagzeile von Kandidat A (2,1 %) gewinnt die Broschüre; Kandidat B
gewinnt den Anwendungsfall: bei der alarmrelevanten Bedingung (Bewegung)
bedeutet As Fehler von 11,4 % bei HF 100 = ±11 bpm — es überspannt das
gesamte Alarmschwellenband, was falsche Eskalationen erzeugt (jede ein
Pflegekraft-Einsatz, ~40 £) oder Verpasstes.

Fehlalarm-Ökonomie: 500 Patienten × 2 zusätzliche Fehlalarme/Woche × 40 £
= 2,08 Mio. £/Jahr Fehlerkosten durch die Wahl der falschen
Validierungszahl.
```

## Bezug zur Softwareentwicklung

Entwickler konsumieren Validierungsdaten bei der Sensorwahl und *erzeugen* sie beim Bau von Messfunktionen — beide Rollen brauchen dieselbe Disziplin: unter der Einsatzbedingung testen, nicht der Demo-Bedingung (das Software-Analogon: gegen die eigene Produktionslast benchmarken, nicht die des Anbieters). Tragezeit und Vollständigkeit sind Produktentwicklungs-Ergebnisse — Komfort, Akkulaufzeit, Ladegewohnheit-Design und Synchronisationszuverlässigkeit bestimmen, ob die RPM-Abrechnungsschwelle von 16-von-30-Tagen erfüllt wird ([Ökonomie der Fernpatientenüberwachung](../ökonomie-der-fernpatientenüberwachung/)) und ob Studiendatensätze analysierbar sind. Fehlende Daten als konstruiertes Signal behandeln: "nicht getragen", "getragen, aber kein Signal" und "Synchronisation fehlgeschlagen" von Anfang an im Schema unterscheiden — zu null zusammengefasst, vergiften sie jede nachgelagerte Analyse.

## Fallstricke

- **Aggregierter MAPE verbirgt bedingungsspezifisches Versagen** — die Falle des durchgerechneten Beispiels.
- **Validierungsbevölkerung ≠ Einsatzbevölkerung**: Alter, Hautton, Tremor, Adipositas verschieben alle den Fehler optischer Sensoren; die Studiendemografie prüfen.
- **Korrelation berichtet, wo Übereinstimmung gebraucht wird**: hoher Pearson-r bei systematischer Verzerrung klassifiziert gegen absolute Schwellenwerte trotzdem falsch — auf CCC/Bland-Altman bestehen.
- **Vollständigkeit durch Imputation aufgebläht**: aufgefüllte Lücken als beobachtete Daten berichtet.

## Quellen

- Consumer wearable HR validation (Oura Gen 3/4). <https://pmc.ncbi.nlm.nih.gov/articles/PMC12367097/>
- Wearable validity thresholds (MAPE standards). <https://formative.jmir.org/2025/1/e70835>
- Multi-device validation studies. <https://pmc.ncbi.nlm.nih.gov/articles/PMC6431828/>
