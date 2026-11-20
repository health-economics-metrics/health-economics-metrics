# Verweildauer (LOS)

Die Verweildauer ist die Anzahl der Tage von der Krankenhausaufnahme bis zur Entlassung — die zentrale Flusseffizienz-Kennzahl der stationären Versorgung. Britische Akutmittelwerte liegen bei etwa 4–5 Tagen; jeder überzählige Tag verbraucht ein knappes Bett und setzt den Patienten Krankenhausrisiken aus.

## Warum es wichtig ist

Die Verweildauer treibt fast alles in der Ökonomie von Akutkrankenhäusern: Bettenkapazität, elektiven Durchsatz, Notfallfluss, Personalbedarf. Eine Senkung der durchschnittlichen Verweildauer um selbst Bruchteile eines Tages setzt im großen Maßstab enorme Kapazität frei (siehe [eingesparte Bettentage](../eingesparte-bettentage/)). Die Verweildauer ist auch ein Qualitätssignal in beide Richtungen — zu lang deutet auf Prozessversagen hin (verzögerte Diagnostik, Entlassungspapiere, Wartezeit auf Sozialpflege); zu kurz kann vorzeitige Entlassung bedeuten, die sich später als [Wiederaufnahme](../wiederaufnahmerate/) zeigt.

## Die Mathematik

```
Verweildauer (pro Fall) = Entlassungsdatum − Aufnahmedatum
Durchschnittliche Verweildauer = belegte Bettentage / Entlassungen
                                 (Mittelwert UND Median berichten;
                                 die Verweildauer ist durch Langzeit-
                                 Ausreißer stark rechtsschief)

Vergleiche brauchen eine Fallmix-Bereinigung (Alter, Diagnose, Schweregrad),
sonst misst man, wen das Krankenhaus aufnimmt, nicht wie es arbeitet.
```

Little's Law verbindet die Flussvariablen: `belegte Betten = Aufnahmerate × durchschnittliche Verweildauer` — dasselbe Gesetz, das Software-Warteschlangen regiert (siehe [Flow-Metriken](../flow-metriken/)).

## Durchgerechnetes Beispiel

Ein Trust nimmt 40 internistische Notfallpatienten/Tag bei mittlerer Verweildauer von 6,0 Tagen auf: 240 Betten dauerhaft belegt (40 × 6). Software zur Entlassungskoordination (Aufgabenverfolgung, Automatisierung der Medikamentenausgabe, Transportbuchung) kürzt den nichtklinischen Anteil der Aufenthalte im Schnitt um 0,4 Tage.

```
Benötigte Betten = 40 × 5,6 = 224 → 16 Betten dauerhaft freigesetzt
                 = 16 × 365 = 5.840 Bettentage/Jahr
```

Die 5.840 Bettentage nach Mechanismus bewerten (Neubelegung/Schließung/Puffer) gemäß [eingesparte Bettentage](../eingesparte-bettentage/). Beachtenswert, was sich hier bewegt hat: nicht Medizin, sondern *Warten* — der Patient war medizinisch entlassungsbereit; das System erledigte noch Papierkram. Das ist ein Warteschlangenproblem, und Software ist gut in Warteschlangenproblemen.

## Bezug zur Softwareentwicklung

Die Verweildauer ist die Zykluszeit des Krankenhauses, und das Verbesserungs-Playbook ist identisch mit der Arbeit am Lieferfluss: die Phasen instrumentieren (Aufnahme → Behandlung → medizinisch entlassungsbereit → tatsächlich entlassen), finden, wo sich Zeit staut (es sind die Übergaben), Wartezustände beseitigen statt Kapazität hinzuzufügen. Die Kohorte "medizinisch entlassungsbereit, aber noch bettenbelegend" ist die Krankenhausversion eines genehmigten, aber nicht gemergten Pull Requests. Direkte Software-Chancen: Orchestrierung von Entlassungsaufgaben, Diagnostik-Durchlaufzeit, E-Verschreibung von Entlassungsmedikamenten, Integration der Sozialpflege-Überweisung.

## Fallstricke

- **Nur den Mittelwert berichten** — Ausreißer dominieren; ein sinkender Mittelwert kann einen wachsenden Langzeit-Ausläufer verbergen.
- **Keine Fallmix-Bereinigung** bei Vorher-Nachher-Behauptungen: Aufnahmeschwellen ändern sich saisonal und langfristig.
- **Verweildauer-Senkung, die als Wiederaufnahme wiederkehrt** — Verweildauer-Behauptungen immer mit 30-Tage-Wiederaufnahmedaten kombinieren.

## Quellen

- OECD, length of hospital stay indicator. <https://www.oecd.org/en/data/indicators/length-of-hospital-stay.html>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
