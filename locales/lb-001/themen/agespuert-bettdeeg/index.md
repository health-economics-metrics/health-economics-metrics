# Agespuert Bettdeeg

E Bettdag ass ee Patient, deen een Dag laang een Spidolsbett besetzt. „Agespuert Bettdeeg" — duerch méi fréi Entloossung, Admissiounsvermeidung oder virtuell Stationen — sinn de Wierkpäerd-Notzen vun NHS-Digital-Business-Cases, an deen, deen am dackste iwwerbewäert gëtt.

## Firwat et wichteg ass

Better sinn de bindenden Engpass vun der Akutversuergung: wann d'Better voll sinn, ginn Elektiv-Operatioune gestrach, Ambulancen stinn Schlaang an d'Urgence stautt sech. Interventiounen, déi Bettdeeg fräisetzen, hunn dofir echte Wäert — awer d'*Aart* vu Wäert hänkt komplett dovun of, wat mat dem fräigesate Bett geschitt. Finanzdirekteren hunn geléiert, naiv Bettdag-Behaaptungen staark ofzewäerten; dës Arithmetik richteg ze maachen ass en Test vun der Glaubwürdegkeet.

## D'Mathematik

```
Agespuert Bettdeeg = betraffe Patienten × Δ Openthaltsdauer (oder vermeid Admissiounen × Duerchschnëtts-LOS)

De Wäert hänkt vun der Notzung vun der fräigesater Kapazitéit of:
  mat Elektivaktivitéit nei beluecht → Wäert = Aktivitéitsakommes oder Notzen op der Waardelëscht
  Statioun zougemaach / erofgefuer   → Wäert = fräigesat Personal- + Betribskäschten (Cash)
  als Spillraum opgeholl             → Wäert ≈ nëmmen Grenz-(Hotel-)Käschten, 50–150 £/Dag
```

Déi duerchschnëttlech voll absorbéiert Käschte vun engem Akut-Bettdag gi dacks mat 400 £+ ugeruff (National Cost Collection historesch ~350 £ fir iwwerzielegt Bettdeeg) — awer kuckt [Grenz- vs. Duerchschnëttskäschten](../grenzkäschte-vs-duerchschnëttskäschte/): den Duerchschnëtt ass bal ni d'Ersparnis.

## Berechent Beispill

Eng Remote-Monitoring-„Virtual Ward" léisst 600 Patienten/Joer 2 Deeg méi fréi heem: 1.200 Bettdeeg agespuert.

- **Naiv Behaaptung**: 1.200 × 400 £ = 480.000 £. Falsch, ausser eng Statioun mécht zou.
- **Éierlech Behaaptung**: den Trust fëllt d'Better mat elektive orthopädesche Patienten nei op. 1.200 Bettdeeg ÷ 3 Deeg Duerchschnëttsopenthalt = 400 zousätzlech Elektiv-Episoden zu ~6.000 £ Akommes jidderee ënner aktivitéitsbaséierter Bezuelung = **2,4 Mio. £ zousätzlech finanzéiert Aktivitéit** (minus d'Grenzkäschte fir dës Patienten ze behandelen), *plus* 400 Patienten manner op der Waardelëscht. D'Betribskäschte vun der Virtual Ward (350.000 £) ginn dovunner ofgezunn.

Fräigesate Kapazitéit, déi *nei notzt* gëtt, ass dacks méi wäert wéi déi naiv Cash-Behaaptung — awer et ass eng aner Aart vu Wäert a muss esou geluechtert ginn ([cash-fräisetzend vs. net cash-fräisetzend](../cash-fräisetzend-vs-net-cash-fräisetzend-ersparnisser/)).

## Bezuch zur Softwareentwécklung

„Server-Deeg agespuert" verhält sech identesch. Ëmmer-ageschalte Ëmfeld ofzeschalten setzt nëmmen Cash fräi, wann Instanze beendet ginn oder Reservatioune auslafen; Kapazitéit, déi zréck an de Pool absorbéiert gëtt, ass seng Grenzkäschte wäert (~0 bei engagéierte Ausgaben). Déi parallel Disziplin: fir all behaapten Ersparnis de *Mechanismus* nennen — beendet, mat wäertvoller Aarbecht nei opgefëllt oder verdampft. Software, déi d'Spidolsopenthaltsdauer senkt (Entloossungskoordinatioun, Remote Monitoring, Diagnostik-Duerchlafzäit), soll all dräi Szenarie modelléieren an den Trust pro Statioun wielen loossen.

## Falen

- **Duerchschnëttskäschtebewäertung** vu marginaler Kapazitéit — de kanonesche Feeler.
- **Duebelzielen**: agespuert Bettdeeg *an* vermeid Admissiounen *an* Waardelëscht-Reduktioun vum selwechte fräigesate Bett.
- **Unhuelen, déi agespuert Deeg wieren déi deier Deeg**: d'Deeg, déi um Enn vum Openthalt agespuert ginn, sinn déi bëllegst (niddreg Akuitéit).

## Quellen

- NHS England, National Cost Collection. <https://www.england.nhs.uk/costing-in-the-nhs/national-cost-collection/>
- Economics by Design, NHS cost calculator. <https://economicsbydesign.com/tools/nhs-cost-calculator/>
