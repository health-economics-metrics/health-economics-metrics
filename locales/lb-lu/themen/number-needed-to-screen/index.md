# Number Needed to Screen (NNS)

NNS ass d'Zuel vu Leit, déi gescreent musse ginn — net nëmmen behandelt — fir **een** negativen Outcome iwwer eng definéiert Follow-up-Period ze verhënneren, gegeben dem Populatiounsbaseline-Risiko an der relativer Risikoreduktioun, déi Fréierkennung a Behandlung erreechen. Et ass dem NNT säin Analogon op Screening-Programm-Niveau: NNT freet, wéi vill *behandelt* musse ginn, fir een Outcome ze verhënneren; NNS freet, wéi vill duerch de ganze *Screene-an-dann-Behandelen*-Pfad musse goen, fir do hinzekommen.

## Firwat et wichteg ass

De Rembold huet NNS 1998 speziell agefouert, fir datt Screening-Programmer op der selwechter Basis wéi Behandlungen kënne verglach ginn, well déi Schlagzeil-relativ-Risikoreduktioun vun engem Screening-Test zwou Saache verstoppt, déi d'Reduktioun vun enger Behandlung net verstoppt: dat Baseline-Risiko vun der Populatioun, déi tatsächlech zum Screening invitéiert gëtt, an d'Tatsaach, datt jiddereen, dee gescreent gëtt, d'Käschte an d'Falschpositiv-Belaaschtung vum Test dréit, net nëmmen d'Minoritéit, déi duerno profitéiert. D'Käschte-Effektivitéits-Gate vum UK National Screening Committee (kuckt [Screening-Ökonomie](../ökonomie-vum-screening/)) ass genau op dëser Ënnerscheedung opgebaut — e Screening-Programm mat enger beandrockender relativer Risikoreduktioun an enger Populatioun mat niddregem Baseline-Risiko kann trotzdem en NNS an den Dausende hunn, an do gëtt d'Programmkäschte pro verhënnerten Outcome déi richteg Fro.

## D'Mathematik

```
NNS = 1 / (Baseline_Risiko × relativ_Risikoreduktioun)

Baseline_Risiko          = Wahrscheinlechkeet vum Outcome an der gescreenter
                           Populatioun iwwer d'Follow-up-Period (0–1)
relativ_Risikoreduktioun = proportional Risikoreduktioun, erreecht duerch
                           screening-erméiglecht fréi Behandlung (0–1)

Programmkäschte pro verhënnerten Outcome = NNS × Käschte_pro_Screen
```

Direkt géint [NNT](../number-needed-to-treat/) vergläichen: NNS faltet d'Effektivitéit vum ganze Screene → Diagnostizéieren → Behandelen-Trichter an eng Zuel, wou NNT scho viraussetzt, datt de Patient diagnostizéiert ass a mat der Behandlung ufänkt.

## Berechent Beispill

Déi Zilpopulatioun vun engem Screening-Programm huet en 2-%-Baseline-Evenement-Risiko iwwer d'Studieperiod (`Baseline_Risiko = 0,02`), a Fréierkennung erreecht eng 25-%-relativ-Risikoreduktioun (`relativ_Risikoreduktioun = 0,25`):

```
NNS = 1 / (0,02 × 0,25) = 1 / 0,005 = 200

200 Leit mussen gescreent ginn, fir een Outcome ze verhënneren.

Bei 50 £ pro Screen:
Programmkäschte pro verhënnerten Outcome = 200 × 50 £ = 10.000 £
```

Dës 10.000-£-Zuel ass dat, wat géint d'Käschte vum Outcome selwer an d'QALYs, déi hie kascht hätt, ofgewei gehéiert — dee selwechte Verglach, deen [Präventiounsökonomie](../präventiounsökonomie/) fir Präventiounsprogrammer allgemeng mécht.

## Bezuch zur Softwareentwécklung

NNS ass „wéi vill Notzer, Evenementer oder Ufroen musse duerch e Detektiouns- oder Triage-Flow lafen, fir ee richtegt Positiv ze fänken, dat et wäert ass, dorop ze handelen" — direkt relevant fir alertbaséiert Monitoring- a Triage-Systemer, wou eng Zilbedingung mat niddreger Prävalenz NNS opbléist, genau wéi se de positiven prädiktiven Wäert zesummebrécht (kuckt [Screening-Ökonomie](../ökonomie-vum-screening/) a [Evaluatioun vu klinescher KI](../evaluatioun-vu-klinescher-ki/)). Eng Monitoring-Reegel, déi 200 Evenementer pro richtegem Fang muss veraarbechten, ass nëmme wäert ze lafen, wann de Fang mindestens 200 Mol d'Triage-Käschte pro Evenement wäert ass — déiselwecht Arithmetik wéi um Gesondheets-Beispill hei uewen.

## Falen

- **D'Ofhängegkeet vum Baseline-Risiko ignoréieren**: deeselwechten Screening-Test oder -Programm huet e ganz anere NNS — a Käschte-Effektivitéit — an enger Héichrisiko- géintiwwer enger Niddrigrisiko-Populatioun. Ni en NNS zitéieren, ouni d'Populatioun unzeginn, fir déi en berechent gouf.
- **De falschen Nenner zielen**: NNS zielt Leit, déi *gescreent* goufen, net Leit, déi positiv testen oder mat der Behandlung ufänken — et enthält scho d'Effektivitéit vum ganzen Trichter, also däerf et ni mat enger Metrik verglach ginn, déi nëmmen iwwer Positiven gezielt ass.
- **Iwwer Follow-up-Perioden vergläichen**: eng méi kuerz Follow-up-Period bléist NNS allgemeng op, well manner Evenementer am Fënster observéiert ginn. NNS-Zuele si nëmme vergläichbar, wa se iwwer déiselwecht Follow-up-Dauer berechent goufen.

## Quellen

- Rembold CM. "Number needed to screen: development of a statistic for disease screening." BMJ. 1998;317(7154):307-12.
