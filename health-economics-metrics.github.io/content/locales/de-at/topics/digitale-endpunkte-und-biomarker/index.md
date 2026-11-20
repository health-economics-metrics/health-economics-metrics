# Digitale Endpunkte und Biomarker

Ein digitaler Biomarker ist ein objektives physiologisches oder verhaltensbezogenes Maß, erhoben über Sensoren (Gehgeschwindigkeit vom Telefon, Schlaf von einem Wearable, Tremor aus Beschleunigungsmessung). Ein digitaler Endpunkt ist ein solches Maß, erhoben zu einem **Studienergebnis** — verwendet, um den Behandlungseffekt zu belegen. Der Aufstieg von "Daten, die das Gerät ausgibt" zu "Evidenz, die ein Regulierer akzeptiert" führt über eine definierte Validierungsleiter.

## Warum es wichtig ist

Traditionelle Studienendpunkte sind episodisch (Klinikbesuche alle 3 Monate) und teuer; digitale Endpunkte sind kontinuierlich, ökologisch (echtes Leben, nicht Klinikleistung) und günstig pro Beobachtung — sie können Studien verkleinern, Effekte früher erkennen und dezentrale Studien ermöglichen. Der Haken ist die Validierung: Das akzeptierte Rahmenwerk (FDA-ausgerichtet, drei Säulen) verlangt **Verifikation/analytische Validierung** (der Sensor misst die physikalische Größe genau), **klinische Validierung** (das Maß spiegelt den klinischen Zustand wider, den es zu erfassen behauptet), und einen nachgewiesenen **bedeutsamen Gesundheitsaspekt** (Patienten interessieren sich für das, was es erfasst). Ein Endpunkt ohne alle drei ist Telemetrie, keine Evidenz.

## Die Mathematik

```
Analytische Validierung: Übereinstimmung mit der Referenz (siehe
                         wearable-validation.md — MAPE, CCC, Bland-Altman)
Klinische Validierung:   Korrelation/Diskrimination gegenüber klinischen
                         Ankern (Known-Groups-Validität, Änderungs-
                         sensitivität)
Endpunkt-Ökonomie:
  erkannte Ereignisse pro Patientenjahr (kontinuierlich) vs.
  Stichprobe pro Besuch
  Studienstärke: kontinuierliche Maße senken die Stichprobengröße, wenn
  die Varianz zwischen Besuchen dominiert — N ∝ σ²/Δ², und σ² sinkt mit
  dichter Stichprobenziehung
```

## Durchgerechnetes Beispiel

Eine Parkinson-Studie erwägt Gehgeschwindigkeit von einem Handgelenkssensor gegenüber vierteljährlichen klinisch bewerteten Scores:

```
Klinik-Endpunkt:   4 Messungen/Patient/Jahr, hohes Tag-zu-Tag-Rauschen
Digitaler Endpunkt: ~200 passive Messungen/Patient/Jahr

Die Varianz der Jahresänderungsschätzung fällt mit dichter
Stichprobenziehung um ~das 5-Fache → die erkennbare Effektgröße bei
fester Studienstärke verbessert sich um ~√5 ≈ 2,2-fach, gleichwertig
schrumpft die Stichprobengröße für dieselbe Hypothese um ~40–60 %.
Bei 25.000 £ pro eingeschriebenem Patienten sind 200 Patienten weniger
≈ 5 Mio. £ gespart pro Studie — der kommerzielle Fall für die
Validierungsinvestition (selbst vielleicht 1–2 Mio. £) über die
Pipeline eines Sponsors hinweg.
```

## Bezug zur Softwareentwicklung

Digitale Endpunkte sind eine Datentechnik-Disziplin in klinischer Verkleidung: **Herkunft und Versionierung** (Algorithmus-Updates mitten in der Studie bedrohen die Vergleichbarkeit — das [PCCP](../regulatorische-ki-evaluation/)-Problem in Studienform; versionssperren und Brücken-validieren); **Design für fehlende Daten** (Lücken in der Tragezeit sind informativ, nicht zufällig — siehe [Wearable-Validierung](../wearable-validierung/); Imputationsentscheidungen sind wissenschaftliche Behauptungen); und **Edge-/Cloud-Aufteilungsentscheidungen**, die ändern, welches Rohsignal später überhaupt wiederherstellbar ist. Teams, die die Messpipeline vom ersten Tag an wie regulierte Software behandeln — getestet, versioniert, dokumentiert — kaufen die Glaubwürdigkeit ihrer Endpunkte günstig; Validierung nachträglich auf eine schnell gebaute Pipeline aufzusetzen ist, woran Programme für digitale Endpunkte sterben.

## Fallstricke

- **Korrelation mit der Klinik als vollständige Validierung**: eine fehlerhafte Klinikmessung zu treffen beweist Vererbung, nicht Wahrheit; gegen den bedeutsamen Gesundheitsaspekt validieren.
- **Regulatorisches Risiko neuartiger Endpunkte**: ein beispielloser Endpunkt kann wissenschaftlich überlegen sein und trotzdem eine Einreichung versenken — Regulierer früh einbinden (Qualifizierungsprogramme existieren).
- **Fehlanpassung Sensor-Bevölkerung**: Validierung an jungen, gesunden Handgelenken, Einsatz bei älteren Patienten mit Tremor und Pigmentierungsunterschieden, die die PPG nie sah.
- **Feature-Drift**: das Gang-Algorithmus-Retraining an neuen Daten definiert den Endpunkt still mitten in der Studie neu.

## Quellen

- Coravos A, Khozin S, Mandl KD. "Developing and adopting safe and effective digital biomarkers to improve patient outcomes." npj Digital Medicine 2019. <https://www.nature.com/articles/s41746-019-0090-4>
- Digital Medicine Society (DiMe), digital endpoints resources. <https://dimesociety.org/>
