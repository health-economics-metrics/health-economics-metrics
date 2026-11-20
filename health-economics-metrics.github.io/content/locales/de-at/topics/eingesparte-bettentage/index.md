# Eingesparte Bettentage

Ein Bettentag ist ein Patient, der ein Krankenhausbett für einen Tag belegt. "Eingesparte Bettentage" — durch frühere Entlassung, vermiedene Einweisung oder virtuelle Stationen — sind der Arbeitspferd-Nutzen digitaler NHS-Business-Cases und der am häufigsten überbewertete.

## Warum es wichtig ist

Betten sind die bindende Engpassgröße der Akutversorgung: Füllen sich Betten, werden elektive Operationen abgesagt, Krankenwagen stauen sich, und die Notaufnahme läuft voll. Interventionen, die Bettentage freisetzen, tragen daher echten Wert — aber die *Art* des Werts hängt vollständig davon ab, was mit dem freigemachten Bett geschieht. Finanzdirektoren haben gelernt, naive Bettentag-Behauptungen stark zu diskontieren; diese Rechnung richtig hinzubekommen ist ein Glaubwürdigkeitstest.

## Die Mathematik

```
Eingesparte Bettentage = betroffene Patienten × Δ Verweildauer
                          (oder vermiedene Einweisungen × durchschnittliche Verweildauer)

Der Wert hängt von der Nutzung der freigemachten Kapazität ab:
  mit elektiver Tätigkeit neu belegt  → Wert = Erlöse der Tätigkeit oder Wartelisten-Nutzen
  Station geschlossen / heruntergefahren → Wert = freigesetzte Personal- und Betriebskosten (Bargeld)
  als Puffer aufgenommen               → Wert ≈ nur Grenzkosten (Hotelkosten), 50–150 £/Tag
```

Die vollständig umgelegten Durchschnittskosten eines Akutbettentags werden oft mit über 400 £ angegeben (National Cost Collection historisch ~350 £ für überzählige Bettentage) — aber siehe [Grenzkosten vs. Durchschnittskosten](../grenzkosten-vs-durchschnittskosten/): Der Durchschnitt ist fast nie die tatsächliche Einsparung.

## Durchgerechnetes Beispiel

Eine "virtuelle Station" mit Fernüberwachung lässt 600 Patienten/Jahr 2 Tage früher nach Hause gehen: 1.200 eingesparte Bettentage.

- **Naive Behauptung**: 1.200 × 400 £ = 480.000 £. Falsch, sofern keine Station schließt.
- **Ehrliche Behauptung**: Der Trust belegt die Betten mit elektiven orthopädischen Patienten neu. 1.200 Bettentage ÷ 3 Tage durchschnittliche Verweildauer = 400 zusätzliche elektive Fälle zu je ~6.000 £ Erlös bei leistungsbezogener Vergütung = **2,4 Mio. £ zusätzlich finanzierter Tätigkeit** (abzüglich der Grenzkosten der Behandlung dieser Patienten), *plus* 400 Patienten weniger auf der Warteliste. Die Betriebskosten der virtuellen Station (350.000 £) werden dagegengerechnet.

Freigemachte Kapazität, die *wiederverwendet* wird, ist oft mehr wert als die naive Bargeldbehauptung — aber es ist eine andere Art von Wert und muss entsprechend gekennzeichnet werden ([zahlungswirksame vs. nicht zahlungswirksame Einsparungen](../zahlungswirksame-vs-nicht-zahlungswirksame-einsparungen/)).

## Bezug zur Softwareentwicklung

"Eingesparte Servertage" verhalten sich identisch. Die Stilllegung dauerhaft laufender Umgebungen setzt nur dann Bargeld frei, wenn Instanzen beendet werden oder Reservierungen auslaufen; in den Pool zurückgeführte Kapazität ist nur ihre Grenzkosten wert (~0 bei gebundenen Ausgaben). Die parallele Disziplin: für jede behauptete Einsparung den *Mechanismus* benennen — beendet, mit wertvoller Arbeit neu belegt, oder verpufft. Software, die die Verweildauer im Krankenhaus verkürzt (Entlassungskoordination, Fernüberwachung, Diagnostik-Durchlaufzeit), sollte alle drei Szenarien modellieren und den Trust pro Station wählen lassen.

## Fallstricke

- **Durchschnittskostenbewertung** von Grenzkapazität — der klassische Fehler.
- **Doppelzählung**: eingesparte Bettentage *und* vermiedene Einweisungen *und* Wartelistenabbau aus demselben freigemachten Bett.
- **Annahme, gesparte Tage seien die teuren Tage**: Die am Ende des Aufenthalts gesparten Tage sind die günstigsten (niedrige Versorgungsintensität).

## Quellen

- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- Economics by Design, NHS cost calculator. <https://economicsbydesign.com/tools/nhs-cost-calculator/>
