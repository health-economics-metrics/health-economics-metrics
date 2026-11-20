# Nichterscheinensrate (DNA)

Die DNA-Rate ist der Prozentsatz gebuchter Termine, bei denen der Patient weder erscheint noch absagt. Der Kliniker, der Raum und der Slot werden bezahlt; nichts geschieht. Es ist die reinste Verschwendungskennzahl im Gesundheitswesen — und eine der am leichtesten softwareseitig behebbaren.

## Warum es wichtig ist

Zahlen von NHS England (2019): Verpasste Hausarzttermine übersteigen 15 Millionen/Jahr zu je ~30 £ — über **216 Mio. £/Jahr** — und ambulante Krankenhaus-DNAs liegen bei ~8 Mio./Jahr (~6,4 % der Termine) zu durchschnittlich ~**160 £** pro verpasstem Slot. Weil die Grenzkosten einer Erinnerung Cent-Beträge sind und der zurückgewonnene Wert ein voll besetzter klinischer Slot ist, gehört die DNA-Reduktion zu den besten ROI-Rechnungen in der digitalen Gesundheit — deshalb zählten SMS-Erinnerungen, einfache Umbuchung und prädiktive Überbuchung zu den ersten bewährten Erfolgen der digitalen Gesundheit.

## Die Mathematik

```
DNA-Rate = DNAs / gebuchte Termine × 100

Wert der Reduktion = Termine × ΔDNA-Rate × Wert pro zurückgewonnenem Slot

Wert pro zurückgewonnenem Slot: der Slot wird neu belegt (Tätigkeitswert /
Wartelistenabbau) oder nicht (Personalzeit teilweise wiederverwendbar) —
der Mechanismus zählt, wie bei eingesparten Bettentagen.
```

## Durchgerechnetes Beispiel

Eine ambulante Abteilung: 200.000 Termine/Jahr, DNA-Rate 8 %. Ein Erinnerungs- und Umbuchungsdienst (SMS mit Ein-Klick-Umbuchung, Transportinfos, barrierefreie Formate) senkt DNAs auf 5,5 %.

```
Zurückgewonnene Slots = 200.000 × 0,025 = 5.000/Jahr
Neu belegt von der Warteliste bei durchschnittlich 160 £ ambulantem Wert:
  5.000 × 160 £ = 800.000 £/Jahr zurückgewonnener Tätigkeit
Dienstkosten: 200.000 × 0,40 £ = 80.000 £/Jahr

Rendite ≈ 10:1, plus 5.000 Wartelistenpatienten früher behandelt
(siehe waiting-list-impact.md und referral-to-treatment.md).
```

Die Effektgröße (2,5 Punkte) ist realistisch: RCTs zu Erinnerungen zeigen durchgängig eine relative DNA-Reduktion von 25–40 %.

## Bezug zur Softwareentwicklung

- **Das ist ein Terminplanungssystem-Problem**: Erinnerungen, selbstbedienbare Umbuchung, automatische Wartelisten-Nachbelegung bei Absagen und No-Show-Vorhersagemodelle, die gezielte Doppelbuchung steuern. Jedes davon ist gewöhnliche Softwareentwicklung mit ungewöhnlich klarem ökonomischem Fall.
- **Das Entwicklungs-Analogon**: No-Shows für reservierte Kapazität — gebucht-aber-untätige CI-Slots, reservierte Cloud-Kapazität, Besprechungsräume, Interview-Panels. Die Ökonomie überträgt sich: ein günstiger automatisierter Anstoß (oder automatische Freigabe ungenutzter Reservierungen) gewinnt teure gebundene Kapazität zurück.
- **Vorschau auf Vorhersage-Ethik**: No-Show-Modelle, trainiert auf Anwesenheitsdaten, kodieren Benachteiligung und Zugangsbarrieren; sie zu nutzen, um wahrscheinliche Nichterscheiner *herabzustufen*, verstärkt Ungleichheit; sie zu nutzen, um Anwesenheit zu *unterstützen* (Transporthilfe, telefonische Alternativen), verringert sie. Siehe [Reichweite und Gerechtigkeit](../reichweite-und-gerechtigkeit/).

## Fallstricke

- **Abgesagt-und-umgebucht doppelt als zurückgewonnenen Wert zählen.**
- **Zurückgewonnene Slots bewerten, die nicht neu belegt werden** — ein leerer Slot mit gesendeter Erinnerung ist immer noch leer.
- **DNA bis auf null jagen**: Die letzten DNA-Punkte sind Patienten mit echten Barrieren; strafende Ansätze (Entlassung nach N DNAs) senken die Kennzahl, indem sie die Patienten aufgeben.

## Quellen

- NHS England, "Missed GP appointments costing NHS millions" (2019). <https://www.england.nhs.uk/2019/01/missed-gp-appointments-costing-nhs-millions/>
- DNA cost summaries. <https://www.deep-medical.ai/cost-of-missed-nhs-appointments/>
