# Verzögerungskosten (CoD)

Verzögerungskosten sind der ökonomische Wert, der pro Zeiteinheit verloren geht, in der ein Feature, Produkt oder Dienst *nicht* ausgeliefert wird. Sie sind die stärkste Brücke zwischen Software-Liefer-Kennzahlen und Gesundheitsökonomie: Sie verwandeln "wir haben zu spät ausgeliefert" in Währung — oder in QALYs.

## Warum es wichtig ist

Reinertsens Regel: "Wenn Sie nur eine Sache quantifizieren, quantifizieren Sie die Verzögerungskosten." Die meisten Organisationen wissen, was ein Projekt kostet, aber nicht, was ein Monat Verzögerung kostet, also optimieren sie Budgets, während sie Zeitwert verbluten. Für Gesundheitssoftware sind die Einsätze wörtlich: Jede Woche, in der sich eine Pfadverbesserung verzögert, warten Patienten länger in schlechterem Gesundheitszustand. CoD ist das stärkste mathematische Rahmenwerk, das man NHS-Stakeholdern präsentieren kann, weil es die *Abwesenheit* der eigenen Software bepreist.

## Die Mathematik

```
CoD = Nutzen pro Zeiteinheit, verloren solange nicht ausgeliefert (£/Woche oder QALYs/Woche)

Gesamter Verzögerungsverlust = CoD × Verzögerungsdauer

Zur Priorisierung siehe wsjf-and-cd3.md: CD3 = CoD / Dauer.
```

Für klinische Software sowohl in Gesundheit als auch in Geld beziffern:

```
CoD_Gesundheit = betroffene Patienten pro Woche × QALY-Gewinn pro Patient
CoD_Geld       = CoD_Gesundheit × λ (Zahlungsbereitschaftsschwelle, 20.000–30.000 £/QALY)
                + operative Einsparungen pro entgangener Woche
```

## Durchgerechnetes Beispiel

**Operativ**: Software spart 200 £ pro Patient auf einem Pfad; ein Trust bearbeitet 50 solcher Patienten/Woche.

```
CoD = 200 × 50 = 10.000 £/Woche
Eine 10-wöchige Beschaffungsverzögerung kostet 200 × 50 × 10 = 100.000 £
an vermeidbarer Verschwendung.
```

**Klinisch**: Eine Triage-Verbesserung entfernt 5 Wochen Wartezeit (Nutzwert 0,68 → 0,80 früher) für 100 Patienten/Woche:

```
QALY-Gewinn pro Patient = (5/52) × 0,12 ≈ 0,0115
CoD_Gesundheit = 100 × 0,0115 = 1,15 QALYs/Woche
CoD_Geld       = 1,15 × 20.000 £ ≈ 23.000 £/Woche Gesundheitswert
```

Eine sechsmonatige Einführungsverzögerung "kostet" ~30 QALYs — das Argument, das eine verzögerte IT-Inbetriebnahme als klinisches Ereignis neu rahmt. (Referenzwert zur Einordnung: Black Swan Farmings berühmte Maersk-Analyse fand einzelne Features mit CoD ≈ 200.000 $/Woche, die 38 Wochen gewartet hatten.)

## Bezug zur Softwareentwicklung

CoD ist die Kennzahl, die [DORA-Lead-Time](../dora-metriken/) und [Flow-Effizienz](../flow-metriken/) finanziell lesbar macht: Lead-Time × CoD = in Warteschlangen verbranntes Geld (oder Gesundheit). Anwendungen:

- **Priorisierung**: Arbeit nach CoD/Dauer ordnen ([WSJF/CD3](../wsjf-und-cd3/)) statt nach lautestem Stakeholder.
- **Prozessökonomie**: Ein zweiwöchiger Release-Rhythmus hat erwartete Verzögerungskosten von ~1 Woche × CoD pro Feature gegenüber kontinuierlicher Auslieferung — die Charge bepreisen.
- **Beschaffung**: NHS-Beschaffungszyklen von 6–18 Monaten haben eine CoD; sie zu zeigen ändert Dringlichkeitsgespräche (siehe [Budget-Impact-Analyse](../budget-impact-analyse/) für das Erschwinglichkeits-Gegenstück).

## Fallstricke

- **Lineare CoD annehmen**: manche Arbeit hat fristenförmigen Wert (regulatorische Termine — unendliche CoD nach dem Termin, null davor) oder abklingenden Wert (First-Mover-Fenster). Das Dringlichkeitsprofil klassifizieren, bevor multipliziert wird.
- **CoD auf Outputs, die niemand will**: Verzögerung kostet nur, wenn die Sache Wert hat; verzögerter Müll ist kostenlos.
- **Doppelzählung von Verzögerung und Diskontierung**: [Diskontierung](../diskontierung-und-zeitpräferenz/) bepreist Zeit bereits über mehrjährige Horizonte; CoD ist die operative Version innerhalb des Horizonts. CoD für Wochen/Monate verwenden, NPV-Verschiebung für Jahre.

## Quellen

- Reinertsen DG, *The Principles of Product Development Flow*.
- Black Swan Farming, Cost of Delay. <https://blackswanfarming.com/cost-of-delay/>
- Cost of delay overview. <https://en.wikipedia.org/wiki/Cost_of_delay>
