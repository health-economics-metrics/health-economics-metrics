# Ökonomie vum Screening

D'Ökonomie vum Screening bestëmmt de Wäert vum Testen vun asymptomatesche Bevëlkerungen. Dat mathematescht Kärfakt: **bei niddreger Krankheetsprävalenz generéiere souguer exzellent Tester meeschtens falsch Positiver** — an d'nodeeleg Käschte fir deenen nozegoen kënnen de Notzen vun de richtege Fënn iwwerschwemmen.

## Firwat et wichteg ass

Zënter 1968 setzen d'Wilson-Jungner-Critèrë vun der WHO d'Latte fir Bevëlkerungsscreening: d'Krankheet muss wichteg sinn, den Test akzeptabel an akkurat, et muss eng effektiv Behandlung existéieren, an d'Ökonomie muss ausgeglach sinn. D'UK National Screening Committee wennt eng formell Käschte-Effektivitéitsanalyse un, ier et en nationale Programm guttheescht — a lehnt déi meescht Virschléi of. All „KI screent jiddereen op alles"-Pitch stéisst op dës Maschinnerie a verléiert normalerweis géint d'Arithmetik hei drënner.

## D'Mathematik

De positive prädiktive Wäert (PPV) — d'Wahrscheinlechkeet, datt e positivt Resultat richteg ass — klappt bei niddreger Prävalenz zesummen:

```
PPV = (Sens × Prev) / [Sens × Prev + (1 − Spez) × (1 − Prev)]

Beispill: Sensitivitéit 90 %, Spezifizitéit 95 %, Prävalenz 0,5 %:
PPV = (0,9 × 0,005) / (0,9 × 0,005 + 0,05 × 0,995)
    = 0,0045 / (0,0045 + 0,04975) ≈ 8,3 %
```

Eelef vun zwielef Positiver sinn falsch. Voll Programmökonomie:

```
Käschte pro fonnene richtege Fall = (Screeningkäschten + Abklärungskäschten × all Positiver) / richteg Positiver
Dann: ass et dës Käschte wäert, e Fall ze fannen? (Wäert vun der méi fréier Interventioun pro Fall,
      minus Schued duerch Iwwerdiagnos — Fäll, déi fonnt ginn, déi ni wichteg gi wieren)
```

## Berechent Beispill

KI-Netzhautscreening fir eng seltene Krankheet, 100.000 Leit, Prävalenz 0,5 %, Sens 90 %, Spez 95 %, Scan 15 £, bestätegend Abklärung 400 £:

```
Richteg Positiver: 100.000 × 0,005 × 0,90 = 450
Falsch Positiver:  100.000 × 0,995 × 0,05 = 4.975
Käschten = 100.000 × 15 + (450 + 4.975) × 400 = 1,5 Mio. + 2,17 Mio. = 3,67 Mio. £
Käschte pro richtege Fall ≈ 8.156 £
```

Wann déi fréi Behandlung 20.000 £ + 1 QALY pro Fall spuert, geet de Programm einfach duerch. D'Spezifizitéit op 99 % eropsetzen (méi wéineg falsch Alarmer): d'Abklärungskäschte falen op (450 + 995) × 400 = 0,58 Mio. £, Total 2,08 Mio. £, Käschte pro Fall ≈ **4.622 £** — d'Spezifizitéit, net d'Sensitivitéit, ass wou d'Screening-Ökonomie bei niddreger Prävalenz gewonne gëtt.

## Bezuch zur Softwareentwécklung

Statesch Analys, Sécherheetsscanning an Anomalie-Erkennung si Screening-Programmer iwwer Codebasen an Telemetrie, mat enger Prävalenz richteger Defekter, déi dacks wäit ënner 1 % pro Alarm-Geleeënheet läit. Déiselwecht Mathematik erkläert Alert Fatigue: e Scanner mat 95 % Spezifizitéit op Code mat niddreger Prävalenz erdrénkt Teams a falsche Positiver, an all falsche Positiv kascht Opmierksamkeet an erodéiert Vertrauen, bis richteg Alarmer ignoréiert ginn (de klineschen Terminus ass *Screening-Schued*; den Engineering-Terminus ass *Pager-Nummheet*). D'Heelmëttelen iwwerdroe sech aus der Gesondheet: d'Spezifizitéit virun der Sensitivitéit eropsetzen, Ënnerpopulatioune mat méi héijer Prävalenz screenen (risikobaséiert Ziilgruppen ↔ nëmmen geännert Code scannen) an d'Triage-Käschte an d'Ökonomie vum Tool eraschaffen — kuckt [NNT](../number-needed-to-treat/) an [Evaluatioun vu klinescher KI](../evaluatioun-vu-klinescher-ki/). Fir d'Gréisst vun engem ganze Screening-Programm amplaz vun engem eenzegen Test kuckt [Number Needed to Screen](../number-needed-to-screen/) — wéivill Leit musse de ganze Screening-a-Behandlungs-Wee duerchlafen, fir ee Resultat ze verhënneren.

## Falen

- **Sensitivitéit/Spezifizitéit ouni Prävalenz zitéieren** — Genauegkeet ouni PPV ass Marketing.
- **Iwwerdiagnos ignoréieren**: indolent „Krankheet" ze fannen, déi ni geschued hätt, léist real Behandlungskäschten a Schied aus.
- **Lead-Time-Bias**: méi fréi Erkennung ouni geännert Outcomes bléist d'schéinbar Iwwerliewe op — kuckt [Méi fréi Interventioun](../méi-fréi-interventioun/).

## Quellen

- Wilson JMG, Jungner G. "Principles and practice of screening for disease." WHO 1968. <https://apps.who.int/iris/handle/10665/37650>
- UK National Screening Committee. <https://www.gov.uk/government/groups/uk-national-screening-committee-uk-nsc>
