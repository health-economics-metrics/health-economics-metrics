# Flow-Metriken

Flow-Metriken moossen, wéi Aarbecht duerch e Delivery-System fléisst: Cycle Time, Lead Time, Duerchsaz, Work in Progress (WIP) a Flow-Effizienz. Si ginn vum Little's Law regéiert — dee selwechte Schlaangemathematik, déi Spidolsbetter a Waardelëschte regéiert.

## Firwat et wichteg ass

Déi meescht Delivery-Zäit ass keng Aarbecht — et ass Waarden. Flow-Effizienz-Studien vu Wëssensaarbecht fanne routinéiert, datt Items nëmmen **5–15 %** vun hirer verstrachener Zäit aktiv bearbecht ginn; de Rescht ass Schlaangen. Dat heescht, déi bëllegst Beschleunegung ass d'Ewechhuele vun Schlaangen, net Astellung — genau d'Erkenntnis, déi Spidols-Patientefloss-Programmer bei de Better entdeckt hunn. Fir alles mat [Verzögerungskäschten](../verzögerungskäschten/) lokaliséieren Flow-Metriken, wou d'Verzögerungskäschte entstinn.

## D'Mathematik

```
Cycle Time      = t(fäerdeg) − t(ugefaang)
Lead Time       = t(geliwwert) − t(ugefrot)       (inkl. Schlaang virun der Aarbecht)
Duerchsaz       = ofgeschloss Items / Zäitraum
WIP             = ugefaangen awer onfäerdeg Items
Flow-Effizienz  = aktiv Zäit / (aktiv + Waardezäit) × 100

Little's Law:  duerchschnëttleche WIP = Duerchsaz × duerchschnëttlech Cycle Time
               (äquivalent: Cycle Time = WIP / Duerchsaz)
```

Little's Law ass den Hiewel: bei fixem Duerchsaz senkt WIP-Reduktioun d'Cycle Time proportional. Et leeft och Spideeler: `besate Better = Admissiounen/Dag × Openthaltsdauer`.

## Berechent Beispill

En Team huet 40 Items an der Aarbecht a schléisst 10/Woch of: Cycle Time = 40/10 = 4 Wochen. Et féiert WIP-Limiten an, WIP gëtt op 15 gesenkt: Cycle Time = 15/10 = **1,5 Wochen** — selwecht Leit, selwechten Duerchsaz, 62 % méi séier Delivery, eleng duerch Schlaangedisziplin.

Mat CoD bewäert: wann Items am Duerchschnëtt 3.000 £/Woch Verzögerungskäschte hunn, verbréngt all Item elo 2,5 Wochen manner a Schlaang: 10 Items/Woch × 2,5 × 3.000 = **75.000 £/Woch u Verzögerungskäschte eliminéiert** — duerch eng Politikännerung, déi näischt kascht.

Spidols-Spigel: 40 Admissiounen/Dag × 6,0 Deeg LOS = 240 Better; d'net-klinesch Waarde bannent dem LOS op 5,6 Deeg senken, a 16 Better ginn fräi ([Openthaltsdauer](../openthaltsdauer/)) — selwecht Gesetz, selwechten Hiewel.

## Bezuch zur Softwareentwécklung

Flow-Metriken sinn déi gemeinsam Sprooch tëscht Delivery-Engineering a Gesondheetsoperatiounen:

- **PR-Substage-Benchmarks** (LinearB, ~8 Mio. PRs): Elite-Pickup-Zäit < 7 h, Review < 6 h, Gesamt-Cycle < ~26 h — d'Pickup-Zäit ass pure Schlaang, dat éischt, wat een attackéiere soll.
- **[Waardelëschten](../impakt-op-d-waardelëscht/)** si Backlogs; **[RTT](../iwwerweisung-bis-behandlung/)** ass Lead Time; **[Bettbeleeung](../agespuert-bettdeeg/)** ass WIP. Verbesserung iwwerdréit sech a béid Richtungen: WIP-Limiten ↔ Admissiounsglättung; Schlaangezäit-Instrumentéierung ↔ Pfadstadium-Tracking.
- Flow-Effizienz ënner 15 % ass an deenen zwee Domäner normal, a béid verstoppen et, well *Leit* beschäftegt sinn, wärend *Aarbecht* waart — d'Auer vun der Aarbecht moossen, net dee vun de Aarbechter.

## Falen

- **Auslaaschtungs-Verehrung**: d'Auslaaschtung vun den Aarbechter Richtung 100 % dreiwen sprengt d'Schlaangezäite nonlinear (M/M/1: Waardezäit ∝ ρ/(1−ρ)) — de Grond, firwat 95-%-besate Spideeler stécken a 95-%-zougewise Equipen stagnéieren.
- **Duerchschnëtter iwwer schif Verdeelungen**: Cycle Times si heavy-tailed; mat Perzentiler (p85) prognostizéieren, net mat Mëttelwäerter.
- **WIP senken, andeems Aarbecht upstream refuséiert gëtt**, a et Flow-Verbesserung nennen — d'Nofro ass net verschwonnen, si ass baussent der Moossgrenz an d'Schlaang gaangen (d'Spidolsversioun: Ambulancen, déi virun der ED waarden).

## Quellen

- Little's Law and flow metrics overviews. <https://agility-at-scale.com/safe/lpm/flow-metrics/> ; <https://getdx.com/blog/flow-metrics/>
- LinearB engineering benchmarks. <https://linearb.io/resources/engineering-benchmarks>
- Reinertsen DG, *The Principles of Product Development Flow*.
