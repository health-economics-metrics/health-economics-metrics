# Openthaltsdauer (Length of Stay, LOS)

D'Openthaltsdauer ass d'Zuel vun Deeg vun der Spidolsadmissioun bis zur Entloossung — déi zentral Flow-Effizienz-Metrik vun der stationärer Betreiung. UK-Akut-Mëttelwäerter leie bei 4–5 Deeg; all Iwwerschossdag verbraucht e knappt Bett an expunéiert de Patient fir spidolsakquiréiert Risiken.

## Firwat et wichteg ass

LOS dreift bal alles an der Akutspidols-Ökonomie: Bettekapazitéit, Elektiv-Duerchsaz, Noutfall-Floss, Personal. D'duerchschnëttlech LOS och nëmmen em Bruchdeeler vun engem Dag op Skala ze reduzéieren setzt enorm Kapazitéit fräi (kuckt [agespuert Bettdeeg](../agespuert-bettdeeg/)). LOS ass och en Qualitéitssignal a béid Richtungen — ze laang deit op Prozessversoen (verzögert Diagnostik, Entloossungspabeierkram, Sozialbetreiungs-Waardezäiten); ze kuerz kann virzäiteg Entloossung heeschen, déi sech méi spéit als [Readmissiounen](../heiansaufnamquote/) weist.

## D'Mathematik

```
LOS (pro Episod)   = Entloossungsdatum − Admissiounsdatum
Duerchschnëttlech LOS = besate Bettdeeg / Entloossungen (Mëttelwäert AN Median mellen;
                      LOS ass staark riets-schif duerch Laangopenthalt-Ausreisser)

Vergläicher brauchen Case-Mix-Ajustéierung (Alter, Diagnos, Akuitéit),
soss moosst een, wiem d'Spidol admittéiert, net wéi et performt.
```

Little's Law verbënnt d'Flow-Variabelen: `besate Better = Admissiounsquote × duerchschnëttlech LOS` — dat selwecht Gesetz, dat Softwareschlaangen regéiert (kuckt [Flow-Metriken](../flow-metriken/)).

## Berechent Beispill

En Trust admittéiert 40 medezinesch Noutfallpatienten/Dag bei mëttlerer LOS 6,0 Deeg: 240 Better permanent besat (40 × 6). Entloossungskoordinatiouns-Software (Aufgaben-Tracking, Apdikt-zu-Take-out-Automatiséierung, Transportbuchung) kierzt dat net-klinescht Enn vun den Openthalter am Duerchschnëtt em 0,4 Deeg.

```
Néideg Better = 40 × 5,6 = 224 → 16 Better kontinuéierlech fräi
              = 16 × 365 = 5.840 Bettdeeg/Joer
```

Déi 5.840 Bettdeeg no Mechanismus bewäerten (Nei-Opfëllen/Zoumaachen/Spillraum) laut [agespuert Bettdeeg](../agespuert-bettdeeg/). Bemierkt, wat sech beweegt huet: net Medizin, mee *Waarden* — de Patient war medezinesch fit; de System huet nach ëmmer Pabeierkram gemaach. Dat ass e Schlaangeproblem, a Software ass gutt bei Schlaangeproblemer.

## Bezuch zur Softwareentwécklung

LOS ass dem Spidol seng Cycle Time, an dat Verbesserungs-Playbook ass identesch mat der Delivery-Flow-Aarbecht: d'Stadien instrumentéieren (Admissioun → Behandlung → medezinesch-fit → tatsächlech-entlooss), fannen, wou Zäit sech sammelt (et sinn d'Handoffs), Waardezoustänn ewechhuelen amplaz Kapazitéit derbäizesetzen. D'„medezinesch fit fir Entloossung awer nach ëmmer e Bett besetzend"-Kohort ass dem Spidol seng Versioun vun engem PR, dee genehmegt awer net gemergt ass. Direkt Softwarechancen: Entloossungsaufgaben-Orchestratioun, Diagnostik-Duerchlafzäit, E-Verschreiwung vun Entloossungsmedikamenter, Sozialbetreiungs-Referral-Integratioun.

## Falen

- **Nëmmen Mëttelwäert mellen** — Ausreisser dominéieren; e fallende Mëttelwäert kann e wuessenden Laangopenthalt-Tail verstoppen.
- **Keng Case-Mix-Ajustéierung** bei Virdrun/Duerno-Behaaptungen: Admissiounsschwellen änneren sech saisonal a säkulär.
- **LOS-Reduktioun, déi als Readmissioun erëm opdaucht** — LOS-Behaaptungen ëmmer mat 30-Deeg-Readmissiounsdaten paaren.

## Quellen

- OECD, length of hospital stay indicator. <https://www.oecd.org/en/data/indicators/length-of-hospital-stay.html>
- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
