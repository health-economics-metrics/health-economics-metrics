# Number Needed to Treat (NNT)

NNT ass d'Zuel vu Patienten, déi eng Interventioun kréie mussen, fir dass **een** zousätzleche Patient iwwer en uginnenen Zäitraum profitéiert. Et wandelt prozentual Risikoreduktioune — déi irreféieren — an Effort-pro-Notzen-Eenheeten ëm, iwwer déi jiddereen kann nodenken.

## Firwat et wichteg ass

„Reduzéiert Häerzinfarkten em 25 %!" kléngt entscheedend. Wann d'Baseline-Risiko 4 % iwwer 5 Joer ass, ass déi absolut Reduktioun 1 Prozentpunkt, also **mussen 100 Leit d'Medikament 5 Joer huelen, fir dass 1 profitéiert** — an all 100 droen d'Käschten an d'Niewewierkungen. NNT ass d'Géigegëft géint Relativrisiko-Marketing, dofir féiert d'evidenzbaséiert Medizin domat. Statine fir primär Präventioun: NNT ≈ 50–100 iwwer 5 Joer pro vermeidenen Häerzinfarkt. Säi Spigel, **NNH** (Number Needed to Harm), zielt, wéi vill behandelt musse ginn pro geschueden Persoun.

## D'Mathematik

```
ARR = Evenementquote Kontroll − Evenementquote Behandlung   (absolut Risikoreduktioun)
NNT = 1 / ARR

NNH = 1 / (Schuedensquote_Behandlung − Schuedensquote_Kontroll)

Ökonomesch Bréck:
Käschte pro vermeidenen Evenement = NNT × Käschte pro Behandlungskur
```

Ëmmer den Zäitraum an d'Baseline-Populatioun uginn — NNT ass ouni béid sënnlos.

## Berechent Beispill

E Sturz-Prädiktiounssystem an engem Spidol flaggt Héichrisiko-Patienten fir Interventioun (Bettsensoren, Review, Iwwerwaachung). Studie: Stierz mat Verletzung falen vun 3,2 % op 2,4 % vun den Admissiounen.

```
ARR = 0,8 Prozentpunkten → NNT = 1/0,008 = 125
   (125 Patiente musse de Interventiounsbündel kréien, fir 1 verletzende Sturz ze verhënneren)

Interventiounskäschten ≈ 40 £/Patient → Käschte pro vermeidene Sturz = 125 × 40 = 5.000 £
Käschte vun engem verletzende Stationärsturz (zousätzlechen Openthalt, Imaging, Prozess) ≈ 12.000 £
Netto: Präventioun bezilt sech ~2,4:1 — an de QALY-Gewënn kënnt dobäi.
```

Bemierkt, wéi NNT d'Behaaptung éierlech hält: „reduzéiert Stierz em 25 %" an „verhënnert ee Sturz pro 125 behandelt Patienten" sinn dat selwecht Resultat, anescht iwwerzeegend.

## Bezuch zur Softwareentwécklung

NNT ass déi richteg Eenheet fir all Gate oder Kontroll, déi op vill Items handelt, fir wéineg ze fänken: **„Zuel vu PRs, déi duerch d'KI-Review-Gate musse goen, fir een Produktiounsdefekt ze fänken."** Wann d'Gate 400 PRs pro richtegem Fang iwwerpréift (NNT = 400) bei 4 Minutten Entwéckler-Opmierksamkeet all, kascht ee Fang ~27 Entwéckler-Stonnen — dat elo mat de Incident-Käschten vergläichen, déi et verhënnert. NNH mapt op Falschpositiver: wéi vill PRs pro *falsch* Flag, a wat kascht jidderee u Opmierksamkeet a Vertrauen? Screening-Stil-Tooling (Linter, Sécherheetsscanner, Anomalie-Detektioun) soll mat NNT/NNH-Arithmetik ausgeliwwert ginn — kuckt [Screening-Ökonomie](../ökonomie-vum-screening/), firwat niddreg Prävalenz dës Zuele brutal mécht. [Number Needed to Screen](../number-needed-to-screen/) ass déi analog Zuel eng Stuf méi héich, fir e ganze Screene-dann-Behandelen-Programm amplaz eng Behandlung eleng.

## Falen

- **Keen Zäitraum**: „NNT = 50" heescht näischt; „NNT = 50 iwwer 5 Joer" ass eng Behaaptung.
- **Baseline-Risiko-Transplantatioun**: NNT, berechent an enger Héichrisiko-Studienpopulatioun, bréckelt an enger Niddrigrisiko-Asazpopulatioun zesummen.
- **NNH ignoréieren** — eng Gate mat NNT 400 an NNH 3 ass e Nuisance-Generator, kee Sécherheetssystem.

## Quellen

- Laupacis A, Sackett DL, Roberts RS. "An assessment of clinically useful measures of the consequences of treatment." NEJM 1988. <https://pubmed.ncbi.nlm.nih.gov/3374545/>
- TheNNT explained. <https://www.thennt.com/thennt-explained/>
