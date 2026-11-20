# Auswirkung von Wartelisten

Die Wartelisten-Wirkung wandelt eingesparte klinische Kapazität in Patienten um, die von der Warteliste entfernt werden (oder schneller durch sie hindurchgehen). Gesparte Stunden in zusätzliche Klinik-Slots umzuwandeln, verringert direkt die Größe der Warteliste eines Trusts — der greifbarste Weg, einem Gesundheitssystem zu zeigen, *wofür* freigemachte Kapazität da ist.

## Warum es wichtig ist

Die elektive Warteliste ist die prägende Post-Pandemie-Herausforderung des NHS (ihre Größe ist eine nationale politische Kennzahl), und jeder Trust betreibt ein Programm zur elektiven Aufholung gegen sie. Ein Business Case, der sagt "spart 2.000 Pflegestunden", ist abstrakt; einer, der sagt "schafft 4.000 zusätzliche Terminslots, behandelt 3.800 wartende Patienten, verkürzt die Liste der Fachrichtung um 9 %", ist eine Geschichte, die ein Chief Operating Officer seinem Vorstand vortragen kann. Die Wartelisten-Wirkung ist die natürliche *Recheneinheit* für [nicht zahlungswirksame Kapazität](../zahlungswirksame-vs-nicht-zahlungswirksame-einsparungen/).

## Die Mathematik

```
Zusätzliche Slots  = freigesetzte Stunden / Slot-Dauer × Auslastung
Behandelte Patienten = zusätzliche Slots × (1 − DNA-Rate)
Listenabbau        = behandelte Patienten − induzierte neue Nachfrage
Wartezeitgewinn    = Warteschlangenverbesserung durch höhere Bedienrate
                     (bei stabilen Warteschlangen zieht das Kürzen des
                     Rückstands N um ΔN bei Bedienrate μ jeden um ~ΔN/μ vor)
```

Gesundheitswert kürzerer Wartezeiten: Patienten verbringen weniger Wochen im niedrigeren Nutzwertzustand vor der Behandlung — die QALY-Rechnung aus [Überweisung zur Behandlung](../überweisung-zur-behandlung/).

## Durchgerechnetes Beispiel

Software zur ambienten Dokumentation spart jeder von 20 Klinikpflegekräften 45 Min./Tag. Über 250 Tage: 20 × 0,75 × 250 = 3.750 Stunden/Jahr.

```
Slots (30 Min., 85 % nutzbar) = 3.750 / 0,5 × 0,85 = 6.375 Slots
Behandelte Patienten (7 % DNA) = 6.375 × 0,93       ≈ 5.929/Jahr
```

Für eine Fachrichtung mit 12.000 Patienten auf der Liste und 24.000 nachfragegerechten Terminen/Jahr Kapazität senken ~5.900 zusätzliche Termine die durchschnittliche Wartezeit um etwa ein Viertel — ein spürbarer Schritt zum 18-Wochen-Standard, ohne Neueinstellungen. Bei ~160 £ Schema-Wert pro Termin ist die Tätigkeit ~949.000 £/Jahr wert (siehe [Nationaler Tarif und Einheitskosten](../nationaler-tarif-und-einheitskosten/)) — aber zuerst die *Wartelisten*-Darstellung präsentieren; sie ist es, an der das System gesteuert wird.

## Bezug zur Softwareentwicklung

Eine Warteliste ist ein Rückstand, und die Ökonomie des Rückstandsabbaus überträgt sich in beide Richtungen. Von der Gesundheit zur Software: Rückstandsabbau danach bewerten, wie lange *Nutzer* auf Wert warten, nicht danach, wie viele Punkte geschlossen wurden ([Verzögerungskosten](../verzögerungskosten/) pro wartendem Punkt). Von der Software zur Gesundheit: Little's Law besagt, dass die Liste nur schrumpft, wenn die Bedienrate die Ankunftsrate übersteigt — Kapazitätsgewinne, die von steigenden Überweisungen aufgesogen werden, lassen die Wartezeit unverändert, also auch Ankünfte modellieren. Und in beiden Bereichen nach schweregradgewichtetem Wert priorisieren (klinische Dringlichkeitskategorien ↔ [Schweregrad-Modifikatoren](../qaly-defizit-und-schweregrad-modifikatoren/)), nicht First-in-first-out.

## Fallstricke

- **Slots ≠ Patienten**: DNA-Raten und unnutzbare Bruchstücke freigesetzter Zeit vergessen.
- **Induzierte Nachfrage**: sichtbar zusätzliche Kapazität zieht Überweisungen an; die Netto-Listenwirkung ist kleiner als die Brutto-Wirkung.
- **Bargeld behaupten**: Die Wartelisten-Wirkung ist Kapazitätswert; die Bargeldbehauptung (vermiedenes Auslagern von Rückstandsarbeit) ist eine andere Zeile — siehe [vermeidbare Outsourcing-Kosten](../vermeidbare-outsourcing-kosten/).

## Quellen

- NHS England, RTT waiting times statistics. <https://www.england.nhs.uk/statistics/statistical-work-areas/rtt-waiting-times/>
- NHS England, elective care recovery plan. <https://www.england.nhs.uk/coronavirus/publication/delivery-plan-for-tackling-the-covid-19-backlog-of-elective-care/>
