# Arbeitsproduktivität und Aktivitätsbeeinträchtigung (WPAI)

WPAI ist ein validierter Selbstauskunftsfragebogen (Reilly, Zbrozek, Dasbach, 1993), der misst, wie stark ein Gesundheitsproblem die bezahlte Arbeit und die täglichen Aktivitäten beeinträchtigt, meist über die letzten 7 Tage. Er teilt den Verlust in *Absentismus* — tatsächlich versäumte Arbeitszeit — und *Präsentismus* — verminderte Produktivität bei körperlicher Anwesenheit am Arbeitsplatz; Letzterer ist meist die größere, verborgenere Kostenkomponente.

## Warum es wichtig ist

Einfache Krankentagzählungen sehen nur den Absentismus. Ein Kliniker oder Wissensarbeiter, der nie einen Tag fehlt, aber bei einer chronischen Erkrankung mit 60 % Leistung arbeitet, trägt nichts zu einem Abwesenheitsregister bei und erzeugt dennoch einen großen, realen Produktivitätsverlust — WPAI ist gerade dafür gemacht, diese unsichtbaren Kosten sichtbar zu machen. Weil es ein validiertes Instrument und keine maßgeschneiderte Umfrage ist, lassen sich seine Scores in Evidenzpaketen zu [patientenberichteten Ergebnissen](../patientenberichtete-endpunkte/) und in Krankheitskostenstudien verwenden, ohne dass der Gutachter das Maß neu validieren muss. Als Selbstauskunftsinstrument ist es selbst eine Form von PROM, die sich vor allem durch ihren Fokus auf Arbeit und Aktivität statt auf Symptome oder Lebensqualität auszeichnet.

## Die Mathematik

```
Absentismus % = versäumte_Stunden_wegen_Gesundheit / (versäumte_Stunden_wegen_Gesundheit + gearbeitete_Stunden) × 100

Präsentismus %  = selbstbewertete Beeinträchtigung bei der Arbeit 0–10, × 10
                  (direkt per Fragebogen erhoben, hier nicht abgeleitet)

Gesamte Arbeitsbeeinträchtigung % =
    Absentismus% + (1 − Absentismus%/100) × Präsentismus%
    (verbindet beide so, dass die Summe nie 100 % übersteigen kann)

Produktivitätskosten = Gesamte_Arbeitsbeeinträchtigung% / 100 × Verdienst_im_Zeitraum
```

Die Formel für die Gesamtbeeinträchtigung ist bewusst keine einfache Summe: Das direkte Addieren der beiden Prozentwerte könnte 100 % übersteigen, daher wird der Präsentismus nur auf den *verbleibenden* (nicht abwesenden) Anteil der Arbeitszeit angewandt.

## Durchgerechnetes Beispiel

Ein Beschäftigter mit Migräne ist für eine 40-Stunden-Woche eingeplant, versäumt aber 4 Stunden davon:

```
versäumte_Stunden = 4, gearbeitete_Stunden = 36
Absentismus% = 4 / (4 + 36) × 100 = 10 %
```

Die Produktivitätsauswirkung bei der Arbeit bewertet er separat im WPAI-Fragebogen mit 3 von 10, d. h. `Präsentismus% = 30 %` (dieser Schritt ist eine rohe Fragebogenantwort, nichts, was aus anderen Zahlen abgeleitet wird):

```
Gesamte Arbeitsbeeinträchtigung% = 10 + (1 − 10/100) × 30
                                 = 10 + 0,9 × 30
                                 = 10 + 27
                                 = 37 %
```

Bei einer 5-Tage-Woche mit 800 £ Verdienst (160 £/Tag):

```
Produktivitätskosten = 37/100 × 800 = 296 £
```

Man beachte, dass eine naive Krankentagzählung nur die 4 versäumten Stunden (10 %) erfasst hätte — die Präsentismus-Komponente verdreifacht die tatsächliche Beeinträchtigung fast, sobald sie mitgezählt wird.

## Bezug zur Softwareentwicklung

Das lässt sich direkt auf Gesundheitskennzahlen von Entwicklungsteams übertragen:

- **Absentismus** sind Krankheitstage und bezahlter Urlaub — sichtbar, bereits erfasst und der leichte Teil.
- **Präsentismus** ist der ausgebrannte oder durch Kontextwechsel überlastete Entwickler, der in jedem Stand-up anwesend ist, aber mit verminderter Kapazität arbeitet — meist der größere und verborgenere Kostenanteil, unsichtbar für Kopfzahl- oder Anwesenheitsdaten. Er zeigt sich stattdessen als verringerter Durchsatz in [DORA](../dora-metriken/)- und [Flow-Metriken](../flow-metriken/) oder als langsamere Abarbeitung genau jener [technischen Schulden](../technische-schulden/), deren „Zinsen" die Beeinträchtigung weiter verstärken.
- Die ingenieurtechnische Lehre ist dieselbe wie die klinische: Nur Abwesenheit zu messen und das „Produktivitätsverlust" zu nennen, unterschätzt die wahren Kosten systematisch, weil es alle übersieht, die anwesend, aber beeinträchtigt sind.

## Fallstricke

- **Erinnerungsverzerrung bei Selbstauskunft.** Ein 7-Tage-Rückblickfenster unterliegt denselben Berichtsverzerrungen wie jede retrospektive Selbstauskunft.
- **Die 0–10-Präsentismusskala als echte physikalische Messung behandeln.** Sie ist ordinal, per Selbstbewertung erhoben, keine validierte physikalische Größe — Unterschiede darauf als streng linear oder intervallskaliert zu behandeln, ist eine Modellierungsbequemlichkeit, keine validierte physikalische Tatsache.
- **Scores über WPAI-Varianten hinweg poolen.** WPAI hat mehrere krankheitsspezifische Versionen — WPAI:GH (allgemeine Gesundheit), WPAI:SHP (spezifisches Gesundheitsproblem) und krankheitsspezifische Varianten —, und Scores verschiedener Varianten sollten nicht gepoolt oder verglichen werden, ohne zuvor zu prüfen, dass es dieselbe Instrumentversion ist.

## Quellen

- Reilly MC, Zbrozek AS, Dasbach EJ. „The validity and reproducibility of a work productivity and activity impairment instrument." PharmacoEconomics 1993;4(5):353-65.
- WPAI-Instrumentdokumentation, Reilly Associates — die offizielle Auswertungsreferenz. <https://www.reillyassociates.net/>
