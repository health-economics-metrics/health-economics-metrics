# WSJF a CD3

CD3 (Cost of Delay Divided by Duration) a WSJF (Weighted Shortest Job First) si Prioritéitsregelen, déi Aarbecht no **Wäertdicht** plangen: wéi vill Verzögerungskäschte pro Eenheet vun der knapper verbrauchter Kapazitéit ewechgeholl ginn. Bei gedeelter, fixer Kapazitéit ass héchst-CD3-éischt déi mathematesch optimal Sequenz, fir déi gesamt Verzögerungskäschten ze minimiséieren.

## Firwat et wichteg ass

All Backlog ass e Rationéierungsproblem: vill wäertvoll Elementer, eng Pipeline. D'Gesondheetsökonomie huet dat selwecht Problem fir Gesondheetsbudgeten mat Käschte-Effektivitéits-Ranglëschte geléist — Interventioune no Gesondheetsgewënn pro Pond ranken, d'Lëscht erof finanzéieren, bis de Budget erschöpft ass. CD3 ass déiselwecht Logik fir Liwwerkapazitéit: Notzen pro Eenheet vun der *begrenzter Ressource*, a Rangfolleg finanzéiert. D'Sequenzéierung richteg ze maachen ass fräit Geld — selwecht Aarbecht, selwecht Kapazitéit, manner gesamt Verzögerungskäschten.

## D'Mathematik

```
CD3  = Cost of Delay (£/Woch) / Dauer (Wochen)      — richteg Eenheeten (Black Swan Farming)

WSJF = (Notzer-Business-Wäert + Zäitkritikalitéit + Risikoreduktioun/
        Opportunitéits-Erméiglechung) / Jobgréisst   — dem SAFe säi Proxy op relativer
                                                       Skala, modifizéiert Fibonacci-Scoren
```

CD3 mat echter Währung ([Verzögerungskäschten](../verzögerungskäschten/)) ass strikt méi staark wéi dem WSJF seng eenheetslos Punkten — WSJF ass zu CD3, wat Multikriterien-Scoring zur vollstänneger [Käschte-Notzwäert-Analyse](../käschte-notzwäert-analyse/) ass: benotzbar, wann Monetiséierung onpraktesch ass, manipuléierbar, wann d'Scoren keen Anker hunn.

## Berechent Beispill

Dräi Features, ee Team:

```
Feature   CoD (£/Wo.)  Dauer      CD3
A         30.000       10 Wo.     3.000
B         12.000       2 Wo.      6.000
C         5.000        1 Wo.      5.000
```

CD3-Reiefolleg: B, C, A. Gesamt Verzögerungskäschte géint „gréisste CoD éischt" (A, B, C) vergläichen:

```
CD3-Reiefolleg  (B,C,A): A waart 3 Wo., C waart 2 → 30k×3 + 5k×2  = 100.000 £ Verzögerungskäschten
CoD-Reiefolleg  (A,B,C): B waart 10, C waart 12   → 12k×10 + 5k×12 = 180.000 £
```

Selwecht Features, selwecht Team — d'Sequenzéierung eleng spuert 80.000 £. Déi Intuitioun: kleng, dringend Elementer ginn éischt, well se hir Verzögerungskäschte bëlleg fräisetzen; dat grousst Element verléiert wéineg, wann et kuerz waart.

## Bezuch zur Softwareentwécklung

Fir Healthcare-Software-Portfolioen d'CoD an den Eenheeten ausdrécken, déi dëse Repo léiert: QALYs/Woch × Schwellewäert + operationell £/Woch, a de Backlog gëtt direkt kommensurabel mat deem, wéi d'Gesondheetssystem alles anert ranked, wat et kaaft. Zwou Praxisnotizen: (1) Dauer heescht *Kalennerzäit, déi d'Contrainte besetzt*, net Opwand — en Element mat 2 Wochen Laaftzäit, dat 2 Deeg vum Flaschenhals-Team brauch, ass méi bëlleg, wéi et ausgesäit (kuckt [Optiméierung vun nodelege Ressourcen](../optiméierung-vun-nodelege-ressourcen/)); (2) Spideeler féieren déiselwecht Regel implizit aus, wann se Operatiounssaal-Lëschten no dringlechkeetsgewiichtegem Duerchsaz uerdnen — klinesch Prioritéitskategorien sinn schwéiergradgewiichtegt CD3 (kuckt [QALY-Defizit a Schwéiergrad-Modifikatoren](../qaly-defizit-a-schwéiergrad-modifikatoren/)).

## Falen

- **WSJF-Score-Theater**: eenheetslos Fibonacci-Debatte konvergéieren op deen, deen am haardsten argumentéiert; op d'mannst d'Top-Elementer vum Backlog an der richteger CoD verankeren.
- **Dauer-Manipulatioun**: Elementer opdeelen, fir de CD3-Rang opzeblosen — an der Rei, wann d'Deeler onofhängeg Wäert liwweren, Bedrug, wa se et net maachen.
- **Dringlechkeetsprofiler ignoréieren**: Deadline-geformt CoD (reglementaresch Datumen) brécht d'Annahm vun enger stännegger Rate; déi no Datumsmachbarkeet plangen, dann de Rescht no CD3.
- **Ëmranking-Churn**: CD3 ass fir Sequenzéierungsentscheedungen beim Moment vum Engagement, net fir deeglecht Ëmmischen vun Aarbecht, déi am Gaang ass (kuckt [Flow-Metriken](../flow-metriken/) zu WIP).

## Quellen

- Black Swan Farming, CD3 and WSJF. <https://blackswanfarming.com/wsjf-weighted-shortest-job-first/>
- SAFe, WSJF. <https://framework.scaledagile.com/wsjf>
- Reinertsen DG, *The Principles of Product Development Flow*.
