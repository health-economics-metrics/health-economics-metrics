# DORA-Metriken

Die DORA-Metriken (DevOps Research and Assessment) sind vier Messgrößen für die Leistung der Softwareauslieferung — Deployment-Häufigkeit, Lead-Time für Änderungen, Change-Failure-Rate und Wiederherstellungszeit nach fehlgeschlagenem Deployment — plus Zuverlässigkeit als fünfte. Sie sind die am besten validierten Liefer-Benchmarks des Feldes, und jede hat eine direkte gesundheitsökonomische Lesart.

## Warum es wichtig ist

Ein Jahrzehnt DORA-Forschung verknüpft diese Metriken mit organisatorischer Leistung. Die Cluster des Berichts 2024: **Elite**-Teams deployen auf Abruf (mehrmals täglich), brauchen unter einem Tag von Commit bis Produktion, scheitern bei ~5 % der Änderungen und erholen sich in unter einer Stunde; **schwache** Teams deployen monatlich oder seltener, brauchen Monate, scheitern bei ~40 % der Änderungen und erholen sich in Wochen. Für ein Gesundheitssystem sind das keine IT-Eitelkeitszahlen: Sie bestimmen, wie schnell klinischer Wert Patienten erreicht und wie viel Risiko jede Änderung trägt.

## Die Mathematik

```
Deployment-Häufigkeit    = Produktions-Deployments / Zeit
Lead-Time für Änderungen = t(Deploy) − t(Commit), Median
Change-Failure-Rate      = fehlgeschlagene Änderungen / Änderungen gesamt × 100
Wiederherstellungszeit (MTTR) = t(wiederhergestellt) − t(Ausfall), Median
Zuverlässigkeit           = SLO-Erreichung (Verfügbarkeit, Latenz, Korrektheit)
```

Gesundheitsökonomische Übersetzungen:

```
Lead-Time     → cost-of-delay.md: Wochen in der Pipeline × CoD (£ oder QALYs/Woche)
Fehlerrate    → unerwünschte-Ereignis-Rate der Softwareänderung: CFR × Kosten pro Vorfall
Wiederherst.  → Ausfallschaden: MTTR × (verlorene klinische Tätigkeit
zeit            + Sicherheitsrisiko)/Std.
Zuverlässigk. → Nutzenabschlag: ein Dienst mit 99 % Verfügbarkeit liefert
                ≈ 0,99 seines modellierten Nutzens — das Software-Analogon
                zur Adhärenz
```

## Durchgerechnetes Beispiel

Das Patientenfluss-Softwareteam eines Trusts, vorher/nachher einer Investition in Delivery Engineering:

```
                    Vorher      Nachher
Deployments         monatlich   wöchentlich
Lead-Time           6 Wochen    4 Tage
CFR                 25 %        8 %
MTTR                2 Tage      2 Stunden
```

Das Team liefert ~30 Verbesserungen/Jahr mit durchschnittlichem Wert pro Verbesserung von 4.000 £/Woche ([CoD](../verzögerungskosten/)). Die Lead-Time-Kürzung um ~5,4 Wochen zieht den Nutzenstrom jeder Verbesserung vor: 30 × 5,4 × 4.000 ≈ **648.000 £/Jahr** früher ausgelieferten Werts. CFR-Verbesserung: 30 × (0,25 − 0,08) = ~5 weniger fehlgeschlagene Änderungen/Jahr × 15.000 £ durchschnittliche Vorfallkosten (Ausfall klinischer Systeme, Behebung) = **76.500 £/Jahr**. Die Delivery-Investition wird in derselben Währung bewertet wie jede klinische Intervention.

## Bezug zur Softwareentwicklung

Das *ist* bereits die Softwareseite — die Verbindung, die es zu benennen lohnt, ist die umgekehrte Abbildung: DORA-Metriken sind die operativen Kennzahlen des Krankenhauses in anderer Verkleidung. Lead-Time ↔ [Überweisung zur Behandlung](../überweisung-zur-behandlung/); Change-Failure-Rate ↔ [Wiederaufnahmerate](../wiederaufnahmerate/) (Arbeit, die zurückprallte); MTTR ↔ Notfallreaktion; Deployment-Häufigkeit ↔ Klinikdurchsatz. Verbesserungsmethoden übertragen sich in beide Richtungen, weil beides Warteschlangensysteme unter Sicherheitsrestriktionen sind. Beachtenswert auch DORA 2025s KI-Befund: KI-Adoption korreliert inzwischen mit höherem Durchsatz, aber *schlechterer* Stabilität — eine Intervention mit Wirksamkeit und Nebenwirkungen, die genau die Netto-Nutzen-Analyse verlangt, die dieses Repository lehrt (siehe [KI-Entwicklerproduktivität](../ki-entwicklerproduktivität/)).

## Fallstricke

- **Kennzahlen-Manipulation**: Deployment-Zahlen aufgebläht durch No-op-Releases; CFR gedrückt, indem Hotfixes nicht als Fehlschläge gezählt werden. Ereignisse präzise definieren, wie HTA Endpunkte definiert.
- **Team-übergreifende Ranglisten**: DORA-Cluster vergleichen Praktiken, nicht Teams mit unterschiedlichen Risikoprofilen; ein Team für klinische Systeme bei "hoch" kann optimal sein, wo "elite" fahrlässig wäre.
- **Eine Kennzahl optimieren**: Geschwindigkeit ohne CFR/Zuverlässigkeit ist der Durchsatz-Stabilitäts-Kompromiss — immer alle vier gemeinsam berichten (sie sind eine [Kosten-Konsequenzen-Tabelle](../kosten-konsequenzen-analyse/), kein Score).

## Quellen

- DORA research and reports. <https://dora.dev/>
- 2024 DORA benchmarks summary. <https://octopus.com/devops/metrics/dora-metrics/>
- DORA 2025 State of AI-assisted Software Development. <https://dora.dev/dora-report-2025/>
