# Real-Optiounen-Bewäertung

D'Real-Optiounen-Bewäertung wennt d'Logik vun der Finanzoptiounspräisfestsetzung op reell (net finanzmaart-bezunn) Investitiounsentscheedungen un — speziell op d'*Optioun, e Projet méi spéit auszebauen*, wann et geléngt, ouni dozou verflicht ze sinn. E vereinfachte Eenperioden-Binomialmodell (Cox, Ross, Rubinstein, 1979) bewäert dës Flexibilitéit direkt a mécht aus „loosst eis kleng starten a kucken" vun engem Bauchgefill eng ageprägt Zuel.

## Firwat et wichteg ass

Eng statesch NPV-Berechnung präist e Projet als Alles-oder-Näischt-Wett: finanzéieren oder net, haut an dëser Gréisst, fir ëmmer. Real Projeten — an virun allem phaséiert Rollouts vun digitaler Gesondheet — ginn selte sou gewett: e Gesondheetssystem kann e klenge Pilot finanzéieren, kucken, wat geschitt, a just weider Geld engagéieren, wann et funktionéiert. Déi Flexibilitéit huet richtege Wäert, an se ze ignoréieren ënnerbewäert phaséiert Investitiounen systematesch am Verglach zu Eenmol-Investitiounen, wat genau falsch eremgeet fir Beschaffungsprozesser, déi de sécherer ausgesinn phaséierte Virschlag belounen. D'Real-Optiounen-Bewäertung präist d'Flexibilitéit selwer, sou datt e phaséierte Virschlag fair mat enger Voll-Engagement-Alternativ kann vergléche ginn, amplaz bestrooft ze ginn, well en op enger naiver NPV-Zeil méi kleng ausgesäit.

## D'Mathematik

```
Risikoneutral Wahrscheinlechkeet vum „Up"-Zoustand:
  p = ((1 + risikofräie_Zënssaz) − Down-Faktor) / (Up-Faktor − Down-Faktor)

Ausbau-Auszuele an all Zoustand (bei Null begrenzt — Ausbau ass fakultativ):
  Auszuele_up   = max(Projetwäert × Up-Faktor   − Ausbaukäschten, 0)
  Auszuele_down = max(Projetwäert × Down-Faktor − Ausbaukäschten, 0)

Optiounswäert (diskontéiert erwaarten Auszuele):
  Optiounswäert = (p × Auszuele_up + (1 − p) × Auszuele_down) / (1 + risikofräie_Zënssaz)

Erweidert NPV = statesche_NPV + Optiounswäert
```

De Wäert vum Projet klëmmt entweder (`Up-Faktor`) oder fält (`Down-Faktor`) bis zum nächsten Entscheedungspunkt. Den Ausbau gëtt just ausgeübt, wann en an deem Zoustand profitabel ass — d'Ënnergrenz vun Null beim Auszuele mécht dat zu enger richteger *Optioun* amplaz enger Verflichtung. Fir d'Bewäertung vun der Optioun, fir eréischt Informatioun ze sammelen, amplaz vun der Optioun, méi spéit auszebauen, kuckt [Erwaarte Wäert vu perfekter Informatioun](../erwaarte-wäert-vu-perfekter-informatioun/). Fir d'Käschte vum Waarden op dës Entscheedung kuckt [Verzögerungskäschten](../verzögerungskäschten/).

## Berechent Beispill

E Pilot fir en digitale Service mat `Projetwäert = 1.000.000 £`, enger méiglecher Erhéijung op 1,5× oder engem Fall op 0,5× bis zum nächsten Entscheedungspunkt, engem risikofräie Zënssaz vun 8 % an Ausbaukäschte vun 600.000 £:

```
p = (1,08 − 0,5) / (1,5 − 0,5) = 0,58

Auszuele_up   = max(1.000.000 × 1,5 − 600.000, 0) =  900.000
Auszuele_down = max(1.000.000 × 0,5 − 600.000, 0) = max(−100.000, 0) = 0

D'Ënnergrenz ass wichteg: d'Optioun géif NET ausgeübt, wann de Mäert
enttäuscht — d'Ausbaukäschte vun 600.000 £ iwwerschreide déi 500.000 £,
déi de Projet am Down-Zoustand wäert wier.

Optiounswäert = (0,58 × 900.000 + 0,42 × 0) / 1,08
              = 522.000 / 1,08
              ≈ 483.333,33 £
```

Wann de Wäert vun der Optioun zu enger statescher NPV-Basis vun 200.000 £ derbäikënnt: erweidert NPV = 200.000 + 483.333,33 ≈ **683.333,33 £**. Nëmmen de statesche NPV vun 200.000 £ ouni dësen Optiounswäert ze mellen géif den tatsächleche Wäert vum phaséierte Projet em méi wéi d'Duebelt ënnerschätzen.

## Bezuch zur Softwareentwécklung

Dat ass déi formell Versioun vu „elo eng Minimalversioun auslidderen an d'Optioun behalen, weider ze investéieren, wann et ofhëlt" — direkt relevant fir en phaséierte Rollout vun engem digitale Gesondheetsprodukt, strukturell parallel zur Rummen vun der Sequenzéierung ënner Onsécherheet bei [Verzögerungskäschten](../verzögerungskäschten/) a [WSJF/CD3](../wsjf-a-cd3/), a komplementär zum [erwaarte Wäert vu perfekter Informatioun](../erwaarte-wäert-vu-perfekter-informatioun/) an zum [erwaarte Wäert vu Stéchprouf-Informatioun](../erwaarte-wäert-vu-stéchprouf-informatioun/) — all dräi bewäerte Flexibilitéit oder Informatioun ënner Onsécherheet, aus ënnerschiddleche Wénkelen.

## Falen

- **Risikoneutral Bewäertung ausléinen ouni d'Annahm vum gehandelte Verméigen, op där se berout**: Real-Optiounen-Modeller léine risikoneutral Wahrscheinlechkeet aus der Finanzoptiounsbewäertung aus, déi viraussetzt, datt de Basiswäert e *gehandelte* Verméigen ass — bei engem wierklech net gehandelte realen Projet ass dat eng Modelléierungs-Bequemlechkeet, kee wuertwiertleche Mäertfakt.
- **`Up-Faktor`/`Down-Faktor` als fräi Parameter behandelen**: d'Binomial-Up/Down-Inputs si selwer Annahmen, déi eng Begrënnung brauchen, keng fräi Parameteren, déi gewielt gi fir e gewënschten Resultat ze produzéieren.
- **Nëmmen den Optiounswäert mellen**: de Real-Optiounen-Wäert ass *additiv* zum statesche NPV vun engem eegestännege Projet — e heefege Feeler ass et, nëmmen den Optiounswäert ze mellen an de Basisfall ze loossen, wat de Fall iwwerschätzt, wann de statesche NPV negativ ass, an en ënnerschätzt (wéi am berechente Beispill uewen), wann de statesche NPV ganz weggelooss gëtt.

## Quellen

- Cox JC, Ross SA, Rubinstein M. "Option pricing: a simplified approach." J Financ Econ. 1979;7(3):229-63.
- Trigeorgis L. *Real Options: Managerial Flexibility and Strategy in Resource Allocation*. MIT Press. 1996.
- Driffield T, Smith PC. "A real options approach to watchful waiting: theory and an illustration." Med Decis Making. 2007;27(2):178-88 — ties real options directly to a health-economics decision context. <https://pubmed.ncbi.nlm.nih.gov/17395932/>
