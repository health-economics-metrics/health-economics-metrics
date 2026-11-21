# Time-Trade-Off-(TTO-)Utilitéits-Erhiewung

TTO ass eng Standardmethod, fir e Gesondheetszoustands-Utilitéitswäert direkt vun engem Respondent z'erhiewen, amplaz een z'erfannen. Et ass eng vun den Erhiewungsmethoden — nieft dem Standard Gamble an Discrete-Choice-Experimenter —, déi d'Wäertsätz hannert Instrumenter wéi [EQ-5D](../eq-5d/) produzéieren, an doduerch hannert de meeschte [QALY](../qualitéitsbereenegt-liewensjoer/)-Berechnunge weiderhin.

## Firwat et wichteg ass

All Utilitéitsgewiicht, dat an eng QALY-Berechnung fléisst, huet missen vun iergendwou kommen. TTO ass wéi: fir en Zoustand, dee besser wéi den Doud ugesi gëtt, gëtt e Respondent gefrot, wéi vill Joer `X` a voller Gesondheet hie fir gläichwäerteg zu `T` Joer am beanträchtegten Zoustand hält (`X < T`); d'Utilitéit ass `X / T`. Fir en Zoustand, dee verschidde Respondente fir méi schlëmm wéi den Doud halen, brécht déi Standardformel zesummen (si kann Utilitéiten ënner Null net propper duerstellen), dofir gëtt amplaz en erweidert TTO ugewannt. E Softwareingenieur oder Analyst, deen e Utilitéitsgewiicht als gegeben Input behandelt, ouni ze wëssen, datt et en validéierte Erhiewungsprotokoll gebraucht huet, fir et ze produzéieren, ass e Schrëtt ewech vun enger Zuel, déi hie net verdeedege kann, wann et erausgefuerdert gëtt.

## D'Mathematik

```
Standard-TTO (Zoustand besser wéi den Doud):
  Utilitéit = Zäit_a_voller_Gesondheet / Zäit_am_beanträchtegten_Zoustand

Erweidert TTO (Zoustand méi schlëmm wéi den Doud):
  Utilitéit = -fir_Doud_getauschte_Zäit / (Gesamtdauer - fir_Doud_getauschte_Zäit)
```

`Zäit_a_voller_Gesondheet` / `Zäit_am_beanträchtegten_Zoustand` — Joer `X` a voller Gesondheet, déi als gläichwäerteg zu `T` Joer am beanträchtegten Zoustand geuerteelt ginn. `fir_Doud_getauschte_Zäit` / `Gesamtdauer` — an der Formuléierung fir méi schlëmm wéi den Doud: Joer `a` vun enger Restliewenszäit vun `T` Joer, déi de Respondent géif fir den direkten Doud tauschen, a bevirzugt `T − a` Joer a voller Gesondheet, gefollegt vum Doud, géint `T` Joer am Zoustand méi schlëmm wéi den Doud. D'Resultat ass negativ, verankert esou, datt Doud = 0.

## Berechent Beispill

**Standard**: e Respondent ass 10 Joer an engem beanträchtegten Zoustand an ass indifferent bei 7 Joer a voller Gesondheet: Utilitéit = 7 / 10 = **0,7**.

**Méi schlëmm wéi den Doud**: iwwer eng Restliewenszäit vun 10 Joer géif de Respondent 2 Joer fir den direkten Doud tauschen — hie bevirzugt 8 Joer a voller Gesondheet, gefollegt vum Doud, géint 10 Joer am Zoustand méi schlëmm wéi den Doud: Utilitéit = −2 / (10 − 2) = −2 / 8 = **−0,25**.

## Bezuch zur Softwareentwécklung

Dee selwechte Punkt, op deen eng DevEx- oder Engagement-Ëmfro stéisst, wann se d'Leit freet, eppes op enger net nogefroter 0–10-Skala ze bewäerten, gëllt hei ëmgekéiert: TTO gëtt et genau dofir, well „einfach d'Leit froen, et ze bewäerten" eleng keng validéiert Erhiewungsmethod ass. Ier een en zesummegesate Index — e DevEx-Score, en Engagement-Index, eng Burnout-Skala — op eng selwer bewäert Zuel baut, froen, wat se erhuewen huet a ob dës Method validéiert gouf, déiselwecht Fro, déi Gesondheetsökonomen un e Utilitéitsgewiicht stellen, ier et an e QALY geet.

## Falen

- **Generaliséierung vum Eenzelwäert**: TTO-Wäerter ginn vun enger *Stéchprouf* vun der Allgemengheet (oder vu Patienten) erhuewen, net vun der eenzeler Persoun, iwwer deren Versuergung entscheet gëtt — den TTO-Wäert vun engem Respondent ze benotzen, wéi wann e generaliséiert, ass e Stéchprouffeeler.
- **Falsch Formuléierung fir den Zoustand**: déi Standard-TTO-Formel hëlt un, datt den Zoustand eendeiteg besser wéi den Doud ass; se op e Zoustand unzewenden, dee verschidde Respondente fir méi schlëmm wéi den Doud halen, ouni op déi erweidert Formuléierung ze wiesselen, produzéiert roueg eng falsch (positiv) Utilitéit.
- **Net vergläichbar Dauer**: TTO-Wäerter, déi mat ënnerschiddleche Restliewensdauere `T` fir de Vergläich mat méi schlëmm wéi den Doud erhuewe goufen, sinn net direkt vergläichbar, ouni ze préifen, ob d'Studiendesign `T` konstant gehalen huet.

## Quellen

- Torrance GW. "Social preferences for health states: an empirical evaluation of three measurement techniques." Socioecon Plan Sci. 1976;10(3):129-36.
- Patrick DL, Starks HE, Cain KC, Uhlmann RF, Pearlman RA. "Measuring preferences for health states worse than death." Med Decis Making. 1994;14(1):9-18.
