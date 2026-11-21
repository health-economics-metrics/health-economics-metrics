# Gewonnene Liewensjoer (Life-Years Gained, LYG)

Gewonnene Liewensjoer sinn dat zousätzlecht Iwwerliewen, dat enger Interventioun zougeschriwwe gëtt, ouni Qualitéitsajustéierung: d'Fläch tëscht den Iwwerliewenskurve mat an ouni se. D'Equal-Value-Life-Year-Gained (evLYG) ass eng modern Variant, déi all Liewensverlängerung gläich unrechent.

## Firwat et wichteg ass

LYG ass dat rauste Gesondheets-Outcome: wéi vill méi laang liewen d'Leit? Et ass wichteg, wann Qualitéitsdaten feelen, wann een mat QALY-skeptesche Publika vergläicht, an an der Onkologie, wou Iwwerliewenskurven den primäre Studie-Output sinn. D'**evLYG** (vum US-ICER-Institut nieft Käschte/QALY benotzt) gëtt et aus engem ethesche Grond: QALYs bewäerten e verlängert Joer duerch d'Utilitéit vum Patient, also „zielt" d'Verlängere vum Liewe vun enger Persoun mat enger Behënnerung manner — evLYG bewäert all verlängert Joer mat enger fixer Utilitéit a hëlt dës Diskriminatioun ewech.

## D'Mathematik

```
LYG = mëttlert Iwwerliewen_nei − mëttlert Iwwerliewen_Komparator
    = Fläch tëscht Iwwerliewenskurven (op den Zäithorizont beschränkt)

QALY-Sicht op Liewensverlängerung:  Verlängerung × Patient-Utilitéit
evLYG-Sicht op Liewensverlängerung: Verlängerung × fix Utilitéit (ICER benotzt ~0,851,
                                    d'duerchschnëttlech US-Populatiouns-Utilitéit)
```

Béid ginn an ökonomesche Modeller [diskontéiert](../diskontéierung-an-zäitpräferenz/).

## Berechent Beispill

E Sepsis-Fréiwarn-Algorithmus an engem Spidol: d'Modelléierung weist, datt méi fréi Antibiotika 12 Doudesfäll/Joer verhënneren; d'Duerchschnëttsalter vun dëse Patiente gëtt 8 verbleiwend Liewensjoer jidderee bei Utilitéit 0,7.

```
LYG   = 12 × 8            = 96 Liewensjoer/Joer
QALYs = 96 × 0,7          = 67,2
evLYG = 96 × 0,851        = 81,7
```

Bei 20.000 £ pro QALY bewäert d'QALY-Framing d'Iwwerliewe mat 1,34 Mio. £/Joer; d'evLYG-Framing mat 1,63 Mio. £. D'Lück ass genau dat etescht Uerteel doriwwer, ob e Liewensjoer bei Utilitéit 0,7 70 % vun engem „vollen" wäert ass. Eescht Dossieren mellen béides.

## Bezuch zur Softwareentwécklung

- Iwwerliewensanalys ass dat gedeelt Toolkit: Kaplan-Meier-Kurve fir Patienten an fir *Servicer* (Time-to-Failure, Time-to-Churn) sinn dee selwechte Mathematik. „Service-Joer gewonnen" aus enger Zouverlässegkeetsinvestitioun = Fläch tëscht de Mat/Ouni-Iwwerliewenskurve vum System — eng éierlech Framing wéi Punkt-MTTF-Behaaptungen.
- D'evLYG dréit och eng Metrik-Design-Warnung fir Engineering: all Produktivitéitsmetrik, déi Output no engem „Equipequalitéits"-Faktor gewiicht, wäert Verbesserunge fir beschränkt oder kämpfend Equipen systematesch ënnerbewäerten — heiansdo wëllt een d'Equal-Value-Variant absichtlech.

## Falen

- **Median vs. Mëttelwäert vum Iwwerliewen**: ökonomesch Modeller brauchen de Mëttelwäert (Fläch ënner der Kurve); Studien stellen dacks de Median an d'Schlagzeil. Si ënnerscheeden sech vill bei schif Verdeelungen.
- **Extrapolatioun iwwer d'Studie-Follow-up eraus** dominéiert modelléiert LYG bei chronescher Krankheet — de Extrapolatiounsmodell uginn an an der [Sensitivitéitsanalyse](../sensitivitéitsanalyse/) testen.
- **Verhënnert Doudesfäll aus observationalen Virdrun/Duerno-Daten behaapten** ouni Case-Mix an säkulär Trends ze ajustéieren.

## Quellen

- York Health Economics Consortium glossary: life-years gained. <https://yhec.co.uk/glossary/life-years-gained/>
- ICER, "Cost-Effectiveness, the QALY, and the evLYG." <https://icer.org/our-approach/methods-process/cost-effectiveness-the-qaly-and-the-evlyg/>
