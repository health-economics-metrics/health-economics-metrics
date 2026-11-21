# QALY-Defizit a Schwéiergrad-Modifikatoren

D'QALY-Defizit mooss, wéi vill zukünfteg Gesondheet eng Krankheet de Patienten am Verglach zur Allgemengbevëlkerung hëlt. NICE benotzt et, fir **Schwéiergrad-Modifikatoren** unzewenden: wat d'Bevëlkerung méi krank ass, wat all gewonnene QALY méi wäert ass — bis zum 1,7-Fachen vum Standard-Schwellewäert.

## Firwat et wichteg ass

Zënter dem NICE-Manuel vun 2022 ass de Schwéiergrad e explizite Multiplikator fir de Wäert vu Gesondheetsgewënn a léist déi al End-of-Life-Prime of. Eng Technologie fir eng schwéier Krankheet gëtt géint e effektive Schwellewäert vu bis zu ~51.000 £/QALY amplaz 30.000 £ bewäert. Wann Är Software eng schwéier betraff Bevëlkerung bedéngt (fortgeschratt Häerzinsuffisenz, schwéier psychesch Krankheet), kann de Schwéiergrad-Modifikator den Ënnerscheed tëschent engem finanzéierbaren an engem net finanzéierbare wirtschaftleche Fall maachen — an Dir braucht d'Defizit-Mathematik, fir en ze behaapten.

## D'Mathematik

Zwou Moossen, iwwer d'Restliewenszäit mat dem aktuelle Versuergungsstandard berechent:

```
Absolutt Defizit        = QALYs_Allgemengbevëlkerung − QALYs_mat_Krankheet
Proportionaalt Defizit  = Absolutt Defizit / QALYs_Allgemengbevëlkerung
```

NICE-2022-Gewiichter (et gëllt déi Moossnam, déi dat méi héicht Gewiicht gëtt):

```
Gewiicht ×1,0: absolutt < 12 an proportionaal < 0,85
Gewiicht ×1,2: absolutt ≥ 12 oder proportionaal ≥ 0,85
Gewiicht ×1,7: absolutt ≥ 18 oder proportionaal ≥ 0,95
```

D'Gewiicht multiplizéiert ΔE (oder äquivalent de Schwellewäert): de effektive λ gëtt 24.000–36.000 £ bei ×1,2 a 34.000–51.000 £ bei ×1,7.

## Berechent Beispill

Patienten mat enger aggressiver Krankheet, Duerchschnëttsalter 60. D'Allgemengbevëlkerung mat 60 erwaart 14,2 diskontéiert QALYs; mat der Krankheet ënner aktueller Versuergung 2,1.

```
Absolutt Defizit       = 14,2 − 2,1 = 12,1  (≥ 12 → qualifizéiert fir ×1,2)
Proportionaalt Defizit = 12,1 / 14,2 = 0,852 (≥ 0,85 → och ×1,2)
```

Den ICER vun Ärer Iwwerwaachungsplattform ass 26.000 £/QALY — iwwer der Standard-Mëtt vun 20.000–30.000 £, Grenzfall. Mam Gewiicht ×1,2: effektiven ICER = 26.000 / 1,2 ≈ **21.700 £/QALY** — kloer finanzéierbar. D'Defizit-Berechnung huet d'Entscheedung just verréckelt.

## Bezuch zur Softwareentwécklung

D'Schwéiergrad-Gewiichtung ass eng formell Versioun vun deem, wat Engineering-Organisatioune vum Instinkt hier maachen: méi pro Eenheet Verbesserung fir déi schlechtst gestallt Systemer ausginn. D'iwwerdroebart Muster — fir all Service säin „SLO-Defizit" berechnen (wéi wäit en ënner senger erwaarter gesonder Basislinn leeft, absolutt a proportionaal) an de Wäert vun der Remediatioun entspriechend gewichten. Dat begrënnt mat Arithmetik amplaz Argumenter, firwat dat brennend Legacy-System méi Investitioun pro gespuerter Stonn kritt wéi e gesonden. Et hëlt déiselwecht Gouvernance-Lektioun mat: d'Gewiichter *virun* der Prioritéitssëtzung publizéieren, soss behaapt all Team Schwéiergrad.

## Falen

- **Defizit géint déi falsch Basislinn berechnen**: et gëtt ënner dem *aktuelle Versuergungsstandard* gemooss, net ënner der onbehandelter Natiergeschicht.
- **Alterssensibilitéit**: d'Defizit hänkt staark vum Alter vun der Bevëlkerung of (méi jonk Patiente hunn méi QALYs ze verléieren → méi héicht absolutt Defizit); déi tatsächlech Altersverdeelung vun der behandelter Bevëlkerung benotzen.
- **Unhuelen, de Modifikator gëllt anzwousch anescht** — et ass e NICE-Mechanismus (England); aner HTA-Organer behandelen Schwéiergrad anescht (oder guer net).

## Quellen

- Analysis of NICE severity modifier decisions, Value in Health 2024. <https://www.sciencedirect.com/science/article/pii/S1098301524000858>
- NICE health technology evaluations: the manual (PMG36). <https://www.nice.org.uk/process/pmg36>
- Mtech Access, NICE HTA decision modifiers explainer. <https://mtechaccess.co.uk/nice-hta-decision-modifier/>
